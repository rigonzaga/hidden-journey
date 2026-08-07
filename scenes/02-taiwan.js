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
    { id: 'lightstick',     name: 'Lightstick' },
    { id: 'purple-heart',   name: 'Purple Heart' },
    { id: 'bubble-tea',     name: 'Bubble Tea' },
    { id: 'xiaolongbao',    name: 'Dumpling Basket' },
    { id: 'pineapple-cake', name: 'Pineapple Cake' },
    { id: 'folding-fan',    name: 'Folding Fan' },
    { id: 'sky-lantern',    name: 'Sky Lantern' },
    { id: 'lucky-knot',     name: 'Lucky Knot' }
  ],
  svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 1200">
<defs>
<linearGradient id="taiwan-sky" x1="0" y1="0" x2="0" y2="1">
<stop offset="0" stop-color="#070a1e"/>
<stop offset="0.55" stop-color="#151b46"/>
<stop offset="1" stop-color="#2d2761"/>
</linearGradient>
<radialGradient id="taiwan-moonglow">
<stop offset="0" stop-color="#fff6d8" stop-opacity="0.5"/>
<stop offset="1" stop-color="#fff6d8" stop-opacity="0"/>
</radialGradient>
<radialGradient id="taiwan-lanternglow">
<stop offset="0" stop-color="#ff8a4a" stop-opacity="0.5"/>
<stop offset="1" stop-color="#ff8a4a" stop-opacity="0"/>
</radialGradient>
<radialGradient id="taiwan-warmglow">
<stop offset="0" stop-color="#ffca6e" stop-opacity="0.34"/>
<stop offset="1" stop-color="#ffca6e" stop-opacity="0"/>
</radialGradient>
<radialGradient id="taiwan-skyglow">
<stop offset="0" stop-color="#ffd08a" stop-opacity="0.7"/>
<stop offset="1" stop-color="#ffd08a" stop-opacity="0"/>
</radialGradient>
<radialGradient id="taiwan-neonglow">
<stop offset="0" stop-color="#b47cff" stop-opacity="0.6"/>
<stop offset="1" stop-color="#b47cff" stop-opacity="0"/>
</radialGradient>
<radialGradient id="taiwan-purpleglow">
<stop offset="0" stop-color="#c6a4ff" stop-opacity="0.75"/>
<stop offset="1" stop-color="#c6a4ff" stop-opacity="0"/>
</radialGradient>
<linearGradient id="taiwan-lantbody" x1="0" y1="0" x2="1" y2="0">
<stop offset="0" stop-color="#ff7a5c"/>
<stop offset="0.5" stop-color="#e0392f"/>
<stop offset="1" stop-color="#a72622"/>
</linearGradient>
<linearGradient id="taiwan-teafill" x1="0" y1="0" x2="0" y2="1">
<stop offset="0" stop-color="#e0b585"/>
<stop offset="1" stop-color="#9c5e37"/>
</linearGradient>
<linearGradient id="taiwan-wood" x1="0" y1="0" x2="0" y2="1">
<stop offset="0" stop-color="#a4693c"/>
<stop offset="1" stop-color="#6f4426"/>
</linearGradient>
</defs>

<rect x="0" y="0" width="800" height="1200" fill="#0b0f28"/>
<rect x="0" y="0" width="800" height="480" fill="url(#taiwan-sky)"/>

<circle cx="40" cy="52" r="1.8" fill="#dfe4ff" opacity="0.9"/>
<circle cx="430" cy="52" r="1.5" fill="#dfe4ff" opacity="0.8"/>
<circle cx="534" cy="64" r="1.7" fill="#dfe4ff" opacity="0.85"/>
<circle cx="712" cy="42" r="1.4" fill="#dfe4ff" opacity="0.75"/>
<circle cx="752" cy="104" r="1.6" fill="#dfe4ff" opacity="0.8"/>
<circle cx="256" cy="166" r="1.2" fill="#dfe4ff" opacity="0.55"/>
<circle cx="420" cy="148" r="1.5" fill="#dfe4ff" opacity="0.7"/>

<circle cx="648" cy="96" r="98" fill="url(#taiwan-moonglow)" pointer-events="none"/>
<circle cx="648" cy="96" r="42" fill="#fff4d2"/>
<ellipse cx="656" cy="104" rx="33" ry="31" fill="#f0dcae" opacity="0.45"/>
<circle cx="634" cy="84" r="7" fill="#eddbaa" opacity="0.8"/>
<circle cx="662" cy="110" r="5" fill="#e6d19c" opacity="0.7"/>

<ellipse cx="150" cy="238" rx="112" ry="15" fill="#242a60" opacity="0.5"/>
<ellipse cx="668" cy="252" rx="120" ry="14" fill="#242a60" opacity="0.45"/>
<ellipse cx="320" cy="300" rx="150" ry="18" fill="#20265a" opacity="0.5"/>

<rect x="0" y="340" width="70" height="100" fill="#101533"/>
<rect x="62" y="300" width="54" height="140" fill="#0d1230"/>
<rect x="112" y="360" width="80" height="80" fill="#131840"/>
<rect x="188" y="318" width="46" height="122" fill="#0d1230"/>
<rect x="230" y="345" width="96" height="95" fill="#101533"/>
<rect x="320" y="305" width="60" height="135" fill="#131840"/>
<rect x="376" y="352" width="110" height="88" fill="#0d1230"/>
<rect x="480" y="322" width="52" height="118" fill="#101533"/>
<rect x="528" y="336" width="86" height="104" fill="#131840"/>
<rect x="608" y="310" width="70" height="130" fill="#0d1230"/>
<rect x="672" y="352" width="60" height="88" fill="#101533"/>
<rect x="726" y="328" width="74" height="112" fill="#131840"/>

<rect x="506" y="300" width="38" height="140" fill="#131a3f"/>
<path d="M508,296 L542,296 L546,282 L504,282 Z" fill="#18204a"/>
<path d="M508,278 L542,278 L546,264 L504,264 Z" fill="#141a40"/>
<path d="M508,260 L542,260 L546,246 L504,246 Z" fill="#18204a"/>
<path d="M508,242 L542,242 L546,228 L504,228 Z" fill="#141a40"/>
<path d="M508,224 L542,224 L546,210 L504,210 Z" fill="#18204a"/>
<path d="M510,206 L540,206 L544,192 L506,192 Z" fill="#141a40"/>
<rect x="519" y="152" width="5" height="42" fill="#18204a"/>
<circle cx="521" cy="150" r="3" fill="#ff5a4a" opacity="0.85"/>
<circle cx="640" cy="308" r="2.5" fill="#ff5a4a" opacity="0.7"/>

<rect x="14" y="352" width="5" height="7" fill="#ffd98a" opacity="0.55"/>
<rect x="70" y="314" width="5" height="7" fill="#ffd98a" opacity="0.6"/>
<rect x="124" y="374" width="5" height="7" fill="#ffd98a" opacity="0.5"/>
<rect x="330" y="318" width="5" height="7" fill="#ffd98a" opacity="0.55"/>
<rect x="390" y="366" width="5" height="7" fill="#ffd98a" opacity="0.5"/>
<rect x="492" y="336" width="5" height="7" fill="#ffd98a" opacity="0.55"/>
<rect x="620" y="324" width="5" height="7" fill="#ffd98a" opacity="0.6"/>
<rect x="748" y="342" width="5" height="7" fill="#ffd98a" opacity="0.55"/>

<rect x="-10" y="390" width="140" height="90" fill="#1a2049"/>
<rect x="120" y="412" width="110" height="68" fill="#161b41"/>
<rect x="220" y="372" width="150" height="108" fill="#1a2049"/>
<rect x="356" y="402" width="120" height="78" fill="#161b41"/>
<rect x="460" y="384" width="130" height="96" fill="#1a2049"/>
<rect x="576" y="414" width="110" height="66" fill="#161b41"/>
<rect x="672" y="380" width="140" height="100" fill="#1a2049"/>
<rect x="24" y="376" width="26" height="14" fill="#141a3c"/>
<rect x="252" y="358" width="30" height="14" fill="#141a3c"/>
<rect x="64" y="420" width="6" height="8" fill="#ffcf7d" opacity="0.55"/>
<rect x="240" y="388" width="6" height="8" fill="#ffcf7d" opacity="0.6"/>
<rect x="296" y="404" width="6" height="8" fill="#ffcf7d" opacity="0.55"/>
<rect x="540" y="418" width="6" height="8" fill="#ffcf7d" opacity="0.5"/>
<rect x="692" y="394" width="6" height="8" fill="#ffcf7d" opacity="0.55"/>

<g data-obj="sky-lantern">
<ellipse cx="172" cy="198" rx="52" ry="46" fill="url(#taiwan-skyglow)" pointer-events="none"/>
<path d="M138,170 Q172,140 206,170 L214,222 Q172,246 130,222 Z" fill="#f2913c"/>
<path d="M138,170 Q172,140 172,150 L172,242 Q150,238 130,222 Z" fill="#ffd58a"/>
<path d="M172,150 Q196,156 206,170 L214,222 Q196,238 172,242 Z" fill="#ef7f30"/>
<path d="M154,152 L148,236" stroke="#e8a95f" stroke-width="2" fill="none" opacity="0.7"/>
<path d="M190,154 L196,236" stroke="#c96a26" stroke-width="2" fill="none" opacity="0.7"/>
<ellipse cx="172" cy="230" rx="42" ry="9" fill="#c4611f"/>
<ellipse cx="172" cy="226" rx="9" ry="12" fill="#fff0b8"/>
<ellipse cx="172" cy="228" rx="4" ry="7" fill="#fffaea"/>
</g>
<ellipse cx="206" cy="240" rx="62" ry="7" fill="#2b3168" opacity="0.55"/>

<rect x="0" y="470" width="800" height="330" fill="#171c40"/>
<rect x="0" y="470" width="800" height="14" fill="#20265a" opacity="0.7"/>

<rect x="6" y="556" width="196" height="212" fill="#232a55"/>
<rect x="12" y="566" width="184" height="10" fill="#2c345f" opacity="0.8"/>
<rect x="0" y="556" width="10" height="212" fill="#4a3b2e"/>
<rect x="192" y="556" width="10" height="212" fill="#3d3026"/>
<path d="M-4,542 L206,542 L200,598 L2,598 Z" fill="#c0392b"/>
<path d="M-4,542 L206,542 L204,558 L-2,558 Z" fill="#e05a45" opacity="0.75"/>
<path d="M36,542 L48,598 L26,598 L16,542 Z" fill="#f7e9cf" opacity="0.35"/>
<path d="M116,542 L128,598 L106,598 L96,542 Z" fill="#f7e9cf" opacity="0.35"/>
<path d="M2,598 q12,16 24,0 q12,16 24,0 q12,16 24,0 q12,16 24,0 q12,16 24,0 q12,16 24,0 q12,16 24,0 q12,16 24,0 L200,598 Z" fill="#a72622"/>

<rect x="204" y="556" width="196" height="212" fill="#232a55"/>
<rect x="210" y="566" width="184" height="10" fill="#2c345f" opacity="0.8"/>
<rect x="200" y="556" width="10" height="212" fill="#4a3b2e"/>
<rect x="390" y="556" width="10" height="212" fill="#3d3026"/>
<path d="M196,542 L406,542 L400,598 L202,598 Z" fill="#2e9c78"/>
<path d="M196,542 L406,542 L404,558 L198,558 Z" fill="#56c79c" opacity="0.75"/>
<path d="M316,542 L328,598 L306,598 L296,542 Z" fill="#f7e9cf" opacity="0.3"/>
<path d="M202,598 q12,16 24,0 q12,16 24,0 q12,16 24,0 q12,16 24,0 q12,16 24,0 q12,16 24,0 q12,16 24,0 q12,16 24,0 L400,598 Z" fill="#1f6f56"/>

<rect x="402" y="556" width="196" height="212" fill="#232a55"/>
<rect x="408" y="566" width="184" height="10" fill="#2c345f" opacity="0.8"/>
<rect x="398" y="556" width="10" height="212" fill="#4a3b2e"/>
<rect x="588" y="556" width="10" height="212" fill="#3d3026"/>
<path d="M394,542 L604,542 L598,598 L400,598 Z" fill="#d94f2b"/>
<path d="M394,542 L604,542 L602,558 L396,558 Z" fill="#f2793f" opacity="0.75"/>
<path d="M434,542 L446,598 L424,598 L414,542 Z" fill="#f7e9cf" opacity="0.32"/>
<path d="M514,542 L526,598 L504,598 L494,542 Z" fill="#f7e9cf" opacity="0.32"/>
<path d="M400,598 q12,16 24,0 q12,16 24,0 q12,16 24,0 q12,16 24,0 q12,16 24,0 q12,16 24,0 q12,16 24,0 q12,16 24,0 L598,598 Z" fill="#a83a1c"/>

<rect x="600" y="556" width="200" height="212" fill="#232a55"/>
<rect x="606" y="566" width="188" height="10" fill="#2c345f" opacity="0.8"/>
<rect x="596" y="556" width="10" height="212" fill="#4a3b2e"/>
<rect x="790" y="556" width="10" height="212" fill="#3d3026"/>
<path d="M592,542 L804,542 L800,598 L598,598 Z" fill="#1f6f56"/>
<path d="M592,542 L804,542 L802,558 L594,558 Z" fill="#3fae86" opacity="0.7"/>
<path d="M712,542 L724,598 L702,598 L692,542 Z" fill="#f7e9cf" opacity="0.28"/>
<path d="M598,598 q12,16 24,0 q12,16 24,0 q12,16 24,0 q12,16 24,0 q12,16 24,0 q12,16 24,0 q12,16 24,0 q12,16 24,0 L800,598 Z" fill="#155442"/>

<rect x="228" y="620" width="150" height="44" rx="7" fill="#14183a" stroke="#38c6d9" stroke-width="2.5"/>
<path d="M244,644 q12,-18 24,0 q12,18 24,0 q12,-18 24,0 q12,18 24,0 M340,634 l0,0 M352,644 l0,0 M364,634 l0,0" stroke="#7de8f5" stroke-width="3.5" fill="none" stroke-linecap="round"/>
<rect x="424" y="620" width="150" height="44" rx="7" fill="#14183a" stroke="#f2793f" stroke-width="2.5"/>
<path d="M442,652 l0,-20 M454,652 l0,-11 M466,652 l0,-24 M478,652 l0,-15 M490,652 l0,-22 M502,652 l0,-9 M514,652 l0,-18 M526,652 l0,-25 M538,652 l0,-13 M550,652 l0,-20" stroke="#ffb07a" stroke-width="3.5" fill="none" stroke-linecap="round"/>
<rect x="624" y="620" width="150" height="44" rx="7" fill="#14183a" stroke="#56c79c" stroke-width="2.5"/>
<path d="M640,652 l12,-20 l12,20 l12,-20 l12,20 M700,642 q13,-13 26,0 q13,13 26,0 M646,634 l0,0 M760,646 l0,0" stroke="#9fe8cb" stroke-width="3.5" fill="none" stroke-linecap="round"/>

<rect x="742" y="600" width="42" height="146" rx="6" fill="#8e2ec4" opacity="0.85"/>
<rect x="748" y="606" width="30" height="134" rx="4" fill="#14183a"/>
<path d="M756,616 q16,12 0,24 M756,650 q16,12 0,24 M756,684 q16,12 0,24 M760,718 l0,0 M770,718 l0,0" stroke="#e0b6ff" stroke-width="3.5" fill="none" stroke-linecap="round"/>

<path d="M12,614 Q100,626 196,614" stroke="#3a3f6b" stroke-width="2" fill="none"/>
<circle cx="56" cy="622" r="14" fill="url(#taiwan-warmglow)" pointer-events="none"/>
<circle cx="56" cy="622" r="5" fill="#ffe6a8"/>
<circle cx="150" cy="624" r="14" fill="url(#taiwan-warmglow)" pointer-events="none"/>
<circle cx="150" cy="624" r="5" fill="#ffe6a8"/>
<path d="M410,612 Q500,624 590,612" stroke="#3a3f6b" stroke-width="2" fill="none"/>
<circle cx="452" cy="620" r="14" fill="url(#taiwan-warmglow)" pointer-events="none"/>
<circle cx="452" cy="620" r="5" fill="#ffe6a8"/>
<circle cx="552" cy="620" r="14" fill="url(#taiwan-warmglow)" pointer-events="none"/>
<circle cx="552" cy="620" r="5" fill="#ffe6a8"/>
<circle cx="664" cy="682" r="14" fill="url(#taiwan-warmglow)" pointer-events="none"/>
<circle cx="664" cy="682" r="5" fill="#ffe6a8"/>

<rect x="578" y="460" width="220" height="82" rx="6" fill="#1c2150"/>
<rect x="578" y="460" width="220" height="5" rx="2" fill="#2f2a64"/>
<path d="M586,486 q13,-14 26,0 q13,14 26,0 M588,510 l0,0 M602,516 l0,0 M616,510 l0,0 M630,516 l0,0" stroke="#b47cff" stroke-width="5" fill="none" stroke-linecap="round"/>
<circle cx="653" cy="486" r="10" fill="#a86cf0"/>
<rect x="645" y="502" width="17" height="24" rx="8" fill="#8a5ade"/>
<g data-obj="purple-heart">
<path d="M699,530 C676,513 667,501 667,489 C667,479 675,472 683,472 C690,472 696,476 699,482 C702,476 708,472 715,472 C723,472 731,479 731,489 C731,501 722,513 699,530 Z" fill="#5f34a8"/>
<path d="M699,523 C680,510 673,499 673,489 C673,482 679,477 685,477 C691,477 696,481 699,486 C702,481 707,477 713,477 C719,477 725,482 725,489 C725,499 718,510 699,523 Z" fill="#8a5ade"/>
<path d="M699,530 C676,513 667,501 667,489 C667,479 675,472 683,472 C690,472 696,476 699,482 C702,476 708,472 715,472 C723,472 731,479 731,489 C731,501 722,513 699,530 Z" fill="none" stroke="#a86cf0" stroke-width="2.5"/>
</g>
<path d="M740,478 q10,12 0,21 q-10,12 0,21 M758,478 q10,12 0,21 q-10,12 0,21 M776,478 q10,12 0,21 q-10,12 0,21" stroke="#c9a4ff" stroke-width="5" fill="none" stroke-linecap="round"/>

<path d="M-10,452 Q200,504 400,462 T810,472" stroke="#2a2f57" stroke-width="3" fill="none"/>
<path d="M-10,512 Q260,560 520,518 T810,530" stroke="#2a2f57" stroke-width="3" fill="none"/>

<circle cx="60" cy="500" r="46" fill="url(#taiwan-lanternglow)" pointer-events="none"/>
<path d="M60,466 L60,478" stroke="#3a3f6b" stroke-width="2"/>
<rect x="52" y="476" width="16" height="6" fill="#f2b23c"/>
<ellipse cx="60" cy="506" rx="20" ry="24" fill="url(#taiwan-lantbody)"/>
<ellipse cx="53" cy="506" rx="7" ry="20" fill="#ff8a68" opacity="0.5"/>
<rect x="52" y="528" width="16" height="6" fill="#f2b23c"/>
<path d="M60,534 L60,548" stroke="#f2b23c" stroke-width="3"/>

<path d="M150,478 L150,490" stroke="#3a3f6b" stroke-width="2"/>
<rect x="142" y="488" width="16" height="6" fill="#f2b23c"/>
<ellipse cx="150" cy="518" rx="20" ry="24" fill="url(#taiwan-lantbody)"/>
<ellipse cx="143" cy="518" rx="7" ry="20" fill="#ff8a68" opacity="0.5"/>
<rect x="142" y="540" width="16" height="6" fill="#f2b23c"/>
<path d="M150,546 L150,560" stroke="#f2b23c" stroke-width="3"/>

<path d="M240,482 L240,494" stroke="#3a3f6b" stroke-width="2"/>
<rect x="232" y="492" width="16" height="6" fill="#f2b23c"/>
<ellipse cx="240" cy="522" rx="20" ry="24" fill="url(#taiwan-lantbody)"/>
<ellipse cx="233" cy="522" rx="7" ry="20" fill="#ff8a68" opacity="0.5"/>
<rect x="232" y="544" width="16" height="6" fill="#f2b23c"/>
<path d="M240,550 L240,564" stroke="#f2b23c" stroke-width="3"/>

<path d="M330,476 L330,488" stroke="#3a3f6b" stroke-width="2"/>
<rect x="322" y="486" width="16" height="6" fill="#f2b23c"/>
<ellipse cx="330" cy="516" rx="20" ry="24" fill="url(#taiwan-lantbody)"/>
<ellipse cx="323" cy="516" rx="7" ry="20" fill="#ff8a68" opacity="0.5"/>
<rect x="322" y="538" width="16" height="6" fill="#f2b23c"/>
<path d="M330,544 L330,558" stroke="#f2b23c" stroke-width="3"/>

<circle cx="514" cy="496" r="46" fill="url(#taiwan-lanternglow)" pointer-events="none"/>
<path d="M514,462 L514,474" stroke="#3a3f6b" stroke-width="2"/>
<rect x="506" y="472" width="16" height="6" fill="#f2b23c"/>
<ellipse cx="514" cy="502" rx="20" ry="24" fill="url(#taiwan-lantbody)"/>
<ellipse cx="507" cy="502" rx="7" ry="20" fill="#ff8a68" opacity="0.5"/>
<rect x="506" y="524" width="16" height="6" fill="#f2b23c"/>
<path d="M514,530 L514,544" stroke="#f2b23c" stroke-width="3"/>

<path d="M596,464 L596,476" stroke="#3a3f6b" stroke-width="2"/>
<rect x="588" y="474" width="16" height="6" fill="#f2b23c"/>
<ellipse cx="596" cy="504" rx="20" ry="24" fill="url(#taiwan-lantbody)"/>
<ellipse cx="589" cy="504" rx="7" ry="20" fill="#ff8a68" opacity="0.5"/>
<rect x="588" y="526" width="16" height="6" fill="#f2b23c"/>
<path d="M596,532 L596,546" stroke="#f2b23c" stroke-width="3"/>

<circle cx="726" cy="500" r="46" fill="url(#taiwan-lanternglow)" pointer-events="none"/>
<path d="M726,468 L726,480" stroke="#3a3f6b" stroke-width="2"/>
<rect x="718" y="478" width="16" height="6" fill="#f2b23c"/>
<ellipse cx="726" cy="508" rx="20" ry="24" fill="url(#taiwan-lantbody)"/>
<ellipse cx="719" cy="508" rx="7" ry="20" fill="#ff8a68" opacity="0.5"/>
<rect x="718" y="530" width="16" height="6" fill="#f2b23c"/>
<path d="M726,536 L726,550" stroke="#f2b23c" stroke-width="3"/>


<g data-obj="lucky-knot">
<path d="M470,518 L470,542" stroke="#c0392b" stroke-width="3"/>
<path d="M470,542 L502,572 L470,602 L438,572 Z" fill="#d92f28"/>
<path d="M470,554 L488,572 L470,590 L452,572 Z" fill="#ff5a44"/>
<path d="M470,562 L480,572 L470,582 L460,572 Z" fill="#a71f1b"/>
<path d="M470,542 L458,554 L470,566 L482,554 Z" fill="none" stroke="#ff8a72" stroke-width="2"/>
<path d="M436,570 l-8,0 l0,4 l8,0 Z M504,570 l8,0 l0,4 l-8,0 Z" fill="#a71f1b"/>
<circle cx="470" cy="606" r="7" fill="#f2b23c"/>
<rect x="462" y="610" width="16" height="9" rx="3" fill="#b0241f"/>
<path d="M464,618 L458,642 M470,618 L470,646 M476,618 L482,642" stroke="#d92f28" stroke-width="3" stroke-linecap="round" fill="none"/>
</g>

<circle cx="440" cy="546" r="44" fill="url(#taiwan-lanternglow)" pointer-events="none"/>
<path d="M440,510 L440,522" stroke="#3a3f6b" stroke-width="2"/>
<rect x="432" y="520" width="16" height="6" fill="#f2b23c"/>
<ellipse cx="440" cy="550" rx="19" ry="23" fill="url(#taiwan-lantbody)"/>
<ellipse cx="433" cy="550" rx="6" ry="19" fill="#ff8a68" opacity="0.5"/>
<rect x="432" y="571" width="16" height="6" fill="#f2b23c"/>
<path d="M440,577 L440,590" stroke="#f2b23c" stroke-width="3"/>

<rect x="10" y="700" width="182" height="11" rx="3" fill="#7a4b2c"/>
<rect x="10" y="700" width="182" height="4" rx="2" fill="#a4693c"/>
<rect x="18" y="652" width="38" height="48" rx="4" fill="#c0392b"/>
<rect x="18" y="652" width="38" height="11" rx="4" fill="#e05a45"/>
<rect x="58" y="664" width="30" height="36" rx="4" fill="#d94f2b"/>
<rect x="58" y="664" width="30" height="9" rx="4" fill="#f2793f"/>
<rect x="152" y="646" width="40" height="54" rx="4" fill="#a72622"/>
<rect x="152" y="646" width="40" height="12" rx="4" fill="#c0392b"/>
<path d="M96,700 q-7,-30 12,-38 q19,8 12,38 Z" fill="#e0392f"/>
<path d="M96,700 q-7,-30 12,-38 q4,14 2,38 Z" fill="#f2554a"/>
<ellipse cx="108" cy="663" rx="12" ry="5" fill="#8f2019"/>

<g data-obj="folding-fan" transform="rotate(-14 112 702)">
<path d="M112,702 L64,668 A 60,60 0 0 1 160,668 Z" fill="#d9482b"/>
<path d="M112,702 L78,678 A 42,42 0 0 1 146,678 Z" fill="#e8863a"/>
<path d="M112,702 L90,686 A 24,24 0 0 1 134,686 Z" fill="#f2b05e"/>
<path d="M112,702 L64,668 M112,702 L82,652 M112,702 L112,642 M112,702 L142,652 M112,702 L160,668" stroke="#8c3418" stroke-width="2" fill="none" opacity="0.7"/>
<path d="M64,668 A 60,60 0 0 1 160,668" stroke="#f2c07a" stroke-width="2.5" fill="none"/>
<circle cx="112" cy="701" r="5" fill="#c98b4a"/>
</g>

<rect x="122" y="660" width="34" height="42" rx="4" fill="#b8352c"/>
<rect x="122" y="660" width="34" height="10" rx="4" fill="#d4544a"/>
<path d="M170,614 Q178,650 166,688" stroke="#6f2b1c" stroke-width="3" fill="none"/>
<ellipse cx="174" cy="632" rx="7" ry="14" fill="#c0261f" transform="rotate(12 174 632)"/>
<ellipse cx="171" cy="656" rx="7" ry="14" fill="#e0392f" transform="rotate(-8 171 656)"/>

<rect x="0" y="758" width="800" height="26" fill="#a4693c"/>
<rect x="0" y="758" width="800" height="7" fill="#c08551" opacity="0.8"/>
<rect x="0" y="784" width="800" height="84" fill="url(#taiwan-wood)"/>
<rect x="0" y="784" width="800" height="8" fill="#55321c"/>
<rect x="0" y="792" width="800" height="24" fill="#2e9c78"/>
<path d="M0,816 q14,15 28,0 q14,15 28,0 q14,15 28,0 q14,15 28,0 q14,15 28,0 q14,15 28,0 q14,15 28,0 q14,15 28,0 q14,15 28,0 q14,15 28,0 q14,15 28,0 q14,15 28,0 q14,15 28,0 q14,15 28,0 L800,816 Z" fill="#1f6f56"/>
<rect x="96" y="792" width="4" height="72" fill="#5d3820" opacity="0.6"/>
<rect x="486" y="792" width="4" height="72" fill="#5d3820" opacity="0.6"/>

<ellipse cx="112" cy="756" rx="150" ry="46" fill="url(#taiwan-warmglow)" pointer-events="none"/>
<rect x="52" y="716" width="120" height="42" rx="6" fill="#3c3550"/>
<rect x="52" y="716" width="120" height="8" rx="4" fill="#4e4668"/>
<ellipse cx="112" cy="716" rx="52" ry="16" fill="#2b2438"/>
<ellipse cx="112" cy="714" rx="44" ry="12" fill="#12101c"/>
<ellipse cx="112" cy="712" rx="30" ry="8" fill="#f2793f" opacity="0.55"/>
<path d="M92,704 q6,-18 14,-8 q6,-16 12,-2 q8,-12 12,6" fill="#ffb45e" opacity="0.75"/>
<path d="M100,700 q4,-12 10,-6 q5,-10 9,0" fill="#ffe6a8" opacity="0.7"/>
<path d="M86,700 q-10,-24 4,-38 q-10,-20 4,-34" stroke="#cfd6e6" stroke-width="4" fill="none" opacity="0.2"/>
<path d="M132,704 q12,-22 0,-38 q10,-18 0,-30" stroke="#cfd6e6" stroke-width="4" fill="none" opacity="0.16"/>

<rect x="212" y="738" width="176" height="22" rx="4" fill="#3c3550"/>
<rect x="212" y="738" width="176" height="6" rx="3" fill="#524a6b"/>
<ellipse cx="300" cy="742" rx="80" ry="9" fill="#12101c"/>
<ellipse cx="300" cy="742" rx="70" ry="6" fill="#ff6b3a" opacity="0.45"/>
<rect x="222" y="700" width="8" height="44" rx="3" fill="#c98b4a" transform="rotate(-6 226 722)"/>
<rect x="246" y="700" width="8" height="44" rx="3" fill="#b87a3d" transform="rotate(3 250 722)"/>
<rect x="270" y="700" width="8" height="44" rx="3" fill="#c98b4a" transform="rotate(-4 274 722)"/>
<rect x="294" y="700" width="8" height="44" rx="3" fill="#b87a3d" transform="rotate(5 298 722)"/>
<rect x="318" y="700" width="8" height="44" rx="3" fill="#c98b4a" transform="rotate(-3 322 722)"/>
<circle cx="224" cy="706" r="9" fill="#8f4b28"/>
<circle cx="248" cy="704" r="9" fill="#a55c31"/>
<circle cx="272" cy="706" r="9" fill="#8f4b28"/>
<circle cx="296" cy="704" r="9" fill="#a55c31"/>
<circle cx="320" cy="706" r="9" fill="#8f4b28"/>

<ellipse cx="600" cy="754" rx="180" ry="52" fill="url(#taiwan-warmglow)" pointer-events="none"/>
<rect x="440" y="740" width="112" height="18" rx="5" fill="#d9b478"/>
<rect x="440" y="740" width="112" height="5" rx="2" fill="#efd2a2"/>
<rect x="444" y="722" width="104" height="18" rx="5" fill="#cfa96b"/>
<rect x="444" y="722" width="104" height="5" rx="2" fill="#e6c896"/>
<rect x="448" y="704" width="96" height="18" rx="5" fill="#d9b478"/>
<rect x="448" y="704" width="96" height="5" rx="2" fill="#efd2a2"/>
<ellipse cx="496" cy="702" rx="52" ry="12" fill="#b58a52"/>
<ellipse cx="496" cy="698" rx="46" ry="9" fill="#cfa96b"/>
<path d="M470,690 q-8,-18 2,-30 q-8,-14 0,-24" stroke="#e8eef8" stroke-width="4" fill="none" opacity="0.18"/>


<g data-obj="xiaolongbao">
<ellipse cx="600" cy="708" rx="60" ry="14" fill="#b58a52"/>
<rect x="540" y="708" width="120" height="40" rx="8" fill="#d9b478"/>
<rect x="540" y="708" width="120" height="8" rx="4" fill="#e8c894"/>
<rect x="540" y="740" width="120" height="8" rx="4" fill="#b58a52"/>
<path d="M556,716 L556,744 M580,716 L580,744 M604,716 L604,744 M628,716 L628,744 M648,716 L648,744" stroke="#c39a5f" stroke-width="2" fill="none" opacity="0.8"/>
<ellipse cx="600" cy="704" rx="50" ry="10" fill="#c9a069"/>
<ellipse cx="570" cy="698" rx="16" ry="13" fill="#f6ead2"/>
<ellipse cx="600" cy="694" rx="17" ry="14" fill="#fbf3e2"/>
<ellipse cx="630" cy="698" rx="16" ry="13" fill="#f6ead2"/>
<ellipse cx="585" cy="706" rx="15" ry="11" fill="#efe0c2"/>
<ellipse cx="616" cy="706" rx="15" ry="11" fill="#efe0c2"/>
<path d="M570,690 l-4,7 M570,690 l4,7 M570,690 l0,8 M600,686 l-5,8 M600,686 l5,8 M600,686 l0,9 M630,690 l-4,7 M630,690 l4,7" stroke="#d8c39c" stroke-width="1.8" fill="none" stroke-linecap="round"/>
</g>

<rect x="640" y="744" width="92" height="16" rx="5" fill="#cfa96b"/>
<rect x="644" y="728" width="84" height="16" rx="5" fill="#d9b478"/>
<ellipse cx="686" cy="726" rx="42" ry="10" fill="#b58a52"/>
<ellipse cx="686" cy="723" rx="36" ry="7" fill="#e0bb84"/>
<path d="M636,700 q-10,-20 2,-34 q-10,-16 0,-28" stroke="#e8eef8" stroke-width="5" fill="none" opacity="0.18"/>
<path d="M660,684 q-8,-16 2,-28" stroke="#e8eef8" stroke-width="4" fill="none" opacity="0.14"/>

<rect x="0" y="866" width="800" height="80" fill="#120f2c"/>
<rect x="0" y="866" width="800" height="8" fill="#1c1840" opacity="0.8"/>
<rect x="40" y="884" width="86" height="60" rx="4" fill="#241d3f"/>
<rect x="40" y="884" width="86" height="8" rx="3" fill="#302750"/>
<rect x="150" y="896" width="70" height="48" rx="4" fill="#1e1836"/>
<rect x="300" y="900" width="62" height="44" rx="4" fill="#1e1836"/>
<rect x="470" y="880" width="96" height="64" rx="4" fill="#241d3f"/>
<rect x="470" y="880" width="96" height="8" rx="3" fill="#302750"/>
<ellipse cx="626" cy="914" rx="26" ry="30" fill="#1e1836"/>
<ellipse cx="626" cy="886" rx="14" ry="7" fill="#2a2248"/>
<rect x="0" y="944" width="800" height="36" fill="#8a5730"/>
<rect x="0" y="944" width="800" height="9" fill="#ab7040"/>
<rect x="0" y="980" width="800" height="150" fill="#573320"/>
<rect x="0" y="980" width="800" height="48" fill="#b8352c"/>
<rect x="0" y="980" width="800" height="8" fill="#d4544a" opacity="0.7"/>
<path d="M0,1028 q14,18 28,0 q14,18 28,0 q14,18 28,0 q14,18 28,0 q14,18 28,0 q14,18 28,0 q14,18 28,0 q14,18 28,0 q14,18 28,0 q14,18 28,0 q14,18 28,0 q14,18 28,0 q14,18 28,0 q14,18 28,0 L800,1028 L800,1020 L0,1020 Z" fill="#8f2019"/>
<rect x="128" y="1036" width="4" height="94" fill="#432613" opacity="0.6"/>
<rect x="576" y="1036" width="4" height="94" fill="#432613" opacity="0.6"/>

<ellipse cx="170" cy="940" rx="150" ry="52" fill="url(#taiwan-warmglow)" pointer-events="none"/>
<rect x="92" y="928" width="152" height="22" rx="5" fill="#b9bfc9"/>
<rect x="92" y="928" width="152" height="6" rx="3" fill="#dfe4ea"/>
<rect x="214" y="898" width="40" height="34" rx="4" fill="#e6b869"/>
<rect x="214" y="898" width="40" height="10" rx="4" fill="#f6d295"/>
<rect x="214" y="922" width="40" height="10" fill="#c99247"/>
<rect x="98" y="900" width="34" height="30" rx="4" fill="#e6b869"/>
<rect x="98" y="900" width="34" height="9" rx="4" fill="#f6d295"/>
<rect x="98" y="921" width="34" height="9" fill="#c99247"/>

<g data-obj="pineapple-cake">
<rect x="140" y="892" width="78" height="46" rx="6" fill="#f2c877"/>
<rect x="140" y="892" width="78" height="14" rx="6" fill="#ffdf9d"/>
<rect x="140" y="924" width="78" height="14" fill="#d9a24e"/>
<path d="M152,900 l0,30 M170,898 l0,32 M190,900 l0,30 M206,902 l0,28" stroke="#e5b96b" stroke-width="2" fill="none" opacity="0.8"/>
<path d="M179,904 l5,8 l9,1 l-7,6 l2,9 l-9,-5 l-9,5 l2,-9 l-7,-6 l9,-1 Z" fill="#e08f2c" opacity="0.85"/>
<path d="M140,892 l0,46 l-12,4 l0,-46 Z" fill="#f7e9cf"/>
<path d="M140,892 l0,46 l-12,4 l0,-46 Z" fill="none" stroke="#dccdb0" stroke-width="1.5"/>
</g>

<rect x="88" y="932" width="160" height="16" rx="5" fill="#9aa4b2"/>
<rect x="88" y="932" width="160" height="5" rx="2" fill="#c3cad4"/>

<ellipse cx="340" cy="946" rx="150" ry="48" fill="url(#taiwan-warmglow)" pointer-events="none"/>
<path d="M258,876 L302,876 L296,946 L264,946 Z" fill="#7fc9a8"/>
<rect x="254" y="866" width="52" height="12" rx="4" fill="#eef2f6"/>
<rect x="254" y="874" width="52" height="5" fill="#cdd6e0"/>
<rect x="272" y="842" width="9" height="34" fill="#38c6d9"/>
<path d="M410,880 L452,880 L446,946 L416,946 Z" fill="#f2a3c0"/>
<rect x="406" y="870" width="50" height="12" rx="4" fill="#eef2f6"/>
<rect x="406" y="878" width="50" height="5" fill="#cdd6e0"/>
<rect x="424" y="848" width="9" height="32" fill="#ffb45e"/>
<path d="M462,886 L500,886 L494,946 L468,946 Z" fill="#d9c27a"/>
<rect x="458" y="876" width="46" height="12" rx="4" fill="#eef2f6"/>
<rect x="476" y="854" width="9" height="30" fill="#a86cf0"/>

<g data-obj="bubble-tea">
<rect x="326" y="830" width="11" height="42" rx="4" fill="#ff6f9c" transform="rotate(9 331 851)"/>
<path d="M302,872 L358,872 L350,948 L310,948 Z" fill="url(#taiwan-teafill)"/>
<path d="M306,872 L320,872 L316,948 L309,948 Z" fill="#f0d0a4" opacity="0.55"/>
<circle cx="318" cy="936" r="7" fill="#3a2318"/>
<circle cx="333" cy="940" r="7" fill="#2c1a12"/>
<circle cx="345" cy="934" r="6.5" fill="#3a2318"/>
<circle cx="326" cy="924" r="6.5" fill="#2c1a12"/>
<circle cx="340" cy="920" r="6" fill="#3a2318"/>
<rect x="300" y="860" width="60" height="14" rx="3" fill="#f4e3cb"/>
<rect x="296" y="848" width="68" height="14" rx="5" fill="#eef2f6"/>
<rect x="296" y="858" width="68" height="6" rx="2" fill="#cdd6e0"/>
<path d="M348,878 l-5,64" stroke="#ffffff" stroke-width="4" opacity="0.22" fill="none"/>
</g>

<path d="M352,884 L396,884 L390,946 L358,946 Z" fill="#8fd6e8"/>
<rect x="348" y="874" width="52" height="12" rx="4" fill="#eef2f6"/>
<rect x="348" y="882" width="52" height="5" fill="#cdd6e0"/>
<rect x="366" y="852" width="9" height="32" fill="#56c79c"/>
<rect x="276" y="908" width="42" height="40" rx="6" fill="#5e5273"/>
<rect x="276" y="908" width="42" height="8" rx="4" fill="#776a8c"/>
<path d="M284,904 l0,-16 M294,902 l0,-18 M304,904 l0,-16 M312,906 l0,-14" stroke="#f7e9cf" stroke-width="4" fill="none" stroke-linecap="round"/>

<ellipse cx="600" cy="944" rx="170" ry="46" fill="url(#taiwan-warmglow)" pointer-events="none"/>
<path d="M520,916 q54,-26 108,0 l6,32 l-120,0 Z" fill="#7a4b2c"/>
<path d="M520,916 q54,-26 108,0 l2,10 l-112,0 Z" fill="#a4693c"/>
<circle cx="546" cy="908" r="17" fill="#f2a03c"/>
<circle cx="580" cy="900" r="18" fill="#ffb45e"/>
<circle cx="614" cy="908" r="17" fill="#f2a03c"/>
<circle cx="562" cy="884" r="16" fill="#ffc978"/>
<circle cx="598" cy="882" r="16" fill="#ffb45e"/>
<circle cx="580" cy="862" r="15" fill="#ffd08a"/>
<circle cx="574" cy="858" r="5" fill="#fff0c4" opacity="0.7"/>
<path d="M580,848 q6,-10 14,-8 q-6,6 -10,10 Z" fill="#56c79c"/>
<rect x="646" y="900" width="76" height="48" rx="5" fill="#6b4128"/>
<rect x="646" y="900" width="76" height="9" rx="4" fill="#8f5a35"/>
<circle cx="662" cy="896" r="13" fill="#e0392f"/>
<circle cx="686" cy="892" r="13" fill="#f2554a"/>
<circle cx="710" cy="896" r="13" fill="#c0261f"/>
<circle cx="674" cy="878" r="12" fill="#e0392f"/>
<path d="M746,892 l-2,-36 M754,892 l0,-42 M762,892 l1,-36 M788,892 l4,-34" stroke="#c98b4a" stroke-width="5" fill="none" stroke-linecap="round"/>
<circle cx="744" cy="854" r="6" fill="#8f4b28"/>
<circle cx="754" cy="848" r="6" fill="#a55c31"/>
<circle cx="763" cy="854" r="6" fill="#8f4b28"/>
<circle cx="792" cy="856" r="6" fill="#a55c31"/>
<g data-obj="lightstick">
<circle cx="772" cy="834" r="24" fill="url(#taiwan-purpleglow)" pointer-events="none" opacity="0.3"/>
<rect x="764" y="850" width="18" height="62" rx="7" fill="#efe6f7" transform="rotate(6 773 881)"/>
<rect x="774" y="852" width="8" height="58" rx="4" fill="#cfc2e2" transform="rotate(6 778 881)"/>
<rect x="760" y="844" width="25" height="12" rx="4" fill="#b9a7e0" transform="rotate(6 772 850)"/>
<circle cx="772" cy="834" r="19" fill="#7a4ec4"/>
<circle cx="772" cy="834" r="13" fill="#a983f0"/>
<path d="M772,842 c-6,-5 -9,-8 -9,-11 c0,-2.4 2.4,-4 4.8,-4 c1.4,0 2.9,0.8 4.2,2.2 c1.3,-1.4 2.8,-2.2 4.2,-2.2 c2.4,0 4.8,1.6 4.8,4 c0,3 -3,6 -9,11 Z" fill="#6c3fb5"/>
<ellipse cx="765" cy="827" rx="4.5" ry="6" fill="#ffffff" opacity="0.5"/>
</g>
<rect x="738" y="888" width="52" height="60" rx="6" fill="#4a4160"/>
<rect x="738" y="888" width="52" height="9" rx="4" fill="#605474"/>

<rect x="0" y="1130" width="800" height="70" fill="#241f45"/>
<rect x="0" y="1130" width="800" height="10" fill="#2e2854"/>
<ellipse cx="400" cy="1156" rx="380" ry="42" fill="url(#taiwan-warmglow)" pointer-events="none"/>
<ellipse cx="140" cy="1152" rx="120" ry="22" fill="#171338" opacity="0.6"/>

<ellipse cx="118" cy="1146" rx="128" ry="18" fill="#141030" opacity="0.55"/>
<path d="M28,1104 q0,-40 38,-42 l52,2 l0,44 l-88,4 Z" fill="#3c6f9c"/>
<path d="M28,1104 q0,-40 38,-42 l52,2 l0,12 l-76,4 q-8,10 -8,26 Z" fill="#5a92c2"/>
<rect x="34" y="1048" width="86" height="20" rx="9" fill="#2b3444"/>
<rect x="34" y="1048" width="86" height="7" rx="4" fill="#4a5468"/>
<path d="M106,1094 l62,0 l0,16 l-62,0 Z" fill="#2b5375"/>
<path d="M164,1112 l0,-24 q0,-44 26,-60 l16,10 q-22,18 -22,50 l0,24 Z" fill="#3c6f9c"/>
<path d="M190,1028 l16,10 q-14,12 -19,30 q-3,-22 3,-40 Z" fill="#5a92c2"/>
<path d="M170,1114 q24,-16 44,4 l-8,10 q-16,-13 -30,-4 Z" fill="#33546f"/>
<circle cx="200" cy="1044" r="28" fill="url(#taiwan-warmglow)" pointer-events="none"/>
<ellipse cx="200" cy="1044" rx="14" ry="16" fill="#c9d2dc"/>
<ellipse cx="201" cy="1043" rx="8" ry="10" fill="#ffe6a8"/>
<path d="M182,1022 l44,-10 l3,11 l-44,10 Z" fill="#2b3444"/>
<rect x="216" y="1006" width="18" height="9" rx="4" fill="#1c1a2c" transform="rotate(-12 225 1010)"/>
<path d="M228,1010 l5,-16" stroke="#54607a" stroke-width="3" fill="none"/>
<circle cx="234" cy="992" r="6" fill="#8e9aa8"/>
<circle cx="60" cy="1124" r="32" fill="#1c1a2c"/>
<circle cx="60" cy="1124" r="15" fill="#4b5568"/>
<circle cx="60" cy="1124" r="6" fill="#8e9aa8"/>
<circle cx="196" cy="1126" r="28" fill="#1c1a2c"/>
<circle cx="196" cy="1126" r="13" fill="#4b5568"/>
<circle cx="196" cy="1126" r="5" fill="#8e9aa8"/>

<rect x="236" y="1104" width="72" height="60" rx="5" fill="#6b5233"/>
<rect x="236" y="1104" width="72" height="10" rx="4" fill="#8a6a44"/>
<path d="M240,1118 l64,0 M240,1136 l64,0 M240,1152 l64,0" stroke="#4f3c24" stroke-width="3" fill="none"/>
<rect x="244" y="1068" width="13" height="38" rx="5" fill="#2e9c78"/>
<rect x="261" y="1062" width="13" height="44" rx="5" fill="#56c79c"/>
<rect x="278" y="1066" width="13" height="40" rx="5" fill="#2e9c78"/>
<rect x="295" y="1072" width="12" height="34" rx="5" fill="#1f6f56"/>
<path d="M250,1068 l0,-7 M267,1062 l0,-7 M284,1066 l0,-7 M301,1072 l0,-7" stroke="#f2b23c" stroke-width="7" stroke-linecap="round" fill="none"/>

<rect x="330" y="1096" width="86" height="70" rx="5" fill="#7a5e3a"/>
<rect x="330" y="1096" width="86" height="10" rx="4" fill="#997748"/>
<path d="M334,1114 l78,0 M334,1134 l78,0 M334,1152 l78,0" stroke="#5b4429" stroke-width="3" fill="none"/>
<ellipse cx="356" cy="1090" rx="18" ry="10" fill="#2e9c78"/>
<ellipse cx="386" cy="1088" rx="18" ry="10" fill="#56c79c"/>
<ellipse cx="371" cy="1078" rx="16" ry="9" fill="#3fae86"/>

<rect x="424" y="1070" width="76" height="14" rx="5" fill="#d1443a"/>
<rect x="430" y="1084" width="64" height="10" rx="4" fill="#a72622"/>
<rect x="436" y="1094" width="52" height="12" rx="4" fill="#c0392b"/>
<rect x="442" y="1106" width="40" height="24" rx="3" fill="#8f2019"/>
<path d="M506,1130 q-8,-46 26,-50 q34,4 26,50 Z" fill="#8a7457"/>
<path d="M506,1130 q-8,-46 26,-50 q6,22 4,50 Z" fill="#a08a68"/>
<ellipse cx="532" cy="1082" rx="25" ry="8" fill="#6b5a44"/>
<path d="M566,1130 l6,-42 l48,0 l6,42 Z" fill="#33546f"/>
<rect x="564" y="1080" width="60" height="11" rx="5" fill="#4a7593"/>
<path d="M628,1160 q-14,-64 34,-70 q48,6 34,70 Z" fill="#8a7457"/>
<path d="M628,1160 q-14,-64 34,-70 q10,32 4,70 Z" fill="#a08a68"/>
<ellipse cx="662" cy="1092" rx="34" ry="10" fill="#6b5a44"/>
<path d="M636,1122 l52,0" stroke="#6b5a44" stroke-width="4" fill="none"/>
<rect x="712" y="1102" width="76" height="62" rx="6" fill="#6b4128"/>
<rect x="712" y="1102" width="76" height="10" rx="4" fill="#8f5a35"/>
<path d="M716,1122 l68,0 M716,1142 l68,0" stroke="#4d2e1b" stroke-width="3" fill="none"/>
<ellipse cx="750" cy="1096" rx="30" ry="10" fill="#c0392b"/>
<ellipse cx="750" cy="1092" rx="24" ry="7" fill="#e0554a"/>

<ellipse cx="470" cy="1160" rx="200" ry="34" fill="url(#taiwan-warmglow)" pointer-events="none"/>
</svg>`
});
