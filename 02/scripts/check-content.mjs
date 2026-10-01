/* Content checks: run automatically at the start of  node scripts/build.mjs  (or alone:  node scripts/check-content.mjs).
   ERRORS stop the build; NOTES are printed but allowed. These are the mistakes a screen test cannot see.
   Written after the 2026-09-30 audit (Drive doc 13, QA gate). Add a check here whenever a new kind of bug is found. */
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

const HAN = /\p{Script=Han}/u;
const len = (s) => Array.from(s || '').length;
const hanOnly = (s) => Array.from(s || '').filter((c) => HAN.test(c));

export function check(C) {
  const errors = [], notes = [];
  const err = (m) => errors.push(m), note = (m) => notes.push(m);
  const lessonIds = new Set((C.lessons || []).map((L) => L.id));

  const toneOk = (py) => py.trim().split(/\s+/).every((x) => /^[a-zü]+[1-5]$/i.test(x) || /^[a-zü]+r[1-5]$/i.test(x));
  const sylCount = (py) => py.trim().split(/\s+/).length;

  // 1) vocabulary
  for (const L of C.lessons || []) {
    const seen = new Set();
    for (const w of [...(L.characters || []), ...(L.words || [])]) {
      const tag = `lesson ${L.id} "${w.s}"`;
      if (!w.s || !w.t || !w.py || !w.en) { err(`${tag}: missing s, t, py or en`); continue; }
      if (len(w.s) !== len(w.t)) err(`${tag}: simplified and traditional differ in length`);
      if (!toneOk(w.py)) err(`${tag}: pinyin "${w.py}" is not tone-numbered syllables`);
      else if (sylCount(w.py) !== hanOnly(w.s).length && !/儿/.test(w.s)) note(`${tag}: ${hanOnly(w.s).length} characters but ${sylCount(w.py)} syllables`);
      if (seen.has(w.s)) err(`${tag}: listed twice in the same lesson`);
      seen.add(w.s);
    }
  }

  // 2) units: readings, questions
  for (const u of C.units || []) {
    if (!lessonIds.has(u.lessonId)) err(`unit ${u.id}: lessonId "${u.lessonId}" matches no lesson`);
    const allS = [], allT = [];
    for (const [sec, src] of [['reading', u.reading && u.reading.paragraphs], ['background', u.background && u.background.paragraphs]]) {
      (src || []).forEach((p, i) => {
        if (p.sentences) {
          if (p.sentences.map((x) => x.s).join('') !== p.s) err(`unit ${u.id} ${sec} paragraph ${i}: sentences do not add up to the paragraph (simplified)`);
          if (p.sentences.map((x) => x.t).join('') !== p.t) err(`unit ${u.id} ${sec} paragraph ${i}: sentences do not add up to the paragraph (traditional)`);
          p.sentences.forEach((x, k) => {
            if (len(x.s) !== len(x.t)) err(`unit ${u.id} ${sec} ${i}.${k}: simplified and traditional differ in length (phrase highlights would drift)`);
            if (!x.en) err(`unit ${u.id} ${sec} ${i}.${k}: no English`);
            if (sec === 'reading') { allS.push(x.s); allT.push(x.t); }
          });
        } else if (sec === 'reading') note(`unit ${u.id} ${sec} paragraph ${i}: whole-paragraph translation (no sentence tap)`);
      });
    }
    (u.cfu || []).forEach((q, i) => {
      if (!q.choices || q.choices.length < 2) err(`unit ${u.id} question ${i}: fewer than 2 choices`);
      else if (!(Number.isInteger(q.answer) && q.answer >= 0 && q.answer < q.choices.length)) err(`unit ${u.id} question ${i}: answer index out of range`);
    });
    (u.grammar || []).forEach((g) => (g.examples || []).forEach((e) => { if (!e.py || !e.en) err(`unit ${u.id} grammar "${g.point}": example without pinyin or English`); }));
    // 3) expressions must be findable in both scripts, or the tint silently never shows
    for (const e of ((C.expressions || {})[u.id]) || []) {
      if (!allS.some((t) => t.includes(e.s))) err(`expression "${e.s}" (${u.id}): not found in the reading (simplified)`);
      if (!allT.some((t) => t.includes(e.t))) err(`expression "${e.t}" (${u.id}): not found in the reading (traditional)`);
      if (!e.py || !e.mean || !e.lit || !e.use) err(`expression "${e.s}": missing pinyin, literal, meaning or usage`);
    }
  }
  for (const id of Object.keys(C.expressions || {})) if (!(C.units || []).some((u) => u.id === id)) err(`expressions for unknown unit "${id}"`);

  // 4) game data
  for (const r of C.collGame || []) {
    if (!r.rights || !r.rights.length) err(`collGame ${r.id}: no right-hand words`);
    for (const x of [r.left, ...(r.rights || [])]) if (len(x.s) !== len(x.t)) err(`collGame ${r.id} "${x.s}": simplified and traditional differ in length`);
    if (!lessonIds.has(r.chapter)) err(`collGame ${r.id}: chapter "${r.chapter}" matches no lesson`);
  }
  for (const f of C.fill || []) {
    if (len(f.s) !== len(f.t)) err(`fill "${f.s}": simplified and traditional differ in length`);
    for (const [a, n] of f.b || []) if (a < 0 || a + n > len(f.s)) err(`fill "${f.s}": blank [${a},${n}] is outside the sentence`);
  }
  for (const s of C.sentences || []) {
    if (s.chunks.length !== s.tchunks.length) err(`sentence "${s.chunks.join('')}": chunk counts differ`);
    else if (s.chunks.some((c, i) => len(c) !== len(s.tchunks[i]))) err(`sentence "${s.chunks.join('')}": a chunk differs in length between scripts`);
  }
  for (const u of C.units || []) for (const w of (u.warmup && u.warmup.weather) || []) if (!w.s || !w.t || !w.py || !w.icon) err(`weather item "${w.s}": missing a field`);

  // Oscar's standing rule: nothing public mentions AI, Claude or Alfonso (app text is public)
  const banned = /\b(claude|alfonso|anthropic|chatgpt|openai|ai-generated|ai assistant)\b/i;
  const hit = JSON.stringify(C).match(banned);
  if (hit) err(`content mentions "${hit[0]}" — app text is public and must never mention AI, Claude or Alfonso`);

  return { errors, notes };
}

// run alone
if (process.argv[1] && fileURLToPath(import.meta.url) === path.resolve(process.argv[1])) {
  const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
  const sb = { window: {} }; vm.createContext(sb);
  vm.runInContext(fs.readFileSync(path.join(root, 'content.js'), 'utf8'), sb);
  const { errors, notes } = check(sb.window.CONTENT);
  notes.forEach((n) => console.log('  note: ' + n));
  if (errors.length) { console.error('\nCONTENT ERRORS (' + errors.length + '):\n - ' + errors.join('\n - ')); process.exit(1); }
  console.log('content checks passed (' + notes.length + ' notes)');
}
