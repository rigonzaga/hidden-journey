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
<stop offset="0" stop-color="#ffd9b0" stop-opacity="0.6"/>
<stop offset="1" stop-color="#ffd9b0" stop-opacity="0.16"/>
</linearGradient>
<linearGradient id="italy-canal" x1="0" y1="0" x2="0" y2="1">
<stop offset="0" stop-color="#7dbaa8"/>
<stop offset="0.26" stop-color="#4f9389"/>
<stop offset="0.7" stop-color="#31716e"/>
<stop offset="1" stop-color="#1d5052"/>
</linearGradient>
<linearGradient id="italy-watershine" x1="1" y1="0" x2="0" y2="0">
<stop offset="0" stop-color="#fff0c8" stop-opacity="0.34"/>
<stop offset="0.55" stop-color="#ffe6b4" stop-opacity="0.12"/>
<stop offset="1" stop-color="#ffe6b4" stop-opacity="0"/>
</linearGradient>
<linearGradient id="italy-reflwarm" x1="0" y1="0" x2="0" y2="1">
<stop offset="0" stop-color="#ffd9a8" stop-opacity="0.4"/>
<stop offset="1" stop-color="#ffd9a8" stop-opacity="0"/>
</linearGradient>
<linearGradient id="italy-refllilac" x1="0" y1="0" x2="0" y2="1">
<stop offset="0" stop-color="#dcc0d6" stop-opacity="0.34"/>
<stop offset="1" stop-color="#dcc0d6" stop-opacity="0"/>
</linearGradient>
<linearGradient id="italy-refldark" x1="0" y1="0" x2="0" y2="1">
<stop offset="0" stop-color="#14383a" stop-opacity="0.5"/>
<stop offset="1" stop-color="#14383a" stop-opacity="0"/>
</linearGradient>
<linearGradient id="italy-refllight" x1="0" y1="0" x2="0" y2="1">
<stop offset="0" stop-color="#f7ead0" stop-opacity="0.42"/>
<stop offset="1" stop-color="#f7ead0" stop-opacity="0"/>
</linearGradient>
<linearGradient id="italy-pave" x1="0" y1="0" x2="0" y2="1">
<stop offset="0" stop-color="#e6cda6"/>
<stop offset="0.45" stop-color="#cbac86"/>
<stop offset="1" stop-color="#a98a68"/>
</linearGradient>
<linearGradient id="italy-copingtop" x1="0" y1="0" x2="0" y2="1">
<stop offset="0" stop-color="#c9b28d"/>
<stop offset="0.5" stop-color="#e4cfa8"/>
<stop offset="1" stop-color="#f0dcb8"/>
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
<linearGradient id="italy-wallcast" x1="1" y1="0" x2="0" y2="0">
<stop offset="0" stop-color="#4a2b16" stop-opacity="0.34"/>
<stop offset="1" stop-color="#4a2b16" stop-opacity="0"/>
</linearGradient>
<radialGradient id="italy-shadow" cx="0.5" cy="0.5" r="0.5">
<stop offset="0" stop-color="#5c3a1e" stop-opacity="0.4"/>
<stop offset="0.6" stop-color="#5c3a1e" stop-opacity="0.17"/>
<stop offset="1" stop-color="#5c3a1e" stop-opacity="0"/>
</radialGradient>
<radialGradient id="italy-contact" cx="0.5" cy="0.5" r="0.5">
<stop offset="0" stop-color="#3a2312" stop-opacity="0.55"/>
<stop offset="0.45" stop-color="#3a2312" stop-opacity="0.34"/>
<stop offset="1" stop-color="#3a2312" stop-opacity="0"/>
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
<linearGradient id="italy-lip" x1="0" y1="0" x2="0" y2="1">
<stop offset="0" stop-color="#e8bd88"/>
<stop offset="0.45" stop-color="#b78650"/>
<stop offset="1" stop-color="#7d5432"/>
</linearGradient>
<linearGradient id="italy-shelfback" x1="0" y1="0" x2="0" y2="1">
<stop offset="0" stop-color="#4e2f1e"/>
<stop offset="0.5" stop-color="#38200f"/>
<stop offset="1" stop-color="#22150a"/>
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
<stop offset="0" stop-color="#fff3cc" stop-opacity="0.8"/>
<stop offset="1" stop-color="#ffcf70" stop-opacity="0"/>
</radialGradient>
</defs>
<rect x="0" y="0" width="800" height="1200" fill="#e2c096"/>
<rect x="0" y="0" width="800" height="640" fill="url(#italy-sky)"/>
<circle cx="690" cy="108" r="192" fill="url(#italy-sun)"/>
<ellipse cx="150" cy="80" rx="86" ry="19" fill="#fff3dc" opacity="0.55"/>
<ellipse cx="196" cy="68" rx="50" ry="14" fill="#fffaee" opacity="0.5"/>
<ellipse cx="466" cy="54" rx="66" ry="15" fill="#fff3dc" opacity="0.36"/>
<path d="M258 104 q9 -7 17 0 q9 -7 17 0" fill="none" stroke="#ad7458" stroke-width="2.4" opacity="0.45"/>
<path d="M312 130 q8 -6 15 0 q8 -6 15 0" fill="none" stroke="#ad7458" stroke-width="2.2" opacity="0.36"/>

<rect x="236" y="470" width="120" height="126" fill="url(#italy-facfar)"/>
<rect x="236" y="464" width="120" height="8" fill="#f2e2c4"/>
<path d="M240 546 q56 -40 112 0 l0 20 q-60 -34 -112 0 Z" fill="#d9c2a0"/>
<path d="M240 546 q56 -40 112 0 l0 7 q-60 -34 -112 0 Z" fill="#f4e6ca"/>
<path d="M244 562 q54 -28 106 0 l0 18 q-56 -24 -106 0 Z" fill="#a08a68" opacity="0.38"/>
<rect x="234" y="534" width="124" height="13" fill="url(#italy-facfar)"/>
<rect x="234" y="534" width="124" height="4" fill="#f7ead0"/>
<rect x="234" y="516" width="124" height="7" fill="#e8d6b6"/>
<rect x="268" y="521" width="6" height="14" fill="#c6ae8c" opacity="0.75"/>
<rect x="318" y="521" width="6" height="14" fill="#c6ae8c" opacity="0.75"/>

<rect x="404" y="440" width="66" height="156" fill="url(#italy-facfar)"/>
<rect x="404" y="432" width="66" height="10" fill="#f2e2c4"/>
<rect x="422" y="470" width="12" height="26" rx="6" fill="#c6ae8c" opacity="0.7"/>
<rect x="444" y="470" width="12" height="26" rx="6" fill="#c6ae8c" opacity="0.7"/>
<rect x="420" y="406" width="34" height="30" fill="#dcc8a6"/>
<rect x="444" y="406" width="10" height="30" fill="#f2e2c4"/>
<g data-obj="dome">
<ellipse cx="437" cy="406" rx="30" ry="25" fill="#bda182"/>
<path d="M407 406 q0 -25 30 -25 q30 0 30 25 q-14 10 -30 10 q-16 0 -30 -10 Z" fill="#dcc8a6"/>
<path d="M437 381 q30 0 30 25 q-9 6 -20 8 q6 -21 -10 -33 Z" fill="#f6e6c6"/>
<path d="M414 393 q9 -9 20 -10" fill="none" stroke="#fdf4e0" stroke-width="3" opacity="0.55"/>
<rect x="433" y="368" width="8" height="14" fill="#c9b18c"/>
<circle cx="437" cy="365" r="6" fill="url(#italy-brass)"/>
</g>
<rect x="230" y="424" width="132" height="176" fill="url(#italy-haze)"/>
<rect x="398" y="356" width="78" height="244" fill="url(#italy-haze)"/>

<rect x="348" y="206" width="56" height="390" fill="url(#italy-faccream)"/>
<rect x="348" y="206" width="14" height="390" fill="url(#italy-vshade)"/>
<rect x="396" y="206" width="8" height="390" fill="url(#italy-rimlight)"/>
<rect x="344" y="196" width="64" height="12" fill="url(#italy-roof)"/>
<rect x="344" y="192" width="64" height="5" fill="#d4835c"/>
<rect x="352" y="208" width="48" height="7" fill="#3a2312" opacity="0.2"/>
<g data-obj="spire">
<path d="M344 196 L376 138 L408 196 Z" fill="#a85941"/>
<path d="M376 138 L408 196 L376 196 Z" fill="#cb7d57"/>
<path d="M376 138 L360 196 L344 196 Z" fill="#88432e"/>
<path d="M376 138 L386 164 L376 172 Z" fill="#e6a172" opacity="0.6"/>
<circle cx="376" cy="133" r="6" fill="url(#italy-brass)"/>
</g>
<rect x="356" y="218" width="40" height="52" rx="3" fill="url(#italy-pane)"/>
<rect x="356" y="218" width="40" height="9" rx="3" fill="#0e1f20" opacity="0.7"/>
<rect x="358" y="224" width="36" height="6" rx="2" fill="#6b432d"/>
<rect x="358" y="224" width="36" height="2" rx="1" fill="#a8764f"/>
<g data-obj="bell">
<rect x="371" y="228" width="10" height="8" rx="2" fill="#7a5233"/>
<path d="M376 236 q-19 0 -19 26 q0 12 3 16 l32 0 q3 -4 3 -16 q0 -26 -19 -26 Z" fill="#a8762a"/>
<path d="M376 236 q19 0 19 26 q0 12 -3 16 l-10 0 q4 -5 4 -17 q0 -22 -12 -25 Z" fill="#f0cf7e"/>
<path d="M376 236 q-19 0 -19 26 q0 12 3 16 l6 0 q-3 -5 -3 -17 q0 -22 13 -25 Z" fill="#8c6220"/>
<rect x="355" y="277" width="42" height="8" rx="3" fill="#8f6420"/>
<rect x="355" y="277" width="42" height="3" rx="1.5" fill="#e0bc63"/>
<circle cx="376" cy="290" r="5" fill="#6d4a2c"/>
<path d="M376 285 l0 -4" stroke="#6d4a2c" stroke-width="3" fill="none"/>
</g>
<ellipse cx="376" cy="272" rx="21" ry="7" fill="#0c1a1b" opacity="0.35"/>

<rect x="-10" y="250" width="92" height="346" fill="url(#italy-facrose)"/>
<rect x="-10" y="250" width="24" height="346" fill="url(#italy-vshade)"/>
<rect x="70" y="250" width="12" height="346" fill="url(#italy-rimlight)"/>
<rect x="-14" y="240" width="102" height="16" fill="url(#italy-roof)"/>
<rect x="-14" y="236" width="102" height="6" fill="#d4835c"/>
<rect x="22" y="206" width="20" height="34" fill="#c98a6f"/>
<rect x="22" y="206" width="6" height="34" fill="#a3634c"/>
<rect x="17" y="198" width="30" height="10" fill="#96513d"/>

<rect x="82" y="186" width="108" height="410" fill="url(#italy-faccream)"/>
<rect x="82" y="186" width="26" height="410" fill="url(#italy-vshade)"/>
<rect x="178" y="186" width="12" height="410" fill="url(#italy-rimlight)"/>
<rect x="78" y="178" width="116" height="16" fill="url(#italy-roof)"/>
<rect x="78" y="174" width="116" height="6" fill="#d4835c"/>
<rect x="130" y="140" width="18" height="38" fill="#d9a98a"/>
<rect x="130" y="140" width="5" height="38" fill="#ad7458"/>
<rect x="126" y="132" width="26" height="10" fill="#96513d"/>
<rect x="166" y="170" width="20" height="8" rx="2" fill="#8f5f36"/>
<rect x="166" y="168" width="20" height="3" rx="1.5" fill="#c99a63"/>
<g data-obj="flag">
<path d="M176 172 l0 -50" stroke="#7a4a36" stroke-width="4" fill="none"/>
<path d="M178 126 l44 7 l0 25 l-44 -7 Z" fill="#f7f1e4"/>
<path d="M178 126 l15 2 l0 25 l-15 -2 Z" fill="#2f7d4e"/>
<path d="M207 131 l15 2 l0 25 l-15 -2 Z" fill="#c8382f"/>
<path d="M178 126 l44 7 l0 6 l-44 -7 Z" fill="#ffffff" opacity="0.4"/>
<circle cx="176" cy="120" r="4.5" fill="url(#italy-brass)"/>
</g>

<rect x="190" y="236" width="78" height="360" fill="url(#italy-facgold)"/>
<rect x="190" y="236" width="22" height="360" fill="url(#italy-vshade)"/>
<rect x="256" y="236" width="12" height="360" fill="url(#italy-rimlight)"/>
<rect x="186" y="226" width="88" height="16" fill="url(#italy-roof)"/>
<rect x="186" y="222" width="88" height="6" fill="#c98555"/>
<rect x="232" y="182" width="24" height="44" fill="#cfa066"/>
<rect x="232" y="182" width="6" height="44" fill="#a1793f"/>
<rect x="250" y="182" width="6" height="44" fill="#e8c48c"/>
<rect x="228" y="174" width="32" height="9" fill="#8f5f36"/>
<rect x="228" y="172" width="32" height="3" fill="#c99a63"/>
<g data-obj="vane">
<path d="M244 174 l0 -32" stroke="#5f646e" stroke-width="4" fill="none"/>
<path d="M244 146 l24 9 l-24 9 Z" fill="#3a3140"/>
<path d="M244 146 l24 9 l-24 3 Z" fill="#6a6274"/>
<path d="M244 146 l-22 9 l22 9 Z" fill="#4c4556"/>
<circle cx="244" cy="138" r="6" fill="url(#italy-brass)"/>
<path d="M226 168 l36 0" stroke="#7e838f" stroke-width="3" fill="none"/>
</g>

<rect x="470" y="208" width="108" height="388" fill="url(#italy-faclilac)"/>
<rect x="470" y="208" width="26" height="388" fill="url(#italy-vshade)"/>
<rect x="566" y="208" width="12" height="388" fill="url(#italy-rimlight)"/>
<rect x="466" y="198" width="116" height="16" fill="url(#italy-roof)"/>
<rect x="466" y="194" width="116" height="6" fill="#b07393"/>

<rect x="578" y="160" width="114" height="436" fill="url(#italy-facpeach)"/>
<rect x="578" y="160" width="26" height="436" fill="url(#italy-vshade)"/>
<rect x="680" y="160" width="12" height="436" fill="url(#italy-rimlight)"/>
<rect x="574" y="150" width="124" height="16" fill="url(#italy-roof)"/>
<rect x="574" y="146" width="124" height="6" fill="#d4835c"/>
<rect x="626" y="112" width="18" height="38" fill="#dba98a"/>
<rect x="626" y="112" width="5" height="38" fill="#ad7458"/>
<rect x="622" y="104" width="26" height="10" fill="#96513d"/>

<rect x="692" y="230" width="120" height="366" fill="url(#italy-facsalmon)"/>
<rect x="692" y="230" width="26" height="366" fill="url(#italy-vshade)"/>
<rect x="798" y="230" width="14" height="366" fill="url(#italy-rimlight)"/>
<rect x="688" y="220" width="126" height="16" fill="url(#italy-roof)"/>
<rect x="688" y="216" width="126" height="6" fill="#c2755c"/>
<rect x="744" y="184" width="18" height="38" fill="#c98a7c"/>
<rect x="744" y="184" width="5" height="38" fill="#9c5748"/>
<rect x="740" y="176" width="26" height="10" fill="#8b4a3a"/>
<rect x="10" y="300" width="44" height="60" rx="3" fill="url(#italy-pane)"/>
<rect x="10" y="300" width="44" height="14" rx="3" fill="#8fc0bc" opacity="0.2"/>
<rect x="-4" y="298" width="15" height="64" rx="2" fill="url(#italy-shutterdim)"/>
<rect x="52" y="298" width="15" height="64" rx="2" fill="url(#italy-shutterlit)"/>
<rect x="4" y="360" width="56" height="8" rx="2" fill="url(#italy-stone)"/>
<rect x="4" y="368" width="56" height="5" fill="#3a2312" opacity="0.2"/>
<rect x="10" y="432" width="44" height="60" rx="3" fill="url(#italy-pane)"/>
<rect x="-4" y="430" width="15" height="64" rx="2" fill="url(#italy-shutterdim)"/>
<rect x="52" y="430" width="15" height="64" rx="2" fill="url(#italy-shutterlit)"/>
<rect x="2" y="490" width="60" height="14" rx="3" fill="url(#italy-lip)"/>
<rect x="2" y="490" width="60" height="4" rx="2" fill="#efc491"/>
<circle cx="14" cy="484" r="9" fill="url(#italy-fruit)"/>
<circle cx="34" cy="482" r="10" fill="#e8674f"/>
<path d="M8 474 q11 -16 22 -8" fill="none" stroke="#4f8f5a" stroke-width="4.5"/>
<rect x="2" y="504" width="60" height="5" fill="#3a2312" opacity="0.22"/>

<rect x="106" y="250" width="46" height="62" rx="3" fill="url(#italy-pane)"/>
<rect x="106" y="250" width="46" height="16" rx="3" fill="#8fc0bc" opacity="0.18"/>
<path d="M106 250 l0 62 l16 0 q-6 -30 0 -62 Z" fill="#f9f0dc" opacity="0.5"/>
<rect x="92" y="248" width="15" height="66" rx="2" fill="url(#italy-shutterdim)"/>
<rect x="151" y="248" width="15" height="66" rx="2" fill="url(#italy-shutterlit)"/>
<rect x="100" y="242" width="58" height="9" fill="url(#italy-stone)"/>
<rect x="100" y="312" width="58" height="8" rx="2" fill="url(#italy-stone)"/>
<rect x="100" y="320" width="58" height="5" fill="#3a2312" opacity="0.2"/>
<rect x="106" y="392" width="46" height="62" rx="3" fill="url(#italy-pane)"/>
<rect x="92" y="390" width="15" height="66" rx="2" fill="url(#italy-shutterdim)"/>
<rect x="151" y="390" width="15" height="66" rx="2" fill="url(#italy-shutterlit)"/>
<rect x="98" y="452" width="62" height="14" rx="3" fill="url(#italy-lip)"/>
<rect x="98" y="452" width="62" height="4" rx="2" fill="#efc491"/>
<circle cx="110" cy="446" r="9" fill="#d4629c"/>
<circle cx="128" cy="444" r="10" fill="#f08bb4"/>
<path d="M104 438 q12 -18 24 -8" fill="none" stroke="#4f8f5a" stroke-width="4.5"/>
<rect x="98" y="466" width="62" height="5" fill="#3a2312" opacity="0.22"/>

<path d="M88 340 q50 -6 100 -10" fill="none" stroke="#8a6a52" stroke-width="2.4"/>
<rect x="100" y="338" width="4" height="6" fill="#c9a76e"/>
<path d="M98 342 l28 0 l0 30 q0 6 -14 6 q-14 0 -14 -6 Z" fill="#e08f7c"/>
<path d="M116 342 l10 0 l0 30 q0 6 -14 6 q10 -4 8 -12 Z" fill="#f7c8bc"/>
<rect x="142" y="336" width="4" height="6" fill="#c9a76e"/>
<rect x="140" y="340" width="28" height="40" rx="2" fill="#dfd4c0"/>
<rect x="158" y="340" width="10" height="40" rx="2" fill="#fdf4e2"/>
<rect x="140" y="352" width="28" height="5" fill="#c8382f"/>

<rect x="208" y="290" width="46" height="62" rx="3" fill="url(#italy-pane)"/>
<rect x="208" y="290" width="46" height="16" rx="3" fill="#8fc0bc" opacity="0.18"/>
<rect x="194" y="288" width="15" height="66" rx="2" fill="url(#italy-shutterdim)"/>
<rect x="253" y="288" width="15" height="66" rx="2" fill="url(#italy-shutterlit)"/>
<rect x="202" y="352" width="58" height="8" rx="2" fill="url(#italy-stone)"/>
<rect x="202" y="360" width="58" height="5" fill="#3a2312" opacity="0.2"/>
<rect x="208" y="428" width="46" height="62" rx="3" fill="url(#italy-pane)"/>
<rect x="194" y="426" width="15" height="66" rx="2" fill="url(#italy-shutterdim)"/>
<rect x="253" y="426" width="15" height="66" rx="2" fill="url(#italy-shutterlit)"/>
<rect x="200" y="488" width="62" height="14" rx="3" fill="url(#italy-lip)"/>
<rect x="200" y="488" width="62" height="4" rx="2" fill="#efc491"/>
<circle cx="212" cy="482" r="10" fill="#eeb92f"/>
<circle cx="234" cy="480" r="11" fill="#f7d76a"/>
<circle cx="252" cy="484" r="8" fill="#d9483f"/>
<path d="M206 474 q13 -18 26 -8" fill="none" stroke="#4f8f5a" stroke-width="5"/>
<rect x="200" y="502" width="62" height="5" fill="#3a2312" opacity="0.22"/>

<path d="M266 300 q42 8 84 12" fill="none" stroke="#8a6a52" stroke-width="2.4"/>
<rect x="282" y="303" width="4" height="7" fill="#c9a76e"/>
<rect x="310" y="306" width="4" height="7" fill="#c9a76e"/>
<g data-obj="shirt">
<path d="M280 308 l10 -4 l6 4 l6 -4 l10 4 l6 14 l-8 4 l-2 -8 l0 26 l-24 0 l0 -26 l-2 8 l-8 -4 Z" fill="#e4dbc8"/>
<path d="M302 308 l10 4 l6 14 l-8 4 l-2 -8 l0 26 l-10 0 Z" fill="#fffaf0"/>
<path d="M280 308 l10 -4 l4 3 l-4 6 l0 35 l-8 0 l0 -26 l-2 8 l-8 -4 Z" fill="#cfc4ac"/>
<path d="M292 308 q4 6 8 0" fill="none" stroke="#b8ad94" stroke-width="2"/>
</g>
<rect x="326" y="308" width="4" height="7" fill="#c9a76e"/>
<path d="M322 313 q14 -5 26 0 l0 30 q-13 6 -26 0 Z" fill="#c9b3e0"/>
<path d="M336 311 q8 0 12 2 l0 30 q-6 3 -12 4 Z" fill="#e0d0f2"/>

<rect x="496" y="230" width="48" height="62" rx="3" fill="url(#italy-pane)"/>
<rect x="496" y="230" width="48" height="16" rx="3" fill="#8fc0bc" opacity="0.18"/>
<rect x="482" y="228" width="15" height="66" rx="2" fill="url(#italy-shutterdim)"/>
<rect x="543" y="228" width="15" height="66" rx="2" fill="url(#italy-shutterlit)"/>
<rect x="490" y="292" width="60" height="8" rx="2" fill="url(#italy-stone)"/>
<rect x="490" y="300" width="60" height="5" fill="#3a2312" opacity="0.2"/>

<rect x="466" y="316" width="116" height="10" rx="3" fill="url(#italy-wood)"/>
<path d="M466 326 l116 0 l0 24 l-116 0 Z" fill="url(#italy-canvas)"/>
<path d="M482 326 l0 24 l16 0 l0 -24 Z" fill="#8f5f7f"/>
<path d="M514 326 l0 24 l16 0 l0 -24 Z" fill="#8f5f7f"/>
<path d="M546 326 l0 24 l16 0 l0 -24 Z" fill="#8f5f7f"/>
<path d="M466 326 l116 0 l0 6 l-116 0 Z" fill="#ffffff" opacity="0.3"/>
<rect x="470" y="350" width="108" height="160" fill="url(#italy-shelfback)"/>
<rect x="470" y="350" width="108" height="8" fill="#1a0f07" opacity="0.6"/>
<rect x="476" y="362" width="96" height="6" rx="2" fill="#6b432d"/>
<rect x="476" y="362" width="96" height="2" rx="1" fill="#a8764f"/>
<path d="M498 368 l0 6" stroke="#c9b08c" stroke-width="2" fill="none"/>
<g transform="translate(478 372) scale(0.5)">
<path d="M6 34 q0 -22 38 -22 q38 0 38 22 q0 40 -14 62 q-12 18 -24 18 q-12 0 -24 -18 q-14 -22 -14 -62 Z" fill="#d9cfba"/>
<path d="M44 12 q38 0 38 22 q0 40 -14 62 q-8 12 -16 16 q16 -30 14 -62 q-2 -30 -22 -38 Z" fill="#fffaf0"/>
<ellipse cx="26" cy="58" rx="14" ry="10" fill="#332a3f"/>
<ellipse cx="62" cy="58" rx="14" ry="10" fill="#332a3f"/>
<path d="M34 98 q10 8 20 0" fill="none" stroke="#c9b892" stroke-width="3"/>
</g>
<path d="M546 368 l0 4" stroke="#c9b08c" stroke-width="2" fill="none"/>
<g data-obj="venetian-mask" transform="translate(526 370) scale(0.5)">
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
<rect x="476" y="446" width="96" height="6" rx="2" fill="#6b432d"/>
<rect x="476" y="446" width="96" height="2" rx="1" fill="#a8764f"/>
<g transform="translate(478 454) scale(0.45)">
<path d="M6 34 q0 -22 38 -22 q38 0 38 22 q0 20 -6 34 q22 12 22 26 q0 12 -16 12 q-16 0 -22 -14 q-8 14 -22 14 q-14 0 -20 -18 q-14 -22 -14 -54 Z" fill="#cfc4ac"/>
<path d="M44 12 q38 0 38 22 q0 20 -6 34 q22 12 22 26 q0 12 -16 12 q14 -8 2 -24 q-14 -18 -18 -32 q6 -26 -22 -38 Z" fill="#f7efdd"/>
<ellipse cx="26" cy="52" rx="13" ry="9" fill="#332a3f"/>
<ellipse cx="62" cy="52" rx="13" ry="9" fill="#332a3f"/>
</g>
<g transform="translate(528 452) scale(0.45)">
<path d="M44 4 q-10 -26 4 -42 q6 18 18 24 q-14 6 -18 20 Z" fill="#3f8f9c"/>
<path d="M6 34 q0 -22 38 -22 q38 0 38 22 q0 40 -14 62 q-12 18 -24 18 q-12 0 -24 -18 q-14 -22 -14 -62 Z" fill="#84c2d2"/>
<path d="M44 12 q38 0 38 22 q0 40 -14 62 q-8 12 -16 16 q16 -30 14 -62 q-2 -30 -22 -38 Z" fill="#cdeef4"/>
<circle cx="26" cy="58" r="12" fill="#332a3f"/>
<circle cx="62" cy="58" r="12" fill="#332a3f"/>
</g>
<rect x="466" y="508" width="116" height="12" rx="3" fill="url(#italy-lip)"/>
<rect x="466" y="508" width="116" height="4" rx="2" fill="#efc491"/>
<rect x="466" y="520" width="116" height="6" fill="#3a2312" opacity="0.25"/>

<ellipse cx="618" cy="252" rx="30" ry="30" fill="url(#italy-wallcast)"/>
<circle cx="632" cy="246" r="28" fill="#c1a782"/>
<circle cx="632" cy="246" r="28" fill="url(#italy-rimlight)"/>
<g data-obj="clock">
<circle cx="632" cy="246" r="25" fill="#a8916f"/>
<circle cx="632" cy="245" r="23" fill="url(#italy-cream)"/>
<circle cx="632" cy="245" r="18" fill="#fffaf0"/>
<path d="M614 236 q10 -14 26 -12" fill="none" stroke="#ffffff" stroke-width="3" opacity="0.8"/>
<path d="M632 245 l0 -13" stroke="#3a3140" stroke-width="3" fill="none"/>
<path d="M632 245 l10 5" stroke="#3a3140" stroke-width="3" fill="none"/>
<circle cx="632" cy="245" r="3" fill="#3a3140"/>
<path d="M632 229 l0 4" stroke="#8a8f9c" stroke-width="2.4" fill="none"/>
<path d="M648 245 l-4 0" stroke="#8a8f9c" stroke-width="2.4" fill="none"/>
<path d="M632 261 l0 -4" stroke="#8a8f9c" stroke-width="2.4" fill="none"/>
<path d="M616 245 l4 0" stroke="#8a8f9c" stroke-width="2.4" fill="none"/>
</g>

<rect x="592" y="300" width="52" height="68" rx="3" fill="url(#italy-pane)"/>
<rect x="592" y="300" width="52" height="18" rx="3" fill="#8fc0bc" opacity="0.18"/>
<rect x="578" y="298" width="15" height="72" rx="2" fill="url(#italy-shutterdim)"/>
<rect x="643" y="298" width="15" height="72" rx="2" fill="url(#italy-shutterlit)"/>
<rect x="586" y="368" width="66" height="9" rx="2" fill="url(#italy-stone)"/>
<rect x="586" y="368" width="66" height="3" rx="1.5" fill="#f0e0c0"/>
<ellipse cx="620" cy="368" rx="26" ry="5" fill="url(#italy-contact)"/>
<g data-obj="cat">
<path d="M598 368 q-2 -32 22 -32 q24 0 22 32 Z" fill="#a87e4c"/>
<path d="M620 336 q24 0 22 32 l-14 0 q4 -24 -8 -32 Z" fill="#d8b47c"/>
<circle cx="612" cy="336" r="14" fill="#c19a62"/>
<path d="M612 322 q14 0 14 14 q0 8 -6 12 q4 -18 -8 -26 Z" fill="#dcbb85"/>
<path d="M600 328 l-2 -12 l12 6 Z" fill="#a87e4c"/>
<path d="M624 328 l2 -12 l-12 6 Z" fill="#c19a62"/>
<circle cx="607" cy="335" r="2.4" fill="#3a3140"/>
<circle cx="618" cy="335" r="2.4" fill="#3a3140"/>
<path d="M642 366 q10 -8 6 -22" fill="none" stroke="#b58c58" stroke-width="6" stroke-linecap="round"/>
</g>
<rect x="586" y="377" width="66" height="6" fill="#3a2312" opacity="0.2"/>
<path d="M652 302 q18 0 18 8" fill="none" stroke="#6f747e" stroke-width="3.5"/>
<path d="M668 306 l0 8" stroke="#6f747e" stroke-width="3" fill="none"/>
<ellipse cx="654" cy="348" rx="18" ry="38" fill="url(#italy-wallcast)"/>
<g data-obj="birdcage">
<path d="M648 320 q20 -20 40 0 l0 40 l-40 0 Z" fill="#cfc3ac"/>
<path d="M668 306 q20 0 20 14 l0 40 l-12 0 l0 -40 q0 -10 -8 -14 Z" fill="#fdf8ee"/>
<path d="M648 320 q8 -9 20 -12 l0 52 l-20 0 Z" fill="#b8a98d"/>
<path d="M657 314 l0 46" stroke="#a8977a" stroke-width="2.4" fill="none"/>
<path d="M679 314 l0 46" stroke="#efe6d2" stroke-width="2.4" fill="none"/>
<rect x="644" y="358" width="48" height="10" rx="3" fill="url(#italy-crate)"/>
<path d="M668 306 l0 -8" stroke="#b9a88c" stroke-width="3" fill="none"/>
<circle cx="668" cy="340" r="6" fill="#f0c33c"/>
<circle cx="666" cy="338" r="2.5" fill="#fdf0b8"/>
</g>
<rect x="592" y="440" width="52" height="64" rx="3" fill="url(#italy-pane)"/>
<rect x="578" y="438" width="15" height="68" rx="2" fill="url(#italy-shutterdim)"/>
<rect x="643" y="438" width="15" height="68" rx="2" fill="url(#italy-shutterlit)"/>
<rect x="584" y="502" width="68" height="14" rx="3" fill="url(#italy-lip)"/>
<rect x="584" y="502" width="68" height="4" rx="2" fill="#efc491"/>
<circle cx="598" cy="496" r="10" fill="#eeb92f"/>
<circle cx="622" cy="494" r="11" fill="#f7d76a"/>
<circle cx="642" cy="498" r="9" fill="#d4629c"/>
<path d="M592 488 q13 -18 26 -8" fill="none" stroke="#4f8f5a" stroke-width="5"/>
<rect x="584" y="516" width="68" height="6" fill="#3a2312" opacity="0.22"/>

<rect x="716" y="286" width="48" height="62" rx="3" fill="url(#italy-pane)"/>
<rect x="716" y="286" width="48" height="16" rx="3" fill="#8fc0bc" opacity="0.2"/>
<rect x="702" y="284" width="15" height="66" rx="2" fill="#3a6390"/>
<rect x="763" y="284" width="15" height="66" rx="2" fill="#5f92c2"/>
<rect x="710" y="348" width="60" height="8" rx="2" fill="url(#italy-stone)"/>
<rect x="710" y="356" width="60" height="5" fill="#3a2312" opacity="0.2"/>
<rect x="716" y="420" width="50" height="64" rx="3" fill="url(#italy-pane)"/>
<rect x="716" y="420" width="50" height="16" rx="3" fill="#8fc0bc" opacity="0.18"/>
<rect x="702" y="418" width="15" height="68" rx="2" fill="url(#italy-shutterdim)"/>
<rect x="765" y="418" width="15" height="68" rx="2" fill="url(#italy-shutterlit)"/>
<rect x="706" y="484" width="70" height="10" rx="2" fill="url(#italy-stone)"/>
<rect x="706" y="484" width="70" height="3" rx="1.5" fill="#f0e0c0"/>
<ellipse cx="742" cy="485" rx="30" ry="5" fill="url(#italy-contact)"/>
<g data-obj="watering-can">
<rect x="712" y="454" width="40" height="30" rx="5" fill="#7e838f"/>
<rect x="738" y="454" width="14" height="30" rx="5" fill="#c4ced4"/>
<rect x="712" y="454" width="12" height="30" rx="5" fill="#5f646e"/>
<path d="M752 460 l18 -10 l4 6 l-18 12 Z" fill="#8e939f"/>
<path d="M756 458 l14 -8 l2 3 l-14 9 Z" fill="#c4ced4"/>
<path d="M770 450 l9 -4 l3 6 l-9 4 Z" fill="#a6b2ba"/>
<path d="M718 454 q10 -14 24 -2" fill="none" stroke="#6f747e" stroke-width="4"/>
<rect x="710" y="482" width="44" height="6" rx="3" fill="#5a5f69"/>
</g>
<rect x="706" y="494" width="70" height="6" fill="#3a2312" opacity="0.2"/>
<rect x="0" y="560" width="800" height="40" fill="url(#italy-stone)"/>
<rect x="0" y="560" width="800" height="9" fill="#f0e0c0" opacity="0.75"/>
<rect x="0" y="588" width="800" height="12" fill="#5f7456"/>
<rect x="0" y="588" width="800" height="4" fill="#7d9269" opacity="0.7"/>
<path d="M96 560 a26 26 0 0 1 52 0 Z" fill="#a68d6c"/>
<path d="M100 560 a22 22 0 0 1 44 0 Z" fill="#2f5f5c"/>
<path d="M122 538 a22 22 0 0 1 22 22 l-8 0 a14 14 0 0 0 -14 -14 Z" fill="#4f8079" opacity="0.7"/>
<path d="M556 560 a24 24 0 0 1 48 0 Z" fill="#a68d6c"/>
<path d="M560 560 a20 20 0 0 1 40 0 Z" fill="#2f5f5c"/>
<path d="M580 540 a20 20 0 0 1 20 20 l-7 0 a13 13 0 0 0 -13 -13 Z" fill="#4f8079" opacity="0.7"/>
<rect x="300" y="546" width="5" height="54" fill="#a68d6c" opacity="0.55"/>
<rect x="668" y="546" width="5" height="54" fill="#a68d6c" opacity="0.5"/>

<rect x="0" y="600" width="800" height="206" fill="url(#italy-canal)"/>
<rect x="82" y="600" width="108" height="130" fill="url(#italy-reflwarm)"/>
<rect x="190" y="600" width="78" height="118" fill="url(#italy-reflwarm)"/>
<rect x="470" y="600" width="108" height="126" fill="url(#italy-refllilac)"/>
<rect x="578" y="600" width="76" height="140" fill="url(#italy-reflwarm)"/>
<rect x="344" y="600" width="56" height="150" fill="url(#italy-refllight)"/>
<rect x="0" y="600" width="800" height="62" fill="url(#italy-watershine)"/>
<path d="M170 660 q44 -11 88 0" fill="none" stroke="#a8e6d2" stroke-width="3.4" opacity="0.4"/>
<path d="M330 700 q50 -12 100 0" fill="none" stroke="#8ed6c2" stroke-width="3.2" opacity="0.3"/>
<path d="M180 794 q54 -14 108 0" fill="none" stroke="#5aa094" stroke-width="4.4" opacity="0.45"/>
<path d="M420 776 q46 -12 92 0" fill="none" stroke="#5aa094" stroke-width="4" opacity="0.4"/>

<rect x="520" y="606" width="18" height="178" rx="6" fill="#e6d7c2"/>
<rect x="520" y="606" width="7" height="178" rx="3" fill="#a8907a"/>
<rect x="531" y="606" width="7" height="178" rx="3" fill="#fdf4e2"/>
<rect x="520" y="626" width="18" height="20" fill="#c8382f"/>
<rect x="520" y="676" width="18" height="20" fill="#c8382f"/>
<ellipse cx="529" cy="784" rx="15" ry="5" fill="url(#italy-shadowwater)"/>
<path d="M521 784 q4 12 -1 22 q9 -8 4 -22 Z" fill="url(#italy-refllight)"/>
<path d="M533 784 q5 14 0 22 q9 -10 3 -22 Z" fill="url(#italy-refllight)"/>
<ellipse cx="529" cy="608" rx="12" ry="4" fill="url(#italy-contact)"/>
<g data-obj="gull">
<path d="M528 606 q-22 -14 -10 -28 q14 -14 28 0 q-14 6 -18 28 Z" fill="#ddd5c6"/>
<path d="M546 578 q-14 6 -18 28 q-7 -5 -9 -11 q10 -14 27 -17 Z" fill="#ffffff"/>
<circle cx="518" cy="584" r="8" fill="#f6efe2"/>
<circle cx="516" cy="581" r="4" fill="#ffffff"/>
<circle cx="521" cy="582" r="2.2" fill="#3a3140"/>
<path d="M511 584 l-10 4 l10 4 Z" fill="#e8853f"/>
</g>

<ellipse cx="300" cy="778" rx="172" ry="16" fill="url(#italy-shadowwater)"/>
<path d="M140 726 q30 -16 90 -18 q90 -4 190 4 q34 2 52 10 q-18 32 -60 37 q-106 10 -194 2 q-52 -7 -78 -35 Z" fill="url(#italy-gondola)"/>
<path d="M140 726 q30 -16 90 -18 q90 -4 190 4 q34 2 52 10 q-24 10 -76 12 q-128 5 -210 -3 q-46 -5 -46 -5 Z" fill="#4a4254"/>
<path d="M230 708 q90 -4 190 4 q34 2 52 10 q-11 4 -30 7 q-20 -11 -56 -14 q-94 -7 -170 -8 Z" fill="#71667f"/>
<path d="M250 710 q100 0 176 12" fill="none" stroke="#cabaa4" stroke-width="2.6" opacity="0.5"/>
<path d="M156 724 q-16 -42 -6 -68 q9 -20 24 -8 q-15 18 -6 44 q6 17 13 30 Z" fill="#2f2a36"/>
<path d="M168 646 q6 -6 6 3 q-13 18 -6 42 l-6 -4 q-7 -24 6 -41 Z" fill="#5e5569"/>
<g data-obj="prow">
<path d="M148 646 q16 -16 32 -8 q-6 11 -17 13 q-11 2 -15 -5 Z" fill="#b98b28"/>
<path d="M164 638 q11 -1 16 0 q-6 11 -17 13 Z" fill="#f2d488"/>
<path d="M152 660 l22 -8 l0 8 l-22 8 Z" fill="#e8bd63"/>
<path d="M154 676 l20 -8 l0 8 l-20 8 Z" fill="#c99333"/>
<path d="M156 692 l18 -8 l0 8 l-18 8 Z" fill="#e2b356"/>
</g>
<ellipse cx="209" cy="713" rx="26" ry="5" fill="#14101c" opacity="0.5"/>
<g data-obj="fish-crate">
<rect x="186" y="688" width="46" height="24" rx="3" fill="url(#italy-crate)"/>
<rect x="186" y="688" width="46" height="4" rx="2" fill="#dcbd86"/>
<rect x="186" y="688" width="10" height="24" rx="3" fill="#8a6a3a"/>
<path d="M188 684 q14 -10 30 -2 q-6 8 -18 8 q-8 0 -12 -6 Z" fill="#9fadb4"/>
<path d="M188 684 q14 -10 30 -2 q-3 4 -8 5 q-10 -6 -22 -3 Z" fill="#e8f2f0"/>
<path d="M218 682 l10 -6 l0 12 Z" fill="#8a929c"/>
<circle cx="196" cy="681" r="2" fill="#3a3140"/>
</g>
<ellipse cx="309" cy="718" rx="58" ry="6" fill="#14101c" opacity="0.5"/>
<rect x="254" y="704" width="110" height="12" rx="4" fill="#6b432d"/>
<rect x="254" y="704" width="110" height="4" rx="2" fill="#a8764f"/>
<rect x="262" y="686" width="94" height="18" rx="5" fill="#8a5a3f"/>
<rect x="330" y="686" width="26" height="18" rx="5" fill="#b57e56"/>
<rect x="286" y="672" width="54" height="18" rx="8" fill="#b53c3c"/>
<rect x="286" y="672" width="54" height="6" rx="3" fill="#ec6a5c"/>
<g transform="translate(318 656) scale(0.42)">
<ellipse cx="56" cy="52" rx="56" ry="15" fill="#3d3745"/>
<ellipse cx="56" cy="49" rx="56" ry="15" fill="#63596f"/>
<rect x="20" y="18" width="72" height="30" rx="10" fill="#4c4556"/>
<rect x="68" y="18" width="24" height="30" rx="10" fill="#7f7590"/>
<path d="M20 40 q36 8 72 0 l0 8 q-36 8 -72 0 Z" fill="#332e3c"/>
</g>
<ellipse cx="402" cy="713" rx="26" ry="5" fill="#14101c" opacity="0.5"/>
<g data-obj="flowers">
<rect x="378" y="690" width="48" height="22" rx="3" fill="#a8854f"/>
<rect x="378" y="690" width="48" height="5" rx="2" fill="#e0c290"/>
<rect x="414" y="690" width="12" height="22" rx="3" fill="#d5b47c"/>
<path d="M390 690 q-6 -18 2 -22" fill="none" stroke="#4f8f5a" stroke-width="3"/>
<path d="M404 690 q2 -14 8 -18" fill="none" stroke="#4f8f5a" stroke-width="3"/>
<circle cx="392" cy="674" r="8" fill="#d4629c"/>
<circle cx="390" cy="672" r="3.5" fill="#f7d76a"/>
<circle cx="412" cy="670" r="7" fill="#f0c33c"/>
<circle cx="380" cy="680" r="6" fill="#b96fb0"/>
</g>
<path d="M438 714 q0 -30 14 -30 q12 0 12 14 q0 10 -8 14 l0 12 Z" fill="#6b432d"/>
<path d="M452 684 q12 0 12 14 q0 10 -8 14 l0 12 l-6 0 l0 -14 q8 -4 8 -13 q0 -9 -6 -13 Z" fill="#b0805c"/>
<g data-obj="oar">
<path d="M446 690 l52 40 l-8 10 l-52 -40 Z" fill="#8d6039"/>
<path d="M446 690 l52 40 l-3 4 l-52 -40 Z" fill="#d5a976"/>
<path d="M490 722 q22 8 24 22 q-16 4 -30 -10 Z" fill="#6b432d"/>
<path d="M490 722 q22 8 24 22 q-6 1 -12 -1 q-4 -12 -16 -16 Z" fill="#a8764f"/>
</g>

<ellipse cx="586" cy="792" rx="26" ry="8" fill="url(#italy-shadowwater)"/>
<path d="M568 790 q18 6 36 0" fill="none" stroke="#7fc2b2" stroke-width="4" opacity="0.6"/>
<path d="M574 792 q6 14 2 14 q-8 -2 -6 -14 Z" fill="url(#italy-refldark)"/>
<path d="M596 792 q4 12 0 14 q-8 -4 -6 -14 Z" fill="url(#italy-refldark)"/>
<path d="M604 780 q40 -6 62 -18" fill="none" stroke="#c9b08c" stroke-width="2" opacity="0.6"/>
<g data-obj="buoy">
<circle cx="586" cy="772" r="19" fill="#a83a36"/>
<path d="M586 753 a19 19 0 0 1 19 19 a19 19 0 0 1 -8 15 a15 15 0 0 0 -11 -34 Z" fill="#ef7a6c"/>
<circle cx="586" cy="772" r="12" fill="#ece4d2"/>
<circle cx="586" cy="772" r="5" fill="#c8382f"/>
<rect x="582" y="746" width="8" height="10" rx="3" fill="#8a8f9c"/>
</g>
<ellipse cx="266" cy="784" rx="34" ry="8" fill="url(#italy-shadowwater)"/>
<path d="M238 782 q28 8 56 0" fill="none" stroke="#7fc2b2" stroke-width="4" opacity="0.6"/>
<path d="M252 784 q6 12 2 16 q-8 -5 -6 -16 Z" fill="url(#italy-refllight)"/>
<path d="M280 784 q4 12 0 16 q-8 -5 -6 -16 Z" fill="url(#italy-refllight)"/>
<g data-obj="duck">
<path d="M236 778 q4 -18 24 -18 q22 0 22 16 q0 12 -20 12 q-22 0 -26 -10 Z" fill="#ddd5c6"/>
<path d="M260 760 q22 0 22 16 q0 12 -20 12 q16 -8 12 -18 q-3 -8 -14 -10 Z" fill="#ffffff"/>
<path d="M266 762 q0 -18 12 -18 q10 0 10 12 q0 8 -8 10 Z" fill="#f6efe2"/>
<circle cx="278" cy="750" r="2.2" fill="#3a3140"/>
<path d="M286 754 l10 3 l-10 4 Z" fill="#e8853f"/>
</g>
<rect x="0" y="798" width="800" height="10" fill="#123c3e" opacity="0.3"/>
<rect x="0" y="806" width="800" height="34" fill="url(#italy-copingtop)"/>
<rect x="0" y="806" width="800" height="5" fill="#f7ead0"/>
<path d="M0 840 L800 840 L800 862 L0 862 Z" fill="#a68d6c"/>
<path d="M0 840 L800 840 L800 846 L0 846 Z" fill="#c9b28d"/>
<path d="M0 856 L800 856 L800 862 L0 862 Z" fill="#3a2312" opacity="0.28"/>
<path d="M148 806 L136 840" stroke="#b39a76" stroke-width="2" opacity="0.5" fill="none"/>
<path d="M318 806 L312 840" stroke="#b39a76" stroke-width="2" opacity="0.45" fill="none"/>
<path d="M486 806 L492 840" stroke="#b39a76" stroke-width="2" opacity="0.45" fill="none"/>
<path d="M646 806 L664 840" stroke="#b39a76" stroke-width="2" opacity="0.5" fill="none"/>
<path d="M0 822 L800 822" stroke="#b39a76" stroke-width="1.6" opacity="0.35" fill="none"/>

<ellipse cx="176" cy="838" rx="30" ry="7" fill="url(#italy-contact)"/>
<g data-obj="starfish">
<path d="M177 796 l7 16 l18 1 l-14 12 l5 17 l-16 -10 l-16 10 l5 -17 l-14 -12 l18 -1 Z" fill="#c9682c"/>
<path d="M177 796 l7 16 l18 1 l-14 12 l5 17 l-16 -10 Z" fill="#f0a05c"/>
<path d="M177 796 l7 16 l6 0 l-13 -16 Z" fill="#f8c186"/>
<circle cx="177" cy="816" r="3" fill="#a9541f"/>
<circle cx="170" cy="810" r="2" fill="#a9541f"/>
<circle cx="184" cy="810" r="2" fill="#a9541f"/>
</g>
<ellipse cx="244" cy="838" rx="30" ry="6" fill="url(#italy-contact)"/>
<g data-obj="crab">
<ellipse cx="244" cy="824" rx="18" ry="12" fill="#a9302a"/>
<ellipse cx="245" cy="821" rx="15" ry="9" fill="#dd4c40"/>
<path d="M245 812 q15 0 15 9 q0 3 -2 5 q2 -10 -13 -14 Z" fill="#f4867a"/>
<path d="M228 816 q-10 -6 -12 -12 q8 0 12 6 Z" fill="#c93c33"/>
<path d="M260 816 q10 -6 12 -12 q-8 0 -12 6 Z" fill="#e0574a"/>
<path d="M228 832 l-8 6" stroke="#c93c33" stroke-width="3" fill="none"/>
<path d="M260 832 l8 6" stroke="#c93c33" stroke-width="3" fill="none"/>
<circle cx="238" cy="814" r="3" fill="#3a3140"/>
<circle cx="250" cy="814" r="3" fill="#3a3140"/>
</g>
<ellipse cx="306" cy="838" rx="26" ry="6" fill="url(#italy-contact)"/>
<g data-obj="snail">
<path d="M282 838 q0 -12 14 -12 q22 0 22 16 l-8 0 q0 -8 -12 -8 q-8 0 -8 4 Z" fill="#c9a76e"/>
<circle cx="300" cy="826" r="13" fill="#b8843c"/>
<path d="M300 813 a13 13 0 0 1 13 13 l-8 0 a5 5 0 0 0 -5 -5 Z" fill="#e8bd7c"/>
<circle cx="300" cy="826" r="8" fill="#dda762"/>
<circle cx="300" cy="826" r="3" fill="#a8763a"/>
<path d="M282 832 l-8 -12" stroke="#c9a76e" stroke-width="3" fill="none"/>
<circle cx="273" cy="818" r="2.6" fill="#7a4a36"/>
</g>

<ellipse cx="369" cy="840" rx="26" ry="7" fill="url(#italy-contact)"/>
<rect x="360" y="690" width="18" height="150" rx="4" fill="#a8907a"/>
<rect x="368" y="690" width="10" height="150" rx="4" fill="#e6d7c2"/>
<rect x="356" y="686" width="26" height="8" rx="3" fill="#8a6a52"/>
<rect x="356" y="686" width="26" height="3" rx="1.5" fill="#c9b08c"/>
<g data-obj="life-ring">
<circle cx="369" cy="721" r="21" fill="#d9d0bc"/>
<circle cx="369" cy="721" r="21" fill="url(#italy-cream)" opacity="0.75"/>
<circle cx="369" cy="721" r="11" fill="#2f6b68"/>
<path d="M369 700 a21 21 0 0 1 15 6 l-8 8 a10 10 0 0 0 -7 -3 Z" fill="#e0574a"/>
<path d="M369 742 a21 21 0 0 1 -15 -6 l8 -8 a10 10 0 0 0 7 3 Z" fill="#c8382f"/>
<path d="M355 709 q8 -8 18 -8" fill="none" stroke="#ffffff" stroke-width="3" opacity="0.6"/>
</g>
<path d="M360 700 q-8 -4 -6 -12" fill="none" stroke="#c9b08c" stroke-width="3"/>

<ellipse cx="436" cy="840" rx="22" ry="6" fill="url(#italy-contact)"/>
<rect x="424" y="788" width="24" height="52" rx="6" fill="#8a7256"/>
<rect x="438" y="788" width="10" height="52" rx="5" fill="#c9b28d"/>
<ellipse cx="436" cy="788" rx="12" ry="5" fill="#dcc8a4"/>
<ellipse cx="480" cy="840" rx="34" ry="8" fill="url(#italy-contact)"/>
<g data-obj="anchor">
<path d="M470 782 l14 54" stroke="#5f646e" stroke-width="6" fill="none"/>
<path d="M472 782 l12 52" stroke="#aeb8c0" stroke-width="2.4" fill="none"/>
<circle cx="468" cy="778" r="8" fill="none" stroke="#6f747e" stroke-width="4"/>
<path d="M454 794 l32 -4" stroke="#8a8f9c" stroke-width="4" fill="none"/>
<path d="M454 792 l32 -4" stroke="#c4ced4" stroke-width="1.6" fill="none"/>
<path d="M452 812 q6 22 26 24 q20 2 26 -20" fill="none" stroke="#7e838f" stroke-width="7"/>
<path d="M454 814 q7 18 22 21" fill="none" stroke="#b0bac2" stroke-width="2.4"/>
<path d="M448 808 l8 8 l-10 4 Z" fill="#5f646e"/>
<path d="M508 802 l-8 9 l10 3 Z" fill="#8f959f"/>
</g>
<ellipse cx="552" cy="840" rx="36" ry="8" fill="url(#italy-contact)"/>
<g data-obj="basket">
<path d="M520 792 l64 0 l-6 46 l-52 0 Z" fill="#a8854f"/>
<path d="M556 792 l28 0 l-6 46 l-22 0 Z" fill="#dcbd86"/>
<rect x="518" y="788" width="68" height="9" rx="4" fill="#e8cf9e"/>
<path d="M536 797 l-3 40" stroke="#8f7040" stroke-width="3.5" fill="none"/>
<path d="M552 797 l0 40" stroke="#8f7040" stroke-width="3.5" fill="none"/>
<path d="M568 797 l3 40" stroke="#c2a06c" stroke-width="3.5" fill="none"/>
<path d="M522 812 l60 0" stroke="#8f7040" stroke-width="3.5" fill="none"/>
<path d="M526 832 l52 0" stroke="#8f7040" stroke-width="3" fill="none"/>
</g>

<ellipse cx="622" cy="858" rx="42" ry="9" fill="url(#italy-contact)"/>
<rect x="592" y="832" width="60" height="24" fill="#9a8264"/>
<rect x="636" y="832" width="16" height="24" fill="#c1a782"/>
<rect x="588" y="826" width="68" height="8" rx="2" fill="#c9b28d"/>
<rect x="588" y="826" width="68" height="3" rx="1.5" fill="#eeddbe"/>
<ellipse cx="624" cy="826" rx="24" ry="5" fill="url(#italy-contact)"/>
<g data-obj="lion">
<circle cx="624" cy="804" r="18" fill="#b8a081"/>
<circle cx="626" cy="802" r="13" fill="#e0c9a4"/>
<path d="M626 789 q13 0 13 13 q0 7 -4 10 q5 -17 -9 -23 Z" fill="#f4e2c2"/>
<path d="M606 804 l-6 -7 l8 -2 Z" fill="#a89070"/>
<path d="M642 804 l6 -7 l-8 -2 Z" fill="#c9b192"/>
<path d="M604 792 l-4 -8 l9 3 Z" fill="#a89070"/>
<path d="M644 792 l4 -8 l-9 3 Z" fill="#c9b192"/>
<circle cx="621" cy="800" r="2.2" fill="#6d5c44"/>
<circle cx="631" cy="800" r="2.2" fill="#6d5c44"/>
<path d="M620 810 q6 6 12 0" fill="none" stroke="#6d5c44" stroke-width="2.6"/>
</g>

<rect x="0" y="862" width="800" height="338" fill="url(#italy-pave)"/>
<path d="M0 916 h800" stroke="#a68a68" stroke-width="3" opacity="0.3" fill="none"/>
<path d="M0 1004 h800" stroke="#a68a68" stroke-width="2.5" opacity="0.22" fill="none"/>
<path d="M262 862 L242 1200" stroke="#a68a68" stroke-width="2.4" opacity="0.22" fill="none"/>
<path d="M462 862 L478 1200" stroke="#a68a68" stroke-width="2.4" opacity="0.2" fill="none"/>
<path d="M636 862 L690 1200" stroke="#a68a68" stroke-width="2.4" opacity="0.18" fill="none"/>
<ellipse cx="184" cy="948" rx="52" ry="11" fill="url(#italy-shadow)"/>
<ellipse cx="184" cy="946" rx="34" ry="7" fill="url(#italy-contact)"/>
<rect x="142" y="930" width="84" height="16" rx="3" fill="#9a8264"/>
<rect x="142" y="930" width="84" height="5" rx="2" fill="#d5c09a"/>
<rect x="148" y="922" width="72" height="9" rx="2" fill="#b39a76"/>
<g data-obj="fountain">
<path d="M152 896 q6 -8 32 -8 q26 0 32 8 l-6 30 q-4 6 -26 6 q-22 0 -26 -6 Z" fill="#a68d6c"/>
<path d="M184 888 q26 0 32 8 l-6 30 q-3 4 -14 5 q10 -28 -12 -43 Z" fill="#e0cba6"/>
<path d="M152 896 q6 -8 32 -8 q6 0 11 1 q-20 4 -22 14 q-2 12 2 30 q-16 -1 -19 -7 Z" fill="#8f7859"/>
<ellipse cx="184" cy="890" rx="33" ry="10" fill="#c9b28d"/>
<ellipse cx="184" cy="890" rx="25" ry="7" fill="#24403f"/>
<ellipse cx="190" cy="889" rx="13" ry="3.5" fill="#5f9c92" opacity="0.7"/>
<path d="M160 884 q10 -6 24 -6" fill="none" stroke="#f0e0c0" stroke-width="3" opacity="0.7"/>
<path d="M158 900 q4 16 2 26" fill="none" stroke="#8f7859" stroke-width="2.4"/>
<path d="M210 900 q-3 16 -1 26" fill="none" stroke="#c9b28d" stroke-width="2.4"/>
</g>
<ellipse cx="176" cy="888" rx="20" ry="4" fill="url(#italy-contact)"/>
<g data-obj="pigeon">
<path d="M156 886 q4 -18 20 -18 q18 0 22 16 q-9 6 -24 6 q-14 0 -18 -4 Z" fill="#71767f"/>
<path d="M176 868 q18 0 22 16 q-9 6 -24 6 q16 -8 2 -22 Z" fill="#b4c0c8"/>
<path d="M162 872 q10 -18 26 -14 q-8 10 -10 20 q-10 0 -16 -6 Z" fill="#9aa4ae"/>
<circle cx="180" cy="864" r="8" fill="#8f959f"/>
<circle cx="178" cy="861" r="3.5" fill="#c4ced4"/>
<circle cx="183" cy="862" r="2.2" fill="#3a3140"/>
<path d="M187 864 l10 3 l-10 4 Z" fill="#d9a441"/>
</g>
<ellipse cx="238" cy="946" rx="20" ry="5" fill="url(#italy-shadow)"/>
<path d="M222 942 q4 -12 16 -12 q14 0 18 10 q-7 6 -20 6 q-11 0 -14 -4 Z" fill="#7e838f"/>
<path d="M238 930 q14 0 18 10 q-6 5 -16 6 q11 -8 -2 -16 Z" fill="#b0bac2"/>
<circle cx="243" cy="928" r="6" fill="#8f95a2"/>
<path d="M248 928 l8 3 l-8 3 Z" fill="#d9a441"/>

<ellipse cx="292" cy="950" rx="42" ry="10" fill="url(#italy-shadow)"/>
<ellipse cx="292" cy="948" rx="30" ry="6" fill="url(#italy-contact)"/>
<g data-obj="barrel">
<path d="M264 948 q2 -62 28 -62 q26 0 28 62 Z" fill="#6b432d"/>
<path d="M292 886 q26 0 28 62 l-14 0 q2 -48 -14 -62 Z" fill="#b58054"/>
<path d="M264 948 q2 -62 28 -62 q6 0 9 4 q-18 12 -21 58 Z" fill="#5a3524"/>
<rect x="260" y="882" width="64" height="11" rx="3" fill="#4e2e21"/>
<rect x="260" y="882" width="64" height="3" rx="1.5" fill="#8f6446"/>
<rect x="262" y="908" width="60" height="8" rx="3" fill="#4e2e21"/>
<rect x="262" y="936" width="60" height="8" rx="3" fill="#4e2e21"/>
</g>

<rect x="0" y="490" width="136" height="540" fill="url(#italy-facterra)"/>
<rect x="0" y="490" width="24" height="540" fill="url(#italy-vshade)"/>
<rect x="120" y="490" width="16" height="540" fill="url(#italy-rimlight)"/>
<rect x="0" y="482" width="142" height="16" fill="#8f5f36"/>
<rect x="0" y="478" width="142" height="5" fill="#b57e44"/>
<rect x="0" y="1008" width="142" height="16" fill="#a98456"/>
<rect x="0" y="1008" width="142" height="5" fill="#d0a875"/>
<rect x="0" y="1020" width="142" height="12" fill="#7f5f3a"/>
<ellipse cx="70" cy="1034" rx="90" ry="10" fill="url(#italy-shadow)"/>
<rect x="22" y="556" width="56" height="76" rx="3" fill="url(#italy-pane)"/>
<rect x="22" y="556" width="56" height="18" rx="3" fill="#8fc0bc" opacity="0.18"/>
<rect x="6" y="554" width="17" height="80" rx="2" fill="url(#italy-shutterdim)"/>
<rect x="77" y="554" width="17" height="80" rx="2" fill="url(#italy-shutterlit)"/>
<rect x="14" y="548" width="72" height="10" fill="url(#italy-stone)"/>
<rect x="12" y="632" width="74" height="16" rx="3" fill="url(#italy-lip)"/>
<rect x="12" y="632" width="74" height="4" rx="2" fill="#efc491"/>
<circle cx="26" cy="626" r="11" fill="url(#italy-fruit)"/>
<circle cx="50" cy="624" r="12" fill="#e8674f"/>
<circle cx="72" cy="628" r="9" fill="#eeb92f"/>
<path d="M18 618 q12 -18 26 -8" fill="none" stroke="#4f8f5a" stroke-width="5"/>
<rect x="12" y="648" width="74" height="6" fill="#3a2312" opacity="0.22"/>
<rect x="108" y="490" width="8" height="518" fill="#a37a4c"/>
<rect x="113" y="490" width="3" height="518" fill="#dcb684"/>

<rect x="60" y="896" width="76" height="128" fill="#8f5f36"/>
<rect x="66" y="902" width="64" height="122" rx="4" fill="url(#italy-pane)"/>
<path d="M66 934 q32 -38 64 0 l0 -20 q-32 -34 -64 0 Z" fill="#8f5f36"/>
<rect x="112" y="902" width="18" height="122" fill="#2b4443" opacity="0.7"/>
<rect x="66" y="902" width="10" height="122" fill="#0f2222" opacity="0.6"/>
<circle cx="118" cy="968" r="4" fill="url(#italy-brass)"/>
<rect x="56" y="1016" width="84" height="12" rx="2" fill="#c9b28d"/>
<rect x="56" y="1016" width="84" height="4" rx="2" fill="#f0e0c0"/>
<path d="M60 842 q22 0 30 4" fill="none" stroke="#5f646e" stroke-width="3.5"/>
<path d="M62 842 q14 10 16 20" fill="none" stroke="#5f646e" stroke-width="2.6"/>
<rect x="96" y="840" width="4" height="8" fill="#5f646e"/>
<ellipse cx="82" cy="874" rx="22" ry="34" fill="url(#italy-wallcast)"/>
<circle cx="99" cy="872" r="30" fill="url(#italy-lampglow)"/>
<g data-obj="lantern">
<path d="M86 848 l0 -6 l26 0 l0 6 Z" fill="#7a4a36"/>
<path d="M88 848 l22 0 l5 34 l-32 0 Z" fill="#e6ae2c"/>
<path d="M88 848 l7 0 l-7 34 l-5 0 Z" fill="#c68f1e"/>
<path d="M103 848 l7 0 l5 34 l-9 0 Z" fill="#fbe08e"/>
<path d="M83 882 l32 0 l0 7 l-32 0 Z" fill="#6b432d"/>
<path d="M99 842 l0 -8" stroke="#7a4a36" stroke-width="3" fill="none"/>
<circle cx="99" cy="864" r="7" fill="#fff8d8"/>
</g>
<path d="M8 906 q22 10 44 -4" fill="none" stroke="#7a4fd0" stroke-width="4" opacity="0.34"/>
<path d="M4 1000 q22 -12 42 2" fill="none" stroke="#4f9fb0" stroke-width="3.6" opacity="0.3"/>
<path d="M12 872 q20 12 40 -4" fill="none" stroke="#e0699c" stroke-width="3.4" opacity="0.28"/>
<circle cx="48" cy="1004" r="6" fill="#f0c33c" opacity="0.32"/>
<path transform="translate(14 862) scale(0.5)" d="M33 61 C 8 42, 0 27, 0 17 C 0 5, 9 -1, 18 -1 C 25 -1, 30 3, 33 9 C 36 3, 41 -1, 48 -1 C 57 -1, 66 5, 66 17 C 66 27, 58 42, 33 61 Z" fill="#7a4fd0" opacity="0.45"/>
<path transform="translate(4 992) scale(0.42)" d="M33 61 C 8 42, 0 27, 0 17 C 0 5, 9 -1, 18 -1 C 25 -1, 30 3, 33 9 C 36 3, 41 -1, 48 -1 C 57 -1, 66 5, 66 17 C 66 27, 58 42, 33 61 Z" fill="#4f9fb0" opacity="0.42"/>
<path transform="translate(30 926) rotate(-10) scale(0.4)" d="M33 61 C 8 42, 0 27, 0 17 C 0 5, 9 -1, 18 -1 C 25 -1, 30 3, 33 9 C 36 3, 41 -1, 48 -1 C 57 -1, 66 5, 66 17 C 66 27, 58 42, 33 61 Z" fill="#e0699c" opacity="0.4"/>
<g data-obj="purple-heart" transform="translate(6 942) scale(0.75)">
<path d="M33 61 C 8 42, 0 27, 0 17 C 0 5, 9 -1, 18 -1 C 25 -1, 30 3, 33 9 C 36 3, 41 -1, 48 -1 C 57 -1, 66 5, 66 17 C 66 27, 58 42, 33 61 Z" fill="url(#italy-heart)"/>
<path d="M18 4 C 25 4, 30 8, 33 13 C 26 20, 22 30, 22 42 C 14 32, 6 24, 6 16 C 6 8, 12 4, 18 4 Z" fill="#c9b0f4" opacity="0.5"/>
<path d="M33 61 C 8 42, 0 27, 0 17 C 0 5, 9 -1, 18 -1 C 25 -1, 30 3, 33 9 C 36 3, 41 -1, 48 -1 C 57 -1, 66 5, 66 17 C 66 27, 58 42, 33 61 Z" fill="none" stroke="#4a2a8a" stroke-width="2.5" opacity="0.55"/>
</g>
<rect x="654" y="490" width="158" height="610" fill="url(#italy-faccoral)"/>
<rect x="654" y="490" width="26" height="610" fill="url(#italy-vshade)"/>
<rect x="796" y="490" width="16" height="610" fill="url(#italy-rimlight)"/>
<rect x="654" y="482" width="158" height="16" fill="#8f4229"/>
<rect x="654" y="478" width="158" height="5" fill="#b55e3c"/>
<rect x="654" y="1078" width="158" height="16" fill="#a05a3f"/>
<rect x="654" y="1078" width="158" height="5" fill="#cd7f56"/>
<rect x="654" y="1090" width="158" height="12" fill="#78402b"/>
<ellipse cx="736" cy="1104" rx="96" ry="10" fill="url(#italy-shadow)"/>
<rect x="706" y="520" width="60" height="72" rx="3" fill="url(#italy-pane)"/>
<rect x="706" y="520" width="60" height="18" rx="3" fill="#8fc0bc" opacity="0.18"/>
<rect x="690" y="518" width="17" height="76" rx="2" fill="url(#italy-shutterdim)"/>
<rect x="765" y="518" width="17" height="76" rx="2" fill="url(#italy-shutterlit)"/>
<rect x="698" y="512" width="76" height="10" fill="url(#italy-stone)"/>
<rect x="698" y="592" width="76" height="9" rx="2" fill="url(#italy-stone)"/>
<rect x="698" y="601" width="76" height="5" fill="#3a2312" opacity="0.2"/>

<rect x="654" y="612" width="158" height="10" rx="3" fill="url(#italy-wood)"/>
<path d="M654 622 l158 0 l0 24 l-158 0 Z" fill="url(#italy-canvas)"/>
<path d="M670 622 l0 24 l20 0 l0 -24 Z" fill="#c8382f"/>
<path d="M710 622 l0 24 l20 0 l0 -24 Z" fill="#c8382f"/>
<path d="M750 622 l0 24 l20 0 l0 -24 Z" fill="#c8382f"/>
<path d="M654 622 l158 0 l0 6 l-158 0 Z" fill="#ffffff" opacity="0.3"/>
<path d="M654 646 l158 0 l0 8 l-158 0 Z" fill="#3a2312" opacity="0.2"/>

<ellipse cx="682" cy="678" rx="18" ry="38" fill="url(#italy-wallcast)"/>
<circle cx="690" cy="660" r="3" fill="#6f747e"/>
<path d="M690 662 l4 8" stroke="#8a6a52" stroke-width="2.4" fill="none"/>
<g data-obj="mandolin">
<path d="M672 712 q-12 -18 2 -32 q14 -14 28 0 q12 14 0 30 q-14 16 -30 2 Z" fill="#8d6039"/>
<path d="M702 680 q12 14 0 30 q-7 8 -14 9 q12 -16 9 -39 Z" fill="#d5a976"/>
<path d="M672 712 q-12 -18 2 -32 q7 -7 14 -6 q-16 14 -9 38 Z" fill="#6b432d"/>
<circle cx="687" cy="692" r="7" fill="#4e2e21"/>
<path d="M695 672 l4 -22" stroke="#7a4a36" stroke-width="7" fill="none"/>
<path d="M697 671 l3 -20" stroke="#b0805c" stroke-width="2.4" fill="none"/>
<path d="M696 652 l8 -6 l4 6 l-8 6 Z" fill="#4e2e21"/>
</g>
<circle cx="764" cy="662" r="3" fill="#6f747e"/>
<path d="M764 664 l2 6" stroke="#8a6a52" stroke-width="2.2" fill="none"/>
<path d="M748 706 q-10 -16 2 -28 q12 -12 24 0 q10 12 0 26 q-12 14 -26 2 Z" fill="#7a4a36"/>
<path d="M772 678 q10 12 0 26 q-6 7 -12 8 q10 -14 8 -34 Z" fill="#b58054"/>
<circle cx="761" cy="690" r="6" fill="#4e2e21"/>
<path d="M769 672 l3 -18" stroke="#7a4a36" stroke-width="6" fill="none"/>

<rect x="660" y="724" width="146" height="60" fill="url(#italy-shelfback)"/>
<rect x="660" y="724" width="146" height="8" fill="#1a0f07" opacity="0.6"/>
<ellipse cx="695" cy="782" rx="30" ry="5" fill="#1a0f07" opacity="0.5"/>
<g transform="translate(666 748) scale(0.55)">
<ellipse cx="56" cy="52" rx="56" ry="15" fill="#b8853f"/>
<ellipse cx="56" cy="49" rx="56" ry="15" fill="#eece96"/>
<rect x="20" y="14" width="72" height="34" rx="6" fill="#e9cf98"/>
<rect x="68" y="14" width="24" height="34" rx="6" fill="#fdeec8"/>
<ellipse cx="56" cy="14" rx="36" ry="9" fill="#fdeec8"/>
<rect x="20" y="30" width="72" height="14" fill="#2f6bbf"/>
<rect x="20" y="30" width="72" height="5" fill="#6f9fe0"/>
</g>
<ellipse cx="761" cy="782" rx="32" ry="5" fill="#1a0f07" opacity="0.5"/>
<g data-obj="gondolier-hat" transform="translate(730 748) scale(0.55)">
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
<rect x="658" y="784" width="150" height="11" rx="3" fill="url(#italy-lip)"/>
<rect x="658" y="784" width="150" height="4" rx="2" fill="#efc491"/>
<rect x="658" y="795" width="150" height="6" fill="#3a2312" opacity="0.28"/>

<rect x="660" y="820" width="146" height="62" fill="url(#italy-shelfback)"/>
<rect x="660" y="820" width="146" height="8" fill="#1a0f07" opacity="0.6"/>
<ellipse cx="682" cy="880" rx="18" ry="4" fill="#1a0f07" opacity="0.55"/>
<g transform="translate(668 828)">
<rect x="9" y="0" width="12" height="6" rx="3" fill="#a8762a"/>
<path d="M10 6 l0 14 q-9 8 -9 22 v12 h26 v-12 q0 -14 -9 -22 l0 -14 Z" fill="#3d7a48"/>
<path d="M20 6 l0 14 q9 8 9 22 v12 h-8 v-12 q0 -14 -6 -22 l0 -14 Z" fill="#8ccd8a"/>
<path d="M1 40 q13 -5 26 0 l0 8 q-13 -5 -26 0 Z" fill="#f2ece0" opacity="0.6"/>
</g>
<ellipse cx="764" cy="880" rx="18" ry="4" fill="#1a0f07" opacity="0.55"/>
<g transform="translate(750 824)">
<rect x="9" y="0" width="11" height="6" rx="3" fill="#7a4a36"/>
<path d="M10 6 l0 16 q-9 8 -9 22 v14 h26 v-14 q0 -14 -9 -22 l0 -16 Z" fill="#6a45bc"/>
<path d="M19 6 l0 16 q8 8 8 22 v14 h-8 v-14 q0 -14 -5 -22 l0 -16 Z" fill="#c4aef0"/>
</g>
<ellipse cx="717" cy="880" rx="20" ry="4" fill="#1a0f07" opacity="0.55"/>
<g data-obj="murano-bottle" transform="translate(700 818) scale(0.5)">
<circle cx="34" cy="82" r="34" fill="url(#italy-bottleglow)" opacity="0.8"/>
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
<rect x="658" y="882" width="150" height="11" rx="3" fill="url(#italy-lip)"/>
<rect x="658" y="882" width="150" height="4" rx="2" fill="#efc491"/>
<rect x="658" y="893" width="150" height="6" fill="#3a2312" opacity="0.28"/>

<rect x="660" y="918" width="146" height="56" fill="url(#italy-shelfback)"/>
<rect x="660" y="918" width="146" height="8" fill="#1a0f07" opacity="0.6"/>
<ellipse cx="692" cy="972" rx="30" ry="5" fill="#1a0f07" opacity="0.55"/>
<g data-obj="accordion">
<rect x="666" y="934" width="14" height="40" rx="3" fill="#6b432d"/>
<rect x="704" y="934" width="14" height="40" rx="3" fill="#a8764f"/>
<path d="M680 936 l4 36 l4 -36 l4 36 l4 -36 l4 36 l4 -36 Z" fill="#b53c3c"/>
<path d="M696 936 l4 36 l4 -36 Z" fill="#ef7a6c"/>
<rect x="668" y="940" width="4" height="26" rx="2" fill="#f2ece0"/>
<circle cx="711" cy="946" r="3.5" fill="#f2ece0"/>
<circle cx="711" cy="960" r="3.5" fill="#f2ece0"/>
</g>
<ellipse cx="760" cy="972" rx="24" ry="5" fill="#1a0f07" opacity="0.55"/>
<rect x="740" y="944" width="12" height="30" rx="3" fill="#6b432d"/>
<rect x="768" y="944" width="12" height="30" rx="3" fill="#a8764f"/>
<path d="M752 946 l4 26 l4 -26 l4 26 l4 -26 Z" fill="#2f7d4e"/>
<path d="M760 946 l4 26 l4 -26 Z" fill="#6cb894"/>
<rect x="658" y="974" width="150" height="11" rx="3" fill="url(#italy-lip)"/>
<rect x="658" y="974" width="150" height="4" rx="2" fill="#efc491"/>
<rect x="658" y="985" width="150" height="6" fill="#3a2312" opacity="0.28"/>

<rect x="656" y="992" width="80" height="86" fill="#8f4229"/>
<rect x="662" y="998" width="68" height="80" rx="3" fill="url(#italy-pane)"/>
<rect x="662" y="998" width="10" height="80" fill="#0f2222" opacity="0.6"/>
<rect x="714" y="998" width="16" height="80" fill="#2b4443" opacity="0.7"/>
<rect x="662" y="998" width="68" height="10" fill="#8fc0bc" opacity="0.16"/>
<circle cx="720" cy="1040" r="4" fill="url(#italy-brass)"/>
<rect x="652" y="1072" width="88" height="10" rx="2" fill="#c9b28d"/>
<ellipse cx="744" cy="1018" rx="16" ry="26" fill="url(#italy-wallcast)"/>
<g data-obj="mailbox">
<rect x="742" y="1006" width="46" height="30" rx="4" fill="#2f6b68"/>
<rect x="772" y="1006" width="16" height="30" rx="4" fill="#6bab9d"/>
<path d="M742 1006 q23 -14 46 0 Z" fill="#4f8f88"/>
<path d="M765 999 q14 0 23 7 l-10 0 q-6 -4 -13 -4 Z" fill="#87c4b6"/>
<rect x="746" y="1018" width="24" height="6" rx="3" fill="#1f504e"/>
<rect x="740" y="1034" width="50" height="6" rx="3" fill="#255c58"/>
<path d="M765 992 l0 14" stroke="#7a4a36" stroke-width="3" fill="none"/>
</g>
<ellipse cx="752" cy="1064" rx="14" ry="22" fill="url(#italy-wallcast)"/>
<circle cx="765" cy="1046" r="3" fill="#6f747e"/>
<g data-obj="keys">
<path d="M756 1048 q10 -8 18 0 q-8 8 -18 0 Z" fill="none" stroke="#a8762a" stroke-width="3"/>
<circle cx="760" cy="1062" r="7" fill="none" stroke="#d9a441" stroke-width="4"/>
<circle cx="758" cy="1059" r="7" fill="none" stroke="#f7de92" stroke-width="1.6"/>
<path d="M760 1069 l0 14 l5 0 l-5 0 l0 5" stroke="#d9a441" stroke-width="4" fill="none"/>
<circle cx="778" cy="1064" r="6" fill="none" stroke="#b58125" stroke-width="4"/>
<path d="M778 1070 l0 12 l4 0" stroke="#b58125" stroke-width="4" fill="none"/>
</g>
<ellipse cx="492" cy="1178" rx="180" ry="18" fill="url(#italy-shadow)"/>
<rect x="344" y="892" width="14" height="300" fill="#7a4a36"/>
<rect x="352" y="892" width="6" height="300" fill="#b0805c"/>
<rect x="636" y="892" width="14" height="300" fill="#7a4a36"/>
<rect x="644" y="892" width="6" height="300" fill="#b0805c"/>
<rect x="336" y="876" width="316" height="16" rx="4" fill="url(#italy-wood)"/>
<rect x="336" y="876" width="316" height="5" rx="3" fill="#b57e56"/>
<path d="M340 892 l308 0 l0 64 l-308 0 Z" fill="url(#italy-canvas)"/>
<path d="M340 892 l0 64 l30 0 l0 -64 Z" fill="url(#italy-red)"/>
<path d="M400 892 l0 64 l30 0 l0 -64 Z" fill="url(#italy-green)"/>
<path d="M460 892 l0 64 l30 0 l0 -64 Z" fill="url(#italy-red)"/>
<path d="M520 892 l0 64 l30 0 l0 -64 Z" fill="url(#italy-green)"/>
<path d="M580 892 l0 64 l30 0 l0 -64 Z" fill="url(#italy-red)"/>
<path d="M340 892 l308 0 l0 12 l-308 0 Z" fill="#ffffff" opacity="0.22"/>
<path d="M340 944 l308 0 l0 12 l-308 0 Z" fill="#3a2312" opacity="0.16"/>
<path d="M340 950 q26 20 51 0 q26 20 51 0 q26 20 51 0 q26 20 51 0 q26 20 51 0 q26 20 53 0 l0 12 q-27 20 -53 0 q-25 20 -51 0 q-25 20 -51 0 q-25 20 -51 0 q-25 20 -51 0 q-25 20 -51 0 Z" fill="#dfd5c2"/>
<rect x="350" y="928" width="288" height="54" fill="url(#italy-shelfback)"/>
<rect x="350" y="928" width="288" height="8" fill="#1a0f07" opacity="0.6"/>

<rect x="352" y="970" width="80" height="10" rx="3" fill="url(#italy-wood)"/>
<rect x="352" y="970" width="80" height="3" rx="1.5" fill="#c08c5c"/>
<ellipse cx="390" cy="972" rx="32" ry="5" fill="#1a0f07" opacity="0.45"/>
<g data-obj="pizza-slice" transform="translate(356 930) scale(0.55)">
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
<rect x="430" y="974" width="56" height="8" rx="3" fill="url(#italy-wood)"/>
<rect x="430" y="974" width="56" height="3" rx="1.5" fill="#c08c5c"/>
<ellipse cx="457" cy="976" rx="24" ry="4" fill="#1a0f07" opacity="0.45"/>
<g data-obj="cheese">
<path d="M436 974 l0 -22 l42 -12 l0 22 Z" fill="#dcae2c"/>
<path d="M462 944 l16 -4 l0 22 l-16 4 Z" fill="#f7d76a"/>
<path d="M436 952 l42 -12 l0 10 l-42 12 Z" fill="#fbe89e"/>
<circle cx="447" cy="962" r="3" fill="#b5871f"/>
<circle cx="463" cy="957" r="2.6" fill="#b5871f"/>
<circle cx="454" cy="968" r="2.2" fill="#b5871f"/>
</g>
<ellipse cx="514" cy="980" rx="24" ry="5" fill="#1a0f07" opacity="0.45"/>
<g data-obj="olive-jar">
<rect x="494" y="946" width="40" height="34" rx="5" fill="#6f9c5c" opacity="0.92"/>
<rect x="518" y="946" width="16" height="34" rx="5" fill="#c2e0b0" opacity="0.85"/>
<rect x="494" y="946" width="10" height="34" rx="5" fill="#4e7440" opacity="0.85"/>
<rect x="498" y="938" width="32" height="10" rx="3" fill="#a8762a"/>
<rect x="498" y="938" width="32" height="3" rx="1.5" fill="#e6c476"/>
<circle cx="504" cy="962" r="5" fill="#3d7a48"/>
<circle cx="516" cy="966" r="5" fill="#2f6b3a"/>
<circle cx="524" cy="958" r="4.5" fill="#4f8f5a"/>
</g>
<g transform="translate(563 918) scale(0.4)">
<rect x="-17" y="0" width="34" height="64" rx="17" fill="#c99527"/>
<rect x="2" y="0" width="15" height="64" rx="7" fill="#f7de92" opacity="0.75"/>
<rect x="-12" y="62" width="24" height="9" rx="3" fill="#b3a3cc"/>
<rect x="-9" y="70" width="18" height="38" rx="5" fill="#d8ccb4"/>
</g>
<g transform="translate(604 914) scale(0.4)">
<rect x="-16" y="0" width="32" height="62" rx="4" fill="#5c33a8"/>
<rect x="2" y="0" width="14" height="62" rx="3" fill="#b7a2e6" opacity="0.8"/>
<rect x="-9" y="60" width="18" height="48" rx="5" fill="#d8ccb4"/>
</g>
<g data-obj="lightstick" transform="translate(587 906) rotate(4) scale(0.44)">
<rect x="-17" y="0" width="34" height="64" rx="17" fill="url(#italy-lamp)"/>
<rect x="-17" y="0" width="12" height="64" rx="6" fill="#4e3690" opacity="0.55"/>
<ellipse cx="4" cy="18" rx="7" ry="14" fill="#efe6ff" opacity="0.55"/>
<ellipse cx="0" cy="7" rx="10" ry="5" fill="#d8c8f4" opacity="0.7"/>
<rect x="-12" y="62" width="24" height="9" rx="3" fill="#9d8cc0"/>
<rect x="-12" y="62" width="24" height="4" rx="2" fill="#d0c2e8"/>
<rect x="-9" y="70" width="18" height="38" rx="5" fill="#cfc2a8"/>
<rect x="0" y="70" width="9" height="38" rx="4" fill="#f6efe0"/>
<rect x="-9" y="86" width="18" height="6" fill="#6f56ab" opacity="0.75"/>
</g>
<g transform="translate(620 922) scale(0.38)">
<path d="M4 60 l0 -50" fill="none" stroke="#4f8f5a" stroke-width="4"/>
<circle cx="4" cy="8" r="5" fill="#9b6fe8"/>
<circle cx="10" cy="18" r="4" fill="#b096e4"/>
<circle cx="-2" cy="20" r="4" fill="#b096e4"/>
</g>
<path d="M552 946 q-4 36 12 36 l40 0 q16 0 12 -36 Z" fill="#8a929c"/>
<path d="M594 946 q4 36 -12 36 l22 0 q16 0 12 -36 Z" fill="#c4ced4"/>
<rect x="548" y="940" width="72" height="10" rx="4" fill="#6f747e"/>
<rect x="548" y="940" width="72" height="4" rx="2" fill="#b0bac2"/>
<rect x="340" y="980" width="312" height="20" rx="4" fill="url(#italy-lip)"/>
<rect x="340" y="980" width="312" height="6" rx="3" fill="#efc491"/>
<rect x="340" y="1000" width="312" height="7" fill="#3a2312" opacity="0.3"/>

<rect x="350" y="1004" width="288" height="76" fill="url(#italy-shelfback)"/>
<rect x="350" y="1004" width="288" height="8" fill="#1a0f07" opacity="0.6"/>
<g data-obj="eggs">
<ellipse cx="370" cy="1024" rx="11" ry="14" fill="#e2d8c4"/>
<ellipse cx="372" cy="1022" rx="8" ry="11" fill="#fffaf0"/>
<ellipse cx="392" cy="1020" rx="11" ry="14" fill="#e8dfcd"/>
<ellipse cx="394" cy="1017" rx="7" ry="10" fill="#fdf8ee"/>
<ellipse cx="410" cy="1026" rx="10" ry="12" fill="#f2ece0"/>
<ellipse cx="386" cy="1042" rx="34" ry="7" fill="#1a0f07" opacity="0.45"/>
<rect x="352" y="1040" width="68" height="40" rx="3" fill="url(#italy-crate)"/>
<rect x="352" y="1040" width="68" height="5" rx="2" fill="#e8cf9e"/>
<rect x="352" y="1040" width="11" height="40" rx="3" fill="#8a6a3a"/>
<path d="M356 1058 l60 0" stroke="#8f7040" stroke-width="2.4" fill="none"/>
</g>
<g data-obj="eggplant">
<ellipse cx="446" cy="1022" rx="13" ry="16" fill="#523573"/>
<ellipse cx="449" cy="1019" rx="8" ry="11" fill="#8f6fb8"/>
<ellipse cx="444" cy="1014" rx="4" ry="5" fill="#b79ad8"/>
<ellipse cx="474" cy="1020" rx="14" ry="17" fill="#6b4a8f"/>
<ellipse cx="477" cy="1016" rx="7" ry="10" fill="#9c7cc4"/>
<path d="M446 1007 q2 -8 10 -10 q-2 7 -4 10 Z" fill="#4f8f5a"/>
<path d="M474 1005 q4 -7 12 -7" fill="none" stroke="#4f8f5a" stroke-width="4"/>
<ellipse cx="461" cy="1042" rx="33" ry="7" fill="#1a0f07" opacity="0.45"/>
<rect x="428" y="1040" width="66" height="40" rx="3" fill="url(#italy-crate)"/>
<rect x="428" y="1040" width="66" height="5" rx="2" fill="#e8cf9e"/>
<rect x="428" y="1040" width="11" height="40" rx="3" fill="#8a6a3a"/>
<path d="M432 1058 l58 0" stroke="#8f7040" stroke-width="2.4" fill="none"/>
</g>
<g data-obj="apples">
<circle cx="522" cy="1024" r="13" fill="#a83a36"/>
<path d="M522 1011 a13 13 0 0 1 13 13 a13 13 0 0 1 -4 9 a10 10 0 0 0 -9 -22 Z" fill="#f2907c"/>
<circle cx="548" cy="1022" r="14" fill="#c8382f"/>
<circle cx="551" cy="1018" r="5" fill="#ef7a6c"/>
<circle cx="534" cy="1034" r="11" fill="#5fa068"/>
<circle cx="531" cy="1031" r="4" fill="#96cf8e"/>
<path d="M522 1011 q2 -8 8 -9" fill="none" stroke="#3d7a48" stroke-width="3"/>
<ellipse cx="537" cy="1042" rx="33" ry="7" fill="#1a0f07" opacity="0.45"/>
<rect x="504" y="1040" width="66" height="40" rx="3" fill="url(#italy-crate)"/>
<rect x="504" y="1040" width="66" height="5" rx="2" fill="#e8cf9e"/>
<rect x="504" y="1040" width="11" height="40" rx="3" fill="#8a6a3a"/>
<path d="M508 1058 l58 0" stroke="#8f7040" stroke-width="2.4" fill="none"/>
</g>
<g data-obj="melon">
<ellipse cx="612" cy="1024" rx="28" ry="24" fill="url(#italy-melon)"/>
<path d="M594 1004 q18 12 36 0" fill="none" stroke="#8ccd8a" stroke-width="4" opacity="0.8"/>
<path d="M588 1018 q24 12 48 0" fill="none" stroke="#8ccd8a" stroke-width="4" opacity="0.75"/>
<path d="M590 1034 q22 10 44 0" fill="none" stroke="#8ccd8a" stroke-width="4" opacity="0.6"/>
<ellipse cx="602" cy="1010" rx="9" ry="6" fill="#a8dda2" opacity="0.45"/>
<path d="M612 1000 q4 -10 12 -10" fill="none" stroke="#2f6b3a" stroke-width="4" stroke-linecap="round"/>
<ellipse cx="612" cy="1044" rx="32" ry="7" fill="#1a0f07" opacity="0.45"/>
<rect x="580" y="1040" width="66" height="40" rx="3" fill="url(#italy-crate)"/>
<rect x="580" y="1040" width="66" height="5" rx="2" fill="#e8cf9e"/>
<rect x="580" y="1040" width="11" height="40" rx="3" fill="#8a6a3a"/>
<path d="M584 1058 l58 0" stroke="#8f7040" stroke-width="2.4" fill="none"/>
</g>
<rect x="344" y="1080" width="304" height="12" rx="3" fill="url(#italy-lip)"/>
<rect x="344" y="1080" width="304" height="4" rx="2" fill="#efc491"/>
<rect x="344" y="1092" width="304" height="7" fill="#3a2312" opacity="0.3"/>
<ellipse cx="234" cy="1190" rx="104" ry="15" fill="url(#italy-shadow)"/>
<rect x="164" y="1022" width="10" height="76" fill="#7a4a36"/>
<rect x="300" y="1022" width="10" height="76" fill="#7a4a36"/>
<rect x="304" y="1022" width="4" height="76" fill="#ac7a52"/>
<rect x="158" y="952" width="152" height="14" rx="4" fill="url(#italy-wood)"/>
<rect x="158" y="952" width="152" height="4" rx="2" fill="#b57e56"/>
<rect x="162" y="966" width="144" height="46" fill="url(#italy-canvas)"/>
<rect x="162" y="966" width="24" height="46" fill="#c8382f"/>
<rect x="210" y="966" width="24" height="46" fill="#c8382f"/>
<rect x="258" y="966" width="24" height="46" fill="#c8382f"/>
<rect x="162" y="966" width="144" height="9" fill="#ffffff" opacity="0.22"/>
<rect x="162" y="1004" width="144" height="8" fill="#3a2312" opacity="0.16"/>
<path d="M160 1010 q13 17 26 0 q13 17 26 0 q13 17 26 0 q13 17 26 0 q13 17 26 0 l0 11 q-13 17 -26 0 q-13 17 -26 0 q-13 17 -26 0 q-13 17 -26 0 q-13 17 -26 0 Z" fill="#dfd5c2"/>
<rect x="170" y="1024" width="132" height="62" fill="url(#italy-shelfback)"/>
<rect x="170" y="1024" width="132" height="8" fill="#1a0f07" opacity="0.6"/>
<g transform="translate(176 1026) scale(0.55)">
<path d="M14 44 L34 100 L54 44 Z" fill="#c08b4a"/>
<path d="M34 100 L54 44 L38 44 Z" fill="#e0aa6c"/>
<ellipse cx="34" cy="44" rx="26" ry="14" fill="#f7d0a0"/>
<circle cx="34" cy="26" r="19" fill="#e8849e"/>
<circle cx="29" cy="20" r="9" fill="#f9c2d3"/>
</g>
<g transform="translate(252 1024) scale(0.58)">
<path d="M12 44 q22 12 44 0 l-6 46 q-16 8 -32 0 Z" fill="#c08b4a"/>
<path d="M40 50 q10 -1 16 -6 l-6 46 q-6 3 -13 4 Z" fill="#e0aa6c"/>
<ellipse cx="34" cy="42" rx="24" ry="13" fill="#f7d0a0"/>
<circle cx="24" cy="30" r="14" fill="#7fc07a"/>
<circle cx="46" cy="30" r="14" fill="#fdf0d2"/>
<circle cx="35" cy="18" r="13" fill="#e8849e"/>
</g>
<g data-obj="gelato-cone" transform="translate(204 1022) scale(0.6)">
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
<rect x="176" y="1074" width="120" height="14" rx="3" fill="url(#italy-wood)"/>
<rect x="176" y="1074" width="120" height="4" rx="2" fill="#c08c5c"/>
<ellipse cx="192" cy="1076" rx="14" ry="4" fill="#1a0f07" opacity="0.6"/>
<ellipse cx="224" cy="1076" rx="15" ry="4" fill="#1a0f07" opacity="0.6"/>
<ellipse cx="268" cy="1076" rx="14" ry="4" fill="#1a0f07" opacity="0.6"/>
<rect x="156" y="1096" width="156" height="18" rx="4" fill="url(#italy-lip)"/>
<rect x="156" y="1096" width="156" height="5" rx="3" fill="#efc491"/>
<rect x="164" y="1116" width="140" height="46" rx="3" fill="#2f4f4d"/>
<ellipse cx="196" cy="1142" rx="22" ry="13" fill="#7fc07a"/>
<ellipse cx="234" cy="1140" rx="22" ry="13" fill="#e8849e"/>
<ellipse cx="272" cy="1142" rx="22" ry="13" fill="#f2e4c6"/>
<rect x="164" y="1116" width="140" height="46" rx="3" fill="url(#italy-glass)"/>
<path d="M172 1120 l124 0 l0 9 l-124 0 Z" fill="#ffffff" opacity="0.2"/>
<rect x="156" y="1160" width="156" height="14" rx="3" fill="url(#italy-wood)"/>
<rect x="156" y="1160" width="156" height="4" rx="2" fill="#b57e56"/>
<circle cx="196" cy="1178" r="20" fill="#2b2532"/>
<circle cx="196" cy="1178" r="14" fill="#4e4757"/>
<path d="M196 1164 l0 28" stroke="#2b2532" stroke-width="3.5" fill="none"/>
<path d="M182 1178 l28 0" stroke="#2b2532" stroke-width="3.5" fill="none"/>
<circle cx="196" cy="1178" r="6" fill="#c9a76e"/>
<circle cx="278" cy="1180" r="16" fill="#2b2532"/>
<circle cx="278" cy="1180" r="6" fill="#c9a76e"/>

<rect x="672" y="1152" width="122" height="12" rx="3" fill="#a8854f"/>
<rect x="672" y="1152" width="122" height="4" rx="2" fill="#dcbd86"/>
<ellipse cx="709" cy="1154" rx="24" ry="6" fill="url(#italy-contact)"/>
<path d="M690 1114 l18 0 l2 28 l12 4 l0 12 l-32 0 Z" fill="#255c58"/>
<path d="M702 1114 l6 0 l2 28 l12 4 l0 12 l-12 0 l0 -14 Z" fill="#6bab9d"/>
<rect x="688" y="1152" width="36" height="8" rx="3" fill="#1f4442"/>
<ellipse cx="754" cy="1154" rx="26" ry="6" fill="url(#italy-contact)"/>
<g data-obj="boot">
<path d="M736 1104 l20 0 l2 32 l14 4 l0 14 l-36 0 Z" fill="#2f6b68"/>
<path d="M750 1104 l6 0 l2 32 l14 4 l0 14 l-14 0 l0 -16 Z" fill="#87c4b6"/>
<path d="M736 1104 l7 0 l1 36 l-8 14 Z" fill="#24504e"/>
<rect x="734" y="1146" width="40" height="8" rx="3" fill="#1f4442"/>
<rect x="734" y="1100" width="24" height="8" rx="3" fill="#3a6f6a"/>
</g>
<ellipse cx="658" cy="1180" rx="20" ry="5" fill="url(#italy-shadow)"/>
<path d="M640 1176 q4 -14 18 -14 q16 0 20 12 q-8 6 -22 6 q-12 0 -16 -4 Z" fill="#8b929b"/>
<path d="M658 1162 q16 0 20 12 q-7 5 -18 6 q12 -9 -2 -18 Z" fill="#bcc6cc"/>
<circle cx="663" cy="1160" r="6.5" fill="#a6b2ba"/>
<path d="M668 1160 l9 3 l-9 3 Z" fill="#d9a441"/>

<ellipse cx="368" cy="1194" rx="48" ry="10" fill="url(#italy-shadow)"/>
<g data-obj="olive-tree">
<path d="M342 1194 l52 0 l-6 -44 l-40 0 Z" fill="#a05a38"/>
<path d="M376 1150 l12 0 l6 44 l-14 0 Z" fill="#dfa079"/>
<path d="M342 1194 l10 0 l-4 -44 l-6 0 Z" fill="#8a4a2c"/>
<rect x="336" y="1142" width="64" height="11" rx="3" fill="#8e4d2f"/>
<rect x="336" y="1142" width="64" height="4" rx="2" fill="#c98a62"/>
<rect x="362" y="1124" width="10" height="20" fill="#7a4a36"/>
<circle cx="352" cy="1132" r="12" fill="#3d7a48"/>
<circle cx="384" cy="1130" r="13" fill="#5fa068"/>
<circle cx="368" cy="1120" r="13" fill="#6cb06a"/>
<circle cx="373" cy="1115" r="6" fill="#96cf8e" opacity="0.7"/>
<circle cx="358" cy="1127" r="3" fill="#33303f"/>
<circle cx="377" cy="1123" r="3" fill="#33303f"/>
</g>
<ellipse cx="424" cy="1192" rx="26" ry="6" fill="url(#italy-contact)"/>
<g data-obj="ball">
<circle cx="424" cy="1172" r="20" fill="#ddd3bf"/>
<path d="M424 1152 a20 20 0 0 1 20 20 a20 20 0 0 1 -7 14 a15 15 0 0 0 -13 -34 Z" fill="#fffaf0"/>
<path d="M424 1153 l9 13 l-9 11 l-9 -11 Z" fill="#35509c"/>
<path d="M444 1168 l-9 7 l5 11 Z" fill="#3f6bbf"/>
<path d="M404 1168 l9 7 l-5 11 Z" fill="#35509c"/>
<path d="M424 1192 l-7 -11 l14 0 Z" fill="#3f6bbf"/>
</g>

<ellipse cx="530" cy="1194" rx="126" ry="16" fill="url(#italy-shadow)"/>
<rect x="520" y="1140" width="20" height="52" rx="5" fill="#6b432d"/>
<rect x="531" y="1140" width="9" height="52" rx="4" fill="#a8764f"/>
<ellipse cx="530" cy="1194" rx="46" ry="10" fill="#5a3524"/>
<ellipse cx="530" cy="1188" rx="46" ry="10" fill="#8a5a3f"/>
<ellipse cx="530" cy="1138" rx="100" ry="24" fill="#bd9080"/>
<ellipse cx="530" cy="1130" rx="100" ry="24" fill="#ece4d2"/>
<ellipse cx="548" cy="1126" rx="74" ry="17" fill="#fffaf0"/>
<path d="M430 1130 q100 30 200 0 l0 9 q-100 30 -200 0 Z" fill="#c8382f" opacity="0.3"/>
<g transform="translate(438 1086) scale(0.62)">
<ellipse cx="40" cy="56" rx="42" ry="11" fill="#cec3ae"/>
<ellipse cx="40" cy="52" rx="42" ry="11" fill="#fdf8ee"/>
<path d="M16 20 q0 -8 24 -8 q24 0 24 8 l-4 26 q-2 8 -20 8 q-18 0 -20 -8 Z" fill="#e4dbc8"/>
<path d="M40 12 q24 0 24 8 l-4 26 q-2 8 -20 8 q10 -8 10 -22 q0 -14 -10 -20 Z" fill="#ffffff"/>
<ellipse cx="40" cy="20" rx="24" ry="8" fill="#e8dfcd"/>
<ellipse cx="40" cy="20" rx="18" ry="6" fill="#5c3a24"/>
</g>
<g transform="translate(568 1084) scale(0.66)">
<ellipse cx="40" cy="56" rx="42" ry="11" fill="#b6c3c8"/>
<ellipse cx="40" cy="52" rx="42" ry="11" fill="#dfe9e8"/>
<path d="M16 20 q0 -8 24 -8 q24 0 24 8 l-4 26 q-2 8 -20 8 q-18 0 -20 -8 Z" fill="#e4dbc8"/>
<path d="M40 12 q24 0 24 8 l-4 26 q-2 8 -20 8 q10 -8 10 -22 q0 -14 -10 -20 Z" fill="#ffffff"/>
<ellipse cx="40" cy="20" rx="24" ry="8" fill="#f7efdd"/>
<path d="M30 19 q10 6 20 0" fill="none" stroke="#c9a76e" stroke-width="3"/>
<path d="M64 22 q16 0 16 10 q0 10 -14 12" fill="none" stroke="#fdf8ee" stroke-width="7" stroke-linecap="round"/>
</g>
<ellipse cx="522" cy="1130" rx="30" ry="7" fill="url(#italy-contact)"/>
<g data-obj="espresso-cup" transform="translate(486 1078) scale(0.75)">
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
<ellipse cx="484" cy="1194" rx="30" ry="6" fill="url(#italy-shadow)"/>
<g data-obj="mouse">
<path d="M458 1194 q2 -14 18 -14 q18 0 20 14 Z" fill="#71767f"/>
<path d="M476 1180 q18 0 20 14 l-14 0 q4 -10 -6 -14 Z" fill="#b4c0c8"/>
<circle cx="492" cy="1182" r="6" fill="#8f959f"/>
<circle cx="484" cy="1178" r="6" fill="#c4ced4"/>
<circle cx="495" cy="1181" r="1.8" fill="#3a3140"/>
<path d="M458 1190 q-12 -2 -14 -10" fill="none" stroke="#8a8f9c" stroke-width="3"/>
</g>

<path d="M0 1200 L800 1200 L800 1178 q-200 16 -400 4 q-200 -12 -400 6 Z" fill="#8a6a48" opacity="0.26"/>
</svg>`
});
