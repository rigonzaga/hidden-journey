window.SCENES = window.SCENES || [];
window.SCENES.push({
  id: 'singapore',
  order: 3,
  country: 'Singapore',
  flag: '🇸🇬',
  title: 'Gardens by the Bay',
  caption: 'City lights and garden walks.',
  stamp: '🌺',
  objects: [
    { id: 'lightstick',   name: 'Lightstick' },
    { id: 'purple-heart', name: 'Purple Heart' },
    { id: 'merlion',      name: 'Merlion' },
    { id: 'orchid',       name: 'Orchid' },
    { id: 'satay-skewer', name: 'Satay Skewers' },
    { id: 'kaya-toast',   name: 'Kaya Toast' },
    { id: 'durian',       name: 'Durian' },
    { id: 'ferris-toy',   name: 'Ferris Wheel Toy' }
  ],
  svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 1200" width="800" height="1200">
<defs>
<linearGradient id="singapore-sky" x1="0" y1="0" x2="0" y2="1">
<stop offset="0" stop-color="#ffdcb8"/>
<stop offset="0.12" stop-color="#ffc39f"/>
<stop offset="0.24" stop-color="#f2939f"/>
<stop offset="0.36" stop-color="#b571ab"/>
<stop offset="0.50" stop-color="#6d4c90"/>
<stop offset="1" stop-color="#2f2249"/>
</linearGradient>
<radialGradient id="singapore-sunglow" cx="0.5" cy="0.5" r="0.5">
<stop offset="0" stop-color="#ffe7c2" stop-opacity="0.85"/>
<stop offset="1" stop-color="#ffe7c2" stop-opacity="0"/>
</radialGradient>
<radialGradient id="singapore-canopy-a" cx="0.5" cy="0.35" r="0.7">
<stop offset="0" stop-color="#ffa8de"/>
<stop offset="0.5" stop-color="#c257c9"/>
<stop offset="1" stop-color="#6a2f8c"/>
</radialGradient>
<radialGradient id="singapore-canopy-b" cx="0.5" cy="0.35" r="0.7">
<stop offset="0" stop-color="#9df3ea"/>
<stop offset="0.5" stop-color="#3cb6c4"/>
<stop offset="1" stop-color="#2a6a92"/>
</radialGradient>
<radialGradient id="singapore-glowm" cx="0.5" cy="0.5" r="0.5">
<stop offset="0" stop-color="#ff9ad8" stop-opacity="0.75"/>
<stop offset="1" stop-color="#ff9ad8" stop-opacity="0"/>
</radialGradient>
<radialGradient id="singapore-glowt" cx="0.5" cy="0.5" r="0.5">
<stop offset="0" stop-color="#8ff2ea" stop-opacity="0.7"/>
<stop offset="1" stop-color="#8ff2ea" stop-opacity="0"/>
</radialGradient>
<radialGradient id="singapore-glowy" cx="0.5" cy="0.5" r="0.5">
<stop offset="0" stop-color="#ffe1a6" stop-opacity="0.85"/>
<stop offset="1" stop-color="#ffe1a6" stop-opacity="0"/>
</radialGradient>
<radialGradient id="singapore-glowp" cx="0.5" cy="0.5" r="0.5">
<stop offset="0" stop-color="#c79bff" stop-opacity="0.8"/>
<stop offset="1" stop-color="#c79bff" stop-opacity="0"/>
</radialGradient>
<linearGradient id="singapore-water" x1="0" y1="0" x2="0" y2="1">
<stop offset="0" stop-color="#8a68ad"/>
<stop offset="0.45" stop-color="#5c4488"/>
<stop offset="1" stop-color="#33285c"/>
</linearGradient>
<linearGradient id="singapore-ground" x1="0" y1="0" x2="0" y2="1">
<stop offset="0" stop-color="#2f6647"/>
<stop offset="0.55" stop-color="#245039"/>
<stop offset="1" stop-color="#17362a"/>
</linearGradient>
<linearGradient id="singapore-mat" x1="0" y1="0" x2="0" y2="1">
<stop offset="0" stop-color="#7a4aa0"/>
<stop offset="1" stop-color="#452867"/>
</linearGradient>
<linearGradient id="singapore-wood" x1="0" y1="0" x2="0" y2="1">
<stop offset="0" stop-color="#c48b52"/>
<stop offset="1" stop-color="#8a5a33"/>
</linearGradient>
<linearGradient id="singapore-canvas" x1="0" y1="0" x2="0" y2="1">
<stop offset="0" stop-color="#f0d9b6"/>
<stop offset="1" stop-color="#d3b083"/>
</linearGradient>
</defs>

<rect x="0" y="0" width="800" height="1200" fill="url(#singapore-sky)"/>
<ellipse cx="560" cy="180" rx="360" ry="210" fill="url(#singapore-sunglow)"/>
<ellipse cx="180" cy="120" rx="240" ry="120" fill="#ffd0ae" opacity="0.26"/>
<circle cx="646" cy="92" r="72" fill="url(#singapore-glowy)"/>
<circle cx="646" cy="92" r="24" fill="#fff3da" opacity="0.92"/>
<circle cx="638" cy="86" r="19" fill="#ffe3bb" opacity="0.35"/>
<circle cx="72" cy="58" r="2.4" fill="#fff6e6" opacity="0.75"/>
<circle cx="204" cy="46" r="2" fill="#fff6e6" opacity="0.7"/>
<circle cx="268" cy="112" r="1.6" fill="#fff6e6" opacity="0.55"/>
<circle cx="332" cy="64" r="2.2" fill="#fff6e6" opacity="0.7"/>
<circle cx="470" cy="52" r="2" fill="#fff6e6" opacity="0.65"/>
<circle cx="762" cy="70" r="1.7" fill="#fff6e6" opacity="0.6"/>
<ellipse cx="170" cy="166" rx="126" ry="19" fill="#ffbfa4" opacity="0.32"/>
<ellipse cx="540" cy="238" rx="156" ry="20" fill="#e08fa8" opacity="0.28"/>
<ellipse cx="60" cy="272" rx="140" ry="17" fill="#c07fae" opacity="0.26"/>

<rect x="0" y="452" width="62" height="96" fill="#3a2c60"/>
<rect x="54" y="418" width="46" height="130" fill="#2e2450"/>
<rect x="54" y="418" width="12" height="130" fill="#3b2f63"/>
<rect x="94" y="468" width="38" height="80" fill="#3f3068"/>
<rect x="126" y="392" width="56" height="156" fill="#2b2049"/>
<polygon points="126,392 154,368 182,392" fill="#241b40"/>
<rect x="176" y="452" width="32" height="96" fill="#3f3068"/>
<rect x="256" y="436" width="42" height="112" fill="#2e2450"/>
<rect x="294" y="406" width="58" height="142" fill="#372a5e"/>
<rect x="348" y="460" width="36" height="88" fill="#2b2049"/>
<rect x="380" y="394" width="48" height="154" fill="#33275a"/>
<rect x="399" y="360" width="10" height="36" fill="#241b40"/>
<rect x="424" y="448" width="32" height="100" fill="#2b2049"/>
<rect x="452" y="470" width="44" height="78" fill="#3a2c60"/>
<rect x="506" y="432" width="42" height="116" fill="#372a5e"/>
<rect x="544" y="468" width="36" height="80" fill="#2e2450"/>
<rect x="716" y="428" width="42" height="120" fill="#33275a"/>
<rect x="752" y="398" width="48" height="150" fill="#2b2049"/>
<rect x="752" y="398" width="12" height="150" fill="#382b5c"/>
<rect x="770" y="366" width="8" height="34" fill="#241b40"/>
<rect x="596" y="362" width="30" height="186" fill="#2d2252"/>
<rect x="596" y="362" width="9" height="186" fill="#3b2d68"/>
<rect x="636" y="356" width="30" height="192" fill="#33265c"/>
<rect x="636" y="356" width="9" height="192" fill="#41327a"/>
<rect x="676" y="364" width="30" height="184" fill="#2d2252"/>
<rect x="676" y="364" width="9" height="184" fill="#3b2d68"/>
<path d="M584,362 L714,346 Q730,343 728,332 L584,348 Z" fill="#463572"/>
<path d="M584,348 L728,332 Q726,326 712,327 L584,342 Z" fill="#5b477f"/>
<ellipse cx="622" cy="338" rx="7" ry="4" fill="#2f6647"/>
<ellipse cx="666" cy="333" rx="7" ry="4" fill="#2f6647"/>
<circle cx="606" cy="342" r="2" fill="#ffd9a0" opacity="0.8"/>
<circle cx="716" cy="330" r="2" fill="#ffd9a0" opacity="0.8"/>

<g opacity="0.85">
<rect x="8" y="470" width="5" height="8" fill="#ffcf8a" opacity="0.7"/>
<rect x="62" y="438" width="5" height="9" fill="#ffcf8a" opacity="0.7"/>
<rect x="102" y="486" width="5" height="8" fill="#ffcf8a" opacity="0.55"/>
<rect x="136" y="412" width="5" height="9" fill="#ffcf8a" opacity="0.7"/>
<rect x="186" y="474" width="5" height="8" fill="#ffcf8a" opacity="0.6"/>
<rect x="264" y="454" width="5" height="8" fill="#ffcf8a" opacity="0.55"/>
<rect x="304" y="424" width="5" height="9" fill="#ffcf8a" opacity="0.7"/>
<rect x="356" y="478" width="5" height="8" fill="#ffcf8a" opacity="0.55"/>
<rect x="390" y="412" width="5" height="9" fill="#ffcf8a" opacity="0.7"/>
<rect x="432" y="464" width="5" height="8" fill="#ffcf8a" opacity="0.5"/>
<rect x="514" y="448" width="5" height="9" fill="#ffcf8a" opacity="0.65"/>
<rect x="604" y="392" width="5" height="9" fill="#ffcf8a" opacity="0.65"/>
<rect x="644" y="386" width="5" height="9" fill="#ffcf8a" opacity="0.7"/>
<rect x="684" y="398" width="5" height="9" fill="#ffcf8a" opacity="0.6"/>
<rect x="724" y="446" width="5" height="9" fill="#ffcf8a" opacity="0.55"/>
<rect x="760" y="414" width="5" height="9" fill="#ffcf8a" opacity="0.65"/>
</g>

<ellipse cx="216" cy="336" rx="120" ry="82" fill="url(#singapore-glowm)"/>
<ellipse cx="486" cy="322" rx="112" ry="78" fill="url(#singapore-glowt)"/>
<ellipse cx="340" cy="378" rx="86" ry="60" fill="url(#singapore-glowm)"/>
<ellipse cx="612" cy="406" rx="76" ry="54" fill="url(#singapore-glowm)"/>

<path d="M186,548 L200,330 L232,330 L246,548 Z" fill="#3d2b58"/>
<path d="M232,330 L246,548 L232,548 L222,330 Z" fill="#5b4480"/>
<path d="M200,330 L186,548 L196,548 L206,330 Z" fill="#2e2044"/>
<path d="M203,334 Q196,440 192,544" fill="none" stroke="#8a6bb5" stroke-width="2" opacity="0.75"/>
<path d="M221,334 Q223,440 226,544" fill="none" stroke="#8a6bb5" stroke-width="2" opacity="0.75"/>
<path d="M229,334 Q235,440 241,544" fill="none" stroke="#a37fd0" stroke-width="2" opacity="0.6"/>
<path d="M197,404 Q216,398 235,404" fill="none" stroke="#7d5faa" stroke-width="2" opacity="0.6"/>
<path d="M190,518 Q216,512 242,518" fill="none" stroke="#7d5faa" stroke-width="2" opacity="0.6"/>
<ellipse cx="216" cy="326" rx="78" ry="27" fill="url(#singapore-canopy-a)"/>
<ellipse cx="216" cy="318" rx="74" ry="19" fill="#ff9ad8" opacity="0.42"/>
<path d="M216,326 L146,322" stroke="#ffc0ea" stroke-width="2" opacity="0.5"/>
<path d="M216,326 L196,304" stroke="#ffc0ea" stroke-width="2" opacity="0.45"/>
<path d="M216,326 L236,304" stroke="#ffc0ea" stroke-width="2" opacity="0.45"/>
<path d="M216,326 L286,322" stroke="#ffc0ea" stroke-width="2" opacity="0.5"/>
<circle cx="160" cy="324" r="3" fill="#ffe0f4"/>
<circle cx="272" cy="324" r="3" fill="#ffe0f4"/>

<path d="M322,552 L332,372 L356,372 L366,552 Z" fill="#3d2b58"/>
<path d="M356,372 L366,552 L354,552 L346,372 Z" fill="#5b4480"/>
<path d="M336,376 Q331,464 328,548" fill="none" stroke="#9375c4" stroke-width="2" opacity="0.7"/>
<path d="M353,376 Q357,464 361,548" fill="none" stroke="#9375c4" stroke-width="2" opacity="0.7"/>
<path d="M327,502 Q344,497 361,502" fill="none" stroke="#7d5faa" stroke-width="2" opacity="0.55"/>
<ellipse cx="344" cy="370" rx="58" ry="21" fill="url(#singapore-canopy-a)"/>
<ellipse cx="344" cy="364" rx="54" ry="14" fill="#ff9ad8" opacity="0.4"/>
<path d="M344,370 L296,366" stroke="#ffc0ea" stroke-width="2" opacity="0.45"/>
<path d="M344,370 L392,366" stroke="#ffc0ea" stroke-width="2" opacity="0.45"/>
<circle cx="304" cy="368" r="2.5" fill="#ffe0f4"/>

<path d="M462,550 L474,316 L500,316 L512,550 Z" fill="#33284f"/>
<path d="M500,316 L512,550 L500,550 L490,316 Z" fill="#4c6f8e"/>
<path d="M478,320 Q470,436 466,546" fill="none" stroke="#5fb7c4" stroke-width="2" opacity="0.65"/>
<path d="M487,320 Q487,436 487,546" fill="none" stroke="#7fd6dd" stroke-width="2" opacity="0.6"/>
<path d="M496,320 Q503,436 508,546" fill="none" stroke="#5fb7c4" stroke-width="2" opacity="0.65"/>
<path d="M469,464 Q487,459 505,464" fill="none" stroke="#4a93a8" stroke-width="2" opacity="0.55"/>
<path d="M466,514 Q487,509 508,514" fill="none" stroke="#4a93a8" stroke-width="2" opacity="0.55"/>
<ellipse cx="487" cy="312" rx="72" ry="25" fill="url(#singapore-canopy-b)"/>
<ellipse cx="487" cy="304" rx="68" ry="17" fill="#8ff2ea" opacity="0.4"/>
<path d="M487,312 L427,308" stroke="#c8fbf5" stroke-width="2" opacity="0.45"/>
<path d="M487,312 L487,290" stroke="#c8fbf5" stroke-width="2" opacity="0.4"/>
<path d="M487,312 L547,308" stroke="#c8fbf5" stroke-width="2" opacity="0.45"/>
<circle cx="436" cy="310" r="3" fill="#ddfffb"/>
<circle cx="538" cy="310" r="3" fill="#ddfffb"/>

<path d="M596,556 L606,400 L626,400 L636,556 Z" fill="#3d2b58"/>
<path d="M626,400 L636,556 L626,556 L618,400 Z" fill="#5b4480"/>
<path d="M610,404 Q606,480 603,552" fill="none" stroke="#9375c4" stroke-width="2" opacity="0.65"/>
<path d="M618,404 Q620,480 623,552" fill="none" stroke="#a37fd0" stroke-width="2" opacity="0.6"/>
<path d="M604,478 Q616,474 628,478" fill="none" stroke="#7d5faa" stroke-width="2" opacity="0.5"/>
<ellipse cx="616" cy="398" rx="48" ry="18" fill="url(#singapore-canopy-a)"/>
<ellipse cx="616" cy="392" rx="44" ry="12" fill="#ff9ad8" opacity="0.38"/>
<path d="M616,398 L578,394" stroke="#ffc0ea" stroke-width="2" opacity="0.4"/>
<circle cx="648" cy="396" r="2.5" fill="#ffe0f4"/>

<path d="M244,404 Q292,388 322,402" fill="none" stroke="#6b5490" stroke-width="6"/>
<path d="M244,400 Q292,384 322,398" fill="none" stroke="#8d74b4" stroke-width="2"/>
<path d="M366,392 Q420,374 464,388" fill="none" stroke="#6b5490" stroke-width="6"/>
<path d="M366,388 Q420,370 464,384" fill="none" stroke="#8d74b4" stroke-width="2"/>
<rect x="284" y="398" width="3" height="14" fill="#6b5490"/>
<rect x="420" y="380" width="3" height="14" fill="#6b5490"/>

<g data-obj="purple-heart">
<path d="M216,530 C195,513 185,502 185,489 C185,479 193,473 201,473 C208,473 214,477 216,483 C218,477 224,473 231,473 C239,473 247,479 247,489 C247,502 237,513 216,530 Z" fill="#4a3570" stroke="#7d5faa" stroke-width="2"/>
<path d="M216,530 C205,521 197,513 192,505 C199,499 208,495 216,494 Z" fill="#573f80" opacity="0.8"/>
<path d="M199,480 C194,481 192,485 193,490" fill="none" stroke="#a37fd0" stroke-width="2" opacity="0.7"/>
</g>

<rect x="0" y="546" width="800" height="126" fill="url(#singapore-water)"/>
<rect x="0" y="546" width="800" height="5" fill="#c4a2e0" opacity="0.55"/>
<rect x="210" y="552" width="14" height="72" rx="6" fill="#ff9ad8" opacity="0.4"/>
<rect x="480" y="552" width="14" height="76" rx="6" fill="#8ff2ea" opacity="0.4"/>
<rect x="610" y="552" width="10" height="50" rx="5" fill="#ff9ad8" opacity="0.3"/>
<rect x="392" y="552" width="6" height="48" rx="3" fill="#ffcf8a" opacity="0.3"/>
<rect x="650" y="552" width="7" height="58" rx="3" fill="#ffcf8a" opacity="0.32"/>
<ellipse cx="140" cy="600" rx="70" ry="4" fill="#d7c0ee" opacity="0.22"/>
<ellipse cx="420" cy="622" rx="96" ry="5" fill="#d7c0ee" opacity="0.2"/>
<ellipse cx="70" cy="640" rx="34" ry="9" fill="#2f6647"/>
<ellipse cx="70" cy="637" rx="30" ry="7" fill="#3f8256"/>
<ellipse cx="720" cy="656" rx="30" ry="8" fill="#2f6647"/>
<ellipse cx="720" cy="653" rx="26" ry="6" fill="#3f8256"/>
<circle cx="88" cy="632" r="5" fill="#ff9ad8" opacity="0.85"/>

<rect x="0" y="662" width="800" height="58" fill="#4b3a66"/>
<rect x="0" y="662" width="800" height="9" fill="#6d5789"/>
<rect x="0" y="700" width="800" height="6" fill="#3a2c51" opacity="0.7"/>
<rect x="0" y="628" width="800" height="6" rx="3" fill="#5b4778"/>
<rect x="0" y="646" width="800" height="4" rx="2" fill="#54406e"/>
<rect x="34" y="632" width="5" height="32" fill="#54406e"/>
<rect x="234" y="632" width="5" height="32" fill="#54406e"/>
<rect x="434" y="632" width="5" height="32" fill="#54406e"/>
<rect x="634" y="632" width="5" height="32" fill="#54406e"/>
<rect x="762" y="632" width="5" height="32" fill="#54406e"/>

<path d="M0,700 L800,700 L800,1200 L0,1200 Z" fill="url(#singapore-ground)"/>
<path d="M0,852 Q200,816 400,846 Q600,876 800,840 L800,904 Q600,940 400,910 Q200,880 0,918 Z" fill="#8a7a60"/>
<path d="M0,852 Q200,816 400,846 Q600,876 800,840 L800,858 Q600,894 400,864 Q200,834 0,870 Z" fill="#a8977a"/>
<path d="M0,900 Q200,864 400,894 Q600,924 800,888 L800,904 Q600,940 400,910 Q200,880 0,918 Z" fill="#6d5f4a"/>

<ellipse cx="56" cy="742" rx="72" ry="30" fill="#245039"/>
<ellipse cx="56" cy="734" rx="66" ry="24" fill="#316b49"/>
<ellipse cx="256" cy="744" rx="60" ry="26" fill="#245039"/>
<ellipse cx="256" cy="736" rx="54" ry="20" fill="#347049"/>
<ellipse cx="392" cy="760" rx="58" ry="25" fill="#20472f"/>
<ellipse cx="392" cy="752" rx="52" ry="19" fill="#2d6142"/>
<ellipse cx="726" cy="742" rx="70" ry="28" fill="#245039"/>
<ellipse cx="726" cy="734" rx="64" ry="22" fill="#347049"/>

<path d="M92,796 L86,706" stroke="#7d5029" stroke-width="9" fill="none"/>
<path d="M89,712 Q46,690 24,706" fill="none" stroke="#2f6647" stroke-width="7" stroke-linecap="round"/>
<path d="M89,712 Q52,678 34,662" fill="none" stroke="#3f8256" stroke-width="7" stroke-linecap="round"/>
<path d="M89,712 Q116,674 132,660" fill="none" stroke="#3f8256" stroke-width="7" stroke-linecap="round"/>
<path d="M89,712 Q130,690 154,700" fill="none" stroke="#2f6647" stroke-width="7" stroke-linecap="round"/>
<circle cx="88" cy="710" r="6" fill="#5e3f20"/>

<path d="M746,806 L752,704" stroke="#7d5029" stroke-width="9" fill="none"/>
<path d="M750,708 Q714,684 692,694" fill="none" stroke="#2f6647" stroke-width="7" stroke-linecap="round"/>
<path d="M750,708 Q720,672 704,656" fill="none" stroke="#3f8256" stroke-width="7" stroke-linecap="round"/>
<path d="M750,708 Q782,674 798,662" fill="none" stroke="#3f8256" stroke-width="7" stroke-linecap="round"/>
<path d="M750,708 Q786,692 800,700" fill="none" stroke="#2f6647" stroke-width="7" stroke-linecap="round"/>
<circle cx="750" cy="706" r="6" fill="#5e3f20"/>

<path d="M198,820 Q186,790 172,776" fill="none" stroke="#347049" stroke-width="6" stroke-linecap="round"/>
<path d="M198,820 Q198,786 194,766" fill="none" stroke="#3f8256" stroke-width="6" stroke-linecap="round"/>
<path d="M334,826 Q324,798 312,784" fill="none" stroke="#347049" stroke-width="6" stroke-linecap="round"/>
<path d="M334,826 Q334,796 332,776" fill="none" stroke="#3f8256" stroke-width="6" stroke-linecap="round"/>
<path d="M660,824 Q650,796 638,782" fill="none" stroke="#347049" stroke-width="6" stroke-linecap="round"/>
<path d="M660,824 Q660,794 658,774" fill="none" stroke="#3f8256" stroke-width="6" stroke-linecap="round"/>

<rect x="278" y="746" width="7" height="106" fill="#3b2c4f"/>
<circle cx="281" cy="744" r="26" fill="url(#singapore-glowy)"/>
<circle cx="281" cy="744" r="9" fill="#ffe4b0"/>
<path d="M270,736 L292,736 L286,726 L276,726 Z" fill="#3b2c4f"/>
<rect x="566" y="756" width="7" height="106" fill="#3b2c4f"/>
<circle cx="569" cy="754" r="24" fill="url(#singapore-glowy)"/>
<circle cx="569" cy="754" r="8" fill="#ffe4b0"/>
<path d="M559,746 L579,746 L574,737 L564,737 Z" fill="#3b2c4f"/>

<circle cx="120" cy="838" r="20" fill="url(#singapore-glowp)"/>
<circle cx="120" cy="838" r="6" fill="#d5b6f5"/>
<rect x="118" y="840" width="4" height="24" fill="#4a3a63"/>
<circle cx="234" cy="820" r="21" fill="url(#singapore-glowp)"/>
<circle cx="234" cy="820" r="6" fill="#d5b6f5"/>
<rect x="232" y="822" width="4" height="26" fill="#4a3a63"/>
<circle cx="146" cy="874" r="19" fill="url(#singapore-glowp)"/>
<circle cx="146" cy="874" r="6" fill="#c9a4f0"/>
<rect x="144" y="876" width="4" height="20" fill="#4a3a63"/>
<circle cx="628" cy="844" r="20" fill="url(#singapore-glowp)"/>
<circle cx="628" cy="844" r="6" fill="#d5b6f5"/>
<rect x="626" y="846" width="4" height="22" fill="#4a3a63"/>
<circle cx="716" cy="836" r="18" fill="url(#singapore-glowt)"/>
<circle cx="716" cy="836" r="5" fill="#a9efe8"/>

<g data-obj="lightstick">
<circle cx="186" cy="812" r="23" fill="url(#singapore-glowp)"/>
<rect x="179" y="828" width="14" height="38" rx="5" fill="#efe6f7"/>
<rect x="179" y="828" width="5" height="38" fill="#cfc2e2"/>
<rect x="176" y="861" width="20" height="9" rx="3" fill="#c9b8e0"/>
<rect x="172" y="792" width="28" height="42" rx="14" fill="#a86ee0"/>
<rect x="172" y="792" width="10" height="42" rx="10" fill="#c79bff" opacity="0.85"/>
<rect x="190" y="792" width="10" height="42" rx="10" fill="#7b3fbf" opacity="0.8"/>
<circle cx="186" cy="810" r="8" fill="#f0dbff" opacity="0.9"/>
<rect x="176" y="824" width="20" height="9" rx="4" fill="#8a56c4"/>
</g>

<ellipse cx="500" cy="836" rx="76" ry="26" fill="#245039"/>
<ellipse cx="500" cy="830" rx="70" ry="20" fill="#316b49"/>
<circle cx="452" cy="822" r="9" fill="#f0a0cf"/>
<circle cx="450" cy="819" r="4" fill="#ffd9ef"/>
<circle cx="472" cy="834" r="8" fill="#e0559e"/>
<circle cx="556" cy="822" r="9" fill="#c88be0"/>
<circle cx="554" cy="819" r="4" fill="#e8c6f5"/>
<circle cx="540" cy="814" r="7" fill="#ffcf6a"/>
<circle cx="512" cy="844" r="8" fill="#e0559e"/>
<circle cx="478" cy="816" r="8" fill="#9b5de5"/>
<circle cx="568" cy="840" r="7" fill="#8a4ad4"/>
<circle cx="534" cy="850" r="7" fill="#c88be0"/>

<g data-obj="orchid">
<path d="M528,862 Q522,824 518,796" fill="none" stroke="#3f8256" stroke-width="5" stroke-linecap="round"/>
<path d="M528,844 Q510,842 496,850" fill="none" stroke="#2d6142" stroke-width="5" stroke-linecap="round"/>
<path d="M527,830 Q544,826 556,832" fill="none" stroke="#2d6142" stroke-width="5" stroke-linecap="round"/>
<ellipse cx="504" cy="838" rx="17" ry="14" fill="#9b5de5"/>
<ellipse cx="504" cy="838" rx="11" ry="9" fill="#c79bff"/>
<ellipse cx="496" cy="830" rx="8" ry="7" fill="#e2c4ff"/>
<ellipse cx="512" cy="830" rx="8" ry="7" fill="#e2c4ff"/>
<circle cx="504" cy="840" r="4" fill="#ffd9ef"/>
<circle cx="504" cy="840" r="2" fill="#ffcf6a"/>
<ellipse cx="546" cy="826" rx="16" ry="13" fill="#8a4ad4"/>
<ellipse cx="546" cy="826" rx="10" ry="8" fill="#bb8bf5"/>
<ellipse cx="539" cy="818" rx="7" ry="6" fill="#ddbaff"/>
<ellipse cx="553" cy="818" rx="7" ry="6" fill="#ddbaff"/>
<circle cx="546" cy="828" r="3.5" fill="#ffd9ef"/>
<ellipse cx="518" cy="798" rx="18" ry="15" fill="#9b5de5"/>
<ellipse cx="518" cy="798" rx="12" ry="10" fill="#c79bff"/>
<ellipse cx="509" cy="789" rx="8" ry="7" fill="#e2c4ff"/>
<ellipse cx="527" cy="789" rx="8" ry="7" fill="#e2c4ff"/>
<ellipse cx="518" cy="784" rx="6" ry="7" fill="#f0dcff"/>
<circle cx="518" cy="800" r="4.5" fill="#ffd9ef"/>
<circle cx="518" cy="800" r="2.2" fill="#ffcf6a"/>
</g>

<path d="M0,690 Q200,724 400,700 Q600,676 800,706" fill="none" stroke="#4a3a63" stroke-width="2"/>
<circle cx="48" cy="702" r="4" fill="#ffd9a0"/>
<circle cx="48" cy="702" r="11" fill="url(#singapore-glowy)"/>
<circle cx="208" cy="718" r="4" fill="#ffd9a0"/>
<circle cx="208" cy="718" r="11" fill="url(#singapore-glowy)"/>
<circle cx="368" cy="706" r="4" fill="#ff9ad8"/>
<circle cx="368" cy="706" r="11" fill="url(#singapore-glowm)"/>
<circle cx="528" cy="684" r="4" fill="#8ff2ea"/>
<circle cx="528" cy="684" r="11" fill="url(#singapore-glowt)"/>
<circle cx="608" cy="682" r="4" fill="#ff9ad8"/>
<circle cx="608" cy="682" r="11" fill="url(#singapore-glowm)"/>
<circle cx="768" cy="702" r="4" fill="#8ff2ea"/>
<circle cx="768" cy="702" r="11" fill="url(#singapore-glowt)"/>

<ellipse cx="400" cy="960" rx="380" ry="52" fill="#132b21" opacity="0.45"/>

<rect x="596" y="878" width="8" height="132" fill="#6b4226"/>
<rect x="778" y="878" width="8" height="132" fill="#6b4226"/>
<path d="M580,900 L800,884 L800,846 L580,862 Z" fill="url(#singapore-canvas)"/>
<path d="M604,860 L604,898" stroke="#c9576f" stroke-width="14" opacity="0.55"/>
<path d="M648,856 L648,894" stroke="#c9576f" stroke-width="14" opacity="0.55"/>
<path d="M692,853 L692,891" stroke="#c9576f" stroke-width="14" opacity="0.55"/>
<path d="M780,847 L780,885" stroke="#c9576f" stroke-width="14" opacity="0.55"/>
<path d="M580,900 L800,884 L800,894 L580,910 Z" fill="#a8865c"/>
<path d="M584,908 L598,924 L612,904 Z" fill="#9b5de5"/>
<path d="M704,900 L718,916 L732,896 Z" fill="#e0559e"/>
<path d="M764,896 L778,912 L792,892 Z" fill="#2ec7c0"/>

<rect x="580" y="964" width="20" height="30" rx="5" fill="#2ec7c0"/>
<rect x="580" y="964" width="7" height="30" rx="3" fill="#6fe3dc"/>
<rect x="776" y="960" width="22" height="34" rx="5" fill="#9b5de5"/>
<rect x="776" y="960" width="8" height="34" rx="4" fill="#c79bff"/>

<rect x="576" y="994" width="224" height="34" fill="#c48b52"/>
<rect x="576" y="994" width="224" height="9" fill="#dda76c"/>
<rect x="576" y="1028" width="224" height="172" fill="#7d5029"/>
<path d="M576,1028 L800,1028 L800,1044 L576,1044 Z" fill="#6b4226"/>
<rect x="596" y="1060" width="184" height="8" rx="3" fill="#8a5a33"/>
<rect x="596" y="1112" width="184" height="8" rx="3" fill="#8a5a33"/>
<rect x="608" y="1072" width="26" height="36" rx="4" fill="#9b5de5"/>
<rect x="608" y="1072" width="9" height="36" rx="3" fill="#c79bff"/>
<circle cx="694" cy="1090" r="17" fill="#e0559e"/>
<circle cx="689" cy="1085" r="8" fill="#ff9ad8"/>
<rect x="722" y="1074" width="26" height="34" rx="4" fill="#ffcf6a"/>
<path d="M760,1108 L774,1070 L788,1108 Z" fill="#43a06b"/>
<rect x="600" y="1124" width="30" height="26" rx="4" fill="#d4453c"/>
<rect x="750" y="1124" width="30" height="26" rx="4" fill="#f0a0cf"/>
<rect x="716" y="1160" width="60" height="30" rx="5" fill="#8a5a33"/>

<g data-obj="merlion">
<rect x="606" y="982" width="58" height="12" rx="3" fill="#b9d6e0"/>
<rect x="606" y="982" width="58" height="5" rx="2" fill="#dcf0f5"/>
<path d="M620,982 Q616,958 628,946 L646,946 Q656,960 652,982 Z" fill="#f2eee6"/>
<path d="M640,982 Q650,962 646,946 Q656,960 652,982 Z" fill="#cfc9bd"/>
<path d="M650,978 Q676,972 678,950 Q679,940 670,936 Q676,948 672,958 Q666,972 648,970 Z" fill="#f2eee6"/>
<path d="M650,978 Q672,972 675,952 Q676,943 670,936 Q674,948 670,958 Q664,970 649,969 Z" fill="#ded8cc"/>
<path d="M670,936 L682,921 L679,936 L690,932 L676,946 Z" fill="#f2eee6"/>
<path d="M634,914 Q646,912 651,921 Q661,924 659,936 Q663,946 654,952 Q650,962 638,959 Q628,963 622,955 Q612,951 615,940 Q611,930 620,924 Q624,914 634,914 Z" fill="#e6e0d4"/>
<path d="M622,925 Q620,918 627,919 Q628,924 626,929 Z" fill="#f2eee6"/>
<path d="M646,925 Q648,918 641,919 Q640,924 642,929 Z" fill="#f2eee6"/>
<circle cx="634" cy="936" r="14" fill="#f2eee6"/>
<circle cx="638" cy="939" r="10" fill="#eae4d8"/>
<circle cx="629" cy="934" r="2.4" fill="#3a2c60"/>
<circle cx="640" cy="933" r="2.4" fill="#3a2c60"/>
<ellipse cx="634" cy="943" rx="7" ry="5" fill="#f9f5ec"/>
<path d="M632,941 Q634,944 636,941" fill="none" stroke="#8a5a33" stroke-width="2" stroke-linecap="round"/>
<path d="M634,948 Q622,956 612,970 Q624,964 632,955 Z" fill="#8ff2ea" opacity="0.85"/>
<circle cx="613" cy="971" r="3.5" fill="#8ff2ea" opacity="0.7"/>
</g>

<g data-obj="ferris-toy">
<rect x="706" y="986" width="48" height="8" rx="4" fill="#b07a45"/>
<path d="M716,990 L730,958 L744,990 Z" fill="#8a5a33"/>
<circle cx="730" cy="954" r="32" fill="none" stroke="#e0559e" stroke-width="4"/>
<circle cx="730" cy="954" r="23" fill="none" stroke="#f0a0cf" stroke-width="3"/>
<path d="M730,922 L730,986" stroke="#ffcf6a" stroke-width="3"/>
<path d="M698,954 L762,954" stroke="#ffcf6a" stroke-width="3"/>
<path d="M707,931 L753,977" stroke="#ffcf6a" stroke-width="3"/>
<path d="M753,931 L707,977" stroke="#ffcf6a" stroke-width="3"/>
<circle cx="730" cy="954" r="6" fill="#f4e2c6"/>
<rect x="724" y="914" width="12" height="10" rx="3" fill="#2ec7c0"/>
<rect x="756" y="948" width="12" height="10" rx="3" fill="#ffcf6a"/>
<rect x="692" y="948" width="12" height="10" rx="3" fill="#d4453c"/>
<rect x="724" y="976" width="12" height="10" rx="3" fill="#9b5de5"/>
<rect x="750" y="924" width="10" height="9" rx="3" fill="#f0a0cf"/>
<rect x="700" y="924" width="10" height="9" rx="3" fill="#62c187"/>
</g>

<rect x="104" y="898" width="472" height="22" rx="5" fill="url(#singapore-wood)"/>
<rect x="104" y="898" width="472" height="7" rx="3" fill="#d9a86a"/>
<rect x="104" y="920" width="472" height="10" fill="#6b4226"/>
<rect x="128" y="930" width="16" height="34" fill="#5e3f20"/>
<rect x="536" y="930" width="16" height="34" fill="#5e3f20"/>
<ellipse cx="176" cy="886" rx="26" ry="12" fill="#d4453c"/>
<ellipse cx="176" cy="882" rx="22" ry="9" fill="#e8756c"/>
<rect x="228" y="856" width="20" height="42" rx="5" fill="#43a06b"/>
<rect x="232" y="848" width="12" height="10" rx="3" fill="#ffcf6a"/>
<ellipse cx="330" cy="886" rx="30" ry="13" fill="#8a5a33"/>
<ellipse cx="330" cy="881" rx="26" ry="10" fill="#b07a45"/>
<ellipse cx="330" cy="879" rx="18" ry="6" fill="#f4e2c6"/>
<path d="M392,898 L386,864 Q408,856 424,864 L418,898 Z" fill="#c48b52"/>
<path d="M386,864 Q405,858 424,864 Q405,870 386,864 Z" fill="#dda76c"/>
<circle cx="398" cy="872" r="7" fill="#d4453c"/>
<circle cx="412" cy="874" r="7" fill="#ffcf6a"/>
<ellipse cx="482" cy="888" rx="28" ry="12" fill="#5f4a80"/>
<ellipse cx="482" cy="883" rx="24" ry="9" fill="#7a5fa3"/>
<rect x="520" y="866" width="18" height="32" rx="4" fill="#2ec7c0"/>

<path d="M100,978 Q100,962 118,962 L566,962 Q584,962 584,978 L584,1166 Q584,1180 566,1180 L118,1180 Q100,1180 100,1166 Z" fill="url(#singapore-mat)"/>
<rect x="112" y="1020" width="460" height="14" fill="#9b6bc4" opacity="0.25"/>
<rect x="112" y="1128" width="460" height="14" fill="#9b6bc4" opacity="0.3"/>
<rect x="396" y="968" width="14" height="206" fill="#9b6bc4" opacity="0.2"/>
<path d="M100,978 Q100,962 118,962 L566,962 Q584,962 584,978 L584,1166 Q584,1180 566,1180 L118,1180 Q100,1180 100,1166 Z" fill="none" stroke="#c79bff" stroke-width="3" opacity="0.6"/>

<ellipse cx="186" cy="1042" rx="46" ry="18" fill="#6b4226"/>
<ellipse cx="186" cy="1034" rx="44" ry="17" fill="#c48b52"/>
<ellipse cx="186" cy="1032" rx="36" ry="13" fill="#e8c58f"/>
<ellipse cx="186" cy="1032" rx="30" ry="10" fill="#b8823f"/>
<path d="M164,1030 Q186,1024 208,1030" fill="none" stroke="#f0d9a8" stroke-width="4"/>
<path d="M204,1018 L242,996" stroke="#e0c9a0" stroke-width="4" stroke-linecap="round"/>

<rect x="240" y="1024" width="152" height="70" rx="10" fill="#6b4226"/>
<rect x="244" y="1028" width="144" height="58" rx="8" fill="#b07a45"/>
<rect x="244" y="1028" width="144" height="10" rx="5" fill="#d9a86a"/>

<g data-obj="satay-skewer">
<path d="M252,1080 L364,1046" stroke="#e0c9a0" stroke-width="5" stroke-linecap="round"/>
<path d="M256,1090 L368,1056" stroke="#e0c9a0" stroke-width="5" stroke-linecap="round"/>
<path d="M250,1068 L362,1034" stroke="#e0c9a0" stroke-width="5" stroke-linecap="round"/>
<rect x="286" y="1054" width="24" height="20" rx="5" fill="#8a4a22" transform="rotate(-17 298 1064)"/>
<rect x="312" y="1046" width="24" height="20" rx="5" fill="#a15c2b" transform="rotate(-17 324 1056)"/>
<rect x="338" y="1038" width="24" height="20" rx="5" fill="#8a4a22" transform="rotate(-17 350 1048)"/>
<rect x="290" y="1078" width="24" height="20" rx="5" fill="#a15c2b" transform="rotate(-17 302 1088)"/>
<rect x="316" y="1070" width="24" height="20" rx="5" fill="#8a4a22" transform="rotate(-17 328 1080)"/>
<rect x="342" y="1062" width="24" height="20" rx="5" fill="#a15c2b" transform="rotate(-17 354 1072)"/>
<rect x="284" y="1042" width="24" height="20" rx="5" fill="#a15c2b" transform="rotate(-17 296 1052)"/>
<rect x="310" y="1034" width="24" height="20" rx="5" fill="#8a4a22" transform="rotate(-17 322 1044)"/>
<rect x="336" y="1026" width="24" height="20" rx="5" fill="#a15c2b" transform="rotate(-17 348 1036)"/>
<path d="M292,1052 Q300,1048 308,1050" fill="none" stroke="#d99a52" stroke-width="2.5" stroke-linecap="round"/>
<path d="M322,1078 Q330,1074 338,1076" fill="none" stroke="#d99a52" stroke-width="2.5" stroke-linecap="round"/>
</g>

<ellipse cx="432" cy="1016" rx="52" ry="20" fill="#c9b8a0"/>
<ellipse cx="432" cy="1012" rx="50" ry="19" fill="#f4e2c6"/>
<ellipse cx="432" cy="1012" rx="40" ry="14" fill="#fffaf0"/>

<g data-obj="kaya-toast">
<path d="M400,1016 L406,988 L444,982 L448,1012 Z" fill="#c98a3f"/>
<path d="M400,1016 L406,988 L444,982 L448,1012 Z" fill="none" stroke="#8a5a2a" stroke-width="3"/>
<path d="M406,1010 L410,992 L440,988 L442,1008 Z" fill="#e8b96e"/>
<path d="M412,1000 L446,996 L448,1006 L414,1010 Z" fill="#4e7d3a"/>
<path d="M412,1000 L446,996 L447,1000 L413,1004 Z" fill="#6b9c50"/>
<path d="M416,992 L440,988 L441,996 L417,1000 Z" fill="#f2d98a"/>
<path d="M430,1024 L436,1000 L468,996 L470,1020 Z" fill="#d99a52"/>
<path d="M430,1024 L436,1000 L468,996 L470,1020 Z" fill="none" stroke="#8a5a2a" stroke-width="3"/>
<path d="M436,1018 L440,1004 L464,1001 L466,1016 Z" fill="#f0cb84"/>
<path d="M441,1010 L466,1007 L467,1013 L442,1016 Z" fill="#4e7d3a"/>
<rect x="444" y="998" width="16" height="7" rx="2" fill="#fff2c2"/>
</g>

<ellipse cx="146" cy="1112" rx="24" ry="9" fill="#5e3f20"/>
<path d="M124,1076 L136,1112 L160,1112 L172,1076 Z" fill="#e8e0d0"/>
<path d="M124,1076 L136,1112 L146,1112 L140,1076 Z" fill="#cfc6b4"/>
<ellipse cx="148" cy="1076" rx="24" ry="8" fill="#a86ee0" opacity="0.8"/>
<path d="M158,1074 L176,1030" stroke="#d4453c" stroke-width="5" stroke-linecap="round"/>
<path d="M202,1104 L212,1136 L234,1136 L244,1104 Z" fill="#f0e6d4"/>
<ellipse cx="223" cy="1104" rx="21" ry="7" fill="#f2a24a"/>
<path d="M232,1102 L248,1064" stroke="#2ec7c0" stroke-width="5" stroke-linecap="round"/>
<path d="M296,1146 Q290,1104 312,1098 Q334,1104 328,1146 Q312,1152 296,1146 Z" fill="#c9e6ef" opacity="0.75"/>
<path d="M300,1140 Q296,1108 312,1104 Q324,1108 322,1140 Q312,1144 300,1140 Z" fill="#8a5a33" opacity="0.7"/>
<path d="M318,1100 L336,1058" stroke="#f0a0cf" stroke-width="5" stroke-linecap="round"/>
<ellipse cx="472" cy="1074" rx="34" ry="14" fill="#6b4226"/>
<ellipse cx="472" cy="1068" rx="32" ry="13" fill="#c48b52"/>
<ellipse cx="472" cy="1066" rx="24" ry="9" fill="#f4e2c6"/>
<circle cx="524" cy="1108" r="22" fill="#4a2560"/>
<circle cx="519" cy="1102" r="15" fill="#6b3a86"/>
<circle cx="490" cy="1128" r="18" fill="#4a2560"/>
<circle cx="486" cy="1123" r="12" fill="#6b3a86"/>
<circle cx="536" cy="1071" r="16" fill="#43a06b"/>
<circle cx="532" cy="1067" r="10" fill="#62c187"/>
<circle cx="418" cy="1074" r="14" fill="#d4453c"/>
<rect x="404" y="1140" width="60" height="8" rx="4" fill="#e0c9a0" transform="rotate(-8 434 1144)"/>
<rect x="452" y="1094" width="58" height="13" rx="3" fill="#f4e2c6" transform="rotate(-6 481 1100)"/>
<rect x="452" y="1104" width="58" height="11" rx="3" fill="#ded0b6" transform="rotate(-6 481 1110)"/>
<path d="M246,1122 L272,1113" stroke="#cfc7b8" stroke-width="4" stroke-linecap="round"/>
<path d="M248,1132 L274,1123" stroke="#cfc7b8" stroke-width="4" stroke-linecap="round"/>
<rect x="140" y="1150" width="52" height="26" rx="6" fill="#8a5a33"/>
<rect x="140" y="1150" width="52" height="9" rx="4" fill="#b07a45"/>

<path d="M42,1024 Q34,974 20,942" fill="none" stroke="#2d6142" stroke-width="10" stroke-linecap="round"/>
<path d="M52,1026 Q52,974 46,930" fill="none" stroke="#3f8256" stroke-width="10" stroke-linecap="round"/>
<path d="M62,1026 Q72,976 86,942" fill="none" stroke="#2d6142" stroke-width="10" stroke-linecap="round"/>
<path d="M70,1030 Q92,996 116,976" fill="none" stroke="#347049" stroke-width="9" stroke-linecap="round"/>

<g data-obj="durian">
<ellipse cx="96" cy="1002" rx="48" ry="14" fill="#132b21" opacity="0.35"/>
<circle cx="96" cy="948" r="44" fill="#4e6b30"/>
<circle cx="88" cy="940" r="34" fill="#6b8c42"/>
<circle cx="82" cy="934" r="18" fill="#89aa58" opacity="0.7"/>
<path d="M118,910 L130,900 L130,914 Z" fill="#3e5626"/>
<path d="M134,932 L150,930 L138,942 Z" fill="#3e5626"/>
<path d="M136,958 L152,964 L136,970 Z" fill="#3e5626"/>
<path d="M124,978 L136,990 L120,990 Z" fill="#3e5626"/>
<path d="M100,990 L104,1006 L92,996 Z" fill="#3e5626"/>
<path d="M74,988 L70,1004 L62,990 Z" fill="#3e5626"/>
<path d="M56,972 L42,982 L46,966 Z" fill="#3e5626"/>
<path d="M52,946 L36,946 L50,934 Z" fill="#3e5626"/>
<path d="M62,922 L54,908 L72,912 Z" fill="#3e5626"/>
<path d="M80,908 L76,892 L92,902 Z" fill="#3e5626"/>
<path d="M124,944 L140,942 L128,954 Z" fill="#3e5626"/>
<path d="M112,972 L124,982 L108,984 Z" fill="#3e5626"/>
<path d="M70,974 L64,988 L56,976 Z" fill="#3e5626"/>
<path d="M92,912 L98,902" stroke="#3e5626" stroke-width="6" stroke-linecap="round"/>
</g>

<path d="M78,1016 Q104,1002 128,998" fill="none" stroke="#2d6142" stroke-width="9" stroke-linecap="round"/>
<ellipse cx="58" cy="1046" rx="62" ry="20" fill="#20472f"/>
<ellipse cx="58" cy="1040" rx="56" ry="16" fill="#2d6142"/>
<circle cx="26" cy="1032" r="7" fill="#f0a0cf"/>
<circle cx="78" cy="1036" r="7" fill="#ffcf6a"/>

<ellipse cx="768" cy="1052" rx="60" ry="24" fill="#20472f"/>
<ellipse cx="768" cy="1044" rx="54" ry="19" fill="#2d6142"/>
<path d="M742,1030 Q736,1004 726,988" fill="none" stroke="#347049" stroke-width="9" stroke-linecap="round"/>
<path d="M756,1028 Q758,1000 754,982" fill="none" stroke="#3f8256" stroke-width="9" stroke-linecap="round"/>
<circle cx="736" cy="1042" r="8" fill="#e0559e"/>

<ellipse cx="50" cy="1190" rx="90" ry="26" fill="#1b3d2c"/>
<ellipse cx="740" cy="1192" rx="100" ry="28" fill="#1b3d2c"/>
<path d="M18,1180 Q14,1156 6,1144" fill="none" stroke="#2d6142" stroke-width="7" stroke-linecap="round"/>
<path d="M46,1184 Q52,1158 48,1140" fill="none" stroke="#3f8256" stroke-width="7" stroke-linecap="round"/>
<path d="M68,1186 Q80,1162 94,1152" fill="none" stroke="#2d6142" stroke-width="7" stroke-linecap="round"/>
<circle cx="82" cy="1150" r="7" fill="#f0a0cf"/>
<path d="M710,1188 Q712,1162 708,1146" fill="none" stroke="#3f8256" stroke-width="7" stroke-linecap="round"/>
<ellipse cx="400" cy="1196" rx="220" ry="20" fill="#132b21" opacity="0.4"/>
</svg>`
});
