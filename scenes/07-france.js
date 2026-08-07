window.SCENES = window.SCENES || [];
window.SCENES.push({
  id: 'france',
  order: 7,
  country: 'France',
  flag: '🇫🇷',
  title: 'A Paris Café Corner',
  caption: 'Croissants under the Eiffel Tower.',
  stamp: '🗼',
  objects: [
    { id: 'lightstick',     name: 'Lightstick' },
    { id: 'purple-heart',   name: 'Purple Heart' },
    { id: 'croissant',      name: 'Croissant' },
    { id: 'beret',          name: 'Beret' },
    { id: 'macaron',        name: 'Macaron' },
    { id: 'baguette',       name: 'Baguette' },
    { id: 'perfume-bottle', name: 'Perfume' },
    { id: 'artist-palette', name: 'Paint Palette' }
  ],
  svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 1200">
<defs>
  <linearGradient id="france-sky" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#c3ccec"/>
    <stop offset="0.42" stop-color="#dcd7ef"/>
    <stop offset="0.78" stop-color="#f2ded9"/>
    <stop offset="1" stop-color="#fbe9d9"/>
  </linearGradient>
  <radialGradient id="france-sunglow" cx="0.5" cy="0.5" r="0.5">
    <stop offset="0" stop-color="#fff5e4" stop-opacity="0.95"/>
    <stop offset="1" stop-color="#fff5e4" stop-opacity="0"/>
  </radialGradient>
  <radialGradient id="france-lampglow" cx="0.5" cy="0.5" r="0.5">
    <stop offset="0" stop-color="#ffe3a8" stop-opacity="0.9"/>
    <stop offset="1" stop-color="#ffe3a8" stop-opacity="0"/>
  </radialGradient>
  <radialGradient id="france-stickglow" cx="0.5" cy="0.5" r="0.5">
    <stop offset="0" stop-color="#c79cf5" stop-opacity="0.85"/>
    <stop offset="1" stop-color="#c79cf5" stop-opacity="0"/>
  </radialGradient>
  <linearGradient id="france-glass" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0" stop-color="#9fb0cc"/>
    <stop offset="0.5" stop-color="#7c8dad"/>
    <stop offset="1" stop-color="#63739a"/>
  </linearGradient>
  <linearGradient id="france-shopglass" x1="0" y1="0" x2="0.6" y2="1">
    <stop offset="0" stop-color="#5e5f78"/>
    <stop offset="0.55" stop-color="#7a6a72"/>
    <stop offset="1" stop-color="#a98663"/>
  </linearGradient>
  <linearGradient id="france-marble" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#f7f1e7"/>
    <stop offset="0.35" stop-color="#efe6d9"/>
    <stop offset="1" stop-color="#ded1c0"/>
  </linearGradient>
  <linearGradient id="france-tower" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0" stop-color="#b0b8d8"/>
    <stop offset="0.5" stop-color="#98a1c5"/>
    <stop offset="1" stop-color="#828cb4"/>
  </linearGradient>
</defs>

<!-- ================= base + sky ================= -->
<rect x="0" y="0" width="800" height="1200" fill="#efe0cd"/>
<rect x="0" y="0" width="800" height="660" fill="url(#france-sky)"/>
<circle cx="626" cy="180" r="196" fill="url(#france-sunglow)"/>
<circle cx="626" cy="180" r="44" fill="#fff7e8" opacity="0.8"/>

<path d="M64 122 q0 -26 40 -24 q16 -30 60 -22 q40 -20 62 14 q34 -4 34 32 q-40 12 -196 0 Z M354 92 q0 -24 36 -20 q18 -26 54 -16 q36 -12 44 22 q-38 14 -134 14 Z" fill="#ffffff" opacity="0.55"/>
<path d="M64 122 q66 18 196 0 q-10 22 -60 20 q-70 4 -136 -20 Z M354 92 q54 14 134 -14 q-6 22 -50 24 q-56 4 -84 -10 Z" fill="#dcd6ef" opacity="0.45"/>
<ellipse cx="700" cy="152" rx="80" ry="23" fill="#fff3e4" opacity="0.5"/>
<ellipse cx="738" cy="140" rx="46" ry="17" fill="#fff8ee" opacity="0.45"/>
<ellipse cx="700" cy="164" rx="64" ry="11" fill="#e9dcee" opacity="0.32"/>
<ellipse cx="298" cy="214" rx="96" ry="19" fill="#ffffff" opacity="0.3"/>
<ellipse cx="556" cy="242" rx="72" ry="15" fill="#ffffff" opacity="0.26"/>
<path d="M92 198 q10 -8 18 0 q8 -8 18 0 M138 176 q8 -6 14 0 q6 -6 14 0 M184 210 q7 -5 12 0 q5 -5 12 0 M486 152 q8 -6 14 0 q6 -6 14 0 M522 134 q6 -5 11 0 q5 -5 11 0" fill="none" stroke="#7b7894" stroke-width="3" stroke-linecap="round" opacity="0.65"/>

<!-- ================= far skyline ================= -->
<path d="M0 474 L58 474 L58 444 L122 444 L122 466 L202 466 L202 432 L282 432 L282 470 L362 470 L362 446 L442 446 L442 472 L542 472 L542 450 L622 450 L622 474 L722 474 L722 444 L800 444 L800 660 L0 660 Z" fill="#cbc8de" opacity="0.75"/>
<path d="M470 450 q30 -46 60 0 Z" fill="#c3c0d9" opacity="0.8"/>
<rect x="497" y="402" width="6" height="20" fill="#c3c0d9" opacity="0.8"/>
<path d="M0 524 L102 524 L102 502 L182 502 L182 526 L300 526 L300 498 L420 498 L420 530 L560 530 L560 508 L662 508 L662 532 L800 532 L800 660 L0 660 Z" fill="#bcb8d2" opacity="0.72"/>
<path d="M0 566 L800 566 L800 660 L0 660 Z" fill="#b1abc8" opacity="0.5"/>

<!-- ================= Eiffel Tower (peeking through the gap) ================= -->
<path d="M612 168 L644 168 L652 300 L676 430 L718 622 L672 622 L644 470 L636 400 L620 400 L612 470 L584 622 L538 622 L580 430 L604 300 Z" fill="url(#france-tower)"/>
<path d="M612 168 L622 168 L602 300 L578 430 L540 622 L538 622 L580 430 L604 300 Z" fill="#bcc3de" opacity="0.85"/>
<path d="M584 566 Q628 500 672 566 L672 622 L660 622 L660 578 Q628 534 596 578 L596 622 L584 622 Z" fill="#8e98bf"/>
<rect x="558" y="452" width="140" height="14" rx="3" fill="#8792ba"/>
<rect x="588" y="330" width="80" height="11" rx="3" fill="#8792ba"/>
<rect x="606" y="252" width="44" height="9" rx="3" fill="#8792ba"/>
<rect x="620" y="146" width="16" height="24" rx="4" fill="#8792ba"/>
<rect x="626" y="126" width="4" height="24" fill="#8792ba"/>
<circle cx="628" cy="122" r="5" fill="#ffe9bd"/>
<path d="M600 292 L656 292 M594 340 L662 340 M586 388 L670 388 M576 436 L680 436 M566 486 L690 486 M554 538 L702 538 M542 592 L714 592" stroke="#eceaf6" stroke-width="2" fill="none" opacity="0.45"/>
<path d="M598 306 L654 372 M654 306 L598 372 M584 400 L672 468 M672 400 L584 468 M568 496 L688 588 M688 496 L568 588" stroke="#eceaf6" stroke-width="2" fill="none" opacity="0.32"/>
<path d="M612 176 L644 176 M614 210 L642 210 M616 244 L640 244" stroke="#eceaf6" stroke-width="2" fill="none" opacity="0.4"/>

<!-- ================= gap: alley wall + tree ================= -->
<path d="M556 480 L700 500 L700 950 L556 950 Z" fill="#d9cfc0"/>
<path d="M556 480 L700 500 L700 520 L556 502 Z" fill="#eadfcd"/>
<rect x="592" y="560" width="34" height="52" rx="4" fill="#8d8ea6" opacity="0.8"/>
<rect x="646" y="572" width="34" height="52" rx="4" fill="#8d8ea6" opacity="0.8"/>
<rect x="592" y="668" width="34" height="52" rx="4" fill="#8d8ea6" opacity="0.7"/>
<ellipse cx="590" cy="676" rx="58" ry="66" fill="#6d9166"/>
<ellipse cx="566" cy="654" rx="38" ry="42" fill="#83a877"/>
<ellipse cx="614" cy="700" rx="34" ry="34" fill="#587f56"/>
<rect x="580" y="736" width="16" height="200" fill="#7a5a42"/>

<!-- ================= left Haussmann block ================= -->
<path d="M-10 356 L-10 302 L44 266 L266 266 L310 302 L310 356 Z" fill="#6d7288"/>
<path d="M-10 302 L44 266 L266 266 L310 302 Z" fill="#858ca6"/>
<path d="M44 266 L266 266 L266 276 L44 276 Z" fill="#5a5f74"/>
<path d="M56 288 L84 268 L112 288 L108 320 L60 320 Z M138 282 L166 262 L194 282 L190 314 L142 314 Z M220 288 L248 268 L276 288 L272 320 L224 320 Z" fill="#4f5468"/>
<path d="M66 292 h36 v24 h-36 Z M148 286 h36 v24 h-36 Z M230 292 h36 v24 h-36 Z" fill="#8ea0bb"/>
<path d="M20 222 h34 v46 h-34 Z M176 212 h34 v56 h-34 Z M262 228 h30 v40 h-30 Z" fill="#b5705c"/>
<path d="M20 222 h12 v46 h-12 Z M176 212 h12 v56 h-12 Z M262 228 h10 v40 h-10 Z" fill="#c9836d"/>
<path d="M22 208 h13 v17 h-13 Z M38 208 h13 v17 h-13 Z M178 198 h13 v17 h-13 Z M194 198 h13 v17 h-13 Z M264 216 h12 v15 h-12 Z M278 216 h12 v15 h-12 Z" fill="#8f5648"/>
<rect x="-10" y="348" width="320" height="18" rx="4" fill="#f0dfc4"/>
<rect x="-10" y="364" width="320" height="6" fill="#d7bf9f" opacity="0.8"/>
<rect x="-10" y="370" width="320" height="546" fill="#eddcc1"/>
<rect x="-10" y="370" width="320" height="10" fill="#f8ecd8"/>
<rect x="262" y="370" width="48" height="546" fill="#dcc4a4" opacity="0.65"/>
<rect x="28" y="400" width="52" height="76" rx="4" fill="url(#france-glass)" stroke="#3f3b46" stroke-width="8"/>
<rect x="120" y="400" width="52" height="76" rx="4" fill="url(#france-glass)" stroke="#3f3b46" stroke-width="8"/>
<rect x="212" y="400" width="52" height="76" rx="4" fill="url(#france-glass)" stroke="#3f3b46" stroke-width="8"/>
<rect x="28" y="522" width="52" height="76" rx="4" fill="url(#france-glass)" stroke="#3f3b46" stroke-width="8"/>
<rect x="120" y="522" width="52" height="76" rx="4" fill="url(#france-glass)" stroke="#3f3b46" stroke-width="8"/>
<rect x="212" y="522" width="52" height="76" rx="4" fill="url(#france-glass)" stroke="#3f3b46" stroke-width="8"/>
<path d="M54 400 v76 M28 432 h52 M146 400 v76 M120 432 h52 M238 400 v76 M212 432 h52 M54 522 v76 M28 554 h52 M146 522 v76 M120 554 h52 M238 522 v76 M212 554 h52" stroke="#3f3b46" stroke-width="3" fill="none"/>
<path d="M16 478 h76 v9 h-76 Z M108 478 h76 v9 h-76 Z M200 478 h76 v9 h-76 Z M16 600 h76 v9 h-76 Z M108 600 h76 v9 h-76 Z M200 600 h76 v9 h-76 Z" fill="#f2e2c8"/>
<path d="M14 478 v-30 h80 v30 M106 478 v-30 h80 v30 M198 478 v-30 h80 v30" fill="none" stroke="#3a3844" stroke-width="3"/>
<path d="M22 450 v28 M34 450 v28 M46 450 v28 M58 450 v28 M70 450 v28 M82 450 v28 M114 450 v28 M126 450 v28 M138 450 v28 M150 450 v28 M162 450 v28 M174 450 v28 M206 450 v28 M218 450 v28 M230 450 v28 M242 450 v28 M254 450 v28 M266 450 v28" stroke="#3a3844" stroke-width="2" fill="none"/>
<path d="M14 600 v-26 h80 v26 M106 600 v-26 h80 v26 M198 600 v-26 h80 v26" fill="none" stroke="#3a3844" stroke-width="3"/>
<path d="M26 574 v26 M42 574 v26 M58 574 v26 M74 574 v26 M118 574 v26 M134 574 v26 M150 574 v26 M166 574 v26 M210 574 v26 M226 574 v26 M242 574 v26 M258 574 v26" stroke="#3a3844" stroke-width="2" fill="none"/>

<!-- ================= middle block ================= -->
<path d="M300 322 L300 276 L344 244 L520 244 L562 276 L562 322 Z" fill="#63687e"/>
<path d="M300 276 L344 244 L520 244 L562 276 Z" fill="#7d849e"/>
<path d="M344 244 L520 244 L520 254 L344 254 Z" fill="#52576b"/>
<path d="M356 266 L382 248 L408 266 L404 296 L360 296 Z M448 266 L474 248 L500 266 L496 296 L452 296 Z" fill="#4a4f62"/>
<path d="M366 270 h32 v22 h-32 Z M458 270 h32 v22 h-32 Z" fill="#8ea0bb"/>
<path d="M326 200 h32 v46 h-32 Z M492 206 h32 v40 h-32 Z" fill="#b5705c"/>
<path d="M326 200 h11 v46 h-11 Z M492 206 h11 v40 h-11 Z" fill="#c9836d"/>
<path d="M328 186 h12 v16 h-12 Z M343 186 h12 v16 h-12 Z M494 192 h12 v16 h-12 Z M509 192 h12 v16 h-12 Z" fill="#8f5648"/>
<rect x="300" y="316" width="262" height="18" rx="4" fill="#f2e1c6"/>
<rect x="300" y="332" width="262" height="6" fill="#d7bf9f" opacity="0.8"/>
<rect x="300" y="338" width="262" height="578" fill="#f0e0c6"/>
<rect x="300" y="338" width="262" height="10" fill="#faefdb"/>
<rect x="520" y="338" width="42" height="578" fill="#dcc4a4" opacity="0.6"/>
<rect x="326" y="372" width="50" height="74" rx="4" fill="url(#france-glass)" stroke="#3f3b46" stroke-width="8"/>
<rect x="408" y="372" width="50" height="74" rx="4" fill="url(#france-glass)" stroke="#3f3b46" stroke-width="8"/>
<rect x="490" y="372" width="50" height="74" rx="4" fill="url(#france-glass)" stroke="#3f3b46" stroke-width="8"/>
<rect x="326" y="494" width="50" height="74" rx="4" fill="url(#france-glass)" stroke="#3f3b46" stroke-width="8"/>
<rect x="408" y="494" width="50" height="74" rx="4" fill="url(#france-glass)" stroke="#3f3b46" stroke-width="8"/>
<rect x="490" y="494" width="50" height="74" rx="4" fill="url(#france-glass)" stroke="#3f3b46" stroke-width="8"/>
<path d="M351 372 v74 M326 404 h50 M433 372 v74 M408 404 h50 M515 372 v74 M490 404 h50 M351 494 v74 M326 526 h50 M433 494 v74 M408 526 h50 M515 494 v74 M490 526 h50" stroke="#3f3b46" stroke-width="3" fill="none"/>
<path d="M314 448 h74 v9 h-74 Z M396 448 h74 v9 h-74 Z M478 448 h74 v9 h-74 Z M314 570 h74 v9 h-74 Z M396 570 h74 v9 h-74 Z M478 570 h74 v9 h-74 Z" fill="#f5e6cc"/>
<path d="M312 448 v-28 h78 v28 M394 448 v-28 h78 v28 M476 448 v-28 h78 v28" fill="none" stroke="#3a3844" stroke-width="3"/>
<path d="M320 420 v28 M334 420 v28 M348 420 v28 M362 420 v28 M376 420 v28 M402 420 v28 M416 420 v28 M430 420 v28 M444 420 v28 M458 420 v28 M484 420 v28 M498 420 v28 M512 420 v28 M526 420 v28 M540 420 v28" stroke="#3a3844" stroke-width="2" fill="none"/>
<path d="M312 570 v-24 h78 v24 M394 570 v-24 h78 v24 M476 570 v-24 h78 v24" fill="none" stroke="#3a3844" stroke-width="3"/>
<path d="M322 546 v24 M340 546 v24 M358 546 v24 M376 546 v24 M404 546 v24 M422 546 v24 M440 546 v24 M458 546 v24 M486 546 v24 M504 546 v24 M522 546 v24 M540 546 v24" stroke="#3a3844" stroke-width="2" fill="none"/>
<path d="M332 440 a20 14 0 1 0 40 0 a20 14 0 1 0 -40 0 Z M494 562 a20 13 0 1 0 40 0 a20 13 0 1 0 -40 0 Z" fill="#7aa76e"/>
<ellipse cx="344" cy="432" rx="12" ry="10" fill="#93bd83"/>
<path d="M354 432 a6 6 0 1 0 12 0 a6 6 0 1 0 -12 0 Z M341 426 a5 5 0 1 0 10 0 a5 5 0 1 0 -10 0 Z M516 554 a6 6 0 1 0 12 0 a6 6 0 1 0 -12 0 Z M501 556 a5 5 0 1 0 10 0 a5 5 0 1 0 -10 0 Z" fill="#f3a6b8"/>

<!-- ================= right block ================= -->
<path d="M698 344 L698 300 L736 272 L806 272 L806 344 Z" fill="#63687e"/>
<path d="M698 300 L736 272 L806 272 L806 300 Z" fill="#7d849e"/>
<rect x="736" y="228" width="32" height="44" fill="#b5705c"/>
<rect x="736" y="228" width="11" height="44" fill="#c9836d"/>
<path d="M738 214 h12 v16 h-12 Z M753 214 h12 v16 h-12 Z" fill="#8f5648"/>
<rect x="698" y="338" width="112" height="16" rx="4" fill="#eddcc1"/>
<rect x="698" y="354" width="112" height="562" fill="#e7d5b9"/>
<rect x="698" y="354" width="112" height="9" fill="#f6ead6"/>
<rect x="698" y="354" width="26" height="562" fill="#d3ba99" opacity="0.55"/>
<rect x="740" y="390" width="48" height="72" rx="4" fill="url(#france-glass)" stroke="#3f3b46" stroke-width="8"/>
<rect x="740" y="510" width="48" height="72" rx="4" fill="url(#france-glass)" stroke="#3f3b46" stroke-width="8"/>
<rect x="740" y="630" width="48" height="72" rx="4" fill="url(#france-glass)" stroke="#3f3b46" stroke-width="8"/>
<path d="M764 390 v72 M740 420 h48 M764 510 v72 M740 540 h48 M764 630 v72 M740 660 h48" stroke="#3f3b46" stroke-width="3" fill="none"/>
<path d="M728 464 h72 v9 h-72 Z M728 584 h72 v9 h-72 Z M728 704 h72 v9 h-72 Z" fill="#f2e2c8"/>
<path d="M726 464 v-26 h76 v26 M726 584 v-26 h76 v26 M726 704 v-26 h76 v26" fill="none" stroke="#3a3844" stroke-width="3"/>
<path d="M734 438 v26 M748 438 v26 M762 438 v26 M776 438 v26 M790 438 v26 M734 558 v26 M748 558 v26 M762 558 v26 M776 558 v26 M790 558 v26 M734 678 v26 M748 678 v26 M762 678 v26 M776 678 v26 M790 678 v26" stroke="#3a3844" stroke-width="2" fill="none"/>
<ellipse cx="758" cy="696" rx="22" ry="14" fill="#6d9166"/>
<path d="M762 688 a6 6 0 1 0 12 0 a6 6 0 1 0 -12 0 Z M743 690 a5 5 0 1 0 10 0 a5 5 0 1 0 -10 0 Z" fill="#f3a6b8"/>

<!-- ================= café facade (ground floor) ================= -->
<rect x="-10" y="616" width="572" height="304" fill="#f3e5cd"/>
<rect x="-10" y="616" width="572" height="12" fill="#fbf1de"/>
<rect x="-10" y="662" width="560" height="258" rx="6" fill="#3a3540"/>
<rect x="-10" y="662" width="560" height="10" fill="#4d4753"/>
<rect x="10" y="682" width="196" height="206" rx="5" fill="url(#france-shopglass)"/>
<rect x="222" y="682" width="196" height="206" rx="5" fill="url(#france-shopglass)"/>
<rect x="434" y="682" width="106" height="206" rx="5" fill="url(#france-shopglass)"/>
<path d="M108 682 v206 M10 748 h196 M320 682 v206 M222 748 h196 M487 682 v206 M434 748 h106" stroke="#3a3540" stroke-width="6" fill="none"/>
<path d="M10 682 h196 v30 h-196 Z M222 682 h196 v30 h-196 Z" fill="#8b7a6e" opacity="0.55"/>
<path d="M24 888 L74 700 L106 700 L56 888 Z M236 888 L286 700 L306 700 L256 888 Z" fill="#ffffff" opacity="0.11"/>
<path d="M24 806 h170 v80 h-170 Z M236 800 h170 v86 h-170 Z" fill="#4a3f3c" opacity="0.58"/>
<path d="M44 778 a16 16 0 1 0 32 0 a16 16 0 1 0 -32 0 Z M138 782 a14 14 0 1 0 28 0 a14 14 0 1 0 -28 0 Z M263 774 a15 15 0 1 0 30 0 a15 15 0 1 0 -30 0 Z M355 782 a13 13 0 1 0 26 0 a13 13 0 1 0 -26 0 Z" fill="#f0d4a2" opacity="0.65"/>
<path d="M266 828 a20 28 0 1 0 40 0 a20 28 0 1 0 -40 0 Z M273 794 a13 13 0 1 0 26 0 a13 13 0 1 0 -26 0 Z M318 836 a18 24 0 1 0 36 0 a18 24 0 1 0 -36 0 Z M325 806 a11 11 0 1 0 22 0 a11 11 0 1 0 -22 0 Z" fill="#2f2b33" opacity="0.62"/>
<path d="M448 706 q22 -14 44 0 q-22 16 -44 0 Z" fill="#d9a441" opacity="0.75"/>
<path d="M452 726 q18 12 38 0 M456 744 q16 10 30 0" stroke="#d9a441" stroke-width="3" fill="none" opacity="0.6"/>
<path d="M462 766 q12 -10 24 0" stroke="#d9a441" stroke-width="3" fill="none" opacity="0.5"/>
<rect x="440" y="800" width="94" height="86" rx="4" fill="#4a3f3c" opacity="0.5"/>
<rect x="-10" y="884" width="572" height="36" fill="#463f4a"/>
<rect x="-10" y="884" width="572" height="8" fill="#5a5260"/>

<!-- ================= awning ================= -->
<rect x="4" y="576" width="546" height="16" rx="5" fill="#332f39"/>
<path d="M8 590 L546 590 L524 648 L30 648 Z" fill="#f7e9d8"/>
<path d="M74 590 L112 590 L96 648 L58 648 Z M158 590 L196 590 L182 648 L144 648 Z M242 590 L280 590 L268 648 L230 648 Z M326 590 L364 590 L354 648 L316 648 Z M410 590 L448 590 L440 648 L402 648 Z M494 590 L532 590 L526 648 L488 648 Z" fill="#8e2f45"/>
<path d="M8 590 L546 590 L545 602 L9 602 Z" fill="#fdf6ea" opacity="0.8"/>
<path d="M30 648 q13 18 26 0 q13 18 26 0 q13 18 26 0 q13 18 26 0 q13 18 26 0 q13 18 26 0 q13 18 26 0 q13 18 26 0 q13 18 26 0 q13 18 26 0 q13 18 26 0 q13 18 26 0 q13 18 26 0 q13 18 26 0 q13 18 26 0 q13 18 26 0 q13 18 26 0 q13 18 26 0 q13 18 26 0 L524 648 Z" fill="#8e2f45"/>
<path d="M30 648 L524 648 L522 656 L32 656 Z" fill="#6f2436" opacity="0.55"/>
<path d="M20 592 L34 646 M534 592 L520 646" stroke="#332f39" stroke-width="5" fill="none"/>
<path d="M46 660 L54 690 M508 660 L500 690" stroke="#332f39" stroke-width="4" fill="none"/>

<!-- ================= string lights ================= -->
<path d="M-6 556 Q100 592 206 560 Q312 528 418 560 Q524 592 620 556" fill="none" stroke="#3a3540" stroke-width="3"/>
<circle cx="46" cy="578" r="14" fill="url(#france-lampglow)"/>
<circle cx="110" cy="588" r="14" fill="url(#france-lampglow)"/>
<circle cx="176" cy="576" r="14" fill="url(#france-lampglow)"/>
<circle cx="248" cy="546" r="14" fill="url(#france-lampglow)"/>
<circle cx="322" cy="542" r="14" fill="url(#france-lampglow)"/>
<circle cx="392" cy="558" r="14" fill="url(#france-lampglow)"/>
<circle cx="462" cy="580" r="14" fill="url(#france-lampglow)"/>
<circle cx="536" cy="586" r="14" fill="url(#france-lampglow)"/>
<circle cx="596" cy="566" r="14" fill="url(#france-lampglow)"/>
<path d="M40 578 a6 6 0 1 0 12 0 a6 6 0 1 0 -12 0 Z M104 588 a6 6 0 1 0 12 0 a6 6 0 1 0 -12 0 Z M170 576 a6 6 0 1 0 12 0 a6 6 0 1 0 -12 0 Z M242 546 a6 6 0 1 0 12 0 a6 6 0 1 0 -12 0 Z M316 542 a6 6 0 1 0 12 0 a6 6 0 1 0 -12 0 Z M386 558 a6 6 0 1 0 12 0 a6 6 0 1 0 -12 0 Z M456 580 a6 6 0 1 0 12 0 a6 6 0 1 0 -12 0 Z M530 586 a6 6 0 1 0 12 0 a6 6 0 1 0 -12 0 Z M590 566 a6 6 0 1 0 12 0 a6 6 0 1 0 -12 0 Z" fill="#ffe6ae"/>

<!-- ================= sidewalk ================= -->
<rect x="0" y="908" width="800" height="292" fill="#d3c6b4"/>
<rect x="0" y="908" width="800" height="14" fill="#e2d6c5"/>
<path d="M0 946 L800 946 M0 984 L800 984 M0 1022 L800 1022" stroke="#c0b29e" stroke-width="3" fill="none" opacity="0.7"/>
<path d="M60 908 L60 1022 M180 908 L180 1022 M300 908 L300 1022 M420 908 L420 1022 M540 908 L540 1022 M660 908 L660 1022 M760 908 L760 1022" stroke="#c0b29e" stroke-width="3" fill="none" opacity="0.55"/>
<path d="M130 946 a120 18 0 1 0 240 0 a120 18 0 1 0 -240 0 Z M320 952 a100 16 0 1 0 200 0 a100 16 0 1 0 -200 0 Z M530 950 a130 18 0 1 0 260 0 a130 18 0 1 0 -260 0 Z" fill="#b09f8b" opacity="0.32"/>

<!-- ================= easel corner (midground left) ================= -->
<path d="M52 786 L20 1010 M96 786 L136 1010 M76 830 L86 1010" stroke="#a9714a" stroke-width="11" stroke-linecap="round" fill="none"/>
<path d="M32 896 L124 896" stroke="#8a5738" stroke-width="10" fill="none"/>
<rect x="10" y="762" width="132" height="140" rx="4" fill="#e9dbc6"/>
<rect x="10" y="762" width="132" height="140" rx="4" fill="none" stroke="#8a5738" stroke-width="6"/>
<rect x="20" y="772" width="112" height="120" fill="#fbf3e6"/>
<path d="M20 856 L132 856 L132 892 L20 892 Z" fill="#cbb9a2"/>
<path d="M40 856 L54 810 L70 856 Z" fill="#98a1c5"/>
<path d="M62 856 L86 792 L110 856 Z" fill="#b0b8d8"/>
<circle cx="106" cy="798" r="9" fill="#f6d38f"/>
<path d="M22 838 q26 -14 52 0 q26 14 56 -4" stroke="#c7b9d6" stroke-width="4" fill="none" opacity="0.8"/>
<circle cx="46" cy="884" r="6" fill="#e88aa2"/>
<circle cx="98" cy="882" r="5" fill="#7b4fb5"/>
<path d="M26 902 L40 936 M118 902 L106 936" stroke="#a9714a" stroke-width="9" stroke-linecap="round" fill="none"/>

<!-- ================= flower cart (midground) ================= -->
<rect x="150" y="800" width="184" height="86" rx="6" fill="#a9714a"/>
<rect x="150" y="800" width="184" height="14" rx="6" fill="#c58f63"/>
<path d="M168 814 v72 M196 814 v72 M224 814 v72 M252 814 v72 M280 814 v72 M308 814 v72" stroke="#8a5738" stroke-width="4" fill="none"/>
<rect x="146" y="786" width="192" height="18" rx="6" fill="#c58f63"/>
<rect x="146" y="880" width="192" height="14" rx="5" fill="#8a5738"/>
<path d="M156 912 a30 30 0 1 0 60 0 a30 30 0 1 0 -60 0 Z M270 912 a30 30 0 1 0 60 0 a30 30 0 1 0 -60 0 Z" fill="#8a5738"/>
<path d="M166 912 a20 20 0 1 0 40 0 a20 20 0 1 0 -40 0 Z M280 912 a20 20 0 1 0 40 0 a20 20 0 1 0 -40 0 Z" fill="#c58f63"/>
<path d="M186 892 v40 M166 912 h40 M172 898 l28 28 M200 898 l-28 28 M300 892 v40 M280 912 h40 M286 898 l28 28 M314 898 l-28 28" stroke="#7a4a2f" stroke-width="3" fill="none"/>
<path d="M179 912 a7 7 0 1 0 14 0 a7 7 0 1 0 -14 0 Z M293 912 a7 7 0 1 0 14 0 a7 7 0 1 0 -14 0 Z" fill="#7a4a2f"/>
<path d="M334 810 q46 -6 58 26" stroke="#8a5738" stroke-width="10" stroke-linecap="round" fill="none"/>
<rect x="156" y="748" width="52" height="46" rx="6" fill="#7f9a8e"/>
<rect x="216" y="742" width="56" height="52" rx="6" fill="#8e7f9a"/>
<rect x="280" y="750" width="50" height="44" rx="6" fill="#7f9a8e"/>
<path d="M156 752 h52 v8 h-52 Z M216 746 h56 v8 h-56 Z M280 754 h50 v8 h-50 Z" fill="#a9c0b5"/>
<path d="M172 748 q-8 -46 4 -70 M190 748 q6 -50 -2 -74 M228 742 q-10 -48 2 -72 M248 742 q6 -46 -4 -68 M296 750 q-8 -44 2 -64 M314 750 q6 -42 -4 -60" stroke="#5f8a5e" stroke-width="4" fill="none"/>
<path d="M142 700 a42 30 0 1 0 84 0 a42 30 0 1 0 -84 0 Z M270 704 a38 27 0 1 0 76 0 a38 27 0 1 0 -76 0 Z" fill="#5f8a5e"/>
<ellipse cx="250" cy="694" rx="46" ry="32" fill="#6d9166"/>
<circle cx="164" cy="690" r="15" fill="#f3a6b8"/>
<circle cx="196" cy="676" r="14" fill="#e88aa2"/>
<circle cx="204" cy="708" r="13" fill="#fdf1e4"/>
<circle cx="238" cy="672" r="15" fill="#f3a6b8"/>
<circle cx="278" cy="682" r="14" fill="#b89ad6"/>
<circle cx="300" cy="706" r="13" fill="#e88aa2"/>
<circle cx="328" cy="694" r="12" fill="#fdf1e4"/>
<circle cx="150" cy="712" r="12" fill="#b89ad6"/>
<path d="M157 690 a7 7 0 1 0 14 0 a7 7 0 1 0 -14 0 Z M190 676 a6 6 0 1 0 12 0 a6 6 0 1 0 -12 0 Z M198 708 a6 6 0 1 0 12 0 a6 6 0 1 0 -12 0 Z M231 672 a7 7 0 1 0 14 0 a7 7 0 1 0 -14 0 Z M272 682 a6 6 0 1 0 12 0 a6 6 0 1 0 -12 0 Z M294 706 a6 6 0 1 0 12 0 a6 6 0 1 0 -12 0 Z M323 694 a5 5 0 1 0 10 0 a5 5 0 1 0 -10 0 Z M145 712 a5 5 0 1 0 10 0 a5 5 0 1 0 -10 0 Z" fill="#f6d38f"/>

<g data-obj="lightstick">
  <circle cx="236" cy="706" r="38" fill="url(#france-stickglow)" opacity="0.85"/>
  <rect x="223" y="736" width="26" height="58" rx="12" fill="#efe6f7"/>
  <rect x="223" y="736" width="10" height="58" rx="5" fill="#fdfaff"/>
  <rect x="219" y="728" width="34" height="16" rx="7" fill="#c9b7e2"/>
  <rect x="214" y="672" width="44" height="62" rx="21" fill="#8b5cc9"/>
  <rect x="214" y="672" width="44" height="62" rx="21" fill="none" stroke="#6a3aa8" stroke-width="3"/>
  <rect x="223" y="682" width="14" height="34" rx="7" fill="#cba9f4"/>
  <path d="M227 790 h18 v8 h-18 Z" fill="#b9a8cf"/>
</g>

<rect x="216" y="764" width="56" height="30" rx="4" fill="#8e7f9a"/>
<path d="M266 700 q22 -30 46 -34 M242 712 q30 -12 52 -8" stroke="#5f8a5e" stroke-width="5" fill="none"/>
<path d="M260 722 a26 16 0 1 0 52 0 a26 16 0 1 0 -52 0 Z M188 718 a24 15 0 1 0 48 0 a24 15 0 1 0 -48 0 Z" fill="#6d9166"/>
<circle cx="292" cy="716" r="11" fill="#f3a6b8"/>
<circle cx="206" cy="714" r="11" fill="#fdf1e4"/>
<circle cx="252" cy="726" r="10" fill="#b89ad6"/>

<!-- ================= bistro table + chairs ================= -->
<path d="M354 830 L354 950 M362 830 L346 950" stroke="#3a3844" stroke-width="7" fill="none"/>
<ellipse cx="358" cy="952" rx="34" ry="9" fill="#3a3844"/>
<ellipse cx="358" cy="824" rx="60" ry="18" fill="#e3d7c6"/>
<ellipse cx="358" cy="820" rx="60" ry="18" fill="#f4efe8"/>
<path d="M300 820 q30 -8 58 -2 q30 6 58 -4" stroke="#d9d2c8" stroke-width="3" fill="none"/>
<ellipse cx="336" cy="812" rx="17" ry="6" fill="#ffffff"/>
<ellipse cx="336" cy="806" rx="12" ry="5" fill="#f6e7d6"/>
<rect x="374" y="796" width="10" height="20" rx="3" fill="#d9a441"/>
<ellipse cx="379" cy="794" rx="9" ry="4" fill="#f0c667"/>
<path d="M296 946 L308 866 M340 946 L326 866 M404 946 L414 866 M456 946 L444 866" stroke="#3a3844" stroke-width="6" fill="none"/>
<path d="M282 862 a34 12 0 1 0 68 0 a34 12 0 1 0 -68 0 Z M392 864 a36 13 0 1 0 72 0 a36 13 0 1 0 -72 0 Z" fill="#4b4854"/>
<ellipse cx="316" cy="858" rx="34" ry="12" fill="#5f5b69"/>
<ellipse cx="428" cy="860" rx="36" ry="13" fill="#5f5b69"/>
<path d="M290 858 L288 794 M342 858 L346 794 M400 860 L398 776 M456 860 L460 776" stroke="#3a3844" stroke-width="6" fill="none"/>
<path d="M288 796 q28 -14 58 -2 M398 780 q30 -16 62 -4" stroke="#3a3844" stroke-width="7" fill="none"/>
<path d="M298 812 v40 M310 810 v42 M322 810 v42 M334 812 v40 M408 796 v56 M422 794 v58 M436 794 v58 M448 796 v56" stroke="#3a3844" stroke-width="4" fill="none"/>

<g data-obj="beret">
  <path d="M386 792 q-6 -30 20 -42 q26 -12 48 -2 q22 10 22 30 q0 12 -12 16 L398 796 Z" fill="#8e2f45"/>
  <path d="M392 782 q10 -22 34 -26 q22 -4 34 8 q-30 -6 -50 6 q-14 8 -18 12 Z" fill="#a63d55"/>
  <path d="M386 792 q4 12 22 14 l58 -2 q10 -4 10 -12 q-8 10 -34 12 q-34 2 -56 -12 Z" fill="#6f2436"/>
  <path d="M430 750 q4 -12 12 -10 q6 2 2 12 Z" fill="#6f2436"/>
  <ellipse cx="440" cy="748" rx="7" ry="5" fill="#8e2f45"/>
  <path d="M398 808 L472 802" stroke="#5b1c2c" stroke-width="3" fill="none" opacity="0.6"/>
</g>

<path d="M470 806 q22 -8 34 -30" stroke="#5f8a5e" stroke-width="5" fill="none"/>
<ellipse cx="486" cy="800" rx="18" ry="11" fill="#6d9166"/>

<!-- ================= newsstand / book stall ================= -->
<rect x="556" y="758" width="204" height="180" rx="6" fill="#3f5a4c"/>
<rect x="556" y="758" width="204" height="14" rx="5" fill="#557462"/>
<rect x="574" y="782" width="168" height="70" rx="4" fill="#2f4539"/>
<path d="M544 758 L772 758 L758 726 L558 726 Z" fill="#557462"/>
<path d="M544 758 L772 758 L772 770 L544 770 Z" fill="#2f4539"/>
<path d="M558 726 L758 726 L754 716 L562 716 Z" fill="#6d8f79"/>
<path d="M560 672 h10 v58 h-10 Z M746 672 h10 v58 h-10 Z" fill="#3f5a4c"/>
<rect x="580" y="790" width="30" height="42" rx="2" fill="#e88aa2"/>
<rect x="614" y="790" width="30" height="42" rx="2" fill="#f6d38f"/>
<rect x="648" y="790" width="30" height="42" rx="2" fill="#8fa0bd"/>
<rect x="682" y="790" width="30" height="42" rx="2" fill="#b89ad6"/>
<rect x="716" y="790" width="22" height="42" rx="2" fill="#f3a6b8"/>
<path d="M586 802 h18 M586 810 h14 M620 802 h18 M620 810 h12 M654 802 h18 M654 810 h14 M688 802 h18 M688 810 h12 M722 802 h12 M722 810 h10" stroke="#3f3b46" stroke-width="3" fill="none" opacity="0.5"/>
<rect x="556" y="856" width="204" height="14" rx="4" fill="#6d8f79"/>
<path d="M574 874 h66 v12 h-66 Z M652 878 h58 v12 h-58 Z" fill="#8e2f45"/>
<path d="M576 886 h62 v12 h-62 Z M654 890 h54 v12 h-54 Z" fill="#d9a441"/>
<path d="M572 898 h70 v12 h-70 Z M650 902 h62 v12 h-62 Z" fill="#4a6b8a"/>
<rect x="716" y="884" width="40" height="30" rx="2" fill="#e3d7c6"/>
<path d="M722 892 h28 M722 900 h22 M722 908 h26" stroke="#a9968a" stroke-width="3" fill="none"/>
<rect x="590" y="700" width="52" height="34" rx="4" fill="#8e2f45"/>
<rect x="656" y="704" width="46" height="30" rx="4" fill="#d9a441"/>
<path d="M590 704 h52 v6 h-52 Z M656 707 h46 v6 h-46 Z" fill="#f0c667"/>
<ellipse cx="592" cy="756" rx="26" ry="10" fill="#2f4539"/>

<g data-obj="perfume-bottle">
  <rect x="670" y="736" width="58" height="60" rx="12" fill="#b89ad6"/>
  <rect x="670" y="736" width="20" height="60" rx="10" fill="#d6c2ee"/>
  <rect x="700" y="756" width="16" height="30" rx="7" fill="#8b5cc9" opacity="0.55"/>
  <path d="M682 736 q17 -14 34 0 Z" fill="#a686cf"/>
  <rect x="690" y="722" width="18" height="16" rx="4" fill="#e6dcf5"/>
  <rect x="686" y="712" width="26" height="12" rx="5" fill="#d9a441"/>
  <rect x="686" y="712" width="26" height="5" rx="2" fill="#f0c667"/>
  <circle cx="726" cy="714" r="14" fill="#c9b7e2"/>
  <circle cx="722" cy="710" r="5" fill="#f4eefb"/>
  <path d="M712 718 L718 716" stroke="#d9a441" stroke-width="4" fill="none"/>
  <path d="M726 728 v12 M732 728 v10 M720 728 v10" stroke="#d9a441" stroke-width="2" fill="none"/>
</g>

<rect x="662" y="782" width="76" height="12" rx="4" fill="#6d8f79"/>
<rect x="664" y="792" width="72" height="6" rx="3" fill="#2f4539"/>

<!-- ================= lamppost ================= -->
<path d="M494 646 L494 946" stroke="#2f2c36" stroke-width="14" fill="none"/>
<path d="M490 646 L490 946" stroke="#474453" stroke-width="5" fill="none"/>
<ellipse cx="494" cy="948" rx="30" ry="10" fill="#2f2c36"/>
<rect x="472" y="898" width="44" height="16" rx="5" fill="#2f2c36"/>
<rect x="478" y="880" width="32" height="14" rx="4" fill="#3c3a44"/>
<path d="M494 662 q-30 6 -34 30 M494 662 q30 6 34 30" stroke="#2f2c36" stroke-width="7" fill="none"/>
<circle cx="494" cy="600" r="44" fill="url(#france-lampglow)"/>
<path d="M470 640 L474 596 L514 596 L518 640 Z" fill="#ffe6ae"/>
<path d="M470 640 L474 596 L514 596 L518 640 Z" fill="none" stroke="#2f2c36" stroke-width="5"/>
<path d="M494 596 v44" stroke="#2f2c36" stroke-width="3" fill="none" opacity="0.5"/>
<path d="M466 596 L494 570 L522 596 Z" fill="#2f2c36"/>
<rect x="488" y="556" width="12" height="16" rx="3" fill="#2f2c36"/>
<circle cx="494" cy="552" r="7" fill="#d9a441"/>
<path d="M528 692 q-6 -24 -34 -28" stroke="#2f2c36" stroke-width="5" fill="none"/>
<ellipse cx="540" cy="706" rx="20" ry="26" fill="#5f8a5e"/>
<ellipse cx="536" cy="698" rx="12" ry="16" fill="#7aa76e"/>
<circle cx="546" cy="712" r="7" fill="#e88aa2"/>
<circle cx="534" cy="718" r="6" fill="#f3a6b8"/>

<!-- ================= pigeons + chalkboard ================= -->
<path d="M212 950 a22 14 0 1 0 44 0 a22 14 0 1 0 -44 0 Z M272 962 a18 11 0 1 0 36 0 a18 11 0 1 0 -36 0 Z" fill="#8d8ea6"/>
<path d="M242 936 a10 10 0 1 0 20 0 a10 10 0 1 0 -20 0 Z M296 952 a8 8 0 1 0 16 0 a8 8 0 1 0 -16 0 Z" fill="#a3a4bb"/>
<path d="M260 936 L270 939 L260 942 Z M310 952 L319 954 L310 957 Z" fill="#d9a441"/>
<path d="M230 964 v8 M240 964 v8" stroke="#c07a55" stroke-width="3" fill="none"/>
<rect x="418" y="800" width="66" height="88" rx="5" fill="#8a5738"/>
<rect x="424" y="806" width="54" height="76" rx="3" fill="#33383a"/>
<path d="M432 820 h38 M432 834 h30 M432 848 h36 M432 862 h26" stroke="#e3d7c6" stroke-width="3" fill="none" opacity="0.7"/>
<path d="M424 894 L436 940 M478 894 L470 940" stroke="#8a5738" stroke-width="6" fill="none"/>

<!-- ================= foreground marble table ================= -->
<path d="M-20 1012 Q400 930 820 1012 L820 1200 L-20 1200 Z" fill="url(#france-marble)"/>
<path d="M-20 1012 Q400 930 820 1012 L820 1032 Q400 950 -20 1032 Z" fill="#fbf6ee"/>
<path d="M-20 1044 Q400 962 820 1044" fill="none" stroke="#d9d2c8" stroke-width="4" opacity="0.7"/>
<path d="M40 1090 q60 -18 120 -8 M320 1140 q80 -14 150 4 M560 1096 q70 -12 130 6 M120 1170 q90 -12 170 6 M480 1064 q60 -8 110 6" fill="none" stroke="#ddd4c6" stroke-width="4" opacity="0.65"/>
<path d="M-20 1064 Q400 982 820 1064" fill="none" stroke="#e9e0d2" stroke-width="6" opacity="0.5"/>

<!-- ================= easel supplies + palette (fg left) ================= -->
<ellipse cx="86" cy="1040" rx="70" ry="18" fill="#c9bcaa" opacity="0.45"/>
<rect x="40" y="962" width="54" height="74" rx="8" fill="#dfe6ec"/>
<rect x="40" y="962" width="18" height="74" rx="8" fill="#f2f6f9"/>
<rect x="40" y="1000" width="54" height="36" rx="6" fill="#a8c5d6" opacity="0.7"/>
<path d="M52 962 L46 916 M64 962 L64 906 M78 962 L88 912" stroke="#c58f63" stroke-width="7" stroke-linecap="round" fill="none"/>
<path d="M44 918 L48 902 L52 918 Z" fill="#7b4fb5"/>
<path d="M60 908 L64 892 L68 908 Z" fill="#e88aa2"/>
<path d="M84 914 L90 898 L92 916 Z" fill="#4a6b8a"/>
<rect x="104" y="990" width="26" height="48" rx="6" fill="#c9c2b6"/>
<rect x="104" y="990" width="10" height="48" rx="5" fill="#e0dad0"/>
<rect x="108" y="978" width="18" height="14" rx="4" fill="#8e2f45"/>

<g data-obj="artist-palette">
  <path d="M22 1064 q-2 -34 30 -50 q34 -18 66 -4 q30 14 28 42 q-2 30 -34 44 q-36 16 -66 0 q-22 -12 -24 -32 Z" fill="#c58f63"/>
  <path d="M28 1052 q4 -26 34 -38 q30 -12 56 -2 q-30 -4 -56 8 q-26 12 -34 32 Z" fill="#dfae82"/>
  <ellipse cx="44" cy="1078" rx="15" ry="11" fill="#8a5738"/>
  <ellipse cx="44" cy="1076" rx="15" ry="11" fill="#f0e5d5"/>
  <circle cx="54" cy="1032" r="10" fill="#8e2f45"/>
  <circle cx="80" cy="1022" r="10" fill="#d9a441"/>
  <circle cx="106" cy="1030" r="10" fill="#4a6b8a"/>
  <circle cx="114" cy="1058" r="10" fill="#5f8a5e"/>
  <circle cx="96" cy="1082" r="10" fill="#7b4fb5"/>
  <circle cx="70" cy="1090" r="9" fill="#f3a6b8"/>
  <path d="M40 1020 q18 -12 42 -12" stroke="#e8cbaa" stroke-width="4" fill="none" opacity="0.8"/>
</g>

<path d="M96 1108 q40 -22 78 -14 q-30 22 -78 14 Z" fill="#f6e7d6"/>
<path d="M100 1110 q34 -16 66 -12" stroke="#dcc9b4" stroke-width="3" fill="none"/>

<!-- ================= coffee cup + saucer ================= -->
<ellipse cx="262" cy="1054" rx="96" ry="26" fill="#c9bcaa" opacity="0.4"/>
<ellipse cx="262" cy="1046" rx="94" ry="26" fill="#efe8dd"/>
<ellipse cx="262" cy="1040" rx="94" ry="26" fill="#fdf8f0"/>
<ellipse cx="262" cy="1038" rx="66" ry="17" fill="#e6ddce"/>
<path d="M206 992 q6 42 18 48 q38 12 76 0 q12 -6 18 -48 Z" fill="#fdf8f0"/>
<path d="M206 992 q6 42 18 48 q10 3 20 4 q-14 -14 -18 -52 Z" fill="#efe6d8"/>
<ellipse cx="262" cy="992" rx="58" ry="18" fill="#f6efe3"/>
<ellipse cx="262" cy="992" rx="50" ry="14" fill="#8a5738"/>
<ellipse cx="262" cy="991" rx="44" ry="12" fill="#c7a17a"/>
<path d="M244 986 q18 -10 36 0 q-18 12 -36 0 Z" fill="#f3e4d0"/>
<path d="M256 996 q10 8 22 2" stroke="#f3e4d0" stroke-width="3" fill="none"/>
<path d="M318 998 q30 -4 30 20 q0 22 -28 22" fill="none" stroke="#fdf8f0" stroke-width="11"/>
<path d="M170 1044 q26 12 62 14" stroke="#e6ddce" stroke-width="4" fill="none"/>
<path d="M330 1052 L392 1030 q10 -2 10 4 q0 6 -10 8 L332 1062 Z" fill="#cfcfd6"/>
<ellipse cx="398" cy="1035" rx="12" ry="8" fill="#e2e2e8"/>
<rect x="150" y="1006" width="42" height="34" rx="6" fill="#f6e7d6"/>
<rect x="150" y="1006" width="42" height="10" rx="5" fill="#fdf6ea"/>
<rect x="158" y="994" width="12" height="12" rx="3" fill="#e6ddce"/>
<rect x="172" y="994" width="12" height="12" rx="3" fill="#fdf8f0"/>

<!-- ================= book with the purple heart ================= -->
<rect x="160" y="1082" width="200" height="102" rx="8" fill="#5a3f6e"/>
<rect x="160" y="1082" width="200" height="12" rx="6" fill="#7a578f"/>
<rect x="160" y="1170" width="200" height="14" rx="6" fill="#412c52"/>
<rect x="352" y="1088" width="12" height="92" rx="4" fill="#f4efe4"/>
<path d="M354 1096 h8 M354 1108 h8 M354 1120 h8 M354 1132 h8 M354 1144 h8 M354 1156 h8" stroke="#dcd2c2" stroke-width="2" fill="none"/>
<rect x="172" y="1094" width="176" height="78" rx="5" fill="none" stroke="#d9a441" stroke-width="3" opacity="0.8"/>
<path d="M258 1118 h72 M258 1130 h56 M258 1142 h64" stroke="#d9a441" stroke-width="3" fill="none" opacity="0.55"/>

<g data-obj="purple-heart">
  <path d="M209 1163 C186 1146 177 1134 177 1122 C177 1111 184 1105 192 1105 C199 1105 205 1110 209 1117 C213 1110 219 1105 226 1105 C234 1105 241 1111 241 1122 C241 1134 232 1146 209 1163 Z" fill="#43305a"/>
  <path d="M206 1160 C183 1143 174 1131 174 1119 C174 1108 181 1102 189 1102 C196 1102 202 1107 206 1114 C210 1107 216 1102 223 1102 C231 1102 238 1108 238 1119 C238 1131 229 1143 206 1160 Z" fill="#8f74a6"/>
  <path d="M186 1112 q6 -7 15 -5" stroke="#ab93bf" stroke-width="5" fill="none" stroke-linecap="round"/>
</g>

<path d="M150 1148 q46 -12 92 -2 q6 24 -8 40 q-46 8 -90 -4 Z" fill="#f6e7d6"/>
<path d="M158 1158 q40 -8 76 0" stroke="#e4d2bb" stroke-width="3" fill="none"/>
<path d="M330 1130 q28 -10 44 4" stroke="#d9a441" stroke-width="4" fill="none" opacity="0.7"/>

<!-- ================= tiered pastry stand ================= -->
<ellipse cx="466" cy="1136" rx="72" ry="20" fill="#c9bcaa" opacity="0.4"/>
<path d="M400 1128 a66 18 0 1 0 132 0 a66 18 0 1 0 -132 0 Z M378 1032 a88 24 0 1 0 176 0 a88 24 0 1 0 -176 0 Z M388 950 a78 20 0 1 0 156 0 a78 20 0 1 0 -156 0 Z" fill="#e2dacd"/>
<rect x="459" y="1030" width="14" height="94" fill="#d9a441"/>
<rect x="461" y="948" width="10" height="80" fill="#d9a441"/>
<path d="M459 1030 h6 v94 h-6 Z M461 948 h4 v80 h-4 Z" fill="#f0c667"/>
<ellipse cx="466" cy="1122" rx="66" ry="18" fill="#fbf5ec"/>
<ellipse cx="466" cy="1026" rx="88" ry="24" fill="#fbf5ec"/>
<ellipse cx="466" cy="944" rx="78" ry="20" fill="#fbf5ec"/>
<path d="M396 1024 a70 18 0 1 0 140 0 a70 18 0 1 0 -140 0 Z M404 942 a62 15 0 1 0 124 0 a62 15 0 1 0 -124 0 Z" fill="#f2ead9"/>
<path d="M400 938 a66 11 0 1 0 132 0 a66 11 0 1 0 -132 0 Z M386 1016 a30 16 0 1 0 60 0 a30 16 0 1 0 -60 0 Z M466 1018 a34 17 0 1 0 68 0 a34 17 0 1 0 -68 0 Z" fill="#d9c3a4"/>
<path d="M384 908 a32 14 0 1 0 64 0 a32 14 0 1 0 -64 0 Z M384 926 a32 13 0 1 0 64 0 a32 13 0 1 0 -64 0 Z" fill="#f2adc0"/>
<rect x="386" y="911" width="60" height="13" rx="6" fill="#fde6ec"/>
<path d="M482 911 a30 13 0 1 0 60 0 a30 13 0 1 0 -60 0 Z M482 928 a30 12 0 1 0 60 0 a30 12 0 1 0 -60 0 Z" fill="#edd8b2"/>
<rect x="484" y="914" width="56" height="12" rx="5" fill="#fdf3e2"/>
<ellipse cx="416" cy="1010" rx="30" ry="16" fill="#f6ead4"/>
<ellipse cx="500" cy="1012" rx="34" ry="17" fill="#ecd3ab"/>
<path d="M474 1006 q26 -14 52 0" stroke="#fbeed6" stroke-width="4" fill="none"/>
<path d="M418 1006 a6 6 0 1 0 12 0 a6 6 0 1 0 -12 0 Z M507 1006 a5 5 0 1 0 10 0 a5 5 0 1 0 -10 0 Z" fill="#8e2f45"/>
<circle cx="410" cy="1002" r="7" fill="#f3a6b8"/>
<circle cx="490" cy="1004" r="6" fill="#7b4fb5"/>

<g data-obj="macaron">
  <ellipse cx="466" cy="904" rx="38" ry="17" fill="#b39dcf"/>
  <path d="M428 904 q38 18 76 0 q0 10 -11 14 q-27 8 -54 0 q-11 -4 -11 -14 Z" fill="#a288c2"/>
  <rect x="430" y="910" width="72" height="13" rx="6" fill="#f0e6f7"/>
  <path d="M430 916 q36 10 72 0" stroke="#ddcdec" stroke-width="3" fill="none"/>
  <ellipse cx="466" cy="926" rx="38" ry="15" fill="#b39dcf"/>
  <path d="M428 926 q38 16 76 0 q0 9 -11 12 q-27 7 -54 0 q-11 -3 -11 -12 Z" fill="#9c81be"/>
  <path d="M444 894 q22 -9 42 -2" stroke="#d3c3e6" stroke-width="5" fill="none"/>
</g>

<path d="M407 922 a27 11 0 1 0 54 0 a27 11 0 1 0 -54 0 Z M407 936 a27 10 0 1 0 54 0 a27 10 0 1 0 -54 0 Z" fill="#f6c9d6"/>
<rect x="409" y="925" width="50" height="10" rx="4" fill="#fdeef2"/>

<!-- ================= bakery basket + croissant ================= -->
<ellipse cx="622" cy="1128" rx="86" ry="22" fill="#c9bcaa" opacity="0.4"/>
<path d="M546 1016 q76 -22 152 0 L682 1122 q-60 16 -120 0 Z" fill="#a9714a"/>
<path d="M546 1016 q76 -22 152 0 L692 1052 q-70 -18 -140 0 Z" fill="#c58f63"/>
<rect x="560" y="984" width="130" height="34" rx="6" fill="#f6e7d6"/>
<path d="M560 992 q66 -14 130 0" stroke="#e5d3bd" stroke-width="3" fill="none"/>

<g data-obj="croissant">
  <path d="M600 970 a23 22 0 1 0 46 0 a23 22 0 1 0 -46 0 Z M579 985 a19 18 0 1 0 38 0 a19 18 0 1 0 -38 0 Z M629 985 a19 18 0 1 0 38 0 a19 18 0 1 0 -38 0 Z M563 1002 a13 12 0 1 0 26 0 a13 12 0 1 0 -26 0 Z M657 1002 a13 12 0 1 0 26 0 a13 12 0 1 0 -26 0 Z" fill="#d9a15e"/>
  <path d="M568 1000 L556 1015 L582 1013 Z M678 1000 L690 1015 L664 1013 Z" fill="#cf9152"/>
  <path d="M562 1006 q28 14 61 14 q33 0 61 -14 q-6 10 -18 14 q-40 12 -86 0 q-12 -4 -18 -14 Z" fill="#c5854a"/>
  <path d="M606 958 q10 -12 26 -10 M584 977 q8 -11 21 -9 M634 977 q8 -11 21 -9 M567 996 q6 -8 15 -7 M661 996 q6 -8 15 -7" stroke="#eec489" stroke-width="7" fill="none" stroke-linecap="round"/>
  <path d="M615 1000 q4 -16 2 -30 M633 1000 q-4 -16 -2 -30 M592 1012 q4 -12 2 -20 M656 1012 q-4 -12 -2 -20" stroke="#b57c42" stroke-width="4" fill="none"/>
</g>

<path d="M542 1010 q80 -24 160 0 L700 1030 q-78 -22 -156 0 Z" fill="#8a5738"/>
<path d="M542 1010 q80 -24 160 0 L700 1020 q-78 -22 -156 0 Z" fill="#c58f63"/>
<path d="M556 1040 q66 -16 132 0 M552 1064 q70 -16 140 0 M556 1088 q64 -14 128 0" stroke="#8a5738" stroke-width="5" fill="none"/>
<path d="M576 1024 v96 M616 1020 v104 M656 1024 v96" stroke="#8a5738" stroke-width="5" fill="none" opacity="0.8"/>
<path d="M562 1032 a26 15 0 1 0 52 0 a26 15 0 1 0 -52 0 Z M640 1034 a24 14 0 1 0 48 0 a24 14 0 1 0 -48 0 Z" fill="#c9884b"/>
<ellipse cx="588" cy="1026" rx="26" ry="15" fill="#dfa261"/>
<ellipse cx="664" cy="1028" rx="24" ry="14" fill="#d19457"/>
<path d="M650 1024 q14 -6 28 0" stroke="#f0c78f" stroke-width="4" fill="none"/>
<path d="M574 1020 a6 6 0 1 0 12 0 a6 6 0 1 0 -12 0 Z M591 1016 a5 5 0 1 0 10 0 a5 5 0 1 0 -10 0 Z" fill="#8e2f45"/>

<!-- ================= shopping bags + baguette ================= -->
<ellipse cx="746" cy="1136" rx="80" ry="22" fill="#c9bcaa" opacity="0.4"/>
<rect x="692" y="944" width="112" height="44" fill="#6f5c4b"/>
<g data-obj="baguette" transform="rotate(-24 740 938)">
  <rect x="722" y="876" width="36" height="124" rx="18" fill="#d9a15e"/>
  <rect x="722" y="876" width="14" height="124" rx="7" fill="#eec489"/>
  <path d="M730 904 q12 -5 20 2 M729 934 q12 -5 20 2 M730 964 q12 -5 20 2" stroke="#b57c42" stroke-width="5" fill="none" stroke-linecap="round"/>
  <path d="M732 892 q10 -6 16 0" stroke="#f7dcae" stroke-width="4" fill="none"/>
  <ellipse cx="740" cy="880" rx="14" ry="7" fill="#eec489"/>
</g>
<path d="M688 966 L810 966 L804 1132 L694 1132 Z" fill="#e4d3bc"/>
<path d="M688 966 L810 966 L809 984 L688 984 Z" fill="#f3e6d2"/>
<path d="M760 966 L810 966 L804 1132 L756 1132 Z" fill="#d3bfa4" opacity="0.7"/>
<path d="M706 962 q18 -34 40 -2" fill="none" stroke="#8a5738" stroke-width="6"/>
<path d="M760 962 q18 -34 38 -2" fill="none" stroke="#8a5738" stroke-width="6"/>
<path d="M700 1006 q46 -8 92 0" stroke="#cdb99c" stroke-width="4" fill="none"/>
<circle cx="752" cy="1060" r="26" fill="#8e2f45"/>
<path d="M726 1060 a26 26 0 0 1 52 0 Z" fill="#a63d55"/>
<path d="M734 1050 q18 -10 36 0" stroke="#f6e7d6" stroke-width="4" fill="none"/>
<path d="M752 1034 v52 M726 1060 h52" stroke="#6f2436" stroke-width="3" fill="none" opacity="0.6"/>
<rect x="640" y="1046" width="82" height="86" rx="5" fill="#c9dbe2"/>
<path d="M640 1046 L722 1046 L722 1062 L640 1062 Z" fill="#e0edf1"/>
<path d="M650 1042 q14 -26 32 -2" fill="none" stroke="#6d8f79" stroke-width="5"/>
<path d="M652 1080 q34 -6 62 0 M652 1102 q34 -6 62 0" stroke="#a9c3cc" stroke-width="4" fill="none"/>
<path d="M700 1046 q10 -34 4 -54 M690 1046 q-2 -28 -10 -42" stroke="#5f8a5e" stroke-width="6" fill="none"/>
<path d="M704 998 q-4 -32 8 -44 q10 16 2 46 Z M680 1006 q-14 -28 -6 -42 q16 12 14 44 Z" fill="#6d9166"/>
<path d="M706 996 q-2 -26 6 -36 q4 12 -1 34 Z" fill="#83a877"/>

<!-- ================= final foreground crumbs + warm light ================= -->
<path d="M347 1058 a5 5 0 1 0 10 0 a5 5 0 1 0 -10 0 Z M362 1070 a4 4 0 1 0 8 0 a4 4 0 1 0 -8 0 Z M535 1102 a5 5 0 1 0 10 0 a5 5 0 1 0 -10 0 Z M552 1116 a4 4 0 1 0 8 0 a4 4 0 1 0 -8 0 Z M192 1064 a4 4 0 1 0 8 0 a4 4 0 1 0 -8 0 Z M609 1150 a5 5 0 1 0 10 0 a5 5 0 1 0 -10 0 Z M632 1162 a4 4 0 1 0 8 0 a4 4 0 1 0 -8 0 Z" fill="#d0904f" opacity="0.75"/>
<path d="M406 1170 q28 -12 56 -2 q-26 14 -56 2 Z" fill="#f6e7d6" opacity="0.9"/>
<path d="M412 1172 q26 -10 46 -4" stroke="#e2d0b9" stroke-width="3" fill="none"/>
<ellipse cx="220" cy="1196" rx="120" ry="16" fill="#cdc0ae" opacity="0.35"/>
<ellipse cx="600" cy="1192" rx="130" ry="16" fill="#cdc0ae" opacity="0.3"/>
</svg>`
});
