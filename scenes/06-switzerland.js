window.SCENES = window.SCENES || [];
window.SCENES.push({
  id: 'switzerland',
  order: 6,
  country: 'Switzerland',
  flag: '🇨🇭',
  title: 'Alpine Morning',
  caption: 'Mountain air and chocolate.',
  stamp: '🏔️',
  objects: [
    { id: 'lightstick',    name: 'Lightstick' },
    { id: 'purple-heart',  name: 'Purple Heart' },
    { id: 'cowbell',       name: 'Cowbell' },
    { id: 'teapot',        name: 'Teapot' },
    { id: 'cable-car',     name: 'Cable Car' },
    { id: 'round-window',  name: 'RoundWindow' },
    { id: 'sheep',         name: 'Sheep' },
    { id: 'milk-churn',    name: 'Milk Churn' },
    { id: 'carrots',       name: 'Carrots' },
    { id: 'red-poppy',     name: 'Red Poppy' },
    { id: 'chocolate-bar', name: 'Chocolate' },
    { id: 'paraglider',    name: 'Paraglider' },
    { id: 'chimney',       name: 'Chimney' },
    { id: 'axe',           name: 'Axe' },
    { id: 'goat',          name: 'Goat' },
    { id: 'mushroom',      name: 'Mushroom' },
    { id: 'cheese-wheel',  name: 'Cheese' },
    { id: 'hung-shirt',    name: 'Hung Shirt' },
    { id: 'summit-cross',  name: 'SummitCross' },
    { id: 'birdhouse',     name: 'Birdhouse' },
    { id: 'duck',          name: 'Duck' },
    { id: 'jam-jar',       name: 'Jam Jar' },
    { id: 'thistle',       name: 'Thistle' },
    { id: 'milk-bottle',   name: 'Milk Bottle' },
    { id: 'alphorn',       name: 'Alphorn' },
    { id: 'ibex',          name: 'Ibex' },
    { id: 'butterfly',     name: 'Butterfly' },
    { id: 'chalet-door',   name: 'Chalet Door' },
    { id: 'wood-bench',    name: 'Wood Bench' },
    { id: 'rooster',       name: 'Rooster' },
    { id: 'sunflower',     name: 'Sunflower' },
    { id: 'snail',         name: 'Snail' },
    { id: 'grapes',        name: 'Grapes' },
    { id: 'edelweiss',     name: 'Edelweiss' },
    { id: 'hot-balloon',   name: 'Hot Balloon' },
    { id: 'weather-vane',  name: 'WeatherVane' },
    { id: 'watering-can',  name: 'WateringCan' },
    { id: 'sheepdog',      name: 'Sheepdog' },
    { id: 'ladybug',       name: 'Ladybug' },
    { id: 'pinecone',      name: 'Pinecone' },
    { id: 'stone-cairn',   name: 'Stone Cairn' },
    { id: 'swiss-knife',   name: 'PocketKnife' },
    { id: 'lone-pine',     name: 'Lone Pine' },
    { id: 'horseshoe',     name: 'Horseshoe' },
    { id: 'wheelbarrow',   name: 'Wheelbarrow' },
    { id: 'marmot',        name: 'Marmot' },
    { id: 'berry-plate',   name: 'Berry Plate' },
    { id: 'cat',           name: 'Cat' },
    { id: 'blue-gentian',  name: 'BlueGentian' },
    { id: 'sun',           name: 'Sun' }
  ],
  svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 1200">
<defs>
  <linearGradient id="swiss-sky" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#6cb4e4"/><stop offset="0.38" stop-color="#9fd2ef"/>
    <stop offset="0.74" stop-color="#d2eaf8"/><stop offset="1" stop-color="#ecf6fc"/>
  </linearGradient>
  <radialGradient id="swiss-sunglow" cx="0.5" cy="0.5" r="0.5">
    <stop offset="0" stop-color="#fff6d8" stop-opacity="0.95"/>
    <stop offset="0.55" stop-color="#fff2c8" stop-opacity="0.38"/>
    <stop offset="1" stop-color="#fff2c8" stop-opacity="0"/>
  </radialGradient>
  <radialGradient id="swiss-sunface" cx="0.38" cy="0.3" r="0.75">
    <stop offset="0" stop-color="#ffffff"/><stop offset="0.6" stop-color="#fff6d0"/><stop offset="1" stop-color="#ffdf8c"/>
  </radialGradient>
  <linearGradient id="swiss-cloud" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#ffffff"/><stop offset="1" stop-color="#d5e6f3"/>
  </linearGradient>
  <linearGradient id="swiss-haze" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#cfe4f3" stop-opacity="0"/>
    <stop offset="0.3" stop-color="#cfe4f3" stop-opacity="0.26"/>
    <stop offset="0.72" stop-color="#d8ebf7" stop-opacity="0.5"/>
    <stop offset="0.92" stop-color="#e4f1fa" stop-opacity="0.18"/>
    <stop offset="1" stop-color="#e4f1fa" stop-opacity="0"/>
  </linearGradient>
  <linearGradient id="swiss-far" x1="1" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#c6d6e7"/><stop offset="1" stop-color="#9db4cd"/>
  </linearGradient>
  <linearGradient id="swiss-farsnow" x1="1" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#f6fafd"/><stop offset="1" stop-color="#d3e2f0"/>
  </linearGradient>
  <linearGradient id="swiss-rocklit" x1="1" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#aec0d2"/><stop offset="1" stop-color="#8093ab"/>
  </linearGradient>
  <linearGradient id="swiss-rockdark" x1="1" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#6d8299"/><stop offset="1" stop-color="#465569"/>
  </linearGradient>
  <linearGradient id="swiss-snow" x1="1" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#e9f2fb"/><stop offset="1" stop-color="#bad0e6"/>
  </linearGradient>
  <linearGradient id="swiss-snowlit" x1="1" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#ffffff"/><stop offset="1" stop-color="#e2eefa"/>
  </linearGradient>
  <linearGradient id="swiss-treeband" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#548a73"/><stop offset="1" stop-color="#2c5c4c"/>
  </linearGradient>
  <linearGradient id="swiss-conifer" x1="1" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#478471"/><stop offset="1" stop-color="#1e4839"/>
  </linearGradient>
  <linearGradient id="swiss-meadow" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#9ed673"/><stop offset="1" stop-color="#69a949"/>
  </linearGradient>
  <linearGradient id="swiss-meadow2" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#86ca60"/><stop offset="1" stop-color="#5d9b40"/>
  </linearGradient>
  <linearGradient id="swiss-meadow3" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#74b853"/><stop offset="1" stop-color="#4d8836"/>
  </linearGradient>
  <linearGradient id="swiss-meadow4" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#64a647"/><stop offset="1" stop-color="#41782e"/>
  </linearGradient>
  <linearGradient id="swiss-path" x1="1" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#d8c193"/><stop offset="1" stop-color="#a98d61"/>
  </linearGradient>
  <radialGradient id="swiss-shadow" cx="0.5" cy="0.5" r="0.5">
    <stop offset="0" stop-color="#24501e" stop-opacity="0.44"/>
    <stop offset="0.55" stop-color="#24501e" stop-opacity="0.22"/>
    <stop offset="1" stop-color="#24501e" stop-opacity="0"/>
  </radialGradient>
  <radialGradient id="swiss-shadow-w" cx="0.5" cy="0.5" r="0.5">
    <stop offset="0" stop-color="#48290f" stop-opacity="0.46"/>
    <stop offset="0.55" stop-color="#48290f" stop-opacity="0.2"/>
    <stop offset="1" stop-color="#48290f" stop-opacity="0"/>
  </radialGradient>
  <linearGradient id="swiss-wood" x1="1" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#dba565"/><stop offset="1" stop-color="#94612f"/>
  </linearGradient>
  <linearGradient id="swiss-wood-d" x1="1" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#a5713a"/><stop offset="1" stop-color="#603d1e"/>
  </linearGradient>
  <linearGradient id="swiss-wood-l" x1="1" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#f0c88e"/><stop offset="1" stop-color="#b7803f"/>
  </linearGradient>
  <linearGradient id="swiss-plank" x1="1" y1="0" x2="0" y2="0.35">
    <stop offset="0" stop-color="#d8a163"/><stop offset="0.55" stop-color="#b87a45"/><stop offset="1" stop-color="#8d5a2e"/>
  </linearGradient>
  <linearGradient id="swiss-roof" x1="1" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#f4bf80"/><stop offset="1" stop-color="#b9763b"/>
  </linearGradient>
  <linearGradient id="swiss-shelfback" x1="1" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#8a5b34"/><stop offset="1" stop-color="#5a3719"/>
  </linearGradient>
  <linearGradient id="swiss-metal" x1="1" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#e7eef4"/><stop offset="0.5" stop-color="#b3c0cc"/><stop offset="1" stop-color="#7b8c9b"/>
  </linearGradient>
  <linearGradient id="swiss-metal-d" x1="1" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#bfc9d3"/><stop offset="1" stop-color="#616f80"/>
  </linearGradient>
  <linearGradient id="swiss-white" x1="1" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#ffffff"/><stop offset="0.5" stop-color="#f1f7fb"/><stop offset="1" stop-color="#c4d5e2"/>
  </linearGradient>
  <linearGradient id="swiss-brass" x1="1" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#f9e29c"/><stop offset="0.5" stop-color="#dfa93a"/><stop offset="1" stop-color="#9f6f1c"/>
  </linearGradient>
  <linearGradient id="swiss-red" x1="1" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#f57b62"/><stop offset="0.55" stop-color="#d33c28"/><stop offset="1" stop-color="#962112"/>
  </linearGradient>
  <linearGradient id="swiss-leaf" x1="1" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#92cf62"/><stop offset="1" stop-color="#3c762c"/>
  </linearGradient>
  <linearGradient id="swiss-cow" x1="1" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#ffffff"/><stop offset="0.55" stop-color="#f6f3ec"/><stop offset="1" stop-color="#d2cabc"/>
  </linearGradient>
  <linearGradient id="swiss-hay" x1="1" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#fae3ac"/><stop offset="1" stop-color="#bf8d3b"/>
  </linearGradient>
  <linearGradient id="swiss-choc" x1="1" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#8e6674"/><stop offset="1" stop-color="#3d2932"/>
  </linearGradient>
  <linearGradient id="swiss-cocoa" x1="1" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#7b4c2c"/><stop offset="1" stop-color="#3c2211"/>
  </linearGradient>
  <linearGradient id="swiss-cheese" x1="1" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#fdeaad"/><stop offset="1" stop-color="#c58d2b"/>
  </linearGradient>
  <linearGradient id="swiss-purple" x1="1" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#9280bd"/><stop offset="0.5" stop-color="#5f4f6d"/><stop offset="1" stop-color="#372c42"/>
  </linearGradient>
  <linearGradient id="swiss-grape" x1="1" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#a689fb"/><stop offset="1" stop-color="#432a92"/>
  </linearGradient>
  <linearGradient id="swiss-stone" x1="1" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#dae1e8"/><stop offset="1" stop-color="#7a8998"/>
  </linearGradient>
  <linearGradient id="swiss-orange" x1="1" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#fcc87f"/><stop offset="1" stop-color="#cb7711"/>
  </linearGradient>
  <linearGradient id="swiss-blue" x1="1" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#8ab3e7"/><stop offset="1" stop-color="#2b508e"/>
  </linearGradient>
  <linearGradient id="swiss-glass" x1="1" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#eefaff"/><stop offset="1" stop-color="#96c0da"/>
  </linearGradient>
  <linearGradient id="swiss-fur" x1="1" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#e0bd93"/><stop offset="1" stop-color="#8a5f38"/>
  </linearGradient>
  <linearGradient id="swiss-darkfur" x1="1" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#916f4d"/><stop offset="1" stop-color="#452d1f"/>
  </linearGradient>
  <linearGradient id="swiss-yellow" x1="1" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#fce482"/><stop offset="1" stop-color="#d4a01c"/>
  </linearGradient>
  <linearGradient id="swiss-cream" x1="1" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#fffaf0"/><stop offset="1" stop-color="#d9c7a4"/>
  </linearGradient>
</defs>

<rect x="0" y="0" width="800" height="1200" fill="url(#swiss-sky)"/>
<ellipse cx="652" cy="120" rx="172" ry="150" fill="url(#swiss-sunglow)"/>
<g data-obj="sun">
  <circle cx="652" cy="120" r="36" fill="url(#swiss-sunface)"/>
  <circle cx="652" cy="120" r="25" fill="#fffdf2"/>
  <circle cx="643" cy="110" r="10" fill="#ffffff"/>
</g>
<ellipse cx="150" cy="112" rx="70" ry="21" fill="url(#swiss-cloud)"/>
<ellipse cx="194" cy="100" rx="44" ry="25" fill="url(#swiss-cloud)"/>
<ellipse cx="178" cy="93" rx="30" ry="15" fill="#ffffff" opacity="0.9"/>
<ellipse cx="418" cy="88" rx="54" ry="17" fill="url(#swiss-cloud)"/>
<ellipse cx="436" cy="80" rx="30" ry="13" fill="#ffffff" opacity="0.85"/>
<ellipse cx="706" cy="202" rx="76" ry="16" fill="url(#swiss-cloud)" opacity="0.7"/>
<ellipse cx="318" cy="152" rx="40" ry="12" fill="#ffffff" opacity="0.45"/>

<polygon points="0,400 92,232 178,340 254,242 352,436 0,436" fill="url(#swiss-far)"/>
<polygon points="448,436 550,258 624,344 712,250 800,389 800,436" fill="url(#swiss-far)"/>
<polygon points="92,232 48,318 136,318" fill="url(#swiss-farsnow)"/>
<polygon points="92,232 92,318 136,318" fill="#f4fafe" opacity="0.75"/>
<polygon points="550,258 514,330 590,330" fill="url(#swiss-farsnow)"/>
<polygon points="550,258 550,330 590,330" fill="#f4fafe" opacity="0.75"/>
<polygon points="712,250 670,328 756,328" fill="url(#swiss-farsnow)"/>
<polygon points="712,250 712,328 756,328" fill="#f4fafe" opacity="0.75"/>
<rect x="0" y="272" width="800" height="180" fill="url(#swiss-haze)"/>

<polygon points="0,404 142,176 262,318 374,204 470,330 562,222 702,384 800,432 800,452 0,452" fill="url(#swiss-rockdark)"/>
<polygon points="142,176 262,318 262,452 142,452" fill="url(#swiss-rocklit)"/>
<polygon points="374,204 470,330 470,452 374,452" fill="url(#swiss-rocklit)"/>
<polygon points="562,222 702,384 702,452 562,452" fill="url(#swiss-rocklit)"/>
<polygon points="142,176 86,266 142,266" fill="url(#swiss-snow)"/>
<polygon points="142,176 198,266 142,266" fill="url(#swiss-snowlit)"/>
<path d="M86 266 C 106 258 122 272 142 266 C 162 258 180 272 198 266" fill="none" stroke="#ffffff" stroke-width="3" opacity="0.75"/>
<polygon points="374,204 324,284 374,284" fill="url(#swiss-snow)"/>
<polygon points="374,204 426,284 374,284" fill="url(#swiss-snowlit)"/>
<path d="M324 284 C 342 276 358 290 374 284 C 392 277 410 290 426 284" fill="none" stroke="#ffffff" stroke-width="3" opacity="0.75"/>
<polygon points="562,222 518,294 562,294" fill="url(#swiss-snow)"/>
<polygon points="562,222 608,294 562,294" fill="url(#swiss-snowlit)"/>
<path d="M518 294 C 534 287 548 300 562 294 C 578 287 594 300 608 294" fill="none" stroke="#ffffff" stroke-width="3" opacity="0.75"/>
<path d="M142 176 L262 318" stroke="#ffffff" stroke-width="2" opacity="0.4"/>
<path d="M562 222 L702 384" stroke="#ffffff" stroke-width="2" opacity="0.35"/>

<g data-obj="summit-cross">
  <rect x="369" y="164" width="8" height="42" fill="url(#swiss-wood-d)"/>
  <rect x="354" y="176" width="38" height="8" fill="url(#swiss-wood)"/>
  <rect x="373" y="164" width="3" height="42" fill="#e0ac72"/>
  <rect x="354" y="176" width="38" height="2.5" fill="#f0c88e"/>
</g>
<path d="M196 300 C 214 302 232 308 248 316" fill="none" stroke="#3d4b5c" stroke-width="3" opacity="0.35"/>
<ellipse cx="196" cy="330" rx="30" ry="7" fill="#3d4b5c" opacity="0.3"/>
<g data-obj="ibex">
  <path d="M175 308 C 166 306 166 316 174 316 Z" fill="#4b5c6e"/>
  <rect x="182" y="317" width="5" height="13" fill="#3f4f60"/>
  <rect x="202" y="317" width="5" height="13" fill="#4b5c6e"/>
  <ellipse cx="194" cy="310" rx="19" ry="10" fill="#54677a"/>
  <ellipse cx="196" cy="306" rx="14" ry="5" fill="#7f93a6"/>
  <path d="M210 306 L216 292 L224 294 L218 308 Z" fill="#54677a"/>
  <path d="M218 292 C 212 278 200 278 198 286 C 206 284 212 286 216 294 Z" fill="#3b4a5b"/>
  <path d="M226 294 C 222 280 210 278 208 286 C 216 284 222 286 224 296 Z" fill="#46586a"/>
</g>

<path d="M60 232 L470 300" fill="none" stroke="#42556a" stroke-width="2.5" opacity="0.85"/>
<rect x="54" y="228" width="7" height="46" fill="url(#swiss-metal-d)"/>
<rect x="466" y="296" width="7" height="52" fill="url(#swiss-metal-d)"/>
<g data-obj="cable-car">
  <rect x="316" y="274" width="7" height="16" fill="#42556a"/>
  <rect x="298" y="286" width="44" height="31" rx="7" fill="url(#swiss-red)"/>
  <rect x="298" y="286" width="44" height="9" rx="5" fill="#f4886f" opacity="0.85"/>
  <rect x="304" y="298" width="32" height="13" rx="3" fill="url(#swiss-glass)"/>
  <path d="M306 309 C 310 303 314 300 320 299" fill="none" stroke="#ffffff" stroke-width="2.5" opacity="0.8"/>
  <rect x="318" y="298" width="4" height="13" fill="#8f2415"/>
  <path d="M340 290 L340 313" stroke="#ffb9a4" stroke-width="2.5" opacity="0.8"/>
</g>
<g data-obj="paraglider">
  <path d="M186 148 C 198 126 246 126 258 148 L 248 156 C 238 142 206 142 196 156 Z" fill="url(#swiss-red)"/>
  <path d="M210 134 C 218 130 226 130 234 134 L 232 150 C 226 147 218 147 212 150 Z" fill="#fdf6e6"/>
  <path d="M254 146 C 252 138 244 132 236 130" fill="none" stroke="#ffc4b2" stroke-width="2.5" opacity="0.9"/>
  <path d="M196 156 L222 186 M248 156 L222 186" stroke="#42556a" stroke-width="1.5"/>
  <ellipse cx="222" cy="192" rx="6" ry="8" fill="url(#swiss-blue)"/>
  <circle cx="222" cy="182" r="4" fill="#f3d9d2"/>
</g>
<g data-obj="hot-balloon">
  <path d="M470 130 C 490 130 500 146 494 162 C 490 172 477 178 470 182 C 463 178 450 172 446 162 C 440 146 450 130 470 130 Z" fill="#c67a18"/>
  <path d="M470 130 C 479 130 485 146 483 162 C 481 172 476 178 470 182 C 464 178 459 172 457 162 C 455 146 461 130 470 130 Z" fill="url(#swiss-orange)"/>
  <path d="M470 130 C 474 130 476 146 475 162 C 474 172 472 178 470 182 C 468 178 466 172 465 162 C 464 146 466 130 470 130 Z" fill="url(#swiss-red)"/>
  <path d="M488 140 C 493 147 494 156 492 164" fill="none" stroke="#ffe0ae" stroke-width="2.5" opacity="0.85"/>
  <path d="M461 180 L464 188 M479 180 L476 188" stroke="#7d5227" stroke-width="1.5"/>
  <rect x="461" y="186" width="18" height="12" rx="3" fill="url(#swiss-wood)"/>
</g>
<path d="M566 96 C 574 88 580 88 586 96" fill="none" stroke="#4c5f74" stroke-width="3.5"/>
<path d="M586 96 C 592 88 598 88 606 96" fill="none" stroke="#4c5f74" stroke-width="3.5"/>
<path d="M606 74 C 611 69 615 69 619 74" fill="none" stroke="#4c5f74" stroke-width="3"/>

<path d="M0 470 C 90 424 190 452 280 428 C 380 402 470 448 570 424 C 660 402 740 440 800 424 L800 524 L0 524 Z" fill="url(#swiss-treeband)"/>
<polygon points="40,482 20,428 60,428" fill="url(#swiss-conifer)"/>
<polygon points="40,482 60,428 40,428" fill="#3f7a5f" opacity="0.6"/>
<polygon points="132,486 112,432 152,432" fill="url(#swiss-conifer)"/>
<polygon points="132,486 152,432 132,432" fill="#3f7a5f" opacity="0.6"/>
<polygon points="228,478 204,412 252,412" fill="url(#swiss-conifer)"/>
<polygon points="228,478 252,412 228,412" fill="#3f7a5f" opacity="0.6"/>
<polygon points="330,484 308,424 352,424" fill="url(#swiss-conifer)"/>
<polygon points="330,484 352,424 330,424" fill="#3f7a5f" opacity="0.6"/>
<polygon points="424,486 404,432 444,432" fill="url(#swiss-conifer)"/>
<polygon points="424,486 444,432 424,432" fill="#3f7a5f" opacity="0.6"/>
<polygon points="520,480 498,418 542,418" fill="url(#swiss-conifer)"/>
<polygon points="520,480 542,418 520,418" fill="#3f7a5f" opacity="0.6"/>
<polygon points="622,478 600,414 644,414" fill="url(#swiss-conifer)"/>
<polygon points="622,478 644,414 622,414" fill="#3f7a5f" opacity="0.6"/>
<polygon points="726,484 704,424 748,424" fill="url(#swiss-conifer)"/>
<polygon points="726,484 748,424 726,424" fill="#3f7a5f" opacity="0.6"/>

<path d="M0 496 C 120 462 240 500 380 480 C 520 460 640 498 800 470 L800 1200 L0 1200 Z" fill="url(#swiss-meadow)"/>
<path d="M0 826 C 170 800 330 842 500 820 C 640 802 730 836 800 818 L800 900 L0 900 Z" fill="url(#swiss-meadow2)" opacity="0.8"/>
<path d="M0 962 C 180 936 340 976 520 954 C 660 936 740 968 800 950 L800 1200 L0 1200 Z" fill="url(#swiss-meadow3)"/>
<path d="M0 1092 C 190 1064 350 1102 540 1080 C 670 1064 750 1092 800 1078 L800 1200 L0 1200 Z" fill="url(#swiss-meadow4)"/>

<ellipse cx="72" cy="574" rx="56" ry="16" fill="url(#swiss-shadow)"/>
<ellipse cx="90" cy="570" rx="26" ry="7" fill="#24501e" opacity="0.26"/>
<g data-obj="lone-pine">
  <polygon points="96,558 70,516 122,516" fill="#2c5c4a"/>
  <polygon points="96,558 122,516 96,516" fill="url(#swiss-conifer)"/>
  <polygon points="96,532 76,500 116,500" fill="#33684f"/>
  <polygon points="96,532 116,500 96,500" fill="#4c8b6e"/>
  <rect x="92" y="552" width="9" height="16" fill="url(#swiss-wood-d)"/>
</g>
<polygon points="740,548 720,506 760,506" fill="#2c5c4a"/>
<polygon points="740,548 760,506 740,506" fill="url(#swiss-conifer)"/>
<rect x="737" y="544" width="7" height="16" fill="#6d4425"/>
<ellipse cx="694" cy="528" rx="26" ry="22" fill="#347053"/>
<ellipse cx="700" cy="520" rx="18" ry="13" fill="#4c8b6e"/>
<rect x="691" y="546" width="7" height="16" fill="#6d4425"/>

<ellipse cx="504" cy="716" rx="248" ry="30" fill="url(#swiss-shadow)"/>
<ellipse cx="540" cy="710" rx="190" ry="14" fill="#24501e" opacity="0.26"/>
<polygon points="550,396 320,514 336,536 550,424" fill="#7a5232"/>
<polygon points="550,396 780,514 764,536 550,424" fill="url(#swiss-roof)"/>
<polygon points="550,396 320,514 550,412" fill="#8f6440"/>
<polygon points="550,396 780,514 550,412" fill="#e6ac6c"/>
<rect x="540" y="390" width="20" height="16" rx="4" fill="#5b3d27"/>
<polygon points="550,418 352,522 748,522" fill="url(#swiss-wood-l)"/>
<path d="M470 464 L630 464 M418 492 L682 492" stroke="#a5713a" stroke-width="2.5" opacity="0.55"/>
<polygon points="550,418 352,522 460,522" fill="#8c5a2c" opacity="0.35"/>
<g data-obj="round-window">
  <circle cx="550" cy="464" r="22" fill="#7f4f2b"/>
  <circle cx="550" cy="464" r="16" fill="url(#swiss-glass)"/>
  <path d="M541 454 C 547 458 552 463 556 471" stroke="#f4fbff" stroke-width="4" fill="none"/>
  <path d="M534 464 L566 464 M550 448 L550 480" stroke="#8a5730" stroke-width="4"/>
  <path d="M550 442 C 562 442 572 452 572 464" fill="none" stroke="#f0c88e" stroke-width="2.5" opacity="0.9"/>
</g>
<g data-obj="chimney">
  <rect x="662" y="424" width="32" height="52" fill="#95908a"/>
  <rect x="678" y="424" width="16" height="52" fill="#bfb7ae"/>
  <rect x="662" y="446" width="32" height="4" fill="#7f7972" opacity="0.7"/>
  <rect x="662" y="460" width="32" height="4" fill="#7f7972" opacity="0.7"/>
  <rect x="656" y="416" width="44" height="11" rx="3" fill="#87817a"/>
  <rect x="678" y="416" width="22" height="11" rx="3" fill="#b1a9a0"/>
  <rect x="660" y="409" width="36" height="8" rx="3" fill="#a8a099"/>
</g>
<ellipse cx="672" cy="518" rx="20" ry="7" fill="#8c5a2c" opacity="0.35"/>
<g data-obj="weather-vane">
  <rect x="548" y="350" width="5" height="42" fill="#4c5f74"/>
  <rect x="534" y="366" width="34" height="4" fill="#5e7285"/>
  <path d="M534 368 L526 364 L526 372 Z" fill="#4c5f74"/>
  <path d="M556 348 C 566 344 573 350 567 357 C 571 359 569 366 562 363 L556 357 Z" fill="#3a3330"/>
  <path d="M562 349 C 566 349 568 352 567 355" fill="none" stroke="#9aa6b2" stroke-width="2"/>
  <path d="M556 357 L548 364 L556 364 Z" fill="#3a3330"/>
</g>

<rect x="372" y="522" width="356" height="170" fill="url(#swiss-plank)"/>
<rect x="372" y="522" width="356" height="12" fill="#7a4d24" opacity="0.55"/>
<path d="M372 566 L728 566 M372 610 L728 610 M372 654 L728 654" stroke="#8f5c2f" stroke-width="2.5" opacity="0.5"/>
<rect x="372" y="522" width="24" height="170" fill="#6f4620" opacity="0.32"/>
<rect x="362" y="688" width="376" height="24" rx="4" fill="url(#swiss-stone)"/>
<rect x="362" y="688" width="376" height="7" rx="4" fill="#e2e9ef"/>

<g data-obj="chalet-door">
  <rect x="522" y="614" width="52" height="74" rx="3" fill="#6d431f"/>
  <rect x="527" y="619" width="43" height="69" fill="#9a5f33"/>
  <rect x="556" y="619" width="14" height="69" fill="#bb7f47"/>
  <rect x="534" y="626" width="28" height="26" rx="3" fill="url(#swiss-glass)"/>
  <path d="M537 648 C 541 641 545 636 551 633" fill="none" stroke="#ffffff" stroke-width="2.5" opacity="0.8"/>
  <path d="M548 626 L548 652 M534 639 L562 639" stroke="#6d431f" stroke-width="3"/>
  <circle cx="564" cy="666" r="4" fill="#e8c98a"/>
</g>
<rect x="396" y="636" width="58" height="46" rx="3" fill="#f7ecd8"/>
<rect x="402" y="642" width="46" height="33" fill="url(#swiss-glass)"/>
<path d="M406 668 C 411 660 416 653 423 647" stroke="#ffffff" stroke-width="4" fill="none"/>
<path d="M425 642 L425 675 M402 658 L448 658" stroke="#fdf6e6" stroke-width="4"/>
<rect x="396" y="676" width="58" height="6" rx="2" fill="#dcc9a4"/>
<rect x="646" y="636" width="58" height="46" rx="3" fill="#f7ecd8"/>
<rect x="652" y="642" width="46" height="33" fill="url(#swiss-glass)"/>
<path d="M675 642 L675 675 M652 658 L698 658" stroke="#f6e7c9" stroke-width="4"/>
<rect x="636" y="634" width="12" height="50" rx="2" fill="#b02f1d"/>
<rect x="702" y="634" width="12" height="50" rx="2" fill="url(#swiss-red)"/>

<rect x="356" y="570" width="388" height="16" rx="3" fill="url(#swiss-wood)"/>
<rect x="356" y="584" width="388" height="10" rx="3" fill="#6f4620"/>
<rect x="362" y="494" width="376" height="78" rx="4" fill="#8a5730"/>
<rect x="362" y="494" width="376" height="12" rx="4" fill="url(#swiss-wood)"/>
<rect x="378" y="512" width="10" height="52" rx="3" fill="#6d4425"/>
<rect x="384" y="512" width="4" height="52" fill="#a5713a"/>
<rect x="418" y="512" width="10" height="52" rx="3" fill="#6d4425"/>
<rect x="424" y="512" width="4" height="52" fill="#a5713a"/>
<rect x="458" y="512" width="10" height="52" rx="3" fill="#6d4425"/>
<rect x="464" y="512" width="4" height="52" fill="#a5713a"/>
<rect x="632" y="512" width="10" height="52" rx="3" fill="#6d4425"/>
<rect x="638" y="512" width="4" height="52" fill="#a5713a"/>
<rect x="672" y="512" width="10" height="52" rx="3" fill="#6d4425"/>
<rect x="678" y="512" width="4" height="52" fill="#a5713a"/>
<rect x="712" y="512" width="10" height="52" rx="3" fill="#6d4425"/>
<rect x="718" y="512" width="4" height="52" fill="#a5713a"/>
<rect x="486" y="496" width="128" height="74" rx="5" fill="#6d431f"/>
<rect x="490" y="500" width="120" height="66" rx="4" fill="#8a5730"/>
<path d="M551 566 C 517 545 508 514 528 504 C 541 499 550 507 551 516 C 552 507 561 499 574 504 C 594 514 585 545 551 566 Z" fill="#3f3220"/>
<path d="M566 512 C 574 514 578 522 576 530" fill="none" stroke="#7a6444" stroke-width="2.5"/>
<path d="M521 560 C 503 549 498 531 509 526 C 516 523 521 528 521 533 C 522 528 527 523 534 526 C 545 531 540 549 521 560 Z" fill="#4a3a2a"/>
<path d="M581 560 C 563 549 558 531 569 526 C 576 523 581 528 581 533 C 582 528 587 523 594 526 C 605 531 600 549 581 560 Z" fill="#4a3a2a"/>

<path d="M712 578 L712 590" stroke="#6d4425" stroke-width="4"/>
<g data-obj="birdhouse">
  <rect x="698" y="604" width="28" height="27" rx="2" fill="#a5713a"/>
  <rect x="714" y="604" width="12" height="27" fill="#d8a465"/>
  <path d="M694 604 L712 589 L730 604 Z" fill="#8a5b34"/>
  <path d="M712 589 L730 604 L712 604 Z" fill="#c08b4f"/>
  <circle cx="712" cy="614" r="6.5" fill="#4a2c14"/>
  <rect x="710" y="621" width="4" height="10" fill="#8a5b34"/>
  <circle cx="712" cy="633" r="3" fill="#8a5b34"/>
</g>
<ellipse cx="586" cy="686" rx="26" ry="5" fill="#4a3a2a" opacity="0.35"/>
<g data-obj="swiss-knife">
  <polygon points="606,668 628,664 629,670 606,673" fill="url(#swiss-metal)"/>
  <polygon points="606,668 628,664 628,667 606,670" fill="#f6fafd"/>
  <polygon points="606,678 626,679 625,685 606,684" fill="url(#swiss-metal-d)"/>
  <rect x="570" y="666" width="38" height="19" rx="9" fill="url(#swiss-red)"/>
  <rect x="570" y="666" width="38" height="5" rx="2.5" fill="#f78a71" opacity="0.9"/>
  <rect x="583" y="673" width="13" height="4.5" rx="1" fill="#ffffff"/>
  <rect x="587" y="669" width="4.5" height="12" rx="1" fill="#ffffff"/>
  <circle cx="605" cy="675" r="3" fill="#8fa0ae"/>
</g>
<ellipse cx="500" cy="686" rx="30" ry="5" fill="#4a3a2a" opacity="0.32"/>
<rect x="484" y="656" width="46" height="30" rx="4" fill="#8a5730"/>
<rect x="484" y="656" width="46" height="6" rx="3" fill="#ac6f3e"/>
<ellipse cx="502" cy="654" rx="10" ry="5" fill="url(#swiss-cream)"/>
<ellipse cx="518" cy="653" rx="10" ry="6" fill="url(#swiss-hay)"/>
<rect x="654" y="670" width="30" height="14" rx="6" fill="#c02f1e"/>
<rect x="654" y="670" width="30" height="4" rx="2" fill="#f0705a"/>
<path d="M682 672 L704 666 L705 671 L682 676 Z" fill="url(#swiss-metal)"/>

<rect x="400" y="592" width="98" height="40" rx="4" fill="#7d4f2b"/>
<rect x="400" y="592" width="98" height="9" rx="3" fill="url(#swiss-wood)"/>
<ellipse cx="416" cy="588" rx="16" ry="10" fill="url(#swiss-leaf)"/>
<ellipse cx="452" cy="586" rx="18" ry="11" fill="#3f7a2e"/>
<ellipse cx="482" cy="588" rx="15" ry="10" fill="url(#swiss-leaf)"/>
<circle cx="412" cy="580" r="9" fill="url(#swiss-red)"/>
<circle cx="446" cy="576" r="10" fill="#e0402c"/>
<circle cx="452" cy="571" r="5" fill="#f78a71"/>
<circle cx="484" cy="580" r="9" fill="url(#swiss-red)"/>
<path d="M406 634 C 400 648 404 658 412 666" stroke="#3f7a2e" stroke-width="5" fill="none"/>
<path d="M484 634 C 492 650 488 660 480 668" stroke="#3f7a2e" stroke-width="5" fill="none"/>

<rect x="38" y="545" width="10" height="124" rx="3" fill="url(#swiss-wood-d)"/>
<rect x="168" y="540" width="10" height="128" rx="3" fill="url(#swiss-wood-d)"/>
<path d="M43 552 Q 108 572 173 548" fill="none" stroke="#6d4425" stroke-width="3"/>
<g data-obj="hung-shirt">
  <path d="M58 566 L52 580 L60 584 L62 578 L62 610 L84 610 L84 578 L86 584 L94 580 L88 566 L76 562 L66 562 Z" fill="#e7dcc4"/>
  <path d="M72 563 L84 566 L88 566 L94 580 L86 584 L84 578 L84 610 L72 610 Z" fill="#fffbf0"/>
  <path d="M66 562 L71 571 L76 562 Z" fill="#cfc2a6"/>
  <path d="M88 570 L93 580" stroke="#ffffff" stroke-width="2" opacity="0.9"/>
</g>
<path d="M100 568 L98 610 L128 610 L132 564 Z" fill="#b7d4e6"/>
<path d="M116 566 L132 564 L128 610 L114 610 Z" fill="#e4f2fa"/>
<path d="M99 580 L130 578 M99 592 L129 590" stroke="#8fb8d0" stroke-width="4"/>
<path d="M138 574 L124 570 M162 572 L176 566" stroke="#b02f1d" stroke-width="4"/>
<path d="M140 568 L136 604 L162 604 L160 566 Z" fill="#c9331f"/>
<path d="M151 567 L160 566 L162 604 L150 604 Z" fill="#f2705a"/>
<path d="M143 568 C 145 558 155 558 157 568" fill="none" stroke="#b02f1d" stroke-width="4"/>

<ellipse cx="88" cy="710" rx="76" ry="17" fill="url(#swiss-shadow)"/>
<ellipse cx="102" cy="705" rx="42" ry="7" fill="#24501e" opacity="0.3"/>
<g data-obj="wood-bench">
  <rect x="60" y="648" width="74" height="12" rx="3" fill="#8f5c30"/>
  <rect x="60" y="648" width="74" height="4" rx="2" fill="#dba565"/>
  <rect x="64" y="626" width="66" height="9" rx="3" fill="#7d4f2b"/>
  <rect x="64" y="626" width="66" height="3" rx="2" fill="#c08b4f"/>
  <rect x="68" y="660" width="10" height="40" fill="#6b4322"/>
  <rect x="116" y="660" width="10" height="40" fill="#7a4f2d"/>
  <rect x="122" y="660" width="4" height="40" fill="#a5713a"/>
  <rect x="66" y="632" width="8" height="18" fill="#7a4f2d"/>
  <rect x="120" y="632" width="8" height="18" fill="#8a5b34"/>
</g>
<ellipse cx="106" cy="644" rx="24" ry="7" fill="#4f382a"/>
<path d="M90 644 C 90 626 122 626 122 644 Z" fill="#6d5140"/>
<path d="M106 626 C 118 627 122 635 122 644 L106 644 Z" fill="#93745a"/>
<rect x="88" y="637" width="36" height="5" fill="#3f2c20"/>
<ellipse cx="150" cy="708" rx="26" ry="7" fill="url(#swiss-shadow)"/>
<path d="M140 670 L152 670 L152 692 L166 692 L166 702 L140 702 Z" fill="#5e4231"/>
<path d="M146 670 L152 670 L152 692 L166 692 L166 702 L146 702 Z" fill="#8a6a4a"/>
<rect x="140" y="700" width="26" height="5" rx="2" fill="#3f2c20"/>
<g data-obj="horseshoe">
  <path d="M46 620 C 32 620 24 632 26 646 C 28 656 34 660 38 658 C 42 656 38 650 36 644 C 34 634 39 628 46 628 C 53 628 58 634 56 644 C 54 650 50 656 54 658 C 58 660 64 656 66 646 C 68 632 60 620 46 620 Z" fill="url(#swiss-metal)"/>
  <path d="M46 620 C 56 620 64 628 66 638" fill="none" stroke="#f2f7fb" stroke-width="2.5"/>
  <circle cx="34" cy="632" r="2.5" fill="#5f6b78"/>
  <circle cx="58" cy="632" r="2.5" fill="#5f6b78"/>
  <circle cx="32" cy="646" r="2.5" fill="#5f6b78"/>
  <circle cx="60" cy="646" r="2.5" fill="#5f6b78"/>
</g>

<ellipse cx="212" cy="710" rx="56" ry="15" fill="url(#swiss-shadow)"/>
<ellipse cx="196" cy="704" rx="24" ry="6" fill="#24501e" opacity="0.32"/>
<g data-obj="milk-churn">
  <path d="M182 704 L182 664 Q 182 654 192 650 L192 642 L212 642 L212 650 Q 222 654 222 664 L222 704 Z" fill="#94a3b1"/>
  <path d="M204 643 L212 642 L212 650 Q 222 654 222 664 L222 704 L204 704 Z" fill="url(#swiss-metal)"/>
  <rect x="188" y="634" width="28" height="10" rx="4" fill="#7f8f9d"/>
  <rect x="202" y="634" width="14" height="10" rx="4" fill="#c4ced7"/>
  <rect x="180" y="673" width="44" height="6" fill="#75858f"/>
  <path d="M218 660 L218 700" stroke="#eaf2f8" stroke-width="3" opacity="0.85"/>
</g>
<ellipse cx="248" cy="706" rx="28" ry="7" fill="#24501e" opacity="0.3"/>
<g data-obj="watering-can">
  <path d="M240 660 C 244 642 260 642 264 660" fill="none" stroke="#7f8f9d" stroke-width="5"/>
  <path d="M268 672 L285 656 L291 663 L274 679 Z" fill="url(#swiss-metal)"/>
  <ellipse cx="288" cy="659" rx="6.5" ry="5" transform="rotate(-42 288 659)" fill="#7f8f9d"/>
  <path d="M228 704 L228 672 Q 228 662 240 660 L264 660 Q 274 662 274 672 L274 704 Z" fill="#93a2b0"/>
  <path d="M258 660 L264 660 Q 274 662 274 672 L274 704 L258 704 Z" fill="url(#swiss-metal)"/>
  <rect x="224" y="653" width="54" height="9" rx="4" fill="#77879a"/>
  <path d="M270 668 L270 700" stroke="#eef4f9" stroke-width="3" opacity="0.85"/>
</g>
<ellipse cx="330" cy="712" rx="60" ry="15" fill="url(#swiss-shadow)"/>
<rect x="300" y="618" width="72" height="86" rx="4" fill="#7a4f2d"/>
<circle cx="316" cy="634" r="14" fill="#c99253"/>
<circle cx="316" cy="634" r="8" fill="#a5713a"/>
<circle cx="314" cy="631" r="4" fill="#c08b4f"/>
<circle cx="348" cy="632" r="14" fill="#d9ad74"/>
<circle cx="348" cy="632" r="8" fill="#b8874c"/>
<circle cx="332" cy="664" r="14" fill="#d9ad74"/>
<circle cx="332" cy="664" r="8" fill="#b8874c"/>
<circle cx="362" cy="662" r="12" fill="#c99253"/>
<circle cx="362" cy="662" r="7" fill="#a5713a"/>
<circle cx="316" cy="692" r="13" fill="#c99253"/>
<circle cx="316" cy="692" r="7" fill="#a5713a"/>
<circle cx="350" cy="694" r="12" fill="#d9ad74"/>
<circle cx="350" cy="694" r="7" fill="#b8874c"/>
<rect x="294" y="610" width="84" height="12" rx="4" fill="#5f3a1c"/>
<ellipse cx="312" cy="710" rx="30" ry="8" fill="#4a2c14" opacity="0.32"/>
<ellipse cx="318" cy="700" rx="26" ry="11" fill="#7a4f2d"/>
<ellipse cx="320" cy="694" rx="22" ry="8" fill="#a5713a"/>
<g data-obj="axe">
  <path d="M320 672 L330 670 L340 624 L332 622 Z" fill="#a5713a"/>
  <path d="M326 671 L330 670 L340 624 L336 623 Z" fill="#dfb37a"/>
  <polygon points="302,664 326,658 332,686 308,692" fill="#7d8d9c"/>
  <polygon points="318,660 326,658 332,686 324,688" fill="url(#swiss-metal)"/>
  <path d="M324 661 L330 684" stroke="#f2f7fb" stroke-width="2.5"/>
</g>

<ellipse cx="742" cy="682" rx="54" ry="14" fill="url(#swiss-shadow)"/>
<ellipse cx="748" cy="676" rx="30" ry="6" fill="#24501e" opacity="0.3"/>
<g data-obj="wheelbarrow">
  <path d="M718 626 L780 626 L772 650 L728 650 Z" fill="#8fa0ae"/>
  <path d="M718 626 L780 626 L778 633 L720 633 Z" fill="#d3dce4"/>
  <path d="M758 626 L780 626 L772 650 L754 650 Z" fill="url(#swiss-metal)"/>
  <path d="M728 650 L724 634 L734 634 L736 650 Z" fill="#7d8d9c"/>
  <circle cx="722" cy="662" r="12" fill="#4c3323"/>
  <circle cx="722" cy="662" r="4.5" fill="#a5713a"/>
  <path d="M772 638 L784 656" stroke="#a5713a" stroke-width="5"/>
  <rect x="762" y="652" width="7" height="20" fill="#8a5b34"/>
</g>

<rect x="0" y="748" width="800" height="10" fill="#7a4f2d" opacity="0.3"/>
<rect x="30" y="688" width="16" height="76" rx="3" fill="#7a4f2d"/>
<rect x="39" y="688" width="7" height="76" fill="#c08b4f"/>
<rect x="146" y="690" width="16" height="74" rx="3" fill="#7a4f2d"/>
<rect x="155" y="690" width="7" height="74" fill="#c08b4f"/>
<rect x="262" y="688" width="16" height="76" rx="3" fill="#7a4f2d"/>
<rect x="271" y="688" width="7" height="76" fill="#c08b4f"/>
<rect x="378" y="690" width="16" height="74" rx="3" fill="#7a4f2d"/>
<rect x="387" y="690" width="7" height="74" fill="#c08b4f"/>
<rect x="494" y="688" width="16" height="76" rx="3" fill="#7a4f2d"/>
<rect x="503" y="688" width="7" height="76" fill="#c08b4f"/>
<rect x="610" y="690" width="16" height="74" rx="3" fill="#7a4f2d"/>
<rect x="619" y="690" width="7" height="74" fill="#c08b4f"/>
<rect x="726" y="688" width="16" height="76" rx="3" fill="#7a4f2d"/>
<rect x="735" y="688" width="7" height="76" fill="#c08b4f"/>
<rect x="0" y="700" width="800" height="12" rx="4" fill="#9c6634"/>
<rect x="0" y="700" width="800" height="4" rx="2" fill="#dba565"/>
<rect x="0" y="728" width="800" height="12" rx="4" fill="#9c6634"/>
<rect x="0" y="728" width="800" height="4" rx="2" fill="#dba565"/>

<ellipse cx="360" cy="710" rx="20" ry="4" fill="#4a2c14" opacity="0.4"/>
<g data-obj="rooster">
  <path d="M386 680 C 398 670 400 686 388 694 Z" fill="#8a5b34"/>
  <ellipse cx="370" cy="688" rx="17" ry="14" fill="#b8874c"/>
  <ellipse cx="369" cy="683" rx="13" ry="9" fill="url(#swiss-fur)"/>
  <rect x="356" y="700" width="5" height="12" fill="#cf7d16"/>
  <rect x="366" y="700" width="5" height="12" fill="#e8952c"/>
  <circle cx="360" cy="670" r="9" fill="#d9ad74"/>
  <path d="M356 660 C 358 654 364 656 364 662 C 368 656 372 660 369 665 Z" fill="url(#swiss-red)"/>
  <path d="M352 672 L342 674 L352 678 Z" fill="#e8952c"/>
  <circle cx="357" cy="669" r="2" fill="#33302d"/>
  <path d="M356 678 C 354 684 358 686 360 682 Z" fill="#d33c28"/>
</g>
<rect x="424" y="704" width="14" height="10" fill="#a52c1c"/>
<path d="M420 714 Q 432 706 444 714 L 449 742 Q 432 750 415 742 Z" fill="#c99425"/>
<path d="M432 709 Q 439 710 444 714 L 449 742 Q 441 746 432 747 Z" fill="url(#swiss-brass)"/>
<path d="M415 741 Q 432 749 449 741 L 450 748 Q 432 756 414 748 Z" fill="#a5741f"/>
<rect x="640" y="702" width="6" height="12" rx="3" fill="#c9a06a"/>
<path d="M636 714 Q 648 706 660 714 L 665 742 Q 648 752 631 742 Z" fill="#c99425"/>
<path d="M648 709 Q 655 710 660 714 L 665 742 Q 657 748 648 749 Z" fill="url(#swiss-brass)"/>
<ellipse cx="648" cy="746" rx="17" ry="6" fill="#a5741f"/>

<g data-obj="cowbell">
  <rect x="528" y="704" width="16" height="15" rx="2" fill="#6d4425"/>
  <rect x="536" y="704" width="8" height="15" rx="2" fill="#a5713a"/>
  <rect x="532" y="709" width="8" height="6" rx="1" fill="#c9a06a"/>
  <path d="M522 720 Q 536 711 550 720 L 556 748 Q 536 756 516 748 Z" fill="#c19022"/>
  <path d="M536 714 Q 544 715 550 720 L 556 748 Q 546 753 536 754 Z" fill="url(#swiss-brass)"/>
  <path d="M516 747 Q 536 755 556 747 L 557 755 Q 536 764 515 755 Z" fill="#9a6a1a"/>
  <path d="M536 753 Q 547 752 557 755 L 556 762 Q 546 764 536 762 Z" fill="#d3a237"/>
  <path d="M548 724 C 552 731 554 739 554 746" fill="none" stroke="#fbeec0" stroke-width="2.5" opacity="0.9"/>
  <ellipse cx="536" cy="734" rx="5" ry="7" fill="#9a6a1a" opacity="0.45"/>
  <ellipse cx="536" cy="759" rx="4.5" ry="4" fill="#5c4132"/>
</g>
<rect x="46" y="698" width="8" height="60" rx="3" fill="#8f5c30"/>
<rect x="90" y="698" width="8" height="60" rx="3" fill="#8f5c30"/>
<path d="M50 750 L94 702" stroke="#c08b4f" stroke-width="6"/>
<rect x="46" y="698" width="52" height="8" rx="3" fill="url(#swiss-wood)"/>
<rect x="46" y="726" width="52" height="8" rx="3" fill="url(#swiss-wood)"/>
<circle cx="94" cy="728" r="4" fill="#7f8f9d"/>
<rect x="726" y="694" width="9" height="64" rx="3" fill="#7d4f2b"/>
<rect x="731" y="694" width="4" height="64" fill="#b3813f"/>
<polygon points="735,700 762,700 768,708 762,716 735,716" fill="#d9a441"/>
<polygon points="735,700 762,700 762,704 735,704" fill="#f7dc9a"/>
<polygon points="726,724 704,724 698,732 704,740 726,740" fill="#c9a06a"/>

<ellipse cx="128" cy="838" rx="96" ry="19" fill="url(#swiss-shadow)"/>
<ellipse cx="146" cy="830" rx="58" ry="9" fill="#24501e" opacity="0.28"/>
<rect x="96" y="784" width="15" height="46" rx="5" fill="#33302d"/>
<rect x="176" y="786" width="15" height="44" rx="5" fill="#3f3a36"/>
<rect x="120" y="788" width="14" height="42" rx="5" fill="#4a423e"/>
<ellipse cx="150" cy="762" rx="76" ry="44" fill="url(#swiss-cow)"/>
<ellipse cx="150" cy="748" rx="72" ry="34" fill="#ffffff"/>
<path d="M204 728 C 220 740 224 762 218 782" fill="none" stroke="#fffdf6" stroke-width="4" opacity="0.95"/>
<ellipse cx="122" cy="742" rx="24" ry="18" fill="#33302d"/>
<ellipse cx="184" cy="774" rx="19" ry="14" fill="#3d3936"/>
<path d="M218 738 C 240 730 246 758 236 790 C 232 804 224 806 220 796" fill="#33302d"/>
<ellipse cx="76" cy="742" rx="30" ry="25" fill="url(#swiss-cow)"/>
<ellipse cx="70" cy="754" rx="19" ry="14" fill="#e79a90"/>
<circle cx="63" cy="752" r="3" fill="#8a5b34"/>
<ellipse cx="66" cy="730" rx="6" ry="5" fill="#33302d"/>
<path d="M50 728 C 38 720 36 734 48 740 Z" fill="#f0d3cd"/>
<path d="M96 720 C 106 712 110 722 100 730 Z" fill="#f0d3cd"/>
<rect x="66" y="768" width="22" height="8" rx="3" fill="#8a5b34"/>
<path d="M68 776 Q 78 770 88 776 Q 92 794 78 800 Q 64 794 68 776 Z" fill="#c99425"/>
<path d="M78 772 Q 84 773 88 776 Q 92 792 78 799 Z" fill="url(#swiss-brass)"/>
<ellipse cx="78" cy="802" rx="4" ry="3" fill="#8a5b34"/>

<ellipse cx="618" cy="822" rx="84" ry="18" fill="url(#swiss-shadow)"/>
<ellipse cx="634" cy="814" rx="52" ry="8" fill="#24501e" opacity="0.28"/>
<rect x="588" y="772" width="13" height="42" rx="5" fill="#33302d"/>
<rect x="662" y="774" width="13" height="40" rx="5" fill="#3f3a36"/>
<rect x="610" y="776" width="12" height="38" rx="5" fill="#4a423e"/>
<ellipse cx="636" cy="752" rx="66" ry="38" fill="url(#swiss-cow)"/>
<ellipse cx="636" cy="740" rx="62" ry="29" fill="#ffffff"/>
<path d="M684 722 C 698 732 702 750 697 768" fill="none" stroke="#fffdf6" stroke-width="4" opacity="0.95"/>
<ellipse cx="612" cy="734" rx="21" ry="15" fill="#33302d"/>
<ellipse cx="666" cy="762" rx="17" ry="12" fill="#3d3936"/>
<path d="M696 730 C 716 724 720 748 710 772 C 706 784 698 784 695 776" fill="#33302d"/>
<ellipse cx="570" cy="734" rx="27" ry="23" fill="url(#swiss-cow)"/>
<ellipse cx="564" cy="746" rx="17" ry="12" fill="#e79a90"/>
<circle cx="558" cy="744" r="3" fill="#8a5b34"/>
<ellipse cx="560" cy="722" rx="6" ry="5" fill="#33302d"/>
<path d="M546 720 C 534 712 532 726 544 732 Z" fill="#f0d3cd"/>
<path d="M590 714 C 600 706 604 716 594 724 Z" fill="#f0d3cd"/>
<rect x="560" y="760" width="20" height="7" rx="3" fill="#8a5b34"/>
<path d="M562 767 Q 570 760 578 767 L 582 790 Q 570 797 558 790 Z" fill="#9aa9b6"/>
<path d="M570 763 Q 575 764 578 767 L 582 790 Q 576 794 570 794 Z" fill="url(#swiss-metal)"/>
<ellipse cx="570" cy="798" rx="4" ry="3" fill="#5c4132"/>

<ellipse cx="272" cy="836" rx="52" ry="14" fill="url(#swiss-shadow)"/>
<ellipse cx="282" cy="830" rx="30" ry="6" fill="#24501e" opacity="0.3"/>
<g data-obj="sheep">
  <rect x="266" y="812" width="6" height="16" rx="2" fill="#4a423e"/>
  <rect x="292" y="812" width="6" height="16" rx="2" fill="#3d3936"/>
  <ellipse cx="282" cy="800" rx="30" ry="20" fill="#e6e1d6"/>
  <ellipse cx="276" cy="792" rx="24" ry="14" fill="#ffffff"/>
  <circle cx="266" cy="800" r="7" fill="#dcd6c9"/>
  <circle cx="288" cy="789" r="7" fill="#f6f3ec"/>
  <path d="M300 784 C 310 788 312 796 310 804" fill="none" stroke="#ffffff" stroke-width="3.5"/>
  <ellipse cx="310" cy="792" rx="10" ry="9" fill="#4a423e"/>
  <ellipse cx="316" cy="789" rx="4" ry="3" fill="#6b625d"/>
  <path d="M303 785 C 298 779 304 775 308 781 Z" fill="#4a423e"/>
</g>
<ellipse cx="222" cy="902" rx="40" ry="11" fill="url(#swiss-shadow)"/>
<ellipse cx="230" cy="896" rx="22" ry="5" fill="#24501e" opacity="0.3"/>
<g data-obj="duck" transform="translate(-130 30)">
  <path d="M376 846 C 384 840 386 848 380 852 Z" fill="#e8e3d8"/>
  <rect x="356" y="856" width="5" height="9" fill="#e8952c"/>
  <rect x="366" y="856" width="5" height="9" fill="#cf7d16"/>
  <ellipse cx="360" cy="846" rx="20" ry="12" fill="#efece3"/>
  <ellipse cx="358" cy="841" rx="16" ry="8" fill="#ffffff"/>
  <path d="M374 840 C 378 844 379 849 377 853" fill="none" stroke="#ffffff" stroke-width="3"/>
  <circle cx="346" cy="832" r="9" fill="#f7f4ec"/>
  <circle cx="343" cy="830" r="2" fill="#33302d"/>
  <path d="M337 834 L326 836 L337 840 Z" fill="#e8952c"/>
</g>
<ellipse cx="442" cy="832" rx="52" ry="13" fill="url(#swiss-shadow)"/>
<ellipse cx="450" cy="826" rx="28" ry="6" fill="#24501e" opacity="0.3"/>
<g data-obj="goat" transform="translate(-224 -58)">
  <rect x="654" y="868" width="6" height="14" rx="2" fill="#7a5c3c"/>
  <rect x="676" y="868" width="6" height="14" rx="2" fill="#8a6a48"/>
  <ellipse cx="668" cy="856" rx="26" ry="15" fill="#bd9878"/>
  <ellipse cx="664" cy="850" rx="21" ry="10" fill="url(#swiss-fur)"/>
  <path d="M690 836 C 686 824 694 820 696 830" fill="none" stroke="#7a5c3c" stroke-width="3"/>
  <path d="M698 836 C 696 824 704 822 704 832" fill="none" stroke="#8f6c46" stroke-width="3"/>
  <ellipse cx="692" cy="844" rx="11" ry="9" fill="#c9a887"/>
  <path d="M698 838 C 702 841 703 846 701 850" fill="none" stroke="#f0e2c4" stroke-width="2.5"/>
  <circle cx="698" cy="842" r="2" fill="#33302d"/>
  <path d="M694 852 C 694 860 690 862 688 858 Z" fill="#f0e2c4"/>
</g>
<ellipse cx="730" cy="836" rx="50" ry="13" fill="url(#swiss-shadow)"/>
<ellipse cx="736" cy="830" rx="28" ry="6" fill="#24501e" opacity="0.3"/>
<g data-obj="sheepdog" transform="translate(-6 -44)">
  <path d="M716 848 C 706 840 706 856 716 858 Z" fill="#5c4132"/>
  <rect x="726" y="866" width="6" height="12" rx="2" fill="#3f2c20"/>
  <rect x="748" y="866" width="6" height="12" rx="2" fill="#4a3324"/>
  <ellipse cx="740" cy="856" rx="26" ry="14" fill="#54392a"/>
  <ellipse cx="738" cy="850" rx="22" ry="10" fill="url(#swiss-darkfur)"/>
  <path d="M756 834 C 752 826 762 824 762 832 Z" fill="#3f2c20"/>
  <circle cx="764" cy="842" r="11" fill="#6b4a34"/>
  <path d="M770 834 C 775 837 776 843 774 848" fill="none" stroke="#c9a887" stroke-width="2.5"/>
  <ellipse cx="770" cy="846" rx="7" ry="5" fill="#f0e2c4"/>
  <circle cx="773" cy="845" r="2" fill="#33302d"/>
</g>

<ellipse cx="152" cy="880" rx="46" ry="12" fill="url(#swiss-shadow)"/>
<ellipse cx="162" cy="874" rx="26" ry="6" fill="#24501e" opacity="0.3"/>
<g data-obj="stone-cairn">
  <ellipse cx="164" cy="866" rx="22" ry="10" fill="#8c9aa8"/>
  <ellipse cx="168" cy="862" rx="17" ry="6" fill="url(#swiss-stone)"/>
  <ellipse cx="164" cy="846" rx="17" ry="9" fill="#8496a6"/>
  <ellipse cx="167" cy="843" rx="12" ry="5" fill="url(#swiss-stone)"/>
  <ellipse cx="164" cy="830" rx="12" ry="7" fill="#8c9aa8"/>
  <ellipse cx="166" cy="827" rx="9" ry="4" fill="#dee5eb"/>
</g>
<ellipse cx="58" cy="866" rx="40" ry="11" fill="url(#swiss-shadow)"/>
<ellipse cx="64" cy="858" rx="30" ry="12" fill="#8496a6"/>
<ellipse cx="68" cy="852" rx="22" ry="7" fill="url(#swiss-stone)"/>
<g data-obj="marmot">
  <ellipse cx="62" cy="828" rx="18" ry="14" fill="#8f6a44"/>
  <ellipse cx="64" cy="823" rx="13" ry="9" fill="url(#swiss-fur)"/>
  <circle cx="56" cy="798" r="4" fill="#8a6238"/>
  <circle cx="68" cy="798" r="4" fill="#a07a4c"/>
  <circle cx="62" cy="806" r="10" fill="#9a7350"/>
  <path d="M68 800 C 72 803 73 808 71 812" fill="none" stroke="#dcbb92" stroke-width="2.5"/>
  <circle cx="58" cy="805" r="2" fill="#33302d"/>
  <circle cx="66" cy="805" r="2" fill="#33302d"/>
  <ellipse cx="62" cy="811" rx="4" ry="3" fill="#e0b891"/>
</g>

<ellipse cx="440" cy="906" rx="136" ry="20" fill="url(#swiss-shadow)"/>
<path d="M395 900 C 393 878 397 864 401 854" fill="none" stroke="#5c9640" stroke-width="5"/>
<g data-obj="red-poppy" transform="translate(-17 0)">
  <ellipse cx="404" cy="866" rx="9" ry="4" transform="rotate(-25 404 866)" fill="url(#swiss-leaf)"/>
  <path d="M418 848 C 405 848 399 856 403 862 C 409 868 427 868 433 862 C 437 856 431 848 418 848 Z" fill="#c02f1e"/>
  <path d="M418 848 C 429 848 437 855 433 862 C 429 866 423 867 419 867 Z" fill="url(#swiss-red)"/>
  <path d="M418 852 C 409 852 405 857 408 861 C 413 865 425 865 429 861 C 432 857 427 852 418 852 Z" fill="#eb6249"/>
  <circle cx="418" cy="859" r="4" fill="#3a3330"/>
</g>
<g data-obj="edelweiss" transform="translate(-21 0)">
  <path d="M462 902 C 459 886 460 876 462 868" fill="none" stroke="#5c9640" stroke-width="5"/>
  <path d="M462 890 C 453 888 448 880 449 875 C 457 875 462 881 462 890 Z" fill="url(#swiss-leaf)"/>
  <ellipse cx="462" cy="868" rx="6.5" ry="19" fill="#e6eef2"/>
  <ellipse cx="462" cy="868" rx="6.5" ry="19" transform="rotate(45 462 868)" fill="#fdfdf8"/>
  <ellipse cx="462" cy="868" rx="6.5" ry="19" transform="rotate(90 462 868)" fill="#eef4f7"/>
  <ellipse cx="462" cy="868" rx="6.5" ry="19" transform="rotate(135 462 868)" fill="#ffffff"/>
  <ellipse cx="462" cy="868" rx="5" ry="15" transform="rotate(22 462 868)" fill="#ffffff"/>
  <circle cx="462" cy="868" r="7" fill="#f5e2a6"/>
  <circle cx="459" cy="865" r="2.4" fill="#f5d24e"/>
  <circle cx="465" cy="865" r="2.4" fill="#f7dc90"/>
  <circle cx="462" cy="871" r="2.4" fill="#e8bd63"/>
</g>
<path d="M472 904 C 470 882 474 866 478 856" fill="none" stroke="#5c9640" stroke-width="5"/>
<circle cx="478" cy="850" r="6" fill="#fdfdf8"/>
<circle cx="470" cy="844" r="6" fill="#eef4f7"/>
<circle cx="486" cy="844" r="6" fill="#ffffff"/>
<circle cx="478" cy="837" r="6" fill="#fdfdf8"/>
<circle cx="478" cy="844" r="5" fill="#f5d24e"/>
<g data-obj="blue-gentian" transform="translate(-22 0)">
  <path d="M534 902 C 532 888 533 878 535 870" stroke="#5c9640" stroke-width="4" fill="none"/>
  <ellipse cx="524" cy="888" rx="9" ry="4" transform="rotate(-20 524 888)" fill="url(#swiss-leaf)"/>
  <path d="M534 862 L516 884 L552 884 Z" fill="#2f5691"/>
  <path d="M534 862 L552 884 L535 884 Z" fill="url(#swiss-blue)"/>
  <path d="M534 866 L526 880 L542 880 Z" fill="#6d9ada"/>
  <ellipse cx="534" cy="862" rx="17" ry="6" fill="#3f6fb5"/>
  <circle cx="534" cy="862" r="5" fill="#f7e7b0"/>
</g>
<path d="M542 906 C 540 884 544 868 548 858" fill="none" stroke="#5c9640" stroke-width="5"/>
<polygon points="548,834 554,850 548,858 542,850" fill="#ffffff"/>
<polygon points="532,848 548,842 556,848 548,854" fill="#eef4f7"/>
<polygon points="564,848 548,842 540,848 548,854" fill="#ffffff"/>
<circle cx="548" cy="848" r="4" fill="#e8bd63"/>
<g data-obj="thistle" transform="translate(-254 0)">
  <path d="M606 904 C 604 890 605 880 607 872" stroke="#5c9640" stroke-width="4" fill="none"/>
  <path d="M596 886 L584 880 M616 884 L628 878" stroke="#6b9a4a" stroke-width="3"/>
  <path d="M594 872 C 598 864 614 864 618 872 C 614 880 598 880 594 872 Z" fill="url(#swiss-leaf)"/>
  <path d="M596 870 L606 838 L616 870 Z" fill="#7a63b0"/>
  <path d="M606 838 L616 870 L607 870 Z" fill="#a891dc"/>
  <path d="M600 868 L606 846 L612 868 Z" fill="#bda6e8"/>
</g>
<ellipse cx="520" cy="846" rx="30" ry="7" fill="url(#swiss-shadow)"/>
<g data-obj="butterfly" transform="translate(20 18)">
  <path d="M500 800 C 488 784 474 786 476 798 C 478 808 492 808 500 800 Z" fill="#cf8017"/>
  <path d="M500 800 C 512 784 526 786 524 798 C 522 808 508 808 500 800 Z" fill="url(#swiss-orange)"/>
  <path d="M500 802 C 492 812 482 814 484 806 Z" fill="#b06a10"/>
  <path d="M500 802 C 508 812 518 814 516 806 Z" fill="#e29228"/>
  <path d="M518 790 C 522 792 523 796 522 799" fill="none" stroke="#ffe4b0" stroke-width="2"/>
  <ellipse cx="500" cy="800" rx="3" ry="10" fill="#4a423e"/>
  <path d="M498 790 C 494 784 490 784 490 788" fill="none" stroke="#4a423e" stroke-width="1.5"/>
  <path d="M502 790 C 506 784 510 784 510 788" fill="none" stroke="#4a423e" stroke-width="1.5"/>
</g>

<ellipse cx="270" cy="1136" rx="256" ry="38" fill="url(#swiss-shadow)"/>
<polygon points="92,952 118,952 152,1122 122,1122" fill="#7a4f2d"/>
<polygon points="110,952 118,952 152,1122 142,1122" fill="#a5713a"/>
<polygon points="216,952 242,952 200,1122 172,1122" fill="#6b4322"/>
<polygon points="234,952 242,952 200,1122 190,1122" fill="#94612f"/>
<polygon points="330,952 356,952 390,1122 360,1122" fill="#7a4f2d"/>
<polygon points="348,952 356,952 390,1122 380,1122" fill="#a5713a"/>
<polygon points="452,952 478,952 438,1122 410,1122" fill="#6b4322"/>
<polygon points="470,952 478,952 438,1122 428,1122" fill="#94612f"/>
<polygon points="60,952 500,952 530,906 90,906" fill="#b8813f"/>
<polygon points="280,952 500,952 530,906 310,906" fill="url(#swiss-hay)"/>
<polygon points="60,952 500,952 496,936 66,936" fill="#7a4f2d"/>
<polygon points="60,952 260,952 288,906 90,906" fill="#f6e7c9" opacity="0.85"/>
<path d="M118 906 L92 952" stroke="#c9331f" stroke-width="9" opacity="0.5"/>
<path d="M80 928 L292 928" stroke="#c9331f" stroke-width="9" opacity="0.42"/>

<rect x="118" y="1018" width="356" height="10" fill="#5f3a1c" opacity="0.55"/>
<rect x="118" y="1004" width="356" height="15" rx="3" fill="url(#swiss-plank)"/>
<rect x="118" y="1004" width="356" height="4" rx="2" fill="#e8b878"/>
<rect x="128" y="1052" width="336" height="12" rx="3" fill="#8a5730"/>
<rect x="128" y="1052" width="336" height="4" rx="2" fill="#c99253"/>

<ellipse cx="100" cy="1046" rx="36" ry="10" fill="url(#swiss-shadow)"/>
<g data-obj="alphorn">
  <polygon points="140,972 144,976 106,1010 100,1004" fill="#a5713a"/>
  <polygon points="140,972 142,974 103,1007 100,1004" fill="url(#swiss-wood-l)"/>
  <polygon points="106,1010 100,1004 84,1028 96,1036" fill="#8a5b34"/>
  <ellipse cx="89" cy="1031" rx="10" ry="5.5" transform="rotate(58 89 1031)" fill="#5c4132"/>
  <ellipse cx="89" cy="1031" rx="6.5" ry="3.2" transform="rotate(58 89 1031)" fill="#3f2c20"/>
  <polygon points="128,984 132,988 124,996 120,992" fill="#7d4f2b"/>
  <polygon points="115,998 119,1002 111,1010 107,1006" fill="#7d4f2b"/>
  <circle cx="142" cy="973" r="4" fill="#6d4425"/>
</g>

<ellipse cx="186" cy="1008" rx="40" ry="8" fill="#4a2c14" opacity="0.32"/>
<g data-obj="teapot">
  <path d="M218 986 C 232 982 234 1000 222 1004" fill="none" stroke="#cfe0ea" stroke-width="6"/>
  <ellipse cx="190" cy="986" rx="28" ry="20" fill="#d7e3ec"/>
  <path d="M190 966 C 206 966 218 975 218 986 C 218 997 206 1006 190 1006 Z" fill="url(#swiss-white)"/>
  <ellipse cx="184" cy="978" rx="21" ry="12" fill="#ffffff"/>
  <path d="M208 974 C 214 978 217 983 217 988" fill="none" stroke="#ffffff" stroke-width="3"/>
  <ellipse cx="190" cy="966" rx="11" ry="5" fill="#cfe0ea"/>
  <circle cx="190" cy="961" r="3.5" fill="#d33c28"/>
</g>
<ellipse cx="248" cy="1008" rx="26" ry="7" fill="#4a2c14" opacity="0.3"/>
<g data-obj="jam-jar">
  <path d="M232 978 L232 1000 Q 232 1004 238 1004 L262 1004 Q 268 1004 268 1000 L268 978 Z" fill="#7c2a42"/>
  <path d="M252 978 L268 978 L268 1000 Q 268 1004 262 1004 L252 1004 Z" fill="#ab4763"/>
  <path d="M236 981 L236 1000" stroke="#c9718c" stroke-width="3" opacity="0.7"/>
  <circle cx="250" cy="988" r="6" fill="#c25478"/>
  <rect x="230" y="970" width="40" height="10" rx="4" fill="#efe0c2"/>
  <rect x="252" y="970" width="18" height="10" rx="4" fill="#fdf6e6"/>
  <ellipse cx="250" cy="970" rx="21" ry="6" fill="#fffaf0"/>
</g>
<ellipse cx="308" cy="1010" rx="34" ry="8" fill="#4a2c14" opacity="0.3"/>
<g data-obj="berry-plate">
  <ellipse cx="310" cy="988" rx="28" ry="9" fill="#c2d3df"/>
  <path d="M282 986 C 286 1004 334 1004 338 986 Z" fill="url(#swiss-white)"/>
  <path d="M332 992 C 329 998 320 1002 312 1002" fill="none" stroke="#ffffff" stroke-width="2.5"/>
  <circle cx="296" cy="983" r="6" fill="#5a3bbd"/>
  <circle cx="310" cy="981" r="7" fill="url(#swiss-grape)"/>
  <circle cx="324" cy="984" r="6" fill="#7f56f0"/>
</g>
<ellipse cx="378" cy="1012" rx="38" ry="8" fill="#4a2c14" opacity="0.3"/>
<g data-obj="chocolate-bar" transform="rotate(-4 378 990)">
  <rect x="352" y="972" width="60" height="34" rx="5" fill="url(#swiss-choc)"/>
  <rect x="352" y="996" width="60" height="10" rx="5" fill="#3d2932"/>
  <rect x="352" y="972" width="60" height="6" rx="3" fill="#a2798a"/>
  <ellipse cx="396" cy="988" rx="12" ry="7" fill="#e2cdae" opacity="0.4"/>
  <rect x="348" y="969" width="34" height="39" rx="5" fill="#b6ada0"/>
  <rect x="368" y="969" width="14" height="39" rx="5" fill="#dcd5ca"/>
  <rect x="352" y="975" width="26" height="28" rx="3" fill="url(#swiss-cocoa)"/>
  <rect x="354" y="977" width="10" height="11" rx="1.5" fill="#432613"/>
  <rect x="366" y="977" width="10" height="11" rx="1.5" fill="#573018"/>
  <rect x="354" y="990" width="10" height="11" rx="1.5" fill="#432613"/>
  <rect x="366" y="990" width="10" height="11" rx="1.5" fill="#573018"/>
  <rect x="354" y="977" width="10" height="2.5" rx="1" fill="#7b4c2c"/>
  <rect x="366" y="977" width="10" height="2.5" rx="1" fill="#8f5c34"/>
</g>
<ellipse cx="436" cy="1008" rx="26" ry="7" fill="#4a2c14" opacity="0.32"/>
<g data-obj="milk-bottle">
  <path d="M424 1004 L424 968 Q 424 958 432 954 L432 946 L446 946 L446 954 Q 454 958 454 968 L454 1004 Z" fill="#d5e2ec"/>
  <path d="M440 946 L446 946 L446 954 Q 454 958 454 968 L454 1004 L440 1004 Z" fill="url(#swiss-white)"/>
  <path d="M450 964 L450 1000" stroke="#ffffff" stroke-width="3"/>
  <rect x="424" y="976" width="30" height="9" fill="#c3d5e2"/>
  <rect x="428" y="938" width="22" height="10" rx="3" fill="#3f6fb5"/>
  <rect x="439" y="938" width="11" height="10" rx="3" fill="#6d9ada"/>
</g>
<ellipse cx="180" cy="1064" rx="32" ry="7" fill="#4a2c14" opacity="0.28"/>
<path d="M162 1026 L168 1052 L196 1052 L202 1026 Z" fill="#b3874f"/>
<path d="M186 1026 L202 1026 L196 1052 L184 1052 Z" fill="url(#swiss-cream)"/>
<ellipse cx="182" cy="1026" rx="20" ry="7" fill="#9c6a2b"/>
<ellipse cx="184" cy="1022" rx="11" ry="5" fill="#e8cb9c"/>
<ellipse cx="262" cy="1064" rx="34" ry="7" fill="#4a2c14" opacity="0.28"/>
<path d="M240 1030 C 240 1010 288 1010 288 1030 Q 288 1052 264 1052 Q 240 1052 240 1030 Z" fill="#c39a5c"/>
<path d="M264 1012 C 282 1013 288 1021 288 1030 Q 288 1052 266 1052 Z" fill="url(#swiss-hay)"/>
<path d="M244 1024 L284 1024" stroke="#9c6a2b" stroke-width="3"/>
<ellipse cx="352" cy="1064" rx="40" ry="8" fill="#4a2c14" opacity="0.28"/>
<path d="M324 1028 L330 1052 L376 1052 L382 1028 Z" fill="#8fa0ae"/>
<path d="M356 1028 L382 1028 L376 1052 L354 1052 Z" fill="url(#swiss-metal)"/>
<ellipse cx="353" cy="1028" rx="29" ry="8" fill="#c4ced7"/>
<ellipse cx="355" cy="1026" rx="21" ry="5" fill="#eef4f8"/>

<rect x="546" y="898" width="248" height="286" rx="6" fill="url(#swiss-shelfback)"/>
<rect x="546" y="898" width="248" height="16" rx="5" fill="#b8813f"/>
<rect x="546" y="898" width="248" height="5" rx="3" fill="#e8b878"/>
<rect x="546" y="898" width="16" height="286" fill="#7a4f2d"/>
<rect x="778" y="898" width="16" height="286" fill="#5f3a1c"/>
<rect x="562" y="1058" width="216" height="14" rx="3" fill="#8a5730"/>
<rect x="562" y="1058" width="216" height="4" rx="2" fill="#d09a5e"/>
<rect x="562" y="1072" width="216" height="6" fill="#3d2411" opacity="0.6"/>
<rect x="562" y="1122" width="216" height="14" rx="3" fill="#8a5730"/>
<rect x="562" y="1122" width="216" height="4" rx="2" fill="#d09a5e"/>
<rect x="562" y="1136" width="216" height="6" fill="#3d2411" opacity="0.6"/>
<rect x="574" y="856" width="192" height="44" rx="4" fill="#96602f"/>
<rect x="574" y="856" width="192" height="6" rx="3" fill="#dba565"/>
<rect x="574" y="856" width="10" height="44" fill="#6b4322"/>

<ellipse cx="668" cy="900" rx="34" ry="6" fill="#3d2411" opacity="0.4"/>
<g data-obj="grapes">
  <path d="M676 862 C 675 854 681 850 685 854" fill="none" stroke="#6d4425" stroke-width="4"/>
  <path d="M683 854 C 693 848 701 854 695 860 C 689 864 683 860 683 854 Z" fill="url(#swiss-leaf)"/>
  <circle cx="669" cy="870" r="7" fill="#5a3bbd"/>
  <circle cx="683" cy="868" r="7" fill="url(#swiss-grape)"/>
  <circle cx="662" cy="882" r="7" fill="#7f56f0"/>
  <circle cx="676" cy="880" r="7" fill="#432a92"/>
  <circle cx="690" cy="878" r="7" fill="url(#swiss-grape)"/>
  <circle cx="669" cy="892" r="7" fill="#432a92"/>
  <circle cx="683" cy="890" r="7" fill="#5a3bbd"/>
  <circle cx="687" cy="874" r="2.5" fill="#d5c4ff" opacity="0.8"/>
</g>
<circle cx="612" cy="878" r="23" fill="#b02f1d"/>
<path d="M612 855 C 625 855 635 865 635 878" fill="none" stroke="#f4735c" stroke-width="7"/>
<path d="M612 855 C 614 847 622 845 626 849" fill="none" stroke="#4e8737" stroke-width="5"/>
<circle cx="734" cy="880" r="20" fill="#cf7d16"/>
<path d="M734 860 C 745 860 754 869 754 880" fill="none" stroke="#fbc477" stroke-width="6"/>
<circle cx="762" cy="886" r="15" fill="#b02f1d"/>

<path d="M712 908 L712 926" stroke="#6d4425" stroke-width="3"/>
<g data-obj="purple-heart">
  <path d="M712 972 C 688 956 681 934 695 927 C 705 923 711 929 712 936 C 713 929 719 923 729 927 C 743 934 736 956 712 972 Z" fill="#4a3d57"/>
  <path d="M712 936 C 713 929 719 923 729 927 C 743 934 736 956 712 972 Z" fill="url(#swiss-purple)"/>
  <path d="M712 964 C 693 953 688 936 699 930 C 706 927 711 932 712 937 C 713 932 718 927 725 930 C 736 936 731 953 712 964 Z" fill="#7a6889"/>
  <path d="M724 933 C 730 937 730 945 725 951" fill="none" stroke="#b3a3c6" stroke-width="2.5"/>
</g>
<path d="M654 984 C 632 971 628 950 641 943 C 649 940 653 945 654 951 C 655 945 659 940 667 943 C 680 950 676 971 654 984 Z" fill="#5f4f6d"/>
<circle cx="654" cy="960" r="5" fill="#3a2f45"/>
<polygon points="600,986 609,996 600,1006 591,996" fill="#5f4f6d"/>
<circle cx="756" cy="984" r="5" fill="#5f4f6d"/>
<circle cx="766" cy="984" r="5" fill="#5f4f6d"/>
<circle cx="761" cy="992" r="5" fill="#5f4f6d"/>

<ellipse cx="716" cy="1062" rx="42" ry="8" fill="#3d2411" opacity="0.45"/>
<g data-obj="cheese-wheel">
  <path d="M690 1026 L690 1046 Q 690 1058 719 1058 Q 748 1058 748 1046 L748 1026 Z" fill="#c08f2c"/>
  <path d="M723 1026 L748 1026 L748 1046 Q 748 1057 725 1058 Z" fill="url(#swiss-cheese)"/>
  <ellipse cx="719" cy="1026" rx="29" ry="12" fill="#efc95f"/>
  <ellipse cx="721" cy="1024" rx="23" ry="9" fill="#fbeaae"/>
  <polygon points="719,1025 696,1021 700,1015 719,1014" fill="#f7dc90"/>
  <ellipse cx="710" cy="1024" rx="3.5" ry="2.4" fill="#e0bc6e"/>
  <ellipse cx="729" cy="1027" rx="4" ry="2.8" fill="#e0bc6e"/>
  <ellipse cx="703" cy="1040" rx="3.5" ry="4" fill="#a87c22"/>
  <ellipse cx="735" cy="1046" rx="4" ry="4.5" fill="#c99a3c"/>
</g>
<ellipse cx="608" cy="1062" rx="38" ry="8" fill="#3d2411" opacity="0.45"/>
<path d="M582 1032 L582 1046 Q 582 1058 610 1058 Q 638 1058 638 1046 L638 1032 Z" fill="#c08f2c"/>
<path d="M614 1032 L638 1032 L638 1046 Q 638 1057 616 1058 Z" fill="url(#swiss-cheese)"/>
<ellipse cx="610" cy="1032" rx="28" ry="12" fill="#efc95f"/>
<ellipse cx="612" cy="1030" rx="22" ry="9" fill="#fbeaae"/>
<ellipse cx="604" cy="1030" rx="4" ry="3" fill="#e0bc6e"/>
<ellipse cx="620" cy="1033" rx="4" ry="3" fill="#e0bc6e"/>

<ellipse cx="596" cy="1126" rx="40" ry="8" fill="#3d2411" opacity="0.45"/>
<g data-obj="carrots">
  <path d="M572 1120 C 568 1098 576 1082 588 1076" fill="none" stroke="#d17d15" stroke-width="12" stroke-linecap="round"/>
  <path d="M590 1122 C 586 1100 594 1084 606 1078" fill="none" stroke="#e8952c" stroke-width="12" stroke-linecap="round"/>
  <path d="M594 1118 C 590 1098 597 1085 606 1080" fill="none" stroke="#fbc477" stroke-width="4" stroke-linecap="round"/>
  <path d="M588 1076 C 584 1066 594 1062 600 1070" fill="none" stroke="#4e8737" stroke-width="6"/>
  <path d="M606 1078 C 602 1066 614 1062 620 1072" fill="none" stroke="#5c9640" stroke-width="6"/>
</g>
<ellipse cx="690" cy="1126" rx="38" ry="8" fill="#3d2411" opacity="0.45"/>
<path d="M664 1096 L664 1112 Q 664 1122 690 1122 Q 716 1122 716 1112 L716 1096 Z" fill="#b3874f"/>
<path d="M694 1096 L716 1096 L716 1112 Q 716 1121 696 1122 Z" fill="url(#swiss-cream)"/>
<ellipse cx="690" cy="1096" rx="26" ry="11" fill="#d3a86f"/>
<path d="M674 1092 C 682 1084 698 1084 706 1092" fill="none" stroke="#a5713a" stroke-width="4"/>
<ellipse cx="752" cy="1124" rx="30" ry="7" fill="#3d2411" opacity="0.45"/>
<path d="M766 1090 C 780 1092 780 1110 766 1112" fill="none" stroke="#8fa0ae" stroke-width="6"/>
<path d="M732 1086 L736 1116 Q 737 1120 746 1120 L758 1120 Q 767 1120 768 1116 L772 1086 Z" fill="#9aa9b6"/>
<path d="M756 1086 L772 1086 L768 1116 Q 767 1120 758 1120 L756 1120 Z" fill="url(#swiss-metal)"/>
<ellipse cx="752" cy="1086" rx="20" ry="6" fill="#8fa0ae"/>
<ellipse cx="752" cy="1086" rx="14" ry="4" fill="#eef4f8"/>

<path d="M0 1200 C 130 1168 280 1150 440 1148 C 590 1146 700 1160 800 1180 L800 1200 Z" fill="url(#swiss-path)"/>
<path d="M0 1200 C 130 1170 280 1152 440 1150 C 590 1148 700 1162 800 1182" fill="none" stroke="#e6d3a8" stroke-width="4" opacity="0.6"/>
<ellipse cx="180" cy="1180" rx="14" ry="5" fill="#c0a377" opacity="0.7"/>
<ellipse cx="520" cy="1172" rx="11" ry="4" fill="#c0a377" opacity="0.7"/>
<ellipse cx="690" cy="1184" rx="13" ry="5" fill="#c0a377" opacity="0.7"/>

<ellipse cx="332" cy="1196" rx="42" ry="11" fill="url(#swiss-shadow)"/>
<ellipse cx="346" cy="1192" rx="22" ry="5" fill="#3a2c14" opacity="0.28"/>
<g data-obj="mushroom">
  <rect x="345" y="1166" width="14" height="26" rx="4" fill="#e6d8ba"/>
  <rect x="353" y="1166" width="6" height="26" rx="3" fill="#fffaf0"/>
  <path d="M326 1168 C 326 1148 378 1148 378 1168 Z" fill="#c02f1e"/>
  <path d="M352 1148 C 368 1149 378 1157 378 1168 L352 1168 Z" fill="url(#swiss-red)"/>
  <circle cx="338" cy="1160" r="4" fill="#fdf6e6"/>
  <circle cx="356" cy="1156" r="5" fill="#ffffff"/>
  <circle cx="368" cy="1162" r="3.5" fill="#fdf6e6"/>
  <path d="M336 1170 C 344 1176 360 1176 368 1170" fill="none" stroke="#e0d0b0" stroke-width="3"/>
</g>
<ellipse cx="238" cy="1116" rx="40" ry="10" fill="url(#swiss-shadow)"/>
<ellipse cx="248" cy="1108" rx="30" ry="11" fill="#8496a6"/>
<ellipse cx="252" cy="1103" rx="22" ry="7" fill="url(#swiss-stone)"/>
<g data-obj="snail">
  <ellipse cx="252" cy="1096" rx="20" ry="8" fill="#b8874c"/>
  <path d="M266 1098 C 278 1096 280 1082 274 1076" fill="none" stroke="#dcb682" stroke-width="8"/>
  <path d="M274 1076 C 272 1070 277 1068 279 1073" fill="none" stroke="#e0c08a" stroke-width="3"/>
  <circle cx="248" cy="1086" r="14" fill="#c9a06a"/>
  <circle cx="248" cy="1086" r="9" fill="#ab8352"/>
  <circle cx="248" cy="1086" r="4" fill="#8a6236"/>
  <path d="M254 1077 C 259 1080 261 1085 260 1090" fill="none" stroke="#e8cb9c" stroke-width="2.5"/>
</g>
<ellipse cx="184" cy="1178" rx="34" ry="9" fill="url(#swiss-shadow)"/>
<ellipse cx="196" cy="1180" rx="26" ry="12" fill="#4e8737"/>
<path d="M180 1188 C 186 1170 196 1162 202 1158" fill="none" stroke="#5c9640" stroke-width="7"/>
<g data-obj="ladybug">
  <path d="M196 1141 C 192 1136 188 1138 190 1142" fill="none" stroke="#3a3330" stroke-width="2"/>
  <path d="M204 1141 C 208 1136 212 1138 210 1142" fill="none" stroke="#3a3330" stroke-width="2"/>
  <circle cx="200" cy="1148" r="7" fill="#3a3330"/>
  <ellipse cx="200" cy="1164" rx="18" ry="14" fill="#c02f1e"/>
  <path d="M200 1150 C 210 1150 218 1156 218 1164 L200 1164 Z" fill="url(#swiss-red)"/>
  <path d="M200 1150 L200 1178" stroke="#3a3330" stroke-width="3"/>
  <circle cx="192" cy="1158" r="3.5" fill="#3a3330"/>
  <circle cx="208" cy="1158" r="3.5" fill="#3a3330"/>
  <circle cx="192" cy="1170" r="3.5" fill="#3a3330"/>
  <circle cx="208" cy="1170" r="3.5" fill="#3a3330"/>
</g>
<ellipse cx="88" cy="1152" rx="32" ry="9" fill="url(#swiss-shadow)"/>
<ellipse cx="98" cy="1148" rx="18" ry="5" fill="#24501e" opacity="0.3"/>
<g data-obj="pinecone">
  <path d="M100 1146 C 88 1138 82 1124 86 1112 C 92 1102 108 1102 114 1112 C 118 1124 112 1138 100 1146 Z" fill="#7a4f2d"/>
  <path d="M100 1104 C 108 1104 113 1107 114 1112 C 118 1124 112 1138 100 1146 Z" fill="#a5713a"/>
  <path d="M88 1118 L112 1118 M89 1128 L111 1128 M92 1138 L108 1138" stroke="#5f3a1c" stroke-width="3"/>
  <path d="M100 1104 C 98 1096 104 1094 106 1100" fill="none" stroke="#4e8737" stroke-width="3"/>
</g>
<ellipse cx="452" cy="1146" rx="34" ry="9" fill="url(#swiss-shadow)"/>
<g data-obj="sunflower">
  <path d="M461 1140 C 459 1122 460 1112 462 1104" stroke="#4e8737" stroke-width="5" fill="none"/>
  <ellipse cx="448" cy="1122" rx="11" ry="6" transform="rotate(-25 448 1122)" fill="url(#swiss-leaf)"/>
  <ellipse cx="462" cy="1098" rx="7" ry="16" fill="#e0ae23"/>
  <ellipse cx="462" cy="1098" rx="7" ry="16" transform="rotate(45 462 1098)" fill="url(#swiss-yellow)"/>
  <ellipse cx="462" cy="1098" rx="7" ry="16" transform="rotate(90 462 1098)" fill="#f5d24e"/>
  <ellipse cx="462" cy="1098" rx="7" ry="16" transform="rotate(135 462 1098)" fill="url(#swiss-yellow)"/>
  <circle cx="462" cy="1098" r="9" fill="#7a4f2d"/>
  <circle cx="465" cy="1095" r="3" fill="#a5713a"/>
</g>
<ellipse cx="596" cy="1194" rx="46" ry="12" fill="url(#swiss-shadow)"/>
<ellipse cx="610" cy="1190" rx="26" ry="6" fill="#3a2c14" opacity="0.3"/>
<g data-obj="cat">
  <path d="M640 1174 C 650 1170 650 1160 642 1158" fill="none" stroke="#c9a06a" stroke-width="6"/>
  <ellipse cx="620" cy="1178" rx="22" ry="11" fill="#b8874c"/>
  <ellipse cx="620" cy="1173" rx="18" ry="7" fill="url(#swiss-fur)"/>
  <path d="M595 1160 L594 1150 L602 1157 Z" fill="#c9a06a"/>
  <path d="M609 1158 L613 1149 L602 1156 Z" fill="#d9b483"/>
  <circle cx="602" cy="1166" r="10" fill="#c19a63"/>
  <path d="M608 1160 C 612 1163 613 1168 611 1172" fill="none" stroke="#eed9b6" stroke-width="2.5"/>
  <circle cx="598" cy="1165" r="2" fill="#33302d"/>
  <circle cx="606" cy="1165" r="2" fill="#33302d"/>
  <path d="M600 1171 L604 1171" stroke="#8a5b34" stroke-width="2"/>
</g>

<path d="M22 1132 C 20 1114 22 1104 24 1096" fill="none" stroke="#b9cf9a" stroke-width="4"/>
<ellipse cx="24" cy="1088" rx="7" ry="10" fill="#9b7fd4"/>
<polygon points="24,1074 30,1086 18,1086" fill="#8e74c4"/>
<path d="M52 1150 C 50 1132 52 1122 54 1114" fill="none" stroke="#b9cf9a" stroke-width="4"/>
<ellipse cx="54" cy="1106" rx="7" ry="10" fill="#9b7fd4"/>
<polygon points="54,1092 60,1104 48,1104" fill="#8e74c4"/>
<ellipse cx="542" cy="1192" rx="36" ry="10" fill="url(#swiss-shadow)"/>
<ellipse cx="548" cy="1188" rx="22" ry="5" fill="#3a2c14" opacity="0.28"/>
<g data-obj="lightstick" transform="translate(503 20) rotate(-104 44 1160)">
  <ellipse cx="44" cy="1145" rx="9" ry="11" fill="#8a6dc9"/>
  <ellipse cx="44" cy="1145" rx="5.5" ry="7" fill="#b39ae0"/>
  <ellipse cx="41" cy="1140" rx="2.5" ry="3" fill="#e2daf5"/>
  <rect x="37" y="1156" width="14" height="5" rx="2" fill="#5f4a94"/>
  <rect x="38.5" y="1161" width="11" height="24" rx="5" fill="#ddd0b4"/>
  <rect x="46" y="1161" width="4" height="24" rx="2" fill="#f4ecd8"/>
  <rect x="38.5" y="1166" width="11" height="4" fill="#8e74c4"/>
  <rect x="39.5" y="1180" width="9" height="5" rx="2" fill="#c4b39a"/>
</g>
<path d="M10 1200 C 16 1176 26 1162 34 1154" fill="none" stroke="#4e8737" stroke-width="9"/>
<path d="M92 1200 C 94 1176 88 1160 80 1150" fill="none" stroke="#5c9640" stroke-width="8"/>
<ellipse cx="122" cy="1192" rx="26" ry="12" fill="#4e8737"/>
<path d="M264 1196 C 270 1176 280 1166 286 1162" fill="none" stroke="#4e8737" stroke-width="8"/>
<path d="M508 1194 C 514 1176 524 1168 530 1164" fill="none" stroke="#4e8737" stroke-width="8"/>
<path d="M714 1198 C 722 1180 734 1172 742 1168" fill="none" stroke="#4e8737" stroke-width="8"/>
</svg>`
});
