/* Pet: an animated pomeranian. Readings earn kibble (🥣) that keeps it fed; stars buy treats that make it dance, jump and spin;
   a big saving goal lets her adopt more dogs. No fail states: the dog is never sad, only cheerfully "hungry".
   Save key: hanzi.pet. All CSS classes start with pt-. */
(window.HANZI_MODS = window.HANZI_MODS || []).push(function (A) {
  'use strict';
  var FX = A.FX, app = A.app, store = A.store;
  function esc(s) { return A.esc(s); }

  /* ---------------- the dogs (same chibi shape, different fur) ---------------- */
  var COLORS = {
    sunset: { name: 'Sunset orange', fur: '#e8832e', dark: '#d26d1a', chest: '#fff0d8', mask: '#ffd9a8', ear: '#ffb0a0', blush: '#ff8f7a', price: 200 },
    honey:  { name: 'Honey cream',   fur: '#eec88a', dark: '#dcae68', chest: '#fff6e6', mask: '#fbe6c4', ear: '#ffb7a8', blush: '#ff9d8a', price: 200 },
    choco:  { name: 'Chocolate',     fur: '#8a5a3c', dark: '#6f452b', chest: '#f3dcc0', mask: '#e0b78e', ear: '#e8a79a', blush: '#f09a88', price: 200 },
    black:  { name: 'Black and tan', fur: '#4a3a38', dark: '#362a28', chest: '#f0d2a8', mask: '#d9a066', ear: '#c98a8a', blush: '#e8907e', price: 300 },
    snow:   { name: 'Snow white',    fur: '#ffffff', dark: '#e3e8f0', chest: '#f7f9fc', mask: '#f1f3f8', ear: '#ffc2d1', blush: '#ffa3b8', price: 450 },
    candy:  { name: 'Cotton candy',  fur: '#f7a8d0', dark: '#e98fbd', chest: '#fff0f7', mask: '#ffd6ea', ear: '#ffc2de', blush: '#ff8fb8', price: 700 }
  };
  var ORDER = ['sunset', 'honey', 'choco', 'black', 'snow', 'candy'];
  var STARTERS = ['sunset', 'honey', 'choco'];
  var NAMES = ['Mochi', 'Bao', 'Dumpling', 'Peach', 'Biscuit', 'Boba', 'Pudding', 'Nugget', 'Sesame', 'Mango', 'Cookie', 'Panda'];

  /* ---------------- foods: kibble comes from readings; treats are bought with stars; each treat gets its own trick ---------------- */
  var FOODS = [
    { id: 'carrot', e: '🥕', name: 'Carrot', price: 5, trick: 'wiggle', full: 8, love: 2 },
    { id: 'bone', e: '🦴', name: 'Bone', price: 8, trick: 'chew', full: 10, love: 3 },
    { id: 'sausage', e: '🌭', name: 'Sausage', price: 15, trick: 'spin', full: 12, love: 4 },
    { id: 'drumstick', e: '🍗', name: 'Drumstick', price: 20, trick: 'dance', full: 12, love: 5 },
    { id: 'steak', e: '🥩', name: 'Steak', price: 30, trick: 'jump', full: 15, love: 6 },
    { id: 'cupcake', e: '🧁', name: 'Pup-cake', price: 45, trick: 'party', full: 10, love: 8 },
    { id: 'cake', e: '🍰', name: 'Cake', price: 60, trick: 'flip', full: 10, love: 10 }
  ];
  function foodById(id) { return FOODS.filter(function (f) { return f.id === id; })[0]; }
  var KIBBLE = { id: 'kibble', e: '🥣', name: 'Kibble', trick: 'chew', full: 30, love: 1 };

  /* little Chinese the dog "says" (flavor words, shown with pinyin) */
  var SAY = {
    woof: { s: '汪汪', t: '汪汪', py: 'wang1 wang1', en: 'woof woof' },
    yum: { s: '好吃', t: '好吃', py: 'hao3 chi1', en: 'yummy' },
    hungry: { s: '好饿', t: '好餓', py: 'hao3 e4', en: 'so hungry' },
    thanks: { s: '谢谢', t: '謝謝', py: 'xie4 xie5', en: 'thank you' },
    love: { s: '我爱你', t: '我愛你', py: 'wo3 ai4 ni3', en: 'I love you' }
  };

  /* ---------------- saved state ---------------- */
  var P = store.get('pet', null) || { dogs: [], cur: null, kibble: 0, stock: {}, goal: null, next: 1 };
  function save() { store.set('pet', P); }
  function dog() { return P.dogs.filter(function (d) { return d.id === P.cur; })[0] || P.dogs[0] || null; }
  // fullness drifts down slowly while she is away, but never below 20 (the pup is never in trouble)
  function refresh(d) {
    var now = Date.now(), hours = Math.max(0, (now - (d.t || now)) / 3600000);
    d.full = Math.max(20, Math.min(100, (d.full == null ? 80 : d.full) - hours * 4));
    d.t = now;
  }
  A.addKibble = function (n) { P.kibble = (P.kibble || 0) + n; save(); return n; };
  A.petDog = function () { var d = dog(); return d ? { color: d.color, name: d.name } : null; };
  A.petSVG = function (color) { return dogSVG(color); };

  A.tabs.push({ id: 'pet', icon: '🐶', label: 'Pet', href: '#/pet', order: 35 });
  A.routes.pet = function (p) {
    if (!P.dogs.length) return renderAdopt();
    if (p[0] === 'food') return renderFood();
    if (p[0] === 'dogs') return renderDogs();
    renderPet();
  };

  /* ---------------- the dog drawing (SVG; every part can animate) ---------------- */
  function ring(cx, cy, rx, ry, n, r, fill) {
    var s = '';
    for (var i = 0; i < n; i++) { var a = i / n * Math.PI * 2; s += '<circle cx="' + (cx + Math.cos(a) * rx).toFixed(1) + '" cy="' + (cy + Math.sin(a) * ry).toFixed(1) + '" r="' + r + '" fill="' + fill + '"/>'; }
    return s;
  }
  function eye(cx) {
    var r = 8.6;
    return '<g class="pt-eye"><circle cx="' + cx + '" cy="82" r="' + r + '" fill="#2b1d17"/><circle cx="' + (cx + r * .3) + '" cy="' + (82 - r * .35) + '" r="' + (r * .38) + '" fill="#fff"/><circle cx="' + (cx - r * .3) + '" cy="' + (82 + r * .35) + '" r="' + (r * .18) + '" fill="#fff"/></g>';
  }
  function dogSVG(key) {
    var c = COLORS[key] || COLORS.sunset;
    var head = '<g transform="translate(100 98) scale(1.28) translate(-100 -85)">' +
      '<g class="pt-earL"><path d="M68 56 Q64 38 72 34 Q86 38 92 52 Z" fill="' + c.fur + '"/><path d="M72 51 Q70 42 74 40 Q82 43 85 50 Z" fill="' + c.ear + '"/></g>' +
      '<g class="pt-earR"><path d="M132 56 Q136 38 128 34 Q114 38 108 52 Z" fill="' + c.fur + '"/><path d="M128 51 Q130 42 126 40 Q118 43 115 50 Z" fill="' + c.ear + '"/></g>' +
      ring(100, 88, 40, 36, 30, 7, c.fur) + '<ellipse cx="100" cy="86" rx="42" ry="38" fill="' + c.fur + '"/>' +
      '<path d="M100 60 Q80 62 70 90 Q82 112 100 112 Q118 112 130 90 Q120 62 100 60Z" fill="' + c.mask + '"/>' +
      '<ellipse cx="100" cy="102" rx="20" ry="14" fill="' + c.chest + '"/>' + eye(82) + eye(118) +
      '<ellipse cx="72" cy="98" rx="8" ry="5" fill="' + c.blush + '" opacity=".6"/><ellipse cx="128" cy="98" rx="8" ry="5" fill="' + c.blush + '" opacity=".6"/>' +
      '<ellipse cx="100" cy="93" rx="6" ry="4.2" fill="#3a2620"/><ellipse cx="98.5" cy="91.8" rx="2" ry="1.1" fill="#fff" opacity=".7"/>' +
      '<path class="pt-smile" d="M100 97 Q100 105 92 104 M100 97 Q100 105 108 104" stroke="#3a2620" stroke-width="2.4" fill="none" stroke-linecap="round"/>' +
      '<g class="pt-open"><path d="M91 100 Q100 118 109 100 Q100 104 91 100Z" fill="#8f2f3a"/><ellipse cx="100" cy="110" rx="6" ry="4.2" fill="#ff8da1"/></g></g>';
    var body = '<g transform="translate(100 168) scale(.72) translate(-100 -150)">' +
      '<g class="pt-tail">' + ring(152, 128, 13, 17, 16, 7, c.fur) + '<circle cx="152" cy="128" r="17" fill="' + c.dark + '"/></g>' +
      ring(100, 150, 40, 28, 26, 8, c.fur) + '<ellipse cx="100" cy="150" rx="42" ry="30" fill="' + c.fur + '"/>' +
      '<ellipse cx="100" cy="158" rx="22" ry="20" fill="' + c.chest + '"/><ellipse cx="80" cy="180" rx="13" ry="9" fill="' + c.chest + '"/><ellipse cx="120" cy="180" rx="13" ry="9" fill="' + c.chest + '"/></g>';
    return '<svg class="pt-svg" viewBox="0 0 200 200" aria-hidden="true"><ellipse cx="100" cy="192" rx="52" ry="7" fill="#000" opacity=".12"/>' +
      '<g class="pt-wrap"><g class="pt-body">' + body + head + '</g></g>' +
      '<text class="pt-food" x="100" y="122" text-anchor="middle" font-size="34"></text>' +
      '<text class="pt-fx pt-fx1" x="142" y="52" font-size="26">❤️</text><text class="pt-fx pt-fx2" x="50" y="64" font-size="22">💕</text><text class="pt-fx pt-fx3" x="100" y="36" font-size="22">✨</text></svg>';
  }
  function say(k) { var w = SAY[k], t = A.script() === 't'; return '<b>' + esc(t ? w.t : w.s) + '</b> ' + A.pinyinHTML(w.py, null, 'sm') + ' <i>' + esc(w.en) + '</i>'; }

  /* ---------------- adoption (first run) ---------------- */
  function pickName() { return NAMES[Math.floor(Math.random() * NAMES.length)]; }
  function adoptDog(color, name) {
    var d = { id: 'd' + (P.next++), color: color, name: (name || '').trim().slice(0, 12) || pickName(), full: 90, t: Date.now(), love: 0 };
    P.dogs.push(d); P.cur = d.id; save(); return d;
  }
  function renderAdopt() {
    var chosen = STARTERS[0];
    app.innerHTML =
      '<div class="screen has-tabs">' +
      '<div class="topbar"><span class="title gtitle">🐶 Your pup</span>' + A.walletPill() + '</div>' +
      '<div class="pt-adopt"><h2>Choose your first puppy!</h2><p>It is free. Later you can save your stars to adopt more.</p>' +
      '<div class="pt-picks" id="ptpicks">' + STARTERS.map(function (k) {
        return '<button class="pt-pick' + (k === chosen ? ' on' : '') + '" data-c="' + k + '"><span class="pt-mini pt-r-idle">' + dogSVG(k) + '</span><span class="pt-pn">' + COLORS[k].name + '</span></button>';
      }).join('') + '</div>' +
      '<label class="pt-namebox">Name your puppy <input id="ptname" maxlength="12" autocomplete="off" autocapitalize="words" value="' + esc(pickName()) + '"></label>' +
      '<button class="btn primary pt-big" id="ptgo">🐾 Adopt!</button></div>' + A.tabbar('pet') + '</div>';
    document.getElementById('ptpicks').onclick = function (e) {
      var b = e.target.closest('.pt-pick'); if (!b) return;
      chosen = b.getAttribute('data-c');
      Array.prototype.forEach.call(document.querySelectorAll('.pt-pick'), function (x) { x.classList.toggle('on', x === b); });
    };
    document.getElementById('ptgo').onclick = function () {
      adoptDog(chosen, document.getElementById('ptname').value);
      FX.fanfare(); FX.confetti({ kind: 'big' }); A.go('#/pet');
    };
  }

  /* ---------------- main pet screen ---------------- */
  var timers = [], busy = false;
  function clearTimers() { timers.forEach(clearTimeout); timers = []; busy = false; }
  function tm(fn, ms) { timers.push(setTimeout(fn, ms)); }
  function level(d) { return Math.min(10, 1 + Math.floor((d.love || 0) / 20)); }
  function mood(d) { return d.full >= 70 ? 'Full and happy!' : d.full >= 40 ? 'Doing great!' : 'Tummy rumbling... a snack would be wonderful! 🥣'; }

  function tray(d) {
    var items = [];
    if (P.kibble > 0) items.push({ f: KIBBLE, n: P.kibble });
    FOODS.forEach(function (f) { if ((P.stock[f.id] || 0) > 0) items.push({ f: f, n: P.stock[f.id] }); });
    if (!items.length) return '<div class="pt-empty">Nothing to eat yet. 🥣 Kibble comes from <b>reading stories</b>. Treats come from the Food shop.</div>';
    return items.map(function (it) {
      return '<button class="pt-food-btn" data-food="' + it.f.id + '" aria-label="Give ' + it.f.name + '"><span class="pt-fe">' + it.f.e + '</span><span class="pt-fn">' + it.f.name + '</span><b class="pt-fcount">×' + it.n + '</b></button>';
    }).join('');
  }
  function goalLine() {
    if (!P.goal || P.dogs.some(function (x) { return x.color === P.goal; })) return '';
    var c = COLORS[P.goal], have = A.wallet().bal + A.wallet().gold * A.goldWorth, pct = Math.min(100, Math.round(have / c.price * 100));
    return '<button class="pt-goal" data-go="#/pet/dogs">⭐ Saving for ' + esc(c.name) + ': <b>' + pct + '%</b><span class="pt-bar"><i style="width:' + pct + '%"></i></span></button>';
  }
  function header(mode) {
    var d = dog();
    return '<div class="topbar"><span class="title gtitle">🐶 ' + esc(d.name) + '</span>' + A.walletPill() + '</div>' +
      '<div class="modebar"><div class="seg" role="group" aria-label="Pet screens">' +
      '<button data-go="#/pet" class="' + (mode === 'pet' ? 'on' : '') + '">🐾 Pet</button>' +
      '<button data-go="#/pet/food" class="' + (mode === 'food' ? 'on' : '') + '">🍖 Food shop</button>' +
      '<button data-go="#/pet/dogs" class="' + (mode === 'dogs' ? 'on' : '') + '">🏠 Dogs</button></div></div>';
  }

  function renderPet() {
    clearTimers();
    var d = dog(); refresh(d); save();
    app.innerHTML =
      '<div class="screen has-tabs">' + header('pet') +
      '<div class="pt-stage-wrap"><div class="pt-stage pt-r-idle' + (d.full < 40 ? ' pt-hungry' : '') + '" id="ptstage">' +
      '<div class="pt-bubble" id="ptbubble" hidden></div>' + dogSVG(d.color) + '</div></div>' +
      '<div class="pt-stats"><div class="pt-stat"><span>Tummy</span><span class="pt-bar"><i id="ptfull" style="width:' + Math.round(d.full) + '%"></i></span></div>' +
      '<div class="pt-stat pt-lv"><span>Love ❤️ Lv ' + level(d) + '</span><span class="pt-bar love"><i id="ptlove" style="width:' + (level(d) >= 10 ? 100 : ((d.love || 0) % 20) * 5) + '%"></i></span></div></div>' +
      '<div class="pt-mood" id="ptmood">' + mood(d) + '</div>' +
      goalLine() +
      '<div class="section-title">Feed ' + esc(d.name) + '</div><div class="pt-tray" id="pttray">' + tray(d) + '</div>' +
      '<div class="pt-tip">Tap your pup to say hi! 👋</div>' +
      A.tabbar('pet') + '</div>';
    A.onLeave(clearTimers);
    var stage = document.getElementById('ptstage');
    stage.onclick = function () { if (!busy) pet(d); };
    document.getElementById('pttray').onclick = function (e) {
      var b = e.target.closest('[data-food]'); if (!b || busy) return;
      give(d, b.getAttribute('data-food'));
    };
    if (d.full < 40) speak('hungry');
  }

  function speak(k, ms) {
    var b = document.getElementById('ptbubble'); if (!b) return;
    b.innerHTML = say(k); b.hidden = false;
    tm(function () { b.hidden = true; }, ms || 2600);
  }
  function setClass(name) {
    var st = document.getElementById('ptstage'); if (!st) return null;
    st.className = 'pt-stage pt-r-' + name;
    void st.offsetWidth; return st;
  }
  function idle(d) {
    var st = document.getElementById('ptstage'); if (!st) return;
    st.className = 'pt-stage pt-r-idle' + (d.full < 40 ? ' pt-hungry' : '');
    busy = false;
  }
  function pet(d) {
    busy = true; FX.pop(); setClass('wiggle'); speak('woof', 1800);
    d.love = (d.love || 0) + 0;   // tapping is just for fun: it never pays, so there is nothing to farm
    tm(function () { idle(d); }, 1500);
  }
  var TRICK_MS = { chew: 2800, wiggle: 1800, spin: 2000, dance: 3800, jump: 2400, party: 4200, flip: 2600 };
  function give(d, id) {
    var f = id === 'kibble' ? KIBBLE : foodById(id); if (!f) return;
    if (id === 'kibble') { if (!(P.kibble > 0)) return; P.kibble--; } else { if (!(P.stock[id] > 0)) return; P.stock[id]--; }
    var lv0 = level(d);
    d.full = Math.min(100, d.full + f.full); d.love = (d.love || 0) + f.love; d.t = Date.now(); save();
    busy = true;
    var st = setClass(f.trick); st.querySelector('.pt-food').textContent = f.e;
    FX.pop(); speak('yum', 1800);
    if (f.trick === 'party' || f.trick === 'flip') { FX.fanfare(); FX.confetti({ kind: 'big' }); } else if (f.trick === 'dance' || f.trick === 'jump') { FX.ding(); }
    tm(function () { speak(level(d) > lv0 ? 'love' : 'thanks', 2200); }, 1300);
    var full = document.getElementById('ptfull'), love = document.getElementById('ptlove');
    if (full) full.style.width = Math.round(d.full) + '%';
    if (love) love.style.width = (level(d) >= 10 ? 100 : ((d.love || 0) % 20) * 5) + '%';
    var mo = document.getElementById('ptmood'); if (mo) mo.textContent = level(d) > lv0 ? 'Level up! ' + esc(d.name) + ' is now Love Lv ' + level(d) + ' 🎉' : mood(d);
    var tr = document.getElementById('pttray'); if (tr) tr.innerHTML = tray(d);
    tm(function () { idle(d); }, TRICK_MS[f.trick] || 2500);
  }

  /* ---------------- food shop ---------------- */
  function renderFood() {
    clearTimers();
    var d = dog();
    app.innerHTML =
      '<div class="screen has-tabs">' + header('food') +
      '<p class="shophint">Treats cost ⭐ (🌟 counts as ' + A.goldWorth + ' ⭐). Every treat makes ' + esc(d.name) + ' do something different!</p>' +
      '<div class="pt-shop">' + FOODS.map(function (f) {
        var have = P.stock[f.id] || 0, ok = A.canAfford(f.price);
        return '<div class="pt-item"><span class="pt-ie">' + f.e + '</span><span class="pt-in"><b>' + f.name + '</b><small>Trick: ' + trickName(f.trick) + (have ? ' · you have ' + have : '') + '</small></span>' +
          '<button class="btn pt-buy' + (ok ? ' primary' : '') + '" data-buy="' + f.id + '"' + (ok ? '' : ' disabled') + '>⭐ ' + f.price + '</button></div>';
      }).join('') + '</div>' +
      '<p class="shophint">🥣 Kibble is free: you earn it by <b>reading stories</b>.</p>' +
      A.tabbar('pet') + '</div>';
    app.querySelector('.pt-shop').onclick = function (e) {
      var b = e.target.closest('[data-buy]'); if (!b || b.disabled) return;
      var f = foodById(b.getAttribute('data-buy'));
      if (!A.spendMixed(f.price)) return;
      P.stock[f.id] = (P.stock[f.id] || 0) + 1; save(); FX.pop();
      A.toast(f.e + ' ' + f.name + ' bought!'); renderFood();
    };
  }
  function trickName(t) { return { wiggle: 'happy wiggle', chew: 'happy munch', spin: 'spin', dance: 'dance', jump: 'big jump', party: 'party!', flip: 'flip!' }[t] || t; }

  /* ---------------- dog store (save up for more dogs) ---------------- */
  function renderDogs() {
    clearTimers();
    var d = dog(), have = A.wallet().bal + A.wallet().gold * A.goldWorth;
    app.innerHTML =
      '<div class="screen has-tabs">' + header('dogs') +
      '<p class="shophint">New friends are special, so they cost a lot. Saving up your ⭐ takes patience, and it feels great when you get there! 🐷</p>' +
      '<div class="pt-dogs">' + ORDER.map(function (k) {
        var c = COLORS[k], owned = P.dogs.filter(function (x) { return x.color === k; })[0];
        var pct = Math.min(100, Math.round(have / c.price * 100)), ok = have >= c.price;
        var action = owned ? (owned.id === P.cur ? '<span class="pt-here">✓ With you now</span>' : '<button class="btn" data-switch="' + owned.id + '">Play with ' + esc(owned.name) + '</button>')
          : '<span class="pt-bar"><i style="width:' + pct + '%"></i></span><div class="pt-prow"><b>⭐ ' + c.price + '</b>' + (ok ? '<button class="btn primary" data-adopt="' + k + '">Adopt!</button>' : '<button class="btn' + (P.goal === k ? ' on' : '') + '" data-goal="' + k + '">' + (P.goal === k ? '⭐ My goal' : 'Save for this') + '</button>') + '</div>' + (ok ? '' : '<small>' + (c.price - have) + ' more ⭐ to go</small>');
        return '<div class="pt-dcard' + (owned ? ' owned' : '') + '"><span class="pt-mini pt-r-idle">' + dogSVG(k) + '</span><b>' + c.name + '</b>' + (owned ? '<small>' + esc(owned.name) + '</small>' : '') + action + '</div>';
      }).join('') + '</div>' + A.tabbar('pet') + '</div>';
    app.querySelector('.pt-dogs').onclick = function (e) {
      var b = e.target.closest('button'); if (!b) return;
      if (b.getAttribute('data-switch')) { P.cur = b.getAttribute('data-switch'); save(); return A.go('#/pet'); }
      if (b.getAttribute('data-goal')) { P.goal = b.getAttribute('data-goal'); save(); return renderDogs(); }
      var k = b.getAttribute('data-adopt');
      if (k) nameAndAdopt(k);
    };
  }
  function nameAndAdopt(k) {
    var c = COLORS[k], el = document.createElement('div');
    el.className = 'win pt-name-overlay';
    el.innerHTML = '<div class="wincard"><div class="win-emoji"><span class="pt-mini pt-r-idle">' + dogSVG(k) + '</span></div><div class="win-title">Adopt ' + esc(c.name) + '!</div>' +
      '<label class="pt-namebox">Name your puppy <input id="ptn2" maxlength="12" autocomplete="off" value="' + esc(pickName()) + '"></label>' +
      '<div class="win-btns"><button class="btn primary" id="ptok">🐾 Adopt for ⭐ ' + c.price + '</button><button class="btn" id="ptno">Not yet</button></div></div>';
    document.body.appendChild(el);
    document.getElementById('ptno').onclick = function () { el.remove(); };
    document.getElementById('ptok').onclick = function () {
      if (!A.spendMixed(c.price)) { el.remove(); return; }
      adoptDog(k, document.getElementById('ptn2').value);
      if (P.goal === k) P.goal = null; save();
      el.remove(); FX.fanfare(); FX.confetti({ kind: 'big' }); A.go('#/pet');
    };
  }
});
