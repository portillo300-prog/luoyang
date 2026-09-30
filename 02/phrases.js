/* Phrases: highlight-and-save, "My Phrases", the Pleco button, and the soft-tinted expressions ("expert eye") inside the readings.
   Everything is stored on this device only (store 'phrases'). */
(window.HANZI_MODS = window.HANZI_MODS || []).push(function (A) {
  'use strict';
  var $ = A.$, app = A.app, store = A.store, C = window.CONTENT, EXPR = C.expressions || {};

  /* ---------- storage ---------- */
  function list() { return store.get('phrases', []); }
  function put(l) { store.set('phrases', l); }
  function exprOn() { return store.get('exprOn', true); }
  function isT() { return A.script() === 't'; }
  function pick(o) { return isT() ? (o.t || o.s) : o.s; }
  function unitById(id) { return (C.units || []).filter(function (u) { return u.id === id; })[0]; }
  function sentenceOf(uid, sec, p, k) {
    var u = unitById(uid); if (!u) return null;
    var src = sec === 'b' ? (u.background && u.background.paragraphs) : (u.reading && u.reading.paragraphs);
    var para = src && src[p]; return para && para.sentences && para.sentences[k];
  }
  function chapterNo(uid) { var L = A.allLessons.filter(function (x) { return x.id === uid; })[0]; return L ? L.number : ''; }
  function toast(msg) {
    var t = document.getElementById('ptoast');
    if (!t) { t = document.createElement('div'); t.id = 'ptoast'; t.className = 'ptoast'; document.body.appendChild(t); }
    t.textContent = msg; t.classList.add('on');
    clearTimeout(toast.tm); toast.tm = setTimeout(function () { t.classList.remove('on'); }, 2200);
  }
  function copy(text) { try { return navigator.clipboard.writeText(text); } catch (e) { return Promise.resolve(); } }
  function openPleco(text) {
    copy(text);   // also on the clipboard, so Pleco's clipboard reader can pick it up if the link is blocked
    toast('Opening Pleco… (copied too)');
    setTimeout(function () { window.location.href = 'plecoapi://x-callback-url/s?q=' + encodeURIComponent(text); }, 120);
  }
  function vocabFor(s) {
    var hit = null;
    A.allLessons.forEach(function (L) { (L.words || []).forEach(function (w) { if (!hit && w.s === s) hit = w; }); });
    return hit;
  }

  /* ---------- drawing the marks inside a sentence ---------- */
  A.markup = function (uid, sec, pi, si, x) {
    var text = pick(x), chars = Array.from(text), n = chars.length, hl = [], xp = [], i, j;
    list().forEach(function (ph) {
      if (ph.unit === uid && ph.sec === sec && ph.p === pi && ph.k === si && ph.a != null) for (j = ph.a; j < ph.b && j < n; j++) hl[j] = ph.id;
    });
    if (exprOn() && sec === 'r') {
      (EXPR[uid] || []).forEach(function (e, ei) {
        var nd = Array.from(pick(e)), m = nd.length;
        for (i = 0; i + m <= n; i++) {
          var ok = true; for (j = 0; j < m; j++) if (chars[i + j] !== nd[j]) { ok = false; break; }
          if (ok) { for (j = 0; j < m; j++) xp[i + j] = { e: ei, a: i, b: i + m }; i += m - 1; }
        }
      });
    }
    var out = '', run = '', key = null;
    function flush() {
      if (!run) return;
      var h = A.esc(run), st = key.split('|');
      if (st[0]) h = '<mark class="hl" data-id="' + st[0] + '">' + h + '</mark>';
      if (st[1]) { var q = st[1].split(':'); h = '<span class="xp" data-x="' + q[0] + '" data-a="' + q[1] + '" data-b="' + q[2] + '">' + h + '</span>'; }
      out += h; run = '';
    }
    for (i = 0; i < n; i++) {
      var k2 = (hl[i] || '') + '|' + (xp[i] ? xp[i].e + ':' + xp[i].a + ':' + xp[i].b : '');
      if (k2 !== key) { flush(); key = k2; }
      run += chars[i];
    }
    flush();
    return out;
  };
  A.exprToggle = function (u) {
    if (!(EXPR[u.id] || []).length) return '';
    var on = exprOn();
    return '<div class="xrow"><button class="xtog' + (on ? ' on' : '') + '" id="xtog" aria-pressed="' + on + '">✨ Expressions ' + (on ? 'on' : 'off') + '</button>' +
      '<span class="xhint">' + (on ? 'Soft purple = an expression worth knowing. Tap it. Select any text to save it.' : 'Turn on to see idioms and set phrases.') + '</span></div>';
  };

  /* ---------- bottom sheet (expression card / saved-highlight card) ---------- */
  var sheet = document.createElement('div');
  sheet.id = 'sheet'; sheet.className = 'sheet'; sheet.hidden = true;
  sheet.innerHTML = '<div class="sheet-bg"></div><div class="sheet-in" id="sheetin"></div>';
  document.body.appendChild(sheet);
  function closeSheet() { sheet.hidden = true; }
  sheet.querySelector('.sheet-bg').onclick = closeSheet;
  function openSheet(html, bind) { $('sheetin').innerHTML = html; sheet.hidden = false; if (bind) bind($('sheetin')); }

  /* ---------- saving ---------- */
  function newId() { return 'p' + Date.now().toString(36) + Math.floor(Math.random() * 1e4).toString(36); }
  function savePhrase(info) {
    var l = list();
    var dup = l.some(function (p) { return (info.a != null ? (p.unit === info.unit && p.sec === info.sec && p.p === info.p && p.k === info.k && p.a === info.a && p.b === info.b) : p.s === info.s); });
    if (dup) { toast('Already in My Phrases'); return false; }
    info.id = newId(); info.ts = Date.now(); l.unshift(info); put(l);
    toast('Saved to My Phrases 📌'); return true;
  }
  function removeById(id) { put(list().filter(function (p) { return p.id !== id; })); }

  /* the sentence a DOM node sits in, as coordinates */
  function coordsOf(node) {
    var el = node && (node.nodeType === 1 ? node : node.parentNode), sent = el && el.closest && el.closest('.rsent');
    if (!sent) return null;
    var para = sent.closest('.rpara'), sc = sent.closest('.uscroll');
    if (!para || !sc) return null;
    return { sent: sent, unit: sc.getAttribute('data-uid'), sec: para.getAttribute('data-sec') || 'r', p: parseInt(para.getAttribute('data-i'), 10), k: parseInt(sent.getAttribute('data-k'), 10) };
  }
  function slice(x, a, b) { return { s: Array.from(x.s).slice(a, b).join(''), t: Array.from(x.t || x.s).slice(a, b).join('') }; }

  /* ---------- selection bar ---------- */
  var bar = document.createElement('div');
  bar.id = 'selbar'; bar.className = 'selbar'; bar.hidden = true;
  bar.innerHTML = '<div class="sb-text" id="sbtext"></div><div class="sb-btns">' +
    '<button data-a="save" id="sbsave">🖍 Save</button><button data-a="pleco">📖 Pleco</button><button data-a="copy">Copy</button></div>';
  document.body.appendChild(bar);
  var cur = null, tm = 0;

  function readSelection() {
    var sel = window.getSelection && window.getSelection();
    if (!sel || sel.isCollapsed || !sel.rangeCount) return null;
    var range = sel.getRangeAt(0), text = sel.toString().replace(/\s+/g, '').trim();
    var host = range.commonAncestorContainer; host = host.nodeType === 1 ? host : host.parentNode;
    if (!text || !host || !host.closest || !host.closest('.uscroll')) return null;
    var c1 = coordsOf(range.startContainer), c2 = coordsOf(range.endContainer), info = { text: text, s: text, t: text };
    if (c1 && c2 && c1.sent === c2.sent) {
      var pre = document.createRange(); pre.setStart(c1.sent, 0); pre.setEnd(range.startContainer, range.startOffset);
      var a = Array.from(pre.toString()).length, b = a + Array.from(range.toString().replace(/\s+/g, '')).length;
      var x = sentenceOf(c1.unit, c1.sec, c1.p, c1.k);
      if (x && b > a) { var sl = slice(x, a, b); info.s = sl.s; info.t = sl.t; info.unit = c1.unit; info.sec = c1.sec; info.p = c1.p; info.k = c1.k; info.a = a; info.b = b; }
    }
    return info;
  }
  function existingFor(info) {
    if (info.a == null) return null;
    return list().filter(function (p) { return p.unit === info.unit && p.sec === info.sec && p.p === info.p && p.k === info.k && p.a === info.a && p.b === info.b; })[0] || null;
  }
  function refreshBar() {
    var info = readSelection();
    if (!info) { bar.hidden = true; cur = null; return; }
    cur = info;
    var shown = isT() ? info.t : info.s;
    $('sbtext').textContent = shown.length > 18 ? shown.slice(0, 18) + '…' : shown;
    var ex = existingFor(info);
    $('sbsave').textContent = ex ? '✕ Remove' : '🖍 Save';
    bar.hidden = false;
  }
  document.addEventListener('selectionchange', function () { clearTimeout(tm); tm = setTimeout(refreshBar, 220); });
  bar.addEventListener('pointerdown', function (e) { e.preventDefault(); });   // keep the selection while tapping
  bar.addEventListener('click', function (e) {
    var b = e.target.closest('button'); if (!b || !cur) return;
    var act = b.getAttribute('data-a'), info = cur, shown = isT() ? info.t : info.s;
    if (act === 'pleco') { openPleco(shown); return; }
    if (act === 'copy') { copy(shown); toast('Copied'); return; }
    if (act === 'save') {
      var ex = existingFor(info);
      if (ex) { removeById(ex.id); toast('Highlight removed'); }
      else {
        var v = vocabFor(info.s);
        var rec = { s: info.s, t: info.t, unit: info.unit || null, sec: info.sec || null, p: info.p, k: info.k, a: info.a, b: info.b };
        if (v) { rec.py = v.py; rec.en = v.en; }
        savePhrase(rec);
      }
      try { window.getSelection().removeAllRanges(); } catch (er) { /* ignore */ }
      bar.hidden = true; cur = null;
      if (A.redrawUnit) A.redrawUnit();
    }
  });

  /* ---------- after a unit is drawn: tap handlers for tints and highlights ---------- */
  A.afterUnit = function (u) {
    var t = $('xtog');
    if (t) t.onclick = function () { store.set('exprOn', !exprOn()); A.redrawUnit(); };
    Array.prototype.forEach.call(app.querySelectorAll('.xp'), function (el) {
      el.onclick = function (ev) { ev.stopPropagation(); var g = window.getSelection && window.getSelection(); if (g && !g.isCollapsed) return; openExpression(u, el); };
    });
    Array.prototype.forEach.call(app.querySelectorAll('mark.hl'), function (el) {
      el.onclick = function (ev) { ev.stopPropagation(); var g = window.getSelection && window.getSelection(); if (g && !g.isCollapsed) return; openHighlight(el.getAttribute('data-id')); };
    });
  };
  function openExpression(u, el) {
    var e = (EXPR[u.id] || [])[parseInt(el.getAttribute('data-x'), 10)]; if (!e) return;
    var co = coordsOf(el), a = parseInt(el.getAttribute('data-a'), 10), b = parseInt(el.getAttribute('data-b'), 10);
    var shown = pick(e), saved = co && list().some(function (p) { return p.unit === co.unit && p.sec === co.sec && p.p === co.p && p.k === co.k && p.a === a && p.b === b; });
    openSheet(
      '<div class="xc-zh">' + A.row(shown) + '</div>' + A.pinyinHTML(e.py, null, 'md') +
      '<div class="xc-l"><b>Literally</b> ' + A.esc(e.lit) + '</div>' +
      '<div class="xc-l"><b>Means</b> ' + A.esc(e.mean) + '</div>' +
      '<div class="xc-l"><b>How it is used</b> ' + A.esc(e.use) + '</div>' +
      '<div class="xc-btns"><button data-a="save"' + (saved ? ' disabled' : '') + '>' + (saved ? '📌 Saved' : '🖍 Save phrase') + '</button><button data-a="pleco">📖 Pleco</button><button data-a="close">Close</button></div>',
      function (root) {
        root.querySelector('[data-a="pleco"]').onclick = function () { openPleco(shown); };
        root.querySelector('[data-a="close"]').onclick = closeSheet;
        var sv = root.querySelector('[data-a="save"]');
        sv.onclick = function () {
          if (!co) return;
          if (savePhrase({ s: e.s, t: e.t, py: e.py, en: e.mean, lit: e.lit, use: e.use, unit: co.unit, sec: co.sec, p: co.p, k: co.k, a: a, b: b })) { closeSheet(); A.redrawUnit(); }
        };
      });
  }
  function openHighlight(id) {
    var ph = list().filter(function (p) { return p.id === id; })[0]; if (!ph) return;
    var shown = pick(ph);
    openSheet('<div class="xc-zh">' + A.row(shown) + '</div>' + (ph.py ? A.pinyinHTML(ph.py, null, 'md') : '') + (ph.en ? '<div class="xc-l">' + A.esc(ph.en) + '</div>' : '') +
      '<div class="xc-btns"><button data-a="pleco">📖 Pleco</button><button data-a="rm">✕ Remove highlight</button><button data-a="close">Close</button></div>',
      function (root) {
        root.querySelector('[data-a="pleco"]').onclick = function () { openPleco(shown); };
        root.querySelector('[data-a="rm"]').onclick = function () { removeById(id); closeSheet(); toast('Highlight removed'); A.redrawUnit(); };
        root.querySelector('[data-a="close"]').onclick = closeSheet;
      });
  }

  /* ---------- My Phrases screen ---------- */
  A.phrasesCard = function () {
    var n = list().length;
    return '<button class="ucard pcard" data-go="#/phrases"><div class="unum">📌 My Phrases</div><div class="uzh">' + n + '</div><div class="uen">' + (n ? 'Phrases you saved while reading' : 'Select text in a reading to save it here') + '</div></button>';
  };
  A.routes.phrases = function () { renderPhrases(); };
  function renderPhrases() {
    closeSheet();
    var l = list();
    app.innerHTML = '<div class="screen study has-tabs"><div class="topbar"><button class="btn" data-go="#/study">‹ Study</button><span class="title">📌 Phrases</span>' + A.scriptToggle() + '</div>' +
      '<div class="plist">' + (l.length ? l.map(cardHTML).join('') :
        '<div class="pempty">Nothing saved yet.<br>In any reading, press and hold a word, drag to select it, and tap <b>🖍 Save</b>. Tap a soft-purple expression for its meaning card.</div>') + '</div>' +
      A.tabbar('study') + '</div>';
    A.bindTop(renderPhrases);
    Array.prototype.forEach.call(app.querySelectorAll('.pitem'), function (el) {
      var id = el.getAttribute('data-id'), ph = list().filter(function (p) { return p.id === id; })[0]; if (!ph) return;
      el.querySelector('[data-a="pleco"]').onclick = function () { openPleco(pick(ph)); };
      el.querySelector('[data-a="copy"]').onclick = function () { copy(pick(ph)); toast('Copied'); };
      el.querySelector('[data-a="rm"]').onclick = function () {
        if (!window.confirm('Remove this phrase from My Phrases?')) return;
        removeById(id); renderPhrases();
      };
    });
  }
  function cardHTML(ph) {
    var x = ph.unit ? sentenceOf(ph.unit, ph.sec || 'r', ph.p, ph.k) : null;
    var meaning = ph.en ? A.esc(ph.en) : (x ? '<span class="pctx">in context: ' + A.esc(x.en) + '</span>' : '');
    return '<div class="pitem" data-id="' + ph.id + '"><div class="pzh">' + A.row(pick(ph)) + '</div>' +
      (ph.py ? A.pinyinHTML(ph.py, null, 'md') : '') +
      (meaning ? '<div class="pmean">' + meaning + '</div>' : '') +
      (ph.lit ? '<div class="pmean"><i>Literally: ' + A.esc(ph.lit) + '</i></div>' : '') +
      '<div class="pfoot">' + (ph.unit ? '<button class="pchip" data-go="#/study/' + ph.unit + '">Chapter ' + chapterNo(ph.unit) + ' ›</button>' : '<span></span>') +
      '<span class="pbtns"><button data-a="pleco">📖 Pleco</button><button data-a="copy">Copy</button><button data-a="rm" aria-label="Remove">✕</button></span></div></div>';
  }
});
