window.SCENES = window.SCENES || [];
window.SCENES.push({
  id: 'uk',
  order: 8,
  country: 'United Kingdom',
  flag: '🇬🇧',
  title: 'Rainy Day, London',
  caption: 'Rainy days, warm tea, together.',
  stamp: '☂️',
  objects: [
    { id: 'lightstick',   name: 'Lightstick' },
    { id: 'purple-heart', name: 'Purple Heart' },
    { id: 'teacup',       name: 'Teacup' },
    { id: 'umbrella',     name: 'Umbrella' },
    { id: 'crown',        name: 'Crown' },
    { id: 'corgi',        name: 'Corgi' },
    { id: 'scone',        name: 'Scone' },
    { id: 'toy-bus',      name: 'Toy Bus' }
  ],
  svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 1200">
<defs>
<linearGradient id="uk-sky" x1="0" y1="0" x2="0" y2="1">
<stop offset="0" stop-color="#d7dee5"/>
<stop offset="0.5" stop-color="#b7c3ce"/>
<stop offset="1" stop-color="#97a5b3"/>
</linearGradient>
<linearGradient id="uk-mist" x1="0" y1="0" x2="0" y2="1">
<stop offset="0" stop-color="#c5ced7" stop-opacity="0"/>
<stop offset="1" stop-color="#c5ced7" stop-opacity="0.9"/>
</linearGradient>
<linearGradient id="uk-brick" x1="0" y1="0" x2="0" y2="1">
<stop offset="0" stop-color="#8e5d50"/>
<stop offset="1" stop-color="#6b433c"/>
</linearGradient>
<linearGradient id="uk-road" x1="0" y1="0" x2="0" y2="1">
<stop offset="0" stop-color="#5b6776"/>
<stop offset="1" stop-color="#3e4956"/>
</linearGradient>
<linearGradient id="uk-wood" x1="0" y1="0" x2="0" y2="1">
<stop offset="0" stop-color="#ac8053"/>
<stop offset="1" stop-color="#7a5535"/>
</linearGradient>
<linearGradient id="uk-floor" x1="0" y1="0" x2="0" y2="1">
<stop offset="0" stop-color="#70502f"/>
<stop offset="1" stop-color="#503722"/>
</linearGradient>
<radialGradient id="uk-glow" cx="0.5" cy="0.5" r="0.5">
<stop offset="0" stop-color="#ffdd9c" stop-opacity="0.8"/>
<stop offset="1" stop-color="#ffdd9c" stop-opacity="0"/>
</radialGradient>
<linearGradient id="uk-glass" x1="0" y1="0" x2="1" y2="1">
<stop offset="0" stop-color="#ffffff" stop-opacity="0.15"/>
<stop offset="1" stop-color="#ffffff" stop-opacity="0.02"/>
</linearGradient>
</defs>

<rect x="0" y="0" width="800" height="1200" fill="#6f5238"/>
<rect x="0" y="0" width="800" height="640" fill="url(#uk-sky)"/>
<ellipse cx="180" cy="82" rx="140" ry="32" fill="#e2e8ee" opacity="0.5"/>
<ellipse cx="620" cy="66" rx="160" ry="30" fill="#e4eaf0" opacity="0.45"/>
<rect x="0" y="150" width="800" height="220" fill="url(#uk-mist)" opacity="0.5"/>

<polygon points="628,96 640,124 616,124" fill="#7e8b9b"/>
<rect x="618" y="122" width="20" height="16" fill="#8b98a7"/>
<rect x="606" y="136" width="44" height="26" fill="#828fa0"/>
<rect x="600" y="160" width="56" height="52" fill="#8c99a9"/>
<rect x="600" y="160" width="56" height="6" fill="#9dabba"/>
<circle cx="628" cy="188" r="19" fill="#c3cdd8"/>
<circle cx="628" cy="188" r="14" fill="#dfe6ec"/>
<rect x="626" y="176" width="4" height="14" fill="#6d7a89"/>
<rect x="628" y="186" width="12" height="4" fill="#6d7a89"/>
<rect x="596" y="210" width="64" height="10" fill="#7c8998"/>
<rect x="602" y="220" width="52" height="180" fill="#8695a5"/>
<rect x="602" y="220" width="16" height="180" fill="#93a1b1"/>

<ellipse cx="500" cy="292" rx="46" ry="34" fill="#9aa8b7"/>
<rect x="454" y="290" width="92" height="112" fill="#a1aebd"/>
<rect x="120" y="286" width="52" height="120" fill="#97a5b4"/>
<polygon points="120,286 146,256 172,286" fill="#8e9cac"/>

<rect x="-10" y="330" width="200" height="282" fill="url(#uk-brick)"/>
<rect x="-10" y="330" width="200" height="13" fill="#4b525b"/>
<rect x="-10" y="343" width="200" height="8" fill="#ab7d6d"/>
<rect x="24" y="292" width="28" height="40" fill="#5c4a46"/>
<rect x="27" y="282" width="9" height="12" fill="#8a6354"/>
<rect x="16" y="376" width="46" height="60" fill="#f0c274" stroke="#3f4a56" stroke-width="5"/>
<rect x="12" y="436" width="54" height="8" fill="#cabca9"/>
<rect x="112" y="376" width="46" height="60" fill="#5f7183" stroke="#3f4a56" stroke-width="5"/>
<rect x="108" y="436" width="54" height="8" fill="#cabca9"/>
<rect x="16" y="482" width="46" height="60" fill="#697b8d" stroke="#3f4a56" stroke-width="5"/>
<rect x="12" y="542" width="54" height="8" fill="#cabca9"/>

<rect x="190" y="308" width="196" height="304" fill="#6d5a58"/>
<rect x="190" y="308" width="196" height="13" fill="#464d56"/>
<rect x="190" y="321" width="196" height="8" fill="#98847f"/>
<rect x="216" y="272" width="28" height="38" fill="#544543"/>
<rect x="219" y="262" width="9" height="12" fill="#7d5f57"/>
<rect x="232" y="262" width="9" height="12" fill="#7d5f57"/>
<rect x="214" y="356" width="46" height="62" fill="#5f7183" stroke="#3b444f" stroke-width="5"/>
<rect x="210" y="418" width="54" height="8" fill="#c4b7a6"/>
<rect x="312" y="356" width="46" height="62" fill="#f2c67c" stroke="#3b444f" stroke-width="5"/>
<rect x="308" y="418" width="54" height="8" fill="#c4b7a6"/>
<rect x="214" y="466" width="46" height="62" fill="#66788a" stroke="#3b444f" stroke-width="5"/>
<rect x="210" y="528" width="54" height="8" fill="#c4b7a6"/>

<rect x="386" y="348" width="188" height="264" fill="url(#uk-brick)"/>
<rect x="386" y="348" width="188" height="13" fill="#4b525b"/>
<rect x="386" y="361" width="188" height="8" fill="#ab7d6d"/>
<rect x="412" y="312" width="28" height="38" fill="#5c4a46"/>
<rect x="415" y="302" width="9" height="12" fill="#8a6354"/>
<rect x="408" y="392" width="44" height="58" fill="#617385" stroke="#3f4a56" stroke-width="5"/>
<rect x="404" y="450" width="52" height="8" fill="#cabca9"/>
<rect x="500" y="392" width="44" height="58" fill="#f7d089" stroke="#3f4a56" stroke-width="5"/>
<rect x="496" y="450" width="52" height="8" fill="#cabca9"/>
<rect x="408" y="494" width="44" height="58" fill="#6d7f91" stroke="#3f4a56" stroke-width="5"/>
<rect x="404" y="552" width="52" height="8" fill="#cabca9"/>

<rect x="574" y="326" width="236" height="286" fill="#6d5a58"/>
<rect x="574" y="326" width="236" height="13" fill="#464d56"/>
<rect x="574" y="339" width="236" height="8" fill="#98847f"/>
<rect x="608" y="290" width="28" height="38" fill="#544543"/>
<rect x="611" y="280" width="9" height="12" fill="#7d5f57"/>
<rect x="624" y="280" width="9" height="12" fill="#7d5f57"/>
<rect x="600" y="372" width="46" height="60" fill="#f0c274" stroke="#3b444f" stroke-width="5"/>
<rect x="596" y="432" width="54" height="8" fill="#c4b7a6"/>
<rect x="690" y="372" width="46" height="60" fill="#607284" stroke="#3b444f" stroke-width="5"/>
<rect x="686" y="432" width="54" height="8" fill="#c4b7a6"/>
<rect x="690" y="474" width="46" height="60" fill="#f6cf87" stroke="#3b444f" stroke-width="5"/>
<rect x="686" y="534" width="54" height="8" fill="#c4b7a6"/>

<rect x="0" y="596" width="800" height="34" fill="#8b93a0"/>
<rect x="0" y="596" width="800" height="6" fill="#9ba3af"/>
<rect x="0" y="624" width="800" height="10" fill="#6f7885"/>
<rect x="0" y="632" width="800" height="88" fill="url(#uk-road)"/>
<rect x="0" y="632" width="800" height="4" fill="#68737f"/>
<rect x="120" y="676" width="70" height="6" fill="#c9d2da" opacity="0.35"/>
<rect x="600" y="676" width="70" height="6" fill="#c9d2da" opacity="0.35"/>
<rect x="0" y="712" width="800" height="14" fill="#7a8390"/>
<rect x="0" y="722" width="800" height="42" fill="#8e97a3"/>
<rect x="0" y="722" width="800" height="5" fill="#9ba4b0"/>

<ellipse cx="118" cy="700" rx="86" ry="15" fill="#8fa3b6" opacity="0.55"/>
<ellipse cx="118" cy="700" rx="60" ry="9" fill="#b7c6d4" opacity="0.5"/>
<ellipse cx="616" cy="698" rx="94" ry="16" fill="#8fa3b6" opacity="0.55"/>
<ellipse cx="616" cy="698" rx="62" ry="10" fill="#e8c887" opacity="0.35"/>
<ellipse cx="616" cy="702" rx="26" ry="5" fill="#d9564f" opacity="0.4"/>
<ellipse cx="360" cy="710" rx="72" ry="13" fill="#8fa3b6" opacity="0.5"/>
<ellipse cx="360" cy="710" rx="44" ry="7" fill="#c1cedb" opacity="0.45"/>

<rect x="516" y="452" width="10" height="248" fill="#2c3138"/>
<rect x="516" y="452" width="4" height="248" fill="#454c55"/>
<rect x="504" y="686" width="34" height="16" fill="#262b31"/>
<rect x="500" y="698" width="42" height="10" fill="#1f242a"/>
<rect x="510" y="546" width="22" height="8" fill="#3a4149"/>
<ellipse cx="521" cy="426" rx="46" ry="44" fill="url(#uk-glow)"/>
<polygon points="500,444 542,444 534,410 508,410" fill="#f6d79a"/>
<polygon points="500,444 542,444 538,450 504,450" fill="#2c3138"/>
<polygon points="508,410 534,410 528,396 514,396" fill="#343b43"/>

<rect x="628" y="470" width="106" height="232" fill="#8f1e1e"/>
<rect x="628" y="470" width="106" height="18" fill="#b52c2c"/>
<rect x="622" y="452" width="118" height="22" fill="#a82525"/>
<rect x="622" y="452" width="118" height="6" fill="#cf4040"/>
<rect x="626" y="444" width="110" height="10" fill="#8f1e1e"/>
<rect x="638" y="490" width="88" height="196" fill="#c33232"/>
<rect x="638" y="490" width="10" height="196" fill="#e05252"/>
<rect x="650" y="500" width="66" height="54" fill="#7f8f9e"/>
<rect x="650" y="562" width="66" height="54" fill="#8b9aa8"/>
<rect x="650" y="624" width="66" height="54" fill="#7f8f9e"/>
<rect x="681" y="500" width="4" height="178" fill="#c33232"/>
<rect x="624" y="686" width="114" height="16" fill="#7a1919"/>
<rect x="624" y="694" width="114" height="10" fill="#5f1313"/>
<rect x="644" y="458" width="70" height="10" fill="#e8d9b5"/>

<rect x="104" y="506" width="330" height="180" rx="14" fill="#b52a2a"/>
<rect x="104" y="506" width="330" height="16" rx="8" fill="#d64545"/>
<rect x="104" y="596" width="330" height="12" fill="#e9dcc4"/>
<rect x="104" y="608" width="330" height="78" fill="#c93131"/>
<rect x="124" y="526" width="76" height="46" rx="4" fill="#8ea0b0"/>
<rect x="210" y="526" width="76" height="46" rx="4" fill="#9aabba"/>
<rect x="296" y="526" width="76" height="46" rx="4" fill="#8ea0b0"/>
<rect x="124" y="620" width="86" height="44" rx="4" fill="#8ea0b0"/>
<rect x="220" y="620" width="86" height="44" rx="4" fill="#93a4b3"/>
<rect x="316" y="620" width="60" height="44" rx="4" fill="#7d8f9f"/>
<rect x="386" y="616" width="34" height="70" fill="#a52424"/>
<circle cx="166" cy="690" r="24" fill="#23282e"/>
<circle cx="166" cy="690" r="10" fill="#4a525b"/>
<circle cx="378" cy="690" r="24" fill="#23282e"/>
<circle cx="378" cy="690" r="10" fill="#4a525b"/>
<ellipse cx="270" cy="706" rx="180" ry="12" fill="#2f3742" opacity="0.45"/>

<rect x="292" y="612" width="9" height="26" fill="#3b4550"/>
<circle cx="296" cy="600" r="10" fill="#e6c9a8"/>
<path d="M272 616 Q296 588 320 616 Z" fill="#3f5a72"/>
<rect x="294" y="576" width="4" height="24" fill="#4c5a68"/>
<ellipse cx="296" cy="574" rx="34" ry="16" fill="#324f68"/>
<ellipse cx="296" cy="574" rx="34" ry="8" fill="#3f5f7c"/>
<rect x="452" y="612" width="9" height="26" fill="#4a3f3b"/>
<circle cx="456" cy="600" r="10" fill="#d8b18f"/>
<path d="M434 616 Q456 590 478 616 Z" fill="#6d4550"/>
<rect x="454" y="578" width="4" height="22" fill="#4c5a68"/>
<ellipse cx="456" cy="576" rx="30" ry="14" fill="#7a4a56"/>
<ellipse cx="456" cy="576" rx="30" ry="7" fill="#8c5865"/>
<rect x="566" y="612" width="9" height="26" fill="#3b4550"/>
<circle cx="570" cy="600" r="9" fill="#e6c9a8"/>
<path d="M550 616 Q570 592 590 616 Z" fill="#4a4f58"/>
<rect x="568" y="578" width="4" height="22" fill="#4c5a68"/>
<ellipse cx="570" cy="578" rx="28" ry="13" fill="#33383f"/>
<ellipse cx="570" cy="578" rx="28" ry="6" fill="#464c55"/>

<line x1="34" y1="150" x2="24" y2="196" stroke="#eaf0f6" stroke-width="2" opacity="0.3"/>
<line x1="142" y1="182" x2="132" y2="228" stroke="#eaf0f6" stroke-width="2" opacity="0.3"/>
<line x1="252" y1="204" x2="242" y2="250" stroke="#eaf0f6" stroke-width="2" opacity="0.3"/>
<line x1="364" y1="228" x2="354" y2="274" stroke="#eaf0f6" stroke-width="2" opacity="0.28"/>
<line x1="476" y1="250" x2="466" y2="296" stroke="#eaf0f6" stroke-width="2" opacity="0.3"/>
<line x1="588" y1="270" x2="578" y2="316" stroke="#eaf0f6" stroke-width="2" opacity="0.28"/>
<line x1="700" y1="288" x2="690" y2="334" stroke="#eaf0f6" stroke-width="2" opacity="0.3"/>
<line x1="286" y1="440" x2="276" y2="486" stroke="#eaf0f6" stroke-width="2" opacity="0.26"/>
<line x1="510" y1="482" x2="500" y2="528" stroke="#eaf0f6" stroke-width="2" opacity="0.24"/>
<line x1="734" y1="470" x2="724" y2="516" stroke="#eaf0f6" stroke-width="2" opacity="0.26"/>

<rect x="0" y="0" width="800" height="770" fill="url(#uk-glass)"/>
<ellipse cx="96" cy="262" rx="7" ry="10" fill="#ffffff" opacity="0.3"/>
<ellipse cx="322" cy="214" rx="8" ry="11" fill="#ffffff" opacity="0.28"/>
<ellipse cx="588" cy="342" rx="7" ry="10" fill="#ffffff" opacity="0.28"/>

<rect x="248" y="130" width="18" height="642" fill="#4a3527"/>
<rect x="248" y="130" width="6" height="642" fill="#63482f"/>
<rect x="534" y="130" width="18" height="642" fill="#4a3527"/>
<rect x="534" y="130" width="6" height="642" fill="#63482f"/>
<rect x="0" y="132" width="800" height="12" fill="#4a3527"/>
<rect x="0" y="132" width="800" height="4" fill="#63482f"/>

<ellipse cx="146" cy="628" rx="36" ry="21" fill="#ffffff" opacity="0.1"/>
<path d="M116 594 Q131 604 122 616 Q135 610 141 620" fill="none" stroke="#ffffff" stroke-width="3" opacity="0.16"/>
<circle cx="30" cy="592" r="9" fill="#b8c9d8" opacity="0.4"/>
<polygon points="132,660 137,672 150,673 140,681 143,694 132,687 121,694 124,681 114,673 127,672" fill="#c3b3de" opacity="0.45"/>
<g data-obj="purple-heart">
<path d="M72 670 C42 650 40 624 56 618 C64 615 70 621 72 628 C74 621 80 615 88 618 C104 624 102 650 72 670 Z" fill="#6f4bb0"/>
<path d="M72 670 C102 650 104 624 88 618 C84 616 80 617 77 619 C90 626 88 648 66 664 C68 666 70 668 72 670 Z" fill="#553a89"/>
<path d="M52 627 C55 620 62 619 66 625 C60 630 56 635 54 641 C51 636 50 631 52 627 Z" fill="#9d88cc" opacity="0.75"/>
</g>

<path d="M0 706 Q120 758 248 712" fill="none" stroke="#4a3527" stroke-width="4"/>
<path d="M266 712 Q400 764 534 714" fill="none" stroke="#4a3527" stroke-width="4"/>
<path d="M552 714 Q680 762 800 708" fill="none" stroke="#4a3527" stroke-width="4"/>
<circle cx="76" cy="742" r="10" fill="#ffd98a"/>
<circle cx="170" cy="746" r="10" fill="#ffe4a4"/>
<circle cx="330" cy="742" r="10" fill="#ffd98a"/>
<circle cx="452" cy="746" r="10" fill="#ffe4a4"/>
<circle cx="624" cy="744" r="10" fill="#ffd98a"/>
<circle cx="736" cy="740" r="10" fill="#ffe4a4"/>

<ellipse cx="400" cy="880" rx="420" ry="180" fill="url(#uk-glow)" opacity="0.5"/>
<rect x="0" y="762" width="800" height="34" fill="#c19a63"/>
<rect x="0" y="762" width="800" height="10" fill="#dcb47a"/>
<rect x="0" y="790" width="800" height="10" fill="#8a6238"/>
<rect x="0" y="796" width="800" height="92" fill="url(#uk-wood)"/>
<rect x="24" y="812" width="228" height="58" rx="6" fill="#a2764a"/>
<rect x="286" y="812" width="228" height="58" rx="6" fill="#a2764a"/>
<rect x="548" y="812" width="228" height="58" rx="6" fill="#a2764a"/>
<circle cx="138" cy="841" r="7" fill="#d4a94f"/>
<circle cx="400" cy="841" r="7" fill="#d4a94f"/>
<circle cx="662" cy="841" r="7" fill="#d4a94f"/>

<ellipse cx="88" cy="768" rx="56" ry="9" fill="#7c5533" opacity="0.5"/>
<path d="M46 726 Q46 700 88 700 Q130 700 130 726 Q130 764 88 764 Q46 764 46 726 Z" fill="#efe6d2"/>
<path d="M88 700 Q130 700 130 726 Q130 764 88 764 Q108 748 108 726 Q108 708 88 700 Z" fill="#d9cdb4"/>
<path d="M130 716 Q158 720 152 742 Q148 756 134 754" fill="none" stroke="#efe6d2" stroke-width="9"/>
<path d="M46 720 Q26 712 20 726" fill="none" stroke="#e4d9c1" stroke-width="8"/>
<ellipse cx="88" cy="700" rx="22" ry="7" fill="#cbbfa6"/>
<circle cx="88" cy="690" r="7" fill="#c99a4a"/>
<rect x="52" y="726" width="72" height="6" fill="#8b5cf6" opacity="0.55"/>
<circle cx="88" cy="746" r="6" fill="#a78bfa" opacity="0.6"/>

<ellipse cx="168" cy="768" rx="26" ry="6" fill="#7c5533" opacity="0.45"/>
<path d="M148 730 L152 764 L186 764 L190 730 Z" fill="#f2ead8"/>
<path d="M170 730 L190 730 L186 764 L172 764 Z" fill="#ddd2ba"/>
<path d="M190 738 Q206 742 200 754" fill="none" stroke="#f2ead8" stroke-width="6"/>

<ellipse cx="222" cy="768" rx="28" ry="6" fill="#7c5533" opacity="0.45"/>
<path d="M198 734 Q198 764 222 764 Q246 764 246 734 Z" fill="#eee5d1"/>
<path d="M222 734 L246 734 Q246 764 222 764 Q236 754 236 734 Z" fill="#d8ccb3"/>
<ellipse cx="222" cy="734" rx="24" ry="7" fill="#f8f2e4"/>
<circle cx="222" cy="726" r="7" fill="#c99a4a"/>

<ellipse cx="290" cy="770" rx="36" ry="7" fill="#7c5533" opacity="0.45"/>
<ellipse cx="290" cy="764" rx="34" ry="8" fill="#eee5d1"/>
<ellipse cx="290" cy="761" rx="26" ry="6" fill="#dcd0b8"/>
<path d="M266 736 Q266 758 290 758 Q314 758 314 736 Z" fill="#f4ecda"/>
<ellipse cx="290" cy="736" rx="24" ry="6" fill="#ffffff"/>
<ellipse cx="290" cy="737" rx="18" ry="4" fill="#a9714a"/>
<path d="M314 740 Q330 744 324 754" fill="none" stroke="#f4ecda" stroke-width="6"/>

<g data-obj="teacup">
<ellipse cx="378" cy="782" rx="46" ry="10" fill="#efe6d2"/>
<ellipse cx="378" cy="779" rx="34" ry="7" fill="#ded2b9"/>
<path d="M342 730 Q342 774 378 774 Q414 774 414 730 Z" fill="#f8f2e6"/>
<path d="M378 730 L414 730 Q414 774 378 774 Q398 760 398 730 Z" fill="#e2d8c4"/>
<path d="M414 736 Q436 740 432 756 Q429 766 416 766" fill="none" stroke="#f8f2e6" stroke-width="8"/>
<ellipse cx="378" cy="730" rx="36" ry="9" fill="#ffffff"/>
<ellipse cx="378" cy="731" rx="27" ry="6" fill="#b57a4d"/>
<rect x="345" y="740" width="66" height="5" fill="#c99a4a"/>
<circle cx="360" cy="756" r="6" fill="#8b5cf6"/>
<circle cx="378" cy="762" r="5" fill="#a78bfa"/>
<circle cx="396" cy="754" r="6" fill="#7c3aed"/>
<circle cx="368" cy="748" r="3" fill="#c4b5fd"/>
<circle cx="388" cy="766" r="3" fill="#c4b5fd"/>
</g>

<ellipse cx="470" cy="770" rx="36" ry="7" fill="#7c5533" opacity="0.45"/>
<ellipse cx="470" cy="764" rx="34" ry="8" fill="#eee5d1"/>
<path d="M446 736 Q446 758 470 758 Q494 758 494 736 Z" fill="#f4ecda"/>
<path d="M470 736 L494 736 Q494 758 470 758 Q484 748 484 736 Z" fill="#ded3ba"/>
<ellipse cx="470" cy="736" rx="24" ry="6" fill="#ffffff"/>
<ellipse cx="470" cy="737" rx="18" ry="4" fill="#a9714a"/>
<path d="M494 740 Q510 744 504 754" fill="none" stroke="#f4ecda" stroke-width="6"/>

<rect x="516" y="742" width="102" height="22" rx="3" fill="#7a3f4a"/>
<rect x="522" y="748" width="90" height="10" fill="#f0e6d2"/>
<rect x="522" y="722" width="94" height="20" rx="3" fill="#3f5a72"/>
<rect x="528" y="728" width="82" height="9" fill="#f0e6d2"/>

<ellipse cx="674" cy="768" rx="48" ry="8" fill="#7c5533" opacity="0.5"/>
<path d="M636 728 Q636 704 674 704 Q712 704 712 728 Q712 764 674 764 Q636 764 636 728 Z" fill="#3f5a72"/>
<path d="M674 704 Q712 704 712 728 Q712 764 674 764 Q692 748 692 728 Q692 712 674 704 Z" fill="#31465a"/>
<path d="M712 718 Q736 722 731 742 Q727 754 715 752" fill="none" stroke="#3f5a72" stroke-width="9"/>
<path d="M636 722 Q618 714 612 728" fill="none" stroke="#38506a" stroke-width="8"/>
<circle cx="674" cy="698" r="7" fill="#c99a4a"/>
<rect x="642" y="730" width="64" height="5" fill="#e8dcc4" opacity="0.7"/>

<rect x="736" y="734" width="52" height="30" rx="4" fill="#a9603f"/>
<rect x="736" y="734" width="52" height="8" rx="4" fill="#c2764f"/>
<path d="M762 734 Q740 716 736 694" fill="none" stroke="#4f7a44" stroke-width="5"/>
<path d="M762 734 Q784 714 792 696" fill="none" stroke="#5d8c50" stroke-width="5"/>
<ellipse cx="734" cy="690" rx="15" ry="10" fill="#5d8c50"/>
<ellipse cx="794" cy="692" rx="15" ry="10" fill="#6fa15f"/>

<rect x="0" y="888" width="800" height="312" fill="url(#uk-floor)"/>
<rect x="0" y="888" width="800" height="6" fill="#8a6136"/>
<rect x="0" y="960" width="800" height="3" fill="#5d4028" opacity="0.7"/>
<rect x="0" y="1046" width="800" height="3" fill="#5d4028" opacity="0.7"/>
<rect x="0" y="1136" width="800" height="3" fill="#5d4028" opacity="0.7"/>
<rect x="452" y="888" width="4" height="312" fill="#5d4028" opacity="0.5"/>
<ellipse cx="360" cy="1030" rx="320" ry="150" fill="url(#uk-glow)" opacity="0.4"/>

<path d="M28 908 L44 964 L40 1024 L28 1030 L16 1022 L14 962 Z" fill="#2c3138"/>
<path d="M28 908 L44 964 L40 1024 L30 1028 L30 960 Z" fill="#3c434c"/>
<rect x="24" y="898" width="6" height="14" fill="#8b939c"/>
<path d="M182 902 L198 958 L194 1018 L182 1026 L170 1018 L168 956 Z" fill="#c9bfa6"/>
<path d="M182 902 L198 958 L194 1018 L184 1024 L184 954 Z" fill="#b0a68e"/>
<rect x="178" y="892" width="6" height="14" fill="#8b939c"/>

<g data-obj="umbrella">
<rect x="72" y="890" width="6" height="14" fill="#c9d3d8"/>
<path d="M75 898 L98 940 L94 1004 L75 1016 L56 1004 L52 940 Z" fill="#2f7f83"/>
<path d="M75 898 L98 940 L94 1004 L78 1014 L78 938 Z" fill="#23636a"/>
<path d="M75 898 L62 942 L64 1004 L75 1010 Z" fill="#46a0a4"/>
<path d="M86 920 L92 966 L90 1002" fill="none" stroke="#1e565c" stroke-width="3"/>
<path d="M66 922 L62 968 L64 1002" fill="none" stroke="#5cb4b6" stroke-width="3" opacity="0.8"/>
<rect x="52" y="952" width="46" height="14" rx="4" fill="#8b5cf6"/>
<rect x="52" y="952" width="46" height="5" rx="2" fill="#a78bfa"/>
<rect x="70" y="1010" width="10" height="20" rx="4" fill="#b8a882"/>
</g>

<g data-obj="lightstick">
<ellipse cx="135" cy="952" rx="22" ry="24" fill="url(#uk-glow)" opacity="0.22"/>
<rect x="118" y="924" width="34" height="52" rx="16" fill="#7c4fd0"/>
<rect x="118" y="924" width="34" height="52" rx="16" fill="#a78bfa" opacity="0.38"/>
<rect x="124" y="930" width="9" height="32" rx="4" fill="#d8caf5" opacity="0.7"/>
<rect x="119" y="970" width="32" height="12" rx="3" fill="#e4ddef"/>
<rect x="123" y="980" width="24" height="32" rx="7" fill="#ece4d2"/>
<rect x="123" y="980" width="9" height="32" rx="4" fill="#f7f0e0"/>
<rect x="123" y="992" width="24" height="8" fill="#6d3fc4"/>
</g>

<ellipse cx="102" cy="1178" rx="86" ry="16" fill="#3d2917" opacity="0.5"/>
<rect x="30" y="1002" width="146" height="168" rx="10" fill="#8a6339"/>
<rect x="30" y="1002" width="34" height="168" fill="#a67c46" opacity="0.55"/>
<ellipse cx="103" cy="1004" rx="73" ry="17" fill="#b18b4f"/>
<ellipse cx="103" cy="1004" rx="61" ry="12" fill="#4a3418"/>
<rect x="30" y="1044" width="146" height="10" fill="#5f4525"/>
<rect x="30" y="1122" width="146" height="10" fill="#5f4525"/>
<rect x="30" y="1160" width="146" height="14" rx="5" fill="#5f4525"/>

<ellipse cx="290" cy="1176" rx="86" ry="16" fill="#3d2917" opacity="0.45"/>
<rect x="268" y="1010" width="42" height="152" fill="#6b4a2c"/>
<rect x="268" y="1010" width="14" height="152" fill="#845c37"/>
<ellipse cx="289" cy="1164" rx="56" ry="14" fill="#7a5531"/>
<ellipse cx="289" cy="1160" rx="56" ry="12" fill="#8f663c"/>
<ellipse cx="289" cy="1002" rx="112" ry="22" fill="#8f663c"/>
<ellipse cx="289" cy="998" rx="112" ry="20" fill="#a87a49"/>

<rect x="284" y="874" width="10" height="122" fill="#c9a253"/>
<rect x="284" y="874" width="4" height="122" fill="#e2bd6e"/>
<ellipse cx="289" cy="984" rx="80" ry="16" fill="#c9a253"/>
<ellipse cx="289" cy="980" rx="80" ry="14" fill="#e6c47a"/>
<ellipse cx="289" cy="928" rx="62" ry="13" fill="#c9a253"/>
<ellipse cx="289" cy="924" rx="62" ry="11" fill="#e6c47a"/>
<ellipse cx="289" cy="878" rx="46" ry="11" fill="#c9a253"/>
<ellipse cx="289" cy="875" rx="46" ry="9" fill="#e6c47a"/>
<circle cx="289" cy="864" r="7" fill="#d9b262"/>

<ellipse cx="238" cy="972" rx="22" ry="12" fill="#e0a86a"/>
<ellipse cx="238" cy="966" rx="22" ry="11" fill="#f0c48c"/>
<ellipse cx="238" cy="962" rx="14" ry="6" fill="#c3505a"/>
<path d="M324 976 Q324 954 344 954 Q364 954 364 976 Z" fill="#e6b878"/>
<ellipse cx="248" cy="916" rx="24" ry="12" fill="#c98a5e"/>
<ellipse cx="248" cy="910" rx="24" ry="11" fill="#e0a374"/>

<g data-obj="scone">
<path d="M250 872 L256 838 Q262 818 288 816 Q314 818 320 838 L326 872 Z" fill="#d9a462"/>
<path d="M288 816 Q314 818 320 838 L326 872 L296 872 L300 838 Z" fill="#c08c4c"/>
<path d="M256 838 Q288 826 320 838" fill="none" stroke="#f0cf9a" stroke-width="7"/>
<path d="M262 828 Q288 812 314 828 Q300 820 288 820 Q274 820 262 828 Z" fill="#f6e6c4"/>
<ellipse cx="288" cy="872" rx="38" ry="7" fill="#b8823f"/>
<circle cx="272" cy="850" r="4" fill="#8c5a2c"/>
<circle cx="304" cy="856" r="4" fill="#8c5a2c"/>
<circle cx="288" cy="844" r="3" fill="#8c5a2c"/>
</g>

<ellipse cx="474" cy="1152" rx="80" ry="14" fill="#3d2917" opacity="0.5"/>

<g data-obj="corgi">
<ellipse cx="474" cy="1112" rx="56" ry="35" fill="#d98b46"/>
<ellipse cx="474" cy="1128" rx="46" ry="19" fill="#f4e5cf"/>
<ellipse cx="528" cy="1100" rx="12" ry="10" fill="#c87f3d"/>
<ellipse cx="528" cy="1097" rx="9" ry="6" fill="#e6a463"/>
<ellipse cx="446" cy="1145" rx="15" ry="9" fill="#f4e5cf"/>
<ellipse cx="478" cy="1148" rx="15" ry="9" fill="#efdcc2"/>
<circle cx="434" cy="1090" r="30" fill="#e09550"/>
<path d="M434 1060 Q414 1072 412 1098 Q404 1080 410 1064 Z" fill="#c87f3d"/>
<polygon points="414,1066 424,1034 438,1068" fill="#d0813e"/>
<polygon points="418,1064 425,1044 433,1066" fill="#f0b98a"/>
<polygon points="446,1064 458,1036 470,1064" fill="#d0813e"/>
<polygon points="450,1062 458,1046 465,1062" fill="#f0b98a"/>
<path d="M432 1062 L440 1090 L426 1090 Z" fill="#f6ead8"/>
<ellipse cx="418" cy="1100" rx="16" ry="13" fill="#f6ead8"/>
<ellipse cx="406" cy="1096" rx="5" ry="4" fill="#3a2a22"/>
<path d="M410 1106 Q418 1112 426 1106" fill="none" stroke="#3a2a22" stroke-width="2"/>
<circle cx="428" cy="1082" r="4" fill="#3a2a22"/>
<circle cx="450" cy="1084" r="4" fill="#3a2a22"/>
<circle cx="429" cy="1081" r="1.5" fill="#ffffff"/>
<circle cx="451" cy="1083" r="1.5" fill="#ffffff"/>
<ellipse cx="416" cy="1114" rx="7" ry="4" fill="#e8a1a8" opacity="0.5"/>
<ellipse cx="456" cy="1108" rx="7" ry="4" fill="#e8a1a8" opacity="0.5"/>
</g>

<rect x="498" y="996" width="16" height="164" rx="4" fill="#5e422c"/>
<rect x="498" y="996" width="6" height="164" fill="#78573a"/>
<rect x="498" y="1098" width="86" height="11" rx="4" fill="#5e422c"/>
<rect x="452" y="984" width="140" height="18" rx="5" fill="#6b4a30"/>
<rect x="452" y="984" width="140" height="6" rx="3" fill="#835c3c"/>

<ellipse cx="676" cy="1180" rx="130" ry="18" fill="#3d2917" opacity="0.45"/>
<rect x="560" y="852" width="234" height="322" fill="#4e3421"/>
<rect x="570" y="866" width="214" height="298" fill="#5f4229"/>
<rect x="570" y="866" width="214" height="298" fill="url(#uk-glow)" opacity="0.35"/>
<rect x="560" y="852" width="234" height="16" fill="#7a5634"/>
<rect x="560" y="852" width="234" height="5" fill="#96693e"/>
<rect x="556" y="852" width="16" height="322" fill="#6b4a2c"/>
<rect x="556" y="852" width="6" height="322" fill="#835c37"/>
<rect x="782" y="852" width="16" height="322" fill="#5c3f26"/>
<rect x="570" y="952" width="214" height="12" fill="#7a5634"/>
<rect x="570" y="952" width="214" height="4" fill="#96693e"/>
<rect x="570" y="1042" width="214" height="12" fill="#7a5634"/>
<rect x="570" y="1042" width="214" height="4" fill="#96693e"/>
<rect x="570" y="1132" width="214" height="12" fill="#7a5634"/>
<rect x="570" y="1132" width="214" height="4" fill="#96693e"/>

<g data-obj="crown">
<path d="M600 938 L608 900 L622 926 L636 894 L650 926 L664 900 L672 938 Z" fill="#e6bd5e"/>
<path d="M636 894 L650 926 L664 900 L672 938 L640 938 Z" fill="#c99a3f"/>
<rect x="598" y="934" width="76" height="20" rx="6" fill="#d9ab48"/>
<rect x="598" y="934" width="76" height="7" rx="3" fill="#f0cd7a"/>
<rect x="598" y="948" width="76" height="6" rx="3" fill="#b8862f"/>
<circle cx="636" cy="944" r="6" fill="#7c3aed"/>
<circle cx="613" cy="944" r="5" fill="#b83a3a"/>
<circle cx="659" cy="944" r="5" fill="#3a6fb8"/>
<circle cx="608" cy="898" r="5" fill="#f6dfa0"/>
<circle cx="636" cy="892" r="5" fill="#f6dfa0"/>
<circle cx="664" cy="898" r="5" fill="#f6dfa0"/>
</g>

<rect x="688" y="936" width="48" height="16" rx="5" fill="#5a4028"/>
<rect x="688" y="936" width="48" height="6" rx="3" fill="#77563a"/>
<circle cx="712" cy="912" r="26" fill="#cfe0ea" opacity="0.65"/>
<polygon points="712,896 722,920 702,920" fill="#8e9caa"/>
<circle cx="704" cy="902" r="3" fill="#ffffff"/>
<rect x="754" y="898" width="26" height="46" rx="6" fill="#8f1e1e"/>
<rect x="754" y="898" width="10" height="46" rx="5" fill="#b52c2c"/>
<circle cx="767" cy="890" r="12" fill="#2c3138"/>
<circle cx="767" cy="884" r="9" fill="#e6c9a8"/>

<g data-obj="toy-bus">
<rect x="586" y="1000" width="94" height="42" rx="7" fill="#cf3030"/>
<rect x="586" y="1000" width="94" height="12" rx="6" fill="#e04a4a"/>
<rect x="586" y="1020" width="94" height="5" fill="#f2e6cd"/>
<rect x="592" y="1004" width="18" height="13" rx="3" fill="#a9bfd0"/>
<rect x="614" y="1004" width="18" height="13" rx="3" fill="#bcd0de"/>
<rect x="636" y="1004" width="18" height="13" rx="3" fill="#a9bfd0"/>
<rect x="658" y="1004" width="16" height="13" rx="3" fill="#bcd0de"/>
<rect x="592" y="1027" width="24" height="12" rx="3" fill="#a9bfd0"/>
<rect x="622" y="1027" width="24" height="12" rx="3" fill="#bcd0de"/>
<rect x="652" y="1027" width="22" height="12" rx="3" fill="#9db3c4"/>
<circle cx="608" cy="1044" r="8" fill="#2b2f35"/>
<circle cx="608" cy="1044" r="3" fill="#6a727c"/>
<circle cx="660" cy="1044" r="8" fill="#2b2f35"/>
<circle cx="660" cy="1044" r="3" fill="#6a727c"/>
</g>

<path d="M700 1042 Q700 1014 716 1014 Q732 1014 732 1042 Z" fill="#3f5a72"/>
<path d="M716 1014 Q732 1014 732 1042 L720 1042 Q724 1024 716 1014 Z" fill="#31465a"/>
<ellipse cx="716" cy="1014" rx="16" ry="5" fill="#54748f"/>
<path d="M732 1022 Q744 1026 740 1034" fill="none" stroke="#3f5a72" stroke-width="5"/>
<rect x="752" y="1004" width="34" height="38" rx="5" fill="#e8dcc2"/>
<rect x="752" y="1004" width="12" height="38" rx="4" fill="#f6ecd8"/>
<rect x="752" y="1016" width="34" height="6" fill="#7c3aed"/>

<rect x="576" y="1112" width="88" height="20" rx="3" fill="#3f5a72"/>
<rect x="582" y="1118" width="76" height="9" fill="#f0e6d2"/>
<rect x="580" y="1092" width="80" height="20" rx="3" fill="#7a3f4a"/>
<rect x="586" y="1098" width="68" height="9" fill="#f0e6d2"/>
<rect x="586" y="1074" width="70" height="18" rx="3" fill="#5c7a4e"/>
<rect x="592" y="1080" width="58" height="8" fill="#f0e6d2"/>
<path d="M680 1132 L680 1096 Q680 1090 688 1090 L708 1090 Q716 1090 716 1096 L716 1132 Z" fill="#efe6d2"/>
<path d="M700 1090 L708 1090 Q716 1090 716 1096 L716 1132 L700 1132 Z" fill="#d8ccb3"/>
<path d="M716 1100 Q732 1104 726 1118" fill="none" stroke="#efe6d2" stroke-width="6"/>
<rect x="682" y="1104" width="32" height="6" fill="#8b5cf6" opacity="0.6"/>

<rect x="0" y="888" width="800" height="26" fill="#3d2917" opacity="0.35"/>
<ellipse cx="40" cy="1192" rx="140" ry="26" fill="#3d2917" opacity="0.28"/>
<ellipse cx="770" cy="1194" rx="140" ry="26" fill="#3d2917" opacity="0.28"/>
</svg>`
});
