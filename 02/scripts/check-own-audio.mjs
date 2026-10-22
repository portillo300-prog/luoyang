// Checks that the story clips line up with what the app shows. Run: node scripts/check-own-audio.mjs   (exit 1 on any problem)
import fs from 'fs'; import path from 'path'; import vm from 'vm'; import { fileURLToPath } from 'url';
const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const win = {}; win.window = win; const ctx = vm.createContext(win);
for (const f of ['content.js', 'audio-own.js', 'own-voice.js']) vm.runInContext(fs.readFileSync(path.join(root, f), 'utf8'), ctx, { filename: f });
const C = win.CONTENT, V = win.OWNV, OWN = win.AUDIO_OWN;
const rows = JSON.parse(fs.readFileSync(path.join(root, '..', '..', '..', 'wandan-audio', 'rows.json'), 'utf8'));
const zhOf = Object.fromEntries(rows.map((r) => [r.id, r.zh]));
const bad = [], used = new Set(); let n = 0; const miss = (m) => bad.push(m);
// 1. every clip file exists and is not tiny
for (const [id, e] of Object.entries(OWN.byId)) { const p = path.join(root, e.f); if (!fs.existsSync(p)) miss('file missing: ' + id); else if (fs.statSync(p).size < 3000) miss('file suspiciously small: ' + id); }
// 2. each chapter: title + every reading sentence has a clip whose sheet text equals the text the app shows
for (const u of C.units) {
  const t = V.titleId(u.id);
  if (!V.file(t)) miss('no title clip for ' + u.id); else { used.add(t); n++; if (V.norm(zhOf[t]) !== V.norm(u.title.s)) miss(`title text differs ${t}: sheet "${zhOf[t]}" vs app "${u.title.s}"`); }
  let count = 0;
  u.reading.paragraphs.forEach((p, pi) => (p.sentences || []).forEach((s, k) => {
    count++; const id = V.sentId(u, pi, k);
    if (!V.file(id)) return miss(`no clip for ${u.id} paragraph ${pi + 1} sentence ${k + 1} (${id})`);
    used.add(id); n++;
    if (V.norm(zhOf[id]) !== V.norm(s.s)) miss(`sentence text differs ${id}: sheet "${zhOf[id]}" vs app "${s.s}"`);
  }));
  const sheet = rows.filter((r) => r.id.startsWith('W' + V.chap(u.id) + '-S')).length;
  if (sheet !== count) miss(`${u.id}: sheet has ${sheet} sentences, app has ${count}`);
}
// 3. no clip is unused
for (const id of Object.keys(OWN.byId)) if (!used.has(id)) miss('clip not used anywhere in the app: ' + id);
console.log(`${Object.keys(OWN.byId).length} clips; ${n} hookups checked`);
if (bad.length) { console.log('PROBLEMS (' + bad.length + '):\n' + bad.join('\n')); process.exit(1); }
console.log('OK: every clip matches the text the app shows, and every clip is used');
