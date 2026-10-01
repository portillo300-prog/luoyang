/* Chapter-based games: Collocation Match, Which Word Fits?, Weather Match.
   They read the book's own material (word-pairing tables, word-choice exercises, warm-up) for whichever chapters are switched on. */
(window.HANZI_MODS = window.HANZI_MODS || []).push(function (A) {
  'use strict';
  var FX = A.FX, $ = A.$, app = A.app, C = window.CONTENT;
  var ROUNDS = 8;

  function frame(lesson) {
    return '<div class="game" style="--acc:' + A.acc(lesson) + '">' +
      '<div class="topbar"><button class="btn" id="gquit">✕ Quit</button><span class="title"><span id="gprog"></span></span><span class="tools">' + A.soundBtn() + '</span></div>';
  }
  function firstLesson() { var sel = A.selectedLessons(); return A.lessons.filter(function (L) { return sel.indexOf(L.id) >= 0; })[0] || A.lessons[0]; }
  function chosenChapters() { return A.selectedLessons(); }
  function pick(arr, n) { return A.shuffle(arr.slice()).slice(0, n); }
  function word(o) { return A.script() === 't' ? (o.t || o.s) : o.s; }
  function reg(cfg, play) {
    A.registerGame({ id: cfg.id, name: cfg.name, icon: cfg.icon, tag: cfg.tag, order: cfg.order }, function (p) {
      if (p[0] === 'play') return play(cfg);
      A.gameSetup(cfg);
    });
  }

  /* Shared multiple-choice runner.
     rounds = [{ prompt: html, choices: [{ html, ok }], why: html (shown after the answer) }] */
  function runChoices(cfg, rounds) {
    var lesson = firstLesson(), idx = 0, miss = 0, good = 0, locked = false, alive = true;
    app.innerHTML = frame(lesson) + '<div class="gprompt" id="gprompt"></div><div class="gbody"><div class="gchoices" id="gchoices"></div><div class="gwhy" id="gwhy"></div></div></div>';
    A.bindTop(function () {});
    $('gquit').onclick = function () { A.go('#/g/' + cfg.id); };
    A.onLeave(function () { alive = false; });
    function draw() {
      if (!alive) return;
      if (idx >= rounds.length) {
        alive = false;
        var stars = A.starsFor(good, rounds.length), pay = 2 + stars * 2;
        A.earn(pay);
        return A.showWin({
          emoji: stars === 3 ? '🏆' : '🎉', title: cfg.done, accent: A.acc(lesson), stars: stars,
          lines: [good + ' of ' + rounds.length + ' on the first try. You earned ⭐ ' + pay + '!'],
          primary: { label: 'Play again', fn: function () { A.go('#/g/' + cfg.id + '/play'); } },
          secondary: { label: '🎮 Games', fn: function () { A.go('#/games'); } }
        });
      }
      var r = rounds[idx]; miss = 0; locked = false;
      $('gprog').textContent = (idx + 1) + ' / ' + rounds.length;
      $('gprompt').innerHTML = r.prompt;
      $('gwhy').innerHTML = '&nbsp;';
      $('gchoices').innerHTML = r.choices.map(function (c, i) { return '<button class="gchoice" data-i="' + i + '">' + c.html + '</button>'; }).join('');
      Array.prototype.forEach.call(app.querySelectorAll('.gchoice'), function (b) {
        b.onclick = function () { tap(b, r); };
      });
    }
    function reveal(r) {
      Array.prototype.forEach.call(app.querySelectorAll('.gchoice'), function (b) { if (r.choices[parseInt(b.getAttribute('data-i'), 10)].ok) b.classList.add('right'); });
      if (r.why) $('gwhy').innerHTML = r.why;
    }
    function tap(b, r) {
      if (locked || !alive) return;
      var c = r.choices[parseInt(b.getAttribute('data-i'), 10)];
      if (c.ok) {
        locked = true; if (miss === 0) good++;
        b.classList.add('right'); FX.ding(); if (r.why) $('gwhy').innerHTML = r.why;
        var rc = b.getBoundingClientRect(); FX.confetti({ x: (rc.left + rc.width / 2) / window.innerWidth, y: (rc.top + rc.height / 2) / window.innerHeight, n: 22 });
        idx++; setTimeout(draw, r.why ? 2600 : 1100);
      } else {
        miss++; FX.oops(); b.classList.remove('wrong'); void b.offsetWidth; b.classList.add('wrong');
        if (miss >= 2) { locked = true; reveal(r); idx++; setTimeout(draw, 3000); }
      }
    }
    draw();
  }

  /* ---------------- Collocation Match ---------------- */
  var collCfg = { id: 'colloc', order: 55, name: 'Collocation Match', icon: '🧩', tag: 'Which word goes with it?', how: "Pick the word the book pairs with the one on top. These come from each chapter's word-pairing tables.", done: 'Great pairing!' };
  reg(collCfg, collocPlay);

  function collocPlay(cfg) {
    var sel = chosenChapters(), rows = (C.collGame || []).filter(function (r) { return sel.indexOf(r.chapter) >= 0; });
    if (rows.length < 3) return A.go('#/games');
    var rounds = pick(rows, ROUNDS).map(function (row) {
      var right = pick(row.rights, 1)[0];
      var banned = {}; row.rights.forEach(function (x) { banned[x.s] = true; });
      var pool = [];
      (C.collGame || []).forEach(function (o) {
        if (o.id === row.id || o.type !== row.type) return;
        o.rights.forEach(function (x) { if (!banned[x.s] && !pool.some(function (p) { return p.s === x.s; })) pool.push(x); });
      });
      var wrong = pick(pool, 3);
      if (wrong.length < 2) return null;
      var choices = A.shuffle([{ o: right, ok: true }].concat(wrong.map(function (w) { return { o: w, ok: false }; }))).map(function (c) { return { html: A.row(word(c.o)), ok: c.ok }; });
      var all = row.rights.map(word).join(' / ');
      return {
        prompt: '<div class="gq">Which word goes with</div><div class="gbig">' + A.row(word(row.left)) + ' + ＿＿</div>',
        choices: choices,
        why: '<b>' + A.esc(word(row.left)) + '</b> + ' + A.esc(all) + '<br><span class="gsoft">' + A.esc(row.en) + '</span>'
      };
    }).filter(Boolean);
    if (rounds.length < 3) return A.go('#/games');
    runChoices(cfg, rounds);
  }

  /* ---------------- Which Word Fits? (near-synonyms, from the chapters' word-choice questions) ---------------- */
  var fitCfg = { id: 'fits', order: 65, name: 'Which Word Fits?', icon: '🎯', tag: 'Two words, one blank. Which fits?', how: 'Read the sentence and pick the word that fits the blank. The book teaches these pairs, so watch for the small differences!', done: 'Sharp eye!' };
  reg(fitCfg, fitPlay);

  function fitPlay(cfg) {
    var sel = chosenChapters(), qs = [];
    (C.units || []).forEach(function (u) {
      if (sel.indexOf(u.lessonId || u.id) < 0) return;
      (u.cfu || []).forEach(function (q) { if (/____/.test(q.q) && q.choices.length <= 3) qs.push(q); });
    });
    if (qs.length < 3) return A.go('#/games');
    var rounds = pick(qs, ROUNDS).map(function (q) {
      var qq = A.T(q.q), zh = qq, en = '';
      var paren = qq.match(/\s*\((".*?")\)\s*$/);
      if (paren) { zh = qq.slice(0, paren.index); en = paren[1].replace(/^"|"$/g, ''); }
      zh = zh.replace(/\s*Which fits\?\s*$/, '').replace(/^(.*?)____(.*)$/, function (_, a, b) { return A.esc(a) + '<span class="gblank"></span>' + A.esc(b); });
      return {
        prompt: '<div class="gq">Which word fits?</div><div class="gqtext">' + zh + '</div>' + (en ? '<div class="gtry gsoft">' + A.esc(en) + '</div>' : ''),
        choices: q.choices.map(function (c, i) { return { html: A.esc(c), ok: i === q.answer }; }),
        why: q.explain ? A.esc(q.explain) : ''
      };
    });
    runChoices(cfg, rounds);
  }

  /* ---------------- Weather Match (the Chapter 3 warm-up) ---------------- */
  var weatherCfg = { id: 'weather', order: 75, name: 'Weather Match', icon: '🌦️', tag: 'Which weather word is it?', how: 'A weather picture shows up. Pick the word for it, straight from the chapter warm-up!', done: 'Weather expert!' };
  reg(weatherCfg, weatherPlay);

  function weatherPlay(cfg) {
    var sel = chosenChapters(), items = [];
    (C.units || []).forEach(function (u) {
      if (sel.indexOf(u.lessonId || u.id) >= 0 && u.warmup && u.warmup.weather) items = items.concat(u.warmup.weather);
    });
    if (items.length < 4) return A.go('#/games');
    var rounds = A.shuffle(items.slice()).map(function (w) {
      var others = pick(items.filter(function (x) { return x.s !== w.s; }), 3);
      var choices = A.shuffle([{ o: w, ok: true }].concat(others.map(function (o) { return { o: o, ok: false }; }))).map(function (c) { return { html: A.row(word(c.o)), ok: c.ok }; });
      return {
        prompt: '<div class="gq">Which word is this weather?</div><div class="gicon">' + w.icon + '</div>',
        choices: choices,
        why: '<b>' + A.esc(word(w)) + '</b> ' + A.pinyinHTML(w.py, null, 'md') + '<br><span class="gsoft">' + A.esc(w.en) + '</span>'
      };
    });
    runChoices(cfg, rounds);
  }
});
