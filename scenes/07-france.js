window.SCENES = window.SCENES || [];
window.SCENES.push({
  id: 'france',
  order: 7,
  country: 'France',
  flag: '🇫🇷',
  title: 'A Paris Café Corner',
  caption: 'Croissants under the Eiffel Tower.',
  stamp: '🗼',
  objects: [
    { id: 'lightstick',     name: 'Lightstick' },
    { id: 'purple-heart',   name: 'Purple Heart' },
    { id: 'croissant',      name: 'Croissant' },
    { id: 'baguette',       name: 'Baguette' },
    { id: 'beret',          name: 'Beret' },
    { id: 'hot-balloon',    name: 'Balloon' },
    { id: 'perfume-bottle', name: 'Perfume' },
    { id: 'bunting',        name: 'Bunting' },
    { id: 'wall-clock',     name: 'Wall Clock' },
    { id: 'sheet-music',    name: 'Sheet Music' },
    { id: 'roof-cat',       name: 'Roof Cat' },
    { id: 'wall-lamp',      name: 'Wall Lamp' },
    { id: 'macaron',        name: 'Macaron' },
    { id: 'chalk-menu',     name: 'Menu Board' },
    { id: 'cake-dome',      name: 'Cake Dome' },
    { id: 'swallow',        name: 'Swallow' },
    { id: 'lamp-head',      name: 'Lantern' },
    { id: 'wind-chime',     name: 'Wind Chime' },
    { id: 'laundry-dress',  name: 'Dress' },
    { id: 'wine-carafe',    name: 'Carafe' },
    { id: 'weather-vane',   name: 'Weathervane' },
    { id: 'letter-box',     name: 'Letterbox' },
    { id: 'artist-palette', name: 'Paint Palette' },
    { id: 'grey-pigeon',    name: 'Pigeon' },
    { id: 'coffee-mill',    name: 'Coffee Mill' },
    { id: 'paper-kite',     name: 'Kite' },
    { id: 'hang-sign',      name: 'Cafe Sign' },
    { id: 'bird-cage',      name: 'Birdcage' },
    { id: 'dovecote',       name: 'Dovecote' },
    { id: 'brush-jar',      name: 'Brush Jar' },
    { id: 'cart-wheel',     name: 'Cart Wheel' },
    { id: 'hang-basket',    name: 'Hang Basket' },
    { id: 'book-stack',     name: 'Book Stack' },
    { id: 'watering-can',   name: 'Watering Can' },
    { id: 'sill-cactus',    name: 'Cactus' },
    { id: 'handbag',        name: 'Handbag' },
    { id: 'wax-cheese',     name: 'Wax Cheese' },
    { id: 'oil-lamp',       name: 'Oil Lamp' },
    { id: 'film-camera',    name: 'Camera' },
    { id: 'hang-herbs',     name: 'Herbs' },
    { id: 'fountain-pen',   name: 'Fountain Pen' },
    { id: 'apron',          name: 'Apron' },
    { id: 'folded-map',     name: 'Map' },
    { id: 'brass-key',      name: 'Brass Key' },
    { id: 'butterfly',      name: 'Butterfly' },
    { id: 'pocket-watch',   name: 'Pocket Watch' },
    { id: 'honey-bee',      name: 'Bee' },
    { id: 'train-ticket',   name: 'Ticket' },
    { id: 'red-scarf',      name: 'Scarf' },
    { id: 'snail',          name: 'Snail' }
  ],
  svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 1200">
<defs>
  <linearGradient id="france-sky" x1="0" y1="0" x2="0.18" y2="1">
    <stop offset="0" stop-color="#b7c5e9"/>
    <stop offset="0.34" stop-color="#d4d4ef"/>
    <stop offset="0.68" stop-color="#eedcdc"/>
    <stop offset="1" stop-color="#fdeada"/>
  </linearGradient>
  <radialGradient id="france-glow-sun" cx="0.5" cy="0.5" r="0.5">
    <stop offset="0" stop-color="#fff7e6" stop-opacity="0.92"/>
    <stop offset="0.42" stop-color="#ffeccd" stop-opacity="0.42"/>
    <stop offset="1" stop-color="#ffeccd" stop-opacity="0"/>
  </radialGradient>
  <radialGradient id="france-cloud" cx="0.4" cy="0.32" r="0.64">
    <stop offset="0" stop-color="#ffffff" stop-opacity="0.88"/>
    <stop offset="0.58" stop-color="#f7f3fc" stop-opacity="0.42"/>
    <stop offset="1" stop-color="#e7e3f2" stop-opacity="0"/>
  </radialGradient>
  <linearGradient id="france-haze" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#f4e7e2" stop-opacity="0"/>
    <stop offset="0.5" stop-color="#f7e7de" stop-opacity="0.44"/>
    <stop offset="1" stop-color="#fbeada" stop-opacity="0.86"/>
  </linearGradient>
  <linearGradient id="france-tower" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0" stop-color="#ccd1e8"/>
    <stop offset="0.44" stop-color="#b4bbd9"/>
    <stop offset="1" stop-color="#99a1c6"/>
  </linearGradient>
  <linearGradient id="france-far1" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#c7c7e0"/>
    <stop offset="1" stop-color="#dcd7e8"/>
  </linearGradient>
  <linearGradient id="france-far2" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#b6b3d0"/>
    <stop offset="1" stop-color="#cfc9dd"/>
  </linearGradient>
  <linearGradient id="france-roof" x1="0" y1="0" x2="1" y2="0.5">
    <stop offset="0" stop-color="#7f8499"/>
    <stop offset="0.5" stop-color="#666b81"/>
    <stop offset="1" stop-color="#4a4e62"/>
  </linearGradient>
  <linearGradient id="france-roof-top" x1="0" y1="0" x2="0.35" y2="1">
    <stop offset="0" stop-color="#aeb5cc"/>
    <stop offset="0.5" stop-color="#8b91aa"/>
    <stop offset="1" stop-color="#696e87"/>
  </linearGradient>
  <linearGradient id="france-facade" x1="0" y1="0" x2="1" y2="0.22">
    <stop offset="0" stop-color="#fdf4e2"/>
    <stop offset="0.36" stop-color="#f4e4c9"/>
    <stop offset="0.76" stop-color="#e8d4b3"/>
    <stop offset="1" stop-color="#d2ba97"/>
  </linearGradient>
  <linearGradient id="france-facade2" x1="0" y1="0" x2="1" y2="0.18">
    <stop offset="0" stop-color="#fef8ea"/>
    <stop offset="0.42" stop-color="#f7e9d0"/>
    <stop offset="1" stop-color="#d8c2a0"/>
  </linearGradient>
  <linearGradient id="france-cornice" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#fff9ec"/>
    <stop offset="0.55" stop-color="#f0ddc0"/>
    <stop offset="1" stop-color="#c7ac87"/>
  </linearGradient>
  <linearGradient id="france-glass" x1="0.1" y1="0" x2="0.9" y2="1">
    <stop offset="0" stop-color="#b2c0d9"/>
    <stop offset="0.44" stop-color="#7d8dad"/>
    <stop offset="1" stop-color="#545d7e"/>
  </linearGradient>
  <linearGradient id="france-shopglass" x1="0" y1="0" x2="0.72" y2="1">
    <stop offset="0" stop-color="#6d6d87"/>
    <stop offset="0.5" stop-color="#7e6c74"/>
    <stop offset="1" stop-color="#ae8b67"/>
  </linearGradient>
  <linearGradient id="france-awn-cream" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#eddbc0"/>
    <stop offset="0.32" stop-color="#fffaf0"/>
    <stop offset="0.78" stop-color="#efdcc0"/>
    <stop offset="1" stop-color="#d6bc99"/>
  </linearGradient>
  <linearGradient id="france-awn-red" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#7f2a3e"/>
    <stop offset="0.32" stop-color="#b34760"/>
    <stop offset="0.78" stop-color="#8e2f45"/>
    <stop offset="1" stop-color="#6a2233"/>
  </linearGradient>
  <linearGradient id="france-drop" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#4a3728" stop-opacity="0.34"/>
    <stop offset="1" stop-color="#4a3728" stop-opacity="0"/>
  </linearGradient>
  <linearGradient id="france-marble" x1="0" y1="0" x2="0.22" y2="1">
    <stop offset="0" stop-color="#fdfaf3"/>
    <stop offset="0.28" stop-color="#f5ede1"/>
    <stop offset="0.72" stop-color="#e7dccb"/>
    <stop offset="1" stop-color="#d3c5af"/>
  </linearGradient>
  <linearGradient id="france-pave" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#e4d9c8"/>
    <stop offset="0.46" stop-color="#d3c6b2"/>
    <stop offset="1" stop-color="#bcab94"/>
  </linearGradient>
  <radialGradient id="france-shadow" cx="0.5" cy="0.5" r="0.5">
    <stop offset="0" stop-color="#6d543a" stop-opacity="0.44"/>
    <stop offset="0.52" stop-color="#6d543a" stop-opacity="0.2"/>
    <stop offset="1" stop-color="#6d543a" stop-opacity="0"/>
  </radialGradient>
  <radialGradient id="france-shadow-cool" cx="0.5" cy="0.5" r="0.5">
    <stop offset="0" stop-color="#463f5c" stop-opacity="0.36"/>
    <stop offset="0.55" stop-color="#463f5c" stop-opacity="0.15"/>
    <stop offset="1" stop-color="#463f5c" stop-opacity="0"/>
  </radialGradient>
  <radialGradient id="france-glow-warm" cx="0.5" cy="0.5" r="0.5">
    <stop offset="0" stop-color="#ffe9b8" stop-opacity="0.92"/>
    <stop offset="0.48" stop-color="#ffd98f" stop-opacity="0.34"/>
    <stop offset="1" stop-color="#ffd98f" stop-opacity="0"/>
  </radialGradient>
  <radialGradient id="france-glow-purple" cx="0.5" cy="0.5" r="0.5">
    <stop offset="0" stop-color="#dcbcff" stop-opacity="0.9"/>
    <stop offset="0.48" stop-color="#b98ef2" stop-opacity="0.36"/>
    <stop offset="1" stop-color="#b98ef2" stop-opacity="0"/>
  </radialGradient>
  <linearGradient id="france-wood" x1="0" y1="0" x2="1" y2="0.22">
    <stop offset="0" stop-color="#d8a877"/><stop offset="0.42" stop-color="#a9714a"/><stop offset="1" stop-color="#734429"/>
  </linearGradient>
  <linearGradient id="france-wood2" x1="0" y1="0" x2="1" y2="0.22">
    <stop offset="0" stop-color="#ecc79a"/><stop offset="0.44" stop-color="#c58f63"/><stop offset="1" stop-color="#8d5a33"/>
  </linearGradient>
  <linearGradient id="france-cream" x1="0" y1="0" x2="1" y2="0.3">
    <stop offset="0" stop-color="#fffcf5"/><stop offset="0.4" stop-color="#f7e9d7"/><stop offset="1" stop-color="#d8c2a7"/>
  </linearGradient>
  <linearGradient id="france-porcelain" x1="0" y1="0" x2="1" y2="0.26">
    <stop offset="0" stop-color="#ffffff"/><stop offset="0.42" stop-color="#f8f2e8"/><stop offset="1" stop-color="#d9cdbb"/>
  </linearGradient>
  <linearGradient id="france-rose" x1="0" y1="0" x2="1" y2="0.24">
    <stop offset="0" stop-color="#fbd2de"/><stop offset="0.44" stop-color="#ef97ad"/><stop offset="1" stop-color="#c2637c"/>
  </linearGradient>
  <linearGradient id="france-red" x1="0" y1="0" x2="1" y2="0.24">
    <stop offset="0" stop-color="#b44a63"/><stop offset="0.44" stop-color="#8e2f45"/><stop offset="1" stop-color="#5c1c2c"/>
  </linearGradient>
  <linearGradient id="france-purple" x1="0" y1="0" x2="1" y2="0.24">
    <stop offset="0" stop-color="#cba9f4"/><stop offset="0.44" stop-color="#8b5cc9"/><stop offset="1" stop-color="#59338d"/>
  </linearGradient>
  <linearGradient id="france-green" x1="0" y1="0" x2="1" y2="0.24">
    <stop offset="0" stop-color="#a3c793"/><stop offset="0.44" stop-color="#6d9166"/><stop offset="1" stop-color="#42603d"/>
  </linearGradient>
  <linearGradient id="france-sage" x1="0" y1="0" x2="1" y2="0.24">
    <stop offset="0" stop-color="#b6cbc0"/><stop offset="0.44" stop-color="#7f9a8e"/><stop offset="1" stop-color="#52695f"/>
  </linearGradient>
  <linearGradient id="france-blue" x1="0" y1="0" x2="1" y2="0.24">
    <stop offset="0" stop-color="#aabdd8"/><stop offset="0.44" stop-color="#6d84a8"/><stop offset="1" stop-color="#425575"/>
  </linearGradient>
  <linearGradient id="france-gold" x1="0" y1="0" x2="1" y2="0.24">
    <stop offset="0" stop-color="#ffe1a3"/><stop offset="0.44" stop-color="#d9a441"/><stop offset="1" stop-color="#9a6d1c"/>
  </linearGradient>
  <linearGradient id="france-copper" x1="0" y1="0" x2="1" y2="0.24">
    <stop offset="0" stop-color="#f2c795"/><stop offset="0.44" stop-color="#c08a4e"/><stop offset="1" stop-color="#83552a"/>
  </linearGradient>
  <linearGradient id="france-slate" x1="0" y1="0" x2="1" y2="0.24">
    <stop offset="0" stop-color="#726f82"/><stop offset="0.44" stop-color="#474454"/><stop offset="1" stop-color="#272531"/>
  </linearGradient>
  <linearGradient id="france-pastry" x1="0" y1="0" x2="0.7" y2="1">
    <stop offset="0" stop-color="#f9dba7"/><stop offset="0.42" stop-color="#d9a15e"/><stop offset="1" stop-color="#a1682e"/>
  </linearGradient>
  <linearGradient id="france-glassware" x1="0" y1="0" x2="0.85" y2="1">
    <stop offset="0" stop-color="#f2f9fb"/><stop offset="0.42" stop-color="#cfe0e6"/><stop offset="1" stop-color="#9cb9c9"/>
  </linearGradient>
  <linearGradient id="france-tree" x1="0.15" y1="0" x2="0.85" y2="1">
    <stop offset="0" stop-color="#93bc82"/><stop offset="0.45" stop-color="#6d9166"/><stop offset="1" stop-color="#3f5d3a"/>
  </linearGradient>
  <radialGradient id="france-sph-rose" cx="0.34" cy="0.28" r="0.78">
    <stop offset="0" stop-color="#fde4ec"/><stop offset="0.5" stop-color="#ef9bb0"/><stop offset="1" stop-color="#bf5f78"/>
  </radialGradient>
  <radialGradient id="france-sph-gold" cx="0.34" cy="0.28" r="0.78">
    <stop offset="0" stop-color="#fff4d6"/><stop offset="0.5" stop-color="#f0c667"/><stop offset="1" stop-color="#b3822a"/>
  </radialGradient>
  <radialGradient id="france-sph-purple" cx="0.34" cy="0.28" r="0.78">
    <stop offset="0" stop-color="#ead9fd"/><stop offset="0.5" stop-color="#a882e0"/><stop offset="1" stop-color="#673ea1"/>
  </radialGradient>
  <radialGradient id="france-sph-cream" cx="0.34" cy="0.28" r="0.78">
    <stop offset="0" stop-color="#fffdf8"/><stop offset="0.5" stop-color="#f4e6d2"/><stop offset="1" stop-color="#cbb28e"/>
  </radialGradient>
  <radialGradient id="france-sph-green" cx="0.34" cy="0.28" r="0.78">
    <stop offset="0" stop-color="#c6dfb5"/><stop offset="0.5" stop-color="#6d9166"/><stop offset="1" stop-color="#3d5b39"/>
  </radialGradient>
</defs>

<!-- ================= base + morning sky ================= -->
<rect x="0" y="0" width="800" height="1200" fill="#efe0cd"/>
<rect x="0" y="0" width="800" height="690" fill="url(#france-sky)"/>
<circle cx="628" cy="166" r="212" fill="url(#france-glow-sun)"/>
<circle cx="628" cy="166" r="46" fill="#fff8ec" opacity="0.85"/>
<ellipse cx="150" cy="130" rx="120" ry="34" fill="url(#france-cloud)"/>
<ellipse cx="206" cy="114" rx="74" ry="24" fill="url(#france-cloud)"/>
<ellipse cx="432" cy="96" rx="98" ry="26" fill="url(#france-cloud)" opacity="0.8"/>
<ellipse cx="700" cy="238" rx="114" ry="26" fill="url(#france-cloud)" opacity="0.55"/>

<!-- ================= things adrift in the sky ================= -->
<g data-obj="hot-balloon" transform="translate(32,138)">
  <path d="M24 0 C38 0 48 11 48 25 C48 36 36 47 24 56 C12 47 0 36 0 25 C0 11 10 0 24 0 Z" fill="url(#france-sph-rose)"/>
  <path d="M24 0 C31 0 35 11 35 25 C35 36 30 47 24 56 C18 47 13 36 13 25 C13 11 17 0 24 0 Z" fill="#f6b9c8" opacity="0.7"/>
  <path d="M24 0 C27 0 29 11 29 25 C29 36 27 47 24 56 C21 47 19 36 19 25 C19 11 21 0 24 0 Z" fill="url(#france-sph-gold)"/>
  <path d="M7 10 q7 -8 15 -9" stroke="#fff2f6" stroke-width="3" fill="none" stroke-linecap="round" opacity="0.85"/>
  <path d="M15 53 L13 62 M33 53 L35 62" stroke="#8a5738" stroke-width="2" fill="none"/>
  <rect x="13" y="60" width="22" height="13" rx="4" fill="url(#france-wood)"/>
  <rect x="13" y="60" width="22" height="4" rx="2" fill="#e0b98a"/>
</g>
<g data-obj="paper-kite" transform="translate(122,148)">
  <path d="M21 0 L42 26 L21 56 L0 26 Z" fill="url(#france-purple)"/>
  <path d="M21 0 L42 26 L21 26 Z" fill="#d6c2ee"/>
  <path d="M21 0 L0 26 L21 26 Z" fill="#b89ad6"/>
  <path d="M0 26 L42 26 M21 0 L21 56" stroke="#6a3aa8" stroke-width="2" fill="none" opacity="0.65"/>
  <path d="M5 21 q9 -13 16 -17" stroke="#efe6fb" stroke-width="2.5" fill="none" opacity="0.85"/>
  <path d="M21 56 q9 7 0 13" stroke="#e88aa2" stroke-width="2.5" fill="none"/>
</g>
<g data-obj="swallow" transform="translate(248,184)">
  <path d="M0 6 q17 -7 28 8 q11 -15 28 -8 q-11 13 -23 15 l-5 13 l-5 -13 q-12 -2 -23 -15 Z" fill="url(#france-slate)"/>
  <path d="M28 14 q-13 -1 -24 -8 q13 -3 24 8 Z" fill="#66627a" opacity="0.75"/>
  <path d="M23 15 q5 -4 10 0 l-2 7 h-6 Z" fill="#a63d55"/>
  <circle cx="29" cy="11" r="2" fill="#f2ece2" opacity="0.65"/>
</g>

<!-- ================= misty Eiffel Tower + far skyline ================= -->
<path d="M612 168 L644 168 L652 300 L676 430 L718 622 L672 622 L644 470 L636 400 L620 400 L612 470 L584 622 L538 622 L580 430 L604 300 Z" fill="url(#france-tower)" opacity="0.66"/>
<path d="M612 168 L622 168 L602 300 L578 430 L540 622 L538 622 L580 430 L604 300 Z" fill="#d3d8ee" opacity="0.5"/>
<path d="M584 566 Q628 500 672 566 L672 622 L660 622 L660 578 Q628 534 596 578 L596 622 L584 622 Z" fill="#a6adcc" opacity="0.55"/>
<rect x="558" y="452" width="140" height="14" rx="3" fill="#a0a8c8" opacity="0.55"/>
<rect x="620" y="146" width="16" height="24" rx="4" fill="#a0a8c8" opacity="0.6"/>
<rect x="626" y="126" width="4" height="24" fill="#a0a8c8" opacity="0.6"/>
<circle cx="628" cy="122" r="5" fill="#fff0cf" opacity="0.85"/>
<path d="M594 340 L662 340 M586 388 L670 388 M576 436 L680 436 M566 486 L690 486 M554 538 L702 538" stroke="#f1eff9" stroke-width="2" fill="none" opacity="0.34"/>

<path d="M0 474 L58 474 L58 444 L122 444 L122 466 L202 466 L202 432 L282 432 L282 470 L362 470 L362 446 L442 446 L442 472 L542 472 L542 450 L622 450 L622 474 L722 474 L722 444 L800 444 L800 690 L0 690 Z" fill="url(#france-far1)" opacity="0.72"/>
<path d="M470 450 q30 -46 60 0 Z" fill="#c6c3dc" opacity="0.7"/>
<path d="M0 524 L102 524 L102 502 L182 502 L182 526 L300 526 L300 498 L420 498 L420 530 L560 530 L560 508 L662 508 L662 532 L800 532 L800 690 L0 690 Z" fill="url(#france-far2)" opacity="0.7"/>
<rect x="0" y="380" width="800" height="300" fill="url(#france-haze)"/>

<!-- ================= gap: alley wall + plane tree ================= -->
<path d="M556 480 L700 500 L700 950 L556 950 Z" fill="#d8cdbd"/>
<path d="M556 480 L700 500 L700 524 L556 504 Z" fill="#eee3d0"/>
<path d="M660 500 L700 505 L700 950 L660 950 Z" fill="#bda992" opacity="0.45"/>
<rect x="592" y="560" width="34" height="52" rx="4" fill="url(#france-glass)" opacity="0.75"/>
<ellipse cx="588" cy="746" rx="14" ry="42" fill="url(#france-shadow)" opacity="0.55"/>
<rect x="580" y="730" width="17" height="210" fill="url(#france-wood)"/>
<rect x="580" y="730" width="6" height="210" fill="#d8a877" opacity="0.6"/>
<ellipse cx="590" cy="672" rx="60" ry="68" fill="url(#france-tree)"/>
<ellipse cx="564" cy="648" rx="38" ry="42" fill="#8fb87f" opacity="0.75"/>
<ellipse cx="616" cy="700" rx="34" ry="34" fill="#42603d" opacity="0.55"/>
<path d="M548 640 q18 -22 44 -26" stroke="#b3d6a0" stroke-width="5" fill="none" opacity="0.55" stroke-linecap="round"/>

<!-- ================= left Haussmann block ================= -->
<path d="M-10 356 L-10 302 L44 266 L266 266 L310 302 L310 356 Z" fill="url(#france-roof)"/>
<path d="M-10 302 L44 266 L266 266 L310 302 Z" fill="url(#france-roof-top)"/>
<path d="M44 266 L266 266 L266 276 L44 276 Z" fill="#565b70" opacity="0.7"/>
<path d="M136 288 L164 268 L192 288 L188 320 L140 320 Z" fill="#4a4e62"/>
<path d="M146 292 h36 v24 h-36 Z" fill="url(#france-glass)"/>
<path d="M146 292 h36 v9 h-36 Z" fill="#c2cee1" opacity="0.55"/>
<path d="M20 222 h34 v46 h-34 Z" fill="url(#france-red)" opacity="0.85"/>
<path d="M20 222 h12 v46 h-12 Z" fill="#c9836d"/>
<path d="M22 208 h13 v17 h-13 Z M38 208 h13 v17 h-13 Z" fill="#7f4c40"/>
<rect x="-10" y="348" width="320" height="18" rx="4" fill="url(#france-cornice)"/>
<rect x="-10" y="366" width="320" height="7" fill="#c9ac86" opacity="0.7"/>
<rect x="-10" y="373" width="320" height="546" fill="url(#france-facade)"/>
<rect x="-10" y="373" width="320" height="11" fill="#fdf3e0" opacity="0.85"/>
<rect x="262" y="373" width="48" height="546" fill="#c1a682" opacity="0.4"/>
<rect x="-10" y="373" width="26" height="546" fill="#fff8ea" opacity="0.35"/>
<rect x="28" y="400" width="52" height="76" rx="4" fill="url(#france-glass)" stroke="#3f3b46" stroke-width="8"/>
<rect x="120" y="400" width="52" height="76" rx="4" fill="url(#france-glass)" stroke="#3f3b46" stroke-width="8"/>
<rect x="212" y="400" width="52" height="76" rx="4" fill="url(#france-glass)" stroke="#3f3b46" stroke-width="8"/>
<rect x="28" y="522" width="52" height="76" rx="4" fill="url(#france-glass)" stroke="#3f3b46" stroke-width="8"/>
<rect x="120" y="522" width="52" height="76" rx="4" fill="url(#france-glass)" stroke="#3f3b46" stroke-width="8"/>
<rect x="212" y="522" width="52" height="76" rx="4" fill="url(#france-glass)" stroke="#3f3b46" stroke-width="8"/>
<path d="M32 404 L60 404 L36 442 L32 442 Z M124 404 L152 404 L128 442 L124 442 Z M216 404 L244 404 L220 442 L216 442 Z M32 526 L60 526 L36 564 L32 564 Z M124 526 L152 526 L128 564 L124 564 Z M216 526 L244 526 L220 564 L216 564 Z" fill="#ffffff" opacity="0.16"/>
<path d="M54 400 v76 M28 432 h52 M146 400 v76 M120 432 h52 M238 400 v76 M212 432 h52 M54 522 v76 M28 554 h52 M146 522 v76 M120 554 h52 M238 522 v76 M212 554 h52" stroke="#3f3b46" stroke-width="3" fill="none"/>
<path d="M16 478 h76 v9 h-76 Z M108 478 h76 v9 h-76 Z M200 478 h76 v9 h-76 Z M16 600 h76 v9 h-76 Z M108 600 h76 v9 h-76 Z M200 600 h76 v9 h-76 Z" fill="url(#france-cornice)"/>
<rect x="16" y="487" width="76" height="10" fill="url(#france-drop)"/>
<rect x="108" y="487" width="76" height="10" fill="url(#france-drop)"/>
<rect x="200" y="487" width="76" height="10" fill="url(#france-drop)"/>
<path d="M14 478 v-30 h80 v30 M106 478 v-30 h80 v30 M198 478 v-30 h80 v30" fill="none" stroke="#3a3844" stroke-width="3"/>
<path d="M40 450 v28 M68 450 v28 M132 450 v28 M160 450 v28 M224 450 v28 M252 450 v28" stroke="#3a3844" stroke-width="2" fill="none"/>
<path d="M14 600 v-26 h80 v26 M106 600 v-26 h80 v26 M198 600 v-26 h80 v26" fill="none" stroke="#3a3844" stroke-width="3"/>
<path d="M34 574 v26 M62 574 v26 M126 574 v26 M154 574 v26 M218 574 v26 M246 574 v26" stroke="#3a3844" stroke-width="2" fill="none"/>

<!-- ================= middle block ================= -->
<path d="M300 322 L300 276 L344 244 L520 244 L562 276 L562 322 Z" fill="url(#france-roof)"/>
<path d="M300 276 L344 244 L520 244 L562 276 Z" fill="url(#france-roof-top)"/>
<path d="M344 244 L520 244 L520 254 L344 254 Z" fill="#52576b" opacity="0.75"/>
<path d="M448 266 L474 248 L500 266 L496 296 L452 296 Z" fill="#4a4f62"/>
<path d="M458 270 h32 v22 h-32 Z" fill="url(#france-glass)"/>
<path d="M458 270 h32 v8 h-32 Z" fill="#c2cee1" opacity="0.5"/>
<path d="M326 200 h32 v46 h-32 Z" fill="url(#france-red)" opacity="0.85"/>
<path d="M326 200 h11 v46 h-11 Z" fill="#c9836d"/>
<path d="M328 186 h12 v16 h-12 Z M343 186 h12 v16 h-12 Z" fill="#7f4c40"/>
<rect x="300" y="316" width="262" height="18" rx="4" fill="url(#france-cornice)"/>
<rect x="300" y="334" width="262" height="7" fill="#c9ac86" opacity="0.7"/>
<rect x="300" y="341" width="262" height="578" fill="url(#france-facade2)"/>
<rect x="300" y="341" width="262" height="11" fill="#fef8ea" opacity="0.85"/>
<rect x="520" y="341" width="42" height="578" fill="#c1a682" opacity="0.38"/>
<rect x="326" y="372" width="50" height="74" rx="4" fill="url(#france-glass)" stroke="#3f3b46" stroke-width="8"/>
<rect x="408" y="372" width="50" height="74" rx="4" fill="url(#france-glass)" stroke="#3f3b46" stroke-width="8"/>
<rect x="490" y="372" width="50" height="74" rx="4" fill="url(#france-glass)" stroke="#3f3b46" stroke-width="8"/>
<rect x="326" y="494" width="50" height="74" rx="4" fill="url(#france-glass)" stroke="#3f3b46" stroke-width="8"/>
<rect x="408" y="494" width="50" height="74" rx="4" fill="url(#france-glass)" stroke="#3f3b46" stroke-width="8"/>
<rect x="490" y="494" width="50" height="74" rx="4" fill="url(#france-glass)" stroke="#3f3b46" stroke-width="8"/>
<path d="M330 376 L356 376 L334 412 L330 412 Z M412 376 L438 376 L416 412 L412 412 Z M494 376 L520 376 L498 412 L494 412 Z M330 498 L356 498 L334 534 L330 534 Z M412 498 L438 498 L416 534 L412 534 Z M494 498 L520 498 L498 534 L494 534 Z" fill="#ffffff" opacity="0.15"/>
<path d="M351 372 v74 M326 404 h50 M433 372 v74 M408 404 h50 M515 372 v74 M490 404 h50 M351 494 v74 M326 526 h50 M433 494 v74 M408 526 h50 M515 494 v74 M490 526 h50" stroke="#3f3b46" stroke-width="3" fill="none"/>
<path d="M314 448 h74 v9 h-74 Z M396 448 h74 v9 h-74 Z M478 448 h74 v9 h-74 Z M314 570 h74 v9 h-74 Z M396 570 h74 v9 h-74 Z M478 570 h74 v9 h-74 Z" fill="url(#france-cornice)"/>
<rect x="314" y="457" width="74" height="10" fill="url(#france-drop)"/>
<rect x="396" y="457" width="74" height="10" fill="url(#france-drop)"/>
<rect x="478" y="457" width="74" height="10" fill="url(#france-drop)"/>
<path d="M312 448 v-28 h78 v28 M394 448 v-28 h78 v28 M476 448 v-28 h78 v28" fill="none" stroke="#3a3844" stroke-width="3"/>
<path d="M330 420 v28 M356 420 v28 M412 420 v28 M438 420 v28 M494 420 v28 M520 420 v28" stroke="#3a3844" stroke-width="2" fill="none"/>
<path d="M312 570 v-24 h78 v24 M394 570 v-24 h78 v24 M476 570 v-24 h78 v24" fill="none" stroke="#3a3844" stroke-width="3"/>
<path d="M332 546 v24 M360 546 v24 M414 546 v24 M442 546 v24 M496 546 v24 M524 546 v24" stroke="#3a3844" stroke-width="2" fill="none"/>
<ellipse cx="352" cy="440" rx="21" ry="14" fill="url(#france-sph-green)"/>
<circle cx="358" cy="431" r="6" fill="url(#france-sph-rose)"/>
<circle cx="344" cy="428" r="5" fill="#f6b9c8"/>

<!-- ================= right block ================= -->
<path d="M698 344 L698 300 L736 272 L806 272 L806 344 Z" fill="url(#france-roof)"/>
<path d="M698 300 L736 272 L806 272 L806 300 Z" fill="url(#france-roof-top)"/>
<rect x="736" y="228" width="32" height="44" fill="url(#france-red)" opacity="0.85"/>
<rect x="736" y="228" width="11" height="44" fill="#c9836d"/>
<path d="M738 214 h12 v16 h-12 Z M753 214 h12 v16 h-12 Z" fill="#7f4c40"/>
<rect x="698" y="338" width="112" height="16" rx="4" fill="url(#france-cornice)"/>
<rect x="698" y="354" width="112" height="565" fill="url(#france-facade)"/>
<rect x="698" y="354" width="112" height="10" fill="#fdf4e2" opacity="0.85"/>
<rect x="698" y="354" width="26" height="565" fill="#c1a682" opacity="0.45"/>
<rect x="740" y="390" width="48" height="72" rx="4" fill="url(#france-glass)" stroke="#3f3b46" stroke-width="8"/>
<rect x="740" y="510" width="48" height="72" rx="4" fill="url(#france-glass)" stroke="#3f3b46" stroke-width="8"/>
<rect x="740" y="630" width="48" height="72" rx="4" fill="url(#france-glass)" stroke="#3f3b46" stroke-width="8"/>
<path d="M744 394 L768 394 L748 428 L744 428 Z M744 514 L768 514 L748 548 L744 548 Z M744 634 L768 634 L748 668 L744 668 Z" fill="#ffffff" opacity="0.15"/>
<path d="M764 390 v72 M740 420 h48 M764 510 v72 M740 540 h48 M764 630 v72 M740 660 h48" stroke="#3f3b46" stroke-width="3" fill="none"/>
<path d="M728 464 h72 v9 h-72 Z M728 584 h72 v9 h-72 Z M728 704 h72 v9 h-72 Z" fill="url(#france-cornice)"/>
<rect x="728" y="473" width="72" height="10" fill="url(#france-drop)"/>
<rect x="728" y="593" width="72" height="10" fill="url(#france-drop)"/>
<path d="M726 464 v-26 h76 v26 M726 584 v-26 h76 v26 M726 704 v-26 h76 v26" fill="none" stroke="#3a3844" stroke-width="3"/>
<path d="M744 438 v26 M770 438 v26 M744 558 v26 M770 558 v26 M744 678 v26 M770 678 v26" stroke="#3a3844" stroke-width="2" fill="none"/>

<!-- ================= rooftop findables ================= -->
<ellipse cx="146" cy="264" rx="26" ry="6" fill="url(#france-shadow-cool)"/>
<g data-obj="weather-vane" transform="translate(126,200)">
  <rect x="18" y="14" width="5" height="46" rx="2" fill="url(#france-slate)"/>
  <path d="M0 27 h42" stroke="#474454" stroke-width="3" fill="none"/>
  <path d="M2 3 L36 10 L2 18 Z" fill="url(#france-red)"/>
  <path d="M2 3 L36 10 L2 10 Z" fill="#b44a63"/>
  <circle cx="20" cy="23" r="4.5" fill="url(#france-sph-gold)"/>
  <path d="M6 25 l-5 5 M35 25 l5 5" stroke="#474454" stroke-width="3" fill="none"/>
</g>
<ellipse cx="240" cy="266" rx="34" ry="7" fill="url(#france-shadow-cool)"/>
<g data-obj="dovecote" transform="translate(214,200)">
  <path d="M25 0 L50 16 L50 56 L0 56 L0 16 Z" fill="url(#france-cream)"/>
  <path d="M25 0 L50 16 L0 16 Z" fill="url(#france-sage)"/>
  <path d="M25 0 L50 16 L27 16 Z" fill="#5f7a6e" opacity="0.55"/>
  <path d="M7 30 q0 -9 6 -9 q6 0 6 9 v9 H7 Z M19 30 q0 -9 6 -9 q6 0 6 9 v9 H19 Z M31 30 q0 -9 6 -9 q6 0 6 9 v9 H31 Z" fill="#3a3540"/>
  <rect x="-3" y="37" width="56" height="5" rx="2" fill="url(#france-wood)"/>
  <rect x="4" y="47" width="42" height="4" rx="2" fill="#c58f63"/>
  <rect x="21" y="56" width="7" height="8" fill="#8a5738"/>
  <path d="M3 19 h20" stroke="#fffaf0" stroke-width="2" fill="none" opacity="0.6"/>
</g>
<ellipse cx="378" cy="246" rx="30" ry="6" fill="url(#france-shadow-cool)"/>
<g data-obj="roof-cat" transform="translate(350,202)">
  <path d="M9 42 q-5 -19 9 -24 q14 -5 27 0 q11 5 8 24 Z" fill="url(#france-slate)"/>
  <path d="M9 42 q-5 -19 9 -24 q7 -2 13 -2 q-9 8 -8 26 Z" fill="#6b6779" opacity="0.6"/>
  <path d="M13 21 l-3 -13 l11 7 Z M40 21 l3 -13 l-11 7 Z" fill="#474454"/>
  <ellipse cx="21" cy="25" rx="3" ry="3.5" fill="url(#france-sph-gold)"/>
  <ellipse cx="34" cy="25" rx="3" ry="3.5" fill="url(#france-sph-gold)"/>
  <path d="M27 31 q4 3 7 0" stroke="#807c90" stroke-width="2" fill="none"/>
  <path d="M52 42 q9 -11 2 -21 q-3 -5 -8 -3" stroke="#474454" stroke-width="6" fill="none" stroke-linecap="round"/>
</g>

<!-- ================= left facade findables ================= -->
<ellipse cx="199" cy="446" rx="26" ry="7" fill="url(#france-shadow)" opacity="0.5"/>
<g data-obj="laundry-dress" transform="translate(176,380)">
  <path d="M15 4 L23 11 L31 4 L38 13 L34 24 L46 64 H0 L12 24 L8 13 Z" fill="url(#france-rose)"/>
  <path d="M15 4 L23 11 L23 64 H0 L12 24 L8 13 Z" fill="#f6b9c8" opacity="0.75"/>
  <path d="M6 48 q17 7 34 0" stroke="#fff2f5" stroke-width="3" fill="none" opacity="0.85"/>
  <path d="M12 24 L34 24" stroke="#cf738c" stroke-width="2" fill="none" opacity="0.55"/>
</g>
<ellipse cx="287" cy="442" rx="24" ry="6" fill="url(#france-shadow)" opacity="0.45"/>
<g data-obj="bird-cage" transform="translate(266,384)">
  <path d="M21 5 q17 6 17 27 v19 H4 V32 q0 -21 17 -27 Z" fill="#f6e9cf" opacity="0.35"/>
  <path d="M21 5 q17 6 17 27 v19 H4 V32 q0 -21 17 -27 Z" fill="none" stroke="url(#france-gold)" stroke-width="3"/>
  <path d="M12 13 v38 M21 8 v43 M30 13 v38" stroke="#d9a441" stroke-width="2" fill="none"/>
  <rect x="1" y="48" width="40" height="7" rx="3" fill="url(#france-gold)"/>
  <rect x="18" y="0" width="7" height="7" rx="3" fill="#d9a441"/>
  <circle cx="21" cy="36" r="7" fill="url(#france-sph-gold)"/>
  <path d="M9 21 q5 -9 12 -12" stroke="#ffeec4" stroke-width="2" fill="none" opacity="0.9"/>
</g>
<ellipse cx="108" cy="540" rx="26" ry="7" fill="url(#france-shadow)" opacity="0.45"/>
<g data-obj="wall-clock" transform="translate(84,488)">
  <circle cx="24" cy="24" r="24" fill="url(#france-slate)"/>
  <circle cx="24" cy="24" r="19" fill="url(#france-sph-cream)"/>
  <path d="M24 8 v3 M40 24 h-3 M24 40 v-3 M8 24 h3" stroke="#a08f74" stroke-width="2" fill="none"/>
  <path d="M24 24 V12 M24 24 L33 29" stroke="#3f3b46" stroke-width="3" fill="none" stroke-linecap="round"/>
  <circle cx="24" cy="24" r="3" fill="#8e2f45"/>
  <path d="M9 14 q6 -8 15 -9" stroke="#918d9f" stroke-width="3" fill="none" stroke-linecap="round" opacity="0.6"/>
</g>

<!-- ================= middle facade findables ================= -->
<ellipse cx="481" cy="434" rx="26" ry="7" fill="url(#france-shadow)" opacity="0.45"/>
<g data-obj="sheet-music" transform="translate(458,374)">
  <rect x="2" y="3" width="46" height="53" rx="3" fill="#cdbfa9"/>
  <rect x="0" y="0" width="46" height="54" rx="3" fill="url(#france-porcelain)"/>
  <path d="M6 13 h34 M6 21 h34 M6 29 h34 M6 37 h34" stroke="#c6b7a2" stroke-width="1.5" fill="none"/>
  <ellipse cx="16" cy="28" rx="4.5" ry="3.5" fill="#3f3b46"/>
  <path d="M20 28 V13" stroke="#3f3b46" stroke-width="2" fill="none"/>
  <ellipse cx="30" cy="36" rx="4.5" ry="3.5" fill="#3f3b46"/>
  <path d="M34 36 V21" stroke="#3f3b46" stroke-width="2" fill="none"/>
  <path d="M20 13 q9 3 14 8" stroke="#3f3b46" stroke-width="2" fill="none"/>
</g>
<ellipse cx="320" cy="556" rx="24" ry="6" fill="url(#france-shadow)" opacity="0.42"/>
<g data-obj="sill-cactus" transform="translate(304,498)">
  <path d="M6 36 h26 l-3 20 q-1 3 -4 3 H13 q-3 0 -4 -3 Z" fill="url(#france-copper)"/>
  <rect x="3" y="30" width="32" height="8" rx="3" fill="url(#france-copper)"/>
  <rect x="3" y="30" width="32" height="3" rx="1.5" fill="#f2c795"/>
  <path d="M15 32 v-17 q0 -13 4 -13 q4 0 4 13 v17 Z" fill="url(#france-green)"/>
  <path d="M15 24 q-9 0 -9 -9 q0 -4 3 -4 q6 0 6 9 Z M23 28 q9 0 9 -9 q0 -4 -3 -4 q-6 0 -6 9 Z" fill="#7aa76e"/>
  <path d="M17 7 v21" stroke="#a9cf98" stroke-width="2" fill="none" opacity="0.8"/>
  <circle cx="19" cy="4" r="4.5" fill="url(#france-sph-rose)"/>
</g>
<ellipse cx="400" cy="546" rx="24" ry="6" fill="url(#france-shadow)" opacity="0.42"/>
<g data-obj="wine-carafe" transform="translate(380,484)">
  <path d="M16 0 h9 v15 q15 10 15 27 q0 19 -19 19 q-19 0 -19 -19 q0 -17 14 -27 Z" fill="url(#france-glassware)" opacity="0.9"/>
  <path d="M8 35 q13 -6 25 0 q4 6 4 12 q0 12 -17 12 q-17 0 -17 -12 q0 -6 5 -12 Z" fill="url(#france-red)"/>
  <path d="M10 40 q11 -5 21 0 q-2 4 -11 4 q-9 0 -10 -4 Z" fill="#b44a63" opacity="0.6"/>
  <path d="M9 34 q-4 8 -3 14" stroke="#f8fcfd" stroke-width="3" fill="none" opacity="0.8"/>
  <rect x="15" y="0" width="11" height="7" rx="3" fill="url(#france-wood)"/>
</g>
<ellipse cx="485" cy="534" rx="30" ry="7" fill="url(#france-shadow)" opacity="0.42"/>
<g data-obj="book-stack" transform="translate(458,492)">
  <rect x="0" y="26" width="54" height="13" rx="2" fill="url(#france-blue)"/>
  <rect x="0" y="26" width="54" height="4" rx="2" fill="#bccbe0"/>
  <rect x="4" y="15" width="46" height="12" rx="2" fill="url(#france-red)"/>
  <rect x="4" y="15" width="46" height="4" rx="2" fill="#bb5670"/>
  <rect x="9" y="4" width="39" height="12" rx="2" fill="url(#france-green)"/>
  <rect x="9" y="4" width="39" height="4" rx="2" fill="#a8cc98"/>
  <path d="M2 34 h50 M6 22 h42 M11 11 h35" stroke="#f9f3e8" stroke-width="2" fill="none" opacity="0.6"/>
</g>

<!-- ================= right facade findables ================= -->
<g data-obj="wall-lamp" transform="translate(698,458)">
  <rect x="0" y="0" width="7" height="22" rx="2" fill="url(#france-slate)"/>
  <path d="M5 7 q21 0 23 15" stroke="#3f3b46" stroke-width="4" fill="none"/>
  <circle cx="28" cy="42" r="22" fill="url(#france-glow-warm)"/>
  <path d="M13 23 h31 l-6 23 H19 Z" fill="url(#france-sph-gold)"/>
  <path d="M13 23 h31 l-2 6 H15 Z" fill="#fff4d6" opacity="0.85"/>
  <path d="M13 23 h31 l-6 23 H19 Z" fill="none" stroke="#3f3b46" stroke-width="3"/>
  <circle cx="28" cy="52" r="5" fill="#f0c667"/>
</g>
<ellipse cx="719" cy="648" rx="26" ry="7" fill="url(#france-shadow)" opacity="0.42"/>
<g data-obj="letter-box" transform="translate(700,590)">
  <rect x="0" y="8" width="38" height="40" rx="5" fill="url(#france-green)"/>
  <rect x="0" y="8" width="38" height="9" rx="4" fill="#9cc08e"/>
  <rect x="8" y="23" width="22" height="5" rx="2.5" fill="#2f4539"/>
  <path d="M6 48 v7 M31 48 v7" stroke="#3f5a4c" stroke-width="4" fill="none"/>
  <path d="M12 0 q7 9 14 0" stroke="#3f5a4c" stroke-width="3" fill="none"/>
  <path d="M4 15 q5 -4 11 -4" stroke="#c9e2b9" stroke-width="2.5" fill="none" opacity="0.8"/>
</g>

<!-- ================= alley ledge: mill, map, apron ================= -->
<rect x="548" y="594" width="176" height="9" rx="3" fill="#c7bbad"/>
<rect x="548" y="594" width="176" height="3" rx="1" fill="#e6ddd1"/>
<rect x="548" y="603" width="176" height="12" fill="url(#france-drop)"/>
<ellipse cx="580" cy="596" rx="26" ry="6" fill="url(#france-shadow)" opacity="0.45"/>
<g data-obj="coffee-mill" transform="translate(558,536)">
  <rect x="4" y="20" width="38" height="30" rx="3" fill="url(#france-wood)"/>
  <rect x="4" y="20" width="12" height="30" rx="3" fill="#d8a877"/>
  <path d="M8 20 L23 7 L38 20 Z" fill="url(#france-copper)"/>
  <path d="M8 20 L23 7 L23 20 Z" fill="#f2c795" opacity="0.7"/>
  <path d="M23 7 v-6 M23 3 q11 -2 11 7" stroke="#5a5260" stroke-width="3" fill="none"/>
  <rect x="12" y="31" width="22" height="13" rx="2" fill="url(#france-cream)"/>
  <rect x="0" y="50" width="46" height="10" rx="3" fill="#5f3d27"/>
</g>
<ellipse cx="574" cy="542" rx="30" ry="7" fill="url(#france-shadow)" opacity="0.3"/>
<g data-obj="folded-map" transform="translate(548,496)">
  <path d="M0 6 L17 0 L35 8 L52 2 V38 L35 44 L17 36 L0 42 Z" fill="url(#france-cream)"/>
  <path d="M0 6 L17 0 V36 L0 42 Z" fill="#fffaf0" opacity="0.6"/>
  <path d="M17 0 V36 M35 8 V44" stroke="#c6b39a" stroke-width="2" fill="none"/>
  <path d="M4 22 q11 -8 21 0 q10 8 23 -2" stroke="#8e2f45" stroke-width="2" fill="none"/>
  <circle cx="27" cy="19" r="3" fill="#8e2f45"/>
</g>
<g data-obj="apron" transform="translate(742,586)">
  <path d="M13 0 h20 v10 q11 4 11 17 v31 H2 V27 q0 -13 11 -17 Z" fill="url(#france-cream)"/>
  <path d="M13 0 h10 v58 H2 V27 q0 -13 11 -17 Z" fill="#fffcf5" opacity="0.65"/>
  <path d="M2 31 h42" stroke="#c58f63" stroke-width="3" fill="none"/>
  <rect x="15" y="37" width="16" height="13" rx="2" fill="#e6d3ba"/>
  <path d="M6 22 q4 -6 9 -8" stroke="#ffffff" stroke-width="2.5" fill="none" opacity="0.8"/>
</g>

<!-- ================= awning (curved volume) ================= -->
<rect x="4" y="576" width="546" height="16" rx="5" fill="url(#france-slate)"/>
<path d="M8 590 L546 590 L524 650 L30 650 Z" fill="url(#france-awn-cream)"/>
<path d="M74 590 L112 590 L96 650 L58 650 Z M158 590 L196 590 L182 650 L144 650 Z M242 590 L280 590 L268 650 L230 650 Z M326 590 L364 590 L354 650 L316 650 Z M410 590 L448 590 L440 650 L402 650 Z M494 590 L532 590 L526 650 L488 650 Z" fill="url(#france-awn-red)"/>
<path d="M8 590 L546 590 L544 601 L10 601 Z" fill="#fffdf7" opacity="0.42"/>
<path d="M30 650 q13 17 26 0 q13 17 26 0 q13 17 26 0 q13 17 26 0 q13 17 26 0 q13 17 26 0 q13 17 26 0 q13 17 26 0 q13 17 26 0 q13 17 26 0 q13 17 26 0 q13 17 26 0 q13 17 26 0 q13 17 26 0 q13 17 26 0 q13 17 26 0 q13 17 26 0 q13 17 26 0 q13 17 26 0 L524 650 Z" fill="url(#france-awn-red)"/>
<path d="M30 650 L524 650 L522 659 L32 659 Z" fill="#5f1e2e" opacity="0.4"/>
<path d="M20 592 L34 648 M534 592 L520 648" stroke="#332f39" stroke-width="5" fill="none"/>
<rect x="30" y="668" width="494" height="26" fill="url(#france-drop)"/>

<!-- ================= string lights ================= -->
<path d="M-6 556 Q120 596 246 556 Q380 518 512 560 Q590 586 640 558" fill="none" stroke="#3a3540" stroke-width="3"/>
<circle cx="52" cy="580" r="15" fill="url(#france-glow-warm)"/>
<circle cx="246" cy="562" r="15" fill="url(#france-glow-warm)"/>
<circle cx="346" cy="536" r="15" fill="url(#france-glow-warm)"/>
<circle cx="546" cy="580" r="15" fill="url(#france-glow-warm)"/>
<circle cx="624" cy="562" r="15" fill="url(#france-glow-warm)"/>
<circle cx="52" cy="580" r="6" fill="url(#france-sph-gold)"/>
<circle cx="246" cy="562" r="6" fill="url(#france-sph-gold)"/>
<circle cx="346" cy="536" r="6" fill="url(#france-sph-gold)"/>
<circle cx="546" cy="580" r="6" fill="url(#france-sph-gold)"/>
<circle cx="624" cy="562" r="6" fill="url(#france-sph-gold)"/>

<!-- ================= strung above the terrace ================= -->
<g data-obj="bunting" transform="translate(236,546)">
  <path d="M0 4 q34 11 68 0" stroke="#8a5738" stroke-width="2" fill="none"/>
  <path d="M2 6 L15 9 L9 30 Z" fill="url(#france-red)"/>
  <path d="M19 10 L32 11 L26 32 Z" fill="url(#france-gold)"/>
  <path d="M36 11 L49 10 L43 32 Z" fill="url(#france-green)"/>
  <path d="M52 8 L65 5 L59 26 Z" fill="url(#france-purple)"/>
  <path d="M2 6 L15 9 L12 18 Z" fill="#c05f76" opacity="0.6"/>
</g>
<g data-obj="hang-basket" transform="translate(146,536)">
  <path d="M6 18 q20 -8 40 0 l-6 24 q-15 6 -29 0 Z" fill="url(#france-wood)"/>
  <path d="M6 18 q20 -8 40 0 l-1 6 q-19 -7 -38 0 Z" fill="#e0b98a"/>
  <path d="M9 21 q17 21 34 0" stroke="#7a4a2f" stroke-width="2" fill="none" opacity="0.7"/>
  <ellipse cx="16" cy="13" rx="14" ry="9" fill="url(#france-sph-green)"/>
  <ellipse cx="35" cy="15" rx="13" ry="8" fill="#5f8a5e"/>
  <circle cx="12" cy="10" r="5.5" fill="url(#france-sph-rose)"/>
  <circle cx="39" cy="12" r="5.5" fill="url(#france-sph-rose)"/>
  <path d="M14 42 q6 10 11 16 M37 42 q-4 10 -9 16" stroke="#5f8a5e" stroke-width="3" fill="none"/>
</g>
<g data-obj="hang-herbs" transform="translate(336,538)">
  <path d="M18 0 v10" stroke="#8a5738" stroke-width="2" fill="none"/>
  <rect x="9" y="8" width="18" height="6" rx="3" fill="url(#france-wood2)"/>
  <path d="M18 14 q-15 13 -13 42 q11 -6 13 -42 Z M18 14 q15 13 13 42 q-11 -6 -13 -42 Z" fill="url(#france-green)"/>
  <path d="M18 14 q-4 21 0 42 q4 -21 0 -42 Z" fill="#8fb87f"/>
</g>
<g data-obj="wind-chime" transform="translate(98,594)">
  <path d="M2 6 q14 -8 28 0 q-3 9 -14 9 q-11 0 -14 -9 Z" fill="url(#france-wood2)"/>
  <path d="M16 0 v6" stroke="#8a5738" stroke-width="2" fill="none"/>
  <path d="M6 15 v27 M16 15 v35 M26 15 v23" stroke="#d9a441" stroke-width="3" fill="none"/>
  <path d="M6 16 v25" stroke="#ffe1a3" stroke-width="1.5" fill="none"/>
  <circle cx="16" cy="56" r="7" fill="url(#france-sph-cream)"/>
  <path d="M13 63 v7" stroke="#c58f63" stroke-width="2" fill="none"/>
</g>
<g data-obj="hang-sign" transform="translate(22,646)">
  <path d="M5 0 v6 M53 0 v6" stroke="#3f3b46" stroke-width="3" fill="none"/>
  <rect x="0" y="6" width="58" height="34" rx="4" fill="url(#france-slate)"/>
  <rect x="3" y="9" width="52" height="28" rx="3" fill="url(#france-cream)"/>
  <path d="M20 17 h15 q4 0 4 5 q0 6 -6 6 h-13 Z" fill="#8a5738"/>
  <path d="M39 20 q6 0 6 4 q0 4 -6 4" fill="none" stroke="#8a5738" stroke-width="3"/>
  <path d="M16 32 h27" stroke="#8a5738" stroke-width="3" fill="none"/>
  <path d="M4 11 h50" stroke="#fffcf5" stroke-width="2" fill="none" opacity="0.8"/>
</g>

<!-- ================= café facade (ground floor) ================= -->
<rect x="-10" y="616" width="572" height="304" fill="url(#france-facade)"/>
<rect x="-10" y="616" width="572" height="12" fill="#fdf4e2" opacity="0.8"/>
<rect x="-10" y="662" width="560" height="258" rx="6" fill="url(#france-slate)"/>
<rect x="-10" y="662" width="560" height="10" fill="#726f82" opacity="0.7"/>
<rect x="10" y="682" width="196" height="206" rx="5" fill="url(#france-shopglass)"/>
<rect x="222" y="682" width="196" height="206" rx="5" fill="url(#france-shopglass)"/>
<rect x="434" y="682" width="106" height="206" rx="5" fill="url(#france-shopglass)"/>
<path d="M108 682 v206 M10 748 h196 M320 682 v206 M222 748 h196 M487 682 v206 M434 748 h106" stroke="#3a3540" stroke-width="6" fill="none"/>
<path d="M24 888 L76 700 L108 700 L56 888 Z M238 888 L290 700 L310 700 L258 888 Z" fill="#ffffff" opacity="0.1"/>
<path d="M24 806 h170 v80 h-170 Z M236 800 h170 v86 h-170 Z" fill="#4a3f3c" opacity="0.5"/>
<rect x="440" y="800" width="94" height="86" rx="4" fill="#4a3f3c" opacity="0.45"/>

<!-- ===== milliner's shelf in the café window: the beret among look-alike hats ===== -->
<rect x="12" y="746" width="192" height="9" rx="3" fill="url(#france-wood)"/>
<rect x="12" y="746" width="192" height="3" rx="1" fill="#d8a877"/>
<ellipse cx="52" cy="748" rx="38" ry="7" fill="#241f28" opacity="0.35"/>
<g data-obj="beret" transform="translate(18,701) scale(0.85)">
  <path d="M4 42 q-6 -30 21 -40 q28 -10 48 0 q17 8 15 24 q-1 10 -12 13 L16 46 Z" fill="url(#france-red)"/>
  <path d="M10 32 q11 -21 32 -25 q20 -4 32 6 q-29 -6 -49 5 q-12 7 -15 14 Z" fill="#c05f76" opacity="0.75"/>
  <path d="M4 42 q4 12 22 13 l50 -2 q10 -4 10 -12 q-8 10 -32 12 q-32 2 -50 -11 Z" fill="#5f1e2e"/>
  <path d="M44 6 q4 -8 10 -6 q4 3 0 9 Z" fill="#5f1e2e"/>
  <ellipse cx="52" cy="6" rx="7" ry="5" fill="url(#france-red)"/>
  <path d="M18 28 q10 -12 24 -16" stroke="#e0899f" stroke-width="3" fill="none" opacity="0.55" stroke-linecap="round"/>
</g>
<path d="M104 744 q-5 -28 17 -35 q22 -8 37 0 q16 7 14 22 q-1 9 -10 12 L114 748 Z" fill="url(#france-cream)"/>
<path d="M109 735 q10 -19 28 -22 q17 -3 25 6 q-24 -5 -40 5 q-10 6 -13 11 Z" fill="#fffcf5" opacity="0.7"/>
<rect x="108" y="730" width="60" height="8" rx="4" fill="#c9a97f"/>
<path d="M96 748 q40 10 82 -2 q-2 8 -14 10 q-34 4 -59 -2 q-9 -2 -9 -6 Z" fill="#dfcdb2"/>
<path d="M170 742 q-3 -22 15 -28 q17 -6 28 0 q13 6 11 19 q-1 7 -9 9 L179 745 Z" fill="url(#france-blue)"/>
<path d="M170 742 q3 9 15 10 l40 -2 q7 -2 7 -9 q-5 8 -23 9 q-24 2 -39 -8 Z" fill="#33445f"/>
<rect x="10" y="748" width="196" height="8" rx="2" fill="#5f4c3d"/>
<rect x="224" y="746" width="192" height="9" rx="3" fill="url(#france-wood)"/>
<path d="M332 740 q-2 -28 27 -30 q29 -2 29 28 q0 7 -10 9 L341 746 Z" fill="url(#france-sph-cream)"/>
<rect x="331" y="726" width="57" height="8" rx="4" fill="#8e2f45"/>
<path d="M322 744 q38 9 76 -2 q-2 8 -14 10 q-32 4 -54 -2 q-8 -2 -8 -6 Z" fill="#d8bd85"/>

<!-- ================= behind the café glass ================= -->
<ellipse cx="370" cy="726" rx="24" ry="6" fill="#241f28" opacity="0.35"/>
<g data-obj="oil-lamp" transform="translate(350,674)">
  <path d="M8 22 q12 -7 24 0 l3 20 q-15 6 -30 0 Z" fill="url(#france-gold)"/>
  <path d="M8 22 q12 -7 24 0 l1 6 q-13 -6 -26 0 Z" fill="#ffe1a3" opacity="0.8"/>
  <rect x="14" y="11" width="11" height="11" rx="2" fill="url(#france-wood)"/>
  <path d="M20 0 q7 7 0 11 q-7 -4 0 -11 Z" fill="#ffeec4"/>
  <path d="M32 28 q10 5 2 13" stroke="#8a5738" stroke-width="3" fill="none"/>
  <path d="M12 26 q6 -4 12 -3" stroke="#fff1cf" stroke-width="2.5" fill="none" opacity="0.85"/>
</g>
<ellipse cx="454" cy="736" rx="18" ry="5" fill="#241f28" opacity="0.3"/>
<g data-obj="butterfly" transform="translate(430,692)">
  <ellipse cx="24" cy="21" rx="3" ry="13" fill="#5a3a26"/>
  <path d="M23 13 q-17 -15 -22 -2 q-4 11 8 15 q9 2 14 -4 Z" fill="url(#france-sph-rose)"/>
  <path d="M25 13 q17 -15 22 -2 q4 11 -8 15 q-9 2 -14 -4 Z" fill="url(#france-sph-rose)"/>
  <path d="M23 26 q-13 2 -15 11 q11 6 16 -4 Z" fill="url(#france-sph-gold)"/>
  <path d="M25 26 q13 2 15 11 q-11 6 -16 -4 Z" fill="url(#france-sph-gold)"/>
  <path d="M23 10 l-5 -9 M25 10 l5 -9" stroke="#5a3a26" stroke-width="2" fill="none"/>
</g>
<ellipse cx="458" cy="790" rx="30" ry="7" fill="#241f28" opacity="0.32"/>
<g data-obj="cake-dome" transform="translate(432,738)">
  <ellipse cx="26" cy="45" rx="26" ry="6" fill="url(#france-wood2)"/>
  <path d="M2 45 q0 -32 24 -32 q24 0 24 32 Z" fill="url(#france-glassware)" opacity="0.55"/>
  <path d="M8 44 q0 -26 14 -30 q-8 8 -8 30 Z" fill="#ffffff" opacity="0.45"/>
  <path d="M2 45 q0 -32 24 -32 q24 0 24 32 Z" fill="none" stroke="#a8c5d6" stroke-width="2"/>
  <circle cx="26" cy="9" r="5.5" fill="url(#france-sph-gold)"/>
  <path d="M13 43 q13 -13 27 0 Z" fill="url(#france-sph-rose)"/>
</g>
<path d="M448 706 q22 -14 44 0 q-22 16 -44 0 Z" fill="#d9a441" opacity="0.55"/>
<rect x="-10" y="884" width="572" height="36" fill="#463f4a"/>
<rect x="-10" y="884" width="572" height="8" fill="#5f5b6e"/>

<!-- ================= sidewalk ================= -->
<rect x="0" y="908" width="800" height="292" fill="url(#france-pave)"/>
<rect x="0" y="908" width="800" height="14" fill="#e9dfd0"/>
<path d="M0 950 L800 950 M0 992 L800 992" stroke="#bcab94" stroke-width="3" fill="none" opacity="0.55"/>
<ellipse cx="250" cy="946" rx="230" ry="26" fill="url(#france-shadow)" opacity="0.5"/>
<ellipse cx="660" cy="952" rx="180" ry="22" fill="url(#france-shadow)" opacity="0.4"/>

<!-- ================= easel corner (midground left) ================= -->
<ellipse cx="76" cy="1006" rx="92" ry="18" fill="url(#france-shadow)" opacity="0.5"/>
<path d="M52 786 L20 1006 M96 786 L136 1006 M76 830 L86 1006" stroke="url(#france-wood)" stroke-width="11" stroke-linecap="round" fill="none"/>
<path d="M32 896 L124 896" stroke="#8a5738" stroke-width="10" fill="none"/>
<rect x="10" y="762" width="132" height="140" rx="4" fill="url(#france-wood2)"/>
<rect x="20" y="772" width="112" height="120" fill="url(#france-porcelain)"/>
<path d="M20 856 L132 856 L132 892 L20 892 Z" fill="#cdbba4"/>
<path d="M40 856 L54 810 L70 856 Z" fill="#9ba4c8"/>
<path d="M62 856 L86 792 L110 856 Z" fill="url(#france-tower)"/>
<circle cx="106" cy="798" r="9" fill="url(#france-sph-gold)"/>
<path d="M20 772 h112 v10 h-112 Z" fill="#ffffff" opacity="0.45"/>
<path d="M26 902 L40 936 M118 902 L106 936" stroke="url(#france-wood)" stroke-width="9" stroke-linecap="round" fill="none"/>

<!-- ================= flower cart (midground) ================= -->
<ellipse cx="242" cy="944" rx="128" ry="22" fill="url(#france-shadow)" opacity="0.55"/>
<rect x="150" y="800" width="184" height="86" rx="6" fill="url(#france-wood)"/>
<rect x="150" y="800" width="184" height="14" rx="6" fill="#dfae82"/>
<path d="M196 814 v72 M242 814 v72 M288 814 v72" stroke="#7a4a2f" stroke-width="4" fill="none" opacity="0.7"/>
<rect x="146" y="786" width="192" height="18" rx="6" fill="url(#france-wood2)"/>
<rect x="146" y="880" width="192" height="14" rx="5" fill="#7a4a2f"/>
<path d="M156 912 a30 30 0 1 0 60 0 a30 30 0 1 0 -60 0 Z" fill="url(#france-wood)"/>
<path d="M166 912 a20 20 0 1 0 40 0 a20 20 0 1 0 -40 0 Z" fill="#c58f63"/>
<path d="M176 912 a10 10 0 1 0 20 0 a10 10 0 1 0 -20 0 Z" fill="#7a4a2f"/>
<g data-obj="cart-wheel" transform="translate(268,880)">
  <circle cx="31" cy="32" r="31" fill="url(#france-wood)"/>
  <circle cx="31" cy="32" r="21" fill="url(#france-wood2)"/>
  <path d="M31 11 v42 M10 32 h42 M16 17 l30 30 M46 17 l-30 30" stroke="#7a4a2f" stroke-width="3" fill="none"/>
  <circle cx="31" cy="32" r="7" fill="url(#france-red)"/>
  <path d="M12 18 q7 -8 16 -11" stroke="#e6b98e" stroke-width="3" fill="none" opacity="0.7" stroke-linecap="round"/>
</g>
<path d="M334 810 q46 -6 58 26" stroke="url(#france-wood)" stroke-width="10" stroke-linecap="round" fill="none"/>
<rect x="156" y="748" width="52" height="46" rx="6" fill="url(#france-sage)"/>
<rect x="216" y="742" width="56" height="52" rx="6" fill="#8e7f9a"/>
<rect x="280" y="750" width="50" height="44" rx="6" fill="url(#france-sage)"/>
<path d="M156 752 h52 v8 h-52 Z M216 746 h56 v8 h-56 Z M280 754 h50 v8 h-50 Z" fill="#c0d2c8"/>
<path d="M172 748 q-8 -46 4 -70 M248 742 q6 -46 -4 -68 M296 750 q-8 -44 2 -64" stroke="#5f8a5e" stroke-width="4" fill="none"/>
<ellipse cx="184" cy="700" rx="44" ry="31" fill="url(#france-tree)"/>
<ellipse cx="308" cy="704" rx="38" ry="27" fill="url(#france-tree)"/>
<ellipse cx="250" cy="694" rx="46" ry="32" fill="#6d9166"/>
<circle cx="164" cy="690" r="15" fill="url(#france-sph-rose)"/>
<circle cx="196" cy="676" r="14" fill="url(#france-sph-rose)"/>
<circle cx="238" cy="672" r="15" fill="url(#france-sph-cream)"/>
<circle cx="278" cy="682" r="14" fill="url(#france-sph-purple)"/>
<circle cx="164" cy="690" r="6" fill="#f6d38f"/>
<circle cx="238" cy="672" r="6" fill="#f6d38f"/>
<path d="M222 700 q10 -26 8 -34 q10 12 6 34 Z" fill="url(#france-purple)"/>
<path d="M224 698 q6 -18 5 -25 q4 8 2 25 Z" fill="#cba9f4" opacity="0.8"/>
<path d="M246 708 q10 -24 6 -32 q10 12 4 32 Z" fill="#8b5cc9"/>
<ellipse cx="286" cy="718" rx="26" ry="16" fill="url(#france-sph-green)"/>
<circle cx="292" cy="716" r="11" fill="url(#france-sph-rose)"/>

<!-- ================= bistro table + chairs ================= -->
<ellipse cx="358" cy="952" rx="46" ry="12" fill="url(#france-shadow)" opacity="0.55"/>
<path d="M354 830 L354 950 M362 830 L346 950" stroke="#3a3844" stroke-width="7" fill="none"/>
<ellipse cx="358" cy="824" rx="60" ry="18" fill="#d7cbb9"/>
<ellipse cx="358" cy="819" rx="60" ry="18" fill="url(#france-marble)"/>
<path d="M300 819 q30 -9 58 -3 q30 6 58 -4" stroke="#ffffff" stroke-width="3" fill="none" opacity="0.6"/>
<path d="M296 946 L308 866 M340 946 L326 866 M404 946 L414 866 M456 946 L444 866" stroke="#3a3844" stroke-width="6" fill="none"/>
<ellipse cx="316" cy="861" rx="34" ry="12" fill="#3f3c48"/>
<ellipse cx="316" cy="857" rx="34" ry="12" fill="url(#france-slate)"/>
<ellipse cx="428" cy="863" rx="36" ry="13" fill="#3f3c48"/>
<ellipse cx="428" cy="859" rx="36" ry="13" fill="url(#france-slate)"/>
<path d="M290 858 L288 794 M342 858 L346 794 M400 860 L398 776 M456 860 L460 776" stroke="#3a3844" stroke-width="6" fill="none"/>
<path d="M288 796 q28 -14 58 -2 M398 780 q30 -16 62 -4" stroke="#3a3844" stroke-width="7" fill="none"/>
<path d="M302 811 v42 M318 810 v43 M334 812 v41 M412 795 v57 M430 794 v58 M446 796 v56" stroke="#3a3844" stroke-width="4" fill="none"/>

<!-- bread basket on the bistro table -->
<ellipse cx="360" cy="838" rx="50" ry="12" fill="url(#france-shadow)" opacity="0.4"/>
<path d="M320 792 q40 -12 82 0 L396 830 q-38 10 -70 0 Z" fill="#8a5738"/>
<path d="M344 784 q12 -26 30 -32 q-8 22 -18 38 Z" fill="#e3ac72"/>
<g data-obj="baguette" transform="translate(356,752) rotate(-16)">
  <rect x="0" y="0" width="22" height="68" rx="11" fill="url(#france-pastry)"/>
  <rect x="0" y="0" width="8" height="68" rx="4" fill="#f7d79f"/>
  <path d="M4 14 q9 -4 14 2 M4 30 q9 -4 14 2 M4 46 q9 -4 14 2 M4 58 q9 -4 14 2" stroke="#a86f34" stroke-width="4" fill="none" stroke-linecap="round"/>
  <ellipse cx="10" cy="4" rx="10" ry="5" fill="#f9dba7"/>
  <path d="M4 8 q6 -3 11 0" stroke="#fdf0d6" stroke-width="3" fill="none" opacity="0.8"/>
</g>
<ellipse cx="392" cy="806" rx="17" ry="13" fill="url(#france-pastry)"/>
<path d="M318 798 q42 -12 86 0 L400 834 q-40 10 -76 0 Z" fill="url(#france-wood)"/>
<path d="M318 798 q42 -12 86 0 L403 810 q-42 -11 -84 0 Z" fill="#dfae82"/>
<path d="M330 806 v26 M348 804 v29 M366 803 v30 M384 804 v29" stroke="#7a4a2f" stroke-width="4" fill="none" opacity="0.6"/>
<path d="M312 812 q30 -10 44 6 q-12 20 -42 12 Z" fill="url(#france-cream)"/>

<!-- ================= lamppost ================= -->
<ellipse cx="494" cy="948" rx="34" ry="11" fill="url(#france-shadow)" opacity="0.55"/>
<path d="M494 646 L494 946" stroke="#2f2c36" stroke-width="14" fill="none"/>
<path d="M489 646 L489 946" stroke="#5c5869" stroke-width="4" fill="none"/>
<rect x="472" y="898" width="44" height="16" rx="5" fill="url(#france-slate)"/>
<path d="M494 662 q-30 6 -34 30 M494 662 q30 6 34 30" stroke="#2f2c36" stroke-width="7" fill="none"/>
<circle cx="494" cy="602" r="52" fill="url(#france-glow-warm)"/>
<g data-obj="lamp-head" transform="translate(464,566)">
  <path d="M6 74 L10 30 L50 30 L54 74 Z" fill="url(#france-sph-gold)"/>
  <path d="M6 74 L10 30 L28 30 L24 74 Z" fill="#fff4d6" opacity="0.55"/>
  <path d="M6 74 L10 30 L50 30 L54 74 Z" fill="none" stroke="#2f2c36" stroke-width="5"/>
  <path d="M30 30 v44" stroke="#2f2c36" stroke-width="3" fill="none" opacity="0.45"/>
  <path d="M2 30 L30 4 L58 30 Z" fill="url(#france-slate)"/>
  <path d="M2 30 L30 4 L30 30 Z" fill="#6b6779" opacity="0.6"/>
  <rect x="24" y="0" width="12" height="6" rx="3" fill="#2f2c36"/>
</g>
<path d="M528 692 q-6 -24 -34 -28" stroke="#2f2c36" stroke-width="5" fill="none"/>
<ellipse cx="540" cy="706" rx="20" ry="26" fill="url(#france-tree)"/>
<circle cx="546" cy="712" r="7" fill="url(#france-sph-rose)"/>
<circle cx="534" cy="718" r="6" fill="#f6b9c8"/>
<g data-obj="honey-bee" transform="translate(512,696)">
  <ellipse cx="21" cy="19" rx="15" ry="9" fill="url(#france-sph-gold)"/>
  <path d="M14 11 q4 16 4 17 M23 10 q4 17 3 18" stroke="#5a3a26" stroke-width="3" fill="none"/>
  <ellipse cx="34" cy="17" rx="5" ry="5" fill="#5a3a26"/>
  <ellipse cx="14" cy="6" rx="9" ry="5" fill="#eaf4f7" opacity="0.85"/>
  <ellipse cx="26" cy="5" rx="8" ry="4" fill="#d3e3e9" opacity="0.85"/>
  <path d="M7 21 l-6 4" stroke="#5a3a26" stroke-width="2" fill="none"/>
</g>

<!-- ================= newsstand + flacon shelf ================= -->
<ellipse cx="656" cy="944" rx="130" ry="20" fill="url(#france-shadow)" opacity="0.5"/>
<rect x="556" y="758" width="204" height="180" rx="6" fill="#3f5a4c"/>
<rect x="556" y="758" width="204" height="14" rx="5" fill="#66856f"/>
<rect x="574" y="778" width="168" height="78" rx="4" fill="#2b3f35"/>
<path d="M544 758 L772 758 L758 726 L558 726 Z" fill="url(#france-sage)"/>
<path d="M544 758 L772 758 L772 770 L544 770 Z" fill="#2f4539"/>
<path d="M558 726 L758 726 L754 716 L562 716 Z" fill="#83a390"/>
<path d="M560 672 h10 v58 h-10 Z M746 672 h10 v58 h-10 Z" fill="#3f5a4c"/>
<rect x="570" y="848" width="176" height="9" rx="3" fill="#66856f"/>
<rect x="570" y="848" width="176" height="3" rx="1" fill="#9ab8a6"/>
<rect x="574" y="806" width="26" height="46" rx="9" fill="url(#france-copper)"/>
<rect x="581" y="794" width="12" height="14" rx="3" fill="#8a5738"/>
<rect x="578" y="787" width="18" height="9" rx="4" fill="url(#france-wood)"/>
<ellipse cx="622" cy="850" rx="30" ry="7" fill="#1f2b24" opacity="0.4"/>
<g data-obj="perfume-bottle" transform="translate(598,790)">
  <rect x="0" y="18" width="44" height="44" rx="10" fill="url(#france-purple)"/>
  <rect x="0" y="18" width="15" height="44" rx="7" fill="#ddc9f4" opacity="0.85"/>
  <rect x="22" y="32" width="13" height="22" rx="6" fill="#6a3aa8" opacity="0.45"/>
  <path d="M9 18 q13 -11 26 0 Z" fill="#a686cf"/>
  <rect x="15" y="7" width="14" height="12" rx="4" fill="#ece2fb"/>
  <rect x="12" y="0" width="20" height="9" rx="4" fill="url(#france-gold)"/>
  <circle cx="42" cy="2" r="11" fill="url(#france-sph-purple)"/>
  <path d="M31 6 L36 4" stroke="#d9a441" stroke-width="3" fill="none"/>
  <path d="M4 26 q3 -5 8 -6" stroke="#f6efff" stroke-width="3" fill="none" opacity="0.9"/>
</g>
<rect x="656" y="800" width="28" height="52" rx="10" fill="url(#france-purple)"/>
<rect x="656" y="800" width="10" height="52" rx="5" fill="#d6c2ee"/>
<rect x="663" y="788" width="14" height="14" rx="3" fill="#8a5738"/>
<rect x="688" y="808" width="26" height="44" rx="9" fill="url(#france-green)"/>
<rect x="688" y="808" width="9" height="44" rx="4" fill="#a3c793"/>
<rect x="695" y="798" width="12" height="12" rx="3" fill="#e3dcd2"/>
<rect x="556" y="856" width="204" height="14" rx="4" fill="#66856f"/>
<path d="M574 878 h66 v14 h-66 Z" fill="url(#france-red)"/>
<path d="M572 898 h70 v14 h-70 Z M650 890 h62 v22 h-62 Z" fill="url(#france-blue)"/>
<path d="M658 704 q22 -6 44 0 l-3 30 q-19 5 -38 0 Z" fill="url(#france-gold)"/>
<path d="M658 704 q22 -6 44 0 l-1 8 q-21 -6 -42 0 Z" fill="#ffe1a3"/>
<ellipse cx="592" cy="756" rx="26" ry="10" fill="#2f4539"/>
<ellipse cx="766" cy="828" rx="34" ry="8" fill="url(#france-shadow)" opacity="0.4"/>
<g data-obj="film-camera" transform="translate(738,790)">
  <rect x="0" y="8" width="58" height="32" rx="5" fill="url(#france-slate)"/>
  <rect x="0" y="8" width="58" height="9" rx="4" fill="#6b6779"/>
  <circle cx="25" cy="25" r="12" fill="#5a5260"/>
  <circle cx="25" cy="25" r="8" fill="url(#france-blue)"/>
  <circle cx="22" cy="22" r="3" fill="#eaf4f7"/>
  <rect x="43" y="15" width="11" height="9" rx="2" fill="#8e2f45"/>
  <rect x="15" y="1" width="12" height="8" rx="2" fill="#5a5260"/>
</g>

<!-- ================= pigeons + chalkboard ================= -->
<ellipse cx="240" cy="976" rx="34" ry="7" fill="url(#france-shadow)" opacity="0.5"/>
<g data-obj="grey-pigeon" transform="translate(210,934)">
  <ellipse cx="24" cy="20" rx="24" ry="15" fill="url(#france-blue)"/>
  <circle cx="42" cy="6" r="10" fill="#b3c3da"/>
  <path d="M52 6 L62 9 L52 12 Z" fill="#d9a441"/>
  <path d="M20 34 v8 M30 34 v8" stroke="#c07a55" stroke-width="3" fill="none"/>
  <path d="M8 16 q15 -6 30 2 q-13 9 -30 -2 Z" fill="#5d7395" opacity="0.85"/>
  <path d="M6 14 q10 -6 20 -5" stroke="#cfdcec" stroke-width="3" fill="none" opacity="0.7"/>
  <circle cx="46" cy="4" r="2" fill="#3f3b46"/>
</g>
<ellipse cx="300" cy="972" rx="24" ry="6" fill="url(#france-shadow)" opacity="0.4"/>
<path d="M276 962 a18 11 0 1 0 36 0 a18 11 0 1 0 -36 0 Z" fill="url(#france-copper)"/>
<circle cx="304" cy="952" r="8" fill="#dfae82"/>
<path d="M312 952 L321 954 L312 957 Z" fill="#5a3a26"/>
<path d="M280 958 q12 -5 24 2 q-10 7 -24 -2 Z" fill="#8a5738"/>
<ellipse cx="450" cy="946" rx="50" ry="12" fill="url(#france-shadow)" opacity="0.5"/>
<path d="M424 868 L436 940 M478 868 L470 940" stroke="url(#france-wood)" stroke-width="6" fill="none"/>
<g data-obj="chalk-menu" transform="translate(416,798)">
  <rect x="0" y="0" width="68" height="74" rx="5" fill="url(#france-wood)"/>
  <rect x="0" y="0" width="68" height="8" rx="4" fill="#dfae82"/>
  <rect x="7" y="8" width="54" height="60" rx="3" fill="#2f3436"/>
  <rect x="7" y="8" width="54" height="10" rx="3" fill="#454c4e" opacity="0.8"/>
  <path d="M15 22 h38 M15 34 h30 M15 46 h36 M15 58 h25" stroke="#e6dbc9" stroke-width="3" fill="none" opacity="0.65"/>
</g>

<!-- ================= terrace clutter at ground level ================= -->
<ellipse cx="186" cy="868" rx="34" ry="8" fill="url(#france-shadow)" opacity="0.45"/>
<g data-obj="watering-can" transform="translate(156,816)">
  <path d="M8 16 h32 q5 0 5 6 v22 q0 7 -7 7 H14 q-6 0 -6 -7 Z" fill="url(#france-sage)"/>
  <path d="M8 16 h11 v35 H14 q-6 0 -6 -7 Z" fill="#b6cbc0"/>
  <path d="M14 16 q13 -15 26 -2" stroke="#52695f" stroke-width="4" fill="none"/>
  <path d="M44 21 L60 9 l-4 -5 L40 15 Z" fill="url(#france-sage)"/>
  <circle cx="56" cy="4" r="5" fill="#b6cbc0"/>
  <path d="M44 28 q11 4 6 15" stroke="#52695f" stroke-width="4" fill="none"/>
  <path d="M12 22 q5 -3 10 -3" stroke="#dcebe3" stroke-width="2.5" fill="none" opacity="0.8"/>
</g>
<ellipse cx="222" cy="808" rx="34" ry="8" fill="url(#france-shadow)" opacity="0.35"/>
<g data-obj="red-scarf" transform="translate(194,758)">
  <path d="M0 6 q29 -10 58 0 l-4 13 q-25 -8 -50 0 Z" fill="url(#france-red)"/>
  <path d="M4 19 q25 -8 50 0 q-6 13 -23 15 q-17 2 -27 -15 Z" fill="#b44a63"/>
  <path d="M27 34 q6 8 2 14 M35 34 q4 8 8 12" stroke="#8e2f45" stroke-width="4" fill="none"/>
  <path d="M4 8 q26 -7 50 0" stroke="#d8879c" stroke-width="2.5" fill="none" opacity="0.7"/>
</g>
<ellipse cx="346" cy="934" rx="30" ry="8" fill="url(#france-shadow)" opacity="0.5"/>
<g data-obj="handbag" transform="translate(322,882)">
  <path d="M4 17 h44 l-4 35 H8 Z" fill="url(#france-red)"/>
  <path d="M4 17 h14 l-4 35 H8 Z" fill="#b44a63"/>
  <path d="M15 17 q0 -17 12 -17 q12 0 12 17" stroke="#5f1e2e" stroke-width="4" fill="none"/>
  <rect x="20" y="25" width="13" height="9" rx="2" fill="url(#france-gold)"/>
  <path d="M2 21 h48" stroke="#5f1e2e" stroke-width="3" fill="none"/>
</g>
<ellipse cx="62" cy="984" rx="30" ry="7" fill="url(#france-shadow)" opacity="0.45"/>
<g data-obj="snail" transform="translate(40,952)">
  <path d="M2 28 q7 -6 17 -4 h25 q4 4 0 6 H15 q-11 0 -13 -2 Z" fill="url(#france-cream)"/>
  <circle cx="25" cy="16" r="15" fill="url(#france-sph-gold)"/>
  <path d="M25 5 a11 11 0 1 1 -8 18 a7 7 0 1 0 11 -13" fill="none" stroke="#8a5738" stroke-width="3"/>
  <path d="M4 24 l-2 -11 M11 22 l2 -11" stroke="#e6d3ba" stroke-width="3" fill="none"/>
  <circle cx="2" cy="12" r="2.5" fill="#5a3a26"/>
  <circle cx="13" cy="10" r="2.5" fill="#5a3a26"/>
</g>

<!-- ================= foreground marble table ================= -->
<path d="M-20 1012 Q400 930 820 1012 L820 1200 L-20 1200 Z" fill="url(#france-marble)"/>
<path d="M-20 1012 Q400 930 820 1012 L820 1030 Q400 948 -20 1030 Z" fill="#fffdf7" opacity="0.75"/>
<path d="M-20 1046 Q400 964 820 1046" fill="none" stroke="#ddd2c2" stroke-width="4" opacity="0.6"/>

<!-- ================= flower vase, brushes + palettes (fg left) ================= -->
<ellipse cx="98" cy="1172" rx="102" ry="26" fill="url(#france-shadow)" opacity="0.45"/>
<ellipse cx="28" cy="1112" rx="42" ry="12" fill="url(#france-shadow)" opacity="0.4"/>
<g data-obj="brush-jar" transform="translate(4,1040)">
  <rect x="2" y="6" width="42" height="62" rx="8" fill="url(#france-glassware)" opacity="0.92"/>
  <rect x="2" y="6" width="14" height="62" rx="7" fill="#f6fbfd" opacity="0.8"/>
  <rect x="2" y="38" width="42" height="30" rx="7" fill="#a8c5d6" opacity="0.6"/>
  <rect x="0" y="2" width="46" height="8" rx="4" fill="#eff6f9"/>
  <path d="M7 16 q-2 20 -1 34" stroke="#ffffff" stroke-width="3" fill="none" opacity="0.7"/>
</g>
<path d="M16 1046 L10 1000 M27 1046 L27 990 M38 1046 L46 996" stroke="url(#france-wood2)" stroke-width="7" stroke-linecap="round" fill="none"/>
<path d="M8 1002 L12 986 L16 1002 Z" fill="#7b4fb5"/>
<path d="M23 992 L27 976 L31 992 Z" fill="#e88aa2"/>
<path d="M42 998 L48 982 L50 1000 Z" fill="#4a6b8a"/>

<!-- long-stemmed lavender: the lightstick stands among the buds -->
<path d="M96 1064 q-10 -48 -18 -76 M108 1064 q4 -52 14 -80 M120 1066 q14 -40 32 -60 M86 1066 q-16 -34 -36 -50 M76 1064 q-2 -40 6 -68" stroke="#5f8a5e" stroke-width="5" fill="none" stroke-linecap="round"/>
<path d="M74 1006 q-16 -8 -24 -2 q11 11 24 6 Z M126 1002 q15 -10 24 -4 q-11 12 -24 8 Z M92 1024 q-17 -6 -25 2 q14 8 25 -1 Z" fill="url(#france-green)"/>
<path d="M72 986 q10 -26 8 -34 q10 12 6 34 Z" fill="url(#france-purple)"/>
<path d="M120 978 q10 -24 7 -32 q10 12 5 32 Z" fill="#7b4fb5"/>
<path d="M50 1000 q-8 -20 -12 -26 q13 5 18 26 Z" fill="#a882e0"/>
<circle cx="152" cy="1000" r="12" fill="url(#france-sph-rose)"/>
<circle cx="140" cy="1030" r="11" fill="url(#france-sph-rose)"/>
<circle cx="152" cy="1000" r="5" fill="#f6d38f"/>
<circle cx="140" cy="1030" r="5" fill="#f6d38f"/>

<g data-obj="lightstick" transform="translate(96,1000)">
  <circle cx="21" cy="15" r="20" fill="url(#france-glow-purple)" opacity="0.8"/>
  <rect x="9" y="30" width="24" height="34" rx="11" fill="url(#france-porcelain)"/>
  <rect x="9" y="30" width="9" height="34" rx="4" fill="#fffdfa"/>
  <rect x="6" y="25" width="30" height="10" rx="5" fill="#c9b7e2"/>
  <rect x="0" y="0" width="42" height="30" rx="15" fill="url(#france-purple)"/>
  <rect x="0" y="0" width="42" height="30" rx="15" fill="none" stroke="#5b3590" stroke-width="3"/>
  <rect x="8" y="6" width="12" height="15" rx="6" fill="#e3cffc" opacity="0.85"/>
  <path d="M11 62 h17 v6 h-17 Z" fill="#b9a8cf"/>
</g>

<path d="M104 1048 q17 -10 27 -4 q-13 12 -27 4 Z" fill="#6d9166"/>
<path d="M66 1022 q-14 -4 -20 4 q12 7 21 0 Z" fill="#5f8a5e"/>
<path d="M72 1062 q28 -8 58 0 l-6 96 q-24 8 -46 0 Z" fill="url(#france-glassware)" opacity="0.75"/>
<path d="M72 1062 q28 -8 58 0 l-1 15 q-28 -8 -56 0 Z" fill="#eff7fa" opacity="0.9"/>
<path d="M80 1082 q22 -6 42 0 l-4 72 q-17 6 -34 0 Z" fill="#a8c5d6" opacity="0.4"/>
<path d="M85 1074 l-4 82" stroke="#f6fbfd" stroke-width="5" fill="none" opacity="0.6"/>
<ellipse cx="101" cy="1156" rx="23" ry="7" fill="#b6ccd6" opacity="0.55"/>

<ellipse cx="118" cy="1186" rx="46" ry="12" fill="url(#france-shadow)" opacity="0.4"/>
<g data-obj="artist-palette" transform="translate(86,1126)">
  <path d="M2 34 q-2 -20 18 -30 q21 -11 40 -2 q19 8 17 26 q-2 18 -21 27 q-22 9 -40 0 q-13 -7 -14 -21 Z" fill="url(#france-wood2)"/>
  <path d="M6 26 q3 -16 21 -23 q18 -7 34 -1 q-19 -2 -34 6 q-16 7 -21 18 Z" fill="#f0cba1"/>
  <ellipse cx="16" cy="42" rx="9" ry="7" fill="#8a5738"/>
  <ellipse cx="16" cy="40" rx="9" ry="7" fill="#f4ead9"/>
  <circle cx="22" cy="16" r="6" fill="url(#france-sph-rose)"/>
  <circle cx="38" cy="10" r="6" fill="url(#france-sph-gold)"/>
  <circle cx="54" cy="16" r="6" fill="url(#france-blue)"/>
  <circle cx="58" cy="34" r="6" fill="url(#france-sph-green)"/>
  <circle cx="44" cy="48" r="6" fill="url(#france-sph-purple)"/>
</g>
<path d="M150 1188 q-2 -16 15 -22 q17 -7 31 -1 q14 7 12 19 q-2 14 -17 20 L152 1200 Z" fill="url(#france-wood)"/>
<circle cx="166" cy="1180" r="6" fill="#4a6b8a"/>
<circle cx="184" cy="1176" r="6" fill="#f3a6b8"/>
<path d="M52 1176 q22 -12 44 -6" stroke="url(#france-wood2)" stroke-width="6" stroke-linecap="round" fill="none"/>

<!-- ================= coffee cup + saucer ================= -->
<ellipse cx="262" cy="1056" rx="98" ry="26" fill="url(#france-shadow)" opacity="0.42"/>
<ellipse cx="262" cy="1046" rx="94" ry="26" fill="#e6dbca"/>
<ellipse cx="262" cy="1040" rx="94" ry="26" fill="url(#france-porcelain)"/>
<ellipse cx="262" cy="1038" rx="66" ry="17" fill="#e6ddce"/>
<path d="M206 992 q6 42 18 48 q38 12 76 0 q12 -6 18 -48 Z" fill="url(#france-porcelain)"/>
<path d="M206 992 q6 42 18 48 q10 3 20 4 q-14 -14 -18 -52 Z" fill="#ffffff" opacity="0.5"/>
<ellipse cx="262" cy="992" rx="58" ry="18" fill="#f6efe3"/>
<ellipse cx="262" cy="992" rx="50" ry="14" fill="#8a5738"/>
<ellipse cx="262" cy="991" rx="44" ry="12" fill="#c7a17a"/>
<path d="M244 986 q18 -10 36 0 q-18 12 -36 0 Z" fill="#f6e8d6"/>
<path d="M256 996 q10 8 22 2" stroke="#f6e8d6" stroke-width="3" fill="none"/>
<path d="M318 998 q30 -4 30 20 q0 22 -28 22" fill="none" stroke="#fdf8f0" stroke-width="11"/>
<ellipse cx="392" cy="1078" rx="36" ry="11" fill="url(#france-shadow)" opacity="0.35"/>
<ellipse cx="392" cy="1072" rx="34" ry="10" fill="url(#france-porcelain)"/>
<path d="M374 1042 q4 24 10 28 q10 4 20 0 q6 -4 10 -28 Z" fill="url(#france-porcelain)"/>
<ellipse cx="384" cy="1042" rx="10" ry="6" fill="#8a5738"/>
<path d="M410 1046 q16 -2 16 11 q0 12 -15 12" fill="none" stroke="#fdf8f0" stroke-width="7"/>
<ellipse cx="374" cy="1042" rx="20" ry="7" fill="#f6efe3"/>

<!-- ================= books with the purple heart ================= -->
<ellipse cx="252" cy="1194" rx="120" ry="16" fill="url(#france-shadow)" opacity="0.35"/>
<rect x="148" y="1088" width="204" height="100" rx="8" fill="url(#france-purple)"/>
<rect x="148" y="1088" width="204" height="12" rx="6" fill="#a17ecf"/>
<rect x="148" y="1174" width="204" height="14" rx="6" fill="#412c52"/>
<rect x="344" y="1094" width="12" height="88" rx="4" fill="url(#france-porcelain)"/>
<rect x="160" y="1100" width="180" height="76" rx="5" fill="none" stroke="#d9a441" stroke-width="3" opacity="0.75"/>
<path d="M188 1170 C172 1158 166 1150 166 1141 C166 1133 171 1129 176 1129 C181 1129 185 1133 188 1138 C191 1133 195 1129 200 1129 C205 1129 210 1133 210 1141 C210 1150 204 1158 188 1170 Z" fill="none" stroke="#d9a441" stroke-width="3" opacity="0.8"/>
<rect x="222" y="1082" width="160" height="82" rx="7" fill="#6b4a80"/>
<rect x="222" y="1082" width="160" height="10" rx="5" fill="#9270ab"/>
<rect x="222" y="1154" width="160" height="10" rx="5" fill="#4c3360"/>

<g data-obj="purple-heart" transform="translate(230,1104)">
  <path d="M23 44 C6 31 0 22 0 13 C0 5 5 0 11 0 C16 0 21 4 23 9 C26 4 30 0 36 0 C42 0 47 5 47 13 C47 22 41 31 23 44 Z" fill="#3d2b52"/>
  <path d="M21 41 C4 28 -2 19 -2 10 C-2 2 3 -3 9 -3 C14 -3 19 1 21 6 C24 1 28 -3 34 -3 C40 -3 45 2 45 10 C45 19 39 28 21 41 Z" fill="url(#france-sph-purple)"/>
  <path d="M7 8 q6 -7 14 -5" stroke="#e0cdf7" stroke-width="5" fill="none" stroke-linecap="round"/>
</g>

<path d="M355 1136 C341 1125 335 1118 335 1110 C335 1103 340 1099 345 1099 C349 1099 353 1103 355 1108 C358 1103 362 1099 366 1099 C371 1099 376 1103 376 1110 C376 1118 370 1125 355 1136 Z" fill="#8a6fa2"/>
<circle cx="355" cy="1113" r="4" fill="#e0d2ef"/>
<path d="M138 1152 q46 -12 92 -2 q6 24 -8 40 q-46 8 -90 -4 Z" fill="url(#france-cream)"/>

<!-- ================= tiered pastry stand ================= -->
<ellipse cx="466" cy="1138" rx="76" ry="20" fill="url(#france-shadow)" opacity="0.45"/>
<path d="M400 1128 a66 18 0 1 0 132 0 a66 18 0 1 0 -132 0 Z M378 1032 a88 24 0 1 0 176 0 a88 24 0 1 0 -176 0 Z M388 950 a78 20 0 1 0 156 0 a78 20 0 1 0 -156 0 Z" fill="#ddd3c4"/>
<rect x="459" y="1030" width="14" height="94" fill="url(#france-gold)"/>
<rect x="461" y="948" width="10" height="80" fill="url(#france-gold)"/>
<ellipse cx="466" cy="1122" rx="66" ry="18" fill="url(#france-porcelain)"/>
<ellipse cx="466" cy="1026" rx="88" ry="24" fill="url(#france-porcelain)"/>
<ellipse cx="466" cy="944" rx="78" ry="20" fill="url(#france-porcelain)"/>
<path d="M396 1024 a70 18 0 1 0 140 0 a70 18 0 1 0 -140 0 Z M404 942 a62 15 0 1 0 124 0 a62 15 0 1 0 -124 0 Z" fill="#f4ecdb"/>
<ellipse cx="466" cy="1030" rx="76" ry="14" fill="url(#france-shadow)" opacity="0.25"/>

<!-- top tier: the macaron among its cousins -->
<path d="M394 902 a26 11 0 1 0 52 0 a26 11 0 1 0 -52 0 Z M394 916 a26 10 0 1 0 52 0 a26 10 0 1 0 -52 0 Z" fill="#a5cbb4"/>
<rect x="396" y="905" width="48" height="11" rx="5" fill="#e9f4ee"/>
<path d="M404 928 a25 10 0 1 0 50 0 a25 10 0 1 0 -50 0 Z M404 941 a25 9 0 1 0 50 0 a25 9 0 1 0 -50 0 Z" fill="#f2adc0"/>
<rect x="406" y="931" width="46" height="10" rx="4" fill="#fdeef2"/>

<ellipse cx="466" cy="942" rx="38" ry="9" fill="url(#france-shadow)" opacity="0.3"/>
<g data-obj="macaron" transform="translate(432,894)">
  <ellipse cx="34" cy="12" rx="34" ry="14" fill="url(#france-sph-purple)"/>
  <path d="M0 12 q34 17 68 0 q0 9 -10 13 q-24 7 -48 0 q-10 -4 -10 -13 Z" fill="#9c81be"/>
  <rect x="2" y="18" width="64" height="12" rx="6" fill="#f2eaf9"/>
  <path d="M2 24 q32 9 64 0" stroke="#ddcdec" stroke-width="3" fill="none"/>
  <ellipse cx="34" cy="33" rx="34" ry="13" fill="url(#france-sph-purple)"/>
  <path d="M0 33 q34 15 68 0 q0 8 -10 11 q-24 6 -48 0 q-10 -3 -10 -11 Z" fill="#8f73b4"/>
  <path d="M14 4 q20 -8 38 -2" stroke="#e6d9f7" stroke-width="5" fill="none" stroke-linecap="round"/>
</g>

<!-- middle + bottom tier -->
<ellipse cx="400" cy="1012" rx="26" ry="14" fill="url(#france-sph-cream)"/>
<ellipse cx="512" cy="1012" rx="32" ry="16" fill="#eed6b0"/>
<path d="M488 1006 q24 -13 48 0" stroke="#fdf3e0" stroke-width="4" fill="none"/>
<path d="M418 1012 a29 12 0 1 0 58 0 a29 12 0 1 0 -58 0 Z M418 1028 a29 11 0 1 0 58 0 a29 11 0 1 0 -58 0 Z" fill="#f0cf87"/>
<rect x="420" y="1015" width="54" height="13" rx="5" fill="#fdf1d6"/>
<path d="M416 1096 a26 11 0 1 0 52 0 a26 11 0 1 0 -52 0 Z M416 1110 a26 10 0 1 0 52 0 a26 10 0 1 0 -52 0 Z" fill="#a5cbb4"/>
<rect x="418" y="1099" width="48" height="11" rx="5" fill="#e9f4ee"/>

<!-- ================= glass pastry case (croissant among its cousins) ================= -->
<ellipse cx="624" cy="1142" rx="100" ry="24" fill="url(#france-shadow)" opacity="0.42"/>
<path d="M544 986 L704 986 L710 1118 L538 1118 Z" fill="url(#france-cream)"/>
<path d="M544 986 L704 986 L706 1002 L542 1002 Z" fill="url(#france-wood2)"/>
<rect x="536" y="1114" width="176" height="22" rx="5" fill="url(#france-wood)"/>
<rect x="536" y="1114" width="176" height="7" rx="3" fill="#d8a877"/>
<rect x="550" y="1002" width="148" height="112" fill="#fbf3e6"/>
<rect x="550" y="1002" width="148" height="12" fill="url(#france-drop)"/>

<circle cx="578" cy="1030" r="17" fill="url(#france-pastry)"/>
<circle cx="578" cy="1015" r="8" fill="#f9dba7"/>
<rect x="606" y="1014" width="46" height="30" rx="5" fill="url(#france-pastry)"/>
<rect x="606" y="1014" width="46" height="8" rx="4" fill="#f3cf95"/>
<path d="M616 1014 v30 M642 1014 v30" stroke="#5a3a26" stroke-width="5" fill="none"/>
<rect x="548" y="1046" width="152" height="9" rx="3" fill="#e6d7bf"/>
<rect x="548" y="1046" width="152" height="3" rx="1" fill="#f9efdd"/>
<ellipse cx="606" cy="1092" rx="34" ry="8" fill="url(#france-shadow)" opacity="0.3"/>
<path d="M566 1070 a15 14 0 1 0 30 0 a15 14 0 1 0 -30 0 Z M554 1080 a11 10 0 1 0 22 0 a11 10 0 1 0 -22 0 Z M586 1080 a11 10 0 1 0 22 0 a11 10 0 1 0 -22 0 Z" fill="url(#france-pastry)"/>
<path d="M558 1086 q22 10 46 0 q-6 8 -16 10 q-16 4 -30 -2 Z" fill="#b8763c"/>
<path d="M562 1074 q14 -6 24 -2 M554 1084 q8 -4 14 -1" stroke="#f3cf95" stroke-width="5" fill="none" stroke-linecap="round"/>

<ellipse cx="612" cy="1044" rx="38" ry="8" fill="url(#france-shadow)" opacity="0.3"/>
<g data-obj="croissant" transform="translate(578,1006)">
  <path d="M22 11 a12 11 0 1 0 24 0 a12 11 0 1 0 -24 0 Z M11 19 a10 9 0 1 0 20 0 a10 9 0 1 0 -20 0 Z M37 19 a10 9 0 1 0 20 0 a10 9 0 1 0 -20 0 Z M3 27 a7 6 0 1 0 14 0 a7 6 0 1 0 -14 0 Z M51 27 a7 6 0 1 0 14 0 a7 6 0 1 0 -14 0 Z" fill="url(#france-pastry)"/>
  <path d="M5 26 L0 34 L13 33 Z M63 26 L68 34 L55 33 Z" fill="#cf9152"/>
  <path d="M2 29 q15 8 32 8 q17 0 32 -8 q-3 6 -9 8 q-21 7 -46 0 q-6 -2 -9 -8 Z" fill="#b8763c"/>
  <path d="M25 5 q6 -7 14 -6 M14 15 q5 -6 12 -5 M40 15 q5 -6 12 -5 M5 24 q4 -5 9 -4 M54 24 q4 -5 9 -4" stroke="#fbe5bb" stroke-width="4" fill="none" stroke-linecap="round"/>
  <path d="M30 28 q2 -9 1 -17 M40 28 q-2 -9 -1 -17" stroke="#a1682e" stroke-width="3" fill="none"/>
</g>

<rect x="548" y="1092" width="152" height="12" rx="4" fill="#e6d7bf"/>
<rect x="548" y="1092" width="152" height="4" rx="2" fill="#f9efdd"/>
<path d="M550 1002 L698 1002 L698 1114 L550 1114 Z" fill="#cfe0e6" opacity="0.14"/>
<path d="M572 1002 L610 1114 L590 1114 L552 1006 Z" fill="#ffffff" opacity="0.16"/>
<path d="M544 986 L704 986 L706 998 L542 998 Z" fill="url(#france-wood)"/>

<!-- ================= shopping bags + baguettes ================= -->
<ellipse cx="748" cy="1138" rx="84" ry="22" fill="url(#france-shadow)" opacity="0.42"/>
<rect x="692" y="944" width="112" height="44" fill="#6f5c4b"/>
<g transform="rotate(-24 740 938)">
  <rect x="724" y="874" width="34" height="126" rx="17" fill="url(#france-pastry)"/>
  <rect x="724" y="874" width="13" height="126" rx="6" fill="#f3cf95"/>
  <path d="M731 896 q12 -5 20 2 M730 926 q12 -5 20 2 M731 956 q12 -5 20 2 M730 986 q12 -5 20 2" stroke="#a06a37" stroke-width="5" fill="none" stroke-linecap="round"/>
</g>
<g transform="rotate(-32 770 950)">
  <rect x="762" y="898" width="18" height="98" rx="9" fill="url(#france-pastry)"/>
  <rect x="762" y="898" width="7" height="98" rx="3" fill="#f9dba7"/>
  <path d="M766 920 q6 -3 10 1 M766 946 q6 -3 10 1 M766 972 q6 -3 10 1" stroke="#b57c42" stroke-width="3" fill="none" stroke-linecap="round"/>
</g>
<path d="M688 966 L810 966 L804 1132 L694 1132 Z" fill="url(#france-cream)"/>
<path d="M688 966 L810 966 L809 984 L688 984 Z" fill="#fffaf0"/>
<path d="M760 966 L810 966 L804 1132 L756 1132 Z" fill="#c9b294" opacity="0.55"/>
<path d="M706 962 q18 -34 40 -2" fill="none" stroke="#8a5738" stroke-width="6"/>
<path d="M760 962 q18 -34 38 -2" fill="none" stroke="#8a5738" stroke-width="6"/>
<ellipse cx="754" cy="1090" rx="30" ry="8" fill="url(#france-shadow)" opacity="0.35"/>
<g data-obj="wax-cheese" transform="translate(726,1032)">
  <circle cx="27" cy="27" r="27" fill="url(#france-red)"/>
  <path d="M0 27 a27 27 0 0 1 54 0 Z" fill="#b44a63"/>
  <path d="M8 18 q19 -11 38 0" stroke="#f9e4ea" stroke-width="4" fill="none" opacity="0.85"/>
  <path d="M27 1 v52 M0 27 h54" stroke="#5f1e2e" stroke-width="3" fill="none" opacity="0.55"/>
  <path d="M14 39 q13 6 26 0" stroke="#5f1e2e" stroke-width="3" fill="none" opacity="0.45"/>
</g>
<rect x="640" y="1046" width="82" height="86" rx="5" fill="#cbdde4"/>
<path d="M640 1046 L722 1046 L722 1064 L640 1064 Z" fill="#e5f0f4"/>
<path d="M650 1042 q14 -26 32 -2" fill="none" stroke="#6d8f79" stroke-width="5"/>
<path d="M700 1046 q10 -34 4 -54 M690 1046 q-2 -28 -10 -42" stroke="#5f8a5e" stroke-width="6" fill="none"/>
<path d="M704 998 q-4 -32 8 -44 q10 16 2 46 Z M680 1006 q-14 -28 -6 -42 q16 12 14 44 Z" fill="url(#france-tree)"/>

<!-- ================= keepsakes along the table edge ================= -->
<ellipse cx="410" cy="1190" rx="34" ry="8" fill="url(#france-shadow)" opacity="0.35"/>
<g data-obj="fountain-pen" transform="translate(386,1162)">
  <path d="M0 21 L35 2 q7 -3 9 2 q2 6 -4 9 L8 25 Z" fill="url(#france-slate)"/>
  <path d="M0 21 L35 2 q7 -3 9 2 L6 22 Z" fill="#6b6779" opacity="0.7"/>
  <path d="M0 21 L11 15 L13 22 Z" fill="url(#france-gold)"/>
  <path d="M27 9 l6 10" stroke="#d9a441" stroke-width="3" fill="none"/>
  <circle cx="46" cy="6" r="4" fill="#8e2f45"/>
</g>
<ellipse cx="518" cy="1190" rx="34" ry="8" fill="url(#france-shadow)" opacity="0.35"/>
<g data-obj="brass-key" transform="translate(492,1164)">
  <circle cx="11" cy="12" r="10" fill="none" stroke="url(#france-gold)" stroke-width="5"/>
  <path d="M21 12 h30" stroke="url(#france-gold)" stroke-width="5" fill="none"/>
  <path d="M43 12 v9 M49 12 v7" stroke="#d9a441" stroke-width="4" fill="none"/>
  <path d="M6 6 q4 -4 9 -3" stroke="#ffe1a3" stroke-width="2.5" fill="none"/>
</g>
<ellipse cx="566" cy="1194" rx="30" ry="8" fill="url(#france-shadow)" opacity="0.35"/>
<g data-obj="pocket-watch" transform="translate(546,1146)">
  <circle cx="21" cy="31" r="21" fill="url(#france-gold)"/>
  <circle cx="21" cy="31" r="15" fill="url(#france-sph-cream)"/>
  <path d="M21 31 V21 M21 31 l8 5" stroke="#5a3a26" stroke-width="2.5" fill="none"/>
  <rect x="17" y="4" width="8" height="9" rx="3" fill="#c08a4e"/>
  <circle cx="21" cy="4" r="4" fill="none" stroke="#c08a4e" stroke-width="3"/>
  <path d="M8 22 q4 -6 10 -8" stroke="#ffeec4" stroke-width="3" fill="none" opacity="0.8"/>
</g>
<ellipse cx="676" cy="1192" rx="34" ry="8" fill="url(#france-shadow)" opacity="0.35"/>
<g data-obj="train-ticket" transform="translate(650,1158)">
  <path d="M0 4 h52 v24 H0 Z" fill="url(#france-cream)"/>
  <path d="M0 4 h52 v7 H0 Z" fill="url(#france-red)"/>
  <circle cx="6" cy="18" r="3" fill="#e3d7c6"/>
  <path d="M14 17 h21 M14 23 h15" stroke="#c0b29e" stroke-width="2.5" fill="none"/>
  <path d="M42 13 v15" stroke="#c0b29e" stroke-width="2" fill="none"/>
</g>

<!-- ================= final foreground crumbs + warm light ================= -->
<path d="M347 1058 a5 5 0 1 0 10 0 a5 5 0 1 0 -10 0 Z M535 1104 a5 5 0 1 0 10 0 a5 5 0 1 0 -10 0 Z" fill="#d0904f" opacity="0.7"/>
<path d="M406 1172 q28 -12 56 -2 q-26 14 -56 2 Z" fill="url(#france-cream)"/>
<ellipse cx="620" cy="1194" rx="140" ry="16" fill="#cdc0ae" opacity="0.28"/>
</svg>`
});
