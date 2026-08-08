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
    { id: 'lightstick',     name: 'Lightstick' },
    { id: 'purple-heart',   name: 'Purple Heart' },
    { id: 'merlion',        name: 'Merlion' },
    { id: 'moon',           name: 'Moon' },
    { id: 'noodle-bowl',    name: 'Noodle Bowl' },
    { id: 'watering-can',   name: 'Watering Can' },
    { id: 'red-bowl',       name: 'Red Bowl' },
    { id: 'river-boat',     name: 'River Boat' },
    { id: 'tote-bag',       name: 'Tote Bag' },
    { id: 'canopy-teal',    name: 'Teal Canopy' },
    { id: 'orchid',         name: 'Orchid' },
    { id: 'sky-lantern',    name: 'Sky Lantern' },
    { id: 'straw-hat',      name: 'Straw Hat' },
    { id: 'bird-bath',      name: 'Bird Bath' },
    { id: 'green-bottle',   name: 'Green Bottle' },
    { id: 'lily-pad',       name: 'Lily Pad' },
    { id: 'gift-box',       name: 'Gift Box' },
    { id: 'bicycle',        name: 'Bicycle' },
    { id: 'boba-cup',       name: 'Boba Cup' },
    { id: 'butterfly',      name: 'Butterfly' },
    { id: 'satay-skewer',   name: 'Satay Skewers' },
    { id: 'camera',         name: 'Camera' },
    { id: 'koi-fish',       name: 'Koi Fish' },
    { id: 'snow-globe',     name: 'Snow Globe' },
    { id: 'bird-nest',      name: 'Bird Nest' },
    { id: 'roof-tank',      name: 'Roof Tank' },
    { id: 'signpost',       name: 'Signpost' },
    { id: 'ferris-toy',     name: 'Ferris Wheel Toy' },
    { id: 'red-kite',       name: 'Red Kite' },
    { id: 'garden-lamp',    name: 'Garden Lamp' },
    { id: 'water-buoy',     name: 'Buoy' },
    { id: 'banner-flag',    name: 'Banner' },
    { id: 'sky-crane',      name: 'Sky Crane' },
    { id: 'wheelbarrow',    name: 'Wheelbarrow' },
    { id: 'thermos',        name: 'Thermos' },
    { id: 'kaya-toast',     name: 'Kaya Toast' },
    { id: 'park-bench',     name: 'Park Bench' },
    { id: 'dome-roof',      name: 'Dome Roof' },
    { id: 'potted-palm',    name: 'Potted Palm' },
    { id: 'mooring-post',   name: 'Mooring Post' },
    { id: 'iced-glass',     name: 'Iced Glass' },
    { id: 'durian',         name: 'Durian' },
    { id: 'billboard',      name: 'Billboard' },
    { id: 'beach-ball',     name: 'Beach Ball' },
    { id: 'bird-house',     name: 'Bird House' },
    { id: 'paper-umbrella', name: 'Parasol' },
    { id: 'paper-fan',      name: 'Paper Fan' },
    { id: 'polaroid',       name: 'Photo' },
    { id: 'ukulele',        name: 'Ukulele' },
    { id: 'backpack',       name: 'Backpack' }
  ],
  svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 1200" width="800" height="1200">
<defs>
<linearGradient id="singapore-sky" x1="0" y1="0" x2="0" y2="1">
<stop offset="0" stop-color="#ffe3c0"/>
<stop offset="0.10" stop-color="#ffc79c"/>
<stop offset="0.22" stop-color="#f5949c"/>
<stop offset="0.34" stop-color="#c176ae"/>
<stop offset="0.48" stop-color="#7a539a"/>
<stop offset="0.72" stop-color="#43306a"/>
<stop offset="1" stop-color="#2a1f45"/>
</linearGradient>
<radialGradient id="singapore-sunglow" cx="0.5" cy="0.5" r="0.5">
<stop offset="0" stop-color="#ffeacb" stop-opacity="0.9"/>
<stop offset="0.5" stop-color="#ffc7a0" stop-opacity="0.38"/>
<stop offset="1" stop-color="#ffb894" stop-opacity="0"/>
</radialGradient>
<linearGradient id="singapore-haze" x1="0" y1="0" x2="0" y2="1">
<stop offset="0" stop-color="#a487c9" stop-opacity="0.08"/>
<stop offset="0.55" stop-color="#ab8ad0" stop-opacity="0.3"/>
<stop offset="1" stop-color="#c1a2e2" stop-opacity="0.52"/>
</linearGradient>
<radialGradient id="singapore-glowm" cx="0.5" cy="0.5" r="0.5">
<stop offset="0" stop-color="#ff9ad8" stop-opacity="0.72"/>
<stop offset="0.45" stop-color="#e070bd" stop-opacity="0.3"/>
<stop offset="1" stop-color="#ff9ad8" stop-opacity="0"/>
</radialGradient>
<radialGradient id="singapore-glowt" cx="0.5" cy="0.5" r="0.5">
<stop offset="0" stop-color="#8ff2ea" stop-opacity="0.68"/>
<stop offset="0.45" stop-color="#4fc4c8" stop-opacity="0.28"/>
<stop offset="1" stop-color="#8ff2ea" stop-opacity="0"/>
</radialGradient>
<radialGradient id="singapore-glowy" cx="0.5" cy="0.5" r="0.5">
<stop offset="0" stop-color="#ffe9bc" stop-opacity="0.9"/>
<stop offset="0.45" stop-color="#ffcf8a" stop-opacity="0.34"/>
<stop offset="1" stop-color="#ffe1a6" stop-opacity="0"/>
</radialGradient>
<radialGradient id="singapore-glowp" cx="0.5" cy="0.5" r="0.5">
<stop offset="0" stop-color="#d8b6ff" stop-opacity="0.85"/>
<stop offset="0.45" stop-color="#a86ee0" stop-opacity="0.32"/>
<stop offset="1" stop-color="#c79bff" stop-opacity="0"/>
</radialGradient>
<radialGradient id="singapore-shadow" cx="0.5" cy="0.5" r="0.5">
<stop offset="0" stop-color="#0d2018" stop-opacity="0.58"/>
<stop offset="0.5" stop-color="#0d2018" stop-opacity="0.3"/>
<stop offset="1" stop-color="#0d2018" stop-opacity="0"/>
</radialGradient>
<radialGradient id="singapore-shadow-c" cx="0.5" cy="0.5" r="0.5">
<stop offset="0" stop-color="#241a3c" stop-opacity="0.6"/>
<stop offset="0.5" stop-color="#241a3c" stop-opacity="0.3"/>
<stop offset="1" stop-color="#241a3c" stop-opacity="0"/>
</radialGradient>
<radialGradient id="singapore-shadow-w" cx="0.5" cy="0.5" r="0.5">
<stop offset="0" stop-color="#4a2a14" stop-opacity="0.55"/>
<stop offset="0.5" stop-color="#4a2a14" stop-opacity="0.28"/>
<stop offset="1" stop-color="#4a2a14" stop-opacity="0"/>
</radialGradient>
<radialGradient id="singapore-sph-moon" cx="0.36" cy="0.32" r="0.78">
<stop offset="0" stop-color="#fffdf3"/>
<stop offset="0.55" stop-color="#ffeecd"/>
<stop offset="1" stop-color="#e2c398"/>
</radialGradient>
<linearGradient id="singapore-bldg-a" x1="0" y1="0" x2="1" y2="0">
<stop offset="0" stop-color="#4d3d79"/>
<stop offset="0.5" stop-color="#332659"/>
<stop offset="1" stop-color="#221a3d"/>
</linearGradient>
<linearGradient id="singapore-bldg-b" x1="0" y1="0" x2="1" y2="0">
<stop offset="0" stop-color="#5a4788"/>
<stop offset="0.55" stop-color="#3b2d68"/>
<stop offset="1" stop-color="#281e46"/>
</linearGradient>
<linearGradient id="singapore-bldg-c" x1="0" y1="0" x2="1" y2="0">
<stop offset="0" stop-color="#413271"/>
<stop offset="0.5" stop-color="#2b2049"/>
<stop offset="1" stop-color="#1d1635"/>
</linearGradient>
<linearGradient id="singapore-trunk" x1="0" y1="0" x2="1" y2="0">
<stop offset="0" stop-color="#2a1e42"/>
<stop offset="0.42" stop-color="#5b4480"/>
<stop offset="0.74" stop-color="#7f61ad"/>
<stop offset="1" stop-color="#33244f"/>
</linearGradient>
<linearGradient id="singapore-trunk-t" x1="0" y1="0" x2="1" y2="0">
<stop offset="0" stop-color="#26213f"/>
<stop offset="0.42" stop-color="#496089"/>
<stop offset="0.74" stop-color="#6fa0b6"/>
<stop offset="1" stop-color="#2b2a4c"/>
</linearGradient>
<radialGradient id="singapore-canopy-a" cx="0.42" cy="0.3" r="0.78">
<stop offset="0" stop-color="#ffc0ec"/>
<stop offset="0.42" stop-color="#e070bd"/>
<stop offset="1" stop-color="#5f2a80"/>
</radialGradient>
<radialGradient id="singapore-canopy-b" cx="0.42" cy="0.3" r="0.78">
<stop offset="0" stop-color="#c4fbf4"/>
<stop offset="0.42" stop-color="#4dc0ca"/>
<stop offset="1" stop-color="#255f86"/>
</radialGradient>
<radialGradient id="singapore-canopy-c" cx="0.42" cy="0.3" r="0.78">
<stop offset="0" stop-color="#ffe6bd"/>
<stop offset="0.42" stop-color="#e59872"/>
<stop offset="1" stop-color="#7d4260"/>
</radialGradient>
<linearGradient id="singapore-water" x1="0" y1="0" x2="0" y2="1">
<stop offset="0" stop-color="#a681ca"/>
<stop offset="0.28" stop-color="#6d5199"/>
<stop offset="0.74" stop-color="#3a2b66"/>
<stop offset="1" stop-color="#211940"/>
</linearGradient>
<linearGradient id="singapore-refl" x1="0" y1="0" x2="0" y2="1">
<stop offset="0" stop-color="#efdcff" stop-opacity="0.45"/>
<stop offset="1" stop-color="#efdcff" stop-opacity="0"/>
</linearGradient>
<linearGradient id="singapore-deck" x1="0" y1="0" x2="0" y2="1">
<stop offset="0" stop-color="#7d6499"/>
<stop offset="0.18" stop-color="#54406e"/>
<stop offset="1" stop-color="#372a4e"/>
</linearGradient>
<linearGradient id="singapore-ground" x1="0" y1="0" x2="0" y2="1">
<stop offset="0" stop-color="#377350"/>
<stop offset="0.42" stop-color="#255239"/>
<stop offset="1" stop-color="#123024"/>
</linearGradient>
<linearGradient id="singapore-path" x1="0" y1="0" x2="0" y2="1">
<stop offset="0" stop-color="#c2ae8b"/>
<stop offset="0.3" stop-color="#9c8a6c"/>
<stop offset="1" stop-color="#6b5d47"/>
</linearGradient>
<radialGradient id="singapore-bush" cx="0.4" cy="0.26" r="0.8">
<stop offset="0" stop-color="#5aa06e"/>
<stop offset="0.45" stop-color="#2d6142"/>
<stop offset="1" stop-color="#123324"/>
</radialGradient>
<radialGradient id="singapore-bush-d" cx="0.4" cy="0.26" r="0.8">
<stop offset="0" stop-color="#468a5c"/>
<stop offset="0.45" stop-color="#245039"/>
<stop offset="1" stop-color="#0e2b1e"/>
</radialGradient>
<linearGradient id="singapore-mat" x1="0" y1="0" x2="0" y2="1">
<stop offset="0" stop-color="#8f5abb"/>
<stop offset="0.35" stop-color="#6a3f95"/>
<stop offset="1" stop-color="#3d2260"/>
</linearGradient>
<linearGradient id="singapore-wood" x1="0" y1="0" x2="1" y2="0">
<stop offset="0" stop-color="#e0a86a"/>
<stop offset="0.45" stop-color="#a8703c"/>
<stop offset="1" stop-color="#5e3a1e"/>
</linearGradient>
<linearGradient id="singapore-wood-v" x1="0" y1="0" x2="0" y2="1">
<stop offset="0" stop-color="#dda76c"/>
<stop offset="0.25" stop-color="#b07a45"/>
<stop offset="1" stop-color="#6b4226"/>
</linearGradient>
<linearGradient id="singapore-canvas" x1="0" y1="0" x2="0" y2="1">
<stop offset="0" stop-color="#fbedd2"/>
<stop offset="0.4" stop-color="#eed6ac"/>
<stop offset="1" stop-color="#c69f70"/>
</linearGradient>
<radialGradient id="singapore-plate" cx="0.38" cy="0.28" r="0.8">
<stop offset="0" stop-color="#fffaf0"/>
<stop offset="0.6" stop-color="#e9ddc5"/>
<stop offset="1" stop-color="#b8a98d"/>
</radialGradient>
<linearGradient id="singapore-metal" x1="0" y1="0" x2="1" y2="0">
<stop offset="0" stop-color="#dbe3e9"/>
<stop offset="0.42" stop-color="#98a3ac"/>
<stop offset="1" stop-color="#545d66"/>
</linearGradient>
<linearGradient id="singapore-red" x1="0" y1="0" x2="1" y2="0">
<stop offset="0" stop-color="#f89a8e"/>
<stop offset="0.45" stop-color="#d4453c"/>
<stop offset="1" stop-color="#822622"/>
</linearGradient>
<linearGradient id="singapore-teal" x1="0" y1="0" x2="1" y2="0">
<stop offset="0" stop-color="#98f4ec"/>
<stop offset="0.45" stop-color="#2ec7c0"/>
<stop offset="1" stop-color="#116e6a"/>
</linearGradient>
<linearGradient id="singapore-purple" x1="0" y1="0" x2="1" y2="0">
<stop offset="0" stop-color="#d5b0ff"/>
<stop offset="0.45" stop-color="#9b5de5"/>
<stop offset="1" stop-color="#53288a"/>
</linearGradient>
<linearGradient id="singapore-green" x1="0" y1="0" x2="1" y2="0">
<stop offset="0" stop-color="#93e3a6"/>
<stop offset="0.45" stop-color="#43a06b"/>
<stop offset="1" stop-color="#1b5636"/>
</linearGradient>
<linearGradient id="singapore-amber" x1="0" y1="0" x2="1" y2="0">
<stop offset="0" stop-color="#ffe6ab"/>
<stop offset="0.45" stop-color="#f2a24a"/>
<stop offset="1" stop-color="#9c5518"/>
</linearGradient>
<linearGradient id="singapore-pink" x1="0" y1="0" x2="1" y2="0">
<stop offset="0" stop-color="#ffbde2"/>
<stop offset="0.45" stop-color="#e0559e"/>
<stop offset="1" stop-color="#87275c"/>
</linearGradient>
<linearGradient id="singapore-cream" x1="0" y1="0" x2="1" y2="0">
<stop offset="0" stop-color="#fffdf6"/>
<stop offset="0.45" stop-color="#efe2c8"/>
<stop offset="1" stop-color="#b09d78"/>
</linearGradient>
<radialGradient id="singapore-sph-red" cx="0.34" cy="0.28" r="0.8">
<stop offset="0" stop-color="#ffa094"/>
<stop offset="0.5" stop-color="#d4453c"/>
<stop offset="1" stop-color="#75201c"/>
</radialGradient>
<radialGradient id="singapore-sph-green" cx="0.34" cy="0.28" r="0.8">
<stop offset="0" stop-color="#a6e8ac"/>
<stop offset="0.5" stop-color="#43a06b"/>
<stop offset="1" stop-color="#194e31"/>
</radialGradient>
<radialGradient id="singapore-sph-purple" cx="0.34" cy="0.28" r="0.8">
<stop offset="0" stop-color="#e0c2ff"/>
<stop offset="0.5" stop-color="#8a56c4"/>
<stop offset="1" stop-color="#361560"/>
</radialGradient>
<radialGradient id="singapore-sph-cream" cx="0.34" cy="0.28" r="0.8">
<stop offset="0" stop-color="#fffdf7"/>
<stop offset="0.55" stop-color="#eddfc2"/>
<stop offset="1" stop-color="#a08c68"/>
</radialGradient>
<radialGradient id="singapore-sph-stone" cx="0.34" cy="0.28" r="0.8">
<stop offset="0" stop-color="#d3dcd1"/>
<stop offset="0.5" stop-color="#8f9a90"/>
<stop offset="1" stop-color="#4a554a"/>
</radialGradient>
<radialGradient id="singapore-sph-durian" cx="0.34" cy="0.28" r="0.8">
<stop offset="0" stop-color="#b3cf72"/>
<stop offset="0.5" stop-color="#5c7c38"/>
<stop offset="1" stop-color="#22341a"/>
</radialGradient>
<radialGradient id="singapore-lantern" cx="0.38" cy="0.3" r="0.8">
<stop offset="0" stop-color="#fff2cf"/>
<stop offset="0.5" stop-color="#ffcf8a"/>
<stop offset="1" stop-color="#d18a4c"/>
</radialGradient>
<radialGradient id="singapore-glass" cx="0.34" cy="0.26" r="0.82">
<stop offset="0" stop-color="#f2fbfe" stop-opacity="0.95"/>
<stop offset="0.55" stop-color="#bcdfeb" stop-opacity="0.85"/>
<stop offset="1" stop-color="#7fa9bc" stop-opacity="0.85"/>
</radialGradient>
</defs>

<rect x="0" y="0" width="800" height="1200" fill="url(#singapore-sky)"/>
<ellipse cx="560" cy="168" rx="390" ry="238" fill="url(#singapore-sunglow)"/>
<ellipse cx="150" cy="112" rx="252" ry="118" fill="#ffd0ae" opacity="0.18"/>
<circle cx="646" cy="92" r="88" fill="url(#singapore-glowy)"/>
<g data-obj="moon">
<circle cx="646" cy="92" r="24" fill="url(#singapore-sph-moon)"/>
<ellipse cx="637" cy="83" rx="13" ry="10" fill="#fffdf3" opacity="0.55"/>
<circle cx="655" cy="100" r="5" fill="#e0c69f" opacity="0.55"/>
<circle cx="641" cy="101" r="3.4" fill="#e0c69f" opacity="0.45"/>
<path d="M624,86 a24,24 0 0 0 18,29" fill="none" stroke="#fffaf0" stroke-width="2.2" opacity="0.55"/>
</g>
<circle cx="72" cy="58" r="2.4" fill="#fff6e6" opacity="0.75"/>
<circle cx="204" cy="46" r="2" fill="#fff6e6" opacity="0.7"/>
<circle cx="332" cy="64" r="2.2" fill="#fff6e6" opacity="0.7"/>
<circle cx="470" cy="52" r="2" fill="#fff6e6" opacity="0.65"/>
<circle cx="762" cy="70" r="1.7" fill="#fff6e6" opacity="0.6"/>
<circle cx="120" cy="96" r="1.6" fill="#fff6e6" opacity="0.6"/>
<circle cx="556" cy="40" r="1.8" fill="#fff6e6" opacity="0.6"/>
<ellipse cx="170" cy="168" rx="128" ry="18" fill="#c98aa6" opacity="0.34"/>
<ellipse cx="184" cy="162" rx="96" ry="9" fill="#ffd4b4" opacity="0.42"/>
<ellipse cx="540" cy="240" rx="158" ry="19" fill="#a8628f" opacity="0.3"/>
<ellipse cx="556" cy="234" rx="118" ry="9" fill="#f5aab6" opacity="0.34"/>
<ellipse cx="60" cy="274" rx="142" ry="16" fill="#8f5a92" opacity="0.28"/>
<ellipse cx="76" cy="269" rx="104" ry="8" fill="#d295b8" opacity="0.3"/>
<ellipse cx="700" cy="190" rx="122" ry="14" fill="#c07f9c" opacity="0.26"/>
<ellipse cx="712" cy="185" rx="90" ry="7" fill="#ffcaab" opacity="0.3"/>
<circle cx="250" cy="256" r="36" fill="url(#singapore-glowy)"/>
<g data-obj="sky-lantern">
<path d="M236,248 Q236,236 250,236 Q264,236 264,248 L259,272 Q250,278 241,272 Z" fill="url(#singapore-lantern)"/>
<path d="M251,236 Q264,236 264,248 L259,272 Q255,275 251,275 Z" fill="#c07a3e" opacity="0.5"/>
<path d="M239,242 Q240,238 245,237" fill="none" stroke="#fff6d8" stroke-width="1.8" opacity="0.85"/>
<rect x="240" y="231" width="20" height="6" rx="2.5" fill="url(#singapore-wood)"/>
<rect x="243" y="272" width="14" height="4" rx="2" fill="#b87a44"/>
<ellipse cx="250" cy="264" rx="5" ry="7" fill="#fff6d8" opacity="0.95"/>
<path d="M246,276 L250,285 L254,276" fill="none" stroke="#c98a52" stroke-width="1.4"/>
</g>
<circle cx="700" cy="248" r="42" fill="url(#singapore-glowy)" opacity="0.35"/>
<g data-obj="red-kite">
<path d="M700,222 L718,248 L700,274 L682,248 Z" fill="url(#singapore-red)"/>
<path d="M700,222 L718,248 L700,274 Z" fill="#9c2e27" opacity="0.7"/>
<path d="M700,222 L682,248 L692,248 Z" fill="#ffb7a6" opacity="0.55"/>
<path d="M682,248 L718,248" stroke="#f9ecd6" stroke-width="1.6"/>
<path d="M700,222 L700,274" stroke="#f9ecd6" stroke-width="1.6"/>
<path d="M700,274 Q694,282 700,288" fill="none" stroke="#8a5a33" stroke-width="1.6"/>
<rect x="693" y="276" width="11" height="4.4" rx="2" fill="#ffcf6a" transform="rotate(-18 698 278)"/>
<rect x="695" y="283" width="11" height="4.4" rx="2" fill="#2ec7c0" transform="rotate(14 700 285)"/>
</g>

<rect x="0" y="452" width="62" height="96" fill="url(#singapore-bldg-a)"/>
<rect x="0" y="452" width="62" height="3" fill="#6b5798" opacity="0.65"/>
<rect x="54" y="418" width="46" height="130" fill="url(#singapore-bldg-b)"/>
<rect x="54" y="418" width="46" height="3" fill="#7563a8" opacity="0.7"/>
<rect x="126" y="392" width="56" height="156" fill="url(#singapore-bldg-c)"/>
<polygon points="126,392 154,368 182,392" fill="#241b40"/>
<polygon points="154,368 126,392 140,392" fill="#453675" opacity="0.8"/>
<rect x="161" y="369" width="12" height="4" rx="1.5" fill="#4a3a75"/>
<rect x="204" y="474" width="28" height="74" fill="url(#singapore-bldg-b)"/>
<rect x="204" y="474" width="28" height="3" fill="#6f5da4" opacity="0.7"/>
<rect x="228" y="446" width="34" height="102" fill="url(#singapore-bldg-a)"/>
<rect x="256" y="436" width="42" height="112" fill="url(#singapore-bldg-c)"/>
<rect x="294" y="406" width="58" height="142" fill="url(#singapore-bldg-b)"/>
<rect x="294" y="406" width="58" height="3" fill="#7563a8" opacity="0.7"/>
<rect x="380" y="394" width="48" height="154" fill="url(#singapore-bldg-a)"/>
<rect x="399" y="360" width="10" height="36" fill="#241b40"/>
<circle cx="404" cy="357" r="3" fill="#ff9ad8" opacity="0.9"/>
<rect x="424" y="448" width="32" height="100" fill="url(#singapore-bldg-c)"/>
<rect x="506" y="432" width="42" height="116" fill="url(#singapore-bldg-b)"/>
<rect x="570" y="482" width="26" height="66" fill="url(#singapore-bldg-a)"/>
<rect x="568" y="477" width="30" height="6" rx="2" fill="#241b40"/>
<rect x="716" y="428" width="42" height="120" fill="url(#singapore-bldg-a)"/>
<rect x="752" y="398" width="48" height="150" fill="url(#singapore-bldg-b)"/>
<rect x="752" y="398" width="48" height="3" fill="#7563a8" opacity="0.7"/>
<rect x="770" y="366" width="8" height="34" fill="#241b40"/>
<rect x="694" y="466" width="26" height="82" fill="url(#singapore-bldg-c)"/>
<rect x="596" y="362" width="30" height="186" fill="url(#singapore-bldg-b)"/>
<rect x="636" y="356" width="30" height="192" fill="url(#singapore-bldg-b)"/>
<rect x="676" y="364" width="30" height="184" fill="url(#singapore-bldg-b)"/>
<path d="M584,362 L714,346 Q730,343 728,332 L584,348 Z" fill="#4a3878"/>
<path d="M584,348 L728,332 Q726,326 712,327 L584,342 Z" fill="#6d5896"/>
<path d="M584,348 L728,332 Q726,328 718,328 L584,344 Z" fill="#8a72b4" opacity="0.7"/>
<ellipse cx="622" cy="338" rx="7" ry="4" fill="#2f6647"/>
<ellipse cx="666" cy="333" rx="7" ry="4" fill="#2f6647"/>
<circle cx="606" cy="342" r="2" fill="#ffd9a0" opacity="0.85"/>
<circle cx="716" cy="330" r="2" fill="#ffd9a0" opacity="0.85"/>
<rect x="8" y="470" width="5" height="8" fill="#ffcf8a" opacity="0.65"/>
<rect x="62" y="438" width="5" height="9" fill="#ffcf8a" opacity="0.7"/>
<rect x="80" y="466" width="5" height="8" fill="#ffcf8a" opacity="0.5"/>
<rect x="136" y="412" width="5" height="9" fill="#ffcf8a" opacity="0.7"/>
<rect x="158" y="440" width="5" height="9" fill="#ffcf8a" opacity="0.6"/>
<rect x="217" y="486" width="6" height="9" fill="#ffcf8a" opacity="0.7"/>
<rect x="217" y="512" width="6" height="9" fill="#ffcf8a" opacity="0.5"/>
<rect x="238" y="466" width="5" height="8" fill="#ffcf8a" opacity="0.55"/>
<rect x="264" y="454" width="5" height="8" fill="#ffcf8a" opacity="0.55"/>
<rect x="304" y="424" width="5" height="9" fill="#ffcf8a" opacity="0.7"/>
<rect x="326" y="454" width="5" height="8" fill="#ffcf8a" opacity="0.55"/>
<rect x="390" y="412" width="5" height="9" fill="#ffcf8a" opacity="0.7"/>
<rect x="410" y="446" width="5" height="8" fill="#ffcf8a" opacity="0.5"/>
<rect x="432" y="464" width="5" height="8" fill="#ffcf8a" opacity="0.45"/>
<rect x="514" y="448" width="5" height="9" fill="#ffcf8a" opacity="0.6"/>
<rect x="530" y="478" width="5" height="8" fill="#ffcf8a" opacity="0.45"/>
<rect x="575" y="492" width="6" height="8" fill="#ffcf8a" opacity="0.65"/>
<rect x="604" y="392" width="5" height="9" fill="#ffcf8a" opacity="0.6"/>
<rect x="644" y="386" width="5" height="9" fill="#ffcf8a" opacity="0.65"/>
<rect x="684" y="398" width="5" height="9" fill="#ffcf8a" opacity="0.55"/>
<rect x="724" y="446" width="5" height="9" fill="#ffcf8a" opacity="0.5"/>
<rect x="760" y="414" width="5" height="9" fill="#ffcf8a" opacity="0.6"/>
<rect x="782" y="452" width="5" height="8" fill="#ffcf8a" opacity="0.45"/>
<rect x="0" y="336" width="800" height="214" fill="url(#singapore-haze)"/>

<g data-obj="roof-tank">
<rect x="312" y="368" width="6" height="9" fill="#241b40"/>
<ellipse cx="315" cy="380" rx="15" ry="5" fill="#5a4890"/>
<rect x="300" y="380" width="30" height="20" fill="url(#singapore-bldg-b)"/>
<rect x="300" y="380" width="30" height="3" fill="#7f6bb8" opacity="0.8"/>
<ellipse cx="315" cy="400" rx="15" ry="5" fill="#241b40"/>
<rect x="303" y="401" width="4" height="7" fill="#241b40"/>
<rect x="323" y="401" width="4" height="7" fill="#241b40"/>
</g>
<g data-obj="dome-roof">
<path d="M666,468 a24,24 0 0 1 48,0 Z" fill="url(#singapore-bldg-b)"/>
<path d="M690,444 a24,24 0 0 1 24,24 L702,468 Z" fill="#241b40" opacity="0.8"/>
<path d="M672,462 a20,20 0 0 1 12,-16" fill="none" stroke="#9a86c8" stroke-width="2.4" opacity="0.65"/>
<rect x="687" y="432" width="6" height="13" fill="#241b40"/>
<circle cx="690" cy="430" r="4.4" fill="#8a72b4"/>
<circle cx="689" cy="429" r="2" fill="#e0d0f5"/>
</g>
<g data-obj="billboard">
<rect x="512" y="422" width="4" height="12" fill="#241b40"/>
<rect x="542" y="422" width="4" height="12" fill="#241b40"/>
<rect x="504" y="394" width="50" height="30" rx="2" fill="#463671"/>
<rect x="504" y="394" width="50" height="3" rx="1.5" fill="#8672bc" opacity="0.8"/>
<rect x="508" y="398" width="42" height="22" fill="#5f4a90"/>
<rect x="511" y="401" width="14" height="16" fill="#e0559e" opacity="0.85"/>
<rect x="528" y="401" width="19" height="7" fill="#ffcf6a" opacity="0.85"/>
<rect x="528" y="411" width="19" height="6" fill="#2ec7c0" opacity="0.75"/>
</g>
<g data-obj="sky-crane">
<rect x="730" y="378" width="6" height="50" fill="url(#singapore-red)"/>
<rect x="704" y="374" width="68" height="5" fill="#d4453c"/>
<rect x="704" y="374" width="68" height="2" fill="#f89a8e" opacity="0.8"/>
<rect x="704" y="370" width="14" height="10" fill="#8a3a4a"/>
<rect x="727" y="368" width="12" height="8" fill="#e8756c"/>
<path d="M760,379 L760,397" stroke="#8a5a33" stroke-width="1.6"/>
<rect x="754" y="397" width="12" height="8" rx="2" fill="url(#singapore-wood)"/>
</g>
<ellipse cx="216" cy="336" rx="140" ry="96" fill="url(#singapore-glowm)"/>
<ellipse cx="489" cy="322" rx="130" ry="90" fill="url(#singapore-glowt)"/>
<ellipse cx="344" cy="378" rx="92" ry="62" fill="url(#singapore-glowm)"/>
<ellipse cx="616" cy="404" rx="80" ry="56" fill="url(#singapore-glowm)"/>
<ellipse cx="94" cy="428" rx="66" ry="48" fill="url(#singapore-glowt)"/>
<ellipse cx="709" cy="438" rx="62" ry="46" fill="url(#singapore-glowy)"/>

<path d="M78,548 L84,428 L104,428 L110,548 Z" fill="url(#singapore-trunk-t)"/>
<path d="M88,432 Q85,490 83,544" fill="none" stroke="#7fd6dd" stroke-width="2" opacity="0.5"/>
<path d="M100,432 Q103,490 105,544" fill="none" stroke="#5fb7c4" stroke-width="2" opacity="0.45"/>
<g data-obj="canopy-teal">
<ellipse cx="94" cy="426" rx="36" ry="14" fill="url(#singapore-canopy-b)"/>
<ellipse cx="90" cy="420" rx="28" ry="7" fill="#c4fbf4" opacity="0.5"/>
<path d="M94,426 L64,423" stroke="#c8fbf5" stroke-width="1.8" opacity="0.5"/>
<path d="M94,426 L124,423" stroke="#c8fbf5" stroke-width="1.8" opacity="0.5"/>
<circle cx="66" cy="424" r="2.6" fill="#ddfffb"/>
<circle cx="122" cy="424" r="2.6" fill="#ddfffb"/>
</g>

<path d="M694,548 L700,436 L718,436 L724,548 Z" fill="url(#singapore-trunk)"/>
<path d="M704,440 Q701,494 699,544" fill="none" stroke="#c79a6f" stroke-width="2" opacity="0.45"/>
<ellipse cx="709" cy="434" rx="34" ry="13" fill="url(#singapore-canopy-c)"/>
<ellipse cx="705" cy="428" rx="26" ry="6.5" fill="#ffe6bd" opacity="0.45"/>
<path d="M709,434 L737,431" stroke="#ffe9cc" stroke-width="1.8" opacity="0.4"/>
<g data-obj="bird-nest">
<ellipse cx="736" cy="426" rx="19" ry="9" fill="#5b381f"/>
<ellipse cx="736" cy="421" rx="17" ry="7" fill="url(#singapore-wood)"/>
<ellipse cx="736" cy="421" rx="10" ry="4" fill="#4e3319"/>
<ellipse cx="732" cy="419" rx="4.4" ry="3.5" fill="url(#singapore-sph-cream)"/>
<ellipse cx="740" cy="420" rx="4.4" ry="3.5" fill="url(#singapore-sph-cream)"/>
<path d="M716,427 L756,425" stroke="#4e3319" stroke-width="1.8"/>
<path d="M722,417 L730,411" stroke="#c08a4e" stroke-width="1.8"/>
</g>

<path d="M186,548 L200,330 L232,330 L246,548 Z" fill="url(#singapore-trunk)"/>
<path d="M203,334 Q196,440 192,544" fill="none" stroke="#8a6bb5" stroke-width="2" opacity="0.6"/>
<path d="M221,334 Q223,440 226,544" fill="none" stroke="#a37fd0" stroke-width="2" opacity="0.55"/>
<path d="M197,404 Q216,398 235,404" fill="none" stroke="#7d5faa" stroke-width="2" opacity="0.5"/>
<path d="M190,518 Q216,512 242,518" fill="none" stroke="#7d5faa" stroke-width="2" opacity="0.5"/>
<path d="M216,491 C196,479 196,461 216,449 C236,461 236,479 216,491 Z" fill="#4a3570" stroke="#8a6bb5" stroke-width="2"/>
<path d="M216,491 C205,484 199,476 198,468 C204,464 211,462 216,462 Z" fill="#5f4589" opacity="0.75"/>
<ellipse cx="216" cy="326" rx="78" ry="27" fill="url(#singapore-canopy-a)"/>
<ellipse cx="210" cy="317" rx="64" ry="14" fill="#ffc0ec" opacity="0.5"/>
<path d="M216,326 L146,322" stroke="#ffc0ea" stroke-width="2" opacity="0.5"/>
<path d="M216,326 L286,322" stroke="#ffc0ea" stroke-width="2" opacity="0.5"/>
<circle cx="160" cy="324" r="3" fill="#ffe0f4"/>
<circle cx="272" cy="324" r="3" fill="#ffe0f4"/>

<path d="M322,552 L332,372 L356,372 L366,552 Z" fill="url(#singapore-trunk)"/>
<path d="M336,376 Q331,464 328,548" fill="none" stroke="#9375c4" stroke-width="2" opacity="0.6"/>
<path d="M353,376 Q357,464 361,548" fill="none" stroke="#9375c4" stroke-width="2" opacity="0.55"/>
<ellipse cx="344" cy="370" rx="58" ry="21" fill="url(#singapore-canopy-a)"/>
<ellipse cx="339" cy="363" rx="46" ry="11" fill="#ffc0ec" opacity="0.45"/>
<path d="M344,370 L296,366" stroke="#ffc0ea" stroke-width="2" opacity="0.45"/>
<circle cx="304" cy="368" r="2.6" fill="#ffe0f4"/>

<path d="M452,552 L472,316 L506,316 L526,552 Z" fill="url(#singapore-trunk-t)"/>
<path d="M478,320 Q468,436 462,546" fill="none" stroke="#7fd6dd" stroke-width="2" opacity="0.5"/>
<path d="M489,320 Q489,436 489,546" fill="none" stroke="#8ff2ea" stroke-width="2" opacity="0.45"/>
<path d="M500,320 Q510,436 516,546" fill="none" stroke="#5fb7c4" stroke-width="2" opacity="0.5"/>
<path d="M465,466 Q489,460 513,466" fill="none" stroke="#4a93a8" stroke-width="2" opacity="0.45"/>
<polygon points="489,342 506,360 489,378 472,360" fill="#4a3570" stroke="#8a6bb5" stroke-width="2"/>
<path d="M489,524 C467,512 467,492 489,480 C511,492 511,512 489,524 Z" fill="#4a3570" stroke="#8a6bb5" stroke-width="2"/>
<path d="M489,524 C478,516 471,507 469,499 C476,494 484,492 489,492 Z" fill="#5f4589" opacity="0.7"/>
<ellipse cx="489" cy="312" rx="76" ry="26" fill="url(#singapore-canopy-b)"/>
<ellipse cx="483" cy="303" rx="60" ry="13" fill="#c4fbf4" opacity="0.48"/>
<path d="M489,312 L429,308" stroke="#c8fbf5" stroke-width="2" opacity="0.45"/>
<path d="M489,312 L549,308" stroke="#c8fbf5" stroke-width="2" opacity="0.45"/>
<circle cx="438" cy="310" r="3" fill="#ddfffb"/>
<circle cx="540" cy="310" r="3" fill="#ddfffb"/>
<circle cx="489" cy="451" r="34" fill="url(#singapore-glowp)" opacity="0.55"/>
<g data-obj="purple-heart">
<path d="M489,472 C473,458 467,450 467,441 C467,434 473,430 479,430 C484,430 488,433 489,437 C490,433 494,430 499,430 C505,430 511,434 511,441 C511,450 505,458 489,472 Z" fill="url(#singapore-sph-purple)" stroke="#c79bff" stroke-width="2"/>
<path d="M489,472 C479,464 472,456 469,448 C475,444 483,442 489,442 Z" fill="#5c2b96" opacity="0.55"/>
<path d="M477,436 C473,437 471,441 472,446" fill="none" stroke="#f0dcff" stroke-width="2.4" opacity="0.85"/>
</g>
<path d="M446,468 Q489,458 534,470" fill="none" stroke="#6b5490" stroke-width="5" opacity="0.95"/>
<path d="M446,464 Q489,454 534,466" fill="none" stroke="#9a80c2" stroke-width="1.6" opacity="0.8"/>
<path d="M470,486 Q464,470 471,456" fill="none" stroke="#2f6647" stroke-width="3" stroke-linecap="round"/>
<ellipse cx="466" cy="470" rx="6" ry="3.4" fill="#3f8256" transform="rotate(-24 466 470)"/>

<path d="M596,556 L606,400 L626,400 L636,556 Z" fill="url(#singapore-trunk)"/>
<path d="M610,404 Q606,480 603,552" fill="none" stroke="#9375c4" stroke-width="2" opacity="0.55"/>
<ellipse cx="616" cy="398" rx="48" ry="18" fill="url(#singapore-canopy-a)"/>
<ellipse cx="612" cy="392" rx="38" ry="9.5" fill="#ffc0ec" opacity="0.42"/>
<circle cx="648" cy="396" r="2.6" fill="#ffe0f4"/>

<path d="M244,404 Q292,388 322,402" fill="none" stroke="#5c4880" stroke-width="6"/>
<path d="M244,400 Q292,384 322,398" fill="none" stroke="#9a80c2" stroke-width="2"/>
<path d="M366,392 Q420,374 452,388" fill="none" stroke="#5c4880" stroke-width="6"/>
<path d="M366,388 Q420,370 452,384" fill="none" stroke="#9a80c2" stroke-width="2"/>
<path d="M526,398 Q562,388 594,404" fill="none" stroke="#5c4880" stroke-width="5"/>
<path d="M526,394 Q562,384 594,400" fill="none" stroke="#9a80c2" stroke-width="1.8"/>
<rect x="284" y="398" width="3" height="14" fill="#5c4880"/>
<rect x="420" y="380" width="3" height="14" fill="#5c4880"/>
<g data-obj="banner-flag">
<rect x="285" y="410" width="3" height="10" fill="#5e3f20"/>
<rect x="272" y="418" width="30" height="26" rx="2" fill="url(#singapore-red)"/>
<rect x="272" y="418" width="30" height="4" rx="2" fill="#ffb7a6" opacity="0.7"/>
<rect x="277" y="430" width="20" height="4" rx="2" fill="#f9ecd6" opacity="0.9"/>
<rect x="277" y="437" width="13" height="3" rx="1.5" fill="#f9ecd6" opacity="0.75"/>
<path d="M272,444 L287,451 L302,444 Z" fill="#8f2b32"/>
</g>
<path d="M700,290 Q662,458 600,628" fill="none" stroke="#f4e2c6" stroke-width="1.4" opacity="0.5"/>

<rect x="0" y="546" width="800" height="126" fill="url(#singapore-water)"/>
<rect x="0" y="546" width="800" height="6" fill="#d3b3ee" opacity="0.5"/>
<rect x="210" y="552" width="14" height="74" rx="6" fill="#ff9ad8" opacity="0.34"/>
<rect x="482" y="552" width="14" height="78" rx="6" fill="#8ff2ea" opacity="0.34"/>
<rect x="610" y="552" width="10" height="50" rx="5" fill="#ff9ad8" opacity="0.24"/>
<rect x="88" y="552" width="9" height="46" rx="4" fill="#8ff2ea" opacity="0.24"/>
<rect x="650" y="552" width="7" height="58" rx="3" fill="#ffcf8a" opacity="0.28"/>
<ellipse cx="140" cy="596" rx="70" ry="4" fill="url(#singapore-refl)"/>
<ellipse cx="470" cy="620" rx="96" ry="5" fill="url(#singapore-refl)"/>
<ellipse cx="660" cy="586" rx="80" ry="4" fill="url(#singapore-refl)"/>

<ellipse cx="584" cy="614" rx="52" ry="11" fill="none" stroke="#e8caff" stroke-width="2" opacity="0.3"/>
<ellipse cx="584" cy="614" rx="34" ry="7" fill="none" stroke="#e8caff" stroke-width="1.6" opacity="0.22"/>
<ellipse cx="584" cy="616" rx="40" ry="8" fill="#1c1338" opacity="0.28"/>
<g data-obj="koi-fish">
<path d="M554,608 Q568,592 588,596 Q602,600 604,608 Q602,616 588,620 Q568,624 554,608 Z" fill="url(#singapore-sph-red)"/>
<path d="M554,608 Q568,592 588,596 Q594,602 592,608 Q586,614 574,614 Q562,614 554,608 Z" fill="#f9a892" opacity="0.75"/>
<path d="M604,608 L618,598 L614,608 L618,618 Z" fill="#b0342c"/>
<circle cx="564" cy="604" r="2.4" fill="#2e2244"/>
<path d="M574,596 Q580,602 578,608" fill="none" stroke="#fffaf0" stroke-width="2" opacity="0.7"/>
<path d="M586,618 Q590,626 584,630" fill="none" stroke="#c9403a" stroke-width="3" stroke-linecap="round"/>
</g>
<ellipse cx="552" cy="626" rx="30" ry="8" fill="#1e4a33"/>
<ellipse cx="551" cy="622" rx="26" ry="6" fill="url(#singapore-bush)"/>
<ellipse cx="666" cy="654" rx="32" ry="8.5" fill="#1e4a33"/>
<ellipse cx="665" cy="650" rx="28" ry="6.4" fill="url(#singapore-bush)"/>
<g data-obj="lily-pad">
<ellipse cx="600" cy="642" rx="34" ry="9" fill="#1e4a33"/>
<ellipse cx="600" cy="637" rx="31" ry="7.4" fill="url(#singapore-bush)"/>
<path d="M600,637 L574,635" stroke="#1e4a33" stroke-width="2"/>
<path d="M600,637 L624,639" stroke="#1e4a33" stroke-width="2"/>
<circle cx="618" cy="631" r="6" fill="url(#singapore-canopy-a)"/>
<circle cx="617" cy="630" r="2.6" fill="#ffe0f4"/>
</g>
<path d="M706,666 Q702,636 696,620" fill="none" stroke="#245039" stroke-width="4" stroke-linecap="round"/>
<path d="M718,666 Q720,638 724,624" fill="none" stroke="#2d6142" stroke-width="4" stroke-linecap="round"/>
<path d="M732,666 Q736,642 744,630" fill="none" stroke="#245039" stroke-width="4" stroke-linecap="round"/>
<path d="M748,666 Q748,644 746,632" fill="none" stroke="#2d6142" stroke-width="4" stroke-linecap="round"/>

<ellipse cx="273" cy="668" rx="78" ry="12" fill="#1c1338" opacity="0.5"/>
<path d="M232,612 L316,612 L338,668 L208,668 Z" fill="#8a5a33"/>
<path d="M232,612 L316,612 L318,617 L230,617 Z" fill="#e0a86a"/>
<path d="M230,626 L320,626" stroke="#5e3a1e" stroke-width="2.4" opacity="0.85"/>
<path d="M225,642 L325,642" stroke="#5e3a1e" stroke-width="2.4" opacity="0.85"/>
<path d="M219,658 L331,658" stroke="#5e3a1e" stroke-width="2.4" opacity="0.85"/>
<path d="M232,612 L208,668 L216,668 L238,612 Z" fill="#c08a4e" opacity="0.45"/>
<rect x="226" y="596" width="9" height="22" rx="3" fill="url(#singapore-wood)"/>
<rect x="313" y="596" width="9" height="22" rx="3" fill="url(#singapore-wood)"/>
<ellipse cx="250" cy="646" rx="26" ry="6" fill="#4e2f16" opacity="0.5"/>
<g data-obj="mooring-post">
<rect x="240" y="604" width="20" height="44" rx="4" fill="url(#singapore-wood)"/>
<ellipse cx="250" cy="603" rx="12" ry="5" fill="#c08a4e"/>
<ellipse cx="248" cy="602" rx="7" ry="2.6" fill="#e6b57e" opacity="0.8"/>
<path d="M238,618 Q250,613 262,618 Q250,624 238,618 Z" fill="#d8d0c0"/>
<path d="M262,620 Q276,626 272,638 Q266,644 258,640" fill="none" stroke="#c9c0b0" stroke-width="3.4"/>
<path d="M238,626 Q226,632 230,642" fill="none" stroke="#a8a08c" stroke-width="3"/>
</g>
<path d="M186,606 Q202,624 216,650" fill="none" stroke="#a8a08c" stroke-width="2" opacity="0.8"/>
<ellipse cx="168" cy="622" rx="24" ry="5" fill="#241a38" opacity="0.4"/>
<g data-obj="water-buoy">
<path d="M154,600 L182,600 L176,620 L160,620 Z" fill="url(#singapore-red)"/>
<path d="M168,600 L176,620 L169,620 Z" fill="#8f2b32" opacity="0.75"/>
<rect x="150" y="594" width="36" height="8" rx="3" fill="url(#singapore-cream)"/>
<rect x="162" y="580" width="12" height="15" rx="3" fill="url(#singapore-metal)"/>
<circle cx="168" cy="577" r="5" fill="#ffcf6a"/>
<circle cx="166" cy="575" r="2" fill="#fff2c2"/>
</g>
<path d="M262,622 Q302,626 340,634" fill="none" stroke="#c9c0b0" stroke-width="2" opacity="0.85"/>
<ellipse cx="368" cy="654" rx="38" ry="7" fill="#1c1338" opacity="0.5"/>
<g data-obj="river-boat">
<path d="M336,636 L400,636 L392,650 L344,650 Z" fill="url(#singapore-wood)"/>
<path d="M370,636 L400,636 L392,650 L370,650 Z" fill="#5e3a1e" opacity="0.75"/>
<path d="M336,636 L400,636 L400,640 L336,640 Z" fill="#f0c48c"/>
<rect x="358" y="622" width="20" height="14" rx="3" fill="url(#singapore-teal)"/>
<rect x="358" y="622" width="20" height="3.4" rx="1.7" fill="#b8fbf5"/>
<circle cx="363" cy="630" r="2.4" fill="#ffe4b0"/>
<circle cx="373" cy="630" r="2.4" fill="#ffe4b0"/>
<rect x="344" y="628" width="9" height="8" rx="2" fill="#c9576f"/>
<path d="M340,634 L336,626" stroke="#5e3a1e" stroke-width="2.4" stroke-linecap="round"/>
</g>
<path d="M334,656 Q368,662 402,656" fill="none" stroke="#e8caff" stroke-width="2" opacity="0.35"/>
<ellipse cx="368" cy="660" rx="30" ry="4" fill="#e8b478" opacity="0.18"/>

<rect x="0" y="662" width="800" height="58" fill="url(#singapore-deck)"/>
<rect x="0" y="662" width="800" height="4" fill="#9a80c2" opacity="0.7"/>
<rect x="0" y="700" width="800" height="6" fill="#2e2348" opacity="0.7"/>
<rect x="0" y="674" width="800" height="3" fill="#63508c" opacity="0.5"/>
<rect x="0" y="628" width="206" height="6" rx="3" fill="#6b5490"/>
<rect x="340" y="628" width="460" height="6" rx="3" fill="#6b5490"/>
<rect x="0" y="628" width="206" height="2" rx="1" fill="#a48cca" opacity="0.7"/>
<rect x="340" y="628" width="460" height="2" rx="1" fill="#a48cca" opacity="0.7"/>
<rect x="0" y="646" width="206" height="4" rx="2" fill="#54406e"/>
<rect x="340" y="646" width="460" height="4" rx="2" fill="#54406e"/>
<rect x="64" y="632" width="5" height="32" fill="#54406e"/>
<rect x="152" y="632" width="5" height="32" fill="#54406e"/>
<rect x="350" y="632" width="5" height="32" fill="#54406e"/>
<rect x="470" y="632" width="5" height="32" fill="#54406e"/>
<rect x="608" y="632" width="5" height="32" fill="#54406e"/>
<rect x="762" y="632" width="5" height="32" fill="#54406e"/>
<ellipse cx="124" cy="690" rx="44" ry="10" fill="url(#singapore-shadow-c)"/>
<ellipse cx="124" cy="690" rx="24" ry="5" fill="#1b1436" opacity="0.5"/>
<rect x="96" y="656" width="56" height="20" rx="4" fill="url(#singapore-wood-v)"/>
<rect x="96" y="652" width="56" height="6" rx="3" fill="#c08a4e"/>
<rect x="98" y="630" width="6" height="28" fill="#5e3f20"/>
<rect x="144" y="630" width="6" height="28" fill="#5e3f20"/>
<rect x="98" y="632" width="52" height="6" rx="2" fill="url(#singapore-wood)"/>
<rect x="98" y="642" width="52" height="6" rx="2" fill="url(#singapore-wood)"/>
<rect x="102" y="676" width="5" height="14" fill="#5e3f20"/>
<rect x="142" y="676" width="5" height="14" fill="#5e3f20"/>
<rect x="592" y="626" width="10" height="10" rx="3" fill="url(#singapore-wood)"/>
<circle cx="597" cy="631" r="2.6" fill="#5e3f20"/>
<ellipse cx="480" cy="692" rx="46" ry="10" fill="url(#singapore-shadow-c)"/>
<ellipse cx="480" cy="692" rx="26" ry="5" fill="#1b1436" opacity="0.5"/>
<g data-obj="park-bench">
<rect x="452" y="656" width="56" height="20" rx="4" fill="url(#singapore-wood-v)"/>
<rect x="452" y="652" width="56" height="6" rx="3" fill="#c08a4e"/>
<rect x="454" y="630" width="6" height="28" fill="#5e3f20"/>
<rect x="500" y="630" width="6" height="28" fill="#5e3f20"/>
<rect x="454" y="632" width="52" height="6" rx="2" fill="url(#singapore-wood)"/>
<rect x="454" y="642" width="52" height="6" rx="2" fill="url(#singapore-wood)"/>
<rect x="458" y="676" width="5" height="14" fill="#5e3f20"/>
<rect x="498" y="676" width="5" height="14" fill="#5e3f20"/>
</g>
<ellipse cx="437" cy="693" rx="18" ry="5" fill="url(#singapore-shadow-c)"/>
<ellipse cx="437" cy="693" rx="9" ry="2.6" fill="#1b1436" opacity="0.5"/>
<g data-obj="paper-umbrella">
<rect x="430" y="622" width="5" height="14" rx="2" fill="#8a5a33"/>
<path d="M430,640 L438,640 L434,628 Z" fill="#e8756c"/>
<path d="M428,638 L440,638 L446,682 L434,684 Z" fill="url(#singapore-red)"/>
<path d="M437,638 L446,682 L440,683 L432,638 Z" fill="#7d2a24" opacity="0.75"/>
<path d="M428,638 L431,638 L436,683 L434,684 Z" fill="#ffb7a6" opacity="0.45"/>
<path d="M431,652 L443,651" stroke="#f9ecd6" stroke-width="2" opacity="0.75"/>
<path d="M433,668 L445,667" stroke="#f9ecd6" stroke-width="2" opacity="0.75"/>
<path d="M435,682 L435,692" stroke="#8a5a33" stroke-width="5" stroke-linecap="round"/>
</g>
<ellipse cx="552" cy="691" rx="44" ry="9" fill="url(#singapore-shadow-c)"/>
<ellipse cx="552" cy="691" rx="24" ry="4.4" fill="#1b1436" opacity="0.45"/>
<g data-obj="bicycle">
<circle cx="533" cy="677" r="13" fill="none" stroke="#2c2040" stroke-width="3.4"/>
<circle cx="571" cy="677" r="13" fill="none" stroke="#2c2040" stroke-width="3.4"/>
<path d="M533,677 L549,677 L559,657 L571,677" fill="none" stroke="#2ec7c0" stroke-width="3.4"/>
<path d="M549,677 L559,657" stroke="#6fe3dc" stroke-width="2.4"/>
<path d="M537,663 L551,655" stroke="#2ec7c0" stroke-width="2.6"/>
<rect x="545" y="652" width="15" height="4" rx="2" fill="#3b2c4f"/>
<path d="M533,659 L543,656" stroke="#3b2c4f" stroke-width="3" stroke-linecap="round"/>
<circle cx="553" cy="677" r="3.4" fill="#ffcf6a"/>
</g>
<path d="M616,676 L700,676 L700,692 L616,692 Z" fill="#5e3a1e"/>
<path d="M616,676 L700,676 L700,680 L616,680 Z" fill="#c08a4e" opacity="0.8"/>
<ellipse cx="658" cy="692" rx="40" ry="9" fill="url(#singapore-shadow-c)"/>
<ellipse cx="658" cy="692" rx="22" ry="4.4" fill="#1b1436" opacity="0.45"/>
<g data-obj="potted-palm">
<path d="M660,654 Q644,636 630,630" fill="none" stroke="#347049" stroke-width="6" stroke-linecap="round"/>
<path d="M660,654 Q656,632 658,618" fill="none" stroke="#4a8f60" stroke-width="6" stroke-linecap="round"/>
<path d="M660,654 Q676,634 690,626" fill="none" stroke="#2d6142" stroke-width="6" stroke-linecap="round"/>
<path d="M660,654 Q678,648 690,652" fill="none" stroke="#245039" stroke-width="5" stroke-linecap="round"/>
<path d="M640,660 L646,688 L674,688 L680,660 Z" fill="url(#singapore-wood)"/>
<path d="M660,660 L660,688 L674,688 L680,660 Z" fill="#8a4d26" opacity="0.6"/>
<rect x="636" y="653" width="48" height="9" rx="3" fill="#d98f5c"/>
<rect x="636" y="653" width="48" height="3" rx="1.5" fill="#f0b284" opacity="0.8"/>
</g>
<ellipse cx="740" cy="692" rx="32" ry="8" fill="url(#singapore-shadow-c)"/>
<ellipse cx="740" cy="692" rx="16" ry="3.6" fill="#1b1436" opacity="0.5"/>
<g data-obj="signpost">
<rect x="735" y="618" width="8" height="72" fill="url(#singapore-wood)"/>
<path d="M712,622 L756,622 L756,636 L712,636 L704,629 Z" fill="url(#singapore-green)"/>
<path d="M712,622 L756,622 L756,626 L712,626 Z" fill="#93e3a6" opacity="0.75"/>
<path d="M742,642 L768,642 L776,649 L768,656 L742,656 Z" fill="url(#singapore-red)"/>
<path d="M742,642 L768,642 L768,646 L742,646 Z" fill="#ffb7a6" opacity="0.7"/>
</g>
<path d="M0,700 L800,700 L800,1200 L0,1200 Z" fill="url(#singapore-ground)"/>
<path d="M0,852 Q200,816 400,846 Q600,876 800,840 L800,896 Q600,936 400,916 Q200,890 0,940 Z" fill="url(#singapore-path)"/>
<path d="M0,852 Q200,816 400,846 Q600,876 800,840 L800,848 Q600,884 400,854 Q200,824 0,862 Z" fill="#dbc9a4" opacity="0.6"/>
<path d="M0,918 Q200,872 400,900 Q600,924 800,882 L800,896 Q600,936 400,916 Q200,890 0,940 Z" fill="#54492f" opacity="0.55"/>
<ellipse cx="150" cy="908" rx="40" ry="10" fill="#c9b68f" opacity="0.3"/>
<ellipse cx="360" cy="888" rx="32" ry="8" fill="#c9b68f" opacity="0.26"/>
<ellipse cx="600" cy="892" rx="26" ry="6.5" fill="#c9b68f" opacity="0.22"/>
<ellipse cx="56" cy="744" rx="72" ry="30" fill="#1b4630"/>
<ellipse cx="54" cy="736" rx="67" ry="25" fill="url(#singapore-bush)"/>
<ellipse cx="256" cy="746" rx="60" ry="26" fill="#1b4630"/>
<ellipse cx="254" cy="738" rx="55" ry="21" fill="url(#singapore-bush)"/>
<ellipse cx="392" cy="762" rx="58" ry="25" fill="#173d29"/>
<ellipse cx="390" cy="754" rx="53" ry="20" fill="url(#singapore-bush-d)"/>
<ellipse cx="612" cy="758" rx="54" ry="23" fill="#173d29"/>
<ellipse cx="610" cy="750" rx="49" ry="18" fill="url(#singapore-bush-d)"/>
<ellipse cx="726" cy="744" rx="70" ry="28" fill="#1b4630"/>
<ellipse cx="724" cy="736" rx="65" ry="23" fill="url(#singapore-bush)"/>
<path d="M92,796 L86,706" stroke="#7d5029" stroke-width="9" fill="none"/>
<path d="M92,796 L88,706" stroke="#a97444" stroke-width="3" fill="none" opacity="0.8"/>
<path d="M89,712 Q46,690 24,706" fill="none" stroke="#2f6647" stroke-width="7" stroke-linecap="round"/>
<path d="M89,712 Q52,678 34,662" fill="none" stroke="#4a8f60" stroke-width="7" stroke-linecap="round"/>
<path d="M89,712 Q116,674 132,660" fill="none" stroke="#3f8256" stroke-width="7" stroke-linecap="round"/>
<path d="M89,712 Q130,690 154,700" fill="none" stroke="#245039" stroke-width="7" stroke-linecap="round"/>
<circle cx="88" cy="710" r="6" fill="#5e3f20"/>
<path d="M746,806 L752,704" stroke="#7d5029" stroke-width="9" fill="none"/>
<path d="M746,806 L750,704" stroke="#a97444" stroke-width="3" fill="none" opacity="0.8"/>
<path d="M750,708 Q714,684 692,694" fill="none" stroke="#2f6647" stroke-width="7" stroke-linecap="round"/>
<path d="M750,708 Q720,672 704,656" fill="none" stroke="#4a8f60" stroke-width="7" stroke-linecap="round"/>
<path d="M750,708 Q782,674 798,662" fill="none" stroke="#3f8256" stroke-width="7" stroke-linecap="round"/>
<path d="M750,708 Q786,692 800,700" fill="none" stroke="#245039" stroke-width="7" stroke-linecap="round"/>
<circle cx="750" cy="706" r="6" fill="#5e3f20"/>
<path d="M334,826 Q324,798 312,784" fill="none" stroke="#347049" stroke-width="6" stroke-linecap="round"/>
<path d="M334,826 Q334,796 332,776" fill="none" stroke="#4a8f60" stroke-width="6" stroke-linecap="round"/>
<path d="M334,826 Q348,800 362,788" fill="none" stroke="#245039" stroke-width="6" stroke-linecap="round"/>

<ellipse cx="156" cy="816" rx="88" ry="26" fill="#173d29"/>
<ellipse cx="154" cy="810" rx="82" ry="21" fill="url(#singapore-bush)"/>
<path d="M68,836 Q156,820 244,832 L244,846 Q156,834 68,850 Z" fill="#6d6552"/>
<path d="M68,836 Q156,820 244,832 L244,838 Q156,826 68,842 Z" fill="#a89a7c"/>
<path d="M112,830 Q108,806 100,792" fill="none" stroke="#4a8f60" stroke-width="6" stroke-linecap="round"/>
<path d="M206,832 Q212,810 222,798" fill="none" stroke="#347049" stroke-width="6" stroke-linecap="round"/>
<circle cx="100" cy="806" r="9" fill="url(#singapore-canopy-a)"/>
<circle cx="98" cy="804" r="4" fill="#ffe0f4"/>
<circle cx="90" cy="814" r="7" fill="#e87ab8"/>
<circle cx="206" cy="808" r="9" fill="url(#singapore-sph-purple)"/>
<circle cx="204" cy="806" r="4" fill="#e8c6f5"/>
<circle cx="216" cy="818" r="7" fill="#9b5de5"/>
<circle cx="120" cy="830" r="8" fill="url(#singapore-sph-purple)"/>
<circle cx="118" cy="828" r="3.4" fill="#d9b4ff"/>
<circle cx="186" cy="828" r="8" fill="url(#singapore-pink)"/>
<circle cx="184" cy="826" r="3.4" fill="#ffbde2"/>
<ellipse cx="238" cy="798" rx="9" ry="7" fill="url(#singapore-sph-purple)"/>
<ellipse cx="230" cy="792" rx="6" ry="5" fill="#e8c6f5"/>
<ellipse cx="246" cy="792" rx="6" ry="5" fill="#dcb2f5"/>
<circle cx="238" cy="800" r="3" fill="#ffcf6a"/>
<g data-obj="orchid">
<path d="M163,818 Q157,790 155,772" fill="none" stroke="#4a8f60" stroke-width="4" stroke-linecap="round"/>
<path d="M163,804 Q148,802 137,810" fill="none" stroke="#2d6142" stroke-width="4" stroke-linecap="round"/>
<path d="M162,792 Q177,788 187,794" fill="none" stroke="#2d6142" stroke-width="4" stroke-linecap="round"/>
<ellipse cx="155" cy="770" rx="13" ry="11" fill="url(#singapore-sph-purple)"/>
<ellipse cx="153" cy="768" rx="8" ry="6.4" fill="#c79bff"/>
<ellipse cx="148" cy="762" rx="6.5" ry="5.5" fill="#e2c4ff"/>
<ellipse cx="162" cy="762" rx="6.5" ry="5.5" fill="#d5b0ff"/>
<ellipse cx="155" cy="756" rx="5" ry="6" fill="#f0dcff"/>
<circle cx="155" cy="773" r="4" fill="#ffd9ef"/>
<circle cx="155" cy="773" r="2" fill="#ffcf6a"/>
<ellipse cx="180" cy="782" rx="11" ry="9" fill="url(#singapore-sph-purple)"/>
<ellipse cx="178" cy="780" rx="6.6" ry="5" fill="#bb8bf5"/>
<ellipse cx="175" cy="775" rx="5.5" ry="4.5" fill="#ddbaff"/>
<ellipse cx="186" cy="775" rx="5.5" ry="4.5" fill="#cca2f5"/>
<circle cx="180" cy="784" r="3.2" fill="#ffd9ef"/>
<circle cx="180" cy="784" r="1.6" fill="#ffcf6a"/>
<ellipse cx="136" cy="788" rx="10" ry="8" fill="url(#singapore-sph-purple)"/>
<ellipse cx="134" cy="786" rx="6" ry="4.6" fill="#c79bff"/>
<ellipse cx="131" cy="781" rx="5" ry="4" fill="#e2c4ff"/>
<ellipse cx="141" cy="781" rx="5" ry="4" fill="#d5b0ff"/>
<circle cx="136" cy="791" r="3" fill="#ffd9ef"/>
<circle cx="136" cy="791" r="1.5" fill="#ffcf6a"/>
</g>
<ellipse cx="232" cy="806" rx="14" ry="4" fill="#0e2b1e" opacity="0.3"/>
<g data-obj="butterfly">
<path d="M230,788 Q212,768 216,780 Q206,774 212,790 Q218,800 230,792 Z" fill="url(#singapore-canopy-a)"/>
<path d="M230,788 Q248,768 244,780 Q254,774 248,790 Q242,800 230,792 Z" fill="url(#singapore-pink)"/>
<ellipse cx="230" cy="788" rx="3" ry="10" fill="#3f3155"/>
<circle cx="220" cy="782" r="2.6" fill="#ffe0f4"/>
<circle cx="241" cy="782" r="2.6" fill="#ffe0f4"/>
<path d="M228,779 Q224,770 220,768" fill="none" stroke="#3f3155" stroke-width="1.4"/>
<path d="M232,779 Q236,770 240,768" fill="none" stroke="#3f3155" stroke-width="1.4"/>
</g>

<ellipse cx="704" cy="798" rx="94" ry="28" fill="#173d29"/>
<ellipse cx="702" cy="792" rx="88" ry="23" fill="url(#singapore-bush-d)"/>
<path d="M614,820 Q704,806 792,818 L792,832 Q704,820 614,834 Z" fill="#6d6552"/>
<path d="M614,820 Q704,806 792,818 L792,824 Q704,812 614,826 Z" fill="#a89a7c"/>
<ellipse cx="656" cy="774" rx="30" ry="7" fill="url(#singapore-shadow)"/>
<ellipse cx="656" cy="774" rx="15" ry="3.4" fill="#0e1f17" opacity="0.5"/>
<g data-obj="bird-house">
<rect x="652" y="738" width="8" height="34" fill="url(#singapore-wood)"/>
<rect x="636" y="718" width="40" height="26" rx="2" fill="url(#singapore-wood)"/>
<path d="M632,718 L656,700 L680,718 Z" fill="#8a5a33"/>
<path d="M656,700 L632,718 L644,718 Z" fill="#c08a4e" opacity="0.85"/>
<circle cx="656" cy="728" r="7" fill="#3f2a18"/>
<circle cx="654" cy="726" r="3" fill="#5e3f20" opacity="0.7"/>
<rect x="653" y="734" width="6" height="11" rx="2" fill="#7d5029"/>
<rect x="636" y="742" width="40" height="4" rx="2" fill="#c08a4e"/>
</g>
<ellipse cx="733" cy="830" rx="34" ry="8" fill="url(#singapore-shadow)"/>
<ellipse cx="733" cy="830" rx="18" ry="4" fill="#0e1f17" opacity="0.5"/>
<g data-obj="bird-bath">
<rect x="725" y="789" width="16" height="34" fill="url(#singapore-metal)"/>
<ellipse cx="733" cy="823" rx="24" ry="7" fill="#6f7780"/>
<ellipse cx="733" cy="787" rx="27" ry="9" fill="url(#singapore-metal)"/>
<ellipse cx="733" cy="785" rx="22" ry="6.5" fill="#79b6c9"/>
<ellipse cx="728" cy="783.5" rx="9" ry="3" fill="#d3eef6" opacity="0.85"/>
<path d="M706,787 Q733,795 760,787" fill="none" stroke="#6f7780" stroke-width="2.4"/>
</g>

<ellipse cx="310" cy="866" rx="46" ry="14" fill="url(#singapore-glowy)" opacity="0.4"/>
<ellipse cx="367" cy="872" rx="44" ry="13" fill="url(#singapore-glowy)" opacity="0.36"/>
<ellipse cx="396" cy="878" rx="46" ry="14" fill="url(#singapore-glowp)" opacity="0.38"/>
<ellipse cx="454" cy="882" rx="52" ry="16" fill="url(#singapore-glowp)" opacity="0.42"/>
<ellipse cx="483" cy="878" rx="46" ry="14" fill="url(#singapore-glowp)" opacity="0.36"/>
<ellipse cx="511" cy="874" rx="44" ry="13" fill="url(#singapore-glowp)" opacity="0.34"/>
<ellipse cx="540" cy="866" rx="42" ry="13" fill="url(#singapore-glowy)" opacity="0.34"/>
<ellipse cx="281" cy="872" rx="58" ry="17" fill="url(#singapore-glowy)" opacity="0.42"/>
<ellipse cx="121" cy="886" rx="54" ry="16" fill="url(#singapore-glowy)" opacity="0.36"/>
<ellipse cx="569" cy="868" rx="52" ry="15" fill="url(#singapore-glowy)" opacity="0.36"/>

<ellipse cx="474" cy="884" rx="46" ry="11" fill="url(#singapore-shadow)"/>
<ellipse cx="472" cy="884" rx="26" ry="5" fill="#3a3320" opacity="0.5"/>
<g data-obj="wheelbarrow">
<path d="M444,838 L496,834 L490,862 L454,864 Z" fill="url(#singapore-red)"/>
<path d="M444,838 L496,834 L495,841 L445,845 Z" fill="#ffb7a6" opacity="0.6"/>
<path d="M490,862 L454,864 L459,872 L487,870 Z" fill="#7d2a24"/>
<path d="M496,836 L508,845" stroke="#8a5a33" stroke-width="5" stroke-linecap="round"/>
<path d="M454,864 L448,878" stroke="#8a5a33" stroke-width="4" stroke-linecap="round"/>
<circle cx="466" cy="874" r="10" fill="#3b2f52"/>
<circle cx="465" cy="873" r="4" fill="#8a7ba8"/>
</g>
<ellipse cx="548" cy="884" rx="38" ry="9" fill="url(#singapore-shadow)"/>
<ellipse cx="546" cy="884" rx="21" ry="4.4" fill="#3a3320" opacity="0.5"/>
<g data-obj="watering-can">
<path d="M524,844 L524,878 Q524,884 532,884 L556,884 Q564,884 564,878 L564,844 Z" fill="url(#singapore-green)"/>
<path d="M550,844 L550,884 L556,884 Q564,884 564,878 L564,844 Z" fill="#1f6941" opacity="0.6"/>
<rect x="520" y="837" width="48" height="9" rx="3" fill="#62c187"/>
<rect x="520" y="837" width="48" height="3" rx="1.5" fill="#a2e8b6" opacity="0.85"/>
<path d="M564,850 L578,864 L575,874" fill="none" stroke="#43a06b" stroke-width="5" stroke-linecap="round"/>
<ellipse cx="576" cy="877" rx="6" ry="4" fill="#2f7a4e"/>
<path d="M530,837 Q538,822 552,830" fill="none" stroke="#62c187" stroke-width="4.5" stroke-linecap="round"/>
</g>
<path d="M596,882 L590,846" stroke="#8a5a33" stroke-width="5" stroke-linecap="round"/>
<path d="M586,846 L596,840 L600,850 Z" fill="#98a3ac"/>

<rect x="118" y="760" width="6" height="96" fill="#3b2c4f"/>
<circle cx="121" cy="758" r="24" fill="url(#singapore-glowy)"/>
<circle cx="121" cy="758" r="7" fill="#ffe4b0"/>
<ellipse cx="121" cy="748" rx="17" ry="5" fill="#3b2c4f"/>
<rect x="278" y="746" width="7" height="106" fill="#3b2c4f"/>
<rect x="278" y="746" width="2.4" height="106" fill="#6b5490" opacity="0.8"/>
<g data-obj="garden-lamp">
<circle cx="281" cy="744" r="28" fill="url(#singapore-glowy)"/>
<circle cx="281" cy="744" r="9" fill="#ffe4b0"/>
<circle cx="279" cy="742" r="4" fill="#fff6d8"/>
<path d="M270,736 L292,736 L286,724 L276,724 Z" fill="#3b2c4f"/>
<path d="M270,736 L276,724 L279,724 L274,736 Z" fill="#6b5490" opacity="0.7"/>
<rect x="278" y="718" width="7" height="7" fill="#3b2c4f"/>
<circle cx="281.5" cy="716" r="3.4" fill="#6b5490"/>
</g>
<rect x="566" y="756" width="7" height="106" fill="#3b2c4f"/>
<circle cx="569" cy="748" r="24" fill="url(#singapore-glowy)"/>
<circle cx="569" cy="748" r="10" fill="#fff3da" opacity="0.95"/>
<circle cx="566" cy="745" r="4" fill="#fffaf0"/>
<rect x="562" y="758" width="14" height="6" rx="2" fill="#3b2c4f"/>
<path d="M281,752 Q425,822 569,762" fill="none" stroke="#463656" stroke-width="2.4"/>
<path d="M121,758 Q200,798 281,752" fill="none" stroke="#463656" stroke-width="2"/>
<rect x="308" y="765" width="4" height="6" fill="#463656"/>
<circle cx="310" cy="781" r="18" fill="url(#singapore-glowy)"/>
<path d="M303,771 Q303,790 310,792 Q317,790 317,771 Z" fill="url(#singapore-lantern)"/>
<rect x="304" y="768" width="12" height="5" rx="2" fill="#cbb999"/>
<rect x="365" y="782" width="4" height="6" fill="#463656"/>
<circle cx="367" cy="798" r="17" fill="url(#singapore-glowy)"/>
<path d="M360,788 Q360,807 367,809 Q374,807 374,788 Z" fill="url(#singapore-lantern)"/>
<rect x="361" y="785" width="12" height="5" rx="2" fill="#cbb999"/>
<rect x="394" y="787" width="4" height="6" fill="#463656"/>
<circle cx="396" cy="812" r="19" fill="url(#singapore-glowp)"/>
<path d="M389,804 Q388,828 396,830 Q404,828 403,804 Z" fill="#b384e8" opacity="0.92"/>
<path d="M392,806 Q394,820 395,826" fill="none" stroke="#f0dcff" stroke-width="1.6" opacity="0.9"/>
<rect x="390" y="792" width="12" height="13" rx="4" fill="#e6dcf2"/>
<rect x="481" y="786" width="4" height="6" fill="#463656"/>
<circle cx="483" cy="810" r="19" fill="url(#singapore-glowp)"/>
<path d="M476,802 Q475,826 483,828 Q491,826 490,802 Z" fill="#b384e8" opacity="0.92"/>
<path d="M479,804 Q481,818 482,824" fill="none" stroke="#f0dcff" stroke-width="1.6" opacity="0.9"/>
<rect x="477" y="791" width="12" height="12" rx="4" fill="#e6dcf2"/>
<rect x="509" y="781" width="4" height="6" fill="#463656"/>
<circle cx="511" cy="804" r="19" fill="url(#singapore-glowp)"/>
<path d="M504,796 Q503,820 511,822 Q519,820 518,796 Z" fill="#b384e8" opacity="0.92"/>
<path d="M507,798 Q509,812 510,818" fill="none" stroke="#f0dcff" stroke-width="1.6" opacity="0.9"/>
<rect x="505" y="786" width="12" height="12" rx="4" fill="#e6dcf2"/>
<rect x="538" y="773" width="4" height="6" fill="#463656"/>
<circle cx="540" cy="789" r="16" fill="url(#singapore-glowy)"/>
<path d="M533,779 Q533,798 540,800 Q547,798 547,779 Z" fill="url(#singapore-lantern)"/>
<rect x="534" y="776" width="12" height="5" rx="2" fill="#cbb999"/>
<rect x="452" y="783" width="4" height="7" fill="#463656"/>
<circle cx="454" cy="826" r="30" fill="url(#singapore-glowp)"/>
<g data-obj="lightstick">
<rect x="447" y="789" width="14" height="23" rx="5" fill="url(#singapore-cream)"/>
<rect x="445" y="807" width="18" height="7" rx="3" fill="#7b3fbf"/>
<rect x="442" y="812" width="24" height="28" rx="12" fill="url(#singapore-sph-purple)"/>
<rect x="443.6" y="814" width="7" height="24" rx="3.5" fill="#dcbcff" opacity="0.85"/>
<rect x="458" y="815" width="6.6" height="23" rx="3.3" fill="#4f2287" opacity="0.7"/>
<ellipse cx="453" cy="825" rx="6" ry="8" fill="#f6e8ff" opacity="0.95"/>
<ellipse cx="451" cy="820" rx="2.6" ry="3.6" fill="#ffffff" opacity="0.9"/>
</g>
<ellipse cx="400" cy="962" rx="384" ry="54" fill="url(#singapore-shadow)"/>

<rect x="576" y="890" width="224" height="310" fill="#3f2c1f"/>
<rect x="576" y="890" width="224" height="14" fill="#2c1e15"/>
<rect x="588" y="890" width="9" height="112" fill="url(#singapore-wood)"/>
<rect x="782" y="890" width="9" height="112" fill="url(#singapore-wood)"/>
<path d="M576,904 L800,886 L800,846 L576,864 Z" fill="url(#singapore-canvas)"/>
<path d="M600,861 L600,901" stroke="#c9576f" stroke-width="14" opacity="0.5"/>
<path d="M644,857 L644,897" stroke="#c9576f" stroke-width="14" opacity="0.5"/>
<path d="M688,854 L688,894" stroke="#c9576f" stroke-width="14" opacity="0.5"/>
<path d="M732,850 L732,890" stroke="#c9576f" stroke-width="14" opacity="0.5"/>
<path d="M776,847 L776,887" stroke="#c9576f" stroke-width="14" opacity="0.5"/>
<path d="M576,864 L800,846 L800,852 L576,870 Z" fill="#fff6e2" opacity="0.5"/>
<path d="M576,904 L800,886 L800,896 L576,914 Z" fill="#96754c"/>
<path d="M580,912 L594,928 L608,908 Z" fill="#9b5de5"/>
<path d="M624,908 L638,924 L652,904 Z" fill="#ffcf6a"/>
<path d="M700,902 L714,918 L728,898 Z" fill="#e0559e"/>
<path d="M764,897 L778,913 L792,893 Z" fill="#2ec7c0"/>
<rect x="586" y="914" width="204" height="5" rx="2.5" fill="url(#singapore-wood)"/>
<rect x="586" y="914" width="204" height="1.6" rx="0.8" fill="#e8b478" opacity="0.8"/>
<path d="M674,919 L674,930" stroke="#5e3f20" stroke-width="2"/>
<path d="M769,919 L769,930" stroke="#5e3f20" stroke-width="2"/>
<g data-obj="straw-hat">
<ellipse cx="674" cy="940" rx="34" ry="12" fill="#dbb87e"/>
<ellipse cx="674" cy="938" rx="32" ry="10" fill="#f0d9a8"/>
<ellipse cx="674" cy="936" rx="18" ry="9" fill="#f6e6c2"/>
<ellipse cx="669" cy="933" rx="9" ry="4" fill="#fff6e2" opacity="0.7"/>
<path d="M656,935 Q674,925 692,935" fill="none" stroke="#c9576f" stroke-width="3.4"/>
</g>
<g data-obj="tote-bag">
<rect x="752" y="928" width="34" height="30" rx="3" fill="url(#singapore-teal)"/>
<rect x="752" y="928" width="34" height="4" rx="2" fill="#b8fbf5" opacity="0.7"/>
<path d="M759,928 Q769,913 779,928" fill="none" stroke="#17877f" stroke-width="3.4"/>
<rect x="758" y="938" width="22" height="6" rx="2" fill="#f9ecd6" opacity="0.9"/>
</g>

<rect x="572" y="994" width="232" height="34" fill="url(#singapore-wood-v)"/>
<rect x="572" y="994" width="232" height="5" fill="#e8b478" opacity="0.8"/>
<rect x="572" y="1022" width="232" height="6" fill="#8a5a2c" opacity="0.7"/>
<ellipse cx="618" cy="992" rx="28" ry="6" fill="url(#singapore-shadow-w)"/>
<ellipse cx="618" cy="992" rx="15" ry="3" fill="#3f2411" opacity="0.5"/>
<rect x="596" y="988" width="44" height="6" rx="2" fill="#a4c6d4"/>
<path d="M604,988 Q600,970 610,964 L626,964 Q634,972 630,988 Z" fill="url(#singapore-sph-cream)"/>
<path d="M622,988 Q630,972 626,964 Q634,972 630,988 Z" fill="#bdb09a"/>
<path d="M625,985 Q639,980 640,966 Q640,959 635,956 Q638,964 635,971 Q631,979 622,978 Z" fill="url(#singapore-sph-cream)"/>
<path d="M634,957 L645,942 Q647,950 646,958 L642,954 L638,963 Z" fill="#ded8cc"/>
<ellipse cx="612" cy="958" rx="10" ry="9" fill="url(#singapore-sph-cream)"/>
<circle cx="608" cy="956" r="1.8" fill="#3a2c60"/>
<path d="M618,951 Q622,958 618,965" fill="none" stroke="#ded8cc" stroke-width="1.6"/>
<path d="M605,967 Q611,970 617,967" fill="none" stroke="#ded8cc" stroke-width="1.6"/>
<ellipse cx="710.0" cy="992" rx="34" ry="7" fill="url(#singapore-shadow-w)"/>
<ellipse cx="710.0" cy="992" rx="18" ry="3.4" fill="#3f2411" opacity="0.5"/>
<g data-obj="merlion">
<rect x="684.0" y="986" width="44" height="8" rx="2" fill="#a4c6d4"/>
<rect x="684.0" y="986" width="44" height="3" rx="1.5" fill="#e2f2f7"/>
<path d="M692.0,986 Q689.0,968 698.0,960 L716.0,960 Q724.0,970 721.0,986 Z" fill="url(#singapore-sph-cream)"/>
<path d="M712.0,986 Q720.0,970 716.0,960 Q724.0,970 721.0,986 Z" fill="#b8ab94"/>
<path d="M720.0,983 Q738.0,978 739.0,962 Q739.0,955 733.0,952 Q737.0,961 734.0,968 Q729.0,978 718.0,977 Z" fill="url(#singapore-sph-cream)"/>
<path d="M720.0,983 Q736.0,978 737.0,963 Q737.0,956 733.0,952 Q736.0,961 733.0,968 Q728.0,977 719.0,976 Z" fill="#cfc4ab"/>
<path d="M731.0,957 L746.0,939 Q748.0,948 747.0,957 L742.0,953 L736.0,962 Z" fill="#f4ede0"/>
<path d="M742.0,953 L747.0,957 Q748.0,948 746.0,939 Q745.0,948 742.0,953 Z" fill="#c9bda4"/>
<path d="M702.0,942 Q711.0,940 715.0,946 Q723.0,949 721.0,957 Q724.0,964 718.0,968 Q715.0,975 707.0,973 Q699.0,976 695.0,970 Q688.0,967 690.0,959 Q687.0,952 694.0,948 Q697.0,941 702.0,942 Z" fill="#e2dac6"/>
<path d="M695.0,949 Q693.0,944 699.0,945 Q699.0,949 698.0,952 Z" fill="#f6f1e6"/>
<path d="M713.0,949 Q715.0,944 709.0,945 Q709.0,949 710.0,952 Z" fill="#f6f1e6"/>
<circle cx="706.0" cy="956" r="11" fill="url(#singapore-sph-cream)"/>
<circle cx="702.0" cy="954" r="1.9" fill="#3a2c60"/>
<circle cx="710.0" cy="953" r="1.9" fill="#3a2c60"/>
<ellipse cx="706.0" cy="961" rx="5.5" ry="4" fill="#fffaf0"/>
<path d="M704.0,959.5 Q706.0,962 708.0,959.5" fill="none" stroke="#8a5a33" stroke-width="1.6" stroke-linecap="round"/>
<path d="M706.0,965 Q698.0,970 691.0,980 Q699.0,975 704.0,969 Z" fill="#8ff2ea" opacity="0.9"/>
<circle cx="692.0" cy="981" r="2.8" fill="#8ff2ea" opacity="0.7"/>
</g>
<rect x="638" y="974" width="28" height="20" rx="3" fill="url(#singapore-cream)"/>
<rect x="642" y="984" width="20" height="3.5" rx="1.7" fill="#c9576f" opacity="0.7"/>

<rect x="576" y="1028" width="224" height="172" fill="#7d5029"/>
<rect x="580" y="1032" width="216" height="164" fill="#33220f"/>
<rect x="580" y="1032" width="216" height="18" fill="#1c1209" opacity="0.75"/>
<path d="M576,1028 L800,1028 L800,1042 L576,1042 Z" fill="#5e3a1e"/>
<rect x="580" y="1116" width="216" height="16" fill="#1c1209" opacity="0.55"/>
<rect x="580" y="1184" width="216" height="14" fill="#1c1209" opacity="0.55"/>
<ellipse cx="605" cy="1108" rx="24" ry="5" fill="#1c1209" opacity="0.55"/>
<g data-obj="gift-box">
<rect x="588" y="1074" width="34" height="34" rx="3" fill="url(#singapore-wood-v)"/>
<rect x="588" y="1074" width="34" height="6" rx="3" fill="#d6a068"/>
<rect x="601" y="1074" width="8" height="34" fill="url(#singapore-red)"/>
<rect x="588" y="1088" width="34" height="6" fill="#d4453c"/>
<rect x="588" y="1088" width="34" height="2" fill="#ffb7a6" opacity="0.6"/>
<path d="M600,1074 Q605,1064 610,1074" fill="none" stroke="#c9576f" stroke-width="3"/>
</g>
<ellipse cx="664" cy="1108" rx="30" ry="6" fill="#1c1209" opacity="0.55"/>
<g data-obj="ferris-toy">
<rect x="642" y="1102" width="44" height="6" rx="3" fill="url(#singapore-wood)"/>
<path d="M652,1104 L664,1058 L676,1104 Z" fill="#8a5a33"/>
<path d="M652,1104 L664,1058 L666,1063 L657,1104 Z" fill="#c08a4e" opacity="0.7"/>
<circle cx="664" cy="1070" r="24" fill="none" stroke="#e0559e" stroke-width="3.4"/>
<circle cx="664" cy="1070" r="17" fill="none" stroke="#ffbde2" stroke-width="2.4"/>
<path d="M664,1046 L664,1094" stroke="#ffcf6a" stroke-width="2.4"/>
<path d="M640,1070 L688,1070" stroke="#ffcf6a" stroke-width="2.4"/>
<path d="M647,1053 L681,1087" stroke="#ffcf6a" stroke-width="2.4"/>
<path d="M681,1053 L647,1087" stroke="#ffcf6a" stroke-width="2.4"/>
<circle cx="664" cy="1070" r="4.5" fill="#f9ecd6"/>
<rect x="659" y="1040" width="10" height="8" rx="2.5" fill="#2ec7c0"/>
<rect x="684" y="1066" width="10" height="8" rx="2.5" fill="#ffcf6a"/>
<rect x="634" y="1066" width="10" height="8" rx="2.5" fill="#d4453c"/>
<rect x="659" y="1092" width="10" height="8" rx="2.5" fill="#9b5de5"/>
</g>
<ellipse cx="736" cy="1108" rx="24" ry="5" fill="#1c1209" opacity="0.55"/>
<g data-obj="beach-ball">
<circle cx="736" cy="1086" r="22" fill="url(#singapore-sph-cream)"/>
<path d="M736,1064 A22,22 0 0 1 753,1095 Z" fill="#d4453c"/>
<path d="M736,1064 A22,22 0 0 0 719,1095 Z" fill="#2ec7c0"/>
<path d="M719,1095 A22,22 0 0 0 753,1095 Z" fill="#f2a24a"/>
<ellipse cx="728" cy="1076" rx="6" ry="4.4" fill="#fffaf0" opacity="0.75"/>
</g>
<rect x="580" y="1108" width="216" height="8" rx="3" fill="url(#singapore-wood)"/>
<rect x="580" y="1108" width="216" height="2.5" rx="1.2" fill="#e8b478" opacity="0.85"/>
<ellipse cx="620" cy="1176" rx="24" ry="5" fill="#1c1209" opacity="0.55"/>
<g data-obj="snow-globe">
<circle cx="620" cy="1156" r="19" fill="url(#singapore-glass)"/>
<circle cx="613" cy="1149" r="7" fill="#f2fbfe" opacity="0.85"/>
<path d="M612,1165 L620,1146 L628,1165 Z" fill="#7fa9bc"/>
<circle cx="609" cy="1146" r="2" fill="#fffaf0"/>
<circle cx="631" cy="1152" r="2" fill="#fffaf0"/>
<rect x="604" y="1167" width="32" height="10" rx="3" fill="url(#singapore-wood-v)"/>
<rect x="604" y="1167" width="32" height="3" rx="1.5" fill="#c08a4e"/>
</g>
<ellipse cx="678" cy="1176" rx="22" ry="4.4" fill="#1c1209" opacity="0.55"/>
<rect x="662" y="1168" width="32" height="8" rx="2" fill="#a4c6d4"/>
<rect x="666" y="1156" width="24" height="13" rx="2" fill="#e2dac6"/>
<path d="M672,1136 Q680,1133 685,1139 Q693,1142 691,1149 Q694,1155 688,1159 Q685,1165 678,1163 Q671,1166 667,1160 Q661,1157 663,1150 Q660,1144 666,1141 Q668,1134 672,1136 Z" fill="#e2dac6"/>
<circle cx="678" cy="1148" r="10" fill="url(#singapore-sph-cream)"/>
<circle cx="674" cy="1146" r="1.8" fill="#3a2c60"/>
<circle cx="682" cy="1145" r="1.8" fill="#3a2c60"/>
<ellipse cx="678" cy="1154" rx="5" ry="3.6" fill="#fffaf0"/>
<circle cx="742" cy="1152" r="18" fill="none" stroke="#8a5a33" stroke-width="2.4"/>
<circle cx="742" cy="1152" r="3" fill="#e8c58f"/>
<path d="M742,1134 L742,1170" stroke="#c9c0b0" stroke-width="1.4"/>
<path d="M724,1152 L760,1152" stroke="#c9c0b0" stroke-width="1.4"/>
<path d="M729,1139 L755,1165" stroke="#c9c0b0" stroke-width="1.4"/>
<path d="M755,1139 L729,1165" stroke="#c9c0b0" stroke-width="1.4"/>
<rect x="737" y="1170" width="6" height="6" fill="#6b4226"/>
<rect x="580" y="1176" width="216" height="8" rx="3" fill="url(#singapore-wood)"/>
<rect x="580" y="1176" width="216" height="2.5" rx="1.2" fill="#e8b478" opacity="0.85"/>
<rect x="588" y="1188" width="40" height="12" rx="3" fill="#6b4226"/>
<rect x="640" y="1188" width="40" height="12" rx="3" fill="#8a5a33"/>
<rect x="692" y="1188" width="40" height="12" rx="3" fill="#6b4226"/>

<rect x="104" y="898" width="472" height="22" rx="5" fill="url(#singapore-wood-v)"/>
<rect x="104" y="898" width="472" height="6" rx="3" fill="#e8b478"/>
<rect x="104" y="920" width="472" height="10" fill="#5e3a1e"/>
<rect x="128" y="930" width="16" height="34" fill="#5e3f20"/>
<rect x="536" y="930" width="16" height="34" fill="#5e3f20"/>
<rect x="330" y="930" width="14" height="30" fill="#5e3f20"/>
<ellipse cx="176" cy="898" rx="30" ry="6" fill="url(#singapore-shadow-w)"/>
<ellipse cx="176" cy="898" rx="17" ry="3" fill="#3f2411" opacity="0.5"/>
<g data-obj="red-bowl">
<ellipse cx="176" cy="886" rx="26" ry="12" fill="url(#singapore-red)"/>
<ellipse cx="176" cy="882" rx="22" ry="9" fill="#e8756c"/>
<ellipse cx="176" cy="881" rx="15" ry="6" fill="#ffb7a6"/>
<path d="M154,880 Q176,872 198,880" fill="none" stroke="#8f2b32" stroke-width="2.4"/>
</g>
<path d="M206,896 L214,868" stroke="#e0c9a0" stroke-width="3.4" stroke-linecap="round"/>
<path d="M212,896 L220,868" stroke="#e0c9a0" stroke-width="3.4" stroke-linecap="round"/>
<circle cx="215" cy="866" r="4.5" fill="#c9576f"/>
<circle cx="215" cy="856" r="4.5" fill="#e8c58f"/>
<ellipse cx="248" cy="898" rx="20" ry="5" fill="url(#singapore-shadow-w)"/>
<ellipse cx="248" cy="898" rx="11" ry="2.6" fill="#3f2411" opacity="0.5"/>
<g data-obj="thermos">
<rect x="236" y="860" width="18" height="38" rx="4" fill="url(#singapore-metal)"/>
<rect x="233" y="853" width="23" height="9" rx="3" fill="url(#singapore-red)"/>
<rect x="238" y="874" width="14" height="7" rx="2" fill="#d3eef6" opacity="0.8"/>
<path d="M254,868 Q262,872 256,880" fill="none" stroke="#6a747d" stroke-width="3"/>
</g>
<ellipse cx="280" cy="898" rx="20" ry="5" fill="url(#singapore-shadow-w)"/>
<ellipse cx="280" cy="898" rx="11" ry="2.6" fill="#3f2411" opacity="0.5"/>
<g data-obj="green-bottle">
<rect x="270" y="856" width="20" height="42" rx="5" fill="url(#singapore-green)"/>
<rect x="274" y="848" width="12" height="10" rx="3" fill="#ffcf6a"/>
<rect x="272" y="872" width="16" height="10" rx="2" fill="#f9ecd6" opacity="0.9"/>
<path d="M273,862 L273,892" stroke="#b6f0c4" stroke-width="2.4" opacity="0.6"/>
</g>
<ellipse cx="313" cy="898" rx="20" ry="5" fill="url(#singapore-shadow-w)"/>
<ellipse cx="313" cy="898" rx="11" ry="2.6" fill="#3f2411" opacity="0.5"/>
<g data-obj="iced-glass">
<path d="M304,862 L322,862 L319,898 L307,898 Z" fill="url(#singapore-glass)"/>
<path d="M306,878 L320,878 L318,898 L308,898 Z" fill="#8a5a33" opacity="0.7"/>
<path d="M306,864 L308,896" stroke="#fbfeff" stroke-width="2.4" opacity="0.7"/>
<rect x="303" y="858" width="20" height="6" rx="2" fill="#e8f6fb"/>
<path d="M316,860 L324,838" stroke="#2ec7c0" stroke-width="3" stroke-linecap="round"/>
</g>
<ellipse cx="455" cy="899" rx="26" ry="6" fill="url(#singapore-shadow-w)"/>
<ellipse cx="455" cy="899" rx="14" ry="3" fill="#3f2411" opacity="0.5"/>
<g data-obj="camera">
<rect x="436" y="876" width="38" height="22" rx="4" fill="#3b2c4f"/>
<rect x="436" y="876" width="38" height="5" rx="2.5" fill="#6b5490"/>
<circle cx="452" cy="888" r="8" fill="#6d5789"/>
<circle cx="452" cy="888" r="4.4" fill="url(#singapore-glass)"/>
<circle cx="450" cy="886" r="1.6" fill="#ffffff" opacity="0.85"/>
<rect x="442" y="870" width="12" height="7" rx="2" fill="#3b2c4f"/>
<circle cx="467" cy="882" r="2.6" fill="#ffcf6a"/>
</g>
<rect x="484" y="880" width="34" height="18" rx="2" fill="#3b2c4f"/>
<rect x="484" y="880" width="34" height="4" rx="2" fill="#6b5490"/>
<rect x="513" y="882" width="5" height="14" fill="#f4e2c6"/>
<ellipse cx="558" cy="960" rx="26" ry="7" fill="url(#singapore-shadow)"/>
<ellipse cx="558" cy="960" rx="14" ry="3.4" fill="#0e1f17" opacity="0.5"/>
<g data-obj="ukulele">
<rect x="547" y="888" width="18" height="12" rx="3" fill="#5e3a1e"/>
<rect x="550" y="896" width="12" height="22" rx="3" fill="url(#singapore-wood)"/>
<ellipse cx="556" cy="920" rx="13" ry="10" fill="url(#singapore-wood)"/>
<ellipse cx="556" cy="944" rx="20" ry="17" fill="url(#singapore-wood)"/>
<ellipse cx="550" cy="940" rx="12" ry="10" fill="#e8b478" opacity="0.7"/>
<circle cx="556" cy="944" r="6" fill="#4e2f16"/>
<path d="M552,914 L552,952" stroke="#f9ecd6" stroke-width="1.4"/>
<path d="M560,914 L560,952" stroke="#f9ecd6" stroke-width="1.4"/>
<rect x="548" y="954" width="16" height="5" rx="2" fill="#5e3f20"/>
</g>

<path d="M100,978 Q100,962 118,962 L566,962 Q584,962 584,978 L584,1166 Q584,1180 566,1180 L118,1180 Q100,1180 100,1166 Z" fill="url(#singapore-mat)"/>
<rect x="112" y="1020" width="460" height="14" fill="#b389df" opacity="0.22"/>
<rect x="112" y="1128" width="460" height="14" fill="#4e2b78" opacity="0.3"/>
<rect x="396" y="968" width="14" height="206" fill="#b389df" opacity="0.16"/>
<path d="M100,978 Q100,962 118,962 L566,962 Q584,962 584,978 L584,1166 Q584,1180 566,1180 L118,1180 Q100,1180 100,1166 Z" fill="none" stroke="#d5b0ff" stroke-width="3" opacity="0.55"/>
<ellipse cx="106" cy="982" rx="36" ry="9" fill="url(#singapore-shadow)"/>
<ellipse cx="106" cy="982" rx="20" ry="4.4" fill="#2b1848" opacity="0.55"/>
<g data-obj="backpack">
<path d="M82,932 Q82,918 104,918 Q126,918 126,932 L126,972 Q126,980 116,980 L92,980 Q82,980 82,972 Z" fill="url(#singapore-green)"/>
<path d="M104,918 Q126,918 126,932 L126,972 Q126,980 116,980 L104,980 Z" fill="#175433" opacity="0.55"/>
<path d="M86,944 L122,944 L122,958 L86,958 Z" fill="#4eb079"/>
<rect x="96" y="948" width="16" height="6" rx="2" fill="#f9ecd6"/>
<path d="M92,920 Q87,910 96,908" fill="none" stroke="#1f6941" stroke-width="4"/>
<path d="M116,920 Q121,910 112,908" fill="none" stroke="#1f6941" stroke-width="4"/>
<circle cx="104" cy="968" r="4" fill="#ffcf6a"/>
</g>
<ellipse cx="176" cy="1010" rx="42" ry="9" fill="#2b1848" opacity="0.5"/>
<g data-obj="noodle-bowl">
<ellipse cx="176" cy="1000" rx="36" ry="14" fill="#6b4226"/>
<ellipse cx="176" cy="993" rx="34" ry="13" fill="url(#singapore-wood-v)"/>
<ellipse cx="176" cy="991" rx="27" ry="9.5" fill="#e8c58f"/>
<ellipse cx="176" cy="991" rx="22" ry="7" fill="#b8823f"/>
<path d="M159,989 Q176,984 193,989" fill="none" stroke="#f6dfae" stroke-width="3.4"/>
</g>
<path d="M194,978 L226,960" stroke="#e0c9a0" stroke-width="3.4" stroke-linecap="round"/>
<ellipse cx="306" cy="1015" rx="50" ry="10" fill="#2b1848" opacity="0.5"/>
<ellipse cx="306" cy="1006" rx="46" ry="17" fill="#9c8f76"/>
<ellipse cx="306" cy="1001" rx="44" ry="16" fill="url(#singapore-plate)"/>
<path d="M278,1000 L282,978 L306,974 L309,996 Z" fill="#d99a52"/>
<path d="M278,1000 L282,978 L306,974 L309,996 Z" fill="none" stroke="#8a5a2a" stroke-width="2.4"/>
<path d="M283,995 L286,981 L303,978 L305,992 Z" fill="#f0cb84"/>
<path d="M330,1004 L334,986 L352,983 L354,1001 Z" fill="#d99a52"/>
<path d="M330,1004 L334,986 L352,983 L354,1001 Z" fill="none" stroke="#8a5a2a" stroke-width="2.4"/>
<path d="M335,999 L338,989 L350,987 L351,997 Z" fill="#f0cb84"/>
<ellipse cx="212" cy="1066" rx="50" ry="10" fill="#2b1848" opacity="0.5"/>
<ellipse cx="212" cy="1058" rx="46" ry="17" fill="#9c8f76"/>
<ellipse cx="212" cy="1052" rx="44" ry="16" fill="url(#singapore-plate)"/>
<g data-obj="kaya-toast">
<path d="M186,1050 L190,1028 L216,1024 L219,1046 Z" fill="#c98a3f"/>
<path d="M186,1050 L190,1028 L216,1024 L219,1046 Z" fill="none" stroke="#8a5a2a" stroke-width="3"/>
<path d="M190,1045 L193,1031 L213,1028 L215,1042 Z" fill="#e8b96e"/>
<path d="M194,1038 L215,1035 L216,1042 L195,1045 Z" fill="#4e7d3a"/>
<path d="M194,1038 L215,1035 L215.5,1038 L194.5,1041 Z" fill="#6b9c50"/>
<path d="M197,1031 L213,1029 L213.6,1034 L197.6,1036 Z" fill="#f2d98a"/>
<path d="M212,1058 L216,1038 L238,1035 L240,1054 Z" fill="#d99a52"/>
<path d="M212,1058 L216,1038 L238,1035 L240,1054 Z" fill="none" stroke="#8a5a2a" stroke-width="3"/>
<path d="M216,1053 L219,1042 L236,1039.6 L237,1051 Z" fill="#f0cb84"/>
<path d="M220,1047 L237,1045 L237.6,1049 L220.6,1051 Z" fill="#4e7d3a"/>
</g>
<ellipse cx="346" cy="1088" rx="56" ry="11" fill="#2b1848" opacity="0.5"/>
<ellipse cx="346" cy="1078" rx="52" ry="18" fill="#6b4226"/>
<ellipse cx="346" cy="1072" rx="50" ry="17" fill="url(#singapore-wood-v)"/>
<ellipse cx="346" cy="1071" rx="42" ry="12" fill="#d9a86a"/>
<path d="M310,1064 L376,1050" stroke="#e0c9a0" stroke-width="3.6" stroke-linecap="round"/>
<rect x="326" y="1058" width="13" height="11" rx="3" fill="#a15c2b" transform="rotate(-12 332 1063)"/>
<rect x="344" y="1054" width="13" height="11" rx="3" fill="#8a4a22" transform="rotate(-12 350 1059)"/>
<path d="M312,1076 L378,1062" stroke="#e0c9a0" stroke-width="3.6" stroke-linecap="round"/>
<rect x="332" y="1070" width="13" height="11" rx="3" fill="#8a4a22" transform="rotate(-12 338 1075)"/>
<rect x="350" y="1066" width="13" height="11" rx="3" fill="#a15c2b" transform="rotate(-12 356 1071)"/>
<ellipse cx="460" cy="1090" rx="38" ry="8" fill="#2b1848" opacity="0.45"/>
<g data-obj="paper-fan">
<path d="M460,1080 L430,1042 Q460,1024 490,1042 Z" fill="url(#singapore-cream)"/>
<path d="M460,1080 L460,1031 Q476,1032 490,1042 Z" fill="#d8c69e"/>
<path d="M460,1080 L441,1037" stroke="#c9576f" stroke-width="1.6"/>
<path d="M460,1080 L460,1030" stroke="#c9576f" stroke-width="1.6"/>
<path d="M460,1080 L479,1037" stroke="#c9576f" stroke-width="1.6"/>
<path d="M442,1052 Q460,1044 478,1052" fill="none" stroke="#c9576f" stroke-width="2"/>
<rect x="457" y="1078" width="6" height="12" rx="2" fill="#8a5a33"/>
</g>
<ellipse cx="528" cy="1094" rx="34" ry="8" fill="#2b1848" opacity="0.45"/>
<g data-obj="polaroid">
<rect x="504" y="1036" width="46" height="52" rx="2" fill="url(#singapore-cream)" transform="rotate(-8 527 1062)"/>
<rect x="508" y="1040" width="38" height="32" fill="#4e3a6b" transform="rotate(-8 527 1062)"/>
<circle cx="520" cy="1050" r="5" fill="#ffcf6a" transform="rotate(-8 527 1062)"/>
<path d="M510,1070 L524,1054 L538,1070 Z" fill="#8a6cb0" transform="rotate(-8 527 1062)"/>
<rect x="512" y="1076" width="24" height="4" rx="2" fill="#ded0b6" transform="rotate(-8 527 1062)"/>
</g>
<ellipse cx="150" cy="1148" rx="34" ry="8" fill="#2b1848" opacity="0.5"/>
<g data-obj="durian">
<circle cx="150" cy="1120" r="24" fill="url(#singapore-sph-durian)"/>
<circle cx="142" cy="1112" r="9" fill="#9fbf66" opacity="0.5"/>
<path d="M162,1100 L168,1094 L169,1102 Z" fill="#39501f"/>
<path d="M171,1111 L180,1110 L173,1117 Z" fill="#39501f"/>
<path d="M172,1125 L181,1128 L172,1132 Z" fill="#39501f"/>
<path d="M166,1136 L173,1143 L164,1143 Z" fill="#39501f"/>
<path d="M152,1142 L154,1152 L147,1146 Z" fill="#39501f"/>
<path d="M138,1141 L136,1151 L131,1143 Z" fill="#3e5626"/>
<path d="M128,1132 L120,1138 L122,1129 Z" fill="#3e5626"/>
<path d="M126,1118 L117,1118 L125,1111 Z" fill="#4a6630"/>
<path d="M131,1104 L126,1096 L137,1098 Z" fill="#4a6630"/>
<path d="M142,1095 L140,1086 L149,1092 Z" fill="#4a6630"/>
<path d="M166,1113 L175,1112 L168,1119 Z" fill="#39501f"/>
<path d="M160,1130 L168,1135 L158,1136 Z" fill="#39501f"/>
<path d="M135,1132 L131,1141 L126,1133 Z" fill="#3e5626"/>
<path d="M148,1098 L152,1092" stroke="#3e5626" stroke-width="5" stroke-linecap="round"/>
</g>
<ellipse cx="272" cy="1148" rx="26" ry="6" fill="#2b1848" opacity="0.5"/>
<g data-obj="boba-cup">
<path d="M258,1142 Q252,1104 272,1098 Q292,1104 286,1142 Q272,1148 258,1142 Z" fill="url(#singapore-glass)"/>
<path d="M262,1136 Q258,1108 272,1104 Q283,1108 281,1136 Q272,1140 262,1136 Z" fill="#8a5a33" opacity="0.75"/>
<circle cx="267" cy="1132" r="3.4" fill="#31200f"/>
<circle cx="276" cy="1134" r="3.4" fill="#31200f"/>
<circle cx="271" cy="1125" r="3" fill="#31200f"/>
<ellipse cx="272" cy="1099" rx="17" ry="5" fill="#a8ccd8"/>
</g>
<path d="M278,1100 L294,1062" stroke="#f0a0cf" stroke-width="4" stroke-linecap="round"/>
<ellipse cx="470" cy="1138" rx="48" ry="10" fill="#2b1848" opacity="0.5"/>
<ellipse cx="470" cy="1128" rx="44" ry="16" fill="#9c8f76"/>
<ellipse cx="470" cy="1122" rx="42" ry="15" fill="url(#singapore-plate)"/>
<g data-obj="satay-skewer">
<path d="M438,1112 L502,1096" stroke="#e0c9a0" stroke-width="4" stroke-linecap="round"/>
<path d="M440,1126 L504,1110" stroke="#e0c9a0" stroke-width="4" stroke-linecap="round"/>
<rect x="452" y="1100" width="16" height="13" rx="3" fill="#8a4a22" transform="rotate(-14 460 1106.5)"/>
<rect x="465" y="1097" width="16" height="13" rx="3" fill="#a15c2b" transform="rotate(-14 473 1103.5)"/>
<rect x="478" y="1094" width="16" height="13" rx="3" fill="#8a4a22" transform="rotate(-14 486 1100.5)"/>
<rect x="454" y="1114" width="16" height="13" rx="3" fill="#a15c2b" transform="rotate(-14 462 1120.5)"/>
<rect x="467" y="1111" width="16" height="13" rx="3" fill="#8a4a22" transform="rotate(-14 475 1117.5)"/>
<rect x="480" y="1108" width="16" height="13" rx="3" fill="#a15c2b" transform="rotate(-14 488 1114.5)"/>
<path d="M456,1104 Q462,1101 468,1103" fill="none" stroke="#e8b96e" stroke-width="2.2" stroke-linecap="round"/>
<path d="M482,1116 Q488,1113 494,1115" fill="none" stroke="#e8b96e" stroke-width="2.2" stroke-linecap="round"/>
</g>

<path d="M42,1024 Q34,974 20,942" fill="none" stroke="#2d6142" stroke-width="10" stroke-linecap="round"/>
<path d="M52,1026 Q52,974 46,930" fill="none" stroke="#4a8f60" stroke-width="10" stroke-linecap="round"/>
<path d="M62,1026 Q72,976 86,942" fill="none" stroke="#245039" stroke-width="10" stroke-linecap="round"/>
<ellipse cx="58" cy="1042" rx="62" ry="20" fill="#173d29"/>
<ellipse cx="56" cy="1034" rx="57" ry="17" fill="url(#singapore-bush)"/>
<circle cx="24" cy="1028" r="7" fill="url(#singapore-canopy-a)"/>
<circle cx="88" cy="1030" r="7" fill="#ffcf6a"/>
<ellipse cx="66" cy="1152" rx="28" ry="7" fill="url(#singapore-shadow)"/>
<circle cx="66" cy="1130" r="20" fill="url(#singapore-sph-durian)"/>
<circle cx="59" cy="1123" r="7" fill="#9fbf66" opacity="0.5"/>
<path d="M84,1116 L92,1112 L90,1121 Z" fill="#39501f"/>
<path d="M86,1136 L95,1140 L85,1143 Z" fill="#39501f"/>
<path d="M70,1149 L72,1158 L64,1152 Z" fill="#39501f"/>
<path d="M48,1142 L42,1150 L41,1140 Z" fill="#3e5626"/>
<path d="M44,1122 L35,1120 L44,1113 Z" fill="#4a6630"/>
<path d="M60,1110 L58,1101 L67,1107 Z" fill="#4a6630"/>
<ellipse cx="34" cy="1188" rx="24" ry="6" fill="url(#singapore-shadow)"/>
<circle cx="34" cy="1172" r="17" fill="url(#singapore-sph-durian)"/>
<circle cx="28" cy="1166" r="6" fill="#9fbf66" opacity="0.5"/>
<path d="M48,1162 L55,1159 L54,1166 Z" fill="#39501f"/>
<path d="M50,1180 L58,1184 L49,1186 Z" fill="#39501f"/>
<path d="M30,1189 L31,1197 L24,1192 Z" fill="#3e5626"/>
<path d="M16,1166 L8,1164 L16,1158 Z" fill="#4a6630"/>
<path d="M34,1155 L32,1147 L40,1152 Z" fill="#4a6630"/>
<path d="M40,1112 Q62,1096 86,1090" fill="none" stroke="#2d6142" stroke-width="7" stroke-linecap="round"/>
<path d="M30,1096 Q48,1082 66,1078" fill="none" stroke="#347049" stroke-width="5" stroke-linecap="round"/>
<ellipse cx="50" cy="1194" rx="90" ry="26" fill="url(#singapore-shadow)"/>
<path d="M118,1188 Q114,1164 106,1152" fill="none" stroke="#2d6142" stroke-width="7" stroke-linecap="round"/>
<path d="M146,1192 Q152,1168 148,1150" fill="none" stroke="#4a8f60" stroke-width="7" stroke-linecap="round"/>
<path d="M168,1194 Q180,1172 194,1162" fill="none" stroke="#245039" stroke-width="7" stroke-linecap="round"/>
<circle cx="182" cy="1160" r="7" fill="url(#singapore-canopy-a)"/>
<path d="M552,1196 Q556,1172 552,1156" fill="none" stroke="#4a8f60" stroke-width="7" stroke-linecap="round"/>
<path d="M572,1198 Q582,1178 594,1168" fill="none" stroke="#2d6142" stroke-width="7" stroke-linecap="round"/>
<circle cx="588" cy="1168" r="6.5" fill="#ffcf6a"/>
<ellipse cx="400" cy="1198" rx="230" ry="22" fill="url(#singapore-shadow)"/>
</svg>`
});
