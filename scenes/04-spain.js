window.SCENES = window.SCENES || [];
window.SCENES.push({
  id: 'spain',
  order: 4,
  country: 'Spain',
  flag: '🇪🇸',
  title: 'Tapas in the Sun',
  caption: 'Sunshine, tapas, and slow afternoons.',
  stamp: '🍊',
  objects: [
    { id: 'lightstick',    name: 'Lightstick' },
    { id: 'purple-heart',  name: 'Purple Heart' },
    { id: 'hand-fan',      name: 'Spanish Fan' },
    { id: 'castanets',     name: 'Castanets' },
    { id: 'paella-pan',    name: 'Paella Pan' },
    { id: 'orange',        name: 'Orange' },
    { id: 'guitar',        name: 'Guitar' },
    { id: 'flamenco-shoe', name: 'Flamenco Shoe' }
  ],
  svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 1200" width="800" height="1200">
<defs>
  <linearGradient id="spain-sky" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#5fb3de"/>
    <stop offset="0.55" stop-color="#a3d9ef"/>
    <stop offset="1" stop-color="#ffe6bd"/>
  </linearGradient>
  <radialGradient id="spain-sun" cx="0.5" cy="0.5" r="0.5">
    <stop offset="0" stop-color="#fff6cf" stop-opacity="0.95"/>
    <stop offset="1" stop-color="#fff6cf" stop-opacity="0"/>
  </radialGradient>
  <linearGradient id="spain-doorshade" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#2f2233"/>
    <stop offset="1" stop-color="#6b4a45"/>
  </linearGradient>
  <linearGradient id="spain-wall" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#fdf3df"/>
    <stop offset="1" stop-color="#f0dfc0"/>
  </linearGradient>
  <linearGradient id="spain-floor" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#dc9d6a"/>
    <stop offset="1" stop-color="#b4703f"/>
  </linearGradient>
  <linearGradient id="spain-cloth" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#fffaf0"/>
    <stop offset="1" stop-color="#ecdcc0"/>
  </linearGradient>
</defs>

<rect x="0" y="0" width="800" height="1200" fill="#f0dfc0"/>
<rect x="0" y="0" width="800" height="330" fill="url(#spain-sky)"/>
<circle cx="150" cy="80" r="160" fill="url(#spain-sun)"/>
<circle cx="150" cy="80" r="42" fill="#fff5cb" opacity="0.9"/>
<ellipse cx="470" cy="72" rx="54" ry="20" fill="#ffffff" opacity="0.5"/>
<path d="M566 168 q7 -6 14 0 q7 -6 14 0" fill="none" stroke="#4a6d80" stroke-width="2.5" stroke-linecap="round"/>
<path d="M604 148 q6 -5 12 0 q6 -5 12 0" fill="none" stroke="#4a6d80" stroke-width="2.2" stroke-linecap="round"/>

<g>
  <rect x="-10" y="252" width="212" height="200" fill="#fdf3df"/>
  <rect x="152" y="252" width="50" height="200" fill="#e9d7b7"/>
  <polygon points="-16,254 206,254 196,230 -6,230" fill="#c9663a"/>
  <polygon points="-16,254 206,254 204,246 -14,246" fill="#e08a58"/>
  <rect x="18" y="292" width="42" height="56" rx="3" fill="#3c5a72"/>
  <rect x="18" y="292" width="20" height="56" fill="#2f6fb3"/>
  <rect x="14" y="348" width="50" height="7" fill="#c9663a"/>
</g>

<g>
  <rect x="180" y="216" width="204" height="236" fill="#f8ecd4"/>
  <rect x="336" y="216" width="48" height="236" fill="#e4d0ac"/>
  <polygon points="174,218 390,218 380,194 184,194" fill="#b8552f"/>
  <polygon points="174,218 390,218 388,210 172,210" fill="#dd7d4b"/>
  <rect x="204" y="256" width="44" height="58" rx="4" fill="#3c5a72"/>
  <rect x="204" y="256" width="21" height="58" fill="#2f6fb3"/>
  <rect x="200" y="314" width="52" height="7" fill="#c9663a"/>
</g>

<g>
  <rect x="396" y="146" width="112" height="306" fill="#fdf3df"/>
  <rect x="474" y="146" width="34" height="306" fill="#e9d7b7"/>
  <polygon points="390,148 514,148 452,96" fill="#b8552f"/>
  <polygon points="390,148 452,96 452,148" fill="#dd7d4b"/>
  <path d="M414 214 q38 -40 76 0 L490 268 L414 268 Z" fill="#4a3b52"/>
  <path d="M424 218 q28 -30 56 0 L480 262 L424 262 Z" fill="#2f2233"/>
  <path d="M438 226 q14 -12 28 0 q3 16 -14 24 q-17 -8 -14 -24 Z" fill="#c9963f"/>
  <rect x="410" y="268" width="84" height="9" fill="#c9663a"/>
  <circle cx="452" cy="316" r="20" fill="#3c5a72"/>
  <circle cx="452" cy="316" r="13" fill="#4f95d6"/>
</g>

<g>
  <rect x="506" y="246" width="182" height="206" fill="#f8ecd4"/>
  <rect x="644" y="246" width="44" height="206" fill="#e4d0ac"/>
  <polygon points="500,248 694,248 684,226 510,226" fill="#c9663a"/>
  <polygon points="500,248 694,248 692,240 498,240" fill="#e08a58"/>
  <rect x="526" y="282" width="40" height="54" rx="4" fill="#3c5a72"/>
  <rect x="546" y="282" width="20" height="54" fill="#4f95d6"/>
  <rect x="522" y="336" width="48" height="7" fill="#c9663a"/>
</g>

<rect x="672" y="272" width="146" height="180" fill="#f6e9d0"/>
<polygon points="666,274 822,274 812,252 676,252" fill="#b8552f"/>

<g>
  <path d="M-5 262 Q200 332 400 300 Q600 268 805 300" fill="none" stroke="#7d5228" stroke-width="3"/>
  <polygon points="4,282 36,290 20,320" fill="#2f6fb3"/>
  <polygon points="214,320 246,320 230,350" fill="#fdf3df"/>
  <polygon points="324,308 356,304 340,334" fill="#7c9a52"/>
  <polygon points="424,295 456,291 440,321" fill="#8b5cf6"/>
  <polygon points="644,283 676,286 660,316" fill="#2f6fb3"/>
  <polygon points="754,294 786,301 770,331" fill="#f2c14e"/>
</g>

<rect x="0" y="400" width="800" height="524" fill="url(#spain-wall)"/>
<rect x="0" y="392" width="800" height="18" fill="#f9ecd2"/>
<rect x="560" y="400" width="240" height="524" fill="#e6d0aa" opacity="0.4"/>
<rect x="0" y="906" width="800" height="18" fill="#d9c39c" opacity="0.6"/>

<rect x="30" y="518" width="94" height="94" rx="4" fill="#e5d2ae"/>
<rect x="36" y="524" width="82" height="82" fill="#eaf3fb"/>
<path d="M77 532 L85 550 L103 558 L85 566 L77 584 L69 566 L51 558 L69 550 Z" fill="#1c4b80"/>
<rect x="36" y="524" width="82" height="82" fill="none" stroke="#2f6fb3" stroke-width="5"/>
<rect x="208" y="470" width="7" height="20" fill="#5c4a3a"/>
<path d="M212 490 Q194 508 199 534 Q204 560 212 586" fill="none" stroke="#7d5228" stroke-width="4"/>
<path d="M212 490 Q230 510 227 536 Q222 562 216 588" fill="none" stroke="#7d5228" stroke-width="4"/>
<path d="M197 512 q-9 16 0 26 q9 -10 0 -26 Z" fill="#c62b4a"/>
<path d="M229 520 q9 16 0 26 q-9 -10 0 -26 Z" fill="#c62b4a"/>
<path d="M200 546 q-8 18 0 30 q8 -12 0 -30 Z" fill="#e0563f"/>
<path d="M225 552 q8 18 0 30 q-8 -12 0 -30 Z" fill="#8f1732"/>
<path d="M212 566 q-7 18 0 30 q7 -12 0 -30 Z" fill="#c62b4a"/>

<g>
  <rect x="146" y="440" width="8" height="34" fill="#5c4a3a"/>
  <rect x="118" y="436" width="64" height="8" rx="3" fill="#5c4a3a"/>
  <path d="M126 474 L174 474 L166 520 L134 520 Z" fill="#3c5a72"/>
  <path d="M126 474 L150 474 L146 520 L134 520 Z" fill="#4f95d6"/>
  <ellipse cx="150" cy="502" rx="10" ry="12" fill="#ffe9a8" opacity="0.9"/>
  <polygon points="126,474 174,474 166,466 134,466" fill="#2f2233"/>
</g>

<path d="M238 900 L238 556 Q238 458 335 458 Q432 458 432 556 L432 900 Z" fill="#e2b183"/>
<path d="M244 900 L244 558 Q244 464 335 464 Q426 464 426 558 L426 900 Z" fill="#c98f55"/>
<path d="M252 900 L252 560 Q252 472 335 472 Q418 472 418 560 L418 900 Z" fill="url(#spain-doorshade)"/>
<path d="M252 560 Q252 472 335 472 Q418 472 418 560" fill="none" stroke="#8a6a5a" stroke-width="5"/>
<path d="M258 490 L258 900 L268 900 L268 484 Z" fill="#4a3b52" opacity="0.6"/>
<path d="M262 500 L262 856 M276 486 L276 856 M290 478 L290 856 M304 474 L304 856" stroke="#5b4552" stroke-width="2" opacity="0.75"/>
<rect x="252" y="852" width="166" height="28" fill="#8a6a5a"/>
<rect x="252" y="852" width="166" height="9" fill="#a58374"/>
<rect x="252" y="880" width="166" height="14" fill="#6b4a45"/>

<g data-obj="guitar" transform="rotate(-9 338 850)">
  <ellipse cx="338" cy="822" rx="42" ry="30" fill="#a5682c"/>
  <ellipse cx="338" cy="818" rx="42" ry="30" fill="#d99a4e"/>
  <ellipse cx="338" cy="784" rx="32" ry="24" fill="#a5682c"/>
  <ellipse cx="338" cy="781" rx="32" ry="24" fill="#d99a4e"/>
  <path d="M306 786 Q322 800 306 812 L370 812 Q354 800 370 786 Z" fill="#d99a4e"/>
  <ellipse cx="326" cy="772" rx="16" ry="10" fill="#efc078" opacity="0.7"/>
  <ellipse cx="322" cy="812" rx="18" ry="11" fill="#efc078" opacity="0.55"/>
  <circle cx="338" cy="804" r="15" fill="#3a2415"/>
  <circle cx="338" cy="804" r="15" fill="none" stroke="#8b5cf6" stroke-width="3"/>
  <circle cx="338" cy="804" r="19" fill="none" stroke="#f2c14e" stroke-width="2"/>
  <rect x="320" y="836" width="36" height="9" rx="2" fill="#5c3a1c"/>
  <rect x="330" y="742" width="17" height="52" fill="#8a5a30"/>
  <rect x="330" y="742" width="7" height="52" fill="#a06d3c"/>
  <path d="M330 756 L347 756 M330 768 L347 768 M330 780 L347 780" stroke="#e9d7b7" stroke-width="1.6"/>
  <rect x="329" y="737" width="19" height="6" rx="1" fill="#f2e2c2"/>
  <path d="M329 737 L327 715 L350 715 L348 737 Z" fill="#6b4526"/>
  <circle cx="333" cy="722" r="2.6" fill="#e9d7b7"/>
  <circle cx="344" cy="722" r="2.6" fill="#e9d7b7"/>
  <circle cx="333" cy="731" r="2.6" fill="#e9d7b7"/>
  <circle cx="344" cy="731" r="2.6" fill="#e9d7b7"/>
  <path d="M333 741 L332 838 M336 741 L335 838 M339 741 L340 838 M342 741 L343 838" stroke="#f6ecd6" stroke-width="1.2" opacity="0.9"/>
</g>

<rect x="418" y="550" width="212" height="212" rx="4" fill="#e5d2ae"/>
<rect x="424" y="556" width="200" height="200" fill="#fbf4e4"/>
<rect x="428" y="560" width="45" height="45" rx="2" fill="#eaf3fb"/>
<rect x="477" y="560" width="45" height="45" rx="2" fill="#dbe9f7"/>
<path d="M499 562 L505 576 L519 582 L505 588 L499 602 L493 588 L479 582 L493 576 Z" fill="#1c4b80"/>
<rect x="526" y="560" width="45" height="45" rx="2" fill="#eaf3fb"/>
<rect x="575" y="560" width="45" height="45" rx="2" fill="#dbe9f7"/>
<path d="M597 562 L603 576 L617 582 L603 588 L597 602 L591 588 L577 582 L591 576 Z" fill="#1c4b80"/>
<rect x="428" y="609" width="45" height="45" rx="2" fill="#dbe9f7"/>
<path d="M450 631 Q441 620 450 610 Q459 620 450 631 Z M450 631 Q461 622 471 631 Q461 640 450 631 Z M450 631 Q441 642 450 652 Q459 642 450 631 Z M450 631 Q439 622 429 631 Q439 640 450 631 Z" fill="#64559f"/>
<rect x="477" y="609" width="45" height="45" rx="2" fill="#f6efdd"/>
<rect x="526" y="609" width="45" height="45" rx="2" fill="#dbe9f7"/>
<path d="M548 631 Q539 620 548 610 Q557 620 548 631 Z M548 631 Q559 622 569 631 Q559 640 548 631 Z M548 631 Q539 642 548 652 Q557 642 548 631 Z M548 631 Q537 622 527 631 Q537 640 548 631 Z" fill="#6a5fa8"/>
<rect x="575" y="609" width="45" height="45" rx="2" fill="#eaf3fb"/>
<rect x="428" y="658" width="45" height="45" rx="2" fill="#eaf3fb"/>
<rect x="477" y="658" width="45" height="45" rx="2" fill="#dbe9f7"/>
<path d="M499 680 Q488 668 499 658 Q510 668 499 680 Z M499 680 Q511 669 521 680 Q511 691 499 680 Z M499 680 Q510 692 499 702 Q488 692 499 680 Z M499 680 Q487 669 477 680 Q487 691 499 680 Z" fill="#5a4f95"/>
<rect x="526" y="658" width="45" height="45" rx="2" fill="#eaf3fb"/>
<rect x="575" y="658" width="45" height="45" rx="2" fill="#dbe9f7"/>
<path d="M597 660 L603 674 L617 680 L603 686 L597 700 L591 686 L577 680 L591 674 Z" fill="#1c4b80"/>
<rect x="428" y="707" width="45" height="45" rx="2" fill="#dbe9f7"/>
<path d="M450 709 L456 723 L470 729 L456 735 L450 749 L444 735 L430 729 L444 723 Z" fill="#1c4b80"/>
<rect x="477" y="707" width="45" height="45" rx="2" fill="#eaf3fb"/>
<rect x="526" y="707" width="45" height="45" rx="2" fill="#dbe9f7"/>
<path d="M548 709 L554 723 L568 729 L554 735 L548 749 L542 735 L528 729 L542 723 Z" fill="#5b3fa8"/>
<rect x="575" y="707" width="45" height="45" rx="2" fill="#eaf3fb"/>
<path d="M441 573 L459 573 M441 591 L459 591 M539 573 L557 573 M539 591 L557 591 M588 671 L606 671 M441 720 L459 720 M490 720 L508 720 M588 720 L606 720" stroke="#f2c14e" stroke-width="4" fill="none"/>
<rect x="424" y="556" width="200" height="200" fill="none" stroke="#2f6fb3" stroke-width="5"/>

<g data-obj="purple-heart">
  <path d="M499 659 C467 638 469 612 485 608 C493 606 499 611 499 616 C499 611 505 606 513 608 C529 612 531 638 499 659 Z" fill="#64559f"/>
  <path d="M499 651 C475 634 476 615 486 613 C492 611 496 615 497 619 C494 630 494 641 499 651 Z" fill="#8579c0" opacity="0.7"/>
  <path d="M499 659 C467 638 469 612 485 608 C493 606 499 611 499 616 C499 611 505 606 513 608 C529 612 531 638 499 659 Z" fill="none" stroke="#443a75" stroke-width="2.5"/>
</g>

<g data-obj="hand-fan">
  <path d="M560 775 L496 752 A68 68 0 0 1 624 752 Z" fill="#fbf4e4"/>
  <path d="M560 775 L500 753 A64 64 0 0 1 620 753 Z" fill="none" stroke="#2f6fb3" stroke-width="9"/>
  <path d="M560 775 L532 765 A30 30 0 0 1 588 765 Z" fill="#f2c14e"/>
  <path d="M560 775 L496 752 M560 775 L510 730 M560 775 L534 715 M560 775 L560 707 M560 775 L586 715 M560 775 L610 730 M560 775 L624 752" stroke="#e0cba4" stroke-width="2.4" fill="none"/>
  <path d="M523 741 L527 749 L536 752 L527 755 L523 763 L519 755 L510 752 L519 749 Z" fill="#1c4b80"/>
  <path d="M560 731 L564 739 L573 742 L564 745 L560 753 L556 745 L547 742 L556 739 Z" fill="#1c4b80"/>
  <path d="M597 741 L601 749 L610 752 L601 755 L597 763 L593 755 L584 752 L593 749 Z" fill="#1c4b80"/>
  <circle cx="541" cy="726" r="3.5" fill="#e0563f"/>
  <circle cx="579" cy="726" r="3.5" fill="#e0563f"/>
  <circle cx="560" cy="718" r="3.5" fill="#7c3aed"/>
  <path d="M496 752 A68 68 0 0 1 624 752" fill="none" stroke="#8a5a30" stroke-width="3.5"/>
  <path d="M553 772 L548 786 L556 788 L560 776 Z" fill="#8a5a30"/>
  <path d="M567 772 L572 786 L564 788 L560 776 Z" fill="#8a5a30"/>
  <circle cx="560" cy="774" r="6" fill="#f2c14e"/>
  <circle cx="560" cy="774" r="2.5" fill="#7d5228"/>
</g>

<rect x="330" y="452" width="330" height="9" rx="3" fill="#8a5a30"/>
<polygon points="352,461 366,461 356,478" fill="#6b4526"/>
<polygon points="620,461 634,461 624,478" fill="#6b4526"/>
<g>
  <rect x="334" y="464" width="60" height="12" rx="3" fill="#e08a58"/>
  <path d="M338 476 L344 520 Q364 528 384 520 L390 476 Z" fill="#c9663a"/>
  <path d="M338 476 L344 520 Q352 524 358 524 L354 476 Z" fill="#dd7d4b"/>
  <ellipse cx="364" cy="474" rx="24" ry="6" fill="#5c4028"/>
  <path d="M364 472 Q344 452 336 462 Q344 476 364 474 Z" fill="#5c7a3a"/>
  <path d="M364 472 Q384 450 394 462 Q384 476 364 474 Z" fill="#7c9a52"/>
</g>
<rect x="509" y="462" width="72" height="13" rx="3" fill="#b8552f"/>
<ellipse cx="545" cy="474" rx="30" ry="8" fill="#4f3520"/>
<path d="M540 470 Q516 412 498 386 Q520 400 536 442 Z" fill="#5c7a3a"/>
<path d="M548 470 Q574 410 596 388 Q576 406 560 448 Z" fill="#5c7a3a"/>
<path d="M544 470 Q538 408 548 378 Q556 410 552 470 Z" fill="#6b8a46"/>
<path d="M542 462 Q512 434 496 424 Q518 428 540 452 Z" fill="#7c9a52"/>
<path d="M550 458 Q582 432 598 424 Q576 430 554 450 Z" fill="#7c9a52"/>
<circle cx="503" cy="392" r="8" fill="#a78bfa"/>
<circle cx="594" cy="394" r="8" fill="#8b5cf6"/>
<circle cx="549" cy="380" r="7" fill="#c4b0fb"/>

<g data-obj="lightstick">
  <ellipse cx="545" cy="424" rx="21" ry="33" fill="#7c6bb0"/>
  <ellipse cx="545" cy="424" rx="15" ry="27" fill="#9b8cc9"/>
  <ellipse cx="539" cy="414" rx="6" ry="13" fill="#cfc6e6" opacity="0.7"/>
  <ellipse cx="545" cy="424" rx="21" ry="33" fill="none" stroke="#5b4f8f" stroke-width="2.5"/>
  <rect x="533" y="454" width="24" height="12" rx="4" fill="#dcc79f"/>
  <rect x="536" y="464" width="18" height="38" rx="6" fill="#ede0c6"/>
  <rect x="536" y="476" width="18" height="8" fill="#6355a6"/>
  <rect x="536" y="464" width="6" height="38" rx="3" fill="#f7ecd8"/>
</g>

<path d="M513 470 L520 528 Q545 540 570 528 L577 470 Z" fill="#c9663a"/>
<path d="M513 470 L520 528 Q528 533 534 534 L530 470 Z" fill="#dd7d4b"/>
<rect x="509" y="460" width="72" height="15" rx="4" fill="#e08a58"/>
<rect x="509" y="460" width="72" height="5" rx="2" fill="#f2a878"/>
<path d="M545 470 Q520 452 512 464 Q522 476 545 472 Z" fill="#5c7a3a"/>
<path d="M545 470 Q572 450 580 464 Q570 478 545 472 Z" fill="#7c9a52"/>
<path d="M538 468 Q524 440 514 430 Q530 442 542 466 Z" fill="#6b8a46"/>
<path d="M553 468 Q568 442 580 432 Q564 444 556 466 Z" fill="#6b8a46"/>
<path d="M545 466 Q526 458 516 442 Q534 448 549 462 Z" fill="#5c7a3a"/>
<circle cx="516" cy="452" r="6" fill="#9b8cc9"/>
<circle cx="584" cy="448" r="6" fill="#7c6bb0"/>
<circle cx="524" cy="402" r="10" fill="#8579c0"/>
<circle cx="570" cy="413" r="10" fill="#6a5fa8"/>

<path d="M694 880 L688 620 L718 620 L724 880 Z" fill="#8a5a30"/>
<path d="M694 880 L688 620 L702 620 L706 880 Z" fill="#a06d3c"/>
<path d="M700 660 Q662 626 634 610" stroke="#8a5a30" stroke-width="14" fill="none" stroke-linecap="round"/>
<path d="M710 640 Q752 610 774 592" stroke="#8a5a30" stroke-width="12" fill="none" stroke-linecap="round"/>
<path d="M704 606 Q700 566 706 540" stroke="#8a5a30" stroke-width="11" fill="none" stroke-linecap="round"/>
<path d="M694 760 L700 740 M706 700 L714 686 M698 820 L692 800" stroke="#6b4526" stroke-width="3" fill="none"/>
<ellipse cx="700" cy="370" rx="104" ry="80" fill="#4e7a3f"/>
<ellipse cx="632" cy="430" rx="58" ry="56" fill="#4e7a3f"/>
<ellipse cx="766" cy="448" rx="66" ry="64" fill="#4e7a3f"/>
<ellipse cx="706" cy="520" rx="94" ry="68" fill="#4e7a3f"/>
<ellipse cx="672" cy="322" rx="58" ry="48" fill="#4e7a3f"/>
<ellipse cx="686" cy="352" rx="86" ry="62" fill="#6b9a52"/>
<ellipse cx="624" cy="418" rx="44" ry="42" fill="#6b9a52"/>
<ellipse cx="756" cy="436" rx="50" ry="48" fill="#6b9a52"/>
<ellipse cx="694" cy="506" rx="76" ry="52" fill="#6b9a52"/>
<ellipse cx="660" cy="330" rx="46" ry="30" fill="#86ad60" opacity="0.85"/>
<ellipse cx="672" cy="492" rx="42" ry="26" fill="#86ad60" opacity="0.7"/>
<circle cx="622" cy="340" r="18" fill="#f28c28"/>
<ellipse cx="616" cy="333" rx="6" ry="4" fill="#ffc57a" opacity="0.8"/>
<circle cx="704" cy="318" r="17" fill="#f28c28"/>
<ellipse cx="698" cy="311" rx="6" ry="4" fill="#ffc57a" opacity="0.8"/>
<circle cx="764" cy="380" r="19" fill="#f28c28"/>
<circle cx="732" cy="436" r="17" fill="#f28c28"/>
<circle cx="708" cy="552" r="18" fill="#f28c28"/>
<circle cx="602" cy="482" r="16" fill="#f28c28"/>

<g data-obj="orange">
  <circle cx="666" cy="472" r="35" fill="#d97a12"/>
  <circle cx="665" cy="468" r="35" fill="#f7a94b"/>
  <path d="M665 433 A35 35 0 0 1 690 495 A35 35 0 0 0 665 433 Z" fill="#e88a20"/>
  <ellipse cx="652" cy="454" rx="12" ry="8" fill="#ffd08a" opacity="0.9" transform="rotate(-35 652 454)"/>
  <circle cx="665" cy="468" r="35" fill="none" stroke="#c26a0d" stroke-width="2.5"/>
  <rect x="662" y="428" width="7" height="12" rx="3" fill="#6b4526"/>
  <path d="M668 434 Q700 418 706 436 Q690 452 668 440 Z" fill="#6b9a52"/>
  <path d="M668 437 Q688 432 704 437" stroke="#3d6432" stroke-width="2" fill="none"/>
</g>

<path d="M628 442 q22 -16 40 -6 q-20 16 -40 6 Z" fill="#4e7a3f"/>
<path d="M690 500 q24 -14 40 -2 q-22 14 -40 2 Z" fill="#4e7a3f"/>
<path d="M700 434 q18 -14 32 -6 q-16 14 -32 6 Z" fill="#3d6432"/>

<rect x="0" y="880" width="800" height="320" fill="url(#spain-floor)"/>
<rect x="0" y="874" width="800" height="14" fill="#a8663c"/>
<path d="M0 908 L800 908 M0 946 L800 946 M0 992 L800 992 M0 1048 L800 1048 M0 1116 L800 1116" stroke="#a8663c" stroke-width="2.5" opacity="0.55" fill="none"/>
<path d="M60 888 L60 908 M180 888 L180 908 M300 888 L300 908 M420 888 L420 908 M540 888 L540 908 M660 888 L660 908 M780 888 L780 908" stroke="#a8663c" stroke-width="2" opacity="0.45" fill="none"/>
<path d="M0 908 L0 946 M120 908 L120 946 M240 908 L240 946 M360 908 L360 946 M480 908 L480 946 M600 908 L600 946 M720 908 L720 946" stroke="#a8663c" stroke-width="2" opacity="0.45" fill="none"/>
<polygon points="0,916 800,916 800,940 0,952" fill="#8a4f2c" opacity="0.12"/>

<g>
  <path d="M636 838 L646 918 L788 918 L796 838 Z" fill="#b8552f"/>
  <path d="M636 838 L646 918 L690 918 L682 838 Z" fill="#c9663a"/>
  <rect x="628" y="826" width="176" height="20" rx="4" fill="#e08a58"/>
  <rect x="628" y="826" width="176" height="7" rx="3" fill="#f2a878"/>
  <rect x="646" y="856" width="146" height="30" fill="#fbf4e4" opacity="0.9"/>
  <path d="M664 860 L670 870 L680 874 L670 878 L664 888 L658 878 L648 874 L658 870 Z" fill="#2f6fb3"/>
  <path d="M712 860 L718 870 L728 874 L718 878 L712 888 L706 878 L696 874 L706 870 Z" fill="#1c4b80"/>
  <path d="M760 860 L766 870 L776 874 L766 878 L760 888 L754 878 L744 874 L754 870 Z" fill="#2f6fb3"/>
</g>

<polygon points="16,1058 250,1058 274,1104 40,1104" fill="#8a4f2c" opacity="0.2"/>
<g>
  <rect x="18" y="656" width="212" height="410" fill="#8a5a30"/>
  <rect x="26" y="668" width="176" height="386" fill="#a9743f"/>
  <rect x="196" y="668" width="34" height="386" fill="#7d5228"/>
  <rect x="8" y="640" width="228" height="24" rx="5" fill="#c48f57"/>
  <rect x="20" y="758" width="208" height="16" rx="3" fill="#c48f57"/>
  <rect x="20" y="850" width="208" height="16" rx="3" fill="#c48f57"/>
  <rect x="20" y="942" width="208" height="16" rx="3" fill="#c48f57"/>
  <circle cx="62" cy="722" r="34" fill="#e9dcc0"/>
  <circle cx="62" cy="722" r="34" fill="none" stroke="#2f6fb3" stroke-width="4"/>
  <path d="M62 706 L67 717 L78 722 L67 727 L62 738 L57 727 L46 722 L57 717 Z" fill="#2f6fb3"/>
  <circle cx="128" cy="726" r="30" fill="#fbf4e4"/>
  <circle cx="128" cy="726" r="30" fill="none" stroke="#e0563f" stroke-width="4"/>
  <circle cx="128" cy="726" r="12" fill="#f2c14e"/>
  <circle cx="184" cy="730" r="26" fill="#e9dcc0"/>
  <circle cx="184" cy="730" r="26" fill="none" stroke="#1c4b80" stroke-width="4"/>
  <path d="M52 806 q-16 -30 8 -40 l40 0 q24 10 8 40 Z" fill="#4f95d6"/>
  <path d="M52 806 q-16 -30 8 -40 l16 0 l0 40 Z" fill="#2f6fb3"/>
  <rect x="66" y="754" width="28" height="14" rx="4" fill="#1c4b80"/>
  <path d="M150 810 q-12 -26 6 -34 l30 0 q18 8 6 34 Z" fill="#f2c14e"/>
  <path d="M150 810 q-12 -26 6 -34 l12 0 l0 34 Z" fill="#d99b2b"/>
</g>

<g data-obj="castanets">
  <ellipse cx="88" cy="826" rx="25" ry="21" fill="#7d5228"/>
  <ellipse cx="88" cy="822" rx="25" ry="21" fill="#a9743f"/>
  <ellipse cx="84" cy="815" rx="12" ry="8" fill="#c48f57" opacity="0.85"/>
  <path d="M66 818 A25 21 0 0 0 110 818" fill="none" stroke="#6b4526" stroke-width="2.5"/>
  <ellipse cx="144" cy="830" rx="25" ry="21" fill="#7d5228"/>
  <ellipse cx="144" cy="826" rx="25" ry="21" fill="#a9743f"/>
  <ellipse cx="140" cy="819" rx="12" ry="8" fill="#c48f57" opacity="0.85"/>
  <path d="M122 822 A25 21 0 0 0 166 822" fill="none" stroke="#6b4526" stroke-width="2.5"/>
  <path d="M96 806 Q116 790 136 810" fill="none" stroke="#c62b4a" stroke-width="5" stroke-linecap="round"/>
  <circle cx="116" cy="797" r="6" fill="#c62b4a"/>
  <circle cx="116" cy="797" r="2.5" fill="#8f1732"/>
</g>

<g>
  <path d="M172 846 q-14 -30 6 -40 l32 0 q20 10 6 40 Z" fill="#fbf4e4"/>
  <path d="M198 846 q14 -30 -4 -40 l16 0 q20 10 6 40 Z" fill="#e9dcc0"/>
  <rect x="182" y="800" width="26" height="12" rx="4" fill="#e0563f"/>
  <path d="M176 824 q34 -8 42 0" stroke="#2f6fb3" stroke-width="4" fill="none"/>
  <rect x="34" y="898" width="60" height="14" rx="3" fill="#e9dcc0"/>
  <path d="M108 936 q-14 -26 4 -34 l28 0 q18 8 4 34 Z" fill="#7c9a52"/>
  <path d="M108 936 q-14 -26 4 -34 l12 0 l0 34 Z" fill="#5c7a3a"/>
  <ellipse cx="180" cy="916" rx="30" ry="20" fill="#ee7a54"/>
  <rect x="30" y="964" width="184" height="88" rx="4" fill="#8a5a30"/>
  <rect x="36" y="970" width="84" height="76" rx="3" fill="#a9743f"/>
  <rect x="124" y="970" width="84" height="76" rx="3" fill="#a9743f"/>
  <circle cx="112" cy="1008" r="6" fill="#f2c14e"/>
  <circle cx="132" cy="1008" r="6" fill="#f2c14e"/>
  <rect x="18" y="1052" width="212" height="16" rx="3" fill="#7d5228"/>
</g>

<polygon points="238,1030 400,1030 424,1076 262,1076" fill="#8a4f2c" opacity="0.22"/>
<g>
  <rect x="244" y="880" width="14" height="152" rx="4" fill="#8a5a30"/>
  <rect x="360" y="880" width="14" height="152" rx="4" fill="#8a5a30"/>
  <rect x="238" y="876" width="142" height="18" rx="6" fill="#a9743f"/>
  <rect x="238" y="876" width="142" height="7" rx="3" fill="#c48f57"/>
  <rect x="256" y="906" width="106" height="12" rx="4" fill="#a9743f"/>
  <rect x="256" y="940" width="106" height="12" rx="4" fill="#a9743f"/>
  <rect x="234" y="994" width="152" height="22" rx="5" fill="#c48f57"/>
  <rect x="234" y="994" width="152" height="8" rx="4" fill="#d9a86e"/>
  <rect x="234" y="1016" width="152" height="8" fill="#8a5a30"/>
  <path d="M250 880 q-16 60 -8 118 l50 6 q10 -66 6 -124 Z" fill="#f5e2c8"/>
  <path d="M250 880 q-16 60 -8 118 l20 3 q6 -64 4 -121 Z" fill="#e7d0ae"/>
  <path d="M262 900 q22 -6 34 0 M258 928 q24 -6 36 0 M254 958 q26 -6 38 0" stroke="#8b5cf6" stroke-width="2.5" fill="none"/>
</g>

<g data-obj="flamenco-shoe">
  <path d="M258 1122 Q252 1108 264 1102 L316 1090 Q338 1084 346 1096 L348 1112 Q346 1122 330 1124 L272 1128 Z" fill="#8f1732"/>
  <path d="M258 1118 Q252 1104 264 1098 L316 1086 Q338 1080 346 1092 L348 1108 Q346 1118 330 1120 L272 1124 Z" fill="#c62b4a"/>
  <path d="M300 1086 Q330 1078 344 1090 L346 1102 Q322 1096 300 1096 Z" fill="#e04a68" opacity="0.75"/>
  <path d="M258 1118 L262 1128 L288 1126 L286 1116 Z" fill="#2f2233"/>
  <path d="M264 1098 Q290 1082 314 1080 L316 1088 Q292 1090 268 1104 Z" fill="#f2c14e"/>
  <circle cx="290" cy="1088" r="5" fill="#f2c14e"/>
  <circle cx="290" cy="1088" r="2" fill="#8f1732"/>
  <path d="M320 1082 q10 -12 22 -4 q-10 12 -22 4 Z" fill="#e04a68"/>
</g>

<g>
  <rect x="244" y="1016" width="14" height="106" rx="4" fill="#a9743f"/>
  <rect x="360" y="1016" width="14" height="106" rx="4" fill="#a9743f"/>
  <rect x="244" y="1016" width="6" height="106" rx="3" fill="#c48f57"/>
  <path d="M246 1094 Q272 1084 296 1096 Q276 1112 250 1108 Z" fill="#fbf4e4"/>
</g>

<polygon points="392,1140 796,1140 800,1188 400,1192" fill="#8a4f2c" opacity="0.2"/>
<g>
  <rect x="424" y="1130" width="18" height="60" fill="#8a5a30"/>
  <rect x="748" y="1130" width="18" height="60" fill="#8a5a30"/>
  <rect x="390" y="946" width="410" height="36" rx="8" fill="#a9743f"/>
  <rect x="390" y="946" width="410" height="10" rx="5" fill="#c48f57"/>
  <path d="M400 980 L790 980 L788 1150 L402 1150 Z" fill="url(#spain-cloth)"/>
  <rect x="430" y="980" width="14" height="170" fill="#e0563f" opacity="0.3"/>
  <rect x="512" y="980" width="14" height="170" fill="#e0563f" opacity="0.3"/>
  <rect x="594" y="980" width="14" height="170" fill="#e0563f" opacity="0.3"/>
  <rect x="676" y="980" width="14" height="170" fill="#e0563f" opacity="0.3"/>
  <rect x="758" y="980" width="14" height="170" fill="#e0563f" opacity="0.3"/>
  <rect x="400" y="1042" width="390" height="14" fill="#2f6fb3" opacity="0.22"/>
  <rect x="400" y="1108" width="389" height="14" fill="#2f6fb3" opacity="0.22"/>
  <rect x="400" y="1000" width="390" height="10" fill="#d9c39c" opacity="0.5"/>
  <path d="M402 1150 q16 14 32 0 q16 14 32 0 q16 14 32 0 q16 14 32 0 q16 14 32 0 q16 14 32 0 q16 14 32 0 q16 14 32 0 q16 14 32 0 q16 14 32 0 q16 14 32 0 q16 14 32 0" fill="#e0cba4"/>
</g>

<g>
  <path d="M414 962 q-16 -36 6 -46 l30 0 q22 10 6 46 Z" fill="#4f95d6"/>
  <path d="M414 962 q-16 -36 6 -46 l14 0 l0 46 Z" fill="#2f6fb3"/>
  <rect x="424" y="900" width="24" height="18" rx="5" fill="#1c4b80"/>
  <path d="M448 924 q20 6 16 22 q-4 14 -18 12" fill="none" stroke="#2f6fb3" stroke-width="7"/>
  <path d="M418 940 q30 -8 34 0" stroke="#f2c14e" stroke-width="4" fill="none"/>
  <path d="M474 966 q-8 -30 10 -34 l44 0 q18 4 10 34 Z" fill="#c48f57"/>
  <path d="M474 966 q-8 -30 10 -34 l18 0 l0 34 Z" fill="#d9a86e"/>
  <path d="M478 946 L528 946 M478 956 L528 956" stroke="#8a5a30" stroke-width="2.5"/>
  <ellipse cx="512" cy="928" rx="15" ry="10" fill="#efc78f"/>
  <ellipse cx="558" cy="944" rx="20" ry="8" fill="#e9dcc0"/>
  <path d="M542 944 q16 -18 32 0 Z" fill="#fbf4e4"/>
  <ellipse cx="566" cy="936" rx="6" ry="4" fill="#7c9a52"/>
</g>

<g data-obj="paella-pan">
  <ellipse cx="600" cy="990" rx="52" ry="23" fill="#4a4a4a"/>
  <ellipse cx="600" cy="986" rx="52" ry="23" fill="#6f6f6f"/>
  <ellipse cx="600" cy="986" rx="45" ry="17" fill="#d9a441"/>
  <ellipse cx="600" cy="986" rx="45" ry="17" fill="none" stroke="#b8862c" stroke-width="2"/>
  <ellipse cx="586" cy="980" rx="18" ry="6" fill="#e8bf6a" opacity="0.7"/>
  <circle cx="542" cy="982" r="10" fill="#4a4a4a"/>
  <circle cx="542" cy="979" r="10" fill="#6f6f6f"/>
  <circle cx="542" cy="979" r="4" fill="#4a4a4a"/>
  <circle cx="658" cy="982" r="10" fill="#4a4a4a"/>
  <circle cx="658" cy="979" r="10" fill="#6f6f6f"/>
  <circle cx="658" cy="979" r="4" fill="#4a4a4a"/>
  <path d="M574 982 q8 -10 18 -4 q-8 10 -18 4 Z" fill="#e0563f"/>
  <path d="M604 976 q8 -10 18 -4 q-8 10 -18 4 Z" fill="#e0563f"/>
  <path d="M596 994 q8 -9 17 -4 q-8 9 -17 4 Z" fill="#e0563f"/>
  <path d="M566 990 q9 -8 15 2 q-10 6 -15 -2 Z" fill="#4a3b52"/>
  <path d="M634 976 q9 -8 15 2 q-10 6 -15 -2 Z" fill="#4a3b52"/>
  <path d="M580 992 a12 12 0 0 1 20 0 Z" fill="#f2c14e"/>
  <path d="M614 984 a11 11 0 0 1 18 0 Z" fill="#f2c14e"/>
  <circle cx="588" cy="988" r="3" fill="#7c9a52"/>
  <circle cx="610" cy="982" r="3" fill="#7c9a52"/>
  <circle cx="646" cy="990" r="3" fill="#7c9a52"/>
</g>

<g>
  <path d="M540 998 q22 -12 44 -2 q-6 16 -26 14 q-18 -2 -18 -12 Z" fill="#fbf4e4"/>
  <path d="M540 998 q22 -12 44 -2 q-10 6 -24 4 q-14 -2 -20 -2 Z" fill="#e9dcc0"/>
  <circle cx="682" cy="1004" r="30" fill="#e9dcc0"/>
  <circle cx="682" cy="1000" r="30" fill="#fbf4e4"/>
  <circle cx="682" cy="1000" r="30" fill="none" stroke="#2f6fb3" stroke-width="3.5"/>
  <circle cx="674" cy="996" r="5" fill="#4a3b52"/>
  <circle cx="688" cy="994" r="5" fill="#5c7a3a"/>
  <circle cx="748" cy="1002" r="26" fill="#c9b294"/>
  <circle cx="748" cy="998" r="26" fill="#e9dcc0"/>
  <circle cx="748" cy="998" r="16" fill="#5c7a3a"/>
  <path d="M452 1002 q26 -14 52 -2 q-8 18 -30 16 q-20 -2 -22 -14 Z" fill="#e9dcc0"/>
  <ellipse cx="478" cy="1000" rx="22" ry="9" fill="#fbf4e4"/>
  <ellipse cx="468" cy="998" rx="7" ry="4" fill="#e0563f"/>
  <path d="M528 928 q-4 -18 8 -22 l16 0 q12 4 8 22 q-4 14 -16 14 q-12 0 -16 -14 Z" fill="#dff0f8" opacity="0.9"/>
  <path d="M530 938 q4 -8 30 0 q-3 12 -15 12 q-12 0 -15 -12 Z" fill="#f7a94b"/>
  <ellipse cx="543" cy="966" rx="14" ry="5" fill="#dff0f8" opacity="0.9"/>
  <path d="M700 930 q-4 -18 8 -22 l16 0 q12 4 8 22 q-4 14 -16 14 q-12 0 -16 -14 Z" fill="#dff0f8" opacity="0.9"/>
  <path d="M702 940 q4 -8 30 0 q-3 12 -15 12 q-12 0 -15 -12 Z" fill="#e0563f"/>
  <ellipse cx="715" cy="968" rx="14" ry="5" fill="#dff0f8" opacity="0.9"/>
  <path d="M624 940 q-3 -22 6 -26 l10 0 q9 4 6 26 Z" fill="#7c9a52"/>
  <rect x="629" y="908" width="9" height="10" rx="3" fill="#5c7a3a"/>
</g>

<polygon points="0,1046 240,1046 264,1092 12,1092" fill="#8a4f2c" opacity="0.16"/>
<g>
  <rect x="42" y="1160" width="16" height="40" fill="#8a5a30"/>
  <rect x="196" y="1160" width="16" height="40" fill="#8a5a30"/>
  <rect x="4" y="1078" width="244" height="28" rx="7" fill="#a9743f"/>
  <rect x="4" y="1078" width="244" height="11" rx="5" fill="#c48f57"/>
  <path d="M12 1106 L242 1106 L244 1200 L10 1200 Z" fill="#f6ead0"/>
  <path d="M12 1132 L243 1132 M12 1166 L244 1166 M12 1198 L244 1198" stroke="#4f95d6" stroke-width="7" opacity="0.35" fill="none"/>
  <path d="M52 1106 L54 1200 M118 1106 L119 1200 M184 1106 L184 1200" stroke="#4f95d6" stroke-width="7" opacity="0.35" fill="none"/>
  <path d="M10 1112 L244 1112" stroke="#c9b294" stroke-width="6" opacity="0.5" fill="none"/>
  <circle cx="80" cy="1078" r="28" fill="#e9dcc0"/>
  <circle cx="80" cy="1074" r="28" fill="#fbf4e4"/>
  <circle cx="80" cy="1074" r="28" fill="none" stroke="#e0563f" stroke-width="3.5"/>
  <path d="M80 1058 a16 16 0 0 1 14 8 l-14 8 Z" fill="#f7a94b"/>
  <path d="M80 1074 l14 8 a16 16 0 0 1 -28 0 Z" fill="#f28c28"/>
  <path d="M80 1074 l-14 -8 a16 16 0 0 1 14 -8 Z" fill="#ffb85c"/>
  <path d="M158 1082 q-14 -32 6 -40 l28 0 q20 8 6 40 Z" fill="#f2c14e"/>
  <path d="M158 1082 q-14 -32 6 -40 l12 0 l0 40 Z" fill="#d99b2b"/>
  <rect x="168" y="1030" width="22" height="14" rx="5" fill="#c98115"/>
</g>

<g>
  <path d="M712 1200 L700 1108 L800 1108 L800 1200 Z" fill="#b8552f"/>
  <path d="M712 1200 L700 1108 L742 1108 L748 1200 Z" fill="#c9663a"/>
  <rect x="692" y="1094" width="112" height="20" rx="4" fill="#e08a58"/>
  <rect x="692" y="1094" width="112" height="7" rx="3" fill="#f2a878"/>
  <path d="M746 1094 Q706 1054 686 1064 Q702 1092 746 1096 Z" fill="#5c7a3a"/>
  <path d="M752 1094 Q788 1040 800 1054 Q792 1084 752 1096 Z" fill="#7c9a52"/>
</g>

<rect x="0" y="880" width="800" height="320" fill="#ffb46b" opacity="0.1"/>
<polygon points="0,400 190,400 96,924 0,924" fill="#fff2cf" opacity="0.12"/>
</svg>`
});
