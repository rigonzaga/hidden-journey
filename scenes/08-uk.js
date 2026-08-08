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
    { id: 'lightstick', name: 'Lightstick' },
    { id: 'purple-heart', name: 'Purple Heart' },
    { id: 'teacup', name: 'Teacup' },
    { id: 'pigeon', name: 'Pigeon' },
    { id: 'thimble', name: 'Thimble' },
    { id: 'kite', name: 'Kite' },
    { id: 'umbrella', name: 'Umbrella' },
    { id: 'brass-bell', name: 'Brass Bell' },
    { id: 'flower-box', name: 'Flower Box' },
    { id: 'toy-bus', name: 'Toy Bus' },
    { id: 'manhole', name: 'Manhole' },
    { id: 'oil-lamp', name: 'Oil Lamp' },
    { id: 'clock-face', name: 'Clock Face' },
    { id: 'crown', name: 'Crown' },
    { id: 'jam-jar', name: 'Jam Jar' },
    { id: 'teddy-bear', name: 'Teddy Bear' },
    { id: 'pocket-watch', name: 'Pocket Watch' },
    { id: 'traffic-cone', name: 'Cone' },
    { id: 'corgi', name: 'Corgi' },
    { id: 'paper-lantern', name: 'Lantern' },
    { id: 'book-stack', name: 'Book Stack' },
    { id: 'keyring', name: 'Keyring' },
    { id: 'birdcage', name: 'Birdcage' },
    { id: 'post-box', name: 'Post Box' },
    { id: 'scone', name: 'Scone' },
    { id: 'yarn-ball', name: 'Yarn Ball' },
    { id: 'milk-jug', name: 'Milk Jug' },
    { id: 'bicycle', name: 'Bicycle' },
    { id: 'button-card', name: 'Buttons' },
    { id: 'torch', name: 'Torch' },
    { id: 'honey-pot', name: 'Honey Pot' },
    { id: 'wind-chime', name: 'Wind Chime' },
    { id: 'biscuit-tin', name: 'Biscuit Tin' },
    { id: 'compass', name: 'Compass' },
    { id: 'litter-bin', name: 'Litter Bin' },
    { id: 'candle', name: 'Candle' },
    { id: 'egg-timer', name: 'Egg Timer' },
    { id: 'rain-boot', name: 'Rain Boot' },
    { id: 'kettle', name: 'Kettle' },
    { id: 'pub-sign', name: 'Pub Sign' },
    { id: 'potted-plant', name: 'Plant Pot' },
    { id: 'hang-wreath', name: 'Wreath' },
    { id: 'spectacles', name: 'Spectacles' },
    { id: 'brooch', name: 'Brooch' },
    { id: 'teaspoon', name: 'Teaspoon' },
    { id: 'lost-scarf', name: 'Scarf' },
    { id: 'watering-can', name: 'Watering Can' },
    { id: 'street-lamp', name: 'Lamp Head' },
    { id: 'roof-flag', name: 'Flag' },
    { id: 'ferris-wheel', name: 'Big Wheel' }
  ],
  svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 1200">
<defs>
<linearGradient id="uk-sky" x1="0" y1="0" x2="0" y2="1">
<stop offset="0" stop-color="#e4ebf2"/><stop offset="0.5" stop-color="#bcc9d5"/><stop offset="1" stop-color="#94a4b5"/>
</linearGradient>
<radialGradient id="uk-cloud" cx="0.5" cy="0.5" r="0.5">
<stop offset="0" stop-color="#f4f8fb" stop-opacity="0.6"/><stop offset="0.6" stop-color="#e5ecf2" stop-opacity="0.28"/><stop offset="1" stop-color="#e5ecf2" stop-opacity="0"/>
</radialGradient>
<linearGradient id="uk-mist" x1="0" y1="0" x2="0" y2="1">
<stop offset="0" stop-color="#ccd6e0" stop-opacity="0"/><stop offset="1" stop-color="#ccd6e0" stop-opacity="0.95"/>
</linearGradient>
<linearGradient id="uk-far" x1="0" y1="0" x2="0" y2="1">
<stop offset="0" stop-color="#b6c3d0"/><stop offset="1" stop-color="#8fa0b1"/>
</linearGradient>
<linearGradient id="uk-farh" x1="0" y1="0" x2="1" y2="0">
<stop offset="0" stop-color="#b0bfcd"/><stop offset="0.45" stop-color="#96a6b7"/><stop offset="1" stop-color="#7a8b9e"/>
</linearGradient>
<linearGradient id="uk-brick" x1="0" y1="0" x2="1" y2="0">
<stop offset="0" stop-color="#a06d5c"/><stop offset="0.5" stop-color="#82564a"/><stop offset="1" stop-color="#5b3a33"/>
</linearGradient>
<linearGradient id="uk-stone" x1="0" y1="0" x2="1" y2="0">
<stop offset="0" stop-color="#867372"/><stop offset="0.5" stop-color="#6a5a5b"/><stop offset="1" stop-color="#4a3f42"/>
</linearGradient>
<linearGradient id="uk-cap" x1="0" y1="0" x2="0" y2="1">
<stop offset="0" stop-color="#5d6672"/><stop offset="1" stop-color="#3a414b"/>
</linearGradient>
<linearGradient id="uk-sill" x1="0" y1="0" x2="0" y2="1">
<stop offset="0" stop-color="#dbcfbc"/><stop offset="1" stop-color="#978a7a"/>
</linearGradient>
<linearGradient id="uk-winlit" x1="0" y1="0" x2="0" y2="1">
<stop offset="0" stop-color="#ffe2a6"/><stop offset="0.6" stop-color="#f0bd60"/><stop offset="1" stop-color="#cd9743"/>
</linearGradient>
<linearGradient id="uk-windark" x1="0" y1="0" x2="0" y2="1">
<stop offset="0" stop-color="#7d91a6"/><stop offset="1" stop-color="#465668"/>
</linearGradient>
<linearGradient id="uk-pave" x1="0" y1="0" x2="0" y2="1">
<stop offset="0" stop-color="#98a2ae"/><stop offset="1" stop-color="#79838f"/>
</linearGradient>
<linearGradient id="uk-road" x1="0" y1="0" x2="0" y2="1">
<stop offset="0" stop-color="#39434f"/><stop offset="0.5" stop-color="#4b5664"/><stop offset="1" stop-color="#606d7d"/>
</linearGradient>
<linearGradient id="uk-wet" x1="0" y1="0" x2="0" y2="1">
<stop offset="0" stop-color="#dceaf5" stop-opacity="0"/><stop offset="0.5" stop-color="#cfe0ee" stop-opacity="0.13"/><stop offset="1" stop-color="#e8f2fa" stop-opacity="0.36"/>
</linearGradient>
<linearGradient id="uk-reflc" x1="0" y1="0" x2="0" y2="1">
<stop offset="0" stop-color="#cfe0ee" stop-opacity="0.45"/><stop offset="1" stop-color="#cfe0ee" stop-opacity="0"/>
</linearGradient>
<linearGradient id="uk-reflw" x1="0" y1="0" x2="0" y2="1">
<stop offset="0" stop-color="#ffd490" stop-opacity="0.5"/><stop offset="1" stop-color="#ffd490" stop-opacity="0"/>
</linearGradient>
<linearGradient id="uk-reflr" x1="0" y1="0" x2="0" y2="1">
<stop offset="0" stop-color="#e0574f" stop-opacity="0.42"/><stop offset="1" stop-color="#e0574f" stop-opacity="0"/>
</linearGradient>
<linearGradient id="uk-reflp" x1="0" y1="0" x2="0" y2="1">
<stop offset="0" stop-color="#9d7ae8" stop-opacity="0.45"/><stop offset="1" stop-color="#9d7ae8" stop-opacity="0"/>
</linearGradient>
<linearGradient id="uk-refld" x1="0" y1="0" x2="0" y2="1">
<stop offset="0" stop-color="#26303c" stop-opacity="0.42"/><stop offset="1" stop-color="#26303c" stop-opacity="0"/>
</linearGradient>
<radialGradient id="uk-glow" cx="0.5" cy="0.5" r="0.5">
<stop offset="0" stop-color="#ffdd9c" stop-opacity="0.85"/><stop offset="0.55" stop-color="#ffcf83" stop-opacity="0.33"/><stop offset="1" stop-color="#ffcf83" stop-opacity="0"/>
</radialGradient>
<radialGradient id="uk-shadow" cx="0.5" cy="0.5" r="0.5">
<stop offset="0" stop-color="#141a22" stop-opacity="0.5"/><stop offset="0.55" stop-color="#141a22" stop-opacity="0.25"/><stop offset="1" stop-color="#141a22" stop-opacity="0"/>
</radialGradient>
<radialGradient id="uk-shadoww" cx="0.5" cy="0.5" r="0.5">
<stop offset="0" stop-color="#2e1c0c" stop-opacity="0.58"/><stop offset="0.55" stop-color="#2e1c0c" stop-opacity="0.27"/><stop offset="1" stop-color="#2e1c0c" stop-opacity="0"/>
</radialGradient>
<linearGradient id="uk-glass" x1="0" y1="0" x2="1" y2="1">
<stop offset="0" stop-color="#ffffff" stop-opacity="0.19"/><stop offset="0.5" stop-color="#dceaf4" stop-opacity="0.06"/><stop offset="1" stop-color="#ffffff" stop-opacity="0.02"/>
</linearGradient>
<linearGradient id="uk-gold" x1="0" y1="0" x2="1" y2="0">
<stop offset="0" stop-color="#f6de9e"/><stop offset="0.4" stop-color="#e0b055"/><stop offset="1" stop-color="#9a7026"/>
</linearGradient>
<linearGradient id="uk-goldv" x1="0" y1="0" x2="0" y2="1">
<stop offset="0" stop-color="#f6dfa0"/><stop offset="1" stop-color="#b8862f"/>
</linearGradient>
<linearGradient id="uk-steel" x1="0" y1="0" x2="1" y2="0">
<stop offset="0" stop-color="#eff5f8"/><stop offset="0.4" stop-color="#c2ccd5"/><stop offset="1" stop-color="#85919e"/>
</linearGradient>
<linearGradient id="uk-porc" x1="0" y1="0" x2="1" y2="0">
<stop offset="0" stop-color="#fffaf0"/><stop offset="0.38" stop-color="#f2e9d6"/><stop offset="1" stop-color="#c7bba4"/>
</linearGradient>
<linearGradient id="uk-red" x1="0" y1="0" x2="1" y2="0">
<stop offset="0" stop-color="#e25e5e"/><stop offset="0.35" stop-color="#c53232"/><stop offset="1" stop-color="#7b1717"/>
</linearGradient>
<linearGradient id="uk-redv" x1="0" y1="0" x2="0" y2="1">
<stop offset="0" stop-color="#d84545"/><stop offset="1" stop-color="#881b1b"/>
</linearGradient>
<linearGradient id="uk-plum" x1="0" y1="0" x2="1" y2="0">
<stop offset="0" stop-color="#ab7382"/><stop offset="0.4" stop-color="#8a4a57"/><stop offset="1" stop-color="#582d36"/>
</linearGradient>
<linearGradient id="uk-blue" x1="0" y1="0" x2="1" y2="0">
<stop offset="0" stop-color="#5f8da8"/><stop offset="0.4" stop-color="#3f6f8c"/><stop offset="1" stop-color="#23485e"/>
</linearGradient>
<linearGradient id="uk-navy" x1="0" y1="0" x2="1" y2="0">
<stop offset="0" stop-color="#5c768f"/><stop offset="0.4" stop-color="#3d5872"/><stop offset="1" stop-color="#23364a"/>
</linearGradient>
<linearGradient id="uk-teal" x1="0" y1="0" x2="1" y2="0">
<stop offset="0" stop-color="#51aaae"/><stop offset="0.4" stop-color="#2f7f83"/><stop offset="1" stop-color="#18545a"/>
</linearGradient>
<linearGradient id="uk-green" x1="0" y1="0" x2="1" y2="0">
<stop offset="0" stop-color="#7bab68"/><stop offset="0.4" stop-color="#54804a"/><stop offset="1" stop-color="#314f2d"/>
</linearGradient>
<linearGradient id="uk-copper" x1="0" y1="0" x2="1" y2="0">
<stop offset="0" stop-color="#d18c60"/><stop offset="0.4" stop-color="#a9603f"/><stop offset="1" stop-color="#6d3822"/>
</linearGradient>
<linearGradient id="uk-purple" x1="0" y1="0" x2="1" y2="0">
<stop offset="0" stop-color="#baa0f2"/><stop offset="0.38" stop-color="#7c4fd0"/><stop offset="1" stop-color="#482984"/>
</linearGradient>
<linearGradient id="uk-woodh" x1="0" y1="0" x2="1" y2="0">
<stop offset="0" stop-color="#bb8c5a"/><stop offset="0.4" stop-color="#8f6537"/><stop offset="1" stop-color="#5a3b1e"/>
</linearGradient>
<linearGradient id="uk-ledge" x1="0" y1="0" x2="0" y2="1">
<stop offset="0" stop-color="#e8c48e"/><stop offset="1" stop-color="#a87d4c"/>
</linearGradient>
<linearGradient id="uk-soffit" x1="0" y1="0" x2="0" y2="1">
<stop offset="0" stop-color="#2b1c10"/><stop offset="1" stop-color="#4e3520"/>
</linearGradient>
<linearGradient id="uk-wall" x1="0" y1="0" x2="0" y2="1">
<stop offset="0" stop-color="#6d4c2c"/><stop offset="0.5" stop-color="#7d5834"/><stop offset="1" stop-color="#5d3f24"/>
</linearGradient>
<linearGradient id="uk-cabback" x1="0" y1="0" x2="0" y2="1">
<stop offset="0" stop-color="#2c1c0e"/><stop offset="0.6" stop-color="#412c17"/><stop offset="1" stop-color="#553a1f"/>
</linearGradient>
<linearGradient id="uk-floor" x1="0" y1="0" x2="0" y2="1">
<stop offset="0" stop-color="#7c5934"/><stop offset="1" stop-color="#452f1c"/>
</linearGradient>
<linearGradient id="uk-flame" x1="0" y1="0" x2="0" y2="1">
<stop offset="0" stop-color="#fff3c8"/><stop offset="1" stop-color="#f0a63f"/>
</linearGradient>
<linearGradient id="uk-fur" x1="0" y1="0" x2="1" y2="0">
<stop offset="0" stop-color="#eba869"/><stop offset="0.4" stop-color="#d1874a"/><stop offset="1" stop-color="#98592a"/>
</linearGradient>
<linearGradient id="uk-zinc" x1="0" y1="0" x2="1" y2="0">
<stop offset="0" stop-color="#7aa2a8"/><stop offset="0.4" stop-color="#4f6f74"/><stop offset="1" stop-color="#30464b"/>
</linearGradient>
<linearGradient id="uk-cone" x1="0" y1="0" x2="0" y2="1">
<stop offset="0" stop-color="#fff0c8" stop-opacity="0.85"/><stop offset="1" stop-color="#ffd07a" stop-opacity="0.04"/>
</linearGradient>
<linearGradient id="uk-rug" x1="0" y1="0" x2="1" y2="0">
<stop offset="0" stop-color="#8a4a57"/><stop offset="0.45" stop-color="#6d3944"/><stop offset="1" stop-color="#48242c"/>
</linearGradient>
</defs>

<rect x="0" y="0" width="800" height="1200" fill="#5a3e26"/>
<rect x="0" y="146" width="800" height="554" fill="url(#uk-sky)"/>
<ellipse cx="190" cy="196" rx="170" ry="38" fill="url(#uk-cloud)"/>
<ellipse cx="620" cy="180" rx="180" ry="32" fill="url(#uk-cloud)"/>
<ellipse cx="410" cy="232" rx="150" ry="26" fill="url(#uk-cloud)" opacity="0.7"/>
<rect x="0" y="200" width="800" height="200" fill="url(#uk-mist)" opacity="0.5"/>

<polygon points="488,182 508,212 468,212" fill="url(#uk-far)"/>
<rect x="470" y="210" width="36" height="20" fill="url(#uk-farh)"/>
<rect x="464" y="228" width="48" height="36" fill="url(#uk-farh)"/>
<rect x="464" y="228" width="48" height="4" fill="#c4d0dd"/>
<g data-obj="clock-face">
<circle cx="488" cy="246" r="19" fill="url(#uk-far)"/>
<circle cx="488" cy="246" r="14" fill="#e8eef4"/>
<path d="M475 239 Q488 232 501 239" fill="none" stroke="#ffffff" stroke-width="3" opacity="0.6"/>
<rect x="486" y="235" width="4" height="13" fill="#5d6b7b"/>
<rect x="488" y="244" width="11" height="4" fill="#5d6b7b"/>
<circle cx="488" cy="246" r="2.5" fill="#46525e"/>
</g>
<rect x="468" y="264" width="40" height="110" fill="url(#uk-farh)"/>
<rect x="468" y="264" width="8" height="110" fill="#c4d0dd" opacity="0.35"/>
<rect x="474" y="284" width="9" height="24" fill="#78889b" opacity="0.6"/>
<rect x="494" y="284" width="9" height="24" fill="#78889b" opacity="0.6"/>

<ellipse cx="350" cy="274" rx="42" ry="30" fill="url(#uk-farh)"/>
<ellipse cx="336" cy="268" rx="22" ry="18" fill="#c0cdda" opacity="0.4"/>
<rect x="310" y="272" width="80" height="46" fill="url(#uk-farh)"/>
<rect x="310" y="272" width="80" height="5" fill="#c4d0dd"/>

<line x1="254" y1="323" x2="240" y2="342" stroke="#8fa0b1" stroke-width="4" opacity="0.55"/>
<line x1="254" y1="323" x2="268" y2="342" stroke="#8fa0b1" stroke-width="4" opacity="0.55"/>
<g data-obj="ferris-wheel">
<circle cx="254" cy="290" r="33" fill="none" stroke="url(#uk-far)" stroke-width="5"/>
<circle cx="254" cy="290" r="8" fill="url(#uk-far)"/>
<line x1="254" y1="259" x2="254" y2="321" stroke="#a6b4c3" stroke-width="3"/>
<line x1="228" y1="275" x2="280" y2="305" stroke="#a6b4c3" stroke-width="3"/>
<line x1="228" y1="305" x2="280" y2="275" stroke="#a6b4c3" stroke-width="3"/>
<circle cx="254" cy="257" r="4" fill="#c8d4e0"/>
<circle cx="281" cy="306" r="4" fill="#c8d4e0"/>
</g>
<rect x="0" y="250" width="800" height="120" fill="url(#uk-mist)" opacity="0.26"/>

<rect x="-10" y="316" width="220" height="146" fill="url(#uk-brick)"/>
<rect x="-10" y="316" width="220" height="14" fill="url(#uk-cap)"/>
<rect x="-10" y="330" width="220" height="6" fill="#c08e79" opacity="0.85"/>
<rect x="194" y="336" width="16" height="126" fill="#472c26" opacity="0.5"/>
<rect x="40" y="274" width="32" height="44" fill="#7a4f43"/>
<rect x="44" y="264" width="9" height="12" fill="#96705f"/>
<rect x="58" y="264" width="9" height="12" fill="#96705f"/>
<rect x="156" y="236" width="4" height="82" fill="#4d5560"/>
<rect x="146" y="248" width="24" height="3" fill="#5f6873"/>
<rect x="149" y="258" width="18" height="3" fill="#5f6873"/>
<g data-obj="kite">
<path d="M166 252 Q159 246 158 240" fill="none" stroke="#e8dcc4" stroke-width="2"/>
<polygon points="186,224 208,254 186,284 164,254" fill="#d2685f"/>
<polygon points="186,224 208,254 186,284" fill="#9d4038"/>
<polygon points="186,224 197,239 186,254 175,239" fill="#e5897d" opacity="0.8"/>
<path d="M186 226 L186 282" fill="none" stroke="#f6e8d2" stroke-width="2" opacity="0.85"/>
<path d="M166 254 L206 254" fill="none" stroke="#f6e8d2" stroke-width="2" opacity="0.8"/>
<rect x="181" y="278" width="10" height="4" rx="2" fill="url(#uk-goldv)"/>
</g>
<rect x="36" y="356" width="48" height="56" fill="url(#uk-winlit)" stroke="#3d4855" stroke-width="5"/>
<rect x="40" y="360" width="40" height="20" fill="#fff0c4" opacity="0.4"/>
<rect x="30" y="412" width="60" height="8" fill="url(#uk-sill)"/>
<g data-obj="flower-box">
<rect x="34" y="416" width="54" height="16" rx="3" fill="url(#uk-copper)"/>
<rect x="34" y="416" width="54" height="4" rx="2" fill="#dd9a6c"/>
<circle cx="44" cy="412" r="8" fill="#c85a7a"/>
<circle cx="61" cy="406" r="9" fill="#e88fa8"/>
<circle cx="58" cy="403" r="4" fill="#f6bccb" opacity="0.8"/>
<circle cx="78" cy="411" r="7" fill="#b84f6d"/>
<circle cx="69" cy="416" r="5" fill="#6f9a5e"/>
</g>
<rect x="128" y="356" width="48" height="56" fill="url(#uk-windark)" stroke="#3d4855" stroke-width="5"/>
<rect x="132" y="360" width="15" height="48" fill="#a8bccd" opacity="0.3"/>
<rect x="122" y="412" width="60" height="8" fill="url(#uk-sill)"/>

<rect x="210" y="300" width="230" height="162" fill="url(#uk-stone)"/>
<rect x="210" y="300" width="230" height="14" fill="url(#uk-cap)"/>
<rect x="210" y="314" width="230" height="6" fill="#a08d88" opacity="0.85"/>
<rect x="210" y="320" width="14" height="142" fill="#a08d88" opacity="0.16"/>
<rect x="424" y="320" width="16" height="142" fill="#3d3234" opacity="0.5"/>
<rect x="300" y="252" width="5" height="50" fill="#5d4a44"/>
<g data-obj="roof-flag">
<polygon points="305,256 345,264 305,276" fill="#a83741"/>
<polygon points="305,256 345,264 305,265" fill="#d95c67"/>
<polygon points="305,268 328,271 305,276" fill="#8a2a33"/>
<circle cx="302" cy="250" r="5" fill="url(#uk-goldv)"/>
<rect x="298" y="278" width="9" height="24" fill="#6d564e"/>
</g>
<rect x="216" y="344" width="46" height="5" fill="#3f3730"/>
<rect x="252" y="348" width="6" height="14" fill="#3f3730"/>
<g data-obj="pub-sign">
<rect x="234" y="362" width="44" height="36" rx="4" fill="url(#uk-navy)"/>
<rect x="234" y="362" width="44" height="6" rx="3" fill="#7392ac"/>
<circle cx="256" cy="380" r="9" fill="url(#uk-goldv)"/>
<circle cx="253" cy="377" r="4" fill="#f8e6b4" opacity="0.85"/>
<rect x="234" y="391" width="44" height="7" rx="3" fill="#1c2c3c" opacity="0.6"/>
</g>
<rect x="300" y="344" width="46" height="54" fill="url(#uk-windark)" stroke="#3b444f" stroke-width="5"/>
<rect x="304" y="348" width="15" height="46" fill="#a8bccd" opacity="0.3"/>
<rect x="294" y="398" width="58" height="8" fill="url(#uk-sill)"/>
<rect x="376" y="344" width="46" height="54" fill="url(#uk-winlit)" stroke="#3b444f" stroke-width="5"/>
<rect x="380" y="348" width="38" height="20" fill="#fff0c4" opacity="0.4"/>
<rect x="370" y="398" width="58" height="8" fill="url(#uk-sill)"/>

<rect x="440" y="330" width="370" height="132" fill="url(#uk-brick)"/>
<rect x="440" y="330" width="370" height="14" fill="url(#uk-cap)"/>
<rect x="440" y="344" width="370" height="6" fill="#c08e79" opacity="0.85"/>
<rect x="440" y="350" width="14" height="112" fill="#c08e79" opacity="0.18"/>
<rect x="690" y="288" width="32" height="44" fill="#7a4f43"/>
<rect x="694" y="278" width="9" height="12" fill="#96705f"/>
<rect x="708" y="278" width="9" height="12" fill="#96705f"/>
<g data-obj="pigeon">
<ellipse cx="626" cy="312" rx="23" ry="14" fill="#7f8996"/>
<ellipse cx="622" cy="309" rx="17" ry="10" fill="#a6b0bd"/>
<ellipse cx="612" cy="308" rx="9" ry="6" fill="#646d7a"/>
<path d="M604 306 Q616 301 630 305" fill="none" stroke="#c2cbd6" stroke-width="2" opacity="0.7"/>
<circle cx="646" cy="298" r="9.5" fill="#8b95a2"/>
<circle cx="644" cy="295" r="5" fill="#b3bcc7" opacity="0.7"/>
<polygon points="654,297 664,300 654,304" fill="#e8b071"/>
<circle cx="648" cy="296" r="2.2" fill="#252a31"/>
<circle cx="649" cy="295" r="0.8" fill="#ffffff"/>
<rect x="622" y="324" width="4" height="7" fill="#d99a5e"/>
<rect x="632" y="324" width="4" height="7" fill="#d99a5e"/>
</g>
<rect x="470" y="368" width="46" height="56" fill="url(#uk-winlit)" stroke="#3f4a56" stroke-width="5"/>
<rect x="474" y="372" width="38" height="20" fill="#fff0c4" opacity="0.4"/>
<rect x="464" y="424" width="58" height="8" fill="url(#uk-sill)"/>
<rect x="560" y="368" width="46" height="56" fill="url(#uk-windark)" stroke="#3f4a56" stroke-width="5"/>
<rect x="564" y="372" width="15" height="48" fill="#a8bccd" opacity="0.3"/>
<rect x="554" y="424" width="58" height="8" fill="url(#uk-sill)"/>
<rect x="558" y="428" width="50" height="13" rx="3" fill="url(#uk-copper)"/>
<circle cx="568" cy="426" r="7" fill="#5f8a52"/>
<circle cx="582" cy="423" r="8" fill="#84b46f"/>
<circle cx="597" cy="427" r="6" fill="#6f9a5e"/>
<rect x="700" y="368" width="46" height="56" fill="url(#uk-winlit)" stroke="#3f4a56" stroke-width="5"/>
<rect x="704" y="372" width="38" height="20" fill="#fff0c4" opacity="0.4"/>
<rect x="694" y="424" width="58" height="8" fill="url(#uk-sill)"/>

<rect x="-10" y="420" width="220" height="42" fill="#3a2f2c"/>
<rect x="-10" y="420" width="220" height="6" fill="#5c4a44"/>
<rect x="20" y="430" width="150" height="26" fill="#5b6d7f" opacity="0.55"/>
<rect x="210" y="420" width="230" height="42" fill="#332b2c"/>
<rect x="210" y="420" width="230" height="6" fill="#544748"/>
<polygon points="240,426 410,426 404,448 246,448" fill="url(#uk-navy)"/>
<polygon points="240,426 410,426 408,434 242,434" fill="#6a8aa5"/>
<polygon points="258,426 278,426 273,448 254,448" fill="#efe3cc" opacity="0.45"/>
<polygon points="336,426 356,426 351,448 332,448" fill="#efe3cc" opacity="0.45"/>
<rect x="440" y="432" width="370" height="30" fill="#3a2f2c"/>
<rect x="440" y="432" width="370" height="6" fill="#5c4a44"/>
<rect x="470" y="440" width="120" height="18" fill="#5b6d7f" opacity="0.5"/>
<rect x="620" y="440" width="150" height="18" fill="#5b6d7f" opacity="0.5"/>

<rect x="0" y="462" width="800" height="22" fill="url(#uk-pave)"/>
<rect x="0" y="462" width="800" height="4" fill="#aeb7c2"/>
<rect x="0" y="482" width="800" height="8" fill="#5e6873"/>
<rect x="0" y="490" width="800" height="66" fill="url(#uk-road)"/>
<rect x="0" y="490" width="800" height="66" fill="url(#uk-wet)"/>
<rect x="120" y="524" width="70" height="5" fill="#cdd6de" opacity="0.22"/>
<rect x="430" y="522" width="70" height="5" fill="#cdd6de" opacity="0.18"/>
<rect x="0" y="556" width="800" height="14" fill="#6f7a86"/>
<rect x="0" y="556" width="800" height="4" fill="#9aa4b0"/>
<rect x="0" y="570" width="800" height="130" fill="url(#uk-pave)"/>
<rect x="0" y="570" width="800" height="130" fill="url(#uk-wet)"/>
<rect x="0" y="570" width="800" height="4" fill="#a8b1bc"/>
<rect x="130" y="612" width="140" height="3" fill="#8b95a1" opacity="0.5"/>
<rect x="430" y="612" width="180" height="3" fill="#8b95a1" opacity="0.5"/>
<rect x="60" y="660" width="200" height="3" fill="#8b95a1" opacity="0.4"/>
<rect x="450" y="660" width="220" height="3" fill="#8b95a1" opacity="0.4"/>

<ellipse cx="696" cy="484" rx="52" ry="9" fill="url(#uk-shadow)"/>
<rect x="660" y="372" width="72" height="110" fill="url(#uk-red)"/>
<rect x="656" y="360" width="80" height="14" fill="#a82525"/>
<rect x="656" y="360" width="80" height="4" fill="#d84545"/>
<rect x="666" y="384" width="60" height="90" fill="url(#uk-redv)"/>
<rect x="666" y="384" width="8" height="90" fill="#ec6a6a" opacity="0.6"/>
<rect x="726" y="384" width="6" height="90" fill="#6a1212" opacity="0.6"/>
<rect x="674" y="392" width="44" height="34" fill="#7e8e9d"/>
<rect x="674" y="392" width="16" height="34" fill="#9fb0bf" opacity="0.55"/>
<rect x="674" y="432" width="44" height="34" fill="#8b9aa8"/>
<rect x="695" y="392" width="3" height="74" fill="#b52c2c"/>
<rect x="658" y="474" width="76" height="10" fill="#701515"/>
<rect x="660" y="482" width="72" height="20" fill="url(#uk-reflr)"/>

<ellipse cx="196" cy="558" rx="164" ry="12" fill="url(#uk-shadow)"/>
<rect x="40" y="446" width="310" height="98" rx="12" fill="url(#uk-red)"/>
<rect x="40" y="446" width="310" height="13" rx="7" fill="#e05a5a"/>
<rect x="40" y="494" width="310" height="9" fill="#eddcb8"/>
<rect x="40" y="503" width="310" height="41" fill="url(#uk-redv)"/>
<rect x="40" y="460" width="14" height="84" fill="#f08585" opacity="0.32"/>
<rect x="338" y="460" width="12" height="84" fill="#6a1212" opacity="0.45"/>
<rect x="56" y="460" width="70" height="30" rx="3" fill="#8ea0b0"/>
<rect x="56" y="460" width="70" height="11" rx="3" fill="#b1c1cf" opacity="0.55"/>
<rect x="136" y="460" width="70" height="30" rx="3" fill="#9aabba"/>
<rect x="216" y="460" width="70" height="30" rx="3" fill="#8ea0b0"/>
<rect x="216" y="460" width="70" height="11" rx="3" fill="#b1c1cf" opacity="0.5"/>
<rect x="56" y="510" width="80" height="26" rx="3" fill="#8ea0b0"/>
<rect x="146" y="510" width="80" height="26" rx="3" fill="#93a4b3"/>
<rect x="146" y="510" width="80" height="10" rx="3" fill="#b6c5d2" opacity="0.5"/>
<rect x="306" y="504" width="30" height="40" fill="#8f1e1e"/>
<rect x="300" y="456" width="40" height="20" rx="3" fill="url(#uk-goldv)"/>
<circle cx="96" cy="546" r="17" fill="#1e232a"/>
<circle cx="96" cy="546" r="7" fill="#4a525b"/>
<circle cx="296" cy="546" r="17" fill="#1e232a"/>
<circle cx="296" cy="546" r="7" fill="#4a525b"/>
<rect x="46" y="552" width="300" height="22" fill="url(#uk-reflr)"/>

<ellipse cx="470" cy="536" rx="34" ry="10" fill="#39434f" opacity="0.5"/>
<g data-obj="manhole">
<ellipse cx="470" cy="538" rx="32" ry="10" fill="#454f5c"/>
<ellipse cx="470" cy="534" rx="32" ry="10" fill="url(#uk-steel)" opacity="0.65"/>
<ellipse cx="470" cy="534" rx="32" ry="10" fill="#6a7683" opacity="0.5"/>
<ellipse cx="470" cy="533" rx="22" ry="6" fill="#586371"/>
<ellipse cx="464" cy="531" rx="11" ry="3" fill="#a2afbb" opacity="0.45"/>
<circle cx="470" cy="533" r="4" fill="#454f5c"/>
</g>
<ellipse cx="416" cy="554" rx="26" ry="7" fill="url(#uk-shadow)"/>
<g data-obj="traffic-cone">
<polygon points="416,500 432,548 400,548" fill="#e87a42"/>
<polygon points="416,500 432,548 418,548" fill="#b04e24"/>
<polygon points="416,500 424,524 412,524" fill="#f6a271" opacity="0.65"/>
<rect x="406" y="522" width="21" height="7" fill="#f6efdd"/>
<rect x="396" y="546" width="40" height="8" rx="3" fill="#d5642f"/>
<rect x="396" y="546" width="40" height="3" rx="2" fill="#f79b62"/>
</g>
<rect x="398" y="552" width="36" height="16" fill="url(#uk-reflw)" opacity="0.5"/>
<rect x="436" y="516" width="30" height="5" rx="2" fill="#e87a42"/>
<rect x="440" y="521" width="4" height="26" fill="#8b95a1"/>

<rect x="30" y="618" width="92" height="4" rx="2" fill="#4d5560"/>
<rect x="32" y="622" width="5" height="12" fill="#4d5560"/>
<rect x="114" y="622" width="5" height="12" fill="#4d5560"/>
<ellipse cx="72" cy="630" rx="40" ry="7" fill="url(#uk-shadow)"/>
<g data-obj="bicycle">
<rect x="42" y="586" width="58" height="5" rx="2" fill="#2b333d"/>
<circle cx="53" cy="612" r="15" fill="none" stroke="#2b333d" stroke-width="4"/>
<circle cx="91" cy="612" r="15" fill="none" stroke="#2b333d" stroke-width="4"/>
<circle cx="53" cy="612" r="15" fill="none" stroke="#9db0c0" stroke-width="1.5" opacity="0.5"/>
<circle cx="91" cy="612" r="15" fill="none" stroke="#9db0c0" stroke-width="1.5" opacity="0.5"/>
<path d="M53 612 L71 584 L89 612" fill="none" stroke="url(#uk-steel)" stroke-width="4"/>
<path d="M71 584 L81 580" fill="none" stroke="#3a444f" stroke-width="4"/>
<circle cx="71" cy="581" r="4" fill="#5f6c78"/>
</g>
<rect x="40" y="626" width="62" height="24" fill="url(#uk-refld)"/>

<ellipse cx="174" cy="632" rx="32" ry="8" fill="url(#uk-shadow)"/>
<g data-obj="litter-bin">
<rect x="150" y="572" width="46" height="58" rx="5" fill="url(#uk-navy)"/>
<rect x="152" y="576" width="11" height="52" rx="4" fill="#7b93a9" opacity="0.55"/>
<rect x="190" y="576" width="4" height="52" rx="2" fill="#ffcf83" opacity="0.35"/>
<rect x="146" y="566" width="54" height="10" rx="4" fill="#2c3540"/>
<rect x="146" y="566" width="54" height="3" rx="2" fill="#54626f"/>
<rect x="156" y="592" width="34" height="4" fill="#617180" opacity="0.8"/>
</g>
<rect x="150" y="628" width="46" height="26" fill="url(#uk-refld)"/>

<rect x="242" y="600" width="9" height="30" rx="4" fill="#2b333d"/>
<circle cx="246" cy="599" r="5" fill="#3d454e"/>
<rect x="242" y="628" width="9" height="20" fill="url(#uk-refld)"/>
<rect x="420" y="600" width="9" height="30" rx="4" fill="#2b333d"/>
<circle cx="424" cy="599" r="5" fill="#a83741"/>
<rect x="420" y="628" width="9" height="20" fill="url(#uk-refld)"/>

<ellipse cx="320" cy="632" rx="30" ry="7" fill="url(#uk-shadow)"/>
<rect x="308" y="622" width="26" height="10" rx="3" fill="#232931"/>
<rect x="316" y="424" width="9" height="200" fill="#262c34"/>
<rect x="316" y="424" width="3.5" height="200" fill="#4d5661"/>
<rect x="321" y="424" width="3" height="200" fill="#ffcf83" opacity="0.16"/>
<ellipse cx="320" cy="400" rx="54" ry="48" fill="url(#uk-glow)"/>
<g data-obj="street-lamp">
<polygon points="296,424 346,424 338,382 304,382" fill="#f9dda6"/>
<polygon points="300,422 316,422 312,384 306,384" fill="#fff6de" opacity="0.85"/>
<polygon points="296,424 346,424 342,431 300,431" fill="#262c34"/>
<polygon points="304,382 338,382 332,368 310,368" fill="#333a43"/>
<polygon points="304,382 338,382 337,386 305,386" fill="#5c6673"/>
<circle cx="321" cy="365" r="4" fill="#4d5661"/>
</g>
<polygon points="298,426 344,426 366,570 276,570" fill="url(#uk-cone)" opacity="0.3"/>
<ellipse cx="320" cy="636" rx="46" ry="12" fill="url(#uk-reflw)" opacity="0.7"/>
<rect x="314" y="630" width="13" height="34" fill="url(#uk-reflw)"/>

<g data-obj="purple-heart">
<path d="M480 676 C452 664 450 648 464 642 C470 640 476 643 480 648 C484 643 490 640 496 642 C510 648 508 664 480 676 Z" fill="url(#uk-purple)"/>
<path d="M480 676 C508 664 510 648 496 642 C493 641 490 642 487 644 C498 650 496 662 476 672 C478 674 478 675 480 676 Z" fill="#482984"/>
<path d="M461 650 C463 645 469 644 472 649 C467 653 464 657 462 662 C459 658 459 653 461 650 Z" fill="#cbb8f5" opacity="0.75"/>
<path d="M465 670 Q480 678 495 668" fill="none" stroke="#c9b6f8" stroke-width="2" opacity="0.4"/>
</g>
<ellipse cx="480" cy="684" rx="34" ry="8" fill="url(#uk-reflp)"/>

<ellipse cx="578" cy="630" rx="34" ry="8" fill="url(#uk-shadow)"/>
<rect x="574" y="592" width="9" height="36" fill="#39434e"/>
<rect x="586" y="594" width="8" height="34" fill="#2f3843"/>
<path d="M556 596 Q578 566 600 596 Z" fill="#4d5a63"/>
<circle cx="578" cy="576" r="11" fill="#dcb894"/>
<circle cx="574" cy="572" r="4" fill="#f0d3b2" opacity="0.7"/>
<path d="M578 566 Q578 558 588 558 L590 566 Z" fill="#3a434e"/>
<g data-obj="umbrella">
<rect x="576" y="516" width="4" height="60" fill="url(#uk-steel)"/>
<circle cx="578" cy="517" r="4" fill="#dbe8f0"/>
<path d="M544 552 Q544 522 578 520 Q612 522 612 552 Z" fill="url(#uk-navy)"/>
<path d="M578 520 Q612 522 612 552 L596 552 Q598 532 578 520 Z" fill="#23364a"/>
<path d="M578 520 Q560 524 552 552 L564 552 Q569 528 578 520 Z" fill="#8b5cf6"/>
<path d="M556 542 Q564 528 576 523" fill="none" stroke="#c9b6f8" stroke-width="3" opacity="0.55"/>
<path d="M544 552 Q555 563 566 552 Q578 563 590 552 Q601 563 612 552 L612 548 L544 548 Z" fill="#1e3044"/>
<path d="M578 521 L578 552" fill="none" stroke="#1a2735" stroke-width="2" opacity="0.65"/>
<path d="M578 574 Q578 581 570 580" fill="none" stroke="#c0b089" stroke-width="5"/>
</g>
<rect x="556" y="626" width="44" height="28" fill="url(#uk-refld)"/>

<ellipse cx="683" cy="632" rx="32" ry="8" fill="url(#uk-shadow)"/>
<g data-obj="post-box">
<rect x="660" y="568" width="46" height="62" rx="6" fill="url(#uk-red)"/>
<rect x="662" y="572" width="11" height="56" rx="4" fill="#ee7373" opacity="0.55"/>
<rect x="700" y="572" width="4" height="56" rx="2" fill="#ffcf83" opacity="0.3"/>
<ellipse cx="683" cy="568" rx="23" ry="8" fill="#c23232"/>
<ellipse cx="677" cy="565" rx="10" ry="3" fill="#e88080" opacity="0.55"/>
<rect x="668" y="586" width="30" height="6" rx="2" fill="#571010"/>
<rect x="656" y="624" width="54" height="8" rx="3" fill="#651313"/>
</g>
<rect x="658" y="628" width="50" height="28" fill="url(#uk-reflr)"/>

<line x1="60" y1="180" x2="50" y2="226" stroke="#eef3f8" stroke-width="2" opacity="0.28"/>
<line x1="230" y1="196" x2="220" y2="242" stroke="#eef3f8" stroke-width="2" opacity="0.24"/>
<line x1="392" y1="212" x2="382" y2="258" stroke="#eef3f8" stroke-width="2" opacity="0.28"/>
<line x1="556" y1="232" x2="546" y2="278" stroke="#eef3f8" stroke-width="2" opacity="0.24"/>
<line x1="726" y1="252" x2="716" y2="298" stroke="#eef3f8" stroke-width="2" opacity="0.28"/>
<line x1="132" y1="410" x2="122" y2="456" stroke="#eef3f8" stroke-width="2" opacity="0.22"/>
<line x1="470" y1="440" x2="460" y2="486" stroke="#eef3f8" stroke-width="2" opacity="0.22"/>
<line x1="640" y1="500" x2="630" y2="546" stroke="#eef3f8" stroke-width="2" opacity="0.2"/>

<rect x="0" y="146" width="800" height="554" fill="url(#uk-glass)"/>
<ellipse cx="120" cy="300" rx="7" ry="11" fill="#ffffff" opacity="0.28"/>
<ellipse cx="430" cy="266" rx="8" ry="12" fill="#ffffff" opacity="0.24"/>
<ellipse cx="640" cy="560" rx="7" ry="11" fill="#ffffff" opacity="0.22"/>

<rect x="0" y="0" width="800" height="112" fill="url(#uk-soffit)"/>
<rect x="0" y="104" width="800" height="8" fill="#1e130a" opacity="0.6"/>
<rect x="0" y="112" width="800" height="34" fill="url(#uk-woodh)"/>
<rect x="0" y="112" width="800" height="5" fill="#4a3120"/>
<rect x="0" y="139" width="800" height="7" fill="#d8a765"/>
<rect x="262" y="146" width="22" height="554" fill="url(#uk-woodh)"/>
<rect x="262" y="146" width="5" height="554" fill="#a97c4c"/>
<rect x="278" y="146" width="5" height="554" fill="#ffcf83" opacity="0.3"/>
<rect x="516" y="146" width="22" height="554" fill="url(#uk-woodh)"/>
<rect x="516" y="146" width="5" height="554" fill="#a97c4c"/>
<rect x="532" y="146" width="5" height="554" fill="#ffcf83" opacity="0.3"/>

<rect x="118" y="146" width="9" height="24" fill="#6b4a2c"/>
<rect x="396" y="146" width="9" height="24" fill="#6b4a2c"/>
<rect x="676" y="146" width="9" height="24" fill="#6b4a2c"/>
<rect x="92" y="168" width="616" height="8" rx="4" fill="url(#uk-gold)"/>
<rect x="92" y="168" width="616" height="3" rx="1.5" fill="#fbe8b8" opacity="0.7"/>

<g data-obj="paper-lantern">
<path d="M124 166 Q118 172 124 178 Q130 182 128 188" fill="none" stroke="#9a7026" stroke-width="3"/>
<ellipse cx="128" cy="212" rx="25" ry="23" fill="#dd8f47"/>
<ellipse cx="120" cy="210" rx="13" ry="19" fill="#f7c485" opacity="0.85"/>
<ellipse cx="115" cy="205" rx="5" ry="8" fill="#fde5bd" opacity="0.8"/>
<ellipse cx="128" cy="190" rx="10" ry="4" fill="#b06f34"/>
<ellipse cx="128" cy="234" rx="8" ry="3" fill="#b06f34"/>
</g>
<ellipse cx="128" cy="212" rx="36" ry="32" fill="url(#uk-glow)" opacity="0.35"/>
<path d="M190 166 Q184 172 190 178 Q195 181 194 186" fill="none" stroke="#9a7026" stroke-width="3"/>
<ellipse cx="194" cy="206" rx="18" ry="17" fill="#c97f42"/>
<ellipse cx="188" cy="204" rx="9" ry="13" fill="#e8ac6f" opacity="0.8"/>

<g data-obj="wind-chime">
<path d="M322 166 Q316 172 322 178 Q327 181 326 186" fill="none" stroke="#9a7026" stroke-width="3"/>
<ellipse cx="326" cy="192" rx="22" ry="6" fill="url(#uk-copper)"/>
<ellipse cx="321" cy="190" rx="10" ry="2.5" fill="#e0a578" opacity="0.7"/>
<rect x="306" y="198" width="5" height="28" rx="2.5" fill="url(#uk-steel)"/>
<rect x="316" y="198" width="5" height="36" rx="2.5" fill="url(#uk-steel)"/>
<rect x="327" y="198" width="5" height="32" rx="2.5" fill="url(#uk-steel)"/>
<rect x="338" y="198" width="5" height="24" rx="2.5" fill="url(#uk-steel)"/>
</g>

<g data-obj="lost-scarf">
<path d="M392 162 Q386 168 388 176 L400 176 Q396 168 400 162 Z" fill="#a97382"/>
<path d="M388 176 L414 176 L410 226 L392 226 Z" fill="url(#uk-plum)"/>
<path d="M402 176 L414 176 L410 226 L402 226 Z" fill="#582d36"/>
<path d="M418 162 Q428 168 426 176 L438 176 Q434 168 438 162 Z" fill="#a97382"/>
<path d="M426 176 L450 176 L446 214 L430 214 Z" fill="#8a4a57"/>
<rect x="393" y="224" width="4" height="8" fill="#a97382"/>
<rect x="403" y="224" width="4" height="8" fill="#a97382"/>
<rect x="432" y="212" width="4" height="8" fill="#a97382"/>
</g>

<g data-obj="birdcage">
<path d="M592 178 Q586 184 592 189 Q597 192 596 196" fill="none" stroke="#9a7026" stroke-width="3"/>
<path d="M576 240 L576 212 Q576 200 596 196 Q616 200 616 212 L616 240 Z" fill="#f0cd7a" opacity="0.22"/>
<ellipse cx="596" cy="222" rx="8" ry="6" fill="#eccfa9"/>
<path d="M576 240 L576 212 Q576 200 596 196 Q616 200 616 212 L616 240" fill="none" stroke="url(#uk-gold)" stroke-width="2.5"/>
<path d="M586 240 L586 200" fill="none" stroke="#e0b055" stroke-width="2"/>
<path d="M606 240 L606 200" fill="none" stroke="#a87c30" stroke-width="2"/>
<rect x="572" y="238" width="48" height="7" rx="3" fill="#9a7026"/>
</g>

<g data-obj="keyring">
<path d="M646 166 Q640 172 646 178 Q650 180 650 184" fill="none" stroke="#9a7026" stroke-width="3"/>
<circle cx="650" cy="194" r="11" fill="none" stroke="url(#uk-steel)" stroke-width="4"/>
<rect x="654" y="202" width="5" height="24" fill="url(#uk-gold)"/>
<rect x="654" y="218" width="12" height="4" fill="#c9a253"/>
<rect x="654" y="210" width="9" height="4" fill="#c9a253"/>
<circle cx="638" cy="204" r="7" fill="url(#uk-purple)"/>
<circle cx="636" cy="202" r="2.5" fill="#d5c6f8" opacity="0.8"/>
</g>

<g data-obj="hang-wreath">
<path d="M688 178 Q682 183 688 188 Q692 190 692 194" fill="none" stroke="#9a7026" stroke-width="3"/>
<circle cx="692" cy="212" r="24" fill="none" stroke="url(#uk-green)" stroke-width="11"/>
<path d="M676 198 Q685 189 696 190" fill="none" stroke="#8ec277" stroke-width="4" opacity="0.6"/>
<circle cx="679" cy="201" r="5" fill="#c9424c"/>
<circle cx="705" cy="223" r="5" fill="#a83741"/>
<circle cx="707" cy="200" r="4" fill="#7fae6b"/>
</g>
<circle cx="740" cy="206" r="15" fill="none" stroke="#54804a" stroke-width="7"/>
<path d="M738 166 Q732 172 738 178 Q740 182 740 191" fill="none" stroke="#9a7026" stroke-width="3"/>

<rect x="0" y="742" width="800" height="458" fill="url(#uk-wall)"/>
<rect x="0" y="688" width="800" height="10" fill="#e8c48e"/>
<rect x="0" y="686" width="800" height="4" fill="#f7dcaa"/>
<rect x="0" y="698" width="800" height="44" fill="url(#uk-ledge)"/>
<rect x="0" y="698" width="800" height="5" fill="#f2d49a"/>
<rect x="0" y="738" width="800" height="16" fill="#2a1b0e" opacity="0.5"/>
<ellipse cx="400" cy="900" rx="450" ry="210" fill="url(#uk-glow)" opacity="0.45"/>

<ellipse cx="54" cy="694" rx="42" ry="7" fill="url(#uk-shadoww)"/>
<ellipse cx="54" cy="693" rx="26" ry="4" fill="#3a2410" opacity="0.4"/>
<path d="M24 668 Q24 646 54 646 Q84 646 84 668 Q84 694 54 694 Q24 694 24 664 Z" fill="url(#uk-porc)"/>
<path d="M56 646 Q84 646 84 668 Q84 694 54 694 Q70 682 70 668 Q70 654 56 646 Z" fill="#c2b69f"/>
<ellipse cx="40" cy="660" rx="9" ry="12" fill="#ffffff" opacity="0.6"/>
<path d="M84 660 Q106 664 102 680 Q99 690 88 689" fill="none" stroke="#efe6d2" stroke-width="7"/>
<path d="M24 662 Q10 656 6 666" fill="none" stroke="#e4d9c1" stroke-width="7"/>
<ellipse cx="54" cy="646" rx="17" ry="5" fill="#cbbfa6"/>
<circle cx="54" cy="639" r="6" fill="url(#uk-goldv)"/>
<rect x="28" y="666" width="52" height="5" fill="#8b5cf6" opacity="0.5"/>
<ellipse cx="121" cy="698" rx="26" ry="5" fill="url(#uk-shadoww)"/>
<ellipse cx="121" cy="697" rx="16" ry="3" fill="#3a2410" opacity="0.4"/>
<g data-obj="milk-jug">
<path d="M100 656 L104 696 L138 696 L142 656 Z" fill="url(#uk-porc)"/>
<path d="M124 656 L142 656 L138 696 L126 696 Z" fill="#c7bba4"/>
<ellipse cx="110" cy="672" rx="5" ry="13" fill="#ffffff" opacity="0.6"/>
<path d="M142 664 Q156 668 151 678" fill="none" stroke="#f2ead8" stroke-width="6"/>
<path d="M98 654 Q106 650 114 654" fill="#f8f2e4"/>
<rect x="102" y="672" width="38" height="4" fill="#3f5a72" opacity="0.5"/>
</g>

<ellipse cx="210" cy="698" rx="36" ry="7" fill="url(#uk-shadoww)"/>
<ellipse cx="210" cy="696" rx="32" ry="6" fill="#efe6d2"/>
<ellipse cx="210" cy="694" rx="24" ry="4" fill="#d3c7ae"/>
<g data-obj="scone">
<path d="M188 692 L192 672 Q196 654 210 653 Q224 654 228 672 L232 692 Z" fill="#d9a462"/>
<path d="M212 653 Q224 654 228 672 L232 692 L216 692 L217 672 Z" fill="#b5803f"/>
<path d="M192 672 Q210 664 228 672" fill="none" stroke="#f2d59f" stroke-width="6"/>
<path d="M196 665 Q210 654 224 665 Q217 659 210 659 Q203 659 196 665 Z" fill="#f9ecce"/>
<path d="M199 669 Q210 662 222 669 Q214 666 199 669 Z" fill="#b8404a"/>
<ellipse cx="204" cy="679" rx="7" ry="4" fill="#eec089" opacity="0.55"/>
<circle cx="200" cy="681" r="3" fill="#8c5a2c"/>
<circle cx="220" cy="683" r="3" fill="#8c5a2c"/>
</g>
<ellipse cx="271" cy="698" rx="26" ry="5" fill="url(#uk-shadoww)"/>
<ellipse cx="271" cy="697" rx="17" ry="3" fill="#3a2410" opacity="0.4"/>
<g data-obj="jam-jar">
<rect x="250" y="662" width="34" height="34" rx="4" fill="url(#uk-red)"/>
<rect x="252" y="666" width="8" height="26" rx="3" fill="#f08585" opacity="0.5"/>
<rect x="248" y="654" width="38" height="9" rx="3" fill="#e8dcc4"/>
<rect x="248" y="654" width="38" height="3" rx="2" fill="#f9f2e4"/>
<rect x="254" y="674" width="26" height="12" rx="2" fill="#f6efdd"/>
<circle cx="267" cy="680" r="4" fill="#8f2f38"/>
</g>

<ellipse cx="378" cy="698" rx="32" ry="6" fill="url(#uk-shadoww)"/>
<ellipse cx="378" cy="697" rx="20" ry="3" fill="#3a2410" opacity="0.4"/>
<g data-obj="honey-pot">
<path d="M378 660 L378 650 L388 650" fill="none" stroke="#c9a253" stroke-width="4"/>
<ellipse cx="390" cy="653" rx="6" ry="4" fill="url(#uk-goldv)"/>
<path d="M358 696 L356 674 Q356 664 378 664 Q400 664 400 674 L398 696 Z" fill="#e8ac6f"/>
<path d="M380 664 Q400 664 400 674 L398 696 L384 696 Z" fill="#c07c3e"/>
<ellipse cx="365" cy="680" rx="5" ry="10" fill="#f6d5ae" opacity="0.6"/>
<ellipse cx="378" cy="664" rx="22" ry="6" fill="#f4cc95"/>
<ellipse cx="378" cy="663" rx="15" ry="4" fill="#c9803f"/>
</g>
<ellipse cx="436" cy="698" rx="28" ry="6" fill="url(#uk-shadoww)"/>
<g data-obj="egg-timer">
<rect x="416" y="648" width="40" height="7" rx="3" fill="url(#uk-copper)"/>
<rect x="416" y="689" width="40" height="7" rx="3" fill="url(#uk-copper)"/>
<path d="M424 655 L448 655 L438 672 L448 689 L424 689 L434 672 Z" fill="#e6eff5" opacity="0.85"/>
<path d="M426 657 L446 657 L436 672 Z" fill="#e8ac6f"/>
<path d="M431 684 L441 684 L438 674 L434 674 Z" fill="#e8ac6f"/>
<path d="M427 658 L432 658 L429 668 Z" fill="#ffffff" opacity="0.55"/>
<rect x="420" y="652" width="4" height="40" fill="#8f6338"/>
<rect x="448" y="652" width="4" height="40" fill="#6f4b28"/>
</g>

<ellipse cx="726" cy="698" rx="30" ry="6" fill="url(#uk-shadoww)"/>
<ellipse cx="726" cy="697" rx="19" ry="3" fill="#3a2410" opacity="0.4"/>
<g data-obj="biscuit-tin">
<rect x="704" y="660" width="44" height="36" rx="4" fill="url(#uk-blue)"/>
<rect x="706" y="664" width="11" height="28" rx="4" fill="#7fabc4" opacity="0.55"/>
<rect x="702" y="652" width="48" height="9" rx="3" fill="#2b566f"/>
<rect x="702" y="652" width="48" height="3" rx="2" fill="#6c9cb6"/>
<circle cx="726" cy="678" r="9" fill="url(#uk-goldv)"/>
<circle cx="724" cy="676" r="3.5" fill="#f8e6b4" opacity="0.85"/>
</g>
<ellipse cx="774" cy="698" rx="28" ry="6" fill="url(#uk-shadoww)"/>
<g data-obj="potted-plant">
<rect x="756" y="670" width="40" height="26" rx="4" fill="url(#uk-copper)"/>
<rect x="758" y="674" width="9" height="20" rx="3" fill="#dd9a6c" opacity="0.6"/>
<rect x="756" y="670" width="40" height="6" rx="4" fill="#d68a5f"/>
<path d="M776 670 Q764 660 758 650" fill="none" stroke="#4f7a44" stroke-width="5"/>
<path d="M776 670 Q788 660 794 652" fill="none" stroke="#5d8c50" stroke-width="5"/>
<ellipse cx="756" cy="648" rx="11" ry="7" fill="#5d8c50"/>
<ellipse cx="794" cy="650" rx="11" ry="7" fill="#79b268"/>
<ellipse cx="775" cy="644" rx="10" ry="7" fill="#6fa15f"/>
<ellipse cx="792" cy="648" rx="4" ry="3" fill="#a3d18f" opacity="0.6"/>
</g>

<rect x="0" y="750" width="800" height="6" fill="#8a6339" opacity="0.6"/>
<rect x="16" y="758" width="768" height="148" fill="url(#uk-woodh)"/>
<rect x="16" y="758" width="768" height="5" fill="#b0803f"/>
<rect x="28" y="768" width="744" height="128" fill="url(#uk-cabback)"/>
<rect x="28" y="768" width="744" height="128" fill="url(#uk-glow)" opacity="0.16"/>
<rect x="28" y="768" width="744" height="7" fill="#1c1108" opacity="0.6"/>
<rect x="16" y="758" width="11" height="148" fill="#5c3f26"/>
<rect x="773" y="758" width="11" height="148" fill="#4a3220"/>
<rect x="28" y="828" width="744" height="10" fill="#7a5634"/>
<rect x="28" y="828" width="744" height="3" fill="#c99a5e"/>
<rect x="274" y="838" width="8" height="58" fill="#6b4a2c"/>
<rect x="528" y="838" width="8" height="58" fill="#6b4a2c"/>
<rect x="16" y="896" width="768" height="10" fill="#8a6339"/>
<rect x="16" y="896" width="768" height="3" fill="#b0803f"/>

<ellipse cx="66" cy="828" rx="26" ry="5" fill="#160d06" opacity="0.5"/>
<g data-obj="brass-bell">
<path d="M46 824 Q46 798 66 792 Q86 798 86 824 Z" fill="url(#uk-gold)"/>
<path d="M68 792 Q86 798 86 824 L74 824 Q76 802 68 792 Z" fill="#9a7026"/>
<path d="M53 814 Q53 800 64 796" fill="none" stroke="#fdf0c8" stroke-width="3" opacity="0.75"/>
<rect x="44" y="822" width="44" height="7" rx="3" fill="#d9ab48"/>
<circle cx="66" cy="788" r="5" fill="#c9a253"/>
<circle cx="66" cy="830" r="4" fill="#9a7026"/>
</g>
<ellipse cx="137" cy="829" rx="42" ry="5" fill="#160d06" opacity="0.5"/>
<g data-obj="book-stack">
<rect x="100" y="816" width="74" height="12" rx="2" fill="url(#uk-plum)"/>
<rect x="106" y="820" width="62" height="5" fill="#f4ead6"/>
<rect x="104" y="804" width="68" height="12" rx="2" fill="url(#uk-navy)"/>
<rect x="110" y="808" width="56" height="5" fill="#f4ead6"/>
<rect x="110" y="794" width="58" height="10" rx="2" fill="url(#uk-green)"/>
<rect x="116" y="797" width="46" height="4" fill="#f4ead6"/>
<rect x="110" y="794" width="58" height="3" rx="1.5" fill="#9dc98a" opacity="0.6"/>
</g>
<ellipse cx="218" cy="828" rx="20" ry="4" fill="#160d06" opacity="0.5"/>
<rect x="200" y="800" width="36" height="28" rx="3" fill="url(#uk-copper)"/>
<rect x="202" y="804" width="8" height="20" rx="3" fill="#dd9a6c" opacity="0.55"/>
<rect x="198" y="794" width="40" height="8" rx="3" fill="#8f4c30"/>

<ellipse cx="344" cy="828" rx="30" ry="4" fill="#160d06" opacity="0.5"/>
<g data-obj="spectacles">
<circle cx="330" cy="814" r="11.5" fill="none" stroke="#443a33" stroke-width="3"/>
<circle cx="356" cy="814" r="11.5" fill="none" stroke="#443a33" stroke-width="3"/>
<circle cx="330" cy="814" r="9.5" fill="#cfe0ea" opacity="0.45"/>
<circle cx="356" cy="814" r="9.5" fill="#cfe0ea" opacity="0.45"/>
<path d="M324 808 Q328 804 333 805" fill="none" stroke="#ffffff" stroke-width="2.5" opacity="0.75"/>
<path d="M350 808 Q354 804 359 805" fill="none" stroke="#ffffff" stroke-width="2.5" opacity="0.7"/>
<path d="M341 814 L345 814" fill="none" stroke="#443a33" stroke-width="3"/>
<path d="M318 810 Q312 802 316 794" fill="none" stroke="#443a33" stroke-width="3"/>
</g>
<g data-obj="pocket-watch">
<rect x="416" y="768" width="8" height="6" rx="2" fill="#9a7026"/>
<path d="M420 774 Q414 780 420 786" fill="none" stroke="#c9a253" stroke-width="3"/>
<circle cx="420" cy="804" r="19" fill="url(#uk-gold)"/>
<circle cx="420" cy="804" r="14" fill="#f8f0dc"/>
<path d="M409 798 Q420 791 431 798" fill="none" stroke="#ffffff" stroke-width="3" opacity="0.7"/>
<rect x="419" y="794" width="2" height="11" fill="#443a33"/>
<rect x="420" y="803" width="10" height="2" fill="#443a33"/>
<circle cx="420" cy="804" r="2" fill="#443a33"/>
</g>
<ellipse cx="474" cy="828" rx="16" ry="4" fill="#160d06" opacity="0.5"/>
<rect x="466" y="806" width="16" height="22" rx="3" fill="url(#uk-gold)"/>
<ellipse cx="474" cy="806" rx="10" ry="4" fill="#e0b055"/>
<rect x="471" y="788" width="6" height="18" fill="#e8dcc4"/>
<ellipse cx="474" cy="783" rx="4" ry="7" fill="url(#uk-flame)"/>

<ellipse cx="616" cy="828" rx="26" ry="5" fill="#160d06" opacity="0.5"/>
<g data-obj="compass">
<rect x="612" y="788" width="8" height="6" rx="2" fill="#9a7026"/>
<circle cx="616" cy="808" r="20" fill="url(#uk-gold)"/>
<circle cx="616" cy="808" r="15" fill="#f6efdd"/>
<path d="M604 802 Q616 794 628 802" fill="none" stroke="#ffffff" stroke-width="3" opacity="0.7"/>
<polygon points="616,795 620,808 616,821 612,808" fill="#c9424c"/>
<polygon points="616,795 620,808 616,808" fill="#8a2a33"/>
<circle cx="616" cy="808" r="3" fill="#443a33"/>
</g>
<ellipse cx="690" cy="828" rx="22" ry="5" fill="#160d06" opacity="0.5"/>
<path d="M672 826 Q672 800 690 796 Q708 800 708 826 Z" fill="url(#uk-copper)"/>
<ellipse cx="690" cy="798" rx="14" ry="5" fill="#d68a5f"/>
<circle cx="690" cy="790" r="5" fill="#c9a253"/>
<path d="M736 826 Q736 808 748 804 Q760 808 760 826 Z" fill="url(#uk-gold)"/>
<rect x="734" y="824" width="28" height="5" rx="2" fill="#d9ab48"/>

<ellipse cx="79" cy="894" rx="22" ry="4" fill="#160d06" opacity="0.55"/>
<g data-obj="thimble">
<path d="M60 892 L60 868 Q60 856 79 856 Q98 856 98 868 L98 892 Z" fill="url(#uk-gold)"/>
<path d="M79 856 Q98 856 98 868 L98 892 L86 892 L86 868 Q86 859 79 856 Z" fill="#9a7026"/>
<path d="M66 866 Q72 860 78 860" fill="none" stroke="#fdf0c8" stroke-width="3" opacity="0.7"/>
<circle cx="70" cy="870" r="2" fill="#7d5a20"/>
<circle cx="79" cy="866" r="2" fill="#7d5a20"/>
<circle cx="88" cy="872" r="2" fill="#7d5a20"/>
<rect x="60" y="886" width="38" height="6" fill="#efd694"/>
</g>
<ellipse cx="151" cy="894" rx="24" ry="4" fill="#160d06" opacity="0.55"/>
<g data-obj="brooch">
<ellipse cx="151" cy="873" rx="21" ry="19" fill="url(#uk-gold)"/>
<ellipse cx="151" cy="872" rx="14" ry="12" fill="url(#uk-purple)"/>
<ellipse cx="146" cy="867" rx="5" ry="3" fill="#e2d6fb" opacity="0.85"/>
<circle cx="135" cy="863" r="3.5" fill="#fbe8b8"/>
<circle cx="167" cy="882" r="3.5" fill="#fbe8b8"/>
</g>
<circle cx="216" cy="876" r="14" fill="url(#uk-gold)"/>
<circle cx="216" cy="876" r="8" fill="#f8e6b4"/>
<path d="M206 862 L226 862 L226 850 L206 850 Z" fill="url(#uk-navy)"/>

<ellipse cx="341" cy="894" rx="24" ry="4" fill="#160d06" opacity="0.55"/>
<g data-obj="teaspoon">
<ellipse cx="326" cy="862" rx="11" ry="14" fill="url(#uk-steel)"/>
<ellipse cx="324" cy="859" rx="6" ry="8" fill="#f4f8fa"/>
<path d="M330 873 L354 890" fill="none" stroke="#b2bdc8" stroke-width="6" stroke-linecap="round"/>
<path d="M331 875 L350 888" fill="none" stroke="#e0e8ee" stroke-width="2" opacity="0.6"/>
<circle cx="355" cy="890" r="4" fill="#c2ccd5"/>
</g>
<ellipse cx="410" cy="868" rx="9" ry="12" fill="#aab5c0"/>
<path d="M414 878 L428 892" fill="none" stroke="#9aa5b0" stroke-width="5" stroke-linecap="round"/>
<circle cx="460" cy="864" r="8" fill="none" stroke="#a2aeb8" stroke-width="3"/>
<rect x="462" y="871" width="4" height="20" fill="#b89a5e"/>
<rect x="462" y="882" width="10" height="3" fill="#b89a5e"/>

<ellipse cx="597" cy="894" rx="22" ry="4" fill="#160d06" opacity="0.55"/>
<g data-obj="button-card">
<rect x="578" y="856" width="38" height="38" rx="3" fill="#eee3cb"/>
<rect x="578" y="856" width="38" height="6" rx="3" fill="#faf3e2"/>
<circle cx="588" cy="868" r="6" fill="#3f6f8c"/>
<circle cx="605" cy="868" r="6" fill="#b8404a"/>
<circle cx="588" cy="884" r="6" fill="#c9a253"/>
<circle cx="605" cy="884" r="6" fill="#7c4fd0"/>
<circle cx="586" cy="866" r="2" fill="#8fb6cc" opacity="0.7"/>
</g>
<circle cx="656" cy="872" r="7" fill="#b8404a"/>
<circle cx="672" cy="882" r="6" fill="#3f6f8c"/>
<path d="M722 892 L722 872 Q722 862 738 862 Q754 862 754 872 L754 892 Z" fill="#b89a5e"/>
<rect x="722" y="887" width="32" height="5" fill="#d9c08a"/>

<rect x="0" y="906" width="800" height="294" fill="url(#uk-floor)"/>
<rect x="0" y="906" width="800" height="10" fill="#6b4a2c"/>
<rect x="0" y="906" width="800" height="3" fill="#96693e"/>
<rect x="0" y="916" width="800" height="14" fill="#2a1b0e" opacity="0.4"/>
<rect x="0" y="994" width="800" height="3" fill="#523719" opacity="0.6"/>
<rect x="0" y="1084" width="800" height="3" fill="#523719" opacity="0.6"/>
<rect x="0" y="1174" width="800" height="3" fill="#523719" opacity="0.6"/>
<ellipse cx="392" cy="1060" rx="350" ry="160" fill="url(#uk-glow)" opacity="0.32"/>

<ellipse cx="41" cy="1120" rx="44" ry="10" fill="url(#uk-shadoww)"/>
<rect x="6" y="1042" width="70" height="76" rx="4" fill="url(#uk-woodh)"/>
<rect x="6" y="1042" width="70" height="7" rx="3" fill="#b0803f"/>
<rect x="6" y="1068" width="70" height="6" fill="#5a3b1e"/>
<rect x="6" y="1096" width="70" height="6" fill="#5a3b1e"/>
<ellipse cx="39" cy="1044" rx="18" ry="4" fill="#160d06" opacity="0.45"/>
<g data-obj="torch">
<circle cx="39" cy="988" r="7" fill="#fbe0aa"/>
<rect x="26" y="992" width="26" height="16" rx="8" fill="url(#uk-steel)"/>
<rect x="30" y="1006" width="18" height="36" rx="4" fill="#68737f"/>
<rect x="30" y="1006" width="6" height="36" rx="3" fill="#96a2af"/>
<rect x="45" y="1006" width="3" height="36" rx="1.5" fill="#ffcf83" opacity="0.4"/>
<rect x="28" y="1018" width="22" height="4" fill="#4d5661"/>
</g>
<ellipse cx="39" cy="988" rx="22" ry="18" fill="url(#uk-glow)" opacity="0.4"/>

<ellipse cx="139" cy="1188" rx="72" ry="14" fill="url(#uk-shadoww)"/>
<path d="M170 1046 Q170 1032 182 1034" fill="none" stroke="#26394b" stroke-width="6"/>
<rect x="168" y="1044" width="5" height="30" fill="#3a4a5c"/>
<path d="M104 1032 Q104 1018 116 1020" fill="none" stroke="#37503b" stroke-width="6"/>
<rect x="102" y="1030" width="5" height="34" fill="#44604a"/>
<path d="M96 1058 L114 1058 L110 1078 L100 1078 Z" fill="url(#uk-green)"/>
<path d="M160 1058 L178 1058 L174 1076 L164 1076 Z" fill="url(#uk-navy)"/>
<g data-obj="lightstick">
<rect x="112" y="990" width="28" height="36" rx="14" fill="url(#uk-purple)"/>
<rect x="112" y="990" width="28" height="36" rx="14" fill="#a78bfa" opacity="0.28"/>
<rect x="117" y="996" width="7" height="24" rx="3" fill="#e2dbf8" opacity="0.8"/>
<rect x="113" y="1021" width="26" height="9" rx="2" fill="#e4ddef"/>
<rect x="116" y="1028" width="20" height="30" rx="5" fill="#ece4d2"/>
<rect x="116" y="1028" width="6" height="30" rx="3" fill="#f9f3e5"/>
<rect x="116" y="1036" width="20" height="6" fill="#6d3fc4"/>
</g>
<ellipse cx="139" cy="1006" rx="26" ry="22" fill="url(#uk-glow)" opacity="0.22"/>
<path d="M148 1042 Q148 1026 160 1028" fill="none" stroke="#54282f" stroke-width="6"/>
<rect x="146" y="1040" width="5" height="26" fill="#6b3a44"/>
<rect x="88" y="1058" width="102" height="124" rx="8" fill="url(#uk-zinc)"/>
<rect x="88" y="1058" width="30" height="124" fill="#8fb4ba" opacity="0.28"/>
<rect x="178" y="1058" width="12" height="124" fill="#26383c" opacity="0.6"/>
<ellipse cx="139" cy="1058" rx="51" ry="12" fill="#30464b"/>
<ellipse cx="139" cy="1055" rx="51" ry="11" fill="#6a949a"/>
<ellipse cx="124" cy="1051" rx="20" ry="4" fill="#9dc4c8" opacity="0.5"/>
<rect x="88" y="1092" width="102" height="7" fill="#30464b"/>
<rect x="88" y="1146" width="102" height="7" fill="#30464b"/>
<rect x="84" y="1176" width="110" height="10" rx="4" fill="#2a3f43"/>

<ellipse cx="36" cy="1184" rx="34" ry="9" fill="url(#uk-shadoww)"/>
<g data-obj="rain-boot">
<path d="M14 1140 L36 1140 L36 1168 L50 1168 Q58 1168 58 1174 L58 1180 L14 1180 Z" fill="url(#uk-blue)"/>
<path d="M27 1140 L36 1140 L36 1168 L50 1168 Q58 1168 58 1174 L58 1180 L36 1180 Z" fill="#23485e"/>
<rect x="16" y="1144" width="6" height="32" rx="3" fill="#7fabc4" opacity="0.5"/>
<rect x="12" y="1136" width="26" height="7" rx="3" fill="#5f8da8"/>
<rect x="14" y="1174" width="44" height="6" fill="#1c3a4c"/>
</g>

<ellipse cx="233" cy="1182" rx="42" ry="10" fill="url(#uk-shadoww)"/>
<g data-obj="watering-can">
<path d="M252 1144 L272 1128" fill="none" stroke="#4e7a48" stroke-width="6"/>
<ellipse cx="274" cy="1126" rx="8" ry="5" fill="#7fb069"/>
<path d="M214 1178 L210 1136 Q210 1128 233 1128 Q256 1128 256 1136 L252 1178 Z" fill="url(#uk-green)"/>
<path d="M235 1128 Q256 1128 256 1136 L252 1178 L238 1178 Z" fill="#314f2d"/>
<rect x="216" y="1138" width="6" height="34" rx="3" fill="#9ccb86" opacity="0.5"/>
<ellipse cx="233" cy="1128" rx="23" ry="6" fill="#7fb069"/>
<path d="M218 1126 Q226 1112 244 1114" fill="none" stroke="#63954f" stroke-width="5"/>
</g>

<ellipse cx="400" cy="1156" rx="180" ry="36" fill="url(#uk-rug)"/>
<ellipse cx="400" cy="1152" rx="150" ry="27" fill="#8a4a57" opacity="0.5"/>
<ellipse cx="376" cy="1150" rx="60" ry="15" fill="url(#uk-shadoww)"/>
<ellipse cx="376" cy="1144" rx="58" ry="14" fill="#6d4a28"/>
<ellipse cx="376" cy="1140" rx="58" ry="13" fill="#8f663c"/>
<rect x="362" y="1030" width="28" height="112" fill="url(#uk-woodh)"/>
<rect x="362" y="1030" width="8" height="112" fill="#b0803f" opacity="0.5"/>
<ellipse cx="376" cy="1014" rx="152" ry="32" fill="#5c3d20"/>
<ellipse cx="376" cy="1006" rx="152" ry="32" fill="#a87a49"/>
<ellipse cx="360" cy="1000" rx="118" ry="20" fill="#c39b64" opacity="0.4"/>

<ellipse cx="272" cy="1004" rx="40" ry="8" fill="url(#uk-shadoww)"/>
<path d="M240 976 Q240 950 272 948 Q304 950 304 976 Q304 1002 272 1002 Q240 1002 240 972 Z" fill="url(#uk-porc)"/>
<path d="M274 948 Q304 950 304 976 Q304 1002 272 1002 Q290 990 290 976 Q290 960 274 948 Z" fill="#c2b69f"/>
<ellipse cx="256" cy="964" rx="9" ry="12" fill="#ffffff" opacity="0.6"/>
<path d="M304 962 Q326 966 322 982 Q319 992 308 991" fill="none" stroke="#efe6d2" stroke-width="7"/>
<path d="M240 964 Q226 958 222 968" fill="none" stroke="#e4d9c1" stroke-width="6"/>
<ellipse cx="272" cy="948" rx="17" ry="5" fill="#cbbfa6"/>
<circle cx="272" cy="941" r="6" fill="url(#uk-goldv)"/>
<rect x="246" y="968" width="52" height="5" fill="#3f6f8c" opacity="0.5"/>

<ellipse cx="350" cy="1006" rx="34" ry="7" fill="url(#uk-shadoww)"/>
<g data-obj="teacup">
<ellipse cx="350" cy="1000" rx="30" ry="6" fill="#efe6d2"/>
<ellipse cx="350" cy="998" rx="21" ry="4" fill="#d3c7ae"/>
<path d="M330 970 Q330 994 350 994 Q370 994 370 970 Z" fill="url(#uk-porc)"/>
<path d="M352 970 L370 970 Q370 994 350 994 Q361 986 361 970 Z" fill="#c7bba4"/>
<ellipse cx="337" cy="979" rx="4" ry="9" fill="#ffffff" opacity="0.65"/>
<path d="M370 974 Q384 977 381 986 Q379 992 371 992" fill="none" stroke="#f8f2e6" stroke-width="5"/>
<ellipse cx="350" cy="970" rx="20" ry="5" fill="#ffffff"/>
<ellipse cx="350" cy="971" rx="15" ry="3.5" fill="#b57a4d"/>
<rect x="332" y="977" width="36" height="3" fill="#c99a4a"/>
<circle cx="339" cy="985" r="3" fill="#8b5cf6"/>
<circle cx="350" cy="989" r="3" fill="#a78bfa"/>
<circle cx="361" cy="985" r="3" fill="#7c3aed"/>
<circle cx="345" cy="991" r="2" fill="#c4b5fd"/>
</g>

<ellipse cx="429" cy="1006" rx="40" ry="8" fill="url(#uk-shadoww)"/>
<g data-obj="kettle">
<path d="M400 1000 Q397 968 429 964 Q461 968 458 1000 Z" fill="url(#uk-steel)"/>
<path d="M431 964 Q464 968 458 1000 L442 1000 Q447 970 431 964 Z" fill="#7d8a97"/>
<ellipse cx="412" cy="980" rx="7" ry="13" fill="#ffffff" opacity="0.55"/>
<path d="M458 976 Q466 972 464 963" fill="none" stroke="#8d99a6" stroke-width="6"/>
<path d="M406 964 Q429 949 452 964" fill="none" stroke="#a8b3bf" stroke-width="5"/>
<ellipse cx="429" cy="964" rx="15" ry="4" fill="#7d8a97"/>
<circle cx="429" cy="956" r="5" fill="url(#uk-goldv)"/>
</g>

<ellipse cx="496" cy="1004" rx="26" ry="6" fill="url(#uk-shadoww)"/>
<g data-obj="candle">
<ellipse cx="496" cy="998" rx="16" ry="6" fill="url(#uk-gold)"/>
<rect x="492" y="988" width="8" height="12" fill="#c9a253"/>
<ellipse cx="496" cy="988" rx="10" ry="4" fill="#e6c47a"/>
<rect x="490" y="950" width="12" height="40" rx="3" fill="url(#uk-purple)"/>
<rect x="490" y="950" width="4" height="40" rx="2" fill="#c3aef6" opacity="0.75"/>
<ellipse cx="496" cy="950" rx="6" ry="3" fill="#c4b5fd"/>
<ellipse cx="496" cy="941" rx="4" ry="8" fill="url(#uk-flame)"/>
</g>
<ellipse cx="496" cy="940" rx="26" ry="26" fill="url(#uk-glow)" opacity="0.45"/>

<rect x="546" y="924" width="46" height="6" rx="2" fill="#443a33"/>
<rect x="584" y="928" width="6" height="12" fill="#443a33"/>
<g data-obj="oil-lamp">
<ellipse cx="569" cy="986" rx="21" ry="6" fill="#b8862f"/>
<path d="M553 986 Q551 970 569 968 Q587 970 585 986 Z" fill="url(#uk-gold)"/>
<path d="M571 968 Q587 970 585 986 L574 986 Q576 972 571 968 Z" fill="#9a7026"/>
<rect x="559" y="948" width="20" height="22" fill="#fbe0aa" opacity="0.9"/>
<rect x="560" y="950" width="6" height="18" fill="#fff6de" opacity="0.8"/>
<rect x="557" y="942" width="24" height="7" rx="2" fill="#9a7026"/>
<rect x="564" y="953" width="4" height="12" fill="#d5642f"/>
</g>
<ellipse cx="569" cy="958" rx="36" ry="32" fill="url(#uk-glow)" opacity="0.5"/>

<ellipse cx="272" cy="1166" rx="38" ry="9" fill="url(#uk-shadoww)"/>
<g data-obj="teddy-bear">
<ellipse cx="272" cy="1140" rx="21" ry="20" fill="url(#uk-fur)"/>
<ellipse cx="250" cy="1138" rx="7" ry="9" fill="#c07f43"/>
<ellipse cx="294" cy="1138" rx="7" ry="9" fill="#98592a"/>
<ellipse cx="262" cy="1158" rx="8" ry="6" fill="#c07f43"/>
<ellipse cx="282" cy="1158" rx="8" ry="6" fill="#a86736"/>
<ellipse cx="272" cy="1144" rx="13" ry="12" fill="#f0c294"/>
<circle cx="260" cy="1102" r="7" fill="#c07f43"/>
<circle cx="284" cy="1102" r="7" fill="#a86736"/>
<circle cx="272" cy="1114" r="15" fill="url(#uk-fur)"/>
<circle cx="266" cy="1108" r="6" fill="#f0b880" opacity="0.5"/>
<ellipse cx="272" cy="1118" rx="8" ry="6" fill="#f6dcbb"/>
<ellipse cx="272" cy="1115" rx="3" ry="2" fill="#3a2a22"/>
<circle cx="266" cy="1109" r="2" fill="#3a2a22"/>
<circle cx="278" cy="1109" r="2" fill="#3a2a22"/>
<rect x="260" y="1126" width="24" height="5" fill="#b8404a"/>
</g>

<ellipse cx="456" cy="1162" rx="44" ry="10" fill="url(#uk-shadoww)"/>
<g data-obj="corgi">
<ellipse cx="460" cy="1134" rx="27" ry="19" fill="url(#uk-fur)"/>
<ellipse cx="482" cy="1122" rx="7" ry="6" fill="#b8722f"/>
<ellipse cx="458" cy="1142" rx="21" ry="10" fill="#f6e8d2"/>
<ellipse cx="440" cy="1152" rx="8" ry="5" fill="#f6e8d2"/>
<ellipse cx="459" cy="1154" rx="8" ry="5" fill="#e8d5bb"/>
<circle cx="435" cy="1116" r="17" fill="#e8a05c"/>
<circle cx="428" cy="1109" r="7" fill="#f6c795" opacity="0.5"/>
<polygon points="423,1104 427,1090 436,1103" fill="#c67a37"/>
<polygon points="425,1102 428,1094 433,1102" fill="#f6c795"/>
<polygon points="441,1102 449,1090 455,1102" fill="#c67a37"/>
<polygon points="443,1101 448,1094 452,1101" fill="#f6c795"/>
<path d="M434 1101 L439 1117 L430 1117 Z" fill="#f9f0e0"/>
<ellipse cx="426" cy="1123" rx="9" ry="7" fill="#f9f0e0"/>
<ellipse cx="419" cy="1120" rx="3" ry="2.5" fill="#3a2a22"/>
<path d="M421 1127 Q426 1131 431 1127" fill="none" stroke="#3a2a22" stroke-width="1.5"/>
<circle cx="430" cy="1110" r="2.5" fill="#3a2a22"/>
<circle cx="444" cy="1112" r="2.5" fill="#3a2a22"/>
<circle cx="431" cy="1109" r="1" fill="#ffffff"/>
<ellipse cx="425" cy="1131" rx="4" ry="2.5" fill="#e8a1a8" opacity="0.5"/>
</g>
<ellipse cx="536" cy="1160" rx="32" ry="8" fill="url(#uk-shadoww)"/>
<ellipse cx="538" cy="1140" rx="26" ry="17" fill="#5e666f"/>
<ellipse cx="534" cy="1144" rx="17" ry="11" fill="#767e88"/>
<circle cx="516" cy="1124" r="14" fill="#6a727c"/>
<polygon points="505,1119 507,1106 515,1116" fill="#4a5058"/>
<polygon points="519,1115 528,1104 530,1118" fill="#4a5058"/>
<ellipse cx="510" cy="1129" rx="7" ry="5" fill="#818994"/>
<ellipse cx="506" cy="1121" rx="3" ry="4" fill="#e6bd5e"/>
<ellipse cx="518" cy="1122" rx="3" ry="4" fill="#e6bd5e"/>
<path d="M560 1150 Q574 1142 568 1128" fill="none" stroke="#4a5058" stroke-width="7"/>

<ellipse cx="698" cy="1192" rx="120" ry="16" fill="url(#uk-shadoww)"/>
<rect x="600" y="906" width="196" height="284" fill="url(#uk-woodh)"/>
<rect x="600" y="906" width="196" height="5" fill="#b0803f"/>
<rect x="610" y="916" width="176" height="264" fill="url(#uk-cabback)"/>
<rect x="610" y="916" width="176" height="264" fill="url(#uk-glow)" opacity="0.18"/>
<rect x="610" y="916" width="176" height="7" fill="#1c1108" opacity="0.6"/>
<rect x="600" y="906" width="11" height="284" fill="#5c3f26"/>
<rect x="785" y="906" width="11" height="284" fill="#4a3220"/>
<rect x="610" y="1000" width="176" height="10" fill="#7a5634"/>
<rect x="610" y="1000" width="176" height="3" fill="#c99a5e"/>
<rect x="610" y="1092" width="176" height="10" fill="#7a5634"/>
<rect x="610" y="1092" width="176" height="3" fill="#c99a5e"/>
<rect x="600" y="1180" width="196" height="10" fill="#8a6339"/>
<rect x="600" y="1180" width="196" height="3" fill="#b0803f"/>
<path d="M612 922 L784 922" fill="none" stroke="#7a5634" stroke-width="2"/>
<polygon points="626,922 644,922 635,938" fill="#b8404a" opacity="0.85"/>
<polygon points="668,922 686,922 677,938" fill="#3f6f8c" opacity="0.85"/>
<polygon points="710,922 728,922 719,938" fill="#e6bd5e" opacity="0.85"/>
<polygon points="752,922 770,922 761,938" fill="#5c7a4e" opacity="0.85"/>

<ellipse cx="642" cy="1000" rx="24" ry="5" fill="#160d06" opacity="0.5"/>
<path d="M622 990 L626 968 L634 982 L642 964 L650 982 L658 968 L662 990 Z" fill="url(#uk-steel)"/>
<rect x="620" y="986" width="44" height="12" rx="5" fill="#a8b3bd"/>
<rect x="620" y="986" width="44" height="4" rx="2" fill="#d3dbe1"/>
<ellipse cx="716" cy="1000" rx="30" ry="5" fill="#160d06" opacity="0.55"/>
<g data-obj="crown">
<path d="M690 984 L695 958 L704 974 L716 950 L728 974 L737 958 L742 984 Z" fill="url(#uk-gold)"/>
<path d="M716 950 L728 974 L737 958 L742 984 L718 984 Z" fill="#9a7026"/>
<path d="M695 964 L699 972 L704 978" fill="none" stroke="#fdf0c8" stroke-width="2.5" opacity="0.7"/>
<rect x="688" y="980" width="56" height="15" rx="5" fill="#d9ab48"/>
<rect x="688" y="980" width="56" height="5" rx="2" fill="#f6dfa0"/>
<rect x="688" y="990" width="56" height="5" rx="2" fill="#a87c30"/>
<circle cx="716" cy="987" r="4.5" fill="#7c3aed"/>
<circle cx="700" cy="987" r="3.5" fill="#b83a3a"/>
<circle cx="732" cy="987" r="3.5" fill="#3a6fb8"/>
<circle cx="716" cy="948" r="3.5" fill="#fbe8b8"/>
<circle cx="695" cy="956" r="3.5" fill="#fbe8b8"/>
<circle cx="737" cy="956" r="3.5" fill="#fbe8b8"/>
</g>
<ellipse cx="766" cy="1000" rx="22" ry="5" fill="#160d06" opacity="0.5"/>
<path d="M748 990 L751 970 L758 982 L766 966 L774 982 L781 970 L784 990 Z" fill="url(#uk-gold)"/>
<rect x="746" y="986" width="40" height="12" rx="5" fill="#d9ab48"/>
<circle cx="766" cy="992" r="4" fill="#b83a3a"/>

<ellipse cx="638" cy="1092" rx="26" ry="5" fill="#160d06" opacity="0.5"/>
<rect x="614" y="1064" width="50" height="22" rx="6" fill="url(#uk-green)"/>
<rect x="614" y="1064" width="50" height="7" rx="4" fill="#8ec277"/>
<rect x="618" y="1072" width="14" height="9" rx="2" fill="#a9bfd0"/>
<rect x="636" y="1072" width="14" height="9" rx="2" fill="#bcd0de"/>
<circle cx="625" cy="1088" r="6" fill="#252a30"/>
<circle cx="653" cy="1088" r="6" fill="#252a30"/>
<ellipse cx="705" cy="1092" rx="36" ry="6" fill="#160d06" opacity="0.55"/>
<g data-obj="toy-bus">
<rect x="672" y="1058" width="66" height="30" rx="5" fill="url(#uk-redv)"/>
<rect x="672" y="1058" width="66" height="9" rx="4" fill="#ea6262"/>
<rect x="672" y="1058" width="8" height="30" rx="4" fill="#f28a8a" opacity="0.55"/>
<rect x="672" y="1072" width="66" height="4" fill="#f6ebd4"/>
<rect x="676" y="1061" width="12" height="9" rx="2" fill="#a9bfd0"/>
<rect x="691" y="1061" width="12" height="9" rx="2" fill="#c6d8e4"/>
<rect x="706" y="1061" width="12" height="9" rx="2" fill="#a9bfd0"/>
<rect x="721" y="1061" width="13" height="9" rx="2" fill="#c6d8e4"/>
<rect x="676" y="1078" width="16" height="8" rx="2" fill="#a9bfd0"/>
<rect x="696" y="1078" width="16" height="8" rx="2" fill="#c6d8e4"/>
<rect x="716" y="1078" width="18" height="8" rx="2" fill="#9db3c4"/>
<circle cx="687" cy="1090" r="6" fill="#252a30"/>
<circle cx="687" cy="1090" r="2.5" fill="#6a727c"/>
<circle cx="723" cy="1090" r="6" fill="#252a30"/>
<circle cx="723" cy="1090" r="2.5" fill="#6a727c"/>
</g>
<ellipse cx="765" cy="1092" rx="24" ry="5" fill="#160d06" opacity="0.5"/>
<rect x="744" y="1068" width="44" height="20" rx="6" fill="#2b2f35"/>
<rect x="744" y="1068" width="44" height="6" rx="4" fill="#4b535e"/>
<rect x="749" y="1074" width="13" height="8" rx="2" fill="#a9bfd0"/>
<rect x="766" y="1074" width="13" height="8" rx="2" fill="#c6d8e4"/>
<circle cx="755" cy="1090" r="6" fill="#1c2127"/>
<circle cx="779" cy="1090" r="6" fill="#1c2127"/>

<ellipse cx="640" cy="1180" rx="28" ry="6" fill="#160d06" opacity="0.5"/>
<path d="M616 1176 L620 1146 L662 1146 L664 1176 Z" fill="url(#uk-woodh)"/>
<path d="M618 1152 L663 1152" fill="none" stroke="#5a3b1e" stroke-width="3"/>
<path d="M617 1164 L664 1164" fill="none" stroke="#5a3b1e" stroke-width="3"/>
<ellipse cx="718" cy="1180" rx="32" ry="6" fill="#160d06" opacity="0.55"/>
<g data-obj="yarn-ball">
<circle cx="718" cy="1152" r="28" fill="url(#uk-plum)"/>
<circle cx="708" cy="1143" r="17" fill="#b07e8b" opacity="0.5"/>
<path d="M696 1143 Q718 1134 740 1147" fill="none" stroke="#582d36" stroke-width="2.5"/>
<path d="M694 1159 Q718 1150 742 1161" fill="none" stroke="#582d36" stroke-width="2.5"/>
<path d="M742 1164 Q756 1170 750 1180" fill="none" stroke="#8a4a57" stroke-width="4"/>
</g>
<ellipse cx="770" cy="1180" rx="20" ry="5" fill="#160d06" opacity="0.5"/>
<ellipse cx="770" cy="1166" rx="15" ry="14" fill="url(#uk-fur)"/>
<circle cx="770" cy="1146" r="11" fill="#e6a066"/>
<circle cx="761" cy="1139" r="5" fill="#c07f43"/>
<circle cx="779" cy="1139" r="5" fill="#c07f43"/>
<circle cx="766" cy="1145" r="2" fill="#3a2a22"/>
<circle cx="774" cy="1145" r="2" fill="#3a2a22"/>

<ellipse cx="30" cy="1196" rx="150" ry="22" fill="#22150a" opacity="0.3"/>
<ellipse cx="780" cy="1198" rx="150" ry="22" fill="#22150a" opacity="0.3"/>
</svg>`
});
