/* Tap a word in a reading: hear the WHOLE word (one clip, one voice, whether it has one, two or three syllables) and see a small
   card with pinyin and meaning. Words are the chapter vocabulary, longest match first (细节 beats 细 + 节). Tapping anything that is
   not a vocabulary word still opens the sentence's English, as before; the card also has a button for that. */
(window.HANZI_MODS = window.HANZI_MODS || []).push(function (A) {
  'use strict';
  var words = null, maxLen = 1, card = null;

  function vocab() {
    if (words) return words;
    var seen = {}; words = [];
    ((window.CONTENT && window.CONTENT.lessons) || []).forEach(function (L) {
      (L.words || []).forEach(function (w) { if (!seen[w.s]) { seen[w.s] = 1; words.push(w); } });
    });
    return words;
  }
  function shown(w) { return A.script() === 't' ? (w.t || w.s) : w.s; }

  /* index (in characters) of the character under the finger, or -1 */
  function charAt(sp, x, y) {
    var walker = document.createTreeWalker(sp, NodeFilter.SHOW_TEXT, null), n, idx = 0, r = document.createRange();
    while ((n = walker.nextNode())) {
      var chars = Array.from(n.nodeValue), off = 0;
      for (var i = 0; i < chars.length; i++) {
        var len = chars[i].length;
        r.setStart(n, off); r.setEnd(n, off + len);
        var rs = r.getClientRects();
        for (var k = 0; k < rs.length; k++) {
          var q = rs[k];
          if (x >= q.left - 1 && x <= q.right + 1 && y >= q.top - 1 && y <= q.bottom + 1) return idx;
        }
        off += len; idx++;
      }
    }
    return -1;
  }

  /* the longest vocabulary word that covers character index i of text */
  function wordAround(text, i) {
    var chars = Array.from(text), best = null, bestLen = 0;
    vocab().forEach(function (w) {
      var wc = Array.from(shown(w)), L = wc.length;
      if (L <= bestLen || L > chars.length) return;
      for (var s = Math.max(0, i - L + 1); s <= i && s + L <= chars.length; s++) {
        if (chars.slice(s, s + L).join('') === wc.join('')) { best = w; bestLen = L; break; }
      }
    });
    return best;
  }

  function hide() { if (card) card.hidden = true; }
  function show(w, toggleEn) {
    if (!card) {
      card = document.createElement('div'); card.id = 'wtcard'; card.className = 'wtcard'; card.hidden = true;
      document.body.appendChild(card);
      window.addEventListener('hashchange', hide);
    }
    var hear = A.hasVoice(w);
    card.innerHTML = '<div class="wt-main"><div class="wt-zh">' + A.esc(shown(w)) + '</div><div class="wt-mid">' + A.pinyinHTML(w.py, null, 'md') +
      '<div class="wt-en">' + A.esc(A.shortEn ? A.shortEn(w.en) : w.en) + '</div></div></div>' +
      '<div class="wt-btns">' + (hear ? '<button type="button" id="wt-hear">🔊 Hear it</button>' : '<span class="wt-none">no recording yet</span>') +
      '<button type="button" id="wt-sent">In English</button><button type="button" id="wt-x" aria-label="Close">✕</button></div>';
    card.hidden = false;
    if (hear) { document.getElementById('wt-hear').onclick = function () { A.say(w, true); }; A.say(w, true); }
    document.getElementById('wt-sent').onclick = function () { hide(); toggleEn(); };
    document.getElementById('wt-x').onclick = hide;
  }

  /* called from a tap on a reading sentence; true = handled (a word was found) */
  A.wordTap = function (ev, sp, toggleEn) {
    var x = ev.clientX, y = ev.clientY;
    if (x == null) return false;
    var i = charAt(sp, x, y);
    if (i < 0) return false;
    var w = wordAround(sp.textContent, i);
    if (!w) return false;
    show(w, toggleEn);
    return true;
  };
});
