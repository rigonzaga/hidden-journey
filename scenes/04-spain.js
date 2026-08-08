window.SCENES = window.SCENES || [];
window.SCENES.push({
  id: 'spain',
  order: 4,
  country: 'Spain',
  flag: '🇪🇸',
  title: 'Tapas in the Sun',
  caption: 'Sunshine, tapas, and slow afternoons.',
  stamp: '🍊',
  objects: [
    { id: 'lightstick', name: 'Lightstick' },
    { id: 'purple-heart', name: 'Purple Heart' },
    { id: 'sun', name: 'Sun' },
    { id: 'flamenco-shoe', name: 'Flamenco Shoe' },
    { id: 'kite', name: 'Kite' },
    { id: 'dove', name: 'Dove' },
    { id: 'flower-vase', name: 'Flower Vase' },
    { id: 'hand-fan', name: 'Spanish Fan' },
    { id: 'hot-balloon', name: 'Balloon' },
    { id: 'castanets', name: 'Castanets' },
    { id: 'butterfly', name: 'Butterfly' },
    { id: 'lantern', name: 'Lantern' },
    { id: 'bread-basket', name: 'Bread' },
    { id: 'blue-jug', name: 'Blue Jug' },
    { id: 'blue-dome', name: 'Blue Dome' },
    { id: 'wine-bottle', name: 'Wine Bottle' },
    { id: 'guitar', name: 'Guitar' },
    { id: 'red-wine', name: 'Red Wine' },
    { id: 'water-jar', name: 'Water Jar' },
    { id: 'weathervane', name: 'Weathervane' },
    { id: 'chili-string', name: 'Chilies' },
    { id: 'bell', name: 'Bell' },
    { id: 'paella-pan', name: 'Paella Pan' },
    { id: 'honey-jug', name: 'Honey Jug' },
    { id: 'lemon-half', name: 'Lemon' },
    { id: 'clay-pot', name: 'Clay Pot' },
    { id: 'bowl-stack', name: 'Bowl Stack' },
    { id: 'olive-bowl', name: 'Olive Bowl' },
    { id: 'sundial', name: 'Sundial' },
    { id: 'broom', name: 'Broom' },
    { id: 'birdcage', name: 'Birdcage' },
    { id: 'canary', name: 'Canary' },
    { id: 'watering-can', name: 'Water Can' },
    { id: 'straw-hat', name: 'Straw Hat' },
    { id: 'pear', name: 'Pear' },
    { id: 'aubergine', name: 'Aubergine' },
    { id: 'sleeping-cat', name: 'Cat' },
    { id: 'wall-mirror', name: 'Mirror' },
    { id: 'mailbox', name: 'Mailbox' },
    { id: 'copper-ladle', name: 'Ladle' },
    { id: 'candlestick', name: 'Candlestick' },
    { id: 'sunflower', name: 'Sunflower' },
    { id: 'wicker-basket', name: 'Basket' },
    { id: 'orange', name: 'Orange' },
    { id: 'garlic-braid', name: 'Garlic' },
    { id: 'cheese-wedge', name: 'Cheese' },
    { id: 'clay-amphora', name: 'Amphora' },
    { id: 'melon', name: 'Melon' },
    { id: 'horseshoe', name: 'Horseshoe' },
    { id: 'grapes', name: 'Grapes' }
  ],
  svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 1200" width="800" height="1200">
<defs>
  <linearGradient id="spain-sky" x1="0.15" y1="0" x2="0.7" y2="1">
    <stop offset="0" stop-color="#3f96c9"/>
    <stop offset="0.42" stop-color="#8ccbe8"/>
    <stop offset="0.78" stop-color="#cfe6ea"/>
    <stop offset="1" stop-color="#ffe8bd"/>
  </linearGradient>
  <radialGradient id="spain-halo" cx="0.5" cy="0.5" r="0.5">
    <stop offset="0" stop-color="#fff8d8" stop-opacity="0.95"/>
    <stop offset="0.45" stop-color="#ffeeb4" stop-opacity="0.4"/>
    <stop offset="1" stop-color="#ffeeb4" stop-opacity="0"/>
  </radialGradient>
  <radialGradient id="spain-sunball" cx="0.34" cy="0.3" r="0.78">
    <stop offset="0" stop-color="#fffdf0"/>
    <stop offset="0.55" stop-color="#fff2c0"/>
    <stop offset="1" stop-color="#ffd982"/>
  </radialGradient>
  <linearGradient id="spain-cloud" x1="0.2" y1="0" x2="0.6" y2="1">
    <stop offset="0" stop-color="#ffffff"/>
    <stop offset="1" stop-color="#d6e6f2"/>
  </linearGradient>
  <linearGradient id="spain-wall" x1="0.1" y1="0" x2="0.85" y2="1">
    <stop offset="0" stop-color="#fffaee"/>
    <stop offset="0.42" stop-color="#f8ead0"/>
    <stop offset="1" stop-color="#e3cfae"/>
  </linearGradient>
  <linearGradient id="spain-wallcool" x1="0" y1="0" x2="1" y2="0.3">
    <stop offset="0" stop-color="#c8b8a6" stop-opacity="0"/>
    <stop offset="1" stop-color="#9d8fa2" stop-opacity="0.42"/>
  </linearGradient>
  <linearGradient id="spain-facade" x1="0.05" y1="0" x2="0.95" y2="0.6">
    <stop offset="0" stop-color="#fffbf0"/>
    <stop offset="0.55" stop-color="#f7e7c9"/>
    <stop offset="1" stop-color="#dcc4a2"/>
  </linearGradient>
  <linearGradient id="spain-facadefar" x1="0.05" y1="0" x2="0.95" y2="0.6">
    <stop offset="0" stop-color="#fbf3e6"/>
    <stop offset="0.6" stop-color="#eee0cd"/>
    <stop offset="1" stop-color="#dcd0c6"/>
  </linearGradient>
  <linearGradient id="spain-side" x1="0" y1="0" x2="1" y2="0.4">
    <stop offset="0" stop-color="#d9c2a1"/>
    <stop offset="1" stop-color="#b39c8c"/>
  </linearGradient>
  <linearGradient id="spain-roof" x1="0.1" y1="0" x2="0.8" y2="1">
    <stop offset="0" stop-color="#e9895b"/>
    <stop offset="0.5" stop-color="#c9663a"/>
    <stop offset="1" stop-color="#96422a"/>
  </linearGradient>
  <linearGradient id="spain-rooffar" x1="0.1" y1="0" x2="0.8" y2="1">
    <stop offset="0" stop-color="#dc9273"/>
    <stop offset="1" stop-color="#b0745f"/>
  </linearGradient>
  <linearGradient id="spain-floor" x1="0.15" y1="0" x2="0.75" y2="1">
    <stop offset="0" stop-color="#e8ac74"/>
    <stop offset="0.45" stop-color="#d0904f"/>
    <stop offset="1" stop-color="#a3623a"/>
  </linearGradient>
  <linearGradient id="spain-cloth" x1="0.1" y1="0" x2="0.8" y2="1">
    <stop offset="0" stop-color="#fffdf6"/>
    <stop offset="0.5" stop-color="#f7ecd6"/>
    <stop offset="1" stop-color="#dcc7a6"/>
  </linearGradient>
  <linearGradient id="spain-doorshade" x1="0.2" y1="0" x2="0.9" y2="1">
    <stop offset="0" stop-color="#241a2b"/>
    <stop offset="0.6" stop-color="#3d2c39"/>
    <stop offset="1" stop-color="#6b4a45"/>
  </linearGradient>
  <radialGradient id="spain-doorglow" cx="0.5" cy="0.5" r="0.5">
    <stop offset="0" stop-color="#9c7050" stop-opacity="0.85"/>
    <stop offset="0.6" stop-color="#84603f" stop-opacity="0.32"/>
    <stop offset="1" stop-color="#84603f" stop-opacity="0"/>
  </radialGradient>
  <radialGradient id="spain-shadow" cx="0.5" cy="0.5" r="0.5">
    <stop offset="0" stop-color="#5c3118" stop-opacity="0.42"/>
    <stop offset="0.55" stop-color="#5c3118" stop-opacity="0.2"/>
    <stop offset="1" stop-color="#5c3118" stop-opacity="0"/>
  </radialGradient>
  <radialGradient id="spain-wallshadow" cx="0.5" cy="0.5" r="0.5">
    <stop offset="0" stop-color="#8a6a52" stop-opacity="0.35"/>
    <stop offset="1" stop-color="#8a6a52" stop-opacity="0"/>
  </radialGradient>
  <radialGradient id="spain-glow" cx="0.5" cy="0.5" r="0.5">
    <stop offset="0" stop-color="#fff3c0" stop-opacity="0.95"/>
    <stop offset="1" stop-color="#ffd98a" stop-opacity="0"/>
  </radialGradient>
  <linearGradient id="spain-terra" x1="0.12" y1="0.05" x2="0.9" y2="0.95">
    <stop offset="0" stop-color="#f0a678"/>
    <stop offset="0.38" stop-color="#cf7042"/>
    <stop offset="1" stop-color="#8f4324"/>
  </linearGradient>
  <linearGradient id="spain-terra2" x1="0.12" y1="0.05" x2="0.9" y2="0.95">
    <stop offset="0" stop-color="#e39a6c"/>
    <stop offset="1" stop-color="#a1522c"/>
  </linearGradient>
  <linearGradient id="spain-blue" x1="0.15" y1="0.05" x2="0.9" y2="0.95">
    <stop offset="0" stop-color="#a6d6f7"/>
    <stop offset="0.4" stop-color="#4f95d6"/>
    <stop offset="1" stop-color="#1d4d80"/>
  </linearGradient>
  <linearGradient id="spain-bluedeep" x1="0.15" y1="0.05" x2="0.9" y2="0.95">
    <stop offset="0" stop-color="#6a9fc4"/>
    <stop offset="1" stop-color="#2b4f68"/>
  </linearGradient>
  <linearGradient id="spain-yellow" x1="0.15" y1="0.05" x2="0.9" y2="0.95">
    <stop offset="0" stop-color="#ffe9a8"/>
    <stop offset="0.4" stop-color="#f2c14e"/>
    <stop offset="1" stop-color="#b8801a"/>
  </linearGradient>
  <linearGradient id="spain-green" x1="0.15" y1="0.05" x2="0.9" y2="0.95">
    <stop offset="0" stop-color="#c2dd8c"/>
    <stop offset="0.4" stop-color="#7c9a52"/>
    <stop offset="1" stop-color="#3a5c2c"/>
  </linearGradient>
  <linearGradient id="spain-leaf" x1="0.15" y1="0" x2="0.85" y2="1">
    <stop offset="0" stop-color="#8cb862"/>
    <stop offset="0.5" stop-color="#5b8940"/>
    <stop offset="1" stop-color="#2f4d26"/>
  </linearGradient>
  <linearGradient id="spain-red" x1="0.15" y1="0.05" x2="0.9" y2="0.95">
    <stop offset="0" stop-color="#f8a08c"/>
    <stop offset="0.4" stop-color="#d63f42"/>
    <stop offset="1" stop-color="#7c1229"/>
  </linearGradient>
  <linearGradient id="spain-purple" x1="0.18" y1="0.05" x2="0.9" y2="0.95">
    <stop offset="0" stop-color="#b7a9e8"/>
    <stop offset="0.42" stop-color="#7566b4"/>
    <stop offset="1" stop-color="#403570"/>
  </linearGradient>
  <linearGradient id="spain-cream" x1="0.15" y1="0.05" x2="0.9" y2="0.95">
    <stop offset="0" stop-color="#fffdf6"/>
    <stop offset="0.45" stop-color="#f4e7cd"/>
    <stop offset="1" stop-color="#c9b294"/>
  </linearGradient>
  <linearGradient id="spain-wood" x1="0.12" y1="0" x2="0.9" y2="1">
    <stop offset="0" stop-color="#dba874"/>
    <stop offset="0.45" stop-color="#a9743f"/>
    <stop offset="1" stop-color="#61401f"/>
  </linearGradient>
  <linearGradient id="spain-wooddark" x1="0.12" y1="0" x2="0.9" y2="1">
    <stop offset="0" stop-color="#9d6c3c"/>
    <stop offset="1" stop-color="#4b3018"/>
  </linearGradient>
  <linearGradient id="spain-brass" x1="0.15" y1="0.05" x2="0.9" y2="0.95">
    <stop offset="0" stop-color="#ffedb8"/>
    <stop offset="0.4" stop-color="#c9963f"/>
    <stop offset="1" stop-color="#7d5a15"/>
  </linearGradient>
  <linearGradient id="spain-copper" x1="0.15" y1="0.05" x2="0.9" y2="0.95">
    <stop offset="0" stop-color="#f4c193"/>
    <stop offset="0.4" stop-color="#c47a41"/>
    <stop offset="1" stop-color="#7d4319"/>
  </linearGradient>
  <linearGradient id="spain-steel" x1="0.15" y1="0.05" x2="0.9" y2="0.95">
    <stop offset="0" stop-color="#e6ecf0"/>
    <stop offset="0.42" stop-color="#9aa6ae"/>
    <stop offset="1" stop-color="#4e585f"/>
  </linearGradient>
  <linearGradient id="spain-orange" x1="0.2" y1="0.08" x2="0.9" y2="0.95">
    <stop offset="0" stop-color="#ffd08a"/>
    <stop offset="0.38" stop-color="#f7a94b"/>
    <stop offset="1" stop-color="#bf5f0c"/>
  </linearGradient>
  <linearGradient id="spain-lemon" x1="0.2" y1="0.08" x2="0.9" y2="0.95">
    <stop offset="0" stop-color="#fdf3a8"/>
    <stop offset="0.4" stop-color="#f4d95c"/>
    <stop offset="1" stop-color="#b98f16"/>
  </linearGradient>
  <linearGradient id="spain-glass" x1="0.15" y1="0" x2="0.9" y2="1">
    <stop offset="0" stop-color="#ffffff" stop-opacity="0.95"/>
    <stop offset="0.45" stop-color="#dff0f8" stop-opacity="0.85"/>
    <stop offset="1" stop-color="#9ec2d4" stop-opacity="0.9"/>
  </linearGradient>
  <linearGradient id="spain-tile" x1="0.1" y1="0" x2="0.9" y2="1">
    <stop offset="0" stop-color="#f4fbff"/>
    <stop offset="1" stop-color="#c7dcee"/>
  </linearGradient>
  <linearGradient id="spain-tile2" x1="0.1" y1="0" x2="0.9" y2="1">
    <stop offset="0" stop-color="#fdf8ea"/>
    <stop offset="1" stop-color="#dfd0b4"/>
  </linearGradient>
  <linearGradient id="spain-sheen" x1="0" y1="0" x2="0.9" y2="1">
    <stop offset="0" stop-color="#ffffff" stop-opacity="0.6"/>
    <stop offset="1" stop-color="#ffffff" stop-opacity="0"/>
  </linearGradient>
</defs>

<rect x="0" y="0" width="800" height="1200" fill="#f0dfc0"/>
<rect x="0" y="0" width="800" height="352" fill="url(#spain-sky)"/>
<ellipse cx="150" cy="86" rx="252" ry="212" fill="url(#spain-halo)"/>
<ellipse cx="150" cy="86" rx="132" ry="118" fill="url(#spain-halo)" opacity="0.75"/>

<g data-obj="sun">
  <circle cx="150" cy="80" r="34" fill="#f4c65a"/>
  <circle cx="150" cy="79" r="34" fill="url(#spain-sunball)"/>
  <path d="M150 45 A34 34 0 0 1 175 105 A34 34 0 0 0 150 45 Z" fill="#f2b53f" opacity="0.55"/>
  <ellipse cx="137" cy="66" rx="12" ry="9" fill="#fffef6" opacity="0.85" transform="rotate(-38 137 66)"/>
  <circle cx="150" cy="79" r="34" fill="none" stroke="#fff6cf" stroke-width="2.6" opacity="0.9"/>
  <path d="M124 53 A34 34 0 0 1 168 48" fill="none" stroke="#ffffff" stroke-width="3" opacity="0.55" stroke-linecap="round"/>
</g>

<ellipse cx="462" cy="70" rx="56" ry="21" fill="url(#spain-cloud)" opacity="0.92"/>
<ellipse cx="506" cy="61" rx="36" ry="16" fill="url(#spain-cloud)" opacity="0.9"/>
<ellipse cx="480" cy="82" rx="46" ry="10" fill="#c3b7c9" opacity="0.3"/>
<ellipse cx="440" cy="60" rx="22" ry="12" fill="#ffffff" opacity="0.85"/>
<ellipse cx="668" cy="104" rx="48" ry="17" fill="url(#spain-cloud)" opacity="0.85"/>
<ellipse cx="706" cy="94" rx="28" ry="12" fill="url(#spain-cloud)" opacity="0.8"/>
<ellipse cx="678" cy="114" rx="40" ry="8" fill="#b8adc4" opacity="0.26"/>
<path d="M566 168 q7 -6 14 0 q7 -6 14 0" fill="none" stroke="#40606f" stroke-width="2.5" stroke-linecap="round"/>
<path d="M642 186 q6 -5 12 0 q6 -5 12 0" fill="none" stroke="#40606f" stroke-width="2.2" stroke-linecap="round"/>

<g data-obj="kite">
  <path d="M300 118 L322 148 L300 176 L278 148 Z" fill="url(#spain-red)"/>
  <path d="M300 118 L322 148 L300 176 Z" fill="#a8203a" opacity="0.9"/>
  <path d="M300 118 L288 148 L300 176 L278 148 Z" fill="#f2907a" opacity="0.55"/>
  <path d="M278 148 L322 148 M300 118 L300 176" stroke="#ffe08a" stroke-width="2"/>
  <path d="M282 136 L296 122" stroke="#ffffff" stroke-width="2.4" opacity="0.6" stroke-linecap="round"/>
  <path d="M300 176 q-8 8 2 14" fill="none" stroke="#7d5228" stroke-width="2"/>
  <path d="M296 182 L288 186 L296 190 Z" fill="url(#spain-blue)"/>
</g>

<g data-obj="dove">
  <ellipse cx="216" cy="108" rx="22" ry="14" fill="#c9cfe0" opacity="0.55"/>
  <ellipse cx="216" cy="106" rx="22" ry="14" fill="url(#spain-cream)"/>
  <ellipse cx="212" cy="101" rx="14" ry="7" fill="#ffffff" opacity="0.9"/>
  <circle cx="234" cy="96" r="9" fill="#fffdf7"/>
  <circle cx="232" cy="93" r="5" fill="#ffffff"/>
  <path d="M241 94 L250 97 L241 100 Z" fill="url(#spain-yellow)"/>
  <circle cx="236" cy="94" r="2" fill="#4a3b52"/>
  <path d="M212 100 q14 -14 26 -6 q-12 10 -26 6 Z" fill="#eef5fc"/>
  <path d="M212 108 q14 -10 26 -4 q-12 8 -26 4 Z" fill="#b9c6d8" opacity="0.6"/>
  <path d="M196 108 q-12 4 -14 12 q12 -2 18 -6 Z" fill="#e2ecf6"/>
</g>

<g data-obj="hot-balloon">
  <path d="M70 132 q-24 4 -24 26 q0 20 24 34 q24 -14 24 -34 q0 -22 -24 -26 Z" fill="url(#spain-red)"/>
  <path d="M70 132 q-24 4 -24 26 q0 20 24 34 q-8 -30 0 -60 Z" fill="url(#spain-yellow)"/>
  <path d="M82 138 q10 8 10 20 q0 12 -10 24 q6 -22 0 -44 Z" fill="url(#spain-bluedeep)"/>
  <path d="M56 140 q-8 8 -8 18 q0 10 6 18 q-4 -20 2 -36 Z" fill="#ffffff" opacity="0.32"/>
  <path d="M70 132 q-24 4 -24 26 q6 -18 24 -22 q18 4 24 22 q0 -22 -24 -26 Z" fill="#ffffff" opacity="0.25"/>
  <path d="M60 192 L80 192 L78 200 L62 200 Z" fill="url(#spain-wood)"/>
  <path d="M62 186 L64 194 M78 186 L76 194" stroke="#6b4526" stroke-width="1.6"/>
</g>

<ellipse cx="352" cy="230" rx="150" ry="26" fill="#8fa6b8" opacity="0.16"/>
<path d="M470 268 L470 232 L512 232 L512 218 L556 218 L556 240 L620 240 L620 226 L678 226 L678 250 L800 250 L800 300 L470 300 Z" fill="#c9c2c4" opacity="0.3"/>
<path d="M-10 262 L-10 240 L40 240 L40 250 L96 250 L96 236 L150 236 L150 258 L206 258 L206 300 L-10 300 Z" fill="#b9b2b8" opacity="0.22"/>

<g data-obj="butterfly">
  <path d="M340 206 q-20 -18 -22 -4 q-2 14 22 10 Z" fill="url(#spain-yellow)"/>
  <path d="M340 206 q20 -18 22 -4 q2 14 -22 10 Z" fill="url(#spain-yellow)"/>
  <path d="M340 206 q-14 -12 -18 -5 q-2 8 18 7 Z" fill="#fff2c4" opacity="0.7"/>
  <path d="M340 208 q-16 12 -14 20 q4 8 14 -8 Z" fill="url(#spain-red)"/>
  <path d="M340 208 q16 12 14 20 q-4 8 -14 -8 Z" fill="url(#spain-red)"/>
  <rect x="338" y="200" width="4" height="26" rx="2" fill="#4a3b52"/>
  <path d="M338 200 L332 192 M342 200 L348 192" stroke="#4a3b52" stroke-width="1.6"/>
  <circle cx="326" cy="204" r="2.4" fill="#8f4a1c" opacity="0.8"/>
  <circle cx="354" cy="204" r="2.4" fill="#8f4a1c" opacity="0.8"/>
</g>

<rect x="672" y="272" width="146" height="180" fill="url(#spain-facadefar)"/>
<rect x="784" y="272" width="34" height="180" fill="url(#spain-side)" opacity="0.75"/>
<polygon points="666,274 822,274 812,250 676,250" fill="url(#spain-rooffar)"/>
<polygon points="666,274 822,274 820,266 664,266" fill="#f0a680" opacity="0.7"/>
<path d="M700 252 L692 274 M736 251 L730 274 M772 251 L768 274" stroke="#9c6552" stroke-width="1.6" opacity="0.55"/>
<rect x="694" y="306" width="34" height="46" rx="3" fill="url(#spain-bluedeep)"/>
<rect x="694" y="306" width="15" height="46" fill="#6f9fc0" opacity="0.7"/>
<path d="M694 306 L728 306 L728 316 L694 318 Z" fill="#2f4b60" opacity="0.5"/>
<rect x="690" y="352" width="42" height="6" rx="2" fill="#d08a68"/>
<rect x="748" y="300" width="56" height="8" rx="3" fill="#c9663a" opacity="0.8"/>
<path d="M750 308 L800 308 L800 328 L748 326 Z" fill="#f4e5cd" opacity="0.75"/>
<path d="M756 308 L760 327 M776 308 L778 327" stroke="#e0563f" stroke-width="6" opacity="0.5"/>

<rect x="506" y="246" width="182" height="206" fill="url(#spain-facadefar)"/>
<rect x="648" y="246" width="40" height="206" fill="url(#spain-side)" opacity="0.7"/>
<polygon points="500,248 694,248 684,224 510,224" fill="url(#spain-rooffar)"/>
<polygon points="500,248 694,248 692,238 498,238" fill="#efa07c" opacity="0.8"/>
<path d="M540 226 L532 248 M580 225 L574 248 M620 225 L616 248" stroke="#9c6552" stroke-width="1.6" opacity="0.5"/>
<rect x="558" y="244" width="86" height="20" rx="3" fill="url(#spain-facadefar)"/>
<rect x="558" y="244" width="86" height="6" rx="3" fill="#fffaef" opacity="0.8"/>

<g data-obj="blue-dome">
  <ellipse cx="600" cy="218" rx="34" ry="30" fill="url(#spain-bluedeep)"/>
  <path d="M566 218 A34 30 0 0 1 600 188 A22 26 0 0 0 580 234 Z" fill="#b8d4e6" opacity="0.75"/>
  <path d="M600 188 A34 30 0 0 1 634 218 A34 30 0 0 1 616 244 A30 30 0 0 0 600 188 Z" fill="#1f3d52" opacity="0.5"/>
  <path d="M566 218 A34 30 0 0 1 634 218" fill="none" stroke="#d8ecf7" stroke-width="2.6" opacity="0.75"/>
  <path d="M600 188 L600 248 M578 195 L580 243 M622 195 L620 243" stroke="#3d6a88" stroke-width="1.6" fill="none" opacity="0.8"/>
  <ellipse cx="586" cy="203" rx="9" ry="6" fill="#ffffff" opacity="0.5" transform="rotate(-36 586 203)"/>
  <ellipse cx="600" cy="248" rx="34" ry="5" fill="#274558" opacity="0.5"/>
</g>

<rect x="592" y="288" width="36" height="48" rx="4" fill="url(#spain-bluedeep)"/>
<rect x="592" y="288" width="16" height="48" fill="#6f9fc0" opacity="0.65"/>
<rect x="584" y="334" width="52" height="7" rx="2" fill="#f4e6cd"/>
<path d="M588 341 L588 366 M600 341 L600 366 M612 341 L612 366 M624 341 L624 366 M634 341 L634 366" stroke="#4a3b52" stroke-width="2.2" opacity="0.85"/>
<rect x="584" y="364" width="52" height="5" rx="2" fill="#3c3040"/>
<rect x="526" y="282" width="40" height="54" rx="4" fill="url(#spain-bluedeep)"/>
<rect x="546" y="282" width="20" height="54" fill="#6f9fc0" opacity="0.6"/>
<rect x="522" y="336" width="48" height="7" rx="2" fill="#d08a68"/>
<path d="M524 343 L534 356 L560 356 L568 343 Z" fill="#8a6a52" opacity="0.22"/>

<rect x="396" y="146" width="112" height="306" fill="url(#spain-facade)"/>
<rect x="474" y="146" width="34" height="306" fill="url(#spain-side)"/>
<rect x="396" y="146" width="10" height="306" fill="#fffdf4" opacity="0.55"/>
<polygon points="390,148 514,148 452,94" fill="url(#spain-roof)"/>
<polygon points="390,148 452,94 452,148" fill="#ef9a6c"/>
<polygon points="390,148 514,148 512,140 392,140" fill="#f6b48b" opacity="0.8"/>
<path d="M420 122 L414 148 M436 108 L432 148 M468 108 L472 148 M484 122 L490 148" stroke="#a8532f" stroke-width="1.6" opacity="0.5"/>

<rect x="466" y="164" width="5" height="12" fill="#4a3b52"/>
<path d="M456 176 L482 176 L478 200 L460 200 Z" fill="url(#spain-brass)"/>
<path d="M456 176 L468 176 L466 200 L460 200 Z" fill="#ffe9a8" opacity="0.8"/>
<ellipse cx="469" cy="190" rx="6" ry="7" fill="#fff5cb" opacity="0.9"/>
<rect x="458" y="200" width="22" height="5" rx="2" fill="#4a3b52"/>

<g data-obj="weathervane">
  <rect x="449" y="60" width="6" height="38" fill="#6f5b48"/>
  <rect x="449" y="60" width="2.4" height="38" fill="#a08872"/>
  <path d="M455 66 L492 76 L455 88 Z" fill="url(#spain-brass)"/>
  <path d="M455 66 L492 76 L455 76 Z" fill="#ffe9a8" opacity="0.6"/>
  <path d="M455 70 L482 77 L455 84" fill="none" stroke="#8a6412" stroke-width="1.4"/>
  <circle cx="452" cy="55" r="5.5" fill="url(#spain-brass)"/>
  <circle cx="450" cy="53" r="2" fill="#fff6d8" opacity="0.9"/>
  <path d="M440 74 L449 74 M455 96 L440 96" stroke="#8a7460" stroke-width="2.2" stroke-linecap="round"/>
</g>

<path d="M414 214 q38 -42 76 0 L490 268 L414 268 Z" fill="#4a3b52"/>
<path d="M418 216 q36 -38 72 0 L490 268 L418 268 Z" fill="url(#spain-doorshade)"/>
<ellipse cx="452" cy="252" rx="40" ry="30" fill="url(#spain-doorglow)" opacity="0.5"/>
<path d="M414 214 q38 -42 76 0" fill="none" stroke="#fffaef" stroke-width="4" opacity="0.85"/>

<g data-obj="bell">
  <path d="M452 220 q-16 2 -16 18 q0 12 -6 18 l44 0 q-6 -6 -6 -18 q0 -16 -16 -18 Z" fill="url(#spain-brass)"/>
  <path d="M452 220 q-16 2 -16 18 q0 12 -6 18 l12 0 q0 -14 2 -22 q2 -12 8 -14 Z" fill="#ffefbc" opacity="0.85"/>
  <path d="M462 224 q10 6 10 20 q0 10 4 16 l-8 0 q4 -8 2 -18 q-2 -14 -8 -18 Z" fill="#6f4d0f" opacity="0.45"/>
  <rect x="448" y="212" width="8" height="10" rx="3" fill="#9c7418"/>
  <ellipse cx="452" cy="258" rx="24" ry="4.5" fill="#8f6a12"/>
  <ellipse cx="452" cy="256" rx="24" ry="4" fill="url(#spain-brass)"/>
  <circle cx="452" cy="265" r="5" fill="#e8c477"/>
  <path d="M440 228 q2 -8 8 -10" fill="none" stroke="#fffbe8" stroke-width="2.6" opacity="0.8" stroke-linecap="round"/>
</g>

<rect x="410" y="268" width="84" height="9" fill="#c9663a"/>
<rect x="410" y="268" width="84" height="3.5" fill="#eb9367"/>
<path d="M412 277 L424 292 L482 292 L492 277 Z" fill="#8a6a52" opacity="0.2"/>

<g data-obj="sundial">
  <circle cx="438" cy="352" r="22" fill="#c4ac86"/>
  <circle cx="438" cy="350" r="22" fill="url(#spain-cream)"/>
  <circle cx="438" cy="350" r="22" fill="none" stroke="#a08a64" stroke-width="3"/>
  <path d="M438 350 L438 332 M438 350 L454 342 M438 350 L454 358 M438 350 L422 342 M438 350 L422 358" stroke="#7d6952" stroke-width="2"/>
  <path d="M438 332 L438 336 M452 340 L449 342 M456 350 L452 350 M452 360 L449 358 M424 340 L427 342 M420 350 L424 350 M424 360 L427 358" stroke="#5e4d3a" stroke-width="2.4" stroke-linecap="round"/>
  <path d="M438 350 L424 366 L433 368 Z" fill="url(#spain-brass)"/>
  <path d="M438 350 L424 366 L430 367 Z" fill="#6f5210" opacity="0.45"/>
  <circle cx="438" cy="350" r="3.5" fill="#7d6952"/>
  <path d="M422 336 a22 22 0 0 1 16 -8" fill="none" stroke="#fffdf2" stroke-width="2.6" opacity="0.9"/>
</g>
<ellipse cx="452" cy="374" rx="26" ry="6" fill="url(#spain-wallshadow)"/>

<rect x="180" y="216" width="204" height="236" fill="url(#spain-facade)"/>
<rect x="340" y="216" width="44" height="236" fill="url(#spain-side)"/>
<rect x="180" y="216" width="11" height="236" fill="#fffdf4" opacity="0.5"/>
<polygon points="174,218 390,218 380,192 184,192" fill="url(#spain-roof)"/>
<polygon points="174,218 390,218 388,208 172,208" fill="#f3ad84" opacity="0.85"/>
<path d="M216 194 L208 218 M264 193 L258 218 M312 193 L308 218 M356 194 L354 218" stroke="#a8532f" stroke-width="1.7" opacity="0.5"/>
<rect x="204" y="256" width="44" height="58" rx="4" fill="url(#spain-bluedeep)"/>
<rect x="204" y="256" width="21" height="58" fill="#5f92b8" opacity="0.75"/>
<path d="M204 256 L248 256 L248 268 L204 271 Z" fill="#22394a" opacity="0.55"/>
<rect x="200" y="314" width="52" height="7" rx="2" fill="#c9663a"/>
<rect x="200" y="314" width="52" height="3" rx="1.5" fill="#eb9367"/>
<path d="M202 321 L212 336 L246 336 L252 321 Z" fill="#8a6a52" opacity="0.2"/>
<path d="M270 318 L270 282 q22 -28 44 0 L314 318 Z" fill="#efe0c4"/>
<path d="M275 314 L275 284 q17 -21 34 0 L309 314 Z" fill="url(#spain-bluedeep)"/>
<path d="M292 284 L292 314 M275 296 L309 296" stroke="#f6ecd6" stroke-width="3"/>
<path d="M280 288 q9 -8 17 -2 l-5 8 Z" fill="#a9d4f5" opacity="0.8"/>
<rect x="266" y="316" width="52" height="8" rx="2" fill="#efdfc0"/>
<rect x="266" y="316" width="52" height="3" rx="1.5" fill="#fffaef"/>
<rect x="196" y="360" width="140" height="8" rx="3" fill="#8a5a30"/>
<rect x="196" y="360" width="140" height="3" rx="1.5" fill="#c08b52"/>
<path d="M208 362 L232 362 L228 340 L212 340 Z" fill="url(#spain-terra)"/>
<path d="M208 362 L216 362 L214 340 L212 340 Z" fill="#f3ae83" opacity="0.75"/>
<rect x="206" y="336" width="28" height="6" rx="2" fill="#e08a58"/>
<ellipse cx="220" cy="332" rx="17" ry="9" fill="url(#spain-leaf)"/>
<circle cx="211" cy="325" r="6.5" fill="url(#spain-red)"/>
<circle cx="223" cy="322" r="7" fill="url(#spain-red)"/>
<circle cx="233" cy="327" r="5.5" fill="#e0563f"/>
<path d="M296 362 L318 362 L315 342 L299 342 Z" fill="url(#spain-terra2)"/>
<rect x="294" y="338" width="26" height="6" rx="2" fill="#e08a58"/>
<ellipse cx="307" cy="334" rx="16" ry="9" fill="url(#spain-leaf)"/>
<circle cx="300" cy="329" r="5" fill="#f2c14e"/>
<circle cx="313" cy="330" r="5" fill="#e0563f"/>
<ellipse cx="264" cy="358" rx="15" ry="6" fill="url(#spain-wallshadow)"/>

<rect x="-10" y="252" width="212" height="200" fill="url(#spain-facade)"/>
<rect x="156" y="252" width="46" height="200" fill="url(#spain-side)"/>
<rect x="-10" y="252" width="12" height="200" fill="#fffdf6" opacity="0.5"/>
<polygon points="-16,254 206,254 196,228 -6,228" fill="url(#spain-roof)"/>
<polygon points="-16,254 206,254 204,244 -14,244" fill="#f3ad84" opacity="0.9"/>
<path d="M28 230 L20 254 M76 229 L70 254 M124 229 L120 254 M172 230 L170 254" stroke="#a8532f" stroke-width="1.7" opacity="0.45"/>
<rect x="16" y="292" width="46" height="58" rx="3" fill="#2f5638"/>
<rect x="16" y="292" width="22" height="58" fill="#5c8f5f"/>
<path d="M18 300 L36 300 M18 312 L36 312 M18 324 L36 324 M18 336 L36 336" stroke="#3f6b45" stroke-width="2.2"/>
<path d="M42 300 L60 300 M42 312 L60 312 M42 324 L60 324 M42 336 L60 336" stroke="#25422c" stroke-width="2.2"/>
<rect x="12" y="350" width="54" height="7" fill="#c9663a"/>
<rect x="12" y="350" width="54" height="3" fill="#eb9367"/>
<path d="M14 357 L24 372 L60 372 L66 357 Z" fill="#8a6a52" opacity="0.2"/>
<rect x="88" y="300" width="38" height="50" rx="3" fill="url(#spain-bluedeep)"/>
<rect x="88" y="300" width="17" height="50" fill="#5f92b8" opacity="0.7"/>
<path d="M88 300 L126 300 L126 310 L88 313 Z" fill="#22394a" opacity="0.5"/>
<rect x="84" y="350" width="46" height="6" fill="#c9663a"/>
<rect x="20" y="382" width="120" height="8" rx="3" fill="#a9743f"/>
<rect x="20" y="382" width="120" height="3" rx="1.5" fill="#d2a06d"/>
<path d="M104 382 L126 382 L123 362 L107 362 Z" fill="url(#spain-terra)"/>
<rect x="102" y="358" width="26" height="6" rx="2" fill="#e08a58"/>
<ellipse cx="115" cy="354" rx="16" ry="9" fill="url(#spain-leaf)"/>
<circle cx="108" cy="349" r="5.5" fill="url(#spain-red)"/>
<circle cx="121" cy="350" r="5" fill="#f2c14e"/>

<rect x="166" y="266" width="6" height="14" fill="#4a3b52"/>
<path d="M158 280 L186 280 L182 306 L162 306 Z" fill="url(#spain-bluedeep)"/>
<path d="M158 280 L172 280 L170 306 L162 306 Z" fill="#6fa7cd"/>
<ellipse cx="172" cy="298" rx="7" ry="8" fill="#ffe9a8" opacity="0.9"/>
<polygon points="158,280 186,280 180,272 164,272" fill="#2a2030"/>

<path d="M-5 336 Q200 388 400 358 Q600 330 805 360" fill="none" stroke="#6b4526" stroke-width="1.8"/>
<circle cx="60" cy="362" r="7" fill="url(#spain-glow)"/>
<circle cx="60" cy="362" r="4.5" fill="#fff3c0"/>
<circle cx="172" cy="378" r="7" fill="url(#spain-glow)"/>
<circle cx="172" cy="378" r="4.5" fill="#fff3c0"/>
<circle cx="286" cy="382" r="7" fill="url(#spain-glow)"/>
<circle cx="286" cy="382" r="4.5" fill="#fff3c0"/>
<circle cx="400" cy="368" r="7" fill="url(#spain-glow)"/>
<circle cx="400" cy="368" r="4.5" fill="#fff3c0"/>
<circle cx="516" cy="352" r="7" fill="url(#spain-glow)"/>
<circle cx="516" cy="352" r="4.5" fill="#fff3c0"/>
<circle cx="632" cy="344" r="7" fill="url(#spain-glow)"/>
<circle cx="632" cy="344" r="4.5" fill="#fff3c0"/>
<circle cx="748" cy="352" r="7" fill="url(#spain-glow)"/>
<circle cx="748" cy="352" r="4.5" fill="#fff3c0"/>

<rect x="0" y="400" width="800" height="524" fill="url(#spain-wall)"/>
<polygon points="0,400 236,400 118,924 0,924" fill="#fffdf4" opacity="0.4"/>
<rect x="0" y="400" width="800" height="524" fill="url(#spain-wallcool)"/>
<rect x="0" y="392" width="800" height="18" fill="#fffbf0"/>
<rect x="0" y="392" width="800" height="6" fill="#ffffff" opacity="0.7"/>
<rect x="0" y="410" width="800" height="26" fill="#9d8776" opacity="0.22"/>
<rect x="0" y="410" width="800" height="12" fill="#8a6f5e" opacity="0.16"/>
<ellipse cx="300" cy="640" rx="220" ry="120" fill="#fffaee" opacity="0.3"/>
<ellipse cx="700" cy="700" rx="180" ry="140" fill="#a0879a" opacity="0.1"/>
<rect x="0" y="884" width="800" height="42" fill="#e8a86c" opacity="0.2"/>
<rect x="0" y="906" width="800" height="18" fill="#c8ab84" opacity="0.5"/>

<rect x="14" y="418" width="152" height="112" rx="4" fill="#d8c19c"/>
<rect x="14" y="418" width="152" height="6" rx="3" fill="#f4e5c8"/>
<rect x="18" y="424" width="144" height="102" fill="#b8a284"/>
<rect x="20" y="426" width="44" height="46" rx="2" fill="url(#spain-tile)"/>
<rect x="68" y="426" width="44" height="46" rx="2" fill="url(#spain-tile2)"/>
<rect x="116" y="426" width="44" height="46" rx="2" fill="url(#spain-tile)"/>
<rect x="20" y="476" width="44" height="46" rx="2" fill="url(#spain-tile2)"/>
<rect x="68" y="476" width="44" height="46" rx="2" fill="url(#spain-tile)"/>
<rect x="116" y="476" width="44" height="46" rx="2" fill="url(#spain-tile2)"/>
<path d="M42 449 Q33 438 42 428 Q51 438 42 449 Z M42 449 Q53 440 63 449 Q53 458 42 449 Z M42 449 Q33 460 42 470 Q51 460 42 449 Z M42 449 Q31 440 21 449 Q31 458 42 449 Z" fill="url(#spain-purple)"/>
<path d="M90 474 C74 463 74 451 80 448 C84 446 89 449 90 452 C91 449 96 446 100 448 C106 451 106 463 90 474 Z" fill="url(#spain-purple)"/>
<path d="M138 428 L143 440 L155 445 L143 450 L138 462 L133 450 L121 445 L133 440 Z" fill="url(#spain-blue)"/>
<path d="M42 522 C26 504 26 484 33 480 C39 477 41 482 42 487 C43 482 45 477 51 480 C58 484 58 504 42 522 Z" fill="none" stroke="#7566b4" stroke-width="3"/>
<path d="M138 522 C114 504 114 484 125 480 C132 477 137 482 138 487 C139 482 144 477 151 480 C162 484 162 504 138 522 Z" fill="url(#spain-blue)"/>
<rect x="14" y="418" width="152" height="112" rx="4" fill="none" stroke="#a8926c" stroke-width="2.5"/>

<g data-obj="purple-heart">
  <path d="M90 522 C66 504 66 482 77 478 C84 475 89 480 90 485 C91 480 96 475 103 478 C114 482 114 504 90 522 Z" fill="url(#spain-purple)"/>
  <path d="M90 514 C74 500 74 485 80 483 C85 481 88 485 89 489 C87 498 87 507 90 514 Z" fill="#c2b4f0" opacity="0.7"/>
  <path d="M90 522 C102 512 110 502 112 492 C112 506 104 514 92 521 Z" fill="#342a5e" opacity="0.55"/>
  <ellipse cx="80" cy="487" rx="5" ry="3.6" fill="#ffffff" opacity="0.7" transform="rotate(-38 80 487)"/>
  <path d="M90 522 C66 504 66 482 77 478 C84 475 89 480 90 485 C91 480 96 475 103 478 C114 482 114 504 90 522 Z" fill="none" stroke="#3a3068" stroke-width="2.2"/>
</g>
<ellipse cx="98" cy="532" rx="26" ry="5" fill="url(#spain-wallshadow)"/>

<rect x="70" y="404" width="6" height="10" fill="#8a6a5a"/>
<path d="M73 412 q-16 30 -12 62 q4 26 12 40 q8 -14 12 -40 q4 -32 -12 -62 Z" fill="url(#spain-leaf)"/>
<path d="M73 412 q-16 30 -12 62 q4 26 12 40 q0 -46 0 -102 Z" fill="#8cb862" opacity="0.65"/>
<path d="M66 442 l-14 -8 M68 468 l-16 -6 M70 492 l-14 -4 M80 446 l14 -10 M82 472 l16 -8" stroke="#3f6134" stroke-width="2.5" fill="none"/>
<ellipse cx="73" cy="512" rx="9" ry="6" fill="#3f6134"/>

<g data-obj="chili-string">
  <rect x="104" y="404" width="5" height="8" fill="#6f5b48"/>
  <path d="M106 412 q-6 16 -3 32 q3 14 5 22 q3 -10 5 -22 q3 -16 -7 -32 Z" fill="url(#spain-red)"/>
  <path d="M100 420 q-8 14 -5 28 q6 -12 5 -28 Z" fill="#d63f42"/>
  <path d="M113 428 q9 14 5 28 q-7 -12 -5 -28 Z" fill="#a8203a"/>
  <path d="M106 440 q-5 14 -2 26 q5 -10 2 -26 Z" fill="#f2907a" opacity="0.8"/>
  <path d="M104 424 q-2 14 0 26" stroke="#ffc9b4" stroke-width="1.8" fill="none" opacity="0.8"/>
  <ellipse cx="106" cy="414" rx="7" ry="3.2" fill="#5c7a3a"/>
</g>

<ellipse cx="206" cy="506" rx="46" ry="10" fill="url(#spain-wallshadow)"/>
<path d="M196 450 Q172 424 162 434 Q172 452 196 452 Z" fill="url(#spain-leaf)"/>
<path d="M196 450 Q220 422 232 432 Q222 452 196 452 Z" fill="#7c9a52"/>
<path d="M194 448 Q188 418 196 402 Q204 420 200 450 Z" fill="#6b8a46"/>
<circle cx="168" cy="430" r="7" fill="url(#spain-red)"/>
<circle cx="228" cy="428" r="7" fill="url(#spain-red)"/>
<circle cx="197" cy="404" r="6" fill="#e0563f"/>

<g data-obj="clay-pot">
  <path d="M170 452 L222 452 L214 496 Q196 504 178 496 Z" fill="url(#spain-terra)"/>
  <path d="M170 452 L190 452 L188 502 Q180 500 178 496 Z" fill="#f3ae83" opacity="0.7"/>
  <path d="M214 452 L222 452 L214 496 Q206 501 200 502 Q210 486 214 452 Z" fill="#7c3a1c" opacity="0.45"/>
  <rect x="166" y="444" width="60" height="12" rx="4" fill="url(#spain-terra2)"/>
  <rect x="166" y="444" width="60" height="4" rx="2" fill="#f7c19c"/>
  <ellipse cx="196" cy="450" rx="24" ry="6" fill="#4a2f1c"/>
  <path d="M176 472 L214 468" stroke="#8f4324" stroke-width="2.5" fill="none" opacity="0.7"/>
  <path d="M172 456 q0 24 4 40" stroke="#ffd3b4" stroke-width="2.4" fill="none" opacity="0.65"/>
</g>

<rect x="188" y="524" width="5" height="16" fill="#6f5b48"/>
<g data-obj="birdcage">
  <path d="M172 546 L220 546 L215 602 L177 602 Z" fill="#efe1c6" opacity="0.5"/>
  <path d="M172 546 L192 546 L189 602 L177 602 Z" fill="#fffaef" opacity="0.4"/>
  <path d="M172 546 L220 546 L215 602 L177 602 Z" fill="none" stroke="#7d5228" stroke-width="2.5"/>
  <path d="M180 546 L178 602 M190 546 L189 602 M200 546 L201 602 M210 546 L212 602" stroke="#8a5a30" stroke-width="1.6" fill="none"/>
  <path d="M176 540 q20 -8 40 0" fill="none" stroke="#8a5a30" stroke-width="3"/>
  <path d="M176 540 q20 -8 40 0" fill="none" stroke="#d2a06d" stroke-width="1.2"/>
  <rect x="168" y="598" width="56" height="9" rx="3" fill="url(#spain-wood)"/>
  <rect x="168" y="598" width="56" height="3" rx="1.5" fill="#e0b183"/>
</g>
<ellipse cx="204" cy="612" rx="38" ry="7" fill="url(#spain-wallshadow)"/>

<g data-obj="canary">
  <ellipse cx="196" cy="576" rx="15" ry="18" fill="url(#spain-yellow)"/>
  <ellipse cx="192" cy="569" rx="8" ry="8" fill="#ffeeb0"/>
  <ellipse cx="190" cy="572" rx="5" ry="4" fill="#fffbe4" opacity="0.9"/>
  <circle cx="190" cy="568" r="2.6" fill="#3a2415"/>
  <circle cx="189" cy="567" r="0.9" fill="#ffffff"/>
  <path d="M184 570 L177 573 L184 576 Z" fill="#e0863f"/>
  <path d="M200 573 q9 7 4 18 q-9 -7 -4 -18 Z" fill="#c98115"/>
  <path d="M203 582 q6 8 3 14" stroke="#a9720f" stroke-width="2" fill="none"/>
  <path d="M194 593 L194 602 M199 593 L200 602" stroke="#c98115" stroke-width="2"/>
</g>

<g data-obj="wall-mirror">
  <ellipse cx="43" cy="582" rx="26" ry="30" fill="#8f7420" opacity="0.35"/>
  <ellipse cx="40" cy="578" rx="26" ry="30" fill="url(#spain-brass)"/>
  <ellipse cx="40" cy="578" rx="21" ry="25" fill="url(#spain-glass)"/>
  <path d="M28 566 q10 -8 20 -2 q-8 10 -20 2 Z" fill="#ffffff" opacity="0.75"/>
  <path d="M24 588 q12 -6 22 6 q-14 6 -22 -6 Z" fill="#b7cfdd" opacity="0.55"/>
  <ellipse cx="40" cy="578" rx="26" ry="30" fill="none" stroke="#8a6412" stroke-width="2.2"/>
  <path d="M22 566 a26 30 0 0 1 18 -18" fill="none" stroke="#fff3c8" stroke-width="2.8" opacity="0.9"/>
  <path d="M40 548 L36 540 L44 540 Z" fill="#a97c2c"/>
</g>

<ellipse cx="400" cy="460" rx="26" ry="6" fill="url(#spain-wallshadow)"/>
<path d="M394 412 q-14 2 -14 16 q0 10 -5 15 l38 0 q-5 -5 -5 -15 q0 -14 -14 -16 Z" fill="url(#spain-brass)"/>
<path d="M394 412 q-14 2 -14 16 q0 10 -5 15 l11 0 q0 -12 2 -19 q2 -10 6 -12 Z" fill="#ffefbc" opacity="0.8"/>
<rect x="390" y="404" width="8" height="9" rx="3" fill="#8a6a5a"/>
<ellipse cx="394" cy="444" rx="20" ry="3.5" fill="#8f6a12"/>
<circle cx="394" cy="450" r="4.5" fill="#e8c477"/>

<rect x="418" y="550" width="212" height="134" rx="4" fill="#d8c19c"/>
<rect x="418" y="550" width="212" height="6" rx="3" fill="#f4e5c8"/>
<rect x="424" y="556" width="200" height="122" fill="#b8a284"/>
<rect x="424" y="556" width="38" height="38" fill="url(#spain-tile)"/>
<rect x="464" y="556" width="38" height="38" fill="url(#spain-tile2)"/>
<rect x="504" y="556" width="38" height="38" fill="url(#spain-tile)"/>
<rect x="544" y="556" width="38" height="38" fill="url(#spain-tile2)"/>
<rect x="584" y="556" width="38" height="38" fill="url(#spain-tile)"/>
<rect x="424" y="596" width="38" height="38" fill="url(#spain-tile2)"/>
<rect x="464" y="596" width="38" height="38" fill="url(#spain-tile)"/>
<rect x="504" y="596" width="38" height="38" fill="url(#spain-tile2)"/>
<rect x="544" y="596" width="38" height="38" fill="url(#spain-tile)"/>
<rect x="584" y="596" width="38" height="38" fill="url(#spain-tile2)"/>
<rect x="424" y="636" width="38" height="38" fill="url(#spain-tile)"/>
<rect x="464" y="636" width="38" height="38" fill="url(#spain-tile2)"/>
<rect x="504" y="636" width="38" height="38" fill="url(#spain-tile)"/>
<rect x="544" y="636" width="38" height="38" fill="url(#spain-tile2)"/>
<rect x="584" y="636" width="38" height="38" fill="url(#spain-tile)"/>
<path d="M443 559 L448 570 L459 575 L448 580 L443 591 L438 580 L427 575 L438 570 Z" fill="url(#spain-blue)"/>
<path d="M523 575 Q516 566 523 557 Q530 566 523 575 Z M523 575 Q532 568 541 575 Q532 582 523 575 Z M523 575 Q516 584 523 593 Q530 584 523 575 Z M523 575 Q514 568 505 575 Q514 582 523 575 Z" fill="url(#spain-purple)"/>
<path d="M603 559 L608 570 L619 575 L608 580 L603 591 L598 580 L587 575 L598 570 Z" fill="url(#spain-blue)"/>
<path d="M483 615 Q476 606 483 597 Q490 606 483 615 Z M483 615 Q492 608 501 615 Q492 622 483 615 Z M483 615 Q476 624 483 633 Q490 624 483 615 Z M483 615 Q474 608 465 615 Q474 622 483 615 Z" fill="url(#spain-blue)"/>
<path d="M563 628 C551 618 551 606 557 604 C561 602 562 605 563 608 C564 605 565 602 569 604 C575 606 575 618 563 628 Z" fill="none" stroke="#7566b4" stroke-width="2.5"/>
<path d="M443 655 L448 666 L459 671 L448 676 L443 687 L438 676 L427 671 L438 666 Z" fill="url(#spain-blue)"/>
<path d="M603 668 C591 658 591 646 597 644 C601 642 602 645 603 648 C604 645 605 642 609 644 C615 646 615 658 603 668 Z" fill="url(#spain-purple)"/>
<rect x="424" y="556" width="200" height="122" fill="none" stroke="#2f6fb3" stroke-width="5"/>
<rect x="424" y="556" width="200" height="122" fill="url(#spain-sheen)" opacity="0.28"/>

<ellipse cx="474" cy="648" rx="34" ry="7" fill="url(#spain-wallshadow)"/>
<path d="M466 638 L436 638 A30 30 0 0 1 496 638 Z" fill="url(#spain-cream)"/>
<path d="M436 638 A30 30 0 0 1 466 608 L466 638 Z" fill="#ffffff" opacity="0.4"/>
<path d="M466 638 L438 638 M466 638 L445 620 M466 638 L456 612 M466 638 L466 608 M466 638 L477 612 M466 638 L488 621 M466 638 L494 638" stroke="#d9c4a0" stroke-width="1.8" fill="none"/>
<path d="M466 638 L448 638 A18 18 0 0 1 484 638 Z" fill="#e6d3ab"/>
<circle cx="466" cy="638" r="4" fill="#b8a284"/>

<g data-obj="hand-fan">
  <ellipse cx="606" cy="750" rx="42" ry="9" fill="url(#spain-wallshadow)"/>
  <path d="M596 728 L562 728 A34 34 0 0 1 630 728 Z" fill="url(#spain-cream)"/>
  <path d="M596 728 L565 728 A31 31 0 0 1 627 728 Z" fill="none" stroke="#2f6fb3" stroke-width="7"/>
  <path d="M596 728 L581 728 A15 15 0 0 1 611 728 Z" fill="url(#spain-yellow)"/>
  <path d="M562 728 A34 34 0 0 1 596 694 L596 728 Z" fill="#ffffff" opacity="0.4"/>
  <path d="M596 694 A34 34 0 0 1 630 728 L614 728 A24 24 0 0 0 596 706 Z" fill="#a8926c" opacity="0.28"/>
  <path d="M596 728 L563 728 M596 728 L567 712 M596 728 L580 699 M596 728 L596 695 M596 728 L612 699 M596 728 L625 712 M596 728 L629 728" stroke="#d9c4a0" stroke-width="2" fill="none"/>
  <path d="M575 711 L578 718 L585 720 L578 723 L575 730 L572 723 L565 720 L572 718 Z" fill="#1c4b80"/>
  <path d="M596 702 L599 709 L606 711 L599 714 L596 721 L593 714 L586 711 L593 709 Z" fill="#1c4b80"/>
  <path d="M617 711 L620 718 L627 720 L620 723 L617 730 L614 723 L607 720 L614 718 Z" fill="#1c4b80"/>
  <circle cx="586" cy="706" r="2.8" fill="#e0563f"/>
  <circle cx="607" cy="706" r="2.8" fill="#e0563f"/>
  <path d="M562 728 A34 34 0 0 1 630 728" fill="none" stroke="#7d5228" stroke-width="2.6"/>
  <path d="M591 730 L587 742 L594 744 L596 733 Z" fill="url(#spain-wooddark)"/>
  <path d="M601 730 L605 742 L598 744 L596 733 Z" fill="url(#spain-wood)"/>
  <circle cx="596" cy="729" r="4.5" fill="url(#spain-brass)"/>
  <circle cx="596" cy="729" r="1.8" fill="#6f5210"/>
</g>

<ellipse cx="466" cy="792" rx="34" ry="8" fill="url(#spain-wallshadow)"/>
<g data-obj="mailbox">
  <rect x="442" y="748" width="38" height="30" rx="4" fill="url(#spain-yellow)"/>
  <path d="M442 752 q0 -4 4 -4 l30 0 q4 0 4 4 l0 6 q-19 -5 -38 0 Z" fill="#fff0b4" opacity="0.85"/>
  <path d="M472 750 q8 2 8 12 l0 16 l-9 0 l0 -16 q0 -8 1 -12 Z" fill="#8f6512" opacity="0.35"/>
  <rect x="448" y="762" width="26" height="6" rx="2" fill="#7c1229"/>
  <rect x="448" y="762" width="26" height="2.5" rx="1.2" fill="#4d0a19"/>
  <rect x="458" y="778" width="7" height="12" fill="#6f5b48"/>
  <circle cx="474" cy="772" r="3" fill="#a9720f"/>
  <path d="M443 754 L443 776" stroke="#fff6d8" stroke-width="2.2" opacity="0.75"/>
</g>

<ellipse cx="528" cy="816" rx="32" ry="7" fill="url(#spain-wallshadow)"/>
<path d="M520 806 L492 806 A28 28 0 0 1 548 806 Z" fill="url(#spain-red)"/>
<path d="M492 806 A28 28 0 0 1 520 778 L520 806 Z" fill="#f8a08c" opacity="0.45"/>
<path d="M520 806 L494 806 M520 806 L502 788 M520 806 L520 778 M520 806 L538 788 M520 806 L546 806" stroke="#e8768c" stroke-width="2" fill="none"/>
<circle cx="520" cy="806" r="4.5" fill="#f2c14e"/>
<path d="M517 810 L512 824 M523 810 L528 824" stroke="#7c1229" stroke-width="2.4" stroke-linecap="round"/>

<rect x="612" y="646" width="5" height="10" fill="#6f5b48"/>
<path d="M614 654 q-10 8 -6 18 q4 10 6 16 q4 -8 6 -18 q2 -10 -6 -16 Z" fill="url(#spain-cream)"/>
<ellipse cx="614" cy="694" rx="9" ry="8" fill="#e6d3ab"/>
<ellipse cx="612" cy="706" rx="8" ry="7" fill="#f8efd8"/>
<ellipse cx="616" cy="716" rx="8" ry="7" fill="#e6d3ab"/>
<path d="M614 654 L613 722" stroke="#c9b294" stroke-width="1.5" fill="none"/>

<rect x="486" y="434" width="8" height="30" fill="#5c4a3a"/>
<rect x="458" y="430" width="64" height="8" rx="3" fill="#5c4a3a"/>
<rect x="458" y="430" width="64" height="3" rx="1.5" fill="#8a7460"/>
<g data-obj="lantern">
  <path d="M466 464 L514 464 L506 510 L474 510 Z" fill="url(#spain-bluedeep)"/>
  <path d="M466 464 L490 464 L486 510 L474 510 Z" fill="#6fa7cd"/>
  <path d="M502 464 L514 464 L506 510 L496 510 Z" fill="#20384a" opacity="0.6"/>
  <ellipse cx="490" cy="490" rx="12" ry="15" fill="url(#spain-glow)"/>
  <ellipse cx="490" cy="490" rx="8" ry="10" fill="#fff3c0"/>
  <polygon points="466,464 514,464 506,454 474,454" fill="#2a2030"/>
  <polygon points="466,464 490,464 482,454 474,454" fill="#4c3e50"/>
  <rect x="470" y="510" width="40" height="7" rx="2" fill="#4a3b2e"/>
  <path d="M478 464 L474 510 M502 464 L506 510" stroke="#20384a" stroke-width="2"/>
  <path d="M468 466 L476 508" stroke="#cfe7f7" stroke-width="2" opacity="0.7"/>
</g>
<ellipse cx="500" cy="530" rx="38" ry="8" fill="url(#spain-wallshadow)"/>

<rect x="524" y="500" width="92" height="10" rx="3" fill="url(#spain-wood)"/>
<rect x="524" y="500" width="92" height="4" rx="2" fill="#dfae7c"/>
<path d="M532 510 L538 522 M608 510 L602 522" stroke="#6b4526" stroke-width="3.5" fill="none"/>
<path d="M538 500 q-6 -22 6 -26 l4 -14 l8 0 l4 14 q12 4 6 26 Z" fill="url(#spain-green)"/>
<path d="M538 500 q-6 -22 6 -26 l4 -14 l3 0 l0 40 Z" fill="#c2dd8c" opacity="0.65"/>
<rect x="544" y="452" width="12" height="10" rx="4" fill="#4e6b2e"/>
<path d="M540 488 q12 -4 20 0" stroke="#eaf5cc" stroke-width="2.4" fill="none" opacity="0.8"/>
<path d="M574 500 q-6 -26 8 -28 l18 0 q14 2 8 28 Z" fill="url(#spain-cream)"/>
<path d="M574 500 q-6 -26 8 -28 l8 0 l0 28 Z" fill="#fffdf6" opacity="0.7"/>
<rect x="586" y="462" width="10" height="10" rx="3" fill="#2f6fb3"/>
<path d="M576 488 q15 -4 30 0" stroke="#2f6fb3" stroke-width="2.4" fill="none"/>
<ellipse cx="580" cy="500" rx="52" ry="7" fill="url(#spain-wallshadow)"/>

<path d="M238 900 L238 556 Q238 458 335 458 Q432 458 432 556 L432 900 Z" fill="#d9a06f"/>
<path d="M244 900 L244 558 Q244 464 335 464 Q426 464 426 558 L426 900 Z" fill="url(#spain-terra2)"/>
<path d="M252 900 L252 560 Q252 472 335 472 Q418 472 418 560 L418 900 Z" fill="url(#spain-doorshade)"/>
<ellipse cx="352" cy="640" rx="92" ry="104" fill="url(#spain-doorglow)"/>
<path d="M252 560 Q252 472 335 472 Q418 472 418 560" fill="none" stroke="#fffaef" stroke-width="4" opacity="0.7"/>
<path d="M238 556 Q238 458 335 458 Q432 458 432 556" fill="none" stroke="#fffdf4" stroke-width="3" opacity="0.55"/>
<path d="M258 490 L258 900 L272 900 L272 484 Z" fill="#4a3b52" opacity="0.55"/>
<path d="M264 502 L264 860 M280 488 L280 860 M296 478 L296 860" stroke="#5b4552" stroke-width="2" opacity="0.7"/>

<rect x="297" y="592" width="6" height="4" fill="#5c4a3a"/>
<path d="M296 596 L306 596 L307 606 L295 606 Z" fill="#6b4526"/>
<ellipse cx="301" cy="646" rx="19" ry="24" fill="#5c3a1c"/>
<ellipse cx="301" cy="644" rx="19" ry="24" fill="url(#spain-wood)"/>
<path d="M282 644 q6 22 19 26 q13 -4 19 -26 q-8 20 -19 22 q-11 -2 -19 -22 Z" fill="#5c3a1c" opacity="0.7"/>
<ellipse cx="292" cy="632" rx="6" ry="9" fill="#e0b183" opacity="0.55"/>
<circle cx="301" cy="640" r="6" fill="#3a2415"/>
<path d="M296 616 L306 616 L305 628 L297 628 Z" fill="#7d5228"/>

<g data-obj="guitar">
  <ellipse cx="366" cy="652" rx="14" ry="13" fill="#5c3a1c"/>
  <ellipse cx="366" cy="648" rx="14" ry="13" fill="url(#spain-wood)"/>
  <ellipse cx="366" cy="633" rx="10" ry="9" fill="#5c3a1c"/>
  <ellipse cx="366" cy="629" rx="10" ry="9" fill="url(#spain-wood)"/>
  <path d="M356 631 q6 5 0 10 L376 641 q-6 -5 0 -10 Z" fill="#c58c46"/>
  <ellipse cx="359" cy="622" rx="6" ry="4" fill="#f0c68c" opacity="0.7"/>
  <ellipse cx="358" cy="646" rx="6" ry="4" fill="#f0c68c" opacity="0.5"/>
  <path d="M374 640 q6 8 3 16 q-4 8 -12 9 q10 -6 12 -14 q1 -6 -3 -11 Z" fill="#4b3018" opacity="0.6"/>
  <circle cx="366" cy="639" r="5" fill="#241a2b"/>
  <circle cx="366" cy="639" r="5" fill="none" stroke="#8b5cf6" stroke-width="1.6"/>
  <circle cx="366" cy="639" r="7" fill="none" stroke="#f2c14e" stroke-width="1.2"/>
  <rect x="358" y="654" width="16" height="4" rx="1" fill="#4a2d12"/>
  <rect x="361" y="604" width="10" height="21" fill="#7d5228"/>
  <rect x="361" y="604" width="4" height="21" fill="#a97f4c"/>
  <rect x="360" y="601" width="12" height="4" rx="1" fill="#f2e2c2"/>
  <path d="M360 601 L359 590 L373 590 L372 601 Z" fill="#6b4526"/>
  <circle cx="363" cy="594" r="1.6" fill="#e9d7b7"/>
  <circle cx="369" cy="594" r="1.6" fill="#e9d7b7"/>
  <path d="M363 603 L363 656 M366 603 L366 656 M369 603 L369 656" stroke="#f6ecd6" stroke-width="0.9" opacity="0.85"/>
</g>

<path d="M336 472 L336 584" stroke="#7d5228" stroke-width="2" opacity="0.75" fill="none"/>
<circle cx="336" cy="592" r="4" fill="#c62b4a"/>
<circle cx="336" cy="604" r="4" fill="#f2c14e"/>
<circle cx="336" cy="616" r="4" fill="#2f6fb3"/>
<circle cx="336" cy="628" r="4" fill="#c62b4a"/>
<circle cx="336" cy="640" r="4" fill="#f2c14e"/>
<circle cx="336" cy="652" r="4" fill="#2f6fb3"/>
<path d="M404 472 L404 620" stroke="#7d5228" stroke-width="2" opacity="0.65" fill="none"/>
<circle cx="404" cy="628" r="4" fill="#8b5cf6"/>
<circle cx="404" cy="640" r="4" fill="#f2c14e"/>
<circle cx="404" cy="652" r="4" fill="#2f6fb3"/>
<rect x="316" y="470" width="6" height="6" fill="#5c4a3a"/>
<path d="M319 476 q-14 24 -10 52 q4 22 10 34 q6 -12 10 -34 q4 -28 -10 -52 Z" fill="url(#spain-leaf)" opacity="0.92"/>
<path d="M313 506 l-12 -8 M315 530 l-14 -6 M323 512 l12 -10" stroke="#3f6134" stroke-width="2" fill="none"/>

<ellipse cx="340" cy="806" rx="98" ry="82" fill="url(#spain-doorglow)" opacity="0.7"/>
<rect x="256" y="752" width="158" height="11" rx="3" fill="#5c4028"/>
<rect x="256" y="752" width="158" height="4" rx="2" fill="#8a6236"/>
<g data-obj="water-jar">
  <path d="M272 752 q-8 -40 10 -46 l16 0 q18 6 10 46 Z" fill="url(#spain-wood)"/>
  <path d="M272 752 q-8 -40 10 -46 l7 0 l0 46 Z" fill="#d2a06d" opacity="0.75"/>
  <path d="M303 710 q6 18 5 42 l-8 0 q4 -22 -2 -42 Z" fill="#4b3018" opacity="0.5"/>
  <rect x="280" y="698" width="20" height="10" rx="4" fill="#5c3a1c"/>
  <rect x="280" y="698" width="20" height="3.5" rx="1.7" fill="#a97f4c"/>
  <path d="M298 712 q14 6 10 18 q-4 10 -12 8" fill="none" stroke="#8a5a30" stroke-width="5"/>
  <path d="M275 730 q16 -5 30 0" stroke="#e0b183" stroke-width="2.5" fill="none"/>
  <path d="M277 716 q-2 20 0 34" stroke="#f0cba0" stroke-width="2.2" fill="none" opacity="0.75"/>
</g>
<path d="M330 752 q-6 -26 8 -28 l22 0 q14 2 8 28 Z" fill="#7d5228"/>
<path d="M330 752 q-6 -26 8 -28 l10 0 l0 28 Z" fill="#a06d3c"/>
<path d="M334 736 L370 736" stroke="#5c3a1c" stroke-width="2.2"/>
<path d="M378 752 q-6 -22 7 -24 l18 0 q13 2 7 24 Z" fill="#6b4526"/>
<path d="M378 752 q-6 -22 7 -24 l8 0 l0 24 Z" fill="#8f6236"/>
<rect x="252" y="852" width="166" height="28" fill="#8a6a5a"/>
<rect x="252" y="852" width="166" height="9" fill="#ad8a79"/>
<rect x="252" y="880" width="166" height="14" fill="#5b3f3b"/>
<rect x="258" y="856" width="36" height="22" fill="url(#spain-tile)" opacity="0.85"/>
<rect x="298" y="856" width="36" height="22" fill="url(#spain-tile2)" opacity="0.85"/>
<rect x="338" y="856" width="36" height="22" fill="url(#spain-tile)" opacity="0.85"/>
<rect x="378" y="856" width="36" height="22" fill="url(#spain-tile2)" opacity="0.85"/>
<path d="M276 862 L279 868 L276 874 L273 868 Z" fill="#2f6fb3"/>
<path d="M356 862 L359 868 L356 874 L353 868 Z" fill="#6a5fa8"/>

<rect x="0" y="880" width="800" height="320" fill="url(#spain-floor)"/>
<rect x="0" y="874" width="800" height="14" fill="#9c5a34"/>
<rect x="0" y="874" width="800" height="5" fill="#c8815a"/>
<path d="M0 912 L800 912 M0 968 L800 968 M0 1046 L800 1046 M0 1140 L800 1140" stroke="#93522e" stroke-width="2.5" opacity="0.42" fill="none"/>
<path d="M96 888 L88 912 M296 888 L292 912 M496 888 L500 912 M696 888 L704 912" stroke="#93522e" stroke-width="2" opacity="0.3" fill="none"/>
<path d="M60 912 L44 968 M260 912 L254 968 M460 912 L464 968 M660 912 L676 968" stroke="#93522e" stroke-width="2" opacity="0.3" fill="none"/>
<path d="M20 968 L-8 1046 M226 968 L212 1046 M432 968 L438 1046 M638 968 L672 1046" stroke="#93522e" stroke-width="2.2" opacity="0.28" fill="none"/>
<polygon points="0,880 210,880 96,1200 0,1200" fill="#ffeec4" opacity="0.22"/>
<polygon points="452,880 560,880 512,1080 424,1080" fill="#ffeec4" opacity="0.12"/>
<rect x="0" y="880" width="800" height="46" fill="#6b3a1f" opacity="0.16"/>

<ellipse cx="722" cy="392" rx="106" ry="82" fill="#2f4d26"/>
<ellipse cx="648" cy="440" rx="52" ry="52" fill="#2f4d26"/>
<ellipse cx="792" cy="452" rx="54" ry="58" fill="#2f4d26"/>
<ellipse cx="724" cy="512" rx="90" ry="62" fill="#2f4d26"/>
<ellipse cx="690" cy="326" rx="56" ry="46" fill="#2f4d26"/>
<ellipse cx="782" cy="330" rx="46" ry="40" fill="#2f4d26"/>
<ellipse cx="722" cy="590" rx="40" ry="28" fill="#2f4d26"/>
<ellipse cx="708" cy="376" rx="86" ry="60" fill="url(#spain-leaf)"/>
<ellipse cx="642" cy="428" rx="40" ry="38" fill="url(#spain-leaf)"/>
<ellipse cx="784" cy="440" rx="44" ry="44" fill="url(#spain-leaf)"/>
<ellipse cx="714" cy="498" rx="72" ry="48" fill="url(#spain-leaf)"/>
<ellipse cx="778" cy="322" rx="36" ry="30" fill="url(#spain-leaf)"/>
<ellipse cx="662" cy="552" rx="42" ry="30" fill="url(#spain-leaf)"/>
<ellipse cx="770" cy="556" rx="40" ry="28" fill="url(#spain-leaf)"/>
<ellipse cx="678" cy="336" rx="44" ry="28" fill="#9dc472" opacity="0.8"/>
<ellipse cx="694" cy="486" rx="40" ry="24" fill="#9dc472" opacity="0.6"/>
<ellipse cx="656" cy="418" rx="24" ry="16" fill="#b2d484" opacity="0.5"/>
<path d="M732 336 q22 -18 42 -8 q-22 18 -42 8 Z" fill="#41682f"/>
<path d="M628 448 q22 -16 40 -6 q-20 16 -40 6 Z" fill="#41682f"/>
<path d="M700 506 q24 -14 40 -2 q-22 14 -40 2 Z" fill="#41682f"/>
<path d="M776 300 q20 -14 34 -4 q-18 14 -34 4 Z" fill="#41682f"/>

<circle cx="646" cy="332" r="25" fill="#bf5f0c"/>
<circle cx="645" cy="329" r="25" fill="url(#spain-orange)"/>
<ellipse cx="634" cy="318" rx="8" ry="5" fill="#ffe3ae" opacity="0.85" transform="rotate(-35 634 318)"/>
<circle cx="700" cy="300" r="24" fill="#bf5f0c"/>
<circle cx="699" cy="297" r="24" fill="url(#spain-orange)"/>
<path d="M701 273 Q724 262 729 275 Q717 287 701 278 Z" fill="#6b9a52"/>
<circle cx="782" cy="474" r="26" fill="#bf5f0c"/>
<circle cx="781" cy="471" r="26" fill="url(#spain-orange)"/>
<ellipse cx="769" cy="459" rx="9" ry="6" fill="#ffe3ae" opacity="0.85" transform="rotate(-35 769 459)"/>
<circle cx="670" cy="404" r="23" fill="#bf5f0c"/>
<circle cx="669" cy="401" r="23" fill="url(#spain-orange)"/>
<path d="M671 379 Q692 368 697 380 Q686 391 671 383 Z" fill="#6b9a52"/>
<circle cx="726" cy="482" r="25" fill="#5b8940"/>
<circle cx="725" cy="479" r="25" fill="url(#spain-green)"/>
<ellipse cx="713" cy="467" rx="8" ry="5" fill="#e2f2bd" opacity="0.85" transform="rotate(-35 713 467)"/>
<circle cx="650" cy="452" r="24" fill="#bf5f0c"/>
<circle cx="649" cy="449" r="24" fill="url(#spain-orange)"/>
<circle cx="748" cy="426" r="26" fill="#b98f16"/>
<circle cx="747" cy="423" r="26" fill="url(#spain-lemon)"/>
<path d="M745 400 Q724 388 719 401 Q731 412 745 404 Z" fill="#6b9a52"/>

<g data-obj="orange">
  <circle cx="760" cy="354" r="28" fill="#a84f08"/>
  <circle cx="759" cy="351" r="28" fill="url(#spain-orange)"/>
  <path d="M759 323 A28 28 0 0 1 779 374 A28 28 0 0 0 759 323 Z" fill="#c96b12" opacity="0.75"/>
  <ellipse cx="747" cy="339" rx="10" ry="6.5" fill="#fff0cf" opacity="0.95" transform="rotate(-35 747 339)"/>
  <path d="M736 336 a28 28 0 0 1 20 -13" fill="none" stroke="#ffe8bd" stroke-width="2.6" opacity="0.8"/>
  <circle cx="759" cy="351" r="28" fill="none" stroke="#b0570a" stroke-width="2"/>
  <rect x="756" y="320" width="6" height="10" rx="3" fill="#6b4526"/>
  <path d="M761 325 Q786 313 791 327 Q778 340 761 330 Z" fill="#6b9a52"/>
  <path d="M761 327 Q777 323 789 328" stroke="#3d6432" stroke-width="1.6" fill="none"/>
</g>

<path d="M700 720 L698 862 L718 862 L716 720 Z" fill="url(#spain-wooddark)"/>
<path d="M700 720 L698 862 L707 862 L707 720 Z" fill="#a97f4c" opacity="0.7"/>
<path d="M706 616 Q670 582 642 562" stroke="#6b4526" stroke-width="13" fill="none" stroke-linecap="round"/>
<path d="M712 594 Q754 566 778 548" stroke="#6b4526" stroke-width="11" fill="none" stroke-linecap="round"/>
<path d="M708 580 Q702 540 710 512" stroke="#6b4526" stroke-width="10" fill="none" stroke-linecap="round"/>
<path d="M704 620 Q676 592 652 572" stroke="#a97f4c" stroke-width="4" fill="none" stroke-linecap="round" opacity="0.7"/>
<ellipse cx="712" cy="952" rx="96" ry="22" fill="url(#spain-shadow)"/>
<path d="M654 946 L644 858 L776 858 L766 946 Z" fill="url(#spain-terra)"/>
<path d="M654 946 L644 858 L688 858 L694 946 Z" fill="#f0a678" opacity="0.6"/>
<path d="M756 858 L776 858 L766 946 L744 946 Z" fill="#7c3a1c" opacity="0.42"/>
<rect x="636" y="844" width="148" height="20" rx="4" fill="url(#spain-terra2)"/>
<rect x="636" y="844" width="148" height="7" rx="3" fill="#f7c19c"/>
<rect x="662" y="880" width="76" height="30" fill="#fdf7ea" opacity="0.92"/>
<rect x="662" y="880" width="76" height="30" fill="none" stroke="#2f6fb3" stroke-width="3"/>
<path d="M684 886 L689 895 L698 898 L689 901 L684 910 L679 901 L670 898 L679 895 Z" fill="#2f6fb3"/>
<path d="M716 886 L721 895 L730 898 L721 901 L716 910 L711 901 L702 898 L711 895 Z" fill="#1c4b80"/>
<path d="M648 872 q60 -8 120 0" stroke="#7c3a1c" stroke-width="2.5" fill="none" opacity="0.55"/>

<rect x="630" y="692" width="170" height="11" rx="4" fill="url(#spain-wood)"/>
<rect x="630" y="692" width="170" height="4" rx="2" fill="#e0b183"/>
<path d="M642 703 L650 719 M788 703 L780 719" stroke="#6b4526" stroke-width="4" fill="none"/>
<rect x="630" y="782" width="170" height="11" rx="4" fill="url(#spain-wood)"/>
<rect x="630" y="782" width="170" height="4" rx="2" fill="#e0b183"/>
<path d="M642 793 L650 809 M788 793 L780 809" stroke="#6b4526" stroke-width="4" fill="none"/>

<g data-obj="straw-hat">
  <ellipse cx="668" cy="690" rx="29" ry="8" fill="#8f6a2c" opacity="0.4"/>
  <ellipse cx="665" cy="686" rx="29" ry="9" fill="#b8965a"/>
  <ellipse cx="665" cy="683" rx="29" ry="9" fill="url(#spain-yellow)"/>
  <path d="M647 682 q2 -34 18 -34 q16 0 18 34 Z" fill="#d9b878"/>
  <path d="M647 682 q2 -34 18 -34 q-6 16 -6 34 Z" fill="#f7e3ae"/>
  <path d="M677 654 q6 12 6 28 l-8 0 q0 -16 -4 -28 Z" fill="#8f6a2c" opacity="0.4"/>
  <path d="M648 672 q17 6 34 0" stroke="#8f1732" stroke-width="5" fill="none"/>
  <ellipse cx="665" cy="683" rx="29" ry="9" fill="none" stroke="#a67f42" stroke-width="1.6"/>
  <path d="M640 682 a29 9 0 0 1 22 -8" fill="none" stroke="#fff2cc" stroke-width="2" opacity="0.8"/>
</g>

<g data-obj="copper-ladle">
  <rect x="756" y="632" width="9" height="42" rx="4" fill="#9c5f2f"/>
  <rect x="756" y="632" width="4" height="42" rx="2" fill="#e8b184"/>
  <path d="M750 638 q10 -8 20 0" fill="none" stroke="#b9713c" stroke-width="4"/>
  <ellipse cx="762" cy="684" rx="19" ry="14" fill="#7d4319"/>
  <ellipse cx="760" cy="679" rx="19" ry="14" fill="url(#spain-copper)"/>
  <ellipse cx="753" cy="673" rx="8" ry="5" fill="#ffe6cc" opacity="0.85" transform="rotate(-30 753 673)"/>
  <path d="M742 678 a19 14 0 0 1 14 -13" fill="none" stroke="#ffdcbc" stroke-width="2.2" opacity="0.8"/>
  <path d="M770 670 a19 14 0 0 1 6 12 a19 14 0 0 1 -12 11 q10 -10 6 -23 Z" fill="#5e3110" opacity="0.5"/>
</g>

<g data-obj="garlic-braid">
  <path d="M664 724 q-4 14 0 26" stroke="#c9b294" stroke-width="4" fill="none"/>
  <ellipse cx="656" cy="748" rx="13" ry="15" fill="url(#spain-cream)"/>
  <ellipse cx="672" cy="752" rx="13" ry="15" fill="url(#spain-cream)"/>
  <ellipse cx="663" cy="768" rx="14" ry="16" fill="url(#spain-cream)"/>
  <ellipse cx="651" cy="742" rx="5" ry="6" fill="#fffdf6" opacity="0.85"/>
  <ellipse cx="658" cy="762" rx="5" ry="6" fill="#fffdf6" opacity="0.7"/>
  <path d="M656 736 L656 748 M672 740 L672 752 M663 756 L663 768" stroke="#b8a284" stroke-width="1.6"/>
  <path d="M674 760 q6 8 2 16 q-4 6 -10 7 q8 -8 8 -23 Z" fill="#9d8768" opacity="0.5"/>
  <path d="M650 776 q13 8 26 0" fill="none" stroke="#b8a284" stroke-width="2"/>
  <rect x="661" y="716" width="6" height="10" fill="#a9743f"/>
</g>

<g data-obj="horseshoe">
  <path d="M760 736 a22 22 0 0 1 22 22 l0 18 l-11 0 l0 -18 a11 11 0 0 0 -11 -11 a11 11 0 0 0 -11 11 l0 18 l-11 0 l0 -18 a22 22 0 0 1 22 -22 Z" fill="url(#spain-steel)"/>
  <path d="M760 736 a22 22 0 0 0 -22 22 l0 18 l-6 0 l0 -18 a28 28 0 0 1 28 -28 Z" fill="#eaf0f4" opacity="0.85"/>
  <path d="M760 730 a28 28 0 0 1 28 28 l0 18 l-6 0 l0 -18 a22 22 0 0 0 -22 -22 Z" fill="#3e474d" opacity="0.5"/>
  <circle cx="745" cy="750" r="2.6" fill="#3e474d"/>
  <circle cx="775" cy="750" r="2.6" fill="#3e474d"/>
  <circle cx="743" cy="768" r="2.6" fill="#3e474d"/>
  <circle cx="777" cy="768" r="2.6" fill="#3e474d"/>
</g>

<ellipse cx="272" cy="948" rx="34" ry="10" fill="url(#spain-shadow)"/>
<g data-obj="broom">
  <rect x="252" y="878" width="9" height="42" rx="4" fill="url(#spain-wood)" transform="rotate(6 256 900)"/>
  <path d="M250 918 L268 920 L272 946 L248 944 Z" fill="#c9a25c"/>
  <path d="M250 918 L259 919 L259 945 L248 944 Z" fill="#f0dda8"/>
  <path d="M266 920 L272 946 L263 945 L261 920 Z" fill="#8f6a2c" opacity="0.45"/>
  <path d="M252 926 L270 928 M251 934 L271 936" stroke="#a8863f" stroke-width="1.8"/>
  <rect x="248" y="914" width="24" height="6" rx="2" fill="#7d5228"/>
  <rect x="248" y="914" width="24" height="2.4" rx="1.2" fill="#b78b52"/>
</g>

<ellipse cx="330" cy="946" rx="38" ry="10" fill="url(#spain-shadow)"/>
<g data-obj="watering-can">
  <path d="M292 942 q-6 -34 8 -38 l28 0 q14 4 8 38 Z" fill="url(#spain-steel)"/>
  <path d="M292 942 q-6 -34 8 -38 l12 0 l0 38 Z" fill="#cbd6dd" opacity="0.75"/>
  <path d="M328 906 q8 4 6 36 l-8 0 q4 -22 0 -36 Z" fill="#41494f" opacity="0.45"/>
  <rect x="302" y="898" width="20" height="8" rx="3" fill="#5f7280"/>
  <rect x="302" y="898" width="20" height="3" rx="1.5" fill="#93a4b0"/>
  <path d="M328 908 q18 4 16 18 l-8 0 q-2 -10 -10 -12 Z" fill="#8b9aa5"/>
  <path d="M336 926 L348 940 L340 942 L330 930 Z" fill="#5f7280"/>
  <path d="M300 890 q12 -10 22 0" fill="none" stroke="#5f7280" stroke-width="4"/>
  <path d="M296 912 q-1 18 1 28" stroke="#f2f7fa" stroke-width="2.4" fill="none" opacity="0.75"/>
</g>

<ellipse cx="398" cy="944" rx="46" ry="10" fill="url(#spain-shadow)"/>
<g data-obj="sleeping-cat">
  <ellipse cx="390" cy="930" rx="30" ry="13" fill="#b47c47"/>
  <ellipse cx="390" cy="927" rx="30" ry="13" fill="url(#spain-orange)"/>
  <ellipse cx="380" cy="921" rx="16" ry="6" fill="#ffd9a4" opacity="0.6"/>
  <path d="M406 916 q14 5 14 12 q0 8 -14 12 q10 -12 0 -24 Z" fill="#9c5f2f" opacity="0.45"/>
  <circle cx="368" cy="920" r="13" fill="url(#spain-orange)"/>
  <circle cx="364" cy="915" r="6" fill="#ffdcae" opacity="0.6"/>
  <path d="M360 911 L358 902 L367 907 Z" fill="#c98f55"/>
  <path d="M375 909 L378 900 L381 909 Z" fill="#c98f55"/>
  <path d="M362 918 q6 4 12 0" fill="none" stroke="#7c4a20" stroke-width="1.8"/>
  <path d="M414 926 q11 -4 9 -15 q-5 8 -11 8 Z" fill="#c98f55"/>
  <path d="M378 936 L392 936 M400 934 L412 934" stroke="#b47c47" stroke-width="2"/>
</g>

<ellipse cx="556" cy="946" rx="44" ry="11" fill="url(#spain-shadow)"/>
<g data-obj="wicker-basket">
  <path d="M522 942 q-8 -42 8 -46 l32 0 q16 4 8 46 Z" fill="url(#spain-wood)"/>
  <path d="M522 942 q-8 -42 8 -46 l14 0 l0 46 Z" fill="#e0b183" opacity="0.75"/>
  <path d="M560 896 q8 4 8 46 l-12 0 q6 -24 0 -46 Z" fill="#5c3a1c" opacity="0.4"/>
  <path d="M524 908 L570 908 M523 920 L571 920 M522 932 L572 932" stroke="#8a5a30" stroke-width="2.4"/>
  <path d="M530 896 q16 -18 32 0" fill="none" stroke="#7d5228" stroke-width="4"/>
  <rect x="518" y="890" width="58" height="8" rx="3" fill="url(#spain-wood)"/>
  <rect x="518" y="890" width="58" height="3" rx="1.5" fill="#e8c090"/>
</g>

<ellipse cx="622" cy="944" rx="36" ry="10" fill="url(#spain-shadow)"/>
<g data-obj="melon">
  <ellipse cx="612" cy="920" rx="24" ry="22" fill="#3a5c2c"/>
  <ellipse cx="610" cy="917" rx="24" ry="22" fill="url(#spain-green)"/>
  <path d="M598 899 q6 20 0 38 M610 895 q5 22 0 44 M622 899 q-5 20 0 38" stroke="#3d6432" stroke-width="2.6" fill="none"/>
  <ellipse cx="599" cy="905" rx="8" ry="5" fill="#e2f2bd" opacity="0.85" transform="rotate(-35 599 905)"/>
  <path d="M592 904 a24 22 0 0 1 16 -9" fill="none" stroke="#f0fbd8" stroke-width="2.2" opacity="0.75"/>
  <path d="M610 895 q4 -8 10 -6" fill="none" stroke="#6b4526" stroke-width="3"/>
</g>

<polygon points="16,1058 252,1058 276,1108 40,1108" fill="#6b3a1f" opacity="0.22"/>
<rect x="18" y="656" width="212" height="410" fill="url(#spain-wooddark)"/>
<rect x="26" y="666" width="176" height="392" fill="url(#spain-wood)"/>
<rect x="26" y="666" width="176" height="392" fill="#3a2a16" opacity="0.28"/>
<rect x="202" y="666" width="28" height="392" fill="#4b3018" opacity="0.7"/>
<rect x="26" y="666" width="10" height="392" fill="#d2a06d" opacity="0.35"/>
<rect x="8" y="632" width="228" height="26" rx="5" fill="url(#spain-wood)"/>
<rect x="8" y="632" width="228" height="9" rx="4" fill="#e8c090"/>
<rect x="20" y="748" width="208" height="15" rx="3" fill="url(#spain-wood)"/>
<rect x="20" y="748" width="208" height="5" rx="2.5" fill="#e0b183"/>
<rect x="20" y="848" width="208" height="15" rx="3" fill="url(#spain-wood)"/>
<rect x="20" y="848" width="208" height="5" rx="2.5" fill="#e0b183"/>
<rect x="20" y="948" width="208" height="15" rx="3" fill="url(#spain-wood)"/>
<rect x="20" y="948" width="208" height="5" rx="2.5" fill="#e0b183"/>

<circle cx="62" cy="708" r="22" fill="#2b2b2b"/>
<circle cx="62" cy="705" r="22" fill="url(#spain-steel)"/>
<circle cx="62" cy="705" r="15" fill="#3a3a3a"/>
<ellipse cx="53" cy="696" rx="7" ry="4" fill="#e8eef2" opacity="0.5" transform="rotate(-35 53 696)"/>
<rect x="82" y="700" width="42" height="8" rx="4" fill="#3a3a3a"/>
<rect x="82" y="700" width="42" height="3" rx="2" fill="#7c8288"/>
<circle cx="170" cy="708" r="24" fill="#b8a284"/>
<circle cx="170" cy="704" r="24" fill="url(#spain-cream)"/>
<circle cx="170" cy="704" r="24" fill="none" stroke="#2f6fb3" stroke-width="4"/>
<circle cx="170" cy="704" r="10" fill="none" stroke="#4f95d6" stroke-width="2.5"/>
<path d="M152 692 a24 24 0 0 1 16 -12" fill="none" stroke="#ffffff" stroke-width="2.6" opacity="0.8"/>

<ellipse cx="140" cy="748" rx="34" ry="7" fill="#3a2a16" opacity="0.45"/>
<g data-obj="blue-jug">
  <path d="M116 744 q-12 -28 6 -34 l24 0 q18 6 6 34 Z" fill="url(#spain-blue)"/>
  <path d="M116 744 q-12 -28 6 -34 l10 0 l0 34 Z" fill="#9ccdf2" opacity="0.7"/>
  <path d="M146 712 q10 6 6 32 l-9 0 q5 -20 0 -32 Z" fill="#153a63" opacity="0.5"/>
  <rect x="124" y="702" width="20" height="10" rx="4" fill="#1c4b80"/>
  <rect x="124" y="702" width="20" height="3.5" rx="1.7" fill="#5f9fd4"/>
  <path d="M146 714 q14 6 10 18 q-4 10 -12 8" fill="none" stroke="#2f6fb3" stroke-width="5"/>
  <path d="M120 728 q28 -6 32 0" stroke="#f2c14e" stroke-width="3" fill="none"/>
  <path d="M121 716 q-3 14 -1 26" stroke="#e6f4ff" stroke-width="2.4" fill="none" opacity="0.8"/>
</g>

<ellipse cx="158" cy="840" rx="40" ry="8" fill="#3a2a16" opacity="0.4"/>
<g data-obj="paella-pan">
  <circle cx="150" cy="810" r="28" fill="#2f2f2f"/>
  <circle cx="150" cy="806" r="28" fill="url(#spain-steel)"/>
  <circle cx="150" cy="806" r="23" fill="#c9922f"/>
  <circle cx="150" cy="806" r="23" fill="url(#spain-yellow)" opacity="0.65"/>
  <path d="M150 783 A23 23 0 0 1 167 822 A23 23 0 0 0 150 783 Z" fill="#8f6512" opacity="0.4"/>
  <ellipse cx="140" cy="795" rx="10" ry="5" fill="#ffedbc" opacity="0.75"/>
  <path d="M136 800 q6 -8 14 -3 q-6 8 -14 3 Z" fill="url(#spain-red)"/>
  <path d="M154 794 q6 -8 14 -3 q-6 8 -14 3 Z" fill="url(#spain-red)"/>
  <path d="M144 816 q6 -7 13 -3 q-6 7 -13 3 Z" fill="url(#spain-red)"/>
  <path d="M131 812 a9 9 0 0 1 15 0 Z" fill="#f2c14e"/>
  <path d="M158 806 a8 8 0 0 1 14 0 Z" fill="#f2c14e"/>
  <path d="M160 818 q7 -6 12 1 q-8 5 -12 -1 Z" fill="#4a3b52"/>
  <circle cx="142" cy="810" r="2.4" fill="#5b8940"/>
  <circle cx="158" cy="800" r="2.4" fill="#5b8940"/>
  <circle cx="150" cy="822" r="2.4" fill="#5b8940"/>
  <circle cx="119" cy="806" r="5.5" fill="#5a5a5a"/>
  <circle cx="181" cy="806" r="5.5" fill="#4a4a4a"/>
  <path d="M128 790 a28 28 0 0 1 18 -12" fill="none" stroke="#eef4f8" stroke-width="2.4" opacity="0.7"/>
</g>

<ellipse cx="132" cy="850" rx="42" ry="7" fill="#3a2a16" opacity="0.4"/>
<g data-obj="bowl-stack">
  <path d="M102 848 q-10 -18 4 -20 l42 0 q14 2 4 20 Z" fill="url(#spain-cream)"/>
  <path d="M102 848 q-10 -18 4 -20 l18 0 l0 20 Z" fill="#fffdf6" opacity="0.75"/>
  <path d="M144 828 q10 2 4 20 l-10 0 q6 -12 2 -20 Z" fill="#9d8768" opacity="0.45"/>
  <path d="M106 830 q-8 -14 4 -16 l34 0 q12 2 4 16 Z" fill="url(#spain-tile)"/>
  <path d="M106 830 q-8 -14 4 -16 l14 0 l0 16 Z" fill="#f2f9ff" opacity="0.8"/>
  <path d="M110 814 q-6 -12 4 -14 l26 0 q10 2 4 14 Z" fill="url(#spain-yellow)"/>
  <path d="M110 814 q-6 -12 4 -14 l11 0 l0 14 Z" fill="#ffeeb0" opacity="0.8"/>
  <path d="M104 838 L152 838" stroke="#b8a284" stroke-width="2"/>
</g>

<circle cx="72" cy="906" r="24" fill="#7d4319"/>
<circle cx="72" cy="903" r="24" fill="url(#spain-copper)"/>
<circle cx="72" cy="903" r="17" fill="#c98a56"/>
<ellipse cx="60" cy="892" rx="8" ry="5" fill="#ffe6cc" opacity="0.7" transform="rotate(-35 60 892)"/>
<circle cx="45" cy="903" r="5" fill="#9c5f2f"/>
<circle cx="99" cy="903" r="5" fill="#9c5f2f"/>
<path d="M180 930 q-10 -26 4 -32 l18 0 q14 6 4 32 Z" fill="url(#spain-cream)"/>
<path d="M180 930 q-10 -26 4 -32 l8 0 l0 32 Z" fill="#fffdf6" opacity="0.7"/>
<rect x="184" y="890" width="16" height="9" rx="3" fill="#2f6fb3"/>
<path d="M182 916 q14 -4 24 0" stroke="#2f6fb3" stroke-width="2.4" fill="none"/>

<rect x="26" y="966" width="176" height="86" rx="4" fill="#4b3018"/>
<rect x="32" y="972" width="82" height="74" rx="3" fill="url(#spain-wood)"/>
<rect x="118" y="972" width="82" height="74" rx="3" fill="url(#spain-wood)"/>
<rect x="118" y="972" width="82" height="74" rx="3" fill="#3a2a16" opacity="0.25"/>
<rect x="38" y="978" width="70" height="62" rx="2" fill="none" stroke="#6b4526" stroke-width="2"/>
<rect x="124" y="978" width="70" height="62" rx="2" fill="none" stroke="#5c3a1c" stroke-width="2"/>
<circle cx="106" cy="1010" r="6" fill="url(#spain-brass)"/>
<circle cx="126" cy="1010" r="6" fill="url(#spain-brass)"/>
<rect x="18" y="1052" width="212" height="16" rx="3" fill="url(#spain-wooddark)"/>
<rect x="18" y="1052" width="212" height="5" rx="2.5" fill="#a97f4c"/>

<polygon points="392,1140 796,1140 800,1192 400,1196" fill="#6b3a1f" opacity="0.2"/>
<rect x="424" y="1110" width="18" height="82" fill="url(#spain-wooddark)"/>
<rect x="748" y="1110" width="18" height="82" fill="url(#spain-wooddark)"/>
<rect x="424" y="1110" width="6" height="82" fill="#c08b52" opacity="0.7"/>
<rect x="748" y="1110" width="6" height="82" fill="#c08b52" opacity="0.6"/>
<rect x="390" y="946" width="410" height="36" rx="8" fill="url(#spain-wood)"/>
<rect x="390" y="946" width="410" height="10" rx="5" fill="#e8c090"/>
<rect x="390" y="972" width="410" height="10" rx="5" fill="#5c3a1c" opacity="0.4"/>

<ellipse cx="486" cy="1188" rx="36" ry="9" fill="url(#spain-shadow)"/>
<ellipse cx="570" cy="1188" rx="40" ry="9" fill="url(#spain-shadow)"/>
<ellipse cx="644" cy="1188" rx="34" ry="9" fill="url(#spain-shadow)"/>
<ellipse cx="712" cy="1188" rx="32" ry="9" fill="url(#spain-shadow)"/>
<path d="M454 1186 Q450 1176 458 1172 L492 1164 Q508 1160 512 1170 L512 1180 Q510 1186 500 1187 L462 1189 Z" fill="#a8895a"/>
<path d="M454 1182 Q450 1172 458 1168 L492 1160 Q508 1156 512 1166 L512 1176 Q510 1182 500 1183 L462 1185 Z" fill="url(#spain-cream)"/>
<path d="M454 1182 L512 1176 L512 1182 L456 1188 Z" fill="#b89a68"/>
<path d="M460 1170 L466 1166 M472 1168 L478 1164 M484 1166 L490 1162" stroke="#c9a86a" stroke-width="2" fill="none"/>
<path d="M614 1186 Q610 1176 618 1172 L650 1164 Q664 1160 668 1170 L668 1180 Q666 1186 656 1187 L622 1189 Z" fill="#7c1229"/>
<path d="M614 1182 Q610 1172 618 1168 L650 1160 Q664 1156 668 1166 L668 1176 Q666 1182 656 1183 L622 1185 Z" fill="url(#spain-red)"/>
<path d="M614 1182 L668 1176 L668 1182 L616 1188 Z" fill="#2f2233"/>
<path d="M688 1190 Q684 1174 692 1168 L698 1142 Q702 1134 712 1136 L722 1140 Q728 1144 724 1154 L726 1176 Q726 1188 714 1189 Z" fill="#2f2233"/>
<path d="M692 1168 Q706 1160 724 1160 L724 1154 Q706 1152 694 1160 Z" fill="#57465e"/>
<path d="M688 1186 L726 1182 L726 1190 L690 1192 Z" fill="#1c1420"/>

<g data-obj="flamenco-shoe">
  <path d="M534 1186 Q530 1176 538 1172 L574 1164 Q590 1160 596 1168 L597 1179 Q596 1186 585 1187 L544 1190 Z" fill="#7c1229"/>
  <path d="M534 1182 Q530 1172 538 1168 L574 1160 Q590 1156 596 1164 L597 1175 Q596 1182 585 1183 L544 1186 Z" fill="url(#spain-red)"/>
  <path d="M572 1160 Q588 1156 595 1163 L596 1170 Q582 1165 570 1166 Z" fill="#f8a08c" opacity="0.7"/>
  <path d="M534 1182 L537 1190 L556 1189 L555 1180 Z" fill="#2f2233"/>
  <path d="M537 1187 L555 1186 L555 1190 L538 1191 Z" fill="url(#spain-yellow)"/>
  <path d="M538 1168 Q556 1157 573 1155 L574 1161 Q558 1162 541 1173 Z" fill="url(#spain-yellow)"/>
  <circle cx="556" cy="1161" r="3.6" fill="#f2c14e"/>
  <circle cx="556" cy="1161" r="1.5" fill="#8f1732"/>
  <path d="M580 1156 q7 -9 16 -3 q-8 9 -16 3 Z" fill="#f8a08c"/>
  <path d="M534 1178 L596 1171" stroke="#5e0d1e" stroke-width="1.6" fill="none"/>
</g>

<path d="M400 980 L790 980 L788 1128 L402 1128 Z" fill="url(#spain-cloth)"/>
<rect x="430" y="980" width="14" height="148" fill="#e0563f" opacity="0.28"/>
<rect x="512" y="980" width="14" height="148" fill="#e0563f" opacity="0.28"/>
<rect x="594" y="980" width="14" height="148" fill="#e0563f" opacity="0.28"/>
<rect x="676" y="980" width="14" height="148" fill="#e0563f" opacity="0.28"/>
<rect x="758" y="980" width="14" height="148" fill="#e0563f" opacity="0.28"/>
<rect x="400" y="1042" width="390" height="14" fill="#2f6fb3" opacity="0.2"/>
<rect x="400" y="1100" width="389" height="14" fill="#2f6fb3" opacity="0.2"/>
<rect x="400" y="980" width="390" height="14" fill="#8a6a52" opacity="0.16"/>
<polygon points="400,980 560,980 500,1128 402,1128" fill="#fffdf2" opacity="0.3"/>
<polygon points="700,980 790,980 788,1128 690,1128" fill="#9d8a7c" opacity="0.16"/>
<path d="M402 1128 q16 12 32 0 q16 12 32 0 q16 12 32 0 q16 12 32 0 q16 12 32 0 q16 12 32 0 q16 12 32 0 q16 12 32 0 q16 12 32 0 q16 12 32 0 q16 12 32 0 q16 12 32 0" fill="#dcc7a6"/>
<path d="M402 1128 q16 12 32 0 q16 12 32 0 q16 12 32 0 q16 12 32 0" fill="#f2e4cc"/>

<path d="M455 948 Q432 912 424 878 M455 948 Q444 906 440 872 M455 948 Q460 902 460 866 M455 948 Q472 906 482 876 M455 948 Q484 916 498 890" stroke="#5b8940" stroke-width="2.2" fill="none"/>
<circle cx="424" cy="876" r="6" fill="url(#spain-purple)"/>
<circle cx="440" cy="870" r="6" fill="url(#spain-purple)"/>
<circle cx="461" cy="866" r="7" fill="url(#spain-purple)"/>
<circle cx="483" cy="875" r="6" fill="url(#spain-purple)"/>
<circle cx="498" cy="889" r="6" fill="url(#spain-purple)"/>
<circle cx="432" cy="896" r="5" fill="#a78bfa"/>
<circle cx="470" cy="888" r="5" fill="#8b5cf6"/>
<circle cx="490" cy="906" r="5" fill="#6a5fa8"/>
<path d="M416 902 q-5 -18 3 -26 q8 8 3 26 Z" fill="url(#spain-purple)"/>
<path d="M414 878 l-4 -4 M420 884 l5 -5 M414 890 l-5 -4 M421 896 l5 -6" stroke="#6a5fa8" stroke-width="1.6" fill="none"/>
<path d="M416 902 q2 24 4 46" stroke="#5b8940" stroke-width="2" fill="none"/>
<path d="M497 918 q-5 -18 3 -26 q8 8 3 26 Z" fill="url(#spain-purple)"/>
<path d="M495 894 l-4 -4 M501 900 l5 -5 M495 906 l-5 -4 M502 912 l5 -6" stroke="#8579c0" stroke-width="1.6" fill="none"/>
<path d="M500 918 q-8 20 -14 32" stroke="#5b8940" stroke-width="2" fill="none"/>

<g data-obj="lightstick">
  <ellipse cx="452" cy="906" rx="10" ry="13" fill="#5b4f8f"/>
  <ellipse cx="452" cy="906" rx="10" ry="13" fill="url(#spain-purple)"/>
  <ellipse cx="452" cy="906" rx="7" ry="10" fill="#a99ada"/>
  <ellipse cx="449" cy="901" rx="3.4" ry="5" fill="#efe9fb" opacity="0.85"/>
  <ellipse cx="452" cy="906" rx="10" ry="13" fill="none" stroke="#4c4180" stroke-width="1.8"/>
  <rect x="445" y="918" width="14" height="7" rx="3" fill="#d3bd97"/>
  <rect x="447" y="924" width="10" height="21" rx="4" fill="url(#spain-cream)"/>
  <rect x="447" y="931" width="10" height="5" fill="#6355a6"/>
  <rect x="447" y="924" width="3.2" height="21" rx="1.6" fill="#fffdf6"/>
  <rect x="455" y="924" width="2.4" height="21" rx="1.2" fill="#a8926c" opacity="0.6"/>
</g>

<path d="M455 948 Q446 916 442 890 M455 948 Q463 918 468 896 M455 948 Q436 924 428 908" stroke="#6b8a46" stroke-width="2.2" fill="none"/>
<circle cx="442" cy="888" r="5.5" fill="url(#spain-purple)"/>
<circle cx="468" cy="894" r="5.5" fill="url(#spain-purple)"/>
<circle cx="428" cy="906" r="5" fill="#9b8cc9"/>
<circle cx="462" cy="920" r="4.5" fill="#a78bfa"/>
<circle cx="437" cy="928" r="4" fill="#8579c0"/>
<circle cx="465" cy="936" r="4" fill="#6a5fa8"/>

<ellipse cx="468" cy="1012" rx="52" ry="12" fill="url(#spain-shadow)"/>
<g data-obj="flower-vase">
  <path d="M436 944 L474 944 L486 986 Q478 1010 455 1010 Q432 1010 424 986 Z" fill="url(#spain-cream)"/>
  <path d="M436 944 L456 944 L456 1010 Q436 1008 428 988 Z" fill="#fffdf6" opacity="0.7"/>
  <path d="M474 944 L486 986 Q482 1004 466 1009 Q478 998 478 984 Q478 964 470 944 Z" fill="#9d8768" opacity="0.5"/>
  <path d="M430 966 q26 10 50 0 q-2 12 -4 20 q-22 8 -42 0 Z" fill="#2f6fb3" opacity="0.5"/>
  <rect x="432" y="940" width="46" height="9" rx="4" fill="#fffaef"/>
  <path d="M434 954 q22 8 42 0" stroke="#f2c14e" stroke-width="2.5" fill="none"/>
  <path d="M432 950 q-4 26 6 46" stroke="#ffffff" stroke-width="2.6" fill="none" opacity="0.75"/>
</g>

<ellipse cx="530" cy="1038" rx="44" ry="9" fill="url(#spain-shadow)"/>
<g data-obj="castanets">
  <ellipse cx="508" cy="1024" rx="15" ry="13" fill="#5c3a1c"/>
  <ellipse cx="508" cy="1021" rx="15" ry="13" fill="url(#spain-wood)"/>
  <ellipse cx="504" cy="1016" rx="7" ry="4.5" fill="#e8c090" opacity="0.9"/>
  <path d="M493 1019 A15 13 0 0 0 523 1019" fill="none" stroke="#5c3a1c" stroke-width="1.8"/>
  <ellipse cx="544" cy="1028" rx="15" ry="13" fill="#5c3a1c"/>
  <ellipse cx="544" cy="1025" rx="15" ry="13" fill="url(#spain-wood)"/>
  <ellipse cx="540" cy="1020" rx="7" ry="4.5" fill="#e8c090" opacity="0.9"/>
  <path d="M529 1023 A15 13 0 0 0 559 1023" fill="none" stroke="#5c3a1c" stroke-width="1.8"/>
  <path d="M513 1010 Q526 999 539 1013" fill="none" stroke="#c62b4a" stroke-width="3.5" stroke-linecap="round"/>
  <circle cx="526" cy="1004" r="4" fill="#c62b4a"/>
  <circle cx="526" cy="1004" r="1.6" fill="#8f1732"/>
</g>

<path d="M536 1036 q22 -10 44 -2 q-6 12 -22 12 q-18 0 -22 -10 Z" fill="#e6d3ab"/>
<path d="M536 1036 q22 -10 44 -2 q-10 5 -24 4 q-14 -1 -20 -2 Z" fill="#fdf6e6"/>
<ellipse cx="604" cy="1036" rx="24" ry="10" fill="#5c3a1c"/>
<ellipse cx="604" cy="1030" rx="24" ry="10" fill="url(#spain-wood)"/>
<ellipse cx="601" cy="1026" rx="15" ry="5" fill="#e8c090"/>
<ellipse cx="646" cy="1072" rx="15" ry="13" fill="#5c3a1c"/>
<ellipse cx="646" cy="1069" rx="15" ry="13" fill="url(#spain-wood)"/>
<ellipse cx="642" cy="1064" rx="7" ry="4.5" fill="#e8c090" opacity="0.9"/>
<path d="M638 1057 q8 -8 16 0" fill="none" stroke="#c62b4a" stroke-width="3" stroke-linecap="round"/>
<path d="M686 1032 q-8 -26 8 -30 l24 0 q16 4 8 30 Z" fill="url(#spain-steel)"/>
<path d="M686 1032 q-8 -26 8 -30 l11 0 l0 30 Z" fill="#dbe3e9" opacity="0.75"/>
<rect x="704" y="984" width="8" height="22" rx="4" fill="#a9743f"/>
<ellipse cx="708" cy="982" rx="7" ry="6" fill="#c48f57"/>
<path d="M710 1012 q-3 -14 6 -16 l12 0 q9 2 6 16 q-3 10 -12 10 q-9 0 -12 -10 Z" fill="url(#spain-purple)" opacity="0.9"/>
<path d="M712 1000 q4 -8 14 0 q-3 8 -14 0 Z" fill="#6a5fa8"/>
<rect x="715" y="988" width="8" height="8" rx="2" fill="#a9743f"/>
<path d="M600 964 q-4 -16 7 -19 l14 0 q11 3 7 19 q-3 12 -14 12 q-11 0 -14 -12 Z" fill="url(#spain-glass)"/>
<path d="M602 972 q4 -7 26 0 q-3 10 -13 10 q-10 0 -13 -10 Z" fill="#f7a94b"/>
<ellipse cx="614" cy="994" rx="12" ry="4" fill="#dff0f8" opacity="0.9"/>
<circle cx="558" cy="964" r="12" fill="url(#spain-red)"/>
<circle cx="553" cy="959" r="4" fill="#f8a08c" opacity="0.8"/>
<circle cx="536" cy="968" r="9" fill="url(#spain-green)"/>
<path d="M496 976 q-3 -20 6 -24 l10 0 q9 4 6 24 Z" fill="url(#spain-green)"/>
<rect x="500" y="946" width="9" height="10" rx="3" fill="#4e6b2e"/>
<path d="M400 1010 q26 -14 52 -2 q-8 18 -30 16 q-20 -2 -22 -14 Z" fill="#e6d3ab"/>
<ellipse cx="426" cy="1008" rx="22" ry="9" fill="url(#spain-cream)"/>
<ellipse cx="416" cy="1006" rx="7" ry="4" fill="#e0563f"/>
<ellipse cx="432" cy="1008" rx="6" ry="4" fill="#7c9a52"/>

<ellipse cx="676" cy="1000" rx="26" ry="7" fill="url(#spain-shadow)"/>
<g data-obj="red-wine">
  <path d="M652 962 q-4 -18 7 -21 l14 0 q11 3 7 21 q-3 13 -14 13 q-11 0 -14 -13 Z" fill="url(#spain-glass)"/>
  <path d="M654 971 q4 -8 26 0 q-3 11 -13 11 q-10 0 -13 -11 Z" fill="url(#spain-red)"/>
  <path d="M655 948 q3 -6 6 -6 l0 26 q-5 -8 -6 -20 Z" fill="#ffffff" opacity="0.7"/>
  <rect x="664" y="975" width="4" height="20" fill="#dff0f8" opacity="0.9"/>
  <ellipse cx="666" cy="997" rx="13" ry="4" fill="#dff0f8" opacity="0.92"/>
</g>

<ellipse cx="775" cy="1058" rx="34" ry="9" fill="url(#spain-shadow)"/>
<g data-obj="wine-bottle">
  <path d="M748 1010 q-4 -18 8 -22 l14 0 q12 4 8 22 l0 34 q0 10 -15 10 q-15 0 -15 -10 Z" fill="url(#spain-leaf)"/>
  <path d="M748 1010 q-4 -18 8 -22 l5 0 l0 66 q-13 0 -13 -10 Z" fill="#9dc472" opacity="0.65"/>
  <path d="M774 992 q6 6 4 18 l0 34 q0 8 -10 10 q6 -6 6 -14 l0 -34 q0 -10 0 -14 Z" fill="#25401d" opacity="0.55"/>
  <rect x="756" y="980" width="14" height="12" rx="3" fill="#7c1229"/>
  <rect x="756" y="980" width="5" height="12" rx="2.5" fill="#b8465c"/>
  <rect x="746" y="1022" width="34" height="16" fill="url(#spain-yellow)"/>
  <path d="M750 1030 L776 1030" stroke="#b8801a" stroke-width="2"/>
  <path d="M750 996 q-2 20 -1 44" stroke="#d8f0bc" stroke-width="2.4" fill="none" opacity="0.7"/>
</g>

<ellipse cx="702" cy="1102" rx="38" ry="9" fill="url(#spain-shadow)"/>
<g data-obj="bread-basket">
  <path d="M674 1096 q-7 -24 7 -28 l32 0 q14 4 7 28 Z" fill="url(#spain-wood)"/>
  <path d="M674 1096 q-7 -24 7 -28 l14 0 l0 28 Z" fill="#e0b183" opacity="0.75"/>
  <path d="M711 1068 q8 4 6 28 l-10 0 q4 -16 0 -28 Z" fill="#5c3a1c" opacity="0.4"/>
  <path d="M678 1078 L712 1078 M678 1088 L712 1088" stroke="#7d5228" stroke-width="2"/>
  <ellipse cx="694" cy="1064" rx="17" ry="10" fill="#e8b878"/>
  <ellipse cx="690" cy="1061" rx="11" ry="7" fill="#fbdfae"/>
  <ellipse cx="686" cy="1058" rx="5" ry="3" fill="#fff4dd" opacity="0.9"/>
  <path d="M684 1062 L690 1056 M694 1063 L700 1057" stroke="#c9964f" stroke-width="2"/>
</g>

<ellipse cx="648" cy="1130" rx="32" ry="8" fill="url(#spain-shadow)"/>
<g data-obj="lemon-half">
  <ellipse cx="640" cy="1112" rx="24" ry="22" fill="#b98f16"/>
  <ellipse cx="639" cy="1109" rx="24" ry="22" fill="url(#spain-lemon)"/>
  <circle cx="639" cy="1109" r="17" fill="#fdf6cc"/>
  <path d="M639 1092 L639 1126 M622 1109 L656 1109 M627 1097 L651 1121 M651 1097 L627 1121" stroke="#e8cf6a" stroke-width="2.4"/>
  <circle cx="639" cy="1109" r="4" fill="#fffdf0"/>
  <path d="M623 1099 a24 22 0 0 1 14 -12" fill="none" stroke="#fffce8" stroke-width="2.4" opacity="0.9"/>
</g>

<polygon points="248,1122 396,1122 420,1170 268,1170" fill="#6b3a1f" opacity="0.22"/>
<rect x="256" y="1052" width="124" height="70" rx="4" fill="url(#spain-wooddark)"/>
<rect x="262" y="1058" width="112" height="58" rx="3" fill="url(#spain-wood)"/>
<rect x="262" y="1058" width="112" height="10" fill="#e0b183"/>
<rect x="262" y="1080" width="112" height="8" fill="#5c3a1c" opacity="0.5"/>
<rect x="262" y="1100" width="112" height="8" fill="#5c3a1c" opacity="0.5"/>
<rect x="268" y="1004" width="104" height="52" rx="4" fill="#4b3018"/>
<rect x="274" y="1010" width="92" height="42" rx="3" fill="url(#spain-wood)"/>
<rect x="274" y="1010" width="92" height="8" fill="#e0b183"/>
<circle cx="292" cy="1000" r="14" fill="url(#spain-red)"/>
<circle cx="287" cy="994" r="5" fill="#f8a08c" opacity="0.8"/>
<circle cx="318" cy="996" r="13" fill="url(#spain-red)"/>
<circle cx="344" cy="1000" r="14" fill="url(#spain-red)"/>
<circle cx="339" cy="994" r="5" fill="#f8a08c" opacity="0.7"/>
<path d="M280 988 q-4 -12 4 -16 l6 0 q8 4 4 16 Z" fill="url(#spain-green)"/>

<g data-obj="aubergine">
  <path d="M336 1000 q-16 -6 -16 -20 q0 -14 14 -18 q14 -4 20 6 q6 10 -2 22 q-6 10 -16 10 Z" fill="url(#spain-purple)"/>
  <path d="M336 1000 q-16 -6 -16 -20 q0 -14 14 -18 q-4 18 2 38 Z" fill="#8f74a8" opacity="0.7"/>
  <path d="M352 968 q6 10 -2 22 q-6 10 -16 10 q12 -6 16 -18 q3 -8 2 -14 Z" fill="#332750" opacity="0.55"/>
  <ellipse cx="329" cy="977" rx="5" ry="8" fill="#d5c6f0" opacity="0.7" transform="rotate(-20 329 977)"/>
  <path d="M348 964 q10 -4 12 4 q-8 6 -14 2 Z" fill="#5c7a3a"/>
  <rect x="345" y="956" width="5" height="12" rx="2" fill="#6b9a52"/>
</g>

<polygon points="292,1200 388,1200 380,1140 292,1140" fill="#6b3a1f" opacity="0.14"/>
<path d="M298 1198 L292 1140 L376 1140 L370 1198 Z" fill="url(#spain-terra)"/>
<path d="M298 1198 L292 1140 L320 1140 L324 1198 Z" fill="#f0a678" opacity="0.6"/>
<path d="M360 1140 L376 1140 L370 1198 L352 1198 Z" fill="#7c3a1c" opacity="0.42"/>
<rect x="286" y="1126" width="96" height="18" rx="4" fill="url(#spain-terra2)"/>
<rect x="286" y="1126" width="96" height="6" rx="3" fill="#f7c19c"/>
<path d="M334 1126 Q302 1092 286 1100 Q298 1124 334 1128 Z" fill="url(#spain-leaf)"/>
<path d="M340 1126 Q370 1084 382 1096 Q374 1120 340 1128 Z" fill="#7c9a52"/>
<circle cx="292" cy="1096" r="7" fill="url(#spain-red)"/>

<g data-obj="sunflower">
  <circle cx="374" cy="1084" r="20" fill="#c98115"/>
  <circle cx="374" cy="1084" r="20" fill="url(#spain-yellow)"/>
  <path d="M374 1060 L380 1074 L368 1074 Z M398 1084 L384 1090 L384 1078 Z M374 1108 L368 1094 L380 1094 Z M350 1084 L364 1078 L364 1090 Z M391 1067 L382 1079 L379 1072 Z M391 1101 L379 1096 L386 1090 Z M357 1101 L366 1089 L369 1096 Z M357 1067 L369 1072 L362 1078 Z" fill="#ffe9a8"/>
  <circle cx="374" cy="1084" r="11" fill="#6b4526"/>
  <circle cx="371" cy="1081" r="4.5" fill="#a06d3c"/>
  <path d="M360 1074 a20 20 0 0 1 12 -10" fill="none" stroke="#fff6d0" stroke-width="2.4" opacity="0.85"/>
</g>

<path d="M400 1128 Q384 1104 392 1082 Q400 1062 408 1064 Q416 1062 420 1080 Q424 1102 412 1128 Z" fill="url(#spain-leaf)"/>
<path d="M400 1128 Q384 1104 392 1082 Q400 1062 407 1064 L407 1128 Z" fill="#8cb862" opacity="0.6"/>
<circle cx="406" cy="1086" r="6" fill="#3f6134"/>

<ellipse cx="404" cy="1198" rx="34" ry="9" fill="url(#spain-shadow)"/>
<g data-obj="clay-amphora">
  <path d="M384 1196 q-10 -34 6 -44 q-6 -16 6 -20 l8 0 q12 4 6 20 q16 10 6 44 Z" fill="url(#spain-terra)"/>
  <path d="M384 1196 q-10 -34 6 -44 q-6 -16 6 -20 l3 0 l0 64 Z" fill="#f0a678" opacity="0.6"/>
  <path d="M404 1132 q12 4 6 20 q16 10 6 44 l-12 0 q10 -32 -4 -44 q6 -14 4 -20 Z" fill="#7c3a1c" opacity="0.4"/>
  <rect x="392" y="1126" width="16" height="8" rx="3" fill="#9e4a28"/>
  <rect x="392" y="1126" width="6" height="8" rx="3" fill="#e08a58"/>
  <path d="M386 1160 q14 -5 28 0" stroke="#f7c19c" stroke-width="2.5" fill="none"/>
</g>

<polygon points="0,1046 240,1046 264,1096 12,1096" fill="#6b3a1f" opacity="0.18"/>
<rect x="42" y="1160" width="16" height="40" fill="url(#spain-wooddark)"/>
<rect x="196" y="1160" width="16" height="40" fill="url(#spain-wooddark)"/>
<rect x="4" y="1078" width="244" height="28" rx="7" fill="url(#spain-wood)"/>
<rect x="4" y="1078" width="244" height="11" rx="5" fill="#e8c090"/>
<path d="M12 1106 L242 1106 L244 1200 L10 1200 Z" fill="#f8eed8"/>
<path d="M12 1132 L243 1132 M12 1166 L244 1166 M12 1198 L244 1198" stroke="#4f95d6" stroke-width="7" opacity="0.32" fill="none"/>
<path d="M52 1106 L54 1200 M118 1106 L119 1200 M184 1106 L184 1200" stroke="#4f95d6" stroke-width="7" opacity="0.32" fill="none"/>
<path d="M10 1112 L244 1112" stroke="#c9b294" stroke-width="6" opacity="0.45" fill="none"/>
<polygon points="12,1106 92,1106 62,1200 10,1200" fill="#fffdf2" opacity="0.28"/>
<circle cx="80" cy="1078" r="28" fill="#c9b294"/>
<circle cx="80" cy="1074" r="28" fill="url(#spain-cream)"/>
<circle cx="80" cy="1074" r="28" fill="none" stroke="#e0563f" stroke-width="3.5"/>
<path d="M80 1058 a16 16 0 0 1 14 8 l-14 8 Z" fill="#f7a94b"/>
<path d="M80 1074 l14 8 a16 16 0 0 1 -28 0 Z" fill="#f28c28"/>
<path d="M80 1074 l-14 -8 a16 16 0 0 1 14 -8 Z" fill="#ffb85c"/>

<ellipse cx="184" cy="1088" rx="38" ry="9" fill="url(#spain-shadow)"/>
<g data-obj="honey-jug">
  <path d="M158 1082 q-14 -32 6 -40 l28 0 q20 8 6 40 Z" fill="url(#spain-yellow)"/>
  <path d="M158 1082 q-14 -32 6 -40 l11 0 l0 40 Z" fill="#ffeeb0" opacity="0.75"/>
  <path d="M188 1044 q12 8 4 38 l-12 0 q8 -22 2 -38 Z" fill="#8f6512" opacity="0.4"/>
  <rect x="166" y="1028" width="24" height="14" rx="5" fill="#c98115"/>
  <rect x="166" y="1028" width="9" height="14" rx="4" fill="#f2ce74"/>
  <path d="M190 1054 q17 6 13 19 q-5 11 -15 8" fill="none" stroke="#d99b2b" stroke-width="6"/>
  <path d="M161 1066 q22 -5 36 0" stroke="#b8801a" stroke-width="2.5" fill="none"/>
</g>

<ellipse cx="130" cy="1076" rx="30" ry="7" fill="url(#spain-shadow)"/>
<g data-obj="olive-bowl">
  <ellipse cx="122" cy="1068" rx="22" ry="10" fill="#b8a284"/>
  <ellipse cx="122" cy="1062" rx="22" ry="10" fill="url(#spain-cream)"/>
  <ellipse cx="122" cy="1062" rx="15" ry="6" fill="#e6d3ab"/>
  <ellipse cx="114" cy="1059" rx="6" ry="4.5" fill="#5b8940"/>
  <ellipse cx="126" cy="1061" rx="6" ry="4.5" fill="#8cb862"/>
  <ellipse cx="121" cy="1056" rx="5" ry="4" fill="#8f1732"/>
  <ellipse cx="112" cy="1057" rx="2.4" ry="1.6" fill="#d8ecb4" opacity="0.85"/>
  <path d="M102 1060 a22 10 0 0 1 14 -6" fill="none" stroke="#fffdf6" stroke-width="2" opacity="0.85"/>
</g>

<ellipse cx="46" cy="1186" rx="26" ry="8" fill="url(#spain-shadow)"/>
<g data-obj="pear">
  <path d="M30 1178 q-14 -8 -12 -22 q2 -12 10 -14 q2 -12 8 -14 q8 2 8 14 q10 4 10 16 q0 14 -12 20 q-6 4 -12 0 Z" fill="#b8901c"/>
  <path d="M30 1178 q-14 -8 -12 -22 q2 -12 10 -14 q2 -12 6 -14 l0 52 Z" fill="url(#spain-lemon)"/>
  <path d="M44 1142 q10 4 10 16 q0 14 -12 20 q-4 3 -8 1 q10 -6 12 -20 q2 -12 -2 -17 Z" fill="#8f6a12" opacity="0.45"/>
  <ellipse cx="27" cy="1152" rx="4" ry="6" fill="#fdf3a8" opacity="0.85" transform="rotate(-20 27 1152)"/>
  <rect x="34" y="1122" width="4" height="12" rx="2" fill="#6b4526"/>
  <path d="M38 1128 q12 -8 16 0 q-10 8 -16 0 Z" fill="#6b9a52"/>
</g>

<ellipse cx="128" cy="1196" rx="34" ry="8" fill="url(#spain-shadow)"/>
<g data-obj="cheese-wedge">
  <path d="M96 1186 L152 1176 L150 1150 Z" fill="url(#spain-lemon)"/>
  <path d="M96 1186 L152 1176 L152 1184 L98 1194 Z" fill="#c9a72c"/>
  <path d="M126 1181 L152 1176 L152 1184 L128 1189 Z" fill="#9c7c12" opacity="0.5"/>
  <circle cx="126" cy="1176" r="4" fill="#c9a72c"/>
  <circle cx="140" cy="1170" r="3" fill="#c9a72c"/>
  <circle cx="132" cy="1163" r="2.5" fill="#c9a72c"/>
  <path d="M100 1183 L146 1174" stroke="#fff6cc" stroke-width="2" opacity="0.7"/>
</g>

<ellipse cx="190" cy="1194" rx="30" ry="8" fill="url(#spain-shadow)"/>
<g data-obj="grapes">
  <circle cx="176" cy="1160" r="7" fill="url(#spain-purple)"/>
  <circle cx="190" cy="1160" r="7" fill="url(#spain-purple)"/>
  <circle cx="183" cy="1172" r="7" fill="url(#spain-purple)"/>
  <circle cx="169" cy="1172" r="7" fill="url(#spain-purple)"/>
  <circle cx="197" cy="1172" r="7" fill="url(#spain-purple)"/>
  <circle cx="176" cy="1184" r="7" fill="url(#spain-purple)"/>
  <circle cx="190" cy="1184" r="7" fill="url(#spain-purple)"/>
  <circle cx="174" cy="1157" r="2.4" fill="#e0d8f8" opacity="0.85"/>
  <circle cx="181" cy="1169" r="2.2" fill="#e0d8f8" opacity="0.7"/>
  <path d="M183 1152 q4 -12 12 -14" fill="none" stroke="#6b4526" stroke-width="3"/>
  <path d="M195 1138 q12 -6 16 2 q-12 6 -16 -2 Z" fill="#6b9a52"/>
</g>

<ellipse cx="238" cy="1192" rx="30" ry="8" fill="url(#spain-shadow)"/>
<g data-obj="candlestick">
  <rect x="214" y="1180" width="34" height="9" rx="3" fill="url(#spain-brass)"/>
  <rect x="214" y="1180" width="34" height="3" rx="1.5" fill="#ffedb8"/>
  <rect x="226" y="1154" width="10" height="26" fill="#a97c2c"/>
  <rect x="226" y="1154" width="3.6" height="26" fill="#ffe0a0"/>
  <rect x="233" y="1154" width="3" height="26" fill="#6f5210" opacity="0.6"/>
  <rect x="222" y="1148" width="18" height="8" rx="3" fill="url(#spain-brass)"/>
  <rect x="227" y="1130" width="9" height="20" rx="3" fill="url(#spain-cream)"/>
  <rect x="227" y="1130" width="3" height="20" rx="1.5" fill="#fffdf6"/>
  <ellipse cx="231" cy="1122" rx="9" ry="10" fill="url(#spain-glow)"/>
  <path d="M231 1128 q6 -5 0 -10 q-6 5 0 10 Z" fill="#ffd982"/>
</g>

<rect x="0" y="880" width="800" height="320" fill="#ffb46b" opacity="0.09"/>
<polygon points="0,400 176,400 88,924 0,924" fill="#fff4d4" opacity="0.14"/>
<polygon points="452,400 552,400 502,760 432,760" fill="#fff4d4" opacity="0.08"/>
<rect x="0" y="0" width="800" height="1200" fill="url(#spain-sheen)" opacity="0.06"/>

</svg>`
});
