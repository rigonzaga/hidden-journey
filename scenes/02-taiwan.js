window.SCENES = window.SCENES || [];
window.SCENES.push({
  id: 'taiwan',
  order: 2,
  country: 'Taiwan',
  flag: '🇹🇼',
  title: 'Taipei Night Market',
  caption: 'Night markets and bubble tea for two.',
  stamp: '🏮',
  objects: [
    { id: 'lightstick', name: 'Lightstick' },
    { id: 'purple-heart', name: 'Purple Heart' },
    { id: 'bubble-tea', name: 'Bubble Tea' },
    { id: 'fruit-crate', name: 'Fruit Crate' },
    { id: 'scooter-seat', name: 'Seat' },
    { id: 'stray-cat', name: 'Stray Cat' },
    { id: 'dark-jar', name: 'Dark Jar' },
    { id: 'skewer-cup', name: 'Skewer Cup' },
    { id: 'wall-clock', name: 'Wall Clock' },
    { id: 'hang-basket', name: 'Hung Basket' },
    { id: 'billboard', name: 'Billboard' },
    { id: 'headlight', name: 'Headlight' },
    { id: 'paper-plane', name: 'Paper Plane' },
    { id: 'takeout-box', name: 'Takeout Box' },
    { id: 'pagoda-top', name: 'Pagoda Top' },
    { id: 'round-pot', name: 'Round Pot' },
    { id: 'pinwheel', name: 'Pinwheel' },
    { id: 'lucky-knot', name: 'Lucky Knot' },
    { id: 'wheel', name: 'Wheel' },
    { id: 'chalkboard', name: 'Chalkboard' },
    { id: 'straw-hat', name: 'Straw Hat' },
    { id: 'bulb-cage', name: 'Bulb Cage' },
    { id: 'cabbages', name: 'Cabbages' },
    { id: 'water-tank', name: 'Water Tank' },
    { id: 'hand-bell', name: 'Hand Bell' },
    { id: 'rice-sack', name: 'Rice Sack' },
    { id: 'coin-purse', name: 'Coin Purse' },
    { id: 'extinguisher', name: 'Extinguisher' },
    { id: 'pineapple-cake', name: 'Pineapple Cake' },
    { id: 'poster', name: 'Poster' },
    { id: 'neon-bars', name: 'Neon Bars' },
    { id: 'broom', name: 'Broom' },
    { id: 'umbrella', name: 'Umbrella' },
    { id: 'laundry', name: 'Laundry' },
    { id: 'red-apples', name: 'Red Apples' },
    { id: 'folding-fan', name: 'Folding Fan' },
    { id: 'kettle', name: 'Kettle' },
    { id: 'scallions', name: 'Scallions' },
    { id: 'red-lantern', name: 'Red Lantern' },
    { id: 'roof-cat', name: 'Roof Cat' },
    { id: 'swallow-kite', name: 'Kite' },
    { id: 'manhole', name: 'Manhole' },
    { id: 'shop-cat', name: 'Shop Cat' },
    { id: 'xiaolongbao', name: 'Dumpling Basket' },
    { id: 'cleaver', name: 'Cleaver' },
    { id: 'sauce-bottle', name: 'Sauce Bottle' },
    { id: 'moon', name: 'Moon' },
    { id: 'mouse', name: 'Mouse' },
    { id: 'sky-lantern', name: 'Sky Lantern' },
    { id: 'traffic-light', name: 'Signal' }
  ],
  svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 1200">
<defs>
<linearGradient id="taiwan-sky" x1="0" y1="0" x2="0" y2="1">
<stop offset="0" stop-color="#05081c"/>
<stop offset="0.42" stop-color="#121a44"/>
<stop offset="0.78" stop-color="#2a2a63"/>
<stop offset="1" stop-color="#453362"/>
</linearGradient>
<linearGradient id="taiwan-haze" x1="0" y1="0" x2="0" y2="1">
<stop offset="0" stop-color="#ffb26a" stop-opacity="0"/>
<stop offset="1" stop-color="#ffb26a" stop-opacity="0.2"/>
</linearGradient>
<linearGradient id="taiwan-underawn" x1="0" y1="0" x2="0" y2="1">
<stop offset="0" stop-color="#07091c" stop-opacity="0.62"/>
<stop offset="1" stop-color="#07091c" stop-opacity="0"/>
</linearGradient>
<radialGradient id="taiwan-cast">
<stop offset="0" stop-color="#050718" stop-opacity="0.55"/>
<stop offset="0.6" stop-color="#050718" stop-opacity="0.24"/>
<stop offset="1" stop-color="#050718" stop-opacity="0"/>
</radialGradient>
<radialGradient id="taiwan-moonglow">
<stop offset="0" stop-color="#fff6d8" stop-opacity="0.5"/>
<stop offset="0.45" stop-color="#ffe9b4" stop-opacity="0.15"/>
<stop offset="1" stop-color="#ffe9b4" stop-opacity="0"/>
</radialGradient>
<radialGradient id="taiwan-moonface" fx="0.34" fy="0.3">
<stop offset="0" stop-color="#fffdf3"/>
<stop offset="0.55" stop-color="#f7e6b8"/>
<stop offset="1" stop-color="#d6bc88"/>
</radialGradient>
<radialGradient id="taiwan-lanternglow">
<stop offset="0" stop-color="#ff9a4a" stop-opacity="0.55"/>
<stop offset="0.5" stop-color="#ff8a4a" stop-opacity="0.19"/>
<stop offset="1" stop-color="#ff8a4a" stop-opacity="0"/>
</radialGradient>
<radialGradient id="taiwan-warmglow">
<stop offset="0" stop-color="#ffcf85" stop-opacity="0.4"/>
<stop offset="0.5" stop-color="#ffc06e" stop-opacity="0.15"/>
<stop offset="1" stop-color="#ffc06e" stop-opacity="0"/>
</radialGradient>
<radialGradient id="taiwan-skyglow">
<stop offset="0" stop-color="#ffd8a0" stop-opacity="0.6"/>
<stop offset="0.5" stop-color="#ffbe6e" stop-opacity="0.2"/>
<stop offset="1" stop-color="#ffbe6e" stop-opacity="0"/>
</radialGradient>
<radialGradient id="taiwan-neonglow">
<stop offset="0" stop-color="#c78dff" stop-opacity="0.6"/>
<stop offset="0.5" stop-color="#b47cff" stop-opacity="0.2"/>
<stop offset="1" stop-color="#b47cff" stop-opacity="0"/>
</radialGradient>
<radialGradient id="taiwan-cyanglow">
<stop offset="0" stop-color="#8ff0fb" stop-opacity="0.55"/>
<stop offset="0.5" stop-color="#38c6d9" stop-opacity="0.18"/>
<stop offset="1" stop-color="#38c6d9" stop-opacity="0"/>
</radialGradient>
<radialGradient id="taiwan-purpleglow">
<stop offset="0" stop-color="#d5bcff" stop-opacity="0.7"/>
<stop offset="0.5" stop-color="#a86cf0" stop-opacity="0.24"/>
<stop offset="1" stop-color="#a86cf0" stop-opacity="0"/>
</radialGradient>
<radialGradient id="taiwan-bulbglow">
<stop offset="0" stop-color="#fff3cf" stop-opacity="0.85"/>
<stop offset="0.4" stop-color="#ffdc94" stop-opacity="0.28"/>
<stop offset="1" stop-color="#ffdc94" stop-opacity="0"/>
</radialGradient>
<linearGradient id="taiwan-lantbody" x1="0" y1="0" x2="1" y2="0">
<stop offset="0" stop-color="#ff9a72"/>
<stop offset="0.34" stop-color="#e8412f"/>
<stop offset="0.78" stop-color="#8c1f1a"/>
<stop offset="1" stop-color="#c2402c"/>
</linearGradient>
<linearGradient id="taiwan-paperlant" x1="0" y1="0" x2="1" y2="0">
<stop offset="0" stop-color="#ffeabb"/>
<stop offset="0.4" stop-color="#f6a942"/>
<stop offset="0.86" stop-color="#a85419"/>
<stop offset="1" stop-color="#e08a3c"/>
</linearGradient>
<linearGradient id="taiwan-teafill" x1="0" y1="0" x2="1" y2="0">
<stop offset="0" stop-color="#e8c396"/>
<stop offset="0.45" stop-color="#b97a49"/>
<stop offset="0.86" stop-color="#7a4526"/>
<stop offset="1" stop-color="#a9683c"/>
</linearGradient>
<linearGradient id="taiwan-jade" x1="0" y1="0" x2="1" y2="0">
<stop offset="0" stop-color="#a6ecc9"/>
<stop offset="0.42" stop-color="#3fae86"/>
<stop offset="0.86" stop-color="#14543f"/>
<stop offset="1" stop-color="#3a9a76"/>
</linearGradient>
<linearGradient id="taiwan-crate" x1="0" y1="0" x2="1" y2="0">
<stop offset="0" stop-color="#b8804a"/>
<stop offset="0.4" stop-color="#7c4b2a"/>
<stop offset="0.86" stop-color="#452817"/>
<stop offset="1" stop-color="#6d4326"/>
</linearGradient>
<linearGradient id="taiwan-cratetop" x1="0" y1="0" x2="0" y2="1">
<stop offset="0" stop-color="#dcaa6e"/>
<stop offset="1" stop-color="#96602f"/>
</linearGradient>
<linearGradient id="taiwan-metal" x1="0" y1="0" x2="1" y2="0">
<stop offset="0" stop-color="#e9eff7"/>
<stop offset="0.4" stop-color="#9aa6b6"/>
<stop offset="0.86" stop-color="#3f4859"/>
<stop offset="1" stop-color="#7d8899"/>
</linearGradient>
<linearGradient id="taiwan-steel" x1="0" y1="0" x2="1" y2="0">
<stop offset="0" stop-color="#77839f"/>
<stop offset="0.45" stop-color="#39435a"/>
<stop offset="0.86" stop-color="#1a212e"/>
<stop offset="1" stop-color="#4d576b"/>
</linearGradient>
<linearGradient id="taiwan-lacquer" x1="0" y1="0" x2="1" y2="0">
<stop offset="0" stop-color="#ff8f6e"/>
<stop offset="0.4" stop-color="#c0392b"/>
<stop offset="0.86" stop-color="#6b1611"/>
<stop offset="1" stop-color="#b0362a"/>
</linearGradient>
<linearGradient id="taiwan-cream" x1="0" y1="0" x2="1" y2="0">
<stop offset="0" stop-color="#fff9ec"/>
<stop offset="0.45" stop-color="#e6d0b0"/>
<stop offset="0.86" stop-color="#a68a64"/>
<stop offset="1" stop-color="#d8bf9c"/>
</linearGradient>
<linearGradient id="taiwan-bamboo" x1="0" y1="0" x2="1" y2="0">
<stop offset="0" stop-color="#f2d8a6"/>
<stop offset="0.42" stop-color="#c9a069"/>
<stop offset="0.86" stop-color="#7c5830"/>
<stop offset="1" stop-color="#b98f57"/>
</linearGradient>
<linearGradient id="taiwan-sack" x1="0" y1="0" x2="1" y2="0">
<stop offset="0" stop-color="#cbb48c"/>
<stop offset="0.45" stop-color="#8a7457"/>
<stop offset="0.86" stop-color="#4c3f2c"/>
<stop offset="1" stop-color="#7c684d"/>
</linearGradient>
<linearGradient id="taiwan-plum" x1="0" y1="0" x2="1" y2="0">
<stop offset="0" stop-color="#584c7c"/>
<stop offset="0.45" stop-color="#2b2440"/>
<stop offset="0.86" stop-color="#13101f"/>
<stop offset="1" stop-color="#3d3358"/>
</linearGradient>
<linearGradient id="taiwan-amethyst" x1="0" y1="0" x2="1" y2="0">
<stop offset="0" stop-color="#dcc7ff"/>
<stop offset="0.42" stop-color="#8a5ade"/>
<stop offset="0.86" stop-color="#40237a"/>
<stop offset="1" stop-color="#7d51cf"/>
</linearGradient>
<linearGradient id="taiwan-bldgfar" x1="0" y1="0" x2="0" y2="1">
<stop offset="0" stop-color="#1a2149"/>
<stop offset="1" stop-color="#2b3468"/>
</linearGradient>
<linearGradient id="taiwan-bldgmid" x1="0" y1="0" x2="1" y2="0">
<stop offset="0" stop-color="#242c5e"/>
<stop offset="0.6" stop-color="#171d45"/>
<stop offset="1" stop-color="#0f1435"/>
</linearGradient>
<linearGradient id="taiwan-stallback" x1="0" y1="0" x2="0" y2="1">
<stop offset="0" stop-color="#0d1130"/>
<stop offset="0.55" stop-color="#181e46"/>
<stop offset="1" stop-color="#2c2a5c"/>
</linearGradient>
<linearGradient id="taiwan-awnred" x1="0" y1="0" x2="0" y2="1">
<stop offset="0" stop-color="#ea6a4c"/>
<stop offset="0.5" stop-color="#c0392b"/>
<stop offset="1" stop-color="#87201a"/>
</linearGradient>
<linearGradient id="taiwan-awngreen" x1="0" y1="0" x2="0" y2="1">
<stop offset="0" stop-color="#5fd0a4"/>
<stop offset="0.5" stop-color="#2e9c78"/>
<stop offset="1" stop-color="#155442"/>
</linearGradient>
<linearGradient id="taiwan-awnorange" x1="0" y1="0" x2="0" y2="1">
<stop offset="0" stop-color="#f9834a"/>
<stop offset="0.5" stop-color="#d94f2b"/>
<stop offset="1" stop-color="#8e2f14"/>
</linearGradient>
<linearGradient id="taiwan-awnteal" x1="0" y1="0" x2="0" y2="1">
<stop offset="0" stop-color="#4fc7a2"/>
<stop offset="0.5" stop-color="#1f8f6c"/>
<stop offset="1" stop-color="#0f4436"/>
</linearGradient>
<linearGradient id="taiwan-counter" x1="0" y1="0" x2="0" y2="1">
<stop offset="0" stop-color="#e0a86c"/>
<stop offset="0.3" stop-color="#a26a3e"/>
<stop offset="1" stop-color="#57331e"/>
</linearGradient>
<linearGradient id="taiwan-ground" x1="0" y1="0" x2="0" y2="1">
<stop offset="0" stop-color="#241f4c"/>
<stop offset="0.5" stop-color="#2f2a5c"/>
<stop offset="1" stop-color="#3a3268"/>
</linearGradient>
<linearGradient id="taiwan-glass" x1="0" y1="0" x2="1" y2="0">
<stop offset="0" stop-color="#ffffff" stop-opacity="0.5"/>
<stop offset="0.35" stop-color="#ffffff" stop-opacity="0.06"/>
<stop offset="1" stop-color="#ffffff" stop-opacity="0.2"/>
</linearGradient>
<linearGradient id="taiwan-post" x1="0" y1="0" x2="1" y2="0">
<stop offset="0" stop-color="#6b533c"/>
<stop offset="0.5" stop-color="#3d3026"/>
<stop offset="1" stop-color="#241c15"/>
</linearGradient>
<linearGradient id="taiwan-panel" x1="0" y1="0" x2="0" y2="1">
<stop offset="0" stop-color="#0a0d24"/>
<stop offset="1" stop-color="#1a1a3e"/>
</linearGradient>
</defs>

<rect x="0" y="0" width="800" height="1200" fill="#0b0f28"/>
<rect x="0" y="0" width="800" height="500" fill="url(#taiwan-sky)"/>
<rect x="0" y="290" width="800" height="210" fill="url(#taiwan-haze)"/>

<circle cx="60" cy="44" r="1.7" fill="#dfe4ff" opacity="0.8"/>
<circle cx="250" cy="52" r="1.3" fill="#dfe4ff" opacity="0.6"/>
<circle cx="336" cy="104" r="1.1" fill="#dfe4ff" opacity="0.5"/>
<circle cx="452" cy="44" r="1.5" fill="#dfe4ff" opacity="0.7"/>
<circle cx="556" cy="86" r="1.2" fill="#dfe4ff" opacity="0.55"/>
<circle cx="760" cy="120" r="1.6" fill="#dfe4ff" opacity="0.7"/>
<circle cx="96" cy="236" r="1.2" fill="#dfe4ff" opacity="0.5"/>
<circle cx="392" cy="248" r="1.3" fill="#dfe4ff" opacity="0.55"/>

<ellipse cx="648" cy="88" rx="164" ry="140" fill="url(#taiwan-moonglow)" pointer-events="none"/>
<circle cx="648" cy="88" r="74" fill="url(#taiwan-moonglow)" pointer-events="none" opacity="0.75"/>
<g data-obj="moon">
<circle cx="648" cy="88" r="36" fill="url(#taiwan-moonface)"/>
<path d="M648,52 a36,36 0 0 1 0,72 a30,36 0 0 0 0,-72 Z" fill="#c8ad7c" opacity="0.35"/>
<circle cx="648" cy="88" r="35" fill="none" stroke="#fffaea" stroke-width="1.5" opacity="0.45"/>
<ellipse cx="636" cy="77" rx="6.5" ry="5.5" fill="#dcc38f" opacity="0.75"/>
<ellipse cx="635" cy="75.5" rx="5" ry="3.6" fill="#f4e3b7" opacity="0.5"/>
<ellipse cx="661" cy="100" rx="5" ry="4.2" fill="#d2b47f" opacity="0.7"/>
<ellipse cx="643" cy="104" rx="3.2" ry="2.6" fill="#d2b47f" opacity="0.6"/>
</g>

<path d="M150,190 Q142,272 126,372" stroke="#5a628f" stroke-width="1.2" fill="none" opacity="0.65"/>
<ellipse cx="150" cy="164" rx="54" ry="50" fill="url(#taiwan-cyanglow)" pointer-events="none" opacity="0.3"/>
<g data-obj="swallow-kite">
<path d="M150,134 L178,150 L156,156 L150,174 L144,156 L122,150 Z" fill="#2ba7ba"/>
<path d="M150,134 L156,156 L150,174 L144,156 Z" fill="#7de8f5"/>
<path d="M150,134 L144,156 L122,150 Z" fill="#49d3e4"/>
<path d="M150,134 L178,150 L156,156 Z" fill="#1c8496"/>
<path d="M150,134 L122,150 M150,134 L178,150" stroke="#a8f4fb" stroke-width="1.2" opacity="0.7" fill="none"/>
<path d="M150,174 q7,10 -1,16 q10,-2 12,-12" stroke="#f2b23c" stroke-width="2.4" fill="none"/>
<path d="M150,174 l0,16" stroke="#3a3f6b" stroke-width="1.4" fill="none"/>
</g>
<path d="M304,120 L316,126 L306,130 L304,137 L302,130 L292,126 Z" fill="#2f5f80" opacity="0.4"/>
<path d="M304,137 Q300,168 296,196" stroke="#4a5280" stroke-width="0.9" fill="none" opacity="0.35"/>

<ellipse cx="416" cy="176" rx="58" ry="54" fill="url(#taiwan-skyglow)" pointer-events="none" opacity="0.55"/>
<g data-obj="sky-lantern" transform="translate(392 146)">
<path d="M7,13 Q24,0 41,13 L45,45 Q24,57 3,45 Z" fill="url(#taiwan-paperlant)"/>
<path d="M7,13 Q24,0 24,3 L24,55 Q13,52 3,45 Z" fill="#ffe6ae" opacity="0.55"/>
<path d="M41,13 L45,45 Q37,52 30,54 L30,6 Z" fill="#9c4a14" opacity="0.45"/>
<path d="M11,5 L7,50" stroke="#fff4d6" stroke-width="1.7" fill="none" opacity="0.8"/>
<path d="M37,6 L41,50" stroke="#ffb86a" stroke-width="1.4" fill="none" opacity="0.6"/>
<path d="M7,13 Q24,0 41,13" stroke="#fff4d6" stroke-width="1.6" fill="none" opacity="0.7"/>
<ellipse cx="24" cy="47" rx="17" ry="5" fill="#8e4413"/>
<ellipse cx="24" cy="44" rx="8" ry="10" fill="#ffeec0"/>
<ellipse cx="24" cy="45" rx="3.4" ry="6" fill="#fffdf2"/>
</g>

<ellipse cx="524" cy="130" rx="50" ry="48" fill="url(#taiwan-skyglow)" pointer-events="none" opacity="0.45"/>
<path d="M507,112 Q524,99 541,112 L545,142 Q524,154 503,142 Z" fill="url(#taiwan-paperlant)"/>
<path d="M507,112 Q524,99 524,102 L524,152 Q514,149 503,142 Z" fill="#ffdc96" opacity="0.55"/>
<ellipse cx="524" cy="144" rx="16" ry="4.5" fill="#8e4413"/>
<ellipse cx="524" cy="141" rx="6" ry="7" fill="#fff2c4"/>

<ellipse cx="576" cy="212" rx="52" ry="48" fill="url(#taiwan-skyglow)" pointer-events="none" opacity="0.42"/>
<path d="M558,194 Q576,182 594,194 L598,220 Q576,231 554,220 Z" fill="url(#taiwan-paperlant)"/>
<path d="M558,194 Q576,182 576,185 L576,229 Q566,226 554,220 Z" fill="#ffdc96" opacity="0.5"/>
<ellipse cx="576" cy="222" rx="15" ry="4.2" fill="#8e4413"/>
<ellipse cx="576" cy="219" rx="5.5" ry="6.5" fill="#fff2c4"/>

<ellipse cx="140" cy="330" rx="150" ry="20" fill="#1c2358" opacity="0.4"/>
<ellipse cx="640" cy="342" rx="170" ry="18" fill="#1c2358" opacity="0.36"/>

<rect x="0" y="352" width="70" height="118" fill="url(#taiwan-bldgfar)"/>
<rect x="0" y="352" width="70" height="6" fill="#2f3a76" opacity="0.6"/>
<rect x="62" y="312" width="54" height="158" fill="url(#taiwan-bldgfar)" opacity="0.85"/>
<rect x="62" y="312" width="4" height="158" fill="#37417d" opacity="0.6"/>
<rect x="112" y="372" width="80" height="98" fill="url(#taiwan-bldgfar)"/>
<rect x="112" y="372" width="80" height="6" fill="#2f3a76" opacity="0.55"/>
<rect x="188" y="330" width="46" height="140" fill="url(#taiwan-bldgfar)" opacity="0.85"/>
<rect x="188" y="330" width="4" height="140" fill="#37417d" opacity="0.55"/>
<rect x="230" y="357" width="96" height="113" fill="url(#taiwan-bldgfar)"/>
<rect x="230" y="357" width="96" height="6" fill="#2f3a76" opacity="0.6"/>
<rect x="320" y="317" width="60" height="153" fill="url(#taiwan-bldgfar)" opacity="0.9"/>
<rect x="320" y="317" width="4" height="153" fill="#37417d" opacity="0.55"/>
<rect x="376" y="364" width="110" height="106" fill="url(#taiwan-bldgfar)"/>
<rect x="528" y="348" width="86" height="122" fill="url(#taiwan-bldgfar)"/>
<rect x="608" y="322" width="70" height="148" fill="url(#taiwan-bldgfar)" opacity="0.88"/>
<rect x="608" y="322" width="4" height="148" fill="#37417d" opacity="0.55"/>
<rect x="726" y="340" width="74" height="130" fill="url(#taiwan-bldgfar)"/>
<rect x="726" y="340" width="4" height="130" fill="#37417d" opacity="0.5"/>

<rect x="506" y="312" width="38" height="158" fill="url(#taiwan-bldgmid)"/>
<rect x="506" y="312" width="5" height="158" fill="#3a4382" opacity="0.55"/>
<path d="M508,308 L542,308 L546,294 L504,294 Z" fill="#20285a"/>
<path d="M508,290 L542,290 L546,276 L504,276 Z" fill="#171d47"/>
<path d="M508,272 L542,272 L546,258 L504,258 Z" fill="#20285a"/>
<path d="M508,254 L542,254 L546,240 L504,240 Z" fill="#171d47"/>
<g data-obj="pagoda-top">
<path d="M508,236 L542,236 L546,222 L504,222 Z" fill="#242d63"/>
<path d="M508,236 L525,236 L525,222 L504,222 Z" fill="#333d7c"/>
<path d="M510,218 L540,218 L544,204 L506,204 Z" fill="#1b2250"/>
<path d="M510,218 L525,218 L525,204 L506,204 Z" fill="#2a3369"/>
<path d="M513,204 L537,204 L534,194 L516,194 Z" fill="#39428a"/>
<path d="M521,194 l8,0 l0,-6 l-8,0 Z" fill="#4b559f"/>
<path d="M504,222 L546,222" stroke="#4e58a8" stroke-width="1.3" opacity="0.6" fill="none"/>
</g>
<circle cx="525" cy="186" r="14" fill="url(#taiwan-warmglow)" pointer-events="none"/>

<rect x="240" y="356" width="4" height="30" fill="#141a3c"/>
<rect x="330" y="356" width="4" height="30" fill="#141a3c"/>
<path d="M242,358 q46,8 90,0" stroke="#3a4272" stroke-width="1.5" fill="none"/>
<ellipse cx="286" cy="388" rx="46" ry="6" fill="url(#taiwan-cast)" opacity="0.7"/>
<g data-obj="laundry">
<path d="M254,360 l18,0 l6,8 l-5,3 l-3,-3 l0,20 l-14,0 l0,-20 l-3,3 l-5,-3 Z" fill="#4a5480"/>
<path d="M254,360 l9,0 l0,31 l-5,0 l0,-20 l-3,3 l-5,-3 Z" fill="#6a76a6"/>
<path d="M272,360 l6,8 l-5,3 l-3,-3 l0,20 l-4,0 l0,-28 Z" fill="#333c66"/>
<path d="M290,359 l16,0 l5,7 l-4,3 l-3,-2 l0,18 l-12,0 l0,-18 l-3,2 l-4,-3 Z" fill="#5f6a99"/>
<path d="M290,359 l8,0 l0,26 l-4,0 l0,-18 l-3,2 l-4,-3 Z" fill="#7d88b8"/>
<circle cx="256" cy="359" r="2" fill="#c3cbe0"/>
<circle cx="306" cy="358" r="2" fill="#c3cbe0"/>
</g>

<ellipse cx="264" cy="357" rx="26" ry="5" fill="url(#taiwan-cast)" opacity="0.8"/>
<rect x="246" y="349" width="36" height="8" rx="2" fill="#121838"/>
<g data-obj="water-tank">
<rect x="246" y="315" width="36" height="20" rx="4" fill="#1a2149"/>
<rect x="246" y="315" width="9" height="20" rx="4" fill="#333d7f" opacity="0.7"/>
<ellipse cx="264" cy="315" rx="18" ry="5.5" fill="#2b3468"/>
<ellipse cx="260" cy="314" rx="10" ry="3" fill="#414c94" opacity="0.7"/>
<rect x="262" y="301" width="4" height="14" fill="#1a2149"/>
<path d="M250,335 l-2,14 M278,335 l2,14" stroke="#141a3c" stroke-width="3.4" fill="none"/>
</g>

<rect x="-10" y="404" width="140" height="88" fill="url(#taiwan-bldgmid)"/>
<rect x="-10" y="404" width="140" height="7" fill="#2f3872" opacity="0.7"/>
<rect x="120" y="426" width="110" height="66" fill="#161b41"/>
<rect x="120" y="426" width="110" height="6" fill="#2a3268" opacity="0.6"/>
<rect x="220" y="386" width="150" height="106" fill="url(#taiwan-bldgmid)"/>
<rect x="220" y="386" width="150" height="7" fill="#2f3872" opacity="0.65"/>
<rect x="356" y="416" width="120" height="76" fill="#161b41"/>
<rect x="356" y="416" width="120" height="6" fill="#2a3268" opacity="0.6"/>
<rect x="460" y="398" width="130" height="94" fill="url(#taiwan-bldgmid)"/>
<rect x="460" y="398" width="130" height="7" fill="#2f3872" opacity="0.6"/>
<rect x="576" y="428" width="110" height="64" fill="#161b41"/>
<rect x="672" y="394" width="140" height="98" fill="url(#taiwan-bldgmid)"/>
<rect x="672" y="394" width="140" height="7" fill="#2f3872" opacity="0.6"/>

<ellipse cx="420" cy="418" rx="30" ry="5" fill="url(#taiwan-cast)" opacity="0.8"/>
<path d="M404,410 l0,7 M436,410 l0,7" stroke="#131940" stroke-width="4" fill="none"/>
<g data-obj="billboard">
<rect x="398" y="376" width="44" height="34" rx="2" fill="#171e46"/>
<rect x="398" y="376" width="44" height="6" rx="2" fill="#2c3573"/>
<rect x="398" y="376" width="4" height="34" fill="#38428c" opacity="0.7"/>
<rect x="404" y="386" width="15" height="15" rx="2" fill="#b47cff" opacity="0.8"/>
<rect x="423" y="387" width="13" height="13" rx="2" fill="#38c6d9" opacity="0.6"/>
</g>
<ellipse cx="420" cy="392" rx="42" ry="30" fill="url(#taiwan-neonglow)" pointer-events="none" opacity="0.35"/>

<ellipse cx="524" cy="399" rx="28" ry="5" fill="url(#taiwan-cast)" opacity="0.85"/>
<g data-obj="roof-cat">
<path d="M508,398 q0,-24 14,-26 q14,2 14,26 Z" fill="#181d3a"/>
<path d="M522,372 q14,2 14,26 l-8,0 q0,-22 -6,-26 Z" fill="#0f1329"/>
<path d="M508,398 q0,-24 14,-26 q-6,6 -7,26 Z" fill="#2c3460"/>
<path d="M512,374 l4,-10 l6,7 Z" fill="#232a4e"/>
<path d="M532,374 l4,-10 l4,9 Z" fill="#181d3a"/>
<path d="M536,398 q14,-6 18,4" stroke="#181d3a" stroke-width="4" fill="none" stroke-linecap="round"/>
<circle cx="518" cy="378" r="2.2" fill="#ffd08a"/>
<circle cx="530" cy="378" r="2.2" fill="#ffd08a"/>
<path d="M509,374 q6,-24 13,-26" stroke="#4a548a" stroke-width="1.3" fill="none" opacity="0.7"/>
</g>

<rect x="700" y="370" width="38" height="24" rx="3" fill="#141a3e"/>
<rect x="700" y="370" width="38" height="6" rx="3" fill="#252e63"/>
<rect x="756" y="322" width="26" height="18" fill="#141a3e"/>
<rect x="756" y="322" width="6" height="18" fill="#2b3468" opacity="0.6"/>
<rect x="636" y="306" width="4" height="16" fill="#141a3e"/>
<path d="M638,310 l-12,-5 M638,310 l12,-5 M638,316 l-9,-4 M638,316 l9,-4" stroke="#1c2450" stroke-width="1.8" fill="none"/>
<rect x="40" y="392" width="30" height="12" rx="3" fill="#141a3e"/>

<rect x="14" y="366" width="5" height="7" fill="#ffd98a" opacity="0.5"/>
<rect x="70" y="326" width="5" height="7" fill="#ffd98a" opacity="0.55"/>
<rect x="124" y="386" width="5" height="7" fill="#ffd98a" opacity="0.45"/>
<rect x="200" y="344" width="5" height="7" fill="#ffd98a" opacity="0.45"/>
<rect x="330" y="330" width="5" height="7" fill="#ffd98a" opacity="0.5"/>
<rect x="390" y="378" width="5" height="7" fill="#ffd98a" opacity="0.45"/>
<rect x="492" y="348" width="5" height="7" fill="#ffd98a" opacity="0.5"/>
<rect x="620" y="336" width="5" height="7" fill="#ffd98a" opacity="0.55"/>
<rect x="748" y="356" width="5" height="7" fill="#ffd98a" opacity="0.5"/>
<circle cx="332.5" cy="333" r="8" fill="url(#taiwan-bulbglow)" pointer-events="none" opacity="0.5"/>
<circle cx="622.5" cy="339" r="8" fill="url(#taiwan-bulbglow)" pointer-events="none" opacity="0.5"/>
<rect x="64" y="434" width="6" height="8" fill="#ffcf7d" opacity="0.55"/>
<rect x="240" y="402" width="6" height="8" fill="#ffcf7d" opacity="0.6"/>
<rect x="404" y="440" width="6" height="8" fill="#ffcf7d" opacity="0.45"/>
<rect x="540" y="432" width="6" height="8" fill="#ffcf7d" opacity="0.5"/>
<rect x="692" y="408" width="6" height="8" fill="#ffcf7d" opacity="0.55"/>
<rect x="756" y="428" width="6" height="8" fill="#ffcf7d" opacity="0.5"/>
<circle cx="243" cy="406" r="9" fill="url(#taiwan-bulbglow)" pointer-events="none" opacity="0.45"/>
<circle cx="695" cy="412" r="9" fill="url(#taiwan-bulbglow)" pointer-events="none" opacity="0.45"/>

<rect x="18" y="306" width="12" height="254" fill="url(#taiwan-post)"/>
<rect x="18" y="306" width="4" height="254" fill="#7d6047" opacity="0.6"/>
<rect x="2" y="326" width="46" height="7" rx="2" fill="#4a3b2e"/>
<rect x="2" y="326" width="46" height="2.6" rx="1.3" fill="#7d6047"/>
<circle cx="8" cy="322" r="3" fill="#2a3161"/>
<circle cx="44" cy="322" r="3" fill="#2a3161"/>
<path d="M30,470 Q300,506 800,486" stroke="#2a2f57" stroke-width="3" fill="none"/>
<path d="M30,502 Q320,542 800,516" stroke="#2a2f57" stroke-width="3" fill="none"/>
<path d="M130,516 l10,0 l-5,12 Z" fill="#d94f2b" opacity="0.8"/>
<path d="M226,522 l10,0 l-5,12 Z" fill="#f2b23c" opacity="0.8"/>
<path d="M322,526 l10,0 l-5,12 Z" fill="#2e9c78" opacity="0.8"/>
<path d="M436,526 l10,0 l-5,12 Z" fill="#d94f2b" opacity="0.75"/>
<path d="M556,522 l10,0 l-5,12 Z" fill="#f2b23c" opacity="0.75"/>
<path d="M676,516 l10,0 l-5,12 Z" fill="#2e9c78" opacity="0.75"/>

<rect x="28" y="390" width="30" height="5" rx="2" fill="#3d3026"/>
<rect x="28" y="390" width="30" height="1.8" rx="0.9" fill="#7d6047"/>
<ellipse cx="54" cy="396" rx="18" ry="12" fill="#07091c" opacity="0.35"/>
<g data-obj="traffic-light">
<rect x="42" y="394" width="24" height="54" rx="6" fill="#161b41"/>
<rect x="42" y="394" width="7" height="54" rx="5" fill="#2b3369"/>
<rect x="42" y="394" width="24" height="5" rx="4" fill="#333c78"/>
<circle cx="54" cy="407" r="6" fill="#ff4a3c"/>
<circle cx="52" cy="405" r="2.6" fill="#ffb3a8" opacity="0.8"/>
<circle cx="54" cy="422" r="6" fill="#8a6b28" opacity="0.85"/>
<circle cx="54" cy="437" r="6" fill="#1f5c48" opacity="0.85"/>
<path d="M40,401 l28,0" stroke="#0f1436" stroke-width="2.4" fill="none"/>
</g>
<circle cx="54" cy="407" r="18" fill="url(#taiwan-lanternglow)" pointer-events="none" opacity="0.55"/>

<rect x="0" y="482" width="800" height="330" fill="#171c40"/>
<rect x="0" y="482" width="800" height="14" fill="#252c62" opacity="0.7"/>

<rect x="10" y="540" width="188" height="212" fill="url(#taiwan-stallback)"/>
<rect x="208" y="540" width="186" height="212" fill="url(#taiwan-stallback)"/>
<rect x="404" y="540" width="186" height="212" fill="url(#taiwan-stallback)"/>
<rect x="600" y="540" width="190" height="212" fill="url(#taiwan-stallback)"/>
<ellipse cx="104" cy="720" rx="112" ry="76" fill="url(#taiwan-warmglow)" pointer-events="none"/>
<ellipse cx="300" cy="720" rx="112" ry="76" fill="url(#taiwan-warmglow)" pointer-events="none" opacity="0.85"/>
<ellipse cx="496" cy="720" rx="112" ry="76" fill="url(#taiwan-warmglow)" pointer-events="none" opacity="0.9"/>
<ellipse cx="694" cy="720" rx="112" ry="76" fill="url(#taiwan-warmglow)" pointer-events="none" opacity="0.8"/>
<rect x="0" y="540" width="10" height="212" fill="url(#taiwan-post)"/>
<rect x="198" y="540" width="10" height="212" fill="url(#taiwan-post)"/>
<rect x="394" y="540" width="10" height="212" fill="url(#taiwan-post)"/>
<rect x="590" y="540" width="10" height="212" fill="url(#taiwan-post)"/>
<rect x="790" y="540" width="10" height="212" fill="url(#taiwan-post)"/>
<rect x="0" y="540" width="3.4" height="212" fill="#8a6a4c" opacity="0.5"/>
<rect x="198" y="540" width="3.4" height="212" fill="#8a6a4c" opacity="0.5"/>
<rect x="394" y="540" width="3.4" height="212" fill="#8a6a4c" opacity="0.5"/>
<rect x="590" y="540" width="3.4" height="212" fill="#8a6a4c" opacity="0.5"/>

<rect x="466" y="574" width="118" height="52" rx="6" fill="#0c1030" stroke="#2f8fa0" stroke-width="2"/>
<rect x="466" y="574" width="118" height="4" rx="2" fill="#1d5f76"/>
<ellipse cx="525" cy="600" rx="96" ry="60" fill="url(#taiwan-cyanglow)" pointer-events="none" opacity="0.5"/>
<g data-obj="neon-bars">
<path d="M488,588 l0,24 M504,584 l0,28 M520,592 l0,20 M536,586 l0,26" stroke="#38c6d9" stroke-width="4.4" fill="none" stroke-linecap="round"/>
<path d="M488,588 l0,24 M504,584 l0,28 M520,592 l0,20 M536,586 l0,26" stroke="#c8f8ff" stroke-width="1.5" fill="none" stroke-linecap="round" opacity="0.85"/>
<path d="M484,620 l56,0" stroke="#2fa8ba" stroke-width="3.4" fill="none" stroke-linecap="round"/>
</g>
<path d="M550,592 q10,-12 20,0 q10,12 20,0" stroke="#7de8f5" stroke-width="3" fill="none" stroke-linecap="round" opacity="0.9"/>

<ellipse cx="104" cy="614" rx="96" ry="52" fill="url(#taiwan-neonglow)" pointer-events="none" opacity="0.5"/>
<rect x="34" y="576" width="140" height="52" rx="7" fill="#100c30" stroke="#8e5ad6" stroke-width="2.2"/>
<rect x="34" y="576" width="140" height="4" rx="2" fill="#3a2f78"/>
<path d="M46,614 q9,-11 18,0 q9,11 18,0 q9,-11 18,0" stroke="#b47cff" stroke-width="3.2" fill="none" stroke-linecap="round"/>
<path d="M118,586 l0,14 M126,582 l0,20 M134,588 l0,12" stroke="#c9a4ff" stroke-width="3" fill="none" stroke-linecap="round"/>
<path d="M150,584 q10,10 0,20 q-10,8 0,16" stroke="#a86cf0" stroke-width="3" fill="none" stroke-linecap="round"/>
<circle cx="44" cy="592" r="2.8" fill="#f0dcff"/>
<circle cx="164" cy="596" r="2.8" fill="#f0dcff"/>

<rect x="228" y="586" width="140" height="44" rx="6" fill="#0f1030" stroke="#c9884a" stroke-width="2"/>
<path d="M240,614 q11,-10 22,0 q11,10 22,0" stroke="#ffc06e" stroke-width="3" fill="none" stroke-linecap="round" opacity="0.85"/>
<path d="M300,596 l0,20 M312,592 l0,26 M324,598 l0,16" stroke="#ffd68a" stroke-width="3" fill="none" stroke-linecap="round" opacity="0.8"/>
<ellipse cx="298" cy="608" rx="80" ry="44" fill="url(#taiwan-warmglow)" pointer-events="none" opacity="0.6"/>

<rect x="626" y="580" width="140" height="46" rx="6" fill="#0d1230" stroke="#3fae86" stroke-width="2"/>
<path d="M640,610 q11,-11 22,0 q11,11 22,0" stroke="#7fdcb4" stroke-width="3" fill="none" stroke-linecap="round" opacity="0.85"/>
<path d="M700,590 l0,18 M712,586 l0,24 M724,592 l0,16" stroke="#a6ecc9" stroke-width="3" fill="none" stroke-linecap="round" opacity="0.75"/>
<ellipse cx="696" cy="604" rx="80" ry="44" fill="url(#taiwan-warmglow)" pointer-events="none" opacity="0.45"/>

<rect x="10" y="672" width="188" height="10" fill="#4a3b2e"/>
<rect x="10" y="672" width="188" height="3.4" fill="#8a6a4c"/>
<rect x="10" y="682" width="188" height="14" fill="url(#taiwan-underawn)"/>
<rect x="208" y="672" width="186" height="10" fill="#4a3b2e"/>
<rect x="208" y="672" width="186" height="3.4" fill="#8a6a4c"/>
<rect x="208" y="682" width="186" height="14" fill="url(#taiwan-underawn)"/>
<rect x="404" y="672" width="186" height="10" fill="#4a3b2e"/>
<rect x="404" y="672" width="186" height="3.4" fill="#8a6a4c"/>
<rect x="404" y="682" width="186" height="14" fill="url(#taiwan-underawn)"/>
<rect x="600" y="672" width="190" height="10" fill="#4a3b2e"/>
<rect x="600" y="672" width="190" height="3.4" fill="#8a6a4c"/>
<rect x="600" y="682" width="190" height="14" fill="url(#taiwan-underawn)"/>

<ellipse cx="78" cy="672" rx="16" ry="4" fill="#07091c" opacity="0.4"/>
<rect x="62" y="640" width="32" height="32" rx="4" fill="#e8bb6a"/>
<rect x="62" y="640" width="32" height="8" rx="4" fill="#ffe0a4"/>
<rect x="62" y="664" width="32" height="8" fill="#bd8531"/>
<ellipse cx="126" cy="672" rx="30" ry="5" fill="#07091c" opacity="0.45"/>
<g data-obj="pineapple-cake" transform="translate(96 631)">
<rect x="10" y="0" width="48" height="38" rx="5" fill="#f2c877"/>
<rect x="10" y="0" width="48" height="10" rx="5" fill="#ffe6ae"/>
<rect x="46" y="0" width="12" height="38" rx="5" fill="#c98f38" opacity="0.55"/>
<rect x="10" y="28" width="48" height="10" fill="#c98f38"/>
<path d="M20,6 l0,26 M32,4 l0,30" stroke="#f7dda3" stroke-width="1.5" fill="none" opacity="0.75"/>
<path d="M34,10 l4,7 l7,1 l-5,5 l1,7 l-7,-4 l-7,4 l1,-7 l-5,-5 l7,-1 Z" fill="#e08f2c"/>
<path d="M34,12 l3,5 l5,1 l-4,3.6 l0.8,5.4 l-4.8,-2.8 Z" fill="#f7c67e" opacity="0.7"/>
<path d="M10,0 l0,38 l-10,3 l0,-38 Z" fill="#fff6e6"/>
<path d="M10,0 l0,38 l-10,3 l0,-38 Z" fill="none" stroke="#d8c3a0" stroke-width="1.2"/>
</g>
<ellipse cx="174" cy="672" rx="18" ry="4" fill="#07091c" opacity="0.4"/>
<rect x="156" y="644" width="36" height="28" rx="4" fill="#d94f2b"/>
<rect x="156" y="644" width="36" height="7" rx="3" fill="#f9834a"/>
<circle cx="174" cy="660" r="6" fill="#f2b23c"/>

<path d="M172,682 l0,6" stroke="#8a6a4c" stroke-width="1.6" fill="none"/>
<ellipse cx="172" cy="686" rx="34" ry="30" fill="url(#taiwan-purpleglow)" pointer-events="none" opacity="0.55"/>
<g data-obj="purple-heart" transform="translate(150 688)">
<path d="M22,40 C6,28 0,20 0,13 C0,5.5 5.5,0 12,0 C16.5,0 20,2.5 22,6 C24,2.5 27.5,0 32,0 C38.5,0 44,5.5 44,13 C44,20 38,28 22,40 Z" fill="url(#taiwan-amethyst)"/>
<path d="M22,33 C9,23 4,17 4,12 C4,6.6 8.4,3 13,3 C16.8,3 20,5.5 22,8.5 C24,5.5 27.2,3 31,3 C35.6,3 40,6.6 40,12 C40,17 35,23 22,33 Z" fill="#9d72e8" opacity="0.75"/>
<path d="M13,4 C8.8,4 5,7.2 5,12 C5,15 7,18.5 11,22.5 C7.5,17.5 6.5,14 6.5,11.5 C6.5,8.5 9,6 13,6 Z" fill="#e6d6ff" opacity="0.85"/>
<path d="M22,40 C6,28 0,20 0,13 C0,5.5 5.5,0 12,0 C16.5,0 20,2.5 22,6 C24,2.5 27.5,0 32,0 C38.5,0 44,5.5 44,13 C44,20 38,28 22,40 Z" fill="none" stroke="#c9a4ff" stroke-width="2"/>
</g>

<ellipse cx="275" cy="672" rx="16" ry="4" fill="#07091c" opacity="0.45"/>
<g data-obj="sauce-bottle">
<rect x="262" y="628" width="26" height="44" rx="5" fill="url(#taiwan-lacquer)"/>
<rect x="262" y="628" width="7" height="44" rx="4" fill="#ff8f6e" opacity="0.5"/>
<rect x="262" y="628" width="26" height="7" rx="4" fill="#d9483a"/>
<rect x="268" y="620" width="14" height="9" rx="3" fill="#4a2c17"/>
<rect x="268" y="620" width="5" height="9" rx="2" fill="#7c5030"/>
<rect x="266" y="642" width="18" height="14" rx="2" fill="#fff6e6" opacity="0.85"/>
<path d="M268,647 l12,0 M268,651 l9,0" stroke="#b9a184" stroke-width="1.2" fill="none"/>
</g>
<ellipse cx="310" cy="672" rx="15" ry="4" fill="#07091c" opacity="0.4"/>
<rect x="298" y="634" width="24" height="38" rx="4" fill="url(#taiwan-plum)"/>
<rect x="298" y="634" width="24" height="7" rx="3" fill="#4a3d72"/>
<ellipse cx="348" cy="672" rx="20" ry="4" fill="#07091c" opacity="0.4"/>
<rect x="330" y="646" width="36" height="26" rx="4" fill="url(#taiwan-bamboo)"/>
<ellipse cx="348" cy="646" rx="18" ry="5" fill="#a5773f"/>
<ellipse cx="348" cy="644" rx="13" ry="3.4" fill="#e5d3b4"/>
<ellipse cx="382" cy="672" rx="12" ry="3.4" fill="#07091c" opacity="0.4"/>
<rect x="370" y="650" width="24" height="22" rx="3" fill="#8a7457"/>
<rect x="370" y="650" width="24" height="6" rx="3" fill="#a89272"/>

<ellipse cx="470" cy="672" rx="16" ry="4" fill="#07091c" opacity="0.45"/>
<path d="M458,634 L482,634 L479,672 L461,672 Z" fill="url(#taiwan-teafill)"/>
<rect x="455" y="626" width="30" height="9" rx="4" fill="#f4f7fb"/>
<ellipse cx="512" cy="672" rx="16" ry="4" fill="#07091c" opacity="0.45"/>
<path d="M500,634 L524,634 L521,672 L503,672 Z" fill="url(#taiwan-jade)"/>
<rect x="497" y="626" width="30" height="9" rx="4" fill="#f4f7fb"/>
<ellipse cx="554" cy="672" rx="16" ry="4" fill="#07091c" opacity="0.45"/>
<path d="M542,634 L566,634 L563,672 L545,672 Z" fill="url(#taiwan-teafill)"/>
<rect x="539" y="626" width="30" height="9" rx="4" fill="#f7e8d4"/>

<ellipse cx="678" cy="672" rx="26" ry="5" fill="#07091c" opacity="0.45"/>
<path d="M652,656 l52,0 l-4,16 l-44,0 Z" fill="url(#taiwan-bamboo)"/>
<path d="M652,656 l52,0 l-1,4 l-50,0 Z" fill="#eecfa0"/>
<g data-obj="red-apples">
<circle cx="669" cy="650" r="10" fill="#c9261e"/>
<circle cx="687" cy="648" r="10" fill="#ea4436"/>
<circle cx="684" cy="644" r="4.6" fill="#ff8f7a" opacity="0.75"/>
<circle cx="678" cy="638" r="9" fill="#e0392f"/>
<circle cx="675" cy="635" r="4" fill="#ff8f7a" opacity="0.7"/>
<path d="M678,629 q4,-6 9,-5 q-4,4 -6,6 Z" fill="#3fae86"/>
</g>
<ellipse cx="736" cy="672" rx="22" ry="4.6" fill="#07091c" opacity="0.45"/>
<path d="M716,644 l40,0 l-4,28 l-32,0 Z" fill="url(#taiwan-steel)"/>
<path d="M716,644 l40,0 l-1,5 l-38,0 Z" fill="#6c7794"/>
<g data-obj="scallions">
<path d="M726,646 l-3,-32 M735,644 l0,-38 M744,646 l4,-32" stroke="#2e9c78" stroke-width="4.4" fill="none" stroke-linecap="round"/>
<path d="M727,644 l-3,-30 M736,642 l0,-36" stroke="#7fdcb4" stroke-width="1.4" fill="none" stroke-linecap="round" opacity="0.8"/>
<path d="M723,614 q-4,-8 2,-12 M735,606 q4,-8 10,-4 M748,614 q5,-7 10,-2" stroke="#56c79c" stroke-width="3" fill="none" stroke-linecap="round"/>
<path d="M722,648 l26,0" stroke="#f7e9cf" stroke-width="3.4" fill="none"/>
</g>

<rect x="0" y="740" width="800" height="12" fill="#c08551"/>
<rect x="0" y="740" width="800" height="4" fill="#e8b271"/>
<rect x="0" y="752" width="800" height="30" fill="url(#taiwan-counter)"/>
<rect x="0" y="782" width="800" height="22" fill="#4a2c17"/>

<ellipse cx="92" cy="742" rx="40" ry="8" fill="url(#taiwan-cast)"/>
<ellipse cx="92" cy="741" rx="28" ry="4" fill="#1a1206" opacity="0.5"/>
<g data-obj="fruit-crate">
<rect x="66" y="696" width="52" height="44" rx="4" fill="url(#taiwan-crate)"/>
<rect x="66" y="696" width="52" height="8" rx="3" fill="url(#taiwan-cratetop)"/>
<rect x="66" y="696" width="6" height="44" rx="3" fill="#c68d55" opacity="0.55"/>
<circle cx="80" cy="692" r="10" fill="#e8912c"/>
<circle cx="77" cy="689" r="4.5" fill="#ffc472" opacity="0.85"/>
<circle cx="98" cy="690" r="10" fill="#ffb45e"/>
<circle cx="95" cy="687" r="4.5" fill="#ffdca6" opacity="0.8"/>
<circle cx="110" cy="694" r="9" fill="#d97f22"/>
<circle cx="107.5" cy="691" r="3.8" fill="#f7bc6e" opacity="0.7"/>
<path d="M72,714 l40,0 M72,728 l40,0" stroke="#3c2312" stroke-width="2.4" fill="none"/>
<path d="M72,716 l40,0 M72,730 l40,0" stroke="#c08b56" stroke-width="1" fill="none" opacity="0.5"/>
</g>
<ellipse cx="152" cy="742" rx="26" ry="6" fill="url(#taiwan-cast)"/>
<rect x="130" y="704" width="44" height="36" rx="4" fill="url(#taiwan-plum)"/>
<rect x="130" y="704" width="44" height="7" rx="3" fill="#6a5d88"/>

<ellipse cx="270" cy="744" rx="44" ry="9" fill="url(#taiwan-cast)"/>
<ellipse cx="270" cy="742" rx="32" ry="4.4" fill="#1a1206" opacity="0.5"/>
<ellipse cx="270" cy="700" rx="36" ry="9" fill="#8f6537"/>
<g data-obj="xiaolongbao" transform="translate(236 690)">
<ellipse cx="34" cy="16" rx="34" ry="9" fill="#a5773f"/>
<rect x="0" y="16" width="68" height="30" rx="6" fill="url(#taiwan-bamboo)"/>
<rect x="0" y="16" width="68" height="6" rx="3" fill="#eecfa0"/>
<rect x="0" y="40" width="68" height="6" rx="3" fill="#8f6537"/>
<path d="M12,22 L12,44 M26,22 L26,44 M40,22 L40,44 M54,22 L54,44" stroke="#a87e46" stroke-width="1.5" fill="none" opacity="0.7"/>
<ellipse cx="34" cy="14" rx="29" ry="7" fill="#b98f57"/>
<ellipse cx="18" cy="10" rx="11" ry="9" fill="#f2e3c8"/>
<ellipse cx="15" cy="7.5" rx="5" ry="4" fill="#fffaf0" opacity="0.85"/>
<ellipse cx="34" cy="7" rx="12" ry="9.5" fill="#fbf3e2"/>
<ellipse cx="31" cy="4" rx="5.4" ry="4.2" fill="#ffffff" opacity="0.8"/>
<ellipse cx="50" cy="10" rx="11" ry="9" fill="#e8d6b8"/>
<ellipse cx="47" cy="7.5" rx="4.6" ry="3.6" fill="#fbf3e2" opacity="0.75"/>
<ellipse cx="26" cy="17" rx="10" ry="7" fill="#dfcda9"/>
<ellipse cx="43" cy="17" rx="10" ry="7" fill="#d6c39c"/>
<path d="M18,3 l-3,6 M18,3 l3,6 M34,-1 l-4,7 M34,-1 l4,7 M50,3 l-3,6 M50,3 l3,6" stroke="#c9b189" stroke-width="1.4" fill="none" stroke-linecap="round"/>
</g>
<path d="M248,684 q-8,-18 2,-30 q-8,-14 0,-22" stroke="#e8eef8" stroke-width="4" fill="none" opacity="0.15"/>
<path d="M284,678 q-8,-16 2,-26" stroke="#e8eef8" stroke-width="3.4" fill="none" opacity="0.12"/>

<ellipse cx="342" cy="744" rx="36" ry="8" fill="url(#taiwan-cast)"/>
<ellipse cx="342" cy="714" rx="32" ry="8" fill="#8f6537"/>
<rect x="310" y="714" width="64" height="26" rx="6" fill="url(#taiwan-bamboo)"/>
<rect x="310" y="714" width="64" height="6" rx="3" fill="#eecfa0"/>
<ellipse cx="342" cy="712" rx="27" ry="7" fill="#b98f57"/>
<ellipse cx="330" cy="707" rx="11" ry="8.6" fill="#fbf3e2"/>
<ellipse cx="350" cy="705" rx="12" ry="9" fill="#f0e0c4"/>
<circle cx="330" cy="705" r="2.4" fill="#e8c0c8"/>

<ellipse cx="487" cy="746" rx="30" ry="7" fill="url(#taiwan-cast)"/>
<ellipse cx="487" cy="744" rx="20" ry="3.6" fill="#1a1206" opacity="0.5"/>
<g data-obj="bubble-tea" transform="translate(468 682)">
<rect x="20" y="0" width="8" height="28" rx="3" fill="#ff6f9c" transform="rotate(10 24 14)"/>
<rect x="21" y="1" width="3" height="26" rx="1.5" fill="#ffb2ca" transform="rotate(10 24 14)"/>
<rect x="1" y="22" width="36" height="9" rx="3" fill="#f4f7fb"/>
<rect x="1" y="28" width="36" height="4" rx="1" fill="#bcc7d3"/>
<path d="M4,31 L34,31 L30,64 L8,64 Z" fill="url(#taiwan-teafill)"/>
<path d="M6,31 L12,31 L10,64 L8,64 Z" fill="#ffe3bd" opacity="0.55"/>
<path d="M29,31 L34,31 L30,64 L27,64 Z" fill="#b98450" opacity="0.4"/>
<circle cx="12" cy="58" r="4" fill="#3a2318"/>
<circle cx="11" cy="57" r="1.6" fill="#6e4c33" opacity="0.8"/>
<circle cx="20" cy="60" r="4" fill="#2c1a12"/>
<circle cx="27" cy="57" r="3.8" fill="#3a2318"/>
<circle cx="16" cy="51" r="3.6" fill="#2c1a12"/>
<circle cx="24" cy="52" r="3.4" fill="#3a2318"/>
</g>
<ellipse cx="534" cy="746" rx="26" ry="6" fill="url(#taiwan-cast)"/>
<path d="M519,690 L549,690 L545,740 L523,740 Z" fill="url(#taiwan-jade)"/>
<path d="M521,694 L527,694 L525,736 L522,736 Z" fill="#c8f5e0" opacity="0.4"/>
<rect x="515" y="682" width="38" height="10" rx="4" fill="#eef2f6"/>
<rect x="515" y="689" width="38" height="4" fill="#bcc7d3"/>
<rect x="530" y="662" width="8" height="22" rx="3" fill="#ff6f9c" transform="rotate(8 534 673)"/>
<ellipse cx="576" cy="746" rx="26" ry="6" fill="url(#taiwan-cast)"/>
<path d="M561,694 L591,694 L587,740 L565,740 Z" fill="url(#taiwan-teafill)"/>
<rect x="557" y="686" width="38" height="10" rx="4" fill="#f7e8d4"/>
<circle cx="570" cy="730" r="3.6" fill="#3a2318"/>
<circle cx="579" cy="732" r="3.6" fill="#2c1a12"/>

<ellipse cx="640" cy="744" rx="38" ry="8" fill="url(#taiwan-cast)"/>
<rect x="608" y="700" width="64" height="40" rx="4" fill="url(#taiwan-crate)"/>
<rect x="608" y="700" width="64" height="8" rx="3" fill="url(#taiwan-cratetop)"/>
<path d="M614,720 l52,0" stroke="#3c2312" stroke-width="2.4" fill="none"/>
<ellipse cx="716" cy="744" rx="36" ry="8" fill="url(#taiwan-cast)"/>
<rect x="686" y="706" width="60" height="34" rx="4" fill="url(#taiwan-jade)"/>
<rect x="686" y="706" width="60" height="8" rx="3" fill="#7fdcb4"/>
<ellipse cx="772" cy="744" rx="24" ry="6" fill="url(#taiwan-cast)"/>
<path d="M750,708 l44,0 l-4,32 l-36,0 Z" fill="url(#taiwan-bamboo)"/>
<path d="M750,708 l44,0 l-1,5 l-42,0 Z" fill="#eecfa0"/>

<path d="M-6,500 L214,500 L206,552 L2,552 Z" fill="url(#taiwan-awnred)"/>
<path d="M-6,500 L214,500 L212,514 L-4,514 Z" fill="#ff8a6a" opacity="0.45"/>
<path d="M40,500 L52,552 L30,552 L20,500 Z" fill="#f7e9cf" opacity="0.26"/>
<path d="M120,500 L132,552 L110,552 L100,500 Z" fill="#f7e9cf" opacity="0.26"/>
<path d="M2,552 q12,15 24,0 q12,15 24,0 q12,15 24,0 q12,15 24,0 q12,15 24,0 q12,15 24,0 q12,15 24,0 q12,15 24,0 L206,552 Z" fill="#8b201a"/>
<rect x="10" y="552" width="188" height="22" fill="url(#taiwan-underawn)"/>

<path d="M190,500 L410,500 L402,552 L198,552 Z" fill="url(#taiwan-awngreen)"/>
<path d="M190,500 L410,500 L408,514 L192,514 Z" fill="#7fe0be" opacity="0.4"/>
<path d="M236,500 L248,552 L226,552 L216,500 Z" fill="#f7e9cf" opacity="0.22"/>
<path d="M316,500 L328,552 L306,552 L296,500 Z" fill="#f7e9cf" opacity="0.22"/>
<path d="M198,552 q12,15 24,0 q12,15 24,0 q12,15 24,0 q12,15 24,0 q12,15 24,0 q12,15 24,0 q12,15 24,0 q12,15 24,0 L402,552 Z" fill="#155442"/>
<rect x="208" y="552" width="186" height="22" fill="url(#taiwan-underawn)"/>

<path d="M386,500 L606,500 L598,552 L394,552 Z" fill="url(#taiwan-awnorange)"/>
<path d="M386,500 L606,500 L604,514 L388,514 Z" fill="#ffa06a" opacity="0.4"/>
<path d="M432,500 L444,552 L422,552 L412,500 Z" fill="#f7e9cf" opacity="0.26"/>
<path d="M512,500 L524,552 L502,552 L492,500 Z" fill="#f7e9cf" opacity="0.26"/>
<path d="M394,552 q12,15 24,0 q12,15 24,0 q12,15 24,0 q12,15 24,0 q12,15 24,0 q12,15 24,0 q12,15 24,0 q12,15 24,0 L598,552 Z" fill="#8e2f14"/>
<rect x="404" y="552" width="186" height="22" fill="url(#taiwan-underawn)"/>

<path d="M582,500 L806,500 L800,552 L590,552 Z" fill="url(#taiwan-awnteal)"/>
<path d="M582,500 L806,500 L804,514 L584,514 Z" fill="#6fdcb6" opacity="0.38"/>
<path d="M628,500 L640,552 L618,552 L608,500 Z" fill="#f7e9cf" opacity="0.2"/>
<path d="M708,500 L720,552 L698,552 L688,500 Z" fill="#f7e9cf" opacity="0.2"/>
<path d="M590,552 q12,15 24,0 q12,15 24,0 q12,15 24,0 q12,15 24,0 q12,15 24,0 q12,15 24,0 q12,15 24,0 q12,15 24,0 L800,552 Z" fill="#0f4436"/>
<rect x="600" y="552" width="190" height="22" fill="url(#taiwan-underawn)"/>

<circle cx="34" cy="602" r="56" fill="url(#taiwan-lanternglow)" pointer-events="none"/>
<path d="M34,552 L34,568" stroke="#3a3f6b" stroke-width="1.8" fill="none"/>
<g data-obj="red-lantern">
<rect x="26" y="566" width="16" height="6" rx="2" fill="#f2b23c"/>
<rect x="26" y="566" width="6" height="6" rx="2" fill="#ffdc96"/>
<ellipse cx="34" cy="596" rx="20" ry="23" fill="url(#taiwan-lantbody)"/>
<ellipse cx="26" cy="594" rx="6" ry="16" fill="#ffb08a" opacity="0.45"/>
<ellipse cx="34" cy="596" rx="20" ry="7" fill="none" stroke="#f2b23c" stroke-width="2"/>
<path d="M34,573 q9,10 9,23 q0,13 -9,23" stroke="#ff9a72" stroke-width="1.4" fill="none" opacity="0.5"/>
<rect x="26" y="617" width="16" height="6" rx="2" fill="#f2b23c"/>
<path d="M30,623 L28,632 M38,623 L40,632" stroke="#e8a02c" stroke-width="3"/>
<circle cx="34" cy="623" r="3.2" fill="#c98219"/>
</g>

<circle cx="228" cy="590" r="40" fill="url(#taiwan-bulbglow)" pointer-events="none" opacity="0.8"/>
<path d="M228,552 L228,568" stroke="#3a3f6b" stroke-width="1.8" fill="none"/>
<g data-obj="bulb-cage">
<path d="M212,568 l32,0 l-4,10 l-24,0 Z" fill="#7c6849"/>
<path d="M212,568 l32,0 l-1,4 l-30,0 Z" fill="#a08a63"/>
<path d="M234,568 l10,0 l-4,10 l-6,0 Z" fill="#4c3f2c"/>
<path d="M216,578 q12,26 24,0" stroke="#9d8862" stroke-width="1.8" fill="none"/>
<path d="M222,578 q6,26 12,0" stroke="#9d8862" stroke-width="1.8" fill="none"/>
<ellipse cx="228" cy="590" rx="8" ry="10" fill="#fff0bb"/>
<ellipse cx="226" cy="587" rx="3.2" ry="4" fill="#ffffff" opacity="0.85"/>
<path d="M228,600 l0,12" stroke="#6b5a44" stroke-width="2" fill="none"/>
</g>

<path d="M424,552 L424,568" stroke="#3a3f6b" stroke-width="1.8" fill="none"/>
<g data-obj="hang-basket">
<path d="M401,568 l46,0 l-7,28 l-32,0 Z" fill="url(#taiwan-bamboo)"/>
<path d="M401,568 l46,0 l-1,6 l-44,0 Z" fill="#e8c894"/>
<path d="M433,568 l14,0 l-7,28 l-8,0 Z" fill="#6e4d27" opacity="0.4"/>
<path d="M409,576 l30,0 M411,586 l26,0" stroke="#7a5730" stroke-width="1.8" fill="none" opacity="0.8"/>
<path d="M405,568 q19,-14 38,0" stroke="#8f5a35" stroke-width="2.4" fill="none"/>
<path d="M406,569 q18,-12 34,-1" stroke="#e0bb84" stroke-width="1.2" fill="none" opacity="0.7"/>
</g>

<circle cx="620" cy="600" r="44" fill="url(#taiwan-lanternglow)" pointer-events="none" opacity="0.6"/>
<path d="M620,552 L620,568" stroke="#3a3f6b" stroke-width="1.8" fill="none"/>
<g data-obj="lucky-knot" transform="translate(598 568)">
<path d="M22,0 L22,9" stroke="#c0392b" stroke-width="2.6" fill="none"/>
<path d="M22,8 L42,26 L22,44 L2,26 Z" fill="url(#taiwan-lacquer)"/>
<path d="M22,8 L2,26 L22,44 Z" fill="#ff6f52" opacity="0.4"/>
<path d="M22,16 L34,26 L22,36 L10,26 Z" fill="#ff6a52"/>
<path d="M22,21 L28,26 L22,31 L16,26 Z" fill="#8f2019"/>
<path d="M22,8 L12,17 L22,26 L32,17 Z" fill="none" stroke="#ffb59f" stroke-width="1.6"/>
<path d="M2,25 l-2,0 l0,3 l2,0 Z M42,25 l2,0 l0,3 l-2,0 Z" fill="#8f2019"/>
<circle cx="22" cy="48" r="5" fill="#f2b23c"/>
<circle cx="20.4" cy="46.6" r="2.2" fill="#ffdc96" opacity="0.85"/>
<rect x="15" y="51" width="14" height="8" rx="3" fill="#a02b21"/>
<path d="M17,59 l-3,7 M22,59 l0,7 M27,59 l3,7" stroke="#d92f28" stroke-width="2.6" stroke-linecap="round" fill="none"/>
</g>

<circle cx="170" cy="600" r="44" fill="url(#taiwan-lanternglow)" pointer-events="none" opacity="0.7"/>
<path d="M170,552 L170,568" stroke="#3a3f6b" stroke-width="1.8" fill="none"/>
<rect x="162" y="566" width="16" height="6" fill="#f2b23c"/>
<ellipse cx="170" cy="596" rx="19" ry="22" fill="url(#taiwan-lantbody)"/>
<ellipse cx="163" cy="594" rx="6" ry="15" fill="#ffb08a" opacity="0.42"/>
<rect x="162" y="616" width="16" height="6" fill="#f2b23c"/>
<path d="M170,622 L170,634" stroke="#e8a02c" stroke-width="3"/>

<circle cx="366" cy="596" r="42" fill="url(#taiwan-lanternglow)" pointer-events="none" opacity="0.6"/>
<path d="M366,552 L366,566" stroke="#3a3f6b" stroke-width="1.8" fill="none"/>
<rect x="358" y="564" width="16" height="6" fill="#f2b23c"/>
<ellipse cx="366" cy="592" rx="19" ry="22" fill="url(#taiwan-lantbody)"/>
<ellipse cx="359" cy="590" rx="6" ry="15" fill="#ffb08a" opacity="0.42"/>
<rect x="358" y="612" width="16" height="6" fill="#f2b23c"/>
<path d="M366,618 L366,630" stroke="#e8a02c" stroke-width="3"/>

<circle cx="766" cy="598" r="42" fill="url(#taiwan-lanternglow)" pointer-events="none" opacity="0.55"/>
<path d="M766,552 L766,568" stroke="#3a3f6b" stroke-width="1.8" fill="none"/>
<rect x="758" y="566" width="16" height="6" fill="#f2b23c"/>
<ellipse cx="766" cy="594" rx="19" ry="22" fill="url(#taiwan-lantbody)"/>
<ellipse cx="759" cy="592" rx="6" ry="15" fill="#ffb08a" opacity="0.42"/>
<rect x="758" y="614" width="16" height="6" fill="#f2b23c"/>
<path d="M766,620 L766,632" stroke="#e8a02c" stroke-width="3"/>

<rect x="0" y="804" width="800" height="86" fill="url(#taiwan-panel)"/>
<rect x="0" y="798" width="800" height="10" rx="3" fill="#5d3820"/>
<rect x="0" y="798" width="800" height="3.4" rx="1.7" fill="#96603a"/>
<rect x="0" y="808" width="800" height="14" fill="url(#taiwan-underawn)"/>

<ellipse cx="62" cy="812" rx="40" ry="10" fill="#07091c" opacity="0.45"/>
<path d="M40,808 l0,6 M84,808 l0,6" stroke="#8a6a4c" stroke-width="2" fill="none"/>
<g data-obj="chalkboard">
<rect x="30" y="814" width="64" height="64" rx="4" fill="#5d3820"/>
<rect x="30" y="814" width="64" height="6" rx="3" fill="#8a5a33"/>
<rect x="30" y="814" width="6" height="64" rx="3" fill="#7d4f2c" opacity="0.8"/>
<rect x="36" y="820" width="52" height="52" fill="#22302b"/>
<rect x="36" y="820" width="52" height="6" fill="#2f403a" opacity="0.8"/>
<path d="M42,834 l30,0 M42,844 l40,0 M42,854 l24,0 M42,864 l34,0" stroke="#9fe8cb" stroke-width="2.4" fill="none" opacity="0.75"/>
</g>

<path d="M150,808 l0,6" stroke="#8a6a4c" stroke-width="2" fill="none"/>
<ellipse cx="150" cy="818" rx="28" ry="8" fill="#07091c" opacity="0.4"/>
<g data-obj="wall-clock">
<circle cx="150" cy="836" r="22" fill="#e8d2b4"/>
<circle cx="150" cy="836" r="22" fill="url(#taiwan-glass)"/>
<circle cx="150" cy="836" r="17" fill="#fffaea"/>
<path d="M150,819 a17,17 0 0 1 0,34 a13,17 0 0 0 0,-34 Z" fill="#dfcfae" opacity="0.5"/>
<path d="M150,836 l0,-11 M150,836 l8,5" stroke="#5d3820" stroke-width="2.4" fill="none" stroke-linecap="round"/>
<circle cx="150" cy="836" r="2.4" fill="#c0392b"/>
<path d="M150,814 l0,-4 M150,858 l0,4 M128,836 l-4,0 M172,836 l4,0" stroke="#8f5a35" stroke-width="2.4" fill="none"/>
<path d="M136,822 a20,20 0 0 1 16,-6" stroke="#ffffff" stroke-width="2" fill="none" opacity="0.5"/>
</g>

<ellipse cx="231" cy="820" rx="30" ry="9" fill="#07091c" opacity="0.4"/>
<g data-obj="poster">
<rect x="208" y="812" width="46" height="46" rx="2" fill="#e8d2b4"/>
<rect x="208" y="812" width="46" height="8" rx="2" fill="#c0392b"/>
<rect x="208" y="812" width="7" height="46" rx="2" fill="#fff6e6" opacity="0.45"/>
<circle cx="231" cy="836" r="10" fill="#e8a02c"/>
<circle cx="228" cy="833" r="4.4" fill="#ffd68a" opacity="0.85"/>
<path d="M214,850 l34,0" stroke="#b9a184" stroke-width="2.4" fill="none"/>
<circle cx="211" cy="815" r="2" fill="#8f2019"/>
</g>

<path d="M314,808 q-4,8 2,10" stroke="#a3aebd" stroke-width="2.4" fill="none"/>
<ellipse cx="314" cy="822" rx="26" ry="7" fill="#07091c" opacity="0.4"/>
<g data-obj="cleaver">
<rect x="292" y="818" width="30" height="22" rx="2" fill="url(#taiwan-metal)"/>
<rect x="292" y="818" width="30" height="5" rx="2" fill="#f2f6fb"/>
<rect x="292" y="835" width="30" height="5" rx="2" fill="#e9eff7" opacity="0.7"/>
<rect x="320" y="824" width="16" height="7" rx="3" fill="#5d3820"/>
<rect x="320" y="824" width="16" height="2.6" rx="1.3" fill="#8a5a33"/>
<circle cx="301" cy="814" r="3" fill="#8e9aa8"/>
</g>

<ellipse cx="402" cy="818" rx="30" ry="8" fill="#07091c" opacity="0.4"/>
<g data-obj="hand-bell">
<path d="M402,808 l0,8" stroke="#5d3820" stroke-width="2" fill="none"/>
<path d="M402,816 q20,2 20,24 l-40,0 q0,-22 20,-24 Z" fill="#d78f28"/>
<path d="M402,816 q-20,2 -20,24 l14,0 q0,-20 6,-24 Z" fill="#f7d183"/>
<path d="M408,817 q14,4 14,23 l-7,0 q0,-18 -7,-23 Z" fill="#9a6414"/>
<rect x="380" y="838" width="44" height="6" rx="3" fill="#e0a94c"/>
<rect x="380" y="838" width="16" height="6" rx="3" fill="#ffe0a0" opacity="0.8"/>
<circle cx="402" cy="848" r="5" fill="#8f5a35"/>
</g>

<ellipse cx="490" cy="820" rx="30" ry="9" fill="#07091c" opacity="0.4"/>
<circle cx="490" cy="836" r="26" fill="url(#taiwan-bulbglow)" pointer-events="none" opacity="0.55"/>
<rect x="470" y="812" width="40" height="10" rx="4" fill="#5d3820"/>
<rect x="470" y="812" width="40" height="3" rx="1.5" fill="#8a5a33"/>
<path d="M478,822 q-4,10 4,12 M494,822 q-4,10 4,12" stroke="#a3aebd" stroke-width="2.6" fill="none"/>
<circle cx="484" cy="840" r="5" fill="#f2b23c"/>
<circle cx="500" cy="840" r="5" fill="#e0554a"/>

<ellipse cx="574" cy="884" rx="28" ry="7" fill="url(#taiwan-cast)"/>
<g data-obj="broom">
<rect x="568" y="818" width="6" height="46" rx="3" fill="#b98f57"/>
<rect x="568" y="818" width="2.4" height="46" rx="1.2" fill="#e5c193" opacity="0.8"/>
<path d="M554,864 l34,0 l6,22 l-46,0 Z" fill="url(#taiwan-bamboo)"/>
<path d="M554,864 l12,0 l-4,22 l-14,0 Z" fill="#e5c193" opacity="0.6"/>
<path d="M554,864 l34,0 l1,5 l-36,0 Z" fill="#8f5a35"/>
<path d="M560,871 l-2,15 M570,871 l0,15 M580,871 l2,15" stroke="#a87e46" stroke-width="2" fill="none"/>
</g>

<path d="M652,808 l0,6" stroke="#8a6a4c" stroke-width="2" fill="none"/>
<ellipse cx="652" cy="818" rx="30" ry="8" fill="#07091c" opacity="0.4"/>
<g data-obj="straw-hat">
<ellipse cx="652" cy="838" rx="24" ry="9" fill="#c39a5f"/>
<ellipse cx="649" cy="836" rx="16" ry="5" fill="#e5c193" opacity="0.6"/>
<path d="M636,836 q16,-24 32,0 Z" fill="url(#taiwan-bamboo)"/>
<path d="M636,836 q16,-24 16,-13 l0,13 Z" fill="#f0d8ac"/>
<path d="M635,834 q17,7 34,0" stroke="#a72622" stroke-width="3" fill="none"/>
<path d="M638,831 q14,-16 26,-2" stroke="#fbeacc" stroke-width="1.2" fill="none" opacity="0.6"/>
</g>

<ellipse cx="738" cy="820" rx="28" ry="9" fill="#07091c" opacity="0.42"/>
<rect x="714" y="812" width="48" height="7" rx="3" fill="#3d3026"/>
<g data-obj="extinguisher">
<rect x="720" y="820" width="36" height="48" rx="8" fill="url(#taiwan-lacquer)"/>
<rect x="720" y="820" width="10" height="48" rx="6" fill="#ff8f6e" opacity="0.45"/>
<rect x="720" y="820" width="36" height="8" rx="4" fill="#e0554a"/>
<rect x="730" y="810" width="16" height="12" rx="3" fill="#443b5c"/>
<rect x="730" y="810" width="5" height="12" rx="2" fill="#6b5f85"/>
<path d="M746,814 q10,-2 12,6" stroke="#2b2438" stroke-width="3" fill="none"/>
<rect x="726" y="838" width="24" height="12" rx="2" fill="#fff6e6" opacity="0.8"/>
</g>

<rect x="0" y="884" width="800" height="14" rx="3" fill="#6b4128"/>
<rect x="0" y="884" width="800" height="4" rx="2" fill="#a4693c"/>
<rect x="0" y="898" width="800" height="104" fill="#0d0b22"/>
<rect x="0" y="898" width="800" height="14" fill="url(#taiwan-underawn)"/>
<rect x="0" y="990" width="800" height="16" fill="#3a2415"/>
<rect x="0" y="990" width="800" height="5" fill="#6b4128"/>
<rect x="136" y="898" width="8" height="92" fill="#1a1633"/>
<rect x="296" y="898" width="8" height="92" fill="#1a1633"/>
<rect x="466" y="898" width="8" height="92" fill="#1a1633"/>
<rect x="636" y="898" width="8" height="92" fill="#1a1633"/>
<rect x="136" y="898" width="2.6" height="92" fill="#332a5c" opacity="0.7"/>
<rect x="296" y="898" width="2.6" height="92" fill="#332a5c" opacity="0.7"/>
<rect x="466" y="898" width="2.6" height="92" fill="#332a5c" opacity="0.7"/>
<rect x="636" y="898" width="2.6" height="92" fill="#332a5c" opacity="0.7"/>

<ellipse cx="68" cy="990" rx="36" ry="8" fill="url(#taiwan-cast)"/>
<ellipse cx="68" cy="989" rx="26" ry="4" fill="#000000" opacity="0.45"/>
<g data-obj="dark-jar">
<rect x="40" y="934" width="56" height="56" rx="4" fill="url(#taiwan-plum)"/>
<ellipse cx="68" cy="932" rx="26" ry="8" fill="#3a2f5c"/>
<ellipse cx="68" cy="930" rx="18" ry="5" fill="#4a3d72"/>
<ellipse cx="62" cy="929" rx="9" ry="2.6" fill="#6b5b96" opacity="0.7"/>
<path d="M48,952 l40,0" stroke="#14101f" stroke-width="3" fill="none"/>
<path d="M48,954 l40,0" stroke="#584c7c" stroke-width="1" fill="none" opacity="0.5"/>
</g>
<ellipse cx="112" cy="990" rx="20" ry="5" fill="url(#taiwan-cast)"/>
<rect x="96" y="956" width="34" height="34" rx="4" fill="#241d3f"/>
<rect x="96" y="956" width="34" height="7" rx="3" fill="#362b58"/>

<ellipse cx="202" cy="990" rx="32" ry="8" fill="url(#taiwan-cast)"/>
<ellipse cx="202" cy="989" rx="24" ry="4" fill="#000000" opacity="0.45"/>
<g data-obj="round-pot">
<ellipse cx="202" cy="962" rx="26" ry="28" fill="url(#taiwan-plum)"/>
<ellipse cx="192" cy="956" rx="9" ry="13" fill="#6b5b96" opacity="0.35"/>
<ellipse cx="202" cy="936" rx="14" ry="7" fill="#3a2f5c"/>
<path d="M182,950 q20,10 40,0" stroke="#14101f" stroke-width="3" fill="none"/>
<circle cx="202" cy="932" r="4" fill="#4a3d72"/>
<path d="M224,950 q4,12 -4,22" stroke="#584c7c" stroke-width="1.4" fill="none" opacity="0.6"/>
</g>
<ellipse cx="264" cy="990" rx="26" ry="6" fill="url(#taiwan-cast)"/>
<ellipse cx="264" cy="989" rx="18" ry="3.4" fill="#000000" opacity="0.45"/>
<g data-obj="skewer-cup">
<rect x="244" y="952" width="40" height="38" rx="4" fill="url(#taiwan-plum)"/>
<rect x="244" y="952" width="40" height="7" rx="3" fill="#4a3d72"/>
<rect x="244" y="952" width="8" height="38" rx="3" fill="#584c7c" opacity="0.6"/>
<path d="M252,948 l0,-14 M262,946 l0,-16 M272,948 l0,-14" stroke="#f0e0c2" stroke-width="3.4" fill="none" stroke-linecap="round"/>
<circle cx="252" cy="933" r="3.2" fill="#c98b4a"/>
<circle cx="262" cy="929" r="3.2" fill="#a55c31"/>
<circle cx="272" cy="933" r="3.2" fill="#c98b4a"/>
</g>

<ellipse cx="356" cy="990" rx="34" ry="8" fill="url(#taiwan-cast)"/>
<ellipse cx="356" cy="989" rx="24" ry="4" fill="#000000" opacity="0.45"/>
<g data-obj="shop-cat">
<path d="M330,990 q0,-38 26,-40 q26,2 26,40 Z" fill="#3a2f2b"/>
<path d="M356,950 q18,4 20,40 l-14,0 q2,-30 -6,-40 Z" fill="#241c19"/>
<path d="M330,990 q0,-38 26,-40 q-11,10 -13,40 Z" fill="#584842"/>
<path d="M336,954 l2,-12 l9,7 Z" fill="#4a3c37"/>
<path d="M376,954 l3,-12 l6,9 Z" fill="#3a2f2b"/>
<circle cx="347" cy="964" r="3.2" fill="#f2b23c"/>
<circle cx="367" cy="964" r="3.2" fill="#f2b23c"/>
<path d="M351,974 q6,5 12,0" stroke="#f7e9cf" stroke-width="2" fill="none"/>
<path d="M331,982 q2,-32 24,-32" stroke="#8a746a" stroke-width="1.4" fill="none" opacity="0.6"/>
</g>
<ellipse cx="430" cy="990" rx="26" ry="6" fill="url(#taiwan-cast)"/>
<ellipse cx="430" cy="989" rx="14" ry="3" fill="#000000" opacity="0.45"/>
<g data-obj="umbrella">
<path d="M400,972 q30,-34 60,0 Z" fill="url(#taiwan-jade)"/>
<path d="M400,972 q30,-34 30,-16 l0,16 Z" fill="#6fd8b0"/>
<path d="M446,960 q10,5 14,12 l-14,0 Z" fill="#0f4436" opacity="0.5"/>
<path d="M400,972 q10,10 20,0 q10,10 20,0 q10,10 20,0" fill="#14543f"/>
<path d="M404,968 q26,-26 52,0" stroke="#b6f2d6" stroke-width="1.3" fill="none" opacity="0.6"/>
<path d="M430,972 l0,18 q0,4 -6,2" stroke="#6b4128" stroke-width="3" fill="none"/>
<path d="M430,956 l0,-8" stroke="#6b4128" stroke-width="2.4" fill="none"/>
</g>

<ellipse cx="540" cy="990" rx="30" ry="7" fill="url(#taiwan-cast)"/>
<ellipse cx="540" cy="989" rx="20" ry="3.4" fill="#000000" opacity="0.45"/>
<g data-obj="kettle">
<path d="M518,948 l40,0 l4,42 l-48,0 Z" fill="url(#taiwan-steel)"/>
<path d="M518,948 l12,0 l-6,42 l-10,0 Z" fill="#7d89a8" opacity="0.55"/>
<path d="M518,948 l40,0 l1,6 l-42,0 Z" fill="#6c7794"/>
<path d="M558,954 q10,6 2,16" stroke="#8e9aa8" stroke-width="3.4" fill="none"/>
<path d="M522,948 q16,-12 32,0" stroke="#a3aebd" stroke-width="2.4" fill="none"/>
<rect x="530" y="936" width="16" height="10" rx="3" fill="#2c3441"/>
</g>
<ellipse cx="600" cy="990" rx="24" ry="6" fill="url(#taiwan-cast)"/>
<rect x="578" y="944" width="46" height="46" rx="4" fill="#241d3f"/>
<rect x="578" y="944" width="46" height="7" rx="3" fill="#362b58"/>

<ellipse cx="690" cy="990" rx="34" ry="8" fill="url(#taiwan-cast)"/>
<path d="M664,990 q-6,-40 26,-44 q32,4 26,44 Z" fill="url(#taiwan-sack)"/>
<path d="M664,990 q-6,-40 26,-44 q-8,18 -10,44 Z" fill="#c0a87f" opacity="0.5"/>
<ellipse cx="690" cy="947" rx="22" ry="7" fill="#6b5a44"/>
<ellipse cx="758" cy="990" rx="30" ry="7" fill="url(#taiwan-cast)"/>
<rect x="728" y="950" width="60" height="40" rx="4" fill="url(#taiwan-crate)"/>
<rect x="728" y="950" width="60" height="8" rx="3" fill="url(#taiwan-cratetop)"/>
<path d="M734,970 l48,0" stroke="#3c2312" stroke-width="2.4" fill="none"/>

<rect x="0" y="1006" width="800" height="194" fill="url(#taiwan-ground)"/>
<rect x="0" y="1006" width="800" height="8" fill="#463d84" opacity="0.8"/>
<path d="M262,1014 L-60,1200" stroke="#3d3672" stroke-width="1.6" fill="none" opacity="0.55"/>
<path d="M325,1014 L150,1200" stroke="#3d3672" stroke-width="1.6" fill="none" opacity="0.5"/>
<path d="M475,1014 L650,1200" stroke="#3d3672" stroke-width="1.6" fill="none" opacity="0.5"/>
<path d="M538,1014 L860,1200" stroke="#3d3672" stroke-width="1.6" fill="none" opacity="0.55"/>
<path d="M-10,1082 Q400,1094 810,1082" stroke="#3d3672" stroke-width="1.4" fill="none" opacity="0.4"/>
<path d="M-10,1156 Q400,1172 810,1156" stroke="#3d3672" stroke-width="1.4" fill="none" opacity="0.35"/>
<ellipse cx="400" cy="1120" rx="400" ry="80" fill="url(#taiwan-warmglow)" pointer-events="none"/>

<ellipse cx="700" cy="1148" rx="120" ry="20" fill="url(#taiwan-cast)"/>
<rect x="620" y="1054" width="180" height="12" rx="4" fill="#7a4b2c"/>
<rect x="620" y="1054" width="180" height="4" rx="2" fill="#b17b48"/>
<rect x="632" y="1066" width="10" height="82" fill="#5d3820"/>
<rect x="778" y="1066" width="10" height="82" fill="#4a2c17"/>
<rect x="620" y="1066" width="180" height="12" fill="url(#taiwan-underawn)"/>

<ellipse cx="770" cy="1054" rx="26" ry="6" fill="#07091c" opacity="0.45"/>
<path d="M770,1050 L748,1034 A27,27 0 0 1 792,1034 Z" fill="#c93f22"/>
<path d="M770,1050 L748,1034 A27,27 0 0 1 770,1023 Z" fill="#e8583a"/>
<path d="M748,1034 A27,27 0 0 1 792,1034" stroke="#ffd9a2" stroke-width="1.7" fill="none"/>
<ellipse cx="700" cy="1054" rx="30" ry="7" fill="#07091c" opacity="0.45"/>
<path d="M700,1052 L672,1032 A34,34 0 0 1 728,1032 Z" fill="#e8d3b2"/>
<path d="M700,1052 L672,1032 A34,34 0 0 1 700,1016 Z" fill="#fff6e6"/>
<path d="M700,1052 L672,1032 A34,34 0 0 1 728,1032 Z" fill="none" stroke="#d0b892" stroke-width="1.5"/>
<circle cx="686" cy="1024" r="4" fill="#d0608f"/>
<circle cx="700" cy="1016" r="4" fill="#d0608f"/>

<ellipse cx="656" cy="1054" rx="26" ry="6" fill="#07091c" opacity="0.5"/>
<ellipse cx="656" cy="1080" rx="52" ry="42" fill="url(#taiwan-purpleglow)" pointer-events="none" opacity="0.4"/>
<rect x="632" y="1018" width="48" height="36" rx="5" fill="url(#taiwan-plum)"/>
<rect x="632" y="1018" width="48" height="7" rx="3" fill="#4a3d72"/>
<rect x="632" y="1018" width="9" height="36" rx="4" fill="#584c7c" opacity="0.6"/>
<rect x="636" y="982" width="12" height="40" rx="5" fill="#7a4ec4"/>
<rect x="638" y="984" width="4" height="36" rx="2" fill="#c2a4f7" opacity="0.7"/>
<rect x="666" y="978" width="12" height="44" rx="5" fill="url(#taiwan-amethyst)"/>
<path d="M672,980 l5,-8 l6,-1 l-4,-5 l2,-6 l-6,3 l-6,-3 l2,6 l-4,5 l6,1 Z" fill="#b183f5"/>
<g data-obj="lightstick" transform="translate(646 972)">
<circle cx="14" cy="13" r="13" fill="url(#taiwan-amethyst)"/>
<circle cx="14" cy="13" r="9" fill="#a983f0"/>
<path d="M14,20 c-5,-4 -7.5,-6.5 -7.5,-9 c0,-2 2,-3.4 4,-3.4 c1.2,0 2.5,0.7 3.5,1.9 c1,-1.2 2.3,-1.9 3.5,-1.9 c2,0 4,1.4 4,3.4 c0,2.5 -2.5,5 -7.5,9 Z" fill="#5c3499"/>
<ellipse cx="8.5" cy="7.5" rx="3.8" ry="4.8" fill="#ffffff" opacity="0.6"/>
<path d="M24,6 a13,13 0 0 1 -8,19" stroke="#e0ccff" stroke-width="1.3" fill="none" opacity="0.6"/>
<rect x="5" y="24" width="18" height="7" rx="3" fill="#c0b0e6"/>
<rect x="5" y="24" width="6" height="7" rx="3" fill="#e2d8f5"/>
<rect x="7.5" y="30" width="13" height="22" rx="5" fill="#efe6f7"/>
<rect x="16" y="31" width="4.5" height="20" rx="2" fill="#bfb1d6"/>
<rect x="9" y="31" width="3" height="20" rx="1.5" fill="#ffffff" opacity="0.7"/>
</g>

<ellipse cx="500" cy="1150" rx="110" ry="20" fill="url(#taiwan-cast)"/>
<rect x="404" y="1054" width="176" height="12" rx="4" fill="#7a4b2c"/>
<rect x="404" y="1054" width="176" height="4" rx="2" fill="#b17b48"/>
<rect x="414" y="1066" width="10" height="84" fill="#5d3820"/>
<rect x="560" y="1066" width="10" height="84" fill="#4a2c17"/>
<rect x="404" y="1066" width="176" height="12" fill="url(#taiwan-underawn)"/>

<ellipse cx="439" cy="1054" rx="28" ry="6" fill="#07091c" opacity="0.5"/>
<g data-obj="folding-fan" transform="translate(408 1012) rotate(-7 31 40)">
<path d="M31,40 L2,20 A34,34 0 0 1 60,20 Z" fill="#c93f22"/>
<path d="M31,40 L2,20 A34,34 0 0 1 31,6 Z" fill="#e8583a"/>
<path d="M31,40 L11,26 A23,23 0 0 1 51,26 Z" fill="#e8863a"/>
<path d="M31,40 L11,26 A23,23 0 0 1 31,17 Z" fill="#f7a55c"/>
<path d="M31,40 L18,31 A14,14 0 0 1 44,31 Z" fill="#f2b05e"/>
<path d="M31,40 L2,20 M31,40 L11,10 M31,40 L31,4 M31,40 L51,10 M31,40 L60,20" stroke="#8c3418" stroke-width="1.5" fill="none" opacity="0.65"/>
<path d="M2,20 A34,34 0 0 1 60,20" stroke="#ffd9a2" stroke-width="2" fill="none"/>
<circle cx="31" cy="39" r="3.5" fill="#c98b4a"/>
</g>

<ellipse cx="506" cy="1054" rx="22" ry="5" fill="#07091c" opacity="0.5"/>
<g data-obj="pinwheel">
<path d="M506,988 q-22,-14 -6,-22 q14,4 6,22 Z" fill="#38c6d9"/>
<path d="M506,988 q-16,-12 -6,-20 q6,6 6,20 Z" fill="#7de8f5"/>
<path d="M506,988 q14,-22 22,-6 q-4,14 -22,6 Z" fill="#f2b23c"/>
<path d="M506,988 q13,-18 20,-8 q-4,8 -20,8 Z" fill="#ffd68a"/>
<path d="M506,988 q22,14 6,22 q-14,-4 -6,-22 Z" fill="#c94f80"/>
<path d="M506,988 q-14,22 -22,6 q4,-14 22,-6 Z" fill="#3fae86"/>
<circle cx="506" cy="988" r="4.5" fill="#f7e9cf"/>
<circle cx="504.6" cy="986.6" r="2" fill="#ffffff" opacity="0.8"/>
</g>
<path d="M506,1010 l0,20" stroke="#b98f57" stroke-width="2.4" fill="none"/>
<rect x="490" y="1024" width="32" height="30" rx="4" fill="url(#taiwan-plum)"/>
<rect x="490" y="1024" width="32" height="6" rx="3" fill="#4a3d72"/>

<ellipse cx="552" cy="1056" rx="26" ry="5" fill="#07091c" opacity="0.5"/>
<g data-obj="paper-plane">
<path d="M526,1016 L578,1034 L542,1042 Z" fill="#fdfbf4"/>
<path d="M526,1016 L556,1027 L542,1042 Z" fill="#e2e8f4"/>
<path d="M542,1042 L578,1034 L548,1054 Z" fill="#9aa7c4"/>
<path d="M542,1042 L560,1038 L548,1054 Z" fill="#7c89a8"/>
<path d="M526,1016 L542,1042 L548,1054" fill="none" stroke="#6d7994" stroke-width="1.1"/>
<path d="M526,1016 L578,1034" stroke="#ffffff" stroke-width="1.3" opacity="0.85" fill="none"/>
</g>

<ellipse cx="290" cy="1152" rx="110" ry="20" fill="url(#taiwan-cast)"/>
<rect x="210" y="1054" width="160" height="12" rx="4" fill="#7a4b2c"/>
<rect x="210" y="1054" width="160" height="4" rx="2" fill="#b17b48"/>
<rect x="220" y="1066" width="10" height="86" fill="#5d3820"/>
<rect x="350" y="1066" width="10" height="86" fill="#4a2c17"/>
<rect x="210" y="1066" width="160" height="12" fill="url(#taiwan-underawn)"/>

<ellipse cx="271" cy="1054" rx="30" ry="6" fill="#07091c" opacity="0.5"/>
<g data-obj="cabbages">
<ellipse cx="256" cy="1046" rx="17" ry="9" fill="#2e9c78"/>
<ellipse cx="252" cy="1043" rx="9" ry="4" fill="#7fdcb4" opacity="0.6"/>
<ellipse cx="286" cy="1044" rx="17" ry="9" fill="#3fae86"/>
<ellipse cx="282" cy="1041" rx="9" ry="4" fill="#8fe3bd" opacity="0.55"/>
<ellipse cx="271" cy="1032" rx="15" ry="9" fill="#48bd93"/>
<ellipse cx="267" cy="1029" rx="8" ry="4" fill="#a6ecc9" opacity="0.6"/>
<path d="M264,1030 q7,-6 14,0" stroke="#14543f" stroke-width="2" fill="none"/>
</g>
<ellipse cx="332" cy="1054" rx="24" ry="5" fill="#07091c" opacity="0.5"/>
<rect x="310" y="1022" width="46" height="32" rx="4" fill="url(#taiwan-crate)"/>
<rect x="310" y="1022" width="46" height="7" rx="3" fill="url(#taiwan-cratetop)"/>

<ellipse cx="240" cy="1178" rx="44" ry="10" fill="url(#taiwan-cast)"/>
<ellipse cx="240" cy="1177" rx="30" ry="4.6" fill="#000000" opacity="0.4"/>
<g data-obj="rice-sack">
<path d="M214,1178 q-8,-46 26,-50 q34,4 26,50 Z" fill="url(#taiwan-sack)"/>
<path d="M214,1178 q-8,-46 26,-50 q-9,20 -11,50 Z" fill="#c0a87f" opacity="0.55"/>
<path d="M260,1136 q9,16 6,42 l-12,0 q4,-26 -2,-42 Z" fill="#493c2a" opacity="0.4"/>
<ellipse cx="240" cy="1130" rx="25" ry="8" fill="#6b5a44"/>
<ellipse cx="234" cy="1128" rx="13" ry="4" fill="#a08a68" opacity="0.7"/>
<path d="M222,1152 l36,0" stroke="#6b5a44" stroke-width="3.4" fill="none"/>
</g>

<ellipse cx="86" cy="1176" rx="110" ry="22" fill="url(#taiwan-cast)"/>
<path d="M6,1092 q0,-36 34,-38 l44,2 l0,40 l-78,4 Z" fill="#2f5f88"/>
<path d="M6,1092 q0,-36 34,-38 l44,2 l0,11 l-64,4 q-8,9 -8,23 Z" fill="#5a92c2"/>
<path d="M50,1056 l34,2 l0,36 l-34,2 Z" fill="#25506f" opacity="0.4"/>
<g data-obj="scooter-seat">
<rect x="14" y="1042" width="70" height="19" rx="8" fill="url(#taiwan-steel)"/>
<rect x="14" y="1042" width="70" height="6" rx="4" fill="#6c7794"/>
<rect x="14" y="1042" width="26" height="5" rx="3" fill="#95a1bd" opacity="0.7"/>
<path d="M22,1053 l54,0" stroke="#161c27" stroke-width="2.4" fill="none"/>
<circle cx="78" cy="1051" r="3" fill="#8e9aa8"/>
</g>
<path d="M76,1084 l50,0 l0,14 l-50,0 Z" fill="#254a6a"/>
<path d="M122,1108 l0,-30 q0,-40 24,-54 l14,9 q-20,16 -20,45 l0,30 Z" fill="#2f5f88"/>
<path d="M146,1024 l14,9 q-13,11 -17,27 q-3,-20 3,-36 Z" fill="#5a92c2"/>
<ellipse cx="160" cy="1042" rx="46" ry="40" fill="url(#taiwan-warmglow)" pointer-events="none"/>
<g data-obj="headlight">
<ellipse cx="156" cy="1038" rx="12" ry="14" fill="url(#taiwan-metal)"/>
<ellipse cx="157" cy="1037" rx="7" ry="9" fill="#fff0bb"/>
<ellipse cx="155" cy="1033" rx="3" ry="4" fill="#fffdf2"/>
<path d="M140,1018 l40,-9 l3,10 l-40,9 Z" fill="url(#taiwan-steel)"/>
<path d="M140,1018 l40,-9 l1,3.4 l-40,9 Z" fill="#7d89a8" opacity="0.7"/>
<path d="M146,1022 l30,-7" stroke="#4a5468" stroke-width="2" fill="none"/>
</g>
<circle cx="34" cy="1128" r="28" fill="#1a1828"/>
<circle cx="34" cy="1128" r="13" fill="#454f60"/>
<circle cx="34" cy="1128" r="5" fill="#8e9aa8"/>
<g data-obj="wheel">
<circle cx="152" cy="1128" r="25" fill="#1a1828"/>
<path d="M152,1103 a25,25 0 0 1 0,50 a19,25 0 0 0 0,-50 Z" fill="#0d0c16" opacity="0.8"/>
<circle cx="152" cy="1128" r="24" fill="none" stroke="#3c4152" stroke-width="1.4" opacity="0.7"/>
<circle cx="152" cy="1128" r="14" fill="url(#taiwan-metal)"/>
<circle cx="152" cy="1128" r="5" fill="#69748a"/>
<path d="M152,1114 l0,28 M138,1128 l28,0" stroke="#39414f" stroke-width="2.4" fill="none"/>
</g>

<ellipse cx="392" cy="1186" rx="30" ry="7" fill="url(#taiwan-cast)"/>
<ellipse cx="392" cy="1185" rx="20" ry="3.4" fill="#000000" opacity="0.4"/>
<g data-obj="takeout-box">
<path d="M370,1154 l44,0 l-5,32 l-34,0 Z" fill="url(#taiwan-cream)"/>
<path d="M370,1154 l12,0 l-3,32 l-9,0 Z" fill="#fffaf0"/>
<path d="M403,1154 l11,0 l-5,32 l-9,0 Z" fill="#cbb694" opacity="0.7"/>
<path d="M370,1154 l44,0 l-1,6 l-42,0 Z" fill="#e0cbab"/>
<path d="M378,1154 q14,-12 28,0" stroke="#b9a184" stroke-width="2.4" fill="none"/>
<path d="M392,1160 l0,26" stroke="#d1443a" stroke-width="3" fill="none"/>
</g>

<ellipse cx="470" cy="1188" rx="28" ry="7" fill="url(#taiwan-cast)"/>
<ellipse cx="470" cy="1187" rx="18" ry="3.2" fill="#000000" opacity="0.4"/>
<g data-obj="coin-purse">
<path d="M449,1188 q-4,-30 21,-32 q25,2 21,32 Z" fill="#8f2019"/>
<path d="M449,1188 q-4,-30 21,-32 q-9,12 -10,32 Z" fill="#d0453a"/>
<path d="M479,1158 q13,6 12,30 l-9,0 q1,-22 -5,-30 Z" fill="#61120e" opacity="0.6"/>
<path d="M455,1160 q15,-10 30,0" stroke="#f2b23c" stroke-width="2.6" fill="none"/>
<circle cx="470" cy="1174" r="5" fill="#f2b23c"/>
<circle cx="468.5" cy="1172.6" r="2.2" fill="#ffdc96" opacity="0.85"/>
</g>

<ellipse cx="596" cy="1188" rx="34" ry="8" fill="url(#taiwan-cast)"/>
<ellipse cx="596" cy="1187" rx="22" ry="3.6" fill="#000000" opacity="0.4"/>
<g data-obj="stray-cat">
<path d="M570,1186 q0,-30 22,-32 q22,2 22,32 Z" fill="#2b2438"/>
<path d="M592,1154 q16,4 18,32 l-12,0 q2,-24 -6,-32 Z" fill="#1a1524"/>
<path d="M570,1186 q0,-30 22,-32 q-10,8 -12,32 Z" fill="#463c5e"/>
<path d="M576,1158 l1,-11 l8,7 Z" fill="#372e49"/>
<path d="M608,1158 l3,-11 l5,8 Z" fill="#2b2438"/>
<path d="M614,1186 q10,-8 8,-18" stroke="#2b2438" stroke-width="4" fill="none" stroke-linecap="round"/>
<circle cx="585" cy="1166" r="2.6" fill="#9fe8cb"/>
<circle cx="602" cy="1166" r="2.6" fill="#9fe8cb"/>
</g>

<ellipse cx="684" cy="1178" rx="34" ry="14" fill="url(#taiwan-cast)"/>
<g data-obj="manhole">
<ellipse cx="684" cy="1174" rx="24" ry="16" fill="#232a36"/>
<ellipse cx="684" cy="1172" rx="19" ry="12" fill="url(#taiwan-steel)"/>
<ellipse cx="678" cy="1169" rx="9" ry="4.6" fill="#7d89a8" opacity="0.5"/>
<path d="M670,1166 l28,0 M668,1172 l32,0 M670,1178 l28,0" stroke="#232a36" stroke-width="2" fill="none"/>
</g>

<ellipse cx="762" cy="1190" rx="24" ry="6" fill="url(#taiwan-cast)"/>
<ellipse cx="762" cy="1189" rx="15" ry="2.8" fill="#000000" opacity="0.4"/>
<g data-obj="mouse">
<ellipse cx="762" cy="1178" rx="16" ry="10" fill="#443b5c"/>
<ellipse cx="758" cy="1174" rx="8" ry="4.4" fill="#6b5f85" opacity="0.7"/>
<circle cx="749" cy="1174" r="7" fill="#5e5273"/>
<circle cx="748" cy="1168" r="4" fill="#372e49"/>
<path d="M778,1178 q10,-2 10,-10" stroke="#5e5273" stroke-width="2.4" fill="none"/>
<circle cx="745" cy="1174" r="1.5" fill="#e8d2b4"/>
</g>
</svg>`
});
