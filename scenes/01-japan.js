window.SCENES = window.SCENES || [];
window.SCENES.push({
  id: 'japan',
  order: 1,
  country: 'Japan',
  flag: '🇯🇵',
  title: 'Sakura Street, Tokyo',
  caption: 'Cherry blossoms, ramen nights, and you.',
  stamp: '🌸',
  objects: [
    { id: 'lightstick',      name: 'Lightstick' },
    { id: 'purple-heart',    name: 'Purple Heart' },
    { id: 'chimney',         name: 'Chimney' },
    { id: 'streamer',        name: 'Streamer' },
    { id: 'shop-window',     name: 'Shop Window' },
    { id: 'teapot',          name: 'Teapot' },
    { id: 'manhole',         name: 'Manhole' },
    { id: 'roof-vent',       name: 'Roof Vent' },
    { id: 'twig-lamp',       name: 'Twig Lamp' },
    { id: 'orange-pane',     name: 'Orange Pane' },
    { id: 'matcha-cup',      name: 'Matcha Cup' },
    { id: 'geta-sandal',     name: 'Geta Sandal' },
    { id: 'water-tank',      name: 'Water Tank' },
    { id: 'tree-chime',      name: 'Wind Chime' },
    { id: 'ac-unit',         name: 'AC Unit' },
    { id: 'onigiri',         name: 'Onigiri' },
    { id: 'broom',           name: 'Broom' },
    { id: 'tv-aerial',       name: 'TV Aerial' },
    { id: 'tanzaku',         name: 'Wish Tag' },
    { id: 'wall-clock',      name: 'Wall Clock' },
    { id: 'daruma',          name: 'Daruma Doll' },
    { id: 'dropped-can',     name: 'Green Can' },
    { id: 'weather-vane',    name: 'Weathervane' },
    { id: 'tree-bell',       name: 'Tree Bell' },
    { id: 'wall-lamp',       name: 'Wall Lamp' },
    { id: 'maneki-neko',     name: 'Lucky Cat' },
    { id: 'coin-purse',      name: 'Coin Purse' },
    { id: 'carp-red',        name: 'Carp Streamer' },
    { id: 'bird-feeder',     name: 'Bird Feeder' },
    { id: 'hanging-plant',   name: 'Hanging Plant' },
    { id: 'red-cloth',       name: 'Red Cloth' },
    { id: 'takeout-box',     name: 'Takeout Box' },
    { id: 'kite',            name: 'Kite' },
    { id: 'nest',            name: 'Nest' },
    { id: 'gas-meter',       name: 'Gas Meter' },
    { id: 'stock-pot',       name: 'Stock Pot' },
    { id: 'paper-fan',       name: 'Paper Fan' },
    { id: 'paper-plane',     name: 'Paper Plane' },
    { id: 'tree-ribbon',     name: 'Ribbon' },
    { id: 'flower-box',      name: 'Flower Box' },
    { id: 'price-tag',       name: 'Price Tag' },
    { id: 'fallen-leaf',     name: 'Fallen Leaf' },
    { id: 'star-kite',       name: 'Star Kite' },
    { id: 'acorn',           name: 'Acorn' },
    { id: 'far-sign',        name: 'Far Sign' },
    { id: 'leaf-veg',        name: 'Cabbage' },
    { id: 'crate-small',     name: 'Small Crate' },
    { id: 'shop-flag',       name: 'Shop Flag' },
    { id: 'succulent',       name: 'Succulent' },
    { id: 'red-box',         name: 'Red Box' }
  ],
  svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 1200">
<defs>
<linearGradient id="japan-sky" x1="0" y1="0" x2="0.12" y2="1"><stop offset="0" stop-color="#fff3de"/><stop offset="0.34" stop-color="#ffe0c8"/><stop offset="0.66" stop-color="#ffc6cf"/><stop offset="1" stop-color="#f3a8c2"/></linearGradient>
<linearGradient id="japan-street" x1="0" y1="0" x2="0.12" y2="1"><stop offset="0" stop-color="#a08a76"/><stop offset="0.16" stop-color="#826d5c"/><stop offset="0.6" stop-color="#63513f"/><stop offset="1" stop-color="#42352b"/></linearGradient>
<radialGradient id="japan-sun" cx="0.5" cy="0.5" r="0.5"><stop offset="0" stop-color="#fff2c9" stop-opacity="0.9"/><stop offset="0.55" stop-color="#fff2c9" stop-opacity="0.31"/><stop offset="1" stop-color="#fff2c9" stop-opacity="0"/></radialGradient>
<radialGradient id="japan-warmglow" cx="0.5" cy="0.5" r="0.5"><stop offset="0" stop-color="#ffb058" stop-opacity="0.62"/><stop offset="0.55" stop-color="#ffb058" stop-opacity="0.21"/><stop offset="1" stop-color="#ffb058" stop-opacity="0"/></radialGradient>
<radialGradient id="japan-purpglow" cx="0.5" cy="0.5" r="0.5"><stop offset="0" stop-color="#b78cff" stop-opacity="0.55"/><stop offset="0.55" stop-color="#b78cff" stop-opacity="0.19"/><stop offset="1" stop-color="#b78cff" stop-opacity="0"/></radialGradient>
<radialGradient id="japan-shade" cx="0.5" cy="0.5" r="0.5"><stop offset="0" stop-color="#33261f" stop-opacity="0.42"/><stop offset="0.55" stop-color="#33261f" stop-opacity="0.14"/><stop offset="1" stop-color="#33261f" stop-opacity="0"/></radialGradient>
<radialGradient id="japan-coolshade" cx="0.5" cy="0.5" r="0.5"><stop offset="0" stop-color="#3b4e57" stop-opacity="0.34"/><stop offset="0.55" stop-color="#3b4e57" stop-opacity="0.12"/><stop offset="1" stop-color="#3b4e57" stop-opacity="0"/></radialGradient>
<linearGradient id="japan-far" x1="0" y1="0" x2="0.92" y2="1"><stop offset="0" stop-color="#e6cad9"/><stop offset="0.48" stop-color="#cfaac4"/><stop offset="1" stop-color="#ac89a6"/></linearGradient>
<linearGradient id="japan-farb" x1="0" y1="0" x2="0.92" y2="1"><stop offset="0" stop-color="#dcbdd0"/><stop offset="0.48" stop-color="#c199b8"/><stop offset="1" stop-color="#9f7c9b"/></linearGradient>
<linearGradient id="japan-cream" x1="0" y1="0" x2="0.92" y2="1"><stop offset="0" stop-color="#fff7e6"/><stop offset="0.48" stop-color="#f2dfbe"/><stop offset="1" stop-color="#cfb287"/></linearGradient>
<linearGradient id="japan-creamdim" x1="0" y1="0" x2="0.92" y2="1"><stop offset="0" stop-color="#f7e8d0"/><stop offset="0.48" stop-color="#e3ccab"/><stop offset="1" stop-color="#bb9d78"/></linearGradient>
<linearGradient id="japan-wood" x1="0" y1="0" x2="0.92" y2="1"><stop offset="0" stop-color="#dcac70"/><stop offset="0.48" stop-color="#b07a4e"/><stop offset="1" stop-color="#754d31"/></linearGradient>
<linearGradient id="japan-woodd" x1="0" y1="0" x2="0.92" y2="1"><stop offset="0" stop-color="#ab7a4c"/><stop offset="0.48" stop-color="#7f5335"/><stop offset="1" stop-color="#4d301f"/></linearGradient>
<linearGradient id="japan-woodl" x1="0" y1="0" x2="0.92" y2="1"><stop offset="0" stop-color="#f0cb96"/><stop offset="0.48" stop-color="#cf9a63"/><stop offset="1" stop-color="#96663b"/></linearGradient>
<linearGradient id="japan-red" x1="0" y1="0" x2="0.92" y2="1"><stop offset="0" stop-color="#f7805f"/><stop offset="0.48" stop-color="#d4472f"/><stop offset="1" stop-color="#8a2717"/></linearGradient>
<linearGradient id="japan-redd" x1="0" y1="0" x2="0.92" y2="1"><stop offset="0" stop-color="#d25b45"/><stop offset="0.48" stop-color="#a02c1c"/><stop offset="1" stop-color="#63180d"/></linearGradient>
<linearGradient id="japan-gold" x1="0" y1="0" x2="0.92" y2="1"><stop offset="0" stop-color="#ffe89b"/><stop offset="0.48" stop-color="#f0b93f"/><stop offset="1" stop-color="#a5711b"/></linearGradient>
<linearGradient id="japan-teal" x1="0" y1="0" x2="0.92" y2="1"><stop offset="0" stop-color="#8cbcc9"/><stop offset="0.48" stop-color="#467484"/><stop offset="1" stop-color="#20434c"/></linearGradient>
<linearGradient id="japan-teald" x1="0" y1="0" x2="0.92" y2="1"><stop offset="0" stop-color="#548592"/><stop offset="0.48" stop-color="#2c4a55"/><stop offset="1" stop-color="#132c35"/></linearGradient>
<linearGradient id="japan-green" x1="0" y1="0" x2="0.92" y2="1"><stop offset="0" stop-color="#a9d77c"/><stop offset="0.48" stop-color="#5f9346"/><stop offset="1" stop-color="#325c28"/></linearGradient>
<linearGradient id="japan-greend" x1="0" y1="0" x2="0.92" y2="1"><stop offset="0" stop-color="#7fb659"/><stop offset="0.48" stop-color="#456f37"/><stop offset="1" stop-color="#23461d"/></linearGradient>
<linearGradient id="japan-purple" x1="0" y1="0" x2="0.92" y2="1"><stop offset="0" stop-color="#cba9ff"/><stop offset="0.48" stop-color="#8a5cf0"/><stop offset="1" stop-color="#4a2c8c"/></linearGradient>
<linearGradient id="japan-purpled" x1="0" y1="0" x2="0.92" y2="1"><stop offset="0" stop-color="#a07ed9"/><stop offset="0.48" stop-color="#67429f"/><stop offset="1" stop-color="#361f66"/></linearGradient>
<linearGradient id="japan-metal" x1="0" y1="0" x2="0.92" y2="1"><stop offset="0" stop-color="#eaf2f1"/><stop offset="0.48" stop-color="#adbab8"/><stop offset="1" stop-color="#6f7d7a"/></linearGradient>
<linearGradient id="japan-metald" x1="0" y1="0" x2="0.92" y2="1"><stop offset="0" stop-color="#bcc9c8"/><stop offset="0.48" stop-color="#8b9998"/><stop offset="1" stop-color="#556260"/></linearGradient>
<linearGradient id="japan-paper" x1="0" y1="0" x2="0.92" y2="1"><stop offset="0" stop-color="#fffbf2"/><stop offset="0.48" stop-color="#f4e7d0"/><stop offset="1" stop-color="#cdb894"/></linearGradient>
<linearGradient id="japan-papercool" x1="0" y1="0" x2="0.92" y2="1"><stop offset="0" stop-color="#f9f6f0"/><stop offset="0.48" stop-color="#e7e1d3"/><stop offset="1" stop-color="#bdb5a3"/></linearGradient>
<linearGradient id="japan-ceramic" x1="0" y1="0" x2="0.92" y2="1"><stop offset="0" stop-color="#fffdf8"/><stop offset="0.48" stop-color="#f2e6d4"/><stop offset="1" stop-color="#c8b298"/></linearGradient>
<linearGradient id="japan-ink" x1="0" y1="0" x2="0.92" y2="1"><stop offset="0" stop-color="#6e5f5a"/><stop offset="0.48" stop-color="#453839"/><stop offset="1" stop-color="#20191a"/></linearGradient>
<linearGradient id="japan-charcoal" x1="0" y1="0" x2="0.92" y2="1"><stop offset="0" stop-color="#726663"/><stop offset="0.48" stop-color="#443b39"/><stop offset="1" stop-color="#1f1a1a"/></linearGradient>
<linearGradient id="japan-glass" x1="0" y1="0" x2="0.92" y2="1"><stop offset="0" stop-color="#c3e2ea"/><stop offset="0.48" stop-color="#7fa8b6"/><stop offset="1" stop-color="#456d7c"/></linearGradient>
<linearGradient id="japan-glasswarm" x1="0" y1="0" x2="0.92" y2="1"><stop offset="0" stop-color="#ffdfae"/><stop offset="0.48" stop-color="#f0a35d"/><stop offset="1" stop-color="#b96733"/></linearGradient>
<linearGradient id="japan-rose" x1="0" y1="0" x2="0.92" y2="1"><stop offset="0" stop-color="#ffdcea"/><stop offset="0.48" stop-color="#f0a0c4"/><stop offset="1" stop-color="#c26a93"/></linearGradient>
<linearGradient id="japan-silver" x1="0" y1="0" x2="0.92" y2="1"><stop offset="0" stop-color="#f4f8f9"/><stop offset="0.48" stop-color="#ccd7d9"/><stop offset="1" stop-color="#909ea1"/></linearGradient>
<linearGradient id="japan-pearl" x1="0" y1="0" x2="0.92" y2="1"><stop offset="0" stop-color="#ffffff"/><stop offset="0.48" stop-color="#f2ecfa"/><stop offset="1" stop-color="#c6b6dc"/></linearGradient>
<linearGradient id="japan-bark" x1="0" y1="0" x2="0.92" y2="1"><stop offset="0" stop-color="#a3714b"/><stop offset="0.48" stop-color="#77492f"/><stop offset="1" stop-color="#452718"/></linearGradient>
<linearGradient id="japan-barkl" x1="0" y1="0" x2="0.92" y2="1"><stop offset="0" stop-color="#c08b5d"/><stop offset="0.48" stop-color="#8a5a3b"/><stop offset="1" stop-color="#583520"/></linearGradient>
<linearGradient id="japan-awn" x1="0" y1="0" x2="0.92" y2="1"><stop offset="0" stop-color="#f7f0e2"/><stop offset="0.48" stop-color="#e5d7c1"/><stop offset="1" stop-color="#b9a98e"/></linearGradient>
<linearGradient id="japan-navy" x1="0" y1="0" x2="0.92" y2="1"><stop offset="0" stop-color="#5f8a99"/><stop offset="0.48" stop-color="#31555f"/><stop offset="1" stop-color="#16303a"/></linearGradient>
<linearGradient id="japan-lantern" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#a8351f"/><stop offset="0.38" stop-color="#f4785f"/><stop offset="1" stop-color="#93291a"/></linearGradient>
<radialGradient id="japan-bloomA" cx="0.34" cy="0.28" r="0.82"><stop offset="0" stop-color="#e281a8"/><stop offset="0.52" stop-color="#d9779f"/><stop offset="1" stop-color="#c76892"/></radialGradient>
<radialGradient id="japan-bloomB" cx="0.34" cy="0.28" r="0.82"><stop offset="0" stop-color="#ffcee1"/><stop offset="0.52" stop-color="#ffc3d9"/><stop offset="1" stop-color="#f9b1cd"/></radialGradient>
<radialGradient id="japan-bloomC" cx="0.34" cy="0.28" r="0.82"><stop offset="0" stop-color="#fff4f9"/><stop offset="0.52" stop-color="#ffe9f2"/><stop offset="1" stop-color="#ffdbeb"/></radialGradient>
<radialGradient id="japan-bloomD" cx="0.34" cy="0.28" r="0.82"><stop offset="0" stop-color="#f9a1c2"/><stop offset="0.52" stop-color="#f395ba"/><stop offset="1" stop-color="#e585ab"/></radialGradient>
<radialGradient id="japan-purpS" cx="0.34" cy="0.28" r="0.82"><stop offset="0" stop-color="#e2ceff"/><stop offset="0.52" stop-color="#9a6ef0"/><stop offset="1" stop-color="#4f2b95"/></radialGradient>
<radialGradient id="japan-goldS" cx="0.34" cy="0.28" r="0.82"><stop offset="0" stop-color="#fff2c4"/><stop offset="0.52" stop-color="#f0b93f"/><stop offset="1" stop-color="#9c6716"/></radialGradient>
<radialGradient id="japan-redS" cx="0.34" cy="0.28" r="0.82"><stop offset="0" stop-color="#ffa189"/><stop offset="0.52" stop-color="#d4472f"/><stop offset="1" stop-color="#7d2210"/></radialGradient>
<radialGradient id="japan-greenS" cx="0.34" cy="0.28" r="0.82"><stop offset="0" stop-color="#c2e59a"/><stop offset="0.52" stop-color="#5f9346"/><stop offset="1" stop-color="#2d5522"/></radialGradient>
<radialGradient id="japan-creamS" cx="0.34" cy="0.28" r="0.82"><stop offset="0" stop-color="#fffdf6"/><stop offset="0.52" stop-color="#f3e3ca"/><stop offset="1" stop-color="#c6ae8c"/></radialGradient>
<radialGradient id="japan-tealS" cx="0.34" cy="0.28" r="0.82"><stop offset="0" stop-color="#a8d2dc"/><stop offset="0.52" stop-color="#5b8698"/><stop offset="1" stop-color="#274d58"/></radialGradient>
</defs>
<rect x="0" y="0" width="800" height="840" fill="url(#japan-sky)"/>
<circle cx="196" cy="150" r="236" fill="url(#japan-sun)"/>
<circle cx="196" cy="150" r="58" fill="#fff3d1" opacity="0.55"/>
<circle cx="196" cy="150" r="36" fill="#fffaea" opacity="0.7"/>
<path d="M470 132 q44 -28 94 -8 q40 -18 72 8 q34 8 22 26 l-214 5 q-20 -16 26 -31 z" fill="#fff3e2" opacity="0.42"/>
<path d="M478 128 q40 -24 88 -6 q30 -12 56 4 l-6 8 q-38 -16 -70 -2 q-40 -14 -68 -4 z" fill="#fffaf0" opacity="0.4"/>
<path d="M40 236 q34 -20 72 -6 q30 -13 54 6 q24 5 16 19 l-160 3 q-16 -12 18 -22 z" fill="#fff1de" opacity="0.3"/>
<ellipse cx="300" cy="206" rx="220" ry="10" fill="#ffe7d8" opacity="0.26"/>
<ellipse cx="600" cy="248" rx="200" ry="9" fill="#ffdfd4" opacity="0.22"/>
<path d="M0 306 L96 306 L96 384 L0 384 Z" fill="url(#japan-far)"/>
<path d="M84 322 L188 322 L188 384 L84 384 Z" fill="url(#japan-farb)"/>
<path d="M176 288 L242 258 L308 288 L308 384 L176 384 Z" fill="url(#japan-far)"/>
<path d="M168 290 L242 252 L316 290 L242 272 Z" fill="#c49bb8" opacity="0.9"/>
<path d="M296 312 L410 312 L410 384 L296 384 Z" fill="url(#japan-farb)"/>
<path d="M398 274 L444 252 L490 274 L490 384 L398 384 Z" fill="url(#japan-far)"/>
<path d="M390 276 L444 246 L498 276 L444 262 Z" fill="#c49bb8" opacity="0.9"/>
<path d="M478 316 L620 316 L620 384 L478 384 Z" fill="url(#japan-farb)"/>
<path d="M608 296 L700 296 L700 384 L608 384 Z" fill="url(#japan-far)"/>
<path d="M690 268 L744 268 L744 384 L690 384 Z" fill="url(#japan-farb)"/>
<path d="M732 300 L800 300 L800 384 L732 384 Z" fill="url(#japan-far)"/>
<rect x="22" y="330" width="10" height="13" fill="#ffe6c8" opacity="0.24"/>
<rect x="50" y="330" width="10" height="13" fill="#ffe6c8" opacity="0.32"/>
<rect x="110" y="344" width="10" height="13" fill="#ffe6c8" opacity="0.40"/>
<rect x="140" y="344" width="10" height="13" fill="#ffe6c8" opacity="0.24"/>
<rect x="206" y="316" width="10" height="13" fill="#ffe6c8" opacity="0.32"/>
<rect x="234" y="316" width="10" height="13" fill="#ffe6c8" opacity="0.40"/>
<rect x="262" y="316" width="10" height="13" fill="#ffe6c8" opacity="0.24"/>
<rect x="326" y="336" width="10" height="13" fill="#ffe6c8" opacity="0.32"/>
<rect x="356" y="336" width="10" height="13" fill="#ffe6c8" opacity="0.40"/>
<rect x="420" y="300" width="10" height="13" fill="#ffe6c8" opacity="0.24"/>
<rect x="452" y="300" width="10" height="13" fill="#ffe6c8" opacity="0.32"/>
<rect x="510" y="340" width="10" height="13" fill="#ffe6c8" opacity="0.40"/>
<rect x="546" y="340" width="10" height="13" fill="#ffe6c8" opacity="0.24"/>
<rect x="582" y="340" width="10" height="13" fill="#ffe6c8" opacity="0.32"/>
<rect x="634" y="322" width="10" height="13" fill="#ffe6c8" opacity="0.40"/>
<rect x="664" y="322" width="10" height="13" fill="#ffe6c8" opacity="0.24"/>
<rect x="704" y="292" width="10" height="13" fill="#ffe6c8" opacity="0.32"/>
<rect x="704" y="320" width="10" height="13" fill="#ffe6c8" opacity="0.40"/>
<rect x="756" y="326" width="10" height="13" fill="#ffe6c8" opacity="0.24"/>
<rect x="782" y="326" width="10" height="13" fill="#ffe6c8" opacity="0.32"/>
<rect x="0" y="296" width="800" height="92" fill="#ffd6ce" opacity="0.3"/>
<rect x="0" y="372" width="800" height="14" fill="#c890ac" opacity="0.4"/>
<rect x="424" y="316" width="318" height="476" fill="url(#japan-creamdim)"/>
<rect x="424" y="316" width="318" height="9" fill="#fff4dc" opacity="0.85"/>
<rect x="424" y="316" width="8" height="476" fill="#fff0d4" opacity="0.5"/>
<rect x="714" y="316" width="28" height="476" fill="#a98a68" opacity="0.55"/>
<rect x="424" y="400" width="318" height="3" fill="#d7bd99" opacity="0.55"/>
<rect x="424" y="460" width="318" height="3" fill="#d7bd99" opacity="0.55"/>
<rect x="424" y="520" width="318" height="3" fill="#d7bd99" opacity="0.55"/>
<rect x="424" y="580" width="318" height="3" fill="#d7bd99" opacity="0.55"/>
<rect x="424" y="640" width="318" height="3" fill="#d7bd99" opacity="0.55"/>
<rect x="424" y="700" width="318" height="3" fill="#d7bd99" opacity="0.55"/>
<rect x="424" y="760" width="318" height="3" fill="#d7bd99" opacity="0.55"/>
<rect x="424" y="762" width="318" height="30" fill="#8f7457" opacity="0.32"/>
<rect x="440" y="424" width="74" height="68" fill="url(#japan-woodd)"/>
<rect x="446" y="430" width="62" height="56" fill="url(#japan-glass)"/>
<rect x="446" y="430" width="30" height="26" fill="#d3ecf3" opacity="0.6"/>
<rect x="475" y="430" width="4" height="56" fill="#6d4630"/>
<rect x="446" y="456" width="62" height="4" fill="#6d4630"/>
<rect x="434" y="492" width="86" height="9" fill="url(#japan-woodl)"/>
<ellipse cx="477" cy="505" rx="46" ry="7" fill="url(#japan-shade)" opacity="0.5"/>
<rect x="0" y="336" width="430" height="456" fill="url(#japan-cream)"/>
<rect x="0" y="336" width="430" height="10" fill="#fffaea" opacity="0.9"/>
<rect x="396" y="336" width="34" height="456" fill="#b99b73" opacity="0.5"/>
<rect x="0" y="418" width="430" height="3" fill="#e6cfaa" opacity="0.5"/>
<rect x="0" y="500" width="430" height="3" fill="#e6cfaa" opacity="0.5"/>
<rect x="0" y="560" width="430" height="3" fill="#e6cfaa" opacity="0.5"/>
<rect x="0" y="620" width="430" height="3" fill="#e6cfaa" opacity="0.5"/>
<rect x="0" y="690" width="430" height="3" fill="#e6cfaa" opacity="0.5"/>
<rect x="0" y="750" width="430" height="3" fill="#e6cfaa" opacity="0.5"/>
<rect x="0" y="764" width="430" height="28" fill="#95795a" opacity="0.3"/>
<rect x="160" y="366" width="76" height="70" fill="url(#japan-woodd)"/>
<rect x="166" y="372" width="64" height="58" fill="url(#japan-glass)"/>
<rect x="166" y="372" width="31" height="27" fill="#d3ecf3" opacity="0.65"/>
<rect x="196" y="372" width="4" height="58" fill="#6d4630"/>
<rect x="166" y="399" width="64" height="4" fill="#6d4630"/>
<rect x="152" y="436" width="92" height="9" fill="url(#japan-woodl)"/>
<ellipse cx="198" cy="449" rx="50" ry="8" fill="url(#japan-shade)" opacity="0.5"/>
<g data-obj="shop-window" transform="translate(34 364) scale(0.84)"><rect x="0" y="0" width="88" height="82" fill="url(#japan-woodd)"/><rect x="6" y="6" width="76" height="70" fill="url(#japan-glass)"/><path d="M6 6 L44 6 L14 76 L6 76 Z" fill="#e2f2f7" opacity="0.42"/><rect x="6" y="6" width="36" height="30" fill="#dff1f6" opacity="0.5"/><rect x="41" y="6" width="5" height="70" fill="#6d4630"/><rect x="6" y="38" width="76" height="5" fill="#6d4630"/><rect x="0" y="0" width="88" height="6" fill="#d2a06a" opacity="0.85"/><rect x="0" y="76" width="88" height="6" fill="#4d301f" opacity="0.6"/></g>
<ellipse cx="72" cy="438" rx="48" ry="8" fill="url(#japan-shade)" opacity="0.5"/>
<g data-obj="orange-pane" transform="translate(296 364) scale(0.82)"><rect x="0" y="0" width="84" height="78" fill="url(#japan-woodd)"/><rect x="6" y="6" width="72" height="66" fill="url(#japan-glasswarm)"/><path d="M6 6 L40 6 L14 72 L6 72 Z" fill="#ffe3bb" opacity="0.5"/><rect x="6" y="6" width="33" height="28" fill="#ffd9a8" opacity="0.55"/><rect x="38" y="6" width="5" height="66" fill="#6d4630"/><rect x="6" y="36" width="72" height="5" fill="#6d4630"/><rect x="0" y="0" width="84" height="6" fill="#d2a06a" opacity="0.85"/><rect x="0" y="72" width="84" height="6" fill="#4d301f" opacity="0.6"/></g>
<ellipse cx="330" cy="432" rx="44" ry="8" fill="url(#japan-shade)" opacity="0.5"/>
<g data-obj="far-sign" transform="translate(250 348)"><rect x="2" y="4" width="42" height="50" fill="#7b5f6e" opacity="0.4"/><rect x="0" y="0" width="44" height="50" rx="4" fill="url(#japan-farb)"/><rect x="4" y="4" width="36" height="42" rx="3" fill="#ecd3de"/><rect x="4" y="4" width="36" height="10" rx="3" fill="#fdeff5" opacity="0.8"/><path d="M10 20 L34 20" stroke="#c98da3" stroke-width="4" fill="none" stroke-linecap="round"/><path d="M10 29 L27 29" stroke="#c98da3" stroke-width="4" fill="none" stroke-linecap="round"/><path d="M10 38 L34 38" stroke="#c98da3" stroke-width="4" fill="none" stroke-linecap="round"/><rect x="0" y="46" width="44" height="4" fill="#8f6c80" opacity="0.45"/></g>
<g data-obj="flower-box" transform="translate(372 408)"><circle cx="11" cy="18" r="9" fill="url(#japan-greenS)"/><circle cx="23" cy="11" r="10" fill="url(#japan-greenS)"/><circle cx="33" cy="18" r="8" fill="url(#japan-greenS)"/><circle cx="16" cy="9" r="4.5" fill="url(#japan-redS)"/><circle cx="30" cy="7" r="4.5" fill="url(#japan-goldS)"/><circle cx="14" cy="14" r="2" fill="#d5f0b0" opacity="0.8"/><path d="M3 24 L39 24 L34 46 L8 46 Z" fill="url(#japan-wood)"/><path d="M3 24 L39 24 L38 29 L4 29 Z" fill="#efc994" opacity="0.85"/><path d="M30 24 L39 24 L34 46 L27 46 Z" fill="#6b4429" opacity="0.45"/><rect x="1" y="44" width="40" height="4" rx="2" fill="#5c3a24" opacity="0.55"/></g>
<g data-obj="ac-unit" transform="translate(652 462) scale(0.92)"><rect x="0" y="0" width="78" height="60" rx="6" fill="url(#japan-metal)"/><rect x="0" y="0" width="78" height="13" rx="6" fill="#f0f7f6" opacity="0.85"/><rect x="62" y="0" width="16" height="60" rx="6" fill="#6f7d7a" opacity="0.45"/><path d="M8 22 L62 22" stroke="#8b9998" stroke-width="4" fill="none" stroke-linecap="round"/><path d="M8 32 L62 32" stroke="#8b9998" stroke-width="4" fill="none" stroke-linecap="round"/><path d="M8 42 L62 42" stroke="#8b9998" stroke-width="4" fill="none" stroke-linecap="round"/><rect x="4" y="53" width="70" height="7" rx="3" fill="url(#japan-metald)"/><circle cx="68" cy="20" r="3.5" fill="#c8d5d3"/></g>
<ellipse cx="688" cy="528" rx="40" ry="7" fill="url(#japan-shade)" opacity="0.42"/>
<g data-obj="wall-clock" transform="translate(692 552)"><circle cx="24" cy="24" r="24" fill="url(#japan-woodd)"/><circle cx="24" cy="24" r="19" fill="url(#japan-ceramic)"/><path d="M8 12 A19 19 0 0 1 34 8 A24 24 0 0 0 8 32 Z" fill="#fffdf6" opacity="0.55"/><path d="M24 24 L24 11" stroke="#3f3230" stroke-width="3" fill="none" stroke-linecap="round"/><path d="M24 24 L34 29" stroke="#c2432f" stroke-width="2.5" fill="none" stroke-linecap="round"/><circle cx="24" cy="24" r="3" fill="#3f3230"/><circle cx="24" cy="9" r="1.8" fill="#8a5a3b"/><circle cx="39" cy="24" r="1.8" fill="#8a5a3b"/><circle cx="24" cy="39" r="1.8" fill="#8a5a3b"/></g>
<ellipse cx="716" cy="604" rx="25" ry="5" fill="url(#japan-coolshade)" opacity="0.5"/>
<g data-obj="wall-lamp" transform="translate(668 620)"><rect x="0" y="0" width="9" height="16" rx="3" fill="url(#japan-charcoal)"/><path d="M7 7 C24 7 33 13 35 22" stroke="#4a3f3d" stroke-width="4" fill="none" stroke-linecap="round"/><path d="M20 22 L50 22 L43 40 L27 40 Z" fill="url(#japan-teal)"/><path d="M20 22 L50 22 L48 27 L22 27 Z" fill="#9dcad6" opacity="0.6"/><path d="M40 22 L50 22 L43 40 L38 40 Z" fill="#1b3b45" opacity="0.55"/><ellipse cx="35" cy="42" rx="10" ry="4" fill="#ffd79b"/><ellipse cx="35" cy="46" rx="17" ry="8" fill="url(#japan-warmglow)"/></g>
<g data-obj="gas-meter" transform="translate(676 698)"><rect x="15" y="0" width="8" height="12" fill="url(#japan-metald)"/><rect x="2" y="10" width="50" height="42" rx="6" fill="url(#japan-metal)"/><rect x="2" y="10" width="50" height="11" rx="5" fill="#eef5f4" opacity="0.85"/><rect x="40" y="10" width="12" height="42" rx="5" fill="#6f7d7a" opacity="0.4"/><circle cx="26" cy="32" r="13" fill="url(#japan-ceramic)"/><circle cx="26" cy="32" r="8" fill="#dfe7e6"/><path d="M26 32 L33 26" stroke="#c2432f" stroke-width="2.5" fill="none" stroke-linecap="round"/><rect x="11" y="52" width="7" height="10" fill="url(#japan-metald)"/><rect x="36" y="52" width="7" height="10" fill="url(#japan-metald)"/></g>
<ellipse cx="703" cy="764" rx="34" ry="7" fill="url(#japan-shade)" opacity="0.44"/>
<path d="M4 470 L440 462 L448 526 L0 534 Z" fill="url(#japan-teal)"/>
<path d="M4 470 L440 462 L442 486 L4 494 Z" fill="#9dcad6" opacity="0.45"/>
<path d="M0 520 L448 512 L448 526 L0 534 Z" fill="#173741" opacity="0.4"/>
<path d="M26 470 L30 470 L30 532 L26 532 Z" fill="#1f4650" opacity="0.35"/>
<path d="M88 469.86 L92 469.86 L92 532 L88 532 Z" fill="#1f4650" opacity="0.35"/>
<path d="M150 469.72 L154 469.72 L154 532 L150 532 Z" fill="#1f4650" opacity="0.35"/>
<path d="M212 469.58 L216 469.58 L216 532 L212 532 Z" fill="#1f4650" opacity="0.35"/>
<path d="M274 469.44 L278 469.44 L278 532 L274 532 Z" fill="#1f4650" opacity="0.35"/>
<path d="M336 469.3 L340 469.3 L340 532 L336 532 Z" fill="#1f4650" opacity="0.35"/>
<path d="M398 469.16 L402 469.16 L402 532 L398 532 Z" fill="#1f4650" opacity="0.35"/>
<rect x="0" y="456" width="450" height="17" rx="7" fill="url(#japan-teald)"/>
<rect x="0" y="456" width="450" height="6" rx="3" fill="#6d9dad" opacity="0.5"/>
<rect x="8" y="534" width="432" height="22" fill="#a3855f" opacity="0.4"/>
<rect x="0" y="548" width="430" height="244" fill="url(#japan-creamdim)"/>
<rect x="0" y="548" width="430" height="8" fill="#fff2d8" opacity="0.6"/>
<rect x="14" y="548" width="22" height="244" fill="url(#japan-woodd)"/>
<rect x="14" y="548" width="8" height="244" fill="#c08b5d" opacity="0.7"/>
<rect x="122" y="552" width="18" height="240" fill="url(#japan-woodd)"/>
<rect x="122" y="552" width="6" height="240" fill="#c08b5d" opacity="0.7"/>
<rect x="392" y="548" width="26" height="244" fill="url(#japan-woodd)"/>
<rect x="392" y="548" width="9" height="244" fill="#c08b5d" opacity="0.7"/>
<rect x="418" y="548" width="12" height="244" fill="#3f2717" opacity="0.7"/>
<rect x="44" y="566" width="76" height="156" fill="url(#japan-woodd)"/>
<rect x="50" y="572" width="64" height="144" fill="url(#japan-paper)"/>
<rect x="50" y="572" width="64" height="17" fill="#e5d5b8" opacity="0.85"/>
<path d="M72 596 L94 596" stroke="#4d3f3c" stroke-width="5" fill="none" stroke-linecap="round"/>
<path d="M64 610 L102 610" stroke="#4d3f3c" stroke-width="5" fill="none" stroke-linecap="round"/>
<path d="M82 622 L82 642" stroke="#4d3f3c" stroke-width="5" fill="none" stroke-linecap="round"/>
<path d="M66 656 L100 656" stroke="#c2432f" stroke-width="5" fill="none" stroke-linecap="round"/>
<path d="M72 668 L94 668" stroke="#c2432f" stroke-width="4" fill="none" stroke-linecap="round"/>
<path d="M64 694 L102 694" stroke="#4d3f3c" stroke-width="5" fill="none" stroke-linecap="round"/>
<rect x="44" y="714" width="76" height="8" fill="#4d301f" opacity="0.4"/>
<g data-obj="hanging-plant" transform="translate(4 536)"><path d="M12 0 C12 12 29 17 29 23" stroke="#7a6350" stroke-width="2" fill="none"/><path d="M46 0 C46 12 29 17 29 23" stroke="#7a6350" stroke-width="2" fill="none"/><ellipse cx="29" cy="21" rx="21" ry="8" fill="url(#japan-greenS)"/><path d="M8 23 L50 23 L44 46 L14 46 Z" fill="url(#japan-red)"/><path d="M8 23 L50 23 L49 29 L9 29 Z" fill="#ff9c81" opacity="0.6"/><path d="M40 23 L50 23 L44 46 L37 46 Z" fill="#7d2210" opacity="0.5"/><path d="M14 46 C6 52 3 58 1 64" stroke="#4e7a4a" stroke-width="5" fill="none" stroke-linecap="round"/><path d="M29 46 C29 54 31 60 33 66" stroke="#6b9c56" stroke-width="5" fill="none" stroke-linecap="round"/><path d="M44 46 C52 52 55 58 57 64" stroke="#4e7a4a" stroke-width="5" fill="none" stroke-linecap="round"/></g>
<rect x="148" y="648" width="244" height="144" fill="url(#japan-ink)"/>
<rect x="148" y="648" width="244" height="6" fill="#7c6b64" opacity="0.6"/>
<ellipse cx="270" cy="712" rx="112" ry="60" fill="url(#japan-warmglow)" opacity="0.85"/>
<ellipse cx="270" cy="724" rx="80" ry="42" fill="#ffb765" opacity="0.28"/>
<rect x="148" y="782" width="244" height="10" fill="url(#japan-woodd)"/>
<rect x="160" y="786" width="220" height="10" fill="url(#japan-woodl)"/>
<ellipse cx="228" cy="790" rx="44" ry="7" fill="url(#japan-shade)" opacity="0.5"/>
<g data-obj="stock-pot" transform="translate(196 738)"><path d="M4 14 L58 14 L54 44 C54 48 48 50 31 50 C14 50 8 48 8 44 Z" fill="url(#japan-metal)"/><path d="M42 14 L58 14 L54 44 C54 48 48 50 38 50 C46 44 46 26 42 14 Z" fill="#6f7d7a" opacity="0.45"/><path d="M10 18 C14 30 14 40 16 46" stroke="#f4fafa" stroke-width="4" fill="none" opacity="0.6" stroke-linecap="round"/><ellipse cx="31" cy="13" rx="29" ry="8" fill="url(#japan-metald)"/><ellipse cx="31" cy="11" rx="24" ry="6" fill="#e6eeed"/><rect x="25" y="2" width="12" height="7" rx="3" fill="url(#japan-metald)"/><path d="M0 24 C-2 30 0 36 4 38" stroke="#8b9998" stroke-width="5" fill="none" stroke-linecap="round"/><path d="M62 24 C64 30 62 36 58 38" stroke="#8b9998" stroke-width="5" fill="none" stroke-linecap="round"/></g>
<ellipse cx="322" cy="788" rx="24" ry="5" fill="url(#japan-shade)" opacity="0.45"/>
<g transform="translate(298 744)"><ellipse cx="24" cy="40" rx="24" ry="5" fill="#e0cdb0"/><path d="M3 13 C3 30 12 40 24 40 C36 40 45 30 45 13 Z" fill="url(#japan-ceramic)"/><path d="M32 14 C32 30 29 40 24 40 C36 40 45 30 45 13 Z" fill="#bda286" opacity="0.45"/><ellipse cx="24" cy="13" rx="21" ry="6" fill="#efe0c6"/><ellipse cx="24" cy="13" rx="16" ry="4" fill="url(#japan-tealS)"/></g>
<circle cx="176" cy="610" r="92.4" fill="url(#japan-warmglow)"/>
<rect x="174" y="544" width="4" height="22" fill="#3f3230"/>
<ellipse cx="176" cy="610" rx="36" ry="44" fill="url(#japan-lantern)"/>
<ellipse cx="163.76" cy="600.32" rx="12.24" ry="20.240000000000002" fill="#ffb489" opacity="0.42"/>
<rect x="142.16" y="564" width="67.67999999999999" height="6" rx="3" fill="#3f3230"/>
<rect x="142.16" y="650" width="67.67999999999999" height="6" rx="3" fill="#3f3230"/>
<path d="M145.45 588 L206.55 588" stroke="#8a2b1a" stroke-width="2.5" fill="none" opacity="0.5"/>
<path d="M140.72 610 L211.28 610" stroke="#8a2b1a" stroke-width="2.5" fill="none" opacity="0.5"/>
<path d="M145.45 632 L206.55 632" stroke="#8a2b1a" stroke-width="2.5" fill="none" opacity="0.5"/>
<path d="M170 592 L182 592 L176 608 L184 608 L166 634 L172 612 L164 612 Z" fill="#ffeecb" opacity="0.9"/>
<rect x="172" y="652" width="8" height="13" fill="url(#japan-gold)"/>
<circle cx="352" cy="607" r="77.7" fill="url(#japan-warmglow)"/>
<rect x="350" y="548" width="4" height="22" fill="#3f3230"/>
<ellipse cx="352" cy="607" rx="30" ry="37" fill="url(#japan-lantern)"/>
<ellipse cx="341.8" cy="598.86" rx="10.200000000000001" ry="17.02" fill="#ffb489" opacity="0.42"/>
<rect x="323.8" y="568" width="56.4" height="6" rx="3" fill="#3f3230"/>
<rect x="323.8" y="640" width="56.4" height="6" rx="3" fill="#3f3230"/>
<path d="M326.54 588.5 L377.46 588.5" stroke="#8a2b1a" stroke-width="2.5" fill="none" opacity="0.5"/>
<path d="M322.6 607 L381.4 607" stroke="#8a2b1a" stroke-width="2.5" fill="none" opacity="0.5"/>
<path d="M326.54 625.5 L377.46 625.5" stroke="#8a2b1a" stroke-width="2.5" fill="none" opacity="0.5"/>
<path d="M346 589 L358 589 L352 605 L360 605 L342 631 L348 609 L340 609 Z" fill="#ffeecb" opacity="0.9"/>
<rect x="348" y="642" width="8" height="13" fill="url(#japan-gold)"/>
<rect x="148" y="646" width="244" height="13" fill="url(#japan-woodd)"/>
<rect x="148" y="646" width="244" height="5" fill="#c08b5d" opacity="0.7"/>
<path d="M152 659 L198 659 L198 720 Q175 730 152 720 Z" fill="url(#japan-red)"/>
<path d="M152 659 L198 659 L198 676 L152 676 Z" fill="#ff9c81" opacity="0.4"/>
<path d="M202 659 L248 659 L248 720 Q225 730 202 720 Z" fill="url(#japan-redd)"/>
<path d="M202 659 L248 659 L248 676 L202 676 Z" fill="#ff9c81" opacity="0.4"/>
<path d="M252 659 L298 659 L298 720 Q275 730 252 720 Z" fill="url(#japan-red)"/>
<path d="M252 659 L298 659 L298 676 L252 676 Z" fill="#ff9c81" opacity="0.4"/>
<path d="M302 659 L348 659 L348 720 Q325 730 302 720 Z" fill="url(#japan-redd)"/>
<path d="M302 659 L348 659 L348 676 L302 676 Z" fill="#ff9c81" opacity="0.4"/>
<path d="M352 659 L392 659 L392 720 Q372 730 352 720 Z" fill="url(#japan-red)"/>
<path d="M352 659 L392 659 L392 676 L352 676 Z" fill="#ff9c81" opacity="0.4"/>
<circle cx="175" cy="692" r="14" fill="#ffeecb"/>
<circle cx="175" cy="692" r="7" fill="#d4472f"/>
<circle cx="277" cy="692" r="14" fill="#ffeecb"/>
<path d="M270 686 L284 686 L277 700 Z" fill="#a02c1c"/>
<path d="M320 684 C332 691 332 707 320 714 C308 707 308 691 320 684 Z" fill="#ffeecb"/>
<path d="M320 688 L320 712" stroke="#c2432f" stroke-width="2" fill="none"/>
<path d="M22 540 Q360 618 730 528" stroke="#4b3d38" stroke-width="2.5" fill="none"/>
<circle cx="124" cy="560" r="11" fill="url(#japan-warmglow)"/>
<circle cx="124" cy="560" r="7" fill="url(#japan-goldS)"/>
<circle cx="122" cy="558" r="2.6" fill="#fff8e0" opacity="0.85"/>
<circle cx="228" cy="572" r="11" fill="url(#japan-warmglow)"/>
<circle cx="228" cy="572" r="7" fill="url(#japan-redS)"/>
<circle cx="226" cy="570" r="2.6" fill="#fff8e0" opacity="0.85"/>
<circle cx="333" cy="576" r="11" fill="url(#japan-warmglow)"/>
<circle cx="333" cy="576" r="7" fill="url(#japan-goldS)"/>
<circle cx="331" cy="574" r="2.6" fill="#fff8e0" opacity="0.85"/>
<circle cx="439" cy="573" r="11" fill="url(#japan-warmglow)"/>
<circle cx="439" cy="573" r="7" fill="url(#japan-redS)"/>
<circle cx="437" cy="571" r="2.6" fill="#fff8e0" opacity="0.85"/>
<circle cx="547" cy="563" r="11" fill="url(#japan-warmglow)"/>
<circle cx="547" cy="563" r="7" fill="url(#japan-goldS)"/>
<circle cx="545" cy="561" r="2.6" fill="#fff8e0" opacity="0.85"/>
<circle cx="656" cy="544" r="11" fill="url(#japan-warmglow)"/>
<circle cx="656" cy="544" r="7" fill="url(#japan-redS)"/>
<circle cx="654" cy="542" r="2.6" fill="#fff8e0" opacity="0.85"/>
<g data-obj="shop-flag" transform="translate(232 552)"><rect x="0" y="0" width="5" height="62" rx="2.5" fill="url(#japan-woodd)"/><path d="M5 4 L46 4 L46 44 L5 44 Z" fill="url(#japan-red)"/><path d="M5 4 L46 4 L46 13 L5 13 Z" fill="#ff9c81" opacity="0.55"/><path d="M38 4 L46 4 L46 44 L38 44 Z" fill="#7d2210" opacity="0.45"/><circle cx="25" cy="27" r="10" fill="url(#japan-creamS)"/><path d="M20 22 L30 22 L25 34 Z" fill="#c2432f"/><path d="M5 44 L46 44 L46 48 L5 48 Z" fill="#5e1b0e" opacity="0.35"/></g>
<ellipse cx="566" cy="796" rx="116" ry="18" fill="url(#japan-shade)" opacity="0.6"/>
<rect x="470" y="562" width="192" height="230" rx="8" fill="url(#japan-metal)"/>
<rect x="470" y="562" width="16" height="230" rx="8" fill="#f6fbfa" opacity="0.7"/>
<rect x="632" y="562" width="30" height="230" fill="#6f7d7a" opacity="0.4"/>
<rect x="470" y="562" width="192" height="38" rx="8" fill="url(#japan-red)"/>
<rect x="470" y="562" width="192" height="12" rx="6" fill="#ff9c81" opacity="0.45"/>
<rect x="470" y="590" width="192" height="10" fill="#7d2210" opacity="0.5"/>
<rect x="484" y="570" width="66" height="13" rx="6" fill="#fff1d6" opacity="0.9"/>
<rect x="482" y="608" width="112" height="130" rx="5" fill="url(#japan-teal)"/>
<path d="M486 612 L520 612 L496 734 L486 734 Z" fill="#ffffff" opacity="0.2"/>
<path d="M560 610 L572 610 L552 736 L544 736 Z" fill="#ffffff" opacity="0.12"/>
<rect x="482" y="650" width="112" height="5" fill="#1b3b45"/>
<rect x="482" y="692" width="112" height="5" fill="#1b3b45"/>
<rect x="486" y="616" width="15" height="30" rx="5" fill="url(#japan-red)"/>
<rect x="488" y="611" width="11" height="6" rx="2" fill="#f3e3c6"/>
<rect x="488.5" y="620" width="3" height="18" rx="1.5" fill="#ffffff" opacity="0.35"/>
<rect x="508" y="616" width="15" height="30" rx="5" fill="url(#japan-gold)"/>
<rect x="510" y="611" width="11" height="6" rx="2" fill="#f3e3c6"/>
<rect x="510.5" y="620" width="3" height="18" rx="1.5" fill="#ffffff" opacity="0.35"/>
<rect x="530" y="616" width="15" height="30" rx="5" fill="url(#japan-green)"/>
<rect x="532" y="611" width="11" height="6" rx="2" fill="#f3e3c6"/>
<rect x="532.5" y="620" width="3" height="18" rx="1.5" fill="#ffffff" opacity="0.35"/>
<rect x="552" y="616" width="15" height="30" rx="5" fill="url(#japan-teal)"/>
<rect x="554" y="611" width="11" height="6" rx="2" fill="#f3e3c6"/>
<rect x="554.5" y="620" width="3" height="18" rx="1.5" fill="#ffffff" opacity="0.35"/>
<rect x="574" y="616" width="15" height="30" rx="5" fill="url(#japan-purple)"/>
<rect x="576" y="611" width="11" height="6" rx="2" fill="#f3e3c6"/>
<rect x="576.5" y="620" width="3" height="18" rx="1.5" fill="#ffffff" opacity="0.35"/>
<rect x="486" y="658" width="15" height="30" rx="5" fill="url(#japan-gold)"/>
<rect x="488" y="653" width="11" height="6" rx="2" fill="#f3e3c6"/>
<rect x="488.5" y="662" width="3" height="18" rx="1.5" fill="#ffffff" opacity="0.35"/>
<rect x="508" y="658" width="15" height="30" rx="5" fill="url(#japan-green)"/>
<rect x="510" y="653" width="11" height="6" rx="2" fill="#f3e3c6"/>
<rect x="510.5" y="662" width="3" height="18" rx="1.5" fill="#ffffff" opacity="0.35"/>
<rect x="530" y="658" width="15" height="30" rx="5" fill="url(#japan-teal)"/>
<rect x="532" y="653" width="11" height="6" rx="2" fill="#f3e3c6"/>
<rect x="532.5" y="662" width="3" height="18" rx="1.5" fill="#ffffff" opacity="0.35"/>
<rect x="552" y="658" width="15" height="30" rx="5" fill="url(#japan-purple)"/>
<rect x="554" y="653" width="11" height="6" rx="2" fill="#f3e3c6"/>
<rect x="554.5" y="662" width="3" height="18" rx="1.5" fill="#ffffff" opacity="0.35"/>
<rect x="574" y="658" width="15" height="30" rx="5" fill="url(#japan-red)"/>
<rect x="576" y="653" width="11" height="6" rx="2" fill="#f3e3c6"/>
<rect x="576.5" y="662" width="3" height="18" rx="1.5" fill="#ffffff" opacity="0.35"/>
<rect x="486" y="700" width="15" height="30" rx="5" fill="url(#japan-green)"/>
<rect x="488" y="695" width="11" height="6" rx="2" fill="#f3e3c6"/>
<rect x="488.5" y="704" width="3" height="18" rx="1.5" fill="#ffffff" opacity="0.35"/>
<rect x="508" y="700" width="15" height="30" rx="5" fill="url(#japan-teal)"/>
<rect x="510" y="695" width="11" height="6" rx="2" fill="#f3e3c6"/>
<rect x="510.5" y="704" width="3" height="18" rx="1.5" fill="#ffffff" opacity="0.35"/>
<rect x="530" y="700" width="15" height="30" rx="5" fill="url(#japan-purple)"/>
<rect x="532" y="695" width="11" height="6" rx="2" fill="#f3e3c6"/>
<rect x="532.5" y="704" width="3" height="18" rx="1.5" fill="#ffffff" opacity="0.35"/>
<rect x="552" y="700" width="15" height="30" rx="5" fill="url(#japan-red)"/>
<rect x="554" y="695" width="11" height="6" rx="2" fill="#f3e3c6"/>
<rect x="554.5" y="704" width="3" height="18" rx="1.5" fill="#ffffff" opacity="0.35"/>
<rect x="574" y="700" width="15" height="30" rx="5" fill="url(#japan-gold)"/>
<rect x="576" y="695" width="11" height="6" rx="2" fill="#f3e3c6"/>
<rect x="576.5" y="704" width="3" height="18" rx="1.5" fill="#ffffff" opacity="0.35"/>
<g data-obj="lightstick" transform="translate(508 682) scale(0.36)"><circle cx="36" cy="34" r="36" fill="url(#japan-purpglow)"/><circle cx="36" cy="34" r="30" fill="url(#japan-purpS)"/><circle cx="34" cy="31" r="15" fill="#e6d6ff" opacity="0.75"/><ellipse cx="24" cy="20" rx="8" ry="4.6" fill="#ffffff" opacity="0.85" transform="rotate(-32 24 20)"/><path d="M12 44 A30 30 0 0 0 58 50" stroke="#4f2b95" stroke-width="3" fill="none" opacity="0.45"/><rect x="20" y="60" width="32" height="13" rx="5" fill="url(#japan-silver)"/><rect x="24" y="71" width="24" height="62" rx="11" fill="url(#japan-pearl)"/><rect x="28" y="80" width="5" height="42" rx="2.5" fill="#ffffff" opacity="0.8"/><rect x="41" y="74" width="6" height="56" rx="3" fill="#a693c4" opacity="0.5"/><rect x="22" y="122" width="28" height="14" rx="5" fill="url(#japan-purpled)"/><path d="M48 128 q13 6 5 15" stroke="#c3b0e0" stroke-width="3.5" fill="none" stroke-linecap="round"/></g>
<rect x="604" y="608" width="46" height="130" rx="5" fill="url(#japan-silver)"/>
<rect x="610" y="616" width="34" height="20" rx="3" fill="#31555f"/>
<circle cx="618" cy="650" r="6" fill="url(#japan-redS)"/>
<circle cx="636" cy="650" r="6" fill="url(#japan-redS)"/>
<circle cx="618" cy="670" r="6" fill="url(#japan-redS)"/>
<circle cx="636" cy="670" r="6" fill="url(#japan-redS)"/>
<circle cx="618" cy="690" r="6" fill="url(#japan-redS)"/>
<circle cx="636" cy="690" r="6" fill="url(#japan-redS)"/>
<rect x="612" y="708" width="30" height="6" rx="3" fill="#8b9998"/>
<rect x="614" y="722" width="26" height="10" rx="2" fill="#6f7d7a"/>
<rect x="482" y="746" width="112" height="34" rx="4" fill="url(#japan-teald)"/>
<rect x="482" y="746" width="112" height="10" rx="4" fill="#16303a" opacity="0.8"/>
<rect x="470" y="780" width="192" height="12" fill="url(#japan-metald)"/>
<rect x="0" y="322" width="430" height="16" fill="url(#japan-woodd)"/>
<rect x="0" y="322" width="430" height="5" fill="#c08b5d" opacity="0.6"/>
<g data-obj="chimney" transform="translate(40 274)"><rect x="4" y="12" width="38" height="52" fill="url(#japan-farb)"/><rect x="4" y="12" width="12" height="52" fill="#e8cbdb" opacity="0.6"/><rect x="32" y="12" width="10" height="52" fill="#8b6a83" opacity="0.45"/><rect x="0" y="4" width="46" height="11" rx="3" fill="url(#japan-far)"/><rect x="0" y="4" width="46" height="4" rx="2" fill="#f0d5e3" opacity="0.7"/><ellipse cx="16" cy="9" rx="7" ry="3" fill="#7d5b74" opacity="0.5"/><ellipse cx="31" cy="9" rx="7" ry="3" fill="#7d5b74" opacity="0.5"/><rect x="12" y="26" width="14" height="7" fill="#a8708a" opacity="0.55"/></g>
<g data-obj="roof-vent" transform="translate(122 284) scale(0.95)"><path d="M4 18 L46 18 L40 56 L10 56 Z" fill="url(#japan-metal)"/><path d="M34 18 L46 18 L40 56 L31 56 Z" fill="#6f7d7a" opacity="0.45"/><ellipse cx="25" cy="16" rx="25" ry="8" fill="url(#japan-metald)"/><ellipse cx="25" cy="14" rx="18" ry="5" fill="#eef5f4"/><ellipse cx="25" cy="14" rx="10" ry="3" fill="#59665f" opacity="0.6"/><path d="M9 32 L41 32" stroke="#8b9998" stroke-width="4" fill="none" stroke-linecap="round"/><path d="M10 42 L40 42" stroke="#8b9998" stroke-width="4" fill="none" stroke-linecap="round"/></g>
<ellipse cx="180" cy="340" rx="30" ry="6" fill="url(#japan-shade)" opacity="0.4"/>
<g data-obj="water-tank" transform="translate(194 270)"><path d="M7 12 L47 12 L44 48 L10 48 Z" fill="url(#japan-woodd)"/><path d="M7 12 L18 12 L16 48 L10 48 Z" fill="#c9945f" opacity="0.6"/><path d="M36 12 L47 12 L44 48 L34 48 Z" fill="#3f2717" opacity="0.5"/><ellipse cx="27" cy="11" rx="21" ry="7" fill="url(#japan-woodl)"/><ellipse cx="27" cy="10" rx="14" ry="4" fill="#f3d5ac" opacity="0.7"/><path d="M8 24 L46 24" stroke="#5c3a24" stroke-width="4" fill="none"/><path d="M9 36 L45 36" stroke="#5c3a24" stroke-width="3.5" fill="none"/><path d="M13 48 L15 68" stroke="#5c3a24" stroke-width="5" fill="none" stroke-linecap="round"/><path d="M41 48 L39 68" stroke="#5c3a24" stroke-width="5" fill="none" stroke-linecap="round"/></g>
<ellipse cx="248" cy="340" rx="34" ry="6" fill="url(#japan-shade)" opacity="0.42"/>
<g data-obj="tv-aerial" transform="translate(280 280)"><rect x="21" y="14" width="5" height="44" fill="url(#japan-charcoal)"/><path d="M4 4 L42 4" stroke="#5b4d4b" stroke-width="3.5" fill="none" stroke-linecap="round"/><path d="M8 13 L38 13" stroke="#5b4d4b" stroke-width="3.5" fill="none" stroke-linecap="round"/><path d="M13 22 L33 22" stroke="#5b4d4b" stroke-width="3.5" fill="none" stroke-linecap="round"/><path d="M23 4 L23 26" stroke="#443b39" stroke-width="3.5" fill="none"/><path d="M4 4 L42 4" stroke="#8d7c78" stroke-width="1.2" fill="none" opacity="0.8"/><circle cx="23.5" cy="34" r="5" fill="url(#japan-metald)"/></g>
<ellipse cx="303" cy="340" rx="22" ry="5" fill="url(#japan-shade)" opacity="0.4"/>
<g data-obj="weather-vane" transform="translate(350 270)"><rect x="22" y="16" width="5" height="52" fill="url(#japan-charcoal)"/><path d="M2 6 L36 6 L28 16 L36 26 L2 26 L10 16 Z" fill="url(#japan-woodd)"/><path d="M2 6 L36 6 L32 11 L4 11 Z" fill="#c08b5d" opacity="0.7"/><path d="M24 6 L36 6 L28 16 L36 26 L24 26 Z" fill="#3f2717" opacity="0.4"/><circle cx="24.5" cy="36" r="6" fill="url(#japan-goldS)"/><path d="M11 46 L38 46" stroke="#5b4d4b" stroke-width="3.5" fill="none" stroke-linecap="round"/><path d="M24.5 40 L24.5 52" stroke="#5b4d4b" stroke-width="3.5" fill="none"/></g>
<ellipse cx="373" cy="340" rx="22" ry="5" fill="url(#japan-shade)" opacity="0.4"/>
<rect x="404" y="190" width="7" height="148" fill="url(#japan-woodd)"/>
<rect x="404" y="190" width="3" height="148" fill="#c08b5d" opacity="0.7"/>
<circle cx="407.5" cy="188" r="6" fill="url(#japan-goldS)"/>
<g data-obj="carp-red" transform="translate(330 196) scale(0.95)"><path d="M76 15 C64 2 30 2 12 9 L2 0 L2 30 L12 21 C30 28 64 28 76 15 Z" fill="url(#japan-red)"/><path d="M76 15 C64 5 46 3 30 6 L31 24 C46 27 64 24 76 15 Z" fill="#ff9c81" opacity="0.55"/><path d="M2 0 L2 30 L12 21 C10 17 10 13 12 9 Z" fill="#7d2210" opacity="0.4"/><circle cx="67" cy="12" r="4.5" fill="#fffaf0"/><circle cx="67" cy="12" r="2.2" fill="#3a2c26"/><path d="M52 7 q-5 8 0 16" stroke="#ffeecb" stroke-width="2.5" fill="none"/><path d="M41 7 q-5 8 0 16" stroke="#ffeecb" stroke-width="2.5" fill="none"/><path d="M30 8 q-5 7 0 14" stroke="#ffeecb" stroke-width="2.5" fill="none"/></g>
<g transform="translate(348 232) scale(0.72)"><path d="M76 15 C64 2 30 2 12 9 L2 0 L2 30 L12 21 C30 28 64 28 76 15 Z" fill="url(#japan-teal)"/><path d="M76 15 C64 5 46 3 30 6 L31 24 C46 27 64 24 76 15 Z" fill="#9dcad6" opacity="0.5"/><circle cx="67" cy="12" r="4.5" fill="#fffaf0"/><circle cx="67" cy="12" r="2.2" fill="#3a2c26"/><circle cx="52" cy="10" r="3.5" fill="#d3ecf3"/><circle cx="41" cy="17" r="3.5" fill="#d3ecf3"/><circle cx="30" cy="10" r="3" fill="#d3ecf3"/></g>
<g data-obj="paper-plane" transform="translate(78 150)"><path d="M0 8 L58 0 L18 24 Z" fill="url(#japan-paper)"/><path d="M18 24 L58 0 L24 40 Z" fill="#e3d3b4"/><path d="M0 8 L18 24 L21 15 Z" fill="#c9b291"/><path d="M0 8 L58 0 L52 3 L6 9 Z" fill="#fffdf6" opacity="0.75"/></g>
<g data-obj="kite" transform="translate(292 106) scale(0.88)"><path d="M23 0 L44 20 L23 42 L2 20 Z" fill="url(#japan-red)"/><path d="M23 0 L44 20 L23 42 Z" fill="#8a2717" opacity="0.35"/><path d="M23 0 L44 20 L23 26 L2 20 Z" fill="url(#japan-gold)" opacity="0.9"/><path d="M23 0 L34 10 L23 14 L12 10 Z" fill="#fff2c9" opacity="0.55"/><path d="M2 20 L44 20" stroke="#8a2717" stroke-width="1.5" fill="none" opacity="0.6"/><path d="M23 42 q10 10 -2 18 q14 6 4 20" stroke="#a02c1c" stroke-width="2.5" fill="none" stroke-linecap="round"/></g>
<g data-obj="star-kite" transform="translate(420 188)"><path d="M26 0 L34 19 L52 19 L37 30 L43 50 L26 38 L9 50 L15 30 L0 19 L18 19 Z" fill="url(#japan-goldS)"/><path d="M26 0 L34 19 L52 19 L37 30 L26 24 Z" fill="#fff2c4" opacity="0.55"/><path d="M26 38 L43 50 L37 30 Z" fill="#9c6716" opacity="0.4"/><circle cx="26" cy="25" r="5.5" fill="url(#japan-redS)"/></g>
<path d="M800 292 Q400 348 0 300" stroke="#463a3c" stroke-width="2.6" fill="none" opacity="0.75"/>
<path d="M800 318 Q400 388 0 332" stroke="#463a3c" stroke-width="2.3" fill="none" opacity="0.6"/>
<path d="M742 792 C734 700 754 620 744 548 C736 480 756 418 772 356 L800 348 L800 792 Z" fill="url(#japan-bark)"/>
<path d="M772 356 C756 418 736 480 744 548 C752 618 738 702 746 792 L762 792 C752 702 764 620 758 550 C752 480 770 420 786 358 Z" fill="#a3714b" opacity="0.7"/>
<path d="M776 372 C764 424 748 480 752 540" stroke="#432617" stroke-width="6" fill="none" opacity="0.5"/>
<path d="M756 404 C700 376 638 356 552 342" stroke="url(#japan-bark)" stroke-width="15" fill="none" stroke-linecap="round"/>
<path d="M752 364 C688 322 618 292 534 274" stroke="url(#japan-bark)" stroke-width="12" fill="none" stroke-linecap="round"/>
<path d="M760 458 C716 436 668 430 618 434" stroke="url(#japan-bark)" stroke-width="10" fill="none" stroke-linecap="round"/>
<path d="M754 326 C700 268 640 232 570 212" stroke="#77492f" stroke-width="8" fill="none" stroke-linecap="round"/>
<path d="M640 348 C614 322 596 300 590 274" stroke="#77492f" stroke-width="5.5" fill="none" stroke-linecap="round"/>
<path d="M690 374 C672 352 660 332 658 308" stroke="#77492f" stroke-width="5" fill="none" stroke-linecap="round"/>
<path d="M604 300 C580 288 560 282 540 284" stroke="#77492f" stroke-width="4" fill="none" stroke-linecap="round"/>
<path d="M700 442 C676 432 656 430 636 434" stroke="#77492f" stroke-width="4" fill="none" stroke-linecap="round"/>
<ellipse cx="712" cy="214" rx="118" ry="84" fill="url(#japan-bloomA)"/>
<ellipse cx="636" cy="372" rx="82" ry="56" fill="url(#japan-bloomA)"/>
<ellipse cx="770" cy="330" rx="104" ry="74" fill="url(#japan-bloomA)"/>
<ellipse cx="772" cy="436" rx="72" ry="48" fill="url(#japan-bloomA)"/>
<ellipse cx="560" cy="306" rx="66" ry="48" fill="url(#japan-bloomA)"/>
<ellipse cx="688" cy="440" rx="54" ry="36" fill="url(#japan-bloomA)"/>
<ellipse cx="790" cy="150" rx="76" ry="54" fill="url(#japan-bloomA)"/>
<ellipse cx="770" cy="122" rx="90" ry="64" fill="url(#japan-bloomD)"/>
<ellipse cx="700" cy="190" rx="120" ry="86" fill="url(#japan-bloomD)"/>
<ellipse cx="620" cy="150" rx="74" ry="52" fill="url(#japan-bloomD)"/>
<ellipse cx="600" cy="230" rx="96" ry="70" fill="url(#japan-bloomD)"/>
<ellipse cx="540" cy="190" rx="54" ry="40" fill="url(#japan-bloomD)"/>
<ellipse cx="486" cy="166" rx="46" ry="34" fill="url(#japan-bloomD)"/>
<ellipse cx="520" cy="290" rx="72" ry="54" fill="url(#japan-bloomD)"/>
<ellipse cx="490" cy="250" rx="44" ry="34" fill="url(#japan-bloomD)"/>
<ellipse cx="470" cy="330" rx="52" ry="40" fill="url(#japan-bloomD)"/>
<ellipse cx="740" cy="300" rx="110" ry="80" fill="url(#japan-bloomD)"/>
<ellipse cx="640" cy="350" rx="84" ry="60" fill="url(#japan-bloomD)"/>
<ellipse cx="560" cy="370" rx="56" ry="42" fill="url(#japan-bloomD)"/>
<ellipse cx="764" cy="412" rx="78" ry="54" fill="url(#japan-bloomD)"/>
<ellipse cx="684" cy="420" rx="58" ry="40" fill="url(#japan-bloomD)"/>
<ellipse cx="742" cy="90" rx="36" ry="26" fill="url(#japan-bloomB)"/>
<ellipse cx="668" cy="112" rx="32" ry="24" fill="url(#japan-bloomB)"/>
<ellipse cx="596" cy="140" rx="26" ry="20" fill="url(#japan-bloomB)"/>
<ellipse cx="512" cy="220" rx="26" ry="20" fill="url(#japan-bloomB)"/>
<ellipse cx="452" cy="300" rx="20" ry="16" fill="url(#japan-bloomB)"/>
<ellipse cx="636" cy="320" rx="30" ry="22" fill="url(#japan-bloomB)"/>
<ellipse cx="690" cy="150" rx="52" ry="38" fill="url(#japan-bloomB)"/>
<ellipse cx="760" cy="140" rx="44" ry="32" fill="url(#japan-bloomB)"/>
<ellipse cx="620" cy="178" rx="40" ry="30" fill="url(#japan-bloomB)"/>
<ellipse cx="560" cy="212" rx="34" ry="26" fill="url(#japan-bloomB)"/>
<ellipse cx="508" cy="262" rx="28" ry="22" fill="url(#japan-bloomB)"/>
<ellipse cx="468" cy="308" rx="22" ry="18" fill="url(#japan-bloomB)"/>
<ellipse cx="724" cy="232" rx="46" ry="34" fill="url(#japan-bloomB)"/>
<ellipse cx="650" cy="262" rx="38" ry="28" fill="url(#japan-bloomB)"/>
<ellipse cx="586" cy="300" rx="30" ry="23" fill="url(#japan-bloomB)"/>
<ellipse cx="534" cy="336" rx="24" ry="19" fill="url(#japan-bloomB)"/>
<ellipse cx="752" cy="336" rx="42" ry="31" fill="url(#japan-bloomB)"/>
<ellipse cx="676" cy="364" rx="34" ry="25" fill="url(#japan-bloomB)"/>
<ellipse cx="608" cy="392" rx="26" ry="20" fill="url(#japan-bloomB)"/>
<ellipse cx="766" cy="400" rx="34" ry="26" fill="url(#japan-bloomB)"/>
<ellipse cx="700" cy="424" rx="26" ry="20" fill="url(#japan-bloomB)"/>
<ellipse cx="730" cy="86" rx="14" ry="11" fill="url(#japan-bloomC)" opacity="0.92"/>
<ellipse cx="656" cy="106" rx="13" ry="10" fill="url(#japan-bloomC)" opacity="0.92"/>
<ellipse cx="676" cy="140" rx="22" ry="16" fill="url(#japan-bloomC)" opacity="0.92"/>
<ellipse cx="744" cy="128" rx="18" ry="14" fill="url(#japan-bloomC)" opacity="0.92"/>
<ellipse cx="608" cy="170" rx="17" ry="13" fill="url(#japan-bloomC)" opacity="0.92"/>
<ellipse cx="552" cy="204" rx="14" ry="11" fill="url(#japan-bloomC)" opacity="0.92"/>
<ellipse cx="500" cy="254" rx="12" ry="9" fill="url(#japan-bloomC)" opacity="0.92"/>
<ellipse cx="712" cy="222" rx="20" ry="15" fill="url(#japan-bloomC)" opacity="0.92"/>
<ellipse cx="640" cy="254" rx="16" ry="12" fill="url(#japan-bloomC)" opacity="0.92"/>
<ellipse cx="578" cy="292" rx="13" ry="10" fill="url(#japan-bloomC)" opacity="0.92"/>
<ellipse cx="740" cy="326" rx="18" ry="13" fill="url(#japan-bloomC)" opacity="0.92"/>
<ellipse cx="664" cy="356" rx="14" ry="11" fill="url(#japan-bloomC)" opacity="0.92"/>
<path d="M534 172 C502 164 480 162 462 166" stroke="#6b4128" stroke-width="3.2" fill="none" stroke-linecap="round"/>
<path d="M534 172 C502 164 480 162 462 166" stroke="#b98a63" stroke-width="1" fill="none" stroke-linecap="round" opacity="0.6" transform="translate(0 -1)"/>
<path d="M700 152 C662 144 624 144 592 150" stroke="#6b4128" stroke-width="3.2" fill="none" stroke-linecap="round"/>
<path d="M700 152 C662 144 624 144 592 150" stroke="#b98a63" stroke-width="1" fill="none" stroke-linecap="round" opacity="0.6" transform="translate(0 -1)"/>
<path d="M786 214 C748 206 708 206 676 212" stroke="#6b4128" stroke-width="3.2" fill="none" stroke-linecap="round"/>
<path d="M786 214 C748 206 708 206 676 212" stroke="#b98a63" stroke-width="1" fill="none" stroke-linecap="round" opacity="0.6" transform="translate(0 -1)"/>
<path d="M638 210 C600 204 564 204 532 210" stroke="#6b4128" stroke-width="3" fill="none" stroke-linecap="round"/>
<path d="M638 210 C600 204 564 204 532 210" stroke="#b98a63" stroke-width="1" fill="none" stroke-linecap="round" opacity="0.6" transform="translate(0 -1)"/>
<path d="M800 238 C768 232 734 232 708 236" stroke="#6b4128" stroke-width="3" fill="none" stroke-linecap="round"/>
<path d="M800 238 C768 232 734 232 708 236" stroke="#b98a63" stroke-width="1" fill="none" stroke-linecap="round" opacity="0.6" transform="translate(0 -1)"/>
<path d="M598 268 C560 262 522 262 484 268" stroke="#6b4128" stroke-width="3" fill="none" stroke-linecap="round"/>
<path d="M598 268 C560 262 522 262 484 268" stroke="#b98a63" stroke-width="1" fill="none" stroke-linecap="round" opacity="0.6" transform="translate(0 -1)"/>
<path d="M718 302 C678 296 636 296 572 302" stroke="#6b4128" stroke-width="2.8" fill="none" stroke-linecap="round"/>
<path d="M718 302 C678 296 636 296 572 302" stroke="#b98a63" stroke-width="1" fill="none" stroke-linecap="round" opacity="0.6" transform="translate(0 -1)"/>
<path d="M792 358 C754 352 708 354 648 364" stroke="#6b4128" stroke-width="3.2" fill="none" stroke-linecap="round"/>
<path d="M792 358 C754 352 708 354 648 364" stroke="#b98a63" stroke-width="1" fill="none" stroke-linecap="round" opacity="0.6" transform="translate(0 -1)"/>
<path d="M800 386 C770 382 742 384 718 388" stroke="#6b4128" stroke-width="2.8" fill="none" stroke-linecap="round"/>
<path d="M800 386 C770 382 742 384 718 388" stroke="#b98a63" stroke-width="1" fill="none" stroke-linecap="round" opacity="0.6" transform="translate(0 -1)"/>
<circle cx="722" cy="172" r="5" fill="#fff2f7" opacity="0.9"/>
<circle cx="700" cy="200" r="5" fill="#fff2f7" opacity="0.9"/>
<circle cx="762" cy="222" r="5" fill="#fff2f7" opacity="0.9"/>
<circle cx="646" cy="216" r="5" fill="#fff2f7" opacity="0.9"/>
<circle cx="612" cy="258" r="5" fill="#fff2f7" opacity="0.9"/>
<circle cx="560" cy="250" r="5" fill="#fff2f7" opacity="0.9"/>
<circle cx="508" cy="296" r="5" fill="#fff2f7" opacity="0.9"/>
<circle cx="676" cy="296" r="5" fill="#fff2f7" opacity="0.9"/>
<circle cx="736" cy="302" r="5" fill="#fff2f7" opacity="0.9"/>
<circle cx="598" cy="332" r="5" fill="#fff2f7" opacity="0.9"/>
<circle cx="782" cy="240" r="5" fill="#fff2f7" opacity="0.9"/>
<circle cx="478" cy="318" r="5" fill="#fff2f7" opacity="0.9"/>
<circle cx="706" cy="400" r="5" fill="#fff2f7" opacity="0.9"/>
<circle cx="660" cy="430" r="5" fill="#fff2f7" opacity="0.9"/>
<circle cx="540" cy="196" r="5" fill="#fff2f7" opacity="0.9"/>
<circle cx="620" cy="156" r="5" fill="#fff2f7" opacity="0.9"/>
<circle cx="772" cy="96" r="5" fill="#fff2f7" opacity="0.9"/>
<circle cx="652" cy="386" r="5" fill="#fff2f7" opacity="0.9"/>
<g data-obj="streamer" transform="translate(468 156)"><path d="M4 0 L44 0 L44 9 L4 9 Z" fill="url(#japan-woodd)"/><path d="M4 0 L44 0 L44 3.5 L4 3.5 Z" fill="#c08b5d" opacity="0.7"/><path d="M9 9 C13 22 5 30 11 42 C14 48 11 52 9 54" stroke="#d4472f" stroke-width="5.5" fill="none" stroke-linecap="round"/><path d="M9 9 C13 20 6 28 11 38" stroke="#f7805f" stroke-width="2" fill="none" opacity="0.8"/><path d="M24 9 C28 22 20 32 26 46 C28 51 26 54 24 56" stroke="#f0b93f" stroke-width="5.5" fill="none" stroke-linecap="round"/><path d="M24 9 C28 20 21 30 25 40" stroke="#ffe89b" stroke-width="2" fill="none" opacity="0.8"/><path d="M40 9 C44 22 36 30 42 44 C44 48 42 52 40 54" stroke="#467484" stroke-width="5.5" fill="none" stroke-linecap="round"/><path d="M40 9 C44 20 37 28 41 38" stroke="#8cbcc9" stroke-width="2" fill="none" opacity="0.8"/></g>
<g data-obj="bird-feeder" transform="translate(496 258)"><path d="M4 6 L52 6 L46 18 L10 18 Z" fill="url(#japan-woodd)"/><path d="M4 6 L52 6 L50 10 L6 10 Z" fill="#d2a06a" opacity="0.85"/><path d="M38 6 L52 6 L46 18 L38 18 Z" fill="#3f2717" opacity="0.4"/><rect x="13" y="18" width="30" height="22" fill="url(#japan-paper)"/><rect x="13" y="18" width="10" height="22" fill="#fffdf6" opacity="0.65"/><rect x="35" y="18" width="8" height="22" fill="#b9a184" opacity="0.5"/><rect x="8" y="40" width="40" height="7" rx="3" fill="url(#japan-woodl)"/><path d="M28 47 L28 56" stroke="#6d4630" stroke-width="3" fill="none"/><circle cx="28" cy="29" r="5.5" fill="url(#japan-redS)"/><path d="M28 3 L28 6" stroke="#6d4630" stroke-width="2" fill="none"/></g>
<g data-obj="tree-chime" transform="translate(560 202)"><path d="M21 0 L21 6" stroke="#7a6350" stroke-width="2" fill="none"/><path d="M6 14 C6 5 36 5 36 14 L36 23 C36 29 6 29 6 23 Z" fill="url(#japan-tealS)"/><path d="M10 12 C12 20 12 24 13 27" stroke="#e2f2f7" stroke-width="3" fill="none" opacity="0.7" stroke-linecap="round"/><ellipse cx="21" cy="13" rx="15" ry="6" fill="#d3ecf3"/><ellipse cx="21" cy="13" rx="8" ry="3" fill="#7fa8b6" opacity="0.6"/><path d="M21 25 L21 42" stroke="#7a6350" stroke-width="2" fill="none"/><path d="M10 42 L32 42 L28 52 L14 52 Z" fill="url(#japan-paper)"/><path d="M25 42 L32 42 L28 52 L23 52 Z" fill="#cdb894" opacity="0.6"/><path d="M21 52 L21 60" stroke="#7a6350" stroke-width="2" fill="none"/></g>
<g data-obj="tanzaku" transform="translate(626 144)"><path d="M22 0 L22 7" stroke="#7a6350" stroke-width="2" fill="none"/><path d="M10 7 L34 7 L34 48 L22 56 L10 48 Z" fill="url(#japan-paper)"/><path d="M27 7 L34 7 L34 48 L26 53 Z" fill="#cdb894" opacity="0.5"/><path d="M10 7 L34 7 L34 16 L10 16 Z" fill="url(#japan-red)"/><path d="M10 7 L34 7 L34 10 L10 10 Z" fill="#ff9c81" opacity="0.6"/><path d="M15 24 L29 24" stroke="#7b4fbf" stroke-width="2.6" fill="none" stroke-linecap="round"/><path d="M15 32 L26 32" stroke="#31555f" stroke-width="2.6" fill="none" stroke-linecap="round"/><path d="M15 40 L29 40" stroke="#31555f" stroke-width="2.2" fill="none" stroke-linecap="round"/></g>
<g data-obj="twig-lamp" transform="translate(698 172)"><path d="M23 0 L23 10" stroke="#6d4630" stroke-width="2" fill="none"/><path d="M6 10 L40 10 L35 17 L11 17 Z" fill="url(#japan-woodd)"/><path d="M6 10 L40 10 L38 13 L8 13 Z" fill="#d2a06a" opacity="0.8"/><ellipse cx="23" cy="31" rx="19" ry="19" fill="url(#japan-warmglow)"/><ellipse cx="23" cy="31" rx="14" ry="14" fill="url(#japan-goldS)"/><ellipse cx="19" cy="27" rx="5" ry="4" fill="#fffbe4" opacity="0.85"/><path d="M12 46 L34 46 L30 53 L16 53 Z" fill="url(#japan-woodd)"/><path d="M26 46 L34 46 L30 53 L25 53 Z" fill="#3f2717" opacity="0.4"/></g>
<g data-obj="tree-ribbon" transform="translate(588 292)"><path d="M25 9 L46 0 L46 22 L25 15 Z" fill="url(#japan-rose)"/><path d="M25 9 L4 0 L4 22 L25 15 Z" fill="url(#japan-rose)"/><path d="M25 9 L46 0 L44 5 L25 12 Z" fill="#ffe7f0" opacity="0.7"/><path d="M25 9 L4 0 L6 5 L25 12 Z" fill="#ffe7f0" opacity="0.55"/><path d="M25 15 L46 22 L38 22 L25 17 Z" fill="#b45f88" opacity="0.5"/><circle cx="25" cy="12" r="7" fill="url(#japan-rose)"/><circle cx="23" cy="10" r="2.6" fill="#ffeef6" opacity="0.8"/><path d="M21 19 C17 32 26 40 21 56" stroke="#f0a0c4" stroke-width="4.5" fill="none" stroke-linecap="round"/><path d="M30 19 C35 32 26 42 30 54" stroke="#dd7fa8" stroke-width="4.5" fill="none" stroke-linecap="round"/></g>
<g data-obj="tree-bell" transform="translate(742 232)"><circle cx="23" cy="3" r="3.4" fill="#7a6350"/><path d="M7 23 C7 11 16 5 23 5 C30 5 39 11 39 23 L42 36 L4 36 Z" fill="url(#japan-goldS)"/><path d="M26 6 C33 9 39 15 39 23 L42 36 L29 36 Z" fill="#9c6716" opacity="0.4"/><path d="M13 15 C11 20 11 27 12 33" stroke="#fff2c4" stroke-width="3.4" fill="none" opacity="0.8" stroke-linecap="round"/><rect x="2" y="36" width="42" height="7" rx="3.5" fill="url(#japan-gold)"/><rect x="2" y="36" width="42" height="3" rx="1.5" fill="#fff2c4" opacity="0.6"/><circle cx="23" cy="48" r="5.5" fill="url(#japan-woodd)"/></g>
<g data-obj="nest" transform="translate(674 328)"><path d="M3 17 C3 36 15 43 28 43 C41 43 53 36 53 17 Z" fill="url(#japan-woodd)"/><path d="M40 20 C40 34 36 41 30 43 C42 43 53 36 53 17 Z" fill="#3f2717" opacity="0.4"/><ellipse cx="28" cy="17" rx="26" ry="10" fill="url(#japan-woodl)"/><ellipse cx="28" cy="18" rx="17" ry="6" fill="#5c3a24" opacity="0.75"/><ellipse cx="22" cy="17" rx="6.5" ry="5" fill="url(#japan-creamS)"/><ellipse cx="34" cy="18" rx="6.5" ry="5" fill="url(#japan-creamS)"/><path d="M5 24 L51 28" stroke="#5c3a24" stroke-width="2" fill="none" opacity="0.7"/><path d="M7 33 L48 35" stroke="#5c3a24" stroke-width="2" fill="none" opacity="0.5"/></g>
<g data-obj="acorn" transform="translate(748 372)"><path d="M9 20 C9 36 16 48 24 48 C32 48 39 36 39 20 Z" fill="url(#japan-woodl)"/><path d="M27 21 C27 35 25 44 21 48 C32 48 39 36 39 20 Z" fill="#8a5a3b" opacity="0.55"/><path d="M13 22 C14 30 16 38 19 43" stroke="#f6dcb4" stroke-width="3" fill="none" opacity="0.6" stroke-linecap="round"/><path d="M4 11 C4 4 44 4 44 11 C44 18 37 22 24 22 C11 22 4 18 4 11 Z" fill="url(#japan-woodd)"/><path d="M4 11 C4 5 30 4 40 7 C30 7 12 9 6 15 Z" fill="#c08b5d" opacity="0.6"/><path d="M24 0 L24 6" stroke="#6d4630" stroke-width="3" fill="none" stroke-linecap="round"/><path d="M9 14 L39 14" stroke="#8a5a3b" stroke-width="2" fill="none" opacity="0.7"/></g>
<ellipse cx="470" cy="246" rx="8" ry="4.6" fill="#ffc4dc" opacity="0.75" transform="rotate(24 470 246)"/>
<ellipse cx="538" cy="412" rx="8" ry="4.6" fill="#ffc4dc" opacity="0.75" transform="rotate(-18 538 412)"/>
<ellipse cx="608" cy="462" rx="8" ry="4.6" fill="#ffc4dc" opacity="0.75" transform="rotate(42 608 462)"/>
<ellipse cx="694" cy="486" rx="8" ry="4.6" fill="#ffc4dc" opacity="0.75" transform="rotate(-34 694 486)"/>
<ellipse cx="760" cy="512" rx="8" ry="4.6" fill="#ffc4dc" opacity="0.75" transform="rotate(16 760 512)"/>
<ellipse cx="440" cy="388" rx="8" ry="4.6" fill="#ffc4dc" opacity="0.75" transform="rotate(-46 440 388)"/>
<ellipse cx="520" cy="210" rx="8" ry="4.6" fill="#ffc4dc" opacity="0.75" transform="rotate(30 520 210)"/>
<rect x="0" y="792" width="800" height="408" fill="url(#japan-street)"/>
<rect x="0" y="792" width="800" height="30" fill="#a89178"/>
<rect x="0" y="792" width="800" height="6" fill="#c0aa8f" opacity="0.7"/>
<rect x="0" y="818" width="800" height="7" fill="#6b584c"/>
<rect x="0" y="900" width="800" height="3" fill="#5b4a3d" opacity="0.4"/>
<rect x="0" y="1010" width="800" height="3" fill="#5b4a3d" opacity="0.35"/>
<rect x="0" y="1122" width="800" height="3" fill="#5b4a3d" opacity="0.3"/>
<ellipse cx="266" cy="866" rx="250" ry="70" fill="url(#japan-warmglow)" opacity="0.5"/>
<ellipse cx="566" cy="836" rx="150" ry="42" fill="url(#japan-warmglow)" opacity="0.32"/>
<path d="M150 806 L54 1022 L142 1022 L210 806 Z" fill="#2f2622" opacity="0.2"/>
<path d="M470 800 L418 984 L502 984 L522 800 Z" fill="#2f2622" opacity="0.16"/>
<path d="M694 798 L644 1030 L728 1030 L748 798 Z" fill="#2f2622" opacity="0.18"/>
<g data-obj="manhole" transform="translate(148 1092) scale(0.72)"><ellipse cx="50" cy="20" rx="50" ry="16" fill="url(#japan-metald)"/><ellipse cx="50" cy="15" rx="45" ry="14" fill="url(#japan-metal)"/><ellipse cx="50" cy="14" rx="38" ry="11" fill="#8b9998"/><ellipse cx="50" cy="13" rx="24" ry="7" fill="#6f7d7a"/><path d="M14 10 C24 4 76 4 86 10" stroke="#e6eeed" stroke-width="3" fill="none" opacity="0.55"/><path d="M26 20 L74 20" stroke="#59665f" stroke-width="3" fill="none" opacity="0.6"/></g>
<ellipse cx="164" cy="1072" rx="156" ry="22" fill="url(#japan-shade)" opacity="0.55"/>
<rect x="24" y="896" width="278" height="18" fill="url(#japan-woodl)"/>
<rect x="24" y="896" width="278" height="6" fill="#f6dcb4" opacity="0.6"/>
<rect x="24" y="914" width="278" height="154" fill="url(#japan-wood)"/>
<rect x="270" y="914" width="32" height="154" fill="#4d301f" opacity="0.45"/>
<rect x="24" y="914" width="278" height="8" fill="#6b4429" opacity="0.4"/>
<rect x="24" y="946" width="278" height="7" fill="#6b4429" opacity="0.5"/>
<rect x="24" y="990" width="278" height="7" fill="#6b4429" opacity="0.5"/>
<rect x="24" y="1034" width="278" height="7" fill="#6b4429" opacity="0.5"/>
<rect x="60" y="914" width="8" height="154" fill="#6b4429" opacity="0.35"/>
<rect x="160" y="914" width="8" height="154" fill="#6b4429" opacity="0.35"/>
<rect x="246" y="914" width="8" height="154" fill="#6b4429" opacity="0.35"/>
<g data-obj="crate-small" transform="translate(30 844)"><path d="M0 0 L66 0 L66 52 L0 52 Z" fill="url(#japan-woodl)"/><path d="M0 0 L66 0 L66 9 L0 9 Z" fill="#f6dcb4" opacity="0.7"/><path d="M52 0 L66 0 L66 52 L52 52 Z" fill="#7a4f2d" opacity="0.4"/><path d="M0 22 L66 22" stroke="#8a5a3b" stroke-width="5" fill="none" opacity="0.5"/><path d="M0 38 L66 38" stroke="#8a5a3b" stroke-width="5" fill="none" opacity="0.4"/><path d="M0 46 L66 46 L66 52 L0 52 Z" fill="#5c3a24" opacity="0.45"/></g>
<rect x="38" y="852" width="15" height="24" rx="5" fill="url(#japan-green)"/>
<rect x="40" y="856" width="4" height="14" rx="2" fill="#d5f0b0" opacity="0.5"/>
<rect x="58" y="854" width="15" height="22" rx="5" fill="url(#japan-red)"/>
<rect x="60" y="858" width="4" height="12" rx="2" fill="#ffc4b0" opacity="0.5"/>
<ellipse cx="146" cy="894" rx="32" ry="6" fill="url(#japan-shade)" opacity="0.5"/>
<g data-obj="teapot" transform="translate(114 852) scale(0.56)"><path d="M22 20 C6 20 0 34 0 52 C0 70 14 78 34 78 L64 78 C84 78 96 70 96 52 C96 34 88 20 74 20 Z" fill="url(#japan-teal)"/><path d="M64 20 C80 26 88 38 88 54 C88 70 78 78 58 78 L64 78 C84 78 96 70 96 52 C96 34 88 20 74 20 Z" fill="#173741" opacity="0.55"/><path d="M18 32 C12 42 12 56 16 66" stroke="#b4dbe6" stroke-width="6" fill="none" opacity="0.5" stroke-linecap="round"/><ellipse cx="48" cy="18" rx="28" ry="10" fill="url(#japan-tealS)"/><circle cx="48" cy="9" r="7.5" fill="url(#japan-goldS)"/><path d="M96 36 C114 34 120 48 110 60" stroke="#3c6474" stroke-width="9" fill="none" stroke-linecap="round"/><path d="M0 36 C-18 32 -22 48 -10 60" stroke="#3c6474" stroke-width="9" fill="none" stroke-linecap="round"/><path d="M24 62 C34 68 62 68 72 62" stroke="#8cbcc9" stroke-width="3" fill="none" opacity="0.45"/></g>
<ellipse cx="212" cy="894" rx="32" ry="6" fill="url(#japan-shade)" opacity="0.5"/>
<g data-obj="matcha-cup" transform="translate(182 848) scale(0.58)"><ellipse cx="48" cy="70" rx="46" ry="11" fill="url(#japan-ceramic)"/><path d="M8 26 C8 54 24 68 48 68 C72 68 88 54 88 26 Z" fill="url(#japan-ceramic)"/><path d="M62 28 C62 54 56 68 48 68 C72 68 88 54 88 26 Z" fill="#bda286" opacity="0.5"/><path d="M18 32 C20 46 27 56 36 61" stroke="#ffffff" stroke-width="4" fill="none" opacity="0.6" stroke-linecap="round"/><ellipse cx="48" cy="26" rx="42" ry="13" fill="#efe0c6"/><ellipse cx="48" cy="26" rx="36" ry="10" fill="url(#japan-greenS)"/><ellipse cx="43" cy="23" rx="19" ry="5" fill="#c2dd94" opacity="0.8"/><path d="M30 24 C36 20 50 20 56 24" stroke="#e8f3cf" stroke-width="2" fill="none" opacity="0.8"/></g>
<ellipse cx="272" cy="894" rx="30" ry="6" fill="url(#japan-shade)" opacity="0.5"/>
<g data-obj="leaf-veg" transform="translate(244 846) scale(0.95)"><path d="M4 44 C0 28 8 16 18 16 C15 5 25 -2 34 3 C42 -3 54 4 52 14 C61 18 62 32 54 38 C58 46 50 54 40 52 Z" fill="url(#japan-greenS)"/><path d="M18 16 C27 12 41 15 52 25 C40 17 27 14 18 16 Z" fill="#c2e59a" opacity="0.85"/><path d="M34 3 C41 10 48 21 52 32" stroke="#8fbf6a" stroke-width="4" fill="none" opacity="0.7"/><path d="M12 34 C22 40 34 45 46 46" stroke="#35602b" stroke-width="3.5" fill="none" opacity="0.6"/><path d="M8 20 C6 30 8 40 14 46" stroke="#d9f0b8" stroke-width="3" fill="none" opacity="0.5"/></g>
<g data-obj="red-box" transform="translate(36 998)"><path d="M0 0 L74 0 L68 40 L6 40 Z" fill="url(#japan-red)"/><path d="M0 0 L74 0 L72 11 L2 11 Z" fill="#ff9c81" opacity="0.55"/><path d="M58 0 L74 0 L68 40 L54 40 Z" fill="#7d2210" opacity="0.4"/><path d="M10 20 L60 20" stroke="#ffeecb" stroke-width="3.5" fill="none" opacity="0.7" stroke-linecap="round"/><path d="M14 30 L48 30" stroke="#ffeecb" stroke-width="3" fill="none" opacity="0.5" stroke-linecap="round"/></g>
<path d="M120 1002 L184 1002 L178 1040 L126 1040 Z" fill="url(#japan-woodl)"/>
<path d="M120 1002 L184 1002 L182 1012 L122 1012 Z" fill="#f6dcb4" opacity="0.6"/>
<g transform="translate(196 1006) scale(0.5)"><path d="M44 94 C14 94 2 74 2 51 C2 22 20 2 44 2 C68 2 86 22 86 51 C86 74 74 94 44 94 Z" fill="url(#japan-redS)"/><path d="M44 2 C62 2 78 20 80 44 C82 66 70 88 56 94 C68 80 72 60 70 44 C68 24 58 8 44 2 Z" fill="#7d2210" opacity="0.5"/><path d="M8 68 C20 78 68 78 80 68 L79 76 C66 85 22 85 9 76 Z" fill="#f0b93f" opacity="0.85"/><ellipse cx="44" cy="47" rx="26" ry="26" fill="url(#japan-creamS)"/><circle cx="34" cy="46" r="6" fill="#3a2c26"/><circle cx="54" cy="46" r="6" fill="#3a2c26"/><path d="M30 57 C36 64 52 64 58 57 C52 70 36 70 30 57 Z" fill="#3a2c26"/></g>
<g transform="translate(250 998) scale(0.45)"><path d="M48 114 C18 114 8 96 8 76 C8 56 20 42 48 42 C76 42 88 56 88 76 C88 96 78 114 48 114 Z" fill="url(#japan-creamS)"/><path d="M62 44 C80 50 88 62 88 76 C88 96 78 114 48 114 C66 106 74 92 74 74 C74 60 70 48 62 44 Z" fill="#cbb79c" opacity="0.55"/><path d="M22 14 L14 0 L36 10 Z" fill="#fffaf2"/><path d="M74 14 L82 0 L60 10 Z" fill="#f3e5d4"/><circle cx="48" cy="36" r="31" fill="url(#japan-creamS)"/><circle cx="38" cy="37" r="4" fill="#3a2c26"/><circle cx="58" cy="37" r="4" fill="#3a2c26"/><path d="M44 46 L52 46 L48 51 Z" fill="#e07a8a"/><path d="M22 66 C33 75 63 75 74 66 L74 75 C63 84 33 84 22 75 Z" fill="url(#japan-red)"/><circle cx="48" cy="80" r="8" fill="url(#japan-goldS)"/></g>
<ellipse cx="292" cy="1066" rx="26" ry="6" fill="url(#japan-shade)" opacity="0.5"/>
<g data-obj="broom" transform="translate(270 998)"><rect x="12" y="0" width="6" height="38" rx="3" fill="url(#japan-woodl)"/><rect x="13" y="2" width="2" height="34" rx="1" fill="#f6dcb4" opacity="0.7"/><path d="M5 36 L25 36 L30 68 L0 68 Z" fill="url(#japan-woodl)"/><path d="M5 36 L25 36 L26 44 L4 44 Z" fill="#8a5a3b" opacity="0.6"/><path d="M22 36 L25 36 L30 68 L25 68 Z" fill="#7a4f2d" opacity="0.4"/><path d="M8 46 L5 68" stroke="#a97a4b" stroke-width="2" fill="none"/><path d="M15 46 L15 68" stroke="#a97a4b" stroke-width="2" fill="none"/><path d="M22 46 L25 68" stroke="#a97a4b" stroke-width="2" fill="none"/></g>
<ellipse cx="444" cy="1074" rx="148" ry="20" fill="url(#japan-shade)" opacity="0.5"/>
<rect x="330" y="876" width="16" height="194" fill="url(#japan-woodd)"/>
<rect x="544" y="876" width="16" height="194" fill="url(#japan-woodd)"/>
<rect x="330" y="876" width="6" height="194" fill="#c08b5d" opacity="0.6"/>
<rect x="544" y="876" width="6" height="194" fill="#c08b5d" opacity="0.6"/>
<rect x="320" y="878" width="250" height="24" fill="url(#japan-woodl)"/>
<rect x="320" y="878" width="250" height="8" fill="#f6dcb4" opacity="0.7"/>
<rect x="320" y="894" width="250" height="8" fill="#7a4f2d" opacity="0.4"/>
<rect x="322" y="964" width="246" height="22" fill="url(#japan-wood)"/>
<rect x="322" y="964" width="246" height="7" fill="#e6bb87" opacity="0.6"/>
<rect x="322" y="1046" width="246" height="22" fill="url(#japan-wood)"/>
<rect x="322" y="1046" width="246" height="7" fill="#e6bb87" opacity="0.6"/>
<ellipse cx="362" cy="876" rx="28" ry="6" fill="url(#japan-shade)" opacity="0.5"/>
<g data-obj="daruma" transform="translate(336 822) scale(0.6)"><path d="M44 94 C14 94 2 74 2 51 C2 22 20 2 44 2 C68 2 86 22 86 51 C86 74 74 94 44 94 Z" fill="url(#japan-redS)"/><path d="M44 2 C62 2 78 20 80 44 C82 66 70 88 56 94 C68 80 72 60 70 44 C68 24 58 8 44 2 Z" fill="#7d2210" opacity="0.5"/><path d="M14 20 C22 10 32 5 42 3 C30 10 22 22 19 34 Z" fill="#ffb59f" opacity="0.5"/><path d="M8 68 C20 78 68 78 80 68 L79 76 C66 85 22 85 9 76 Z" fill="#f0b93f" opacity="0.85"/><ellipse cx="44" cy="47" rx="26" ry="26" fill="url(#japan-creamS)"/><path d="M24 37 C28 28 40 28 43 37 C38 32 29 32 24 37 Z" fill="#3a2c26"/><path d="M64 37 C60 28 48 28 45 37 C50 32 59 32 64 37 Z" fill="#3a2c26"/><circle cx="34" cy="46" r="6" fill="#3a2c26"/><circle cx="54" cy="46" r="6" fill="none" stroke="#3a2c26" stroke-width="2"/><path d="M30 57 C36 64 52 64 58 57 C52 70 36 70 30 57 Z" fill="#3a2c26"/><circle cx="16" cy="27" r="4" fill="#f0b93f" opacity="0.75"/><circle cx="72" cy="27" r="4" fill="#f0b93f" opacity="0.75"/></g>
<ellipse cx="444" cy="876" rx="30" ry="6" fill="url(#japan-shade)" opacity="0.5"/>
<g data-obj="maneki-neko" transform="translate(414 810) scale(0.58)"><path d="M48 114 C18 114 8 96 8 76 C8 56 20 42 48 42 C76 42 88 56 88 76 C88 96 78 114 48 114 Z" fill="url(#japan-creamS)"/><path d="M62 44 C80 50 88 62 88 76 C88 96 78 114 48 114 C66 106 74 92 74 74 C74 60 70 48 62 44 Z" fill="#cbb79c" opacity="0.55"/><path d="M22 14 L14 0 L36 10 Z" fill="#fffaf2"/><path d="M74 14 L82 0 L60 10 Z" fill="#f3e5d4"/><path d="M24 13 L20 6 L32 12 Z" fill="#f2b6c4"/><path d="M72 13 L76 6 L64 12 Z" fill="#e79fb0"/><circle cx="48" cy="36" r="31" fill="url(#japan-creamS)"/><path d="M64 10 C77 17 79 28 79 36 C79 51 66 64 48 67 C63 60 69 48 69 36 C69 25 68 15 64 10 Z" fill="#cbb79c" opacity="0.5"/><path d="M20 14 C28 8 38 8 42 14 C34 10 26 10 20 14 Z" fill="#f0a35d"/><path d="M32 32 C36 26 44 26 47 32 C42 29 37 29 32 32 Z" fill="#3a2c26"/><path d="M64 32 C60 26 52 26 49 32 C54 29 59 29 64 32 Z" fill="#3a2c26"/><circle cx="38" cy="37" r="4" fill="#3a2c26"/><circle cx="58" cy="37" r="4" fill="#3a2c26"/><circle cx="39.5" cy="35.5" r="1.5" fill="#ffffff"/><circle cx="59.5" cy="35.5" r="1.5" fill="#ffffff"/><path d="M44 46 L52 46 L48 51 Z" fill="#e07a8a"/><path d="M48 51 C44 56 38 55 36 51" stroke="#3a2c26" stroke-width="1.8" fill="none"/><path d="M48 51 C52 56 58 55 60 51" stroke="#3a2c26" stroke-width="1.8" fill="none"/><path d="M14 42 L32 46" stroke="#c9b6a4" stroke-width="1.5" fill="none"/><path d="M82 42 L64 46" stroke="#c9b6a4" stroke-width="1.5" fill="none"/><ellipse cx="10" cy="56" rx="12" ry="17" fill="url(#japan-creamS)" transform="rotate(-22 10 56)"/><ellipse cx="80" cy="94" rx="11" ry="9" fill="#f6ecdc"/><path d="M22 66 C33 75 63 75 74 66 L74 75 C63 84 33 84 22 75 Z" fill="url(#japan-red)"/><circle cx="48" cy="80" r="8" fill="url(#japan-goldS)"/><ellipse cx="50" cy="97" rx="23" ry="13" fill="url(#japan-goldS)"/><rect x="40" y="91" width="20" height="3" rx="1.5" fill="#9c6716" opacity="0.7"/></g>
<ellipse cx="516" cy="876" rx="26" ry="5" fill="url(#japan-shade)" opacity="0.5"/>
<g data-obj="onigiri" transform="translate(492 828) scale(0.64)"><path d="M40 2 C50 2 55 9 72 42 C82 60 76 72 60 72 L20 72 C4 72 -2 60 8 42 C25 9 30 2 40 2 Z" fill="url(#japan-ceramic)"/><path d="M40 2 C50 2 55 9 72 42 C82 60 76 72 60 72 L46 72 C56 50 52 22 40 2 Z" fill="#c8b298" opacity="0.5"/><path d="M40 2 C34 10 28 22 22 36 C16 24 26 10 34 4 Z" fill="#ffffff" opacity="0.7"/><path d="M22 46 L58 46 L58 72 L30 72 C24 72 22 67 22 60 Z" fill="#2f4a3c"/><path d="M22 48 L58 48 L58 55 L22 55 Z" fill="#527a63" opacity="0.8"/><path d="M46 46 L58 46 L58 72 L46 72 Z" fill="#1c2f27" opacity="0.7"/><ellipse cx="30" cy="26" rx="3" ry="2" fill="#ddcbb0" transform="rotate(20 30 26)"/><ellipse cx="44" cy="18" rx="3" ry="2" fill="#ddcbb0" transform="rotate(-30 44 18)"/><ellipse cx="54" cy="34" rx="3" ry="2" fill="#ddcbb0" transform="rotate(40 54 34)"/></g>
<ellipse cx="556" cy="878" rx="24" ry="5" fill="url(#japan-shade)" opacity="0.45"/>
<g transform="translate(530 838)"><ellipse cx="28" cy="40" rx="27" ry="6" fill="#e0cdb0"/><path d="M4 14 C4 32 15 40 28 40 C41 40 52 32 52 14 Z" fill="url(#japan-ceramic)"/><path d="M37 15 C37 32 33 40 28 40 C41 40 52 32 52 14 Z" fill="#bda286" opacity="0.45"/><ellipse cx="28" cy="14" rx="24" ry="7" fill="#efe0c6"/><ellipse cx="28" cy="14" rx="19" ry="5" fill="url(#japan-tealS)"/></g>
<g data-obj="price-tag" transform="translate(352 924)"><path d="M16 0 L16 8" stroke="#7a6350" stroke-width="1.8" fill="none"/><path d="M2 8 L30 8 L28 44 L4 44 Z" fill="url(#japan-paper)"/><path d="M2 8 L30 8 L29 17 L3 17 Z" fill="#e5d5b8" opacity="0.9"/><path d="M23 8 L30 8 L28 44 L22 44 Z" fill="#c2ab88" opacity="0.45"/><path d="M8 26 L24 26" stroke="#c2432f" stroke-width="3" fill="none" stroke-linecap="round"/><path d="M8 34 L19 34" stroke="#7a5a3b" stroke-width="2.4" fill="none" stroke-linecap="round"/></g>
<g data-obj="red-cloth" transform="translate(396 894) scale(0.82)"><path d="M0 36 L80 36 L76 12 C76 7 71 4 64 4 L12 8 C5 8 2 12 2 17 Z" fill="url(#japan-red)"/><path d="M0 36 L80 36 L79 27 L1 27 Z" fill="#7d2210" opacity="0.4"/><path d="M2 17 C12 10 60 6 74 8" stroke="#ff9c81" stroke-width="4" fill="none" opacity="0.55"/><path d="M10 22 L66 18" stroke="#ffeecb" stroke-width="3.5" fill="none" opacity="0.75"/></g>
<g transform="translate(452 926)"><path d="M15 0 L15 8" stroke="#7a6350" stroke-width="1.8" fill="none"/><path d="M2 8 L28 8 L26 40 L4 40 Z" fill="url(#japan-paper)"/><path d="M2 8 L28 8 L27 16 L3 16 Z" fill="#e5d5b8" opacity="0.9"/><path d="M8 24 L22 24" stroke="#31555f" stroke-width="2.8" fill="none" stroke-linecap="round"/></g>
<g transform="translate(524 922)"><path d="M15 0 L15 8" stroke="#7a6350" stroke-width="1.8" fill="none"/><path d="M2 8 L28 8 L26 42 L4 42 Z" fill="url(#japan-paper)"/><path d="M2 8 L28 8 L27 16 L3 16 Z" fill="#e5d5b8" opacity="0.9"/><path d="M8 26 L22 26" stroke="#c2432f" stroke-width="2.8" fill="none" stroke-linecap="round"/></g>
<path d="M340 986 L400 986 L396 1046 L344 1046 Z" fill="url(#japan-woodd)"/>
<path d="M340 986 L400 986 L398 996 L342 996 Z" fill="#c08b5d" opacity="0.6"/>
<path d="M416 992 L470 992 L466 1046 L420 1046 Z" fill="url(#japan-wood)"/>
<path d="M416 992 L470 992 L468 1001 L418 1001 Z" fill="#efc994" opacity="0.6"/>
<path d="M486 990 L548 990 L544 1046 L490 1046 Z" fill="url(#japan-woodd)"/>
<path d="M486 990 L548 990 L546 1000 L488 1000 Z" fill="#c08b5d" opacity="0.55"/>
<ellipse cx="716" cy="1102" rx="100" ry="18" fill="url(#japan-shade)" opacity="0.55"/>
<rect x="640" y="936" width="150" height="160" rx="10" fill="url(#japan-teal)"/>
<rect x="640" y="936" width="32" height="160" rx="10" fill="#9dcad6" opacity="0.45"/>
<rect x="766" y="936" width="24" height="160" fill="#173741" opacity="0.5"/>
<rect x="640" y="978" width="150" height="9" fill="#20434c" opacity="0.7"/>
<rect x="640" y="1042" width="150" height="9" fill="#20434c" opacity="0.7"/>
<ellipse cx="715" cy="936" rx="75" ry="18" fill="url(#japan-tealS)"/>
<ellipse cx="715" cy="934" rx="61" ry="13" fill="#31555f"/>
<ellipse cx="709" cy="931" rx="30" ry="6" fill="#7fa8b6" opacity="0.4"/>
<ellipse cx="715" cy="1096" rx="75" ry="15" fill="#173741" opacity="0.7"/>
<ellipse cx="674" cy="936" rx="26" ry="5" fill="url(#japan-shade)" opacity="0.5"/>
<g data-obj="succulent" transform="translate(646 880)"><path d="M8 42 C0 26 10 12 24 10 C19 0 32 -6 42 2 C52 -4 62 6 57 16 C69 22 68 42 54 48 Z" fill="url(#japan-greenS)"/><path d="M24 10 C34 5 48 8 56 20 C44 11 32 8 24 10 Z" fill="#c2e59a" opacity="0.85"/><path d="M42 2 C48 12 52 26 52 38" stroke="#8fbf6a" stroke-width="3.5" fill="none" opacity="0.7"/><path d="M12 24 C10 32 12 42 18 48" stroke="#d9f0b8" stroke-width="3" fill="none" opacity="0.5"/><path d="M8 42 L54 48 L50 56 L12 52 Z" fill="url(#japan-woodl)"/></g>
<ellipse cx="742" cy="938" rx="26" ry="5" fill="url(#japan-shade)" opacity="0.45"/>
<g transform="translate(716 896)"><ellipse cx="27" cy="40" rx="26" ry="6" fill="#e0cdb0"/><path d="M4 13 C4 31 14 40 27 40 C40 40 50 31 50 13 Z" fill="url(#japan-ceramic)"/><path d="M35 14 C35 31 32 40 27 40 C40 40 50 31 50 13 Z" fill="#bda286" opacity="0.45"/><ellipse cx="27" cy="13" rx="23" ry="7" fill="#efe0c6"/><ellipse cx="27" cy="13" rx="18" ry="5" fill="url(#japan-greenS)"/></g>
<path d="M0 1188 C-4 1122 10 1076 32 1062 C24 1044 36 1028 52 1032 C58 1016 82 1016 88 1032 C106 1030 116 1048 106 1062 C124 1076 128 1128 120 1188 Z" fill="url(#japan-greenS)"/>
<path d="M32 1062 C48 1050 78 1050 106 1062 C80 1054 52 1054 32 1062 Z" fill="#c2e59a" opacity="0.8"/>
<path d="M52 1032 C64 1042 76 1058 84 1074" stroke="#8fbf6a" stroke-width="5" fill="none" opacity="0.6"/>
<path d="M16 1082 C30 1092 46 1098 64 1100" stroke="#2d5522" stroke-width="5" fill="none" opacity="0.6"/>
<rect x="0" y="1108" width="130" height="92" fill="url(#japan-red)"/>
<rect x="0" y="1108" width="130" height="15" fill="#ff9c81" opacity="0.5"/>
<rect x="100" y="1108" width="30" height="92" fill="#7d2210" opacity="0.45"/>
<path d="M18 1148 L108 1148" stroke="#ffeecb" stroke-width="5" fill="none" opacity="0.5" stroke-linecap="round"/>
<path d="M706 1200 C698 1150 706 1112 726 1104 C718 1090 730 1076 746 1080 C754 1064 778 1066 782 1082 C800 1084 806 1102 794 1112 C810 1126 812 1166 804 1200 Z" fill="url(#japan-greenS)"/>
<path d="M726 1104 C746 1094 776 1096 794 1112 C772 1102 746 1100 726 1104 Z" fill="#c2e59a" opacity="0.8"/>
<path d="M746 1080 C758 1092 768 1110 774 1128" stroke="#8fbf6a" stroke-width="5" fill="none" opacity="0.6"/>
<circle cx="738" cy="1094" r="7" fill="url(#japan-goldS)"/>
<circle cx="782" cy="1102" r="6" fill="url(#japan-redS)"/>
<ellipse cx="370" cy="1194" rx="82" ry="14" fill="url(#japan-shade)" opacity="0.5"/>
<path d="M300 1096 L436 1088 L444 1200 L294 1200 Z" fill="url(#japan-woodd)"/>
<path d="M300 1096 L436 1088 L436 1098 L300 1106 Z" fill="#c08b5d" opacity="0.7"/>
<path d="M310 1106 L428 1099 L434 1194 L306 1194 Z" fill="url(#japan-charcoal)"/>
<path d="M310 1106 L360 1103 L316 1194 L306 1194 Z" fill="#6d605c" opacity="0.25"/>
<path d="M324 1124 L410 1120" stroke="#f6ecd8" stroke-width="5" fill="none" opacity="0.85" stroke-linecap="round"/>
<path d="M324 1142 L394 1138" stroke="#f6ecd8" stroke-width="5" fill="none" opacity="0.65" stroke-linecap="round"/>
<path d="M324 1160 L414 1156" stroke="#f0a35d" stroke-width="5" fill="none" opacity="0.8" stroke-linecap="round"/>
<path d="M324 1178 L372 1175" stroke="#f6ecd8" stroke-width="5" fill="none" opacity="0.55" stroke-linecap="round"/>
<g data-obj="purple-heart" transform="translate(368 1136) scale(0.72)"><path d="M30 58.5 C7.9 42.7 0 29.2 0 18.2 C0 7.1 9.5 0 17.4 0 C23.7 0 28.4 4 30 8.7 C31.6 4 36.3 0 42.7 0 C50.6 0 60 7.1 60 18.2 C60 29.2 52.1 42.7 30 58.5 Z" fill="url(#japan-purpS)"/><path d="M30 58.5 C45.8 47.4 53.7 34.8 55.3 23.7 C56.9 12.6 52.1 4.7 44.2 1.6 C50.6 0 60 7.1 60 18.2 C60 29.2 52.1 42.7 30 58.5 Z" fill="#3f2178" opacity="0.55"/><path d="M17.4 3.2 C10.3 3.2 4 9.5 4 18.2 C4 25.3 7.1 33.2 14.2 41.9 C7.9 31.6 6.3 23.7 7.9 17.4 C9.5 9.5 13.4 4.7 17.4 3.2 Z" fill="#d3bcff" opacity="0.8"/><ellipse cx="15.8" cy="14.2" rx="5.2" ry="3.4" fill="#f0e8ff" opacity="0.85" transform="rotate(-35 15.8 14.2)"/></g>
<ellipse cx="560" cy="1166" rx="132" ry="16" fill="url(#japan-shade)" opacity="0.5"/>
<path d="M452 1120 L672 1114 L678 1134 L448 1140 Z" fill="url(#japan-woodl)"/>
<path d="M452 1120 L672 1114 L673 1122 L452 1128 Z" fill="#f6dcb4" opacity="0.65"/>
<path d="M462 1140 L466 1172" stroke="#8a5a3b" stroke-width="7" fill="none"/>
<path d="M662 1134 L658 1166" stroke="#8a5a3b" stroke-width="7" fill="none"/>
<ellipse cx="492" cy="1122" rx="26" ry="5" fill="url(#japan-shade)" opacity="0.5"/>
<g data-obj="coin-purse" transform="translate(466 1074) scale(0.8)"><rect x="25" y="0" width="9" height="7" rx="3.5" fill="#7a6350"/><path d="M5 16 C5 7 15 3 29 3 C43 3 53 7 53 16 L57 40 C57 45 53 47 47 47 L11 47 C5 47 1 45 1 40 Z" fill="url(#japan-teal)"/><path d="M29 3 C43 3 53 7 53 16 L57 40 C57 45 53 47 47 47 L35 47 C43 42 45 23 41 13 C39 7 35 4 29 3 Z" fill="#173741" opacity="0.55"/><path d="M8 18 C10 28 8 38 9 44" stroke="#a8d2dc" stroke-width="3.5" fill="none" opacity="0.5" stroke-linecap="round"/><path d="M7 15 C15 9 43 9 51 15" stroke="#8cbcc9" stroke-width="3" fill="none"/><circle cx="28" cy="28" r="7.5" fill="url(#japan-goldS)"/></g>
<ellipse cx="566" cy="1120" rx="26" ry="5" fill="url(#japan-shade)" opacity="0.5"/>
<g data-obj="takeout-box" transform="translate(540 1068) scale(0.86)"><path d="M7 15 L54 15 L48 52 L13 52 Z" fill="url(#japan-paper)"/><path d="M39 15 L54 15 L48 52 L37 52 Z" fill="#c9b291" opacity="0.55"/><path d="M7 15 L20 15 L15 52 L13 52 Z" fill="#fffdf6" opacity="0.6"/><path d="M0 6 L60 6 L54 17 L6 17 Z" fill="url(#japan-red)"/><path d="M0 6 L60 6 L58 11 L2 11 Z" fill="#ff9c81" opacity="0.55"/><path d="M46 6 L60 6 L54 17 L44 17 Z" fill="#7d2210" opacity="0.4"/><path d="M20 28 L42 28" stroke="#8a5a3b" stroke-width="2.6" fill="none" stroke-linecap="round"/><path d="M20 36 L35 36" stroke="#8a5a3b" stroke-width="2.4" fill="none" stroke-linecap="round"/><path d="M28 0 C34 4 34 10 30 14" stroke="#a67c52" stroke-width="2.4" fill="none"/></g>
<ellipse cx="630" cy="1116" rx="24" ry="5" fill="url(#japan-shade)" opacity="0.5"/>
<g data-obj="paper-fan" transform="translate(606 1070) scale(0.92)"><path d="M26 46 C6 37 0 19 2 4 L50 4 C52 19 46 37 26 46 Z" fill="url(#japan-paper)"/><path d="M26 46 C35 41 44 30 48 15 L50 4 L27 4 Z" fill="#cdb894" opacity="0.55"/><path d="M2 4 L26 4 C25 16 22 28 16 36 C7 27 2 15 2 4 Z" fill="#fffdf6" opacity="0.5"/><path d="M26 46 L14 6" stroke="#c2432f" stroke-width="1.8" fill="none"/><path d="M26 46 L26 4" stroke="#c2432f" stroke-width="1.8" fill="none"/><path d="M26 46 L38 6" stroke="#c2432f" stroke-width="1.8" fill="none"/><path d="M2 4 L50 4 L50 9 L2 9 Z" fill="#a67c52" opacity="0.55"/><circle cx="26" cy="45" r="4.5" fill="url(#japan-woodd)"/></g>
<ellipse cx="262" cy="1140" rx="28" ry="6" fill="url(#japan-shade)" opacity="0.5"/>
<g data-obj="dropped-can" transform="translate(238 1100) scale(0.95)"><path d="M5 9 C5 4 15 2 25 2 C35 2 45 4 45 9 L45 32 C45 36 35 38 25 38 C15 38 5 36 5 32 Z" fill="url(#japan-green)"/><path d="M35 4 C42 5 45 7 45 9 L45 32 C45 36 38 38 30 38 C38 34 40 16 35 4 Z" fill="#2d5522" opacity="0.45"/><path d="M9 12 C8 20 8 28 10 34" stroke="#d9f0b8" stroke-width="3.5" fill="none" opacity="0.55" stroke-linecap="round"/><ellipse cx="25" cy="9" rx="20" ry="6" fill="#8fbf6a"/><ellipse cx="25" cy="8" rx="12" ry="3.2" fill="#4f7d3d"/><rect x="9" y="17" width="32" height="8" fill="#f6ecd8" opacity="0.85"/></g>
<ellipse cx="504" cy="1190" rx="34" ry="6" fill="url(#japan-shade)" opacity="0.5"/>
<g data-obj="geta-sandal" transform="translate(470 1150) scale(0.62)"><path d="M24 42 L44 39 L47 62 L27 65 Z" fill="url(#japan-woodd)"/><path d="M70 35 L90 32 L93 54 L73 57 Z" fill="url(#japan-woodd)"/><path d="M6 40 C6 28 18 20 34 18 L80 14 C94 13 102 20 102 30 L100 44 C99 54 88 60 72 62 L28 66 C14 67 6 60 6 50 Z" fill="#6d4630"/><path d="M6 34 C6 22 18 14 34 12 L80 8 C94 7 102 14 102 24 L100 38 C99 48 88 54 72 56 L28 60 C14 61 6 54 6 44 Z" fill="url(#japan-woodl)"/><path d="M6 32 C7 22 18 14 34 12 L80 8 C92 7 99 13 101 20 C92 14 82 13 70 14 L34 17 C20 19 9 25 6 32 Z" fill="#f3d5ac" opacity="0.7"/><path d="M14 46 C34 42 62 38 96 36" stroke="#a07850" stroke-width="2" fill="none" opacity="0.7"/><path d="M28 34 C46 23 66 18 90 16" stroke="#3b2f3a" stroke-width="8" fill="none" stroke-linecap="round"/><path d="M28 34 C46 39 66 41 92 41" stroke="#3b2f3a" stroke-width="8" fill="none" stroke-linecap="round"/><path d="M31 32 C44 26 58 22 72 20" stroke="#8a76a0" stroke-width="2.5" fill="none" stroke-linecap="round"/><circle cx="28" cy="34" r="7" fill="#2e242f"/><circle cx="26" cy="32" r="2.5" fill="#8d7a95"/></g>
<ellipse cx="200" cy="1192" rx="26" ry="5" fill="url(#japan-shade)" opacity="0.4"/>
<g data-obj="fallen-leaf" transform="translate(176 1152)"><path d="M2 36 C6 15 23 2 46 0 C44 23 27 38 6 40 Z" fill="url(#japan-glasswarm)"/><path d="M6 40 C21 32 36 19 46 0 C44 23 27 38 6 40 Z" fill="#b95a2f" opacity="0.5"/><path d="M4 38 L42 4" stroke="#8a5a3b" stroke-width="2" fill="none"/><path d="M16 23 L23 12" stroke="#8a5a3b" stroke-width="1.5" fill="none"/><path d="M27 21 L34 10" stroke="#8a5a3b" stroke-width="1.5" fill="none"/></g>
<ellipse cx="96" cy="1116" rx="9" ry="5" fill="#ffc4dc" opacity="0.8" transform="rotate(24 96 1116)"/>
<ellipse cx="468" cy="1180" rx="9" ry="5" fill="#ffc4dc" opacity="0.8" transform="rotate(-14 468 1180)"/>
<ellipse cx="612" cy="1074" rx="9" ry="5" fill="#ffc4dc" opacity="0.8" transform="rotate(-46 612 1074)"/>
<ellipse cx="176" cy="984" rx="9" ry="5" fill="#ffc4dc" opacity="0.8" transform="rotate(12 176 984)"/>
<ellipse cx="660" cy="990" rx="9" ry="5" fill="#ffc4dc" opacity="0.8" transform="rotate(30 660 990)"/>
</svg>`
});
