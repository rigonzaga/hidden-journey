window.SCENES = window.SCENES || [];
window.SCENES.push({
  id: 'italy',
  order: 5,
  country: 'Italy',
  flag: '🇮🇹',
  title: 'A Venice Canal',
  caption: 'Gelato by the canals.',
  stamp: '🛶',
  objects: [
    { id: 'lightstick',    name: 'Lightstick' },
    { id: 'purple-heart',  name: 'Purple Heart' },
    { id: 'gondolier-hat', name: 'Gondolier Hat' },
    { id: 'duck',          name: 'Duck' },
    { id: 'spire',         name: 'Spire' },
    { id: 'basket',        name: 'Basket' },
    { id: 'apples',        name: 'Apples' },
    { id: 'gelato-cone',   name: 'Gelato Cone' },
    { id: 'clock',         name: 'Clock' },
    { id: 'starfish',      name: 'Starfish' },
    { id: 'barrel',        name: 'Barrel' },
    { id: 'venetian-mask', name: 'Venetian Mask' },
    { id: 'anchor',        name: 'Anchor' },
    { id: 'melon',         name: 'Melon' },
    { id: 'eggs',          name: 'Eggs' },
    { id: 'mouse',         name: 'Mouse' },
    { id: 'cat',           name: 'Cat' },
    { id: 'buoy',          name: 'Buoy' },
    { id: 'lantern',       name: 'Lantern' },
    { id: 'pizza-slice',   name: 'Pizza Slice' },
    { id: 'pigeon',        name: 'Pigeon' },
    { id: 'dome',          name: 'Dome' },
    { id: 'crab',          name: 'Crab' },
    { id: 'cheese',        name: 'Cheese' },
    { id: 'vane',          name: 'Vane' },
    { id: 'gull',          name: 'Gull' },
    { id: 'mailbox',       name: 'Mailbox' },
    { id: 'fountain',      name: 'Fountain' },
    { id: 'prow',          name: 'Prow' },
    { id: 'watering-can',  name: 'Watering Can' },
    { id: 'espresso-cup',  name: 'Espresso Cup' },
    { id: 'oar',           name: 'Oar' },
    { id: 'birdcage',      name: 'Birdcage' },
    { id: 'murano-bottle', name: 'Glass Bottle' },
    { id: 'shirt',         name: 'Shirt' },
    { id: 'ball',          name: 'Ball' },
    { id: 'olive-jar',     name: 'Olive Jar' },
    { id: 'mandolin',      name: 'Mandolin' },
    { id: 'bell',          name: 'Bell' },
    { id: 'olive-tree',    name: 'Olive Tree' },
    { id: 'accordion',     name: 'Accordion' },
    { id: 'eggplant',      name: 'Eggplant' },
    { id: 'keys',          name: 'Keys' },
    { id: 'fish-crate',    name: 'Fish Crate' },
    { id: 'boot',          name: 'Boot' },
    { id: 'flowers',       name: 'Flowers' },
    { id: 'life-ring',     name: 'Life Ring' },
    { id: 'snail',         name: 'Snail' },
    { id: 'lion',          name: 'Lion' },
    { id: 'flag',          name: 'Flag' }
  ],
  svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 1200">
<defs>
<linearGradient id="italy-sky" x1="0" y1="0" x2="0" y2="1">
<stop offset="0" stop-color="#ffeed0"/>
<stop offset="0.5" stop-color="#ffd6a8"/>
<stop offset="1" stop-color="#f4a97c"/>
</linearGradient>
<radialGradient id="italy-sun" cx="0.5" cy="0.5" r="0.5">
<stop offset="0" stop-color="#fff9e4" stop-opacity="0.95"/>
<stop offset="0.5" stop-color="#ffdd9e" stop-opacity="0.4"/>
<stop offset="1" stop-color="#ffc978" stop-opacity="0"/>
</radialGradient>
<linearGradient id="italy-haze" x1="0" y1="0" x2="0" y2="1">
<stop offset="0" stop-color="#ffd9b0" stop-opacity="0.62"/>
<stop offset="1" stop-color="#ffd9b0" stop-opacity="0.14"/>
</linearGradient>
<linearGradient id="italy-canal" x1="0" y1="0" x2="0" y2="1">
<stop offset="0" stop-color="#79b8a6"/>
<stop offset="0.28" stop-color="#4e9389"/>
<stop offset="0.7" stop-color="#33736f"/>
<stop offset="1" stop-color="#1e5254"/>
</linearGradient>
<linearGradient id="italy-watershine" x1="1" y1="0" x2="0" y2="0">
<stop offset="0" stop-color="#fff0c8" stop-opacity="0.34"/>
<stop offset="0.55" stop-color="#ffe6b4" stop-opacity="0.12"/>
<stop offset="1" stop-color="#ffe6b4" stop-opacity="0"/>
</linearGradient>
<linearGradient id="italy-reflwarm" x1="0" y1="0" x2="0" y2="1">
<stop offset="0" stop-color="#ffd9a8" stop-opacity="0.42"/>
<stop offset="1" stop-color="#ffd9a8" stop-opacity="0"/>
</linearGradient>
<linearGradient id="italy-reflrose" x1="0" y1="0" x2="0" y2="1">
<stop offset="0" stop-color="#f0b39b" stop-opacity="0.38"/>
<stop offset="1" stop-color="#f0b39b" stop-opacity="0"/>
</linearGradient>
<linearGradient id="italy-refllilac" x1="0" y1="0" x2="0" y2="1">
<stop offset="0" stop-color="#dcc0d6" stop-opacity="0.34"/>
<stop offset="1" stop-color="#dcc0d6" stop-opacity="0"/>
</linearGradient>
<linearGradient id="italy-pave" x1="0" y1="0" x2="0" y2="1">
<stop offset="0" stop-color="#e6cda6"/>
<stop offset="0.45" stop-color="#cbac86"/>
<stop offset="1" stop-color="#a98a68"/>
</linearGradient>
<linearGradient id="italy-kerb" x1="0" y1="0" x2="0" y2="1">
<stop offset="0" stop-color="#f6e2c0"/>
<stop offset="1" stop-color="#cbaf8a"/>
</linearGradient>
<linearGradient id="italy-stone" x1="0" y1="0" x2="0" y2="1">
<stop offset="0" stop-color="#e2d2b2"/>
<stop offset="0.4" stop-color="#c6ac86"/>
<stop offset="1" stop-color="#9b8464"/>
</linearGradient>
<linearGradient id="italy-facrose" x1="0" y1="0" x2="1" y2="0">
<stop offset="0" stop-color="#bd7563"/>
<stop offset="0.62" stop-color="#dfa08c"/>
<stop offset="1" stop-color="#f6bda6"/>
</linearGradient>
<linearGradient id="italy-faccream" x1="0" y1="0" x2="1" y2="0">
<stop offset="0" stop-color="#d3ae80"/>
<stop offset="0.6" stop-color="#f0d3ab"/>
<stop offset="1" stop-color="#fdedd0"/>
</linearGradient>
<linearGradient id="italy-facgold" x1="0" y1="0" x2="1" y2="0">
<stop offset="0" stop-color="#c19352"/>
<stop offset="0.6" stop-color="#e6c07f"/>
<stop offset="1" stop-color="#f9dda6"/>
</linearGradient>
<linearGradient id="italy-faclilac" x1="0" y1="0" x2="1" y2="0">
<stop offset="0" stop-color="#96738f"/>
<stop offset="0.6" stop-color="#c8a7c2"/>
<stop offset="1" stop-color="#e3cade"/>
</linearGradient>
<linearGradient id="italy-facpeach" x1="0" y1="0" x2="1" y2="0">
<stop offset="0" stop-color="#c98e6a"/>
<stop offset="0.6" stop-color="#f2c6a0"/>
<stop offset="1" stop-color="#ffe3c2"/>
</linearGradient>
<linearGradient id="italy-facsalmon" x1="0" y1="0" x2="1" y2="0">
<stop offset="0" stop-color="#b06e64"/>
<stop offset="0.6" stop-color="#d99a8f"/>
<stop offset="1" stop-color="#f0bcae"/>
</linearGradient>
<linearGradient id="italy-facterra" x1="0" y1="0" x2="1" y2="0">
<stop offset="0" stop-color="#b07f4c"/>
<stop offset="0.62" stop-color="#e0b482"/>
<stop offset="1" stop-color="#f6d3a4"/>
</linearGradient>
<linearGradient id="italy-faccoral" x1="0" y1="0" x2="1" y2="0">
<stop offset="0" stop-color="#a4523c"/>
<stop offset="0.6" stop-color="#d4785c"/>
<stop offset="1" stop-color="#f0a181"/>
</linearGradient>
<linearGradient id="italy-facfar" x1="0" y1="0" x2="1" y2="0">
<stop offset="0" stop-color="#cdb694"/>
<stop offset="1" stop-color="#eeddbe"/>
</linearGradient>
<linearGradient id="italy-roof" x1="0" y1="0" x2="0" y2="1">
<stop offset="0" stop-color="#d18058"/>
<stop offset="0.35" stop-color="#ac6041"/>
<stop offset="1" stop-color="#7f412c"/>
</linearGradient>
<linearGradient id="italy-vshade" x1="0" y1="0" x2="1" y2="0">
<stop offset="0" stop-color="#3a2312" stop-opacity="0.42"/>
<stop offset="1" stop-color="#3a2312" stop-opacity="0"/>
</linearGradient>
<linearGradient id="italy-rimlight" x1="1" y1="0" x2="0" y2="0">
<stop offset="0" stop-color="#fff2d2" stop-opacity="0.55"/>
<stop offset="1" stop-color="#fff2d2" stop-opacity="0"/>
</linearGradient>
<radialGradient id="italy-shadow" cx="0.5" cy="0.5" r="0.5">
<stop offset="0" stop-color="#5c3a1e" stop-opacity="0.44"/>
<stop offset="0.6" stop-color="#5c3a1e" stop-opacity="0.2"/>
<stop offset="1" stop-color="#5c3a1e" stop-opacity="0"/>
</radialGradient>
<radialGradient id="italy-shadowwater" cx="0.5" cy="0.5" r="0.5">
<stop offset="0" stop-color="#123c3e" stop-opacity="0.5"/>
<stop offset="1" stop-color="#123c3e" stop-opacity="0"/>
</radialGradient>
<linearGradient id="italy-wood" x1="0" y1="0" x2="0" y2="1">
<stop offset="0" stop-color="#c19468"/>
<stop offset="0.3" stop-color="#96683f"/>
<stop offset="1" stop-color="#6b432d"/>
</linearGradient>
<linearGradient id="italy-woodup" x1="0" y1="0" x2="0" y2="1">
<stop offset="0" stop-color="#d7a877"/>
<stop offset="1" stop-color="#9a6c44"/>
</linearGradient>
<linearGradient id="italy-crate" x1="0" y1="0" x2="0" y2="1">
<stop offset="0" stop-color="#d5b47c"/>
<stop offset="0.4" stop-color="#b08d58"/>
<stop offset="1" stop-color="#87683a"/>
</linearGradient>
<linearGradient id="italy-pane" x1="0" y1="0" x2="0" y2="1">
<stop offset="0" stop-color="#2f4f4d"/>
<stop offset="0.45" stop-color="#23403f"/>
<stop offset="1" stop-color="#152c2d"/>
</linearGradient>
<linearGradient id="italy-glass" x1="0" y1="0" x2="1" y2="1">
<stop offset="0" stop-color="#a8d4d0" stop-opacity="0.42"/>
<stop offset="0.45" stop-color="#5f8f8c" stop-opacity="0.22"/>
<stop offset="1" stop-color="#22484a" stop-opacity="0.5"/>
</linearGradient>
<linearGradient id="italy-shutterlit" x1="0" y1="0" x2="1" y2="0">
<stop offset="0" stop-color="#5f8f74"/>
<stop offset="1" stop-color="#8cbf98"/>
</linearGradient>
<linearGradient id="italy-shutterdim" x1="0" y1="0" x2="1" y2="0">
<stop offset="0" stop-color="#3c6154"/>
<stop offset="1" stop-color="#5b8469"/>
</linearGradient>
<linearGradient id="italy-metal" x1="0" y1="0" x2="1" y2="0">
<stop offset="0" stop-color="#6a707b"/>
<stop offset="0.6" stop-color="#a4b0b8"/>
<stop offset="1" stop-color="#dbe4e6"/>
</linearGradient>
<linearGradient id="italy-brass" x1="0" y1="0" x2="1" y2="0">
<stop offset="0" stop-color="#9c6c22"/>
<stop offset="0.6" stop-color="#d9a441"/>
<stop offset="1" stop-color="#f7de92"/>
</linearGradient>
<linearGradient id="italy-canvas" x1="0" y1="0" x2="0" y2="1">
<stop offset="0" stop-color="#fdf6e6"/>
<stop offset="1" stop-color="#d6c8ac"/>
</linearGradient>
<linearGradient id="italy-red" x1="0" y1="0" x2="1" y2="0">
<stop offset="0" stop-color="#a83a36"/>
<stop offset="0.6" stop-color="#d94f4f"/>
<stop offset="1" stop-color="#f0786c"/>
</linearGradient>
<linearGradient id="italy-green" x1="0" y1="0" x2="1" y2="0">
<stop offset="0" stop-color="#28624f"/>
<stop offset="0.6" stop-color="#3f8f6c"/>
<stop offset="1" stop-color="#6cb894"/>
</linearGradient>
<linearGradient id="italy-leaf" x1="0" y1="0" x2="1" y2="1">
<stop offset="0" stop-color="#7fc47c"/>
<stop offset="1" stop-color="#357044"/>
</linearGradient>
<linearGradient id="italy-terracotta" x1="0" y1="0" x2="1" y2="0">
<stop offset="0" stop-color="#a05a38"/>
<stop offset="0.6" stop-color="#c07d55"/>
<stop offset="1" stop-color="#e0a077"/>
</linearGradient>
<linearGradient id="italy-cream" x1="0" y1="0" x2="1" y2="1">
<stop offset="0" stop-color="#ffffff"/>
<stop offset="0.55" stop-color="#f4ece0"/>
<stop offset="1" stop-color="#cfc0a8"/>
</linearGradient>
<linearGradient id="italy-gondola" x1="0" y1="0" x2="0" y2="1">
<stop offset="0" stop-color="#5b5064"/>
<stop offset="0.4" stop-color="#3a3342"/>
<stop offset="1" stop-color="#1d1a25"/>
</linearGradient>
<linearGradient id="italy-lamp" x1="0" y1="0" x2="1" y2="0">
<stop offset="0" stop-color="#6f56ab"/>
<stop offset="0.55" stop-color="#a88ad4"/>
<stop offset="1" stop-color="#d8c8f4"/>
</linearGradient>
<linearGradient id="italy-heart" x1="0" y1="0" x2="1" y2="1">
<stop offset="0" stop-color="#a98ce8"/>
<stop offset="1" stop-color="#5c33a8"/>
</linearGradient>
<radialGradient id="italy-bottleglow" cx="0.5" cy="0.5" r="0.5">
<stop offset="0" stop-color="#ffeaa8" stop-opacity="0.75"/>
<stop offset="1" stop-color="#ffc45e" stop-opacity="0"/>
</radialGradient>
<linearGradient id="italy-bottleteal" x1="0" y1="0" x2="1" y2="0">
<stop offset="0" stop-color="#1f7d86"/>
<stop offset="0.55" stop-color="#3fa8b0"/>
<stop offset="1" stop-color="#9ce4e8"/>
</linearGradient>
<radialGradient id="italy-melon" cx="0.34" cy="0.3" r="0.78">
<stop offset="0" stop-color="#79b57e"/>
<stop offset="0.6" stop-color="#4f8f5a"/>
<stop offset="1" stop-color="#2c5e39"/>
</radialGradient>
<radialGradient id="italy-fruit" cx="0.34" cy="0.3" r="0.75">
<stop offset="0" stop-color="#f28a72"/>
<stop offset="0.55" stop-color="#d9483f"/>
<stop offset="1" stop-color="#9c2c28"/>
</radialGradient>
<radialGradient id="italy-lampglow" cx="0.5" cy="0.5" r="0.5">
<stop offset="0" stop-color="#fff3cc" stop-opacity="0.85"/>
<stop offset="1" stop-color="#ffcf70" stop-opacity="0"/>
</radialGradient>
</defs>

<rect x="0" y="0" width="800" height="1200" fill="#e2c096"/>
<rect x="0" y="0" width="800" height="656" fill="url(#italy-sky)"/>
<circle cx="676" cy="112" r="188" fill="url(#italy-sun)"/>
<ellipse cx="158" cy="84" rx="88" ry="20" fill="#fff3dc" opacity="0.6"/>
<ellipse cx="204" cy="72" rx="52" ry="15" fill="#fffaee" opacity="0.55"/>
<ellipse cx="470" cy="56" rx="70" ry="16" fill="#fff3dc" opacity="0.4"/>
<path d="M262 108 q9 -7 17 0 q9 -7 17 0" fill="none" stroke="#ad7458" stroke-width="2.4" opacity="0.5"/>
<path d="M318 134 q8 -6 15 0 q8 -6 15 0" fill="none" stroke="#ad7458" stroke-width="2.2" opacity="0.4"/>

<rect x="292" y="404" width="216" height="200" fill="url(#italy-haze)"/>
<rect x="300" y="492" width="200" height="104" fill="url(#italy-facfar)"/>
<rect x="300" y="492" width="200" height="16" fill="#f4e6cc" opacity="0.7"/>
<path d="M296 452 q84 -46 200 0 l0 24 q-100 -40 -200 0 Z" fill="#d9c2a0"/>
<path d="M296 452 q84 -46 200 0 l0 9 q-100 -40 -200 0 Z" fill="#f2e2c4"/>
<path d="M296 474 q84 -34 200 0 l0 20 q-100 -30 -200 0 Z" fill="#a08a68" opacity="0.42"/>
<rect x="292" y="438" width="208" height="14" fill="url(#italy-facfar)"/>
<rect x="292" y="438" width="208" height="5" fill="#f7ead0"/>
<rect x="292" y="418" width="208" height="8" fill="#e8d6b6"/>
<rect x="330" y="424" width="7" height="16" fill="#c6ae8c" opacity="0.8"/>
<rect x="422" y="424" width="7" height="16" fill="#c6ae8c" opacity="0.8"/>
<rect x="292" y="404" width="216" height="196" fill="url(#italy-haze)" opacity="0.55"/>

<rect x="352" y="214" width="40" height="150" fill="url(#italy-faccream)"/>
<rect x="352" y="214" width="10" height="150" fill="url(#italy-vshade)"/>
<rect x="386" y="214" width="6" height="150" fill="url(#italy-rimlight)"/>
<rect x="348" y="204" width="48" height="12" fill="url(#italy-roof)"/>
<rect x="362" y="230" width="9" height="24" rx="4" fill="url(#italy-pane)"/>
<rect x="377" y="230" width="9" height="24" rx="4" fill="url(#italy-pane)" opacity="0.85"/>
<g data-obj="spire">
<path d="M348 206 L372 150 L396 206 Z" fill="#a85941"/>
<path d="M372 150 L396 206 L372 206 Z" fill="#c87a55"/>
<path d="M372 150 L358 206 L348 206 Z" fill="#8b452f"/>
<path d="M372 150 L380 172 L372 178 Z" fill="#e09a6c" opacity="0.7"/>
<circle cx="372" cy="145" r="6" fill="url(#italy-brass)"/>
</g>
<rect x="396" y="344" width="68" height="20" fill="url(#italy-faccream)"/>
<rect x="396" y="344" width="14" height="20" fill="url(#italy-vshade)"/>
<g data-obj="dome">
<ellipse cx="430" cy="336" rx="34" ry="26" fill="#b8956f"/>
<path d="M396 336 q0 -26 34 -26 q34 0 34 26 q-16 10 -34 10 q-18 0 -34 -10 Z" fill="#dcbc94"/>
<path d="M430 310 q34 0 34 26 q-10 7 -22 9 q6 -22 -12 -35 Z" fill="#f2d6ae"/>
<path d="M404 322 q10 -10 22 -11" fill="none" stroke="#f7e4c4" stroke-width="3" opacity="0.55"/>
<rect x="426" y="300" width="8" height="12" fill="#c9a37c"/>
<circle cx="430" cy="296" r="5" fill="url(#italy-brass)"/>
</g>

<rect x="-10" y="250" width="92" height="346" fill="url(#italy-facrose)"/>
<rect x="-10" y="250" width="24" height="346" fill="url(#italy-vshade)"/>
<rect x="70" y="250" width="12" height="346" fill="url(#italy-rimlight)"/>
<rect x="-14" y="240" width="102" height="16" fill="url(#italy-roof)"/>
<rect x="-14" y="236" width="102" height="6" fill="#d4835c"/>
<rect x="24" y="208" width="18" height="32" fill="#c98a6f"/>
<rect x="24" y="208" width="6" height="32" fill="#a3634c"/>
<rect x="19" y="200" width="28" height="10" fill="#96513d"/>
<rect x="10" y="300" width="44" height="60" rx="3" fill="url(#italy-pane)"/>
<rect x="10" y="300" width="44" height="14" rx="3" fill="#8fc0bc" opacity="0.2"/>
<rect x="-4" y="298" width="15" height="64" rx="2" fill="url(#italy-shutterdim)"/>
<rect x="52" y="298" width="15" height="64" rx="2" fill="url(#italy-shutterlit)"/>
<rect x="6" y="360" width="52" height="7" rx="2" fill="url(#italy-stone)"/>
<rect x="10" y="430" width="44" height="60" rx="3" fill="url(#italy-pane)"/>
<rect x="-4" y="428" width="15" height="64" rx="2" fill="url(#italy-shutterdim)"/>
<rect x="52" y="428" width="15" height="64" rx="2" fill="url(#italy-shutterlit)"/>
<rect x="2" y="488" width="60" height="14" rx="4" fill="url(#italy-woodup)"/>
<circle cx="14" cy="482" r="9" fill="url(#italy-fruit)"/>
<circle cx="34" cy="480" r="10" fill="url(#italy-fruit)"/>
<path d="M8 474 q11 -16 22 -8" fill="none" stroke="#4f8f5a" stroke-width="4.5"/>

<rect x="82" y="192" width="106" height="404" fill="url(#italy-faccream)"/>
<rect x="82" y="192" width="26" height="404" fill="url(#italy-vshade)"/>
<rect x="176" y="192" width="12" height="404" fill="url(#italy-rimlight)"/>
<rect x="78" y="182" width="116" height="16" fill="url(#italy-roof)"/>
<rect x="78" y="178" width="116" height="6" fill="#d4835c"/>
<rect x="130" y="146" width="16" height="36" fill="#d9a98a"/>
<rect x="130" y="146" width="5" height="36" fill="#ad7458"/>
<rect x="126" y="138" width="24" height="10" fill="#96513d"/>
<rect x="104" y="248" width="46" height="62" rx="3" fill="url(#italy-pane)"/>
<rect x="104" y="248" width="46" height="16" rx="3" fill="#8fc0bc" opacity="0.18"/>
<rect x="90" y="246" width="15" height="66" rx="2" fill="url(#italy-shutterdim)"/>
<rect x="149" y="246" width="15" height="66" rx="2" fill="url(#italy-shutterlit)"/>
<rect x="98" y="240" width="58" height="9" fill="url(#italy-stone)"/>
<ellipse cx="127" cy="272" rx="14" ry="16" fill="#f9f0dc" opacity="0.45"/>
<path d="M114 268 q7 -8 13 -2 q6 -6 13 2" fill="none" stroke="#8f5f7f" stroke-width="2.6" opacity="0.6"/>
<rect x="100" y="310" width="54" height="7" rx="2" fill="url(#italy-stone)"/>
<rect x="104" y="390" width="46" height="62" rx="3" fill="url(#italy-pane)"/>
<rect x="90" y="388" width="15" height="66" rx="2" fill="url(#italy-shutterdim)"/>
<rect x="149" y="388" width="15" height="66" rx="2" fill="url(#italy-shutterlit)"/>
<rect x="96" y="450" width="62" height="14" rx="4" fill="url(#italy-woodup)"/>
<circle cx="108" cy="444" r="9" fill="#d4629c"/>
<circle cx="126" cy="442" r="10" fill="#f08bb4"/>
<path d="M102 436 q12 -18 24 -8" fill="none" stroke="#4f8f5a" stroke-width="4.5"/>
<rect x="94" y="520" width="72" height="76" rx="4" fill="url(#italy-wood)"/>
<path d="M94 522 q36 -24 72 0 Z" fill="#a8674a"/>
<path d="M94 522 q36 -24 72 0 l0 6 q-36 -22 -72 0 Z" fill="#c4835e"/>
<rect x="126" y="544" width="8" height="52" fill="#4e2e21"/>
<rect x="94" y="520" width="14" height="76" fill="url(#italy-vshade)"/>

<rect x="188" y="234" width="112" height="362" fill="url(#italy-facgold)"/>
<rect x="188" y="234" width="26" height="362" fill="url(#italy-vshade)"/>
<rect x="288" y="234" width="12" height="362" fill="url(#italy-rimlight)"/>
<rect x="184" y="224" width="122" height="16" fill="url(#italy-roof)"/>
<rect x="184" y="220" width="122" height="6" fill="#c98555"/>
<rect x="244" y="186" width="16" height="36" fill="#cfa066"/>
<rect x="244" y="186" width="5" height="36" fill="#a1793f"/>
<rect x="240" y="178" width="24" height="10" fill="#8f5f36"/>
<g data-obj="vane">
<path d="M282 186 l0 -40" stroke="#5f646e" stroke-width="4" fill="none"/>
<path d="M282 150 l26 9 l-26 9 Z" fill="#3a3140"/>
<path d="M282 150 l26 9 l-26 3 Z" fill="#6a6274"/>
<path d="M282 150 l-19 9 l19 9 Z" fill="#4c4556"/>
<circle cx="282" cy="140" r="6" fill="url(#italy-brass)"/>
<path d="M264 172 l36 0" stroke="#7e838f" stroke-width="3" fill="none"/>
</g>
<rect x="212" y="288" width="48" height="64" rx="3" fill="url(#italy-pane)"/>
<rect x="212" y="288" width="48" height="16" rx="3" fill="#8fc0bc" opacity="0.18"/>
<rect x="198" y="286" width="15" height="68" rx="2" fill="url(#italy-shutterdim)"/>
<rect x="259" y="286" width="15" height="68" rx="2" fill="url(#italy-shutterlit)"/>
<rect x="208" y="352" width="56" height="7" rx="2" fill="url(#italy-stone)"/>
<rect x="212" y="424" width="48" height="64" rx="3" fill="url(#italy-pane)"/>
<rect x="198" y="422" width="15" height="68" rx="2" fill="url(#italy-shutterdim)"/>
<rect x="259" y="422" width="15" height="68" rx="2" fill="url(#italy-shutterlit)"/>
<rect x="196" y="486" width="96" height="13" rx="4" fill="url(#italy-woodup)"/>
<rect x="196" y="478" width="92" height="9" rx="3" fill="url(#italy-terracotta)"/>
<circle cx="212" cy="472" r="10" fill="#eeb92f"/>
<circle cx="234" cy="470" r="11" fill="#f7d76a"/>
<path d="M206 464 q13 -18 26 -8" fill="none" stroke="#4f8f5a" stroke-width="5"/>
<circle cx="256" cy="474" r="8" fill="#d9483f"/>
<rect x="196" y="512" width="96" height="9" fill="url(#italy-stone)"/>
<rect x="202" y="521" width="7" height="38" fill="#8a6a52"/>
<rect x="282" y="521" width="7" height="38" fill="#a3805f"/>
<rect x="196" y="556" width="96" height="9" fill="url(#italy-stone)"/>
<g data-obj="flag">
<path d="M302 300 l0 46" stroke="#7a4a36" stroke-width="4" fill="none"/>
<path d="M304 302 l42 7 l0 24 l-42 -7 Z" fill="#f7f1e4"/>
<path d="M304 302 l14 2 l0 24 l-14 -2 Z" fill="#2f7d4e"/>
<path d="M332 306 l14 3 l0 24 l-14 -3 Z" fill="#c8382f"/>
<path d="M304 302 l42 7 l0 5 l-42 -7 Z" fill="#ffffff" opacity="0.45"/>
<circle cx="302" cy="298" r="4.5" fill="url(#italy-brass)"/>
</g>

<rect x="466" y="208" width="106" height="388" fill="url(#italy-faclilac)"/>
<rect x="466" y="208" width="26" height="388" fill="url(#italy-vshade)"/>
<rect x="560" y="208" width="12" height="388" fill="url(#italy-rimlight)"/>
<rect x="462" y="198" width="116" height="16" fill="url(#italy-roof)"/>
<rect x="462" y="194" width="116" height="6" fill="#b07393"/>

<rect x="572" y="164" width="120" height="432" fill="url(#italy-facpeach)"/>
<rect x="572" y="164" width="26" height="432" fill="url(#italy-vshade)"/>
<rect x="680" y="164" width="12" height="432" fill="url(#italy-rimlight)"/>
<rect x="568" y="154" width="130" height="16" fill="url(#italy-roof)"/>
<rect x="568" y="150" width="130" height="6" fill="#d4835c"/>
<rect x="626" y="116" width="16" height="36" fill="#dba98a"/>
<rect x="626" y="116" width="5" height="36" fill="#ad7458"/>
<rect x="622" y="108" width="24" height="10" fill="#96513d"/>
<rect x="592" y="220" width="48" height="64" rx="3" fill="url(#italy-pane)"/>
<rect x="592" y="220" width="48" height="16" rx="3" fill="#8fc0bc" opacity="0.18"/>
<rect x="578" y="218" width="15" height="68" rx="2" fill="url(#italy-shutterdim)"/>
<rect x="639" y="218" width="15" height="68" rx="2" fill="url(#italy-shutterlit)"/>
<rect x="586" y="212" width="60" height="9" fill="url(#italy-stone)"/>
<ellipse cx="616" cy="246" rx="15" ry="17" fill="#fdf8ee" opacity="0.45"/>
<path d="M602 242 q8 -9 14 -2 q7 -7 14 2" fill="none" stroke="#c08b33" stroke-width="2.8" opacity="0.7"/>
<g data-obj="clock">
<circle cx="670" cy="252" r="25" fill="#c6b697"/>
<circle cx="670" cy="250" r="23" fill="url(#italy-cream)"/>
<circle cx="670" cy="250" r="18" fill="#fffaf0"/>
<path d="M652 240 q10 -14 26 -12" fill="none" stroke="#ffffff" stroke-width="3" opacity="0.8"/>
<path d="M670 250 l0 -13" stroke="#3a3140" stroke-width="3" fill="none"/>
<path d="M670 250 l10 5" stroke="#3a3140" stroke-width="3" fill="none"/>
<circle cx="670" cy="250" r="3" fill="#3a3140"/>
<path d="M670 234 l0 4" stroke="#8a8f9c" stroke-width="2.4" fill="none"/>
<path d="M686 250 l-4 0" stroke="#8a8f9c" stroke-width="2.4" fill="none"/>
<path d="M670 266 l0 -4" stroke="#8a8f9c" stroke-width="2.4" fill="none"/>
<path d="M654 250 l4 0" stroke="#8a8f9c" stroke-width="2.4" fill="none"/>
</g>
<rect x="592" y="356" width="48" height="64" rx="3" fill="url(#italy-pane)"/>
<rect x="578" y="354" width="15" height="68" rx="2" fill="url(#italy-shutterdim)"/>
<rect x="639" y="354" width="15" height="68" rx="2" fill="url(#italy-shutterlit)"/>
<g data-obj="birdcage">
<path d="M654 372 q16 -18 32 0 l0 36 l-32 0 Z" fill="#d6cab4"/>
<path d="M670 358 q16 0 16 14 l0 36 l-10 0 l0 -36 q0 -10 -6 -14 Z" fill="#fdf8ee"/>
<path d="M654 372 q7 -8 16 -10 l0 46 l-16 0 Z" fill="#c0b195"/>
<path d="M662 366 l0 42" stroke="#a8977a" stroke-width="2.4" fill="none"/>
<path d="M678 366 l0 42" stroke="#efe6d2" stroke-width="2.4" fill="none"/>
<rect x="650" y="406" width="40" height="9" rx="3" fill="url(#italy-crate)"/>
<path d="M670 356 l0 -10" stroke="#b9a88c" stroke-width="3" fill="none"/>
<circle cx="670" cy="390" r="6" fill="#f0c33c"/>
<circle cx="668" cy="388" r="2.5" fill="#fdf0b8"/>
</g>
<rect x="580" y="418" width="100" height="13" rx="4" fill="url(#italy-woodup)"/>
<rect x="582" y="410" width="96" height="9" rx="3" fill="url(#italy-terracotta)"/>
<circle cx="596" cy="404" r="10" fill="#eeb92f"/>
<circle cx="620" cy="402" r="11" fill="#f7d76a"/>
<path d="M590 396 q13 -18 26 -8" fill="none" stroke="#4f8f5a" stroke-width="5"/>
<g data-obj="cat">
<path d="M604 410 q-2 -30 22 -30 q24 0 22 30 Z" fill="#a87e4c"/>
<path d="M626 380 q24 0 22 30 l-14 0 q4 -22 -8 -30 Z" fill="#d8b47c"/>
<circle cx="618" cy="380" r="14" fill="#c19a62"/>
<path d="M618 366 q14 0 14 14 q0 8 -6 12 q4 -18 -8 -26 Z" fill="#dcbb85"/>
<path d="M606 372 l-2 -12 l12 6 Z" fill="#a87e4c"/>
<path d="M630 372 l2 -12 l-12 6 Z" fill="#c19a62"/>
<circle cx="613" cy="379" r="2.4" fill="#3a3140"/>
<circle cx="624" cy="379" r="2.4" fill="#3a3140"/>
<path d="M648 408 q10 -8 6 -22" fill="none" stroke="#b58c58" stroke-width="6" stroke-linecap="round"/>
</g>
<rect x="592" y="490" width="48" height="64" rx="3" fill="url(#italy-pane)"/>
<rect x="578" y="488" width="15" height="68" rx="2" fill="url(#italy-shutterdim)"/>
<rect x="639" y="488" width="15" height="68" rx="2" fill="url(#italy-shutterlit)"/>

<rect x="692" y="232" width="120" height="364" fill="url(#italy-facsalmon)"/>
<rect x="692" y="232" width="26" height="364" fill="url(#italy-vshade)"/>
<rect x="798" y="232" width="14" height="364" fill="url(#italy-rimlight)"/>
<rect x="688" y="222" width="126" height="16" fill="url(#italy-roof)"/>
<rect x="688" y="218" width="126" height="6" fill="#c2755c"/>
<rect x="742" y="186" width="14" height="34" fill="#c98a7c"/>
<rect x="742" y="186" width="4" height="34" fill="#9c5748"/>
<rect x="738" y="178" width="22" height="10" fill="#8b4a3a"/>
<g data-obj="bell">
<path d="M766 296 q0 -34 18 -34 q18 0 18 34 Z" fill="#a8762a"/>
<path d="M784 262 q18 0 18 34 l-10 0 q2 -26 -8 -34 Z" fill="#f0cf7e"/>
<path d="M766 296 q0 -34 18 -34 q5 0 8 3 q-12 8 -12 31 Z" fill="#c99527"/>
<rect x="761" y="294" width="42" height="9" rx="3" fill="#8f6420"/>
<rect x="761" y="294" width="42" height="3" rx="1.5" fill="#e0bc63"/>
<circle cx="784" cy="307" r="5" fill="#7a5233"/>
<path d="M784 262 l0 -10" stroke="#7a5233" stroke-width="3" fill="none"/>
</g>
<rect x="716" y="286" width="46" height="60" rx="3" fill="url(#italy-pane)"/>
<rect x="716" y="286" width="46" height="15" rx="3" fill="#8fc0bc" opacity="0.2"/>
<rect x="702" y="284" width="15" height="64" rx="2" fill="#3a6390"/>
<rect x="761" y="284" width="15" height="64" rx="2" fill="#5f92c2"/>
<rect x="712" y="346" width="54" height="7" rx="2" fill="url(#italy-stone)"/>
<ellipse cx="739" cy="312" rx="13" ry="15" fill="#f6efe2" opacity="0.4"/>
<rect x="716" y="418" width="46" height="62" rx="3" fill="url(#italy-pane)"/>
<rect x="702" y="416" width="15" height="66" rx="2" fill="url(#italy-shutterdim)"/>
<rect x="761" y="416" width="15" height="66" rx="2" fill="url(#italy-shutterlit)"/>
<g data-obj="watering-can">
<rect x="712" y="464" width="40" height="30" rx="5" fill="#7e838f"/>
<rect x="738" y="464" width="14" height="30" rx="5" fill="#c4ced4"/>
<rect x="712" y="464" width="12" height="30" rx="5" fill="#5f646e"/>
<path d="M752 470 l18 -10 l4 6 l-18 12 Z" fill="#8e939f"/>
<path d="M756 468 l14 -8 l2 3 l-14 9 Z" fill="#c4ced4"/>
<path d="M770 460 l9 -4 l3 6 l-9 4 Z" fill="#a6b2ba"/>
<path d="M718 464 q10 -14 24 -2" fill="none" stroke="#6f747e" stroke-width="4"/>
<rect x="710" y="492" width="44" height="7" rx="3" fill="#5a5f69"/>
</g>

<path d="M164 328 q56 16 116 2" fill="none" stroke="#8a6a52" stroke-width="2.6"/>
<g data-obj="shirt">
<path d="M180 332 l10 -4 l6 4 l6 -4 l10 4 l6 14 l-8 4 l-2 -8 l0 24 l-24 0 l0 -24 l-2 8 l-8 -4 Z" fill="#e4dbc8"/>
<path d="M202 332 l10 4 l6 14 l-8 4 l-2 -8 l0 24 l-10 0 Z" fill="#fffaf0"/>
<path d="M180 332 l10 -4 l4 3 l-4 6 l0 33 l-8 0 l0 -24 l-2 8 l-8 -4 Z" fill="#cfc4ac"/>
<path d="M192 332 q4 6 8 0" fill="none" stroke="#b8ad94" stroke-width="2"/>
</g>
<path d="M226 336 l14 0 l0 22 q10 2 10 10 q0 6 -8 6 q-10 0 -14 -8 Z" fill="#e08f7c"/>
<path d="M236 336 l4 0 l0 22 q10 2 10 10 q0 6 -8 6 Z" fill="#f7c8bc"/>
<path d="M256 334 l14 0 l0 34 q0 6 -8 6 q-8 0 -8 -8 Z" fill="#c9b3e0"/>
<path d="M266 334 l4 0 l0 34 q0 6 -8 6 Z" fill="#e0d0f2"/>

<path d="M648 300 q58 16 118 4" fill="none" stroke="#8a6a52" stroke-width="2.6"/>
<rect x="662" y="304" width="26" height="38" rx="2" fill="#e4dbc8"/>
<rect x="678" y="304" width="10" height="38" rx="2" fill="#fdf4e2"/>
<rect x="722" y="308" width="30" height="46" rx="2" fill="#e5c356"/>
<rect x="742" y="308" width="10" height="46" rx="2" fill="#fce9a8"/>
<rect x="722" y="322" width="30" height="6" fill="#c8382f"/>
<rect x="722" y="336" width="30" height="6" fill="#3f8f9c"/>

<path d="M198 246 Q332 300 466 254" fill="none" stroke="#8a6a52" stroke-width="2.6"/>
<path d="M214 253 l14 1 l-6 20 Z" fill="#d9483f"/>
<path d="M254 264 l14 2 l-6 20 Z" fill="#f0c33c"/>
<path d="M296 272 l14 1 l-6 20 Z" fill="#3f8f6c"/>
<path d="M340 273 l14 -1 l-6 21 Z" fill="#d9483f"/>
<path d="M384 268 l14 -2 l-6 20 Z" fill="#4f9fb0"/>
<path d="M428 259 l14 -3 l-5 20 Z" fill="#f0c33c"/>

<rect x="462" y="322" width="116" height="14" rx="4" fill="url(#italy-wood)"/>
<path d="M462 336 l116 0 l0 16 l-116 0 Z" fill="url(#italy-canvas)"/>
<path d="M470 336 l0 16 l14 0 l0 -16 Z" fill="#8f5f7f"/>
<path d="M502 336 l0 16 l14 0 l0 -16 Z" fill="#8f5f7f"/>
<path d="M534 336 l0 16 l14 0 l0 -16 Z" fill="#8f5f7f"/>
<path d="M566 336 l0 16 l12 0 l0 -16 Z" fill="#8f5f7f"/>
<rect x="462" y="350" width="116" height="7" rx="3" fill="#6b432d"/>
<g transform="translate(470 362) rotate(-4) scale(0.5)">
<path d="M6 34 q0 -22 38 -22 q38 0 38 22 q0 40 -14 62 q-12 18 -24 18 q-12 0 -24 -18 q-14 -22 -14 -62 Z" fill="#e6dcc6"/>
<path d="M44 12 q38 0 38 22 q0 40 -14 62 q-8 12 -16 16 q16 -30 14 -62 q-2 -30 -22 -38 Z" fill="#fffaf0"/>
<ellipse cx="26" cy="58" rx="14" ry="10" fill="#332a3f"/>
<ellipse cx="62" cy="58" rx="14" ry="10" fill="#332a3f"/>
<path d="M34 98 q10 8 20 0" fill="none" stroke="#c9b892" stroke-width="3"/>
</g>
<g data-obj="venetian-mask" transform="translate(524 360) rotate(-7) scale(0.5)">
<path d="M44 6 q-6 -18 6 -28 q4 12 12 16 q-8 4 -12 14 Z" fill="#a865a0"/>
<path d="M44 6 q10 -16 26 -18 q-8 12 -14 22 Z" fill="#cf8ec5"/>
<path d="M6 34 q0 -22 38 -22 q38 0 38 22 q0 40 -14 62 q-12 18 -24 18 q-12 0 -24 -18 q-14 -22 -14 -62 Z" fill="#d4bb92"/>
<path d="M44 12 q38 0 38 22 q0 40 -14 62 q-8 12 -16 16 q16 -30 14 -62 q-2 -30 -22 -38 Z" fill="#f2e2c2"/>
<path d="M6 34 q0 -22 38 -22 q38 0 38 22 q-4 12 -38 12 q-34 0 -38 -12 Z" fill="#b58125"/>
<path d="M44 22 q34 0 38 12 q-4 -20 -38 -20 q-34 0 -38 20 q4 -12 38 -12 Z" fill="#efce7c"/>
<ellipse cx="26" cy="58" rx="14" ry="10" fill="#332a3f"/>
<ellipse cx="62" cy="58" rx="14" ry="10" fill="#332a3f"/>
<path d="M8 50 q10 -12 22 -12" fill="none" stroke="#6f4ab8" stroke-width="4" stroke-linecap="round"/>
<path d="M80 50 q-10 -12 -22 -12" fill="none" stroke="#6f4ab8" stroke-width="4" stroke-linecap="round"/>
<path d="M44 66 q-5 12 0 22 q5 -10 0 -22 Z" fill="#bfa478"/>
<path d="M34 98 q10 8 20 0" fill="none" stroke="#ab8b56" stroke-width="3"/>
<circle cx="44" cy="26" r="5" fill="#a13c3c"/>
</g>
<path d="M520 356 l16 -2 l-4 34 l-14 2 Z" fill="#d94f4f"/>
<path d="M520 356 l16 -2 l-1 9 l-15 2 Z" fill="#e8756f"/>

<rect x="462" y="418" width="116" height="10" rx="4" fill="url(#italy-wood)"/>
<g transform="translate(470 436) scale(0.5)">
<path d="M6 34 q0 -22 38 -22 q38 0 38 22 q0 20 -6 34 q22 12 22 26 q0 12 -16 12 q-16 0 -22 -14 q-8 14 -22 14 q-14 0 -20 -18 q-14 -22 -14 -54 Z" fill="#dcd2bc"/>
<path d="M44 12 q38 0 38 22 q0 20 -6 34 q22 12 22 26 q0 12 -16 12 q14 -8 2 -24 q-14 -18 -18 -32 q6 -26 -22 -38 Z" fill="#f7efdd"/>
<ellipse cx="26" cy="52" rx="13" ry="9" fill="#332a3f"/>
<ellipse cx="62" cy="52" rx="13" ry="9" fill="#332a3f"/>
</g>
<g transform="translate(524 436) rotate(5) scale(0.5)">
<path d="M44 4 q-10 -26 4 -42 q6 18 18 24 q-14 6 -18 20 Z" fill="#3f8f9c"/>
<path d="M6 34 q0 -22 38 -22 q38 0 38 22 q0 40 -14 62 q-12 18 -24 18 q-12 0 -24 -18 q-14 -22 -14 -62 Z" fill="#8cc9d8"/>
<path d="M44 12 q38 0 38 22 q0 40 -14 62 q-8 12 -16 16 q16 -30 14 -62 q-2 -30 -22 -38 Z" fill="#cdeef4"/>
<circle cx="26" cy="58" r="12" fill="#332a3f"/>
<circle cx="62" cy="58" r="12" fill="#332a3f"/>
<path d="M34 98 q10 8 20 0" fill="none" stroke="#5f8f9c" stroke-width="3"/>
</g>

<rect x="0" y="558" width="800" height="38" fill="url(#italy-stone)"/>
<rect x="0" y="558" width="800" height="9" fill="#f0e0c0" opacity="0.75"/>
<rect x="0" y="584" width="800" height="12" fill="#5f7456"/>
<rect x="0" y="584" width="800" height="4" fill="#7d9269" opacity="0.7"/>
<rect x="446" y="560" width="5" height="34" fill="#a68d6c" opacity="0.6"/>
<rect x="228" y="560" width="5" height="34" fill="#a68d6c" opacity="0.5"/>
<path d="M96 558 a26 26 0 0 1 52 0 Z" fill="#a68d6c"/>
<path d="M100 558 a22 22 0 0 1 44 0 Z" fill="#2f5f5c"/>
<path d="M122 536 a22 22 0 0 1 22 22 l-8 0 a14 14 0 0 0 -14 -14 Z" fill="#4f8079" opacity="0.7"/>
<path d="M556 558 a24 24 0 0 1 48 0 Z" fill="#a68d6c"/>
<path d="M560 558 a20 20 0 0 1 40 0 Z" fill="#2f5f5c"/>
<path d="M580 538 a20 20 0 0 1 20 20 l-7 0 a13 13 0 0 0 -13 -13 Z" fill="#4f8079" opacity="0.7"/>
<ellipse cx="206" cy="556" rx="26" ry="6" fill="url(#italy-shadow)"/>
<g data-obj="anchor">
<path d="M204 512 l5 42" stroke="#5f646e" stroke-width="6" fill="none"/>
<path d="M206 512 l2 42" stroke="#aeb8c0" stroke-width="2.4" fill="none"/>
<circle cx="204" cy="508" r="8" fill="none" stroke="#6f747e" stroke-width="4"/>
<path d="M188 524 l32 0" stroke="#8a8f9c" stroke-width="4" fill="none"/>
<path d="M188 522 l32 0" stroke="#c4ced4" stroke-width="1.6" fill="none"/>
<path d="M184 538 q4 20 22 20 q18 0 22 -20" fill="none" stroke="#7e838f" stroke-width="7"/>
<path d="M186 540 q6 16 20 16" fill="none" stroke="#b0bac2" stroke-width="2.4"/>
<path d="M180 534 l8 8 l-10 4 Z" fill="#5f646e"/>
<path d="M232 534 l-8 8 l10 4 Z" fill="#8f959f"/>
</g>
<g data-obj="lion">
<circle cx="218" cy="578" r="18" fill="#b8a081"/>
<circle cx="220" cy="576" r="13" fill="#e0c9a4"/>
<path d="M220 563 q13 0 13 13 q0 7 -4 10 q5 -17 -9 -23 Z" fill="#f4e2c2"/>
<path d="M200 578 l-6 -7 l8 -2 Z" fill="#a89070"/>
<path d="M236 578 l6 -7 l-8 -2 Z" fill="#c9b192"/>
<path d="M198 566 l-4 -8 l9 3 Z" fill="#a89070"/>
<path d="M238 566 l4 -8 l-9 3 Z" fill="#c9b192"/>
<circle cx="215" cy="574" r="2.2" fill="#6d5c44"/>
<circle cx="225" cy="574" r="2.2" fill="#6d5c44"/>
<path d="M214 584 q6 6 12 0" fill="none" stroke="#6d5c44" stroke-width="2.6"/>
</g>
<g data-obj="starfish">
<path d="M320 560 l7 16 l18 1 l-14 12 l5 17 l-16 -10 l-16 10 l5 -17 l-14 -12 l18 -1 Z" fill="#c9682c"/>
<path d="M320 560 l7 16 l18 1 l-14 12 l5 17 l-16 -10 Z" fill="#f0a05c"/>
<path d="M320 560 l7 16 l6 0 l-13 -16 Z" fill="#f8c186"/>
<circle cx="320" cy="580" r="3" fill="#a9541f"/>
<circle cx="313" cy="574" r="2" fill="#a9541f"/>
<circle cx="327" cy="574" r="2" fill="#a9541f"/>
</g>
<g data-obj="crab">
<ellipse cx="400" cy="582" rx="18" ry="12" fill="#a9302a"/>
<ellipse cx="401" cy="579" rx="15" ry="9" fill="#dd4c40"/>
<path d="M401 570 q15 0 15 9 q0 3 -2 5 q2 -10 -13 -14 Z" fill="#f4867a"/>
<path d="M384 574 q-10 -6 -12 -12 q8 0 12 6 Z" fill="#c93c33"/>
<path d="M416 574 q10 -6 12 -12 q-8 0 -12 6 Z" fill="#e0574a"/>
<path d="M384 590 l-8 6" stroke="#c93c33" stroke-width="3" fill="none"/>
<path d="M416 590 l8 6" stroke="#c93c33" stroke-width="3" fill="none"/>
<circle cx="394" cy="572" r="3" fill="#3a3140"/>
<circle cx="406" cy="572" r="3" fill="#3a3140"/>
</g>
<rect x="678" y="540" width="14" height="18" rx="4" fill="#6d5c44"/>
<rect x="686" y="540" width="6" height="18" rx="3" fill="#a8957a"/>

<rect x="0" y="594" width="800" height="262" fill="url(#italy-canal)"/>
<rect x="88" y="596" width="98" height="150" fill="url(#italy-reflwarm)"/>
<rect x="466" y="596" width="106" height="130" fill="url(#italy-refllilac)"/>
<rect x="578" y="596" width="112" height="164" fill="url(#italy-reflwarm)"/>
<rect x="692" y="596" width="112" height="150" fill="url(#italy-reflrose)"/>
<rect x="0" y="596" width="800" height="76" fill="url(#italy-watershine)"/>
<path d="M356 648 q42 -11 84 0" fill="none" stroke="#a8e6d2" stroke-width="3.6" opacity="0.45"/>
<path d="M80 784 q48 -13 96 0" fill="none" stroke="#5aa094" stroke-width="4.2" opacity="0.5"/>
<path d="M150 832 q56 -16 112 0" fill="none" stroke="#4e9188" stroke-width="4.6" opacity="0.45"/>
<path d="M540 798 q46 -12 92 0" fill="none" stroke="#5aa094" stroke-width="4" opacity="0.42"/>
<path d="M630 756 q38 -10 76 0" fill="none" stroke="#8ed6c2" stroke-width="3.2" opacity="0.32"/>
<rect x="556" y="616" width="17" height="202" rx="6" fill="#e6d7c2"/>
<rect x="556" y="616" width="7" height="202" rx="3" fill="#a8907a"/>
<rect x="566" y="616" width="7" height="202" rx="3" fill="#fdf4e2"/>
<rect x="556" y="632" width="17" height="19" fill="#c8382f"/>
<rect x="556" y="678" width="17" height="19" fill="#c8382f"/>
<rect x="700" y="628" width="16" height="196" rx="6" fill="#e6d7c2"/>
<rect x="700" y="628" width="6" height="196" rx="3" fill="#a8907a"/>
<rect x="710" y="628" width="6" height="196" rx="3" fill="#fdf4e2"/>
<rect x="700" y="648" width="16" height="18" fill="#2f7d5c"/>
<rect x="166" y="632" width="15" height="188" rx="6" fill="#e6d7c2"/>
<rect x="175" y="632" width="6" height="188" rx="3" fill="#fdf4e2"/>
<rect x="166" y="650" width="15" height="18" fill="#c8382f"/>
<ellipse cx="564" cy="820" rx="30" ry="10" fill="url(#italy-shadowwater)"/>
<ellipse cx="708" cy="826" rx="28" ry="9" fill="url(#italy-shadowwater)"/>
<g data-obj="gull">
<path d="M190 634 q-20 -16 -6 -30 q14 -12 26 2 q-14 4 -20 28 Z" fill="#ddd5c6"/>
<path d="M210 606 q-14 4 -20 28 q-6 -6 -8 -12 q10 -14 28 -16 Z" fill="#ffffff"/>
<circle cx="184" cy="612" r="8" fill="#f6efe2"/>
<circle cx="182" cy="609" r="4" fill="#ffffff"/>
<circle cx="187" cy="610" r="2.2" fill="#3a3140"/>
<path d="M177 612 l-10 4 l10 4 Z" fill="#e8853f"/>
</g>
<path d="M556 614 q46 8 152 14" fill="none" stroke="#c9b08c" stroke-width="2.4" opacity="0.8"/>

<ellipse cx="320" cy="782" rx="210" ry="20" fill="url(#italy-shadowwater)"/>
<path d="M112 730 q40 -18 120 -20 q120 -4 250 4 q46 2 72 12 q-24 40 -78 46 q-140 12 -256 2 q-70 -8 -108 -44 Z" fill="url(#italy-gondola)"/>
<path d="M112 730 q40 -18 120 -20 q120 -4 250 4 q46 2 72 12 q-30 12 -96 14 q-160 6 -262 -4 q-58 -6 -84 -6 Z" fill="#4a4254"/>
<path d="M232 710 q120 -4 250 4 q46 2 72 12 q-14 5 -38 8 q-24 -12 -70 -15 q-118 -8 -214 -9 Z" fill="#6f647e"/>
<path d="M300 712 q120 0 210 14" fill="none" stroke="#c9b8a2" stroke-width="2.6" opacity="0.55"/>
<path d="M128 726 q-18 -46 -6 -74 q10 -22 26 -8 q-16 20 -6 48 q6 18 14 32 Z" fill="#2f2a36"/>
<path d="M142 644 q6 -6 6 4 q-14 20 -6 46 l-6 -4 q-8 -26 6 -46 Z" fill="#5e5569"/>
<g data-obj="prow">
<path d="M134 646 q16 -18 34 -10 q-6 12 -18 14 q-12 2 -16 -4 Z" fill="#b98b28"/>
<path d="M150 636 q12 -1 18 0 q-6 12 -18 14 Z" fill="#f2d488"/>
<path d="M138 660 l24 -8 l0 8 l-24 8 Z" fill="#e8bd63"/>
<path d="M140 676 l22 -8 l0 8 l-22 8 Z" fill="#c99333"/>
<path d="M142 692 l20 -8 l0 8 l-20 8 Z" fill="#e2b356"/>
</g>
<rect x="250" y="700" width="130" height="12" rx="4" fill="url(#italy-wood)"/>
<rect x="258" y="684" width="114" height="18" rx="5" fill="#8a5a3f"/>
<rect x="258" y="684" width="114" height="6" rx="3" fill="#b57e56"/>
<rect x="288" y="648" width="56" height="20" rx="8" fill="#b53c3c"/>
<rect x="288" y="648" width="56" height="7" rx="4" fill="#ec6a5c"/>
<g transform="translate(330 644) scale(0.45)">
<ellipse cx="56" cy="52" rx="56" ry="15" fill="#3d3745"/>
<ellipse cx="56" cy="49" rx="56" ry="15" fill="#63596f"/>
<rect x="20" y="18" width="72" height="30" rx="10" fill="#4c4556"/>
<rect x="68" y="18" width="24" height="30" rx="10" fill="#7f7590"/>
<path d="M20 40 q36 8 72 0 l0 8 q-36 8 -72 0 Z" fill="#332e3c"/>
</g>
<path d="M394 716 q26 -6 44 -2 l0 8 q-20 -4 -44 2 Z" fill="url(#italy-brass)"/>
<g data-obj="oar">
<path d="M452 734 l46 -32 l9 12 l-46 32 Z" fill="#8d6039"/>
<path d="M452 734 l46 -32 l4 5 l-46 32 Z" fill="#d5a976"/>
<path d="M498 702 l12 -8 l9 12 l-12 8 Z" fill="#6b432d"/>
<path d="M498 702 l12 -8 l3 4 l-12 8 Z" fill="#a8764f"/>
</g>
<path d="M496 688 q0 -10 12 -10 q14 0 14 12 q0 8 -8 10 l0 10 l-10 0 l0 -10 q-8 -2 -8 -12 Z" fill="#7a4a36"/>
<path d="M508 678 q14 0 14 12 q0 8 -8 10 l0 10 l-4 0 l0 -10 q8 -4 6 -12 q-2 -8 -8 -10 Z" fill="#b0805c"/>
<path d="M112 748 q60 20 200 22 q160 2 242 -14 l0 10 q-90 20 -248 18 q-146 -2 -194 -22 Z" fill="#171420" opacity="0.42"/>

<ellipse cx="516" cy="836" rx="92" ry="12" fill="url(#italy-shadowwater)"/>
<path d="M436 800 q22 -10 78 -10 q56 0 82 10 q-14 26 -50 30 q-52 4 -92 -2 q-14 -12 -18 -28 Z" fill="#65402b"/>
<path d="M436 800 q22 -10 78 -10 q56 0 82 10 q-16 8 -60 9 q-70 2 -100 -9 Z" fill="#9a6a46"/>
<path d="M514 790 q56 0 82 10 q-10 5 -30 7 q-16 -12 -52 -17 Z" fill="#c69568"/>
<g data-obj="fish-crate">
<rect x="460" y="776" width="42" height="24" rx="3" fill="url(#italy-crate)"/>
<rect x="460" y="776" width="42" height="4" rx="2" fill="#dcbd86"/>
<path d="M462 772 q14 -10 30 -2 q-6 8 -18 8 q-8 0 -12 -6 Z" fill="#9fadb4"/>
<path d="M462 772 q14 -10 30 -2 q-3 4 -8 5 q-10 -6 -22 -3 Z" fill="#e8f2f0"/>
<path d="M492 770 l10 -6 l0 12 Z" fill="#8a929c"/>
<circle cx="470" cy="769" r="2" fill="#3a3140"/>
</g>
<g data-obj="flowers">
<rect x="516" y="780" width="40" height="20" rx="3" fill="#a8854f"/>
<rect x="516" y="780" width="40" height="5" rx="2" fill="#e0c290"/>
<rect x="544" y="780" width="12" height="20" rx="3" fill="#d5b47c"/>
<path d="M528 780 q-6 -18 2 -26" fill="none" stroke="#4f8f5a" stroke-width="3"/>
<path d="M542 780 q2 -16 8 -22" fill="none" stroke="#4f8f5a" stroke-width="3"/>
<circle cx="530" cy="752" r="8" fill="#d4629c"/>
<circle cx="528" cy="750" r="3.5" fill="#f7d76a"/>
<circle cx="550" cy="757" r="7" fill="#f0c33c"/>
<circle cx="518" cy="763" r="6" fill="#b96fb0"/>
</g>
<g data-obj="life-ring">
<circle cx="582" cy="774" r="21" fill="#d9d0bc"/>
<circle cx="582" cy="774" r="21" fill="url(#italy-cream)" opacity="0.75"/>
<circle cx="582" cy="774" r="11" fill="#2f6b68"/>
<path d="M582 753 a21 21 0 0 1 15 6 l-8 8 a10 10 0 0 0 -7 -3 Z" fill="#e0574a"/>
<path d="M582 795 a21 21 0 0 1 -15 -6 l8 -8 a10 10 0 0 0 7 3 Z" fill="#c8382f"/>
<path d="M568 762 q8 -8 18 -8" fill="none" stroke="#ffffff" stroke-width="3" opacity="0.6"/>
</g>
<g data-obj="buoy">
<circle cx="630" cy="800" r="19" fill="#a83a36"/>
<path d="M630 781 a19 19 0 0 1 19 19 a19 19 0 0 1 -8 15 a15 15 0 0 0 -11 -34 Z" fill="#ef7a6c"/>
<circle cx="630" cy="800" r="12" fill="#ece4d2"/>
<circle cx="630" cy="800" r="5" fill="#c8382f"/>
<rect x="626" y="774" width="8" height="10" rx="3" fill="#8a8f9c"/>
<path d="M612 812 q18 6 36 0" fill="none" stroke="#7fc2b2" stroke-width="4" opacity="0.65"/>
</g>
<g data-obj="duck">
<path d="M280 812 q4 -18 24 -18 q22 0 22 16 q0 12 -20 12 q-22 0 -26 -10 Z" fill="#ddd5c6"/>
<path d="M304 794 q22 0 22 16 q0 12 -20 12 q16 -8 12 -18 q-3 -8 -14 -10 Z" fill="#ffffff"/>
<path d="M310 796 q0 -18 12 -18 q10 0 10 12 q0 8 -8 10 Z" fill="#f6efe2"/>
<circle cx="322" cy="784" r="2.2" fill="#3a3140"/>
<path d="M330 788 l10 3 l-10 4 Z" fill="#e8853f"/>
<path d="M282 820 q22 6 44 0" fill="none" stroke="#7fc2b2" stroke-width="4" opacity="0.65"/>
</g>

<rect x="0" y="836" width="800" height="364" fill="url(#italy-pave)"/>
<rect x="0" y="826" width="800" height="18" fill="url(#italy-kerb)"/>
<rect x="0" y="822" width="800" height="5" fill="#f7e2c0"/>
<rect x="0" y="844" width="800" height="9" fill="#a68a68" opacity="0.5"/>
<path d="M0 900 h800" stroke="#a68a68" stroke-width="3" opacity="0.35" fill="none"/>
<path d="M0 1012 h800" stroke="#a68a68" stroke-width="2.5" opacity="0.24" fill="none"/>
<path d="M418 852 q30 24 66 12 q26 -10 2 -22 q-22 -10 -42 0" fill="none" stroke="#dcc79e" stroke-width="7" stroke-linecap="round"/>
<path d="M418 852 q30 24 66 12 q26 -10 2 -22 q-22 -10 -42 0" fill="none" stroke="#ab9068" stroke-width="2.4" stroke-linecap="round"/>
<circle cx="418" cy="846" r="10" fill="none" stroke="#7a6a52" stroke-width="5"/>

<ellipse cx="616" cy="884" rx="38" ry="10" fill="url(#italy-shadow)"/>
<g data-obj="fountain">
<ellipse cx="616" cy="872" rx="27" ry="9" fill="#9a8264"/>
<path d="M589 866 q4 -12 27 -12 q23 0 27 12 q-10 8 -27 8 q-17 0 -27 -8 Z" fill="#c1a782"/>
<path d="M616 854 q23 0 27 12 q-6 5 -15 7 q6 -13 -12 -19 Z" fill="#e4d0ac"/>
<ellipse cx="616" cy="862" rx="20" ry="6" fill="#2f6b68"/>
<ellipse cx="620" cy="861" rx="10" ry="3" fill="#6fb0a2" opacity="0.7"/>
<rect x="612" y="838" width="8" height="22" fill="#a68d6c"/>
<rect x="617" y="838" width="3" height="22" fill="#d5c09a"/>
<ellipse cx="616" cy="838" rx="12" ry="5" fill="#dcc4a2"/>
<path d="M616 834 q-6 8 -8 18" fill="none" stroke="#a8e6d2" stroke-width="3" opacity="0.8"/>
<path d="M616 834 q6 8 8 18" fill="none" stroke="#cdf4e6" stroke-width="3" opacity="0.85"/>
</g>
<ellipse cx="548" cy="890" rx="26" ry="7" fill="url(#italy-shadow)"/>
<g data-obj="pigeon">
<path d="M528 878 q4 -16 20 -16 q18 0 22 14 q-9 6 -24 6 q-14 0 -18 -4 Z" fill="#71767f"/>
<path d="M548 862 q18 0 22 14 q-9 6 -24 6 q16 -8 2 -20 Z" fill="#b4c0c8"/>
<path d="M534 864 q10 -18 26 -14 q-8 10 -10 20 q-10 0 -16 -6 Z" fill="#9aa4ae"/>
<circle cx="552" cy="858" r="8" fill="#8f959f"/>
<circle cx="550" cy="855" r="3.5" fill="#c4ced4"/>
<circle cx="555" cy="856" r="2.2" fill="#3a3140"/>
<path d="M559 858 l10 3 l-10 4 Z" fill="#d9a441"/>
</g>
<ellipse cx="598" cy="888" rx="12" ry="4" fill="url(#italy-shadow)"/>
<path d="M582 882 q4 -12 16 -12 q14 0 18 10 q-7 6 -20 6 q-11 0 -14 -4 Z" fill="#7e838f"/>
<path d="M598 870 q14 0 18 10 q-6 5 -16 6 q11 -8 -2 -16 Z" fill="#b0bac2"/>
<circle cx="603" cy="868" r="6" fill="#8f95a2"/>
<path d="M608 868 l8 3 l-8 3 Z" fill="#d9a441"/>
<ellipse cx="466" cy="886" rx="12" ry="4" fill="url(#italy-shadow)"/>
<path d="M450 880 q4 -12 16 -12 q14 0 17 10 q-7 6 -19 6 q-11 0 -14 -4 Z" fill="#8b929b"/>
<path d="M466 868 q14 0 17 10 q-6 5 -15 6 q10 -8 -2 -16 Z" fill="#bcc6cc"/>
<circle cx="470" cy="866" r="6" fill="#a6b2ba"/>
<path d="M475 866 l8 3 l-8 3 Z" fill="#d9a441"/>

<ellipse cx="276" cy="864" rx="34" ry="8" fill="url(#italy-shadow)"/>
<g data-obj="barrel">
<path d="M254 862 q2 -34 22 -34 q20 0 22 34 Z" fill="#6b432d"/>
<path d="M276 828 q20 0 22 34 l-12 0 q2 -26 -10 -34 Z" fill="#b58054"/>
<path d="M254 862 q2 -34 22 -34 q5 0 8 3 q-14 6 -16 31 Z" fill="#5a3524"/>
<rect x="250" y="824" width="52" height="10" rx="3" fill="#4e2e21"/>
<rect x="250" y="824" width="52" height="3" rx="1.5" fill="#8f6446"/>
<rect x="252" y="844" width="48" height="7" rx="3" fill="#4e2e21"/>
</g>

<rect x="0" y="498" width="128" height="530" fill="url(#italy-facterra)"/>
<rect x="0" y="498" width="24" height="530" fill="url(#italy-vshade)"/>
<rect x="112" y="498" width="16" height="530" fill="url(#italy-rimlight)"/>
<rect x="0" y="490" width="134" height="16" fill="#8f5f36"/>
<rect x="0" y="486" width="134" height="5" fill="#b57e44"/>
<rect x="0" y="1006" width="134" height="16" fill="#a98456"/>
<rect x="0" y="1006" width="134" height="5" fill="#d0a875"/>
<rect x="0" y="1018" width="134" height="10" fill="#7f5f3a"/>
<rect x="20" y="556" width="56" height="76" rx="3" fill="url(#italy-pane)"/>
<rect x="20" y="556" width="56" height="18" rx="3" fill="#8fc0bc" opacity="0.18"/>
<rect x="4" y="554" width="17" height="80" rx="2" fill="url(#italy-shutterdim)"/>
<rect x="75" y="554" width="17" height="80" rx="2" fill="url(#italy-shutterlit)"/>
<rect x="12" y="548" width="72" height="10" fill="url(#italy-stone)"/>
<rect x="10" y="630" width="70" height="16" rx="4" fill="url(#italy-woodup)"/>
<circle cx="24" cy="624" r="11" fill="url(#italy-fruit)"/>
<circle cx="48" cy="622" r="12" fill="#e8674f"/>
<path d="M16 616 q12 -18 26 -8" fill="none" stroke="#4f8f5a" stroke-width="5"/>
<rect x="94" y="498" width="8" height="520" fill="#a37a4c"/>
<rect x="99" y="498" width="3" height="520" fill="#dcb684"/>
<rect x="90" y="820" width="16" height="11" rx="3" fill="#8f6a3f"/>
<path d="M8 676 q26 12 52 -4" fill="none" stroke="#7a4fd0" stroke-width="4" opacity="0.38"/>
<path d="M10 712 q22 -14 44 2 q10 8 24 -4" fill="none" stroke="#e0699c" stroke-width="4.5" opacity="0.36"/>
<path d="M14 748 q30 10 60 -6" fill="none" stroke="#4f9fb0" stroke-width="3.6" opacity="0.34"/>
<path d="M12 830 q24 -16 46 0 q12 10 26 -6" fill="none" stroke="#9b6fe8" stroke-width="4.2" opacity="0.34"/>
<path d="M14 972 q30 12 58 -6" fill="none" stroke="#b96fb0" stroke-width="3.8" opacity="0.3"/>
<circle cx="88" cy="716" r="7" fill="#9b6fe8" opacity="0.36"/>
<circle cx="66" cy="912" r="6" fill="#f0c33c" opacity="0.36"/>
<path transform="translate(14 690) scale(0.7)" d="M33 61 C 8 42, 0 27, 0 17 C 0 5, 9 -1, 18 -1 C 25 -1, 30 3, 33 9 C 36 3, 41 -1, 48 -1 C 57 -1, 66 5, 66 17 C 66 27, 58 42, 33 61 Z" fill="#7a4fd0" opacity="0.5"/>
<path transform="translate(78 690) rotate(-12) scale(0.6)" d="M33 61 C 8 42, 0 27, 0 17 C 0 5, 9 -1, 18 -1 C 25 -1, 30 3, 33 9 C 36 3, 41 -1, 48 -1 C 57 -1, 66 5, 66 17 C 66 27, 58 42, 33 61 Z" fill="#4f9fb0" opacity="0.45"/>
<path transform="translate(72 946) scale(0.68)" d="M33 61 C 8 42, 0 27, 0 17 C 0 5, 9 -1, 18 -1 C 25 -1, 30 3, 33 9 C 36 3, 41 -1, 48 -1 C 57 -1, 66 5, 66 17 C 66 27, 58 42, 33 61 Z" fill="#e0699c" opacity="0.48"/>
<g data-obj="purple-heart" transform="translate(34 880) scale(0.75)">
<path d="M33 61 C 8 42, 0 27, 0 17 C 0 5, 9 -1, 18 -1 C 25 -1, 30 3, 33 9 C 36 3, 41 -1, 48 -1 C 57 -1, 66 5, 66 17 C 66 27, 58 42, 33 61 Z" fill="url(#italy-heart)"/>
<path d="M18 4 C 25 4, 30 8, 33 13 C 26 20, 22 30, 22 42 C 14 32, 6 24, 6 16 C 6 8, 12 4, 18 4 Z" fill="#c9b0f4" opacity="0.5"/>
<path d="M33 61 C 8 42, 0 27, 0 17 C 0 5, 9 -1, 18 -1 C 25 -1, 30 3, 33 9 C 36 3, 41 -1, 48 -1 C 57 -1, 66 5, 66 17 C 66 27, 58 42, 33 61 Z" fill="none" stroke="#4a2a8a" stroke-width="2.5" opacity="0.55"/>
</g>

<rect x="654" y="494" width="158" height="588" fill="url(#italy-faccoral)"/>
<rect x="654" y="494" width="26" height="588" fill="url(#italy-vshade)"/>
<rect x="796" y="494" width="16" height="588" fill="url(#italy-rimlight)"/>
<rect x="654" y="486" width="158" height="16" fill="#8f4229"/>
<rect x="654" y="482" width="158" height="5" fill="#b55e3c"/>
<rect x="654" y="1060" width="158" height="16" fill="#a05a3f"/>
<rect x="654" y="1060" width="158" height="5" fill="#cd7f56"/>
<rect x="654" y="1072" width="158" height="10" fill="#78402b"/>
<rect x="700" y="556" width="62" height="84" rx="3" fill="url(#italy-pane)"/>
<rect x="700" y="556" width="62" height="20" rx="3" fill="#8fc0bc" opacity="0.18"/>
<rect x="684" y="554" width="17" height="88" rx="2" fill="url(#italy-shutterdim)"/>
<rect x="759" y="554" width="17" height="88" rx="2" fill="url(#italy-shutterlit)"/>
<rect x="692" y="548" width="78" height="10" fill="url(#italy-stone)"/>
<rect x="688" y="638" width="82" height="18" rx="4" fill="url(#italy-woodup)"/>
<circle cx="704" cy="632" r="12" fill="url(#italy-fruit)"/>
<circle cx="728" cy="630" r="13" fill="#e8674f"/>
<circle cx="752" cy="632" r="12" fill="#f0c33c"/>
<path d="M696 624 q14 -20 28 -8" fill="none" stroke="#4f8f5a" stroke-width="5"/>
<rect x="654" y="686" width="158" height="10" fill="#9c4a35"/>
<rect x="654" y="686" width="158" height="3" fill="#cf7a56"/>
<g data-obj="mailbox">
<rect x="668" y="676" width="44" height="32" rx="4" fill="#2f6b68"/>
<rect x="696" y="676" width="16" height="32" rx="4" fill="#6bab9d"/>
<path d="M668 676 q22 -14 44 0 Z" fill="#4f8f88"/>
<path d="M690 669 q14 0 22 7 l-10 0 q-6 -4 -12 -4 Z" fill="#87c4b6"/>
<rect x="672" y="690" width="24" height="6" rx="3" fill="#1f504e"/>
<rect x="666" y="706" width="48" height="6" rx="3" fill="#255c58"/>
<path d="M690 664 l0 12" stroke="#7a4a36" stroke-width="3" fill="none"/>
</g>
<g data-obj="keys">
<path d="M732 664 q10 -8 18 0 q-8 8 -18 0 Z" fill="none" stroke="#a8762a" stroke-width="3"/>
<circle cx="736" cy="678" r="7" fill="none" stroke="#d9a441" stroke-width="4"/>
<circle cx="734" cy="675" r="7" fill="none" stroke="#f7de92" stroke-width="1.6"/>
<path d="M736 685 l0 14 l5 0 l-5 0 l0 5" stroke="#d9a441" stroke-width="4" fill="none"/>
<circle cx="754" cy="680" r="6" fill="none" stroke="#b58125" stroke-width="4"/>
<path d="M754 686 l0 12 l4 0" stroke="#b58125" stroke-width="4" fill="none"/>
</g>
<path d="M660 704 q62 32 148 6" fill="none" stroke="#7a4a36" stroke-width="3"/>
<path d="M668 710 l12 28 l12 -24 Z" fill="#f0c33c"/>
<path d="M770 722 l12 28 l12 -24 Z" fill="#5fae86"/>
<circle cx="712" cy="732" r="24" fill="url(#italy-lampglow)"/>
<g data-obj="lantern">
<path d="M700 716 l0 -8 l24 0 l0 8 Z" fill="#7a4a36"/>
<path d="M702 716 l20 0 l4 30 l-28 0 Z" fill="#e6ae2c"/>
<path d="M702 716 l6 0 l-6 30 l-4 0 Z" fill="#c68f1e"/>
<path d="M716 716 l6 0 l4 30 l-8 0 Z" fill="#fbe08e"/>
<path d="M698 746 l28 0 l0 6 l-28 0 Z" fill="#6b432d"/>
<path d="M712 708 l0 -12" stroke="#7a4a36" stroke-width="3" fill="none"/>
<circle cx="712" cy="731" r="6" fill="#fff8d8"/>
</g>

<rect x="656" y="736" width="156" height="10" rx="3" fill="url(#italy-wood)"/>
<rect x="656" y="736" width="156" height="3" rx="1.5" fill="#c08c5c"/>
<g transform="translate(662 740) scale(0.55)">
<ellipse cx="56" cy="52" rx="56" ry="15" fill="#b8853f"/>
<ellipse cx="56" cy="49" rx="56" ry="15" fill="#eece96"/>
<rect x="20" y="14" width="72" height="34" rx="6" fill="#e9cf98"/>
<rect x="68" y="14" width="24" height="34" rx="6" fill="#fdeec8"/>
<ellipse cx="56" cy="14" rx="36" ry="9" fill="#fdeec8"/>
<rect x="20" y="30" width="72" height="14" fill="#2f6bbf"/>
<rect x="20" y="30" width="72" height="5" fill="#6f9fe0"/>
</g>
<g data-obj="gondolier-hat" transform="translate(738 740) scale(0.55)">
<ellipse cx="56" cy="52" rx="56" ry="15" fill="#b8853f"/>
<ellipse cx="56" cy="49" rx="56" ry="15" fill="#e5c283"/>
<ellipse cx="80" cy="46" rx="30" ry="10" fill="#fbe6b4"/>
<ellipse cx="56" cy="47" rx="40" ry="10" fill="#dcb478"/>
<rect x="20" y="14" width="72" height="34" rx="6" fill="#e0c286"/>
<rect x="66" y="14" width="26" height="34" rx="6" fill="#fdeec8"/>
<ellipse cx="56" cy="14" rx="36" ry="9" fill="#fdeec8"/>
<ellipse cx="56" cy="14" rx="26" ry="6" fill="#eed7a0"/>
<rect x="20" y="30" width="72" height="14" fill="#b53c3c"/>
<rect x="20" y="30" width="72" height="5" fill="#ef7a6c"/>
<path d="M88 34 l16 6 l-16 6 Z" fill="#8f2c28"/>
</g>
<rect x="656" y="744" width="156" height="5" rx="2" fill="#5a3524"/>

<rect x="656" y="798" width="156" height="10" rx="3" fill="url(#italy-wood)"/>
<rect x="656" y="798" width="156" height="3" rx="1.5" fill="#c08c5c"/>
<g transform="translate(662 802) scale(0.55)">
<ellipse cx="56" cy="52" rx="56" ry="15" fill="#b8853f"/>
<ellipse cx="56" cy="49" rx="56" ry="15" fill="#eece96"/>
<rect x="20" y="4" width="72" height="44" rx="8" fill="#e9cf98"/>
<rect x="68" y="4" width="24" height="44" rx="8" fill="#fdeec8"/>
<ellipse cx="56" cy="5" rx="36" ry="9" fill="#fdeec8"/>
</g>
<g transform="translate(736 802) scale(0.55)">
<path d="M0 50 q10 -18 56 -18 q46 0 56 18 q-14 14 -56 14 q-42 0 -56 -14 Z" fill="#c4a878"/>
<path d="M56 32 q46 0 56 18 q-8 8 -26 11 q10 -18 -30 -29 Z" fill="#f2e2c2"/>
<rect x="22" y="12" width="68" height="32" rx="14" fill="#d9bf94"/>
<rect x="66" y="12" width="24" height="32" rx="14" fill="#f7e8cc"/>
<circle cx="86" cy="30" r="10" fill="#d4629c"/>
<circle cx="86" cy="30" r="5" fill="#f7d76a"/>
</g>
<rect x="656" y="806" width="156" height="5" rx="2" fill="#5a3524"/>

<rect x="654" y="924" width="158" height="14" rx="2" fill="url(#italy-woodup)"/>
<rect x="654" y="924" width="158" height="4" rx="2" fill="#dcae7c"/>
<g transform="translate(658 858)">
<rect x="9" y="0" width="12" height="5" rx="2" fill="#7a4a36"/>
<path d="M10 5 h10 v20 q9 8 9 22 v19 h-28 v-19 q0 -14 9 -22 Z" fill="#3d7a48"/>
<path d="M20 5 h4 v20 q5 8 5 22 v19 h-8 v-19 q0 -14 -1 -22 Z" fill="#8ccd8a"/>
<rect x="1" y="44" width="28" height="9" fill="#f2ece0" opacity="0.55"/>
</g>
<g transform="translate(714 866)">
<rect x="8" y="0" width="11" height="5" rx="2" fill="#8a8f9c"/>
<path d="M9 5 h9 v18 q8 6 8 18 v17 h-25 v-17 q0 -12 8 -18 Z" fill="#a8ccc8" opacity="0.85"/>
<path d="M18 5 h3 v18 q5 6 5 18 v17 h-7 v-17 q0 -12 -1 -18 Z" fill="#eefaf8"/>
<path d="M2 40 l22 0" stroke="#8fb4b0" stroke-width="2" fill="none"/>
</g>
<g transform="translate(772 882)">
<rect x="9" y="0" width="11" height="5" rx="2" fill="#7a4a36"/>
<path d="M10 5 h9 v8 q11 6 11 18 v11 h-31 v-11 q0 -12 11 -18 Z" fill="#c9548c"/>
<path d="M19 5 h3 v8 q8 6 8 18 v11 h-8 v-11 q0 -12 -3 -18 Z" fill="#f4a0c4"/>
</g>
<rect x="654" y="932" width="158" height="7" rx="2" fill="#6b432d"/>

<rect x="654" y="1020" width="158" height="16" rx="2" fill="url(#italy-woodup)"/>
<rect x="654" y="1020" width="158" height="4" rx="2" fill="#dcae7c"/>
<g transform="translate(668 952)">
<rect x="14" y="0" width="12" height="6" rx="3" fill="#a8762a"/>
<path d="M15 6 l0 16 q-14 8 -14 26 q0 20 19 20 q19 0 19 -20 q0 -18 -14 -26 l0 -16 Z" fill="#2f8f96"/>
<path d="M25 6 l0 16 q14 8 14 26 q0 14 -9 18 q4 -8 4 -18 q0 -18 -13 -26 Z" fill="#9ce4e8"/>
<path d="M4 42 q15 -7 30 0 q1 5 1 8 q-16 -8 -32 0 q0 -3 1 -8 Z" fill="#f0c33c" opacity="0.85"/>
</g>
<g transform="translate(780 958)">
<rect x="11" y="0" width="11" height="5" rx="2" fill="#7a4a36"/>
<path d="M12 5 h9 v20 q10 8 10 20 v17 h-29 v-17 q0 -12 10 -20 Z" fill="#6a45bc"/>
<path d="M21 5 h3 v20 q7 8 7 20 v17 h-8 v-17 q0 -12 -2 -20 Z" fill="#c4aef0"/>
</g>
<g data-obj="murano-bottle" transform="translate(720 959) scale(0.5)">
<circle cx="34" cy="74" r="34" fill="url(#italy-bottleglow)" opacity="0.8"/>
<path d="M28 8 l0 34 q-24 12 -24 46 q0 30 30 30 q30 0 30 -30 q0 -34 -24 -46 l0 -34 Z" fill="url(#italy-bottleteal)"/>
<path d="M28 8 l0 34 q-24 12 -24 46 q0 22 16 28 q-10 -10 -10 -28 q0 -32 22 -44 l0 -36 Z" fill="#1c6d76"/>
<path d="M10 74 q24 -12 48 0 q2 8 2 14 q-26 -14 -52 0 q0 -6 2 -14 Z" fill="#f0c33c" opacity="0.85"/>
<path d="M8 96 q26 12 52 0 q-2 10 -6 14 q-20 8 -40 0 q-4 -4 -6 -14 Z" fill="#d94f8f" opacity="0.8"/>
<rect x="26" y="0" width="16" height="12" rx="4" fill="#25757e"/>
<ellipse cx="34" cy="0" rx="14" ry="5" fill="#7ed2d8"/>
<ellipse cx="34" cy="-6" rx="9" ry="6" fill="#f0c33c"/>
<path d="M55 52 q9 16 9 36 q0 20 -12 30" fill="none" stroke="#f6ffff" stroke-width="5" stroke-linecap="round" opacity="0.8"/>
<path d="M31 16 l0 22" fill="none" stroke="#e6ffff" stroke-width="4" stroke-linecap="round" opacity="0.55"/>
</g>
<rect x="654" y="1012" width="158" height="10" rx="2" fill="#6b432d"/>

<ellipse cx="756" cy="1146" rx="46" ry="12" fill="url(#italy-shadow)"/>
<g data-obj="melon">
<ellipse cx="758" cy="1118" rx="28" ry="24" fill="url(#italy-melon)"/>
<path d="M740 1098 q18 12 36 0" fill="none" stroke="#8ccd8a" stroke-width="4" opacity="0.8"/>
<path d="M734 1112 q24 12 48 0" fill="none" stroke="#8ccd8a" stroke-width="4" opacity="0.75"/>
<path d="M736 1128 q22 10 44 0" fill="none" stroke="#8ccd8a" stroke-width="4" opacity="0.6"/>
<ellipse cx="748" cy="1104" rx="9" ry="6" fill="#a8dda2" opacity="0.45"/>
<path d="M758 1094 q4 -10 12 -10" fill="none" stroke="#2f6b3a" stroke-width="4" stroke-linecap="round"/>
</g>

<rect x="336" y="878" width="322" height="16" rx="5" fill="url(#italy-wood)"/>
<rect x="336" y="878" width="322" height="5" rx="3" fill="#b57e56"/>
<path d="M340 894 l0 62 l312 0 l0 -62 Z" fill="url(#italy-canvas)"/>
<path d="M340 894 l0 62 l30 0 l0 -62 Z" fill="url(#italy-red)"/>
<path d="M400 894 l0 62 l30 0 l0 -62 Z" fill="url(#italy-green)"/>
<path d="M460 894 l0 62 l30 0 l0 -62 Z" fill="url(#italy-red)"/>
<path d="M520 894 l0 62 l30 0 l0 -62 Z" fill="url(#italy-green)"/>
<path d="M580 894 l0 62 l30 0 l0 -62 Z" fill="url(#italy-red)"/>
<path d="M340 894 l312 0 l0 12 l-312 0 Z" fill="#ffffff" opacity="0.22"/>
<path d="M340 946 l312 0 l0 10 l-312 0 Z" fill="#3a2312" opacity="0.14"/>
<path d="M340 948 q26 20 52 0 q26 20 52 0 q26 20 52 0 q26 20 52 0 q26 20 52 0 q26 20 52 0 l0 12 q-26 20 -52 0 q-26 20 -52 0 q-26 20 -52 0 q-26 20 -52 0 q-26 20 -52 0 q-26 20 -52 0 Z" fill="#dfd5c2"/>
<rect x="348" y="894" width="14" height="306" fill="#7a4a36"/>
<rect x="356" y="894" width="6" height="306" fill="#b0805c"/>
<rect x="636" y="894" width="14" height="130" fill="#7a4a36"/>
<rect x="644" y="894" width="6" height="130" fill="#b0805c"/>

<rect x="344" y="980" width="312" height="20" rx="4" fill="url(#italy-woodup)"/>
<rect x="344" y="980" width="312" height="6" rx="3" fill="#dcae7c"/>
<rect x="368" y="972" width="106" height="10" rx="3" fill="#7a4a36"/>
<rect x="368" y="972" width="106" height="3" rx="2" fill="#b0805c"/>
<path d="M352 976 l0 -20 q0 -6 8 -6 l28 0 q8 0 8 6 l0 20 Z" fill="#d5ab7c"/>
<path d="M388 950 q8 0 8 6 l0 20 l-12 0 l0 -26 Z" fill="#f4d8ac"/>
<path d="M356 960 q18 -4 34 0" fill="none" stroke="#b58a5c" stroke-width="2.4"/>
<g data-obj="pizza-slice" transform="translate(378 946) scale(0.55)">
<path d="M4 52 L58 -2 L112 52 Z" fill="#c08b4a"/>
<path d="M58 -2 L112 52 L58 52 Z" fill="#e8b877"/>
<path d="M4 52 q54 16 108 0 l4 4 q-56 18 -116 0 Z" fill="#a8763a"/>
<path d="M10 48 L58 4 L106 48 Z" fill="#e8bd5c"/>
<path d="M58 4 L106 48 L58 48 Z" fill="#fadf9e"/>
<circle cx="42" cy="34" r="9" fill="#c8382f"/>
<circle cx="40" cy="31" r="5" fill="#ef7a6c"/>
<circle cx="74" cy="36" r="8" fill="#c8382f"/>
<circle cx="72" cy="33" r="4.5" fill="#ef7a6c"/>
<circle cx="58" cy="18" r="7" fill="#d9483f"/>
<path d="M26 42 q6 -6 12 -2" fill="none" stroke="#3f7a48" stroke-width="4" stroke-linecap="round"/>
<path d="M84 26 q6 -6 12 -2" fill="none" stroke="#3f7a48" stroke-width="4" stroke-linecap="round"/>
<path d="M52 40 q8 4 14 0" fill="none" stroke="#fff3d0" stroke-width="4" stroke-linecap="round" opacity="0.8"/>
</g>
<g transform="translate(446 952) scale(0.5)">
<path d="M4 52 L58 -2 L112 52 Z" fill="#c08b4a"/>
<path d="M58 -2 L112 52 L58 52 Z" fill="#e8b877"/>
<path d="M4 52 q54 16 108 0 l4 4 q-56 18 -116 0 Z" fill="#a8763a"/>
<path d="M10 48 L58 4 L106 48 Z" fill="#e8bd5c"/>
<path d="M58 4 L106 48 L58 48 Z" fill="#fadf9e"/>
<path d="M40 38 q10 6 22 0" fill="none" stroke="#fff3d0" stroke-width="4" stroke-linecap="round" opacity="0.8"/>
</g>
<g data-obj="cheese">
<path d="M530 980 l0 -22 l40 -12 l0 22 Z" fill="#dcae2c"/>
<path d="M556 950 l14 -4 l0 22 l-14 4 Z" fill="#f7d76a"/>
<path d="M530 958 l40 -12 l0 10 l-40 12 Z" fill="#fbe89e"/>
<circle cx="541" cy="968" r="3" fill="#b5871f"/>
<circle cx="556" cy="963" r="2.6" fill="#b5871f"/>
<circle cx="548" cy="974" r="2.2" fill="#b5871f"/>
</g>
<g transform="translate(566 928)">
<rect x="0" y="0" width="7" height="40" rx="3" fill="#6a45bc"/>
<rect x="0" y="0" width="7" height="10" rx="3" fill="#4e2b96"/>
</g>
<g transform="translate(578 916) scale(0.44)">
<rect x="-17" y="0" width="34" height="64" rx="17" fill="#c99527"/>
<rect x="2" y="0" width="15" height="64" rx="7" fill="#f7de92" opacity="0.75"/>
<rect x="-12" y="62" width="24" height="9" rx="3" fill="#b3a3cc"/>
<rect x="-9" y="70" width="18" height="38" rx="5" fill="#d8ccb4"/>
</g>
<g transform="translate(632 912) scale(0.44)">
<rect x="-16" y="0" width="32" height="62" rx="4" fill="#5c33a8"/>
<rect x="2" y="0" width="14" height="62" rx="3" fill="#b7a2e6" opacity="0.8"/>
<rect x="-9" y="60" width="18" height="48" rx="5" fill="#d8ccb4"/>
</g>
<g data-obj="lightstick" transform="translate(592 909) rotate(5) scale(0.44)">
<rect x="-17" y="0" width="34" height="64" rx="17" fill="url(#italy-lamp)"/>
<rect x="-17" y="0" width="12" height="64" rx="6" fill="#4e3690" opacity="0.55"/>
<ellipse cx="4" cy="18" rx="7" ry="14" fill="#efe6ff" opacity="0.55"/>
<ellipse cx="0" cy="7" rx="10" ry="5" fill="#d8c8f4" opacity="0.7"/>
<rect x="-12" y="62" width="24" height="9" rx="3" fill="#9d8cc0"/>
<rect x="-12" y="62" width="24" height="4" rx="2" fill="#d0c2e8"/>
<rect x="-9" y="70" width="18" height="38" rx="5" fill="#cfc2a8"/>
<rect x="0" y="70" width="9" height="38" rx="4" fill="#f6efe0"/>
<rect x="-9" y="86" width="18" height="6" fill="#6f56ab" opacity="0.75"/>
<path d="M9 100 q14 6 8 18" fill="none" stroke="#a89bc4" stroke-width="3"/>
</g>
<g transform="translate(646 900)">
<path d="M4 60 l0 -50" fill="none" stroke="#4f8f5a" stroke-width="3.5"/>
<circle cx="4" cy="8" r="4" fill="#9b6fe8"/>
<circle cx="9" cy="16" r="3.4" fill="#b096e4"/>
<circle cx="-1" cy="18" r="3.4" fill="#b096e4"/>
</g>
<path d="M568 946 q-4 36 12 36 l58 0 q16 0 12 -36 Z" fill="#8a929c"/>
<path d="M624 946 q4 36 -12 36 l26 0 q16 0 12 -36 Z" fill="#c4ced4"/>
<rect x="562" y="940" width="86" height="10" rx="4" fill="#6f747e"/>
<rect x="562" y="940" width="86" height="4" rx="2" fill="#b0bac2"/>

<rect x="352" y="1000" width="296" height="98" fill="#6b432d"/>
<rect x="352" y="1000" width="296" height="9" fill="#4e2e21"/>
<rect x="638" y="1000" width="10" height="98" fill="#8f6446"/>
<rect x="368" y="1014" width="62" height="42" rx="3" fill="url(#italy-crate)"/>
<rect x="368" y="1014" width="62" height="5" rx="2" fill="#e0c290"/>
<circle cx="384" cy="1008" r="11" fill="url(#italy-fruit)"/>
<circle cx="406" cy="1006" r="12" fill="#d9483f"/>
<circle cx="402" cy="1001" r="5" fill="#f2907c"/>
<circle cx="422" cy="1010" r="9" fill="#c8382f"/>
<g data-obj="eggs">
<rect x="452" y="1014" width="68" height="42" rx="3" fill="url(#italy-crate)"/>
<rect x="452" y="1014" width="68" height="6" rx="2" fill="#e0c290"/>
<ellipse cx="468" cy="1008" rx="11" ry="14" fill="#e2d8c4"/>
<ellipse cx="470" cy="1006" rx="8" ry="11" fill="#fffaf0"/>
<ellipse cx="492" cy="1006" rx="11" ry="14" fill="#e8dfcd"/>
<ellipse cx="494" cy="1003" rx="7" ry="10" fill="#fdf8ee"/>
<ellipse cx="512" cy="1010" rx="10" ry="12" fill="#f2ece0"/>
</g>
<g data-obj="eggplant">
<rect x="566" y="1014" width="66" height="42" rx="3" fill="url(#italy-crate)"/>
<rect x="566" y="1014" width="66" height="6" rx="2" fill="#e0c290"/>
<ellipse cx="582" cy="1010" rx="13" ry="16" fill="#523573"/>
<ellipse cx="585" cy="1007" rx="8" ry="11" fill="#8f6fb8"/>
<ellipse cx="580" cy="1002" rx="4" ry="5" fill="#b79ad8"/>
<ellipse cx="610" cy="1008" rx="14" ry="17" fill="#6b4a8f"/>
<ellipse cx="613" cy="1004" rx="7" ry="10" fill="#9c7cc4"/>
<path d="M582 995 q2 -8 10 -10 q-2 7 -4 10 Z" fill="#4f8f5a"/>
<path d="M610 993 q4 -7 12 -7" fill="none" stroke="#4f8f5a" stroke-width="4"/>
</g>
<g data-obj="olive-jar">
<rect x="524" y="1026" width="40" height="34" rx="5" fill="#6f9c5c" opacity="0.92"/>
<rect x="548" y="1026" width="16" height="34" rx="5" fill="#c2e0b0" opacity="0.85"/>
<rect x="524" y="1026" width="10" height="34" rx="5" fill="#4e7440" opacity="0.85"/>
<rect x="528" y="1018" width="32" height="10" rx="3" fill="#a8762a"/>
<rect x="528" y="1018" width="32" height="3" rx="1.5" fill="#e6c476"/>
<circle cx="534" cy="1042" r="5" fill="#3d7a48"/>
<circle cx="546" cy="1046" r="5" fill="#2f6b3a"/>
<circle cx="554" cy="1038" r="4.5" fill="#4f8f5a"/>
</g>
<rect x="366" y="1060" width="118" height="36" rx="3" fill="url(#italy-crate)"/>
<rect x="366" y="1060" width="118" height="5" rx="2" fill="#e0c290"/>
<circle cx="386" cy="1056" r="10" fill="#e8b92c"/>
<circle cx="383" cy="1052" r="4" fill="#f9dc82"/>
<circle cx="408" cy="1054" r="11" fill="#f0c33c"/>
<circle cx="430" cy="1057" r="9" fill="#e8b92c"/>
<circle cx="452" cy="1055" r="10" fill="#f0c33c"/>
<rect x="498" y="1060" width="142" height="36" rx="3" fill="url(#italy-crate)"/>
<rect x="498" y="1060" width="142" height="5" rx="2" fill="#e0c290"/>
<circle cx="518" cy="1056" r="10" fill="#3d7a48"/>
<circle cx="515" cy="1052" r="4" fill="#7fc07a"/>
<circle cx="542" cy="1054" r="11" fill="#c8382f"/>
<circle cx="566" cy="1057" r="10" fill="#4f8f5a"/>
<circle cx="592" cy="1055" r="11" fill="#e8853f"/>
<circle cx="616" cy="1057" r="9" fill="#c8382f"/>

<ellipse cx="230" cy="1192" rx="112" ry="14" fill="url(#italy-shadow)"/>
<rect x="148" y="894" width="96" height="52" rx="3" fill="url(#italy-crate)"/>
<rect x="148" y="894" width="96" height="8" rx="3" fill="#e0c290"/>
<rect x="192" y="902" width="8" height="44" fill="#87683a"/>
<path d="M164 894 q-6 -34 12 -44 q-8 -10 2 -14 q10 -4 16 2 q14 12 8 56 Z" fill="#d6c09a"/>
<path d="M194 838 q14 12 8 56 l-14 0 q10 -34 -2 -52 Z" fill="#f6e8c8"/>
<path d="M172 856 q12 -8 22 2" fill="none" stroke="#bfa478" stroke-width="3"/>
<rect x="146" y="912" width="168" height="14" rx="4" fill="url(#italy-wood)"/>
<rect x="146" y="912" width="168" height="4" rx="2" fill="#b57e56"/>
<rect x="150" y="926" width="164" height="52" fill="url(#italy-canvas)"/>
<rect x="150" y="926" width="26" height="52" fill="#c8382f"/>
<rect x="202" y="926" width="26" height="52" fill="#c8382f"/>
<rect x="254" y="926" width="26" height="52" fill="#c8382f"/>
<rect x="150" y="926" width="164" height="9" fill="#3a2312" opacity="0.16"/>
<rect x="150" y="968" width="164" height="10" fill="#3a2312" opacity="0.1"/>
<path d="M146 978 q14 18 28 0 q14 18 28 0 q14 18 28 0 q14 18 28 0 q14 18 28 0 q14 18 28 0 l0 10 q-14 18 -28 0 q-14 18 -28 0 q-14 18 -28 0 q-14 18 -28 0 q-14 18 -28 0 q-14 18 -28 0 Z" fill="#dfd5c2"/>
<rect x="154" y="988" width="10" height="72" fill="#7a4a36"/>
<rect x="296" y="988" width="10" height="72" fill="#7a4a36"/>
<rect x="300" y="988" width="4" height="72" fill="#ac7a52"/>
<g transform="translate(158 1006) scale(0.55)">
<path d="M14 44 L34 100 L54 44 Z" fill="#c08b4a"/>
<path d="M34 100 L54 44 L38 44 Z" fill="#e0aa6c"/>
<ellipse cx="34" cy="44" rx="26" ry="14" fill="#f7d0a0"/>
<circle cx="34" cy="26" r="19" fill="#e8849e"/>
<circle cx="29" cy="20" r="9" fill="#f9c2d3"/>
</g>
<g transform="translate(262 1002) scale(0.58)">
<path d="M12 44 q22 12 44 0 l-6 46 q-16 8 -32 0 Z" fill="#c08b4a"/>
<path d="M40 50 q10 -1 16 -6 l-6 46 q-6 3 -13 4 Z" fill="#e0aa6c"/>
<ellipse cx="34" cy="42" rx="24" ry="13" fill="#f7d0a0"/>
<circle cx="24" cy="30" r="14" fill="#7fc07a"/>
<circle cx="46" cy="30" r="14" fill="#fdf0d2"/>
<circle cx="35" cy="18" r="13" fill="#e8849e"/>
</g>
<g data-obj="gelato-cone" transform="translate(212 998) scale(0.6)">
<path d="M14 44 L34 100 L54 44 Z" fill="#c08b4a"/>
<path d="M34 100 L54 44 L38 44 Z" fill="#e2ad70"/>
<path d="M18 52 l28 0" stroke="#a8763a" stroke-width="2.6" fill="none"/>
<path d="M22 64 l22 0" stroke="#a8763a" stroke-width="2.6" fill="none"/>
<path d="M26 76 l14 0" stroke="#a8763a" stroke-width="2.6" fill="none"/>
<ellipse cx="34" cy="44" rx="26" ry="14" fill="#f7d0a0"/>
<circle cx="20" cy="34" r="15" fill="#7fc07a"/>
<circle cx="17" cy="30" r="8" fill="#aad995"/>
<circle cx="48" cy="34" r="15" fill="#e8849e"/>
<circle cx="52" cy="30" r="8" fill="#f9c2d3"/>
<circle cx="34" cy="18" r="16" fill="#f2e4c6"/>
<circle cx="38" cy="13" r="8" fill="#fffaf0"/>
<path d="M34 2 q10 -10 16 -2 q-8 2 -12 8 Z" fill="#c8382f"/>
<circle cx="52" cy="0" r="5" fill="#a83a36"/>
</g>
<rect x="200" y="1034" width="62" height="22" rx="4" fill="#b0a189"/>
<rect x="200" y="1034" width="62" height="6" rx="3" fill="#d9cbb0"/>
<path d="M200 1034 q8 -7 16 0 q8 -7 16 0 q8 -7 16 0 q8 -7 14 0 Z" fill="#cdbfa4"/>
<path d="M214 1042 l0 12" stroke="#94856b" stroke-width="2.4" fill="none"/>
<path d="M236 1042 l0 12" stroke="#94856b" stroke-width="2.4" fill="none"/>
<rect x="200" y="1050" width="62" height="6" rx="2" fill="#94856b"/>
<rect x="144" y="1056" width="172" height="16" rx="4" fill="url(#italy-woodup)"/>
<rect x="144" y="1056" width="172" height="5" rx="3" fill="#dcae7c"/>
<rect x="152" y="1072" width="156" height="62" rx="4" fill="#2f4f4d"/>
<rect x="152" y="1072" width="156" height="62" rx="4" fill="url(#italy-glass)"/>
<ellipse cx="184" cy="1104" rx="24" ry="14" fill="#7fc07a"/>
<ellipse cx="230" cy="1102" rx="24" ry="14" fill="#e8849e"/>
<ellipse cx="276" cy="1104" rx="24" ry="14" fill="#f2e4c6"/>
<path d="M160 1076 l142 0 l0 10 l-142 0 Z" fill="#ffffff" opacity="0.18"/>
<rect x="152" y="1126" width="156" height="8" rx="3" fill="#4e2e21"/>
<rect x="146" y="1134" width="168" height="14" rx="4" fill="url(#italy-wood)"/>
<circle cx="220" cy="1164" r="21" fill="#2b2532"/>
<circle cx="220" cy="1164" r="15" fill="#4e4757"/>
<path d="M220 1149 l0 30" stroke="#2b2532" stroke-width="3.5" fill="none"/>
<path d="M205 1164 l30 0" stroke="#2b2532" stroke-width="3.5" fill="none"/>
<circle cx="220" cy="1164" r="6" fill="#c9a76e"/>
<circle cx="292" cy="1166" r="17" fill="#2b2532"/>
<circle cx="292" cy="1166" r="6" fill="#c9a76e"/>

<ellipse cx="520" cy="1190" rx="136" ry="18" fill="url(#italy-shadow)"/>
<rect x="504" y="1096" width="18" height="94" rx="5" fill="#6b432d"/>
<rect x="514" y="1096" width="8" height="94" rx="4" fill="#a8764f"/>
<ellipse cx="513" cy="1190" rx="46" ry="10" fill="#5a3524"/>
<ellipse cx="513" cy="1184" rx="46" ry="10" fill="#8a5a3f"/>
<ellipse cx="520" cy="1102" rx="110" ry="24" fill="#bd9080"/>
<ellipse cx="520" cy="1096" rx="110" ry="24" fill="#ece4d2"/>
<ellipse cx="540" cy="1092" rx="82" ry="17" fill="#fffaf0"/>
<path d="M410 1096 q110 32 220 0 l0 9 q-110 32 -220 0 Z" fill="#c8382f" opacity="0.35"/>
<g transform="translate(414 1052) scale(0.62)">
<ellipse cx="40" cy="56" rx="42" ry="11" fill="#cec3ae"/>
<ellipse cx="40" cy="52" rx="42" ry="11" fill="#fdf8ee"/>
<path d="M16 20 q0 -8 24 -8 q24 0 24 8 l-4 26 q-2 8 -20 8 q-18 0 -20 -8 Z" fill="#e4dbc8"/>
<path d="M40 12 q24 0 24 8 l-4 26 q-2 8 -20 8 q10 -8 10 -22 q0 -14 -10 -20 Z" fill="#ffffff"/>
<ellipse cx="40" cy="20" rx="24" ry="8" fill="#e8dfcd"/>
<ellipse cx="40" cy="20" rx="18" ry="6" fill="#5c3a24"/>
</g>
<g transform="translate(556 1046) scale(0.7)">
<ellipse cx="40" cy="56" rx="42" ry="11" fill="#b6c3c8"/>
<ellipse cx="40" cy="52" rx="42" ry="11" fill="#dfe9e8"/>
<path d="M16 20 q0 -8 24 -8 q24 0 24 8 l-4 26 q-2 8 -20 8 q-18 0 -20 -8 Z" fill="#e4dbc8"/>
<path d="M40 12 q24 0 24 8 l-4 26 q-2 8 -20 8 q10 -8 10 -22 q0 -14 -10 -20 Z" fill="#ffffff"/>
<ellipse cx="40" cy="20" rx="24" ry="8" fill="#f7efdd"/>
<path d="M30 19 q10 6 20 0" fill="none" stroke="#c9a76e" stroke-width="3"/>
<path d="M64 22 q16 0 16 10 q0 10 -14 12" fill="none" stroke="#fdf8ee" stroke-width="7" stroke-linecap="round"/>
</g>
<g data-obj="espresso-cup" transform="translate(470 1044) scale(0.75)">
<ellipse cx="40" cy="56" rx="42" ry="11" fill="#cec3ae"/>
<ellipse cx="40" cy="52" rx="42" ry="11" fill="#f2ece0"/>
<ellipse cx="46" cy="50" rx="32" ry="8" fill="#fffaf0"/>
<path d="M16 20 q0 -8 24 -8 q24 0 24 8 l-4 26 q-2 8 -20 8 q-18 0 -20 -8 Z" fill="#ddd3bf"/>
<path d="M40 12 q24 0 24 8 l-4 26 q-2 8 -20 8 q11 -9 11 -23 q0 -14 -11 -19 Z" fill="#ffffff"/>
<ellipse cx="40" cy="20" rx="24" ry="8" fill="#e8dfcd"/>
<ellipse cx="40" cy="20" rx="18" ry="6" fill="#4e3018"/>
<ellipse cx="36" cy="19" rx="8" ry="3" fill="#a8764f" opacity="0.85"/>
<path d="M64 22 q16 0 16 10 q0 10 -14 12" fill="none" stroke="#fdf8ee" stroke-width="7" stroke-linecap="round"/>
<path d="M64 22 q16 0 16 10 q0 10 -14 12" fill="none" stroke="#d8cdb8" stroke-width="3" stroke-linecap="round"/>
<path d="M34 8 q6 -8 0 -16" fill="none" stroke="#ffffff" stroke-width="3" opacity="0.55" stroke-linecap="round"/>
</g>

<ellipse cx="112" cy="1164" rx="100" ry="16" fill="url(#italy-shadow)"/>
<circle cx="56" cy="1130" r="30" fill="none" stroke="#2b2532" stroke-width="6"/>
<circle cx="172" cy="1130" r="30" fill="none" stroke="#2b2532" stroke-width="6"/>
<path d="M56 1130 L104 1130 L124 1076 L172 1130" fill="none" stroke="#2f7d8c" stroke-width="7" stroke-linecap="round"/>
<path d="M104 1130 L124 1076 L76 1078 L56 1130" fill="none" stroke="#4fa6b4" stroke-width="7" stroke-linecap="round"/>
<path d="M72 1072 L90 1072" fill="none" stroke="#2b2532" stroke-width="6" stroke-linecap="round"/>
<path d="M124 1076 L120 1116 q-7 5 -14 3" fill="none" stroke="#2b2532" stroke-width="5.5" stroke-linecap="round"/>
<path d="M124 1076 L150 1080 q9 -5 14 2" fill="none" stroke="#2b2532" stroke-width="5.5" stroke-linecap="round"/>
<path d="M76 1078 q9 -9 24 -6" fill="none" stroke="#8a5a3f" stroke-width="8" stroke-linecap="round"/>
<circle cx="104" cy="1130" r="8" fill="#2b2532"/>
<circle cx="104" cy="1130" r="3.5" fill="#c9a76e"/>
<g data-obj="basket">
<rect x="24" y="1044" width="64" height="46" rx="7" fill="#a8854f"/>
<rect x="62" y="1044" width="26" height="46" rx="7" fill="#dcbd86"/>
<rect x="24" y="1044" width="64" height="8" rx="4" fill="#e8cf9e"/>
<path d="M40 1052 l0 36" stroke="#8f7040" stroke-width="3.5" fill="none"/>
<path d="M56 1052 l0 36" stroke="#8f7040" stroke-width="3.5" fill="none"/>
<path d="M72 1052 l0 36" stroke="#c2a06c" stroke-width="3.5" fill="none"/>
<path d="M24 1066 l64 0" stroke="#8f7040" stroke-width="3.5" fill="none"/>
<rect x="24" y="1084" width="64" height="7" rx="3" fill="#8f7040"/>
</g>

<ellipse cx="670" cy="1194" rx="34" ry="9" fill="url(#italy-shadow)"/>
<g data-obj="olive-tree">
<path d="M652 1192 l34 0 l-4 -20 l-26 0 Z" fill="#a05a38"/>
<path d="M676 1172 l6 0 l-4 20 l-8 0 Z" fill="#dfa079"/>
<rect x="648" y="1165" width="42" height="9" rx="3" fill="#8e4d2f"/>
<rect x="648" y="1165" width="42" height="3" rx="1.5" fill="#c98a62"/>
<rect x="665" y="1148" width="8" height="19" fill="#7a4a36"/>
<circle cx="657" cy="1143" r="11" fill="#3d7a48"/>
<circle cx="681" cy="1141" r="12" fill="#5fa068"/>
<circle cx="669" cy="1132" r="12" fill="#6cb06a"/>
<circle cx="673" cy="1127" r="6" fill="#96cf8e" opacity="0.7"/>
<circle cx="662" cy="1138" r="3" fill="#33303f"/>
<circle cx="677" cy="1134" r="3" fill="#33303f"/>
</g>
<g data-obj="snail">
<path d="M120 1194 q0 -12 14 -12 q22 0 22 16 l-8 0 q0 -8 -12 -8 q-8 0 -8 4 Z" fill="#c9a76e"/>
<circle cx="138" cy="1182" r="13" fill="#b8843c"/>
<path d="M138 1169 a13 13 0 0 1 13 13 l-8 0 a5 5 0 0 0 -5 -5 Z" fill="#e8bd7c"/>
<circle cx="138" cy="1182" r="8" fill="#dda762"/>
<circle cx="138" cy="1182" r="3" fill="#a8763a"/>
<path d="M120 1188 l-8 -12" stroke="#c9a76e" stroke-width="3" fill="none"/>
<circle cx="111" cy="1174" r="2.6" fill="#7a4a36"/>
</g>
<ellipse cx="336" cy="1182" rx="34" ry="8" fill="url(#italy-shadow)"/>
<g data-obj="accordion">
<rect x="310" y="1140" width="14" height="38" rx="3" fill="#6b432d"/>
<rect x="348" y="1140" width="14" height="38" rx="3" fill="#a8764f"/>
<path d="M324 1142 l4 34 l4 -34 l4 34 l4 -34 l4 34 l4 -34 Z" fill="#b53c3c"/>
<path d="M340 1142 l4 34 l4 -34 Z" fill="#ef7a6c"/>
<rect x="312" y="1146" width="4" height="24" rx="2" fill="#f2ece0"/>
<circle cx="355" cy="1152" r="3.5" fill="#f2ece0"/>
<circle cx="355" cy="1164" r="3.5" fill="#f2ece0"/>
</g>
<ellipse cx="380" cy="1166" rx="28" ry="8" fill="url(#italy-shadow)"/>
<g data-obj="mandolin">
<path d="M362 1160 q-10 -16 2 -28 q12 -12 24 0 q10 12 0 26 q-12 14 -26 2 Z" fill="#8d6039"/>
<path d="M388 1132 q10 12 0 26 q-6 7 -12 8 q10 -14 8 -34 Z" fill="#d5a976"/>
<path d="M362 1160 q-10 -16 2 -28 q6 -6 12 -5 q-14 12 -8 34 Z" fill="#6b432d"/>
<circle cx="375" cy="1142" r="7" fill="#4e2e21"/>
<path d="M382 1124 l14 -30" stroke="#7a4a36" stroke-width="7" fill="none"/>
<path d="M385 1123 l13 -28" stroke="#b0805c" stroke-width="2.4" fill="none"/>
<path d="M394 1098 l8 -6 l4 6 l-8 6 Z" fill="#4e2e21"/>
</g>
<ellipse cx="428" cy="1190" rx="24" ry="7" fill="url(#italy-shadow)"/>
<g data-obj="ball">
<circle cx="428" cy="1170" r="18" fill="#ddd3bf"/>
<path d="M428 1152 a18 18 0 0 1 18 18 a18 18 0 0 1 -6 12 a14 14 0 0 0 -12 -30 Z" fill="#fffaf0"/>
<path d="M428 1152 l8 12 l-8 10 l-8 -10 Z" fill="#35509c"/>
<path d="M446 1166 l-8 6 l4 10 Z" fill="#3f6bbf"/>
<path d="M410 1166 l8 6 l-4 10 Z" fill="#35509c"/>
<path d="M428 1188 l-6 -10 l12 0 Z" fill="#3f6bbf"/>
</g>
<ellipse cx="612" cy="1156" rx="34" ry="9" fill="url(#italy-shadow)"/>
<g data-obj="apples">
<circle cx="612" cy="1132" r="12" fill="#a83a36"/>
<path d="M612 1120 a12 12 0 0 1 12 12 a12 12 0 0 1 -4 9 a9 9 0 0 0 -8 -21 Z" fill="#f2907c"/>
<circle cx="630" cy="1142" r="11" fill="#e8674f"/>
<circle cx="594" cy="1146" r="10" fill="#5fa068"/>
<circle cx="591" cy="1142" r="4" fill="#96cf8e"/>
<path d="M612 1120 q2 -8 8 -9" fill="none" stroke="#3d7a48" stroke-width="3"/>
</g>
<ellipse cx="718" cy="1198" rx="30" ry="8" fill="url(#italy-shadow)"/>
<g data-obj="boot">
<path d="M700 1152 l20 0 l2 30 l14 4 l0 12 l-36 0 Z" fill="#2f6b68"/>
<path d="M714 1152 l6 0 l2 30 l14 4 l0 12 l-14 0 l0 -14 Z" fill="#87c4b6"/>
<path d="M700 1152 l7 0 l1 34 l-8 12 Z" fill="#24504e"/>
<rect x="698" y="1190" width="40" height="8" rx="3" fill="#1f4442"/>
<rect x="698" y="1148" width="24" height="8" rx="3" fill="#3a6f6a"/>
</g>
<ellipse cx="576" cy="1198" rx="26" ry="6" fill="url(#italy-shadow)"/>
<g data-obj="mouse">
<path d="M560 1196 q2 -14 18 -14 q18 0 20 14 Z" fill="#71767f"/>
<path d="M578 1182 q18 0 20 14 l-14 0 q4 -10 -6 -14 Z" fill="#b4c0c8"/>
<circle cx="594" cy="1184" r="6" fill="#8f959f"/>
<circle cx="586" cy="1180" r="6" fill="#c4ced4"/>
<circle cx="597" cy="1183" r="1.8" fill="#3a3140"/>
<path d="M560 1192 q-12 -2 -14 -10" fill="none" stroke="#8a8f9c" stroke-width="3"/>
</g>
<ellipse cx="374" cy="1178" rx="16" ry="5" fill="url(#italy-shadow)"/>
<path d="M354 1172 q5 -16 21 -16 q18 0 22 14 q-9 6 -25 6 q-14 0 -18 -4 Z" fill="#7e838f"/>
<path d="M375 1156 q18 0 22 14 q-8 5 -20 6 q14 -10 -2 -20 Z" fill="#bcc6cc"/>
<circle cx="380" cy="1154" r="8" fill="#9aa0ad"/>
<circle cx="383" cy="1152" r="2" fill="#3a3140"/>
<path d="M387 1154 l10 4 l-10 4 Z" fill="#d9a441"/>

<path d="M0 1200 L800 1200 L800 1178 q-200 16 -400 4 q-200 -12 -400 6 Z" fill="#8a6a48" opacity="0.28"/>
</svg>`
});
