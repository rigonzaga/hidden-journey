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
<stop offset="0" stop-color="#0a0c22" stop-opacity="0.55"/>
<stop offset="1" stop-color="#0a0c22" stop-opacity="0"/>
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
<linearGradient id="taiwan-pinkfill" x1="0" y1="0" x2="1" y2="0">
<stop offset="0" stop-color="#ffe0e9"/>
<stop offset="0.45" stop-color="#e8809f"/>
<stop offset="0.86" stop-color="#9c4460"/>
<stop offset="1" stop-color="#d9718e"/>
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
<linearGradient id="taiwan-wood" x1="0" y1="0" x2="0" y2="1">
<stop offset="0" stop-color="#a4693c"/>
<stop offset="0.5" stop-color="#7a4526"/>
<stop offset="1" stop-color="#492a17"/>
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
<stop offset="0" stop-color="#171d43"/>
<stop offset="0.6" stop-color="#232a55"/>
<stop offset="1" stop-color="#33305e"/>
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
<stop offset="0" stop-color="#c98e58"/>
<stop offset="0.22" stop-color="#96603a"/>
<stop offset="1" stop-color="#57331e"/>
</linearGradient>
<linearGradient id="taiwan-ground" x1="0" y1="0" x2="0" y2="1">
<stop offset="0" stop-color="#312b59"/>
<stop offset="1" stop-color="#191537"/>
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
</defs>

<rect x="0" y="0" width="800" height="1200" fill="#0b0f28"/>
<rect x="0" y="0" width="800" height="520" fill="url(#taiwan-sky)"/>
<rect x="0" y="300" width="800" height="220" fill="url(#taiwan-haze)"/>

<circle cx="40" cy="52" r="1.8" fill="#dfe4ff" opacity="0.85"/>
<circle cx="212" cy="46" r="1.4" fill="#dfe4ff" opacity="0.65"/>
<circle cx="300" cy="96" r="1.1" fill="#dfe4ff" opacity="0.5"/>
<circle cx="534" cy="64" r="1.7" fill="#dfe4ff" opacity="0.8"/>
<circle cx="596" cy="30" r="1.2" fill="#dfe4ff" opacity="0.55"/>
<circle cx="752" cy="104" r="1.6" fill="#dfe4ff" opacity="0.7"/>
<circle cx="88" cy="140" r="1.3" fill="#dfe4ff" opacity="0.55"/>
<circle cx="420" cy="148" r="1.4" fill="#dfe4ff" opacity="0.6"/>

<ellipse cx="662" cy="92" rx="164" ry="140" fill="url(#taiwan-moonglow)" pointer-events="none"/>
<circle cx="662" cy="92" r="74" fill="url(#taiwan-moonglow)" pointer-events="none" opacity="0.75"/>
<g data-obj="moon">
<circle cx="662" cy="92" r="36" fill="url(#taiwan-moonface)"/>
<path d="M662,56 a36,36 0 0 1 0,72 a30,36 0 0 0 0,-72 Z" fill="#c8ad7c" opacity="0.35"/>
<circle cx="662" cy="92" r="35" fill="none" stroke="#fffaea" stroke-width="1.5" opacity="0.45"/>
<ellipse cx="650" cy="81" rx="6.5" ry="5.5" fill="#dcc38f" opacity="0.75"/>
<ellipse cx="649" cy="79.5" rx="5" ry="3.6" fill="#f4e3b7" opacity="0.5"/>
<ellipse cx="675" cy="104" rx="5" ry="4.2" fill="#d2b47f" opacity="0.7"/>
<ellipse cx="657" cy="108" rx="3.2" ry="2.6" fill="#d2b47f" opacity="0.6"/>
</g>

<ellipse cx="236" cy="76" rx="52" ry="26" fill="url(#taiwan-moonglow)" pointer-events="none" opacity="0.35"/>
<g data-obj="paper-plane">
<path d="M210,58 L262,76 L226,84 Z" fill="#fdfbf4"/>
<path d="M210,58 L240,69 L226,84 Z" fill="#e2e8f4"/>
<path d="M226,84 L262,76 L232,96 Z" fill="#9aa7c4"/>
<path d="M226,84 L244,80 L232,96 Z" fill="#7c89a8"/>
<path d="M210,58 L226,84 L232,96" fill="none" stroke="#6d7994" stroke-width="1.1"/>
<path d="M210,58 L262,76" stroke="#ffffff" stroke-width="1.3" opacity="0.85" fill="none"/>
</g>
<path d="M118,120 L142,128 L126,132 Z" fill="#8f9bb5" opacity="0.5"/>
<path d="M556,196 L578,204 L562,208 Z" fill="#7c89a8" opacity="0.4"/>

<ellipse cx="746" cy="184" rx="56" ry="52" fill="url(#taiwan-cyanglow)" pointer-events="none" opacity="0.3"/>
<g data-obj="swallow-kite">
<path d="M746,164 L774,180 L752,186 L746,204 L740,186 L718,180 Z" fill="#2ba7ba"/>
<path d="M746,164 L752,186 L746,204 L740,186 Z" fill="#7de8f5"/>
<path d="M746,164 L740,186 L718,180 Z" fill="#49d3e4"/>
<path d="M746,164 L774,180 L752,186 Z" fill="#1c8496"/>
<path d="M746,164 L718,180 M746,164 L774,180" stroke="#a8f4fb" stroke-width="1.2" opacity="0.7" fill="none"/>
<path d="M746,204 q7,10 -1,16 q10,-2 12,-12" stroke="#f2b23c" stroke-width="2.4" fill="none"/>
<path d="M746,204 l0,16" stroke="#3a3f6b" stroke-width="1.4" fill="none"/>
</g>
<path d="M92,214 L104,220 L94,224 L92,231 L90,224 L80,220 Z" fill="#2f5f80" opacity="0.45"/>

<ellipse cx="514" cy="152" rx="52" ry="50" fill="url(#taiwan-skyglow)" pointer-events="none" opacity="0.5"/>
<path d="M497,134 Q514,121 531,134 L535,164 Q514,176 493,164 Z" fill="url(#taiwan-paperlant)"/>
<path d="M497,134 Q514,121 514,124 L514,174 Q504,171 493,164 Z" fill="#ffdc96" opacity="0.6"/>
<ellipse cx="514" cy="166" rx="16" ry="4.5" fill="#8e4413"/>
<ellipse cx="514" cy="163" rx="6" ry="7" fill="#fff2c4"/>
<path d="M508,172 q-6,16 2,28" stroke="#e8a95f" stroke-width="2.2" fill="none" opacity="0.7"/>

<ellipse cx="600" cy="188" rx="56" ry="52" fill="url(#taiwan-skyglow)" pointer-events="none" opacity="0.5"/>
<path d="M578,166 Q600,150 622,166 L627,198 Q600,212 573,198 Z" fill="url(#taiwan-paperlant)"/>
<path d="M578,166 Q600,150 600,153 L600,208 Q587,205 573,198 Z" fill="#ffdc96" opacity="0.5"/>
<path d="M583,157 L578,203" stroke="#fff0c8" stroke-width="1.4" fill="none" opacity="0.6"/>
<ellipse cx="600" cy="200" rx="18" ry="5" fill="#8e4413"/>
<ellipse cx="600" cy="196" rx="6" ry="8" fill="#fff2c4"/>
<path d="M585,204 L589,218 M615,204 L611,218" stroke="#b8804a" stroke-width="1.5" fill="none"/>
<rect x="586" y="216" width="28" height="14" rx="3" fill="url(#taiwan-crate)"/>
<rect x="586" y="216" width="28" height="4" rx="2" fill="#c08b56"/>

<ellipse cx="271" cy="284" rx="46" ry="44" fill="url(#taiwan-skyglow)" pointer-events="none" opacity="0.28"/>
<path d="M254,266 Q271,253 288,266 L292,297 Q271,309 250,297 Z" fill="#4a5490"/>
<path d="M254,266 Q271,253 271,256 L271,307 Q262,304 250,297 Z" fill="#68729f" opacity="0.7"/>
<ellipse cx="271" cy="299" rx="16" ry="4.6" fill="#232a52"/>
<ellipse cx="271" cy="296" rx="5" ry="6" fill="#ffd8a0" opacity="0.75"/>

<ellipse cx="453" cy="236" rx="58" ry="54" fill="url(#taiwan-skyglow)" pointer-events="none" opacity="0.55"/>
<g data-obj="sky-lantern" transform="translate(432 206)">
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

<ellipse cx="140" cy="322" rx="150" ry="20" fill="#1c2358" opacity="0.45"/>
<ellipse cx="640" cy="336" rx="170" ry="18" fill="#1c2358" opacity="0.4"/>

<rect x="0" y="352" width="70" height="118" fill="url(#taiwan-bldgfar)"/>
<rect x="62" y="312" width="54" height="158" fill="url(#taiwan-bldgfar)" opacity="0.85"/>
<rect x="62" y="312" width="4" height="158" fill="#37417d" opacity="0.6"/>
<rect x="112" y="372" width="80" height="98" fill="url(#taiwan-bldgfar)"/>
<rect x="188" y="330" width="46" height="140" fill="url(#taiwan-bldgfar)" opacity="0.85"/>
<rect x="188" y="330" width="4" height="140" fill="#37417d" opacity="0.55"/>
<rect x="230" y="357" width="96" height="113" fill="url(#taiwan-bldgfar)"/>
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
<circle cx="525" cy="188" r="14" fill="url(#taiwan-warmglow)" pointer-events="none"/>

<g data-obj="billboard">
<rect x="398" y="330" width="44" height="30" rx="2" fill="#171e46"/>
<rect x="398" y="330" width="44" height="6" rx="2" fill="#2c3573"/>
<rect x="398" y="330" width="4" height="30" fill="#38428c" opacity="0.7"/>
<rect x="404" y="340" width="15" height="13" rx="2" fill="#b47cff" opacity="0.8"/>
<rect x="423" y="341" width="13" height="11" rx="2" fill="#38c6d9" opacity="0.6"/>
<path d="M404,360 l0,10 M436,360 l0,10" stroke="#131940" stroke-width="3" fill="none"/>
</g>
<ellipse cx="420" cy="345" rx="42" ry="30" fill="url(#taiwan-neonglow)" pointer-events="none" opacity="0.35"/>

<g data-obj="water-tank">
<ellipse cx="264" cy="352" rx="22" ry="6" fill="url(#taiwan-cast)"/>
<rect x="246" y="328" width="36" height="18" rx="4" fill="#1a2149"/>
<rect x="246" y="328" width="9" height="18" rx="4" fill="#333d7f" opacity="0.7"/>
<ellipse cx="264" cy="328" rx="18" ry="5.5" fill="#2b3468"/>
<ellipse cx="260" cy="327" rx="10" ry="3" fill="#414c94" opacity="0.7"/>
<rect x="262" y="314" width="4" height="14" fill="#1a2149"/>
<path d="M250,346 l0,7 M278,346 l0,7" stroke="#141a3c" stroke-width="3" fill="none"/>
</g>

<rect x="0" y="352" width="70" height="7" fill="#2b3468" opacity="0.5"/>
<rect x="112" y="372" width="80" height="6" fill="#2b3468" opacity="0.45"/>
<rect x="376" y="364" width="110" height="6" fill="#2b3468" opacity="0.4"/>
<rect x="646" y="300" width="26" height="24" fill="#131a3c"/>
<rect x="646" y="300" width="26" height="5" fill="#232c5f"/>
<rect x="342" y="296" width="38" height="24" rx="4" fill="#141a3e"/>
<rect x="342" y="296" width="38" height="6" rx="3" fill="#252e63"/>
<rect x="756" y="304" width="30" height="40" fill="#141a3e"/>
<rect x="756" y="304" width="6" height="40" fill="#2b3468" opacity="0.6"/>

<rect x="14" y="366" width="5" height="7" fill="#ffd98a" opacity="0.5"/>
<rect x="70" y="326" width="5" height="7" fill="#ffd98a" opacity="0.55"/>
<rect x="124" y="386" width="5" height="7" fill="#ffd98a" opacity="0.45"/>
<rect x="200" y="344" width="5" height="7" fill="#ffd98a" opacity="0.45"/>
<rect x="262" y="374" width="5" height="7" fill="#ffd98a" opacity="0.4"/>
<rect x="330" y="330" width="5" height="7" fill="#ffd98a" opacity="0.5"/>
<rect x="390" y="378" width="5" height="7" fill="#ffd98a" opacity="0.45"/>
<rect x="492" y="348" width="5" height="7" fill="#ffd98a" opacity="0.5"/>
<rect x="620" y="336" width="5" height="7" fill="#ffd98a" opacity="0.55"/>
<rect x="748" y="356" width="5" height="7" fill="#ffd98a" opacity="0.5"/>
<circle cx="16.5" cy="369" r="8" fill="url(#taiwan-bulbglow)" pointer-events="none" opacity="0.5"/>
<circle cx="332.5" cy="333" r="8" fill="url(#taiwan-bulbglow)" pointer-events="none" opacity="0.5"/>
<circle cx="622.5" cy="339" r="8" fill="url(#taiwan-bulbglow)" pointer-events="none" opacity="0.5"/>

<rect x="-10" y="404" width="140" height="88" fill="url(#taiwan-bldgmid)"/>
<rect x="-10" y="404" width="140" height="7" fill="#2f3872" opacity="0.7"/>
<rect x="120" y="426" width="110" height="66" fill="#161b41"/>
<rect x="120" y="426" width="110" height="6" fill="#2a3268" opacity="0.6"/>
<rect x="220" y="386" width="150" height="106" fill="url(#taiwan-bldgmid)"/>
<rect x="220" y="386" width="150" height="7" fill="#2f3872" opacity="0.65"/>
<rect x="356" y="416" width="120" height="76" fill="#161b41"/>
<rect x="460" y="398" width="130" height="94" fill="url(#taiwan-bldgmid)"/>
<rect x="460" y="398" width="130" height="7" fill="#2f3872" opacity="0.6"/>
<rect x="576" y="428" width="110" height="64" fill="#161b41"/>
<rect x="672" y="394" width="140" height="98" fill="url(#taiwan-bldgmid)"/>
<rect x="672" y="394" width="140" height="7" fill="#2f3872" opacity="0.6"/>
<rect x="64" y="434" width="6" height="8" fill="#ffcf7d" opacity="0.55"/>
<rect x="240" y="402" width="6" height="8" fill="#ffcf7d" opacity="0.6"/>
<rect x="404" y="440" width="6" height="8" fill="#ffcf7d" opacity="0.45"/>
<rect x="540" y="432" width="6" height="8" fill="#ffcf7d" opacity="0.5"/>
<rect x="692" y="408" width="6" height="8" fill="#ffcf7d" opacity="0.55"/>
<rect x="756" y="428" width="6" height="8" fill="#ffcf7d" opacity="0.5"/>
<circle cx="243" cy="406" r="9" fill="url(#taiwan-bulbglow)" pointer-events="none" opacity="0.45"/>
<circle cx="695" cy="412" r="9" fill="url(#taiwan-bulbglow)" pointer-events="none" opacity="0.45"/>

<g data-obj="laundry">
<path d="M140,286 q33,10 66,-2" stroke="#3a3f6b" stroke-width="1.6" fill="none"/>
<path d="M150,292 l18,0 l6,8 l-5,3 l-3,-3 l0,20 l-14,0 l0,-20 l-3,3 l-5,-3 Z" fill="#4a5480"/>
<path d="M150,292 l9,0 l0,31 l-5,0 l0,-20 l-3,3 l-5,-3 Z" fill="#6a76a6"/>
<path d="M168,292 l6,8 l-5,3 l-3,-3 l0,20 l-4,0 l0,-28 Z" fill="#333c66"/>
<path d="M180,290 l16,0 l5,7 l-4,3 l-3,-2 l0,18 l-12,0 l0,-18 l-3,2 l-4,-3 Z" fill="#5f6a99"/>
<path d="M180,290 l8,0 l0,26 l-4,0 l0,-18 l-3,2 l-4,-3 Z" fill="#7d88b8"/>
<circle cx="152" cy="291" r="2" fill="#c3cbe0"/>
<circle cx="196" cy="289" r="2" fill="#c3cbe0"/>
</g>

<g data-obj="roof-cat">
<ellipse cx="472" cy="378" rx="26" ry="6" fill="url(#taiwan-cast)"/>
<path d="M456,376 q0,-24 14,-26 q14,2 14,26 Z" fill="#181d3a"/>
<path d="M470,350 q14,2 14,26 l-8,0 q0,-22 -6,-26 Z" fill="#0f1329"/>
<path d="M456,376 q0,-24 14,-26 q-6,6 -7,26 Z" fill="#2c3460"/>
<path d="M460,352 l4,-10 l6,7 Z" fill="#232a4e"/>
<path d="M480,352 l4,-10 l4,9 Z" fill="#181d3a"/>
<path d="M484,376 q14,-6 18,4" stroke="#181d3a" stroke-width="4" fill="none" stroke-linecap="round"/>
<circle cx="466" cy="356" r="2.2" fill="#ffd08a"/>
<circle cx="478" cy="356" r="2.2" fill="#ffd08a"/>
<path d="M457,352 q6,-24 13,-26" stroke="#4a548a" stroke-width="1.3" fill="none" opacity="0.7"/>
</g>

<g data-obj="traffic-light">
<ellipse cx="30" cy="458" rx="16" ry="5" fill="url(#taiwan-cast)"/>
<rect x="18" y="396" width="24" height="48" rx="6" fill="#161b41"/>
<rect x="18" y="396" width="7" height="48" rx="5" fill="#2b3369"/>
<rect x="18" y="396" width="24" height="5" rx="4" fill="#333c78"/>
<circle cx="30" cy="408" r="6" fill="#ff4a3c"/>
<circle cx="28" cy="406" r="2.6" fill="#ffb3a8" opacity="0.8"/>
<circle cx="30" cy="422" r="6" fill="#8a6b28" opacity="0.85"/>
<circle cx="30" cy="436" r="6" fill="#1f5c48" opacity="0.85"/>
<rect x="27" y="444" width="6" height="14" fill="#101538"/>
</g>
<circle cx="30" cy="408" r="16" fill="url(#taiwan-lanternglow)" pointer-events="none" opacity="0.6"/>

<path d="M-10,462 Q200,510 400,470 T810,480" stroke="#2a2f57" stroke-width="3" fill="none"/>
<path d="M-10,498 Q260,546 520,504 T810,516" stroke="#2a2f57" stroke-width="3" fill="none"/>
<path d="M56,490 l10,0 l-5,12 Z" fill="#d94f2b" opacity="0.85"/>
<path d="M120,496 l10,0 l-5,12 Z" fill="#f2b23c" opacity="0.85"/>
<path d="M184,500 l10,0 l-5,12 Z" fill="#2e9c78" opacity="0.85"/>
<path d="M534,488 l10,0 l-5,12 Z" fill="#d94f2b" opacity="0.8"/>
<path d="M598,490 l10,0 l-5,12 Z" fill="#f2b23c" opacity="0.8"/>
<path d="M726,498 l10,0 l-5,12 Z" fill="#2e9c78" opacity="0.8"/>

<g data-obj="hang-basket">
<path d="M319,417 l0,10" stroke="#3a3f6b" stroke-width="1.6" fill="none"/>
<path d="M296,427 l46,0 l-7,28 l-32,0 Z" fill="url(#taiwan-bamboo)"/>
<path d="M296,427 l46,0 l-1,6 l-44,0 Z" fill="#e8c894"/>
<path d="M328,427 l14,0 l-7,28 l-8,0 Z" fill="#6e4d27" opacity="0.4"/>
<path d="M304,435 l30,0 M306,445 l26,0" stroke="#7a5730" stroke-width="1.8" fill="none" opacity="0.8"/>
<path d="M300,427 q19,-14 38,0" stroke="#8f5a35" stroke-width="2.4" fill="none"/>
<path d="M301,428 q18,-12 34,-1" stroke="#e0bb84" stroke-width="1.2" fill="none" opacity="0.7"/>
</g>

<g data-obj="pinwheel">
<path d="M382,447 q-22,-14 -6,-22 q14,4 6,22 Z" fill="#38c6d9"/>
<path d="M382,447 q-16,-12 -6,-20 q6,6 6,20 Z" fill="#7de8f5"/>
<path d="M382,447 q14,-22 22,-6 q-4,14 -22,6 Z" fill="#f2b23c"/>
<path d="M382,447 q13,-18 20,-8 q-4,8 -20,8 Z" fill="#ffd68a"/>
<path d="M382,447 q22,14 6,22 q-14,-4 -6,-22 Z" fill="#c94f80"/>
<path d="M382,447 q-14,22 -22,6 q4,-14 22,-6 Z" fill="#3fae86"/>
<circle cx="382" cy="447" r="4.5" fill="#f7e9cf"/>
<circle cx="380.6" cy="445.6" r="2" fill="#ffffff" opacity="0.8"/>
</g>

<circle cx="486" cy="449" r="34" fill="url(#taiwan-bulbglow)" pointer-events="none" opacity="0.75"/>
<g data-obj="bulb-cage">
<path d="M486,417 l0,8" stroke="#3a3f6b" stroke-width="1.6" fill="none"/>
<path d="M470,425 l32,0 l-4,10 l-24,0 Z" fill="#7c6849"/>
<path d="M470,425 l32,0 l-1,4 l-30,0 Z" fill="#a08a63"/>
<path d="M492,425 l10,0 l-4,10 l-6,0 Z" fill="#4c3f2c"/>
<path d="M474,435 q12,26 24,0" stroke="#9d8862" stroke-width="1.8" fill="none"/>
<path d="M480,435 q6,26 12,0" stroke="#9d8862" stroke-width="1.8" fill="none"/>
<ellipse cx="486" cy="447" rx="8" ry="10" fill="#fff0bb"/>
<ellipse cx="484" cy="444" rx="3.2" ry="4" fill="#ffffff" opacity="0.85"/>
<path d="M486,457 l0,10" stroke="#6b5a44" stroke-width="2" fill="none"/>
</g>

<rect x="0" y="482" width="800" height="330" fill="#171c40"/>
<rect x="0" y="482" width="800" height="14" fill="#252c62" opacity="0.7"/>

<ellipse cx="104" cy="700" rx="118" ry="86" fill="url(#taiwan-warmglow)" pointer-events="none"/>
<rect x="6" y="552" width="196" height="200" fill="url(#taiwan-stallback)"/>
<rect x="0" y="552" width="10" height="200" fill="url(#taiwan-post)"/>
<rect x="192" y="552" width="10" height="200" fill="url(#taiwan-post)"/>
<path d="M-4,524 L206,524 L200,580 L2,580 Z" fill="url(#taiwan-awnred)"/>
<path d="M-4,524 L206,524 L204,538 L-2,538 Z" fill="#ff8a6a" opacity="0.45"/>
<path d="M36,524 L48,580 L26,580 L16,524 Z" fill="#f7e9cf" opacity="0.28"/>
<path d="M116,524 L128,580 L106,580 L96,524 Z" fill="#f7e9cf" opacity="0.28"/>
<path d="M2,580 q12,16 24,0 q12,16 24,0 q12,16 24,0 q12,16 24,0 q12,16 24,0 q12,16 24,0 q12,16 24,0 q12,16 24,0 L200,580 Z" fill="#8b201a"/>
<rect x="6" y="580" width="196" height="24" fill="url(#taiwan-underawn)"/>

<ellipse cx="302" cy="700" rx="118" ry="86" fill="url(#taiwan-warmglow)" pointer-events="none" opacity="0.75"/>
<rect x="204" y="552" width="196" height="200" fill="url(#taiwan-stallback)"/>
<rect x="200" y="552" width="10" height="200" fill="url(#taiwan-post)"/>
<rect x="390" y="552" width="10" height="200" fill="url(#taiwan-post)"/>
<path d="M196,524 L406,524 L400,580 L202,580 Z" fill="url(#taiwan-awngreen)"/>
<path d="M196,524 L406,524 L404,538 L198,538 Z" fill="#7fe0be" opacity="0.4"/>
<path d="M316,524 L328,580 L306,580 L296,524 Z" fill="#f7e9cf" opacity="0.24"/>
<path d="M236,524 L248,580 L226,580 L216,524 Z" fill="#f7e9cf" opacity="0.2"/>
<path d="M202,580 q12,16 24,0 q12,16 24,0 q12,16 24,0 q12,16 24,0 q12,16 24,0 q12,16 24,0 q12,16 24,0 q12,16 24,0 L400,580 Z" fill="#155442"/>
<rect x="204" y="580" width="196" height="24" fill="url(#taiwan-underawn)"/>

<ellipse cx="500" cy="700" rx="118" ry="86" fill="url(#taiwan-warmglow)" pointer-events="none" opacity="0.8"/>
<rect x="402" y="552" width="196" height="200" fill="url(#taiwan-stallback)"/>
<rect x="398" y="552" width="10" height="200" fill="url(#taiwan-post)"/>
<rect x="588" y="552" width="10" height="200" fill="url(#taiwan-post)"/>
<path d="M394,524 L604,524 L598,580 L400,580 Z" fill="url(#taiwan-awnorange)"/>
<path d="M394,524 L604,524 L602,538 L396,538 Z" fill="#ffa06a" opacity="0.4"/>
<path d="M434,524 L446,580 L424,580 L414,524 Z" fill="#f7e9cf" opacity="0.28"/>
<path d="M514,524 L526,580 L504,580 L494,524 Z" fill="#f7e9cf" opacity="0.28"/>
<path d="M400,580 q12,16 24,0 q12,16 24,0 q12,16 24,0 q12,16 24,0 q12,16 24,0 q12,16 24,0 q12,16 24,0 q12,16 24,0 L598,580 Z" fill="#8e2f14"/>
<rect x="402" y="580" width="196" height="24" fill="url(#taiwan-underawn)"/>

<ellipse cx="700" cy="700" rx="120" ry="86" fill="url(#taiwan-warmglow)" pointer-events="none" opacity="0.7"/>
<rect x="600" y="552" width="200" height="200" fill="url(#taiwan-stallback)"/>
<rect x="596" y="552" width="10" height="200" fill="url(#taiwan-post)"/>
<rect x="790" y="552" width="10" height="200" fill="url(#taiwan-post)"/>
<path d="M592,524 L804,524 L800,580 L598,580 Z" fill="url(#taiwan-awnteal)"/>
<path d="M592,524 L804,524 L802,538 L594,538 Z" fill="#6fdcb6" opacity="0.38"/>
<path d="M712,524 L724,580 L702,580 L692,524 Z" fill="#f7e9cf" opacity="0.22"/>
<path d="M632,524 L644,580 L622,580 L612,524 Z" fill="#f7e9cf" opacity="0.2"/>
<path d="M598,580 q12,16 24,0 q12,16 24,0 q12,16 24,0 q12,16 24,0 q12,16 24,0 q12,16 24,0 q12,16 24,0 q12,16 24,0 L800,580 Z" fill="#0f4436"/>
<rect x="600" y="580" width="200" height="24" fill="url(#taiwan-underawn)"/>

<ellipse cx="88" cy="640" rx="130" ry="104" fill="url(#taiwan-neonglow)" pointer-events="none" opacity="0.7"/>
<rect x="16" y="596" width="180" height="104" rx="9" fill="#12163a" stroke="#8e5ad6" stroke-width="2.5"/>
<rect x="16" y="596" width="180" height="6" rx="3" fill="#3a2f78"/>
<rect x="16" y="596" width="6" height="104" rx="3" fill="#3a2f78" opacity="0.8"/>
<path d="M26,690 q9,-11 18,0 q9,11 18,0 q9,-11 18,0" stroke="#b47cff" stroke-width="3.4" fill="none" stroke-linecap="round"/>
<path d="M26,689 q9,-11 18,0 q9,11 18,0 q9,-11 18,0" stroke="#efe0ff" stroke-width="1.3" fill="none" stroke-linecap="round" opacity="0.8"/>
<path d="M104,688 q10,-12 20,0 q10,12 20,0" stroke="#c9a4ff" stroke-width="3.4" fill="none" stroke-linecap="round"/>
<path d="M24,608 q12,-9 24,0 q12,9 24,0" stroke="#a86cf0" stroke-width="3.2" fill="none" stroke-linecap="round"/>
<path d="M128,600 l0,14 M136,596 l0,18 M144,602 l0,12" stroke="#c9a4ff" stroke-width="3.2" fill="none" stroke-linecap="round"/>
<path d="M170,598 q10,10 0,20 q-10,8 0,16" stroke="#a86cf0" stroke-width="3.2" fill="none" stroke-linecap="round"/>
<path d="M24,660 l10,-10 l10,10 l10,-10" stroke="#b47cff" stroke-width="3" fill="none" stroke-linecap="round"/>
<circle cx="34" cy="628" r="3" fill="#f0dcff"/>
<circle cx="188" cy="632" r="3" fill="#f0dcff"/>
<circle cx="34" cy="628" r="11" fill="url(#taiwan-purpleglow)" pointer-events="none"/>
<circle cx="188" cy="632" r="11" fill="url(#taiwan-purpleglow)" pointer-events="none"/>

<path d="M80,646 C64,634 58,626 58,619 C58,611.5 63.5,606 70,606 C74.5,606 78,608.5 80,612 C82,608.5 85.5,606 90,606 C96.5,606 102,611.5 102,619 C102,626 96,634 80,646 Z" fill="none" stroke="#c9a4ff" stroke-width="3"/>
<path d="M40,676 C29,668 24,662 24,657 C24,653 27,650 31,650 C34,650 36,652 38,654 C40,652 42,650 45,650 C49,650 52,653 52,657 C52,662 47,668 40,676 Z" fill="#d05f92"/>
<path d="M40,671 C32,665 28,660 28,657 C28,654 30,652 33,652 C35,652 37,654 38,656 C39,654 41,652 43,652 C46,652 48,654 48,657 C48,660 44,665 40,671 Z" fill="#f8adca"/>

<circle cx="162" cy="668" r="44" fill="url(#taiwan-purpleglow)" pointer-events="none" opacity="0.5"/>
<g data-obj="purple-heart" transform="translate(140 648)">
<path d="M22,40 C6,28 0,20 0,13 C0,5.5 5.5,0 12,0 C16.5,0 20,2.5 22,6 C24,2.5 27.5,0 32,0 C38.5,0 44,5.5 44,13 C44,20 38,28 22,40 Z" fill="url(#taiwan-amethyst)"/>
<path d="M22,33 C9,23 4,17 4,12 C4,6.6 8.4,3 13,3 C16.8,3 20,5.5 22,8.5 C24,5.5 27.2,3 31,3 C35.6,3 40,6.6 40,12 C40,17 35,23 22,33 Z" fill="#9d72e8" opacity="0.75"/>
<path d="M13,4 C8.8,4 5,7.2 5,12 C5,15 7,18.5 11,22.5 C7.5,17.5 6.5,14 6.5,11.5 C6.5,8.5 9,6 13,6 Z" fill="#e6d6ff" opacity="0.85"/>
<path d="M22,40 C6,28 0,20 0,13 C0,5.5 5.5,0 12,0 C16.5,0 20,2.5 22,6 C24,2.5 27.5,0 32,0 C38.5,0 44,5.5 44,13 C44,20 38,28 22,40 Z" fill="none" stroke="#c9a4ff" stroke-width="2"/>
</g>

<circle cx="60" cy="518" r="54" fill="url(#taiwan-lanternglow)" pointer-events="none"/>
<path d="M60,478 L60,490" stroke="#3a3f6b" stroke-width="2"/>
<g data-obj="red-lantern">
<rect x="52" y="488" width="16" height="6" rx="2" fill="#f2b23c"/>
<rect x="52" y="488" width="6" height="6" rx="2" fill="#ffdc96"/>
<ellipse cx="60" cy="518" rx="20" ry="23" fill="url(#taiwan-lantbody)"/>
<ellipse cx="52" cy="516" rx="6" ry="16" fill="#ffb08a" opacity="0.45"/>
<ellipse cx="60" cy="518" rx="20" ry="7" fill="none" stroke="#f2b23c" stroke-width="2"/>
<path d="M60,495 q9,10 9,23 q0,13 -9,23" stroke="#ff9a72" stroke-width="1.4" fill="none" opacity="0.5"/>
<rect x="52" y="539" width="16" height="6" rx="2" fill="#f2b23c"/>
<rect x="52" y="539" width="6" height="6" rx="2" fill="#ffdc96"/>
<path d="M56,545 L54,556 M64,545 L66,556" stroke="#e8a02c" stroke-width="3"/>
<circle cx="60" cy="545" r="3.2" fill="#c98219"/>
</g>

<circle cx="158" cy="530" r="46" fill="url(#taiwan-lanternglow)" pointer-events="none" opacity="0.75"/>
<path d="M158,490 L158,502" stroke="#3a3f6b" stroke-width="2"/>
<rect x="150" y="500" width="16" height="6" fill="#f2b23c"/>
<ellipse cx="158" cy="530" rx="20" ry="24" fill="url(#taiwan-lantbody)"/>
<ellipse cx="150" cy="528" rx="6" ry="17" fill="#ffb08a" opacity="0.42"/>
<rect x="150" y="552" width="16" height="6" fill="#f2b23c"/>
<path d="M158,558 L158,572" stroke="#e8a02c" stroke-width="3"/>

<circle cx="418" cy="528" r="46" fill="url(#taiwan-lanternglow)" pointer-events="none" opacity="0.8"/>
<path d="M418,488 L418,500" stroke="#3a3f6b" stroke-width="2"/>
<rect x="410" y="498" width="16" height="6" fill="#f2b23c"/>
<ellipse cx="418" cy="528" rx="20" ry="24" fill="url(#taiwan-lantbody)"/>
<ellipse cx="410" cy="526" rx="6" ry="17" fill="#ffb08a" opacity="0.42"/>
<rect x="410" y="550" width="16" height="6" fill="#f2b23c"/>
<path d="M418,556 L418,570" stroke="#e8a02c" stroke-width="3"/>

<circle cx="702" cy="522" r="46" fill="url(#taiwan-lanternglow)" pointer-events="none" opacity="0.7"/>
<path d="M702,482 L702,494" stroke="#3a3f6b" stroke-width="2"/>
<rect x="694" y="492" width="16" height="6" fill="#f2b23c"/>
<ellipse cx="702" cy="522" rx="20" ry="24" fill="url(#taiwan-lantbody)"/>
<ellipse cx="694" cy="520" rx="6" ry="17" fill="#ffb08a" opacity="0.42"/>
<rect x="694" y="544" width="16" height="6" fill="#f2b23c"/>
<path d="M702,550 L702,564" stroke="#e8a02c" stroke-width="3"/>

<path d="M157,580 L157,596" stroke="#3a3f6b" stroke-width="1.6" fill="none"/>
<path d="M150,596 l14,0 l-2,66 l-10,0 Z" fill="url(#taiwan-lacquer)"/>
<path d="M150,596 l14,0 l-1,10 l-12,0 Z" fill="#f07a5c"/>
<path d="M152,662 l10,0 l-2,8 l-6,0 Z" fill="#7d1a14"/>
<circle cx="157" cy="672" r="3" fill="#f2b23c"/>

<ellipse cx="52" cy="752" rx="46" ry="10" fill="url(#taiwan-cast)"/>
<g data-obj="fruit-crate">
<rect x="26" y="706" width="52" height="44" rx="4" fill="url(#taiwan-crate)"/>
<rect x="26" y="706" width="52" height="8" rx="3" fill="url(#taiwan-cratetop)"/>
<rect x="26" y="706" width="6" height="44" rx="3" fill="#c68d55" opacity="0.55"/>
<circle cx="40" cy="702" r="10" fill="#e8912c"/>
<circle cx="37" cy="699" r="4.5" fill="#ffc472" opacity="0.85"/>
<circle cx="58" cy="700" r="10" fill="#ffb45e"/>
<circle cx="55" cy="697" r="4.5" fill="#ffdca6" opacity="0.8"/>
<circle cx="70" cy="704" r="9" fill="#d97f22"/>
<circle cx="67.5" cy="701" r="3.8" fill="#f7bc6e" opacity="0.7"/>
<path d="M32,724 l40,0 M32,738 l40,0" stroke="#3c2312" stroke-width="2.4" fill="none"/>
<path d="M32,726 l40,0 M32,740 l40,0" stroke="#c08b56" stroke-width="1" fill="none" opacity="0.5"/>
</g>
<ellipse cx="108" cy="752" rx="24" ry="7" fill="url(#taiwan-cast)"/>
<rect x="88" y="712" width="40" height="38" rx="4" fill="url(#taiwan-plum)"/>
<rect x="88" y="712" width="40" height="7" rx="3" fill="#6a5d88"/>
<rect x="136" y="700" width="26" height="50" rx="5" fill="url(#taiwan-jade)"/>
<rect x="136" y="700" width="26" height="8" rx="4" fill="#7fdcb4"/>

<rect x="212" y="588" width="182" height="9" rx="3" fill="#4a3b2e"/>
<rect x="212" y="588" width="182" height="3" rx="2" fill="#7d6541"/>

<path d="M226,597 L226,616" stroke="#c0392b" stroke-width="2"/>
<circle cx="226" cy="622" r="9" fill="#f2b23c"/>
<circle cx="223.5" cy="619.5" r="3.6" fill="#ffdc96" opacity="0.8"/>
<path d="M222,631 l8,0 l-2,26 l-4,0 Z" fill="url(#taiwan-lacquer)"/>

<path d="M258,597 L258,610" stroke="#c0392b" stroke-width="2"/>
<circle cx="258" cy="630" r="18" fill="url(#taiwan-jade)"/>
<circle cx="258" cy="630" r="7" fill="#0f4436"/>
<circle cx="251" cy="623" r="5" fill="#b6f2d6" opacity="0.6"/>
<circle cx="258" cy="652" r="5" fill="#f2b23c"/>
<path d="M254,656 l8,0 l-3,22 l-3,0 Z" fill="#c0392b"/>

<path d="M364,597 L364,612" stroke="#c0392b" stroke-width="2"/>
<circle cx="364" cy="628" r="16" fill="url(#taiwan-lacquer)"/>
<circle cx="364" cy="628" r="9" fill="#ff5a44"/>
<circle cx="360.5" cy="624.5" r="3.4" fill="#ffb3a0" opacity="0.8"/>
<circle cx="364" cy="649" r="5" fill="#f2b23c"/>
<path d="M360,660 l-3,13 M364,660 l0,15 M368,660 l3,13" stroke="#c0392b" stroke-width="2.6" stroke-linecap="round" fill="none"/>

<g data-obj="lucky-knot" transform="translate(292 600)">
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
<path d="M330,590 L330,596" stroke="#3a3f6b" stroke-width="1.6" fill="none"/>
<path d="M324,596 l16,0 l-2,64 l-12,0 Z" fill="url(#taiwan-jade)"/>
<path d="M324,596 l16,0 l-1,10 l-14,0 Z" fill="#6fd8b0"/>
<path d="M328,660 l8,0 l-2,7 l-4,0 Z" fill="#0f4436"/>

<ellipse cx="239" cy="752" rx="30" ry="8" fill="url(#taiwan-cast)"/>
<rect x="216" y="682" width="46" height="68" rx="5" fill="url(#taiwan-plum)"/>
<rect x="216" y="682" width="46" height="8" rx="4" fill="#6a5d88"/>
<ellipse cx="239" cy="682" rx="19" ry="5" fill="#7a6c9c"/>
<ellipse cx="234" cy="681" rx="10" ry="2.6" fill="#9c8dc0" opacity="0.7"/>
<ellipse cx="333" cy="752" rx="34" ry="8" fill="url(#taiwan-cast)"/>
<rect x="290" y="700" width="34" height="50" rx="4" fill="url(#taiwan-crate)"/>
<rect x="290" y="700" width="34" height="8" rx="3" fill="url(#taiwan-cratetop)"/>
<rect x="332" y="708" width="40" height="42" rx="4" fill="url(#taiwan-jade)"/>
<rect x="332" y="708" width="40" height="8" rx="3" fill="#7fdcb4"/>
<circle cx="344" cy="702" r="8" fill="#f2b23c"/>
<circle cx="360" cy="700" r="8" fill="#e08f2c"/>

<rect x="408" y="700" width="184" height="12" rx="3" fill="#7a4b2c"/>
<rect x="408" y="700" width="184" height="4" rx="2" fill="#b17b48"/>
<rect x="412" y="712" width="8" height="38" fill="#5d3820"/>
<rect x="580" y="712" width="8" height="38" fill="#4a2c17"/>

<rect x="408" y="648" width="184" height="9" rx="3" fill="#7a4b2c"/>
<rect x="408" y="648" width="184" height="3" rx="2" fill="#b17b48"/>
<rect x="408" y="612" width="44" height="36" rx="5" fill="#f2c877"/>
<rect x="408" y="612" width="44" height="9" rx="5" fill="#ffe6ae"/>
<rect x="408" y="640" width="44" height="8" fill="#c98f38"/>
<circle cx="430" cy="629" r="8" fill="#e08f2c" opacity="0.9"/>
<circle cx="430" cy="629" r="3.5" fill="#f6d295"/>
<rect x="530" y="620" width="54" height="28" rx="4" fill="url(#taiwan-lacquer)"/>
<rect x="530" y="620" width="54" height="7" rx="3" fill="#e05a45"/>
<path d="M557,620 l0,28" stroke="#f2b23c" stroke-width="4" fill="none"/>
<circle cx="557" cy="632" r="5" fill="#f2b23c"/>

<ellipse cx="492" cy="650" rx="40" ry="9" fill="url(#taiwan-cast)"/>
<g data-obj="pineapple-cake" transform="translate(462 608)">
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
<circle cx="516" cy="634" r="14" fill="#a4adba"/>
<circle cx="516" cy="634" r="9" fill="#e8eef4"/>
<circle cx="513" cy="631" r="3.4" fill="#ffffff" opacity="0.8"/>

<rect x="408" y="664" width="44" height="36" rx="5" fill="#f2c877"/>
<rect x="408" y="664" width="44" height="9" rx="5" fill="#ffe6ae"/>
<rect x="440" y="664" width="12" height="36" rx="5" fill="#c98f38" opacity="0.5"/>
<rect x="408" y="692" width="44" height="8" fill="#c98f38"/>
<rect x="532" y="668" width="40" height="32" rx="5" fill="#f2c877"/>
<rect x="532" y="668" width="40" height="9" rx="5" fill="#ffe6ae"/>
<rect x="561" y="668" width="11" height="32" rx="5" fill="#c98f38" opacity="0.5"/>
<rect x="532" y="692" width="40" height="8" fill="#c98f38"/>

<ellipse cx="698" cy="628" rx="110" ry="66" fill="url(#taiwan-cyanglow)" pointer-events="none" opacity="0.55"/>
<rect x="616" y="596" width="164" height="60" rx="7" fill="#101534" stroke="#38c6d9" stroke-width="2.2"/>
<rect x="616" y="596" width="164" height="5" rx="3" fill="#1d5f76"/>
<path d="M628,624 q12,-16 24,0 q12,16 24,0 q12,-16 24,0" stroke="#7de8f5" stroke-width="3.4" fill="none" stroke-linecap="round"/>
<path d="M628,623 q12,-16 24,0 q12,16 24,0 q12,-16 24,0" stroke="#e2fbff" stroke-width="1.2" fill="none" stroke-linecap="round" opacity="0.75"/>
<g data-obj="neon-bars">
<path d="M720,612 l0,24 M733,608 l0,28 M746,616 l0,20 M759,610 l0,26" stroke="#38c6d9" stroke-width="4.4" fill="none" stroke-linecap="round"/>
<path d="M720,612 l0,24 M733,608 l0,28 M746,616 l0,20 M759,610 l0,26" stroke="#c8f8ff" stroke-width="1.5" fill="none" stroke-linecap="round" opacity="0.85"/>
<path d="M716,644 l47,0" stroke="#2fa8ba" stroke-width="3.4" fill="none" stroke-linecap="round"/>
</g>

<ellipse cx="655" cy="752" rx="42" ry="9" fill="url(#taiwan-cast)"/>
<rect x="620" y="668" width="70" height="82" rx="6" fill="url(#taiwan-plum)"/>
<rect x="620" y="668" width="70" height="9" rx="4" fill="#6a5d88"/>
<rect x="620" y="668" width="8" height="82" rx="4" fill="#7a6c9c" opacity="0.55"/>
<rect x="628" y="682" width="54" height="24" rx="3" fill="#191627"/>
<rect x="632" y="686" width="20" height="16" rx="2" fill="#f2793f" opacity="0.6"/>
<rect x="656" y="686" width="20" height="16" rx="2" fill="#56c79c" opacity="0.5"/>
<rect x="628" y="714" width="54" height="26" rx="3" fill="#191627"/>

<ellipse cx="763" cy="700" rx="30" ry="8" fill="url(#taiwan-cast)"/>
<g data-obj="red-apples">
<circle cx="754" cy="690" r="10" fill="#c9261e"/>
<circle cx="772" cy="688" r="10" fill="#ea4436"/>
<circle cx="769" cy="684" r="4.6" fill="#ff8f7a" opacity="0.75"/>
<circle cx="763" cy="678" r="9" fill="#e0392f"/>
<circle cx="760" cy="675" r="4" fill="#ff8f7a" opacity="0.7"/>
<path d="M763,669 q4,-6 9,-5 q-4,4 -6,6 Z" fill="#3fae86"/>
</g>
<g data-obj="scallions">
<path d="M704,686 l-2,-30 M713,684 l0,-34 M722,686 l3,-30" stroke="#2e9c78" stroke-width="4.4" fill="none" stroke-linecap="round"/>
<path d="M705,684 l-2,-28 M714,682 l0,-32" stroke="#7fdcb4" stroke-width="1.4" fill="none" stroke-linecap="round" opacity="0.8"/>
<path d="M702,656 q-4,-8 2,-12 M713,650 q4,-8 10,-4 M725,656 q5,-7 10,-2" stroke="#56c79c" stroke-width="3" fill="none" stroke-linecap="round"/>
<path d="M700,686 l26,0" stroke="#f7e9cf" stroke-width="3.4" fill="none"/>
<path d="M700,684 l26,0" stroke="#ffffff" stroke-width="1.2" fill="none" opacity="0.6"/>
</g>
<rect x="742" y="704" width="42" height="46" rx="4" fill="url(#taiwan-steel)"/>
<rect x="742" y="704" width="42" height="8" rx="3" fill="#5c688a"/>

<path d="M12,600 Q104,612 196,600" stroke="#3a3f6b" stroke-width="1.6" fill="none"/>
<circle cx="86" cy="608" r="13" fill="url(#taiwan-bulbglow)" pointer-events="none"/>
<circle cx="86" cy="608" r="4" fill="#fff0bb"/>
<path d="M410,586 Q500,598 590,586" stroke="#3a3f6b" stroke-width="1.6" fill="none"/>
<circle cx="452" cy="594" r="13" fill="url(#taiwan-bulbglow)" pointer-events="none"/>
<circle cx="452" cy="594" r="4" fill="#fff0bb"/>
<circle cx="552" cy="594" r="13" fill="url(#taiwan-bulbglow)" pointer-events="none"/>
<circle cx="552" cy="594" r="4" fill="#fff0bb"/>
<path d="M610,668 Q700,680 790,668" stroke="#3a3f6b" stroke-width="1.6" fill="none"/>
<circle cx="664" cy="676" r="13" fill="url(#taiwan-bulbglow)" pointer-events="none"/>
<circle cx="664" cy="676" r="4" fill="#fff0bb"/>

<rect x="0" y="744" width="800" height="22" fill="url(#taiwan-counter)"/>
<rect x="0" y="744" width="800" height="6" fill="#d19a63" opacity="0.8"/>

<ellipse cx="126" cy="756" rx="42" ry="10" fill="url(#taiwan-cast)"/>
<ellipse cx="126" cy="700" rx="36" ry="9" fill="#8f6537"/>
<g data-obj="xiaolongbao" transform="translate(92 706)">
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
<path d="M18,3 l-3,6 M18,3 l3,6 M34,-1 l-4,7 M34,-1 l4,7 M34,-1 l0,8 M50,3 l-3,6 M50,3 l3,6" stroke="#c9b189" stroke-width="1.4" fill="none" stroke-linecap="round"/>
</g>
<path d="M104,690 q-8,-18 2,-30 q-8,-14 0,-24" stroke="#e8eef8" stroke-width="4" fill="none" opacity="0.16"/>
<path d="M140,684 q-8,-16 2,-26" stroke="#e8eef8" stroke-width="3.4" fill="none" opacity="0.12"/>

<ellipse cx="299" cy="758" rx="20" ry="6" fill="url(#taiwan-cast)"/>
<g data-obj="sauce-bottle">
<rect x="286" y="712" width="26" height="44" rx="5" fill="url(#taiwan-lacquer)"/>
<rect x="286" y="712" width="7" height="44" rx="4" fill="#ff8f6e" opacity="0.5"/>
<rect x="286" y="712" width="26" height="7" rx="4" fill="#d9483a"/>
<rect x="292" y="704" width="14" height="9" rx="3" fill="#4a2c17"/>
<rect x="292" y="704" width="5" height="9" rx="2" fill="#7c5030"/>
<rect x="290" y="726" width="18" height="14" rx="2" fill="#fff6e6" opacity="0.85"/>
<path d="M292,731 l12,0 M292,735 l9,0" stroke="#b9a184" stroke-width="1.2" fill="none"/>
</g>

<ellipse cx="204" cy="750" rx="38" ry="9" fill="url(#taiwan-cast)"/>
<ellipse cx="204" cy="712" rx="34" ry="9" fill="#8f6537"/>
<rect x="170" y="712" width="68" height="30" rx="6" fill="url(#taiwan-bamboo)"/>
<rect x="170" y="712" width="68" height="6" rx="3" fill="#eecfa0"/>
<rect x="170" y="736" width="68" height="6" rx="3" fill="#8f6537"/>
<ellipse cx="204" cy="710" rx="29" ry="7" fill="#b98f57"/>
<ellipse cx="190" cy="704" rx="12" ry="10" fill="#fbf3e2"/>
<ellipse cx="187" cy="701" rx="5.4" ry="4.2" fill="#ffffff" opacity="0.75"/>
<ellipse cx="212" cy="702" rx="13" ry="10" fill="#f0e0c4"/>
<ellipse cx="228" cy="706" rx="11" ry="9" fill="#e2d0ae"/>
<circle cx="190" cy="702" r="2.4" fill="#e8c0c8"/>
<circle cx="212" cy="700" r="2.4" fill="#e8c0c8"/>

<ellipse cx="336" cy="754" rx="34" ry="8" fill="url(#taiwan-cast)"/>
<ellipse cx="336" cy="730" rx="30" ry="8" fill="#8f6537"/>
<rect x="306" y="730" width="60" height="20" rx="5" fill="url(#taiwan-bamboo)"/>
<ellipse cx="336" cy="728" rx="26" ry="7" fill="#a5773f"/>
<ellipse cx="336" cy="726" rx="21" ry="5" fill="#e5d3b4"/>
<ellipse cx="328" cy="724.5" rx="10" ry="2.6" fill="#fbf3e2" opacity="0.8"/>

<ellipse cx="620" cy="746" rx="180" ry="40" fill="url(#taiwan-warmglow)" pointer-events="none"/>

<path d="M504,700 L536,700 L532,758 L508,758 Z" fill="url(#taiwan-jade)"/>
<path d="M506,704 L512,704 L510,754 L507,754 Z" fill="#c8f5e0" opacity="0.4"/>
<rect x="500" y="690" width="40" height="11" rx="4" fill="#eef2f6"/>
<rect x="500" y="698" width="40" height="4" fill="#bcc7d3"/>
<rect x="516" y="668" width="8" height="24" rx="3" fill="#ff6f9c" transform="rotate(8 520 680)"/>

<ellipse cx="618" cy="762" rx="26" ry="7" fill="url(#taiwan-cast)"/>
<g data-obj="bubble-tea" transform="translate(600 698)">
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

<path d="M658,706 L690,706 L686,758 L662,758 Z" fill="url(#taiwan-teafill)"/>
<path d="M660,710 L666,710 L664,754 L661,754 Z" fill="#ffe3bd" opacity="0.5"/>
<rect x="654" y="696" width="40" height="11" rx="4" fill="#f7e8d4"/>
<rect x="654" y="702" width="40" height="4" fill="#d5bd9c"/>
<circle cx="666" cy="748" r="4" fill="#3a2318"/>
<circle cx="675" cy="750" r="4" fill="#2c1a12"/>
<circle cx="682" cy="746" r="3.6" fill="#3a2318"/>

<path d="M746,706 L778,706 L774,758 L750,758 Z" fill="url(#taiwan-teafill)"/>
<path d="M748,710 L754,710 L752,754 L749,754 Z" fill="#ffe3bd" opacity="0.5"/>
<rect x="742" y="696" width="40" height="11" rx="4" fill="#f4f7fb"/>
<rect x="742" y="704" width="40" height="4" fill="#bcc7d3"/>
<circle cx="754" cy="748" r="4" fill="#3a2318"/>
<circle cx="764" cy="750" r="4" fill="#2c1a12"/>
<circle cx="771" cy="746" r="3.6" fill="#3a2318"/>
<rect x="760" y="668" width="7" height="30" rx="3" fill="#b9bfc9" transform="rotate(9 763 683)"/>

<rect x="0" y="756" width="800" height="16" fill="#8a5730"/>
<rect x="0" y="756" width="800" height="5" fill="#b87944" opacity="0.85"/>
<rect x="0" y="772" width="800" height="94" fill="url(#taiwan-wood)"/>
<rect x="0" y="772" width="800" height="7" fill="#4a2b17"/>
<rect x="0" y="780" width="800" height="24" fill="url(#taiwan-awngreen)"/>
<path d="M0,804 q14,15 28,0 q14,15 28,0 q14,15 28,0 q14,15 28,0 q14,15 28,0 q14,15 28,0 q14,15 28,0 q14,15 28,0 q14,15 28,0 q14,15 28,0 q14,15 28,0 q14,15 28,0 q14,15 28,0 q14,15 28,0 L800,804 Z" fill="#155442"/>
<rect x="0" y="804" width="800" height="18" fill="url(#taiwan-underawn)"/>
<rect x="96" y="780" width="4" height="82" fill="#4a2b17" opacity="0.6"/>
<rect x="486" y="780" width="4" height="82" fill="#4a2b17" opacity="0.6"/>
<rect x="686" y="780" width="4" height="82" fill="#4a2b17" opacity="0.6"/>

<rect x="152" y="822" width="58" height="34" rx="4" fill="url(#taiwan-crate)"/>
<rect x="152" y="822" width="58" height="6" rx="3" fill="url(#taiwan-cratetop)"/>
<rect x="392" y="826" width="70" height="30" rx="4" fill="url(#taiwan-crate)"/>
<rect x="392" y="826" width="70" height="6" rx="3" fill="url(#taiwan-cratetop)"/>
<circle cx="427" cy="843" r="4" fill="#4a2b17"/>
<rect x="726" y="826" width="56" height="30" rx="4" fill="url(#taiwan-crate)"/>
<rect x="726" y="826" width="56" height="6" rx="3" fill="url(#taiwan-cratetop)"/>

<ellipse cx="52" cy="854" rx="40" ry="9" fill="url(#taiwan-cast)"/>
<g data-obj="chalkboard">
<rect x="20" y="786" width="64" height="64" rx="4" fill="#5d3820"/>
<rect x="20" y="786" width="64" height="6" rx="3" fill="#8a5a33"/>
<rect x="20" y="786" width="6" height="64" rx="3" fill="#7d4f2c" opacity="0.8"/>
<rect x="26" y="792" width="52" height="52" fill="#22302b"/>
<rect x="26" y="792" width="52" height="6" fill="#2f403a" opacity="0.8"/>
<path d="M32,806 l30,0 M32,816 l40,0 M32,826 l24,0 M32,836 l34,0" stroke="#9fe8cb" stroke-width="2.4" fill="none" opacity="0.75"/>
</g>

<ellipse cx="261" cy="826" rx="28" ry="7" fill="url(#taiwan-cast)"/>
<g data-obj="hand-bell">
<path d="M261,780 l0,8" stroke="#5d3820" stroke-width="2" fill="none"/>
<path d="M261,788 q20,2 20,24 l-40,0 q0,-22 20,-24 Z" fill="#d78f28"/>
<path d="M261,788 q-20,2 -20,24 l14,0 q0,-20 6,-24 Z" fill="#f7d183"/>
<path d="M267,789 q14,4 14,23 l-7,0 q0,-18 -7,-23 Z" fill="#9a6414"/>
<rect x="239" y="810" width="44" height="6" rx="3" fill="#e0a94c"/>
<rect x="239" y="810" width="16" height="6" rx="3" fill="#ffe0a0" opacity="0.8"/>
<circle cx="261" cy="820" r="5" fill="#8f5a35"/>
</g>

<ellipse cx="318" cy="852" rx="26" ry="7" fill="url(#taiwan-cast)"/>
<g data-obj="extinguisher">
<rect x="300" y="800" width="36" height="48" rx="8" fill="url(#taiwan-lacquer)"/>
<rect x="300" y="800" width="10" height="48" rx="6" fill="#ff8f6e" opacity="0.45"/>
<rect x="300" y="800" width="36" height="8" rx="4" fill="#e0554a"/>
<rect x="310" y="790" width="16" height="12" rx="3" fill="#443b5c"/>
<rect x="310" y="790" width="5" height="12" rx="2" fill="#6b5f85"/>
<path d="M326,794 q10,-2 12,6" stroke="#2b2438" stroke-width="3" fill="none"/>
<rect x="306" y="818" width="24" height="12" rx="2" fill="#fff6e6" opacity="0.8"/>
</g>

<ellipse cx="519" cy="854" rx="26" ry="7" fill="url(#taiwan-cast)"/>
<g data-obj="broom">
<rect x="516" y="776" width="6" height="48" rx="3" fill="#b98f57"/>
<rect x="516" y="776" width="2.4" height="48" rx="1.2" fill="#e5c193" opacity="0.8"/>
<path d="M502,824 l34,0 l6,26 l-46,0 Z" fill="url(#taiwan-bamboo)"/>
<path d="M502,824 l12,0 l-4,26 l-14,0 Z" fill="#e5c193" opacity="0.6"/>
<path d="M502,824 l34,0 l1,6 l-36,0 Z" fill="#8f5a35"/>
<path d="M508,832 l-2,18 M518,832 l0,18 M528,832 l2,18" stroke="#a87e46" stroke-width="2" fill="none"/>
</g>

<rect x="640" y="800" width="56" height="10" rx="4" fill="#a4693c"/>
<rect x="640" y="800" width="56" height="4" rx="2" fill="#c98b4a"/>
<path d="M648,810 l-4,46 M688,810 l4,46" stroke="#6b4128" stroke-width="6" fill="none" stroke-linecap="round"/>

<ellipse cx="742" cy="860" rx="34" ry="8" fill="url(#taiwan-cast)"/>
<g data-obj="shop-cat">
<path d="M716,858 q0,-38 26,-40 q26,2 26,40 Z" fill="#3a2f2b"/>
<path d="M742,818 q18,4 20,40 l-14,0 q2,-30 -6,-40 Z" fill="#241c19"/>
<path d="M716,858 q0,-38 26,-40 q-11,10 -13,40 Z" fill="#584842"/>
<path d="M722,822 l2,-12 l9,7 Z" fill="#4a3c37"/>
<path d="M762,822 l3,-12 l6,9 Z" fill="#3a2f2b"/>
<circle cx="733" cy="832" r="3.2" fill="#f2b23c"/>
<circle cx="753" cy="832" r="3.2" fill="#f2b23c"/>
<path d="M737,842 q6,5 12,0" stroke="#f7e9cf" stroke-width="2" fill="none"/>
<path d="M717,850 q2,-32 24,-32" stroke="#8a746a" stroke-width="1.4" fill="none" opacity="0.6"/>
</g>

<rect x="0" y="866" width="800" height="80" fill="#120f2c"/>
<rect x="0" y="866" width="800" height="8" fill="#221c48" opacity="0.85"/>
<rect x="24" y="884" width="86" height="60" rx="4" fill="#241d3f"/>
<rect x="24" y="884" width="86" height="8" rx="3" fill="#362b58"/>
<rect x="126" y="896" width="70" height="48" rx="4" fill="#1e1836"/>
<rect x="126" y="896" width="70" height="7" rx="3" fill="#2e2550"/>
<rect x="286" y="900" width="62" height="44" rx="4" fill="#1e1836"/>
<rect x="286" y="900" width="62" height="7" rx="3" fill="#2e2550"/>
<rect x="296" y="876" width="42" height="24" rx="4" fill="url(#taiwan-pinkfill)" opacity="0.7"/>
<path d="M317,876 l0,24 M296,888 l42,0" stroke="#b9557a" stroke-width="2.2" fill="none" opacity="0.7"/>
<rect x="456" y="880" width="96" height="64" rx="4" fill="#241d3f"/>
<rect x="456" y="880" width="96" height="8" rx="3" fill="#362b58"/>
<rect x="694" y="892" width="44" height="52" rx="4" fill="#241d3f"/>
<rect x="694" y="892" width="44" height="7" rx="3" fill="#362b58"/>

<g data-obj="dark-jar">
<rect x="212" y="888" width="56" height="56" rx="4" fill="url(#taiwan-plum)"/>
<ellipse cx="240" cy="886" rx="26" ry="8" fill="#3a2f5c"/>
<ellipse cx="240" cy="884" rx="18" ry="5" fill="#4a3d72"/>
<ellipse cx="234" cy="883" rx="9" ry="2.6" fill="#6b5b96" opacity="0.7"/>
<path d="M220,906 l40,0" stroke="#14101f" stroke-width="3" fill="none"/>
<path d="M220,908 l40,0" stroke="#584c7c" stroke-width="1" fill="none" opacity="0.5"/>
</g>

<g data-obj="round-pot">
<ellipse cx="654" cy="942" rx="30" ry="7" fill="url(#taiwan-cast)"/>
<ellipse cx="654" cy="914" rx="26" ry="30" fill="url(#taiwan-plum)"/>
<ellipse cx="644" cy="908" rx="9" ry="14" fill="#6b5b96" opacity="0.35"/>
<ellipse cx="654" cy="886" rx="14" ry="7" fill="#3a2f5c"/>
<path d="M634,900 q20,10 40,0" stroke="#14101f" stroke-width="3" fill="none"/>
<circle cx="654" cy="882" r="4" fill="#4a3d72"/>
<path d="M676,900 q4,14 -4,26" stroke="#584c7c" stroke-width="1.4" fill="none" opacity="0.6"/>
</g>

<ellipse cx="120" cy="948" rx="26" ry="6" fill="url(#taiwan-cast)"/>
<g data-obj="skewer-cup">
<rect x="100" y="908" width="40" height="38" rx="4" fill="url(#taiwan-plum)"/>
<rect x="100" y="908" width="40" height="7" rx="3" fill="#4a3d72"/>
<rect x="100" y="908" width="8" height="38" rx="3" fill="#584c7c" opacity="0.6"/>
<path d="M108,904 l0,-14 M118,902 l0,-16 M128,904 l0,-14" stroke="#f0e0c2" stroke-width="3.4" fill="none" stroke-linecap="round"/>
<circle cx="108" cy="889" r="3.2" fill="#c98b4a"/>
<circle cx="118" cy="885" r="3.2" fill="#a55c31"/>
<circle cx="128" cy="889" r="3.2" fill="#c98b4a"/>
</g>

<ellipse cx="718" cy="944" rx="28" ry="7" fill="url(#taiwan-cast)"/>
<g data-obj="kettle">
<path d="M696,910 l40,0 l4,30 l-48,0 Z" fill="url(#taiwan-steel)"/>
<path d="M696,910 l12,0 l-6,30 l-10,0 Z" fill="#7d89a8" opacity="0.55"/>
<path d="M696,910 l40,0 l1,6 l-42,0 Z" fill="#6c7794"/>
<path d="M736,916 q10,6 2,16" stroke="#8e9aa8" stroke-width="3.4" fill="none"/>
<path d="M700,910 q16,-12 32,0" stroke="#a3aebd" stroke-width="2.4" fill="none"/>
<rect x="708" y="898" width="16" height="10" rx="3" fill="#2c3441"/>
</g>

<rect x="0" y="944" width="800" height="36" fill="url(#taiwan-counter)"/>
<rect x="0" y="944" width="800" height="8" fill="#d19a63"/>
<rect x="0" y="980" width="800" height="150" fill="#573320"/>
<rect x="0" y="980" width="800" height="48" fill="url(#taiwan-lacquer)"/>
<rect x="0" y="980" width="800" height="8" fill="#e8604f" opacity="0.6"/>
<path d="M0,1028 q14,18 28,0 q14,18 28,0 q14,18 28,0 q14,18 28,0 q14,18 28,0 q14,18 28,0 q14,18 28,0 q14,18 28,0 q14,18 28,0 q14,18 28,0 q14,18 28,0 q14,18 28,0 q14,18 28,0 q14,18 28,0 L800,1028 L800,1020 L0,1020 Z" fill="#7d1a14"/>
<rect x="0" y="1028" width="800" height="16" fill="url(#taiwan-underawn)"/>
<rect x="128" y="1036" width="4" height="94" fill="#3d2211" opacity="0.6"/>
<rect x="392" y="1036" width="4" height="94" fill="#3d2211" opacity="0.6"/>
<rect x="596" y="1036" width="4" height="94" fill="#3d2211" opacity="0.6"/>

<ellipse cx="54" cy="1016" rx="30" ry="7" fill="url(#taiwan-cast)"/>
<g data-obj="wall-clock">
<circle cx="54" cy="990" r="22" fill="#e8d2b4"/>
<circle cx="54" cy="990" r="22" fill="url(#taiwan-glass)"/>
<circle cx="54" cy="990" r="17" fill="#fffaea"/>
<path d="M54,973 a17,17 0 0 1 0,34 a13,17 0 0 0 0,-34 Z" fill="#dfcfae" opacity="0.5"/>
<path d="M54,990 l0,-11 M54,990 l8,5" stroke="#5d3820" stroke-width="2.4" fill="none" stroke-linecap="round"/>
<circle cx="54" cy="990" r="2.4" fill="#c0392b"/>
<path d="M54,968 l0,-4 M54,1012 l0,4 M32,990 l-4,0 M76,990 l4,0" stroke="#8f5a35" stroke-width="2.4" fill="none"/>
<path d="M40,976 a20,20 0 0 1 16,-6" stroke="#ffffff" stroke-width="2" fill="none" opacity="0.5"/>
</g>

<ellipse cx="220" cy="1012" rx="26" ry="6" fill="url(#taiwan-cast)"/>
<g data-obj="straw-hat">
<ellipse cx="220" cy="1000" rx="24" ry="9" fill="#c39a5f"/>
<ellipse cx="217" cy="998" rx="16" ry="5" fill="#e5c193" opacity="0.6"/>
<path d="M204,998 q16,-24 32,0 Z" fill="url(#taiwan-bamboo)"/>
<path d="M204,998 q16,-24 16,-13 l0,13 Z" fill="#f0d8ac"/>
<path d="M203,996 q17,7 34,0" stroke="#a72622" stroke-width="3" fill="none"/>
<path d="M206,993 q14,-16 26,-2" stroke="#fbeacc" stroke-width="1.2" fill="none" opacity="0.6"/>
</g>

<g data-obj="poster">
<rect x="330" y="972" width="46" height="46" rx="2" fill="#e8d2b4"/>
<rect x="330" y="972" width="46" height="8" rx="2" fill="#c0392b"/>
<rect x="330" y="972" width="7" height="46" rx="2" fill="#fff6e6" opacity="0.45"/>
<circle cx="353" cy="996" r="10" fill="#e8a02c"/>
<circle cx="350" cy="993" r="4.4" fill="#ffd68a" opacity="0.85"/>
<path d="M336,1010 l34,0" stroke="#b9a184" stroke-width="2.4" fill="none"/>
<circle cx="333" cy="975" r="2" fill="#8f2019"/>
</g>

<ellipse cx="428" cy="1024" rx="32" ry="7" fill="url(#taiwan-cast)"/>
<g data-obj="umbrella">
<path d="M400,1000 q30,-34 60,0 Z" fill="url(#taiwan-jade)"/>
<path d="M400,1000 q30,-34 30,-16 l0,16 Z" fill="#6fd8b0"/>
<path d="M446,988 q10,5 14,12 l-14,0 Z" fill="#0f4436" opacity="0.5"/>
<path d="M400,1000 q10,10 20,0 q10,10 20,0 q10,10 20,0" fill="#14543f"/>
<path d="M404,996 q26,-26 52,0" stroke="#b6f2d6" stroke-width="1.3" fill="none" opacity="0.6"/>
<path d="M430,1000 l0,18 q0,6 -7,4" stroke="#6b4128" stroke-width="3" fill="none"/>
<path d="M430,984 l0,-8" stroke="#6b4128" stroke-width="2.4" fill="none"/>
</g>

<ellipse cx="514" cy="1010" rx="26" ry="6" fill="url(#taiwan-cast)"/>
<g data-obj="cleaver">
<rect x="496" y="982" width="30" height="22" rx="2" fill="url(#taiwan-metal)"/>
<rect x="496" y="982" width="30" height="5" rx="2" fill="#f2f6fb"/>
<rect x="496" y="999" width="30" height="5" rx="2" fill="#e9eff7" opacity="0.7"/>
<rect x="524" y="988" width="16" height="7" rx="3" fill="#5d3820"/>
<rect x="524" y="988" width="16" height="2.6" rx="1.3" fill="#8a5a33"/>
<circle cx="505" cy="978" r="3" fill="#8e9aa8"/>
</g>

<ellipse cx="76" cy="1126" rx="110" ry="24" fill="url(#taiwan-cast)"/>
<path d="M-4,1092 q0,-36 34,-38 l44,2 l0,40 l-78,4 Z" fill="#2f5f88"/>
<path d="M-4,1092 q0,-36 34,-38 l44,2 l0,11 l-64,4 q-8,9 -8,23 Z" fill="#5a92c2"/>
<path d="M40,1056 l34,2 l0,36 l-34,2 Z" fill="#25506f" opacity="0.4"/>
<g data-obj="scooter-seat">
<rect x="4" y="1042" width="70" height="19" rx="8" fill="url(#taiwan-steel)"/>
<rect x="4" y="1042" width="70" height="6" rx="4" fill="#6c7794"/>
<rect x="4" y="1042" width="26" height="5" rx="3" fill="#95a1bd" opacity="0.7"/>
<path d="M12,1053 l54,0" stroke="#161c27" stroke-width="2.4" fill="none"/>
<circle cx="68" cy="1051" r="3" fill="#8e9aa8"/>
</g>
<path d="M66,1084 l50,0 l0,14 l-50,0 Z" fill="#254a6a"/>
<path d="M112,1100 l0,-22 q0,-40 24,-54 l14,9 q-20,16 -20,45 l0,22 Z" fill="#2f5f88"/>
<path d="M136,1024 l14,9 q-13,11 -17,27 q-3,-20 3,-36 Z" fill="#5a92c2"/>
<ellipse cx="150" cy="1042" rx="44" ry="38" fill="url(#taiwan-warmglow)" pointer-events="none"/>
<g data-obj="headlight">
<ellipse cx="146" cy="1038" rx="12" ry="14" fill="url(#taiwan-metal)"/>
<ellipse cx="147" cy="1037" rx="7" ry="9" fill="#fff0bb"/>
<ellipse cx="145" cy="1033" rx="3" ry="4" fill="#fffdf2"/>
<path d="M130,1018 l40,-9 l3,10 l-40,9 Z" fill="url(#taiwan-steel)"/>
<path d="M130,1018 l40,-9 l1,3.4 l-40,9 Z" fill="#7d89a8" opacity="0.7"/>
<path d="M136,1022 l30,-7" stroke="#4a5468" stroke-width="2" fill="none"/>
</g>
<circle cx="24" cy="1118" r="28" fill="#1a1828"/>
<circle cx="24" cy="1118" r="13" fill="#454f60"/>
<circle cx="24" cy="1118" r="5" fill="#8e9aa8"/>
<g data-obj="wheel">
<circle cx="142" cy="1120" r="25" fill="#1a1828"/>
<path d="M142,1095 a25,25 0 0 1 0,50 a19,25 0 0 0 0,-50 Z" fill="#0d0c16" opacity="0.8"/>
<circle cx="142" cy="1120" r="24" fill="none" stroke="#3c4152" stroke-width="1.4" opacity="0.7"/>
<circle cx="142" cy="1120" r="14" fill="url(#taiwan-metal)"/>
<circle cx="142" cy="1120" r="5" fill="#69748a"/>
<path d="M142,1106 l0,28 M128,1120 l28,0" stroke="#39414f" stroke-width="2.4" fill="none"/>
</g>

<ellipse cx="220" cy="1136" rx="120" ry="24" fill="url(#taiwan-cast)"/>
<rect x="150" y="1084" width="150" height="12" rx="4" fill="#7a4b2c"/>
<rect x="150" y="1084" width="150" height="4" rx="2" fill="#b17b48"/>
<rect x="158" y="1096" width="10" height="42" fill="#5d3820"/>
<rect x="282" y="1096" width="10" height="42" fill="#4a2c17"/>

<circle cx="176" cy="1022" r="22" fill="url(#taiwan-purpleglow)" pointer-events="none" opacity="0.45"/>
<rect x="170" y="1030" width="12" height="42" rx="5" fill="url(#taiwan-amethyst)"/>
<path d="M176,1032 l6,-9 l7,-1 l-5,-6 l2,-7 l-7,4 l-7,-4 l2,7 l-5,6 l7,1 Z" fill="#b183f5"/>

<rect x="192" y="1024" width="13" height="52" rx="6" fill="#7a4ec4"/>
<rect x="194" y="1026" width="5" height="48" rx="3" fill="#c2a4f7" opacity="0.7"/>

<circle cx="172" cy="1052" r="13" fill="#7a4ec4"/>
<circle cx="172" cy="1052" r="8" fill="#a983f0"/>
<path d="M172,1045 l3,5 l6,1 l-4,4 l1,6 l-6,-3 l-6,3 l1,-6 l-4,-4 l6,-1 Z" fill="#5c3499"/>
<rect x="165" y="1063" width="14" height="7" rx="3" fill="#b9a7e0"/>
<rect x="167" y="1069" width="10" height="20" rx="4" fill="#efe6f7"/>

<circle cx="254" cy="1040" r="34" fill="url(#taiwan-purpleglow)" pointer-events="none" opacity="0.35"/>
<g data-obj="lightstick" transform="translate(240 1024)">
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
<path d="M274,1040 l0,32" stroke="#d1443a" stroke-width="4" fill="none" stroke-linecap="round"/>
<path d="M270,1038 l8,0 l-2,10 l-4,0 Z" fill="#f2b23c"/>
<path d="M282,1046 l0,26" stroke="#d0608f" stroke-width="4" fill="none" stroke-linecap="round"/>

<rect x="156" y="1064" width="134" height="66" rx="7" fill="url(#taiwan-plum)"/>
<rect x="156" y="1064" width="134" height="10" rx="5" fill="#6a5d88"/>
<rect x="156" y="1094" width="134" height="6" fill="#251f38"/>
<circle cx="223" cy="1112" r="11" fill="#544874"/>

<rect x="286" y="1060" width="80" height="70" rx="5" fill="#6b5233"/>
<rect x="286" y="1060" width="80" height="10" rx="4" fill="#9a7649"/>
<path d="M290,1080 l72,0 M290,1100 l72,0 M290,1118 l72,0" stroke="#4a3822" stroke-width="3" fill="none"/>
<rect x="294" y="1022" width="13" height="38" rx="5" fill="url(#taiwan-jade)"/>
<rect x="311" y="1016" width="13" height="44" rx="5" fill="#4fc3a0"/>
<rect x="328" y="1020" width="13" height="40" rx="5" fill="url(#taiwan-jade)"/>
<path d="M300,1022 l0,-7 M317,1016 l0,-7 M334,1020 l0,-7" stroke="#f2b23c" stroke-width="6" stroke-linecap="round" fill="none"/>

<rect x="382" y="1068" width="86" height="62" rx="5" fill="#7a5e3a"/>
<rect x="382" y="1068" width="86" height="10" rx="4" fill="#a8834f"/>
<path d="M386,1088 l78,0 M386,1108 l78,0" stroke="#54401f" stroke-width="3" fill="none"/>
<ellipse cx="421" cy="1070" rx="34" ry="8" fill="url(#taiwan-cast)"/>
<g data-obj="cabbages">
<ellipse cx="406" cy="1062" rx="17" ry="9" fill="#2e9c78"/>
<ellipse cx="402" cy="1059" rx="9" ry="4" fill="#7fdcb4" opacity="0.6"/>
<ellipse cx="436" cy="1060" rx="17" ry="9" fill="#3fae86"/>
<ellipse cx="432" cy="1057" rx="9" ry="4" fill="#8fe3bd" opacity="0.55"/>
<ellipse cx="421" cy="1048" rx="15" ry="9" fill="#48bd93"/>
<ellipse cx="417" cy="1045" rx="8" ry="4" fill="#a6ecc9" opacity="0.6"/>
<path d="M414,1046 q7,-6 14,0" stroke="#14543f" stroke-width="2" fill="none"/>
</g>

<ellipse cx="508" cy="1132" rx="40" ry="9" fill="url(#taiwan-cast)"/>
<g data-obj="rice-sack">
<path d="M482,1130 q-8,-46 26,-50 q34,4 26,50 Z" fill="url(#taiwan-sack)"/>
<path d="M482,1130 q-8,-46 26,-50 q-9,20 -11,50 Z" fill="#c0a87f" opacity="0.55"/>
<path d="M528,1088 q9,16 6,42 l-12,0 q4,-26 -2,-42 Z" fill="#493c2a" opacity="0.4"/>
<ellipse cx="508" cy="1082" rx="25" ry="8" fill="#6b5a44"/>
<ellipse cx="502" cy="1080" rx="13" ry="4" fill="#a08a68" opacity="0.7"/>
<path d="M490,1104 l36,0" stroke="#6b5a44" stroke-width="3.4" fill="none"/>
</g>
<rect x="548" y="1088" width="52" height="42" rx="4" fill="url(#taiwan-steel)"/>
<rect x="548" y="1088" width="52" height="8" rx="3" fill="#5c688a"/>

<ellipse cx="694" cy="1140" rx="130" ry="26" fill="url(#taiwan-cast)"/>
<rect x="560" y="1000" width="240" height="11" rx="4" fill="#6b4128"/>
<rect x="560" y="1000" width="240" height="4" rx="2" fill="#9c6338"/>
<rect x="562" y="1011" width="9" height="52" fill="#5d3820"/>
<rect x="786" y="1011" width="9" height="52" fill="#4a2c17"/>

<path d="M576,1011 l0,12" stroke="#5d3820" stroke-width="2" fill="none"/>
<rect x="570" y="1023" width="13" height="54" rx="5" fill="url(#taiwan-lacquer)"/>
<rect x="572" y="1025" width="4" height="50" rx="2" fill="#ff8f6e" opacity="0.6"/>
<path d="M576,1077 l0,14" stroke="#c0392b" stroke-width="2.4" fill="none"/>
<path d="M572,1091 l8,0 l-2,12 l-4,0 Z" fill="#f2b23c"/>

<path d="M614,1011 l0,14" stroke="#5d3820" stroke-width="2" fill="none"/>
<path d="M614,1064 L586,1046 A34,34 0 0 1 642,1046 Z" fill="#2e9c78"/>
<path d="M614,1064 L586,1046 A34,34 0 0 1 614,1030 Z" fill="#48bd93"/>
<path d="M586,1046 A34,34 0 0 1 642,1046" stroke="#b6f2d6" stroke-width="2" fill="none"/>
<circle cx="614" cy="1063" r="3.5" fill="#c98b4a"/>

<path d="M652,1011 l0,15" stroke="#5d3820" stroke-width="2" fill="none"/>
<g data-obj="folding-fan" transform="translate(652 1026) rotate(-7 31 40)">
<path d="M31,40 L2,20 A34,34 0 0 1 60,20 Z" fill="#c93f22"/>
<path d="M31,40 L2,20 A34,34 0 0 1 31,6 Z" fill="#e8583a"/>
<path d="M31,40 L11,26 A23,23 0 0 1 51,26 Z" fill="#e8863a"/>
<path d="M31,40 L11,26 A23,23 0 0 1 31,17 Z" fill="#f7a55c"/>
<path d="M31,40 L18,31 A14,14 0 0 1 44,31 Z" fill="#f2b05e"/>
<path d="M31,40 L2,20 M31,40 L11,10 M31,40 L31,4 M31,40 L51,10 M31,40 L60,20" stroke="#8c3418" stroke-width="1.5" fill="none" opacity="0.65"/>
<path d="M2,20 A34,34 0 0 1 60,20" stroke="#ffd9a2" stroke-width="2" fill="none"/>
<circle cx="31" cy="39" r="3.5" fill="#c98b4a"/>
</g>
<rect x="640" y="1052" width="34" height="40" rx="4" fill="url(#taiwan-steel)"/>
<rect x="640" y="1052" width="34" height="7" rx="3" fill="#5c688a"/>
<path d="M648,1050 l0,-8 M658,1048 l0,-10 M666,1050 l0,-8" stroke="#f2b23c" stroke-width="3" fill="none" stroke-linecap="round"/>

<path d="M756,1011 l0,15" stroke="#5d3820" stroke-width="2" fill="none"/>
<path d="M756,1066 L728,1046 A34,34 0 0 1 784,1046 Z" fill="#e8d3b2"/>
<path d="M756,1066 L728,1046 A34,34 0 0 1 756,1030 Z" fill="#fff6e6"/>
<path d="M756,1066 L728,1046 A34,34 0 0 1 784,1046 Z" fill="none" stroke="#d0b892" stroke-width="1.5"/>
<circle cx="742" cy="1038" r="4" fill="#d0608f"/>
<circle cx="756" cy="1030" r="4" fill="#d0608f"/>
<circle cx="770" cy="1038" r="4" fill="#d0608f"/>
<circle cx="756" cy="1065" r="3.4" fill="#c98b4a"/>

<circle cx="606" cy="1096" r="26" fill="#c93f22"/>
<path d="M606,1070 a26,26 0 0 1 0,52 a20,26 0 0 0 0,-52 Z" fill="#8f2c14" opacity="0.5"/>
<circle cx="606" cy="1096" r="18" fill="#e8863a"/>
<circle cx="606" cy="1096" r="8" fill="#f7bd76"/>
<rect x="602" y="1120" width="8" height="22" rx="3" fill="#c98b4a"/>

<path d="M686,1120 L664,1104 A27,27 0 0 1 708,1104 Z" fill="#c93f22"/>
<path d="M686,1120 L664,1104 A27,27 0 0 1 686,1093 Z" fill="#e8583a"/>
<path d="M686,1120 L672,1110 A16,16 0 0 1 700,1110 Z" fill="#e8863a"/>
<path d="M664,1104 A27,27 0 0 1 708,1104" stroke="#ffd9a2" stroke-width="1.7" fill="none"/>

<ellipse cx="766" cy="1084" rx="30" ry="8" fill="url(#taiwan-cast)"/>
<rect x="736" y="1084" width="60" height="52" rx="5" fill="url(#taiwan-crate)"/>
<rect x="736" y="1084" width="60" height="9" rx="4" fill="url(#taiwan-cratetop)"/>
<path d="M740,1104 l52,0 M740,1120 l52,0" stroke="#3c2312" stroke-width="3" fill="none"/>

<rect x="0" y="1130" width="800" height="70" fill="url(#taiwan-ground)"/>
<rect x="0" y="1130" width="800" height="10" fill="#3a3266"/>
<ellipse cx="400" cy="1156" rx="380" ry="42" fill="url(#taiwan-warmglow)" pointer-events="none"/>
<ellipse cx="150" cy="1160" rx="150" ry="26" fill="url(#taiwan-purpleglow)" pointer-events="none" opacity="0.3"/>
<ellipse cx="340" cy="1162" rx="160" ry="22" fill="#171338" opacity="0.45"/>
<ellipse cx="720" cy="1166" rx="140" ry="20" fill="#171338" opacity="0.4"/>

<ellipse cx="66" cy="1184" rx="30" ry="7" fill="url(#taiwan-cast)"/>
<g data-obj="stray-cat">
<path d="M44,1180 q0,-30 22,-32 q22,2 22,32 Z" fill="#2b2438"/>
<path d="M66,1148 q16,4 18,32 l-12,0 q2,-24 -6,-32 Z" fill="#1a1524"/>
<path d="M44,1180 q0,-30 22,-32 q-10,8 -12,32 Z" fill="#463c5e"/>
<path d="M50,1152 l1,-11 l8,7 Z" fill="#372e49"/>
<path d="M82,1152 l3,-11 l5,8 Z" fill="#2b2438"/>
<path d="M88,1180 q10,-8 8,-18" stroke="#2b2438" stroke-width="4" fill="none" stroke-linecap="round"/>
<circle cx="59" cy="1160" r="2.6" fill="#9fe8cb"/>
<circle cx="76" cy="1160" r="2.6" fill="#9fe8cb"/>
</g>

<ellipse cx="204" cy="1190" rx="26" ry="6" fill="url(#taiwan-cast)"/>
<g data-obj="takeout-box">
<path d="M182,1156 l44,0 l-5,32 l-34,0 Z" fill="url(#taiwan-cream)"/>
<path d="M182,1156 l12,0 l-3,32 l-9,0 Z" fill="#fffaf0"/>
<path d="M215,1156 l11,0 l-5,32 l-9,0 Z" fill="#cbb694" opacity="0.7"/>
<path d="M182,1156 l44,0 l-1,6 l-42,0 Z" fill="#e0cbab"/>
<path d="M190,1156 q14,-12 28,0" stroke="#b9a184" stroke-width="2.4" fill="none"/>
<path d="M204,1162 l0,26" stroke="#d1443a" stroke-width="3" fill="none"/>
</g>

<ellipse cx="421" cy="1190" rx="26" ry="6" fill="url(#taiwan-cast)"/>
<g data-obj="coin-purse">
<path d="M400,1188 q-4,-30 21,-32 q25,2 21,32 Z" fill="#8f2019"/>
<path d="M400,1188 q-4,-30 21,-32 q-9,12 -10,32 Z" fill="#d0453a"/>
<path d="M430,1158 q13,6 12,30 l-9,0 q1,-22 -5,-30 Z" fill="#61120e" opacity="0.6"/>
<path d="M406,1160 q15,-10 30,0" stroke="#f2b23c" stroke-width="2.6" fill="none"/>
<circle cx="421" cy="1174" r="5" fill="#f2b23c"/>
<circle cx="419.5" cy="1172.6" r="2.2" fill="#ffdc96" opacity="0.85"/>
</g>

<g data-obj="manhole">
<ellipse cx="724" cy="1168" rx="24" ry="16" fill="#232a36"/>
<ellipse cx="724" cy="1166" rx="19" ry="12" fill="url(#taiwan-steel)"/>
<ellipse cx="718" cy="1163" rx="9" ry="4.6" fill="#7d89a8" opacity="0.5"/>
<path d="M710,1160 l28,0 M708,1166 l32,0 M710,1172 l28,0" stroke="#232a36" stroke-width="2" fill="none"/>
</g>

<ellipse cx="778" cy="1190" rx="22" ry="5" fill="url(#taiwan-cast)"/>
<g data-obj="mouse">
<ellipse cx="778" cy="1178" rx="16" ry="10" fill="#443b5c"/>
<ellipse cx="774" cy="1174" rx="8" ry="4.4" fill="#6b5f85" opacity="0.7"/>
<circle cx="765" cy="1174" r="7" fill="#5e5273"/>
<circle cx="764" cy="1168" r="4" fill="#372e49"/>
<path d="M794,1178 q10,-2 10,-10" stroke="#5e5273" stroke-width="2.4" fill="none"/>
<circle cx="761" cy="1174" r="1.5" fill="#e8d2b4"/>
</g>
<circle cx="322" cy="1186" r="3" fill="#453d78" opacity="0.6"/>
<circle cx="606" cy="1180" r="3" fill="#453d78" opacity="0.6"/>
</svg>`
});
