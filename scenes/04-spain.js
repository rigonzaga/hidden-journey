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
    <stop offset="0.6" stop-color="#3f2f2c"/>
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

  <radialGradient id="spain-contact" cx="0.5" cy="0.5" r="0.5">
    <stop offset="0" stop-color="#3a1c0c" stop-opacity="0.55"/>
    <stop offset="0.5" stop-color="#3a1c0c" stop-opacity="0.26"/>
    <stop offset="1" stop-color="#3a1c0c" stop-opacity="0"/>
  </radialGradient>
  <linearGradient id="spain-castleft" x1="0" y1="0" x2="1" y2="0.35">
    <stop offset="0" stop-color="#5c3118" stop-opacity="0.34"/>
    <stop offset="1" stop-color="#5c3118" stop-opacity="0"/>
  </linearGradient>
  <linearGradient id="spain-shelfback" x1="0.1" y1="0" x2="0.9" y2="1">
    <stop offset="0" stop-color="#4b3018"/>
    <stop offset="1" stop-color="#241605"/>
  </linearGradient>
  <linearGradient id="spain-lip" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#f0cb96"/>
    <stop offset="0.45" stop-color="#b8813f"/>
    <stop offset="1" stop-color="#6b4526"/>
  </linearGradient>
</defs>
<rect x="0" y="0" width="800" height="1200" fill="#f0dfc0"/>
<rect x="0" y="0" width="800" height="400" fill="url(#spain-sky)"/>
<ellipse cx="150" cy="86" rx="256" ry="216" fill="url(#spain-halo)"/>
<ellipse cx="150" cy="86" rx="134" ry="120" fill="url(#spain-halo)" opacity="0.7"/>
<g data-obj="sun">
  <circle cx="150" cy="80" r="34" fill="#f4c65a"/>
  <circle cx="150" cy="79" r="34" fill="url(#spain-sunball)"/>
  <path d="M150 45 A34 34 0 0 1 175 105 A34 34 0 0 0 150 45 Z" fill="#f2b53f" opacity="0.55"/>
  <ellipse cx="137" cy="66" rx="12" ry="9" fill="#fffef6" opacity="0.85" transform="rotate(-38 137 66)"/>
  <circle cx="150" cy="79" r="34" fill="none" stroke="#fff6cf" stroke-width="2.6" opacity="0.9"/>
  <path d="M124 53 A34 34 0 0 1 168 48" fill="none" stroke="#ffffff" stroke-width="3" opacity="0.55" stroke-linecap="round"/>
</g>
<ellipse cx="452" cy="70" rx="56" ry="21" fill="url(#spain-cloud)" opacity="0.92"/>
<ellipse cx="496" cy="61" rx="36" ry="16" fill="url(#spain-cloud)" opacity="0.9"/>
<ellipse cx="470" cy="82" rx="46" ry="10" fill="#c3b7c9" opacity="0.3"/>
<ellipse cx="700" cy="106" rx="48" ry="17" fill="url(#spain-cloud)" opacity="0.85"/>
<ellipse cx="736" cy="96" rx="28" ry="12" fill="url(#spain-cloud)" opacity="0.8"/>
<ellipse cx="710" cy="116" rx="40" ry="8" fill="#b8adc4" opacity="0.26"/>
<path d="M256 152 q7 -6 14 0 q7 -6 14 0" fill="none" stroke="#40606f" stroke-width="2.4" stroke-linecap="round"/>
<path d="M660 176 q6 -5 12 0 q6 -5 12 0" fill="none" stroke="#40606f" stroke-width="2.1" stroke-linecap="round"/>
<g data-obj="hot-balloon" transform="translate(6,6)">
  <path d="M70 132 q-24 4 -24 26 q0 20 24 34 q24 -14 24 -34 q0 -22 -24 -26 Z" fill="url(#spain-red)"/>
  <path d="M70 132 q-24 4 -24 26 q0 20 24 34 q-8 -30 0 -60 Z" fill="url(#spain-yellow)"/>
  <path d="M82 138 q10 8 10 20 q0 12 -10 24 q6 -22 0 -44 Z" fill="url(#spain-bluedeep)"/>
  <path d="M56 140 q-8 8 -8 18 q0 10 6 18 q-4 -20 2 -36 Z" fill="#ffffff" opacity="0.32"/>
  <path d="M70 132 q-24 4 -24 26 q6 -18 24 -22 q18 4 24 22 q0 -22 -24 -26 Z" fill="#ffffff" opacity="0.25"/>
  <path d="M60 192 L80 192 L78 200 L62 200 Z" fill="url(#spain-wood)"/>
  <path d="M62 186 L64 194 M78 186 L76 194" stroke="#6b4526" stroke-width="1.6"/>
</g>
<g data-obj="kite" transform="translate(-6,6)">
  <path d="M300 118 L322 148 L300 176 L278 148 Z" fill="url(#spain-red)"/>
  <path d="M300 118 L322 148 L300 176 Z" fill="#a8203a" opacity="0.9"/>
  <path d="M300 118 L288 148 L300 176 L278 148 Z" fill="#f2907a" opacity="0.55"/>
  <path d="M278 148 L322 148 M300 118 L300 176" stroke="#ffe08a" stroke-width="2"/>
  <path d="M282 136 L296 122" stroke="#ffffff" stroke-width="2.4" opacity="0.6" stroke-linecap="round"/>
  <path d="M300 176 q-8 8 2 14" fill="none" stroke="#7d5228" stroke-width="2"/>
  <path d="M296 182 L288 186 L296 190 Z" fill="url(#spain-blue)"/>
</g>
<g data-obj="dove" transform="translate(380,28)">
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

<path d="M470 300 L470 262 L512 262 L512 246 L556 246 L556 268 L620 268 L620 254 L678 254 L678 278 L800 278 L800 330 L470 330 Z" fill="#c9c2c4" opacity="0.28"/>
<path d="M-10 292 L-10 268 L40 268 L40 278 L96 278 L96 262 L150 262 L150 286 L206 286 L206 330 L-10 330 Z" fill="#b9b2b8" opacity="0.2"/>

<rect x="678" y="296" width="142" height="104" fill="url(#spain-facadefar)"/>
<rect x="788" y="296" width="32" height="104" fill="url(#spain-side)" opacity="0.7"/>
<polygon points="672,298 826,298 816,272 682,272" fill="url(#spain-rooffar)"/>
<polygon points="672,298 826,298 824,290 670,290" fill="#f0a680" opacity="0.7"/>
<path d="M706 274 L698 298 M742 273 L736 298 M778 273 L774 298" stroke="#9c6552" stroke-width="1.6" opacity="0.5"/>
<rect x="700" y="320" width="44" height="48" rx="3" fill="url(#spain-bluedeep)"/>
<rect x="700" y="320" width="19" height="48" fill="#6f9fc0" opacity="0.65"/>
<path d="M700 320 L744 320 L744 331 L700 333 Z" fill="#2f4b60" opacity="0.5"/>
<rect x="696" y="368" width="52" height="6" rx="2" fill="#d08a68"/>
<path d="M698 374 L708 388 L740 388 L748 374 Z" fill="#8a6a52" opacity="0.2"/>

<rect x="500" y="268" width="184" height="132" fill="url(#spain-facadefar)"/>
<rect x="644" y="268" width="40" height="132" fill="url(#spain-side)" opacity="0.65"/>
<polygon points="494,270 690,270 680,244 504,244" fill="url(#spain-rooffar)"/>
<polygon points="494,270 690,270 688,260 492,260" fill="#efa07c" opacity="0.8"/>
<path d="M534 246 L526 270 M574 245 L568 270 M614 245 L610 270 M654 246 L650 270" stroke="#9c6552" stroke-width="1.6" opacity="0.5"/>
<rect x="578" y="236" width="64" height="30" rx="3" fill="url(#spain-facadefar)"/>
<rect x="578" y="236" width="64" height="7" rx="3" fill="#fffaef" opacity="0.85"/>
<rect x="578" y="236" width="10" height="30" fill="#fffdf4" opacity="0.5"/>
<g data-obj="blue-dome" transform="translate(10,15)">
  <ellipse cx="600" cy="218" rx="34" ry="30" fill="url(#spain-bluedeep)"/>
  <path d="M566 218 A34 30 0 0 1 600 188 A22 26 0 0 0 580 234 Z" fill="#b8d4e6" opacity="0.75"/>
  <path d="M600 188 A34 30 0 0 1 634 218 A34 30 0 0 1 616 244 A30 30 0 0 0 600 188 Z" fill="#1f3d52" opacity="0.5"/>
  <path d="M566 218 A34 30 0 0 1 634 218" fill="none" stroke="#d8ecf7" stroke-width="2.6" opacity="0.75"/>
  <path d="M600 188 L600 248 M578 195 L580 243 M622 195 L620 243" stroke="#3d6a88" stroke-width="1.6" fill="none" opacity="0.8"/>
  <ellipse cx="586" cy="203" rx="9" ry="6" fill="#ffffff" opacity="0.5" transform="rotate(-36 586 203)"/>
  <ellipse cx="600" cy="248" rx="34" ry="5" fill="#274558" opacity="0.5"/>
</g>
<rect x="516" y="300" width="42" height="50" rx="3" fill="url(#spain-bluedeep)"/>
<rect x="516" y="300" width="18" height="50" fill="#6f9fc0" opacity="0.6"/>
<path d="M516 300 L558 300 L558 311 L516 313 Z" fill="#2f4b60" opacity="0.5"/>
<rect x="512" y="350" width="50" height="6" rx="2" fill="#d08a68"/>
<rect x="590" y="330" width="76" height="7" rx="2" fill="#f4e6cd"/>
<rect x="590" y="330" width="76" height="2.5" rx="1.2" fill="#ffffff" opacity="0.8"/>
<path d="M594 337 L594 368 M604 337 L604 368 M614 337 L614 368 M624 337 L624 368 M634 337 L634 368 M644 337 L644 368 M654 337 L654 368 M663 337 L663 368" stroke="#3c3040" stroke-width="2.2"/>
<rect x="590" y="366" width="76" height="5" rx="2" fill="#3c3040"/>
<path d="M600 362 L622 362 L619 342 L603 342 Z" fill="url(#spain-terra)"/>
<ellipse cx="611" cy="338" rx="14" ry="8" fill="url(#spain-leaf)"/>
<circle cx="605" cy="333" r="5" fill="url(#spain-red)"/>
<circle cx="616" cy="334" r="4.5" fill="#f2c14e"/>
<path d="M636 362 L656 362 L653 344 L639 344 Z" fill="url(#spain-terra2)"/>
<ellipse cx="646" cy="340" rx="13" ry="7" fill="url(#spain-leaf)"/>
<circle cx="641" cy="336" r="4.5" fill="url(#spain-red)"/>
<g data-obj="butterfly" transform="translate(258.2,99.3)">
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

<rect x="372" y="152" width="128" height="248" fill="url(#spain-facade)"/>
<rect x="470" y="152" width="30" height="248" fill="url(#spain-side)"/>
<rect x="372" y="152" width="10" height="248" fill="#fffdf4" opacity="0.55"/>
<polygon points="366,152 506,152 436,94" fill="url(#spain-roof)"/>
<polygon points="366,152 436,94 436,152" fill="#ef9a6c"/>
<polygon points="366,152 506,152 504,144 368,144" fill="#f6b48b" opacity="0.8"/>
<path d="M398 124 L392 152 M416 108 L412 152 M456 108 L460 152 M474 124 L480 152" stroke="#a8532f" stroke-width="1.6" opacity="0.5"/>
<g data-obj="weathervane" transform="translate(-30,2)">
  <rect x="449" y="60" width="6" height="38" fill="#6f5b48"/>
  <rect x="449" y="60" width="2.4" height="38" fill="#a08872"/>
  <path d="M455 66 L492 76 L455 88 Z" fill="url(#spain-brass)"/>
  <path d="M455 66 L492 76 L455 76 Z" fill="#ffe9a8" opacity="0.6"/>
  <path d="M455 70 L482 77 L455 84" fill="none" stroke="#8a6412" stroke-width="1.4"/>
  <circle cx="452" cy="55" r="5.5" fill="url(#spain-brass)"/>
  <circle cx="450" cy="53" r="2" fill="#fff6d8" opacity="0.9"/>
  <path d="M440 74 L449 74 M455 96 L440 96" stroke="#8a7460" stroke-width="2.2" stroke-linecap="round"/>
</g>
<path d="M392 194 q44 -46 88 0 L480 268 L392 268 Z" fill="#4a3b52"/>
<path d="M396 196 q40 -42 80 0 L476 268 L396 268 Z" fill="url(#spain-doorshade)"/>
<ellipse cx="436" cy="248" rx="42" ry="32" fill="url(#spain-doorglow)" opacity="0.5"/>
<path d="M392 194 q44 -46 88 0" fill="none" stroke="#fffaef" stroke-width="4" opacity="0.85"/>
<rect x="394" y="200" width="84" height="9" rx="2" fill="#6b4526"/>
<rect x="394" y="200" width="84" height="3" rx="1.5" fill="#a97f4c"/>
<g data-obj="bell" transform="translate(-16,-6)">
  <path d="M452 220 q-16 2 -16 18 q0 12 -6 18 l44 0 q-6 -6 -6 -18 q0 -16 -16 -18 Z" fill="url(#spain-brass)"/>
  <path d="M452 220 q-16 2 -16 18 q0 12 -6 18 l12 0 q0 -14 2 -22 q2 -12 8 -14 Z" fill="#ffefbc" opacity="0.85"/>
  <path d="M462 224 q10 6 10 20 q0 10 4 16 l-8 0 q4 -8 2 -18 q-2 -14 -8 -18 Z" fill="#6f4d0f" opacity="0.45"/>
  <rect x="448" y="212" width="8" height="10" rx="3" fill="#9c7418"/>
  <ellipse cx="452" cy="258" rx="24" ry="4.5" fill="#8f6a12"/>
  <ellipse cx="452" cy="256" rx="24" ry="4" fill="url(#spain-brass)"/>
  <circle cx="452" cy="265" r="5" fill="#e8c477"/>
  <path d="M440 228 q2 -8 8 -10" fill="none" stroke="#fffbe8" stroke-width="2.6" opacity="0.8" stroke-linecap="round"/>
</g>
<rect x="384" y="268" width="104" height="10" fill="#c9663a"/>
<rect x="384" y="268" width="104" height="4" fill="#eb9367"/>
<path d="M386 278 L398 294 L474 294 L486 278 Z" fill="#8a6a52" opacity="0.22"/>
<rect x="404" y="302" width="64" height="66" rx="3" fill="#dcc4a2"/>
<rect x="404" y="302" width="64" height="6" rx="3" fill="#fffaef"/>
<rect x="408" y="306" width="56" height="58" rx="2" fill="url(#spain-cream)"/>
<circle cx="409" cy="307" r="2.4" fill="#8a7460"/>
<circle cx="463" cy="307" r="2.4" fill="#8a7460"/>
<circle cx="409" cy="363" r="2.4" fill="#8a7460"/>
<circle cx="463" cy="363" r="2.4" fill="#8a7460"/>
<ellipse cx="446" cy="376" rx="34" ry="7" fill="url(#spain-wallshadow)"/>
<g data-obj="sundial" transform="translate(-2,-16)">
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

<rect x="212" y="240" width="160" height="160" fill="url(#spain-facade)"/>
<rect x="342" y="240" width="30" height="160" fill="url(#spain-side)"/>
<rect x="212" y="240" width="10" height="160" fill="#fffdf4" opacity="0.5"/>
<polygon points="206,242 378,242 368,216 216,216" fill="url(#spain-roof)"/>
<polygon points="206,242 378,242 376,232 204,232" fill="#f3ad84" opacity="0.85"/>
<path d="M246 218 L238 242 M286 217 L280 242 M326 217 L322 242 M362 218 L360 242" stroke="#a8532f" stroke-width="1.7" opacity="0.5"/>
<rect x="300" y="242" width="42" height="6" rx="2" fill="#6b4526"/>
<path d="M304 248 L304 262 M314 248 L314 262 M324 248 L324 262 M336 248 L336 262" stroke="#6b4526" stroke-width="2.2"/>
<rect x="300" y="260" width="42" height="5" rx="2" fill="#6b4526"/>
<path d="M300 198 Q284 226 316 246" fill="none" stroke="#7d5228" stroke-width="1.8" opacity="0.85"/>
<circle cx="316" cy="246" r="2.6" fill="#7d5228"/>
<rect x="240" y="268" width="52" height="52" rx="3" fill="url(#spain-bluedeep)"/>
<rect x="240" y="268" width="23" height="52" fill="#5f92b8" opacity="0.75"/>
<path d="M240 268 L292 268 L292 279 L240 282 Z" fill="#22394a" opacity="0.55"/>
<rect x="234" y="320" width="66" height="8" rx="2" fill="#c9663a"/>
<rect x="234" y="320" width="66" height="3" rx="1.5" fill="#eb9367"/>
<path d="M236 328 L246 344 L288 344 L298 328 Z" fill="#8a6a52" opacity="0.2"/>
<path d="M240 320 L262 320 L259 298 L243 298 Z" fill="url(#spain-terra)"/>
<path d="M240 320 L248 320 L246 298 L243 298 Z" fill="#f3ae83" opacity="0.7"/>
<rect x="238" y="294" width="26" height="6" rx="2" fill="#e08a58"/>
<ellipse cx="251" cy="290" rx="16" ry="9" fill="url(#spain-leaf)"/>
<circle cx="244" cy="285" r="6" fill="url(#spain-red)"/>
<circle cx="257" cy="286" r="5.5" fill="url(#spain-red)"/>
<path d="M272 320 L294 320 L291 300 L275 300 Z" fill="url(#spain-terra2)"/>
<rect x="270" y="296" width="26" height="6" rx="2" fill="#e08a58"/>
<ellipse cx="283" cy="292" rx="15" ry="8" fill="url(#spain-leaf)"/>
<circle cx="277" cy="288" r="5" fill="#f2c14e"/>
<circle cx="289" cy="289" r="4.5" fill="url(#spain-red)"/>

<rect x="-10" y="262" width="222" height="138" fill="url(#spain-facade)"/>
<rect x="172" y="262" width="40" height="138" fill="url(#spain-side)"/>
<rect x="-10" y="262" width="12" height="138" fill="#fffdf6" opacity="0.5"/>
<polygon points="-16,264 218,264 208,236 -6,236" fill="url(#spain-roof)"/>
<polygon points="-16,264 218,264 216,254 -14,254" fill="#f3ad84" opacity="0.9"/>
<path d="M24 238 L16 264 M72 237 L66 264 M120 237 L116 264 M168 237 L164 264" stroke="#a8532f" stroke-width="1.7" opacity="0.45"/>
<rect x="2" y="292" width="52" height="52" rx="3" fill="#2f5638"/>
<rect x="2" y="292" width="25" height="52" fill="#5c8f5f"/>
<path d="M4 300 L23 300 M4 312 L23 312 M4 324 L23 324 M4 336 L23 336" stroke="#3f6b45" stroke-width="2.2"/>
<path d="M31 300 L52 300 M31 312 L52 312 M31 324 L52 324 M31 336 L52 336" stroke="#25422c" stroke-width="2.2"/>
<rect x="-4" y="344" width="106" height="9" rx="2" fill="#c9663a"/>
<rect x="-4" y="344" width="106" height="3.5" rx="1.7" fill="#eb9367"/>
<path d="M-2 353 L8 372 L92 372 L100 353 Z" fill="#8a6a52" opacity="0.22"/>
<ellipse cx="70" cy="350" rx="34" ry="6" fill="#5c3118" opacity="0.3"/>
<path d="M64 300 Q40 276 30 286 Q40 302 64 302 Z" fill="url(#spain-leaf)"/>
<path d="M64 300 Q88 274 100 284 Q90 302 64 302 Z" fill="#7c9a52"/>
<path d="M62 298 Q56 280 64 266 Q72 282 68 300 Z" fill="#6b8a46"/>
<circle cx="36" cy="282" r="7" fill="url(#spain-red)"/>
<circle cx="96" cy="280" r="7" fill="url(#spain-red)"/>
<circle cx="65" cy="268" r="6" fill="#e0563f"/>
<g data-obj="clay-pot" transform="translate(-132,-150)">
  <path d="M170 452 L222 452 L214 496 Q196 504 178 496 Z" fill="url(#spain-terra)"/>
  <path d="M170 452 L190 452 L188 502 Q180 500 178 496 Z" fill="#f3ae83" opacity="0.7"/>
  <path d="M214 452 L222 452 L214 496 Q206 501 200 502 Q210 486 214 452 Z" fill="#7c3a1c" opacity="0.45"/>
  <rect x="166" y="444" width="60" height="12" rx="4" fill="url(#spain-terra2)"/>
  <rect x="166" y="444" width="60" height="4" rx="2" fill="#f7c19c"/>
  <ellipse cx="196" cy="450" rx="24" ry="6" fill="#4a2f1c"/>
  <path d="M176 472 L214 468" stroke="#8f4324" stroke-width="2.5" fill="none" opacity="0.7"/>
  <path d="M172 456 q0 24 4 40" stroke="#ffd3b4" stroke-width="2.4" fill="none" opacity="0.65"/>
</g>
<rect x="148" y="282" width="34" height="6" rx="2" fill="#4a3b52"/>
<path d="M152 288 q0 -10 -8 -12" fill="none" stroke="#4a3b52" stroke-width="3"/>
<rect x="174" y="284" width="5" height="14" rx="2" fill="#4a3b52"/>
<ellipse cx="192" cy="374" rx="34" ry="7" fill="url(#spain-wallshadow)"/>
<g data-obj="birdcage" transform="translate(-18,-241)">
  <path d="M172 546 L220 546 L215 602 L177 602 Z" fill="#efe1c6" opacity="0.5"/>
  <path d="M172 546 L192 546 L189 602 L177 602 Z" fill="#fffaef" opacity="0.4"/>
  <path d="M172 546 L220 546 L215 602 L177 602 Z" fill="none" stroke="#7d5228" stroke-width="2.5"/>
  <path d="M180 546 L178 602 M190 546 L189 602 M200 546 L201 602 M210 546 L212 602" stroke="#8a5a30" stroke-width="1.6" fill="none"/>
  <path d="M176 540 q20 -8 40 0" fill="none" stroke="#8a5a30" stroke-width="3"/>
  <path d="M176 540 q20 -8 40 0" fill="none" stroke="#d2a06d" stroke-width="1.2"/>
  <rect x="168" y="598" width="56" height="9" rx="3" fill="url(#spain-wood)"/>
  <rect x="168" y="598" width="56" height="3" rx="1.5" fill="#e0b183"/>
</g>
<g data-obj="canary" transform="translate(-15,-250)">
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
<rect x="112" y="300" width="6" height="14" fill="#4a3b52"/>
<path d="M104 314 L132 314 L128 340 L108 340 Z" fill="url(#spain-bluedeep)"/>
<path d="M104 314 L118 314 L116 340 L108 340 Z" fill="#6fa7cd"/>
<ellipse cx="118" cy="332" rx="7" ry="8" fill="#ffe9a8" opacity="0.9"/>
<polygon points="104,314 132,314 126,306 110,306" fill="#2a2030"/>

<rect x="0" y="400" width="800" height="530" fill="url(#spain-wall)"/>
<polygon points="0,400 250,400 122,930 0,930" fill="#fffdf4" opacity="0.42"/>
<polygon points="640,400 800,400 800,930 700,930" fill="#a08fa0" opacity="0.13"/>
<rect x="0" y="400" width="800" height="530" fill="url(#spain-wallcool)"/>
<ellipse cx="300" cy="640" rx="230" ry="130" fill="#fffaee" opacity="0.26"/>
<rect x="0" y="392" width="800" height="22" fill="#fffbf0"/>
<rect x="0" y="392" width="800" height="7" fill="#ffffff" opacity="0.7"/>
<rect x="0" y="414" width="800" height="30" fill="#9d8776" opacity="0.24"/>
<rect x="0" y="414" width="800" height="13" fill="#8a6f5e" opacity="0.18"/>
<rect x="0" y="912" width="800" height="20" fill="#c8ab84" opacity="0.55"/>
<rect x="0" y="912" width="800" height="6" fill="#fff6e0" opacity="0.5"/>

<rect x="18" y="424" width="160" height="108" rx="4" fill="#d8c19c"/>
<rect x="18" y="424" width="160" height="6" rx="3" fill="#f4e5c8"/>
<rect x="22" y="428" width="152" height="100" fill="#b8a284"/>
<rect x="25" y="430" width="48" height="48" fill="url(#spain-tile)"/>
<rect x="73" y="430" width="48" height="48" fill="url(#spain-tile2)"/>
<rect x="121" y="430" width="48" height="48" fill="url(#spain-tile)"/>
<rect x="25" y="478" width="48" height="48" fill="url(#spain-tile2)"/>
<rect x="73" y="478" width="48" height="48" fill="url(#spain-tile)"/>
<rect x="121" y="478" width="48" height="48" fill="url(#spain-tile2)"/>
<path d="M49 454 Q40 443 49 432 Q58 443 49 454 Z M49 454 Q60 445 71 454 Q60 463 49 454 Z M49 454 Q40 465 49 476 Q58 465 49 454 Z M49 454 Q38 445 27 454 Q38 463 49 454 Z" fill="url(#spain-purple)"/>
<path d="M145 433 L150 445 L162 450 L150 455 L145 467 L140 455 L128 450 L140 445 Z" fill="url(#spain-blue)"/>
<path d="M97 524 C81 511 81 494 89 491 C94 489 96 493 97 496 C98 493 100 489 105 491 C113 494 113 511 97 524 Z" fill="url(#spain-blue)"/>
<rect x="18" y="424" width="160" height="108" rx="4" fill="none" stroke="#a8926c" stroke-width="2.5"/>
<rect x="18" y="424" width="160" height="108" rx="4" fill="url(#spain-sheen)" opacity="0.24"/>
<g data-obj="purple-heart" transform="translate(53.1,4)">
  <path d="M90 522 C66 504 66 482 77 478 C84 475 89 480 90 485 C91 480 96 475 103 478 C114 482 114 504 90 522 Z" fill="url(#spain-purple)"/>
  <path d="M90 514 C74 500 74 485 80 483 C85 481 88 485 89 489 C87 498 87 507 90 514 Z" fill="#c2b4f0" opacity="0.7"/>
  <path d="M90 522 C102 512 110 502 112 492 C112 506 104 514 92 521 Z" fill="#342a5e" opacity="0.55"/>
  <ellipse cx="80" cy="487" rx="5" ry="3.6" fill="#ffffff" opacity="0.7" transform="rotate(-38 80 487)"/>
  <path d="M90 522 C66 504 66 482 77 478 C84 475 89 480 90 485 C91 480 96 475 103 478 C114 482 114 504 90 522 Z" fill="none" stroke="#3a3068" stroke-width="2.2"/>
</g>

<rect x="230" y="428" width="6" height="7" rx="2" fill="#5b4552"/>
<path d="M233 434 L233 442" stroke="#5b4552" stroke-width="2"/>
<ellipse cx="240" cy="516" rx="30" ry="7" fill="url(#spain-wallshadow)"/>
<g data-obj="wall-mirror" transform="translate(192,-106)">
  <ellipse cx="43" cy="582" rx="26" ry="30" fill="#8f7420" opacity="0.35"/>
  <ellipse cx="40" cy="578" rx="26" ry="30" fill="url(#spain-brass)"/>
  <ellipse cx="40" cy="578" rx="21" ry="25" fill="url(#spain-glass)"/>
  <path d="M28 566 q10 -8 20 -2 q-8 10 -20 2 Z" fill="#ffffff" opacity="0.75"/>
  <path d="M24 588 q12 -6 22 6 q-14 6 -22 -6 Z" fill="#b7cfdd" opacity="0.55"/>
  <ellipse cx="40" cy="578" rx="26" ry="30" fill="none" stroke="#8a6412" stroke-width="2.2"/>
  <path d="M22 566 a26 30 0 0 1 18 -18" fill="none" stroke="#fff3c8" stroke-width="2.8" opacity="0.9"/>
  <path d="M40 548 L36 540 L44 540 Z" fill="#a97c2c"/>
</g>

<rect x="18" y="548" width="264" height="14" rx="3" fill="url(#spain-wood)"/>
<rect x="18" y="548" width="264" height="5" rx="2.5" fill="#e8c090"/>
<rect x="18" y="558" width="264" height="4" fill="#4b3018" opacity="0.5"/>
<path d="M58 562 q0 8 -6 10 M118 562 q0 8 -6 10 M178 562 q0 8 -6 10 M242 562 q0 8 -6 10" fill="none" stroke="#4e585f" stroke-width="3.5" stroke-linecap="round"/>
<rect x="20" y="566" width="260" height="26" fill="url(#spain-castleft)" opacity="0.8"/>
<g data-obj="chili-string" transform="translate(-48.2,146)">
  <rect x="104" y="404" width="5" height="8" fill="#6f5b48"/>
  <path d="M106 412 q-6 16 -3 32 q3 14 5 22 q3 -10 5 -22 q3 -16 -7 -32 Z" fill="url(#spain-red)"/>
  <path d="M100 420 q-8 14 -5 28 q6 -12 5 -28 Z" fill="#d63f42"/>
  <path d="M113 428 q9 14 5 28 q-7 -12 -5 -28 Z" fill="#a8203a"/>
  <path d="M106 440 q-5 14 -2 26 q5 -10 2 -26 Z" fill="#f2907a" opacity="0.8"/>
  <path d="M104 424 q-2 14 0 26" stroke="#ffc9b4" stroke-width="1.8" fill="none" opacity="0.8"/>
  <ellipse cx="106" cy="414" rx="7" ry="3.2" fill="#5c7a3a"/>
</g>
<g data-obj="garlic-braid" transform="translate(-547,-166)">
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
<g data-obj="hand-fan" transform="translate(-418,-144)">
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
<path d="M240 552 q-4 12 0 22" stroke="#c9b294" stroke-width="3.5" fill="none"/>
<ellipse cx="233" cy="578" rx="11" ry="13" fill="url(#spain-terra2)"/>
<ellipse cx="248" cy="582" rx="11" ry="13" fill="#e8ac7c"/>
<ellipse cx="240" cy="598" rx="12" ry="14" fill="url(#spain-terra2)"/>
<path d="M233 566 L233 578 M248 570 L248 582 M240 586 L240 598" stroke="#a1522c" stroke-width="1.5"/>
<path d="M228 608 q12 6 24 0" fill="none" stroke="#a1522c" stroke-width="2"/>

<rect x="306" y="412" width="160" height="80" rx="3" fill="#d8c19c"/>
<rect x="306" y="412" width="160" height="5" rx="2.5" fill="#f4e5c8"/>
<rect x="310" y="416" width="152" height="72" fill="#b8a284"/>
<rect x="312" y="418" width="36" height="34" fill="url(#spain-tile)"/>
<rect x="350" y="418" width="36" height="34" fill="url(#spain-tile2)"/>
<rect x="388" y="418" width="36" height="34" fill="url(#spain-tile)"/>
<rect x="426" y="418" width="34" height="34" fill="url(#spain-tile2)"/>
<rect x="312" y="454" width="36" height="32" fill="url(#spain-tile2)"/>
<rect x="350" y="454" width="36" height="32" fill="url(#spain-tile)"/>
<rect x="388" y="454" width="36" height="32" fill="url(#spain-tile2)"/>
<rect x="426" y="454" width="34" height="32" fill="url(#spain-tile)"/>
<path d="M330 435 Q323 426 330 417 Q337 426 330 435 Z M330 435 Q339 428 348 435 Q339 442 330 435 Z M330 435 Q323 444 330 453 Q337 444 330 435 Z M330 435 Q321 428 312 435 Q321 442 330 435 Z" fill="url(#spain-blue)"/>
<path d="M406 421 L410 431 L420 435 L410 439 L406 449 L402 439 L392 435 L402 431 Z" fill="url(#spain-purple)"/>
<path d="M368 481 C356 471 356 460 362 458 C366 456 367 459 368 462 C369 459 370 456 374 458 C380 460 380 471 368 481 Z" fill="url(#spain-blue)"/>
<path d="M443 470 Q436 461 443 452 Q450 461 443 470 Z M443 470 Q452 463 461 470 Q452 477 443 470 Z M443 470 Q436 479 443 488 Q450 479 443 470 Z M443 470 Q434 463 425 470 Q434 477 443 470 Z" fill="url(#spain-blue)"/>
<rect x="306" y="412" width="160" height="80" rx="3" fill="none" stroke="#a8926c" stroke-width="2.5"/>
<rect x="306" y="412" width="160" height="80" rx="3" fill="url(#spain-sheen)" opacity="0.22"/>

<path d="M296 930 L296 632 Q296 550 386 550 Q476 550 476 632 L476 930 Z" fill="#d9a06f"/>
<path d="M302 930 L302 634 Q302 558 386 558 Q470 558 470 634 L470 930 Z" fill="url(#spain-terra2)"/>
<path d="M310 930 L310 636 Q310 566 386 566 Q462 566 462 636 L462 930 Z" fill="url(#spain-doorshade)"/>
<ellipse cx="400" cy="720" rx="86" ry="112" fill="url(#spain-doorglow)"/>
<path d="M310 636 Q310 566 386 566 Q462 566 462 636" fill="none" stroke="#fffaef" stroke-width="4" opacity="0.7"/>
<path d="M296 632 Q296 550 386 550 Q476 550 476 632" fill="none" stroke="#fffdf4" stroke-width="3" opacity="0.5"/>
<path d="M316 590 L316 930 L330 930 L330 582 Z" fill="#4a3b52" opacity="0.5"/>
<path d="M322 600 L322 900 M338 586 L338 900" stroke="#5b4552" stroke-width="2" opacity="0.65"/>
<rect x="383" y="504" width="6" height="8" rx="2" fill="#5b4552"/>
<ellipse cx="394" cy="562" rx="30" ry="6" fill="url(#spain-wallshadow)"/>
<g data-obj="horseshoe" transform="translate(-374,-218)">
  <path d="M760 736 a22 22 0 0 1 22 22 l0 18 l-11 0 l0 -18 a11 11 0 0 0 -11 -11 a11 11 0 0 0 -11 11 l0 18 l-11 0 l0 -18 a22 22 0 0 1 22 -22 Z" fill="url(#spain-steel)"/>
  <path d="M760 736 a22 22 0 0 0 -22 22 l0 18 l-6 0 l0 -18 a28 28 0 0 1 28 -28 Z" fill="#eaf0f4" opacity="0.85"/>
  <path d="M760 730 a28 28 0 0 1 28 28 l0 18 l-6 0 l0 -18 a22 22 0 0 0 -22 -22 Z" fill="#3e474d" opacity="0.5"/>
  <circle cx="745" cy="750" r="2.6" fill="#3e474d"/>
  <circle cx="775" cy="750" r="2.6" fill="#3e474d"/>
  <circle cx="743" cy="768" r="2.6" fill="#3e474d"/>
  <circle cx="777" cy="768" r="2.6" fill="#3e474d"/>
</g>

<rect x="362" y="600" width="12" height="6" rx="2" fill="#8a6a5a"/>
<path d="M368 606 L368 618" stroke="#6b4526" stroke-width="2.5"/>
<g data-obj="guitar" transform="translate(4,25)">
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
<rect x="310" y="800" width="152" height="12" rx="3" fill="url(#spain-wood)"/>
<rect x="310" y="800" width="152" height="4" rx="2" fill="#e8c090"/>
<path d="M318 812 L326 828 M454 812 L446 828" stroke="#5c3a1c" stroke-width="3.5" fill="none"/>
<ellipse cx="352" cy="800" rx="34" ry="6" fill="#20140a" opacity="0.55"/>
<g data-obj="water-jar" transform="translate(56.5,48)">
  <path d="M272 752 q-8 -40 10 -46 l16 0 q18 6 10 46 Z" fill="url(#spain-wood)"/>
  <path d="M272 752 q-8 -40 10 -46 l7 0 l0 46 Z" fill="#d2a06d" opacity="0.75"/>
  <path d="M303 710 q6 18 5 42 l-8 0 q4 -22 -2 -42 Z" fill="#4b3018" opacity="0.5"/>
  <rect x="280" y="698" width="20" height="10" rx="4" fill="#5c3a1c"/>
  <rect x="280" y="698" width="20" height="3.5" rx="1.7" fill="#a97f4c"/>
  <path d="M298 712 q14 6 10 18 q-4 10 -12 8" fill="none" stroke="#8a5a30" stroke-width="5"/>
  <path d="M275 730 q16 -5 30 0" stroke="#e0b183" stroke-width="2.5" fill="none"/>
  <path d="M277 716 q-2 20 0 34" stroke="#f0cba0" stroke-width="2.2" fill="none" opacity="0.75"/>
</g>
<path d="M380 800 q-6 -30 8 -32 l18 0 q14 2 8 32 Z" fill="#7d5228"/>
<path d="M380 800 q-6 -30 8 -32 l9 0 l0 32 Z" fill="#a97f4c"/>
<path d="M384 784 L410 784" stroke="#5c3a1c" stroke-width="2"/>
<path d="M424 800 q-5 -26 7 -28 l14 0 q12 2 7 28 Z" fill="#6b4526"/>
<path d="M424 800 q-5 -26 7 -28 l7 0 l0 28 Z" fill="#8f6236"/>
<rect x="300" y="866" width="172" height="30" fill="#8a6a5a"/>
<rect x="300" y="866" width="172" height="9" fill="#ad8a79"/>
<rect x="300" y="896" width="172" height="12" fill="#5b3f3b"/>
<rect x="306" y="870" width="38" height="24" fill="url(#spain-tile)" opacity="0.85"/>
<rect x="348" y="870" width="38" height="24" fill="url(#spain-tile2)" opacity="0.85"/>
<rect x="390" y="870" width="38" height="24" fill="url(#spain-tile)" opacity="0.85"/>
<rect x="432" y="870" width="34" height="24" fill="url(#spain-tile2)" opacity="0.85"/>
<path d="M325 876 L328 882 L325 888 L322 882 Z" fill="#2f6fb3"/>
<path d="M409 876 L412 882 L409 888 L406 882 Z" fill="#6a5fa8"/>
<rect x="300" y="908" width="172" height="22" fill="#3f2c2a"/>

<rect x="478" y="466" width="34" height="8" rx="3" fill="#4a3b52"/>
<path d="M482 474 q2 12 12 14" fill="none" stroke="#4a3b52" stroke-width="3"/>
<rect x="506" y="470" width="6" height="12" rx="2" fill="#4a3b52"/>
<ellipse cx="520" cy="550" rx="34" ry="8" fill="url(#spain-wallshadow)"/>
<g data-obj="lantern" transform="translate(20,24)">
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
<rect x="488" y="598" width="46" height="54" rx="4" fill="#8a7460"/>
<rect x="488" y="598" width="46" height="4" rx="2" fill="#b39c8c"/>
<circle cx="492" cy="604" r="2.4" fill="#4e4238"/>
<circle cx="530" cy="604" r="2.4" fill="#4e4238"/>
<ellipse cx="520" cy="656" rx="30" ry="7" fill="url(#spain-wallshadow)"/>
<g data-obj="mailbox" transform="translate(52,-144)">
  <rect x="442" y="748" width="38" height="30" rx="4" fill="url(#spain-yellow)"/>
  <path d="M442 752 q0 -4 4 -4 l30 0 q4 0 4 4 l0 6 q-19 -5 -38 0 Z" fill="#fff0b4" opacity="0.85"/>
  <path d="M472 750 q8 2 8 12 l0 16 l-9 0 l0 -16 q0 -8 1 -12 Z" fill="#8f6512" opacity="0.35"/>
  <rect x="448" y="762" width="26" height="6" rx="2" fill="#7c1229"/>
  <rect x="448" y="762" width="26" height="2.5" rx="1.2" fill="#4d0a19"/>
  <rect x="458" y="778" width="7" height="12" fill="#6f5b48"/>
  <circle cx="474" cy="772" r="3" fill="#a9720f"/>
  <path d="M443 754 L443 776" stroke="#fff6d8" stroke-width="2.2" opacity="0.75"/>
</g>

<rect x="545" y="440" width="255" height="90" fill="url(#spain-shelfback)"/>
<rect x="545" y="440" width="255" height="6" fill="#6b4526"/>
<rect x="545" y="440" width="255" height="90" fill="url(#spain-castleft)" opacity="0.5"/>
<rect x="545" y="568" width="255" height="88" fill="url(#spain-shelfback)"/>
<rect x="545" y="568" width="255" height="6" fill="#6b4526"/>
<rect x="545" y="568" width="255" height="88" fill="url(#spain-castleft)" opacity="0.5"/>
<rect x="545" y="512" width="255" height="14" fill="url(#spain-lip)"/>
<rect x="545" y="512" width="255" height="4" fill="#ffe0ac"/>
<path d="M556 526 L586 526 L556 552 Z" fill="#6b4526"/>
<path d="M792 526 L762 526 L792 552 Z" fill="#5c3a1c"/>
<rect x="545" y="640" width="255" height="14" fill="url(#spain-lip)"/>
<rect x="545" y="640" width="255" height="4" fill="#ffe0ac"/>
<path d="M556 654 L586 654 L556 678 Z" fill="#6b4526"/>
<path d="M792 654 L762 654 L792 678 Z" fill="#5c3a1c"/>
<ellipse cx="592" cy="512" rx="34" ry="6" fill="#3a2a16" opacity="0.5"/>
<g data-obj="bowl-stack" transform="translate(458.2,-336)">
  <path d="M102 848 q-10 -18 4 -20 l42 0 q14 2 4 20 Z" fill="url(#spain-cream)"/>
  <path d="M102 848 q-10 -18 4 -20 l18 0 l0 20 Z" fill="#fffdf6" opacity="0.75"/>
  <path d="M144 828 q10 2 4 20 l-10 0 q6 -12 2 -20 Z" fill="#9d8768" opacity="0.45"/>
  <path d="M106 830 q-8 -14 4 -16 l34 0 q12 2 4 16 Z" fill="url(#spain-tile)"/>
  <path d="M106 830 q-8 -14 4 -16 l14 0 l0 16 Z" fill="#f2f9ff" opacity="0.8"/>
  <path d="M110 814 q-6 -12 4 -14 l26 0 q10 2 4 14 Z" fill="url(#spain-yellow)"/>
  <path d="M110 814 q-6 -12 4 -14 l11 0 l0 14 Z" fill="#ffeeb0" opacity="0.8"/>
  <path d="M104 838 L152 838" stroke="#b8a284" stroke-width="2"/>
</g>
<ellipse cx="662" cy="512" rx="28" ry="6" fill="#3a2a16" opacity="0.5"/>
<g data-obj="blue-jug" transform="translate(522.8,-232)">
  <path d="M116 744 q-12 -28 6 -34 l24 0 q18 6 6 34 Z" fill="url(#spain-blue)"/>
  <path d="M116 744 q-12 -28 6 -34 l10 0 l0 34 Z" fill="#9ccdf2" opacity="0.7"/>
  <path d="M146 712 q10 6 6 32 l-9 0 q5 -20 0 -32 Z" fill="#153a63" opacity="0.5"/>
  <rect x="124" y="702" width="20" height="10" rx="4" fill="#1c4b80"/>
  <rect x="124" y="702" width="20" height="3.5" rx="1.7" fill="#5f9fd4"/>
  <path d="M146 714 q14 6 10 18 q-4 10 -12 8" fill="none" stroke="#2f6fb3" stroke-width="5"/>
  <path d="M120 728 q28 -6 32 0" stroke="#f2c14e" stroke-width="3" fill="none"/>
  <path d="M121 716 q-3 14 -1 26" stroke="#e6f4ff" stroke-width="2.4" fill="none" opacity="0.8"/>
</g>
<ellipse cx="730" cy="512" rx="30" ry="6" fill="#3a2a16" opacity="0.5"/>
<g data-obj="honey-jug" transform="translate(547.8,-570)">
  <path d="M158 1082 q-14 -32 6 -40 l28 0 q20 8 6 40 Z" fill="url(#spain-yellow)"/>
  <path d="M158 1082 q-14 -32 6 -40 l11 0 l0 40 Z" fill="#ffeeb0" opacity="0.75"/>
  <path d="M188 1044 q12 8 4 38 l-12 0 q8 -22 2 -38 Z" fill="#8f6512" opacity="0.4"/>
  <rect x="166" y="1028" width="24" height="14" rx="5" fill="#c98115"/>
  <rect x="166" y="1028" width="9" height="14" rx="4" fill="#f2ce74"/>
  <path d="M190 1054 q17 6 13 19 q-5 11 -15 8" fill="none" stroke="#d99b2b" stroke-width="6"/>
  <path d="M161 1066 q22 -5 36 0" stroke="#b8801a" stroke-width="2.5" fill="none"/>
</g>
<path d="M764 512 q-8 -26 6 -28 l16 0 q14 2 6 28 Z" fill="url(#spain-cream)"/>
<path d="M764 512 q-8 -26 6 -28 l7 0 l0 28 Z" fill="#fffdf6" opacity="0.7"/>
<rect x="770" y="478" width="12" height="8" rx="3" fill="#2f6fb3"/>
<ellipse cx="600" cy="640" rx="34" ry="6" fill="#3a2a16" opacity="0.5"/>
<g data-obj="straw-hat" transform="translate(-70,-58)">
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
<ellipse cx="672" cy="640" rx="24" ry="5" fill="#3a2a16" opacity="0.5"/>
<path d="M650 640 q-9 -20 5 -22 l34 0 q14 2 5 22 Z" fill="url(#spain-cream)"/>
<path d="M650 640 q-9 -20 5 -22 l15 0 l0 22 Z" fill="#fffdf6" opacity="0.7"/>
<path d="M653 630 L691 630" stroke="#b8a284" stroke-width="2"/>
<ellipse cx="727" cy="640" rx="24" ry="5" fill="#3a2a16" opacity="0.5"/>
<path d="M706 640 L748 640 L744 604 L710 604 Z" fill="url(#spain-terra)"/>
<path d="M706 640 L716 640 L714 604 L710 604 Z" fill="#f3ae83" opacity="0.7"/>
<rect x="704" y="598" width="46" height="8" rx="3" fill="url(#spain-terra2)"/>
<ellipse cx="727" cy="594" rx="19" ry="9" fill="url(#spain-leaf)"/>
<circle cx="719" cy="589" r="6" fill="url(#spain-red)"/>
<circle cx="733" cy="590" r="5" fill="#f2c14e"/>
<rect x="545" y="662" width="255" height="12" rx="3" fill="url(#spain-wood)"/>
<rect x="545" y="662" width="255" height="4" rx="2" fill="#e8c090"/>
<path d="M616 674 q0 8 -6 10 M710 674 q0 8 -6 10 M770 674 q0 8 -6 10" fill="none" stroke="#4e585f" stroke-width="3.5" stroke-linecap="round"/>
<rect x="548" y="676" width="250" height="26" fill="url(#spain-castleft)" opacity="0.75"/>
<g data-obj="paella-pan" transform="translate(466.5,-96)">
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
<g data-obj="copper-ladle" transform="translate(-51,38)">
  <rect x="756" y="632" width="9" height="42" rx="4" fill="#9c5f2f"/>
  <rect x="756" y="632" width="4" height="42" rx="2" fill="#e8b184"/>
  <path d="M750 638 q10 -8 20 0" fill="none" stroke="#b9713c" stroke-width="4"/>
  <ellipse cx="762" cy="684" rx="19" ry="14" fill="#7d4319"/>
  <ellipse cx="760" cy="679" rx="19" ry="14" fill="url(#spain-copper)"/>
  <ellipse cx="753" cy="673" rx="8" ry="5" fill="#ffe6cc" opacity="0.85" transform="rotate(-30 753 673)"/>
  <path d="M742 678 a19 14 0 0 1 14 -13" fill="none" stroke="#ffdcbc" stroke-width="2.2" opacity="0.8"/>
  <path d="M770 670 a19 14 0 0 1 6 12 a19 14 0 0 1 -12 11 q10 -10 6 -23 Z" fill="#5e3110" opacity="0.5"/>
</g>
<circle cx="770" cy="710" r="24" fill="#2f2f2f"/>
<circle cx="770" cy="707" r="24" fill="url(#spain-steel)"/>
<circle cx="770" cy="707" r="16" fill="#3a3a3a"/>
<ellipse cx="760" cy="698" rx="7" ry="4" fill="#e8eef2" opacity="0.5" transform="rotate(-35 760 698)"/>

<ellipse cx="748" cy="928" rx="60" ry="12" fill="url(#spain-contact)"/>
<ellipse cx="742" cy="806" rx="52" ry="46" fill="#2f4d26"/>
<ellipse cx="782" cy="840" rx="34" ry="30" fill="#2f4d26"/>
<ellipse cx="710" cy="842" rx="32" ry="28" fill="#2f4d26"/>
<ellipse cx="738" cy="796" rx="46" ry="38" fill="url(#spain-leaf)"/>
<ellipse cx="780" cy="832" rx="28" ry="24" fill="url(#spain-leaf)"/>
<ellipse cx="708" cy="834" rx="26" ry="22" fill="url(#spain-leaf)"/>
<ellipse cx="722" cy="782" rx="24" ry="14" fill="#9dc472" opacity="0.7"/>
<circle cx="706" cy="820" r="15" fill="#bf5f0c"/>
<circle cx="705" cy="818" r="15" fill="url(#spain-orange)"/>
<circle cx="768" cy="798" r="14" fill="#bf5f0c"/>
<circle cx="767" cy="796" r="14" fill="url(#spain-orange)"/>
<circle cx="746" cy="846" r="16" fill="#bf5f0c"/>
<circle cx="745" cy="844" r="16" fill="url(#spain-orange)"/>
<ellipse cx="738" cy="838" rx="5" ry="3.4" fill="#ffe3ae" opacity="0.8" transform="rotate(-35 738 838)"/>
<path d="M736 862 L736 900" stroke="#6b4526" stroke-width="9" stroke-linecap="round"/>
<path d="M704 926 L698 862 L788 862 L782 926 Z" fill="url(#spain-terra)"/>
<path d="M704 926 L698 862 L726 862 L730 926 Z" fill="#f0a678" opacity="0.6"/>
<path d="M772 862 L788 862 L782 926 L766 926 Z" fill="#7c3a1c" opacity="0.42"/>
<rect x="692" y="850" width="102" height="16" rx="4" fill="url(#spain-terra2)"/>
<rect x="692" y="850" width="102" height="6" rx="3" fill="#f7c19c"/>
<path d="M702 886 q40 -6 80 0" stroke="#7c3a1c" stroke-width="2.5" fill="none" opacity="0.5"/>

<rect x="0" y="926" width="800" height="274" fill="url(#spain-floor)"/>
<rect x="0" y="922" width="800" height="12" fill="#9c5a34"/>
<rect x="0" y="922" width="800" height="4" fill="#c8815a"/>
<path d="M0 950 L800 950 M0 984 L800 984 M0 1032 L800 1032 M0 1098 L800 1098 M0 1190 L800 1190" stroke="#93522e" stroke-width="2.4" opacity="0.4" fill="none"/>
<path d="M168 930 L-200 1200 M261 930 L40 1200 M323 930 L200 1200 M377 930 L340 1200 M427 930 L470 1200 M481 930 L610 1200 M539 930 L760 1200 M612 930 L950 1200" stroke="#93522e" stroke-width="2" opacity="0.3" fill="none"/>
<polygon points="0,926 236,926 104,1200 0,1200" fill="#ffeec4" opacity="0.2"/>
<rect x="0" y="926" width="800" height="40" fill="#6b3a1f" opacity="0.18"/>

<ellipse cx="300" cy="1000" rx="58" ry="13" fill="url(#spain-shadow)"/>
<ellipse cx="296" cy="993" rx="36" ry="7" fill="url(#spain-contact)"/>
<g data-obj="sleeping-cat" transform="translate(-93,50)">
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

<ellipse cx="316" cy="1114" rx="128" ry="36" fill="url(#spain-shadow)" transform="rotate(10 316 1114)"/>
<rect x="10" y="634" width="240" height="456" fill="url(#spain-wooddark)"/>
<rect x="22" y="658" width="216" height="318" fill="url(#spain-shelfback)"/>
<rect x="22" y="658" width="216" height="318" fill="url(#spain-castleft)" opacity="0.6"/>
<rect x="10" y="634" width="14" height="456" fill="#d2a06d" opacity="0.4"/>
<rect x="232" y="634" width="18" height="456" fill="#2a1a0a" opacity="0.5"/>
<rect x="2" y="630" width="256" height="26" rx="5" fill="url(#spain-wood)"/>
<rect x="2" y="630" width="256" height="9" rx="4" fill="#e8c090"/>
<rect x="22" y="762" width="216" height="14" fill="url(#spain-lip)"/>
<rect x="22" y="762" width="216" height="4" fill="#ffe0ac"/>
<rect x="22" y="862" width="216" height="14" fill="url(#spain-lip)"/>
<rect x="22" y="862" width="216" height="4" fill="#ffe0ac"/>
<rect x="22" y="962" width="216" height="14" fill="url(#spain-lip)"/>
<rect x="22" y="962" width="216" height="4" fill="#ffe0ac"/>
<ellipse cx="60" cy="762" rx="26" ry="6" fill="#231506" opacity="0.6"/>
<g data-obj="candlestick" transform="translate(-170,-427)">
  <rect x="214" y="1180" width="34" height="9" rx="3" fill="url(#spain-brass)"/>
  <rect x="214" y="1180" width="34" height="3" rx="1.5" fill="#ffedb8"/>
  <rect x="226" y="1154" width="10" height="26" fill="#a97c2c"/>
  <rect x="226" y="1154" width="3.6" height="26" fill="#ffe0a0"/>
  <rect x="233" y="1154" width="3" height="26" fill="#6f5210" opacity="0.6"/>
  <rect x="222" y="1148" width="18" height="8" rx="3" fill="url(#spain-brass)"/>
  <rect x="227" y="1130" width="9" height="20" rx="3" fill="url(#spain-cream)"/>
  <rect x="227" y="1130" width="3" height="20" rx="1.5" fill="#fffdf6"/>
  <ellipse cx="231" cy="1124" rx="8" ry="7" fill="url(#spain-glow)"/>
  <path d="M231 1128 q6 -5 0 -10 q-6 5 0 10 Z" fill="#ffd982"/>
</g>
<ellipse cx="130" cy="760" rx="28" ry="6" fill="#231506" opacity="0.6"/>
<circle cx="130" cy="732" r="27" fill="#b8a284"/>
<circle cx="130" cy="729" r="27" fill="url(#spain-cream)"/>
<circle cx="130" cy="729" r="27" fill="none" stroke="#2f6fb3" stroke-width="4"/>
<circle cx="130" cy="729" r="11" fill="none" stroke="#4f95d6" stroke-width="2.5"/>
<path d="M112 716 a27 27 0 0 1 16 -13" fill="none" stroke="#ffffff" stroke-width="2.6" opacity="0.8"/>
<ellipse cx="198" cy="760" rx="26" ry="6" fill="#231506" opacity="0.6"/>
<circle cx="198" cy="734" r="24" fill="#2b2b2b"/>
<circle cx="198" cy="731" r="24" fill="url(#spain-steel)"/>
<circle cx="198" cy="731" r="16" fill="#3a3a3a"/>
<ellipse cx="188" cy="722" rx="7" ry="4" fill="#e8eef2" opacity="0.5" transform="rotate(-35 188 722)"/>
<ellipse cx="70" cy="862" rx="34" ry="7" fill="#231506" opacity="0.6"/>
<g data-obj="watering-can" transform="translate(-250.2,-80)">
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
<ellipse cx="142" cy="862" rx="26" ry="6" fill="#231506" opacity="0.6"/>
<g data-obj="olive-bowl" transform="translate(20,-216)">
  <ellipse cx="122" cy="1068" rx="22" ry="10" fill="#b8a284"/>
  <ellipse cx="122" cy="1062" rx="22" ry="10" fill="url(#spain-cream)"/>
  <ellipse cx="122" cy="1062" rx="15" ry="6" fill="#e6d3ab"/>
  <ellipse cx="114" cy="1059" rx="6" ry="4.5" fill="#5b8940"/>
  <ellipse cx="126" cy="1061" rx="6" ry="4.5" fill="#8cb862"/>
  <ellipse cx="121" cy="1056" rx="5" ry="4" fill="#8f1732"/>
  <ellipse cx="112" cy="1057" rx="2.4" ry="1.6" fill="#d8ecb4" opacity="0.85"/>
  <path d="M102 1060 a22 10 0 0 1 14 -6" fill="none" stroke="#fffdf6" stroke-width="2" opacity="0.85"/>
</g>
<ellipse cx="202" cy="862" rx="24" ry="6" fill="#231506" opacity="0.6"/>
<path d="M182 862 q-10 -34 6 -38 l14 0 q16 4 6 38 Z" fill="url(#spain-cream)"/>
<path d="M182 862 q-10 -34 6 -38 l7 0 l0 38 Z" fill="#fffdf6" opacity="0.7"/>
<rect x="188" y="818" width="14" height="8" rx="3" fill="#2f6fb3"/>
<path d="M184 844 q14 -4 24 0" stroke="#2f6fb3" stroke-width="2.2" fill="none"/>
<path d="M200 876 q0 8 -6 10" fill="none" stroke="#4e585f" stroke-width="3.2" stroke-linecap="round"/>
<g data-obj="castanets" transform="translate(-325,-115)">
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
<ellipse cx="58" cy="962" rx="24" ry="6" fill="#231506" opacity="0.6"/>
<path d="M40 962 q-8 -38 6 -42 l22 0 q14 4 6 42 Z" fill="url(#spain-green)"/>
<path d="M40 962 q-8 -38 6 -42 l10 0 l0 42 Z" fill="#c2dd8c" opacity="0.6"/>
<rect x="46" y="916" width="18" height="8" rx="3" fill="#4e6b2e"/>
<ellipse cx="122" cy="962" rx="30" ry="6" fill="#231506" opacity="0.6"/>
<path d="M98 962 q-10 -20 4 -22 l44 0 q14 2 4 22 Z" fill="url(#spain-cream)"/>
<path d="M98 962 q-10 -20 4 -22 l20 0 l0 22 Z" fill="#fffdf6" opacity="0.7"/>
<path d="M102 942 q-8 -16 4 -18 l36 0 q12 2 4 18 Z" fill="url(#spain-tile)"/>
<path d="M102 942 q-8 -16 4 -18 l16 0 l0 18 Z" fill="#f2f9ff" opacity="0.8"/>
<ellipse cx="196" cy="962" rx="26" ry="6" fill="#231506" opacity="0.6"/>
<path d="M174 962 L218 962 L214 926 L178 926 Z" fill="url(#spain-terra)"/>
<path d="M174 962 L184 962 L182 926 L178 926 Z" fill="#f3ae83" opacity="0.7"/>
<rect x="172" y="920" width="48" height="8" rx="3" fill="url(#spain-terra2)"/>
<rect x="22" y="976" width="104" height="104" rx="3" fill="url(#spain-wood)"/>
<rect x="130" y="976" width="108" height="104" rx="3" fill="url(#spain-wood)"/>
<rect x="130" y="976" width="108" height="104" rx="3" fill="#3a2a16" opacity="0.25"/>
<rect x="30" y="984" width="88" height="88" rx="2" fill="none" stroke="#6b4526" stroke-width="2"/>
<rect x="138" y="984" width="92" height="88" rx="2" fill="none" stroke="#5c3a1c" stroke-width="2"/>
<circle cx="116" cy="1028" r="6" fill="url(#spain-brass)"/>
<circle cx="140" cy="1028" r="6" fill="url(#spain-brass)"/>
<rect x="10" y="1076" width="240" height="16" rx="3" fill="url(#spain-wooddark)"/>
<rect x="10" y="1076" width="240" height="5" rx="2.5" fill="#a97f4c"/>
<ellipse cx="272" cy="1092" rx="26" ry="7" fill="url(#spain-contact)"/>
<g data-obj="broom" transform="translate(4,146)">
  <rect x="252" y="878" width="9" height="42" rx="4" fill="url(#spain-wood)" transform="rotate(6 256 900)"/>
  <path d="M250 918 L268 920 L272 946 L248 944 Z" fill="#c9a25c"/>
  <path d="M250 918 L259 919 L259 945 L248 944 Z" fill="#f0dda8"/>
  <path d="M266 920 L272 946 L263 945 L261 920 Z" fill="#8f6a2c" opacity="0.45"/>
  <path d="M252 926 L270 928 M251 934 L271 936" stroke="#a8863f" stroke-width="1.8"/>
  <rect x="248" y="914" width="24" height="6" rx="2" fill="#7d5228"/>
  <rect x="248" y="914" width="24" height="2.4" rx="1.2" fill="#b78b52"/>
</g>

<ellipse cx="700" cy="1160" rx="230" ry="52" fill="url(#spain-shadow)" transform="rotate(6 700 1160)"/>
<rect x="452" y="1122" width="20" height="78" fill="url(#spain-wooddark)"/>
<rect x="760" y="1122" width="20" height="78" fill="url(#spain-wooddark)"/>
<rect x="452" y="1122" width="7" height="78" fill="#c08b52" opacity="0.7"/>
<rect x="760" y="1122" width="7" height="78" fill="#c08b52" opacity="0.55"/>
<rect x="430" y="940" width="370" height="42" rx="8" fill="url(#spain-wood)"/>
<rect x="430" y="940" width="370" height="11" rx="5" fill="#e8c090"/>
<rect x="430" y="971" width="370" height="11" rx="5" fill="#5c3a1c" opacity="0.42"/>

<path d="M478 1196 Q474 1186 482 1182 L514 1174 Q530 1170 534 1180 L534 1190 Q532 1196 522 1197 L486 1199 Z" fill="#a8895a"/>
<path d="M478 1192 Q474 1182 482 1178 L514 1170 Q530 1166 534 1176 L534 1186 Q532 1192 522 1193 L486 1195 Z" fill="url(#spain-cream)"/>
<path d="M478 1192 L534 1186 L534 1192 L480 1198 Z" fill="#b89a68"/>
<path d="M654 1198 Q650 1182 658 1176 L664 1150 Q668 1142 678 1144 L688 1148 Q694 1152 690 1162 L692 1184 Q692 1196 680 1197 Z" fill="#2f2233"/>
<path d="M658 1176 Q672 1168 690 1168 L690 1162 Q672 1160 660 1168 Z" fill="#57465e"/>
<path d="M726 1196 Q722 1186 730 1182 L762 1174 Q776 1170 780 1180 L780 1190 Q778 1196 768 1197 L734 1199 Z" fill="#7c1229"/>
<path d="M726 1192 Q722 1182 730 1178 L762 1170 Q776 1166 780 1176 L780 1186 Q778 1192 768 1193 L734 1195 Z" fill="url(#spain-red)"/>
<path d="M726 1192 L780 1186 L780 1192 L728 1198 Z" fill="#2f2233"/>
<ellipse cx="600" cy="1196" rx="42" ry="9" fill="url(#spain-contact)"/>
<g data-obj="flamenco-shoe" transform="translate(33.3,5)">
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

<path d="M440 982 L796 982 L790 1122 L444 1122 Z" fill="url(#spain-cloth)"/>
<rect x="470" y="982" width="14" height="140" fill="#e0563f" opacity="0.26"/>
<rect x="552" y="982" width="14" height="140" fill="#e0563f" opacity="0.26"/>
<rect x="634" y="982" width="14" height="140" fill="#e0563f" opacity="0.26"/>
<rect x="716" y="982" width="14" height="140" fill="#e0563f" opacity="0.26"/>
<rect x="440" y="1044" width="354" height="13" fill="#2f6fb3" opacity="0.18"/>
<rect x="440" y="1100" width="352" height="13" fill="#2f6fb3" opacity="0.18"/>
<rect x="440" y="982" width="356" height="14" fill="#8a6a52" opacity="0.18"/>
<polygon points="440,982 580,982 520,1122 444,1122" fill="#fffdf2" opacity="0.28"/>
<polygon points="712,982 796,982 790,1122 700,1122" fill="#9d8a7c" opacity="0.15"/>
<path d="M444 1122 q15 12 30 0 q15 12 30 0 q15 12 30 0 q15 12 30 0 q15 12 30 0 q15 12 30 0 q15 12 30 0 q15 12 30 0 q15 12 30 0 q15 12 30 0 q15 12 30 0 q15 12 30 0" fill="#dcc7a6"/>
<path d="M444 1122 q15 12 30 0 q15 12 30 0 q15 12 30 0 q15 12 30 0" fill="#f2e4cc"/>

<path d="M474 940 Q456 906 450 878 M474 940 Q466 902 462 874 M474 940 Q480 900 482 872 M474 940 Q492 906 502 882 M474 940 Q502 914 514 896" stroke="#5b8940" stroke-width="2.2" fill="none"/>
<circle cx="450" cy="876" r="6" fill="url(#spain-purple)"/>
<circle cx="462" cy="872" r="6" fill="url(#spain-purple)"/>
<circle cx="482" cy="870" r="7" fill="url(#spain-purple)"/>
<circle cx="502" cy="880" r="6" fill="url(#spain-purple)"/>
<circle cx="514" cy="895" r="6" fill="url(#spain-purple)"/>
<circle cx="458" cy="896" r="5" fill="#a78bfa"/>
<circle cx="492" cy="890" r="5" fill="#8b5cf6"/>
<circle cx="506" cy="910" r="5" fill="#6a5fa8"/>
<path d="M440 906 q-5 -18 3 -26 q8 8 3 26 Z" fill="url(#spain-purple)"/>
<path d="M438 882 l-4 -4 M444 888 l5 -5 M438 894 l-5 -4 M445 900 l5 -6" stroke="#6a5fa8" stroke-width="1.6" fill="none"/>
<path d="M440 906 q2 20 4 34" stroke="#5b8940" stroke-width="2" fill="none"/>
<g data-obj="lightstick" transform="translate(22,-5)">
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
<path d="M474 940 Q468 916 464 894 M474 940 Q484 918 490 900" stroke="#6b8a46" stroke-width="2.2" fill="none"/>
<circle cx="464" cy="892" r="5.5" fill="url(#spain-purple)"/>
<circle cx="490" cy="898" r="5.5" fill="url(#spain-purple)"/>
<circle cx="470" cy="922" r="4.5" fill="#a78bfa"/>
<circle cx="486" cy="926" r="4" fill="#6a5fa8"/>
<ellipse cx="480" cy="998" rx="46" ry="11" fill="url(#spain-contact)"/>
<g data-obj="flower-vase" transform="translate(18,-14)">
  <path d="M436 944 L474 944 L486 986 Q478 1010 455 1010 Q432 1010 424 986 Z" fill="url(#spain-cream)"/>
  <path d="M436 944 L456 944 L456 1010 Q436 1008 428 988 Z" fill="#fffdf6" opacity="0.7"/>
  <path d="M474 944 L486 986 Q482 1004 466 1009 Q478 998 478 984 Q478 964 470 944 Z" fill="#9d8768" opacity="0.5"/>
  <path d="M430 966 q26 10 50 0 q-2 12 -4 20 q-22 8 -42 0 Z" fill="#2f6fb3" opacity="0.5"/>
  <rect x="432" y="940" width="46" height="9" rx="4" fill="#fffaef"/>
  <path d="M434 954 q22 8 42 0" stroke="#f2c14e" stroke-width="2.5" fill="none"/>
  <path d="M432 950 q-4 26 6 46" stroke="#ffffff" stroke-width="2.6" fill="none" opacity="0.75"/>
</g>
<ellipse cx="562" cy="998" rx="26" ry="7" fill="url(#spain-contact)"/>
<g data-obj="red-wine" transform="translate(-104.9,-5)">
  <path d="M652 962 q-4 -18 7 -21 l14 0 q11 3 7 21 q-3 13 -14 13 q-11 0 -14 -13 Z" fill="url(#spain-glass)"/>
  <path d="M654 971 q4 -8 26 0 q-3 11 -13 11 q-10 0 -13 -11 Z" fill="url(#spain-red)"/>
  <path d="M655 948 q3 -6 6 -6 l0 26 q-5 -8 -6 -20 Z" fill="#ffffff" opacity="0.7"/>
  <rect x="664" y="975" width="4" height="20" fill="#dff0f8" opacity="0.9"/>
  <ellipse cx="666" cy="997" rx="13" ry="4" fill="#dff0f8" opacity="0.92"/>
</g>
<ellipse cx="614" cy="998" rx="28" ry="8" fill="url(#spain-contact)"/>
<g data-obj="wine-bottle" transform="translate(-150,-58)">
  <path d="M748 1010 q-4 -18 8 -22 l14 0 q12 4 8 22 l0 34 q0 10 -15 10 q-15 0 -15 -10 Z" fill="url(#spain-leaf)"/>
  <path d="M748 1010 q-4 -18 8 -22 l5 0 l0 66 q-13 0 -13 -10 Z" fill="#9dc472" opacity="0.65"/>
  <path d="M774 992 q6 6 4 18 l0 34 q0 8 -10 10 q6 -6 6 -14 l0 -34 q0 -10 0 -14 Z" fill="#25401d" opacity="0.55"/>
  <rect x="756" y="980" width="14" height="12" rx="3" fill="#7c1229"/>
  <rect x="756" y="980" width="5" height="12" rx="2.5" fill="#b8465c"/>
  <rect x="746" y="1022" width="34" height="16" fill="url(#spain-yellow)"/>
  <path d="M750 1030 L776 1030" stroke="#b8801a" stroke-width="2"/>
  <path d="M750 996 q-2 20 -1 44" stroke="#d8f0bc" stroke-width="2.4" fill="none" opacity="0.7"/>
</g>
<ellipse cx="666" cy="998" rx="22" ry="6" fill="url(#spain-contact)"/>
<path d="M652 996 q-4 -16 7 -19 l12 0 q11 3 7 19 q-3 12 -13 12 q-10 0 -13 -12 Z" fill="url(#spain-glass)"/>
<path d="M654 984 q4 -7 24 0 q-3 10 -12 10 q-9 0 -12 -10 Z" fill="#f7a94b"/>
<ellipse cx="698" cy="998" rx="30" ry="8" fill="url(#spain-contact)"/>
<g data-obj="bread-basket" transform="translate(0.3,-100)">
  <path d="M674 1096 q-7 -24 7 -28 l32 0 q14 4 7 28 Z" fill="url(#spain-wood)"/>
  <path d="M674 1096 q-7 -24 7 -28 l14 0 l0 28 Z" fill="#e0b183" opacity="0.75"/>
  <path d="M711 1068 q8 4 6 28 l-10 0 q4 -16 0 -28 Z" fill="#5c3a1c" opacity="0.4"/>
  <path d="M678 1078 L712 1078 M678 1088 L712 1088" stroke="#7d5228" stroke-width="2"/>
  <ellipse cx="694" cy="1064" rx="17" ry="10" fill="#e8b878"/>
  <ellipse cx="690" cy="1061" rx="11" ry="7" fill="#fbdfae"/>
  <ellipse cx="686" cy="1058" rx="5" ry="3" fill="#fff4dd" opacity="0.9"/>
  <path d="M684 1062 L690 1056 M694 1063 L700 1057" stroke="#c9964f" stroke-width="2"/>
</g>
<ellipse cx="762" cy="998" rx="30" ry="8" fill="url(#spain-contact)"/>
<path d="M740 996 q-10 -34 6 -38 l22 0 q16 4 6 38 Z" fill="url(#spain-cream)"/>
<path d="M740 996 q-10 -34 6 -38 l10 0 l0 38 Z" fill="#fffdf6" opacity="0.7"/>
<rect x="746" y="950" width="16" height="9" rx="3" fill="#2f6fb3"/>
<path d="M742 976 q16 -4 28 0" stroke="#2f6fb3" stroke-width="2.2" fill="none"/>
<ellipse cx="470" cy="1080" rx="34" ry="9" fill="url(#spain-contact)"/>
<path d="M440 1078 q26 -14 52 -2 q-8 18 -30 16 q-20 -2 -22 -14 Z" fill="#e6d3ab"/>
<ellipse cx="466" cy="1076" rx="22" ry="9" fill="url(#spain-cream)"/>
<ellipse cx="456" cy="1074" rx="7" ry="4" fill="#5b8940"/>
<ellipse cx="472" cy="1076" rx="6" ry="4" fill="#8f1732"/>
<ellipse cx="500" cy="1086" rx="34" ry="9" fill="url(#spain-contact)"/>
<g data-obj="cheese-wedge" transform="translate(374,-112)">
  <path d="M96 1186 L152 1176 L150 1150 Z" fill="url(#spain-lemon)"/>
  <path d="M96 1186 L152 1176 L152 1184 L98 1194 Z" fill="#c9a72c"/>
  <path d="M126 1181 L152 1176 L152 1184 L128 1189 Z" fill="#9c7c12" opacity="0.5"/>
  <circle cx="126" cy="1176" r="4" fill="#c9a72c"/>
  <circle cx="140" cy="1170" r="3" fill="#c9a72c"/>
  <circle cx="132" cy="1163" r="2.5" fill="#c9a72c"/>
  <path d="M100 1183 L146 1174" stroke="#fff6cc" stroke-width="2" opacity="0.7"/>
</g>
<ellipse cx="578" cy="1086" rx="32" ry="9" fill="url(#spain-contact)"/>
<g data-obj="grapes" transform="translate(390,-109)">
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
<ellipse cx="650" cy="1086" rx="30" ry="8" fill="url(#spain-contact)"/>
<g data-obj="lemon-half" transform="translate(11,-52)">
  <ellipse cx="640" cy="1112" rx="24" ry="22" fill="#b98f16"/>
  <ellipse cx="639" cy="1109" rx="24" ry="22" fill="url(#spain-lemon)"/>
  <circle cx="639" cy="1109" r="17" fill="#fdf6cc"/>
  <path d="M639 1092 L639 1126 M622 1109 L656 1109 M627 1097 L651 1121 M651 1097 L627 1121" stroke="#e8cf6a" stroke-width="2.4"/>
  <circle cx="639" cy="1109" r="4" fill="#fffdf0"/>
  <path d="M623 1099 a24 22 0 0 1 14 -12" fill="none" stroke="#fffce8" stroke-width="2.4" opacity="0.9"/>
</g>
<ellipse cx="718" cy="1086" rx="26" ry="7" fill="url(#spain-contact)"/>
<g data-obj="pear" transform="translate(682.2,-98)">
  <path d="M30 1178 q-14 -8 -12 -22 q2 -12 10 -14 q2 -12 8 -14 q8 2 8 14 q10 4 10 16 q0 14 -12 20 q-6 4 -12 0 Z" fill="#b8901c"/>
  <path d="M30 1178 q-14 -8 -12 -22 q2 -12 10 -14 q2 -12 6 -14 l0 52 Z" fill="url(#spain-lemon)"/>
  <path d="M44 1142 q10 4 10 16 q0 14 -12 20 q-4 3 -8 1 q10 -6 12 -20 q2 -12 -2 -17 Z" fill="#8f6a12" opacity="0.45"/>
  <ellipse cx="27" cy="1152" rx="4" ry="6" fill="#fdf3a8" opacity="0.85" transform="rotate(-20 27 1152)"/>
  <rect x="34" y="1122" width="4" height="12" rx="2" fill="#6b4526"/>
  <path d="M38 1128 q12 -8 16 0 q-10 8 -16 0 Z" fill="#6b9a52"/>
</g>
<circle cx="756" cy="1068" r="13" fill="url(#spain-red)"/>
<circle cx="752" cy="1063" r="4.5" fill="#f8a08c" opacity="0.8"/>
<circle cx="778" cy="1076" r="11" fill="url(#spain-red)"/>
<circle cx="740" cy="1082" r="10" fill="url(#spain-green)"/>

<ellipse cx="44" cy="1188" rx="34" ry="9" fill="url(#spain-contact)"/>
<g data-obj="clay-amphora" transform="translate(-358.2,-10)">
  <path d="M384 1196 q-10 -34 6 -44 q-6 -16 6 -20 l8 0 q12 4 6 20 q16 10 6 44 Z" fill="url(#spain-terra)"/>
  <path d="M384 1196 q-10 -34 6 -44 q-6 -16 6 -20 l3 0 l0 64 Z" fill="#f0a678" opacity="0.6"/>
  <path d="M404 1132 q12 4 6 20 q16 10 6 44 l-12 0 q10 -32 -4 -44 q6 -14 4 -20 Z" fill="#7c3a1c" opacity="0.4"/>
  <rect x="392" y="1126" width="16" height="8" rx="3" fill="#9e4a28"/>
  <rect x="392" y="1126" width="6" height="8" rx="3" fill="#e08a58"/>
  <path d="M386 1160 q14 -5 28 0" stroke="#f7c19c" stroke-width="2.5" fill="none"/>
</g>
<ellipse cx="120" cy="1186" rx="36" ry="9" fill="url(#spain-contact)"/>
<g data-obj="wicker-basket" transform="translate(-428,242)">
  <path d="M522 942 q-8 -42 8 -46 l32 0 q16 4 8 46 Z" fill="url(#spain-wood)"/>
  <path d="M522 942 q-8 -42 8 -46 l14 0 l0 46 Z" fill="#e0b183" opacity="0.75"/>
  <path d="M560 896 q8 4 8 46 l-12 0 q6 -24 0 -46 Z" fill="#5c3a1c" opacity="0.4"/>
  <path d="M524 908 L570 908 M523 920 L571 920 M522 932 L572 932" stroke="#8a5a30" stroke-width="2.4"/>
  <path d="M530 896 q16 -18 32 0" fill="none" stroke="#7d5228" stroke-width="4"/>
  <rect x="518" y="890" width="58" height="8" rx="3" fill="url(#spain-wood)"/>
  <rect x="518" y="890" width="58" height="3" rx="1.5" fill="#e8c090"/>
</g>
<ellipse cx="204" cy="1192" rx="48" ry="11" fill="url(#spain-contact)"/>
<path d="M204 1082 q-8 18 -4 32" stroke="#5b8940" stroke-width="4" fill="none"/>
<g data-obj="sunflower" transform="translate(-164,-28)">
  <circle cx="374" cy="1084" r="20" fill="#c98115"/>
  <circle cx="374" cy="1084" r="20" fill="url(#spain-yellow)"/>
  <path d="M374 1060 L380 1074 L368 1074 Z M398 1084 L384 1090 L384 1078 Z M374 1108 L368 1094 L380 1094 Z M350 1084 L364 1078 L364 1090 Z M391 1067 L382 1079 L379 1072 Z M391 1101 L379 1096 L386 1090 Z M357 1101 L366 1089 L369 1096 Z M357 1067 L369 1072 L362 1078 Z" fill="#ffe9a8"/>
  <circle cx="374" cy="1084" r="11" fill="#6b4526"/>
  <circle cx="371" cy="1081" r="4.5" fill="#a06d3c"/>
  <path d="M360 1074 a20 20 0 0 1 12 -10" fill="none" stroke="#fff6d0" stroke-width="2.4" opacity="0.85"/>
</g>
<path d="M170 1190 L238 1190 L232 1114 L176 1114 Z" fill="url(#spain-terra)"/>
<path d="M170 1190 L188 1190 L190 1114 L176 1114 Z" fill="#f0a678" opacity="0.6"/>
<path d="M224 1114 L232 1114 L238 1190 L222 1190 Z" fill="#7c3a1c" opacity="0.45"/>
<rect x="162" y="1104" width="84" height="16" rx="4" fill="url(#spain-terra2)"/>
<rect x="162" y="1104" width="84" height="6" rx="3" fill="#f7c19c"/>
<ellipse cx="204" cy="1112" rx="34" ry="6" fill="#4a2f1c"/>
<ellipse cx="278" cy="1192" rx="34" ry="9" fill="url(#spain-contact)"/>
<g data-obj="melon" transform="translate(-334,248)">
  <ellipse cx="612" cy="920" rx="24" ry="22" fill="#3a5c2c"/>
  <ellipse cx="610" cy="917" rx="24" ry="22" fill="url(#spain-green)"/>
  <path d="M598 899 q6 20 0 38 M610 895 q5 22 0 44 M622 899 q-5 20 0 38" stroke="#3d6432" stroke-width="2.6" fill="none"/>
  <ellipse cx="599" cy="905" rx="8" ry="5" fill="#e2f2bd" opacity="0.85" transform="rotate(-35 599 905)"/>
  <path d="M592 904 a24 22 0 0 1 16 -9" fill="none" stroke="#f0fbd8" stroke-width="2.2" opacity="0.75"/>
  <path d="M610 895 q4 -8 10 -6" fill="none" stroke="#6b4526" stroke-width="3"/>
</g>

<ellipse cx="392" cy="1194" rx="106" ry="18" fill="url(#spain-contact)"/>
<rect x="302" y="1106" width="164" height="86" rx="3" fill="url(#spain-wooddark)"/>
<rect x="308" y="1112" width="152" height="74" rx="2" fill="url(#spain-wood)"/>
<rect x="308" y="1112" width="152" height="10" fill="#e8c090"/>
<rect x="308" y="1136" width="152" height="10" fill="#4b3018" opacity="0.5"/>
<rect x="308" y="1162" width="152" height="10" fill="#4b3018" opacity="0.5"/>
<rect x="308" y="1046" width="78" height="58" rx="3" fill="url(#spain-wooddark)"/>
<rect x="313" y="1051" width="68" height="48" rx="2" fill="url(#spain-wood)"/>
<rect x="313" y="1051" width="68" height="8" fill="#e8c090"/>
<rect x="390" y="1054" width="76" height="50" rx="3" fill="url(#spain-wooddark)"/>
<rect x="395" y="1059" width="66" height="40" rx="2" fill="url(#spain-wood)"/>
<rect x="395" y="1059" width="66" height="7" fill="#e8c090"/>
<rect x="390" y="1054" width="76" height="50" rx="3" fill="#3a2a16" opacity="0.2"/>
<ellipse cx="338" cy="1046" rx="30" ry="7" fill="#231506" opacity="0.45"/>
<path d="M366 1042 q-5 -14 4 -18 l8 0 q9 4 4 18 Z" fill="url(#spain-green)"/>
<g data-obj="aubergine" transform="translate(-2,46)">
  <path d="M336 1000 q-16 -6 -16 -20 q0 -14 14 -18 q14 -4 20 6 q6 10 -2 22 q-6 10 -16 10 Z" fill="url(#spain-purple)"/>
  <path d="M336 1000 q-16 -6 -16 -20 q0 -14 14 -18 q-4 18 2 38 Z" fill="#8f74a8" opacity="0.7"/>
  <path d="M352 968 q6 10 -2 22 q-6 10 -16 10 q12 -6 16 -18 q3 -8 2 -14 Z" fill="#332750" opacity="0.55"/>
  <ellipse cx="329" cy="977" rx="5" ry="8" fill="#d5c6f0" opacity="0.7" transform="rotate(-20 329 977)"/>
  <path d="M348 964 q10 -4 12 4 q-8 6 -14 2 Z" fill="#5c7a3a"/>
  <rect x="345" y="956" width="5" height="12" rx="2" fill="#6b9a52"/>
</g>
<circle cx="378" cy="1036" r="17" fill="#bf5f0c"/>
<circle cx="377" cy="1034" r="17" fill="url(#spain-orange)"/>
<circle cx="452" cy="1040" r="15" fill="#bf5f0c"/>
<circle cx="451" cy="1038" r="15" fill="url(#spain-orange)"/>
<ellipse cx="424" cy="1054" rx="34" ry="7" fill="#231506" opacity="0.45"/>
<g data-obj="orange" transform="translate(-339,672)">
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

<rect x="0" y="926" width="800" height="274" fill="#ffb46b" opacity="0.08"/>
<polygon points="0,400 190,400 92,930 0,930" fill="#fff4d4" opacity="0.13"/>
<polygon points="436,400 528,400 486,760 418,760" fill="#fff4d4" opacity="0.07"/>
<rect x="0" y="0" width="800" height="1200" fill="url(#spain-sheen)" opacity="0.05"/>

</svg>`
});
