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
  <radialGradient id="swiss-shadow" cx="0.5" cy="0.5" r="0.5">
    <stop offset="0" stop-color="#24501e" stop-opacity="0.46"/>
    <stop offset="0.55" stop-color="#24501e" stop-opacity="0.24"/>
    <stop offset="1" stop-color="#24501e" stop-opacity="0"/>
  </radialGradient>
  <radialGradient id="swiss-shadow-w" cx="0.5" cy="0.5" r="0.5">
    <stop offset="0" stop-color="#48290f" stop-opacity="0.48"/>
    <stop offset="0.55" stop-color="#48290f" stop-opacity="0.22"/>
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

<polygon points="-20,436 92,232 178,340 254,242 352,436" fill="url(#swiss-far)"/>
<polygon points="448,436 550,258 624,344 712,250 830,436" fill="url(#swiss-far)"/>
<polygon points="92,232 48,318 136,318" fill="url(#swiss-farsnow)"/>
<polygon points="92,232 92,318 136,318" fill="#f4fafe" opacity="0.75"/>
<polygon points="550,258 514,330 590,330" fill="url(#swiss-farsnow)"/>
<polygon points="550,258 550,330 590,330" fill="#f4fafe" opacity="0.75"/>
<polygon points="712,250 670,328 756,328" fill="url(#swiss-farsnow)"/>
<polygon points="712,250 712,328 756,328" fill="#f4fafe" opacity="0.75"/>
<rect x="0" y="272" width="800" height="180" fill="url(#swiss-haze)"/>

<polygon points="-30,452 142,176 262,318 374,204 470,330 562,222 702,384 840,452" fill="url(#swiss-rockdark)"/>
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

<path d="M60 232 L470 300" fill="none" stroke="#42556a" stroke-width="2.5" opacity="0.85"/>
<rect x="54" y="228" width="7" height="46" fill="url(#swiss-metal-d)"/>
<rect x="466" y="296" width="7" height="52" fill="url(#swiss-metal-d)"/>
<g data-obj="cable-car">
  <rect x="246" y="252" width="7" height="16" fill="#42556a"/>
  <rect x="228" y="264" width="44" height="31" rx="7" fill="url(#swiss-red)"/>
  <rect x="228" y="264" width="44" height="9" rx="5" fill="#f4886f" opacity="0.85"/>
  <rect x="234" y="276" width="32" height="13" rx="3" fill="url(#swiss-glass)"/>
  <path d="M236 287 C 240 281 244 278 250 277" fill="none" stroke="#ffffff" stroke-width="2.5" opacity="0.8"/>
  <rect x="248" y="276" width="4" height="13" fill="#8f2415"/>
  <path d="M270 268 L270 291" stroke="#ffb9a4" stroke-width="2.5" opacity="0.8"/>
</g>

<g data-obj="summit-cross">
  <rect x="369" y="164" width="8" height="42" fill="url(#swiss-wood-d)"/>
  <rect x="354" y="176" width="38" height="8" fill="url(#swiss-wood)"/>
  <rect x="373" y="164" width="3" height="42" fill="#e0ac72"/>
  <rect x="354" y="176" width="38" height="2.5" fill="#f0c88e"/>
</g>
<g data-obj="ibex">
  <ellipse cx="160" cy="334" rx="30" ry="7" fill="url(#swiss-shadow)"/>
  <path d="M147 312 C 138 310 138 320 146 320 Z" fill="#4b5c6e"/>
  <rect x="154" y="321" width="5" height="13" fill="#3f4f60"/>
  <rect x="174" y="321" width="5" height="13" fill="#4b5c6e"/>
  <ellipse cx="166" cy="314" rx="19" ry="10" fill="#54677a"/>
  <ellipse cx="168" cy="310" rx="14" ry="5" fill="#7f93a6"/>
  <path d="M182 310 L188 296 L196 298 L190 312 Z" fill="#54677a"/>
  <path d="M190 296 C 184 282 172 282 170 290 C 178 288 184 290 188 298 Z" fill="#3b4a5b"/>
  <path d="M198 298 C 194 284 182 282 180 290 C 188 288 194 290 196 300 Z" fill="#46586a"/>
</g>
<g data-obj="paraglider">
  <path d="M214 140 C 226 118 274 118 286 140 L 276 148 C 266 134 234 134 224 148 Z" fill="url(#swiss-red)"/>
  <path d="M238 126 C 246 122 254 122 262 126 L 260 142 C 254 139 246 139 240 142 Z" fill="#fdf6e6"/>
  <path d="M282 138 C 280 130 272 124 264 122" fill="none" stroke="#ffc4b2" stroke-width="2.5" opacity="0.9"/>
  <path d="M224 148 L250 178 M276 148 L250 178" stroke="#42556a" stroke-width="1.5"/>
  <ellipse cx="250" cy="184" rx="6" ry="8" fill="url(#swiss-blue)"/>
  <circle cx="250" cy="174" r="4" fill="#f3d9d2"/>
</g>
<g data-obj="hot-balloon">
  <path d="M430 136 C 450 136 460 152 454 168 C 450 178 437 184 430 188 C 423 184 410 178 406 168 C 400 152 410 136 430 136 Z" fill="#c67a18"/>
  <path d="M430 136 C 439 136 445 152 443 168 C 441 178 436 184 430 188 C 424 184 419 178 417 168 C 415 152 421 136 430 136 Z" fill="url(#swiss-orange)"/>
  <path d="M430 136 C 434 136 436 152 435 168 C 434 178 432 184 430 188 C 428 184 426 178 425 168 C 424 152 426 136 430 136 Z" fill="url(#swiss-red)"/>
  <path d="M448 146 C 453 153 454 162 452 170" fill="none" stroke="#ffe0ae" stroke-width="2.5" opacity="0.85"/>
  <path d="M421 186 L424 194 M439 186 L436 194" stroke="#7d5227" stroke-width="1.5"/>
  <rect x="421" y="192" width="18" height="12" rx="3" fill="url(#swiss-wood)"/>
</g>
<path d="M552 92 C 560 84 566 84 572 92" fill="none" stroke="#4c5f74" stroke-width="3.5"/>
<path d="M572 92 C 578 84 584 84 592 92" fill="none" stroke="#4c5f74" stroke-width="3.5"/>
<path d="M594 72 C 599 67 603 67 607 72" fill="none" stroke="#4c5f74" stroke-width="3"/>

<path d="M-10 470 C 90 424 190 452 280 428 C 380 402 470 448 570 424 C 660 402 740 440 810 424 L810 524 L-10 524 Z" fill="url(#swiss-treeband)"/>
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

<path d="M-10 496 C 120 462 240 500 380 480 C 520 460 640 498 810 470 L810 1210 L-10 1210 Z" fill="url(#swiss-meadow)"/>
<path d="M-10 826 C 170 800 330 842 500 820 C 640 802 730 836 810 818 L810 900 L-10 900 Z" fill="url(#swiss-meadow2)" opacity="0.8"/>
<path d="M-10 962 C 180 936 340 976 520 954 C 660 936 740 968 810 950 L810 1210 L-10 1210 Z" fill="url(#swiss-meadow3)"/>
<path d="M-10 1092 C 190 1064 350 1102 540 1080 C 670 1064 750 1092 810 1078 L810 1210 L-10 1210 Z" fill="url(#swiss-meadow4)"/>

<ellipse cx="86" cy="572" rx="52" ry="15" fill="url(#swiss-shadow)"/>
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

<ellipse cx="518" cy="712" rx="238" ry="28" fill="url(#swiss-shadow)"/>
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
<ellipse cx="676" cy="516" rx="18" ry="7" fill="#8c5a2c" opacity="0.3"/>
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
  <rect x="534" y="624" width="28" height="26" rx="3" fill="url(#swiss-glass)"/>
  <path d="M537 646 C 541 639 545 634 551 631" fill="none" stroke="#ffffff" stroke-width="2.5" opacity="0.8"/>
  <path d="M548 624 L548 650 M534 637 L562 637" stroke="#6d431f" stroke-width="3"/>
  <circle cx="564" cy="664" r="4" fill="#e8c98a"/>
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

<g data-obj="birdhouse">
  <rect x="698" y="604" width="28" height="27" rx="2" fill="#a5713a"/>
  <rect x="714" y="604" width="12" height="27" fill="#d8a465"/>
  <path d="M694 604 L712 589 L730 604 Z" fill="#8a5b34"/>
  <path d="M712 589 L730 604 L712 604 Z" fill="#c08b4f"/>
  <circle cx="712" cy="614" r="6.5" fill="#4a2c14"/>
  <rect x="710" y="621" width="4" height="10" fill="#8a5b34"/>
  <circle cx="712" cy="633" r="3" fill="#8a5b34"/>
</g>
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
<rect x="512" y="656" width="46" height="27" rx="4" fill="#8a5730"/>
<rect x="512" y="656" width="46" height="6" rx="3" fill="#ac6f3e"/>
<ellipse cx="530" cy="654" rx="10" ry="5" fill="url(#swiss-cream)"/>
<ellipse cx="546" cy="653" rx="10" ry="6" fill="url(#swiss-hay)"/>
<rect x="420" y="668" width="32" height="14" rx="6" fill="url(#swiss-red)"/>
<circle cx="436" cy="675" r="3.6" fill="#ffffff"/>
<rect x="654" y="668" width="30" height="14" rx="6" fill="#c02f1e"/>
<rect x="654" y="668" width="30" height="4" rx="2" fill="#f0705a"/>
<path d="M682 670 L704 664 L705 669 L682 674 Z" fill="url(#swiss-metal)"/>

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
<path d="M90 566 L88 610 L120 610 L124 562 Z" fill="#b7d4e6"/>
<path d="M108 564 L124 562 L120 610 L106 610 Z" fill="#e4f2fa"/>
<path d="M89 578 L122 576 M89 590 L121 588" stroke="#8fb8d0" stroke-width="4"/>
<path d="M128 578 L112 572 M156 576 L172 570" stroke="#b02f1d" stroke-width="4"/>
<path d="M132 570 L128 606 L156 606 L154 568 Z" fill="#c9331f"/>
<path d="M144 569 L154 568 L156 606 L143 606 Z" fill="#f2705a"/>
<path d="M136 570 C 138 560 148 560 150 570" fill="none" stroke="#b02f1d" stroke-width="4"/>

<ellipse cx="98" cy="706" rx="70" ry="16" fill="url(#swiss-shadow)"/>
<g data-obj="wood-bench">
  <rect x="68" y="666" width="74" height="12" rx="3" fill="#8f5c30"/>
  <rect x="68" y="666" width="74" height="4" rx="2" fill="#dba565"/>
  <rect x="72" y="644" width="66" height="9" rx="3" fill="#7d4f2b"/>
  <rect x="72" y="644" width="66" height="3" rx="2" fill="#c08b4f"/>
  <rect x="76" y="678" width="10" height="24" fill="#6b4322"/>
  <rect x="124" y="678" width="10" height="24" fill="#7a4f2d"/>
  <rect x="130" y="678" width="4" height="24" fill="#a5713a"/>
  <rect x="74" y="650" width="8" height="18" fill="#7a4f2d"/>
  <rect x="128" y="650" width="8" height="18" fill="#8a5b34"/>
</g>
<ellipse cx="122" cy="662" rx="24" ry="7" fill="#4f382a"/>
<path d="M106 662 C 106 644 138 644 138 662 Z" fill="#6d5140"/>
<path d="M122 644 C 134 645 138 653 138 662 L122 662 Z" fill="#93745a"/>
<rect x="104" y="655" width="36" height="5" fill="#3f2c20"/>
<g data-obj="horseshoe">
  <path d="M46 686 C 32 686 24 698 26 712 C 28 722 34 726 38 724 C 42 722 38 716 36 710 C 34 700 39 694 46 694 C 53 694 58 700 56 710 C 54 716 50 722 54 724 C 58 726 64 722 66 712 C 68 698 60 686 46 686 Z" fill="url(#swiss-metal)"/>
  <path d="M46 686 C 56 686 64 694 66 704" fill="none" stroke="#f2f7fb" stroke-width="2.5"/>
  <circle cx="34" cy="698" r="2.5" fill="#5f6b78"/>
  <circle cx="58" cy="698" r="2.5" fill="#5f6b78"/>
  <circle cx="32" cy="712" r="2.5" fill="#5f6b78"/>
  <circle cx="60" cy="712" r="2.5" fill="#5f6b78"/>
</g>
<path d="M148 668 L160 668 L160 690 L174 690 L174 700 L148 700 Z" fill="#5e4231"/>
<path d="M154 668 L160 668 L160 690 L174 690 L174 700 L154 700 Z" fill="#8a6a4a"/>
<rect x="148" y="698" width="26" height="5" rx="2" fill="#3f2c20"/>

<ellipse cx="184" cy="700" rx="42" ry="12" fill="url(#swiss-shadow)"/>
<g data-obj="milk-churn">
  <path d="M176 690 L176 650 Q 176 640 186 636 L186 628 L206 628 L206 636 Q 216 640 216 650 L216 690 Z" fill="#94a3b1"/>
  <path d="M198 629 L206 628 L206 636 Q 216 640 216 650 L216 690 L198 690 Z" fill="url(#swiss-metal)"/>
  <rect x="182" y="620" width="28" height="10" rx="4" fill="#7f8f9d"/>
  <rect x="196" y="620" width="14" height="10" rx="4" fill="#c4ced7"/>
  <rect x="174" y="659" width="44" height="6" fill="#75858f"/>
  <path d="M212 646 L212 686" stroke="#eaf2f8" stroke-width="3" opacity="0.85"/>
</g>
<g data-obj="watering-can">
  <path d="M238 656 C 242 638 258 638 262 656" fill="none" stroke="#7f8f9d" stroke-width="5"/>
  <path d="M266 668 L283 652 L289 659 L272 675 Z" fill="url(#swiss-metal)"/>
  <ellipse cx="286" cy="655" rx="6.5" ry="5" transform="rotate(-42 286 655)" fill="#7f8f9d"/>
  <path d="M226 700 L226 668 Q 226 658 238 656 L262 656 Q 272 658 272 668 L272 700 Z" fill="#93a2b0"/>
  <path d="M256 656 L262 656 Q 272 658 272 668 L272 700 L256 700 Z" fill="url(#swiss-metal)"/>
  <rect x="222" y="649" width="54" height="9" rx="4" fill="#77879a"/>
  <path d="M268 664 L268 696" stroke="#eef4f9" stroke-width="3" opacity="0.85"/>
</g>

<ellipse cx="762" cy="676" rx="44" ry="13" fill="url(#swiss-shadow)"/>
<g data-obj="wheelbarrow">
  <path d="M730 626 L792 626 L784 650 L740 650 Z" fill="#8fa0ae"/>
  <path d="M730 626 L792 626 L790 633 L732 633 Z" fill="#d3dce4"/>
  <path d="M770 626 L792 626 L784 650 L766 650 Z" fill="url(#swiss-metal)"/>
  <path d="M740 650 L736 634 L746 634 L748 650 Z" fill="#7d8d9c"/>
  <circle cx="734" cy="660" r="12" fill="#4c3323"/>
  <circle cx="734" cy="660" r="4.5" fill="#a5713a"/>
  <path d="M784 638 L794 654" stroke="#a5713a" stroke-width="5"/>
  <rect x="772" y="650" width="7" height="16" fill="#8a5b34"/>
</g>

<ellipse cx="300" cy="712" rx="76" ry="16" fill="url(#swiss-shadow)"/>
<rect x="252" y="614" width="118" height="90" rx="4" fill="#7a4f2d"/>
<circle cx="272" cy="632" r="15" fill="#c99253"/>
<circle cx="272" cy="632" r="9" fill="#a5713a"/>
<circle cx="270" cy="629" r="4" fill="#c08b4f"/>
<circle cx="306" cy="630" r="14" fill="#d9ad74"/>
<circle cx="306" cy="630" r="8" fill="#b8874c"/>
<circle cx="340" cy="632" r="14" fill="#c99253"/>
<circle cx="340" cy="632" r="8" fill="#a5713a"/>
<circle cx="288" cy="666" r="15" fill="#d9ad74"/>
<circle cx="288" cy="666" r="9" fill="#b8874c"/>
<circle cx="322" cy="664" r="14" fill="#c99253"/>
<circle cx="322" cy="664" r="8" fill="#a5713a"/>
<circle cx="356" cy="664" r="13" fill="#d9ad74"/>
<circle cx="356" cy="664" r="7" fill="#b8874c"/>
<circle cx="300" cy="696" r="13" fill="#c99253"/>
<circle cx="300" cy="696" r="7" fill="#a5713a"/>
<rect x="246" y="606" width="130" height="12" rx="4" fill="#5f3a1c"/>

<g data-obj="axe">
  <path d="M394 690 L404 690 L394 634 L386 634 Z" fill="#a5713a"/>
  <path d="M399 690 L404 690 L394 634 L390 634 Z" fill="#dfb37a"/>
  <polygon points="378,622 402,618 408,642 382,646" fill="#7d8d9c"/>
  <polygon points="392,620 402,618 408,642 398,644" fill="url(#swiss-metal)"/>
  <path d="M400 620 L406 641" stroke="#f2f7fb" stroke-width="2.5"/>
</g>

<ellipse cx="252" cy="596" rx="34" ry="9" fill="url(#swiss-shadow)"/>
<path d="M245 542 C 262 552 274 574 272 592 L218 592 C 216 574 228 552 245 542 Z" fill="#c69a5c"/>
<path d="M245 542 C 262 552 274 574 272 592 L246 592 L245 542 Z" fill="url(#swiss-hay)"/>
<path d="M224 574 L266 572 M222 584 L268 582" stroke="#b3822f" stroke-width="3" opacity="0.65"/>
<path d="M245 542 C 244 534 250 532 252 538" fill="none" stroke="#c08b4f" stroke-width="3"/>

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
<rect x="-10" y="700" width="820" height="12" rx="4" fill="#9c6634"/>
<rect x="-10" y="700" width="820" height="4" rx="2" fill="#dba565"/>
<rect x="-10" y="728" width="820" height="12" rx="4" fill="#9c6634"/>
<rect x="-10" y="728" width="820" height="4" rx="2" fill="#dba565"/>

<rect x="232" y="704" width="14" height="10" fill="#a52c1c"/>
<path d="M228 714 Q 240 706 252 714 L 257 742 Q 240 750 223 742 Z" fill="#c99425"/>
<path d="M240 709 Q 247 710 252 714 L 257 742 Q 249 746 240 747 Z" fill="url(#swiss-brass)"/>
<path d="M223 741 Q 240 749 257 741 L 258 748 Q 240 756 222 748 Z" fill="#a5741f"/>
<rect x="746" y="702" width="6" height="12" rx="3" fill="#c9a06a"/>
<path d="M742 714 Q 754 706 766 714 L 771 742 Q 754 752 737 742 Z" fill="#c99425"/>
<path d="M754 709 Q 761 710 766 714 L 771 742 Q 763 748 754 749 Z" fill="url(#swiss-brass)"/>
<ellipse cx="754" cy="746" rx="17" ry="6" fill="#a5741f"/>

<g data-obj="cowbell">
  <rect x="462" y="704" width="16" height="15" rx="2" fill="#6d4425"/>
  <rect x="470" y="704" width="8" height="15" rx="2" fill="#a5713a"/>
  <rect x="466" y="709" width="8" height="6" rx="1" fill="#c9a06a"/>
  <path d="M456 720 Q 470 711 484 720 L 490 748 Q 470 756 450 748 Z" fill="#c19022"/>
  <path d="M470 714 Q 478 715 484 720 L 490 748 Q 480 753 470 754 Z" fill="url(#swiss-brass)"/>
  <path d="M450 747 Q 470 755 490 747 L 491 755 Q 470 764 449 755 Z" fill="#9a6a1a"/>
  <path d="M470 753 Q 481 752 491 755 L 490 762 Q 480 764 470 762 Z" fill="#d3a237"/>
  <path d="M482 724 C 486 731 488 739 488 746" fill="none" stroke="#fbeec0" stroke-width="2.5" opacity="0.9"/>
  <ellipse cx="470" cy="734" rx="5" ry="7" fill="#9a6a1a" opacity="0.45"/>
  <ellipse cx="470" cy="759" rx="4.5" ry="4" fill="#5c4132"/>
</g>
<rect x="168" y="698" width="8" height="60" rx="3" fill="#8f5c30"/>
<rect x="212" y="698" width="8" height="60" rx="3" fill="#8f5c30"/>
<path d="M172 750 L216 702" stroke="#c08b4f" stroke-width="6"/>
<rect x="168" y="698" width="52" height="8" rx="3" fill="url(#swiss-wood)"/>
<rect x="168" y="726" width="52" height="8" rx="3" fill="url(#swiss-wood)"/>
<circle cx="216" cy="728" r="4" fill="#7f8f9d"/>
<rect x="326" y="694" width="9" height="64" rx="3" fill="#7d4f2b"/>
<rect x="331" y="694" width="4" height="64" fill="#b3813f"/>
<polygon points="335,700 362,700 368,708 362,716 335,716" fill="#d9a441"/>
<polygon points="335,700 362,700 362,704 335,704" fill="#f7dc9a"/>
<polygon points="326,724 304,724 298,732 304,740 326,740" fill="#c9a06a"/>

<ellipse cx="128" cy="834" rx="92" ry="18" fill="url(#swiss-shadow)"/>
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

<ellipse cx="618" cy="818" rx="80" ry="17" fill="url(#swiss-shadow)"/>
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

<ellipse cx="272" cy="830" rx="46" ry="12" fill="url(#swiss-shadow)"/>
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
<ellipse cx="196" cy="866" rx="34" ry="10" fill="url(#swiss-shadow)"/>
<g data-obj="duck">
  <path d="M216 846 C 224 840 226 848 220 852 Z" fill="#e8e3d8"/>
  <rect x="196" y="856" width="5" height="9" fill="#e8952c"/>
  <rect x="206" y="856" width="5" height="9" fill="#cf7d16"/>
  <ellipse cx="200" cy="846" rx="20" ry="12" fill="#efece3"/>
  <ellipse cx="198" cy="841" rx="16" ry="8" fill="#ffffff"/>
  <path d="M214 840 C 218 844 219 849 217 853" fill="none" stroke="#ffffff" stroke-width="3"/>
  <circle cx="186" cy="832" r="9" fill="#f7f4ec"/>
  <circle cx="183" cy="830" r="2" fill="#33302d"/>
  <path d="M177 834 L166 836 L177 840 Z" fill="#e8952c"/>
</g>
<ellipse cx="298" cy="762" rx="34" ry="9" fill="url(#swiss-shadow)"/>
<g data-obj="rooster">
  <path d="M316 730 C 328 720 330 736 318 744 Z" fill="#8a5b34"/>
  <ellipse cx="300" cy="738" rx="17" ry="14" fill="#b8874c"/>
  <ellipse cx="299" cy="733" rx="13" ry="9" fill="url(#swiss-fur)"/>
  <rect x="294" y="750" width="5" height="10" fill="#cf7d16"/>
  <rect x="304" y="750" width="5" height="10" fill="#e8952c"/>
  <circle cx="290" cy="720" r="9" fill="#d9ad74"/>
  <path d="M286 710 C 288 704 294 706 294 712 C 298 706 302 710 299 715 Z" fill="url(#swiss-red)"/>
  <path d="M282 722 L272 724 L282 728 Z" fill="#e8952c"/>
  <circle cx="287" cy="719" r="2" fill="#33302d"/>
  <path d="M286 728 C 284 734 288 736 290 732 Z" fill="#d33c28"/>
</g>
<ellipse cx="732" cy="874" rx="46" ry="12" fill="url(#swiss-shadow)"/>
<g data-obj="sheepdog">
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
<ellipse cx="660" cy="884" rx="44" ry="12" fill="url(#swiss-shadow)"/>
<g data-obj="goat">
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
<ellipse cx="36" cy="816" rx="30" ry="9" fill="url(#swiss-shadow)"/>
<g data-obj="marmot">
  <ellipse cx="28" cy="802" rx="18" ry="14" fill="#8f6a44"/>
  <ellipse cx="30" cy="797" rx="13" ry="9" fill="url(#swiss-fur)"/>
  <circle cx="22" cy="772" r="4" fill="#8a6238"/>
  <circle cx="34" cy="772" r="4" fill="#a07a4c"/>
  <circle cx="28" cy="780" r="10" fill="#9a7350"/>
  <path d="M34 774 C 38 777 39 782 37 786" fill="none" stroke="#dcbb92" stroke-width="2.5"/>
  <circle cx="24" cy="779" r="2" fill="#33302d"/>
  <circle cx="32" cy="779" r="2" fill="#33302d"/>
  <ellipse cx="28" cy="785" rx="4" ry="3" fill="#e0b891"/>
</g>

<ellipse cx="172" cy="872" rx="34" ry="10" fill="url(#swiss-shadow)"/>
<g data-obj="stone-cairn">
  <ellipse cx="180" cy="864" rx="22" ry="10" fill="#8c9aa8"/>
  <ellipse cx="184" cy="860" rx="17" ry="6" fill="url(#swiss-stone)"/>
  <ellipse cx="180" cy="844" rx="17" ry="9" fill="#8496a6"/>
  <ellipse cx="183" cy="841" rx="12" ry="5" fill="url(#swiss-stone)"/>
  <ellipse cx="180" cy="828" rx="12" ry="7" fill="#8c9aa8"/>
  <ellipse cx="182" cy="825" rx="9" ry="4" fill="#dee5eb"/>
</g>
<ellipse cx="612" cy="872" rx="24" ry="12" fill="#8496a6"/>
<ellipse cx="616" cy="868" rx="16" ry="6" fill="url(#swiss-stone)"/>
<ellipse cx="466" cy="892" rx="18" ry="9" fill="#8496a6"/>
<ellipse cx="469" cy="888" rx="12" ry="5" fill="url(#swiss-stone)"/>

<g data-obj="thistle">
  <path d="M30 896 C 28 882 29 872 31 864" stroke="#5c9640" stroke-width="4" fill="none"/>
  <path d="M20 878 L8 872 M40 876 L52 870" stroke="#6b9a4a" stroke-width="3"/>
  <path d="M18 864 C 22 856 38 856 42 864 C 38 872 22 872 18 864 Z" fill="url(#swiss-leaf)"/>
  <path d="M20 862 L30 830 L40 862 Z" fill="#7a63b0"/>
  <path d="M30 830 L40 862 L31 862 Z" fill="#a891dc"/>
  <path d="M24 860 L30 838 L36 860 Z" fill="#bda6e8"/>
</g>
<g data-obj="red-poppy">
  <path d="M275 880 C 273 866 274 858 276 850" fill="none" stroke="#5c9640" stroke-width="4"/>
  <ellipse cx="266" cy="866" rx="9" ry="4" transform="rotate(-25 266 866)" fill="url(#swiss-leaf)"/>
  <path d="M275 844 C 262 844 256 852 260 858 C 266 864 284 864 290 858 C 294 852 288 844 275 844 Z" fill="#c02f1e"/>
  <path d="M275 844 C 286 844 294 851 290 858 C 286 862 280 863 276 863 Z" fill="url(#swiss-red)"/>
  <path d="M275 848 C 266 848 262 853 265 857 C 270 861 282 861 286 857 C 289 853 284 848 275 848 Z" fill="#eb6249"/>
  <circle cx="275" cy="855" r="4" fill="#3a3330"/>
</g>
<g data-obj="blue-gentian">
  <path d="M600 888 C 598 874 599 864 601 856" stroke="#5c9640" stroke-width="4" fill="none"/>
  <ellipse cx="590" cy="874" rx="9" ry="4" transform="rotate(-20 590 874)" fill="url(#swiss-leaf)"/>
  <path d="M600 848 L582 870 L618 870 Z" fill="#2f5691"/>
  <path d="M600 848 L618 870 L601 870 Z" fill="url(#swiss-blue)"/>
  <path d="M600 852 L592 866 L608 866 Z" fill="#6d9ada"/>
  <ellipse cx="600" cy="848" rx="17" ry="6" fill="#3f6fb5"/>
  <circle cx="600" cy="848" r="5" fill="#f7e7b0"/>
</g>
<g data-obj="edelweiss">
  <path d="M476 900 C 473 884 474 874 476 866" fill="none" stroke="#5c9640" stroke-width="5"/>
  <path d="M476 888 C 467 886 462 878 463 873 C 471 873 476 879 476 888 Z" fill="url(#swiss-leaf)"/>
  <ellipse cx="476" cy="866" rx="6.5" ry="19" fill="#e6eef2"/>
  <ellipse cx="476" cy="866" rx="6.5" ry="19" transform="rotate(45 476 866)" fill="#fdfdf8"/>
  <ellipse cx="476" cy="866" rx="6.5" ry="19" transform="rotate(90 476 866)" fill="#eef4f7"/>
  <ellipse cx="476" cy="866" rx="6.5" ry="19" transform="rotate(135 476 866)" fill="#ffffff"/>
  <ellipse cx="476" cy="866" rx="5" ry="15" transform="rotate(22 476 866)" fill="#ffffff"/>
  <circle cx="476" cy="866" r="7" fill="#f5e2a6"/>
  <circle cx="473" cy="863" r="2.4" fill="#f5d24e"/>
  <circle cx="479" cy="863" r="2.4" fill="#f7dc90"/>
  <circle cx="476" cy="869" r="2.4" fill="#e8bd63"/>
</g>
<path d="M492 902 C 490 878 494 862 498 852" fill="none" stroke="#5c9640" stroke-width="5"/>
<circle cx="498" cy="846" r="6" fill="#fdfdf8"/>
<circle cx="490" cy="840" r="6" fill="#eef4f7"/>
<circle cx="506" cy="840" r="6" fill="#ffffff"/>
<circle cx="498" cy="833" r="6" fill="#fdfdf8"/>
<circle cx="498" cy="840" r="5" fill="#f5d24e"/>
<path d="M528 900 C 526 878 530 862 534 852" fill="none" stroke="#5c9640" stroke-width="5"/>
<polygon points="534,828 540,844 534,852 528,844" fill="#ffffff"/>
<polygon points="518,842 534,836 542,842 534,848" fill="#eef4f7"/>
<polygon points="550,842 534,836 526,842 534,848" fill="#ffffff"/>
<circle cx="534" cy="842" r="4" fill="#e8bd63"/>
<path d="M440 906 C 438 884 442 868 446 858" fill="none" stroke="#5c9640" stroke-width="5"/>
<ellipse cx="446" cy="846" rx="5" ry="10" fill="#fdfdf8"/>
<ellipse cx="446" cy="846" rx="5" ry="10" transform="rotate(60 446 846)" fill="#eef4f7"/>
<ellipse cx="446" cy="846" rx="5" ry="10" transform="rotate(120 446 846)" fill="#ffffff"/>
<circle cx="446" cy="846" r="4" fill="#f5d24e"/>

<g data-obj="butterfly">
  <path d="M510 796 C 498 780 484 782 486 794 C 488 804 502 804 510 796 Z" fill="#cf8017"/>
  <path d="M510 796 C 522 780 536 782 534 794 C 532 804 518 804 510 796 Z" fill="url(#swiss-orange)"/>
  <path d="M510 798 C 502 808 492 810 494 802 Z" fill="#b06a10"/>
  <path d="M510 798 C 518 808 528 810 526 802 Z" fill="#e29228"/>
  <path d="M528 786 C 532 788 533 792 532 795" fill="none" stroke="#ffe4b0" stroke-width="2"/>
  <ellipse cx="510" cy="796" rx="3" ry="10" fill="#4a423e"/>
  <path d="M508 786 C 504 780 500 780 500 784" fill="none" stroke="#4a423e" stroke-width="1.5"/>
  <path d="M512 786 C 516 780 520 780 520 784" fill="none" stroke="#4a423e" stroke-width="1.5"/>
</g>
<ellipse cx="346" cy="724" rx="10" ry="5" fill="#eaf5fb" opacity="0.8"/>
<ellipse cx="356" cy="724" rx="9" ry="5" fill="#eaf5fb" opacity="0.8"/>
<ellipse cx="350" cy="736" rx="14" ry="10" fill="url(#swiss-yellow)"/>
<rect x="342" y="728" width="5" height="17" fill="#3a3330"/>
<rect x="352" y="728" width="5" height="17" fill="#3a3330"/>
<ellipse cx="364" cy="734" rx="5" ry="4" fill="#3a3330"/>

<ellipse cx="248" cy="1130" rx="250" ry="36" fill="url(#swiss-shadow)"/>
<polygon points="92,952 118,952 152,1122 122,1122" fill="#7a4f2d"/>
<polygon points="110,952 118,952 152,1122 142,1122" fill="#a5713a"/>
<polygon points="216,952 242,952 200,1122 172,1122" fill="#6b4322"/>
<polygon points="234,952 242,952 200,1122 190,1122" fill="#94612f"/>
<polygon points="330,952 356,952 390,1122 360,1122" fill="#7a4f2d"/>
<polygon points="348,952 356,952 390,1122 380,1122" fill="#a5713a"/>
<polygon points="452,952 478,952 438,1122 410,1122" fill="#6b4322"/>
<polygon points="470,952 478,952 438,1122 428,1122" fill="#94612f"/>
<rect x="120" y="1032" width="300" height="14" rx="4" fill="#5f3a1c"/>
<rect x="30" y="1046" width="500" height="22" rx="5" fill="#96602f"/>
<rect x="30" y="1046" width="500" height="8" rx="4" fill="#dba565"/>
<polygon points="60,952 500,952 530,864 90,864" fill="#b8813f"/>
<polygon points="280,952 500,952 530,864 310,864" fill="url(#swiss-hay)"/>
<polygon points="60,952 500,952 496,936 66,936" fill="#7a4f2d"/>
<polygon points="60,952 260,952 288,864 90,864" fill="#f6e7c9" opacity="0.85"/>
<path d="M118 864 L92 952" stroke="#c9331f" stroke-width="9" opacity="0.5"/>
<path d="M84 892 L286 892" stroke="#c9331f" stroke-width="9" opacity="0.42"/>
<rect x="140" y="1012" width="320" height="10" rx="3" fill="#7a4f2d"/>
<rect x="140" y="1012" width="320" height="3" rx="2" fill="#c08b4f"/>

<path d="M182 1012 L182 972 L176 964 L188 964 L182 972" fill="none" stroke="#8a5b34" stroke-width="6"/>
<path d="M166 968 L200 968" stroke="#b3813f" stroke-width="5"/>
<path d="M212 1012 L216 966" fill="none" stroke="#b3813f" stroke-width="7"/>
<path d="M216 966 C 210 956 224 952 228 962" fill="none" stroke="#8a5b34" stroke-width="6"/>
<path d="M46 1014 L54 962" fill="none" stroke="#b3813f" stroke-width="8"/>
<path d="M54 962 C 48 950 62 946 66 958" fill="none" stroke="#8a5b34" stroke-width="6"/>

<g data-obj="alphorn">
  <polygon points="126,967 130,971 90,1014 84,1008" fill="#a5713a"/>
  <polygon points="126,967 128,969 87,1011 84,1008" fill="url(#swiss-wood-l)"/>
  <polygon points="90,1014 84,1008 68,1017 78,1029" fill="#8a5b34"/>
  <ellipse cx="72" cy="1023" rx="11" ry="5" transform="rotate(48 72 1023)" fill="#5c4132"/>
  <ellipse cx="72" cy="1023" rx="7" ry="3" transform="rotate(48 72 1023)" fill="#3f2c20"/>
  <polygon points="112,981 116,985 109,992 105,988" fill="#7d4f2b"/>
  <polygon points="98,996 102,1000 95,1007 91,1003" fill="#7d4f2b"/>
  <circle cx="128" cy="968" r="4" fill="#6d4425"/>
</g>

<ellipse cx="238" cy="1048" rx="32" ry="9" fill="url(#swiss-shadow-w)"/>
<ellipse cx="240" cy="1040" rx="30" ry="9" fill="#b8874c"/>
<ellipse cx="240" cy="1036" rx="25" ry="7" fill="url(#swiss-hay)"/>
<ellipse cx="230" cy="1022" rx="22" ry="14" fill="#b8823f"/>
<ellipse cx="232" cy="1016" rx="18" ry="10" fill="url(#swiss-hay)"/>
<path d="M216 1014 L244 1013" stroke="#9c6a2b" stroke-width="4"/>
<ellipse cx="258" cy="1030" rx="14" ry="9" fill="#c39a5c"/>
<ellipse cx="259" cy="1026" rx="11" ry="6" fill="url(#swiss-cream)"/>

<g data-obj="jam-jar">
  <path d="M192 990 L192 1012 Q 192 1016 198 1016 L222 1016 Q 228 1016 228 1012 L228 990 Z" fill="#7c2a42"/>
  <path d="M212 990 L228 990 L228 1012 Q 228 1016 222 1016 L212 1016 Z" fill="#ab4763"/>
  <path d="M196 993 L196 1012" stroke="#c9718c" stroke-width="3" opacity="0.7"/>
  <circle cx="210" cy="1000" r="6" fill="#c25478"/>
  <rect x="190" y="982" width="40" height="10" rx="4" fill="#efe0c2"/>
  <rect x="212" y="982" width="18" height="10" rx="4" fill="#fdf6e6"/>
  <ellipse cx="210" cy="982" rx="21" ry="6" fill="#fffaf0"/>
</g>
<rect x="234" y="988" width="30" height="26" rx="4" fill="#2f5691"/>
<rect x="250" y="988" width="14" height="26" rx="4" fill="url(#swiss-blue)"/>
<rect x="230" y="984" width="38" height="8" rx="4" fill="#f6e7c9"/>
<rect x="238" y="994" width="9" height="8" rx="1" fill="#5c3520"/>
<rect x="249" y="994" width="9" height="8" rx="1" fill="#6b4028"/>
<rect x="238" y="1004" width="9" height="8" rx="1" fill="#432613"/>
<rect x="249" y="1004" width="9" height="8" rx="1" fill="#553218"/>

<g data-obj="chocolate-bar" transform="rotate(-5 330 994)">
  <rect x="302" y="976" width="60" height="36" rx="5" fill="url(#swiss-choc)"/>
  <rect x="302" y="1001" width="60" height="11" rx="5" fill="#3d2932"/>
  <rect x="302" y="976" width="60" height="6" rx="3" fill="#a2798a"/>
  <ellipse cx="346" cy="992" rx="12" ry="7" fill="#e2cdae" opacity="0.4"/>
  <rect x="298" y="973" width="34" height="41" rx="5" fill="#b6ada0"/>
  <rect x="318" y="973" width="14" height="41" rx="5" fill="#dcd5ca"/>
  <rect x="302" y="979" width="26" height="30" rx="3" fill="url(#swiss-cocoa)"/>
  <rect x="304" y="981" width="10" height="12" rx="1.5" fill="#432613"/>
  <rect x="316" y="981" width="10" height="12" rx="1.5" fill="#573018"/>
  <rect x="304" y="995" width="10" height="12" rx="1.5" fill="#432613"/>
  <rect x="316" y="995" width="10" height="12" rx="1.5" fill="#573018"/>
  <rect x="304" y="981" width="10" height="2.5" rx="1" fill="#7b4c2c"/>
  <rect x="316" y="981" width="10" height="2.5" rx="1" fill="#8f5c34"/>
</g>
<rect x="370" y="982" width="56" height="32" rx="5" fill="#c07716"/>
<rect x="396" y="982" width="30" height="32" rx="5" fill="url(#swiss-orange)"/>
<rect x="366" y="979" width="30" height="35" rx="5" fill="#b6ada0"/>
<rect x="370" y="985" width="22" height="24" rx="3" fill="url(#swiss-cocoa)"/>
<circle cx="376" cy="991" r="4" fill="#432613"/>
<circle cx="386" cy="991" r="4" fill="#573018"/>
<circle cx="376" cy="1002" r="4" fill="#432613"/>
<circle cx="386" cy="1002" r="4" fill="#573018"/>

<path d="M278 1000 L332 996 L336 1024 L282 1028 Z" fill="#94612f"/>
<path d="M278 1000 L332 996 L333 1006 L279 1010 Z" fill="url(#swiss-wood)"/>
<path d="M288 1010 L306 1008 L308 1021 L290 1023 Z" fill="url(#swiss-cream)"/>
<path d="M312 1008 L328 1006 L330 1019 L314 1021 Z" fill="#dfae72"/>

<ellipse cx="366" cy="1040" rx="34" ry="10" fill="url(#swiss-shadow-w)"/>
<g data-obj="berry-plate">
  <ellipse cx="366" cy="1032" rx="28" ry="9" fill="#c2d3df"/>
  <path d="M338 1030 C 342 1048 390 1048 394 1030 Z" fill="url(#swiss-white)"/>
  <path d="M388 1036 C 385 1042 376 1046 368 1046" fill="none" stroke="#ffffff" stroke-width="2.5"/>
  <circle cx="352" cy="1027" r="6" fill="#5a3bbd"/>
  <circle cx="366" cy="1025" r="7" fill="url(#swiss-grape)"/>
  <circle cx="380" cy="1028" r="6" fill="#7f56f0"/>
</g>

<ellipse cx="172" cy="1046" rx="36" ry="10" fill="url(#swiss-shadow-w)"/>
<g data-obj="teapot">
  <path d="M206 1022 C 220 1018 222 1036 210 1040" fill="none" stroke="#cfe0ea" stroke-width="6"/>
  <ellipse cx="178" cy="1030" rx="28" ry="20" fill="#d7e3ec"/>
  <path d="M178 1010 C 194 1010 206 1019 206 1030 C 206 1041 194 1050 178 1050 Z" fill="url(#swiss-white)"/>
  <ellipse cx="172" cy="1022" rx="21" ry="12" fill="#ffffff"/>
  <path d="M196 1018 C 202 1022 205 1027 205 1032" fill="none" stroke="#ffffff" stroke-width="3"/>
  <ellipse cx="178" cy="1010" rx="11" ry="5" fill="#cfe0ea"/>
  <circle cx="178" cy="1005" r="3.5" fill="#d33c28"/>
</g>
<path d="M404 1020 L408 1046 L432 1046 L436 1020 Z" fill="#b3874f"/>
<path d="M422 1020 L436 1020 L432 1046 L420 1046 Z" fill="url(#swiss-cream)"/>
<ellipse cx="420" cy="1019" rx="18" ry="7" fill="#9c6a2b"/>
<ellipse cx="421" cy="1015" rx="9" ry="5" fill="#e8cb9c"/>

<ellipse cx="140" cy="1194" rx="54" ry="12" fill="url(#swiss-shadow)"/>
<path d="M100 1132 L108 1184 L172 1184 L180 1132 Z" fill="#b3874f"/>
<path d="M144 1132 L180 1132 L172 1184 L142 1184 Z" fill="url(#swiss-cream)"/>
<rect x="94" y="1124" width="92" height="12" rx="5" fill="#a5713a"/>
<path d="M102 1154 L178 1154" stroke="#9c6a2b" stroke-width="4"/>
<path d="M112 1124 C 118 1100 162 1100 168 1124" fill="none" stroke="#a5713a" stroke-width="5"/>
<g data-obj="milk-bottle">
  <path d="M300 1146 L300 1182 L330 1182 L330 1146 Q 330 1136 322 1132 L322 1124 L308 1124 L308 1132 Q 300 1136 300 1146 Z" fill="#d5e2ec"/>
  <path d="M316 1124 L322 1124 L322 1132 Q 330 1136 330 1146 L330 1182 L316 1182 Z" fill="url(#swiss-white)"/>
  <path d="M326 1142 L326 1178" stroke="#ffffff" stroke-width="3"/>
  <rect x="300" y="1154" width="30" height="9" fill="#c3d5e2"/>
  <rect x="304" y="1116" width="22" height="10" rx="3" fill="#3f6fb5"/>
  <rect x="315" y="1116" width="11" height="10" rx="3" fill="#6d9ada"/>
</g>

<ellipse cx="686" cy="1178" rx="210" ry="34" fill="url(#swiss-shadow)"/>
<rect x="614" y="900" width="182" height="112" rx="6" fill="#96602f"/>
<rect x="700" y="900" width="96" height="112" rx="6" fill="url(#swiss-plank)"/>
<rect x="614" y="900" width="182" height="12" rx="5" fill="#dba565"/>
<rect x="620" y="900" width="12" height="112" fill="#6b4322"/>
<rect x="778" y="900" width="12" height="112" fill="#7a4f2d"/>
<rect x="632" y="916" width="146" height="88" rx="4" fill="#8a5730"/>
<rect x="632" y="916" width="146" height="6" rx="3" fill="#5f3a1c"/>
<circle cx="648" cy="890" r="24" fill="#b02f1d"/>
<path d="M648 866 C 662 866 672 877 672 890" fill="none" stroke="#f4735c" stroke-width="7"/>
<circle cx="642" cy="882" r="8" fill="#eb6249"/>
<path d="M648 866 C 650 858 658 856 662 860" fill="none" stroke="#4e8737" stroke-width="5"/>
<g data-obj="grapes">
  <path d="M691 866 C 690 858 696 854 700 858" fill="none" stroke="#6d4425" stroke-width="4"/>
  <path d="M698 858 C 708 852 716 858 710 864 C 704 868 698 864 698 858 Z" fill="url(#swiss-leaf)"/>
  <circle cx="684" cy="874" r="7" fill="#5a3bbd"/>
  <circle cx="698" cy="872" r="7" fill="url(#swiss-grape)"/>
  <circle cx="677" cy="886" r="7" fill="#7f56f0"/>
  <circle cx="691" cy="884" r="7" fill="#432a92"/>
  <circle cx="705" cy="882" r="7" fill="url(#swiss-grape)"/>
  <circle cx="684" cy="896" r="7" fill="#432a92"/>
  <circle cx="698" cy="894" r="7" fill="#5a3bbd"/>
  <circle cx="702" cy="878" r="2.5" fill="#d5c4ff" opacity="0.8"/>
</g>
<circle cx="736" cy="888" r="23" fill="#cf7d16"/>
<path d="M736 865 C 749 865 759 875 759 888" fill="none" stroke="#fbc477" stroke-width="7"/>
<circle cx="772" cy="890" r="18" fill="#b02f1d"/>
<path d="M772 872 C 782 872 790 880 790 890" fill="none" stroke="#f4735c" stroke-width="6"/>

<path d="M654 977 C 632 964 628 943 641 936 C 649 933 653 938 654 944 C 655 938 659 933 667 936 C 680 943 676 964 654 977 Z" fill="#5f4f6d"/>
<circle cx="654" cy="953" r="5" fill="#3a2f45"/>
<polygon points="641,996 650,1006 641,1016 632,1006" fill="#5f4f6d"/>
<circle cx="756" cy="990" r="5" fill="#5f4f6d"/>
<circle cx="766" cy="990" r="5" fill="#5f4f6d"/>
<circle cx="761" cy="998" r="5" fill="#5f4f6d"/>

<g data-obj="purple-heart">
  <path d="M704 980 C 680 964 673 942 687 935 C 697 931 703 937 704 944 C 705 937 711 931 721 935 C 735 942 728 964 704 980 Z" fill="#4a3d57"/>
  <path d="M704 944 C 705 937 711 931 721 935 C 735 942 728 964 704 980 Z" fill="url(#swiss-purple)"/>
  <path d="M704 972 C 685 961 680 944 691 938 C 698 935 703 940 704 945 C 705 940 710 935 717 938 C 728 944 723 961 704 972 Z" fill="#7a6889"/>
  <path d="M716 941 C 722 945 722 953 717 959" fill="none" stroke="#b3a3c6" stroke-width="2.5"/>
</g>
<path d="M714 934 L730 934 L728 1006 L712 1006 Z" fill="#dfe9f0"/>
<path d="M722 934 L730 934 L728 1006 L720 1006 Z" fill="#ffffff"/>
<rect x="710" y="928" width="24" height="8" rx="3" fill="#cfe0ea"/>

<rect x="540" y="1010" width="256" height="152" rx="7" fill="#a56a34"/>
<rect x="660" y="1010" width="136" height="152" rx="7" fill="url(#swiss-plank)"/>
<rect x="540" y="1010" width="256" height="14" rx="6" fill="#dba565"/>
<rect x="546" y="1010" width="14" height="152" fill="#8a5730"/>
<rect x="776" y="1010" width="14" height="152" fill="#96602f"/>
<rect x="530" y="1000" width="276" height="16" rx="6" fill="#7a4f2d"/>
<rect x="530" y="1000" width="276" height="5" rx="3" fill="#c08b4f"/>
<rect x="556" y="1076" width="224" height="9" rx="3" fill="#7a4f2d"/>
<rect x="556" y="1076" width="224" height="3" rx="2" fill="#c08b4f"/>
<rect x="556" y="1134" width="224" height="9" rx="3" fill="#7a4f2d"/>

<path d="M566 1044 L566 1064 Q 566 1074 592 1074 Q 618 1074 618 1064 L618 1044 Z" fill="#b3874f"/>
<path d="M596 1044 L618 1044 L618 1064 Q 618 1073 598 1074 Z" fill="url(#swiss-cream)"/>
<ellipse cx="592" cy="1044" rx="26" ry="11" fill="#d9b57e"/>
<ellipse cx="593" cy="1042" rx="20" ry="8" fill="#f2ddb4"/>
<path d="M634 1050 L634 1068 Q 634 1076 656 1076 Q 678 1076 678 1068 L678 1050 Z" fill="#9aa9b6"/>
<path d="M660 1050 L678 1050 L678 1068 Q 678 1075 662 1076 Z" fill="url(#swiss-metal)"/>
<ellipse cx="656" cy="1050" rx="22" ry="9" fill="#c8d3dc"/>
<circle cx="656" cy="1050" r="5" fill="#8fa0ae"/>
<ellipse cx="700" cy="1030" rx="26" ry="10" fill="#96602f"/>
<ellipse cx="700" cy="1026" rx="26" ry="10" fill="#b8874c"/>
<ellipse cx="702" cy="1022" rx="20" ry="7" fill="url(#swiss-hay)"/>

<ellipse cx="738" cy="1086" rx="38" ry="10" fill="url(#swiss-shadow-w)"/>
<g data-obj="cheese-wheel">
  <path d="M713 1046 L713 1066 Q 713 1078 742 1078 Q 771 1078 771 1066 L771 1046 Z" fill="#c08f2c"/>
  <path d="M746 1046 L771 1046 L771 1066 Q 771 1077 748 1078 Z" fill="url(#swiss-cheese)"/>
  <ellipse cx="742" cy="1046" rx="29" ry="12" fill="#efc95f"/>
  <ellipse cx="744" cy="1044" rx="23" ry="9" fill="#fbeaae"/>
  <polygon points="742,1045 719,1041 723,1035 742,1034" fill="#f7dc90"/>
  <ellipse cx="733" cy="1044" rx="3.5" ry="2.4" fill="#e0bc6e"/>
  <ellipse cx="752" cy="1047" rx="4" ry="2.8" fill="#e0bc6e"/>
  <ellipse cx="726" cy="1060" rx="3.5" ry="4" fill="#a87c22"/>
  <ellipse cx="758" cy="1066" rx="4" ry="4.5" fill="#c99a3c"/>
</g>
<path d="M584 1094 L584 1118 Q 584 1128 612 1128 Q 640 1128 640 1118 L640 1094 Z" fill="#c08f2c"/>
<path d="M616 1094 L640 1094 L640 1118 Q 640 1127 618 1128 Z" fill="url(#swiss-cheese)"/>
<ellipse cx="612" cy="1094" rx="28" ry="12" fill="#efc95f"/>
<ellipse cx="614" cy="1092" rx="22" ry="9" fill="#fbeaae"/>
<path d="M660 1098 L660 1124 Q 660 1132 686 1132 Q 712 1132 712 1124 L712 1098 Z" fill="#b3874f"/>
<path d="M690 1098 L712 1098 L712 1124 Q 712 1131 692 1132 Z" fill="url(#swiss-cream)"/>
<ellipse cx="686" cy="1098" rx="26" ry="11" fill="#d3a86f"/>
<path d="M670 1094 C 678 1086 694 1086 702 1094" fill="none" stroke="#a5713a" stroke-width="4"/>

<g data-obj="carrots">
  <path d="M562 1154 C 558 1132 566 1114 578 1108" fill="none" stroke="#d17d15" stroke-width="12" stroke-linecap="round"/>
  <path d="M578 1156 C 574 1134 582 1118 594 1112" fill="none" stroke="#e8952c" stroke-width="12" stroke-linecap="round"/>
  <path d="M582 1152 C 578 1132 585 1119 594 1114" fill="none" stroke="#fbc477" stroke-width="4" stroke-linecap="round"/>
  <path d="M578 1108 C 574 1098 584 1094 590 1102" fill="none" stroke="#4e8737" stroke-width="6"/>
  <path d="M594 1112 C 590 1100 602 1096 608 1106" fill="none" stroke="#5c9640" stroke-width="6"/>
</g>
<path d="M568 1014 C 582 1016 582 1034 568 1036" fill="none" stroke="#8fa0ae" stroke-width="6"/>
<path d="M532 1010 L536 1044 Q 537 1048 546 1048 L560 1048 Q 569 1048 570 1044 L574 1010 Z" fill="#9aa9b6"/>
<path d="M556 1010 L574 1010 L570 1044 Q 569 1048 560 1048 L556 1048 Z" fill="url(#swiss-metal)"/>
<ellipse cx="553" cy="1010" rx="21" ry="6" fill="#8fa0ae"/>
<ellipse cx="553" cy="1010" rx="15" ry="4" fill="#eef4f8"/>
<ellipse cx="700" cy="1160" rx="34" ry="20" fill="#8a5b34"/>
<ellipse cx="700" cy="1152" rx="34" ry="17" fill="#a5713a"/>
<ellipse cx="702" cy="1148" rx="26" ry="11" fill="url(#swiss-hay)"/>
<path d="M766 1156 L792 1014" stroke="#a5713a" stroke-width="11" stroke-linecap="round"/>
<path d="M744 1160 L768 1050" stroke="#8a5b34" stroke-width="8" stroke-linecap="round"/>

<path d="M330 1156 C 328 1122 342 1102 358 1098" fill="none" stroke="#6ba84b" stroke-width="9"/>
<circle cx="358" cy="1094" r="7" fill="#ffffff"/>
<path d="M430 1162 C 428 1130 444 1112 460 1108" fill="none" stroke="#6ba84b" stroke-width="9"/>
<circle cx="460" cy="1104" r="7" fill="#c4a6fb"/>
<path d="M545 1192 C 543 1170 540 1152 538 1140" fill="none" stroke="#4e8737" stroke-width="4"/>
<path d="M540 1148 C 528 1144 522 1150 528 1156 C 534 1158 540 1154 540 1148 Z" fill="#5c9640"/>
<path d="M541 1160 C 528 1158 522 1166 530 1170 C 536 1172 541 1166 541 1160 Z" fill="#4e8737"/>
<path d="M540 1148 C 552 1144 558 1150 552 1156 C 546 1158 540 1154 540 1148 Z" fill="url(#swiss-leaf)"/>
<path d="M541 1160 C 554 1158 560 1166 552 1170 C 546 1172 541 1166 541 1160 Z" fill="#6ba84b"/>
<path d="M120 1180 C 138 1162 162 1166 172 1184" fill="none" stroke="#4e8737" stroke-width="10"/>
<path d="M640 1190 C 658 1176 682 1180 692 1196" fill="none" stroke="#4e8737" stroke-width="10"/>

<ellipse cx="344" cy="1196" rx="36" ry="10" fill="url(#swiss-shadow)"/>
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
<ellipse cx="244" cy="1102" rx="32" ry="9" fill="url(#swiss-shadow)"/>
<g data-obj="snail">
  <ellipse cx="256" cy="1096" rx="20" ry="8" fill="#b8874c"/>
  <path d="M270 1098 C 282 1096 284 1082 278 1076" fill="none" stroke="#dcb682" stroke-width="8"/>
  <path d="M278 1076 C 276 1070 281 1068 283 1073" fill="none" stroke="#e0c08a" stroke-width="3"/>
  <circle cx="252" cy="1086" r="14" fill="#c9a06a"/>
  <circle cx="252" cy="1086" r="9" fill="#ab8352"/>
  <circle cx="252" cy="1086" r="4" fill="#8a6236"/>
  <path d="M258 1077 C 263 1080 265 1085 264 1090" fill="none" stroke="#e8cb9c" stroke-width="2.5"/>
</g>
<ellipse cx="196" cy="1190" rx="30" ry="9" fill="url(#swiss-shadow)"/>
<g data-obj="ladybug">
  <path d="M196 1149 C 192 1144 188 1146 190 1150" fill="none" stroke="#3a3330" stroke-width="2"/>
  <path d="M204 1149 C 208 1144 212 1146 210 1150" fill="none" stroke="#3a3330" stroke-width="2"/>
  <circle cx="200" cy="1156" r="7" fill="#3a3330"/>
  <ellipse cx="200" cy="1172" rx="18" ry="14" fill="#c02f1e"/>
  <path d="M200 1158 C 210 1158 218 1164 218 1172 L200 1172 Z" fill="url(#swiss-red)"/>
  <path d="M200 1158 L200 1186" stroke="#3a3330" stroke-width="3"/>
  <circle cx="192" cy="1166" r="3.5" fill="#3a3330"/>
  <circle cx="208" cy="1166" r="3.5" fill="#3a3330"/>
  <circle cx="192" cy="1178" r="3.5" fill="#3a3330"/>
  <circle cx="208" cy="1178" r="3.5" fill="#3a3330"/>
</g>
<ellipse cx="266" cy="1164" rx="26" ry="8" fill="url(#swiss-shadow)"/>
<g data-obj="pinecone">
  <path d="M270 1158 C 258 1150 252 1136 256 1124 C 262 1114 278 1114 284 1124 C 288 1136 282 1150 270 1158 Z" fill="#7a4f2d"/>
  <path d="M270 1116 C 278 1116 283 1119 284 1124 C 288 1136 282 1150 270 1158 Z" fill="#a5713a"/>
  <path d="M258 1130 L282 1130 M259 1140 L281 1140 M262 1150 L278 1150" stroke="#5f3a1c" stroke-width="3"/>
  <path d="M270 1116 C 268 1108 274 1106 276 1112" fill="none" stroke="#4e8737" stroke-width="3"/>
</g>
<ellipse cx="500" cy="1136" rx="30" ry="9" fill="url(#swiss-shadow)"/>
<g data-obj="sunflower">
  <path d="M505 1130 C 503 1112 504 1102 506 1094" stroke="#4e8737" stroke-width="5" fill="none"/>
  <ellipse cx="492" cy="1112" rx="11" ry="6" transform="rotate(-25 492 1112)" fill="url(#swiss-leaf)"/>
  <ellipse cx="506" cy="1088" rx="7" ry="16" fill="#e0ae23"/>
  <ellipse cx="506" cy="1088" rx="7" ry="16" transform="rotate(45 506 1088)" fill="url(#swiss-yellow)"/>
  <ellipse cx="506" cy="1088" rx="7" ry="16" transform="rotate(90 506 1088)" fill="#f5d24e"/>
  <ellipse cx="506" cy="1088" rx="7" ry="16" transform="rotate(135 506 1088)" fill="url(#swiss-yellow)"/>
  <circle cx="506" cy="1088" r="9" fill="#7a4f2d"/>
  <circle cx="509" cy="1085" r="3" fill="#a5713a"/>
</g>
<ellipse cx="606" cy="1192" rx="42" ry="11" fill="url(#swiss-shadow)"/>
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

<path d="M16 1140 C 14 1122 16 1112 18 1104" fill="none" stroke="#b9cf9a" stroke-width="4"/>
<ellipse cx="18" cy="1096" rx="7" ry="10" fill="#9b7fd4"/>
<polygon points="18,1082 24,1094 12,1094" fill="#8e74c4"/>
<path d="M68 1128 C 66 1110 68 1098 70 1090" fill="none" stroke="#b9cf9a" stroke-width="4"/>
<ellipse cx="70" cy="1082" rx="7" ry="10" fill="#9b7fd4"/>
<polygon points="70,1068 76,1080 64,1080" fill="#8e74c4"/>
<path d="M100 1112 C 98 1098 100 1088 102 1080" fill="none" stroke="#b9cf9a" stroke-width="4"/>
<ellipse cx="102" cy="1072" rx="8" ry="7" fill="#9b7fd4"/>
<circle cx="97" cy="1066" r="4" fill="#b39ae0"/>
<circle cx="107" cy="1066" r="4" fill="#c4a6fb"/>

<g data-obj="lightstick" transform="rotate(-12 44 1112)">
  <ellipse cx="44" cy="1097" rx="9" ry="11" fill="#8a6dc9"/>
  <ellipse cx="44" cy="1097" rx="5.5" ry="7" fill="#b39ae0"/>
  <ellipse cx="41" cy="1092" rx="2.5" ry="3" fill="#e2daf5"/>
  <rect x="37" y="1108" width="14" height="5" rx="2" fill="#5f4a94"/>
  <rect x="38.5" y="1113" width="11" height="24" rx="5" fill="#ddd0b4"/>
  <rect x="46" y="1113" width="4" height="24" rx="2" fill="#f4ecd8"/>
  <rect x="38.5" y="1118" width="11" height="4" fill="#8e74c4"/>
  <rect x="39.5" y="1132" width="9" height="5" rx="2" fill="#c4b39a"/>
</g>

<path d="M14 1200 C 22 1160 34 1140 44 1130" fill="none" stroke="#4e8737" stroke-width="9"/>
<path d="M56 1200 C 58 1166 52 1142 44 1126" fill="none" stroke="#5c9640" stroke-width="8"/>
<ellipse cx="40" cy="1152" rx="26" ry="14" fill="#4e8737"/>
<ellipse cx="72" cy="1178" rx="28" ry="15" fill="#3f7a2e"/>
<path d="M84 1196 C 78 1168 66 1152 56 1144" fill="none" stroke="#4e8737" stroke-width="8"/>
</svg>`
});
