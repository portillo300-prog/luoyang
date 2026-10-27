/* Story voice: one clip per recording-sheet ID (data in audio-own.js, made by scripts/own-audio.py).
   Chapter n title = Wn-TITLE; reading sentences = Wn-S01, Wn-S02 ... counted across the whole reading.
   Plays through the app's own audio engine (FX.clip / FX.sequence) so iPhone handling is shared. */
(function () {
  'use strict';
  var OWN = window.AUDIO_OWN || { byId: {}, byText: {} };
  var V = (window.OWNV = {});
  V.norm = function (t) { return String(t || '').replace(/[\s，。！？、：；,.!?:;“”‘’"'「」()（）…]/g, ''); };
  V.file = function (id) { var e = OWN.byId[id]; return e ? e.f : null; };
  /* a whole word or single character by its text: one clip, one voice (never glued from parts) */
  var t2s = null;   // traditional spelling -> simplified, built once from the chapter vocabulary (whole words and aligned characters)
  function buildT2S() {
    t2s = {};
    ((window.CONTENT && window.CONTENT.lessons) || []).forEach(function (L) {
      (L.words || []).forEach(function (w) {
        if (!w.t || w.t === w.s) return;
        t2s[w.t] = w.s;
        var a = Array.from(w.t), b = Array.from(w.s);
        if (a.length === b.length) a.forEach(function (c, i) { if (c !== b[i] && !t2s[c]) t2s[c] = b[i]; });
      });
    });
  }
  V.simp = function (t) { if (!t2s) buildT2S(); t = V.norm(t); return t2s[t] || Array.from(t).map(function (c) { return t2s[c] || c; }).join(''); };
  V.fileForText = function (t) { var n = V.norm(t), id = OWN.byText[n] || OWN.byText[V.simp(n)]; return id ? V.file(id) : null; };
  V.chap = function (uid) { return String(uid).replace(/\D/g, ''); };
  V.titleId = function (uid) { return 'W' + V.chap(uid) + '-TITLE'; };
  /* sentence number across the reading: paragraph pi, sentence k -> W2-S07 */
  V.sentId = function (u, pi, k) {
    var n = 0, ps = (u.reading && u.reading.paragraphs) || [];
    for (var i = 0; i < pi; i++) n += (ps[i].sentences || []).length;
    n += k + 1;
    return 'W' + V.chap(u.id) + '-S' + (n < 10 ? '0' : '') + n;
  };
  V.readingIds = function (u) {
    var ids = [], ps = (u.reading && u.reading.paragraphs) || [];
    ps.forEach(function (p, pi) { (p.sentences || []).forEach(function (_, k) { ids.push(V.sentId(u, pi, k)); }); });
    return ids.filter(function (id) { return !!V.file(id); });
  };
  V.play = function (id, force) { var f = V.file(id); return f ? window.FX.clip(f, !!force, false) : Promise.resolve(false); };
  V.playAll = function (ids, force) {
    var urls = ids.map(V.file).filter(Boolean);
    return urls.length ? window.FX.sequence(urls, !!force, false, 20000) : Promise.resolve(false);
  };
  V.stop = function () { if (window.FX && window.FX.stopSeq) window.FX.stopSeq(); };
  /* small speaker button (empty when there is no clip, so nothing dead is ever shown) */
  V.btn = function (id, label) {
    return V.file(id) ? '<button type="button" class="ownsp" data-own="' + id + '" aria-label="' + (label || 'Hear it') + '">🔊</button>' : '';
  };
  V.bind = function (root, onFail) {
    Array.prototype.forEach.call((root || document).querySelectorAll('[data-own]'), function (b) {
      b.onclick = function (e) {
        e.stopPropagation();
        V.play(b.getAttribute('data-own'), true).then(function (ok) { if (ok === false && onFail) onFail(ok); });
      };
    });
  };
})();
