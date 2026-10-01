// Run after editing content.js:   node scripts/build.mjs
// 1) fetches stroke-order data for every character used (simplified + traditional)
// 2) bakes it into strokes.js so the app never needs the internet
// 3) stamps a new version into sw.js so iPads pick up the update
import fs from 'node:fs';
import vm from 'node:vm';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';
import { check as checkContent } from './check-content.mjs';
import { spawnSync } from 'node:child_process';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const cacheDir = path.join(root, 'scripts', '.cache');
fs.mkdirSync(cacheDir, { recursive: true });

const sandbox = { window: {} };
vm.createContext(sandbox);
vm.runInContext(fs.readFileSync(path.join(root, 'content.js'), 'utf8'), sandbox);
const C = sandbox.window.CONTENT;

// content checks first: mistakes a screen test cannot see (Drive doc 13, QA gate)
{
  const { errors, notes } = checkContent(C);
  notes.forEach((n) => console.log('  note: ' + n));
  if (errors.length) { console.error('\nCONTENT ERRORS (' + errors.length + ') - fix these first:\n - ' + errors.join('\n - ')); process.exit(1); }
  console.log('content checks passed');
  // the published files must not mention AI either (Oscar's discretion rule)
  const bad = [];
  for (const f of fs.readdirSync(root)) {
    if (!/\.(js|html|md|json|webmanifest|txt|css)$/.test(f) || f === 'strokes.js' || f.includes('.bak')) continue;
    const t = fs.readFileSync(path.join(root, f), 'utf8');
    if (/\b(claude|alfonso|anthropic|chatgpt|openai)\b/i.test(t)) bad.push(f);
  }
  if (bad.length) { console.error('\nDISCRETION ERROR: AI/Claude/Alfonso mentioned in ' + bad.join(', ')); process.exit(1); }
}

// Traditional twins for every display string that contains Chinese (so Study text, questions and games switch script too).
// Needs python3 + opencc (see Drive doc 14). Strings under keys s, t, py, chunks, tchunks are skipped: those carry their own forms.
{
  const SKIP = new Set(['s', 't', 'py', 'alt', 'chunks', 'tchunks', 'id', 'lessonId', 'icon', 'sticker', 'accent', 'chapter', 'type']);
  const strings = new Set();
  (function walk(o, k) {
    if (typeof o === 'string') { if (/\p{Script=Han}/u.test(o) && !SKIP.has(k)) strings.add(o); }
    else if (Array.isArray(o)) o.forEach((x) => walk(x, k));
    else if (o && typeof o === 'object') for (const [kk, v] of Object.entries(o)) walk(v, kk);
  })(C);
  const tmp = path.join(cacheDir, 'trad-in.json');
  fs.writeFileSync(tmp, JSON.stringify([...strings]));
  const r = spawnSync('python3', [path.join(root, 'scripts', 'make-trad.py'), tmp, path.join(root, 'trad.js')], { encoding: 'utf8' });
  if (r.status !== 0) { console.error('\nTRADITIONAL STEP FAILED (needs python3 + opencc):\n' + r.stderr); process.exit(1); }
  console.log(r.stdout.trim());
}

const SIMP = (c) => `https://cdn.jsdelivr.net/npm/hanzi-writer-data@2/${encodeURIComponent(c)}.json`;
const TRAD = (c) => `https://cdn.jsdelivr.net/npm/hanzi-writer-data-acjk@1.0.0/animCJK/ZhHant/${encodeURIComponent(c)}.json`;

const need = new Map(); // char -> 's' | 't'   (which dataset it must come from)
const problems = [];
function addPair(s, t, label, py) {
  const S = [...s], T = [...t];
  if (S.length !== T.length) problems.push(`${label}: simplified "${s}" and traditional "${t}" differ in length`);
  S.forEach((sc, i) => {
    if (!/\p{Script=Han}/u.test(sc)) return;   // punctuation (， ！ etc.) has no stroke data
    need.set(sc, need.get(sc) || 's');
    const tc = T[i];
    if (tc && tc !== sc && !need.has(tc)) need.set(tc, 't');
  });
  if (py) {
    const n = py.trim().split(/\s+/).length;
    if (n !== S.length) console.warn(`  note: ${label} has ${S.length} characters but ${n} syllables (fine for things like 画画儿)`);
  }
}
for (const L of C.lessons) {
  addPair(L.title.s, L.title.t, `title of lesson ${L.number}`);
  for (const it of [...L.characters, ...L.words]) addPair(it.s, it.t, `${L.id} ${it.s}`, it.py);
  for (const c of L.characters) if ([...c.s].length !== 1) problems.push(`${L.id}: "${c.s}" is in characters but is not a single character`);
}
for (const w of (C.lab && C.lab.words) || []) addPair(w.s, w.t, `lab ${w.s}`, w.py);
if (C.lab && C.lab.title) addPair(C.lab.title.s, C.lab.title.t, 'lab title');
for (const st of C.sentences || []) { if (st.chunks.length !== st.tchunks.length) problems.push('sentence chunk count mismatch: ' + st.chunks.join('')); st.chunks.forEach((c, i) => addPair(c, st.tchunks[i] || c, 'sentence ' + st.chunks.join(''))); }
for (const f of C.fill || []) addPair(f.s, f.t, 'fill ' + f.s, f.py);
for (const r of C.collGame || []) { addPair(r.left.s, r.left.t, 'colloc ' + r.left.s); for (const x of r.rights) addPair(x.s, x.t, 'colloc ' + x.s); }
for (const u of C.units || []) for (const w of ((u.warmup && u.warmup.weather) || [])) addPair(w.s, w.t, 'weather ' + w.s, w.py);
for (const p of C.pics || []) addPair(p.s, p.t, 'pic ' + p.s, p.py);
addPair(C.appTitle.s, C.appTitle.t, 'app title');
if (problems.length) { console.error('\nProblems:\n - ' + problems.join('\n - ')); process.exit(1); }

async function getData(ch, kind) {
  const f = path.join(cacheDir, `${kind}-${ch}.json`);
  if (fs.existsSync(f)) return JSON.parse(fs.readFileSync(f, 'utf8'));
  const first = kind === 's' ? SIMP(ch) : TRAD(ch);
  const second = kind === 's' ? TRAD(ch) : SIMP(ch);
  let res = await fetch(first);
  if (!res.ok) res = await fetch(second);   // some traditional-only glyphs live in the main dataset instead of the ACJK one, and vice versa
  if (!res.ok) throw new Error(`No stroke data for "${ch}" (HTTP ${res.status}) in either dataset`);
  const json = await res.json();
  fs.writeFileSync(f, JSON.stringify(json));
  return json;
}

const out = {};
for (const [ch, kind] of need) {
  const d = await getData(ch, kind);
  out[ch] = { strokes: d.strokes, medians: d.medians, ...(d.radStrokes ? { radStrokes: d.radStrokes } : {}) };
}
fs.writeFileSync(path.join(root, 'strokes.js'), 'window.STROKES = ' + JSON.stringify(out) + ';\n');
console.log(`strokes.js: ${Object.keys(out).length} characters (${[...need.values()].filter((k) => k === 't').length} traditional-only)`);

// stamp a version so devices refresh their offline copy
const audioFiles = fs.existsSync(path.join(root, 'audio')) ? fs.readdirSync(path.join(root, 'audio')).filter((f) => f.endsWith('.m4a')).sort().map((f) => 'audio/' + f) : [];
const core = ['index.html', 'styles.css', 'app.js', 'fx.js', 'garden.js', 'games.js', 'games2.js', 'games3.js', 'fill.js', 'unit.js', 'phrases.js', 'words.js', 'content.js', 'trad.js', 'strokes.js', 'audio-manifest.js', 'manifest.webmanifest', 'vendor/hanzi-writer.min.js'];
const files = [...core, ...audioFiles];
const h = crypto.createHash('sha1');
for (const f of files) h.update(fs.readFileSync(path.join(root, f)));
const version = h.digest('hex').slice(0, 10);
const swPath = path.join(root, 'sw.js');
const assets = ['./', ...core.map((f) => './' + f), './icons/icon-192.png', './icons/icon-512.png', './icons/apple-touch-icon.png', ...audioFiles.map((f) => './' + f)];
let sw = fs.readFileSync(swPath, 'utf8');
sw = sw.replace(/const VERSION = '[^']*';/, `const VERSION = '${version}';`);
sw = sw.replace(/const ASSETS = \[[\s\S]*?\];/, 'const ASSETS = [\n' + assets.map((a) => `  '${a}'`).join(',\n') + '\n];');
fs.writeFileSync(swPath, sw);
console.log(`offline cache: ${assets.length} files (${audioFiles.length} audio clips)`);
console.log('service worker version:', version);
