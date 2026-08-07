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
    { id: 'lightstick',     name: 'Lightstick' },
    { id: 'purple-heart',   name: 'Purple Heart' },
    { id: 'gondolier-hat',  name: 'Gondolier Hat' },
    { id: 'venetian-mask',  name: 'Venetian Mask' },
    { id: 'gelato-cone',    name: 'Gelato Cone' },
    { id: 'pizza-slice',    name: 'Pizza Slice' },
    { id: 'espresso-cup',   name: 'Espresso Cup' },
    { id: 'murano-bottle',  name: 'Glass Bottle' }
  ],
  svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 1200">
<defs>
<linearGradient id="italy-sky" x1="0" y1="0" x2="0" y2="1">
<stop offset="0" stop-color="#ffe7c4"/>
<stop offset="0.45" stop-color="#ffd2a1"/>
<stop offset="1" stop-color="#f8b184"/>
</linearGradient>
<radialGradient id="italy-sun" cx="0.5" cy="0.5" r="0.5">
<stop offset="0" stop-color="#fff3cf" stop-opacity="0.95"/>
<stop offset="1" stop-color="#ffd08e" stop-opacity="0"/>
</radialGradient>
<linearGradient id="italy-canal" x1="0" y1="0" x2="0" y2="1">
<stop offset="0" stop-color="#5ba193"/>
<stop offset="0.5" stop-color="#42877f"/>
<stop offset="1" stop-color="#2f6b68"/>
</linearGradient>
<linearGradient id="italy-pave" x1="0" y1="0" x2="0" y2="1">
<stop offset="0" stop-color="#d8bd99"/>
<stop offset="1" stop-color="#bfa27e"/>
</linearGradient>
<radialGradient id="italy-bottleglow" cx="0.5" cy="0.5" r="0.5">
<stop offset="0" stop-color="#ffe9a8" stop-opacity="0.8"/>
<stop offset="1" stop-color="#ffc45e" stop-opacity="0"/>
</radialGradient>
<linearGradient id="italy-lamp" x1="0" y1="0" x2="0" y2="1">
<stop offset="0" stop-color="#a88ad4"/>
<stop offset="1" stop-color="#6f56ab"/>
</linearGradient>
</defs>

<rect x="0" y="0" width="800" height="1200" fill="#e9c39c"/>
<rect x="0" y="0" width="800" height="640" fill="url(#italy-sky)"/>
<circle cx="618" cy="128" r="152" fill="url(#italy-sun)"/>
<ellipse cx="152" cy="86" rx="86" ry="20" fill="#fff2da" opacity="0.7"/>
<ellipse cx="198" cy="74" rx="54" ry="16" fill="#fff8ea" opacity="0.6"/>
<path d="M262 106 q9 -7 17 0 q9 -7 17 0" fill="none" stroke="#b07a5c" stroke-width="2.4" opacity="0.6"/>

<rect x="352" y="214" width="40" height="150" fill="#e3c39d"/>
<rect x="352" y="214" width="13" height="150" fill="#f0d6b4"/>
<rect x="348" y="204" width="48" height="12" fill="#c9a37c"/>
<path d="M348 206 L372 160 L396 206 Z" fill="#b3644c"/>
<path d="M372 160 L396 206 L384 206 Z" fill="#96513d"/>
<ellipse cx="430" cy="334" rx="34" ry="26" fill="#cfae8b"/>
<rect x="396" y="332" width="68" height="32" fill="#dfc09c"/>
<rect x="396" y="332" width="23" height="32" fill="#eed4b2"/>
<rect x="300" y="430" width="200" height="10" fill="#c4a382"/>
<rect x="300" y="492" width="200" height="104" fill="#4f8f88"/>
<rect x="300" y="492" width="200" height="18" fill="#6bab9d" opacity="0.7"/>
<path d="M296 452 q84 -46 200 0 l0 22 q-100 -40 -200 0 Z" fill="#d3b993"/>
<path d="M296 452 q84 -46 200 0 l0 8 q-100 -40 -200 0 Z" fill="#e8d2ae"/>
<path d="M296 472 q84 -34 200 0 l0 22 q-100 -30 -200 0 Z" fill="#9c8465" opacity="0.5"/>
<rect x="292" y="438" width="208" height="14" fill="#dcc4a0"/>
<rect x="292" y="438" width="208" height="5" fill="#efdcbc"/>
<rect x="292" y="418" width="208" height="8" fill="#e2caa6"/>
<rect x="322" y="424" width="7" height="16" fill="#cbb08c"/>

<rect x="-10" y="250" width="92" height="346" fill="#dfa08c"/>
<rect x="-10" y="250" width="28" height="346" fill="#ecb9a5"/>
<rect x="-14" y="240" width="102" height="16" fill="#a85c47"/>
<rect x="-14" y="236" width="102" height="7" fill="#c47056"/>
<rect x="24" y="210" width="16" height="30" fill="#c98a6f"/>
<rect x="20" y="202" width="24" height="10" fill="#a85c47"/>

<rect x="82" y="192" width="106" height="404" fill="#f0d3ab"/>
<rect x="82" y="192" width="30" height="404" fill="#f8e5c6"/>
<rect x="78" y="182" width="116" height="16" fill="#b3684f"/>
<rect x="78" y="178" width="116" height="7" fill="#cd7d5d"/>
<rect x="130" y="148" width="16" height="34" fill="#d9a98a"/>
<rect x="126" y="140" width="24" height="10" fill="#b3684f"/>

<rect x="188" y="234" width="112" height="362" fill="#e6c07f"/>
<rect x="188" y="234" width="32" height="362" fill="#f2d29a"/>
<rect x="184" y="224" width="122" height="16" fill="#a86b40"/>
<rect x="184" y="220" width="122" height="7" fill="#c2814f"/>
<rect x="244" y="188" width="16" height="34" fill="#cfa066"/>
<rect x="240" y="180" width="24" height="10" fill="#a86b40"/>

<rect x="466" y="208" width="106" height="388" fill="#c8a7c2"/>
<rect x="466" y="208" width="30" height="388" fill="#d9bcd4"/>
<rect x="462" y="198" width="116" height="16" fill="#8f5f7f"/>
<rect x="462" y="194" width="116" height="7" fill="#a97399"/>

<rect x="572" y="164" width="120" height="432" fill="#f2c6a0"/>
<rect x="572" y="164" width="34" height="432" fill="#fadbba"/>
<rect x="568" y="154" width="130" height="16" fill="#b3684f"/>
<rect x="568" y="150" width="130" height="7" fill="#cd7d5d"/>
<rect x="626" y="118" width="16" height="34" fill="#dba98a"/>
<rect x="622" y="110" width="24" height="10" fill="#b3684f"/>

<rect x="692" y="232" width="120" height="364" fill="#d99a8f"/>
<rect x="692" y="232" width="32" height="364" fill="#e6b3a7"/>
<rect x="688" y="222" width="126" height="16" fill="#9c5748"/>
<rect x="688" y="218" width="126" height="7" fill="#b76a56"/>

<rect x="10" y="300" width="44" height="60" rx="3" fill="#3f5f5c"/>
<rect x="-4" y="298" width="15" height="64" rx="2" fill="#6f9b7e"/>
<rect x="52" y="298" width="15" height="64" rx="2" fill="#5b8469"/>
<rect x="10" y="430" width="44" height="60" rx="3" fill="#3f5f5c"/>
<rect x="-4" y="428" width="15" height="64" rx="2" fill="#6f9b7e"/>
<rect x="52" y="428" width="15" height="64" rx="2" fill="#5b8469"/>
<rect x="2" y="490" width="60" height="13" rx="4" fill="#8a5a3f"/>
<circle cx="14" cy="484" r="9" fill="#d9483f"/>
<circle cx="32" cy="482" r="10" fill="#e8674f"/>
<path d="M8 476 q11 -16 22 -8" fill="none" stroke="#4f8f5a" stroke-width="4.5"/>

<rect x="104" y="248" width="46" height="62" rx="3" fill="#3f5f5c"/>
<rect x="90" y="246" width="15" height="66" rx="2" fill="#6f9b7e"/>
<rect x="149" y="246" width="15" height="66" rx="2" fill="#5b8469"/>
<rect x="98" y="240" width="58" height="9" fill="#d9a98a"/>
<rect x="104" y="390" width="46" height="62" rx="3" fill="#3f5f5c"/>
<rect x="90" y="388" width="15" height="66" rx="2" fill="#6f9b7e"/>
<rect x="149" y="388" width="15" height="66" rx="2" fill="#5b8469"/>
<rect x="96" y="452" width="62" height="13" rx="4" fill="#8a5a3f"/>
<circle cx="108" cy="446" r="9" fill="#e0699c"/>
<circle cx="126" cy="444" r="10" fill="#f08bb4"/>
<path d="M102 438 q12 -18 24 -8" fill="none" stroke="#4f8f5a" stroke-width="4.5"/>
<rect x="94" y="520" width="72" height="76" rx="4" fill="#7a4a36"/>
<path d="M94 522 q36 -24 72 0 Z" fill="#a8674a"/>

<rect x="212" y="288" width="48" height="64" rx="3" fill="#3f5f5c"/>
<rect x="198" y="286" width="15" height="68" rx="2" fill="#6f9b7e"/>
<rect x="259" y="286" width="15" height="68" rx="2" fill="#5b8469"/>
<rect x="212" y="424" width="48" height="64" rx="3" fill="#3f5f5c"/>
<rect x="198" y="422" width="15" height="68" rx="2" fill="#6f9b7e"/>
<rect x="259" y="422" width="15" height="68" rx="2" fill="#5b8469"/>
<rect x="196" y="488" width="96" height="11" rx="4" fill="#8a5a3f"/>
<rect x="198" y="480" width="92" height="9" rx="3" fill="#a8674a"/>
<circle cx="212" cy="474" r="10" fill="#f0c33c"/>
<circle cx="234" cy="472" r="11" fill="#f7d76a"/>
<path d="M206 466 q13 -18 26 -8" fill="none" stroke="#4f8f5a" stroke-width="5"/>
<rect x="196" y="512" width="96" height="9" fill="#b58c58"/>
<rect x="202" y="521" width="7" height="38" fill="#8a6a52"/>
<rect x="282" y="521" width="7" height="38" fill="#8a6a52"/>
<rect x="196" y="556" width="96" height="9" fill="#b58c58"/>

<rect x="490" y="264" width="46" height="62" rx="3" fill="#3f5f5c"/>
<rect x="476" y="262" width="15" height="66" rx="2" fill="#6f9b7e"/>
<rect x="535" y="262" width="15" height="66" rx="2" fill="#5b8469"/>
<rect x="490" y="400" width="46" height="62" rx="3" fill="#3f5f5c"/>
<rect x="476" y="398" width="15" height="66" rx="2" fill="#6f9b7e"/>
<rect x="535" y="398" width="15" height="66" rx="2" fill="#5b8469"/>
<rect x="482" y="462" width="62" height="13" rx="4" fill="#8a5a3f"/>
<circle cx="494" cy="456" r="9" fill="#b96fb0"/>
<circle cx="512" cy="454" r="10" fill="#cf8ec5"/>
<rect x="480" y="524" width="82" height="72" rx="4" fill="#6d4432"/>
<path d="M480 526 q41 -22 82 0 Z" fill="#9a5f45"/>

<rect x="592" y="220" width="48" height="64" rx="3" fill="#3f5f5c"/>
<rect x="578" y="218" width="15" height="68" rx="2" fill="#6f9b7e"/>
<rect x="639" y="218" width="15" height="68" rx="2" fill="#5b8469"/>
<rect x="586" y="212" width="60" height="9" fill="#dba98a"/>
<rect x="656" y="222" width="28" height="60" rx="3" fill="#3f5f5c"/>
<rect x="592" y="356" width="48" height="64" rx="3" fill="#3f5f5c"/>
<rect x="578" y="354" width="15" height="68" rx="2" fill="#6f9b7e"/>
<rect x="639" y="354" width="15" height="68" rx="2" fill="#5b8469"/>
<rect x="656" y="358" width="28" height="60" rx="3" fill="#3f5f5c"/>
<rect x="580" y="420" width="100" height="11" rx="4" fill="#8a5a3f"/>
<rect x="582" y="412" width="96" height="9" rx="3" fill="#a8674a"/>
<circle cx="596" cy="406" r="10" fill="#f0c33c"/>
<circle cx="620" cy="404" r="11" fill="#f7d76a"/>
<path d="M590 398 q13 -18 26 -8" fill="none" stroke="#4f8f5a" stroke-width="5"/>
<rect x="592" y="490" width="48" height="64" rx="3" fill="#3f5f5c"/>
<rect x="578" y="488" width="15" height="68" rx="2" fill="#6f9b7e"/>
<rect x="639" y="488" width="15" height="68" rx="2" fill="#5b8469"/>

<rect x="716" y="418" width="46" height="62" rx="3" fill="#3f5f5c"/>
<rect x="702" y="416" width="15" height="66" rx="2" fill="#6f9b7e"/>
<rect x="761" y="416" width="15" height="66" rx="2" fill="#5b8469"/>
<rect x="708" y="480" width="62" height="13" rx="4" fill="#8a5a3f"/>
<circle cx="720" cy="474" r="9" fill="#e0699c"/>

<path d="M164 330 q56 16 116 2" fill="none" stroke="#8a6a52" stroke-width="2.6"/>
<rect x="178" y="332" width="24" height="36" rx="2" fill="#f5efe2"/>
<rect x="178" y="332" width="24" height="8" rx="2" fill="#e2d8c6"/>
<rect x="208" y="336" width="20" height="28" rx="2" fill="#9fd4e0"/>

<path d="M648 302 q58 16 118 4" fill="none" stroke="#8a6a52" stroke-width="2.6"/>
<rect x="662" y="306" width="26" height="36" rx="2" fill="#fdf4e2"/>
<rect x="662" y="306" width="26" height="8" rx="2" fill="#e9dfcb"/>
<rect x="694" y="310" width="22" height="28" rx="2" fill="#b6d9a8"/>

<rect x="0" y="558" width="800" height="38" fill="#cbb18d"/>
<rect x="0" y="558" width="800" height="10" fill="#dcc4a2"/>
<rect x="0" y="584" width="800" height="12" fill="#6b7f60"/>
<rect x="446" y="560" width="5" height="34" fill="#b59a76" opacity="0.7"/>
<path d="M96 558 a26 26 0 0 1 52 0 Z" fill="#a68d6c"/>
<path d="M100 558 a22 22 0 0 1 44 0 Z" fill="#4d7a72"/>
<path d="M556 558 a24 24 0 0 1 48 0 Z" fill="#a68d6c"/>
<path d="M560 558 a20 20 0 0 1 40 0 Z" fill="#4d7a72"/>

<rect x="0" y="594" width="800" height="260" fill="url(#italy-canal)"/>
<rect x="88" y="598" width="98" height="156" fill="#f0d3ab" opacity="0.16"/>
<rect x="578" y="598" width="112" height="168" fill="#f2c6a0" opacity="0.16"/>
<rect x="330" y="598" width="140" height="92" fill="#fff0cb" opacity="0.14"/>
<path d="M356 650 q42 -11 84 0" fill="none" stroke="#9fdccb" stroke-width="3.6" opacity="0.5"/>
<path d="M80 786 q48 -13 96 0" fill="none" stroke="#5aa094" stroke-width="4.2" opacity="0.5"/>
<path d="M150 834 q56 -16 112 0" fill="none" stroke="#4e9188" stroke-width="4.6" opacity="0.5"/>

<rect x="556" y="616" width="17" height="202" rx="6" fill="#f2e6d6"/>
<rect x="556" y="632" width="17" height="19" fill="#d94f4f"/>
<rect x="556" y="678" width="17" height="19" fill="#d94f4f"/>
<rect x="567" y="616" width="6" height="202" fill="#000000" opacity="0.12"/>
<rect x="608" y="644" width="15" height="176" rx="6" fill="#f2e6d6"/>
<rect x="608" y="662" width="15" height="18" fill="#2f6bbf"/>
<ellipse cx="564" cy="818" rx="22" ry="7" fill="#2a5f5c" opacity="0.5"/>

<path d="M112 730 q40 -18 120 -20 q120 -4 250 4 q46 2 72 12 q-24 40 -78 46 q-140 12 -256 2 q-70 -8 -108 -44 Z" fill="#2f2a36"/>
<path d="M112 730 q40 -18 120 -20 q120 -4 250 4 q46 2 72 12 q-30 12 -96 14 q-160 6 -262 -4 q-58 -6 -84 -6 Z" fill="#443c4d"/>
<path d="M128 726 q-18 -46 -6 -74 q10 -22 26 -8 q-16 20 -6 48 q6 18 14 32 Z" fill="#2f2a36"/>
<path d="M136 640 q14 -14 30 -6 q-4 10 -14 12 q-10 2 -16 -6 Z" fill="#d9a441"/>
<path d="M498 720 q30 -34 44 -20 q-12 8 -18 26 Z" fill="#2f2a36"/>
<rect x="250" y="700" width="130" height="12" rx="4" fill="#6d4432"/>
<rect x="258" y="684" width="114" height="18" rx="5" fill="#8a5a3f"/>
<rect x="288" y="650" width="54" height="16" rx="6" fill="#d94f4f"/>
<rect x="288" y="650" width="54" height="6" rx="3" fill="#e8756f"/>
<path d="M394 716 q26 -6 44 -2 l0 8 q-20 -4 -44 2 Z" fill="#d9a441"/>
<path d="M420 700 l86 -60 l10 12 l-86 60 Z" fill="#a8764f"/>
<path d="M420 700 l86 -60 l4 5 l-86 60 Z" fill="#c99a6d"/>
<rect x="498" y="628" width="26" height="16" rx="6" fill="#8a5a3f"/>
<path d="M112 748 q60 20 200 22 q160 2 242 -14 l0 10 q-90 20 -248 18 q-146 -2 -194 -22 Z" fill="#1f1b26" opacity="0.45"/>
<ellipse cx="320" cy="794" rx="200" ry="14" fill="#1f4f4f" opacity="0.35"/>

<g data-obj="gondolier-hat" transform="translate(508 610)">
<ellipse cx="56" cy="52" rx="56" ry="15" fill="#c99a5e"/>
<ellipse cx="56" cy="49" rx="56" ry="15" fill="#f0d49a"/>
<ellipse cx="56" cy="47" rx="40" ry="10" fill="#e0c084"/>
<rect x="20" y="14" width="72" height="34" rx="6" fill="#f7e0aa"/>
<rect x="20" y="14" width="24" height="34" rx="6" fill="#fdeec8"/>
<ellipse cx="56" cy="14" rx="36" ry="9" fill="#fdeec8"/>
<ellipse cx="56" cy="14" rx="26" ry="6" fill="#eed7a0"/>
<rect x="20" y="30" width="72" height="14" fill="#d94f4f"/>
<rect x="20" y="30" width="72" height="5" fill="#e8756f"/>
<path d="M88 34 l16 6 l-16 6 Z" fill="#b53c3c"/>
<path d="M22 24 q34 -6 68 0" fill="none" stroke="#e0c084" stroke-width="2" opacity="0.8"/>
</g>

<rect x="0" y="836" width="800" height="364" fill="url(#italy-pave)"/>
<rect x="0" y="826" width="800" height="18" fill="#e5cda9"/>
<rect x="0" y="824" width="800" height="6" fill="#f2dcbb"/>
<rect x="0" y="844" width="800" height="8" fill="#b39877" opacity="0.6"/>
<path d="M0 896 h800" stroke="#b39877" stroke-width="3" opacity="0.45" fill="none"/>
<rect x="0" y="1164" width="800" height="36" fill="#a98c69" opacity="0.32"/>
<circle cx="418" cy="846" r="10" fill="none" stroke="#7a6a52" stroke-width="5"/>
<path d="M418 856 q30 24 66 12 q26 -10 2 -22 q-22 -10 -42 0" fill="none" stroke="#d8c49c" stroke-width="7" stroke-linecap="round"/>
<path d="M418 856 q30 24 66 12 q26 -10 2 -22 q-22 -10 -42 0" fill="none" stroke="#b39c72" stroke-width="2.5" stroke-linecap="round"/>
<path d="M414 838 q-40 -12 -84 -10" fill="none" stroke="#d8c49c" stroke-width="6" stroke-linecap="round"/>
<ellipse cx="196" cy="948" rx="56" ry="10" fill="#a98461" opacity="0.28"/>
<rect x="148" y="894" width="96" height="52" rx="3" fill="#b08d58"/>
<rect x="148" y="894" width="96" height="8" rx="3" fill="#c9a76e"/>
<rect x="192" y="902" width="8" height="44" fill="#9c7f4c"/>
<rect x="156" y="856" width="80" height="42" rx="3" fill="#c9a76e"/>
<rect x="156" y="856" width="80" height="7" rx="3" fill="#ddbe8b"/>
<circle cx="176" cy="852" r="12" fill="#d9483f"/>
<circle cx="200" cy="850" r="13" fill="#e8674f"/>
<circle cx="222" cy="852" r="12" fill="#6cb06a"/>
<ellipse cx="546" cy="880" rx="10" ry="4" fill="#a98461" opacity="0.3"/>
<path d="M528 876 q4 -14 18 -14 q16 0 20 12 q-8 6 -22 6 q-12 0 -16 -4 Z" fill="#8a8f9c"/>
<circle cx="551" cy="860" r="7" fill="#9aa0ad"/>
<path d="M557 860 l9 3 l-9 3 Z" fill="#d9a441"/>
<ellipse cx="598" cy="886" rx="9" ry="4" fill="#a98461" opacity="0.3"/>
<path d="M582 882 q4 -12 16 -12 q14 0 18 10 q-7 6 -20 6 q-11 0 -14 -4 Z" fill="#7e838f"/>
<circle cx="603" cy="868" r="6" fill="#8f95a2"/>
<path d="M608 868 l8 3 l-8 3 Z" fill="#d9a441"/>

<rect x="0" y="498" width="128" height="530" fill="#e0b482"/>
<rect x="0" y="498" width="32" height="530" fill="#eecb9f"/>
<rect x="104" y="498" width="24" height="530" fill="#c2935f"/>
<rect x="0" y="490" width="134" height="16" fill="#a86b40"/>
<rect x="0" y="1006" width="134" height="16" fill="#a98456"/>
<rect x="0" y="1018" width="134" height="10" fill="#8f6c44"/>
<rect x="20" y="556" width="56" height="76" rx="3" fill="#3a5350"/>
<rect x="4" y="554" width="17" height="80" rx="2" fill="#6f9b7e"/>
<rect x="75" y="554" width="17" height="80" rx="2" fill="#5b8469"/>
<rect x="12" y="548" width="72" height="10" fill="#c99a63"/>
<rect x="10" y="632" width="70" height="15" rx="4" fill="#8a5a3f"/>
<circle cx="24" cy="626" r="11" fill="#d9483f"/>
<path d="M16 618 q12 -18 26 -8" fill="none" stroke="#4f8f5a" stroke-width="5"/>
<rect x="94" y="498" width="8" height="520" fill="#b98a58"/>
<rect x="90" y="820" width="16" height="11" rx="3" fill="#9c7448"/>
<path d="M12 906 q30 8 60 -2" fill="none" stroke="#c2935f" stroke-width="3" opacity="0.6"/>
<circle cx="36" cy="960" r="6" fill="#c2935f" opacity="0.55"/>

<g data-obj="purple-heart" transform="translate(26 728)">
<path d="M33 61 C 8 42, 0 27, 0 17 C 0 5, 9 -1, 18 -1 C 25 -1, 30 3, 33 9 C 36 3, 41 -1, 48 -1 C 57 -1, 66 5, 66 17 C 66 27, 58 42, 33 61 Z" fill="#7a4fd0" opacity="0.68"/>
<path d="M33 61 C 8 42, 0 27, 0 17 C 0 5, 9 -1, 18 -1 C 25 -1, 30 3, 33 9 C 36 3, 41 -1, 48 -1 C 57 -1, 66 5, 66 17 C 66 27, 58 42, 33 61 Z" fill="none" stroke="#5c33a8" stroke-width="3" opacity="0.45"/>
</g>
<path d="M14 786 q28 -10 54 -2" fill="none" stroke="#7a4fd0" stroke-width="4.5" opacity="0.55"/>
<path d="M22 802 q22 8 42 0" fill="none" stroke="#b96fb0" stroke-width="3.5" opacity="0.45"/>
<circle cx="86" cy="744" r="8" fill="#9b6fe8" opacity="0.45"/>

<rect x="654" y="502" width="158" height="580" fill="#d4785c"/>
<rect x="654" y="502" width="34" height="580" fill="#e59173"/>
<rect x="654" y="494" width="158" height="16" fill="#9c4a35"/>
<rect x="654" y="1060" width="158" height="16" fill="#a05a3f"/>
<rect x="654" y="1072" width="158" height="10" fill="#83452f"/>
<rect x="700" y="556" width="62" height="84" rx="3" fill="#3a5350"/>
<rect x="684" y="554" width="17" height="88" rx="2" fill="#6f9b7e"/>
<rect x="759" y="554" width="17" height="88" rx="2" fill="#5b8469"/>
<rect x="692" y="548" width="78" height="10" fill="#b06346"/>
<rect x="688" y="640" width="82" height="17" rx="4" fill="#8a5a3f"/>
<circle cx="704" cy="634" r="12" fill="#d9483f"/>
<circle cx="728" cy="632" r="13" fill="#e8674f"/>
<path d="M696 626 q14 -20 28 -8" fill="none" stroke="#4f8f5a" stroke-width="5"/>
<rect x="654" y="686" width="158" height="10" fill="#b0644a"/>
<path d="M660 706 q62 32 148 6" fill="none" stroke="#8a5a3f" stroke-width="3"/>
<path d="M668 712 l12 28 l12 -24 Z" fill="#f0c33c"/>
<path d="M700 722 l12 28 l12 -24 Z" fill="#4f9fb0"/>
<path d="M770 726 l12 28 l12 -24 Z" fill="#6cb06a"/>

<g data-obj="venetian-mask" transform="translate(714 736) rotate(-7) scale(0.72)">
<path d="M44 6 q-6 -18 6 -28 q4 12 12 16 q-8 4 -12 14 Z" fill="#a865a0"/>
<path d="M44 6 q10 -16 26 -18 q-8 12 -14 22 Z" fill="#bd7db4"/>
<path d="M6 34 q0 -22 38 -22 q38 0 38 22 q0 40 -14 62 q-12 18 -24 18 q-12 0 -24 -18 q-14 -22 -14 -62 Z" fill="#e2cca6"/>
<path d="M6 34 q0 -22 38 -22 q10 0 18 3 q-30 6 -34 26 q-4 22 4 50 q-12 -22 -14 -50 Z" fill="#eddcbc"/>
<path d="M6 34 q0 -22 38 -22 q38 0 38 22 q-4 12 -38 12 q-34 0 -38 -12 Z" fill="#c08b33"/>
<path d="M6 34 q4 -12 38 -12 q34 0 38 12 q-4 -20 -38 -20 q-34 0 -38 20 Z" fill="#d6a552"/>
<ellipse cx="26" cy="58" rx="14" ry="10" fill="#332a3f"/>
<ellipse cx="62" cy="58" rx="14" ry="10" fill="#332a3f"/>
<path d="M8 50 q10 -12 22 -12" fill="none" stroke="#6f4ab8" stroke-width="4" stroke-linecap="round"/>
<path d="M80 50 q-10 -12 -22 -12" fill="none" stroke="#6f4ab8" stroke-width="4" stroke-linecap="round"/>
<path d="M44 66 q-5 12 0 22 q5 -10 0 -22 Z" fill="#c9b088"/>
<path d="M34 98 q10 8 20 0" fill="none" stroke="#ab8b56" stroke-width="3"/>
<circle cx="44" cy="26" r="5" fill="#a13c3c"/>
<circle cx="16" cy="76" r="4" fill="#b8453c"/>
<path d="M44 -8 q-8 -12 -26 -8" fill="none" stroke="#8a5a3f" stroke-width="4"/>
</g>
<path d="M724 724 l13 30 l13 -26 Z" fill="#d94f4f"/>

<rect x="632" y="1040" width="180" height="16" rx="4" fill="#8a5a3f"/>
<rect x="632" y="1040" width="180" height="6" rx="3" fill="#a8674a"/>
<rect x="640" y="1056" width="14" height="90" fill="#7a4a36"/>
<rect x="790" y="1056" width="14" height="90" fill="#7a4a36"/>
<rect x="632" y="1140" width="180" height="16" rx="4" fill="#8a5a3f"/>
<path d="M652 1036 q-8 -26 6 -38 l0 -20 l14 0 l0 20 q14 12 6 38 q-4 6 -13 6 q-9 0 -13 -6 Z" fill="#3f8f9c"/>
<path d="M652 1036 q-8 -26 6 -38 l0 -20 l6 0 l0 20 q-11 12 -4 38 q2 5 6 6 q-10 0 -14 -6 Z" fill="#6cbdc6"/>
<path d="M684 1036 q-6 -30 6 -40 l0 -24 l14 0 l0 24 q12 10 6 40 q-4 6 -13 6 q-9 0 -13 -6 Z" fill="#d9483f"/>
<path d="M684 1036 q-6 -30 6 -40 l0 -24 l6 0 l0 24 q-10 10 -5 40 q1 5 6 6 q-9 0 -13 -6 Z" fill="#ef7a63"/>
<path d="M792 1036 q-4 -20 6 -28 l0 -18 l12 0 l0 18 q10 8 6 28 q-3 6 -12 6 q-9 0 -12 -6 Z" fill="#f0c33c"/>

<g data-obj="murano-bottle" transform="translate(712 918)">
<circle cx="34" cy="70" r="54" fill="url(#italy-bottleglow)" opacity="0.8"/>
<path d="M28 8 l0 34 q-24 12 -24 46 q0 30 30 30 q30 0 30 -30 q0 -34 -24 -46 l0 -34 Z" fill="#3fa8b0"/>
<path d="M28 8 l0 34 q-24 12 -24 46 q0 22 16 28 q-10 -10 -10 -28 q0 -32 22 -44 l0 -36 Z" fill="#84d8dc"/>
<path d="M10 74 q24 -12 48 0 q2 8 2 14 q-26 -14 -52 0 q0 -6 2 -14 Z" fill="#f0c33c" opacity="0.85"/>
<path d="M8 96 q26 12 52 0 q-2 10 -6 14 q-20 8 -40 0 q-4 -4 -6 -14 Z" fill="#d94f8f" opacity="0.8"/>
<rect x="26" y="0" width="16" height="12" rx="4" fill="#2f8f96"/>
<ellipse cx="34" cy="0" rx="14" ry="5" fill="#6cc8ce"/>
<ellipse cx="34" cy="-6" rx="9" ry="6" fill="#f0c33c"/>
<path d="M18 62 q-8 14 -6 28" fill="none" stroke="#e6ffff" stroke-width="6" stroke-linecap="round" opacity="0.75"/>
<path d="M31 16 l0 22" fill="none" stroke="#e6ffff" stroke-width="4" stroke-linecap="round" opacity="0.6"/>
<ellipse cx="34" cy="118" rx="30" ry="6" fill="#2f8f96" opacity="0.6"/>
</g>
<rect x="632" y="1036" width="180" height="8" fill="#7a4a36" opacity="0.45"/>

<ellipse cx="498" cy="1176" rx="190" ry="26" fill="#a98461" opacity="0.28"/>
<rect x="356" y="896" width="15" height="290" fill="#8a5a3f"/>
<rect x="356" y="896" width="5" height="290" fill="#a8674a"/>
<rect x="618" y="896" width="15" height="156" fill="#8a5a3f"/>
<rect x="618" y="896" width="5" height="156" fill="#a8674a"/>
<rect x="344" y="894" width="302" height="15" rx="5" fill="#7a4a36"/>
<path d="M340 906 l0 64 l312 0 l0 -64 Z" fill="#f2ece0"/>
<path d="M340 906 l0 64 l32 0 l0 -64 Z" fill="#d94f4f"/>
<path d="M404 906 l0 64 l32 0 l0 -64 Z" fill="#3f8f6c"/>
<path d="M468 906 l0 64 l32 0 l0 -64 Z" fill="#d94f4f"/>
<path d="M340 962 q26 20 52 0 q26 20 52 0 q26 20 52 0 q26 20 52 0 q26 20 52 0 q26 20 52 0 l0 12 q-26 20 -52 0 q-26 20 -52 0 q-26 20 -52 0 q-26 20 -52 0 q-26 20 -52 0 q-26 20 -52 0 Z" fill="#e0d8c8"/>
<rect x="372" y="1006" width="256" height="22" rx="4" fill="#a8764f"/>
<rect x="372" y="1006" width="256" height="7" rx="3" fill="#c99a6d"/>
<rect x="380" y="1028" width="240" height="14" fill="#7a4a36"/>
<rect x="386" y="1042" width="228" height="114" fill="#8a5a3f"/>
<rect x="386" y="1042" width="228" height="9" fill="#6d4432"/>
<rect x="396" y="1054" width="100" height="46" rx="3" fill="#c9a76e"/>
<rect x="396" y="1054" width="100" height="7" rx="2" fill="#ddbe8b"/>
<rect x="464" y="1060" width="7" height="40" fill="#b08d58"/>
<circle cx="414" cy="1052" r="14" fill="#d9483f"/>
<circle cx="442" cy="1050" r="15" fill="#e8674f"/>
<circle cx="470" cy="1052" r="14" fill="#d9483f"/>
<rect x="508" y="1054" width="100" height="46" rx="3" fill="#c9a76e"/>
<rect x="508" y="1054" width="100" height="7" rx="2" fill="#ddbe8b"/>
<rect x="576" y="1060" width="7" height="40" fill="#b08d58"/>
<ellipse cx="526" cy="1050" rx="14" ry="16" fill="#f0c33c"/>
<ellipse cx="554" cy="1048" rx="15" ry="17" fill="#f7d76a"/>
<rect x="404" y="1106" width="112" height="50" rx="3" fill="#b08d58"/>
<rect x="404" y="1106" width="112" height="7" rx="2" fill="#c9a76e"/>
<ellipse cx="428" cy="1104" rx="15" ry="19" fill="#6b4a8f"/>
<ellipse cx="458" cy="1102" rx="16" ry="20" fill="#7e5aa5"/>
<ellipse cx="488" cy="1104" rx="15" ry="19" fill="#6b4a8f"/>
<path d="M458 1084 q4 -9 11 -9" fill="none" stroke="#4f8f5a" stroke-width="4.5"/>
<rect x="526" y="1106" width="108" height="50" rx="3" fill="#b08d58"/>
<rect x="526" y="1106" width="108" height="7" rx="2" fill="#c9a76e"/>
<circle cx="548" cy="1102" r="15" fill="#4f8f5a"/>
<circle cx="578" cy="1100" r="16" fill="#6cb06a"/>
<path d="M604 896 L634 1046" fill="none" stroke="#a8764f" stroke-width="9" stroke-linecap="round"/>
<path d="M602 898 L632 1048" fill="none" stroke="#c99a6d" stroke-width="3" stroke-linecap="round"/>
<rect x="620" y="1034" width="26" height="10" rx="3" fill="#8a5a3f"/>
<path d="M620 1042 l28 4 l-6 44 l-28 -6 Z" fill="#c9a05a"/>
<path d="M620 1042 l28 4 l-2 14 l-28 -4 Z" fill="#a8814a"/>

<rect x="380" y="964" width="72" height="44" rx="3" fill="#b08d58"/>
<rect x="380" y="964" width="72" height="7" rx="2" fill="#c9a76e"/>
<circle cx="398" cy="960" r="13" fill="#d9483f"/>
<circle cx="424" cy="958" r="14" fill="#e8674f"/>
<g data-obj="pizza-slice" transform="translate(444 952)">
<path d="M4 52 L58 -2 L112 52 Z" fill="#d9a05a"/>
<path d="M4 52 q54 16 108 0 l4 4 q-56 18 -116 0 Z" fill="#c98b46"/>
<path d="M10 48 L58 4 L106 48 Z" fill="#f2c96e"/>
<path d="M14 46 L58 8 L102 46 Z" fill="#fadf9e"/>
<circle cx="42" cy="34" r="9" fill="#d9483f"/>
<circle cx="42" cy="32" r="6" fill="#e8674f"/>
<circle cx="74" cy="36" r="8" fill="#d9483f"/>
<circle cx="74" cy="34" r="5" fill="#e8674f"/>
<circle cx="58" cy="18" r="7" fill="#d9483f"/>
<path d="M26 42 q6 -6 12 -2" fill="none" stroke="#4f8f5a" stroke-width="4" stroke-linecap="round"/>
<path d="M84 26 q6 -6 12 -2" fill="none" stroke="#4f8f5a" stroke-width="4" stroke-linecap="round"/>
<path d="M52 40 q8 4 14 0" fill="none" stroke="#fff3d0" stroke-width="4" stroke-linecap="round" opacity="0.8"/>
</g>
<rect x="540" y="962" width="86" height="46" rx="3" fill="#c9a76e"/>
<rect x="540" y="962" width="86" height="7" rx="2" fill="#ddbe8b"/>
<rect x="566" y="969" width="7" height="39" fill="#b08d58"/>
<ellipse cx="556" cy="958" rx="13" ry="15" fill="#f0c33c"/>
<ellipse cx="584" cy="956" rx="14" ry="16" fill="#f7d76a"/>
<ellipse cx="610" cy="958" rx="13" ry="15" fill="#f0c33c"/>
<rect x="372" y="1002" width="256" height="6" fill="#7a4a36" opacity="0.5"/>

<ellipse cx="272" cy="1150" rx="130" ry="22" fill="#a98461" opacity="0.3"/>
<rect x="258" y="1022" width="17" height="128" fill="#8a5a3f"/>
<rect x="258" y="1022" width="6" height="128" fill="#a8674a"/>
<path d="M230 1150 l36 -28 l36 28" fill="none" stroke="#8a5a3f" stroke-width="12" stroke-linecap="round"/>
<ellipse cx="266" cy="1016" rx="114" ry="26" fill="#c2937f"/>
<ellipse cx="266" cy="1010" rx="114" ry="26" fill="#f2ece0"/>
<ellipse cx="266" cy="1008" rx="98" ry="20" fill="#fdf8ee"/>
<path d="M152 1010 q114 34 228 0 l0 10 q-114 34 -228 0 Z" fill="#d94f4f" opacity="0.45"/>
<rect x="122" y="1030" width="18" height="114" rx="6" fill="#7a4a36"/>
<rect x="122" y="936" width="18" height="100" rx="6" fill="#8a5a3f"/>
<rect x="120" y="932" width="62" height="14" rx="6" fill="#8a5a3f"/>
<rect x="116" y="1028" width="78" height="15" rx="5" fill="#a8674a"/>
<rect x="176" y="1030" width="17" height="114" rx="6" fill="#7a4a36"/>
<rect x="388" y="1028" width="17" height="112" rx="6" fill="#7a4a36"/>
<rect x="388" y="940" width="17" height="96" rx="6" fill="#8a5a3f"/>
<rect x="388" y="936" width="58" height="14" rx="6" fill="#8a5a3f"/>
<rect x="384" y="1026" width="74" height="15" rx="5" fill="#a8674a"/>
<rect x="442" y="1028" width="17" height="110" rx="6" fill="#7a4a36"/>

<path d="M150 1016 l32 -12 l28 9 l-30 13 Z" fill="#fdf8ee"/>
<path d="M150 1016 l32 -12 l5 2 l-31 12 Z" fill="#e8dfcd"/>
<path d="M248 1006 q-6 -22 4 -30 l0 -8 l20 0 l0 8 q10 8 4 30 q-3 4 -14 4 q-11 0 -14 -4 Z" fill="#dfe9e8" opacity="0.9"/>
<rect x="247" y="962" width="26" height="9" rx="3" fill="#b9a88c"/>
<path d="M255 980 l0 20" fill="none" stroke="#ffffff" stroke-width="3" opacity="0.6"/>
<path d="M334 1008 l4 -58 l40 5 l-4 56 Z" fill="#f7efdd"/>
<path d="M334 1008 l4 -58 l11 1 l-4 58 Z" fill="#e6dcc4"/>
<path d="M345 968 l24 3" fill="none" stroke="#c2a878" stroke-width="3"/>
<g data-obj="espresso-cup" transform="translate(192 948)">
<ellipse cx="40" cy="56" rx="42" ry="11" fill="#d8cdba"/>
<ellipse cx="40" cy="52" rx="42" ry="11" fill="#fdf8ee"/>
<ellipse cx="40" cy="51" rx="30" ry="7" fill="#e8dfcd"/>
<path d="M16 20 q0 -8 24 -8 q24 0 24 8 l-4 26 q-2 8 -20 8 q-18 0 -20 -8 Z" fill="#fdf8ee"/>
<path d="M16 20 q0 -8 24 -8 q6 0 10 1 q-16 2 -16 7 l2 34 q-16 -1 -18 -8 Z" fill="#ffffff"/>
<ellipse cx="40" cy="20" rx="24" ry="8" fill="#e8dfcd"/>
<ellipse cx="40" cy="20" rx="18" ry="6" fill="#5c3a24"/>
<ellipse cx="36" cy="19" rx="8" ry="3" fill="#a8764f" opacity="0.8"/>
<path d="M64 22 q16 0 16 10 q0 10 -14 12" fill="none" stroke="#fdf8ee" stroke-width="7" stroke-linecap="round"/>
<path d="M64 22 q16 0 16 10 q0 10 -14 12" fill="none" stroke="#e8dfcd" stroke-width="3" stroke-linecap="round"/>
<path d="M34 8 q6 -8 0 -16" fill="none" stroke="#ffffff" stroke-width="3" opacity="0.6" stroke-linecap="round"/>
<path d="M46 8 q6 -10 0 -18" fill="none" stroke="#ffffff" stroke-width="3" opacity="0.5" stroke-linecap="round"/>
</g>

<g data-obj="gelato-cone" transform="translate(294 914)">
<path d="M14 44 L34 100 L54 44 Z" fill="#d9a05a"/>
<path d="M14 44 L34 100 L38 88 L24 44 Z" fill="#c98b46"/>
<path d="M18 52 l28 0" stroke="#b8783c" stroke-width="2.6" fill="none"/>
<path d="M22 64 l22 0" stroke="#b8783c" stroke-width="2.6" fill="none"/>
<path d="M26 76 l14 0" stroke="#b8783c" stroke-width="2.6" fill="none"/>
<path d="M24 46 l14 40" stroke="#b8783c" stroke-width="2.2" fill="none"/>
<path d="M44 46 l-12 34" stroke="#b8783c" stroke-width="2.2" fill="none"/>
<ellipse cx="34" cy="44" rx="26" ry="14" fill="#f7d0a0"/>
<circle cx="20" cy="34" r="15" fill="#8fc47a"/>
<circle cx="17" cy="30" r="8" fill="#aad995"/>
<circle cx="48" cy="34" r="15" fill="#f2a3bc"/>
<circle cx="45" cy="30" r="8" fill="#f9c2d3"/>
<circle cx="34" cy="18" r="16" fill="#fdf0d2"/>
<circle cx="30" cy="13" r="8" fill="#fffaf0"/>
<path d="M34 2 q10 -10 16 -2 q-8 2 -12 8 Z" fill="#d9483f"/>
<circle cx="52" cy="0" r="5" fill="#b53c3c"/>
</g>
<ellipse cx="222" cy="1020" rx="10" ry="5" fill="#cfc7ba"/>
<rect x="228" y="1017" width="30" height="5" rx="2" fill="#cfc7ba"/>
<ellipse cx="300" cy="1026" rx="18" ry="6" fill="#e4dccc"/>
<ellipse cx="412" cy="1148" rx="54" ry="12" fill="#a98461" opacity="0.22"/>

<ellipse cx="140" cy="1156" rx="124" ry="20" fill="#a98461" opacity="0.28"/>
<g data-obj="lightstick" transform="translate(72 906) rotate(-8)">
<rect x="-17" y="0" width="34" height="64" rx="17" fill="url(#italy-lamp)"/>
<rect x="-17" y="0" width="12" height="64" rx="6" fill="#a892d4" opacity="0.7"/>
<ellipse cx="0" cy="7" rx="10" ry="5" fill="#c4b3e2" opacity="0.65"/>
<circle cx="0" cy="34" r="8" fill="#c9bce6" opacity="0.4"/>
<rect x="-12" y="62" width="24" height="9" rx="3" fill="#b3a3cc"/>
<rect x="-12" y="62" width="24" height="4" rx="2" fill="#cabde0"/>
<rect x="-9" y="70" width="18" height="38" rx="5" fill="#e4d8c2"/>
<rect x="-9" y="70" width="7" height="38" rx="3" fill="#f2e9d8"/>
<rect x="-9" y="86" width="18" height="6" fill="#6f56ab" opacity="0.7"/>
<path d="M9 100 q14 6 8 18" fill="none" stroke="#a89bc4" stroke-width="3"/>
</g>
<rect x="32" y="984" width="80" height="58" rx="8" fill="#c9a76e"/>
<rect x="32" y="984" width="80" height="10" rx="5" fill="#ddbe8b"/>
<path d="M52 994 l0 44" stroke="#a8854f" stroke-width="4" fill="none"/>
<path d="M72 994 l0 46" stroke="#a8854f" stroke-width="4" fill="none"/>
<path d="M92 994 l0 44" stroke="#a8854f" stroke-width="4" fill="none"/>
<path d="M32 1012 l80 0" stroke="#a8854f" stroke-width="4" fill="none"/>
<rect x="32" y="1036" width="80" height="8" rx="4" fill="#b08d58"/>

<circle cx="76" cy="1114" r="34" fill="none" stroke="#3a3140" stroke-width="7"/>
<circle cx="208" cy="1114" r="34" fill="none" stroke="#3a3140" stroke-width="7"/>
<path d="M76 1114 L130 1114 L152 1052 L208 1114" fill="none" stroke="#3f8f9c" stroke-width="8" stroke-linecap="round"/>
<path d="M130 1114 L152 1052 L98 1054 L76 1114" fill="none" stroke="#3f8f9c" stroke-width="8" stroke-linecap="round"/>
<path d="M94 1048 L114 1048" fill="none" stroke="#3a3140" stroke-width="7" stroke-linecap="round"/>
<path d="M152 1052 L148 1098 q-8 6 -16 4" fill="none" stroke="#3a3140" stroke-width="6" stroke-linecap="round"/>
<path d="M152 1052 L180 1056 q10 -6 16 2" fill="none" stroke="#3a3140" stroke-width="6" stroke-linecap="round"/>
<path d="M98 1054 q10 -10 26 -6" fill="none" stroke="#8a5a3f" stroke-width="9" stroke-linecap="round"/>
<circle cx="130" cy="1114" r="9" fill="#3a3140"/>
<circle cx="130" cy="1114" r="4" fill="#c9a76e"/>

<ellipse cx="502" cy="880" rx="34" ry="8" fill="#a98461" opacity="0.3"/>
<path d="M472 878 q0 -30 30 -30 q30 0 30 30 Z" fill="#b8775e"/>
<path d="M472 878 q0 -30 30 -30 q8 0 14 4 q-22 4 -22 26 Z" fill="#cf9078"/>
<rect x="468" y="838" width="68" height="14" rx="4" fill="#c98a6f"/>
<path d="M502 848 q-24 -14 -30 -44 q22 6 30 26 q8 -22 30 -28 q-4 32 -30 46 Z" fill="#4f8f5a"/>
<ellipse cx="316" cy="884" rx="30" ry="8" fill="#a98461" opacity="0.3"/>
<path d="M290 882 q0 -28 26 -28 q26 0 26 28 Z" fill="#a8674a"/>
<rect x="286" y="846" width="60" height="13" rx="4" fill="#c07d55"/>
<path d="M316 856 q-20 -12 -24 -38 q18 4 24 22 q6 -20 26 -24 q-4 28 -26 40 Z" fill="#4f8f5a"/>
<circle cx="300" cy="836" r="7" fill="#e0699c"/>

<path d="M0 1200 L800 1200 L800 1180 q-200 16 -400 4 q-200 -12 -400 6 Z" fill="#a98461" opacity="0.25"/>
</svg>`
});
