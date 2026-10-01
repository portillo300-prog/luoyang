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
    var clean = py.replace(/[,.!?:;“”…]/g, '').replace(/\s+/g, ' ').trim();
    return clean ? A.pinyinHTML(clean, null, 'sm') : '';
  }

  function unitCard(u) {
    var L = lessonFor(u);
    return '<button class="ucard" data-go="#/study/' + u.id + '" style="--acc:' + (L ? A.acc(L) : '#4fd1c5') + '">' +
      '<div class="unum">Chapter ' + (L ? L.number : '') + '</div>' +
      '<div class="uzh">' + esc(scriptText(u.title)) + '</div>' +
      '<div class="uen">' + esc(u.en) + '</div>' +
      '</button>';
  }

  function renderList() {
    var units = C.units || [];
    app.innerHTML = '<div class="screen study has-tabs">' +
      '<div class="topbar"><span class="title">📖 Study</span><span class="spacer"></span>' + A.themeSeg() + A.scriptToggle() + A.walletPill() + '</div>' +
      '<div class="ulist">' + (A.phrasesCard ? A.phrasesCard() : '') + (units.length ? units.map(unitCard).join('') : '<p class="muted">No units yet — send more textbook photos!</p>') + '</div>' +
      A.tabbar('study') + '</div>';
    A.bindTop(renderList);
  }

  function section(title, inner) { return inner ? '<div class="usec"><h3>' + esc(title) + '</h3>' + inner + '</div>' : ''; }

  var openEn = {};   // which sentence translations are open (kept across redraws): "unit|sec|para|sentence"
  function renderPara(p, i, uid, sec) {
    if (p.sentences && p.sentences.length) {
      return '<div class="rpara sent" data-i="' + i + '" data-sec="' + sec + '"><div class="rzh">' + p.sentences.map(function (x, k) {
        var inner = A.markup ? A.markup(uid, sec, i, k, x) : esc(scriptText(x)), open = openEn[uid + '|' + sec + '|' + i + '|' + k];
        return '<span class="rsent' + (open ? ' on' : '') + '" data-k="' + k + '" data-en="' + esc(x.en) + '">' + inner + '</span>' +
          (open ? '<span class="ren-inline">' + esc(x.en) + '</span>' : '');
      }).join('') + '</div></div>';
    }
    return '<div class="rpara" data-i="' + i + '">' +
      '<div class="rzh">' + esc(scriptText(p)) + '</div>' +
      '<div class="ren" hidden>' + esc(p.en) + '</div>' +
      '</div>';
  }

  function renderReading(u) {
    var pgs = (u.reading && u.reading.paragraphs) || [];
    return pgs.map(function (p, i) { return renderPara(p, i, u.id, 'r'); }).join('');
  }

  function renderBackground(u) {
    var pgs = (u.background && u.background.paragraphs) || [];
    return pgs.map(function (p, i) { return renderPara(p, i, u.id, 'b'); }).join('');
  }

  function bindReading() {
    /* whole-paragraph translation (older units) */
    Array.prototype.forEach.call(app.querySelectorAll('.rpara:not(.sent)'), function (el) {
      el.onclick = function () { var e = el.querySelector('.ren'); e.hidden = !e.hidden; el.classList.toggle('open', !e.hidden); };
    });
    /* one-sentence translation: tap a sentence and its English opens RIGHT UNDER it; tap again to close.
       Several can stay open at once. Nothing is redrawn, so the page does not jump. */
    Array.prototype.forEach.call(app.querySelectorAll('.rsent'), function (sp) {
      sp.onclick = function () {
        var g = window.getSelection && window.getSelection();
        if (g && !g.isCollapsed) return;                       // the reader is selecting text, not tapping
        var para = sp.closest('.rpara'), sc = sp.closest('.uscroll');
        var key = (sc ? sc.getAttribute('data-uid') : '') + '|' + para.getAttribute('data-sec') + '|' + para.getAttribute('data-i') + '|' + sp.getAttribute('data-k');
        var nxt = sp.nextElementSibling;
        if (nxt && nxt.classList.contains('ren-inline')) { nxt.parentNode.removeChild(nxt); sp.classList.remove('on'); delete openEn[key]; }
        else { sp.insertAdjacentHTML('afterend', '<span class="ren-inline">' + esc(sp.getAttribute('data-en')) + '</span>'); sp.classList.add('on'); openEn[key] = 1; }
      };
    });
  }

  function renderGrammarCard(g) {
    var head = '<div class="gpoint">' + esc(g.point) + '</div>' + (g.py ? '<div class="gpy">' + plainPinyin(g.py) + '</div>' : '') +
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
      var lab = g.labels || ['如何', A.script() === 't' ? '怎麼' : '怎么'];
      disc = '<div class="disc">' + g.discrimination.map(function (row) {
        return '<div class="drow"><div class="dcell"><b>' + esc(lab[0]) + '</b><br>' + esc(row.a || row.ruhe) + '</div><div class="dcell"><b>' + esc(lab[1]) + '</b><br>' + esc(row.b || row.zenme) + '</div></div>';
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

  var curUnit = null;
  // redraw the open unit (after saving a phrase, toggling expressions...) without losing the reader's place
  A.redrawUnit = function () {
    if (!curUnit || !app.querySelector('.uscroll')) return;
    var sc = app.querySelector('.uscroll'), y = sc.scrollTop;
    renderUnit(curUnit);
    var sc2 = app.querySelector('.uscroll'); if (sc2 && y) sc2.scrollTop = y;
  };

  function renderUnit(u) {
    var L = lessonFor(u);
    app.innerHTML = '<div class="screen study unit has-tabs" style="--acc:' + (L ? A.acc(L) : '#4fd1c5') + '">' +
      '<div class="topbar"><button class="btn" data-go="#/study">‹ Study</button><span class="spacer"></span>' + A.themeSeg() + A.scriptToggle() + A.walletPill() + '</div>' +
      '<div class="uscroll" data-uid="' + u.id + '">' +
      '<div class="uhero"><div class="uheroZh">' + esc(scriptText(u.title)) + '</div><div class="uheroEn">' + esc(u.en) + '</div>' + (u.source ? '<div class="usource">' + esc(u.source) + '</div>' : '') + '</div>' +
      (A.exprToggle ? A.exprToggle(u) : '') +
      section('📖 Reading — tap a sentence for English', renderReading(u)) +
      (u.grammar || []).map(function (g) { return section('💡 ' + A.T(g.point), renderGrammarCard(g)); }).join('') +
      section('🧭 ' + ((u.background && u.background.en) || 'Background'), u.background ? renderBackground(u) : '') +
      section('🧩 Word Collocations', u.collocations ? renderCollocations(u) : '') +
      section('✏️ Reflect (write in Chinese — not graded)', renderReflection(u)) +
      '<div class="uactions">' +
      (L ? '<button class="btn primary big" data-go="#/l/' + L.id + '">✍️ Practice writing this unit’s words</button>' : '') +
      '<button class="btn big" data-go="#/study/' + u.id + '/quiz">✅ Check my understanding (' + (u.cfu ? u.cfu.length : 0) + ' questions)</button>' +
      '<button class="btn big" data-go="#/g/blank">✍️ Fill the Blank</button>' +
      '<button class="btn big" data-go="#/g/sentences">🧱 Sentence Builder</button>' +
      '</div>' +
      '</div>' + A.tabbar('study') + '</div>';
    curUnit = u;
    A.bindTop(function () { renderUnit(u); });
    bindReading();
    if (A.afterUnit) A.afterUnit(u);
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
