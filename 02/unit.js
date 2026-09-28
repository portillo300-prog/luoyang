/* STUDY — the reading passage, grammar notes, and comprehension-check quiz for each unit of the textbook.
   This is the main mode for Oscar's own HSK study (distinct from the vocab writing-practice screen, which
   the "home" tab still handles using the same lesson data). Registers a "Study" tab and the #/study route. */
(window.HANZI_MODS = window.HANZI_MODS || []).push(function (A) {
  'use strict';
  var app = A.app, $ = A.$, FX = A.FX, C = window.CONTENT;
  A.tabs.push({ id: 'study', icon: '📖', label: 'Study', href: '#/study', order: 5 });

  function esc(s) { return A.esc(s); }
  function scriptText(o) { return A.script() === 't' ? (o.t || o.s) : o.s; }
  function unitById(id) { return (C.units || []).filter(function (u) { return u.id === id; })[0]; }
  function lessonFor(u) { return A.allLessons.filter(function (L) { return L.id === u.lessonId; })[0]; }

  // best-effort tone-colored pinyin for a full sentence string that may include commas/punctuation
  function plainPinyin(py) {
    if (!py) return '';
    return py.split(/\s+/).map(function (tok) {
      var core = tok.replace(/[,.!?:;“”…]/g, '');
      var trail = tok.slice(core.length);
      if (!/[1-5]$/.test(core)) return esc(tok);
      return A.pinyinHTML(core, null, 'sm') + esc(trail);
    }).join(' ');
  }

  function unitCard(u) {
    var L = lessonFor(u);
    return '<button class="ucard" data-go="#/study/' + u.id + '" style="--acc:' + (L ? A.acc(L) : '#4fd1c5') + '">' +
      '<div class="unum">Unit ' + (L ? L.number : '') + '</div>' +
      '<div class="uzh">' + esc(scriptText(u.title)) + '</div>' +
      '<div class="uen">' + esc(u.en) + '</div>' +
      '</button>';
  }

  function renderList() {
    var units = C.units || [];
    app.innerHTML = '<div class="screen study has-tabs">' +
      '<div class="topbar"><span class="title">📖 Study</span><span class="spacer"></span>' + A.themeSeg() + A.scriptToggle() + A.walletPill() + '</div>' +
      '<div class="ulist">' + (units.length ? units.map(unitCard).join('') : '<p class="muted">No units yet — send more textbook photos!</p>') + '</div>' +
      A.tabbar('study') + '</div>';
    A.bindTop(renderList);
  }

  function section(title, inner) { return inner ? '<div class="scard"><h3>' + esc(title) + '</h3>' + inner + '</div>' : ''; }

  function renderReading(u) {
    var pgs = (u.reading && u.reading.paragraphs) || [];
    return pgs.map(function (p, i) {
      return '<div class="rpara" data-i="' + i + '">' +
        '<div class="rzh">' + esc(scriptText(p)) + '</div>' +
        '<div class="ren" hidden>' + esc(p.en) + '</div>' +
        '</div>';
    }).join('');
  }

  function bindReading() {
    Array.prototype.forEach.call(app.querySelectorAll('.rpara'), function (el) {
      el.onclick = function () { var e = el.querySelector('.ren'); e.hidden = !e.hidden; el.classList.toggle('open', !e.hidden); };
    });
  }

  function renderGrammarCard(g) {
    var head = '<div class="gpoint">' + esc(g.point) + '</div>' + (g.py ? '<div class="gpy">' + esc(g.py) + '</div>' : '') +
      '<div class="gexpl">' + esc(g.en) + '</div>';
    var ex = (g.examples || []).map(function (e) {
      return '<div class="gex">' +
        '<div class="gexzh">' + esc(scriptText(e)) + (e.sense ? ' <span class="sense">(' + esc(e.sense) + ')</span>' : '') + '</div>' +
        '<div class="gexpy">' + plainPinyin(e.py) + '</div>' +
        '<div class="gexen">' + esc(e.en) + '</div>' +
        '</div>';
    }).join('');
    var disc = '';
    if (g.discrimination) {
      disc = '<div class="disc">' + g.discrimination.map(function (row) {
        return '<div class="drow"><div class="dcell"><b>如何</b><br>' + esc(row.ruhe) + '</div><div class="dcell"><b>怎么</b><br>' + esc(row.zenme) + '</div></div>';
      }).join('') + '</div>';
    }
    return '<div class="gcard">' + head + ex + disc + '</div>';
  }

  function renderCollocations(u) {
    return '<div class="coll">' + (u.collocations || []).map(function (c) {
      return '<div class="crow"><div class="cverb">' + esc(c.verb) + '</div><div class="cplus">+</div><div class="cobj">' + esc(c.objects) + '</div><div class="cen">' + esc(c.en) + '</div></div>';
    }).join('') + '</div>';
  }

  function renderReflection(u) {
    if (!u.reflection) return '';
    var key = 'reflect.' + u.id;
    var saved = A.store.get(key, '');
    return '<div class="reflect">' +
      '<p class="rprompt">' + esc(u.reflection.prompt_en) + '</p>' +
      '<ul class="rq">' + u.reflection.questions.map(function (q) { return '<li>' + esc(q) + '</li>'; }).join('') + '</ul>' +
      '<textarea id="rtext" rows="5" placeholder="Write your reflection here (saved on this device only)…">' + esc(saved) + '</textarea>' +
      '</div>';
  }

  function renderUnit(u) {
    var L = lessonFor(u);
    app.innerHTML = '<div class="screen study unit has-tabs" style="--acc:' + (L ? A.acc(L) : '#4fd1c5') + '">' +
      '<div class="topbar"><button class="btn" data-go="#/study">‹ Study</button><span class="spacer"></span>' + A.themeSeg() + A.scriptToggle() + A.walletPill() + '</div>' +
      '<div class="uscroll">' +
      '<div class="uhero"><div class="uheroZh">' + esc(scriptText(u.title)) + '</div><div class="uheroEn">' + esc(u.en) + '</div>' + (u.source ? '<div class="usource">' + esc(u.source) + '</div>' : '') + '</div>' +
      section('📖 Reading — tap a line for English', renderReading(u)) +
      (u.grammar || []).map(function (g) { return section('💡 ' + g.point, renderGrammarCard(g)); }).join('') +
      section('🧩 Word Collocations', u.collocations ? renderCollocations(u) : '') +
      section('✏️ Reflect (write in Chinese — not graded)', renderReflection(u)) +
      '<div class="uactions">' +
      (L ? '<button class="btn primary big" data-go="#/l/' + L.id + '">✍️ Practice writing this unit’s words</button>' : '') +
      '<button class="btn big" data-go="#/study/' + u.id + '/quiz">✅ Check my understanding (' + (u.cfu ? u.cfu.length : 0) + ' questions)</button>' +
      '<button class="btn big" data-go="#/g/blank">✍️ Fill the Blank</button>' +
      '<button class="btn big" data-go="#/g/sentences">🧱 Sentence Builder</button>' +
      '</div>' +
      '</div>' + A.tabbar('study') + '</div>';
    A.bindTop(function () { renderUnit(u); });
    bindReading();
    var rt = $('rtext');
    if (rt) rt.onblur = function () { A.store.set('reflect.' + u.id, rt.value); };
  }

  function renderCFU(u) {
    var qs = u.cfu || [];
    if (!qs.length) return A.go('#/study/' + u.id);
    var idx = 0, good = 0, alive = true;
    A.onLeave(function () { alive = false; });
    function draw() {
      if (!alive) return;
      if (idx >= qs.length) {
        alive = false;
        var pts = good * 3;
        if (pts) A.earn(pts);
        app.innerHTML = '<div class="screen study"><div class="topbar"><button class="btn" data-go="#/study/' + u.id + '">‹ ' + esc(u.en) + '</button>' + A.walletPill() + '</div>' +
          '<div class="cfudone"><div class="bigemoji">' + (good === qs.length ? '🏆' : '✅') + '</div><h2>' + good + ' / ' + qs.length + ' correct</h2>' +
          (pts ? '<p>You earned ⭐ ' + pts + '!</p>' : '<p>No points this round — want to try again?</p>') +
          '<button class="btn primary big" data-go="#/study/' + u.id + '/quiz">Try again</button>' +
          '<button class="btn big" data-go="#/study/' + u.id + '">Back to unit</button>' +
          '</div></div>';
        A.bindTop(function () {});
        return;
      }
      var q = qs[idx];
      app.innerHTML = '<div class="screen study cfu"><div class="topbar"><button class="btn" id="cquit">✕ Quit</button><span class="title">Q ' + (idx + 1) + ' / ' + qs.length + '</span>' + A.walletPill() + '</div>' +
        '<div class="cfuq">' + esc(q.q) + '</div>' +
        '<div class="cfuopts">' + q.choices.map(function (c, i) { return '<button class="cfuopt" data-i="' + i + '">' + esc(c) + '</button>'; }).join('') + '</div>' +
        '<div class="cfumsg" id="cfumsg">&nbsp;</div></div>';
      $('cquit').onclick = function () { alive = false; A.go('#/study/' + u.id); };
      Array.prototype.forEach.call(app.querySelectorAll('.cfuopt'), function (b) {
        b.onclick = function () {
          if (b.disabled || !alive) return;
          Array.prototype.forEach.call(app.querySelectorAll('.cfuopt'), function (x) { x.disabled = true; });
          var i = parseInt(b.getAttribute('data-i'), 10), right = i === q.answer;
          b.classList.add(right ? 'right' : 'wrong');
          if (!right) { var rb = app.querySelector('.cfuopt[data-i="' + q.answer + '"]'); if (rb) rb.classList.add('right'); }
          if (right) { good++; FX.ding(); } else FX.oops();
          $('cfumsg').textContent = (right ? 'Correct! ' : 'Not quite. ') + (q.explain || '');
          A.later(function () { idx++; draw(); }, 1600);
        };
      });
    }
    draw();
  }

  A.routes.study = function (parts) {
    if (!parts[0]) return renderList();
    var u = unitById(parts[0]);
    if (!u) return renderList();
    if (parts[1] === 'quiz') return renderCFU(u);
    return renderUnit(u);
  };
});
