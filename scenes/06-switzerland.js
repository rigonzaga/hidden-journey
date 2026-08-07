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
    { id: 'chocolate-bar', name: 'Chocolate Bar' },
    { id: 'cheese-wheel',  name: 'Cheese Wheel' },
    { id: 'alphorn',       name: 'Alphorn' },
    { id: 'edelweiss',     name: 'Edelweiss' },
    { id: 'swiss-knife',   name: 'Pocket Knife' }
  ],
  svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 1200">
<defs>
  <linearGradient id="swiss-sky" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#7fbfe6"/>
    <stop offset="0.45" stop-color="#a9d8f2"/>
    <stop offset="0.85" stop-color="#dcf0fb"/>
    <stop offset="1" stop-color="#eef7fc"/>
  </linearGradient>
  <linearGradient id="swiss-snow" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#ffffff"/>
    <stop offset="1" stop-color="#dfeaf6"/>
  </linearGradient>
  <linearGradient id="swiss-meadow" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#8ec96a"/>
    <stop offset="1" stop-color="#5f9c44"/>
  </linearGradient>
  <radialGradient id="swiss-sunglow" cx="0.5" cy="0.5" r="0.5">
    <stop offset="0" stop-color="#fff6d8" stop-opacity="0.95"/>
    <stop offset="1" stop-color="#fff6d8" stop-opacity="0"/>
  </radialGradient>
</defs>

<rect x="0" y="0" width="800" height="1200" fill="url(#swiss-sky)"/>
<ellipse cx="648" cy="118" rx="150" ry="130" fill="url(#swiss-sunglow)"/>
<circle cx="648" cy="118" r="40" fill="#fff9e4" opacity="0.9"/>
<circle cx="648" cy="118" r="27" fill="#fffdf2"/>
<ellipse cx="150" cy="112" rx="66" ry="20" fill="#ffffff" opacity="0.85"/>
<ellipse cx="196" cy="104" rx="42" ry="24" fill="#ffffff" opacity="0.85"/>
<ellipse cx="412" cy="86" rx="52" ry="17" fill="#ffffff" opacity="0.7"/>
<ellipse cx="700" cy="196" rx="74" ry="16" fill="#ffffff" opacity="0.55"/>

<polygon points="-20,432 90,236 176,338 252,244 350,432" fill="#a3b8cd"/>
<polygon points="450,432 548,262 622,344 710,254 830,432" fill="#a3b8cd"/>
<polygon points="90,236 46,320 134,320" fill="#f2f7fc"/>
<polygon points="548,262 512,332 588,332" fill="#f2f7fc"/>
<polygon points="710,254 668,330 754,330" fill="#f2f7fc"/>

<polygon points="-30,448 140,178 260,318 372,206 470,330 560,224 700,382 840,448" fill="#8497b0"/>
<polygon points="140,178 84,268 196,268" fill="url(#swiss-snow)"/>
<polygon points="140,178 84,268 140,268" fill="#ffffff"/>
<polygon points="372,206 322,286 424,286" fill="url(#swiss-snow)"/>
<polygon points="372,206 322,286 372,286" fill="#ffffff"/>
<polygon points="560,224 516,296 606,296" fill="url(#swiss-snow)"/>
<polygon points="560,224 516,296 560,296" fill="#ffffff"/>
<polygon points="140,178 196,268 244,306 260,318 140,318" fill="#6d8299"/>
<polygon points="372,206 424,286 470,330 372,330" fill="#6d8299"/>
<polygon points="560,224 606,296 700,382 560,382" fill="#6d8299"/>

<path d="M60 232 L470 300" fill="none" stroke="#4c5f74" stroke-width="2.5" opacity="0.85"/>
<rect x="54" y="228" width="7" height="46" fill="#4c5f74"/>
<rect x="466" y="296" width="7" height="52" fill="#4c5f74"/>
<rect x="230" y="266" width="30" height="22" rx="6" fill="#d33c28"/>
<rect x="230" y="266" width="30" height="8" rx="4" fill="#eb5a45"/>
<rect x="236" y="274" width="18" height="9" rx="2" fill="#cfe6f2"/>

<path d="M-10 470 C 90 424 190 452 280 428 C 380 402 470 448 570 424 C 660 402 740 440 810 424 L810 520 L-10 520 Z" fill="#4a7a68"/>
<polygon points="26,480 8,432 44,432" fill="#2e5a49"/>
<polygon points="122,484 105,436 139,436" fill="#2e5a49"/>
<polygon points="250,482 232,430 268,430" fill="#2e5a49"/>
<polygon points="380,484 363,436 397,436" fill="#2e5a49"/>
<polygon points="508,484 491,434 525,434" fill="#2e5a49"/>
<polygon points="634,482 616,430 652,430" fill="#2e5a49"/>
<polygon points="760,484 743,436 777,436" fill="#2e5a49"/>
<polygon points="88,476 66,410 110,410" fill="#2e5a49"/>
<polygon points="152,478 133,422 171,422" fill="#2e5a49"/>
<polygon points="215,474 192,406 238,406" fill="#2e5a49"/>
<polygon points="282,478 262,418 302,418" fill="#2e5a49"/>
<polygon points="345,476 324,412 366,412" fill="#2e5a49"/>
<polygon points="410,480 391,424 429,424" fill="#2e5a49"/>
<polygon points="442,486 427,444 457,444" fill="#2e5a49"/>
<polygon points="472,478 451,414 493,414" fill="#2e5a49"/>
<polygon points="536,478 517,420 555,420" fill="#2e5a49"/>
<polygon points="598,474 575,404 621,404" fill="#2e5a49"/>
<polygon points="663,478 643,418 683,418" fill="#2e5a49"/>
<polygon points="725,476 704,412 746,412" fill="#2e5a49"/>
<polygon points="790,480 771,424 809,424" fill="#2e5a49"/>

<path d="M-10 496 C 120 462 240 500 380 480 C 520 460 640 498 810 470 L810 1210 L-10 1210 Z" fill="url(#swiss-meadow)"/>
<path d="M-10 826 C 170 800 330 842 500 820 C 640 802 730 836 810 818 L810 900 L-10 900 Z" fill="#6ba84b" opacity="0.75"/>
<path d="M-10 962 C 180 936 340 976 520 954 C 660 936 740 968 810 950 L810 1210 L-10 1210 Z" fill="#5c9640"/>
<path d="M-10 1092 C 190 1064 350 1102 540 1080 C 670 1064 750 1092 810 1078 L810 1210 L-10 1210 Z" fill="#4e8737"/>

<ellipse cx="120" cy="540" rx="46" ry="14" fill="#6ba84b" opacity="0.45"/>
<ellipse cx="660" cy="556" rx="52" ry="15" fill="#6ba84b" opacity="0.4"/>
<polygon points="96,540 78,496 114,496" fill="#3d7259"/>
<rect x="93" y="536" width="6" height="12" fill="#6d4425"/>

<path d="M520 700 C 500 762 542 820 512 882 C 494 918 470 952 468 992 L610 992 C 604 948 590 914 580 880 C 552 818 590 760 582 700 Z" fill="#ddc79c"/>
<path d="M534 704 C 518 762 552 818 526 878 C 510 914 490 948 488 986 L592 986 C 586 946 574 914 564 880 C 540 818 574 762 566 704 Z" fill="#eddcb8"/>
<ellipse cx="548" cy="900" rx="11" ry="6" fill="#c9b088"/>

<ellipse cx="550" cy="704" rx="230" ry="26" fill="#3f7a2e" opacity="0.25"/>
<polygon points="550,398 322,512 336,532 550,424" fill="#5c4132"/>
<polygon points="550,398 778,512 764,532 550,424" fill="#4c3527"/>
<polygon points="550,398 322,512 550,412" fill="#6d4e3b"/>
<polygon points="550,398 778,512 550,412" fill="#5c4132"/>
<rect x="540" y="392" width="20" height="16" rx="4" fill="#3f2c20"/>
<polygon points="550,418 352,522 748,522" fill="#d99a5c"/>
<polygon points="550,418 352,522 550,522" fill="#e8ad6c"/>
<circle cx="550" cy="464" r="21" fill="#8a5730"/>
<circle cx="550" cy="464" r="15" fill="#cfe6f2"/>
<path d="M535 464 L565 464 M550 449 L550 479" stroke="#8a5730" stroke-width="4"/>
<ellipse cx="684" cy="514" rx="16" ry="7" fill="#b9c3cd"/>
<rect x="662" y="424" width="30" height="52" fill="#a8a099"/>
<rect x="662" y="424" width="30" height="10" rx="3" fill="#c4bcb3"/>
<rect x="656" y="418" width="42" height="10" rx="3" fill="#8f877f"/>

<rect x="372" y="522" width="356" height="168" fill="#b87a45"/>
<rect x="372" y="522" width="356" height="10" fill="#a06537"/>
<rect x="372" y="664" width="356" height="6" fill="#a06537" opacity="0.7"/>
<rect x="648" y="522" width="80" height="168" fill="#8f5c33" opacity="0.45"/>
<rect x="362" y="686" width="376" height="24" rx="4" fill="#b9c3cd"/>
<rect x="362" y="686" width="376" height="8" rx="4" fill="#cfd8e0"/>

<rect x="522" y="606" width="58" height="84" rx="3" fill="#8a5730"/>
<rect x="528" y="612" width="46" height="78" fill="#a4683a"/>
<rect x="536" y="620" width="30" height="30" rx="3" fill="#cfe6f2"/>
<path d="M551 620 L551 650 M536 635 L566 635" stroke="#8a5730" stroke-width="3"/>
<rect x="396" y="636" width="58" height="44" rx="3" fill="#f6e7c9"/>
<rect x="402" y="642" width="46" height="32" fill="#cfe6f2"/>
<path d="M425 642 L425 674 M402 658 L448 658" stroke="#f6e7c9" stroke-width="4"/>
<rect x="386" y="634" width="12" height="48" rx="2" fill="#cf3b28"/>
<rect x="452" y="634" width="12" height="48" rx="2" fill="#cf3b28"/>
<rect x="646" y="636" width="58" height="44" rx="3" fill="#f6e7c9"/>
<rect x="652" y="642" width="46" height="32" fill="#cfe6f2"/>
<path d="M675 642 L675 674 M652 658 L698 658" stroke="#f6e7c9" stroke-width="4"/>
<rect x="636" y="634" width="12" height="48" rx="2" fill="#cf3b28"/>
<rect x="702" y="634" width="12" height="48" rx="2" fill="#cf3b28"/>

<rect x="356" y="570" width="388" height="16" rx="3" fill="#a56b3c"/>
<rect x="356" y="584" width="388" height="10" rx="3" fill="#7d4f2b"/>
<rect x="362" y="494" width="376" height="78" rx="4" fill="#8a5730"/>
<rect x="362" y="494" width="376" height="12" rx="4" fill="#a56b3c"/>
<rect x="378" y="512" width="10" height="52" rx="3" fill="#6d4425"/>
<rect x="408" y="512" width="10" height="52" rx="3" fill="#6d4425"/>
<rect x="438" y="512" width="10" height="52" rx="3" fill="#6d4425"/>
<rect x="468" y="512" width="10" height="52" rx="3" fill="#6d4425"/>
<rect x="622" y="512" width="10" height="52" rx="3" fill="#6d4425"/>
<rect x="652" y="512" width="10" height="52" rx="3" fill="#6d4425"/>
<rect x="682" y="512" width="10" height="52" rx="3" fill="#6d4425"/>
<rect x="712" y="512" width="10" height="52" rx="3" fill="#6d4425"/>
<rect x="486" y="496" width="128" height="74" rx="5" fill="#7c4e29"/>
<rect x="490" y="500" width="120" height="66" rx="4" fill="#8a5730"/>
<polygon points="393,518 400,532 393,548 386,532" fill="#5c3a1d"/>
<polygon points="423,518 430,532 423,548 416,532" fill="#5c3a1d"/>
<polygon points="453,518 460,532 453,548 446,532" fill="#5c3a1d"/>
<polygon points="637,518 644,532 637,548 630,532" fill="#5c3a1d"/>
<polygon points="667,518 674,532 667,548 660,532" fill="#5c3a1d"/>
<polygon points="697,518 704,532 697,548 690,532" fill="#5c3a1d"/>
<polygon points="503,514 510,530 503,550 496,530" fill="#5c3a1d"/>
<polygon points="597,514 604,530 597,550 590,530" fill="#5c3a1d"/>
<path d="M551 566 C 517 545 508 514 528 504 C 541 499 550 507 551 516 C 552 507 561 499 574 504 C 594 514 585 545 551 566 Z" fill="#3f3220"/>

<g data-obj="purple-heart">
  <path d="M550 564 C 516 543 507 512 527 502 C 540 497 549 505 550 514 C 551 505 560 497 573 502 C 593 512 584 543 550 564 Z" fill="#5f4f6d"/>
  <path d="M550 554 C 524 538 517 514 532 507 C 541 502 549 509 550 516 C 551 509 558 502 567 507 C 582 514 575 538 550 554 Z" fill="#71607f"/>
</g>

<rect x="400" y="592" width="98" height="40" rx="4" fill="#7d4f2b"/>
<rect x="400" y="592" width="98" height="9" rx="3" fill="#a56b3c"/>
<ellipse cx="412" cy="588" rx="14" ry="10" fill="#3f7a2e"/>
<ellipse cx="444" cy="586" rx="16" ry="11" fill="#4e8737"/>
<ellipse cx="474" cy="587" rx="17" ry="11" fill="#3f7a2e"/>
<circle cx="410" cy="582" r="9" fill="#e0402c"/>
<circle cx="416" cy="576" r="6" fill="#f2705a"/>
<circle cx="476" cy="578" r="10" fill="#e0402c"/>
<circle cx="482" cy="572" r="6" fill="#f2705a"/>

<g data-obj="lightstick" transform="rotate(-15 436 596)">
  <ellipse cx="436" cy="570" rx="13" ry="19" fill="#9b7fd4"/>
  <ellipse cx="436" cy="570" rx="8" ry="13" fill="#b39ae0"/>
  <ellipse cx="432" cy="563" rx="4" ry="6" fill="#d5c9ee"/>
  <rect x="428" y="587" width="17" height="8" rx="3" fill="#5f4a94"/>
  <rect x="430" y="595" width="13" height="39" rx="6" fill="#e8dcc4"/>
  <rect x="430" y="604" width="13" height="6" fill="#8e74c4"/>
  <rect x="431" y="627" width="11" height="7" rx="3" fill="#c4b39a"/>
</g>

<circle cx="441" cy="577" r="9" fill="#e0402c"/>
<ellipse cx="424" cy="598" rx="13" ry="9" fill="#4e8737"/>
<circle cx="420" cy="594" r="8" fill="#c02f1e"/>
<circle cx="455" cy="598" r="8" fill="#e0402c"/>
<rect x="398" y="618" width="102" height="18" rx="4" fill="#8a5730"/>
<rect x="398" y="618" width="102" height="5" rx="2" fill="#a56b3c"/>
<rect x="434" y="601" width="6" height="17" fill="#6d4425" opacity="0.5"/>
<path d="M406 634 C 400 648 404 658 412 666" stroke="#3f7a2e" stroke-width="5" fill="none"/>
<path d="M480 634 C 488 650 484 660 476 668" stroke="#3f7a2e" stroke-width="5" fill="none"/>
<circle cx="412" cy="668" r="7" fill="#e0402c"/>
<circle cx="476" cy="670" r="7" fill="#e0402c"/>

<rect x="602" y="592" width="98" height="38" rx="4" fill="#7d4f2b"/>
<rect x="602" y="592" width="98" height="9" rx="3" fill="#a56b3c"/>
<rect x="638" y="601" width="6" height="29" fill="#6d4425" opacity="0.6"/>
<ellipse cx="614" cy="588" rx="14" ry="10" fill="#3f7a2e"/>
<ellipse cx="644" cy="584" rx="16" ry="11" fill="#4e8737"/>
<ellipse cx="678" cy="587" rx="17" ry="11" fill="#3f7a2e"/>
<circle cx="612" cy="580" r="9" fill="#e0402c"/>
<circle cx="618" cy="574" r="6" fill="#f2705a"/>
<circle cx="642" cy="576" r="10" fill="#e0402c"/>
<circle cx="648" cy="570" r="6" fill="#f2705a"/>
<circle cx="680" cy="578" r="10" fill="#e0402c"/>
<circle cx="686" cy="572" r="6" fill="#f2705a"/>
<path d="M608 628 C 602 646 606 658 614 666" stroke="#3f7a2e" stroke-width="5" fill="none"/>
<path d="M690 628 C 698 646 694 660 686 668" stroke="#3f7a2e" stroke-width="5" fill="none"/>
<circle cx="614" cy="668" r="7" fill="#e0402c"/>
<circle cx="686" cy="670" r="7" fill="#e0402c"/>

<rect x="38" y="545" width="10" height="122" rx="3" fill="#8a5b34"/>
<rect x="168" y="540" width="10" height="127" rx="3" fill="#8a5b34"/>
<path d="M43 552 Q 108 572 173 548" fill="none" stroke="#6d4425" stroke-width="3"/>
<path d="M58 562 L56 606 L82 606 L84 558 Z" fill="#f6e7c9"/>
<path d="M58 562 L56 606 L68 606 L69 560 Z" fill="#fdf6e6"/>
<path d="M94 568 L92 610 L116 610 L118 564 Z" fill="#cfe6f2"/>
<path d="M94 568 L92 610 L103 610 L104 566 Z" fill="#eaf5fb"/>
<path d="M130 570 L128 604 L150 604 L152 566 Z" fill="#e0402c"/>
<path d="M130 570 L128 604 L139 604 L140 568 Z" fill="#f2705a"/>
<ellipse cx="106" cy="700" rx="64" ry="14" fill="#3f7a2e" opacity="0.28"/>
<rect x="56" y="666" width="104" height="12" rx="3" fill="#a56b3c"/>
<rect x="56" y="666" width="104" height="4" rx="2" fill="#c08b4f"/>
<rect x="60" y="644" width="96" height="9" rx="3" fill="#8a5b34"/>
<rect x="64" y="678" width="10" height="24" fill="#7a4f2d"/>
<rect x="142" y="678" width="10" height="24" fill="#7a4f2d"/>
<rect x="62" y="650" width="8" height="18" fill="#8a5b34"/>
<rect x="146" y="650" width="8" height="18" fill="#8a5b34"/>
<path d="M172 700 L172 646 Q 172 632 184 626 L184 616 L208 616 L208 626 Q 220 632 220 646 L220 700 Z" fill="#b9c3cd"/>
<path d="M172 700 L172 646 Q 172 632 184 626 L184 616 L193 616 L193 700 Z" fill="#d4dde4"/>
<rect x="180" y="609" width="32" height="10" rx="4" fill="#8fa0ae"/>
<rect x="170" y="662" width="52" height="7" fill="#8fa0ae"/>
<path d="M222 702 L222 656 Q 222 644 232 639 L232 631 L252 631 L252 639 Q 262 644 262 656 L262 702 Z" fill="#a8b4c0"/>
<path d="M222 702 L222 656 Q 222 644 232 639 L232 631 L240 631 L240 702 Z" fill="#c6d0d9"/>
<rect x="228" y="625" width="28" height="9" rx="4" fill="#7f8f9d"/>

<ellipse cx="316" cy="704" rx="76" ry="16" fill="#3f7a2e" opacity="0.3"/>
<rect x="252" y="608" width="128" height="94" rx="4" fill="#8a5b34"/>
<circle cx="270" cy="624" r="15" fill="#d9ad74"/>
<circle cx="270" cy="624" r="9" fill="#c08b4f"/>
<circle cx="302" cy="622" r="14" fill="#e0b881"/>
<circle cx="302" cy="622" r="8" fill="#c08b4f"/>
<circle cx="296" cy="656" r="15" fill="#d9ad74"/>
<circle cx="296" cy="656" r="9" fill="#c08b4f"/>
<circle cx="264" cy="652" r="14" fill="#e0b881"/>
<circle cx="264" cy="652" r="8" fill="#c08b4f"/>
<circle cx="296" cy="650" r="15" fill="#d9ad74"/>
<circle cx="296" cy="650" r="9" fill="#c08b4f"/>
<circle cx="328" cy="652" r="14" fill="#e0b881"/>
<circle cx="328" cy="652" r="8" fill="#c08b4f"/>
<circle cx="360" cy="650" r="14" fill="#d9ad74"/>
<circle cx="360" cy="650" r="8" fill="#c08b4f"/>
<circle cx="364" cy="624" r="14" fill="#e0b881"/>
<circle cx="364" cy="624" r="8" fill="#c08b4f"/>
<circle cx="364" cy="688" r="13" fill="#e0b881"/>
<circle cx="364" cy="688" r="7" fill="#c08b4f"/>
<rect x="246" y="600" width="140" height="12" rx="4" fill="#6d4425"/>
<rect x="270" y="656" width="82" height="52" rx="5" fill="#a06537"/>
<ellipse cx="311" cy="656" rx="41" ry="12" fill="#d9ad74"/>
<ellipse cx="311" cy="656" rx="28" ry="7" fill="#e8c495"/>
<path d="M296 650 L326 650" stroke="#c08b4f" stroke-width="3"/>

<g data-obj="swiss-knife" transform="rotate(-8 306 651)">
  <polygon points="318,642 348,637 350,646 318,650" fill="#dde3e9"/>
  <polygon points="318,642 348,637 348,641 318,645" fill="#f2f6fa"/>
  <polygon points="318,652 342,653 340,660 318,659" fill="#b9c3cd"/>
  <rect x="268" y="639" width="52" height="25" rx="12" fill="#d33c28"/>
  <rect x="268" y="653" width="52" height="11" rx="5" fill="#a52c1c"/>
  <rect x="268" y="639" width="52" height="7" rx="3" fill="#e85a44"/>
  <rect x="287" y="648" width="17" height="6" rx="1" fill="#ffffff"/>
  <rect x="292" y="643" width="6" height="16" rx="1" fill="#ffffff"/>
  <circle cx="316" cy="651" r="4" fill="#8fa0ae"/>
</g>
<circle cx="277" cy="666" r="17" fill="#d9ad74"/>
<circle cx="277" cy="666" r="10" fill="#c08b4f"/>
<ellipse cx="300" cy="678" rx="30" ry="9" fill="#a06537"/>

<path d="M394 708 L404 708 L394 630 L386 630 Z" fill="#c08b4f"/>
<polygon points="378,622 402,618 408,640 382,644" fill="#8fa0ae"/>
<polygon points="378,622 388,620 392,642 382,644" fill="#c4ced7"/>
<rect x="352" y="692" width="52" height="16" rx="8" fill="#c08b4f"/>
<ellipse cx="404" cy="700" rx="7" ry="8" fill="#d9ad74"/>
<rect x="336" y="708" width="46" height="14" rx="7" fill="#a5713a"/>
<ellipse cx="382" cy="715" rx="6" ry="7" fill="#c99a6c"/>
<ellipse cx="436" cy="710" rx="28" ry="8" fill="#3f7a2e" opacity="0.3"/>
<path d="M414 672 L420 706 L452 706 L458 672 Z" fill="#8fa0ae"/>
<path d="M414 672 L420 706 L430 706 L426 672 Z" fill="#b9c3cd"/>
<ellipse cx="436" cy="672" rx="22" ry="7" fill="#c4ced7"/>
<path d="M416 670 C 424 650 448 650 456 670" fill="none" stroke="#7f8f9d" stroke-width="3"/>
<rect x="744" y="652" width="58" height="30" rx="4" fill="#8a5b34"/>
<rect x="744" y="652" width="58" height="8" rx="3" fill="#a5764a"/>
<ellipse cx="773" cy="660" rx="24" ry="5" fill="#9fd0e8"/>
<rect x="752" y="682" width="9" height="20" fill="#7a4f2d"/>
<rect x="786" y="682" width="9" height="20" fill="#7a4f2d"/>

<rect x="-10" y="748" width="820" height="10" fill="#a56b3c" opacity="0.35"/>
<rect x="30" y="688" width="16" height="76" rx="3" fill="#8a5b34"/>
<rect x="30" y="688" width="7" height="76" fill="#a5764a"/>
<rect x="146" y="690" width="16" height="74" rx="3" fill="#8a5b34"/>
<rect x="146" y="690" width="7" height="74" fill="#a5764a"/>
<rect x="262" y="688" width="16" height="76" rx="3" fill="#8a5b34"/>
<rect x="262" y="688" width="7" height="76" fill="#a5764a"/>
<rect x="378" y="690" width="16" height="74" rx="3" fill="#8a5b34"/>
<rect x="378" y="690" width="7" height="74" fill="#a5764a"/>
<rect x="494" y="688" width="16" height="76" rx="3" fill="#8a5b34"/>
<rect x="494" y="688" width="7" height="76" fill="#a5764a"/>
<rect x="610" y="690" width="16" height="74" rx="3" fill="#8a5b34"/>
<rect x="610" y="690" width="7" height="74" fill="#a5764a"/>
<rect x="726" y="688" width="16" height="76" rx="3" fill="#8a5b34"/>
<rect x="726" y="688" width="7" height="76" fill="#a5764a"/>
<rect x="-10" y="700" width="820" height="12" rx="4" fill="#a5764a"/>
<rect x="-10" y="728" width="820" height="12" rx="4" fill="#a5764a"/>

<g data-obj="cowbell">
  <rect x="293" y="700" width="16" height="30" fill="#8a5b34"/>
  <rect x="293" y="700" width="16" height="8" fill="#a5764a"/>
  <rect x="290" y="716" width="22" height="8" rx="2" fill="#6d4425"/>
  <path d="M282 730 Q 302 717 322 730 L 332 786 Q 302 797 272 786 Z" fill="#d9a441"/>
  <path d="M282 730 Q 292 723 302 722 L 302 792 Q 286 791 272 786 Z" fill="#e8bd63"/>
  <path d="M272 784 Q 302 796 332 784 L 334 795 Q 302 807 270 795 Z" fill="#b98329"/>
  <path d="M272 784 Q 288 792 302 794 L 302 806 Q 284 803 270 795 Z" fill="#d09a3a"/>
  <ellipse cx="302" cy="754" rx="7" ry="9" fill="#a06f22" opacity="0.5"/>
  <ellipse cx="302" cy="802" rx="6" ry="5" fill="#8a5b34"/>
</g>

<ellipse cx="140" cy="828" rx="86" ry="16" fill="#3f7a2e" opacity="0.3"/>
<rect x="96" y="784" width="15" height="46" rx="5" fill="#3a3330"/>
<rect x="176" y="786" width="15" height="44" rx="5" fill="#3a3330"/>
<rect x="120" y="788" width="14" height="42" rx="5" fill="#4a423e"/>
<ellipse cx="150" cy="762" rx="76" ry="44" fill="#fbfaf6"/>
<ellipse cx="150" cy="748" rx="72" ry="34" fill="#ffffff"/>
<ellipse cx="122" cy="742" rx="24" ry="18" fill="#33302d"/>
<ellipse cx="184" cy="774" rx="19" ry="14" fill="#33302d"/>
<path d="M218 738 C 240 730 246 758 236 790 C 232 804 224 806 220 796" fill="#33302d"/>
<ellipse cx="76" cy="742" rx="30" ry="25" fill="#fbfaf6"/>
<ellipse cx="70" cy="754" rx="19" ry="14" fill="#e79a90"/>
<circle cx="63" cy="752" r="3" fill="#8a5b34"/>
<ellipse cx="66" cy="730" rx="6" ry="5" fill="#33302d"/>
<path d="M50 728 C 38 720 36 734 48 740 Z" fill="#f0d3cd"/>
<path d="M96 720 C 106 712 110 722 100 730 Z" fill="#f0d3cd"/>
<rect x="66" y="768" width="22" height="8" rx="3" fill="#8a5b34"/>

<ellipse cx="400" cy="846" rx="72" ry="14" fill="#3f7a2e" opacity="0.3"/>
<rect x="356" y="808" width="13" height="40" rx="5" fill="#3a3330"/>
<rect x="432" y="810" width="13" height="38" rx="5" fill="#3a3330"/>
<rect x="378" y="812" width="12" height="36" rx="5" fill="#4a423e"/>
<ellipse cx="406" cy="790" rx="66" ry="38" fill="#fbfaf6"/>
<ellipse cx="406" cy="778" rx="62" ry="29" fill="#ffffff"/>
<ellipse cx="384" cy="774" rx="20" ry="15" fill="#33302d"/>
<ellipse cx="438" cy="800" rx="17" ry="12" fill="#33302d"/>
<path d="M466 774 C 486 768 490 792 480 816 C 476 828 468 828 465 820" fill="#33302d"/>
<ellipse cx="344" cy="812" rx="26" ry="22" fill="#fbfaf6"/>
<ellipse cx="338" cy="824" rx="17" ry="12" fill="#e79a90"/>
<ellipse cx="334" cy="800" rx="6" ry="5" fill="#33302d"/>

<ellipse cx="630" cy="812" rx="72" ry="15" fill="#3f7a2e" opacity="0.3"/>
<rect x="588" y="772" width="13" height="42" rx="5" fill="#3a3330"/>
<rect x="662" y="774" width="13" height="40" rx="5" fill="#3a3330"/>
<rect x="610" y="776" width="12" height="38" rx="5" fill="#4a423e"/>
<ellipse cx="636" cy="752" rx="66" ry="38" fill="#fbfaf6"/>
<ellipse cx="636" cy="740" rx="62" ry="29" fill="#ffffff"/>
<ellipse cx="612" cy="734" rx="21" ry="15" fill="#33302d"/>
<ellipse cx="666" cy="762" rx="17" ry="12" fill="#33302d"/>
<path d="M696 730 C 716 724 720 748 710 772 C 706 784 698 784 695 776" fill="#33302d"/>
<ellipse cx="570" cy="734" rx="27" ry="23" fill="#fbfaf6"/>
<ellipse cx="564" cy="746" rx="17" ry="12" fill="#e79a90"/>
<circle cx="558" cy="744" r="3" fill="#8a5b34"/>
<ellipse cx="560" cy="722" rx="6" ry="5" fill="#33302d"/>
<path d="M546 720 C 534 712 532 726 544 732 Z" fill="#f0d3cd"/>
<path d="M590 714 C 600 706 604 716 594 724 Z" fill="#f0d3cd"/>
<rect x="560" y="760" width="20" height="7" rx="3" fill="#8a5b34"/>

<g data-obj="alphorn">
  <polygon points="688,813 700,827 686,859 654,823" fill="#a5713a"/>
  <polygon points="688,813 694,820 670,845 654,823" fill="#c08b4f"/>
  <ellipse cx="670" cy="841" rx="24" ry="8" transform="rotate(48 670 841)" fill="#5c4132"/>
  <ellipse cx="670" cy="841" rx="17" ry="5" transform="rotate(48 670 841)" fill="#3f2c20"/>
  <polygon points="769,746 775,754 700,827 688,813" fill="#c08b4f"/>
  <polygon points="769,746 772,750 694,820 688,813" fill="#d9a86a"/>
  <polygon points="738,780 746,789 734,800 726,791" fill="#8a5b34"/>
  <polygon points="715,802 723,811 711,822 703,813" fill="#8a5b34"/>
  <circle cx="772" cy="750" r="7" fill="#6d4425"/>
  <circle cx="772" cy="750" r="3" fill="#3f2c20"/>
</g>

<ellipse cx="60" cy="716" rx="18" ry="10" fill="#4e8737"/>
<circle cx="52" cy="708" r="5" fill="#f7d14e"/>
<circle cx="66" cy="706" r="5" fill="#ffffff"/>
<ellipse cx="470" cy="716" rx="17" ry="9" fill="#4e8737"/>
<circle cx="464" cy="708" r="5" fill="#ffffff"/>
<circle cx="478" cy="706" r="4" fill="#c4a6fb"/>
<ellipse cx="120" cy="866" rx="22" ry="11" fill="#4e8737"/>
<circle cx="112" cy="856" r="6" fill="#f7d14e"/>
<circle cx="128" cy="854" r="5" fill="#ffffff"/>
<ellipse cx="270" cy="878" rx="24" ry="12" fill="#4e8737"/>
<circle cx="262" cy="866" r="6" fill="#ffffff"/>
<circle cx="280" cy="864" r="5" fill="#e0402c"/>
<ellipse cx="700" cy="880" rx="24" ry="12" fill="#4e8737"/>
<circle cx="692" cy="868" r="6" fill="#f7d14e"/>
<circle cx="710" cy="866" r="5" fill="#c4a6fb"/>

<ellipse cx="30" cy="872" rx="22" ry="11" fill="#4e8737"/>
<circle cx="24" cy="860" r="6" fill="#f7d14e"/>
<circle cx="40" cy="858" r="5" fill="#ffffff"/>
<ellipse cx="250" cy="840" rx="21" ry="10" fill="#4e8737"/>
<circle cx="244" cy="829" r="6" fill="#ffffff"/>
<ellipse cx="302" cy="860" rx="23" ry="11" fill="#4e8737"/>
<circle cx="296" cy="848" r="6" fill="#e0402c"/>
<circle cx="312" cy="846" r="5" fill="#f7d14e"/>
<ellipse cx="462" cy="848" rx="21" ry="10" fill="#4e8737"/>
<circle cx="456" cy="837" r="6" fill="#c4a6fb"/>
<ellipse cx="752" cy="874" rx="24" ry="12" fill="#4e8737"/>
<circle cx="746" cy="861" r="6" fill="#f7d14e"/>
<circle cx="762" cy="859" r="5" fill="#ffffff"/>
<ellipse cx="786" cy="902" rx="22" ry="11" fill="#4e8737"/>
<circle cx="780" cy="890" r="6" fill="#e0402c"/>
<ellipse cx="180" cy="858" rx="22" ry="12" fill="#98a4b0"/>
<ellipse cx="176" cy="853" rx="16" ry="7" fill="#c0c9d2"/>
<ellipse cx="342" cy="852" rx="17" ry="9" fill="#98a4b0"/>
<ellipse cx="339" cy="848" rx="12" ry="5" fill="#c0c9d2"/>
<ellipse cx="612" cy="872" rx="24" ry="12" fill="#98a4b0"/>
<ellipse cx="608" cy="867" rx="17" ry="7" fill="#c0c9d2"/>
<ellipse cx="700" cy="892" rx="18" ry="9" fill="#98a4b0"/>
<ellipse cx="697" cy="888" rx="12" ry="5" fill="#c0c9d2"/>

<ellipse cx="270" cy="1120" rx="240" ry="34" fill="#3f7a2e" opacity="0.28"/>
<polygon points="92,952 118,952 152,1122 122,1122" fill="#8a5b34"/>
<polygon points="216,952 242,952 200,1122 172,1122" fill="#7a4f2d"/>
<polygon points="330,952 356,952 390,1122 360,1122" fill="#8a5b34"/>
<polygon points="452,952 478,952 438,1122 410,1122" fill="#7a4f2d"/>
<rect x="120" y="1032" width="300" height="14" rx="4" fill="#6d4425"/>
<rect x="30" y="1046" width="500" height="22" rx="5" fill="#a06537"/>
<rect x="30" y="1046" width="500" height="8" rx="4" fill="#c08b4f"/>
<polygon points="60,952 500,952 530,864 90,864" fill="#c08b4f"/>
<polygon points="60,952 500,952 496,936 66,936" fill="#8a5b34"/>
<path d="M120 940 L152 872" stroke="#a06537" stroke-width="3"/>
<polygon points="60,952 260,952 288,864 90,864" fill="#f6e7c9" opacity="0.85"/>
<path d="M118 864 L92 952" stroke="#d33c28" stroke-width="9" opacity="0.55"/>
<path d="M84 892 L286 892" stroke="#d33c28" stroke-width="9" opacity="0.45"/>

<ellipse cx="140" cy="906" rx="52" ry="14" fill="#8a5b34" opacity="0.35"/>
<ellipse cx="140" cy="900" rx="52" ry="13" fill="#c08b4f"/>
<ellipse cx="140" cy="896" rx="46" ry="10" fill="#d9ad74"/>
<ellipse cx="120" cy="878" rx="34" ry="22" fill="#c98d4e"/>
<ellipse cx="120" cy="870" rx="30" ry="16" fill="#e0aa6c"/>
<path d="M100 868 L140 866" stroke="#a5713a" stroke-width="4"/>
<path d="M104 878 L138 876" stroke="#a5713a" stroke-width="4"/>
<ellipse cx="166" cy="886" rx="20" ry="13" fill="#dfae72"/>
<ellipse cx="166" cy="881" rx="17" ry="9" fill="#efc890"/>
<path d="M154 880 L178 879" stroke="#c08b4f" stroke-width="3"/>

<rect x="196" y="852" width="40" height="52" rx="6" fill="#d33c28"/>
<rect x="196" y="852" width="14" height="52" rx="6" fill="#e85a44"/>
<rect x="192" y="846" width="48" height="14" rx="5" fill="#f6e7c9"/>
<ellipse cx="216" cy="846" rx="24" ry="8" fill="#fdf6e6"/>
<rect x="240" y="862" width="38" height="44" rx="6" fill="#6d3fd6"/>
<rect x="240" y="862" width="13" height="44" rx="6" fill="#8b5cf6"/>
<rect x="236" y="856" width="46" height="13" rx="5" fill="#f6e7c9"/>
<ellipse cx="259" cy="856" rx="23" ry="7" fill="#fdf6e6"/>
<rect x="418" y="856" width="40" height="50" rx="6" fill="#e8952c"/>
<rect x="418" y="856" width="14" height="50" rx="6" fill="#f5b155"/>
<rect x="414" y="850" width="48" height="13" rx="5" fill="#f6e7c9"/>
<ellipse cx="438" cy="850" rx="24" ry="7" fill="#fdf6e6"/>

<path d="M462 878 L470 942 L508 942 L516 878 Z" fill="#eef4f8"/>
<path d="M462 878 L470 942 L488 942 L484 878 Z" fill="#ffffff"/>
<rect x="456" y="870" width="66" height="14" rx="6" fill="#cfe0ea"/>
<path d="M516 890 C 540 892 540 916 518 918" fill="none" stroke="#cfe0ea" stroke-width="9"/>
<ellipse cx="489" cy="877" rx="30" ry="7" fill="#ffffff"/>

<path d="M300 918 L308 948 L336 948 L344 918 Z" fill="#f6e7c9"/>
<path d="M300 918 L308 948 L320 948 L316 918 Z" fill="#fdf6e6"/>
<path d="M344 926 C 360 928 360 942 346 944" fill="none" stroke="#f6e7c9" stroke-width="6"/>
<ellipse cx="322" cy="918" rx="22" ry="6" fill="#8a5b34"/>

<ellipse cx="196" cy="936" rx="34" ry="12" fill="#cfe0ea"/>
<path d="M162 934 C 166 954 226 954 230 934 Z" fill="#eef4f8"/>
<circle cx="180" cy="930" r="7" fill="#6d3fd6"/>
<circle cx="196" cy="928" r="8" fill="#4a2f9e"/>
<circle cx="212" cy="931" r="7" fill="#8b5cf6"/>

<ellipse cx="96" cy="908" rx="34" ry="24" fill="#eef4f8"/>
<ellipse cx="90" cy="898" rx="26" ry="15" fill="#ffffff"/>
<path d="M126 900 C 142 896 144 916 130 920" fill="none" stroke="#cfe0ea" stroke-width="7"/>
<path d="M64 900 C 52 892 46 900 54 908 Z" fill="#cfe0ea"/>
<ellipse cx="96" cy="884" rx="13" ry="6" fill="#cfe0ea"/>
<circle cx="96" cy="878" r="4" fill="#d33c28"/>
<path d="M368 912 L372 938 L390 938 L394 912 Z" fill="#eef4f8"/>
<ellipse cx="381" cy="910" rx="13" ry="10" fill="#f0e2c4"/>
<path d="M402 914 L406 940 L424 940 L428 914 Z" fill="#eef4f8"/>
<ellipse cx="415" cy="912" rx="13" ry="10" fill="#fdf6e6"/>
<path d="M432 912 L436 944 L462 944 L466 912 Z" fill="#e8952c"/>
<path d="M432 912 L436 944 L446 944 L443 912 Z" fill="#f5b155"/>
<rect x="428" y="904" width="42" height="12" rx="5" fill="#f6e7c9"/>
<path d="M292 936 L286 952 L346 952 L340 934 Z" fill="#f6e7c9"/>
<path d="M292 936 L286 952 L312 952 L314 935 Z" fill="#fdf6e6"/>

<g data-obj="chocolate-bar" transform="rotate(-6 306 920)">
  <rect x="250" y="894" width="112" height="54" rx="6" fill="#6e4a55"/>
  <rect x="250" y="932" width="112" height="16" rx="6" fill="#513440"/>
  <rect x="250" y="894" width="112" height="9" rx="5" fill="#8a6270"/>
  <ellipse cx="330" cy="920" rx="20" ry="12" fill="#e2cdae" opacity="0.45"/>
  <rect x="244" y="890" width="62" height="60" rx="6" fill="#c2b9ac"/>
  <rect x="244" y="890" width="62" height="10" rx="5" fill="#d8d1c6"/>
  <rect x="250" y="898" width="50" height="46" rx="4" fill="#5c3520"/>
  <rect x="253" y="901" width="21" height="19" rx="2" fill="#432613"/>
  <rect x="277" y="901" width="21" height="19" rx="2" fill="#432613"/>
  <rect x="253" y="922" width="21" height="19" rx="2" fill="#432613"/>
  <rect x="277" y="922" width="21" height="19" rx="2" fill="#432613"/>
  <rect x="253" y="901" width="21" height="4" rx="2" fill="#6b4028"/>
  <rect x="277" y="901" width="21" height="4" rx="2" fill="#6b4028"/>
</g>

<ellipse cx="254" cy="940" rx="44" ry="14" fill="#8a5b34"/>
<ellipse cx="254" cy="934" rx="44" ry="13" fill="#c08b4f"/>
<ellipse cx="254" cy="930" rx="38" ry="10" fill="#d9ad74"/>
<ellipse cx="246" cy="920" rx="26" ry="15" fill="#dfae72"/>
<ellipse cx="246" cy="914" rx="22" ry="10" fill="#efc890"/>
<path d="M232 914 L262 913" stroke="#c08b4f" stroke-width="3"/>

<ellipse cx="660" cy="1168" rx="200" ry="40" fill="#3f7a2e" opacity="0.28"/>
<rect x="614" y="900" width="182" height="112" rx="6" fill="#a06537"/>
<rect x="614" y="900" width="182" height="12" rx="5" fill="#c08b4f"/>
<rect x="620" y="900" width="12" height="112" fill="#7a4f2d"/>
<rect x="778" y="900" width="12" height="112" fill="#7a4f2d"/>
<circle cx="648" cy="890" r="24" fill="#d33c28"/>
<circle cx="642" cy="882" r="9" fill="#e85a44"/>
<path d="M648 866 C 650 858 658 856 662 860" fill="none" stroke="#4e8737" stroke-width="5"/>
<circle cx="694" cy="884" r="21" fill="#c02f1e"/>
<circle cx="736" cy="888" r="23" fill="#e8952c"/>

<rect x="540" y="1010" width="256" height="152" rx="7" fill="#b87a45"/>
<rect x="540" y="1010" width="256" height="14" rx="6" fill="#d09a5e"/>
<rect x="546" y="1010" width="14" height="152" fill="#96602f"/>
<rect x="776" y="1010" width="14" height="152" fill="#96602f"/>
<rect x="530" y="1000" width="276" height="16" rx="6" fill="#8a5b34"/>

<g data-obj="cheese-wheel">
  <path d="M585 1044 L585 1076 Q 585 1098 639 1098 Q 693 1098 693 1076 L693 1044 Z" fill="#d8a94a"/>
  <path d="M585 1044 L585 1076 Q 585 1092 616 1096 L616 1044 Z" fill="#e8bd63"/>
  <ellipse cx="639" cy="1044" rx="54" ry="22" fill="#f2cf6e"/>
  <ellipse cx="639" cy="1042" rx="43" ry="16" fill="#fae7a8"/>
  <polygon points="639,1042 596,1036 604,1026 639,1024" fill="#f7dc90"/>
  <ellipse cx="622" cy="1040" rx="6" ry="4" fill="#e8c98a"/>
  <ellipse cx="652" cy="1046" rx="7" ry="5" fill="#e8c98a"/>
  <ellipse cx="666" cy="1038" rx="5" ry="3" fill="#e8c98a"/>
  <ellipse cx="608" cy="1068" rx="6" ry="7" fill="#c99a3c"/>
  <ellipse cx="662" cy="1076" rx="7" ry="8" fill="#c99a3c"/>
  <path d="M585 1058 Q 639 1074 693 1058" fill="none" stroke="#c99a3c" stroke-width="3" opacity="0.6"/>
</g>

<path d="M706 1030 C 690 1044 690 1078 706 1092 L766 1092 C 782 1078 782 1044 766 1030 Z" fill="#c9a06a"/>
<path d="M706 1030 C 690 1044 690 1078 706 1092 L730 1092 C 718 1078 718 1044 730 1030 Z" fill="#dcb682"/>
<ellipse cx="736" cy="1030" rx="30" ry="10" fill="#a5713a"/>
<circle cx="722" cy="1022" r="13" fill="#e0402c"/>
<circle cx="748" cy="1020" r="14" fill="#c02f1e"/>
<path d="M560 1148 C 556 1120 566 1096 582 1088" fill="none" stroke="#e8952c" stroke-width="13" stroke-linecap="round"/>
<path d="M578 1152 C 574 1124 584 1100 600 1092" fill="none" stroke="#f5a63f" stroke-width="13" stroke-linecap="round"/>
<path d="M582 1088 C 578 1076 588 1070 594 1078" fill="none" stroke="#4e8737" stroke-width="6"/>
<path d="M600 1092 C 596 1078 608 1072 614 1082" fill="none" stroke="#4e8737" stroke-width="6"/>
<ellipse cx="700" cy="1150" rx="34" ry="20" fill="#8a5b34"/>
<ellipse cx="700" cy="1142" rx="34" ry="17" fill="#a5713a"/>
<path d="M762 1148 L790 1010" stroke="#a5713a" stroke-width="11" stroke-linecap="round"/>

<path d="M330 1156 C 328 1122 342 1102 358 1098" fill="none" stroke="#6ba84b" stroke-width="9"/>
<circle cx="358" cy="1094" r="7" fill="#ffffff"/>
<path d="M430 1162 C 428 1130 444 1112 460 1108" fill="none" stroke="#6ba84b" stroke-width="9"/>
<circle cx="460" cy="1104" r="7" fill="#c4a6fb"/>
<path d="M520 1188 C 540 1172 566 1176 574 1192" fill="none" stroke="#4e8737" stroke-width="10"/>
<path d="M120 1180 C 138 1162 162 1166 172 1184" fill="none" stroke="#4e8737" stroke-width="10"/>
<path d="M640 1190 C 658 1176 682 1180 692 1196" fill="none" stroke="#4e8737" stroke-width="10"/>

<rect x="72" y="1068" width="16" height="56" rx="4" fill="#7a4f2d"/>
<rect x="466" y="1068" width="16" height="56" rx="4" fill="#7a4f2d"/>
<ellipse cx="140" cy="1188" rx="46" ry="10" fill="#3f7a2e" opacity="0.3"/>
<path d="M100 1132 L108 1184 L172 1184 L180 1132 Z" fill="#c9a06a"/>
<path d="M100 1132 L108 1184 L128 1184 L124 1132 Z" fill="#dcb682"/>
<rect x="94" y="1124" width="92" height="12" rx="5" fill="#a5713a"/>
<path d="M102 1154 L178 1154" stroke="#a5713a" stroke-width="4"/>
<path d="M112 1124 C 118 1100 162 1100 168 1124" fill="none" stroke="#a5713a" stroke-width="5"/>
<path d="M300 1140 L300 1182 L330 1182 L330 1140 Q 330 1130 322 1126 L322 1114 L308 1114 L308 1126 Q 300 1130 300 1140 Z" fill="#eef4f8"/>
<path d="M300 1140 L300 1182 L312 1182 L312 1126 Q 314 1122 316 1120 L316 1114 L308 1114 L308 1126 Q 300 1130 300 1140 Z" fill="#ffffff"/>
<rect x="304" y="1108" width="22" height="9" rx="3" fill="#cfe0ea"/>
<circle cx="352" cy="1172" r="14" fill="#d33c28"/>
<circle cx="347" cy="1165" r="5" fill="#e85a44"/>
<circle cx="380" cy="1180" r="12" fill="#c02f1e"/>
<ellipse cx="404" cy="1132" rx="24" ry="12" fill="#98a4b0"/>
<ellipse cx="400" cy="1127" rx="17" ry="7" fill="#c0c9d2"/>
<ellipse cx="492" cy="1064" rx="19" ry="10" fill="#98a4b0"/>
<ellipse cx="489" cy="1060" rx="13" ry="6" fill="#c0c9d2"/>
<ellipse cx="58" cy="1056" rx="24" ry="12" fill="#4e8737"/>
<circle cx="52" cy="1044" r="6" fill="#f7d14e"/>
<ellipse cx="356" cy="1112" rx="22" ry="11" fill="#4e8737"/>
<circle cx="350" cy="1100" r="6" fill="#ffffff"/>
<ellipse cx="474" cy="1186" rx="26" ry="13" fill="#4e8737"/>
<circle cx="468" cy="1173" r="7" fill="#e0402c"/>

<g data-obj="edelweiss">
  <path d="M240 1192 C 236 1170 238 1152 240 1140" fill="none" stroke="#6b9a4a" stroke-width="7"/>
  <path d="M240 1172 C 226 1168 218 1156 220 1148 C 232 1148 240 1158 240 1172 Z" fill="#7db34f"/>
  <path d="M240 1180 C 254 1178 262 1168 262 1160 C 250 1158 240 1168 240 1180 Z" fill="#6b9a4a"/>
  <ellipse cx="240" cy="1142" rx="11" ry="33" fill="#fdfdf8"/>
  <ellipse cx="240" cy="1142" rx="11" ry="33" transform="rotate(45 240 1142)" fill="#fdfdf8"/>
  <ellipse cx="240" cy="1142" rx="11" ry="33" transform="rotate(90 240 1142)" fill="#f6f8f1"/>
  <ellipse cx="240" cy="1142" rx="11" ry="33" transform="rotate(135 240 1142)" fill="#fdfdf8"/>
  <ellipse cx="240" cy="1142" rx="9" ry="27" transform="rotate(22 240 1142)" fill="#ffffff"/>
  <ellipse cx="240" cy="1142" rx="9" ry="27" transform="rotate(112 240 1142)" fill="#ffffff"/>
  <circle cx="240" cy="1142" r="12" fill="#f5e2a6"/>
  <circle cx="234" cy="1137" r="4" fill="#f5d24e"/>
  <circle cx="245" cy="1136" r="4" fill="#f5d24e"/>
  <circle cx="236" cy="1147" r="4" fill="#e8bd63"/>
  <circle cx="246" cy="1146" r="4" fill="#f5d24e"/>
  <circle cx="240" cy="1141" r="3" fill="#e8bd63"/>
</g>
</svg>`
});
