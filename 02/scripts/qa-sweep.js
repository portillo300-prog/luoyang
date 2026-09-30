/* QA SWEEP: open every screen of the app and report blanks, console errors and anything running off the edge.
   Not shipped to phones. Used before EVERY publish (Drive doc 13, QA gate).

   How to run (in the in-app browser, with the app open from a local server):
     1. resize the pane to phone width (390x844)     2. load this file into the page:
        eval(await (await fetch('/scripts/qa-sweep.js')).text())      (copy it next to the app when testing from a scratch folder)
     3. QA.start({ both: true })      // runs in the background (a full sweep takes ~1 minute, longer than one tool call allows)
   4. poll:  QA.result              // null while running; the report text when done  (or:  await QA.sweep(...)  for a short run)
   Read the report top to bottom. Anything marked FAIL is a bug until proven otherwise. Add new checks when a new kind of bug is found. */
(function () {
  'use strict';
  var errs = [];
  var origErr = console.error;
  console.error = function () { errs.push(Array.prototype.slice.call(arguments).join(' ').slice(0, 160)); origErr.apply(console, arguments); };
  window.addEventListener('error', function (e) { errs.push('uncaught: ' + e.message); });
  window.addEventListener('unhandledrejection', function (e) { errs.push('unhandled promise: ' + (e.reason && e.reason.message || e.reason)); });
  function wait(ms) { return new Promise(function (r) { setTimeout(r, ms); }); }

  function discover() {
    var A = window.HANZI, C = window.CONTENT, r = ['#/', '#/about', '#/games', '#/words', '#/words/maker', '#/words/puzzles', '#/garden', '#/garden/shop', '#/study', '#/phrases'];
    (A.allLessons || []).forEach(function (L) { if (L.hidden) return; r.push('#/l/' + L.id, '#/w/' + L.id + '/0', '#/r/' + L.id + '/0', '#/q/' + L.id); });
    (C.units || []).forEach(function (u) { r.push('#/study/' + u.id, '#/study/' + u.id + '/quiz'); });
    (A.games || []).forEach(function (g) { r.push('#/g/' + g.id, '#/g/' + g.id + '/play'); });
    ['bubbles', 'fish', 'stars'].forEach(function (id) { /* retired games stay reachable: make sure they do not crash */ if (!(A.games || []).some(function (g) { return g.id === id; })) return; });
    return r.filter(function (x, i) { return r.indexOf(x) === i; });
  }

  function overflow() {
    var W = document.documentElement.clientWidth, bad = [];
    document.querySelectorAll('body *').forEach(function (e) {
      if (e.closest('.arena') || e.closest('.sheet') || e.closest('.selbar')) return;   // things that move or slide on purpose
      var b = e.getBoundingClientRect();
      if (b.width > 0 && (b.right > W + 2 || b.left < -2)) bad.push((typeof e.className === 'string' && e.className ? e.className.split(' ')[0] : e.tagName.toLowerCase()) + '@' + Math.round(b.right));
    });
    return bad.filter(function (x, i) { return bad.indexOf(x) === i; }).slice(0, 4);
  }

  /* A touch on a big non-button element that has a :active transform makes the whole block shrink under the finger
     (found 2026-09-30: reading cards shared a class with shop cards, so the page "jumped" on every tap on a phone).
     Mouse clicks and scripted clicks never show it, so it must be checked by reading the stylesheet. */
  function activeJump() {
    var hits = [], vh = window.innerHeight, seen = [];
    function scan(rules) {
      Array.prototype.forEach.call(rules, function (r) {
        if (r.cssRules && !r.selectorText) return scan(r.cssRules);
        if (!r.selectorText || r.selectorText.indexOf(':active') < 0 || !r.style || !(r.style.transform || r.style.scale)) return;
        r.selectorText.split(',').forEach(function (sel) {
          if (sel.indexOf(':active') < 0) return;
          var base = sel.replace(/:active/g, '').trim(); if (!base) return;
          var els = []; try { els = document.querySelectorAll(base); } catch (e) { return; }
          Array.prototype.forEach.call(els, function (el) {
            if (el.tagName === 'BUTTON' || el.tagName === 'A' || seen.indexOf(el) >= 0) return;
            var b = el.getBoundingClientRect();
            if (b.height > vh * 0.3) { seen.push(el); hits.push((el.className && typeof el.className === 'string' ? el.className.split(' ')[0] : el.tagName.toLowerCase()) + ' (' + Math.round(b.height) + 'px tall, rule ' + base + ':active)'); }
          });
        });
      });
    }
    Array.prototype.forEach.call(document.styleSheets, function (sh) { try { scan(sh.cssRules); } catch (e) { /* cross-origin sheet */ } });
    return hits.slice(0, 3);
  }

  async function pass(label, routes) {
    var lines = [], fails = 0;
    for (var i = 0; i < routes.length; i++) {
      var r = routes[i], before = errs.length;
      location.hash = r; await wait(750);
      var app = document.getElementById('app') || document.body, txt = app.innerText.replace(/\s+/g, ' ').trim();
      var probs = [];
      if (txt.length < 6) probs.push('BLANK');
      var oe = overflow(); if (oe.length) probs.push('OVERFLOW ' + oe.join(','));
      var aj = activeJump(); if (aj.length) probs.push('TOUCH-JUMP ' + aj.join(', '));
      var ne = errs.slice(before); if (ne.length) probs.push('CONSOLE ' + ne.join(' || '));
      if (probs.length) fails++;
      lines.push((probs.length ? 'FAIL ' : 'ok   ') + r + (probs.length ? '   ' + probs.join(' | ') : ''));
    }
    return { label: label, lines: lines, fails: fails };
  }

  window.QA = {
    result: null,
    start: function (opts) { QA.result = null; QA.sweep(opts).then(function (r) { QA.result = r; }); return 'started'; },
    sweep: async function (opts) {
      opts = opts || {};
      var routes = opts.routes || discover(), out = [], total = 0;
      var W = document.documentElement.clientWidth;
      out.push('QA sweep at width ' + W + 'px, ' + routes.length + ' screens' + (W > 430 ? '   (WARNING: not phone width, resize to 390 first)' : ''));
      var scripts = [['simplified', 's']]; if (opts.both) scripts.push(['traditional', 't']);
      for (var k = 0; k < scripts.length; k++) {
        try { var b = document.querySelector('[data-script="' + scripts[k][1] + '"]'); if (b) b.click(); else if (window.HANZI && HANZI.store) HANZI.store.set('script', scripts[k][1]); } catch (e) { /* ignore */ }
        var p = await pass(scripts[k][0], routes); total += p.fails;
        out.push('--- ' + p.label + ': ' + (p.fails ? p.fails + ' FAIL' : 'all ok') + ' ---'); out = out.concat(p.lines.filter(function (l) { return opts.verbose || l.indexOf('FAIL') === 0; }));
      }
      out.push(total ? 'RESULT: ' + total + ' FAIL(S) - do not publish' : 'RESULT: clean');
      return out.join('\n');
    }
  };
})();
