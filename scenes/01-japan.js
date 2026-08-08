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
    { id: 'stock-pot',       name: 'Stock Pot' },
    { id: 'teapot',          name: 'Teapot' },
    { id: 'price-tag',       name: 'Price Tag' },
    { id: 'roof-vent',       name: 'Roof Vent' },
    { id: 'tanzaku',         name: 'Wish Tag' },
    { id: 'flower-box',      name: 'Flower Box' },
    { id: 'red-cloth',       name: 'Red Cloth' },
    { id: 'matcha-cup',      name: 'Matcha Cup' },
    { id: 'coin-purse',      name: 'Coin Purse' },
    { id: 'water-tank',      name: 'Water Tank' },
    { id: 'tree-chime',      name: 'Wind Chime' },
    { id: 'orange-pane',     name: 'Orange Pane' },
    { id: 'dropped-can',     name: 'Green Can' },
    { id: 'crate-small',     name: 'Small Crate' },
    { id: 'takeout-box',     name: 'Takeout Box' },
    { id: 'tv-aerial',       name: 'TV Aerial' },
    { id: 'twig-lamp',       name: 'Twig Lamp' },
    { id: 'far-sign',        name: 'Far Sign' },
    { id: 'manhole',         name: 'Manhole' },
    { id: 'leaf-veg',        name: 'Cabbage' },
    { id: 'paper-fan',       name: 'Paper Fan' },
    { id: 'weather-vane',    name: 'Weathervane' },
    { id: 'tree-bell',       name: 'Tree Bell' },
    { id: 'ac-unit',         name: 'AC Unit' },
    { id: 'shop-flag',       name: 'Shop Flag' },
    { id: 'succulent',       name: 'Succulent' },
    { id: 'geta-sandal',     name: 'Geta Sandal' },
    { id: 'carp-red',        name: 'Carp Streamer' },
    { id: 'tree-ribbon',     name: 'Ribbon' },
    { id: 'wall-clock',      name: 'Wall Clock' },
    { id: 'red-box',         name: 'Red Box' },
    { id: 'fallen-leaf',     name: 'Fallen Leaf' },
    { id: 'kite',            name: 'Kite' },
    { id: 'bird-feeder',     name: 'Bird Feeder' },
    { id: 'wall-lamp',       name: 'Wall Lamp' },
    { id: 'broom',           name: 'Broom' },
    { id: 'star-kite',       name: 'Star Kite' },
    { id: 'nest',            name: 'Nest' },
    { id: 'gas-meter',       name: 'Gas Meter' },
    { id: 'daruma',          name: 'Daruma Doll' },
    { id: 'paper-plane',     name: 'Paper Plane' },
    { id: 'acorn',           name: 'Acorn' },
    { id: 'hanging-plant',   name: 'Hanging Plant' },
    { id: 'maneki-neko',     name: 'Lucky Cat' },
    { id: 'onigiri',         name: 'Onigiri' }
  ],
  svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 1200">
<defs>
<linearGradient id="japan-sky" x1="0" y1="0" x2="0.12" y2="1"><stop offset="0" stop-color="#fff3de"/><stop offset="0.34" stop-color="#ffe0c8"/><stop offset="0.66" stop-color="#ffc6cf"/><stop offset="1" stop-color="#f3a8c2"/></linearGradient>
<linearGradient id="japan-street" x1="0" y1="0" x2="0.12" y2="1"><stop offset="0" stop-color="#a8927c"/><stop offset="0.1" stop-color="#8a7460"/><stop offset="0.45" stop-color="#6b584a"/><stop offset="1" stop-color="#3f342c"/></linearGradient>
<linearGradient id="japan-roofdeck" x1="0" y1="0" x2="0.12" y2="1"><stop offset="0" stop-color="#b9a3ae"/><stop offset="1" stop-color="#93808e"/></linearGradient>
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
<path d="M470 120 q44 -28 94 -8 q40 -18 72 8 q34 8 22 26 l-214 5 q-20 -16 26 -31 z" fill="#fff3e2" opacity="0.38"/>
<path d="M478 116 q40 -24 88 -6 q30 -12 56 4 l-6 8 q-38 -16 -70 -2 q-40 -14 -68 -4 z" fill="#fffaf0" opacity="0.36"/>
<path d="M32 244 q34 -20 72 -6 q30 -13 54 6 q24 5 16 19 l-160 3 q-16 -12 18 -22 z" fill="#fff1de" opacity="0.26"/>
<ellipse cx="320" cy="212" rx="220" ry="10" fill="#ffe7d8" opacity="0.22"/>
<ellipse cx="620" cy="256" rx="190" ry="9" fill="#ffdfd4" opacity="0.2"/>
<path d="M0 312 L96 312 L96 392 L0 392 Z" fill="url(#japan-far)"/>
<path d="M84 328 L188 328 L188 392 L84 392 Z" fill="url(#japan-farb)"/>
<path d="M176 294 L242 264 L308 294 L308 392 L176 392 Z" fill="url(#japan-far)"/>
<path d="M168 296 L242 258 L316 296 L242 278 Z" fill="#c49bb8" opacity="0.9"/>
<path d="M296 318 L410 318 L410 392 L296 392 Z" fill="url(#japan-farb)"/>
<path d="M398 280 L444 258 L490 280 L490 392 L398 392 Z" fill="url(#japan-far)"/>
<path d="M390 282 L444 252 L498 282 L444 268 Z" fill="#c49bb8" opacity="0.9"/>
<path d="M478 322 L620 322 L620 392 L478 392 Z" fill="url(#japan-farb)"/>
<path d="M608 302 L700 302 L700 392 L608 392 Z" fill="url(#japan-far)"/>
<path d="M690 274 L744 274 L744 392 L690 392 Z" fill="url(#japan-farb)"/>
<path d="M732 306 L800 306 L800 392 L732 392 Z" fill="url(#japan-far)"/>
<rect x="22" y="336" width="10" height="13" fill="#ffe6c8" opacity="0.22"/>
<rect x="50" y="336" width="10" height="13" fill="#ffe6c8" opacity="0.29"/>
<rect x="110" y="350" width="10" height="13" fill="#ffe6c8" opacity="0.36"/>
<rect x="140" y="350" width="10" height="13" fill="#ffe6c8" opacity="0.22"/>
<rect x="206" y="322" width="10" height="13" fill="#ffe6c8" opacity="0.29"/>
<rect x="234" y="322" width="10" height="13" fill="#ffe6c8" opacity="0.36"/>
<rect x="262" y="322" width="10" height="13" fill="#ffe6c8" opacity="0.22"/>
<rect x="326" y="342" width="10" height="13" fill="#ffe6c8" opacity="0.29"/>
<rect x="356" y="342" width="10" height="13" fill="#ffe6c8" opacity="0.36"/>
<rect x="420" y="306" width="10" height="13" fill="#ffe6c8" opacity="0.22"/>
<rect x="452" y="306" width="10" height="13" fill="#ffe6c8" opacity="0.29"/>
<rect x="510" y="346" width="10" height="13" fill="#ffe6c8" opacity="0.36"/>
<rect x="546" y="346" width="10" height="13" fill="#ffe6c8" opacity="0.22"/>
<rect x="582" y="346" width="10" height="13" fill="#ffe6c8" opacity="0.29"/>
<rect x="634" y="328" width="10" height="13" fill="#ffe6c8" opacity="0.36"/>
<rect x="664" y="328" width="10" height="13" fill="#ffe6c8" opacity="0.22"/>
<rect x="704" y="298" width="10" height="13" fill="#ffe6c8" opacity="0.29"/>
<rect x="704" y="326" width="10" height="13" fill="#ffe6c8" opacity="0.36"/>
<rect x="756" y="332" width="10" height="13" fill="#ffe6c8" opacity="0.22"/>
<rect x="782" y="332" width="10" height="13" fill="#ffe6c8" opacity="0.29"/>
<rect x="0" y="300" width="800" height="96" fill="#ffd6ce" opacity="0.32"/>
<rect x="424" y="300" width="318" height="22" fill="url(#japan-roofdeck)"/>
<rect x="424" y="316" width="318" height="14" fill="url(#japan-woodd)"/>
<rect x="424" y="316" width="318" height="5" fill="#c08b5d" opacity="0.6"/>
<rect x="424" y="330" width="318" height="462" fill="url(#japan-creamdim)"/>
<rect x="424" y="330" width="318" height="8" fill="#fff4dc" opacity="0.8"/>
<rect x="424" y="330" width="8" height="462" fill="#fff0d4" opacity="0.45"/>
<rect x="716" y="330" width="26" height="462" fill="#a98a68" opacity="0.55"/>
<rect x="424" y="406" width="318" height="3" fill="#d7bd99" opacity="0.5"/>
<rect x="424" y="468" width="318" height="3" fill="#d7bd99" opacity="0.5"/>
<rect x="424" y="530" width="318" height="3" fill="#d7bd99" opacity="0.5"/>
<rect x="424" y="600" width="318" height="3" fill="#d7bd99" opacity="0.5"/>
<rect x="424" y="664" width="318" height="3" fill="#d7bd99" opacity="0.5"/>
<rect x="424" y="730" width="318" height="3" fill="#d7bd99" opacity="0.5"/>
<rect x="424" y="764" width="318" height="28" fill="#8f7457" opacity="0.32"/>
<rect x="0" y="300" width="430" height="30" fill="url(#japan-roofdeck)"/>
<rect x="0" y="346" width="430" height="446" fill="url(#japan-cream)"/>
<rect x="396" y="346" width="34" height="446" fill="#b99b73" opacity="0.5"/>
<rect x="0" y="452" width="430" height="3" fill="#e6cfaa" opacity="0.45"/>
<rect x="0" y="508" width="430" height="3" fill="#e6cfaa" opacity="0.45"/>
<rect x="0" y="568" width="430" height="3" fill="#e6cfaa" opacity="0.45"/>
<rect x="0" y="628" width="430" height="3" fill="#e6cfaa" opacity="0.45"/>
<rect x="0" y="696" width="430" height="3" fill="#e6cfaa" opacity="0.45"/>
<rect x="0" y="756" width="430" height="3" fill="#e6cfaa" opacity="0.45"/>
<rect x="0" y="766" width="430" height="26" fill="#95795a" opacity="0.3"/>
<ellipse cx="66" cy="328" rx="35.64" ry="10.8" fill="url(#japan-shade)" opacity="0.38"/>
<ellipse cx="66" cy="328" rx="19.44" ry="5.13" fill="url(#japan-shade)" opacity="0.72"/>
<g data-obj="chimney" transform="translate(42 264)"><rect x="4" y="12" width="38" height="52" fill="url(#japan-farb)"/><rect x="4" y="12" width="12" height="52" fill="#e8cbdb" opacity="0.6"/><rect x="32" y="12" width="10" height="52" fill="#8b6a83" opacity="0.45"/><rect x="0" y="4" width="46" height="11" rx="3" fill="url(#japan-far)"/><rect x="0" y="4" width="46" height="4" rx="2" fill="#f0d5e3" opacity="0.7"/><ellipse cx="16" cy="9" rx="7" ry="3" fill="#7d5b74" opacity="0.5"/><ellipse cx="31" cy="9" rx="7" ry="3" fill="#7d5b74" opacity="0.5"/><rect x="12" y="26" width="14" height="7" fill="#a8708a" opacity="0.55"/></g>
<path d="M32 320 L96 320 L102 332 L26 332 Z" fill="url(#japan-farb)"/>
<path d="M32 320 L96 320 L98 324 L30 324 Z" fill="#f0d5e3" opacity="0.6"/>
<rect x="118" y="314" width="62" height="16" fill="url(#japan-metald)"/>
<rect x="118" y="314" width="62" height="5" fill="#dfe9e8" opacity="0.7"/>
<ellipse cx="148" cy="329" rx="34.32" ry="10.4" fill="url(#japan-shade)" opacity="0.36"/>
<ellipse cx="148" cy="329" rx="18.72" ry="4.94" fill="url(#japan-shade)" opacity="0.68"/>
<g data-obj="roof-vent" transform="translate(124 284) scale(0.95)"><path d="M4 18 L46 18 L40 56 L10 56 Z" fill="url(#japan-metal)"/><path d="M34 18 L46 18 L40 56 L31 56 Z" fill="#6f7d7a" opacity="0.45"/><ellipse cx="25" cy="16" rx="25" ry="8" fill="url(#japan-metald)"/><ellipse cx="25" cy="14" rx="18" ry="5" fill="#eef5f4"/><ellipse cx="25" cy="14" rx="10" ry="3" fill="#59665f" opacity="0.6"/><path d="M9 32 L41 32" stroke="#8b9998" stroke-width="4" fill="none" stroke-linecap="round"/><path d="M10 42 L40 42" stroke="#8b9998" stroke-width="4" fill="none" stroke-linecap="round"/></g>
<rect x="184" y="320" width="70" height="10" fill="url(#japan-metald)"/>
<rect x="184" y="320" width="70" height="3" fill="#dfe9e8" opacity="0.7"/>
<rect x="190" y="330" width="7" height="8" fill="#556260"/>
<rect x="241" y="330" width="7" height="8" fill="#556260"/>
<ellipse cx="219" cy="328" rx="38.28" ry="11.6" fill="url(#japan-shade)" opacity="0.36"/>
<ellipse cx="219" cy="328" rx="20.88" ry="5.51" fill="url(#japan-shade)" opacity="0.68"/>
<g data-obj="water-tank" transform="translate(192 258)"><path d="M7 12 L47 12 L44 48 L10 48 Z" fill="url(#japan-woodd)"/><path d="M7 12 L18 12 L16 48 L10 48 Z" fill="#c9945f" opacity="0.6"/><path d="M36 12 L47 12 L44 48 L34 48 Z" fill="#3f2717" opacity="0.5"/><ellipse cx="27" cy="11" rx="21" ry="7" fill="url(#japan-woodl)"/><ellipse cx="27" cy="10" rx="14" ry="4" fill="#f3d5ac" opacity="0.7"/><path d="M8 24 L46 24" stroke="#5c3a24" stroke-width="4" fill="none"/><path d="M9 36 L45 36" stroke="#5c3a24" stroke-width="3.5" fill="none"/><path d="M13 48 L15 68" stroke="#5c3a24" stroke-width="5" fill="none" stroke-linecap="round"/><path d="M41 48 L39 68" stroke="#5c3a24" stroke-width="5" fill="none" stroke-linecap="round"/></g>
<ellipse cx="273" cy="329" rx="23.76" ry="7.2" fill="url(#japan-shade)" opacity="0.34"/>
<ellipse cx="273" cy="329" rx="12.96" ry="3.42" fill="url(#japan-shade)" opacity="0.64"/>
<rect x="256" y="298" width="36" height="32" rx="4" fill="url(#japan-metal)"/>
<rect x="256" y="298" width="36" height="9" rx="4" fill="#eef5f4" opacity="0.8"/>
<rect x="282" y="298" width="10" height="32" rx="4" fill="#6f7d7a" opacity="0.4"/>
<rect x="263" y="312" width="22" height="6" rx="2" fill="#556260"/>
<rect x="294" y="310" width="20" height="20" fill="url(#japan-charcoal)"/>
<ellipse cx="321" cy="329" rx="22.44" ry="6.8" fill="url(#japan-shade)" opacity="0.34"/>
<ellipse cx="321" cy="329" rx="12.24" ry="3.23" fill="url(#japan-shade)" opacity="0.64"/>
<g data-obj="tv-aerial" transform="translate(302 276)"><rect x="21" y="14" width="5" height="44" fill="url(#japan-charcoal)"/><path d="M4 4 L42 4" stroke="#5b4d4b" stroke-width="3.5" fill="none" stroke-linecap="round"/><path d="M8 13 L38 13" stroke="#5b4d4b" stroke-width="3.5" fill="none" stroke-linecap="round"/><path d="M13 22 L33 22" stroke="#5b4d4b" stroke-width="3.5" fill="none" stroke-linecap="round"/><path d="M23 4 L23 26" stroke="#443b39" stroke-width="3.5" fill="none"/><path d="M4 4 L42 4" stroke="#8d7c78" stroke-width="1.2" fill="none" opacity="0.8"/><circle cx="23.5" cy="34" r="5" fill="url(#japan-metald)"/></g>
<rect x="340" y="314" width="52" height="16" fill="url(#japan-farb)"/>
<rect x="340" y="314" width="52" height="5" fill="#f0d5e3" opacity="0.6"/>
<ellipse cx="371" cy="329" rx="29.04" ry="8.8" fill="url(#japan-shade)" opacity="0.36"/>
<ellipse cx="371" cy="329" rx="15.84" ry="4.18" fill="url(#japan-shade)" opacity="0.68"/>
<g data-obj="weather-vane" transform="translate(348 262)"><rect x="22" y="16" width="5" height="52" fill="url(#japan-charcoal)"/><path d="M2 6 L36 6 L28 16 L36 26 L2 26 L10 16 Z" fill="url(#japan-woodd)"/><path d="M2 6 L36 6 L32 11 L4 11 Z" fill="#c08b5d" opacity="0.7"/><path d="M24 6 L36 6 L28 16 L36 26 L24 26 Z" fill="#3f2717" opacity="0.4"/><circle cx="24.5" cy="36" r="6" fill="url(#japan-goldS)"/><path d="M11 46 L38 46" stroke="#5b4d4b" stroke-width="3.5" fill="none" stroke-linecap="round"/><path d="M24.5 40 L24.5 52" stroke="#5b4d4b" stroke-width="3.5" fill="none"/></g>
<ellipse cx="414" cy="329" rx="19.8" ry="6" fill="url(#japan-shade)" opacity="0.38"/>
<ellipse cx="414" cy="329" rx="10.8" ry="2.85" fill="url(#japan-shade)" opacity="0.72"/>
<rect x="406" y="322" width="18" height="10" fill="url(#japan-metald)"/>
<rect x="409" y="168" width="8" height="156" fill="url(#japan-woodd)"/>
<rect x="409" y="168" width="3" height="156" fill="#c08b5d" opacity="0.7"/>
<circle cx="413" cy="164" r="7" fill="url(#japan-goldS)"/>
<circle cx="411" cy="196" r="5" fill="none" stroke="#8b9998" stroke-width="2"/>
<circle cx="411" cy="242" r="4.5" fill="none" stroke="#8b9998" stroke-width="2"/>
<g data-obj="carp-red" transform="translate(338 182) scale(0.95)"><path d="M76 15 C64 2 30 2 12 9 L2 0 L2 30 L12 21 C30 28 64 28 76 15 Z" fill="url(#japan-red)"/><path d="M76 15 C64 5 46 3 30 6 L31 24 C46 27 64 24 76 15 Z" fill="#ff9c81" opacity="0.55"/><path d="M2 0 L2 30 L12 21 C10 17 10 13 12 9 Z" fill="#7d2210" opacity="0.4"/><circle cx="67" cy="12" r="4.5" fill="#fffaf0"/><circle cx="67" cy="12" r="2.2" fill="#3a2c26"/><path d="M52 7 q-5 8 0 16" stroke="#ffeecb" stroke-width="2.5" fill="none"/><path d="M41 7 q-5 8 0 16" stroke="#ffeecb" stroke-width="2.5" fill="none"/><path d="M30 8 q-5 7 0 14" stroke="#ffeecb" stroke-width="2.5" fill="none"/></g>
<g transform="translate(352 232) scale(0.72)"><path d="M76 15 C64 2 30 2 12 9 L2 0 L2 30 L12 21 C30 28 64 28 76 15 Z" fill="url(#japan-teal)"/><path d="M76 15 C64 5 46 3 30 6 L31 24 C46 27 64 24 76 15 Z" fill="#9dcad6" opacity="0.5"/><circle cx="67" cy="12" r="4.5" fill="#fffaf0"/><circle cx="67" cy="12" r="2.2" fill="#3a2c26"/><circle cx="52" cy="10" r="3.5" fill="#d3ecf3"/><circle cx="41" cy="17" r="3.5" fill="#d3ecf3"/><circle cx="30" cy="10" r="3" fill="#d3ecf3"/></g>
<rect x="0" y="330" width="430" height="16" fill="url(#japan-woodd)"/>
<rect x="0" y="330" width="430" height="5" fill="#c08b5d" opacity="0.65"/>
<rect x="0" y="342" width="430" height="4" fill="#4d301f" opacity="0.5"/>
<path d="M240 158 C300 200 360 250 410 292" stroke="#7d6a62" stroke-width="1.4" fill="none"/>
<g data-obj="kite" transform="translate(222 88) scale(0.88)"><path d="M23 0 L44 20 L23 42 L2 20 Z" fill="url(#japan-red)"/><path d="M23 0 L44 20 L23 42 Z" fill="#8a2717" opacity="0.35"/><path d="M23 0 L44 20 L23 26 L2 20 Z" fill="url(#japan-gold)" opacity="0.9"/><path d="M23 0 L34 10 L23 14 L12 10 Z" fill="#fff2c9" opacity="0.55"/><path d="M2 20 L44 20" stroke="#8a2717" stroke-width="1.5" fill="none" opacity="0.6"/><path d="M23 42 q10 10 -2 18 q14 6 4 20" stroke="#a02c1c" stroke-width="2.5" fill="none" stroke-linecap="round"/></g>
<path d="M338 128 C368 172 396 222 411 276" stroke="#7d6a62" stroke-width="1.4" fill="none"/>
<g data-obj="star-kite" transform="translate(312 78)"><path d="M26 0 L34 19 L52 19 L37 30 L43 50 L26 38 L9 50 L15 30 L0 19 L18 19 Z" fill="url(#japan-goldS)"/><path d="M26 0 L34 19 L52 19 L37 30 L26 24 Z" fill="#fff2c4" opacity="0.55"/><path d="M26 38 L43 50 L37 30 Z" fill="#9c6716" opacity="0.4"/><circle cx="26" cy="25" r="5.5" fill="url(#japan-redS)"/></g>
<g data-obj="paper-plane" transform="translate(78 196)"><path d="M0 8 L58 0 L18 24 Z" fill="url(#japan-paper)"/><path d="M18 24 L58 0 L24 40 Z" fill="#e3d3b4"/><path d="M0 8 L18 24 L21 15 Z" fill="#c9b291"/><path d="M0 8 L58 0 L52 3 L6 9 Z" fill="#fffdf6" opacity="0.75"/></g>
<path d="M800 292 Q400 348 0 300" stroke="#463a3c" stroke-width="2.6" fill="none" opacity="0.75"/>
<path d="M800 318 Q400 388 0 332" stroke="#463a3c" stroke-width="2.3" fill="none" opacity="0.6"/>
<path d="M520 318 l-1 -5 M527 317.6 l1 -5" stroke="#3a3033" stroke-width="1.6" fill="none"/>
<path d="M511 306 C514 296 529 296 532 306 C532 314 511 314 511 306 Z" fill="#4b3f42"/>
<path d="M532 306 L544 301 L533 311 Z" fill="#3a3033"/>
<circle cx="515" cy="303" r="1.8" fill="#fdf5e6"/>
<path d="M548 317 l-1 -5 M555 316.6 l1 -5" stroke="#3a3033" stroke-width="1.6" fill="none"/>
<path d="M539 305 C542 295 557 295 560 305 C560 313 539 313 539 305 Z" fill="#4b3f42"/>
<path d="M560 305 L572 300 L561 310 Z" fill="#3a3033"/>
<circle cx="543" cy="302" r="1.8" fill="#fdf5e6"/>
<path d="M742 792 C734 700 754 620 744 548 C736 480 756 418 772 356 L800 348 L800 792 Z" fill="url(#japan-bark)"/>
<path d="M772 356 C756 418 736 480 744 548 C752 618 738 702 746 792 L762 792 C752 702 764 620 758 550 C752 480 770 420 786 358 Z" fill="#a3714b" opacity="0.7"/>
<path d="M776 372 C764 424 748 480 752 540" stroke="#432617" stroke-width="6" fill="none" opacity="0.5"/>
<path d="M756 396 C700 368 638 348 556 336" stroke="url(#japan-bark)" stroke-width="15" fill="none" stroke-linecap="round"/>
<path d="M752 356 C688 314 618 284 538 266" stroke="url(#japan-bark)" stroke-width="12" fill="none" stroke-linecap="round"/>
<path d="M760 446 C716 424 668 418 622 422" stroke="url(#japan-bark)" stroke-width="10" fill="none" stroke-linecap="round"/>
<path d="M754 318 C700 260 640 224 572 204" stroke="#77492f" stroke-width="8" fill="none" stroke-linecap="round"/>
<path d="M640 340 C614 314 596 292 590 266" stroke="#77492f" stroke-width="5.5" fill="none" stroke-linecap="round"/>
<path d="M690 366 C672 344 660 324 658 300" stroke="#77492f" stroke-width="5" fill="none" stroke-linecap="round"/>
<ellipse cx="712" cy="200" rx="118" ry="80" fill="url(#japan-bloomA)"/>
<ellipse cx="644" cy="336" rx="78" ry="48" fill="url(#japan-bloomA)"/>
<ellipse cx="770" cy="306" rx="104" ry="66" fill="url(#japan-bloomA)"/>
<ellipse cx="774" cy="384" rx="68" ry="36" fill="url(#japan-bloomA)"/>
<ellipse cx="564" cy="292" rx="62" ry="44" fill="url(#japan-bloomA)"/>
<ellipse cx="688" cy="400" rx="50" ry="28" fill="url(#japan-bloomA)"/>
<ellipse cx="790" cy="142" rx="76" ry="54" fill="url(#japan-bloomA)"/>
<ellipse cx="770" cy="116" rx="90" ry="62" fill="url(#japan-bloomD)"/>
<ellipse cx="700" cy="182" rx="118" ry="82" fill="url(#japan-bloomD)"/>
<ellipse cx="620" cy="144" rx="74" ry="50" fill="url(#japan-bloomD)"/>
<ellipse cx="600" cy="222" rx="94" ry="66" fill="url(#japan-bloomD)"/>
<ellipse cx="540" cy="184" rx="54" ry="38" fill="url(#japan-bloomD)"/>
<ellipse cx="488" cy="162" rx="46" ry="32" fill="url(#japan-bloomD)"/>
<ellipse cx="522" cy="280" rx="70" ry="50" fill="url(#japan-bloomD)"/>
<ellipse cx="492" cy="244" rx="44" ry="32" fill="url(#japan-bloomD)"/>
<ellipse cx="472" cy="320" rx="50" ry="36" fill="url(#japan-bloomD)"/>
<ellipse cx="740" cy="292" rx="108" ry="76" fill="url(#japan-bloomD)"/>
<ellipse cx="642" cy="340" rx="82" ry="56" fill="url(#japan-bloomD)"/>
<ellipse cx="562" cy="358" rx="54" ry="38" fill="url(#japan-bloomD)"/>
<ellipse cx="764" cy="396" rx="76" ry="50" fill="url(#japan-bloomD)"/>
<ellipse cx="686" cy="404" rx="56" ry="36" fill="url(#japan-bloomD)"/>
<ellipse cx="742" cy="86" rx="36" ry="26" fill="url(#japan-bloomB)"/>
<ellipse cx="668" cy="108" rx="32" ry="24" fill="url(#japan-bloomB)"/>
<ellipse cx="598" cy="136" rx="26" ry="20" fill="url(#japan-bloomB)"/>
<ellipse cx="514" cy="214" rx="26" ry="20" fill="url(#japan-bloomB)"/>
<ellipse cx="454" cy="292" rx="20" ry="16" fill="url(#japan-bloomB)"/>
<ellipse cx="638" cy="312" rx="30" ry="22" fill="url(#japan-bloomB)"/>
<ellipse cx="690" cy="144" rx="52" ry="38" fill="url(#japan-bloomB)"/>
<ellipse cx="760" cy="134" rx="44" ry="32" fill="url(#japan-bloomB)"/>
<ellipse cx="622" cy="172" rx="40" ry="30" fill="url(#japan-bloomB)"/>
<ellipse cx="562" cy="206" rx="34" ry="26" fill="url(#japan-bloomB)"/>
<ellipse cx="510" cy="256" rx="28" ry="22" fill="url(#japan-bloomB)"/>
<ellipse cx="470" cy="300" rx="22" ry="18" fill="url(#japan-bloomB)"/>
<ellipse cx="724" cy="224" rx="46" ry="34" fill="url(#japan-bloomB)"/>
<ellipse cx="652" cy="254" rx="38" ry="28" fill="url(#japan-bloomB)"/>
<ellipse cx="588" cy="292" rx="30" ry="23" fill="url(#japan-bloomB)"/>
<ellipse cx="536" cy="328" rx="24" ry="19" fill="url(#japan-bloomB)"/>
<ellipse cx="754" cy="328" rx="42" ry="31" fill="url(#japan-bloomB)"/>
<ellipse cx="678" cy="356" rx="34" ry="25" fill="url(#japan-bloomB)"/>
<ellipse cx="612" cy="384" rx="26" ry="20" fill="url(#japan-bloomB)"/>
<ellipse cx="768" cy="388" rx="34" ry="26" fill="url(#japan-bloomB)"/>
<ellipse cx="702" cy="414" rx="26" ry="20" fill="url(#japan-bloomB)"/>
<ellipse cx="730" cy="82" rx="14" ry="11" fill="url(#japan-bloomC)" opacity="0.92"/>
<ellipse cx="656" cy="102" rx="13" ry="10" fill="url(#japan-bloomC)" opacity="0.92"/>
<ellipse cx="676" cy="136" rx="22" ry="16" fill="url(#japan-bloomC)" opacity="0.92"/>
<ellipse cx="744" cy="124" rx="18" ry="14" fill="url(#japan-bloomC)" opacity="0.92"/>
<ellipse cx="610" cy="166" rx="17" ry="13" fill="url(#japan-bloomC)" opacity="0.92"/>
<ellipse cx="554" cy="198" rx="14" ry="11" fill="url(#japan-bloomC)" opacity="0.92"/>
<ellipse cx="502" cy="248" rx="12" ry="9" fill="url(#japan-bloomC)" opacity="0.92"/>
<ellipse cx="714" cy="214" rx="20" ry="15" fill="url(#japan-bloomC)" opacity="0.92"/>
<ellipse cx="642" cy="246" rx="16" ry="12" fill="url(#japan-bloomC)" opacity="0.92"/>
<ellipse cx="580" cy="284" rx="13" ry="10" fill="url(#japan-bloomC)" opacity="0.92"/>
<ellipse cx="742" cy="318" rx="18" ry="13" fill="url(#japan-bloomC)" opacity="0.92"/>
<ellipse cx="666" cy="348" rx="14" ry="11" fill="url(#japan-bloomC)" opacity="0.92"/>
<circle cx="722" cy="164" r="5" fill="#fff2f7" opacity="0.9"/>
<circle cx="700" cy="192" r="5" fill="#fff2f7" opacity="0.9"/>
<circle cx="762" cy="214" r="5" fill="#fff2f7" opacity="0.9"/>
<circle cx="646" cy="208" r="5" fill="#fff2f7" opacity="0.9"/>
<circle cx="612" cy="250" r="5" fill="#fff2f7" opacity="0.9"/>
<circle cx="560" cy="242" r="5" fill="#fff2f7" opacity="0.9"/>
<circle cx="508" cy="288" r="5" fill="#fff2f7" opacity="0.9"/>
<circle cx="676" cy="288" r="5" fill="#fff2f7" opacity="0.9"/>
<circle cx="736" cy="294" r="5" fill="#fff2f7" opacity="0.9"/>
<circle cx="598" cy="324" r="5" fill="#fff2f7" opacity="0.9"/>
<circle cx="782" cy="232" r="5" fill="#fff2f7" opacity="0.9"/>
<circle cx="478" cy="310" r="5" fill="#fff2f7" opacity="0.9"/>
<circle cx="706" cy="392" r="5" fill="#fff2f7" opacity="0.9"/>
<circle cx="660" cy="422" r="5" fill="#fff2f7" opacity="0.9"/>
<circle cx="540" cy="188" r="5" fill="#fff2f7" opacity="0.9"/>
<circle cx="620" cy="148" r="5" fill="#fff2f7" opacity="0.9"/>
<circle cx="772" cy="90" r="5" fill="#fff2f7" opacity="0.9"/>
<circle cx="652" cy="378" r="5" fill="#fff2f7" opacity="0.9"/>
<path d="M556 164 C516 156 490 154 468 158" stroke="#6b4128" stroke-width="3.4" fill="none" stroke-linecap="round"/>
<path d="M556 164 C516 156 490 154 468 158" stroke="#b98a63" stroke-width="1" fill="none" stroke-linecap="round" opacity="0.6" transform="translate(0 -1)"/>
<path d="M712 144 C670 136 628 136 592 142" stroke="#6b4128" stroke-width="3.4" fill="none" stroke-linecap="round"/>
<path d="M712 144 C670 136 628 136 592 142" stroke="#b98a63" stroke-width="1" fill="none" stroke-linecap="round" opacity="0.6" transform="translate(0 -1)"/>
<path d="M800 208 C756 200 712 200 678 206" stroke="#6b4128" stroke-width="3.4" fill="none" stroke-linecap="round"/>
<path d="M800 208 C756 200 712 200 678 206" stroke="#b98a63" stroke-width="1" fill="none" stroke-linecap="round" opacity="0.6" transform="translate(0 -1)"/>
<path d="M652 202 C610 196 570 196 536 202" stroke="#6b4128" stroke-width="3.2" fill="none" stroke-linecap="round"/>
<path d="M652 202 C610 196 570 196 536 202" stroke="#b98a63" stroke-width="1" fill="none" stroke-linecap="round" opacity="0.6" transform="translate(0 -1)"/>
<path d="M600 262 C562 256 524 256 486 262" stroke="#6b4128" stroke-width="3.2" fill="none" stroke-linecap="round"/>
<path d="M600 262 C562 256 524 256 486 262" stroke="#b98a63" stroke-width="1" fill="none" stroke-linecap="round" opacity="0.6" transform="translate(0 -1)"/>
<path d="M726 296 C684 290 640 290 576 296" stroke="#6b4128" stroke-width="3" fill="none" stroke-linecap="round"/>
<path d="M726 296 C684 290 640 290 576 296" stroke="#b98a63" stroke-width="1" fill="none" stroke-linecap="round" opacity="0.6" transform="translate(0 -1)"/>
<path d="M796 350 C756 344 708 346 646 356" stroke="#6b4128" stroke-width="3.4" fill="none" stroke-linecap="round"/>
<path d="M796 350 C756 344 708 346 646 356" stroke="#b98a63" stroke-width="1" fill="none" stroke-linecap="round" opacity="0.6" transform="translate(0 -1)"/>
<path d="M800 380 C770 376 742 378 716 382" stroke="#6b4128" stroke-width="3" fill="none" stroke-linecap="round"/>
<path d="M800 380 C770 376 742 378 716 382" stroke="#b98a63" stroke-width="1" fill="none" stroke-linecap="round" opacity="0.6" transform="translate(0 -1)"/>
<path d="M491 160 L491 172" stroke="#7a6350" stroke-width="1.8" fill="none"/>
<g data-obj="streamer" transform="translate(468 170)"><path d="M4 0 L44 0 L44 9 L4 9 Z" fill="url(#japan-woodd)"/><path d="M4 0 L44 0 L44 3.5 L4 3.5 Z" fill="#c08b5d" opacity="0.7"/><path d="M9 9 C13 22 5 30 11 42 C14 48 11 52 9 54" stroke="#d4472f" stroke-width="5.5" fill="none" stroke-linecap="round"/><path d="M9 9 C13 20 6 28 11 38" stroke="#f7805f" stroke-width="2" fill="none" opacity="0.8"/><path d="M24 9 C28 22 20 32 26 46 C28 51 26 54 24 56" stroke="#f0b93f" stroke-width="5.5" fill="none" stroke-linecap="round"/><path d="M24 9 C28 20 21 30 25 40" stroke="#ffe89b" stroke-width="2" fill="none" opacity="0.8"/><path d="M40 9 C44 22 36 30 42 44 C44 48 42 52 40 54" stroke="#467484" stroke-width="5.5" fill="none" stroke-linecap="round"/><path d="M40 9 C44 20 37 28 41 38" stroke="#8cbcc9" stroke-width="2" fill="none" opacity="0.8"/></g>
<path d="M648 142 L648 150" stroke="#7a6350" stroke-width="1.8" fill="none"/>
<g data-obj="tanzaku" transform="translate(626 148)"><path d="M22 0 L22 7" stroke="#7a6350" stroke-width="2" fill="none"/><path d="M10 7 L34 7 L34 48 L22 56 L10 48 Z" fill="url(#japan-paper)"/><path d="M27 7 L34 7 L34 48 L26 53 Z" fill="#cdb894" opacity="0.5"/><path d="M10 7 L34 7 L34 16 L10 16 Z" fill="url(#japan-red)"/><path d="M10 7 L34 7 L34 10 L10 10 Z" fill="#ff9c81" opacity="0.6"/><path d="M15 24 L29 24" stroke="#7b4fbf" stroke-width="2.6" fill="none" stroke-linecap="round"/><path d="M15 32 L26 32" stroke="#31555f" stroke-width="2.6" fill="none" stroke-linecap="round"/><path d="M15 40 L29 40" stroke="#31555f" stroke-width="2.2" fill="none" stroke-linecap="round"/></g>
<path d="M581 202 L581 212" stroke="#7a6350" stroke-width="1.8" fill="none"/>
<g data-obj="tree-chime" transform="translate(560 210)"><path d="M21 0 L21 6" stroke="#7a6350" stroke-width="2" fill="none"/><path d="M6 14 C6 5 36 5 36 14 L36 23 C36 29 6 29 6 23 Z" fill="url(#japan-tealS)"/><path d="M10 12 C12 20 12 24 13 27" stroke="#e2f2f7" stroke-width="3" fill="none" opacity="0.7" stroke-linecap="round"/><ellipse cx="21" cy="13" rx="15" ry="6" fill="#d3ecf3"/><ellipse cx="21" cy="13" rx="8" ry="3" fill="#7fa8b6" opacity="0.6"/><path d="M21 25 L21 42" stroke="#7a6350" stroke-width="2" fill="none"/><path d="M10 42 L32 42 L28 52 L14 52 Z" fill="url(#japan-paper)"/><path d="M25 42 L32 42 L28 52 L23 52 Z" fill="#cdb894" opacity="0.6"/><path d="M21 52 L21 60" stroke="#7a6350" stroke-width="2" fill="none"/></g>
<path d="M721 146 L721 178" stroke="#7a6350" stroke-width="1.8" fill="none"/>
<g data-obj="twig-lamp" transform="translate(698 176)"><path d="M23 0 L23 10" stroke="#6d4630" stroke-width="2" fill="none"/><path d="M6 10 L40 10 L35 17 L11 17 Z" fill="url(#japan-woodd)"/><path d="M6 10 L40 10 L38 13 L8 13 Z" fill="#d2a06a" opacity="0.8"/><ellipse cx="23" cy="31" rx="19" ry="19" fill="url(#japan-warmglow)"/><ellipse cx="23" cy="31" rx="14" ry="14" fill="url(#japan-goldS)"/><ellipse cx="19" cy="27" rx="5" ry="4" fill="#fffbe4" opacity="0.85"/><path d="M12 46 L34 46 L30 53 L16 53 Z" fill="url(#japan-woodd)"/><path d="M26 46 L34 46 L30 53 L25 53 Z" fill="#3f2717" opacity="0.4"/></g>
<path d="M765 206 L765 236" stroke="#7a6350" stroke-width="1.8" fill="none"/>
<g data-obj="tree-bell" transform="translate(742 234)"><circle cx="23" cy="3" r="3.4" fill="#7a6350"/><path d="M7 23 C7 11 16 5 23 5 C30 5 39 11 39 23 L42 36 L4 36 Z" fill="url(#japan-goldS)"/><path d="M26 6 C33 9 39 15 39 23 L42 36 L29 36 Z" fill="#9c6716" opacity="0.4"/><path d="M13 15 C11 20 11 27 12 33" stroke="#fff2c4" stroke-width="3.4" fill="none" opacity="0.8" stroke-linecap="round"/><rect x="2" y="36" width="42" height="7" rx="3.5" fill="url(#japan-gold)"/><rect x="2" y="36" width="42" height="3" rx="1.5" fill="#fff2c4" opacity="0.6"/><circle cx="23" cy="48" r="5.5" fill="url(#japan-woodd)"/></g>
<path d="M604 292 C610 286 620 286 626 292" stroke="#c26a93" stroke-width="3" fill="none"/>
<g data-obj="tree-ribbon" transform="translate(588 290)"><path d="M25 9 L46 0 L46 22 L25 15 Z" fill="url(#japan-rose)"/><path d="M25 9 L4 0 L4 22 L25 15 Z" fill="url(#japan-rose)"/><path d="M25 9 L46 0 L44 5 L25 12 Z" fill="#ffe7f0" opacity="0.7"/><path d="M25 9 L4 0 L6 5 L25 12 Z" fill="#ffe7f0" opacity="0.55"/><path d="M25 15 L46 22 L38 22 L25 17 Z" fill="#b45f88" opacity="0.5"/><circle cx="25" cy="12" r="7" fill="url(#japan-rose)"/><circle cx="23" cy="10" r="2.6" fill="#ffeef6" opacity="0.8"/><path d="M21 19 C17 32 26 40 21 56" stroke="#f0a0c4" stroke-width="4.5" fill="none" stroke-linecap="round"/><path d="M30 19 C35 32 26 42 30 54" stroke="#dd7fa8" stroke-width="4.5" fill="none" stroke-linecap="round"/></g>
<path d="M524 264 L524 274" stroke="#7a6350" stroke-width="1.8" fill="none"/>
<g data-obj="bird-feeder" transform="translate(496 272)"><path d="M4 6 L52 6 L46 18 L10 18 Z" fill="url(#japan-woodd)"/><path d="M4 6 L52 6 L50 10 L6 10 Z" fill="#d2a06a" opacity="0.85"/><path d="M38 6 L52 6 L46 18 L38 18 Z" fill="#3f2717" opacity="0.4"/><rect x="13" y="18" width="30" height="22" fill="url(#japan-paper)"/><rect x="13" y="18" width="10" height="22" fill="#fffdf6" opacity="0.65"/><rect x="35" y="18" width="8" height="22" fill="#b9a184" opacity="0.5"/><rect x="8" y="40" width="40" height="7" rx="3" fill="url(#japan-woodl)"/><path d="M28 47 L28 56" stroke="#6d4630" stroke-width="3" fill="none"/><circle cx="28" cy="29" r="5.5" fill="url(#japan-redS)"/><path d="M28 3 L28 6" stroke="#6d4630" stroke-width="2" fill="none"/></g>
<path d="M660 372 C688 366 716 368 740 376" stroke="#6b4128" stroke-width="6" fill="none" stroke-linecap="round"/>
<ellipse cx="702" cy="374" rx="34" ry="6" fill="url(#japan-shade)" opacity="0.5"/>
<g data-obj="nest" transform="translate(674 332)"><path d="M3 17 C3 36 15 43 28 43 C41 43 53 36 53 17 Z" fill="url(#japan-woodd)"/><path d="M40 20 C40 34 36 41 30 43 C42 43 53 36 53 17 Z" fill="#3f2717" opacity="0.4"/><ellipse cx="28" cy="17" rx="26" ry="10" fill="url(#japan-woodl)"/><ellipse cx="28" cy="18" rx="17" ry="6" fill="#5c3a24" opacity="0.75"/><ellipse cx="22" cy="17" rx="6.5" ry="5" fill="url(#japan-creamS)"/><ellipse cx="34" cy="18" rx="6.5" ry="5" fill="url(#japan-creamS)"/><path d="M5 24 L51 28" stroke="#5c3a24" stroke-width="2" fill="none" opacity="0.7"/><path d="M7 33 L48 35" stroke="#5c3a24" stroke-width="2" fill="none" opacity="0.5"/></g>
<path d="M771 382 L771 390" stroke="#7a6350" stroke-width="1.8" fill="none"/>
<g data-obj="acorn" transform="translate(748 388)"><path d="M9 20 C9 36 16 48 24 48 C32 48 39 36 39 20 Z" fill="url(#japan-woodl)"/><path d="M27 21 C27 35 25 44 21 48 C32 48 39 36 39 20 Z" fill="#8a5a3b" opacity="0.55"/><path d="M13 22 C14 30 16 38 19 43" stroke="#f6dcb4" stroke-width="3" fill="none" opacity="0.6" stroke-linecap="round"/><path d="M4 11 C4 4 44 4 44 11 C44 18 37 22 24 22 C11 22 4 18 4 11 Z" fill="url(#japan-woodd)"/><path d="M4 11 C4 5 30 4 40 7 C30 7 12 9 6 15 Z" fill="#c08b5d" opacity="0.6"/><path d="M24 0 L24 6" stroke="#6d4630" stroke-width="3" fill="none" stroke-linecap="round"/><path d="M9 14 L39 14" stroke="#8a5a3b" stroke-width="2" fill="none" opacity="0.7"/></g>
<g data-obj="shop-window" transform="translate(26 366) scale(0.84)"><rect x="0" y="0" width="88" height="82" fill="url(#japan-woodd)"/><rect x="6" y="6" width="76" height="70" fill="url(#japan-glass)"/><path d="M6 6 L44 6 L14 76 L6 76 Z" fill="#e2f2f7" opacity="0.42"/><rect x="6" y="6" width="36" height="30" fill="#dff1f6" opacity="0.5"/><rect x="41" y="6" width="5" height="70" fill="#6d4630"/><rect x="6" y="38" width="76" height="5" fill="#6d4630"/><rect x="0" y="0" width="88" height="6" fill="#d2a06a" opacity="0.85"/><rect x="0" y="76" width="88" height="6" fill="#4d301f" opacity="0.6"/></g>
<rect x="16" y="435" width="94" height="11" fill="url(#japan-woodl)"/>
<rect x="16" y="435" width="94" height="3.52" fill="#f6dcb4" opacity="0.72"/>
<rect x="16" y="443" width="94" height="3" fill="#4d301f" opacity="0.55"/>
<ellipse cx="63" cy="447" rx="48.84" ry="14.8" fill="url(#japan-shade)" opacity="0.23"/>
<ellipse cx="63" cy="447" rx="26.64" ry="7.03" fill="url(#japan-shade)" opacity="0.44"/>
<rect x="150" y="366" width="76" height="70" fill="url(#japan-woodd)"/>
<rect x="156" y="372" width="64" height="58" fill="url(#japan-glass)"/>
<path d="M156 372 L192 372 L166 430 L156 430 Z" fill="#e2f2f7" opacity="0.4"/>
<rect x="186" y="372" width="4" height="58" fill="#6d4630"/>
<rect x="156" y="398" width="64" height="4" fill="#6d4630"/>
<rect x="142" y="436" width="92" height="11" fill="url(#japan-woodl)"/>
<rect x="142" y="436" width="92" height="3.52" fill="#f6dcb4" opacity="0.72"/>
<rect x="142" y="444" width="92" height="3" fill="#4d301f" opacity="0.55"/>
<ellipse cx="210" cy="436" rx="29.04" ry="8.8" fill="url(#japan-shade)" opacity="0.29"/>
<ellipse cx="210" cy="436" rx="15.84" ry="4.18" fill="url(#japan-shade)" opacity="0.56"/>
<g data-obj="flower-box" transform="translate(188 388)"><circle cx="11" cy="18" r="9" fill="url(#japan-greenS)"/><circle cx="23" cy="11" r="10" fill="url(#japan-greenS)"/><circle cx="33" cy="18" r="8" fill="url(#japan-greenS)"/><circle cx="16" cy="9" r="4.5" fill="url(#japan-redS)"/><circle cx="30" cy="7" r="4.5" fill="url(#japan-goldS)"/><circle cx="14" cy="14" r="2" fill="#d5f0b0" opacity="0.8"/><path d="M3 24 L39 24 L34 46 L8 46 Z" fill="url(#japan-wood)"/><path d="M3 24 L39 24 L38 29 L4 29 Z" fill="#efc994" opacity="0.85"/><path d="M30 24 L39 24 L34 46 L27 46 Z" fill="#6b4429" opacity="0.45"/><rect x="1" y="44" width="40" height="4" rx="2" fill="#5c3a24" opacity="0.55"/></g>
<ellipse cx="188" cy="448" rx="51.48" ry="15.6" fill="url(#japan-shade)" opacity="0.21"/>
<ellipse cx="188" cy="448" rx="28.08" ry="7.41" fill="url(#japan-shade)" opacity="0.4"/>
<g data-obj="orange-pane" transform="translate(272 366) scale(0.82)"><rect x="0" y="0" width="84" height="78" fill="url(#japan-woodd)"/><rect x="6" y="6" width="72" height="66" fill="url(#japan-glasswarm)"/><path d="M6 6 L40 6 L14 72 L6 72 Z" fill="#ffe3bb" opacity="0.5"/><rect x="6" y="6" width="33" height="28" fill="#ffd9a8" opacity="0.55"/><rect x="38" y="6" width="5" height="66" fill="#6d4630"/><rect x="6" y="36" width="72" height="5" fill="#6d4630"/><rect x="0" y="0" width="84" height="6" fill="#d2a06a" opacity="0.85"/><rect x="0" y="72" width="84" height="6" fill="#4d301f" opacity="0.6"/></g>
<rect x="264" y="430" width="88" height="11" fill="url(#japan-woodl)"/>
<rect x="264" y="430" width="88" height="3.52" fill="#f6dcb4" opacity="0.72"/>
<rect x="264" y="438" width="88" height="3" fill="#4d301f" opacity="0.55"/>
<ellipse cx="306" cy="442" rx="46.2" ry="14" fill="url(#japan-shade)" opacity="0.23"/>
<ellipse cx="306" cy="442" rx="25.2" ry="6.65" fill="url(#japan-shade)" opacity="0.44"/>
<rect x="356" y="340" width="6" height="26" fill="url(#japan-charcoal)"/>
<path d="M358 346 L406 346" stroke="#443b39" stroke-width="5" fill="none" stroke-linecap="round"/>
<path d="M404 346 L404 356" stroke="#443b39" stroke-width="3" fill="none"/>
<path d="M368 348 L368 362" stroke="#5b4d4b" stroke-width="1.8" fill="none"/>
<path d="M396 348 L396 362" stroke="#5b4d4b" stroke-width="1.8" fill="none"/>
<g data-obj="far-sign" transform="translate(358 362)"><rect x="2" y="4" width="42" height="50" fill="#7b5f6e" opacity="0.4"/><rect x="0" y="0" width="44" height="50" rx="4" fill="url(#japan-farb)"/><rect x="4" y="4" width="36" height="42" rx="3" fill="#ecd3de"/><rect x="4" y="4" width="36" height="10" rx="3" fill="#fdeff5" opacity="0.8"/><path d="M10 20 L34 20" stroke="#c98da3" stroke-width="4" fill="none" stroke-linecap="round"/><path d="M10 29 L27 29" stroke="#c98da3" stroke-width="4" fill="none" stroke-linecap="round"/><path d="M10 38 L34 38" stroke="#c98da3" stroke-width="4" fill="none" stroke-linecap="round"/><rect x="0" y="46" width="44" height="4" fill="#8f6c80" opacity="0.45"/></g>
<rect x="440" y="424" width="74" height="68" fill="url(#japan-woodd)"/>
<rect x="446" y="430" width="62" height="56" fill="url(#japan-glass)"/>
<path d="M446 430 L482 430 L456 486 L446 486 Z" fill="#e2f2f7" opacity="0.35"/>
<rect x="476" y="430" width="4" height="56" fill="#6d4630"/>
<rect x="446" y="456" width="62" height="4" fill="#6d4630"/>
<rect x="434" y="492" width="86" height="10" fill="url(#japan-woodl)"/>
<rect x="434" y="492" width="86" height="3.2" fill="#f6dcb4" opacity="0.72"/>
<rect x="434" y="499" width="86" height="3" fill="#4d301f" opacity="0.55"/>
<ellipse cx="477" cy="503" rx="46.2" ry="14" fill="url(#japan-shade)" opacity="0.21"/>
<ellipse cx="477" cy="503" rx="25.2" ry="6.65" fill="url(#japan-shade)" opacity="0.4"/>
<rect x="594" y="501" width="82" height="10" fill="url(#japan-metald)"/>
<rect x="600" y="511" width="8" height="12" fill="#556260"/>
<rect x="662" y="511" width="8" height="12" fill="#556260"/>
<ellipse cx="634" cy="502" rx="40.92" ry="12.4" fill="url(#japan-shade)" opacity="0.32"/>
<ellipse cx="634" cy="502" rx="22.32" ry="5.89" fill="url(#japan-shade)" opacity="0.6"/>
<g data-obj="ac-unit" transform="translate(598 446) scale(0.92)"><rect x="0" y="0" width="78" height="60" rx="6" fill="url(#japan-metal)"/><rect x="0" y="0" width="78" height="13" rx="6" fill="#f0f7f6" opacity="0.85"/><rect x="62" y="0" width="16" height="60" rx="6" fill="#6f7d7a" opacity="0.45"/><path d="M8 22 L62 22" stroke="#8b9998" stroke-width="4" fill="none" stroke-linecap="round"/><path d="M8 32 L62 32" stroke="#8b9998" stroke-width="4" fill="none" stroke-linecap="round"/><path d="M8 42 L62 42" stroke="#8b9998" stroke-width="4" fill="none" stroke-linecap="round"/><rect x="4" y="53" width="70" height="7" rx="3" fill="url(#japan-metald)"/><circle cx="68" cy="20" r="3.5" fill="#c8d5d3"/></g>
<rect x="468" y="494" width="8" height="8" fill="url(#japan-charcoal)"/>
<path d="M472 498 L472 504" stroke="#5b4d4b" stroke-width="1.8" fill="none"/>
<g data-obj="wall-clock" transform="translate(448 502)"><circle cx="24" cy="24" r="24" fill="url(#japan-woodd)"/><circle cx="24" cy="24" r="19" fill="url(#japan-ceramic)"/><path d="M8 12 A19 19 0 0 1 34 8 A24 24 0 0 0 8 32 Z" fill="#fffdf6" opacity="0.55"/><path d="M24 24 L24 11" stroke="#3f3230" stroke-width="3" fill="none" stroke-linecap="round"/><path d="M24 24 L34 29" stroke="#c2432f" stroke-width="2.5" fill="none" stroke-linecap="round"/><circle cx="24" cy="24" r="3" fill="#3f3230"/><circle cx="24" cy="9" r="1.8" fill="#8a5a3b"/><circle cx="39" cy="24" r="1.8" fill="#8a5a3b"/><circle cx="24" cy="39" r="1.8" fill="#8a5a3b"/></g>
<ellipse cx="472" cy="552" rx="24" ry="5" fill="url(#japan-shade)" opacity="0.45"/>
<g data-obj="wall-lamp" transform="translate(672 552)"><rect x="0" y="0" width="9" height="16" rx="3" fill="url(#japan-charcoal)"/><path d="M7 7 C24 7 33 13 35 22" stroke="#4a3f3d" stroke-width="4" fill="none" stroke-linecap="round"/><path d="M20 22 L50 22 L43 40 L27 40 Z" fill="url(#japan-teal)"/><path d="M20 22 L50 22 L48 27 L22 27 Z" fill="#9dcad6" opacity="0.6"/><path d="M40 22 L50 22 L43 40 L38 40 Z" fill="#1b3b45" opacity="0.55"/><ellipse cx="35" cy="42" rx="10" ry="4" fill="#ffd79b"/><ellipse cx="35" cy="46" rx="17" ry="8" fill="url(#japan-warmglow)"/></g>
<g data-obj="gas-meter" transform="translate(676 686)"><rect x="15" y="0" width="8" height="12" fill="url(#japan-metald)"/><rect x="2" y="10" width="50" height="42" rx="6" fill="url(#japan-metal)"/><rect x="2" y="10" width="50" height="11" rx="5" fill="#eef5f4" opacity="0.85"/><rect x="40" y="10" width="12" height="42" rx="5" fill="#6f7d7a" opacity="0.4"/><circle cx="26" cy="32" r="13" fill="url(#japan-ceramic)"/><circle cx="26" cy="32" r="8" fill="#dfe7e6"/><path d="M26 32 L33 26" stroke="#c2432f" stroke-width="2.5" fill="none" stroke-linecap="round"/><rect x="11" y="52" width="7" height="10" fill="url(#japan-metald)"/><rect x="36" y="52" width="7" height="10" fill="url(#japan-metald)"/></g>
<path d="M687 748 L687 792" stroke="#8b9998" stroke-width="7" fill="none"/>
<path d="M719 748 L719 792" stroke="#8b9998" stroke-width="7" fill="none"/>
<path d="M685 748 L685 792" stroke="#dfe9e8" stroke-width="2" fill="none" opacity="0.5"/>
<ellipse cx="703" cy="792" rx="35.64" ry="10.8" fill="url(#japan-shade)" opacity="0.29"/>
<ellipse cx="703" cy="792" rx="19.44" ry="5.13" fill="url(#japan-shade)" opacity="0.56"/>
<path d="M4 470 L440 462 L448 526 L0 534 Z" fill="url(#japan-teal)"/>
<path d="M4 470 L440 462 L442 486 L4 494 Z" fill="#9dcad6" opacity="0.45"/>
<path d="M0 520 L448 512 L448 526 L0 534 Z" fill="#173741" opacity="0.42"/>
<path d="M26 470 L30 470 L30 532 L26 532 Z" fill="#1f4650" opacity="0.32"/>
<path d="M88 470 L92 470 L92 532 L88 532 Z" fill="#1f4650" opacity="0.32"/>
<path d="M150 470 L154 470 L154 532 L150 532 Z" fill="#1f4650" opacity="0.32"/>
<path d="M212 470 L216 470 L216 532 L212 532 Z" fill="#1f4650" opacity="0.32"/>
<path d="M274 470 L278 470 L278 532 L274 532 Z" fill="#1f4650" opacity="0.32"/>
<path d="M336 470 L340 470 L340 532 L336 532 Z" fill="#1f4650" opacity="0.32"/>
<path d="M398 470 L402 470 L402 532 L398 532 Z" fill="#1f4650" opacity="0.32"/>
<rect x="0" y="456" width="450" height="17" rx="7" fill="url(#japan-teald)"/>
<rect x="0" y="456" width="450" height="6" rx="3" fill="#6d9dad" opacity="0.5"/>
<rect x="8" y="534" width="432" height="20" fill="#a3855f" opacity="0.42"/>
<rect x="0" y="548" width="430" height="244" fill="url(#japan-creamdim)"/>
<rect x="0" y="548" width="430" height="8" fill="#fff2d8" opacity="0.55"/>
<rect x="14" y="548" width="22" height="244" fill="url(#japan-woodd)"/>
<rect x="14" y="548" width="7.7" height="244" fill="#c08b5d" opacity="0.7"/>
<rect x="122" y="548" width="18" height="244" fill="url(#japan-woodd)"/>
<rect x="122" y="548" width="6.3" height="244" fill="#c08b5d" opacity="0.7"/>
<rect x="392" y="548" width="26" height="244" fill="url(#japan-woodd)"/>
<rect x="392" y="548" width="9.1" height="244" fill="#c08b5d" opacity="0.7"/>
<rect x="418" y="548" width="12" height="244" fill="#3f2717" opacity="0.7"/>
<rect x="44" y="566" width="76" height="156" fill="url(#japan-woodd)"/>
<rect x="50" y="572" width="64" height="144" fill="url(#japan-paper)"/>
<rect x="50" y="572" width="64" height="17" fill="#e5d5b8" opacity="0.85"/>
<rect x="50" y="572" width="10" height="144" fill="#fffdf6" opacity="0.5"/>
<path d="M72 596 L94 596" stroke="#4d3f3c" stroke-width="5" fill="none" stroke-linecap="round"/>
<path d="M64 610 L102 610" stroke="#4d3f3c" stroke-width="5" fill="none" stroke-linecap="round"/>
<path d="M66 656 L100 656" stroke="#c2432f" stroke-width="5" fill="none" stroke-linecap="round"/>
<path d="M72 668 L94 668" stroke="#c2432f" stroke-width="4" fill="none" stroke-linecap="round"/>
<path d="M64 694 L102 694" stroke="#4d3f3c" stroke-width="5" fill="none" stroke-linecap="round"/>
<path d="M82 622 L82 642" stroke="#4d3f3c" stroke-width="5" fill="none" stroke-linecap="round"/>
<rect x="44" y="714" width="76" height="8" fill="#4d301f" opacity="0.4"/>
<path d="M18 528 Q380 566 736 516" stroke="#4b3d38" stroke-width="2.4" fill="none"/>
<path d="M126 533 L126 539" stroke="#4b3d38" stroke-width="2" fill="none"/>
<circle cx="126" cy="546" r="11" fill="url(#japan-warmglow)"/>
<circle cx="126" cy="546" r="7" fill="url(#japan-goldS)"/>
<circle cx="124" cy="544" r="2.6" fill="#fff8e0" opacity="0.85"/>
<path d="M235 539 L235 545" stroke="#4b3d38" stroke-width="2" fill="none"/>
<circle cx="235" cy="552" r="11" fill="url(#japan-warmglow)"/>
<circle cx="235" cy="552" r="7" fill="url(#japan-redS)"/>
<circle cx="233" cy="550" r="2.6" fill="#fff8e0" opacity="0.85"/>
<path d="M343 540 L343 546" stroke="#4b3d38" stroke-width="2" fill="none"/>
<circle cx="343" cy="553" r="11" fill="url(#japan-warmglow)"/>
<circle cx="343" cy="553" r="7" fill="url(#japan-goldS)"/>
<circle cx="341" cy="551" r="2.6" fill="#fff8e0" opacity="0.85"/>
<path d="M450 538 L450 544" stroke="#4b3d38" stroke-width="2" fill="none"/>
<circle cx="450" cy="551" r="11" fill="url(#japan-warmglow)"/>
<circle cx="450" cy="551" r="7" fill="url(#japan-redS)"/>
<circle cx="448" cy="549" r="2.6" fill="#fff8e0" opacity="0.85"/>
<path d="M558 532 L558 538" stroke="#4b3d38" stroke-width="2" fill="none"/>
<circle cx="558" cy="545" r="11" fill="url(#japan-warmglow)"/>
<circle cx="558" cy="545" r="7" fill="url(#japan-goldS)"/>
<circle cx="556" cy="543" r="2.6" fill="#fff8e0" opacity="0.85"/>
<path d="M665 521 L665 527" stroke="#4b3d38" stroke-width="2" fill="none"/>
<circle cx="665" cy="534" r="11" fill="url(#japan-warmglow)"/>
<circle cx="665" cy="534" r="7" fill="url(#japan-redS)"/>
<circle cx="663" cy="532" r="2.6" fill="#fff8e0" opacity="0.85"/>
<path d="M30 528 C30 536 24 538 24 540" stroke="#556260" stroke-width="3" fill="none" stroke-linecap="round"/>
<g data-obj="hanging-plant" transform="translate(6 538)"><path d="M12 0 C12 12 29 17 29 23" stroke="#7a6350" stroke-width="2" fill="none"/><path d="M46 0 C46 12 29 17 29 23" stroke="#7a6350" stroke-width="2" fill="none"/><ellipse cx="29" cy="21" rx="21" ry="8" fill="url(#japan-greenS)"/><path d="M8 23 L50 23 L44 46 L14 46 Z" fill="url(#japan-red)"/><path d="M8 23 L50 23 L49 29 L9 29 Z" fill="#ff9c81" opacity="0.6"/><path d="M40 23 L50 23 L44 46 L37 46 Z" fill="#7d2210" opacity="0.5"/><path d="M14 46 C6 52 3 58 1 64" stroke="#4e7a4a" stroke-width="5" fill="none" stroke-linecap="round"/><path d="M29 46 C29 54 31 60 33 66" stroke="#6b9c56" stroke-width="5" fill="none" stroke-linecap="round"/><path d="M44 46 C52 52 55 58 57 64" stroke="#4e7a4a" stroke-width="5" fill="none" stroke-linecap="round"/></g>
<rect x="148" y="640" width="244" height="152" fill="url(#japan-ink)"/>
<rect x="148" y="640" width="244" height="6" fill="#7c6b64" opacity="0.55"/>
<ellipse cx="270" cy="716" rx="112" ry="58" fill="url(#japan-warmglow)" opacity="0.85"/>
<ellipse cx="270" cy="728" rx="80" ry="38" fill="#ffb765" opacity="0.26"/>
<circle cx="200" cy="598" r="88.2" fill="url(#japan-warmglow)"/>
<rect x="198" y="536" width="4" height="20" fill="#3f3230"/>
<ellipse cx="200" cy="598" rx="34" ry="42" fill="url(#japan-lantern)"/>
<ellipse cx="188.44" cy="588.76" rx="11.56" ry="19.32" fill="#ffb489" opacity="0.42"/>
<rect x="168.04" y="554" width="63.919999999999995" height="6" rx="3" fill="#3f3230"/>
<rect x="168.04" y="636" width="63.919999999999995" height="6" rx="3" fill="#3f3230"/>
<path d="M171.14 577 L228.86 577" stroke="#8a2b1a" stroke-width="2.5" fill="none" opacity="0.5"/>
<path d="M166.68 598 L233.32 598" stroke="#8a2b1a" stroke-width="2.5" fill="none" opacity="0.5"/>
<path d="M171.14 619 L228.86 619" stroke="#8a2b1a" stroke-width="2.5" fill="none" opacity="0.5"/>
<path d="M194 580 L206 580 L200 596 L208 596 L190 622 L196 600 L188 600 Z" fill="#ffeecb" opacity="0.9"/>
<rect x="196" y="638" width="8" height="13" fill="url(#japan-gold)"/>
<circle cx="342" cy="595" r="73.5" fill="url(#japan-warmglow)"/>
<rect x="340" y="536" width="4" height="24" fill="#3f3230"/>
<ellipse cx="342" cy="595" rx="28" ry="35" fill="url(#japan-lantern)"/>
<ellipse cx="332.48" cy="587.3" rx="9.520000000000001" ry="16.1" fill="#ffb489" opacity="0.42"/>
<rect x="315.68" y="558" width="52.64" height="6" rx="3" fill="#3f3230"/>
<rect x="315.68" y="626" width="52.64" height="6" rx="3" fill="#3f3230"/>
<path d="M318.24 577.5 L365.76 577.5" stroke="#8a2b1a" stroke-width="2.5" fill="none" opacity="0.5"/>
<path d="M314.56 595 L369.44 595" stroke="#8a2b1a" stroke-width="2.5" fill="none" opacity="0.5"/>
<path d="M318.24 612.5 L365.76 612.5" stroke="#8a2b1a" stroke-width="2.5" fill="none" opacity="0.5"/>
<path d="M336 577 L348 577 L342 593 L350 593 L332 619 L338 597 L330 597 Z" fill="#ffeecb" opacity="0.9"/>
<rect x="338" y="628" width="8" height="13" fill="url(#japan-gold)"/>
<rect x="244" y="530" width="58" height="7" rx="3" fill="url(#japan-woodd)"/>
<rect x="244" y="530" width="58" height="3" rx="1.5" fill="#c08b5d" opacity="0.7"/>
<g data-obj="shop-flag" transform="translate(250 537)"><rect x="0" y="0" width="5" height="62" rx="2.5" fill="url(#japan-woodd)"/><path d="M5 4 L46 4 L46 44 L5 44 Z" fill="url(#japan-red)"/><path d="M5 4 L46 4 L46 13 L5 13 Z" fill="#ff9c81" opacity="0.55"/><path d="M38 4 L46 4 L46 44 L38 44 Z" fill="#7d2210" opacity="0.45"/><circle cx="25" cy="27" r="10" fill="url(#japan-creamS)"/><path d="M20 22 L30 22 L25 34 Z" fill="#c2432f"/><path d="M5 44 L46 44 L46 48 L5 48 Z" fill="#5e1b0e" opacity="0.35"/></g>
<rect x="148" y="632" width="244" height="13" fill="url(#japan-woodd)"/>
<rect x="148" y="632" width="244" height="5" fill="#c08b5d" opacity="0.7"/>
<path d="M152 645 L198 645 L198 706 Q175 716 152 706 Z" fill="url(#japan-red)"/>
<path d="M152 645 L198 645 L198 662 L152 662 Z" fill="#ff9c81" opacity="0.4"/>
<path d="M202 645 L248 645 L248 706 Q225 716 202 706 Z" fill="url(#japan-redd)"/>
<path d="M202 645 L248 645 L248 662 L202 662 Z" fill="#ff9c81" opacity="0.4"/>
<path d="M252 645 L298 645 L298 706 Q275 716 252 706 Z" fill="url(#japan-red)"/>
<path d="M252 645 L298 645 L298 662 L252 662 Z" fill="#ff9c81" opacity="0.4"/>
<path d="M302 645 L348 645 L348 706 Q325 716 302 706 Z" fill="url(#japan-redd)"/>
<path d="M302 645 L348 645 L348 662 L302 662 Z" fill="#ff9c81" opacity="0.4"/>
<path d="M352 645 L392 645 L392 706 Q372 716 352 706 Z" fill="url(#japan-red)"/>
<path d="M352 645 L392 645 L392 662 L352 662 Z" fill="#ff9c81" opacity="0.4"/>
<circle cx="175" cy="682" r="13" fill="#ffeecb"/>
<circle cx="175" cy="682" r="6.5" fill="#d4472f"/>
<circle cx="277" cy="682" r="13" fill="#ffeecb"/>
<path d="M270 676 L284 676 L277 690 Z" fill="#a02c1c"/>
<path d="M320 674 C332 681 332 697 320 704 C308 697 308 681 320 674 Z" fill="#ffeecb"/>
<rect x="148" y="764" width="244" height="28" fill="url(#japan-woodd)"/>
<rect x="148" y="786" width="244" height="6" fill="#2f2119" opacity="0.5"/>
<rect x="144" y="748" width="252" height="16" fill="url(#japan-woodl)"/>
<rect x="144" y="748" width="252" height="5.12" fill="#f6dcb4" opacity="0.72"/>
<rect x="144" y="761" width="252" height="3" fill="#4d301f" opacity="0.55"/>
<rect x="148" y="742" width="244" height="6" fill="#241a14" opacity="0.45"/>
<ellipse cx="227" cy="747" rx="39.6" ry="12" fill="url(#japan-shade)" opacity="0.4"/>
<ellipse cx="227" cy="747" rx="21.6" ry="5.7" fill="url(#japan-shade)" opacity="0.76"/>
<g data-obj="stock-pot" transform="translate(196 698)"><path d="M4 14 L58 14 L54 44 C54 48 48 50 31 50 C14 50 8 48 8 44 Z" fill="url(#japan-metal)"/><path d="M42 14 L58 14 L54 44 C54 48 48 50 38 50 C46 44 46 26 42 14 Z" fill="#6f7d7a" opacity="0.45"/><path d="M10 18 C14 30 14 40 16 46" stroke="#f4fafa" stroke-width="4" fill="none" opacity="0.6" stroke-linecap="round"/><ellipse cx="31" cy="13" rx="29" ry="8" fill="url(#japan-metald)"/><ellipse cx="31" cy="11" rx="24" ry="6" fill="#e6eeed"/><rect x="25" y="2" width="12" height="7" rx="3" fill="url(#japan-metald)"/><path d="M0 24 C-2 30 0 36 4 38" stroke="#8b9998" stroke-width="5" fill="none" stroke-linecap="round"/><path d="M62 24 C64 30 62 36 58 38" stroke="#8b9998" stroke-width="5" fill="none" stroke-linecap="round"/></g>
<ellipse cx="294" cy="747" rx="27.72" ry="8.4" fill="url(#japan-shade)" opacity="0.38"/>
<ellipse cx="294" cy="747" rx="15.12" ry="3.99" fill="url(#japan-shade)" opacity="0.72"/>
<g transform="translate(272 712)"><ellipse cx="22" cy="36" rx="21" ry="5" fill="#e0cdb0"/><path d="M3 12 C3 27 11 36 22 36 C33 36 41 27 41 12 Z" fill="url(#japan-ceramic)"/><path d="M29 13 C29 27 26 36 22 36 C33 36 41 27 41 12 Z" fill="#bda286" opacity="0.45"/><ellipse cx="22" cy="12" rx="19" ry="5" fill="#efe0c6"/><ellipse cx="22" cy="12" rx="14" ry="3.4" fill="url(#japan-tealS)"/></g>
<ellipse cx="344" cy="747" rx="31.68" ry="9.6" fill="url(#japan-shade)" opacity="0.38"/>
<ellipse cx="344" cy="747" rx="17.28" ry="4.56" fill="url(#japan-shade)" opacity="0.72"/>
<g transform="translate(320 714)"><ellipse cx="24" cy="34" rx="24" ry="5" fill="#e0cdb0"/><path d="M2 10 C2 26 11 34 24 34 C37 34 46 26 46 10 Z" fill="url(#japan-ceramic)"/><path d="M32 11 C32 26 29 34 24 34 C37 34 46 26 46 10 Z" fill="#bda286" opacity="0.45"/><ellipse cx="24" cy="10" rx="22" ry="6" fill="#efe0c6"/><ellipse cx="24" cy="10" rx="17" ry="4" fill="url(#japan-greenS)"/></g>
<g data-obj="red-cloth" transform="translate(150 752) scale(0.82)"><path d="M0 36 L80 36 L76 12 C76 7 71 4 64 4 L12 8 C5 8 2 12 2 17 Z" fill="url(#japan-red)"/><path d="M0 36 L80 36 L79 27 L1 27 Z" fill="#7d2210" opacity="0.4"/><path d="M2 17 C12 10 60 6 74 8" stroke="#ff9c81" stroke-width="4" fill="none" opacity="0.55"/><path d="M10 22 L66 18" stroke="#ffeecb" stroke-width="3.5" fill="none" opacity="0.75"/></g>
<ellipse cx="566" cy="792" rx="125.4" ry="38" fill="url(#japan-shade)" opacity="0.38"/>
<ellipse cx="566" cy="792" rx="68.4" ry="18.05" fill="url(#japan-shade)" opacity="0.72"/>
<rect x="470" y="566" width="192" height="226" rx="8" fill="url(#japan-metal)"/>
<rect x="470" y="566" width="16" height="226" rx="8" fill="#f6fbfa" opacity="0.7"/>
<rect x="632" y="566" width="30" height="226" fill="#6f7d7a" opacity="0.4"/>
<rect x="470" y="566" width="192" height="38" rx="8" fill="url(#japan-red)"/>
<rect x="470" y="566" width="192" height="12" rx="6" fill="#ff9c81" opacity="0.45"/>
<rect x="470" y="594" width="192" height="10" fill="#7d2210" opacity="0.5"/>
<rect x="484" y="574" width="66" height="13" rx="6" fill="#fff1d6" opacity="0.9"/>
<rect x="482" y="612" width="112" height="130" rx="5" fill="url(#japan-teal)"/>
<path d="M486 616 L520 616 L496 738 L486 738 Z" fill="#ffffff" opacity="0.2"/>
<path d="M560 614 L572 614 L552 740 L544 740 Z" fill="#ffffff" opacity="0.12"/>
<rect x="482" y="654" width="112" height="5" fill="#1b3b45"/>
<rect x="482" y="696" width="112" height="5" fill="#1b3b45"/>
<rect x="486" y="620" width="15" height="30" rx="5" fill="url(#japan-red)"/>
<rect x="488" y="615" width="11" height="6" rx="2" fill="#f3e3c6"/>
<rect x="488.5" y="624" width="3" height="18" rx="1.5" fill="#ffffff" opacity="0.35"/>
<rect x="508" y="620" width="15" height="30" rx="5" fill="url(#japan-gold)"/>
<rect x="510" y="615" width="11" height="6" rx="2" fill="#f3e3c6"/>
<rect x="510.5" y="624" width="3" height="18" rx="1.5" fill="#ffffff" opacity="0.35"/>
<rect x="530" y="620" width="15" height="30" rx="5" fill="url(#japan-green)"/>
<rect x="532" y="615" width="11" height="6" rx="2" fill="#f3e3c6"/>
<rect x="532.5" y="624" width="3" height="18" rx="1.5" fill="#ffffff" opacity="0.35"/>
<rect x="552" y="620" width="15" height="30" rx="5" fill="url(#japan-teal)"/>
<rect x="554" y="615" width="11" height="6" rx="2" fill="#f3e3c6"/>
<rect x="554.5" y="624" width="3" height="18" rx="1.5" fill="#ffffff" opacity="0.35"/>
<rect x="574" y="620" width="15" height="30" rx="5" fill="url(#japan-purple)"/>
<rect x="576" y="615" width="11" height="6" rx="2" fill="#f3e3c6"/>
<rect x="576.5" y="624" width="3" height="18" rx="1.5" fill="#ffffff" opacity="0.35"/>
<rect x="486" y="662" width="15" height="30" rx="5" fill="url(#japan-gold)"/>
<rect x="488" y="657" width="11" height="6" rx="2" fill="#f3e3c6"/>
<rect x="488.5" y="666" width="3" height="18" rx="1.5" fill="#ffffff" opacity="0.35"/>
<rect x="508" y="662" width="15" height="30" rx="5" fill="url(#japan-green)"/>
<rect x="510" y="657" width="11" height="6" rx="2" fill="#f3e3c6"/>
<rect x="510.5" y="666" width="3" height="18" rx="1.5" fill="#ffffff" opacity="0.35"/>
<rect x="530" y="662" width="15" height="30" rx="5" fill="url(#japan-teal)"/>
<rect x="532" y="657" width="11" height="6" rx="2" fill="#f3e3c6"/>
<rect x="532.5" y="666" width="3" height="18" rx="1.5" fill="#ffffff" opacity="0.35"/>
<rect x="552" y="662" width="15" height="30" rx="5" fill="url(#japan-purple)"/>
<rect x="554" y="657" width="11" height="6" rx="2" fill="#f3e3c6"/>
<rect x="554.5" y="666" width="3" height="18" rx="1.5" fill="#ffffff" opacity="0.35"/>
<rect x="574" y="662" width="15" height="30" rx="5" fill="url(#japan-red)"/>
<rect x="576" y="657" width="11" height="6" rx="2" fill="#f3e3c6"/>
<rect x="576.5" y="666" width="3" height="18" rx="1.5" fill="#ffffff" opacity="0.35"/>
<rect x="486" y="704" width="15" height="30" rx="5" fill="url(#japan-green)"/>
<rect x="488" y="699" width="11" height="6" rx="2" fill="#f3e3c6"/>
<rect x="488.5" y="708" width="3" height="18" rx="1.5" fill="#ffffff" opacity="0.35"/>
<rect x="508" y="704" width="15" height="30" rx="5" fill="url(#japan-teal)"/>
<rect x="510" y="699" width="11" height="6" rx="2" fill="#f3e3c6"/>
<rect x="510.5" y="708" width="3" height="18" rx="1.5" fill="#ffffff" opacity="0.35"/>
<rect x="530" y="704" width="15" height="30" rx="5" fill="url(#japan-purple)"/>
<rect x="532" y="699" width="11" height="6" rx="2" fill="#f3e3c6"/>
<rect x="532.5" y="708" width="3" height="18" rx="1.5" fill="#ffffff" opacity="0.35"/>
<rect x="552" y="704" width="15" height="30" rx="5" fill="url(#japan-red)"/>
<rect x="554" y="699" width="11" height="6" rx="2" fill="#f3e3c6"/>
<rect x="554.5" y="708" width="3" height="18" rx="1.5" fill="#ffffff" opacity="0.35"/>
<rect x="574" y="704" width="15" height="30" rx="5" fill="url(#japan-gold)"/>
<rect x="576" y="699" width="11" height="6" rx="2" fill="#f3e3c6"/>
<rect x="576.5" y="708" width="3" height="18" rx="1.5" fill="#ffffff" opacity="0.35"/>
<g data-obj="lightstick" transform="translate(508 686) scale(0.36)"><circle cx="36" cy="34" r="36" fill="url(#japan-purpglow)"/><circle cx="36" cy="34" r="30" fill="url(#japan-purpS)"/><circle cx="34" cy="31" r="15" fill="#e6d6ff" opacity="0.75"/><ellipse cx="24" cy="20" rx="8" ry="4.6" fill="#ffffff" opacity="0.85" transform="rotate(-32 24 20)"/><path d="M12 44 A30 30 0 0 0 58 50" stroke="#4f2b95" stroke-width="3" fill="none" opacity="0.45"/><rect x="20" y="60" width="32" height="13" rx="5" fill="url(#japan-silver)"/><rect x="24" y="71" width="24" height="62" rx="11" fill="url(#japan-pearl)"/><rect x="28" y="80" width="5" height="42" rx="2.5" fill="#ffffff" opacity="0.8"/><rect x="41" y="74" width="6" height="56" rx="3" fill="#a693c4" opacity="0.5"/><rect x="22" y="122" width="28" height="14" rx="5" fill="url(#japan-purpled)"/><path d="M48 128 q13 6 5 15" stroke="#c3b0e0" stroke-width="3.5" fill="none" stroke-linecap="round"/></g>
<rect x="604" y="612" width="46" height="130" rx="5" fill="url(#japan-silver)"/>
<rect x="610" y="620" width="34" height="20" rx="3" fill="#31555f"/>
<circle cx="618" cy="654" r="6" fill="url(#japan-redS)"/>
<circle cx="636" cy="654" r="6" fill="url(#japan-redS)"/>
<circle cx="618" cy="674" r="6" fill="url(#japan-redS)"/>
<circle cx="636" cy="674" r="6" fill="url(#japan-redS)"/>
<circle cx="618" cy="694" r="6" fill="url(#japan-redS)"/>
<circle cx="636" cy="694" r="6" fill="url(#japan-redS)"/>
<rect x="612" y="712" width="30" height="6" rx="3" fill="#8b9998"/>
<rect x="614" y="726" width="26" height="10" rx="2" fill="#6f7d7a"/>
<rect x="482" y="750" width="112" height="34" rx="4" fill="url(#japan-teald)"/>
<rect x="482" y="750" width="112" height="10" rx="4" fill="#16303a" opacity="0.8"/>
<rect x="470" y="780" width="192" height="12" fill="url(#japan-metald)"/>
<rect x="0" y="792" width="800" height="408" fill="url(#japan-street)"/>
<rect x="0" y="792" width="800" height="28" fill="#ab9682"/>
<rect x="0" y="792" width="800" height="6" fill="#c4af96" opacity="0.7"/>
<rect x="0" y="816" width="800" height="7" fill="#6b584c"/>
<rect x="0" y="940" width="800" height="3" fill="#584739" opacity="0.32"/>
<rect x="0" y="1076" width="800" height="3" fill="#584739" opacity="0.28"/>
<ellipse cx="266" cy="866" rx="250" ry="66" fill="url(#japan-warmglow)" opacity="0.5"/>
<ellipse cx="566" cy="834" rx="150" ry="40" fill="url(#japan-warmglow)" opacity="0.3"/>
<path d="M150 806 L54 1022 L142 1022 L210 806 Z" fill="#2f2622" opacity="0.2"/>
<path d="M470 800 L418 984 L502 984 L522 800 Z" fill="#2f2622" opacity="0.15"/>
<path d="M694 798 L644 1030 L728 1030 L748 798 Z" fill="#2f2622" opacity="0.17"/>
<ellipse cx="568" cy="840" rx="44.88" ry="13.6" fill="url(#japan-shade)" opacity="0.38"/>
<ellipse cx="568" cy="840" rx="24.48" ry="6.46" fill="url(#japan-shade)" opacity="0.72"/>
<path d="M536 796 L600 796 L600 840 L536 840 Z" fill="url(#japan-woodl)"/>
<path d="M536 796 L600 796 L600 804 L536 804 Z" fill="#f6dcb4" opacity="0.65"/>
<path d="M588 796 L600 796 L600 840 L588 840 Z" fill="#7a4f2d" opacity="0.4"/>
<path d="M536 818 L600 818" stroke="#8a5a3b" stroke-width="4" fill="none" opacity="0.5"/>
<ellipse cx="630" cy="842" rx="29.04" ry="8.8" fill="url(#japan-shade)" opacity="0.38"/>
<ellipse cx="630" cy="842" rx="15.84" ry="4.18" fill="url(#japan-shade)" opacity="0.72"/>
<g data-obj="dropped-can" transform="translate(606 804) scale(0.95)"><path d="M5 9 C5 4 15 2 25 2 C35 2 45 4 45 9 L45 32 C45 36 35 38 25 38 C15 38 5 36 5 32 Z" fill="url(#japan-green)"/><path d="M35 4 C42 5 45 7 45 9 L45 32 C45 36 38 38 30 38 C38 34 40 16 35 4 Z" fill="#2d5522" opacity="0.45"/><path d="M9 12 C8 20 8 28 10 34" stroke="#d9f0b8" stroke-width="3.5" fill="none" opacity="0.55" stroke-linecap="round"/><ellipse cx="25" cy="9" rx="20" ry="6" fill="#8fbf6a"/><ellipse cx="25" cy="8" rx="12" ry="3.2" fill="#4f7d3d"/><rect x="9" y="17" width="32" height="8" fill="#f6ecd8" opacity="0.85"/></g>
<ellipse cx="160" cy="1078" rx="160" ry="20" fill="url(#japan-shade)" opacity="0.55"/>
<rect x="20" y="876" width="16" height="196" fill="url(#japan-woodd)"/>
<rect x="20" y="876" width="6" height="196" fill="#c08b5d" opacity="0.6"/>
<rect x="290" y="876" width="16" height="196" fill="url(#japan-woodd)"/>
<rect x="290" y="876" width="5" height="196" fill="#c08b5d" opacity="0.5"/>
<rect x="36" y="888" width="254" height="68" fill="#3b2c22"/>
<rect x="36" y="888" width="254" height="23.12" fill="#241a14" opacity="0.55"/>
<rect x="36" y="888" width="45.72" height="68" fill="#5a4433" opacity="0.35"/>
<rect x="36" y="949" width="254" height="7" fill="#6a5140" opacity="0.75"/>
<rect x="36" y="968" width="254" height="68" fill="#3b2c22"/>
<rect x="36" y="968" width="254" height="23.12" fill="#241a14" opacity="0.55"/>
<rect x="36" y="968" width="45.72" height="68" fill="#5a4433" opacity="0.35"/>
<rect x="36" y="1029" width="254" height="7" fill="#6a5140" opacity="0.75"/>
<rect x="16" y="876" width="294" height="14" fill="url(#japan-woodl)"/>
<rect x="16" y="876" width="294" height="4.48" fill="#f6dcb4" opacity="0.72"/>
<rect x="16" y="887" width="294" height="3" fill="#4d301f" opacity="0.55"/>
<rect x="30" y="956" width="266" height="12" fill="url(#japan-woodl)"/>
<rect x="30" y="956" width="266" height="3.84" fill="#f6dcb4" opacity="0.72"/>
<rect x="30" y="965" width="266" height="3" fill="#4d301f" opacity="0.55"/>
<rect x="30" y="1036" width="266" height="12" fill="url(#japan-woodl)"/>
<rect x="30" y="1036" width="266" height="3.84" fill="#f6dcb4" opacity="0.72"/>
<rect x="30" y="1045" width="266" height="3" fill="#4d301f" opacity="0.55"/>
<rect x="16" y="1060" width="294" height="14" fill="url(#japan-woodl)"/>
<rect x="16" y="1060" width="294" height="4.48" fill="#f6dcb4" opacity="0.72"/>
<rect x="16" y="1071" width="294" height="3" fill="#4d301f" opacity="0.55"/>
<rect x="52" y="864" width="196" height="12" fill="url(#japan-woodl)"/>
<rect x="52" y="864" width="196" height="3.84" fill="#f6dcb4" opacity="0.72"/>
<rect x="52" y="873" width="196" height="3" fill="#4d301f" opacity="0.55"/>
<ellipse cx="96" cy="863" rx="44.88" ry="13.6" fill="url(#japan-shade)" opacity="0.4"/>
<ellipse cx="96" cy="863" rx="24.48" ry="6.46" fill="url(#japan-shade)" opacity="0.76"/>
<g data-obj="teapot" transform="translate(58 820) scale(0.56)"><path d="M22 20 C6 20 0 34 0 52 C0 70 14 78 34 78 L64 78 C84 78 96 70 96 52 C96 34 88 20 74 20 Z" fill="url(#japan-teal)"/><path d="M64 20 C80 26 88 38 88 54 C88 70 78 78 58 78 L64 78 C84 78 96 70 96 52 C96 34 88 20 74 20 Z" fill="#173741" opacity="0.55"/><path d="M18 32 C12 42 12 56 16 66" stroke="#b4dbe6" stroke-width="6" fill="none" opacity="0.5" stroke-linecap="round"/><ellipse cx="48" cy="18" rx="28" ry="10" fill="url(#japan-tealS)"/><circle cx="48" cy="9" r="7.5" fill="url(#japan-goldS)"/><path d="M96 36 C114 34 120 48 110 60" stroke="#3c6474" stroke-width="9" fill="none" stroke-linecap="round"/><path d="M0 36 C-18 32 -22 48 -10 60" stroke="#3c6474" stroke-width="9" fill="none" stroke-linecap="round"/><path d="M24 62 C34 68 62 68 72 62" stroke="#8cbcc9" stroke-width="3" fill="none" opacity="0.45"/></g>
<ellipse cx="168" cy="863" rx="34.32" ry="10.4" fill="url(#japan-shade)" opacity="0.4"/>
<ellipse cx="168" cy="863" rx="18.72" ry="4.94" fill="url(#japan-shade)" opacity="0.76"/>
<g data-obj="matcha-cup" transform="translate(140 816) scale(0.58)"><ellipse cx="48" cy="70" rx="46" ry="11" fill="url(#japan-ceramic)"/><path d="M8 26 C8 54 24 68 48 68 C72 68 88 54 88 26 Z" fill="url(#japan-ceramic)"/><path d="M62 28 C62 54 56 68 48 68 C72 68 88 54 88 26 Z" fill="#bda286" opacity="0.5"/><path d="M18 32 C20 46 27 56 36 61" stroke="#ffffff" stroke-width="4" fill="none" opacity="0.6" stroke-linecap="round"/><ellipse cx="48" cy="26" rx="42" ry="13" fill="#efe0c6"/><ellipse cx="48" cy="26" rx="36" ry="10" fill="url(#japan-greenS)"/><ellipse cx="43" cy="23" rx="19" ry="5" fill="#c2dd94" opacity="0.8"/><path d="M30 24 C36 20 50 20 56 24" stroke="#e8f3cf" stroke-width="2" fill="none" opacity="0.8"/></g>
<ellipse cx="226" cy="863" rx="27.72" ry="8.4" fill="url(#japan-shade)" opacity="0.38"/>
<ellipse cx="226" cy="863" rx="15.12" ry="3.99" fill="url(#japan-shade)" opacity="0.72"/>
<g transform="translate(204 828)"><ellipse cx="22" cy="34" rx="21" ry="5" fill="#e0cdb0"/><path d="M3 11 C3 26 11 34 22 34 C33 34 41 26 41 11 Z" fill="url(#japan-ceramic)"/><path d="M29 12 C29 26 26 34 22 34 C33 34 41 26 41 11 Z" fill="#bda286" opacity="0.45"/><ellipse cx="22" cy="11" rx="19" ry="5" fill="#efe0c6"/><ellipse cx="22" cy="11" rx="14" ry="3.4" fill="#c9a15f"/></g>
<ellipse cx="77" cy="955" rx="40.92" ry="12.4" fill="url(#japan-shade)" opacity="0.36"/>
<ellipse cx="77" cy="955" rx="22.32" ry="5.89" fill="url(#japan-shade)" opacity="0.68"/>
<g data-obj="crate-small" transform="translate(44 904)"><path d="M0 0 L66 0 L66 52 L0 52 Z" fill="url(#japan-woodl)"/><path d="M0 0 L66 0 L66 9 L0 9 Z" fill="#f6dcb4" opacity="0.7"/><path d="M52 0 L66 0 L66 52 L52 52 Z" fill="#7a4f2d" opacity="0.4"/><path d="M0 22 L66 22" stroke="#8a5a3b" stroke-width="5" fill="none" opacity="0.5"/><path d="M0 38 L66 38" stroke="#8a5a3b" stroke-width="5" fill="none" opacity="0.4"/><path d="M0 46 L66 46 L66 52 L0 52 Z" fill="#5c3a24" opacity="0.45"/></g>
<rect x="52" y="912" width="15" height="24" rx="5" fill="url(#japan-green)"/>
<rect x="54" y="916" width="4" height="14" rx="2" fill="#d5f0b0" opacity="0.5"/>
<rect x="72" y="914" width="15" height="22" rx="5" fill="url(#japan-red)"/>
<rect x="74" y="918" width="4" height="12" rx="2" fill="#ffc4b0" opacity="0.5"/>
<ellipse cx="153" cy="955" rx="33" ry="10" fill="url(#japan-shade)" opacity="0.36"/>
<ellipse cx="153" cy="955" rx="18" ry="4.75" fill="url(#japan-shade)" opacity="0.68"/>
<g data-obj="leaf-veg" transform="translate(126 907) scale(0.95)"><path d="M4 44 C0 28 8 16 18 16 C15 5 25 -2 34 3 C42 -3 54 4 52 14 C61 18 62 32 54 38 C58 46 50 54 40 52 Z" fill="url(#japan-greenS)"/><path d="M18 16 C27 12 41 15 52 25 C40 17 27 14 18 16 Z" fill="#c2e59a" opacity="0.85"/><path d="M34 3 C41 10 48 21 52 32" stroke="#8fbf6a" stroke-width="4" fill="none" opacity="0.7"/><path d="M12 34 C22 40 34 45 46 46" stroke="#35602b" stroke-width="3.5" fill="none" opacity="0.6"/><path d="M8 20 C6 30 8 40 14 46" stroke="#d9f0b8" stroke-width="3" fill="none" opacity="0.5"/></g>
<ellipse cx="229" cy="955" rx="35.64" ry="10.8" fill="url(#japan-shade)" opacity="0.36"/>
<ellipse cx="229" cy="955" rx="19.44" ry="5.13" fill="url(#japan-shade)" opacity="0.68"/>
<g data-obj="succulent" transform="translate(200 900)"><path d="M8 42 C0 26 10 12 24 10 C19 0 32 -6 42 2 C52 -4 62 6 57 16 C69 22 68 42 54 48 Z" fill="url(#japan-greenS)"/><path d="M24 10 C34 5 48 8 56 20 C44 11 32 8 24 10 Z" fill="#c2e59a" opacity="0.85"/><path d="M42 2 C48 12 52 26 52 38" stroke="#8fbf6a" stroke-width="3.5" fill="none" opacity="0.7"/><path d="M12 24 C10 32 12 42 18 48" stroke="#d9f0b8" stroke-width="3" fill="none" opacity="0.5"/><path d="M8 42 L54 48 L50 56 L12 52 Z" fill="url(#japan-woodl)"/></g>
<ellipse cx="81" cy="1035" rx="44.88" ry="13.6" fill="url(#japan-shade)" opacity="0.36"/>
<ellipse cx="81" cy="1035" rx="24.48" ry="6.46" fill="url(#japan-shade)" opacity="0.68"/>
<g data-obj="red-box" transform="translate(44 996)"><path d="M0 0 L74 0 L68 40 L6 40 Z" fill="url(#japan-red)"/><path d="M0 0 L74 0 L72 11 L2 11 Z" fill="#ff9c81" opacity="0.55"/><path d="M58 0 L74 0 L68 40 L54 40 Z" fill="#7d2210" opacity="0.4"/><path d="M10 20 L60 20" stroke="#ffeecb" stroke-width="3.5" fill="none" opacity="0.7" stroke-linecap="round"/><path d="M14 30 L48 30" stroke="#ffeecb" stroke-width="3" fill="none" opacity="0.5" stroke-linecap="round"/></g>
<ellipse cx="160" cy="1035" rx="36.96" ry="11.2" fill="url(#japan-shade)" opacity="0.34"/>
<ellipse cx="160" cy="1035" rx="20.16" ry="5.32" fill="url(#japan-shade)" opacity="0.64"/>
<path d="M130 992 L190 992 L184 1036 L136 1036 Z" fill="url(#japan-woodl)"/>
<path d="M130 992 L190 992 L188 1002 L132 1002 Z" fill="#f6dcb4" opacity="0.6"/>
<path d="M176 992 L190 992 L184 1036 L172 1036 Z" fill="#7a4f2d" opacity="0.35"/>
<ellipse cx="237" cy="1035" rx="39.6" ry="12" fill="url(#japan-shade)" opacity="0.34"/>
<ellipse cx="237" cy="1035" rx="21.6" ry="5.7" fill="url(#japan-shade)" opacity="0.64"/>
<path d="M204 988 L270 988 L270 1036 L204 1036 Z" fill="url(#japan-wood)"/>
<path d="M204 988 L270 988 L270 996 L204 996 Z" fill="#efc994" opacity="0.65"/>
<path d="M256 988 L270 988 L270 1036 L256 1036 Z" fill="#5c3a24" opacity="0.4"/>
<path d="M204 1010 L270 1010" stroke="#8a5a3b" stroke-width="4" fill="none" opacity="0.5"/>
<ellipse cx="322" cy="1072" rx="22" ry="6" fill="url(#japan-shade)" opacity="0.6"/>
<g data-obj="broom" transform="translate(300 1002) rotate(7)"><rect x="12" y="0" width="6" height="38" rx="3" fill="url(#japan-woodl)"/><rect x="13" y="2" width="2" height="34" rx="1" fill="#f6dcb4" opacity="0.7"/><path d="M5 36 L25 36 L30 68 L0 68 Z" fill="url(#japan-woodl)"/><path d="M5 36 L25 36 L26 44 L4 44 Z" fill="#8a5a3b" opacity="0.6"/><path d="M22 36 L25 36 L30 68 L25 68 Z" fill="#7a4f2d" opacity="0.4"/><path d="M8 46 L5 68" stroke="#a97a4b" stroke-width="2" fill="none"/><path d="M15 46 L15 68" stroke="#a97a4b" stroke-width="2" fill="none"/><path d="M22 46 L25 68" stroke="#a97a4b" stroke-width="2" fill="none"/></g>
<ellipse cx="450" cy="1082" rx="150" ry="18" fill="url(#japan-shade)" opacity="0.5"/>
<rect x="336" y="876" width="16" height="200" fill="url(#japan-woodd)"/>
<rect x="336" y="876" width="6" height="200" fill="#c08b5d" opacity="0.6"/>
<rect x="548" y="876" width="16" height="200" fill="url(#japan-woodd)"/>
<rect x="548" y="876" width="5" height="200" fill="#c08b5d" opacity="0.5"/>
<rect x="320" y="880" width="262" height="10" fill="#241a14" opacity="0.4"/>
<rect x="316" y="864" width="266" height="16" fill="url(#japan-woodl)"/>
<rect x="316" y="864" width="266" height="5.12" fill="#f6dcb4" opacity="0.72"/>
<rect x="316" y="877" width="266" height="3" fill="#4d301f" opacity="0.55"/>
<rect x="340" y="890" width="208" height="56" fill="#3b2c22"/>
<rect x="340" y="890" width="208" height="19.04" fill="#241a14" opacity="0.55"/>
<rect x="340" y="890" width="37.44" height="56" fill="#5a4433" opacity="0.35"/>
<rect x="340" y="939" width="208" height="7" fill="#6a5140" opacity="0.75"/>
<rect x="326" y="946" width="238" height="14" fill="url(#japan-woodl)"/>
<rect x="326" y="946" width="238" height="4.48" fill="#f6dcb4" opacity="0.72"/>
<rect x="326" y="957" width="238" height="3" fill="#4d301f" opacity="0.55"/>
<rect x="348" y="960" width="192" height="70" fill="#3b2c22"/>
<rect x="348" y="960" width="192" height="23.8" fill="#241a14" opacity="0.55"/>
<rect x="348" y="960" width="34.56" height="70" fill="#5a4433" opacity="0.35"/>
<rect x="348" y="1023" width="192" height="7" fill="#6a5140" opacity="0.75"/>
<rect x="326" y="1030" width="238" height="14" fill="url(#japan-woodl)"/>
<rect x="326" y="1030" width="238" height="4.48" fill="#f6dcb4" opacity="0.72"/>
<rect x="326" y="1041" width="238" height="3" fill="#4d301f" opacity="0.55"/>
<ellipse cx="374" cy="863" rx="36.96" ry="11.2" fill="url(#japan-shade)" opacity="0.4"/>
<ellipse cx="374" cy="863" rx="20.16" ry="5.32" fill="url(#japan-shade)" opacity="0.76"/>
<g data-obj="daruma" transform="translate(348 806) scale(0.6)"><path d="M44 94 C14 94 2 74 2 51 C2 22 20 2 44 2 C68 2 86 22 86 51 C86 74 74 94 44 94 Z" fill="url(#japan-redS)"/><path d="M44 2 C62 2 78 20 80 44 C82 66 70 88 56 94 C68 80 72 60 70 44 C68 24 58 8 44 2 Z" fill="#7d2210" opacity="0.5"/><path d="M14 20 C22 10 32 5 42 3 C30 10 22 22 19 34 Z" fill="#ffb59f" opacity="0.5"/><path d="M8 68 C20 78 68 78 80 68 L79 76 C66 85 22 85 9 76 Z" fill="#f0b93f" opacity="0.85"/><ellipse cx="44" cy="47" rx="26" ry="26" fill="url(#japan-creamS)"/><path d="M24 37 C28 28 40 28 43 37 C38 32 29 32 24 37 Z" fill="#3a2c26"/><path d="M64 37 C60 28 48 28 45 37 C50 32 59 32 64 37 Z" fill="#3a2c26"/><circle cx="34" cy="46" r="6" fill="#3a2c26"/><circle cx="54" cy="46" r="6" fill="none" stroke="#3a2c26" stroke-width="2"/><path d="M30 57 C36 64 52 64 58 57 C52 70 36 70 30 57 Z" fill="#3a2c26"/><circle cx="16" cy="27" r="4" fill="#f0b93f" opacity="0.75"/><circle cx="72" cy="27" r="4" fill="#f0b93f" opacity="0.75"/></g>
<ellipse cx="436" cy="863" rx="38.28" ry="11.6" fill="url(#japan-shade)" opacity="0.4"/>
<ellipse cx="436" cy="863" rx="20.88" ry="5.51" fill="url(#japan-shade)" opacity="0.76"/>
<g data-obj="maneki-neko" transform="translate(408 797) scale(0.58)"><path d="M48 114 C18 114 8 96 8 76 C8 56 20 42 48 42 C76 42 88 56 88 76 C88 96 78 114 48 114 Z" fill="url(#japan-creamS)"/><path d="M62 44 C80 50 88 62 88 76 C88 96 78 114 48 114 C66 106 74 92 74 74 C74 60 70 48 62 44 Z" fill="#cbb79c" opacity="0.55"/><path d="M22 14 L14 0 L36 10 Z" fill="#fffaf2"/><path d="M74 14 L82 0 L60 10 Z" fill="#f3e5d4"/><path d="M24 13 L20 6 L32 12 Z" fill="#f2b6c4"/><path d="M72 13 L76 6 L64 12 Z" fill="#e79fb0"/><circle cx="48" cy="36" r="31" fill="url(#japan-creamS)"/><path d="M64 10 C77 17 79 28 79 36 C79 51 66 64 48 67 C63 60 69 48 69 36 C69 25 68 15 64 10 Z" fill="#cbb79c" opacity="0.5"/><path d="M20 14 C28 8 38 8 42 14 C34 10 26 10 20 14 Z" fill="#f0a35d"/><path d="M32 32 C36 26 44 26 47 32 C42 29 37 29 32 32 Z" fill="#3a2c26"/><path d="M64 32 C60 26 52 26 49 32 C54 29 59 29 64 32 Z" fill="#3a2c26"/><circle cx="38" cy="37" r="4" fill="#3a2c26"/><circle cx="58" cy="37" r="4" fill="#3a2c26"/><circle cx="39.5" cy="35.5" r="1.5" fill="#ffffff"/><circle cx="59.5" cy="35.5" r="1.5" fill="#ffffff"/><path d="M44 46 L52 46 L48 51 Z" fill="#e07a8a"/><path d="M48 51 C44 56 38 55 36 51" stroke="#3a2c26" stroke-width="1.8" fill="none"/><path d="M48 51 C52 56 58 55 60 51" stroke="#3a2c26" stroke-width="1.8" fill="none"/><path d="M14 42 L32 46" stroke="#c9b6a4" stroke-width="1.5" fill="none"/><path d="M82 42 L64 46" stroke="#c9b6a4" stroke-width="1.5" fill="none"/><ellipse cx="10" cy="56" rx="12" ry="17" fill="url(#japan-creamS)" transform="rotate(-22 10 56)"/><ellipse cx="80" cy="94" rx="11" ry="9" fill="#f6ecdc"/><path d="M22 66 C33 75 63 75 74 66 L74 75 C63 84 33 84 22 75 Z" fill="url(#japan-red)"/><circle cx="48" cy="80" r="8" fill="url(#japan-goldS)"/><ellipse cx="50" cy="97" rx="23" ry="13" fill="url(#japan-goldS)"/><rect x="40" y="91" width="20" height="3" rx="1.5" fill="#9c6716" opacity="0.7"/></g>
<ellipse cx="514" cy="863" rx="26.4" ry="8" fill="url(#japan-shade)" opacity="0.38"/>
<ellipse cx="514" cy="863" rx="14.4" ry="3.8" fill="url(#japan-shade)" opacity="0.72"/>
<g transform="translate(496 824) scale(0.42)"><path d="M44 94 C14 94 2 74 2 51 C2 22 20 2 44 2 C68 2 86 22 86 51 C86 74 74 94 44 94 Z" fill="url(#japan-redS)"/><path d="M44 2 C62 2 78 20 80 44 C82 66 70 88 56 94 C68 80 72 60 70 44 C68 24 58 8 44 2 Z" fill="#7d2210" opacity="0.5"/><path d="M8 68 C20 78 68 78 80 68 L79 76 C66 85 22 85 9 76 Z" fill="#f0b93f" opacity="0.85"/><ellipse cx="44" cy="47" rx="26" ry="26" fill="url(#japan-creamS)"/><circle cx="34" cy="46" r="6" fill="#3a2c26"/><circle cx="54" cy="46" r="6" fill="#3a2c26"/><path d="M30 57 C36 64 52 64 58 57 C52 70 36 70 30 57 Z" fill="#3a2c26"/></g>
<ellipse cx="554" cy="863" rx="27.72" ry="8.4" fill="url(#japan-shade)" opacity="0.38"/>
<ellipse cx="554" cy="863" rx="15.12" ry="3.99" fill="url(#japan-shade)" opacity="0.72"/>
<g transform="translate(534 816) scale(0.41)"><path d="M48 114 C18 114 8 96 8 76 C8 56 20 42 48 42 C76 42 88 56 88 76 C88 96 78 114 48 114 Z" fill="url(#japan-creamS)"/><path d="M62 44 C80 50 88 62 88 76 C88 96 78 114 48 114 C66 106 74 92 74 74 C74 60 70 48 62 44 Z" fill="#cbb79c" opacity="0.55"/><path d="M22 14 L14 0 L36 10 Z" fill="#fffaf2"/><path d="M74 14 L82 0 L60 10 Z" fill="#f3e5d4"/><circle cx="48" cy="36" r="31" fill="url(#japan-creamS)"/><circle cx="38" cy="37" r="4" fill="#3a2c26"/><circle cx="58" cy="37" r="4" fill="#3a2c26"/><path d="M44 46 L52 46 L48 51 Z" fill="#e07a8a"/><path d="M22 66 C33 75 63 75 74 66 L74 75 C63 84 33 84 22 75 Z" fill="url(#japan-red)"/><circle cx="48" cy="80" r="8" fill="url(#japan-goldS)"/></g>
<path d="M380 876 C376 878 376 882 380 884" stroke="#7a6350" stroke-width="2" fill="none"/>
<g data-obj="price-tag" transform="translate(368 880)"><path d="M16 0 L16 8" stroke="#7a6350" stroke-width="1.8" fill="none"/><path d="M2 8 L30 8 L28 44 L4 44 Z" fill="url(#japan-paper)"/><path d="M2 8 L30 8 L29 17 L3 17 Z" fill="#e5d5b8" opacity="0.9"/><path d="M23 8 L30 8 L28 44 L22 44 Z" fill="#c2ab88" opacity="0.45"/><path d="M8 26 L24 26" stroke="#c2432f" stroke-width="3" fill="none" stroke-linecap="round"/><path d="M8 34 L19 34" stroke="#7a5a3b" stroke-width="2.4" fill="none" stroke-linecap="round"/></g>
<ellipse cx="370" cy="945" rx="33" ry="10" fill="url(#japan-shade)" opacity="0.36"/>
<ellipse cx="370" cy="945" rx="18" ry="4.75" fill="url(#japan-shade)" opacity="0.68"/>
<g data-obj="onigiri" transform="translate(344 896) scale(0.64)"><path d="M40 2 C50 2 55 9 72 42 C82 60 76 72 60 72 L20 72 C4 72 -2 60 8 42 C25 9 30 2 40 2 Z" fill="url(#japan-ceramic)"/><path d="M40 2 C50 2 55 9 72 42 C82 60 76 72 60 72 L46 72 C56 50 52 22 40 2 Z" fill="#c8b298" opacity="0.5"/><path d="M40 2 C34 10 28 22 22 36 C16 24 26 10 34 4 Z" fill="#ffffff" opacity="0.7"/><path d="M22 46 L58 46 L58 72 L30 72 C24 72 22 67 22 60 Z" fill="#2f4a3c"/><path d="M22 48 L58 48 L58 55 L22 55 Z" fill="#527a63" opacity="0.8"/><path d="M46 46 L58 46 L58 72 L46 72 Z" fill="#1c2f27" opacity="0.7"/><ellipse cx="30" cy="26" rx="3" ry="2" fill="#ddcbb0" transform="rotate(20 30 26)"/><ellipse cx="44" cy="18" rx="3" ry="2" fill="#ddcbb0" transform="rotate(-30 44 18)"/><ellipse cx="54" cy="34" rx="3" ry="2" fill="#ddcbb0" transform="rotate(40 54 34)"/></g>
<ellipse cx="426" cy="945" rx="29.04" ry="8.8" fill="url(#japan-shade)" opacity="0.36"/>
<ellipse cx="426" cy="945" rx="15.84" ry="4.18" fill="url(#japan-shade)" opacity="0.68"/>
<g transform="translate(404 902) scale(0.55)"><path d="M40 2 C50 2 55 9 72 42 C82 60 76 72 60 72 L20 72 C4 72 -2 60 8 42 C25 9 30 2 40 2 Z" fill="url(#japan-ceramic)"/><path d="M40 2 C50 2 55 9 72 42 C82 60 76 72 60 72 L46 72 C56 50 52 22 40 2 Z" fill="#c8b298" opacity="0.5"/><path d="M40 2 C34 10 28 22 22 36 C16 24 26 10 34 4 Z" fill="#ffffff" opacity="0.7"/><circle cx="40" cy="48" r="12" fill="url(#japan-redS)"/></g>
<ellipse cx="482" cy="945" rx="33" ry="10" fill="url(#japan-shade)" opacity="0.36"/>
<ellipse cx="482" cy="945" rx="18" ry="4.75" fill="url(#japan-shade)" opacity="0.68"/>
<g transform="translate(458 908)"><ellipse cx="25" cy="38" rx="25" ry="5" fill="#e0cdb0"/><path d="M2 11 C2 29 12 38 25 38 C38 38 48 29 48 11 Z" fill="url(#japan-ceramic)"/><path d="M33 12 C33 29 30 38 25 38 C38 38 48 29 48 11 Z" fill="#bda286" opacity="0.45"/><ellipse cx="25" cy="11" rx="23" ry="6" fill="#efe0c6"/><ellipse cx="25" cy="11" rx="18" ry="4.4" fill="url(#japan-tealS)"/></g>
<ellipse cx="379" cy="1029" rx="36.83" ry="11.16" fill="url(#japan-shade)" opacity="0.32"/>
<ellipse cx="379" cy="1029" rx="20.09" ry="5.3" fill="url(#japan-shade)" opacity="0.6"/>
<path d="M348 988 L410 988 L406 1030 L352 1030 Z" fill="url(#japan-woodd)"/>
<path d="M348 988 L410 988 L409 996 L349 996 Z" fill="#e6bb87" opacity="0.55"/>
<ellipse cx="449" cy="1029" rx="34.45" ry="10.44" fill="url(#japan-shade)" opacity="0.32"/>
<ellipse cx="449" cy="1029" rx="18.79" ry="4.96" fill="url(#japan-shade)" opacity="0.6"/>
<path d="M420 987 L478 987 L474 1030 L424 1030 Z" fill="url(#japan-woodl)"/>
<path d="M420 987 L478 987 L477 995 L421 995 Z" fill="#e6bb87" opacity="0.55"/>
<ellipse cx="516" cy="1029" rx="35.64" ry="10.8" fill="url(#japan-shade)" opacity="0.32"/>
<ellipse cx="516" cy="1029" rx="19.44" ry="5.13" fill="url(#japan-shade)" opacity="0.6"/>
<path d="M486 986 L546 986 L542 1030 L490 1030 Z" fill="url(#japan-woodd)"/>
<path d="M486 986 L546 986 L545 994 L487 994 Z" fill="#e6bb87" opacity="0.55"/>
<ellipse cx="716" cy="1104" rx="96" ry="16" fill="url(#japan-shade)" opacity="0.55"/>
<rect x="640" y="936" width="150" height="160" rx="10" fill="url(#japan-teal)"/>
<rect x="640" y="936" width="32" height="160" rx="10" fill="#9dcad6" opacity="0.45"/>
<rect x="766" y="936" width="24" height="160" fill="#173741" opacity="0.5"/>
<rect x="640" y="978" width="150" height="9" fill="#20434c" opacity="0.7"/>
<rect x="640" y="1042" width="150" height="9" fill="#20434c" opacity="0.7"/>
<ellipse cx="715" cy="936" rx="75" ry="18" fill="url(#japan-tealS)"/>
<ellipse cx="715" cy="934" rx="61" ry="13" fill="#31555f"/>
<ellipse cx="709" cy="931" rx="30" ry="6" fill="#7fa8b6" opacity="0.4"/>
<ellipse cx="715" cy="1096" rx="75" ry="15" fill="#173741" opacity="0.7"/>
<ellipse cx="676" cy="934" rx="30.36" ry="9.2" fill="url(#japan-shade)" opacity="0.34"/>
<ellipse cx="676" cy="934" rx="16.56" ry="4.37" fill="url(#japan-shade)" opacity="0.64"/>
<g transform="translate(654 892)"><path d="M8 42 C0 26 10 12 24 10 C19 0 32 -6 42 2 C52 -4 62 6 57 16 C69 22 68 42 54 48 Z" fill="url(#japan-greenS)"/><path d="M24 10 C34 5 48 8 56 20 C44 11 32 8 24 10 Z" fill="#c2e59a" opacity="0.85"/><path d="M8 42 L54 48 L50 56 L12 52 Z" fill="url(#japan-woodl)"/></g>
<ellipse cx="744" cy="934" rx="33" ry="10" fill="url(#japan-shade)" opacity="0.34"/>
<ellipse cx="744" cy="934" rx="18" ry="4.75" fill="url(#japan-shade)" opacity="0.64"/>
<g transform="translate(720 896)"><ellipse cx="25" cy="38" rx="25" ry="5" fill="#e0cdb0"/><path d="M2 11 C2 29 12 38 25 38 C38 38 48 29 48 11 Z" fill="url(#japan-ceramic)"/><path d="M33 12 C33 29 30 38 25 38 C38 38 48 29 48 11 Z" fill="#bda286" opacity="0.45"/><ellipse cx="25" cy="11" rx="23" ry="6" fill="#efe0c6"/><ellipse cx="25" cy="11" rx="18" ry="4.4" fill="url(#japan-greenS)"/></g>
<ellipse cx="370" cy="1196" rx="84" ry="12" fill="url(#japan-shade)" opacity="0.55"/>
<path d="M296 1088 L438 1080 L446 1200 L290 1200 Z" fill="url(#japan-woodd)"/>
<path d="M296 1088 L438 1080 L438 1090 L296 1098 Z" fill="#c08b5d" opacity="0.7"/>
<path d="M306 1098 L430 1091 L436 1194 L302 1194 Z" fill="url(#japan-charcoal)"/>
<path d="M306 1098 L358 1095 L312 1194 L302 1194 Z" fill="#6d605c" opacity="0.22"/>
<path d="M320 1118 L412 1114" stroke="#f6ecd8" stroke-width="5" fill="none" opacity="0.85" stroke-linecap="round"/>
<path d="M320 1136 L396 1132" stroke="#f6ecd8" stroke-width="5" fill="none" opacity="0.62" stroke-linecap="round"/>
<path d="M320 1154 L416 1150" stroke="#f0a35d" stroke-width="5" fill="none" opacity="0.8" stroke-linecap="round"/>
<path d="M320 1172 L370 1169" stroke="#f6ecd8" stroke-width="5" fill="none" opacity="0.5" stroke-linecap="round"/>
<g data-obj="purple-heart" transform="translate(366 1130) scale(0.72)"><path d="M30 58.5 C7.9 42.7 0 29.2 0 18.2 C0 7.1 9.5 0 17.4 0 C23.7 0 28.4 4 30 8.7 C31.6 4 36.3 0 42.7 0 C50.6 0 60 7.1 60 18.2 C60 29.2 52.1 42.7 30 58.5 Z" fill="url(#japan-purpS)"/><path d="M30 58.5 C45.8 47.4 53.7 34.8 55.3 23.7 C56.9 12.6 52.1 4.7 44.2 1.6 C50.6 0 60 7.1 60 18.2 C60 29.2 52.1 42.7 30 58.5 Z" fill="#3f2178" opacity="0.55"/><path d="M17.4 3.2 C10.3 3.2 4 9.5 4 18.2 C4 25.3 7.1 33.2 14.2 41.9 C7.9 31.6 6.3 23.7 7.9 17.4 C9.5 9.5 13.4 4.7 17.4 3.2 Z" fill="#d3bcff" opacity="0.8"/><ellipse cx="15.8" cy="14.2" rx="5.2" ry="3.4" fill="#f0e8ff" opacity="0.85" transform="rotate(-35 15.8 14.2)"/></g>
<ellipse cx="568" cy="1184" rx="132" ry="14" fill="url(#japan-shade)" opacity="0.5"/>
<rect x="462" y="1128" width="14" height="50" fill="url(#japan-woodd)"/>
<rect x="662" y="1128" width="14" height="50" fill="url(#japan-woodd)"/>
<rect x="470" y="1148" width="200" height="8" fill="url(#japan-woodd)"/>
<rect x="446" y="1112" width="244" height="16" fill="url(#japan-woodl)"/>
<rect x="446" y="1112" width="244" height="5.12" fill="#f6dcb4" opacity="0.72"/>
<rect x="446" y="1125" width="244" height="3" fill="#4d301f" opacity="0.55"/>
<rect x="446" y="1126" width="244" height="5" fill="#3f2717" opacity="0.4"/>
<ellipse cx="489" cy="1111" rx="33" ry="10" fill="url(#japan-shade)" opacity="0.4"/>
<ellipse cx="489" cy="1111" rx="18" ry="4.75" fill="url(#japan-shade)" opacity="0.76"/>
<g data-obj="coin-purse" transform="translate(466 1071) scale(0.8)"><rect x="25" y="0" width="9" height="7" rx="3.5" fill="#7a6350"/><path d="M5 16 C5 7 15 3 29 3 C43 3 53 7 53 16 L57 40 C57 45 53 47 47 47 L11 47 C5 47 1 45 1 40 Z" fill="url(#japan-teal)"/><path d="M29 3 C43 3 53 7 53 16 L57 40 C57 45 53 47 47 47 L35 47 C43 42 45 23 41 13 C39 7 35 4 29 3 Z" fill="#173741" opacity="0.55"/><path d="M8 18 C10 28 8 38 9 44" stroke="#a8d2dc" stroke-width="3.5" fill="none" opacity="0.5" stroke-linecap="round"/><path d="M7 15 C15 9 43 9 51 15" stroke="#8cbcc9" stroke-width="3" fill="none"/><circle cx="28" cy="28" r="7.5" fill="url(#japan-goldS)"/></g>
<ellipse cx="562" cy="1111" rx="35.64" ry="10.8" fill="url(#japan-shade)" opacity="0.4"/>
<ellipse cx="562" cy="1111" rx="19.44" ry="5.13" fill="url(#japan-shade)" opacity="0.76"/>
<g data-obj="takeout-box" transform="translate(536 1066) scale(0.86)"><path d="M7 15 L54 15 L48 52 L13 52 Z" fill="url(#japan-paper)"/><path d="M39 15 L54 15 L48 52 L37 52 Z" fill="#c9b291" opacity="0.55"/><path d="M7 15 L20 15 L15 52 L13 52 Z" fill="#fffdf6" opacity="0.6"/><path d="M0 6 L60 6 L54 17 L6 17 Z" fill="url(#japan-red)"/><path d="M0 6 L60 6 L58 11 L2 11 Z" fill="#ff9c81" opacity="0.55"/><path d="M46 6 L60 6 L54 17 L44 17 Z" fill="#7d2210" opacity="0.4"/><path d="M20 28 L42 28" stroke="#8a5a3b" stroke-width="2.6" fill="none" stroke-linecap="round"/><path d="M20 36 L35 36" stroke="#8a5a3b" stroke-width="2.4" fill="none" stroke-linecap="round"/><path d="M28 0 C34 4 34 10 30 14" stroke="#a67c52" stroke-width="2.4" fill="none"/></g>
<ellipse cx="630" cy="1111" rx="33" ry="10" fill="url(#japan-shade)" opacity="0.4"/>
<ellipse cx="630" cy="1111" rx="18" ry="4.75" fill="url(#japan-shade)" opacity="0.76"/>
<g data-obj="paper-fan" transform="translate(606 1068) scale(0.92)"><path d="M26 46 C6 37 0 19 2 4 L50 4 C52 19 46 37 26 46 Z" fill="url(#japan-paper)"/><path d="M26 46 C35 41 44 30 48 15 L50 4 L27 4 Z" fill="#cdb894" opacity="0.55"/><path d="M2 4 L26 4 C25 16 22 28 16 36 C7 27 2 15 2 4 Z" fill="#fffdf6" opacity="0.5"/><path d="M26 46 L14 6" stroke="#c2432f" stroke-width="1.8" fill="none"/><path d="M26 46 L26 4" stroke="#c2432f" stroke-width="1.8" fill="none"/><path d="M26 46 L38 6" stroke="#c2432f" stroke-width="1.8" fill="none"/><path d="M2 4 L50 4 L50 9 L2 9 Z" fill="#a67c52" opacity="0.55"/><circle cx="26" cy="45" r="4.5" fill="url(#japan-woodd)"/></g>
<ellipse cx="674" cy="1111" rx="22.44" ry="6.8" fill="url(#japan-shade)" opacity="0.36"/>
<ellipse cx="674" cy="1111" rx="12.24" ry="3.23" fill="url(#japan-shade)" opacity="0.68"/>
<path d="M658 1096 L692 1094 L694 1110 L656 1112 Z" fill="url(#japan-red)"/>
<path d="M658 1096 L692 1094 L693 1100 L658 1102 Z" fill="#ff9c81" opacity="0.5"/>
<ellipse cx="520" cy="1182" rx="40.92" ry="12.4" fill="url(#japan-shade)" opacity="0.38"/>
<ellipse cx="520" cy="1182" rx="22.32" ry="5.89" fill="url(#japan-shade)" opacity="0.72"/>
<g data-obj="geta-sandal" transform="translate(486 1140) scale(0.62)"><path d="M24 42 L44 39 L47 62 L27 65 Z" fill="url(#japan-woodd)"/><path d="M70 35 L90 32 L93 54 L73 57 Z" fill="url(#japan-woodd)"/><path d="M6 40 C6 28 18 20 34 18 L80 14 C94 13 102 20 102 30 L100 44 C99 54 88 60 72 62 L28 66 C14 67 6 60 6 50 Z" fill="#6d4630"/><path d="M6 34 C6 22 18 14 34 12 L80 8 C94 7 102 14 102 24 L100 38 C99 48 88 54 72 56 L28 60 C14 61 6 54 6 44 Z" fill="url(#japan-woodl)"/><path d="M6 32 C7 22 18 14 34 12 L80 8 C92 7 99 13 101 20 C92 14 82 13 70 14 L34 17 C20 19 9 25 6 32 Z" fill="#f3d5ac" opacity="0.7"/><path d="M14 46 C34 42 62 38 96 36" stroke="#a07850" stroke-width="2" fill="none" opacity="0.7"/><path d="M28 34 C46 23 66 18 90 16" stroke="#3b2f3a" stroke-width="8" fill="none" stroke-linecap="round"/><path d="M28 34 C46 39 66 41 92 41" stroke="#3b2f3a" stroke-width="8" fill="none" stroke-linecap="round"/><path d="M31 32 C44 26 58 22 72 20" stroke="#8a76a0" stroke-width="2.5" fill="none" stroke-linecap="round"/><circle cx="28" cy="34" r="7" fill="#2e242f"/><circle cx="26" cy="32" r="2.5" fill="#8d7a95"/></g>
<ellipse cx="182" cy="1110" rx="46" ry="16" fill="#2c231d" opacity="0.45"/>
<g data-obj="manhole" transform="translate(146 1096) scale(0.72)"><ellipse cx="50" cy="20" rx="50" ry="16" fill="url(#japan-metald)"/><ellipse cx="50" cy="15" rx="45" ry="14" fill="url(#japan-metal)"/><ellipse cx="50" cy="14" rx="38" ry="11" fill="#8b9998"/><ellipse cx="50" cy="13" rx="24" ry="7" fill="#6f7d7a"/><path d="M14 10 C24 4 76 4 86 10" stroke="#e6eeed" stroke-width="3" fill="none" opacity="0.55"/><path d="M26 20 L74 20" stroke="#59665f" stroke-width="3" fill="none" opacity="0.6"/></g>
<ellipse cx="258" cy="1186" rx="26" ry="5" fill="url(#japan-shade)" opacity="0.45"/>
<g data-obj="fallen-leaf" transform="translate(238 1146)"><path d="M2 36 C6 15 23 2 46 0 C44 23 27 38 6 40 Z" fill="url(#japan-glasswarm)"/><path d="M6 40 C21 32 36 19 46 0 C44 23 27 38 6 40 Z" fill="#b95a2f" opacity="0.5"/><path d="M4 38 L42 4" stroke="#8a5a3b" stroke-width="2" fill="none"/><path d="M16 23 L23 12" stroke="#8a5a3b" stroke-width="1.5" fill="none"/><path d="M27 21 L34 10" stroke="#8a5a3b" stroke-width="1.5" fill="none"/></g>
<ellipse cx="64" cy="1198" rx="76" ry="12" fill="url(#japan-shade)" opacity="0.5"/>
<path d="M0 1188 C-4 1122 10 1076 32 1062 C24 1044 36 1028 52 1032 C58 1016 82 1016 88 1032 C106 1030 116 1048 106 1062 C124 1076 128 1128 120 1188 Z" fill="url(#japan-greenS)"/>
<path d="M32 1062 C48 1050 78 1050 106 1062 C80 1054 52 1054 32 1062 Z" fill="#c2e59a" opacity="0.8"/>
<path d="M52 1032 C64 1042 76 1058 84 1074" stroke="#8fbf6a" stroke-width="5" fill="none" opacity="0.6"/>
<path d="M16 1082 C30 1092 46 1098 64 1100" stroke="#2d5522" stroke-width="5" fill="none" opacity="0.6"/>
<rect x="0" y="1112" width="130" height="88" fill="url(#japan-red)"/>
<rect x="0" y="1112" width="130" height="15" fill="#ff9c81" opacity="0.5"/>
<rect x="100" y="1112" width="30" height="88" fill="#7d2210" opacity="0.45"/>
<path d="M18 1152 L108 1152" stroke="#ffeecb" stroke-width="5" fill="none" opacity="0.5" stroke-linecap="round"/>
<path d="M706 1200 C698 1150 706 1112 726 1104 C718 1090 730 1076 746 1080 C754 1064 778 1066 782 1082 C800 1084 806 1102 794 1112 C810 1126 812 1166 804 1200 Z" fill="url(#japan-greenS)"/>
<path d="M726 1104 C746 1094 776 1096 794 1112 C772 1102 746 1100 726 1104 Z" fill="#c2e59a" opacity="0.8"/>
<path d="M746 1080 C758 1092 768 1110 774 1128" stroke="#8fbf6a" stroke-width="5" fill="none" opacity="0.6"/>
<circle cx="738" cy="1094" r="7" fill="url(#japan-goldS)"/>
<circle cx="782" cy="1102" r="6" fill="url(#japan-redS)"/>
<ellipse cx="470" cy="246" rx="8" ry="4.6" fill="#ffc4dc" opacity="0.72" transform="rotate(24 470 246)"/>
<ellipse cx="538" cy="424" rx="8" ry="4.6" fill="#ffc4dc" opacity="0.72" transform="rotate(-18 538 424)"/>
<ellipse cx="612" cy="470" rx="8" ry="4.6" fill="#ffc4dc" opacity="0.72" transform="rotate(42 612 470)"/>
<ellipse cx="700" cy="492" rx="8" ry="4.6" fill="#ffc4dc" opacity="0.72" transform="rotate(-34 700 492)"/>
<ellipse cx="446" cy="372" rx="8" ry="4.6" fill="#ffc4dc" opacity="0.72" transform="rotate(-46 446 372)"/>
<ellipse cx="262" cy="1096" rx="8" ry="4.6" fill="#ffc4dc" opacity="0.72" transform="rotate(52 262 1096)"/>
<ellipse cx="92" cy="1058" rx="8" ry="4.6" fill="#ffc4dc" opacity="0.72" transform="rotate(24 92 1058)"/>
<ellipse cx="618" cy="1064" rx="8" ry="4.6" fill="#ffc4dc" opacity="0.72" transform="rotate(-46 618 1064)"/>
<ellipse cx="352" cy="1006" rx="8" ry="4.6" fill="#ffc4dc" opacity="0.72" transform="rotate(-22 352 1006)"/>
</svg>`
});
