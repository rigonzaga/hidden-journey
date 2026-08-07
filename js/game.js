/* Ivy's Hidden Journey — game engine */
(function () {
  'use strict';

  var STORAGE_KEY = 'ivy-journey-v1';
  var PURPLE_IDS = { lightstick: true, 'purple-heart': true };
  var SVG_NS = 'http://www.w3.org/2000/svg';

  var scenes = (window.SCENES || []).slice().sort(function (a, b) {
    return a.order - b.order;
  });

  var app = document.getElementById('app');
  var state = loadState();
  var hintReadyAt = 0;
  var hintTicker = null;
  var stampTimer = null;

  function loadState() {
    try {
      var raw = JSON.parse(localStorage.getItem(STORAGE_KEY));
      if (raw && typeof raw === 'object' && raw.found && typeof raw.found === 'object') {
        var clean = { found: {} };
        Object.keys(raw.found).forEach(function (k) {
          if (Array.isArray(raw.found[k])) clean.found[k] = raw.found[k].filter(function (v) { return typeof v === 'string'; });
        });
        return clean;
      }
    } catch (e) { /* fresh start */ }
    return { found: {} };
  }

  function saveState() {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch (e) { /* private mode */ }
  }

  function foundList(sceneId) {
    if (!state.found[sceneId]) state.found[sceneId] = [];
    return state.found[sceneId];
  }

  function isFound(sceneId, objId) {
    return foundList(sceneId).indexOf(objId) !== -1;
  }

  function sceneComplete(scene) {
    return scene.objects.every(function (o) { return isFound(scene.id, o.id); });
  }

  function allComplete() {
    return scenes.length > 0 && scenes.every(sceneComplete);
  }

  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
    });
  }

  /* ---------- Home / passport ---------- */

  function renderHome() {
    stopHintTicker();
    if (stampTimer) { clearTimeout(stampTimer); stampTimer = null; }
    var doneCount = scenes.filter(sceneComplete).length;
    var html = '<div class="home"><div class="hero">' +
      '<h1>Ivy’s Hidden Journey</h1>' +
      '<div class="sub">A seek-and-find trip through our favorite places 💜</div>' +
      '<div class="progress-line">' + doneCount + ' of ' + scenes.length + ' journeys stamped</div>' +
      '</div><div class="passport">';

    scenes.forEach(function (s) {
      var found = foundList(s.id).length;
      var done = sceneComplete(s);
      html += '<button class="dest-card' + (done ? ' done' : '') + '" data-scene="' + esc(s.id) + '">' +
        (done ? '<span class="stamp-mark">' + s.stamp + '</span>' : '') +
        '<span class="flag">' + s.flag + '</span>' +
        '<span class="country">' + esc(s.country) + '</span>' +
        '<span class="scene-title">' + esc(s.title) + '</span>' +
        '<span class="obj-progress">' + (done ? 'Stamped!' : found + ' / ' + s.objects.length + ' found') + '</span>' +
        '</button>';
    });

    html += '</div>';

    if (allComplete()) {
      html += '<button class="finale-card" data-action="finale">💌 A message for you</button>';
    } else {
      html += '<div class="finale-card locked">🔒 Finish every journey to unlock a surprise</div>';
    }

    html += '<div class="reset-line"><button data-action="reset">Start the journey over</button></div></div>';

    app.innerHTML = html;

    app.querySelectorAll('.dest-card').forEach(function (btn) {
      btn.addEventListener('click', function () {
        renderScene(btn.getAttribute('data-scene'));
      });
    });
    var finaleBtn = app.querySelector('[data-action="finale"]');
    if (finaleBtn) finaleBtn.addEventListener('click', renderFinale);
    app.querySelector('[data-action="reset"]').addEventListener('click', function () {
      if (window.confirm('Start over? All your stamps will be cleared.')) {
        state = { found: {} };
        saveState();
        renderHome();
      }
    });
  }

  /* ---------- Scene ---------- */

  function renderScene(sceneId) {
    var scene = scenes.filter(function (s) { return s.id === sceneId; })[0];
    if (!scene) { renderHome(); return; }
    stopHintTicker();
    hintReadyAt = 0;

    app.innerHTML = '<div class="scene-screen">' +
      '<div class="scene-header">' +
      '<button class="back-btn" aria-label="Back">‹</button>' +
      '<div class="scene-name">' + scene.flag + ' ' + esc(scene.title) + '</div>' +
      '<button class="hint-btn">Hint 💡</button>' +
      '</div>' +
      '<div class="svg-stage"></div>' +
      '<div class="tray"></div>' +
      '</div>';

    var stage = app.querySelector('.svg-stage');
    stage.innerHTML = scene.svg;
    var svg = stage.querySelector('svg');
    if (!svg) { renderHome(); return; }
    svg.setAttribute('preserveAspectRatio', 'xMidYMid meet');

    var sceneDefs = svg.querySelector('defs');

    // Per-object setup: hit areas, tray icons, restore found state
    var tray = app.querySelector('.tray');
    scene.objects.forEach(function (obj) {
      var g = svg.querySelector('[data-obj="' + obj.id + '"]');
      var chip = document.createElement('button');
      chip.className = 'tray-chip';
      chip.setAttribute('data-chip', obj.id);
      var iconBox = document.createElement('span');
      iconBox.className = 'icon-box';
      if (g) {
        iconBox.appendChild(makeTrayIcon(g, sceneDefs));
        addHitArea(g, svg, obj.id);
        if (isFound(scene.id, obj.id)) {
          g.classList.add('found-obj');
          chip.classList.add('found');
        }
      }
      chip.appendChild(iconBox);
      var label = document.createElement('span');
      label.textContent = obj.name;
      chip.appendChild(label);
      tray.appendChild(chip);
    });

    // Tap handling (delegated)
    svg.addEventListener('click', function (ev) {
      var target = ev.target.closest ? ev.target.closest('[data-obj]') : null;
      if (target) {
        var objId = target.getAttribute('data-obj');
        var known = scene.objects.some(function (o) { return o.id === objId; });
        if (known && !isFound(scene.id, objId)) {
          // resolve to the artwork group (first match in document order),
          // since the tap may have landed on the appended hit-area rect
          onFound(scene, objId, svg.querySelector('[data-obj="' + objId + '"]'), ev);
          return;
        }
      }
      puffAt(ev.clientX, ev.clientY);
    });

    app.querySelector('.back-btn').addEventListener('click', renderHome);
    app.querySelector('.hint-btn').addEventListener('click', function () {
      useHint(scene, svg, this);
    });
  }

  function addHitArea(g, svg, objId) {
    var bb;
    try { bb = g.getBBox(); } catch (e) { return; }
    var MIN = 78; // generous tap target in viewBox units (~38px on a phone)
    var padX = Math.max(0, (MIN - bb.width) / 2) + 8;
    var padY = Math.max(0, (MIN - bb.height) / 2) + 8;
    var rect = document.createElementNS(SVG_NS, 'rect');
    rect.setAttribute('x', bb.x - padX);
    rect.setAttribute('y', bb.y - padY);
    rect.setAttribute('width', bb.width + padX * 2);
    rect.setAttribute('height', bb.height + padY * 2);
    rect.setAttribute('fill', '#000');
    rect.setAttribute('fill-opacity', '0');
    // bbox is in the group's local space — carry the group's own transform along.
    var tf = g.getAttribute('transform');
    if (tf) rect.setAttribute('transform', tf);
    // Tagged and appended last so it paints above decorative overlays:
    // taps land here even when glow/steam art covers the object itself.
    rect.setAttribute('data-obj', objId);
    svg.appendChild(rect);
  }

  function makeTrayIcon(g, defs) {
    var bb;
    try { bb = g.getBBox(); } catch (e) { bb = { x: 0, y: 0, width: 10, height: 10 }; }
    var pad = Math.max(bb.width, bb.height) * 0.08 + 2;
    var mini = document.createElementNS(SVG_NS, 'svg');
    mini.setAttribute('viewBox',
      (bb.x - pad) + ' ' + (bb.y - pad) + ' ' + (bb.width + pad * 2) + ' ' + (bb.height + pad * 2));
    if (defs) mini.appendChild(defs.cloneNode(true));
    var clone = g.cloneNode(true);
    clone.removeAttribute('data-obj');
    // getBBox() is in the group's local space, before its own transform —
    // drop the transform so the clone lands inside the local-space viewBox.
    clone.removeAttribute('transform');
    mini.appendChild(clone);
    return mini;
  }

  function onFound(scene, objId, g, ev) {
    foundList(scene.id).push(objId);
    saveState();
    g.classList.add('found-obj');
    g.classList.remove('hint-pulse');
    var chip = app.querySelector('[data-chip="' + objId + '"]');
    if (chip) chip.classList.add('found');
    sparkleAt(ev.clientX, ev.clientY, !!PURPLE_IDS[objId]);
    if (sceneComplete(scene)) {
      stampTimer = setTimeout(function () { stampTimer = null; showStamp(scene); }, 700);
    }
  }

  /* ---------- Hint ---------- */

  function useHint(scene, svg, btn) {
    var now = Date.now();
    if (now < hintReadyAt) return;
    var unfound = scene.objects.filter(function (o) { return !isFound(scene.id, o.id); });
    if (!unfound.length) return;
    var pick = unfound[Math.floor(Math.random() * unfound.length)];
    var g = svg.querySelector('[data-obj="' + pick.id + '"]');
    if (g) {
      g.classList.remove('hint-pulse');
      // force restart of animation
      void g.getBoundingClientRect();
      g.classList.add('hint-pulse');
      setTimeout(function () { g.classList.remove('hint-pulse'); }, 3400);
    }
    hintReadyAt = now + 15000;
    btn.classList.add('cooling');
    stopHintTicker();
    hintTicker = setInterval(function () {
      var left = Math.ceil((hintReadyAt - Date.now()) / 1000);
      if (left <= 0) {
        btn.textContent = 'Hint 💡';
        btn.classList.remove('cooling');
        stopHintTicker();
      } else {
        btn.textContent = left + 's';
      }
    }, 250);
  }

  function stopHintTicker() {
    if (hintTicker) { clearInterval(hintTicker); hintTicker = null; }
  }

  /* ---------- Effects ---------- */

  function sparkleAt(x, y, purple) {
    var colors = purple
      ? ['#a78bfa', '#7c6ce0', '#d8b4fe', '#ffffff']
      : ['#f2b544', '#ffd97a', '#ffffff', '#ffb84d'];
    for (var i = 0; i < 14; i++) {
      var s = document.createElement('div');
      s.className = 'spark';
      var angle = Math.random() * Math.PI * 2;
      var dist = 30 + Math.random() * 60;
      s.style.left = x + 'px';
      s.style.top = y + 'px';
      s.style.background = colors[i % colors.length];
      s.style.setProperty('--dx', Math.cos(angle) * dist + 'px');
      s.style.setProperty('--dy', Math.sin(angle) * dist + 'px');
      document.body.appendChild(s);
      s.addEventListener('animationend', function () { this.remove(); });
    }
  }

  function puffAt(x, y) {
    var p = document.createElement('div');
    p.className = 'puff';
    p.style.left = x + 'px';
    p.style.top = y + 'px';
    document.body.appendChild(p);
    p.addEventListener('animationend', function () { this.remove(); });
  }

  /* ---------- Stamp overlay ---------- */

  function showStamp(scene) {
    var everything = allComplete();
    var overlay = document.createElement('div');
    overlay.className = 'overlay';
    overlay.innerHTML = '<div class="stamp-card">' +
      '<div class="big-stamp">' + scene.stamp + '</div>' +
      '<h2>' + esc(scene.country) + ' — stamped!</h2>' +
      '<div class="caption">“' + esc(scene.caption) + '”</div>' +
      '<div class="btn-row">' +
      (everything
        ? '<button class="btn-primary" data-go="finale">Open your message 💌</button>'
        : '<button class="btn-primary" data-go="home">Back to my passport</button>') +
      '</div></div>';
    document.body.appendChild(overlay);
    overlay.querySelector('[data-go]').addEventListener('click', function () {
      overlay.remove();
      if (this.getAttribute('data-go') === 'finale') renderFinale();
      else renderHome();
    });
  }

  /* ---------- Finale ---------- */

  function renderFinale() {
    stopHintTicker();
    var stampsRow = scenes.map(function (s) { return s.stamp; }).join(' ');
    app.innerHTML = '<div class="finale">' +
      '<div class="inner">' +
      '<div class="pre">Ivy, you found every last one… across ' + scenes.length + ' journeys ✈️</div>' +
      '<h1>You are an amazing woman!</h1>' +
      '<div class="love">Ianne loves you! 💜</div>' +
      '<div class="stamps-row">' + stampsRow + '</div>' +
      '<button class="btn-ghost" data-action="home">← Back to my passport</button>' +
      '</div></div>';
    app.querySelector('[data-action="home"]').addEventListener('click', renderHome);
    rainConfetti();
  }

  function rainConfetti() {
    var host = app.querySelector('.finale');
    if (!host) return;
    var pieces = ['💜', '🤍', '✨', '💜', '🌸'];
    for (var i = 0; i < 60; i++) {
      var c = document.createElement('div');
      c.className = 'confetti';
      c.textContent = pieces[i % pieces.length];
      c.style.left = Math.random() * 100 + 'vw';
      c.style.fontSize = 12 + Math.random() * 18 + 'px';
      c.style.animationDuration = 4 + Math.random() * 5 + 's';
      c.style.animationDelay = Math.random() * 6 + 's';
      c.style.setProperty('--spin', (Math.random() * 720 - 360) + 'deg');
      host.appendChild(c);
    }
  }

  /* ---------- Boot ---------- */

  if (!scenes.length) {
    app.innerHTML = '<div class="home"><div class="hero"><h1>Ivy’s Hidden Journey</h1>' +
      '<div class="sub">Scenes are still being painted… check back soon 💜</div></div></div>';
  } else {
    renderHome();
  }
})();
