/* Ivy's Hidden Journey — game engine (v3: hard mode, zoom, audio, 100 finds) */
(function () {
  'use strict';

  var STORAGE_KEY = 'ivy-journey-v1';
  var PURPLE_IDS = { lightstick: true, 'purple-heart': true };
  var SVG_NS = 'http://www.w3.org/2000/svg';
  var TRAY_SIZE = 8;       // targets shown at once; refills as found
  var COMBO_WINDOW = 8000; // ms between finds to keep a streak alive
  var SWIFT_SECONDS = 20 * 60;

  var scenes = (window.SCENES || []).slice().sort(function (a, b) {
    return a.order - b.order;
  });

  var app = document.getElementById('app');
  var state = loadState();
  var hintReadyAt = 0;
  var hintTicker = null;
  var stampTimer = null;
  var current = null;        // {scene, svg, defs}
  var sceneEnteredAt = 0;    // for the run timer
  var combo = 0;
  var lastFindAt = 0;
  var mistakes = 0;          // wrong taps this scene run
  var MAX_MISTAKES = 3;

  // Drop saved ids that no longer exist in a scene (object lists can shrink
  // between versions) so counters and completion stay truthful.
  (function pruneState() {
    var changed = false;
    scenes.forEach(function (s) {
      var list = state.found[s.id];
      if (!Array.isArray(list)) return;
      var valid = {};
      s.objects.forEach(function (o) { valid[o.id] = true; });
      var pruned = list.filter(function (id) { return valid[id]; });
      if (pruned.length !== list.length) { state.found[s.id] = pruned; changed = true; }
    });
    if (changed) saveState();
  })();

  /* ---------- State ---------- */

  function loadState() {
    var base = { found: {}, hints: {}, times: {}, best: {}, badges: {}, audio: true };
    try {
      var raw = JSON.parse(localStorage.getItem(STORAGE_KEY));
      if (raw && typeof raw === 'object') {
        if (raw.found && typeof raw.found === 'object') {
          Object.keys(raw.found).forEach(function (k) {
            if (Array.isArray(raw.found[k])) base.found[k] = raw.found[k].filter(function (v) { return typeof v === 'string'; });
          });
        }
        ['hints', 'times', 'best'].forEach(function (key) {
          if (raw[key] && typeof raw[key] === 'object') {
            Object.keys(raw[key]).forEach(function (k) {
              if (typeof raw[key][k] === 'number' && isFinite(raw[key][k])) base[key][k] = raw[key][k];
            });
          }
        });
        if (raw.badges && typeof raw.badges === 'object') {
          Object.keys(raw.badges).forEach(function (k) {
            if (Array.isArray(raw.badges[k])) base.badges[k] = raw.badges[k].filter(function (v) { return typeof v === 'string'; });
          });
        }
        if (raw.audio === false) base.audio = false;
      }
    } catch (e) { /* fresh start */ }
    return base;
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

  function everCompleted(scene) {
    // a replay in progress must not re-lock the finale
    return sceneComplete(scene) || state.best[scene.id] != null;
  }

  function allComplete() {
    return scenes.length > 0 && scenes.every(everCompleted);
  }

  function totalCounts() {
    var found = 0, total = 0;
    scenes.forEach(function (s) {
      total += s.objects.length;
      found += foundList(s.id).length;
    });
    return { found: found, total: total };
  }

  function fmtTime(sec) {
    sec = Math.max(0, Math.round(sec));
    var m = Math.floor(sec / 60), s = sec % 60;
    return m + ':' + (s < 10 ? '0' : '') + s;
  }

  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
    });
  }

  function bankSceneTime() {
    if (current && sceneEnteredAt) {
      var id = current.scene.id;
      state.times[id] = (state.times[id] || 0) + (Date.now() - sceneEnteredAt) / 1000;
      sceneEnteredAt = 0;
      saveState();
    }
  }

  // Pause the run timer while the phone is locked or the app backgrounded.
  document.addEventListener('visibilitychange', function () {
    if (document.hidden) bankSceneTime();
    else if (current) sceneEnteredAt = Date.now();
  });

  /* ---------- Audio (synthesized — no files) ---------- */

  var Sound = (function () {
    var ctx = null;
    // iOS: without this, the ring/silent switch mutes all web audio (iOS 16.4+).
    try { if (navigator.audioSession) navigator.audioSession.type = 'playback'; } catch (e) { /* older iOS */ }
    function ready() {
      if (!state.audio) return null;
      try {
        if (!ctx) ctx = new (window.AudioContext || window.webkitAudioContext)();
        if (ctx.state === 'suspended') ctx.resume();
        return ctx;
      } catch (e) { return null; }
    }
    // Unlock/resume at every opportunity — iOS suspends aggressively.
    document.addEventListener('pointerdown', function () { ready(); }, true);
    document.addEventListener('visibilitychange', function () { if (!document.hidden) ready(); });
    function note(freq, when, dur, type, peak) {
      var c = ready();
      if (!c) return;
      var o = c.createOscillator(), g = c.createGain();
      o.type = type || 'sine';
      o.frequency.value = freq;
      var t = c.currentTime + (when || 0);
      g.gain.setValueAtTime(0.0001, t);
      g.gain.exponentialRampToValueAtTime(peak || 0.16, t + 0.015);
      g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
      o.connect(g); g.connect(c.destination);
      o.start(t); o.stop(t + dur + 0.05);
    }
    // Soft piano voice: fast attack, long decay, warm partials through a lowpass.
    function piano(freq, when, peak, dur) {
      var c = ready();
      if (!c) return;
      var t = c.currentTime + (when || 0);
      dur = dur || 1.4;
      var lp = c.createBiquadFilter();
      lp.type = 'lowpass';
      lp.frequency.value = Math.min(6000, freq * 6);
      lp.Q.value = 0.4;
      lp.connect(c.destination);
      [[1, 1], [2, 0.36], [3, 0.14], [4.2, 0.05]].forEach(function (p) {
        var o = c.createOscillator(), g = c.createGain();
        o.type = 'sine';
        o.frequency.value = freq * p[0];
        o.detune.value = (p[0] > 1 ? 3 : 0);
        var lvl = (peak || 0.16) * p[1];
        g.gain.setValueAtTime(0.0001, t);
        g.gain.linearRampToValueAtTime(lvl, t + 0.008);
        g.gain.exponentialRampToValueAtTime(0.0001, t + dur * (p[0] === 1 ? 1 : 0.55));
        o.connect(g); g.connect(lp);
        o.start(t); o.stop(t + dur + 0.05);
      });
    }
    // Original ballad progression (Am → F → C → G arpeggios) — one note per find,
    // so a streak of finds plays a gentle piano line. (An homage in style only.)
    var BALLAD = [
      220.00, 261.63, 329.63, 440.00,   // Am
      174.61, 220.00, 261.63, 349.23,   // F
      261.63, 329.63, 392.00, 523.25,   // C
      196.00, 246.94, 293.66, 392.00    // G
    ];
    var balladStep = 0;
    return {
      unlock: function () { ready(); },
      find: function () {
        var f = BALLAD[balladStep % BALLAD.length];
        balladStep++;
        piano(f, 0, 0.3);
        piano(f * 2, 0.01, 0.08, 0.9);
      },
      purple: function () {
        piano(440.00, 0, 0.18);
        piano(659.25, 0.12, 0.16);
        piano(880.00, 0.24, 0.14, 1.8);
        note(1567.98, 0.3, 0.6, 'sine', 0.05);
      },
      miss: function () { note(150, 0, 0.14, 'sine', 0.1); note(110, 0.02, 0.16, 'sine', 0.07); },
      fail: function () { [329.63, 246.94, 196.00].forEach(function (f, i) { piano(f, i * 0.16, 0.2, 1.2); }); },
      hint: function () { piano(659.25, 0, 0.1, 0.7); piano(880, 0.12, 0.09, 0.7); },
      stamp: function () {
        [261.63, 329.63, 392.00, 523.25, 659.25].forEach(function (f, i) { piano(f, i * 0.07, 0.15, 1.8); });
      },
      finale: function () {
        [220, 261.63, 329.63, 440, 523.25, 659.25, 880].forEach(function (f, i) { piano(f, i * 0.14, 0.15, 2.2); });
      }
    };
  })();

  /* ---------- Home / passport ---------- */

  // Rasterized card thumbnails: 8 <img> tags instead of ~10k live SVG nodes.
  var thumbCache = {};
  scenes.forEach(function (s) {
    thumbCache[s.id] = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(s.svg);
  });

  function badgeIcons(sceneId) {
    var b = state.badges[sceneId] || [];
    var map = { eagle: '🦅', swift: '⚡', borahae: '💜' };
    return b.map(function (k) { return map[k] || ''; }).join('');
  }

  function renderHome() {
    stopHintTicker();
    if (stampTimer) { clearTimeout(stampTimer); stampTimer = null; }
    bankSceneTime();
    current = null;
    var tc = totalCounts();
    var pct = tc.total ? Math.round(100 * tc.found / tc.total) : 0;
    var ringLen = 2 * Math.PI * 26;

    var html = '<div class="home screen-enter">' +
      '<div class="home-hero">' +
      '<button class="sound-btn" data-action="sound" aria-label="Sound">' + (state.audio ? '🔊' : '🔇') + '</button>' +
      '<h1>Ivy’s Hidden Journey</h1>' +
      '<div class="sub">A seek-and-find trip through our favorite places 💜</div>' +
      '<div class="hero-progress">' +
      '<svg class="ring" viewBox="0 0 60 60" aria-hidden="true">' +
      '<circle class="ring-bg" cx="30" cy="30" r="26"/>' +
      '<circle class="ring-fg" cx="30" cy="30" r="26" stroke-dasharray="' + ringLen + '" stroke-dashoffset="' + (ringLen * (1 - pct / 100)) + '"/>' +
      '</svg>' +
      '<div class="hero-progress-text"><b>' + pct + '%</b><span>' + tc.found + ' of ' + tc.total + ' treasures</span></div>' +
      '</div></div><div class="card-list">';

    scenes.forEach(function (s, idx) {
      var found = foundList(s.id).length;
      var total = s.objects.length;
      var done = sceneComplete(s);
      var best = state.best[s.id];
      var meta = done
        ? 'Stamped ' + s.stamp + (best ? ' · Best ' + fmtTime(best) : '')
        : found + ' / ' + total + ' found';
      html += '<button class="scene-card' + (done ? ' done' : '') + '" data-scene="' + esc(s.id) + '" style="animation-delay:' + (idx * 60) + 'ms">' +
        '<div class="thumb" aria-hidden="true"><img alt="" src="' + thumbCache[s.id] + '"></div>' +
        '<div class="card-scrim"></div>' +
        '<div class="card-face">' +
        '<div class="card-top"><span class="card-flag">' + s.flag + '</span><span class="card-badges">' + badgeIcons(s.id) + (done ? ' <span class="stamp-chip">' + s.stamp + '</span>' : '') + '</span></div>' +
        '<div class="card-bottom">' +
        '<div class="card-country">' + esc(s.country) + '</div>' +
        '<div class="card-title">' + esc(s.title) + '</div>' +
        '<div class="pbar"><i style="width:' + (total ? Math.round(100 * found / total) : 0) + '%"></i></div>' +
        '<div class="card-meta">' + meta + '</div>' +
        '</div></div></button>';
    });

    html += '</div>';
    if (allComplete()) {
      html += '<button class="finale-card shimmer" data-action="finale">💌 A message for you</button>';
    } else {
      html += '<div class="finale-card locked">🔒 Stamp every journey to unlock a surprise</div>';
    }
    html += '<div class="reset-line"><button data-action="reset">Start the journey over</button></div></div>';

    app.innerHTML = html;

    app.querySelectorAll('.scene-card').forEach(function (btn) {
      btn.addEventListener('click', function () {
        Sound.unlock();
        var s = scenes.filter(function (x) { return x.id === btn.getAttribute('data-scene'); })[0];
        if (s && sceneComplete(s)) showReplayDialog(s);
        else renderScene(btn.getAttribute('data-scene'));
      });
    });
    var finaleBtn = app.querySelector('[data-action="finale"]');
    if (finaleBtn) finaleBtn.addEventListener('click', function () { Sound.finale(); renderFinale(); });
    app.querySelector('[data-action="sound"]').addEventListener('click', function () {
      state.audio = !state.audio;
      saveState();
      this.textContent = state.audio ? '🔊' : '🔇';
      if (state.audio) { Sound.unlock(); Sound.hint(); }
    });
    app.querySelector('[data-action="reset"]').addEventListener('click', function () {
      if (window.confirm('Start over? All stamps, times and badges will be cleared.')) {
        state = { found: {}, hints: {}, times: {}, best: {}, badges: {}, audio: state.audio };
        saveState();
        renderHome();
      }
    });
  }

  function showReplayDialog(scene) {
    var best = state.best[scene.id];
    var overlay = document.createElement('div');
    overlay.className = 'overlay';
    overlay.innerHTML = '<div class="stamp-card">' +
      '<div class="big-stamp">' + scene.stamp + '</div>' +
      '<h2>' + esc(scene.country) + '</h2>' +
      '<div class="caption">Stamped!' + (best ? ' Best time ' + fmtTime(best) + '.' : '') + ' ' + badgeIcons(scene.id) + '</div>' +
      '<div class="btn-row">' +
      '<button class="btn-primary" data-go="replay">Play again — beat your time</button>' +
      '<button class="btn-ghost" data-go="close">Back</button>' +
      '</div></div>';
    document.body.appendChild(overlay);
    overlay.addEventListener('click', function (e) {
      var go = e.target.getAttribute && e.target.getAttribute('data-go');
      if (go === 'replay') {
        state.found[scene.id] = [];
        state.hints[scene.id] = 0;
        state.times[scene.id] = 0;
        saveState();
        overlay.remove();
        renderScene(scene.id);
      } else if (go === 'close' || e.target === overlay) {
        overlay.remove();
      }
    });
  }

  /* ---------- Scene ---------- */

  function renderScene(sceneId) {
    var scene = scenes.filter(function (s) { return s.id === sceneId; })[0];
    if (!scene) { renderHome(); return; }
    stopHintTicker();
    hintReadyAt = 0;
    combo = 0;
    lastFindAt = 0;
    mistakes = 0;

    app.innerHTML = '<div class="scene-screen screen-enter">' +
      '<div class="scene-header">' +
      '<button class="back-btn" aria-label="Back">‹</button>' +
      '<div class="scene-name">' + scene.flag + ' ' + esc(scene.title) +
      ' <span class="found-counter"></span> <span class="lives"></span></div>' +
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
    var zoom = enableZoom(stage, svg);
    showZoomToast(stage);

    var sceneDefs = svg.querySelector('defs');
    current = { scene: scene, svg: svg, defs: sceneDefs };
    sceneEnteredAt = Date.now();

    scene.objects.forEach(function (obj) {
      var g = svg.querySelector('[data-obj="' + obj.id + '"]');
      if (g) {
        if (isFound(scene.id, obj.id)) {
          g.classList.add('found-gone'); // already collected — invisible, no hit area
        } else {
          addHitArea(g, svg, obj.id);
        }
      }
    });
    renderTray();

    svg.addEventListener('click', function (ev) {
      if (zoom.wasGesture()) return;
      var objId = pickTarget(scene, svg, ev);
      if (objId) {
        onFound(scene, objId, svg.querySelector('g[data-obj="' + objId + '"]'), ev);
        return;
      }
      onMiss(scene, ev);
    });
    updateLives();

    app.querySelector('.back-btn').addEventListener('click', renderHome);
    app.querySelector('.hint-btn').addEventListener('click', function () {
      useHint(scene, svg, this);
    });
  }

  // With 100 overlapping hit-rects, the topmost rect under a tap is often the
  // wrong object. Gather every candidate under the point and award the most
  // specific one (smallest artwork bbox).
  function pickTarget(scene, svg, ev) {
    var ids = [];
    var els = document.elementsFromPoint ? document.elementsFromPoint(ev.clientX, ev.clientY) : [];
    els.forEach(function (el) {
      var host = el.closest ? el.closest('[data-obj]') : null;
      if (host) {
        var id = host.getAttribute('data-obj');
        if (ids.indexOf(id) === -1) ids.push(id);
      }
    });
    if (!ids.length && ev.target.closest) {
      var host2 = ev.target.closest('[data-obj]');
      if (host2) ids.push(host2.getAttribute('data-obj'));
    }
    var candidates = ids.filter(function (id) {
      return scene.objects.some(function (o) { return o.id === id; }) && !isFound(scene.id, id);
    });
    if (candidates.length < 2) return candidates[0] || null;
    // Score each candidate by how close the tap is to its artwork's center,
    // normalized by its size; candidates whose bbox contains the tap win first.
    var best = null, bestScore = Infinity;
    candidates.forEach(function (id) {
      var g = svg.querySelector('g[data-obj="' + id + '"]');
      if (!g) return;
      try {
        var bb = g.getBBox();
        var m = g.getScreenCTM();
        if (!m) return;
        var p = new DOMPoint(ev.clientX, ev.clientY).matrixTransform(m.inverse());
        var pad = 6;
        var inside = p.x >= bb.x - pad && p.x <= bb.x + bb.width + pad &&
                     p.y >= bb.y - pad && p.y <= bb.y + bb.height + pad;
        var dx = p.x - (bb.x + bb.width / 2), dy = p.y - (bb.y + bb.height / 2);
        var halfDiag = Math.max(6, Math.hypot(bb.width, bb.height) / 2);
        var score = Math.hypot(dx, dy) / halfDiag + (inside ? 0 : 10);
        if (score < bestScore) { bestScore = score; best = id; }
      } catch (e) { /* skip */ }
    });
    return best || candidates[0];
  }

  function addHitArea(g, svg, objId) {
    var bb;
    try { bb = g.getBBox(); } catch (e) { return; }
    var MIN = 52; // hard mode: tight targets — zoom in for precision
    var padX = Math.max(0, (MIN - bb.width) / 2) + 5;
    var padY = Math.max(0, (MIN - bb.height) / 2) + 5;
    var rect = document.createElementNS(SVG_NS, 'rect');
    rect.setAttribute('x', bb.x - padX);
    rect.setAttribute('y', bb.y - padY);
    rect.setAttribute('width', bb.width + padX * 2);
    rect.setAttribute('height', bb.height + padY * 2);
    rect.setAttribute('fill', '#000');
    rect.setAttribute('fill-opacity', '0');
    var tf = g.getAttribute('transform');
    if (tf) rect.setAttribute('transform', tf);
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
    clone.removeAttribute('transform'); // bbox is local-space
    mini.appendChild(clone);
    return mini;
  }

  function renderTray() {
    if (!current) return;
    var scene = current.scene;
    var tray = app.querySelector('.tray');
    if (!tray) return;
    tray.innerHTML = '';
    var pending = scene.objects.filter(function (o) { return !isFound(scene.id, o.id); }).slice(0, TRAY_SIZE);
    pending.forEach(function (obj) {
      var g = current.svg.querySelector('[data-obj="' + obj.id + '"]');
      var chip = document.createElement('button');
      chip.className = 'tray-chip';
      chip.setAttribute('data-chip', obj.id);
      var iconBox = document.createElement('span');
      iconBox.className = 'icon-box';
      if (g) iconBox.appendChild(makeTrayIcon(g, current.defs));
      chip.appendChild(iconBox);
      var label = document.createElement('span');
      label.textContent = obj.name;
      chip.appendChild(label);
      tray.appendChild(chip);
    });
    updateCounter();
  }

  function updateCounter() {
    if (!current) return;
    var counter = app.querySelector('.found-counter');
    if (counter) counter.textContent = foundList(current.scene.id).length + ' / ' + current.scene.objects.length;
  }

  function onFound(scene, objId, g, ev) {
    var now = Date.now();
    combo = (now - lastFindAt < COMBO_WINDOW) ? combo + 1 : 1;
    lastFindAt = now;

    foundList(scene.id).push(objId);
    saveState();
    if (g) {
      g.classList.remove('hint-pulse');
      g.classList.add('found-obj'); // bloom + fade out of the scene
    }
    // retire the object's tap target
    if (current) {
      current.svg.querySelectorAll('rect[data-obj="' + objId + '"]').forEach(function (r) { r.remove(); });
    }
    var chip = app.querySelector('[data-chip="' + objId + '"]');
    if (chip) chip.classList.add('found');
    var purple = !!PURPLE_IDS[objId];
    sparkleAt(ev.clientX, ev.clientY, purple);
    if (purple) Sound.purple(); else Sound.find();
    if (combo >= 2) comboPop(ev.clientX, ev.clientY, combo);
    updateCounter();

    if (sceneComplete(scene)) {
      completeScene(scene);
    } else {
      setTimeout(renderTray, 900);
    }
  }

  function updateLives() {
    var el = app.querySelector('.lives');
    if (!el) return;
    var left = MAX_MISTAKES - mistakes;
    el.textContent = '❤️'.repeat(Math.max(0, left)) + '🖤'.repeat(Math.min(MAX_MISTAKES, mistakes));
  }

  function onMiss(scene, ev) {
    mistakes++;
    Sound.miss();
    puffAt(ev.clientX, ev.clientY);
    updateLives();
    var screen = app.querySelector('.scene-screen');
    if (screen) {
      screen.classList.remove('shake');
      void screen.offsetWidth;
      screen.classList.add('shake');
    }
    if (mistakes >= MAX_MISTAKES) {
      Sound.fail();
      setTimeout(function () { showFail(scene); }, 450);
    }
  }

  function showFail(scene) {
    var overlay = document.createElement('div');
    overlay.className = 'overlay';
    overlay.innerHTML = '<div class="stamp-card">' +
      '<div class="big-stamp broken">💔</div>' +
      '<h2>Out of chances!</h2>' +
      '<div class="caption">Three wrong taps — this journey starts over. You’ve got this 💜</div>' +
      '<div class="btn-row">' +
      '<button class="btn-primary" data-go="retry">Try again</button>' +
      '<button class="btn-ghost" data-go="home">Back to my passport</button>' +
      '</div></div>';
    document.body.appendChild(overlay);
    overlay.addEventListener('click', function (e) {
      var go = e.target.getAttribute && e.target.getAttribute('data-go');
      if (!go) return;
      // the run is forfeit either way
      state.found[scene.id] = [];
      state.hints[scene.id] = 0;
      state.times[scene.id] = 0;
      sceneEnteredAt = 0;
      saveState();
      overlay.remove();
      if (go === 'retry') renderScene(scene.id);
      else renderHome();
    });
  }

  function completeScene(scene) {
    bankSceneTime();
    var runTime = state.times[scene.id] || 0;
    if (!state.best[scene.id] || runTime < state.best[scene.id]) state.best[scene.id] = runTime;

    var earned = [];
    if (!(state.hints[scene.id] > 0)) earned.push('eagle');
    if (runTime > 0 && runTime < SWIFT_SECONDS) earned.push('swift');
    var order = foundList(scene.id);
    if (order.indexOf('lightstick') > -1 && order.indexOf('lightstick') < 10 &&
        order.indexOf('purple-heart') > -1 && order.indexOf('purple-heart') < 10) earned.push('borahae');
    var prev = state.badges[scene.id] || [];
    earned.forEach(function (b) { if (prev.indexOf(b) === -1) prev.push(b); });
    state.badges[scene.id] = prev;
    saveState();

    stampTimer = setTimeout(function () {
      stampTimer = null;
      Sound.stamp();
      showStamp(scene, runTime, earned);
    }, 700);
  }

  /* ---------- Zoom & pan ---------- */

  function enableZoom(stage, svg) {
    var scale = 1, tx = 0, ty = 0;
    var pointers = {};
    var pointerCount = 0;
    var movedPx = 0;
    var pinch = null;
    var lastTapTime = 0, lastTapX = 0, lastTapY = 0;
    var suppressClickUntil = 0;
    var MAX_SCALE = 5;

    svg.style.transformOrigin = '0 0';
    stage.style.touchAction = 'none';

    function apply() {
      var r = stage.getBoundingClientRect();
      var minTx = r.width * (1 - scale), minTy = r.height * (1 - scale);
      if (tx > 0) tx = 0;
      if (ty > 0) ty = 0;
      if (tx < minTx) tx = minTx;
      if (ty < minTy) ty = minTy;
      svg.style.transform = 'translate(' + tx + 'px,' + ty + 'px) scale(' + scale + ')';
    }

    function zoomAt(sx, sy, newScale, animate) {
      newScale = Math.max(1, Math.min(MAX_SCALE, newScale));
      var cx = (sx - tx) / scale, cy = (sy - ty) / scale;
      scale = newScale;
      tx = sx - cx * scale;
      ty = sy - cy * scale;
      if (animate) {
        svg.style.transition = 'transform 0.22s ease-out';
        setTimeout(function () { svg.style.transition = ''; }, 240);
      }
      apply();
    }

    function stagePoint(e) {
      var r = stage.getBoundingClientRect();
      return { x: e.clientX - r.left, y: e.clientY - r.top };
    }

    stage.addEventListener('pointerdown', function (e) {
      try { stage.setPointerCapture(e.pointerId); } catch (err) { /* unsupported */ }
      pointers[e.pointerId] = stagePoint(e);
      pointerCount++;
      movedPx = 0;
      if (pointerCount === 2) {
        var pts = Object.keys(pointers).map(function (k) { return pointers[k]; });
        var midX = (pts[0].x + pts[1].x) / 2, midY = (pts[0].y + pts[1].y) / 2;
        pinch = {
          dist: Math.max(12, Math.hypot(pts[0].x - pts[1].x, pts[0].y - pts[1].y)),
          scale: scale,
          contentX: (midX - tx) / scale,
          contentY: (midY - ty) / scale
        };
      }
    });

    stage.addEventListener('pointermove', function (e) {
      if (!pointers[e.pointerId]) return;
      var p = stagePoint(e);
      var prev = pointers[e.pointerId];
      pointers[e.pointerId] = p;
      movedPx += Math.abs(p.x - prev.x) + Math.abs(p.y - prev.y);
      if (pointerCount === 2 && pinch) {
        var pts = Object.keys(pointers).map(function (k) { return pointers[k]; });
        var midX = (pts[0].x + pts[1].x) / 2, midY = (pts[0].y + pts[1].y) / 2;
        var dist = Math.max(12, Math.hypot(pts[0].x - pts[1].x, pts[0].y - pts[1].y));
        scale = Math.max(1, Math.min(MAX_SCALE, pinch.scale * dist / pinch.dist));
        tx = midX - pinch.contentX * scale;
        ty = midY - pinch.contentY * scale;
        apply();
      } else if (pointerCount === 1 && scale > 1) {
        tx += p.x - prev.x;
        ty += p.y - prev.y;
        apply();
      }
    });

    function release(e) {
      if (!pointers[e.pointerId]) return;
      var wasPinch = pointerCount === 2;
      delete pointers[e.pointerId];
      pointerCount = Math.max(0, pointerCount - 1);
      if (pointerCount < 2) pinch = null;
      if (pointerCount === 0 && !wasPinch && movedPx < 10 && e.type === 'pointerup') {
        var p = stagePoint(e);
        var now = Date.now();
        if (now - lastTapTime < 320 && Math.abs(p.x - lastTapX) < 36 && Math.abs(p.y - lastTapY) < 36) {
          lastTapTime = 0;
          suppressClickUntil = now + 400; // the 2nd tap zooms; it must not also find/miss
          if (scale > 1.05) zoomAt(p.x, p.y, 1, true);
          else zoomAt(p.x, p.y, 2.6, true);
        } else {
          lastTapTime = now; lastTapX = p.x; lastTapY = p.y;
        }
      }
    }
    stage.addEventListener('pointerup', release);
    stage.addEventListener('pointercancel', release);

    stage.addEventListener('wheel', function (e) {
      e.preventDefault();
      var p = stagePoint(e);
      zoomAt(p.x, p.y, scale * (e.deltaY < 0 ? 1.18 : 1 / 1.18), false);
    }, { passive: false });

    return {
      wasGesture: function () { return movedPx >= 10 || Date.now() < suppressClickUntil; }
    };
  }

  function showZoomToast(stage) {
    var t = document.createElement('div');
    t.className = 'zoom-toast';
    t.textContent = 'Pinch or double-tap to zoom 🔍';
    stage.appendChild(t);
    setTimeout(function () { t.classList.add('gone'); }, 2600);
    setTimeout(function () { t.remove(); }, 3400);
  }

  /* ---------- Hint ---------- */

  function useHint(scene, svg, btn) {
    var now = Date.now();
    if (now < hintReadyAt) return;
    var unfound = scene.objects.filter(function (o) { return !isFound(scene.id, o.id); }).slice(0, TRAY_SIZE);
    if (!unfound.length) return;
    var pick = unfound[Math.floor(Math.random() * unfound.length)];
    var g = svg.querySelector('[data-obj="' + pick.id + '"]');
    if (g) {
      g.classList.remove('hint-pulse');
      void g.getBoundingClientRect();
      g.classList.add('hint-pulse');
      setTimeout(function () { g.classList.remove('hint-pulse'); }, 3400);
    }
    state.hints[scene.id] = (state.hints[scene.id] || 0) + 1;
    saveState();
    Sound.hint();
    hintReadyAt = now + 45000; // hard mode: hints are precious
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

  function comboPop(x, y, streak) {
    var c = document.createElement('div');
    c.className = 'combo-pop';
    c.textContent = '×' + streak;
    c.style.left = x + 'px';
    c.style.top = (y - 24) + 'px';
    document.body.appendChild(c);
    c.addEventListener('animationend', function () { this.remove(); });
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

  function showStamp(scene, runTime, earned) {
    var everything = allComplete();
    var badgeLine = '';
    if (earned && earned.length) {
      var names = { eagle: '🦅 Eagle Eye — no hints', swift: '⚡ Swift — under 20:00', borahae: '💜 Borahae — purples first' };
      badgeLine = '<div class="badge-line">' + earned.map(function (b) { return '<span>' + names[b] + '</span>'; }).join('') + '</div>';
    }
    var overlay = document.createElement('div');
    overlay.className = 'overlay';
    overlay.innerHTML = '<div class="stamp-card">' +
      '<div class="big-stamp">' + scene.stamp + '</div>' +
      '<h2>' + esc(scene.country) + ' — stamped!</h2>' +
      '<div class="caption">“' + esc(scene.caption) + '”</div>' +
      (runTime ? '<div class="time-line">All ' + scene.objects.length + ' found in ' + fmtTime(runTime) + '</div>' : '') +
      badgeLine +
      '<div class="btn-row">' +
      (everything
        ? '<button class="btn-primary" data-go="finale">Open your message 💌</button>'
        : '<button class="btn-primary" data-go="home">Back to my passport</button>') +
      '</div></div>';
    document.body.appendChild(overlay);
    overlay.querySelector('[data-go]').addEventListener('click', function () {
      overlay.remove();
      if (this.getAttribute('data-go') === 'finale') { Sound.finale(); renderFinale(); }
      else renderHome();
    });
  }

  /* ---------- Finale ---------- */

  function renderFinale() {
    stopHintTicker();
    bankSceneTime();
    current = null;
    var stampsRow = scenes.map(function (s) { return s.stamp; }).join(' ');
    app.innerHTML = '<div class="finale screen-enter">' +
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
    app.innerHTML = '<div class="home"><div class="home-hero"><h1>Ivy’s Hidden Journey</h1>' +
      '<div class="sub">Scenes are still being painted… check back soon 💜</div></div></div>';
  } else {
    renderHome();
  }
})();
