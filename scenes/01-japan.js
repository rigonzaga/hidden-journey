window.SCENES = window.SCENES || [];
window.SCENES.push({
  id: 'japan',
  order: 1,
  country: 'Japan',
  flag: '🇯🇵',
  title: 'Sakura Street, Tokyo',
  caption: 'Cherry blossoms, ramen nights, and you.',
  stamp: '🌸',
  objects: [
    { id: 'lightstick',   name: 'Lightstick' },
    { id: 'purple-heart', name: 'Purple Heart' },
    { id: 'maneki-neko',  name: 'Lucky Cat' },
    { id: 'onigiri',      name: 'Onigiri' },
    { id: 'paper-crane',  name: 'Paper Crane' },
    { id: 'geta-sandal',  name: 'Geta Sandal' },
    { id: 'matcha-cup',   name: 'Matcha Cup' },
    { id: 'daruma',       name: 'Daruma Doll' }
  ],
  svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 1200">
<defs>
<linearGradient id="japan-sky" x1="0" y1="0" x2="0" y2="1">
<stop offset="0" stop-color="#ffe7cb"/>
<stop offset="0.38" stop-color="#ffd3c4"/>
<stop offset="0.72" stop-color="#ffbdd2"/>
<stop offset="1" stop-color="#f4a6c3"/>
</linearGradient>
<radialGradient id="japan-sun" cx="0.5" cy="0.5" r="0.5">
<stop offset="0" stop-color="#fff3d0" stop-opacity="0.9"/>
<stop offset="0.55" stop-color="#ffdda6" stop-opacity="0.35"/>
<stop offset="1" stop-color="#ffcf9a" stop-opacity="0"/>
</radialGradient>
<radialGradient id="japan-lanternglow" cx="0.5" cy="0.5" r="0.5">
<stop offset="0" stop-color="#ffb765" stop-opacity="0.7"/>
<stop offset="1" stop-color="#ff9a4d" stop-opacity="0"/>
</radialGradient>
<linearGradient id="japan-street" x1="0" y1="0" x2="0" y2="1">
<stop offset="0" stop-color="#8d7565"/>
<stop offset="0.45" stop-color="#75604f"/>
<stop offset="1" stop-color="#54443f"/>
</linearGradient>
<linearGradient id="japan-lanternbody" x1="0" y1="0" x2="1" y2="0">
<stop offset="0" stop-color="#c2432f"/>
<stop offset="0.45" stop-color="#e8563d"/>
<stop offset="1" stop-color="#a8351f"/>
</linearGradient>
</defs>

<rect x="0" y="0" width="800" height="830" fill="url(#japan-sky)"/>
<circle cx="600" cy="196" r="168" fill="url(#japan-sun)"/>
<circle cx="600" cy="196" r="56" fill="#fff2cd" opacity="0.75"/>
<circle cx="600" cy="196" r="38" fill="#fff8e4" opacity="0.8"/>
<path d="M52 118 q38 -24 82 -6 q34 -16 62 8 q30 6 20 24 l-186 4 q-18 -14 22 -30 z" fill="#fff1de" opacity="0.55"/>
<path d="M430 92 q34 -20 72 -4 q30 -14 56 8 q26 6 16 22 l-166 2 q-14 -12 22 -28 z" fill="#fff1de" opacity="0.45"/>
<path d="M636 132 q26 -16 56 -2 q24 -10 44 6 q20 6 12 18 l-130 2 q-10 -10 18 -24 z" fill="#fff3e6" opacity="0.4"/>
<ellipse cx="220" cy="180" rx="140" ry="9" fill="#ffe6d6" opacity="0.35"/>
<ellipse cx="500" cy="214" rx="170" ry="8" fill="#ffe6d6" opacity="0.3"/>
<ellipse cx="140" cy="238" rx="120" ry="7" fill="#ffdfd2" opacity="0.3"/>
<ellipse cx="620" cy="256" rx="150" ry="7" fill="#ffdfd2" opacity="0.26"/>

<rect x="0" y="300" width="146" height="62" fill="#d79fb2"/>
<rect x="0" y="292" width="146" height="10" fill="#c98da3"/>
<rect x="132" y="314" width="132" height="48" fill="#cf94a9"/>
<path d="M236 300 L302 268 L368 300 L368 362 L236 362 Z" fill="#e3bfc6"/>
<path d="M228 302 L302 262 L376 302 L302 282 Z" fill="#c98da3"/>
<rect x="196" y="316" width="52" height="46" fill="#e8c6ca"/>
<rect x="352" y="308" width="118" height="54" fill="#cb90a6"/>
<path d="M462 260 L506 240 L550 260 L550 362 L462 362 Z" fill="#d296ac"/>
<path d="M452 262 L506 234 L560 262 L506 250 Z" fill="#bd7f98"/>
<path d="M458 290 L554 290 L546 302 L466 302 Z" fill="#bd7f98"/>
<rect x="540" y="314" width="150" height="48" fill="#d19aae"/>
<rect x="694" y="238" width="42" height="124" fill="#c98da5"/>
<rect x="712" y="206" width="4" height="34" fill="#c98da5"/>
<rect x="0" y="352" width="800" height="14" fill="#c98ba1" opacity="0.55"/>
<rect x="18" y="316" width="10" height="12" fill="#ffe1c2" opacity="0.5"/>
<rect x="42" y="316" width="10" height="12" fill="#ffe1c2" opacity="0.35"/>
<rect x="66" y="316" width="10" height="12" fill="#ffe1c2" opacity="0.5"/>
<rect x="96" y="330" width="10" height="12" fill="#ffe1c2" opacity="0.4"/>
<rect x="150" y="330" width="10" height="12" fill="#ffe1c2" opacity="0.45"/>
<rect x="176" y="330" width="10" height="12" fill="#ffe1c2" opacity="0.3"/>
<rect x="210" y="330" width="10" height="12" fill="#ffe1c2" opacity="0.5"/>
<rect x="262" y="322" width="10" height="12" fill="#ffe1c2" opacity="0.45"/>
<rect x="290" y="322" width="10" height="12" fill="#ffe1c2" opacity="0.35"/>
<rect x="318" y="322" width="10" height="12" fill="#ffe1c2" opacity="0.5"/>
<rect x="376" y="324" width="10" height="12" fill="#ffe1c2" opacity="0.4"/>
<rect x="404" y="324" width="10" height="12" fill="#ffe1c2" opacity="0.5"/>
<rect x="432" y="324" width="10" height="12" fill="#ffe1c2" opacity="0.3"/>
<rect x="480" y="316" width="10" height="14" fill="#ffe1c2" opacity="0.45"/>
<rect x="518" y="316" width="10" height="14" fill="#ffe1c2" opacity="0.35"/>
<rect x="566" y="330" width="10" height="12" fill="#ffe1c2" opacity="0.45"/>
<rect x="606" y="330" width="10" height="12" fill="#ffe1c2" opacity="0.35"/>
<rect x="650" y="330" width="10" height="12" fill="#ffe1c2" opacity="0.5"/>
<rect x="706" y="258" width="8" height="12" fill="#ffe1c2" opacity="0.4"/>
<rect x="706" y="292" width="8" height="12" fill="#ffe1c2" opacity="0.4"/>

<path d="M744 800 C734 704 752 622 742 546 C734 476 754 414 770 356 L800 348 L800 800 Z" fill="#6d4630"/>
<path d="M770 356 C754 414 734 476 742 546 C750 618 738 706 748 800 L764 800 C754 706 764 620 758 548 C752 478 770 416 786 358 Z" fill="#86593d"/>
<path d="M756 404 C700 376 638 356 560 340" stroke="#6d4630" stroke-width="15" fill="none" stroke-linecap="round"/>
<path d="M752 364 C688 322 618 292 538 272" stroke="#6d4630" stroke-width="12" fill="none" stroke-linecap="round"/>
<path d="M760 456 C714 434 668 428 616 432" stroke="#6d4630" stroke-width="10" fill="none" stroke-linecap="round"/>
<path d="M754 326 C698 268 638 232 566 212" stroke="#734b33" stroke-width="9" fill="none" stroke-linecap="round"/>
<path d="M640 348 C614 322 596 300 590 274" stroke="#734b33" stroke-width="6" fill="none" stroke-linecap="round"/>
<path d="M690 372 C672 350 660 330 658 306" stroke="#734b33" stroke-width="5" fill="none" stroke-linecap="round"/>
<path d="M604 300 C580 288 560 282 540 284" stroke="#734b33" stroke-width="4" fill="none" stroke-linecap="round"/>
<path d="M700 440 C676 430 656 428 636 432" stroke="#734b33" stroke-width="4" fill="none" stroke-linecap="round"/>
<ellipse cx="742" cy="204" rx="76" ry="56" fill="#ff9ec2"/>
<ellipse cx="664" cy="230" rx="72" ry="52" fill="#ff9ec2"/>
<ellipse cx="586" cy="252" rx="64" ry="46" fill="#ff9ec2"/>
<ellipse cx="516" cy="284" rx="56" ry="40" fill="#ff9ec2"/>
<ellipse cx="700" cy="290" rx="70" ry="48" fill="#ff9ec2"/>
<ellipse cx="620" cy="322" rx="58" ry="38" fill="#ff9ec2"/>
<ellipse cx="770" cy="292" rx="52" ry="42" fill="#ff9ec2"/>
<ellipse cx="466" cy="316" rx="44" ry="30" fill="#ff9ec2"/>
<ellipse cx="748" cy="192" rx="62" ry="44" fill="#ffb2ce"/>
<ellipse cx="668" cy="220" rx="58" ry="40" fill="#ffb2ce"/>
<ellipse cx="590" cy="244" rx="50" ry="34" fill="#ffb2ce"/>
<ellipse cx="522" cy="276" rx="44" ry="30" fill="#ffb2ce"/>
<ellipse cx="706" cy="282" rx="54" ry="34" fill="#ffb2ce"/>
<ellipse cx="626" cy="314" rx="44" ry="28" fill="#ffb2ce"/>
<ellipse cx="774" cy="284" rx="40" ry="30" fill="#ffb2ce"/>
<ellipse cx="470" cy="310" rx="34" ry="22" fill="#ffb2ce"/>
<ellipse cx="758" cy="176" rx="40" ry="26" fill="#ffc9de"/>
<ellipse cx="682" cy="204" rx="36" ry="24" fill="#ffc9de"/>
<ellipse cx="602" cy="230" rx="30" ry="20" fill="#ffc9de"/>
<ellipse cx="534" cy="264" rx="26" ry="17" fill="#ffc9de"/>
<ellipse cx="718" cy="268" rx="32" ry="20" fill="#ffc9de"/>
<ellipse cx="636" cy="302" rx="26" ry="16" fill="#ffc9de"/>
<ellipse cx="782" cy="272" rx="26" ry="18" fill="#ffc9de"/>
<circle cx="722" cy="168" r="7" fill="#fff0f6"/>
<circle cx="700" cy="196" r="6" fill="#fff0f6"/>
<circle cx="762" cy="216" r="6" fill="#fff0f6"/>
<circle cx="646" cy="212" r="7" fill="#fff0f6"/>
<circle cx="612" cy="256" r="6" fill="#fff0f6"/>
<circle cx="560" cy="240" r="5" fill="#fff0f6"/>
<circle cx="504" cy="292" r="6" fill="#fff0f6"/>
<circle cx="676" cy="292" r="7" fill="#fff0f6"/>
<circle cx="736" cy="300" r="6" fill="#fff0f6"/>
<circle cx="596" cy="330" r="5" fill="#fff0f6"/>
<circle cx="782" cy="238" r="6" fill="#fff0f6"/>
<circle cx="452" cy="320" r="5" fill="#fff0f6"/>

<rect x="424" y="320" width="376" height="470" fill="#eeddc2"/>
<rect x="424" y="320" width="34" height="470" fill="#d6bb9d" opacity="0.8"/>
<rect x="424" y="320" width="376" height="10" fill="#c9ab8b"/>
<rect x="424" y="392" width="376" height="3" fill="#dcc4a6" opacity="0.7"/>
<rect x="424" y="452" width="376" height="3" fill="#dcc4a6" opacity="0.7"/>
<rect x="424" y="512" width="376" height="3" fill="#dcc4a6" opacity="0.7"/>
<rect x="424" y="572" width="376" height="3" fill="#dcc4a6" opacity="0.7"/>
<rect x="424" y="632" width="376" height="3" fill="#dcc4a6" opacity="0.7"/>
<rect x="424" y="692" width="376" height="3" fill="#dcc4a6" opacity="0.7"/>
<rect x="424" y="752" width="376" height="3" fill="#dcc4a6" opacity="0.7"/>
<rect x="592" y="348" width="84" height="78" fill="#8a5a3b"/>
<rect x="598" y="354" width="72" height="66" fill="#7fa8b6"/>
<rect x="598" y="354" width="34" height="30" fill="#a3c6d0" opacity="0.8"/>
<rect x="632" y="354" width="5" height="66" fill="#8a5a3b"/>
<rect x="598" y="384" width="72" height="5" fill="#8a5a3b"/>
<rect x="586" y="424" width="96" height="9" fill="#b07a4e"/>
<rect x="700" y="352" width="74" height="56" rx="5" fill="#cfd8d6"/>
<rect x="700" y="352" width="74" height="12" rx="5" fill="#e3ebe8"/>
<rect x="708" y="372" width="58" height="4" fill="#a8b4b2"/>
<rect x="708" y="382" width="58" height="4" fill="#a8b4b2"/>
<rect x="708" y="392" width="58" height="4" fill="#a8b4b2"/>
<rect x="704" y="408" width="66" height="7" fill="#8f9b99"/>
<rect x="690" y="466" width="104" height="6" fill="#6f8b93"/>
<rect x="690" y="496" width="104" height="6" fill="#6f8b93"/>
<rect x="694" y="466" width="5" height="40" fill="#6f8b93"/>
<rect x="716" y="466" width="5" height="40" fill="#6f8b93"/>
<rect x="738" y="466" width="5" height="40" fill="#6f8b93"/>
<rect x="760" y="466" width="5" height="40" fill="#6f8b93"/>
<rect x="782" y="466" width="5" height="40" fill="#6f8b93"/>
<path d="M700 470 L740 470 L744 512 L698 512 Z" fill="#f6ecd8"/>
<path d="M700 470 L740 470 L741 484 L699 484 Z" fill="#ffffff" opacity="0.55"/>
<path d="M726 534 C746 508 778 512 782 534 C786 558 754 572 734 560" stroke="#8a5cf0" stroke-width="9" fill="none" stroke-linecap="round" opacity="0.85"/>
<path d="M728 578 C746 562 772 566 780 582" stroke="#3f6472" stroke-width="7" fill="none" stroke-linecap="round" opacity="0.8"/>
<path d="M724 594 L758 588" stroke="#f2c14e" stroke-width="6" fill="none" stroke-linecap="round" opacity="0.8"/>
<path d="M726 606 L750 600 L746 622 L724 626 Z" fill="#d9503c" opacity="0.6"/>

<rect x="428" y="374" width="126" height="164" fill="#f0e3cd"/>
<rect x="432" y="378" width="118" height="156" fill="#fdf5e6"/>
<rect x="440" y="386" width="102" height="144" fill="#f7ead6"/>
<rect x="440" y="386" width="102" height="12" fill="#e6d6bd"/>
<rect x="440" y="514" width="102" height="4" fill="#cdbca4"/>

<g data-obj="purple-heart" transform="translate(461 410)">
<path d="M30 58.5 C7.9 42.7 0 29.2 0 18.2 C0 7.1 9.5 0 17.4 0 C23.7 0 28.4 4 30 8.7 C31.6 4 36.3 0 42.7 0 C50.6 0 60 7.1 60 18.2 C60 29.2 52.1 42.7 30 58.5 Z" fill="#7d5f9e"/>
<path d="M30 58.5 C45.8 47.4 53.7 34.8 55.3 23.7 C56.9 12.6 52.1 4.7 44.2 1.6 C50.6 0 60 7.1 60 18.2 C60 29.2 52.1 42.7 30 58.5 Z" fill="#5f4a7c"/>
<path d="M17.4 3.2 C10.3 3.2 4 9.5 4 18.2 C4 25.3 7.1 33.2 14.2 41.9 C7.9 31.6 6.3 23.7 7.9 17.4 C9.5 9.5 13.4 4.7 17.4 3.2 Z" fill="#9c85bb"/>
<ellipse cx="15.8" cy="14.2" rx="4.7" ry="3.2" fill="#c9bcda" opacity="0.85" transform="rotate(-35 15.8 14.2)"/>
</g>

<circle cx="452" cy="502" r="6" fill="#4a3a5c"/>
<path d="M446 508 C446 502 458 502 458 508 L459 518 L445 518 Z" fill="#4a3a5c"/>
<circle cx="470" cy="498" r="6" fill="#4a3a5c"/>
<path d="M464 504 C464 498 476 498 476 504 L477 518 L463 518 Z" fill="#4a3a5c"/>
<circle cx="488" cy="494" r="7" fill="#4a3a5c"/>
<path d="M481 501 C481 494 495 494 495 501 L496 518 L480 518 Z" fill="#4a3a5c"/>
<circle cx="506" cy="497" r="6" fill="#4a3a5c"/>
<path d="M500 503 C500 497 512 497 512 503 L513 518 L499 518 Z" fill="#4a3a5c"/>
<circle cx="523" cy="500" r="6" fill="#4a3a5c"/>
<path d="M517 506 C517 500 529 500 529 506 L530 518 L516 518 Z" fill="#4a3a5c"/>
<circle cx="537" cy="504" r="5" fill="#4a3a5c"/>
<path d="M532 509 C532 504 542 504 542 509 L543 518 L531 518 Z" fill="#4a3a5c"/>
<text x="491" y="529" font-family="sans-serif" font-size="9" letter-spacing="2" text-anchor="middle" fill="#7b4fbf">BORAHAE</text>
<rect x="420" y="368" width="26" height="12" fill="#e6d3b4" opacity="0.85" transform="rotate(-18 433 374)"/>
<rect x="538" y="366" width="26" height="12" fill="#e6d3b4" opacity="0.85" transform="rotate(14 551 372)"/>
<path d="M578 360 C560 366 542 376 528 390 C522 396 518 400 516 404" stroke="#6d4630" stroke-width="8" fill="none" stroke-linecap="round"/>
<path d="M540 384 C534 372 532 362 534 352" stroke="#734b33" stroke-width="5" fill="none" stroke-linecap="round"/>
<ellipse cx="560" cy="374" rx="26" ry="19" fill="#ff9ec2"/>
<ellipse cx="534" cy="388" rx="23" ry="17" fill="#ff9ec2"/>
<ellipse cx="510" cy="400" rx="17" ry="13" fill="#ff9ec2"/>
<ellipse cx="498" cy="382" rx="16" ry="12" fill="#ff9ec2"/>
<ellipse cx="564" cy="368" rx="19" ry="13" fill="#ffb2ce"/>
<ellipse cx="538" cy="382" rx="17" ry="12" fill="#ffb2ce"/>
<ellipse cx="513" cy="395" rx="12" ry="9" fill="#ffb2ce"/>
<ellipse cx="501" cy="377" rx="11" ry="8" fill="#ffb2ce"/>
<ellipse cx="568" cy="363" rx="11" ry="7" fill="#ffc9de"/>
<ellipse cx="542" cy="377" rx="10" ry="6" fill="#ffc9de"/>
<circle cx="552" cy="382" r="4" fill="#fff0f6"/>
<circle cx="524" cy="393" r="4" fill="#fff0f6"/>
<circle cx="505" cy="386" r="3.5" fill="#fff0f6"/>

<rect x="466" y="782" width="200" height="16" fill="#3a2f2b" opacity="0.25"/>
<rect x="470" y="560" width="192" height="230" rx="7" fill="#e6eef0"/>
<rect x="632" y="560" width="30" height="230" fill="#c3d4d9"/>
<rect x="470" y="560" width="14" height="230" fill="#f4f9fa"/>
<rect x="470" y="560" width="192" height="36" rx="7" fill="#d9433a"/>
<rect x="470" y="588" width="192" height="8" fill="#a8301f"/>
<rect x="484" y="568" width="66" height="12" rx="6" fill="#fdf0d8" opacity="0.9"/>
<rect x="482" y="606" width="112" height="130" rx="4" fill="#5f93a8"/>
<rect x="482" y="606" width="112" height="130" rx="4" fill="#7fb0c4" opacity="0.6"/>
<path d="M486 610 L520 610 L496 732 L486 732 Z" fill="#ffffff" opacity="0.22"/>
<rect x="482" y="648" width="112" height="5" fill="#3f6472"/>
<rect x="482" y="690" width="112" height="5" fill="#3f6472"/>
<rect x="490" y="614" width="16" height="30" rx="5" fill="#e8563d"/>
<rect x="492" y="610" width="12" height="6" rx="2" fill="#f2c14e"/>
<rect x="514" y="614" width="16" height="30" rx="5" fill="#f2c14e"/>
<rect x="516" y="610" width="12" height="6" rx="2" fill="#d9503c"/>
<rect x="538" y="614" width="16" height="30" rx="5" fill="#6b9c56"/>
<rect x="540" y="610" width="12" height="6" rx="2" fill="#f6ecd8"/>
<rect x="562" y="614" width="16" height="30" rx="5" fill="#7fa8b6"/>
<rect x="564" y="610" width="12" height="6" rx="2" fill="#f2c14e"/>
<rect x="490" y="656" width="16" height="30" rx="5" fill="#f2c14e"/>
<rect x="492" y="652" width="12" height="6" rx="2" fill="#e8563d"/>
<rect x="514" y="656" width="16" height="30" rx="5" fill="#7ea84f"/>
<rect x="516" y="652" width="12" height="6" rx="2" fill="#f6ecd8"/>
<rect x="538" y="656" width="16" height="30" rx="5" fill="#e8563d"/>
<rect x="540" y="652" width="12" height="6" rx="2" fill="#f2c14e"/>
<rect x="562" y="656" width="16" height="30" rx="5" fill="#c99cb0"/>
<rect x="564" y="652" width="12" height="6" rx="2" fill="#f6ecd8"/>
<rect x="490" y="698" width="16" height="30" rx="5" fill="#7fa8b6"/>
<rect x="514" y="698" width="16" height="30" rx="5" fill="#e8563d"/>
<rect x="538" y="698" width="16" height="30" rx="5" fill="#f2c14e"/>
<rect x="562" y="698" width="16" height="30" rx="5" fill="#6b9c56"/>
<rect x="604" y="606" width="46" height="130" rx="4" fill="#f4f9fa"/>
<rect x="610" y="614" width="34" height="20" rx="3" fill="#3f6472"/>
<circle cx="618" cy="648" r="6" fill="#d9503c"/>
<circle cx="636" cy="648" r="6" fill="#d9503c"/>
<circle cx="618" cy="668" r="6" fill="#d9503c"/>
<circle cx="636" cy="668" r="6" fill="#d9503c"/>
<circle cx="618" cy="688" r="6" fill="#d9503c"/>
<circle cx="636" cy="688" r="6" fill="#d9503c"/>
<rect x="612" y="706" width="30" height="6" rx="3" fill="#a8b4b2"/>
<rect x="614" y="720" width="26" height="10" rx="2" fill="#8f9b99"/>
<rect x="482" y="744" width="112" height="34" rx="4" fill="#44585e"/>
<rect x="482" y="744" width="112" height="10" rx="4" fill="#2f4046"/>
<rect x="470" y="778" width="192" height="12" fill="#b8c8cc"/>
<ellipse cx="566" cy="800" rx="126" ry="20" fill="#cfe6ee" opacity="0.22"/>

<g data-obj="daruma" transform="translate(566 468)">
<ellipse cx="44" cy="90" rx="40" ry="7" fill="#5c4a45" opacity="0.28"/>
<path d="M44 92 C14 92 2 72 2 50 C2 22 20 2 44 2 C68 2 86 22 86 50 C86 72 74 92 44 92 Z" fill="#d9433a"/>
<path d="M44 2 C62 2 76 18 78 40 C80 62 70 84 56 90 C68 78 72 60 70 44 C68 24 58 8 44 2 Z" fill="#ea6450"/>
<path d="M44 92 C14 92 2 72 2 50 C2 34 8 20 18 10 C12 24 10 40 12 54 C15 74 28 88 44 92 Z" fill="#a8301f"/>
<path d="M8 66 C20 76 68 76 80 66 L79 74 C66 83 22 83 9 74 Z" fill="#f2c14e" opacity="0.85"/>
<ellipse cx="44" cy="46" rx="26" ry="26" fill="#fdf0d8"/>
<ellipse cx="52" cy="46" rx="18" ry="24" fill="#fff8e8" opacity="0.7"/>
<path d="M24 36 C28 27 40 27 43 36 C38 31 29 31 24 36 Z" fill="#3a2c26"/>
<path d="M64 36 C60 27 48 27 45 36 C50 31 59 31 64 36 Z" fill="#3a2c26"/>
<circle cx="34" cy="45" r="6" fill="#3a2c26"/>
<circle cx="54" cy="45" r="6" fill="none" stroke="#3a2c26" stroke-width="2"/>
<path d="M30 56 C36 63 52 63 58 56 C52 69 36 69 30 56 Z" fill="#3a2c26"/>
<circle cx="16" cy="26" r="4" fill="#f2c14e" opacity="0.8"/>
<circle cx="72" cy="26" r="4" fill="#f2c14e" opacity="0.8"/>
</g>

<rect x="0" y="340" width="426" height="450" fill="#f7e6cc"/>
<rect x="382" y="340" width="44" height="450" fill="#e0c3a5" opacity="0.85"/>
<rect x="0" y="340" width="426" height="10" fill="#d8bb9a"/>
<rect x="0" y="356" width="426" height="3" fill="#e8d2b4" opacity="0.7"/>
<rect x="0" y="454" width="426" height="3" fill="#e8d2b4" opacity="0.7"/>
<rect x="46" y="372" width="80" height="78" fill="#8a5a3b"/>
<rect x="52" y="378" width="68" height="66" fill="#7fa8b6"/>
<rect x="52" y="378" width="32" height="30" fill="#a3c6d0" opacity="0.85"/>
<rect x="84" y="378" width="5" height="66" fill="#8a5a3b"/>
<rect x="52" y="408" width="68" height="5" fill="#8a5a3b"/>
<rect x="40" y="448" width="92" height="9" fill="#b07a4e"/>
<rect x="170" y="372" width="80" height="78" fill="#8a5a3b"/>
<rect x="176" y="378" width="68" height="66" fill="#7fa8b6"/>
<rect x="176" y="378" width="32" height="30" fill="#a3c6d0" opacity="0.85"/>
<rect x="208" y="378" width="5" height="66" fill="#8a5a3b"/>
<rect x="176" y="408" width="68" height="5" fill="#8a5a3b"/>
<rect x="164" y="448" width="92" height="9" fill="#b07a4e"/>
<rect x="294" y="372" width="80" height="78" fill="#8a5a3b"/>
<rect x="300" y="378" width="68" height="66" fill="#f0a35d"/>
<rect x="300" y="378" width="32" height="30" fill="#ffc98d" opacity="0.85"/>
<rect x="332" y="378" width="5" height="66" fill="#8a5a3b"/>
<rect x="300" y="408" width="68" height="5" fill="#8a5a3b"/>
<rect x="288" y="448" width="92" height="9" fill="#b07a4e"/>
<path d="M6 470 L436 462 L444 522 L0 530 Z" fill="#3f6472"/>
<path d="M6 470 L436 462 L438 482 L6 490 Z" fill="#5b8698"/>
<rect x="0" y="456" width="446" height="16" rx="7" fill="#2c4a55"/>
<rect x="20" y="470" width="4" height="58" fill="#2f545f" opacity="0.6"/>
<rect x="52" y="469" width="4" height="58" fill="#2f545f" opacity="0.6"/>
<rect x="84" y="469" width="4" height="58" fill="#2f545f" opacity="0.6"/>
<rect x="116" y="468" width="4" height="58" fill="#2f545f" opacity="0.6"/>
<rect x="148" y="468" width="4" height="58" fill="#2f545f" opacity="0.6"/>
<rect x="180" y="467" width="4" height="58" fill="#2f545f" opacity="0.6"/>
<rect x="212" y="467" width="4" height="58" fill="#2f545f" opacity="0.6"/>
<rect x="244" y="466" width="4" height="58" fill="#2f545f" opacity="0.6"/>
<rect x="276" y="466" width="4" height="58" fill="#2f545f" opacity="0.6"/>
<rect x="308" y="465" width="4" height="58" fill="#2f545f" opacity="0.6"/>
<rect x="340" y="465" width="4" height="58" fill="#2f545f" opacity="0.6"/>
<rect x="372" y="464" width="4" height="58" fill="#2f545f" opacity="0.6"/>
<rect x="404" y="464" width="4" height="58" fill="#2f545f" opacity="0.6"/>
<rect x="8" y="528" width="428" height="24" fill="#c19a79" opacity="0.6"/>
<rect x="0" y="548" width="426" height="242" fill="#f0dcbf"/>
<rect x="16" y="548" width="20" height="242" fill="#8a5a3b"/>
<rect x="16" y="548" width="7" height="242" fill="#a67c52"/>
<rect x="128" y="552" width="16" height="238" fill="#8a5a3b"/>
<rect x="128" y="552" width="6" height="238" fill="#a67c52"/>
<rect x="390" y="548" width="26" height="242" fill="#8a5a3b"/>
<rect x="390" y="548" width="9" height="242" fill="#a67c52"/>
<rect x="416" y="548" width="10" height="242" fill="#6b4229"/>
<rect x="44" y="566" width="78" height="158" rx="4" fill="#8a5a3b"/>
<rect x="50" y="572" width="66" height="146" rx="3" fill="#f6ecd8"/>
<rect x="50" y="572" width="66" height="18" fill="#e8dcc4"/>
<rect x="74" y="596" width="20" height="6" fill="#3f3230"/>
<rect x="66" y="610" width="36" height="6" fill="#3f3230"/>
<rect x="78" y="622" width="12" height="20" fill="#3f3230"/>
<rect x="68" y="652" width="32" height="6" fill="#c2432f"/>
<rect x="72" y="663" width="24" height="5" fill="#c2432f"/>
<rect x="68" y="676" width="32" height="6" fill="#c2432f"/>
<rect x="81" y="656" width="6" height="24" fill="#c2432f"/>
<rect x="66" y="696" width="36" height="6" fill="#3f3230"/>
<rect x="150" y="654" width="238" height="134" fill="#3a2830"/>
<ellipse cx="268" cy="716" rx="110" ry="62" fill="#7a4a3a" opacity="0.7"/>
<ellipse cx="268" cy="726" rx="82" ry="44" fill="#b56b3e" opacity="0.55"/>
<rect x="150" y="742" width="238" height="10" fill="#8a5a3b" opacity="0.7"/>
<rect x="182" y="700" width="16" height="42" fill="#2a1e24"/>
<rect x="174" y="694" width="32" height="10" rx="4" fill="#2a1e24"/>
<rect x="232" y="704" width="16" height="38" fill="#2a1e24"/>
<rect x="224" y="698" width="32" height="10" rx="4" fill="#2a1e24"/>
<circle cx="330" cy="686" r="10" fill="#ffcf8f" opacity="0.85"/>
<rect x="329" y="654" width="2" height="24" fill="#2a1e24"/>
<circle cx="200" cy="676" r="8" fill="#ffcf8f" opacity="0.7"/>
<rect x="199" y="654" width="2" height="16" fill="#2a1e24"/>
<path d="M296 690 C300 676 292 668 298 656" stroke="#f6ecd8" stroke-width="3" fill="none" opacity="0.35"/>
<path d="M312 694 C316 682 308 674 314 662" stroke="#f6ecd8" stroke-width="3" fill="none" opacity="0.3"/>

<rect x="690" y="290" width="24" height="500" fill="#7a6350"/>
<rect x="690" y="290" width="8" height="500" fill="#98826c"/>
<rect x="710" y="290" width="4" height="500" fill="#5f4c3d"/>
<rect x="652" y="318" width="100" height="11" rx="3" fill="#6b5644"/>
<rect x="652" y="318" width="100" height="4" rx="2" fill="#86705b"/>
<rect x="658" y="356" width="88" height="10" rx="3" fill="#6b5644"/>
<rect x="658" y="356" width="88" height="4" rx="2" fill="#86705b"/>
<rect x="660" y="310" width="7" height="10" rx="2" fill="#3f6472"/>
<rect x="684" y="310" width="7" height="10" rx="2" fill="#3f6472"/>
<rect x="716" y="310" width="7" height="10" rx="2" fill="#3f6472"/>
<rect x="740" y="310" width="7" height="10" rx="2" fill="#3f6472"/>
<rect x="666" y="348" width="7" height="10" rx="2" fill="#3f6472"/>
<rect x="732" y="348" width="7" height="10" rx="2" fill="#3f6472"/>
<rect x="716" y="384" width="32" height="50" rx="10" fill="#93a1a6"/>
<rect x="716" y="384" width="12" height="50" rx="6" fill="#b3c0c4"/>
<rect x="714" y="380" width="36" height="7" rx="3" fill="#6f7d82"/>
<rect x="688" y="470" width="28" height="6" fill="#5f4c3d"/>
<rect x="688" y="560" width="28" height="6" fill="#5f4c3d"/>
<rect x="688" y="650" width="28" height="6" fill="#5f4c3d"/>
<rect x="684" y="496" width="36" height="46" rx="3" fill="#f6ecd8"/>
<rect x="690" y="504" width="24" height="5" fill="#3f6472"/>
<rect x="690" y="516" width="24" height="5" fill="#d9503c"/>
<rect x="690" y="528" width="16" height="5" fill="#3f6472"/>

<path d="M704 288 Q352 392 0 300" stroke="#463a3c" stroke-width="3" fill="none"/>
<path d="M704 312 Q352 432 0 330" stroke="#463a3c" stroke-width="3" fill="none"/>
<path d="M704 336 Q352 468 0 362" stroke="#463a3c" stroke-width="2.5" fill="none"/>
<path d="M704 358 Q352 500 0 396" stroke="#463a3c" stroke-width="2.5" fill="none"/>
<path d="M714 300 Q762 314 800 296" stroke="#463a3c" stroke-width="3" fill="none"/>
<path d="M714 326 Q762 342 800 326" stroke="#463a3c" stroke-width="2.5" fill="none"/>
<path d="M714 352 Q762 372 800 356" stroke="#463a3c" stroke-width="2.5" fill="none"/>

<path d="M108 358 C114 348 128 346 134 354 L144 350 L139 358 C142 366 134 372 124 372 C114 372 108 366 108 358 Z" fill="#5a4c50"/>
<path d="M108 358 L96 352 L104 364 Z" fill="#5a4c50"/>
<circle cx="126" cy="356" r="2" fill="#fdf5e6"/>
<path d="M418 372 C424 362 438 360 444 368 L454 364 L449 372 C452 380 444 386 434 386 C424 386 418 380 418 372 Z" fill="#5a4c50"/>
<path d="M418 372 L406 366 L414 378 Z" fill="#5a4c50"/>
<circle cx="436" cy="370" r="2" fill="#fdf5e6"/>
<path d="M508 389 C514 379 528 377 534 385 L544 381 L539 389 C542 397 534 403 524 403 C514 403 508 397 508 389 Z" fill="#5a4c50"/>
<path d="M508 389 L496 383 L504 395 Z" fill="#5a4c50"/>
<circle cx="526" cy="387" r="2" fill="#fdf5e6"/>
<path d="M160 333 C166 323 180 321 186 329 L196 325 L191 333 C194 341 186 347 176 347 C166 347 160 341 160 333 Z" fill="#fdf5e6"/>
<path d="M160 333 L148 327 L156 339 Z" fill="#fdf5e6"/>
<circle cx="178" cy="331" r="2" fill="#5a4c50"/>
<path d="M590 314 C596 304 610 302 616 310 L626 306 L621 314 C624 322 616 328 606 328 C596 328 590 322 590 314 Z" fill="#fdf5e6"/>
<path d="M590 314 L578 308 L586 320 Z" fill="#fdf5e6"/>
<circle cx="608" cy="312" r="2" fill="#5a4c50"/>

<g data-obj="paper-crane" transform="translate(248 278)">
<path d="M72 38 L102 8 L108 20 L80 44 Z" fill="#eddac9"/>
<path d="M72 38 L102 8 L105 14 L76 40 Z" fill="#fff6ea"/>
<path d="M28 44 L56 30 L84 44 L58 66 Z" fill="#fff6ea"/>
<path d="M58 66 L84 44 L70 39 L55 58 Z" fill="#e3cbb8"/>
<path d="M40 38 L10 10 L20 4 L50 32 Z" fill="#fff6ea"/>
<path d="M40 38 L10 10 L14 7 L45 35 Z" fill="#e3cbb8"/>
<path d="M10 10 L0 20 L15 19 Z" fill="#f0a35d"/>
<path d="M36 38 L52 6 L64 34 Z" fill="#e3cbb8"/>
<path d="M40 40 L64 0 L88 40 Z" fill="#fffdf7"/>
<path d="M64 0 L88 40 L74 40 Z" fill="#f0dccb"/>
<path d="M64 4 L64 38" stroke="#e0c6b4" stroke-width="1.5" fill="none"/>
<path d="M34 46 L80 46" stroke="#e0c6b4" stroke-width="1.5" fill="none"/>
<circle cx="15" cy="13" r="1.8" fill="#5a4c50"/>
</g>

<path d="M800 322 C756 340 716 362 686 392 C664 414 652 432 646 450" stroke="#6d4630" stroke-width="13" fill="none" stroke-linecap="round"/>
<path d="M800 316 C762 332 724 354 696 382" stroke="#86593d" stroke-width="5" fill="none" stroke-linecap="round"/>
<path d="M722 366 C712 344 706 328 708 310" stroke="#734b33" stroke-width="6" fill="none" stroke-linecap="round"/>
<path d="M672 406 C660 392 646 384 630 382" stroke="#734b33" stroke-width="5" fill="none" stroke-linecap="round"/>
<ellipse cx="770" cy="328" rx="40" ry="28" fill="#ff9ec2"/>
<ellipse cx="712" cy="360" rx="34" ry="24" fill="#ff9ec2"/>
<ellipse cx="664" cy="410" rx="30" ry="22" fill="#ff9ec2"/>
<ellipse cx="626" cy="374" rx="24" ry="18" fill="#ff9ec2"/>
<ellipse cx="776" cy="320" rx="30" ry="20" fill="#ffb2ce"/>
<ellipse cx="718" cy="352" rx="26" ry="18" fill="#ffb2ce"/>
<ellipse cx="668" cy="402" rx="22" ry="16" fill="#ffb2ce"/>
<ellipse cx="630" cy="368" rx="18" ry="13" fill="#ffb2ce"/>
<ellipse cx="782" cy="312" rx="18" ry="12" fill="#ffc9de"/>
<ellipse cx="724" cy="344" rx="15" ry="10" fill="#ffc9de"/>
<ellipse cx="672" cy="394" rx="13" ry="9" fill="#ffc9de"/>
<circle cx="758" cy="336" r="5" fill="#fff0f6"/>
<circle cx="700" cy="368" r="5" fill="#fff0f6"/>
<circle cx="654" cy="414" r="4" fill="#fff0f6"/>
<circle cx="636" cy="380" r="4" fill="#fff0f6"/>
<ellipse cx="404" cy="196" rx="8" ry="5" fill="#ffc4dc" transform="rotate(28 404 196)" opacity="0.95"/>
<ellipse cx="352" cy="248" rx="7" ry="4" fill="#ffb2ce" transform="rotate(-18 352 248)" opacity="0.9"/>
<ellipse cx="452" cy="164" rx="7" ry="4" fill="#ffd6e6" transform="rotate(44 452 164)" opacity="0.9"/>
<ellipse cx="296" cy="214" rx="8" ry="5" fill="#ffc4dc" transform="rotate(62 296 214)" opacity="0.85"/>
<ellipse cx="500" cy="360" rx="7" ry="4" fill="#ffb2ce" transform="rotate(-34 500 360)" opacity="0.9"/>
<ellipse cx="560" cy="396" rx="8" ry="5" fill="#ffc4dc" transform="rotate(16 560 396)" opacity="0.9"/>
<ellipse cx="638" cy="382" rx="7" ry="4" fill="#ffd6e6" transform="rotate(-52 638 382)" opacity="0.85"/>
<ellipse cx="466" cy="252" rx="8" ry="5" fill="#ffb2ce" transform="rotate(8 466 252)" opacity="0.9"/>
<ellipse cx="212" cy="290" rx="7" ry="4" fill="#ffc4dc" transform="rotate(-26 212 290)" opacity="0.8"/>
<ellipse cx="150" cy="256" rx="6" ry="4" fill="#ffd6e6" transform="rotate(38 150 256)" opacity="0.8"/>
<ellipse cx="688" cy="418" rx="8" ry="5" fill="#ffc4dc" transform="rotate(-12 688 418)" opacity="0.9"/>
<ellipse cx="742" cy="470" rx="7" ry="4" fill="#ffb2ce" transform="rotate(50 742 470)" opacity="0.85"/>
<ellipse cx="604" cy="452" rx="7" ry="4" fill="#ffd6e6" transform="rotate(-40 604 452)" opacity="0.8"/>
<ellipse cx="380" cy="322" rx="7" ry="4" fill="#ffc4dc" transform="rotate(20 380 322)" opacity="0.85"/>

<path d="M22 540 Q360 626 700 528" stroke="#5a4a44" stroke-width="2.5" fill="none"/>
<circle cx="56" cy="548" r="7" fill="#ffd08a"/>
<circle cx="54" cy="546" r="3" fill="#fff5d6"/>
<circle cx="90" cy="555" r="7" fill="#ff9a6b"/>
<circle cx="88" cy="553" r="3" fill="#ffe0c4"/>
<circle cx="157" cy="567" r="7" fill="#ffd08a"/>
<circle cx="155" cy="565" r="3" fill="#fff5d6"/>
<circle cx="225" cy="575" r="7" fill="#ff9a6b"/>
<circle cx="223" cy="573" r="3" fill="#ffe0c4"/>
<circle cx="293" cy="579" r="7" fill="#ffd08a"/>
<circle cx="291" cy="577" r="3" fill="#fff5d6"/>
<circle cx="360" cy="580" r="7" fill="#ff9a6b"/>
<circle cx="358" cy="578" r="3" fill="#ffe0c4"/>
<circle cx="428" cy="577" r="7" fill="#ffd08a"/>
<circle cx="426" cy="575" r="3" fill="#fff5d6"/>
<circle cx="496" cy="570" r="7" fill="#ff9a6b"/>
<circle cx="494" cy="568" r="3" fill="#ffe0c4"/>
<circle cx="564" cy="560" r="7" fill="#ffd08a"/>
<circle cx="562" cy="558" r="3" fill="#fff5d6"/>
<circle cx="632" cy="546" r="7" fill="#ff9a6b"/>
<circle cx="630" cy="544" r="3" fill="#ffe0c4"/>
<circle cx="666" cy="537" r="7" fill="#ffd08a"/>
<circle cx="664" cy="535" r="3" fill="#fff5d6"/>

<circle cx="176" cy="608" r="86" fill="url(#japan-lanternglow)"/>
<rect x="174" y="548" width="4" height="20" fill="#3f3230"/>
<ellipse cx="176" cy="608" rx="36" ry="44" fill="url(#japan-lanternbody)"/>
<rect x="142" y="562" width="68" height="6" rx="3" fill="#3f3230"/>
<rect x="142" y="648" width="68" height="6" rx="3" fill="#3f3230"/>
<rect x="146" y="578" width="60" height="2.5" fill="#8a2b1a" opacity="0.6"/>
<rect x="141" y="596" width="70" height="2.5" fill="#8a2b1a" opacity="0.6"/>
<rect x="141" y="616" width="70" height="2.5" fill="#8a2b1a" opacity="0.6"/>
<rect x="146" y="634" width="60" height="2.5" fill="#8a2b1a" opacity="0.6"/>
<ellipse cx="164" cy="600" rx="12" ry="18" fill="#ff9a6b" opacity="0.5"/>
<path d="M170 588 L182 588 L176 604 L184 604 L166 630 L172 608 L164 608 Z" fill="#fdf0d8" opacity="0.9"/>
<rect x="172" y="654" width="8" height="14" fill="#f2c14e"/>
<circle cx="352" cy="606" r="72" fill="url(#japan-lanternglow)"/>
<rect x="350" y="548" width="4" height="18" fill="#3f3230"/>
<ellipse cx="352" cy="606" rx="30" ry="38" fill="url(#japan-lanternbody)"/>
<rect x="324" y="560" width="56" height="6" rx="3" fill="#3f3230"/>
<rect x="324" y="640" width="56" height="6" rx="3" fill="#3f3230"/>
<rect x="328" y="576" width="48" height="2.5" fill="#8a2b1a" opacity="0.6"/>
<rect x="323" y="594" width="58" height="2.5" fill="#8a2b1a" opacity="0.6"/>
<rect x="323" y="614" width="58" height="2.5" fill="#8a2b1a" opacity="0.6"/>
<rect x="328" y="630" width="48" height="2.5" fill="#8a2b1a" opacity="0.6"/>
<ellipse cx="342" cy="598" rx="10" ry="15" fill="#ff9a6b" opacity="0.5"/>
<path d="M346 586 L360 586 L352 604 L360 604 L344 626 L350 606 L342 606 Z" fill="#fdf0d8" opacity="0.9"/>
<rect x="348" y="646" width="8" height="12" fill="#f2c14e"/>

<rect x="148" y="646" width="242" height="12" rx="4" fill="#6b4229"/>
<rect x="148" y="646" width="242" height="5" rx="2" fill="#8a5a3b"/>
<path d="M152 658 L194 658 L194 736 Q173 744 152 736 Z" fill="#d9503c"/>
<path d="M152 658 L194 658 L194 676 L152 676 Z" fill="#e8563d"/>
<path d="M198 658 L240 658 L240 738 Q219 746 198 738 Z" fill="#c2432f"/>
<path d="M198 658 L240 658 L240 676 L198 676 Z" fill="#d9503c"/>
<path d="M244 658 L286 658 L286 736 Q265 744 244 736 Z" fill="#d9503c"/>
<path d="M244 658 L286 658 L286 676 L244 676 Z" fill="#e8563d"/>
<path d="M290 658 L332 658 L332 738 Q311 746 290 738 Z" fill="#c2432f"/>
<path d="M290 658 L332 658 L332 676 L290 676 Z" fill="#d9503c"/>
<path d="M336 658 L386 658 L386 736 Q361 744 336 736 Z" fill="#d9503c"/>
<path d="M336 658 L386 658 L386 676 L336 676 Z" fill="#e8563d"/>
<circle cx="173" cy="700" r="14" fill="#fdf0d8"/>
<circle cx="173" cy="700" r="7" fill="#d9503c"/>
<circle cx="265" cy="700" r="14" fill="#fdf0d8"/>
<path d="M258 694 L272 694 L265 708 Z" fill="#c2432f"/>
<circle cx="361" cy="700" r="14" fill="#fdf0d8"/>
<rect x="354" y="697" width="14" height="6" fill="#c2432f"/>
<path d="M206 698 C212 690 220 706 226 698 C231 691 236 700 236 700" stroke="#fdf0d8" stroke-width="5" fill="none" stroke-linecap="round"/>
<path d="M206 712 C212 704 220 720 226 712 C231 705 236 714 236 714" stroke="#fdf0d8" stroke-width="5" fill="none" stroke-linecap="round"/>
<path d="M312 690 C324 697 324 713 312 720 C300 713 300 697 312 690 Z" fill="#fdf0d8"/>
<path d="M312 694 L312 718" stroke="#c2432f" stroke-width="2" fill="none"/>

<rect x="0" y="780" width="800" height="420" fill="url(#japan-street)"/>
<rect x="0" y="780" width="800" height="34" fill="#9b8471"/>
<rect x="0" y="810" width="800" height="7" fill="#7a6656"/>
<rect x="0" y="866" width="800" height="3" fill="#6b5a4d" opacity="0.5"/>
<rect x="0" y="936" width="800" height="3" fill="#6b5a4d" opacity="0.45"/>
<rect x="0" y="1014" width="800" height="3" fill="#6b5a4d" opacity="0.45"/>
<rect x="0" y="1098" width="800" height="3" fill="#6b5a4d" opacity="0.4"/>
<rect x="90" y="817" width="3" height="49" fill="#6b5a4d" opacity="0.4"/>
<rect x="286" y="817" width="3" height="49" fill="#6b5a4d" opacity="0.4"/>
<rect x="482" y="817" width="3" height="49" fill="#6b5a4d" opacity="0.4"/>
<rect x="678" y="817" width="3" height="49" fill="#6b5a4d" opacity="0.4"/>
<rect x="180" y="869" width="3" height="67" fill="#6b5a4d" opacity="0.35"/>
<rect x="420" y="869" width="3" height="67" fill="#6b5a4d" opacity="0.35"/>
<rect x="640" y="869" width="3" height="67" fill="#6b5a4d" opacity="0.35"/>
<rect x="120" y="1017" width="3" height="81" fill="#6b5a4d" opacity="0.3"/>
<rect x="380" y="1017" width="3" height="81" fill="#6b5a4d" opacity="0.3"/>
<rect x="620" y="1017" width="3" height="81" fill="#6b5a4d" opacity="0.3"/>
<ellipse cx="266" cy="856" rx="230" ry="62" fill="#ffb765" opacity="0.2"/>
<ellipse cx="176" cy="840" rx="120" ry="38" fill="#ffcf8f" opacity="0.18"/>
<ellipse cx="352" cy="836" rx="96" ry="30" fill="#ffcf8f" opacity="0.15"/>
<path d="M150 800 L60 1000 L140 1000 L206 800 Z" fill="#3d3230" opacity="0.18"/>
<path d="M390 800 L330 1000 L410 1000 L440 800 Z" fill="#3d3230" opacity="0.15"/>
<path d="M470 790 L420 960 L500 960 L520 790 Z" fill="#3d3230" opacity="0.14"/>
<path d="M690 790 L640 1010 L720 1010 L740 790 Z" fill="#3d3230" opacity="0.16"/>
<ellipse cx="636" cy="1152" rx="96" ry="24" fill="#c2879f" opacity="0.3"/>
<ellipse cx="620" cy="1148" rx="46" ry="10" fill="#ffc4dc" opacity="0.28"/>
<ellipse cx="168" cy="1156" rx="48" ry="15" fill="#5c4a45"/>
<ellipse cx="168" cy="1153" rx="42" ry="12" fill="#6f5c53"/>
<ellipse cx="168" cy="1153" rx="26" ry="7" fill="#5c4a45" opacity="0.7"/>

<rect x="138" y="762" width="262" height="38" fill="#c0aa8f"/>
<rect x="138" y="762" width="262" height="10" fill="#dccdb2"/>
<rect x="138" y="792" width="262" height="8" fill="#9c8870"/>
<ellipse cx="342" cy="770" rx="33" ry="7" fill="#4a3a34" opacity="0.3"/>
<path d="M312 754 C312 744 322 736 338 734 L360 732 C370 732 375 738 375 746 L374 754 C373 762 363 768 349 769 L327 771 C317 772 312 764 312 754 Z" fill="#2c4a55"/>
<path d="M312 749 C312 739 322 731 338 729 L360 727 C370 727 375 733 375 741 L374 747 C373 754 363 759 349 760 L327 762 C317 763 312 759 312 749 Z" fill="#3f6472"/>
<path d="M318 740 C326 734 342 731 358 730" stroke="#5b8698" stroke-width="3" fill="none"/>
<ellipse cx="330" cy="744" rx="13" ry="8" fill="#1f3740" transform="rotate(-7 330 744)"/>
<ellipse cx="166" cy="776" rx="33" ry="7" fill="#4a3a34" opacity="0.3"/>
<path d="M136 760 C136 750 146 742 162 740 L184 738 C194 738 199 744 199 752 L198 760 C197 768 187 774 173 775 L151 777 C141 778 136 770 136 760 Z" fill="#8a2b1a"/>
<path d="M136 755 C136 745 146 737 162 735 L184 733 C194 733 199 739 199 747 L198 753 C197 760 187 765 173 766 L151 768 C141 769 136 765 136 755 Z" fill="#c2432f"/>
<path d="M142 746 C150 740 166 737 182 736" stroke="#e8563d" stroke-width="3" fill="none"/>
<ellipse cx="154" cy="750" rx="13" ry="8" fill="#6d1f11" transform="rotate(-7 154 750)"/>

<g data-obj="geta-sandal" transform="translate(200 726)">
<ellipse cx="52" cy="60" rx="52" ry="8" fill="#4a3a34" opacity="0.3"/>
<path d="M24 40 L44 37 L47 60 L27 63 Z" fill="#5c391f"/>
<path d="M70 33 L90 30 L93 52 L73 55 Z" fill="#5c391f"/>
<path d="M24 40 L33 39 L36 62 L27 63 Z" fill="#7c5133"/>
<path d="M70 33 L79 32 L82 54 L73 55 Z" fill="#7c5133"/>
<path d="M6 38 C6 26 18 18 34 16 L80 12 C94 11 102 18 102 28 L100 42 C99 52 88 58 72 60 L28 64 C14 65 6 58 6 48 Z" fill="#7f5a38"/>
<path d="M6 32 C6 20 18 12 34 10 L80 6 C94 5 102 12 102 22 L100 36 C99 46 88 52 72 54 L28 58 C14 59 6 52 6 42 Z" fill="#b8895c"/>
<path d="M6 30 C7 20 18 12 34 10 L80 6 C92 5 99 11 101 18 C92 12 82 11 70 12 L34 15 C20 17 9 23 6 30 Z" fill="#cfa273"/>
<path d="M14 44 C34 40 62 36 96 34" stroke="#a07850" stroke-width="2" fill="none" opacity="0.7"/>
<path d="M28 32 C46 21 66 16 90 14" stroke="#3b2f3a" stroke-width="8" fill="none" stroke-linecap="round"/>
<path d="M28 32 C46 37 66 39 92 39" stroke="#3b2f3a" stroke-width="8" fill="none" stroke-linecap="round"/>
<path d="M31 30 C44 24 58 20 72 18" stroke="#6d5a75" stroke-width="2.5" fill="none" stroke-linecap="round"/>
<path d="M31 35 C44 38 58 40 74 40" stroke="#6d5a75" stroke-width="2.5" fill="none" stroke-linecap="round"/>
<circle cx="28" cy="32" r="7" fill="#2e242f"/>
<circle cx="26" cy="30" r="2.5" fill="#7d6a85"/>
</g>

<ellipse cx="302" cy="784" rx="32" ry="7" fill="#4a3a34" opacity="0.3"/>
<path d="M272 768 C272 758 282 750 298 748 L320 746 C330 746 335 752 335 760 L334 768 C333 776 323 782 309 783 L287 785 C277 786 272 778 272 768 Z" fill="#c9b295"/>
<path d="M272 763 C272 753 282 745 298 743 L320 741 C330 741 335 747 335 755 L334 761 C333 768 323 773 309 774 L287 776 C277 777 272 773 272 763 Z" fill="#f0dcbf"/>
<path d="M278 754 C286 748 302 745 318 744" stroke="#fdf5e6" stroke-width="3" fill="none"/>
<ellipse cx="290" cy="758" rx="13" ry="8" fill="#a89076" transform="rotate(-7 290 758)"/>

<rect x="24" y="898" width="278" height="18" fill="#c9945f"/>
<rect x="24" y="916" width="278" height="152" fill="#a67c52"/>
<rect x="270" y="916" width="32" height="152" fill="#8a5a3b"/>
<rect x="24" y="916" width="278" height="8" fill="#b98a5f"/>
<rect x="24" y="946" width="278" height="7" fill="#8a5a3b" opacity="0.7"/>
<rect x="24" y="988" width="278" height="7" fill="#8a5a3b" opacity="0.7"/>
<rect x="24" y="1030" width="278" height="7" fill="#8a5a3b" opacity="0.7"/>
<rect x="60" y="916" width="8" height="152" fill="#8a5a3b" opacity="0.5"/>
<rect x="160" y="916" width="8" height="152" fill="#8a5a3b" opacity="0.5"/>
<rect x="248" y="916" width="8" height="152" fill="#8a5a3b" opacity="0.5"/>
<path d="M32 898 C22 898 18 884 22 868 C26 850 40 838 56 838 C72 838 84 850 86 868 C88 886 80 898 66 898 Z" fill="#a67c52"/>
<circle cx="52" cy="836" r="20" fill="#b98a5f"/>
<path d="M36 822 L30 808 L46 818 Z" fill="#b98a5f"/>
<path d="M68 822 L74 808 L58 818 Z" fill="#b98a5f"/>
<circle cx="45" cy="836" r="4" fill="#3a2c26"/>
<circle cx="60" cy="836" r="4" fill="#3a2c26"/>
<ellipse cx="52" cy="846" rx="5" ry="3" fill="#3a2c26"/>
<ellipse cx="52" cy="874" rx="22" ry="16" fill="#e0c3a5"/>

<g data-obj="maneki-neko" transform="translate(92 788)">
<ellipse cx="48" cy="108" rx="44" ry="8" fill="#5c4a45" opacity="0.3"/>
<path d="M48 110 C18 110 8 94 8 74 C8 54 20 40 48 40 C76 40 88 54 88 74 C88 94 78 110 48 110 Z" fill="#fffaf2"/>
<path d="M62 42 C80 48 88 60 88 74 C88 94 78 110 48 110 C66 102 74 88 74 72 C74 58 70 46 62 42 Z" fill="#ecdfd0"/>
<path d="M22 12 L14 -2 L36 8 Z" fill="#fffaf2"/>
<path d="M74 12 L82 -2 L60 8 Z" fill="#fffaf2"/>
<path d="M24 11 L20 4 L32 10 Z" fill="#f2b6c4"/>
<path d="M72 11 L76 4 L64 10 Z" fill="#f2b6c4"/>
<circle cx="48" cy="34" r="31" fill="#fffaf2"/>
<path d="M64 8 C77 15 79 26 79 34 C79 49 66 62 48 65 C63 58 69 46 69 34 C69 23 68 13 64 8 Z" fill="#ecdfd0"/>
<path d="M20 12 C28 6 38 6 42 12 C34 8 26 8 20 12 Z" fill="#f0a35d"/>
<path d="M70 46 C78 44 84 48 84 54 C78 50 74 48 70 46 Z" fill="#f0a35d"/>
<path d="M32 30 C36 24 44 24 47 30 C42 27 37 27 32 30 Z" fill="#3a2c26"/>
<path d="M64 30 C60 24 52 24 49 30 C54 27 59 27 64 30 Z" fill="#3a2c26"/>
<circle cx="38" cy="35" r="4" fill="#3a2c26"/>
<circle cx="58" cy="35" r="4" fill="#3a2c26"/>
<circle cx="39.5" cy="33.5" r="1.5" fill="#ffffff"/>
<circle cx="59.5" cy="33.5" r="1.5" fill="#ffffff"/>
<path d="M44 44 L52 44 L48 49 Z" fill="#e07a8a"/>
<path d="M48 49 C44 54 38 53 36 49" stroke="#3a2c26" stroke-width="1.8" fill="none"/>
<path d="M48 49 C52 54 58 53 60 49" stroke="#3a2c26" stroke-width="1.8" fill="none"/>
<path d="M14 40 L32 44" stroke="#c9b6a4" stroke-width="1.5" fill="none"/>
<path d="M14 50 L32 50" stroke="#c9b6a4" stroke-width="1.5" fill="none"/>
<path d="M82 40 L64 44" stroke="#c9b6a4" stroke-width="1.5" fill="none"/>
<path d="M82 50 L64 50" stroke="#c9b6a4" stroke-width="1.5" fill="none"/>
<ellipse cx="10" cy="54" rx="12" ry="17" fill="#fffaf2" transform="rotate(-22 10 54)"/>
<ellipse cx="10" cy="54" rx="7" ry="11" fill="#f6ecdc" transform="rotate(-22 10 54)"/>
<ellipse cx="80" cy="90" rx="11" ry="9" fill="#fffaf2"/>
<path d="M22 64 C33 73 63 73 74 64 L74 73 C63 82 33 82 22 73 Z" fill="#d9503c"/>
<circle cx="48" cy="78" r="8" fill="#f2c14e"/>
<circle cx="48" cy="78" r="3.5" fill="#b8862c"/>
<ellipse cx="50" cy="94" rx="23" ry="13" fill="#f2c14e"/>
<ellipse cx="50" cy="92" rx="19" ry="10" fill="#ffd873"/>
<rect x="40" y="88" width="20" height="3" rx="1.5" fill="#b8862c"/>
<rect x="45" y="95" width="11" height="3" rx="1.5" fill="#b8862c"/>
</g>

<path d="M196 898 C190 898 188 886 190 874 C192 860 200 852 212 852 C224 852 232 860 234 874 C236 888 230 898 220 898 Z" fill="#f0dcbf"/>
<circle cx="212" cy="846" r="16" fill="#fdf5e6"/>
<path d="M200 838 C204 830 220 830 224 838 Z" fill="#3f3230"/>
<circle cx="206" cy="846" r="2.5" fill="#3a2c26"/>
<circle cx="218" cy="846" r="2.5" fill="#3a2c26"/>
<path d="M194 876 C204 884 220 884 230 876" stroke="#d9503c" stroke-width="5" fill="none"/>
<path d="M248 898 C242 898 238 888 240 876 C242 862 252 852 266 852 C280 852 288 862 288 876 C288 890 280 898 270 898 Z" fill="#7fa8b6"/>
<circle cx="264" cy="848" r="19" fill="#9cc0cc"/>
<path d="M250 834 L246 822 L258 830 Z" fill="#9cc0cc"/>
<path d="M278 834 L282 822 L270 830 Z" fill="#9cc0cc"/>
<circle cx="257" cy="848" r="3" fill="#2c4a55"/>
<circle cx="271" cy="848" r="3" fill="#2c4a55"/>
<path d="M250 872 C258 878 272 878 280 872" stroke="#f2c14e" stroke-width="5" fill="none"/>
<path d="M148 906 C144 892 152 880 162 878 C158 866 166 856 176 858 C182 846 198 848 202 860 C212 858 218 868 214 878 C222 884 222 898 212 904 Z" fill="#4e7a4a"/>
<path d="M162 878 C170 872 186 872 198 880 C186 874 172 874 162 878 Z" fill="#8fbf6a"/>
<path d="M176 858 C184 862 192 872 196 882" stroke="#6b9c56" stroke-width="4" fill="none"/>
<path d="M144 900 L218 900 L212 934 L150 934 Z" fill="#c2432f"/>
<path d="M144 900 L218 900 L216 910 L146 910 Z" fill="#e8563d"/>

<rect x="300" y="860" width="14" height="84" fill="#8a5a3b"/>
<rect x="536" y="860" width="14" height="84" fill="#8a5a3b"/>
<rect x="298" y="866" width="254" height="22" rx="4" fill="#a67c52"/>
<rect x="298" y="866" width="254" height="7" rx="3" fill="#c9945f"/>
<rect x="292" y="938" width="266" height="26" rx="5" fill="#b07a4e"/>
<rect x="292" y="938" width="266" height="9" rx="4" fill="#cf9a63"/>
<rect x="292" y="958" width="266" height="6" fill="#8a5a3b"/>
<rect x="310" y="964" width="24" height="98" fill="#8a5a3b"/>
<rect x="310" y="964" width="9" height="98" fill="#a67c52"/>
<rect x="518" y="964" width="24" height="98" fill="#8a5a3b"/>
<rect x="518" y="964" width="9" height="98" fill="#a67c52"/>
<rect x="310" y="1030" width="232" height="12" fill="#8a5a3b"/>
<ellipse cx="426" cy="1068" rx="150" ry="14" fill="#3d3230" opacity="0.25"/>

<g data-obj="onigiri" transform="translate(362 866)">
<ellipse cx="40" cy="72" rx="36" ry="6" fill="#6b5240" opacity="0.32"/>
<path d="M40 2 C50 2 55 9 72 40 C82 58 76 70 60 70 L20 70 C4 70 -2 58 8 40 C25 9 30 2 40 2 Z" fill="#fff8ec"/>
<path d="M40 2 C50 2 55 9 72 40 C82 58 76 70 60 70 L46 70 C56 48 52 22 40 2 Z" fill="#ecdcc6"/>
<path d="M40 2 C34 10 28 22 22 36 C16 24 26 10 34 4 Z" fill="#ffffff" opacity="0.7"/>
<path d="M22 44 L58 44 L58 70 L30 70 C24 70 22 65 22 58 Z" fill="#2f4a3c"/>
<path d="M22 46 L58 46 L58 53 L22 53 Z" fill="#456b56"/>
<path d="M46 44 L58 44 L58 70 L46 70 Z" fill="#233b30"/>
<ellipse cx="30" cy="26" rx="3" ry="2" fill="#ddcbb0" transform="rotate(20 30 26)"/>
<ellipse cx="44" cy="18" rx="3" ry="2" fill="#ddcbb0" transform="rotate(-30 44 18)"/>
<ellipse cx="54" cy="32" rx="3" ry="2" fill="#ddcbb0" transform="rotate(40 54 32)"/>
<ellipse cx="18" cy="40" rx="3" ry="2" fill="#ddcbb0" transform="rotate(-10 18 40)"/>
<ellipse cx="66" cy="52" rx="3" ry="2" fill="#ddcbb0" transform="rotate(15 66 52)"/>
</g>

<path d="M330 906 C330 928 344 940 366 940 C388 940 402 928 402 906 Z" fill="#f0dcbf"/>
<ellipse cx="366" cy="906" rx="36" ry="10" fill="#fdf5e6"/>
<ellipse cx="366" cy="906" rx="28" ry="7" fill="#e0c3a5"/>
<path d="M378 908 C378 928 372 938 366 940 C388 940 402 928 402 906 Z" fill="#dcc4a6"/>
<path d="M336 916 C340 924 348 932 358 936" stroke="#ffffff" stroke-width="3" fill="none" opacity="0.6"/>
<path d="M300 900 C300 924 312 936 332 936 L332 900 Z" fill="#7fa8b6"/>
<ellipse cx="316" cy="900" rx="16" ry="6" fill="#a3c6d0"/>
<path d="M456 890 C444 890 438 900 438 914 C438 930 448 940 464 940 L490 940 C506 940 514 930 514 914 C514 900 506 890 494 890 Z" fill="#c9b6d6"/>
<path d="M486 890 C498 894 502 904 502 916 C502 930 494 940 480 940 L490 940 C506 940 514 930 514 914 C514 900 506 890 494 890 Z" fill="#a893bd"/>
<ellipse cx="476" cy="888" rx="22" ry="8" fill="#ded0e8"/>
<circle cx="476" cy="882" r="6" fill="#7b4fbf"/>
<path d="M514 902 C528 900 534 910 528 920" stroke="#c9b6d6" stroke-width="7" fill="none"/>
<path d="M438 902 C424 900 420 912 428 920" stroke="#c9b6d6" stroke-width="7" fill="none"/>
<rect x="418" y="892" width="30" height="48" rx="4" fill="#8a5a3b"/>
<rect x="418" y="892" width="11" height="48" rx="4" fill="#a67c52"/>
<rect x="422" y="866" width="4" height="28" fill="#c9945f"/>
<rect x="430" y="862" width="4" height="32" fill="#e0c3a5"/>
<rect x="438" y="868" width="4" height="26" fill="#c9945f"/>
<ellipse cx="404" cy="1052" rx="46" ry="18" fill="#c9945f"/>
<ellipse cx="368" cy="1044" rx="16" ry="14" fill="#c9945f"/>
<path d="M358 1032 L354 1022 L366 1030 Z" fill="#c9945f"/>
<path d="M376 1030 L380 1020 L370 1028 Z" fill="#c9945f"/>
<path d="M358 1042 C361 1039 365 1039 368 1042" stroke="#8a5a3b" stroke-width="1.6" fill="none"/>
<path d="M370 1042 C373 1039 377 1039 380 1042" stroke="#8a5a3b" stroke-width="1.6" fill="none"/>
<path d="M440 1046 C462 1040 466 1022 454 1014" stroke="#c9945f" stroke-width="10" fill="none" stroke-linecap="round"/>
<path d="M380 1044 C392 1036 416 1036 428 1044" stroke="#a67c52" stroke-width="4" fill="none" opacity="0.6"/>

<rect x="440" y="826" width="18" height="262" fill="#8a5a3b"/>
<rect x="440" y="826" width="7" height="262" fill="#a67c52"/>
<rect x="646" y="826" width="18" height="262" fill="#8a5a3b"/>
<rect x="646" y="826" width="7" height="262" fill="#a67c52"/>
<rect x="430" y="822" width="244" height="16" rx="4" fill="#b07a4e"/>
<rect x="430" y="822" width="244" height="6" rx="3" fill="#cf9a63"/>
<rect x="430" y="926" width="244" height="16" rx="4" fill="#b07a4e"/>
<rect x="430" y="926" width="244" height="6" rx="3" fill="#cf9a63"/>
<rect x="430" y="1042" width="244" height="16" rx="4" fill="#b07a4e"/>
<rect x="430" y="1042" width="244" height="6" rx="3" fill="#cf9a63"/>
<path d="M456 786 L506 786 L500 826 L462 826 Z" fill="#c2432f"/>
<path d="M456 786 L506 786 L504 796 L458 796 Z" fill="#e8563d"/>
<path d="M462 786 C456 772 464 760 476 758 C472 748 482 740 492 746 C500 740 510 748 506 758 C516 762 516 778 504 784 Z" fill="#4e7a4a"/>
<path d="M476 758 C484 754 496 756 502 764 C492 758 482 756 476 758 Z" fill="#8fbf6a"/>
<path d="M516 800 C516 816 526 826 542 826 C558 826 568 816 568 800 Z" fill="#fdf5e6"/>
<ellipse cx="542" cy="800" rx="26" ry="8" fill="#f0dcbf"/>
<path d="M556 802 C556 816 552 824 546 826 C558 826 568 816 568 800 Z" fill="#e0c3a5"/>
<path d="M520 782 C520 794 528 802 542 802 C556 802 564 794 564 782 Z" fill="#7fa8b6"/>
<ellipse cx="542" cy="782" rx="22" ry="7" fill="#a3c6d0"/>
<path d="M592 826 C586 826 582 812 586 796 C590 780 602 770 616 770 C630 770 638 780 638 796 C638 812 630 826 618 826 Z" fill="#f0dcbf"/>
<circle cx="612" cy="768" r="17" fill="#fdf5e6"/>
<path d="M600 756 L596 744 L608 754 Z" fill="#fdf5e6"/>
<path d="M624 756 L628 744 L616 754 Z" fill="#fdf5e6"/>
<circle cx="606" cy="768" r="3" fill="#3a2c26"/>
<circle cx="618" cy="768" r="3" fill="#3a2c26"/>
<path d="M588 798 C598 806 630 806 640 798" stroke="#f2c14e" stroke-width="5" fill="none"/>

<g data-obj="matcha-cup" transform="translate(516 852)">
<ellipse cx="48" cy="68" rx="47" ry="10" fill="#5c4a45" opacity="0.28"/>
<ellipse cx="48" cy="66" rx="46" ry="10" fill="#e0cdb0"/>
<ellipse cx="48" cy="62" rx="46" ry="9" fill="#fbf0dd"/>
<path d="M8 24 C8 50 24 62 48 62 C72 62 88 50 88 24 Z" fill="#fff3e0"/>
<path d="M62 26 C62 50 56 62 48 62 C72 62 88 50 88 24 Z" fill="#e6d2b6"/>
<path d="M12 34 C18 44 32 50 48 50 C64 50 78 44 84 34 L82 41 C76 51 64 57 48 57 C32 57 20 51 14 41 Z" fill="#6f97b5"/>
<path d="M18 30 C20 42 26 50 34 55" stroke="#ffffff" stroke-width="3.5" fill="none" opacity="0.55"/>
<ellipse cx="48" cy="24" rx="41" ry="12" fill="#efe0c6"/>
<ellipse cx="48" cy="24" rx="35" ry="9" fill="#6e9a43"/>
<ellipse cx="46" cy="22" rx="26" ry="6" fill="#8fbf5c"/>
<ellipse cx="42" cy="21" rx="14" ry="3.5" fill="#c2dd94"/>
<path d="M30 22 C36 18 48 18 54 22" stroke="#e8f3cf" stroke-width="2" fill="none" opacity="0.8"/>
</g>

<path d="M584 872 C570 872 562 884 562 900 C562 918 574 930 594 930 L620 930 C640 930 650 918 650 900 C650 884 642 872 628 872 Z" fill="#3f6472"/>
<path d="M618 872 C632 878 638 888 638 902 C638 918 628 930 610 930 L620 930 C640 930 650 918 650 900 C650 884 642 872 628 872 Z" fill="#2c4a55"/>
<ellipse cx="606" cy="870" rx="26" ry="9" fill="#5b8698"/>
<circle cx="606" cy="862" r="7" fill="#f2c14e"/>
<path d="M650 886 C666 884 672 896 664 906" stroke="#3f6472" stroke-width="8" fill="none"/>
<path d="M562 886 C546 882 542 896 552 906" stroke="#3f6472" stroke-width="8" fill="none"/>
<path d="M466 896 C466 916 476 926 492 926 C508 926 518 916 518 896 Z" fill="#fdf5e6"/>
<ellipse cx="492" cy="896" rx="26" ry="8" fill="#f0dcbf"/>
<path d="M506 898 C506 914 502 924 496 926 C508 926 518 916 518 896 Z" fill="#e0c3a5"/>
<rect x="450" y="1058" width="90" height="82" fill="#a67c52"/>
<rect x="450" y="1058" width="90" height="9" fill="#c9945f"/>
<rect x="450" y="1090" width="90" height="7" fill="#8a5a3b" opacity="0.7"/>
<rect x="450" y="1122" width="90" height="7" fill="#8a5a3b" opacity="0.7"/>
<rect x="552" y="1058" width="96" height="70" fill="#b07a4e"/>
<rect x="552" y="1058" width="96" height="9" fill="#cf9a63"/>
<rect x="552" y="1092" width="96" height="7" fill="#8a5a3b" opacity="0.7"/>
<rect x="618" y="1058" width="30" height="70" fill="#8a5a3b" opacity="0.5"/>

<path d="M740 812 L752 812 L758 918 L746 930 L734 918 Z" fill="#3f6472"/>
<path d="M740 812 L746 812 L750 924 L746 930 L734 918 Z" fill="#5b8698"/>
<path d="M746 812 C746 800 758 798 762 806" stroke="#6b4229" stroke-width="6" fill="none" stroke-linecap="round"/>
<path d="M758 824 L770 824 L774 924 L764 936 L754 924 Z" fill="#c2432f"/>
<path d="M758 824 L764 824 L768 930 L764 936 L754 924 Z" fill="#e8563d"/>
<path d="M764 824 C764 812 776 810 780 818" stroke="#6b4229" stroke-width="6" fill="none" stroke-linecap="round"/>
<path d="M718 830 L730 830 L734 926 L724 938 L714 926 Z" fill="#f2c14e"/>
<path d="M718 830 L724 830 L728 932 L724 938 L714 926 Z" fill="#ffd873"/>
<path d="M724 830 C724 818 736 816 740 824" stroke="#6b4229" stroke-width="6" fill="none" stroke-linecap="round"/>

<g data-obj="lightstick" transform="translate(660 826)">
<circle cx="36" cy="34" r="33" fill="#c9a6ff" opacity="0.16"/>
<circle cx="36" cy="34" r="30" fill="#9a6ef0"/>
<circle cx="36" cy="34" r="21" fill="#c2a0ff"/>
<circle cx="34" cy="32" r="11" fill="#ede0ff"/>
<ellipse cx="25" cy="21" rx="7" ry="4" fill="#ffffff" opacity="0.85" transform="rotate(-32 25 21)"/>
<rect x="20" y="60" width="32" height="13" rx="5" fill="#efe6f7"/>
<rect x="40" y="60" width="12" height="13" rx="5" fill="#d0bfe8"/>
<rect x="24" y="71" width="24" height="62" rx="11" fill="#f7f2fb"/>
<rect x="38" y="71" width="10" height="62" rx="5" fill="#dccfee"/>
<rect x="28" y="80" width="5" height="40" rx="2.5" fill="#ffffff" opacity="0.8"/>
<rect x="22" y="122" width="28" height="13" rx="5" fill="#b9a6d4"/>
<path d="M48 126 q13 6 5 15" stroke="#cbb8e6" stroke-width="3.5" fill="none" stroke-linecap="round"/>
</g>

<path d="M676 838 L688 838 L692 928 L682 940 L672 928 Z" fill="#8fbf6a"/>
<path d="M676 838 L682 838 L686 934 L682 940 L672 928 Z" fill="#6b9c56"/>
<path d="M682 838 C682 826 694 824 698 832" stroke="#6b4229" stroke-width="6" fill="none" stroke-linecap="round"/>
<ellipse cx="716" cy="1104" rx="72" ry="16" fill="#3d3230" opacity="0.25"/>
<rect x="652" y="944" width="128" height="152" rx="9" fill="#6f8b93"/>
<rect x="652" y="944" width="30" height="152" rx="9" fill="#8aa6ad"/>
<rect x="756" y="944" width="24" height="152" fill="#54707a"/>
<rect x="652" y="984" width="128" height="9" fill="#54707a"/>
<rect x="652" y="1048" width="128" height="9" fill="#54707a"/>
<ellipse cx="716" cy="944" rx="64" ry="17" fill="#8aa6ad"/>
<ellipse cx="716" cy="944" rx="52" ry="12" fill="#3f6472"/>
<ellipse cx="716" cy="1096" rx="64" ry="14" fill="#54707a"/>

<path d="M0 1180 C-4 1120 8 1076 30 1062 C22 1044 34 1030 50 1034 C56 1018 78 1018 84 1034 C102 1032 112 1048 102 1062 C120 1076 124 1124 116 1180 Z" fill="#4e7a4a"/>
<path d="M30 1062 C46 1050 76 1050 102 1062 C78 1054 50 1054 30 1062 Z" fill="#8fbf6a"/>
<path d="M50 1034 C62 1042 74 1056 82 1072" stroke="#6b9c56" stroke-width="5" fill="none"/>
<path d="M84 1034 C74 1046 66 1062 62 1078" stroke="#6b9c56" stroke-width="5" fill="none"/>
<path d="M14 1080 C28 1090 44 1096 62 1098" stroke="#3f6b3e" stroke-width="5" fill="none"/>
<path d="M0 1104 L124 1104 L112 1200 L0 1200 Z" fill="#c2432f"/>
<path d="M0 1104 L124 1104 L122 1118 L0 1118 Z" fill="#e8563d"/>
<path d="M96 1104 L124 1104 L112 1200 L86 1200 Z" fill="#a8301f"/>

<path d="M300 1096 L432 1088 L440 1200 L296 1200 Z" fill="#6b4229"/>
<path d="M310 1104 L424 1097 L430 1192 L306 1192 Z" fill="#3a3330"/>
<path d="M324 1122 L406 1118" stroke="#f6ecd8" stroke-width="5" fill="none" opacity="0.85"/>
<path d="M324 1140 L392 1136" stroke="#f6ecd8" stroke-width="5" fill="none" opacity="0.7"/>
<path d="M324 1158 L412 1154" stroke="#f0a35d" stroke-width="5" fill="none" opacity="0.8"/>
<path d="M324 1176 L370 1173" stroke="#f6ecd8" stroke-width="5" fill="none" opacity="0.6"/>
<circle cx="416" cy="1140" r="9" fill="#7b4fbf" opacity="0.9"/>

<path d="M700 1200 C692 1150 700 1112 720 1104 C712 1090 724 1076 740 1080 C748 1064 772 1066 776 1082 C796 1084 802 1102 790 1112 C806 1126 808 1166 800 1200 Z" fill="#4e7a4a"/>
<path d="M720 1104 C740 1094 772 1096 790 1112 C768 1102 740 1100 720 1104 Z" fill="#8fbf6a"/>
<path d="M740 1080 C752 1092 762 1110 768 1128" stroke="#6b9c56" stroke-width="5" fill="none"/>
<circle cx="734" cy="1092" r="7" fill="#f2c14e"/>
<circle cx="778" cy="1100" r="6" fill="#e8563d"/>
<circle cx="756" cy="1074" r="6" fill="#ffd873"/>

<ellipse cx="86" cy="1112" rx="9" ry="5" fill="#ffc4dc" transform="rotate(24 86 1112)" opacity="0.9"/>
<ellipse cx="216" cy="1146" rx="9" ry="5" fill="#ffb2ce" transform="rotate(-34 216 1146)" opacity="0.9"/>
<ellipse cx="268" cy="1084" rx="8" ry="5" fill="#ffd6e6" transform="rotate(52 268 1084)" opacity="0.85"/>
<ellipse cx="470" cy="1176" rx="9" ry="5" fill="#ffc4dc" transform="rotate(-14 470 1176)" opacity="0.9"/>
<ellipse cx="560" cy="1156" rx="8" ry="5" fill="#ffb2ce" transform="rotate(30 560 1156)" opacity="0.85"/>
<ellipse cx="612" cy="1068" rx="8" ry="5" fill="#ffd6e6" transform="rotate(-46 612 1068)" opacity="0.8"/>
<ellipse cx="150" cy="1080" rx="8" ry="5" fill="#ffc4dc" transform="rotate(12 150 1080)" opacity="0.85"/>
<ellipse cx="352" cy="1000" rx="8" ry="5" fill="#ffb2ce" transform="rotate(-22 352 1000)" opacity="0.8"/>
<ellipse cx="682" cy="1178" rx="9" ry="5" fill="#ffc4dc" transform="rotate(40 682 1178)" opacity="0.85"/>
<ellipse cx="248" cy="978" rx="7" ry="4" fill="#ffd6e6" transform="rotate(-8 248 978)" opacity="0.8"/>

<ellipse cx="180" cy="700" rx="10" ry="6" fill="#ffc4dc" transform="rotate(30 180 700)" opacity="0.9"/>
<ellipse cx="470" cy="640" rx="10" ry="6" fill="#ffb2ce" transform="rotate(-24 470 640)" opacity="0.9"/>
<ellipse cx="612" cy="828" rx="10" ry="6" fill="#ffd6e6" transform="rotate(58 612 828)" opacity="0.9"/>
<ellipse cx="96" cy="620" rx="9" ry="5" fill="#ffc4dc" transform="rotate(-40 96 620)" opacity="0.85"/>
<ellipse cx="392" cy="820" rx="10" ry="6" fill="#ffb2ce" transform="rotate(16 392 820)" opacity="0.9"/>
<ellipse cx="712" cy="700" rx="10" ry="6" fill="#ffd6e6" transform="rotate(-56 712 700)" opacity="0.9"/>
<ellipse cx="530" cy="1020" rx="10" ry="6" fill="#ffc4dc" transform="rotate(34 530 1020)" opacity="0.85"/>
<ellipse cx="44" cy="962" rx="10" ry="6" fill="#ffb2ce" transform="rotate(-18 44 962)" opacity="0.85"/>
<ellipse cx="336" cy="1122" rx="10" ry="6" fill="#ffd6e6" transform="rotate(46 336 1122)" opacity="0.85"/>
<ellipse cx="666" cy="988" rx="9" ry="5" fill="#ffc4dc" transform="rotate(-30 666 988)" opacity="0.8"/>
</svg>`
});
