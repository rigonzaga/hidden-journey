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
<stop offset="0" stop-color="#e2e9f0"/>
<stop offset="0.45" stop-color="#bdc9d5"/>
<stop offset="1" stop-color="#93a3b4"/>
</linearGradient>
<radialGradient id="uk-cloud" cx="0.5" cy="0.5" r="0.5">
<stop offset="0" stop-color="#f2f6fa" stop-opacity="0.62"/>
<stop offset="0.6" stop-color="#e3eaf1" stop-opacity="0.3"/>
<stop offset="1" stop-color="#e3eaf1" stop-opacity="0"/>
</radialGradient>
<linearGradient id="uk-mist" x1="0" y1="0" x2="0" y2="1">
<stop offset="0" stop-color="#ccd6df" stop-opacity="0"/>
<stop offset="1" stop-color="#ccd6df" stop-opacity="0.95"/>
</linearGradient>
<linearGradient id="uk-far" x1="0" y1="0" x2="0" y2="1">
<stop offset="0" stop-color="#b3c0ce"/>
<stop offset="1" stop-color="#8e9daf"/>
</linearGradient>
<linearGradient id="uk-farh" x1="0" y1="0" x2="1" y2="0">
<stop offset="0" stop-color="#adbbc9"/>
<stop offset="0.45" stop-color="#93a2b3"/>
<stop offset="1" stop-color="#78889b"/>
</linearGradient>
<linearGradient id="uk-brick" x1="0" y1="0" x2="1" y2="0">
<stop offset="0" stop-color="#a06b5b"/>
<stop offset="0.5" stop-color="#82554a"/>
<stop offset="1" stop-color="#5c3a33"/>
</linearGradient>
<linearGradient id="uk-brickd" x1="0" y1="0" x2="1" y2="0">
<stop offset="0" stop-color="#7e5548"/>
<stop offset="1" stop-color="#54352f"/>
</linearGradient>
<linearGradient id="uk-stone" x1="0" y1="0" x2="1" y2="0">
<stop offset="0" stop-color="#847170"/>
<stop offset="0.5" stop-color="#69595a"/>
<stop offset="1" stop-color="#4b3f42"/>
</linearGradient>
<linearGradient id="uk-cap" x1="0" y1="0" x2="0" y2="1">
<stop offset="0" stop-color="#5b6470"/>
<stop offset="1" stop-color="#3b424c"/>
</linearGradient>
<linearGradient id="uk-sill" x1="0" y1="0" x2="0" y2="1">
<stop offset="0" stop-color="#d9cdba"/>
<stop offset="1" stop-color="#9a8d7c"/>
</linearGradient>
<linearGradient id="uk-winlit" x1="0" y1="0" x2="0" y2="1">
<stop offset="0" stop-color="#ffe0a2"/>
<stop offset="0.6" stop-color="#f0bd60"/>
<stop offset="1" stop-color="#cf9a45"/>
</linearGradient>
<linearGradient id="uk-windark" x1="0" y1="0" x2="0" y2="1">
<stop offset="0" stop-color="#7a8ea3"/>
<stop offset="1" stop-color="#48586a"/>
</linearGradient>
<linearGradient id="uk-pave" x1="0" y1="0" x2="0" y2="1">
<stop offset="0" stop-color="#a3acb8"/>
<stop offset="1" stop-color="#7d8794"/>
</linearGradient>
<linearGradient id="uk-road" x1="0" y1="0" x2="0" y2="1">
<stop offset="0" stop-color="#39434f"/>
<stop offset="0.45" stop-color="#4c5765"/>
<stop offset="1" stop-color="#5f6c7c"/>
</linearGradient>
<linearGradient id="uk-wet" x1="0" y1="0" x2="0" y2="1">
<stop offset="0" stop-color="#dbe6f0" stop-opacity="0"/>
<stop offset="0.55" stop-color="#cfe0ee" stop-opacity="0.14"/>
<stop offset="1" stop-color="#e6f0f8" stop-opacity="0.34"/>
</linearGradient>
<linearGradient id="uk-reflc" x1="0" y1="0" x2="0" y2="1">
<stop offset="0" stop-color="#cfe0ee" stop-opacity="0.5"/>
<stop offset="1" stop-color="#cfe0ee" stop-opacity="0"/>
</linearGradient>
<linearGradient id="uk-reflw" x1="0" y1="0" x2="0" y2="1">
<stop offset="0" stop-color="#ffd490" stop-opacity="0.55"/>
<stop offset="1" stop-color="#ffd490" stop-opacity="0"/>
</linearGradient>
<linearGradient id="uk-reflr" x1="0" y1="0" x2="0" y2="1">
<stop offset="0" stop-color="#e05a52" stop-opacity="0.45"/>
<stop offset="1" stop-color="#e05a52" stop-opacity="0"/>
</linearGradient>
<radialGradient id="uk-glow" cx="0.5" cy="0.5" r="0.5">
<stop offset="0" stop-color="#ffdd9c" stop-opacity="0.85"/>
<stop offset="0.55" stop-color="#ffcf83" stop-opacity="0.34"/>
<stop offset="1" stop-color="#ffcf83" stop-opacity="0"/>
</radialGradient>
<radialGradient id="uk-shadow" cx="0.5" cy="0.5" r="0.5">
<stop offset="0" stop-color="#141a22" stop-opacity="0.5"/>
<stop offset="0.55" stop-color="#141a22" stop-opacity="0.26"/>
<stop offset="1" stop-color="#141a22" stop-opacity="0"/>
</radialGradient>
<radialGradient id="uk-shadoww" cx="0.5" cy="0.5" r="0.5">
<stop offset="0" stop-color="#33200f" stop-opacity="0.52"/>
<stop offset="0.55" stop-color="#33200f" stop-opacity="0.26"/>
<stop offset="1" stop-color="#33200f" stop-opacity="0"/>
</radialGradient>
<linearGradient id="uk-glass" x1="0" y1="0" x2="1" y2="1">
<stop offset="0" stop-color="#ffffff" stop-opacity="0.2"/>
<stop offset="0.5" stop-color="#dceaf4" stop-opacity="0.07"/>
<stop offset="1" stop-color="#ffffff" stop-opacity="0.02"/>
</linearGradient>
<linearGradient id="uk-gold" x1="0" y1="0" x2="1" y2="0">
<stop offset="0" stop-color="#f5dc9c"/>
<stop offset="0.4" stop-color="#e0b055"/>
<stop offset="1" stop-color="#9c7228"/>
</linearGradient>
<linearGradient id="uk-goldv" x1="0" y1="0" x2="0" y2="1">
<stop offset="0" stop-color="#f6dfa0"/>
<stop offset="1" stop-color="#b8862f"/>
</linearGradient>
<linearGradient id="uk-steel" x1="0" y1="0" x2="1" y2="0">
<stop offset="0" stop-color="#eef4f7"/>
<stop offset="0.4" stop-color="#c2ccd5"/>
<stop offset="1" stop-color="#87939f"/>
</linearGradient>
<linearGradient id="uk-porc" x1="0" y1="0" x2="1" y2="0">
<stop offset="0" stop-color="#fffaf0"/>
<stop offset="0.38" stop-color="#f2e9d6"/>
<stop offset="1" stop-color="#c9bda6"/>
</linearGradient>
<linearGradient id="uk-porcw" x1="0" y1="0" x2="1" y2="0">
<stop offset="0" stop-color="#fff6e4"/>
<stop offset="0.4" stop-color="#f0e2c8"/>
<stop offset="1" stop-color="#bfa886"/>
</linearGradient>
<linearGradient id="uk-red" x1="0" y1="0" x2="1" y2="0">
<stop offset="0" stop-color="#e05a5a"/>
<stop offset="0.35" stop-color="#c53232"/>
<stop offset="1" stop-color="#7d1818"/>
</linearGradient>
<linearGradient id="uk-redv" x1="0" y1="0" x2="0" y2="1">
<stop offset="0" stop-color="#d84545"/>
<stop offset="1" stop-color="#8a1c1c"/>
</linearGradient>
<linearGradient id="uk-plum" x1="0" y1="0" x2="1" y2="0">
<stop offset="0" stop-color="#a97180"/>
<stop offset="0.4" stop-color="#8a4a57"/>
<stop offset="1" stop-color="#5a2f38"/>
</linearGradient>
<linearGradient id="uk-blue" x1="0" y1="0" x2="1" y2="0">
<stop offset="0" stop-color="#5e8ba6"/>
<stop offset="0.4" stop-color="#3f6f8c"/>
<stop offset="1" stop-color="#254a60"/>
</linearGradient>
<linearGradient id="uk-navy" x1="0" y1="0" x2="1" y2="0">
<stop offset="0" stop-color="#5a748d"/>
<stop offset="0.4" stop-color="#3d5872"/>
<stop offset="1" stop-color="#25384c"/>
</linearGradient>
<linearGradient id="uk-teal" x1="0" y1="0" x2="1" y2="0">
<stop offset="0" stop-color="#4fa8ac"/>
<stop offset="0.4" stop-color="#2f7f83"/>
<stop offset="1" stop-color="#1a565c"/>
</linearGradient>
<linearGradient id="uk-green" x1="0" y1="0" x2="1" y2="0">
<stop offset="0" stop-color="#79a866"/>
<stop offset="0.4" stop-color="#54804a"/>
<stop offset="1" stop-color="#33512f"/>
</linearGradient>
<linearGradient id="uk-copper" x1="0" y1="0" x2="1" y2="0">
<stop offset="0" stop-color="#cf8a5e"/>
<stop offset="0.4" stop-color="#a9603f"/>
<stop offset="1" stop-color="#6f3a24"/>
</linearGradient>
<linearGradient id="uk-purple" x1="0" y1="0" x2="1" y2="0">
<stop offset="0" stop-color="#b79cf0"/>
<stop offset="0.38" stop-color="#7c4fd0"/>
<stop offset="1" stop-color="#4a2b86"/>
</linearGradient>
<linearGradient id="uk-wood" x1="0" y1="0" x2="0" y2="1">
<stop offset="0" stop-color="#b58455"/>
<stop offset="1" stop-color="#75502f"/>
</linearGradient>
<linearGradient id="uk-woodh" x1="0" y1="0" x2="1" y2="0">
<stop offset="0" stop-color="#b98a58"/>
<stop offset="0.4" stop-color="#8f6537"/>
<stop offset="1" stop-color="#5c3d20"/>
</linearGradient>
<linearGradient id="uk-ledge" x1="0" y1="0" x2="0" y2="1">
<stop offset="0" stop-color="#e6c28c"/>
<stop offset="1" stop-color="#b58a55"/>
</linearGradient>
<linearGradient id="uk-floor" x1="0" y1="0" x2="0" y2="1">
<stop offset="0" stop-color="#7a5733"/>
<stop offset="1" stop-color="#48311e"/>
</linearGradient>
<linearGradient id="uk-tray" x1="0" y1="0" x2="0" y2="1">
<stop offset="0" stop-color="#3f2c1b"/>
<stop offset="1" stop-color="#5c422a"/>
</linearGradient>
<linearGradient id="uk-flame" x1="0" y1="0" x2="0" y2="1">
<stop offset="0" stop-color="#fff3c8"/>
<stop offset="1" stop-color="#f0a63f"/>
</linearGradient>
<linearGradient id="uk-fur" x1="0" y1="0" x2="1" y2="0">
<stop offset="0" stop-color="#eaa768"/>
<stop offset="0.4" stop-color="#d1874a"/>
<stop offset="1" stop-color="#9c5c2c"/>
</linearGradient>
<linearGradient id="uk-zinc" x1="0" y1="0" x2="1" y2="0">
<stop offset="0" stop-color="#78a0a6"/>
<stop offset="0.4" stop-color="#4f6f74"/>
<stop offset="1" stop-color="#32484d"/>
</linearGradient>
<linearGradient id="uk-cone" x1="0" y1="0" x2="0" y2="1">
<stop offset="0" stop-color="#fff0c8" stop-opacity="0.9"/>
<stop offset="1" stop-color="#ffd07a" stop-opacity="0.05"/>
</linearGradient>
</defs>

<rect x="0" y="0" width="800" height="1200" fill="#5a3e26"/>
<rect x="0" y="0" width="800" height="652" fill="url(#uk-sky)"/>
<ellipse cx="180" cy="78" rx="168" ry="40" fill="url(#uk-cloud)"/>
<ellipse cx="632" cy="56" rx="176" ry="34" fill="url(#uk-cloud)"/>
<ellipse cx="428" cy="126" rx="146" ry="28" fill="url(#uk-cloud)" opacity="0.75"/>
<rect x="0" y="150" width="800" height="230" fill="url(#uk-mist)" opacity="0.55"/>

<polygon points="628,92 642,124 614,124" fill="url(#uk-far)"/>
<rect x="616" y="122" width="24" height="16" fill="url(#uk-farh)"/>
<rect x="604" y="136" width="48" height="26" fill="url(#uk-farh)"/>
<rect x="600" y="160" width="56" height="54" fill="url(#uk-farh)"/>
<rect x="600" y="160" width="56" height="5" fill="#c2cedb"/>
<g data-obj="clock-face">
<circle cx="628" cy="188" r="20" fill="url(#uk-far)"/>
<circle cx="628" cy="188" r="15" fill="#e6ecf2"/>
<circle cx="628" cy="188" r="15" fill="url(#uk-cloud)" opacity="0.6"/>
<path d="M614 180 Q628 172 642 180" fill="none" stroke="#ffffff" stroke-width="3" opacity="0.55"/>
<rect x="626" y="176" width="4" height="14" fill="#5f6d7d"/>
<rect x="628" y="186" width="12" height="4" fill="#5f6d7d"/>
<circle cx="628" cy="188" r="2.5" fill="#47535f"/>
</g>
<rect x="596" y="212" width="64" height="10" fill="url(#uk-farh)"/>
<rect x="602" y="222" width="52" height="182" fill="url(#uk-farh)"/>
<rect x="602" y="222" width="9" height="182" fill="#c0cddb" opacity="0.4"/>

<ellipse cx="486" cy="296" rx="48" ry="36" fill="url(#uk-farh)"/>
<ellipse cx="468" cy="290" rx="26" ry="21" fill="#c3d0dd" opacity="0.4"/>
<rect x="440" y="294" width="92" height="112" fill="url(#uk-farh)"/>
<rect x="440" y="294" width="92" height="6" fill="#c2cedb"/>
<rect x="482" y="248" width="8" height="24" fill="#94a3b4"/>

<g data-obj="ferris-wheel">
<circle cx="726" cy="246" r="33" fill="none" stroke="url(#uk-far)" stroke-width="5"/>
<circle cx="726" cy="246" r="8" fill="url(#uk-far)"/>
<line x1="726" y1="215" x2="726" y2="277" stroke="#a4b2c1" stroke-width="3"/>
<line x1="700" y1="231" x2="752" y2="261" stroke="#a4b2c1" stroke-width="3"/>
<line x1="700" y1="261" x2="752" y2="231" stroke="#a4b2c1" stroke-width="3"/>
<circle cx="726" cy="213" r="4" fill="#c3d0dd"/>
<circle cx="753" cy="262" r="4" fill="#c3d0dd"/>
</g>
<path d="M706 274 L720 252 L732 252 L746 274" fill="none" stroke="#9aa9b9" stroke-width="4" opacity="0.4"/>
<rect x="0" y="232" width="800" height="150" fill="url(#uk-mist)" opacity="0.28"/>

<g data-obj="kite">
<polygon points="228,210 252,240 228,270 204,240" fill="#d2685f"/>
<polygon points="228,210 252,240 228,270" fill="#9d4038"/>
<polygon points="228,210 240,225 228,240 216,225" fill="#e5897d" opacity="0.8"/>
<path d="M228 212 L228 268" fill="none" stroke="#f6e8d2" stroke-width="2" opacity="0.85"/>
<path d="M206 240 L250 240" fill="none" stroke="#f6e8d2" stroke-width="2" opacity="0.85"/>
<path d="M228 270 Q219 276 227 282" fill="none" stroke="#e8dcc4" stroke-width="2"/>
<rect x="218" y="272" width="10" height="4" rx="2" fill="url(#uk-goldv)"/>
</g>

<rect x="-10" y="330" width="200" height="282" fill="url(#uk-brick)"/>
<rect x="-10" y="330" width="200" height="14" fill="url(#uk-cap)"/>
<rect x="-10" y="344" width="200" height="7" fill="#c08e79" opacity="0.85"/>
<rect x="172" y="351" width="14" height="261" fill="#4a2f29" opacity="0.5"/>
<rect x="-10" y="351" width="14" height="261" fill="#c08e79" opacity="0.2"/>
<rect x="24" y="292" width="28" height="40" fill="url(#uk-brickd)"/>
<rect x="27" y="282" width="9" height="12" fill="#96705f"/>
<rect x="41" y="282" width="9" height="12" fill="#96705f"/>
<rect x="112" y="378" width="46" height="60" fill="url(#uk-windark)" stroke="#3d4855" stroke-width="5"/>
<rect x="116" y="382" width="15" height="52" fill="#a8bccd" opacity="0.3"/>
<rect x="108" y="438" width="54" height="8" fill="url(#uk-sill)"/>
<rect x="110" y="446" width="50" height="12" rx="3" fill="url(#uk-copper)"/>
<circle cx="120" cy="444" r="7" fill="#6f9a5e"/>
<circle cx="134" cy="441" r="8" fill="#84b46f"/>
<circle cx="150" cy="445" r="6" fill="#5f8a52"/>
<rect x="16" y="486" width="46" height="60" fill="url(#uk-winlit)" stroke="#3d4855" stroke-width="5"/>
<rect x="20" y="490" width="38" height="22" fill="#fff0c4" opacity="0.4"/>
<rect x="12" y="546" width="54" height="8" fill="url(#uk-sill)"/>

<g data-obj="roof-flag">
<rect x="62" y="288" width="5" height="46" fill="url(#uk-woodh)"/>
<polygon points="67,292 107,301 67,313" fill="#a83741"/>
<polygon points="67,292 107,301 67,302" fill="#d95c67"/>
<polygon points="67,305 92,310 67,313" fill="#8a2a33"/>
<circle cx="64" cy="285" r="4.5" fill="url(#uk-goldv)"/>
</g>

<path d="M70 452 Q86 444 102 452" fill="none" stroke="#463c34" stroke-width="3"/>
<path d="M68 464 L104 464 L98 486 L74 486 Z" fill="url(#uk-copper)"/>
<circle cx="75" cy="492" r="7" fill="#5f8a52"/>
<circle cx="88" cy="496" r="8" fill="#7fae6b"/>

<g data-obj="flower-box">
<ellipse cx="38" cy="566" rx="28" ry="6" fill="url(#uk-shadow)"/>
<rect x="12" y="550" width="52" height="14" rx="3" fill="url(#uk-copper)"/>
<rect x="12" y="550" width="52" height="4" rx="2" fill="#d68a5f"/>
<circle cx="21" cy="547" r="7" fill="#c85a7a"/>
<circle cx="37" cy="542" r="9" fill="#e88fa8"/>
<circle cx="35" cy="540" r="4" fill="#f6bccb" opacity="0.8"/>
<circle cx="53" cy="547" r="6" fill="#b84f6d"/>
<circle cx="45" cy="552" r="5" fill="#6f9a5e"/>
</g>

<rect x="190" y="308" width="196" height="304" fill="url(#uk-stone)"/>
<rect x="190" y="308" width="196" height="14" fill="url(#uk-cap)"/>
<rect x="190" y="322" width="196" height="7" fill="#a08d88" opacity="0.85"/>
<rect x="368" y="329" width="14" height="283" fill="#3d3234" opacity="0.5"/>
<rect x="190" y="329" width="12" height="283" fill="#a08d88" opacity="0.18"/>
<rect x="216" y="272" width="28" height="38" fill="#59484a"/>
<rect x="219" y="262" width="9" height="12" fill="#82676a"/>
<rect x="233" y="262" width="9" height="12" fill="#82676a"/>
<rect x="214" y="356" width="46" height="62" fill="url(#uk-windark)" stroke="#3b444f" stroke-width="5"/>
<rect x="218" y="360" width="15" height="54" fill="#a8bccd" opacity="0.3"/>
<rect x="210" y="418" width="54" height="8" fill="url(#uk-sill)"/>
<rect x="312" y="356" width="46" height="62" fill="url(#uk-winlit)" stroke="#3b444f" stroke-width="5"/>
<rect x="316" y="360" width="38" height="22" fill="#fff0c4" opacity="0.4"/>
<rect x="308" y="418" width="54" height="8" fill="url(#uk-sill)"/>
<g data-obj="pigeon">
<ellipse cx="330" cy="408" rx="8" ry="4" fill="url(#uk-shadow)"/>
<ellipse cx="322" cy="404" rx="23" ry="14" fill="#7f8996"/>
<ellipse cx="318" cy="401" rx="17" ry="10" fill="#a6b0bd"/>
<ellipse cx="308" cy="400" rx="9" ry="6" fill="#646d7a"/>
<path d="M300 398 Q312 393 326 397" fill="none" stroke="#c2cbd6" stroke-width="2" opacity="0.7"/>
<circle cx="342" cy="390" r="9.5" fill="#8b95a2"/>
<circle cx="340" cy="387" r="5" fill="#b3bcc7" opacity="0.7"/>
<polygon points="350,389 360,392 350,396" fill="#e8b071"/>
<circle cx="344" cy="388" r="2.2" fill="#252a31"/>
<circle cx="345" cy="387" r="0.8" fill="#ffffff"/>
<rect x="320" y="416" width="4" height="6" fill="#d99a5e"/>
</g>

<g data-obj="pub-sign">
<rect x="196" y="452" width="42" height="5" fill="#443a33"/>
<rect x="222" y="456" width="6" height="14" fill="#443a33"/>
<rect x="206" y="468" width="38" height="32" rx="4" fill="url(#uk-navy)"/>
<rect x="206" y="468" width="38" height="6" rx="3" fill="#7392ac"/>
<circle cx="225" cy="484" r="8" fill="url(#uk-goldv)"/>
<circle cx="223" cy="482" r="3.5" fill="#f8e6b4" opacity="0.85"/>
<rect x="206" y="494" width="38" height="6" rx="3" fill="#1c2c3c" opacity="0.6"/>
</g>

<rect x="386" y="348" width="188" height="264" fill="url(#uk-brick)"/>
<rect x="386" y="348" width="188" height="14" fill="url(#uk-cap)"/>
<rect x="386" y="362" width="188" height="7" fill="#c08e79" opacity="0.85"/>
<rect x="558" y="369" width="12" height="243" fill="#4a2f29" opacity="0.5"/>
<rect x="386" y="369" width="12" height="243" fill="#c08e79" opacity="0.2"/>
<rect x="500" y="392" width="44" height="58" fill="url(#uk-winlit)" stroke="#3f4a56" stroke-width="5"/>
<rect x="504" y="396" width="36" height="20" fill="#fff0c4" opacity="0.4"/>
<rect x="496" y="450" width="52" height="8" fill="url(#uk-sill)"/>
<polygon points="470,470 540,470 534,502 476,502" fill="url(#uk-navy)"/>
<polygon points="470,470 540,470 538,480 472,480" fill="#6a8aa5"/>
<polygon points="482,470 498,470 494,502 480,502" fill="#efe3cc" opacity="0.5"/>
<polygon points="476,498 534,498 534,502 476,502" fill="#1c2c3c" opacity="0.5"/>

<rect x="574" y="326" width="236" height="286" fill="url(#uk-stone)"/>
<rect x="574" y="326" width="236" height="14" fill="url(#uk-cap)"/>
<rect x="574" y="340" width="236" height="7" fill="#a08d88" opacity="0.85"/>
<rect x="574" y="347" width="12" height="265" fill="#a08d88" opacity="0.18"/>
<rect x="690" y="372" width="46" height="60" fill="url(#uk-windark)" stroke="#3b444f" stroke-width="5"/>
<rect x="694" y="376" width="15" height="52" fill="#a8bccd" opacity="0.3"/>
<rect x="686" y="432" width="54" height="8" fill="url(#uk-sill)"/>
<rect x="686" y="440" width="50" height="12" rx="3" fill="url(#uk-copper)"/>
<circle cx="696" cy="440" r="7" fill="#5f8a52"/>
<circle cx="710" cy="437" r="8" fill="#84b46f"/>
<circle cx="726" cy="441" r="6" fill="#6f9a5e"/>
<rect x="690" y="474" width="46" height="60" fill="url(#uk-winlit)" stroke="#3b444f" stroke-width="5"/>
<rect x="694" y="478" width="38" height="22" fill="#fff0c4" opacity="0.4"/>
<rect x="686" y="534" width="54" height="8" fill="url(#uk-sill)"/>
<rect x="744" y="502" width="6" height="5" fill="#3a414b"/>
<path d="M747 505 L772 505" fill="none" stroke="#3a414b" stroke-width="4"/>
<polygon points="758,514 782,514 778,540 762,540" fill="#f9dda6"/>
<polygon points="758,514 782,514 780,520 760,520" fill="#3a414b"/>
<polygon points="762,540 778,540 780,546 760,546" fill="#3a414b"/>
<ellipse cx="770" cy="530" rx="26" ry="24" fill="url(#uk-glow)" opacity="0.5"/>

<rect x="0" y="596" width="800" height="36" fill="url(#uk-pave)"/>
<rect x="0" y="596" width="800" height="5" fill="#b0b9c4"/>
<rect x="0" y="626" width="800" height="8" fill="#606a76"/>
<rect x="0" y="632" width="800" height="84" fill="url(#uk-road)"/>
<rect x="0" y="632" width="800" height="84" fill="url(#uk-wet)"/>
<rect x="120" y="678" width="72" height="6" fill="#cdd6de" opacity="0.24"/>
<rect x="0" y="714" width="800" height="12" fill="#727c89"/>
<rect x="0" y="724" width="800" height="46" fill="url(#uk-pave)"/>
<rect x="0" y="724" width="800" height="5" fill="#a6afba"/>
<rect x="560" y="730" width="92" height="36" fill="#98a1ad" opacity="0.42"/>
<ellipse cx="120" cy="700" rx="94" ry="17" fill="url(#uk-reflc)"/>
<ellipse cx="616" cy="698" rx="98" ry="18" fill="url(#uk-reflw)"/>
<ellipse cx="360" cy="712" rx="78" ry="14" fill="url(#uk-reflc)"/>
<rect x="644" y="700" width="76" height="18" fill="url(#uk-reflr)"/>
<rect x="500" y="700" width="42" height="18" fill="url(#uk-reflw)"/>
<ellipse cx="722" cy="620" rx="30" ry="10" fill="#7f909f" opacity="0.75"/>
<ellipse cx="722" cy="618" rx="23" ry="7" fill="#a4b6c5" opacity="0.8"/>
<ellipse cx="716" cy="617" rx="10" ry="3" fill="#f0cf94" opacity="0.55"/>
<ellipse cx="188" cy="622" rx="26" ry="8" fill="#8b9ba9" opacity="0.75"/>
<ellipse cx="188" cy="621" rx="18" ry="5" fill="#b3c4d2" opacity="0.8"/>

<g data-obj="manhole">
<ellipse cx="72" cy="618" rx="32" ry="11" fill="#4c5764"/>
<ellipse cx="72" cy="614" rx="32" ry="11" fill="url(#uk-steel)" opacity="0.7"/>
<ellipse cx="72" cy="614" rx="32" ry="11" fill="#6d7986" opacity="0.55"/>
<ellipse cx="72" cy="613" rx="23" ry="7" fill="#5d6875"/>
<ellipse cx="66" cy="610" rx="12" ry="3" fill="#a4b1bd" opacity="0.45"/>
<circle cx="72" cy="613" r="4" fill="#4c5764"/>
</g>

<g data-obj="litter-bin">
<ellipse cx="34" cy="692" rx="30" ry="8" fill="url(#uk-shadow)"/>
<rect x="14" y="632" width="40" height="56" rx="5" fill="url(#uk-navy)"/>
<rect x="16" y="634" width="10" height="52" rx="4" fill="#7b93a9" opacity="0.55"/>
<rect x="49" y="634" width="4" height="52" rx="2" fill="#ffcf83" opacity="0.35"/>
<rect x="10" y="626" width="48" height="10" rx="4" fill="#2c3540"/>
<rect x="10" y="626" width="48" height="3" rx="2" fill="#54626f"/>
<rect x="20" y="652" width="28" height="4" fill="#617180" opacity="0.8"/>
</g>

<rect x="516" y="452" width="10" height="250" fill="#262c34"/>
<rect x="516" y="452" width="3.5" height="250" fill="#4d5661"/>
<rect x="521" y="452" width="3" height="250" fill="#ffcf83" opacity="0.16"/>
<rect x="504" y="688" width="34" height="14" fill="#1f242b"/>
<rect x="500" y="698" width="42" height="10" fill="#191d23"/>
<ellipse cx="521" cy="424" rx="52" ry="48" fill="url(#uk-glow)"/>
<g data-obj="street-lamp">
<polygon points="500,444 542,444 534,410 508,410" fill="#f9dda6"/>
<polygon points="504,442 520,442 516,412 510,412" fill="#fff6de" opacity="0.85"/>
<polygon points="500,444 542,444 538,451 504,451" fill="#262c34"/>
<polygon points="508,410 534,410 528,396 514,396" fill="#333a43"/>
<polygon points="508,410 534,410 533,414 509,414" fill="#5c6673"/>
<circle cx="521" cy="393" r="4" fill="#4d5661"/>
</g>
<polygon points="502,446 540,446 556,530 486,530" fill="url(#uk-cone)" opacity="0.35"/>

<ellipse cx="676" cy="706" rx="70" ry="12" fill="url(#uk-shadow)"/>
<rect x="628" y="470" width="106" height="232" fill="url(#uk-red)"/>
<rect x="622" y="452" width="118" height="22" fill="#a82525"/>
<rect x="622" y="452" width="118" height="6" fill="#d84545"/>
<rect x="626" y="444" width="110" height="10" fill="#7d1818"/>
<rect x="638" y="490" width="88" height="196" fill="url(#uk-redv)"/>
<rect x="638" y="490" width="11" height="196" fill="#ec6a6a" opacity="0.7"/>
<rect x="726" y="490" width="8" height="196" fill="#6a1212" opacity="0.7"/>
<rect x="650" y="500" width="66" height="54" fill="#7e8e9d"/>
<rect x="650" y="562" width="66" height="54" fill="#8b9aa8"/>
<rect x="650" y="624" width="66" height="54" fill="#7e8e9d"/>
<rect x="681" y="500" width="4" height="178" fill="#b52c2c"/>
<rect x="624" y="686" width="114" height="16" fill="#701515"/>
<rect x="644" y="458" width="70" height="10" fill="#eddcb8"/>

<g data-obj="post-box">
<ellipse cx="776" cy="704" rx="30" ry="8" fill="url(#uk-shadow)"/>
<rect x="758" y="636" width="36" height="62" rx="6" fill="url(#uk-red)"/>
<rect x="760" y="640" width="9" height="56" rx="4" fill="#ee7373" opacity="0.6"/>
<rect x="789" y="640" width="4" height="56" rx="2" fill="#ffcf83" opacity="0.3"/>
<ellipse cx="776" cy="636" rx="18" ry="7" fill="#c23232"/>
<ellipse cx="772" cy="634" rx="9" ry="3" fill="#e88080" opacity="0.6"/>
<rect x="764" y="652" width="24" height="6" rx="2" fill="#571010"/>
<rect x="754" y="694" width="44" height="8" rx="3" fill="#651313"/>
</g>

<ellipse cx="270" cy="708" rx="184" ry="14" fill="url(#uk-shadow)"/>
<rect x="104" y="506" width="330" height="180" rx="14" fill="url(#uk-red)"/>
<rect x="104" y="506" width="330" height="16" rx="8" fill="#e05a5a"/>
<rect x="104" y="596" width="330" height="12" fill="#eddcb8"/>
<rect x="104" y="608" width="330" height="78" fill="url(#uk-redv)"/>
<rect x="104" y="522" width="16" height="164" fill="#f08585" opacity="0.35"/>
<rect x="420" y="522" width="14" height="164" fill="#6a1212" opacity="0.45"/>
<rect x="124" y="526" width="76" height="46" rx="4" fill="#8ea0b0"/>
<rect x="210" y="526" width="76" height="46" rx="4" fill="#9aabba"/>
<rect x="210" y="526" width="76" height="16" rx="4" fill="#bccbd8" opacity="0.6"/>
<rect x="296" y="526" width="76" height="46" rx="4" fill="#8ea0b0"/>
<rect x="124" y="620" width="86" height="44" rx="4" fill="#8ea0b0"/>
<rect x="124" y="620" width="86" height="14" rx="4" fill="#b1c1cf" opacity="0.55"/>
<rect x="220" y="620" width="86" height="44" rx="4" fill="#93a4b3"/>
<rect x="386" y="616" width="34" height="70" fill="#8f1e1e"/>
<rect x="382" y="524" width="44" height="26" rx="4" fill="url(#uk-goldv)"/>
<circle cx="166" cy="690" r="24" fill="#1e232a"/>
<circle cx="166" cy="690" r="10" fill="#4a525b"/>
<circle cx="163" cy="686" r="4" fill="#727c88" opacity="0.7"/>
<circle cx="378" cy="690" r="24" fill="#1e232a"/>
<circle cx="378" cy="690" r="10" fill="#4a525b"/>

<g data-obj="bicycle">
<ellipse cx="580" cy="694" rx="38" ry="7" fill="url(#uk-shadow)"/>
<rect x="550" y="656" width="58" height="5" rx="2" fill="#2b333d"/>
<circle cx="561" cy="676" r="15" fill="none" stroke="#2b333d" stroke-width="4"/>
<circle cx="599" cy="676" r="15" fill="none" stroke="#2b333d" stroke-width="4"/>
<circle cx="561" cy="676" r="15" fill="none" stroke="#8ea0b0" stroke-width="1.5" opacity="0.5"/>
<circle cx="599" cy="676" r="15" fill="none" stroke="#8ea0b0" stroke-width="1.5" opacity="0.5"/>
<path d="M561 676 L579 654 L597 676" fill="none" stroke="url(#uk-steel)" stroke-width="4"/>
<path d="M579 654 L589 650" fill="none" stroke="#3a444f" stroke-width="4"/>
<circle cx="579" cy="651" r="4" fill="#5f6c78"/>
</g>

<rect x="207" y="612" width="9" height="28" fill="#39434e"/>
<circle cx="212" cy="600" r="10" fill="#dcb894"/>
<circle cx="209" cy="597" r="4" fill="#f0d3b2" opacity="0.7"/>
<path d="M190 616 Q212 590 234 616 Z" fill="#4a4f58"/>
<rect x="210" y="576" width="4" height="24" fill="#4c5a68"/>
<ellipse cx="212" cy="574" rx="33" ry="15" fill="url(#uk-teal)"/>
<ellipse cx="208" cy="570" rx="18" ry="6" fill="#6fc0c4" opacity="0.5"/>
<path d="M179 574 Q190 584 201 574 Q212 584 223 574 Q234 584 245 574 L245 571 L179 571 Z" fill="#256a70"/>

<rect x="292" y="612" width="9" height="26" fill="#39434e"/>
<circle cx="296" cy="600" r="10" fill="#e6c9a8"/>
<path d="M272 616 Q296 588 320 616 Z" fill="url(#uk-navy)"/>
<rect x="294" y="576" width="4" height="24" fill="#4c5a68"/>
<ellipse cx="296" cy="574" rx="34" ry="16" fill="url(#uk-plum)"/>
<ellipse cx="291" cy="570" rx="18" ry="6" fill="#bd8a97" opacity="0.5"/>
<path d="M262 574 Q274 584 285 574 Q296 584 307 574 Q318 584 330 574 L330 571 L262 571 Z" fill="#5a2f38"/>

<rect x="466" y="616" width="9" height="26" fill="#39434e"/>
<circle cx="470" cy="604" r="10" fill="#e6c9a8"/>
<path d="M450 620 Q470 594 490 620 Z" fill="#4d5a63"/>

<g data-obj="umbrella">
<circle cx="470" cy="544" r="4" fill="#dbe8f0"/>
<rect x="468" y="548" width="4" height="48" fill="url(#uk-steel)"/>
<path d="M436 570 Q436 548 470 548 Q504 548 504 570 Z" fill="url(#uk-navy)"/>
<path d="M470 548 Q504 548 504 570 L488 570 Q490 556 470 548 Z" fill="#25384c"/>
<path d="M470 548 Q452 550 444 570 L456 570 Q461 554 470 548 Z" fill="#8b5cf6"/>
<path d="M448 562 Q456 552 468 550" fill="none" stroke="#c9b6f8" stroke-width="3" opacity="0.6"/>
<path d="M436 570 Q447 581 458 570 Q470 581 482 570 Q493 581 504 570 L504 566 L436 566 Z" fill="#31485f"/>
<path d="M470 549 L470 570" fill="none" stroke="#20303f" stroke-width="2" opacity="0.7"/>
<path d="M488 553 L492 570" fill="none" stroke="#20303f" stroke-width="2" opacity="0.6"/>
<path d="M470 596 Q470 606 461 605" fill="none" stroke="#c0b089" stroke-width="5"/>
</g>

<g data-obj="traffic-cone">
<ellipse cx="466" cy="708" rx="30" ry="7" fill="url(#uk-shadow)"/>
<polygon points="466,654 482,700 450,700" fill="#e87a42"/>
<polygon points="466,654 482,700 468,700" fill="#b04e24"/>
<polygon points="466,654 474,678 462,678" fill="#f6a271" opacity="0.65"/>
<rect x="456" y="676" width="21" height="8" fill="#f6efdd"/>
<rect x="446" y="698" width="40" height="9" rx="3" fill="#d5642f"/>
<rect x="446" y="698" width="40" height="3" rx="2" fill="#f79b62"/>
</g>

<rect x="38" y="628" width="9" height="34" rx="4" fill="#2b333d"/>
<circle cx="42" cy="628" r="5" fill="#3d454e"/>
<rect x="452" y="626" width="9" height="32" rx="4" fill="#2b333d"/>
<circle cx="456" cy="624" r="5" fill="#a83741"/>

<g data-obj="purple-heart">
<path d="M492 695 C466 677 464 659 478 654 C484 652 490 657 492 663 C494 657 500 652 506 654 C520 659 518 677 492 695 Z" fill="url(#uk-purple)"/>
<path d="M492 695 C518 677 520 659 506 654 C503 653 500 654 497 656 C508 662 506 676 487 690 C489 692 490 693 492 695 Z" fill="#4a2b86"/>
<path d="M475 662 C477 657 483 656 486 661 C481 665 478 669 476 674 C473 670 473 665 475 662 Z" fill="#cbb8f5" opacity="0.8"/>
<path d="M478 690 Q492 698 506 688" fill="none" stroke="#c9b6f8" stroke-width="2" opacity="0.45"/>
</g>
<rect x="472" y="696" width="40" height="18" fill="url(#uk-reflw)" opacity="0.35"/>

<line x1="34" y1="150" x2="24" y2="198" stroke="#eef3f8" stroke-width="2" opacity="0.3"/>
<line x1="142" y1="180" x2="132" y2="228" stroke="#eef3f8" stroke-width="2" opacity="0.28"/>
<line x1="700" y1="288" x2="690" y2="336" stroke="#eef3f8" stroke-width="2" opacity="0.3"/>
<line x1="620" y1="500" x2="610" y2="548" stroke="#eef3f8" stroke-width="2" opacity="0.22"/>
<line x1="734" y1="470" x2="724" y2="518" stroke="#eef3f8" stroke-width="2" opacity="0.24"/>

<rect x="0" y="0" width="800" height="772" fill="url(#uk-glass)"/>
<ellipse cx="96" cy="262" rx="7" ry="11" fill="#ffffff" opacity="0.3"/>
<ellipse cx="322" cy="214" rx="8" ry="12" fill="#ffffff" opacity="0.26"/>

<rect x="248" y="130" width="18" height="642" fill="url(#uk-woodh)"/>
<rect x="248" y="130" width="5" height="642" fill="#a97c4c"/>
<rect x="262" y="130" width="4" height="642" fill="#ffcf83" opacity="0.28"/>
<rect x="534" y="130" width="18" height="642" fill="url(#uk-woodh)"/>
<rect x="534" y="130" width="5" height="642" fill="#a97c4c"/>
<rect x="548" y="130" width="4" height="642" fill="#ffcf83" opacity="0.28"/>
<rect x="0" y="132" width="800" height="12" fill="#4a3527"/>
<rect x="0" y="132" width="800" height="4" fill="#7b5a38"/>
<rect x="0" y="142" width="800" height="3" fill="#ffcf83" opacity="0.22"/>

<g data-obj="paper-lantern">
<rect x="78" y="144" width="3" height="18" fill="#4a3527"/>
<ellipse cx="80" cy="182" rx="25" ry="22" fill="#dd8f47"/>
<ellipse cx="72" cy="180" rx="13" ry="19" fill="#f7c485" opacity="0.85"/>
<ellipse cx="67" cy="176" rx="5" ry="8" fill="#fde5bd" opacity="0.8"/>
<ellipse cx="80" cy="161" rx="10" ry="4" fill="#b06f34"/>
<ellipse cx="80" cy="203" rx="8" ry="3" fill="#b06f34"/>
<ellipse cx="80" cy="182" rx="34" ry="30" fill="url(#uk-glow)" opacity="0.4"/>
</g>
<rect x="186" y="144" width="3" height="16" fill="#4a3527"/>
<ellipse cx="188" cy="176" rx="19" ry="17" fill="#c97f42"/>
<ellipse cx="182" cy="174" rx="9" ry="14" fill="#e8ac6f" opacity="0.8"/>
<rect x="610" y="144" width="3" height="16" fill="#4a3527"/>
<ellipse cx="612" cy="174" rx="17" ry="15" fill="#b8734a"/>
<ellipse cx="607" cy="172" rx="8" ry="12" fill="#dc9d6a" opacity="0.75"/>

<g data-obj="wind-chime">
<rect x="318" y="146" width="3" height="16" fill="#4a3527"/>
<ellipse cx="320" cy="166" rx="22" ry="6" fill="url(#uk-copper)"/>
<ellipse cx="316" cy="164" rx="10" ry="2.5" fill="#e0a578" opacity="0.7"/>
<rect x="302" y="172" width="5" height="30" rx="2.5" fill="url(#uk-steel)"/>
<rect x="312" y="172" width="5" height="38" rx="2.5" fill="url(#uk-steel)"/>
<rect x="323" y="172" width="5" height="34" rx="2.5" fill="url(#uk-steel)"/>
<rect x="334" y="172" width="5" height="26" rx="2.5" fill="url(#uk-steel)"/>
<circle cx="320" cy="216" r="5" fill="#c9a253"/>
</g>

<rect x="489" y="144" width="3" height="14" fill="#4a3527"/>
<path d="M490 158 L472 198 L508 198 Z" fill="url(#uk-green)"/>
<path d="M490 158 L508 198 L492 198 Z" fill="#3d5f37"/>
<rect x="481" y="160" width="18" height="7" rx="3" fill="#a83741"/>

<g data-obj="hang-wreath">
<rect x="756" y="148" width="3" height="14" fill="#4a3527"/>
<circle cx="758" cy="188" r="26" fill="none" stroke="url(#uk-green)" stroke-width="11"/>
<path d="M740 172 Q750 162 762 164" fill="none" stroke="#8ec277" stroke-width="4" opacity="0.6"/>
<circle cx="744" cy="176" r="5" fill="#c9424c"/>
<circle cx="772" cy="200" r="5" fill="#a83741"/>
<circle cx="774" cy="175" r="4" fill="#7fae6b"/>
<circle cx="742" cy="200" r="4" fill="#c9424c"/>
</g>

<ellipse cx="400" cy="890" rx="440" ry="200" fill="url(#uk-glow)" opacity="0.5"/>
<rect x="0" y="764" width="800" height="34" fill="url(#uk-ledge)"/>
<rect x="0" y="764" width="800" height="8" fill="#f0cf94"/>
<rect x="0" y="792" width="800" height="10" fill="#8a6238"/>
<rect x="0" y="798" width="800" height="92" fill="url(#uk-wood)"/>

<ellipse cx="84" cy="770" rx="58" ry="10" fill="url(#uk-shadoww)"/>
<path d="M48 730 Q48 706 84 706 Q120 706 120 730 Q120 764 84 764 Q48 764 48 726 Z" fill="url(#uk-porc)"/>
<path d="M84 706 Q120 706 120 730 Q120 764 84 764 Q102 750 102 730 Q102 714 84 706 Z" fill="#c2b69f"/>
<ellipse cx="66" cy="722" rx="10" ry="14" fill="#ffffff" opacity="0.6"/>
<path d="M120 720 Q146 724 141 744 Q137 756 124 754" fill="none" stroke="#efe6d2" stroke-width="8"/>
<path d="M48 724 Q30 716 24 730" fill="none" stroke="#e4d9c1" stroke-width="8"/>
<ellipse cx="84" cy="706" rx="20" ry="6" fill="#cbbfa6"/>
<circle cx="84" cy="697" r="6" fill="url(#uk-goldv)"/>
<rect x="52" y="730" width="64" height="6" fill="#8b5cf6" opacity="0.55"/>
<circle cx="84" cy="748" r="6" fill="#a78bfa" opacity="0.6"/>

<ellipse cx="152" cy="770" rx="28" ry="7" fill="url(#uk-shadoww)"/>
<g data-obj="milk-jug">
<path d="M134 732 L138 764 L168 764 L172 732 Z" fill="url(#uk-porc)"/>
<path d="M156 732 L172 732 L168 764 L158 764 Z" fill="#c9bda6"/>
<ellipse cx="143" cy="744" rx="5" ry="12" fill="#ffffff" opacity="0.6"/>
<path d="M172 740 Q186 744 181 754" fill="none" stroke="#f2ead8" stroke-width="6"/>
<path d="M132 730 Q140 726 148 730" fill="#f8f2e4"/>
<rect x="136" y="746" width="34" height="4" fill="#3f5a72" opacity="0.55"/>
</g>

<ellipse cx="380" cy="774" rx="56" ry="10" fill="url(#uk-shadoww)"/>
<ellipse cx="380" cy="766" rx="46" ry="9" fill="#c9bda6"/>
<ellipse cx="380" cy="763" rx="46" ry="8" fill="url(#uk-porc)"/>
<rect x="376" y="656" width="8" height="106" fill="url(#uk-gold)"/>
<ellipse cx="380" cy="714" rx="38" ry="8" fill="#b8862f"/>
<ellipse cx="380" cy="711" rx="38" ry="7" fill="url(#uk-gold)"/>
<ellipse cx="380" cy="664" rx="22" ry="6" fill="#b8862f"/>
<ellipse cx="380" cy="661" rx="22" ry="5" fill="url(#uk-gold)"/>

<g data-obj="scone">
<path d="M334 708 L338 686 Q342 670 358 669 Q374 670 378 686 L382 708 Z" fill="#d9a462"/>
<path d="M360 669 Q374 670 378 686 L382 708 L364 708 L366 686 Z" fill="#b5803f"/>
<path d="M338 686 Q358 678 378 686" fill="none" stroke="#f2d59f" stroke-width="6"/>
<path d="M342 679 Q358 667 374 679 Q366 673 358 673 Q350 673 342 679 Z" fill="#f9ecce"/>
<path d="M346 683 Q358 675 371 683 Q362 680 346 683 Z" fill="#b8404a"/>
<ellipse cx="352" cy="694" rx="8" ry="5" fill="#eec089" opacity="0.55"/>
<ellipse cx="358" cy="708" rx="24" ry="5" fill="#a8752f"/>
<circle cx="347" cy="696" r="3" fill="#8c5a2c"/>
<circle cx="369" cy="699" r="3" fill="#8c5a2c"/>
</g>

<path d="M392 710 Q392 690 406 690 Q420 690 420 710 Z" fill="#e0b075"/>
<path d="M408 690 Q420 690 420 710 L413 710 Q415 696 408 690 Z" fill="#c08c4c"/>
<ellipse cx="406" cy="692" rx="12" ry="4" fill="#b8404a"/>

<g data-obj="jam-jar">
<rect x="428" y="730" width="32" height="36" rx="4" fill="url(#uk-red)"/>
<rect x="430" y="734" width="8" height="28" rx="3" fill="#f08585" opacity="0.55"/>
<rect x="426" y="724" width="36" height="8" rx="3" fill="#e8dcc4"/>
<rect x="426" y="724" width="36" height="3" rx="2" fill="#f9f2e4"/>
<rect x="432" y="742" width="24" height="12" rx="2" fill="#f6efdd"/>
<circle cx="444" cy="748" r="4" fill="#8f2f38"/>
</g>
<rect x="466" y="748" width="20" height="18" rx="3" fill="url(#uk-purple)"/>
<rect x="464" y="744" width="24" height="6" rx="2" fill="#e8dcc4"/>

<ellipse cx="500" cy="772" rx="32" ry="8" fill="url(#uk-shadoww)"/>
<ellipse cx="500" cy="764" rx="28" ry="7" fill="#eee5d1"/>
<path d="M480 738 Q480 758 500 758 Q520 758 520 738 Z" fill="url(#uk-porc)"/>
<ellipse cx="487" cy="746" rx="4" ry="8" fill="#ffffff" opacity="0.6"/>
<ellipse cx="500" cy="738" rx="20" ry="5" fill="#ffffff"/>
<ellipse cx="500" cy="739" rx="15" ry="4" fill="#a9714a"/>
<path d="M520 742 Q534 746 529 755" fill="none" stroke="#f4ecda" stroke-width="6"/>

<g data-obj="book-stack">
<ellipse cx="548" cy="770" rx="44" ry="7" fill="url(#uk-shadoww)"/>
<rect x="512" y="742" width="74" height="22" rx="3" fill="url(#uk-plum)"/>
<rect x="518" y="748" width="62" height="10" fill="#f4ead6"/>
<rect x="516" y="722" width="68" height="20" rx="3" fill="url(#uk-navy)"/>
<rect x="522" y="728" width="56" height="9" fill="#f4ead6"/>
<rect x="522" y="704" width="58" height="18" rx="3" fill="url(#uk-green)"/>
<rect x="528" y="710" width="46" height="8" fill="#f4ead6"/>
<rect x="522" y="704" width="58" height="4" rx="2" fill="#9dc98a" opacity="0.6"/>
</g>

<g data-obj="biscuit-tin">
<ellipse cx="635" cy="768" rx="30" ry="7" fill="url(#uk-shadoww)"/>
<rect x="612" y="722" width="46" height="42" rx="4" fill="url(#uk-blue)"/>
<rect x="614" y="726" width="11" height="34" rx="4" fill="#7fabc4" opacity="0.6"/>
<rect x="610" y="716" width="50" height="8" rx="3" fill="#2b566f"/>
<rect x="610" y="716" width="50" height="3" rx="2" fill="#6c9cb6"/>
<circle cx="635" cy="742" r="9" fill="url(#uk-goldv)"/>
<circle cx="633" cy="740" r="3.5" fill="#f8e6b4" opacity="0.85"/>
</g>

<g data-obj="potted-plant">
<ellipse cx="772" cy="770" rx="30" ry="7" fill="url(#uk-shadoww)"/>
<rect x="750" y="736" width="44" height="28" rx="4" fill="url(#uk-copper)"/>
<rect x="752" y="740" width="10" height="22" rx="3" fill="#dd9a6c" opacity="0.6"/>
<rect x="750" y="736" width="44" height="7" rx="4" fill="#d68a5f"/>
<path d="M772 736 Q756 722 748 706" fill="none" stroke="#4f7a44" stroke-width="5"/>
<path d="M772 736 Q788 722 792 708" fill="none" stroke="#5d8c50" stroke-width="5"/>
<ellipse cx="744" cy="704" rx="12" ry="8" fill="#5d8c50"/>
<ellipse cx="790" cy="706" rx="12" ry="8" fill="#79b268"/>
<ellipse cx="768" cy="698" rx="10" ry="7" fill="#6fa15f"/>
<ellipse cx="788" cy="703" rx="5" ry="3" fill="#a3d18f" opacity="0.6"/>
</g>

<g data-obj="egg-timer">
<rect x="470" y="738" width="40" height="7" rx="3" fill="url(#uk-copper)"/>
<rect x="470" y="779" width="40" height="7" rx="3" fill="url(#uk-copper)"/>
<path d="M478 745 L502 745 L492 762 L502 779 L478 779 L488 762 Z" fill="#e6eff5" opacity="0.85"/>
<path d="M480 747 L500 747 L490 762 Z" fill="#e8ac6f"/>
<path d="M485 774 L495 774 L492 764 L488 764 Z" fill="#e8ac6f"/>
<path d="M481 748 L486 748 L483 758 Z" fill="#ffffff" opacity="0.55"/>
<rect x="474" y="742" width="4" height="40" fill="#8f6338"/>
<rect x="502" y="742" width="4" height="40" fill="#6f4b28"/>
</g>

<g data-obj="lost-scarf">
<path d="M640 770 L700 770 L700 784 L640 784 Z" fill="url(#uk-plum)"/>
<rect x="640" y="770" width="60" height="4" fill="#b07e8b"/>
<path d="M652 784 L678 784 L674 803 L656 803 Z" fill="#8f4c58"/>
<path d="M668 784 L678 784 L674 803 L668 803 Z" fill="#5a2f38"/>
<rect x="655" y="801" width="4" height="8" fill="#a06874"/>
<rect x="663" y="801" width="4" height="8" fill="#a06874"/>
<rect x="671" y="801" width="4" height="8" fill="#a06874"/>
</g>

<rect x="258" y="800" width="24" height="68" rx="3" fill="#eaf0f4"/>
<rect x="258" y="800" width="24" height="6" rx="3" fill="#cfd8e0"/>
<rect x="274" y="806" width="8" height="62" fill="#c6d0d8" opacity="0.7"/>
<rect x="258" y="820" width="24" height="5" fill="#3f6f8c"/>
<rect x="258" y="830" width="24" height="3" fill="#b8404a"/>

<path d="M522 806 L542 806 L546 830 L546 868 L518 868 L518 830 Z" fill="url(#uk-green)"/>
<path d="M534 806 L542 806 L546 830 L546 868 L534 868 Z" fill="#33512f"/>
<rect x="524" y="800" width="16" height="8" rx="3" fill="#3c5236"/>
<rect x="522" y="840" width="20" height="14" rx="2" fill="#83b06f"/>

<rect x="18" y="806" width="240" height="70" rx="7" fill="#6b4a2c"/>
<rect x="24" y="812" width="228" height="58" rx="4" fill="url(#uk-tray)"/>
<rect x="24" y="812" width="228" height="9" rx="4" fill="#2e2015"/>
<rect x="280" y="806" width="240" height="70" rx="7" fill="#6b4a2c"/>
<rect x="286" y="812" width="228" height="58" rx="4" fill="url(#uk-tray)"/>
<rect x="286" y="812" width="228" height="9" rx="4" fill="#2e2015"/>
<rect x="542" y="806" width="240" height="70" rx="7" fill="#6b4a2c"/>
<rect x="548" y="812" width="228" height="58" rx="4" fill="url(#uk-tray)"/>
<rect x="548" y="812" width="228" height="9" rx="4" fill="#2e2015"/>

<g data-obj="thimble">
<ellipse cx="52" cy="866" rx="20" ry="5" fill="url(#uk-shadoww)"/>
<path d="M34 864 L34 838 Q34 824 52 824 Q70 824 70 838 L70 864 Z" fill="url(#uk-gold)"/>
<path d="M52 824 Q70 824 70 838 L70 864 L59 864 L59 838 Q59 827 52 824 Z" fill="#9c7228"/>
<path d="M40 834 Q46 828 52 828" fill="none" stroke="#fdf0c8" stroke-width="3" opacity="0.7"/>
<circle cx="44" cy="842" r="2" fill="#7d5a20"/>
<circle cx="52" cy="838" r="2" fill="#7d5a20"/>
<circle cx="60" cy="844" r="2" fill="#7d5a20"/>
<rect x="34" y="857" width="36" height="6" fill="#efd694"/>
</g>
<path d="M84 866 L84 850 Q84 842 94 842 Q104 842 104 850 L104 866 Z" fill="#b89a5e"/>
<rect x="84" y="861" width="20" height="4" fill="#d9c08a"/>

<g data-obj="pocket-watch">
<ellipse cx="132" cy="866" rx="22" ry="5" fill="url(#uk-shadoww)"/>
<path d="M124 820 Q138 812 144 822" fill="none" stroke="#c9a253" stroke-width="3"/>
<rect x="120" y="818" width="8" height="7" rx="2" fill="#c9a253"/>
<circle cx="124" cy="842" r="20" fill="url(#uk-gold)"/>
<circle cx="124" cy="842" r="15" fill="#f8f0dc"/>
<path d="M112 836 Q124 828 136 836" fill="none" stroke="#ffffff" stroke-width="3" opacity="0.7"/>
<rect x="123" y="831" width="2" height="12" fill="#443a33"/>
<rect x="124" y="841" width="10" height="2" fill="#443a33"/>
<circle cx="124" cy="842" r="2" fill="#443a33"/>
</g>

<g data-obj="brooch">
<ellipse cx="182" cy="864" rx="22" ry="5" fill="url(#uk-shadoww)"/>
<ellipse cx="182" cy="844" rx="21" ry="19" fill="url(#uk-gold)"/>
<ellipse cx="182" cy="843" rx="14" ry="12" fill="url(#uk-purple)"/>
<ellipse cx="177" cy="838" rx="5" ry="3" fill="#e2d6fb" opacity="0.85"/>
<circle cx="166" cy="834" r="3.5" fill="#fbe8b8"/>
<circle cx="198" cy="853" r="3.5" fill="#fbe8b8"/>
</g>
<circle cx="222" cy="848" r="14" fill="url(#uk-gold)"/>
<circle cx="222" cy="848" r="8" fill="#f8e6b4"/>
<path d="M212 834 L232 834 L232 822 L212 822 Z" fill="url(#uk-navy)"/>

<g data-obj="teaspoon">
<ellipse cx="310" cy="866" rx="22" ry="5" fill="url(#uk-shadoww)"/>
<ellipse cx="304" cy="832" rx="11" ry="14" fill="url(#uk-steel)"/>
<ellipse cx="302" cy="829" rx="6" ry="8" fill="#f4f8fa"/>
<path d="M308 843 L323 862" fill="none" stroke="#b2bdc8" stroke-width="6" stroke-linecap="round"/>
<path d="M309 845 L320 859" fill="none" stroke="#e0e8ee" stroke-width="2" opacity="0.6"/>
<circle cx="324" cy="861" r="4" fill="#c2ccd5"/>
</g>

<g data-obj="keyring">
<circle cx="396" cy="834" r="10" fill="none" stroke="url(#uk-steel)" stroke-width="4"/>
<rect x="400" y="840" width="5" height="26" fill="url(#uk-gold)"/>
<rect x="400" y="858" width="12" height="4" fill="#c9a253"/>
<rect x="400" y="850" width="9" height="4" fill="#c9a253"/>
<circle cx="414" cy="838" r="7" fill="url(#uk-purple)"/>
<circle cx="412" cy="836" r="2.5" fill="#d5c6f8" opacity="0.8"/>
</g>

<g data-obj="compass">
<ellipse cx="466" cy="866" rx="22" ry="5" fill="url(#uk-shadoww)"/>
<rect x="462" y="822" width="8" height="6" rx="2" fill="#9c7228"/>
<circle cx="466" cy="844" r="20" fill="url(#uk-gold)"/>
<circle cx="466" cy="844" r="15" fill="#f6efdd"/>
<path d="M454 838 Q466 830 478 838" fill="none" stroke="#ffffff" stroke-width="3" opacity="0.7"/>
<polygon points="466,831 470,844 466,857 462,844" fill="#c9424c"/>
<polygon points="466,831 470,844 466,844" fill="#8a2a33"/>
<circle cx="466" cy="844" r="3" fill="#443a33"/>
</g>

<g data-obj="spectacles">
<circle cx="702" cy="844" r="11.5" fill="none" stroke="#443a33" stroke-width="3"/>
<circle cx="728" cy="844" r="11.5" fill="none" stroke="#443a33" stroke-width="3"/>
<circle cx="702" cy="844" r="9.5" fill="#cfe0ea" opacity="0.5"/>
<circle cx="728" cy="844" r="9.5" fill="#cfe0ea" opacity="0.5"/>
<path d="M696 838 Q700 834 705 835" fill="none" stroke="#ffffff" stroke-width="2.5" opacity="0.75"/>
<path d="M722 838 Q726 834 731 835" fill="none" stroke="#ffffff" stroke-width="2.5" opacity="0.7"/>
<path d="M713 844 L717 844" fill="none" stroke="#443a33" stroke-width="3"/>
<path d="M691 840 Q683 831 686 820" fill="none" stroke="#443a33" stroke-width="3"/>
</g>

<g data-obj="button-card">
<rect x="586" y="826" width="34" height="38" rx="3" fill="#eee3cb"/>
<rect x="586" y="826" width="34" height="6" rx="3" fill="#faf3e2"/>
<circle cx="596" cy="837" r="6" fill="#3f6f8c"/>
<circle cx="610" cy="837" r="6" fill="#b8404a"/>
<circle cx="596" cy="853" r="6" fill="#c9a253"/>
<circle cx="610" cy="853" r="6" fill="#7c4fd0"/>
<circle cx="594" cy="835" r="2" fill="#8fb6cc" opacity="0.7"/>
</g>
<circle cx="646" cy="840" r="7" fill="#b8404a"/>

<rect x="0" y="888" width="800" height="312" fill="url(#uk-floor)"/>
<rect x="0" y="888" width="800" height="6" fill="#96693e"/>
<rect x="0" y="964" width="800" height="3" fill="#5d4028" opacity="0.65"/>
<rect x="452" y="888" width="4" height="312" fill="#5d4028" opacity="0.45"/>
<ellipse cx="370" cy="1030" rx="340" ry="160" fill="url(#uk-glow)" opacity="0.35"/>
<rect x="0" y="888" width="800" height="26" fill="#2f1e10" opacity="0.35"/>

<rect x="0" y="932" width="206" height="10" fill="#6b4a2c"/>
<rect x="0" y="932" width="206" height="3" fill="#96693e"/>
<path d="M186 942 L200 942 L186 958 Z" fill="#4e3520"/>

<g data-obj="brass-bell">
<ellipse cx="30" cy="936" rx="24" ry="6" fill="url(#uk-shadoww)"/>
<path d="M14 926 Q14 900 30 896 Q46 900 46 926 Z" fill="url(#uk-gold)"/>
<path d="M32 896 Q46 900 46 926 L35 926 Q37 904 32 896 Z" fill="#9c7228"/>
<path d="M20 916 Q20 902 29 899" fill="none" stroke="#fdf0c8" stroke-width="3" opacity="0.75"/>
<rect x="12" y="924" width="36" height="7" rx="3" fill="#d9ab48"/>
<circle cx="30" cy="891" r="5" fill="#c9a253"/>
<circle cx="30" cy="932" r="4" fill="#9c7228"/>
</g>
<rect x="64" y="898" width="36" height="34" rx="3" fill="url(#uk-blue)"/>
<rect x="66" y="902" width="9" height="26" rx="3" fill="#7fabc4" opacity="0.6"/>
<rect x="62" y="890" width="40" height="10" rx="3" fill="#2b566f"/>
<circle cx="82" cy="916" r="6" fill="#c9a253"/>

<rect x="412" y="884" width="144" height="196" fill="#452e1c"/>
<rect x="420" y="892" width="128" height="180" fill="#5f4229"/>
<rect x="420" y="892" width="128" height="180" fill="url(#uk-glow)" opacity="0.3"/>
<rect x="412" y="884" width="144" height="10" fill="#7a5634"/>
<rect x="412" y="884" width="144" height="3" fill="#a3763f"/>
<rect x="420" y="940" width="128" height="9" fill="#7a5634"/>
<rect x="420" y="940" width="128" height="3" fill="#a3763f"/>
<rect x="420" y="1000" width="128" height="9" fill="#7a5634"/>
<rect x="420" y="1000" width="128" height="3" fill="#a3763f"/>
<rect x="420" y="1060" width="128" height="9" fill="#7a5634"/>
<rect x="420" y="1060" width="128" height="3" fill="#a3763f"/>

<g data-obj="oil-lamp">
<ellipse cx="446" cy="940" rx="24" ry="6" fill="url(#uk-shadoww)"/>
<ellipse cx="446" cy="936" rx="21" ry="6" fill="#b8862f"/>
<path d="M430 936 Q428 920 446 918 Q464 920 462 936 Z" fill="url(#uk-gold)"/>
<path d="M448 918 Q464 920 462 936 L451 936 Q453 922 448 918 Z" fill="#9c7228"/>
<rect x="436" y="900" width="20" height="20" fill="#fbe0aa" opacity="0.9"/>
<rect x="437" y="902" width="6" height="16" fill="#fff6de" opacity="0.8"/>
<rect x="434" y="896" width="24" height="6" rx="2" fill="#9c7228"/>
<rect x="441" y="905" width="4" height="12" fill="#d5642f"/>
<ellipse cx="446" cy="910" rx="30" ry="26" fill="url(#uk-glow)" opacity="0.55"/>
</g>

<g data-obj="honey-pot">
<ellipse cx="506" cy="942" rx="26" ry="6" fill="url(#uk-shadoww)"/>
<path d="M506 898 L506 886 L518 886" fill="none" stroke="#c9a253" stroke-width="4"/>
<ellipse cx="520" cy="890" rx="6" ry="4" fill="url(#uk-goldv)"/>
<path d="M486 938 L484 914 Q484 904 506 904 Q528 904 528 914 L526 938 Z" fill="#e8ac6f"/>
<path d="M508 904 Q528 904 528 914 L526 938 L512 938 Z" fill="#c07c3e"/>
<ellipse cx="493" cy="920" rx="5" ry="11" fill="#f6d5ae" opacity="0.6"/>
<ellipse cx="506" cy="904" rx="22" ry="6" fill="#f4cc95"/>
<ellipse cx="506" cy="903" rx="15" ry="4" fill="#c9803f"/>
</g>

<g data-obj="kettle">
<ellipse cx="456" cy="1002" rx="34" ry="7" fill="url(#uk-shadoww)"/>
<path d="M430 998 Q426 970 456 966 Q486 970 482 998 Z" fill="url(#uk-steel)"/>
<path d="M458 966 Q486 970 482 998 L468 998 Q472 972 458 966 Z" fill="#7d8a97"/>
<ellipse cx="441" cy="980" rx="6" ry="12" fill="#ffffff" opacity="0.55"/>
<path d="M482 976 Q496 972 494 964" fill="none" stroke="#8d99a6" stroke-width="6"/>
<path d="M436 966 Q456 952 476 966" fill="none" stroke="#a8b3bf" stroke-width="5"/>
<ellipse cx="456" cy="966" rx="14" ry="4" fill="#7d8a97"/>
<circle cx="456" cy="959" r="5" fill="url(#uk-goldv)"/>
</g>

<g data-obj="birdcage">
<path d="M520 948 L520 940" fill="none" stroke="#9c7228" stroke-width="3"/>
<circle cx="520" cy="937" r="4" fill="none" stroke="#9c7228" stroke-width="2.5"/>
<path d="M500 998 L500 964 Q500 950 520 948 Q540 950 540 964 L540 998 Z" fill="#f0cd7a" opacity="0.22"/>
<ellipse cx="520" cy="978" rx="8" ry="6" fill="#eccfa9"/>
<path d="M500 998 L500 964 Q500 950 520 948 Q540 950 540 964 L540 998" fill="none" stroke="url(#uk-gold)" stroke-width="2.5"/>
<path d="M510 998 L510 952" fill="none" stroke="#e0b055" stroke-width="2"/>
<path d="M530 998 L530 952" fill="none" stroke="#a87c30" stroke-width="2"/>
<rect x="496" y="994" width="48" height="7" rx="3" fill="#9c7228"/>
</g>
<path d="M432 1058 L432 1028 Q432 1020 448 1020 Q464 1020 464 1028 L464 1058 Z" fill="url(#uk-blue)"/>
<rect x="430" y="1014" width="36" height="8" rx="3" fill="#2b566f"/>
<rect x="434" y="1024" width="8" height="30" rx="3" fill="#7fabc4" opacity="0.55"/>

<ellipse cx="676" cy="1182" rx="136" ry="18" fill="url(#uk-shadoww)"/>
<rect x="560" y="852" width="234" height="322" fill="#452e1c"/>
<rect x="570" y="866" width="214" height="298" fill="#5f4229"/>
<rect x="570" y="866" width="214" height="298" fill="url(#uk-glow)" opacity="0.32"/>
<rect x="560" y="852" width="234" height="16" fill="#7a5634"/>
<rect x="560" y="852" width="234" height="5" fill="#a3763f"/>
<rect x="556" y="852" width="16" height="322" fill="url(#uk-woodh)"/>
<rect x="556" y="852" width="5" height="322" fill="#9c6f42"/>
<rect x="782" y="852" width="16" height="322" fill="#54381f"/>
<rect x="570" y="952" width="214" height="12" fill="#7a5634"/>
<rect x="570" y="952" width="214" height="4" fill="#a3763f"/>
<rect x="570" y="1042" width="214" height="12" fill="#7a5634"/>
<rect x="570" y="1042" width="214" height="4" fill="#a3763f"/>
<rect x="570" y="1132" width="214" height="12" fill="#7a5634"/>
<rect x="570" y="1132" width="214" height="4" fill="#a3763f"/>
<path d="M572 870 L800 870" fill="none" stroke="#7a5634" stroke-width="2"/>
<polygon points="590,870 608,870 599,886" fill="#b8404a" opacity="0.85"/>
<polygon points="630,870 648,870 639,886" fill="#3f6f8c" opacity="0.85"/>
<polygon points="670,870 688,870 679,886" fill="#e6bd5e" opacity="0.85"/>

<ellipse cx="592" cy="952" rx="26" ry="6" fill="url(#uk-shadoww)"/>
<ellipse cx="592" cy="948" rx="24" ry="5" fill="#efe6d2"/>
<path d="M574 920 Q574 944 592 944 Q610 944 610 920 Z" fill="url(#uk-porc)"/>
<ellipse cx="581" cy="928" rx="4" ry="8" fill="#ffffff" opacity="0.6"/>
<path d="M610 924 Q623 927 619 936 Q617 941 610 941" fill="none" stroke="#f2ead8" stroke-width="5"/>
<ellipse cx="592" cy="920" rx="18" ry="5" fill="#ffffff"/>
<ellipse cx="592" cy="921" rx="13" ry="3" fill="#b57a4d"/>
<rect x="576" y="928" width="32" height="4" fill="#3f5a72"/>

<g data-obj="teacup">
<ellipse cx="648" cy="952" rx="30" ry="6" fill="url(#uk-shadoww)"/>
<ellipse cx="648" cy="946" rx="27" ry="6" fill="#efe6d2"/>
<ellipse cx="648" cy="944" rx="20" ry="4" fill="#d3c7ae"/>
<path d="M628 916 Q628 940 648 940 Q668 940 668 916 Z" fill="url(#uk-porc)"/>
<path d="M650 916 L668 916 Q668 940 648 940 Q659 932 659 916 Z" fill="#c9bda6"/>
<ellipse cx="635" cy="925" rx="4" ry="9" fill="#ffffff" opacity="0.65"/>
<path d="M668 920 Q682 923 679 932 Q677 938 669 938" fill="none" stroke="#f8f2e6" stroke-width="5"/>
<ellipse cx="648" cy="916" rx="20" ry="5" fill="#ffffff"/>
<ellipse cx="648" cy="917" rx="15" ry="3.5" fill="#b57a4d"/>
<rect x="630" y="923" width="36" height="3" fill="#c99a4a"/>
<circle cx="637" cy="931" r="3" fill="#8b5cf6"/>
<circle cx="648" cy="935" r="3" fill="#a78bfa"/>
<circle cx="659" cy="931" r="3" fill="#7c3aed"/>
<circle cx="643" cy="937" r="2" fill="#c4b5fd"/>
</g>

<ellipse cx="756" cy="952" rx="22" ry="5" fill="url(#uk-shadoww)"/>
<ellipse cx="756" cy="948" rx="19" ry="5" fill="#dfe9e6"/>
<path d="M744 924 Q744 944 756 944 Q768 944 768 924 Z" fill="url(#uk-teal)"/>
<ellipse cx="749" cy="931" rx="3" ry="7" fill="#8ad2d6" opacity="0.55"/>
<ellipse cx="756" cy="924" rx="12" ry="4" fill="#4fa8ac"/>

<path d="M568 1032 L572 1010 L580 1024 L590 1004 L600 1024 L608 1010 L612 1032 Z" fill="url(#uk-steel)"/>
<path d="M590 1004 L600 1024 L608 1010 L612 1032 L592 1032 Z" fill="#8d99a6"/>
<rect x="566" y="1028" width="48" height="13" rx="5" fill="#a8b3bd"/>
<rect x="566" y="1028" width="48" height="4" rx="2" fill="#d3dbe1"/>

<g data-obj="crown">
<ellipse cx="700" cy="1046" rx="32" ry="6" fill="url(#uk-shadoww)"/>
<path d="M676 1030 L681 1004 L690 1020 L700 998 L710 1020 L719 1004 L724 1030 Z" fill="url(#uk-gold)"/>
<path d="M700 998 L710 1020 L719 1004 L724 1030 L702 1030 Z" fill="#9c7228"/>
<path d="M681 1010 L685 1018 L690 1024" fill="none" stroke="#fdf0c8" stroke-width="2.5" opacity="0.7"/>
<rect x="674" y="1026" width="52" height="15" rx="5" fill="#d9ab48"/>
<rect x="674" y="1026" width="52" height="5" rx="2" fill="#f6dfa0"/>
<rect x="674" y="1036" width="52" height="5" rx="2" fill="#a87c30"/>
<circle cx="700" cy="1033" r="4.5" fill="#7c3aed"/>
<circle cx="684" cy="1033" r="3.5" fill="#b83a3a"/>
<circle cx="716" cy="1033" r="3.5" fill="#3a6fb8"/>
<circle cx="700" cy="996" r="3.5" fill="#fbe8b8"/>
<circle cx="681" cy="1002" r="3.5" fill="#fbe8b8"/>
<circle cx="719" cy="1002" r="3.5" fill="#fbe8b8"/>
</g>

<path d="M732 1032 L736 1008 L744 1022 L754 1004 L764 1022 L772 1008 L776 1032 Z" fill="url(#uk-gold)"/>
<path d="M754 1004 L764 1022 L772 1008 L776 1032 L756 1032 Z" fill="#9c7228"/>
<rect x="730" y="1028" width="48" height="13" rx="5" fill="#d9ab48"/>
<rect x="730" y="1028" width="48" height="4" rx="2" fill="#f6dfa0"/>

<rect x="574" y="1084" width="52" height="24" rx="6" fill="url(#uk-green)"/>
<rect x="574" y="1084" width="52" height="7" rx="4" fill="#8ec277"/>
<rect x="578" y="1092" width="14" height="9" rx="2" fill="#a9bfd0"/>
<rect x="596" y="1092" width="14" height="9" rx="2" fill="#bcd0de"/>
<circle cx="586" cy="1112" r="6" fill="#252a30"/>
<circle cx="616" cy="1112" r="6" fill="#252a30"/>

<g data-obj="toy-bus">
<ellipse cx="664" cy="1130" rx="40" ry="7" fill="url(#uk-shadoww)"/>
<rect x="631" y="1092" width="66" height="30" rx="5" fill="url(#uk-redv)"/>
<rect x="631" y="1092" width="66" height="9" rx="4" fill="#ea6262"/>
<rect x="631" y="1092" width="8" height="30" rx="4" fill="#f28a8a" opacity="0.6"/>
<rect x="631" y="1106" width="66" height="4" fill="#f6ebd4"/>
<rect x="635" y="1095" width="12" height="9" rx="2" fill="#a9bfd0"/>
<rect x="650" y="1095" width="12" height="9" rx="2" fill="#c6d8e4"/>
<rect x="665" y="1095" width="12" height="9" rx="2" fill="#a9bfd0"/>
<rect x="680" y="1095" width="13" height="9" rx="2" fill="#c6d8e4"/>
<rect x="635" y="1112" width="16" height="8" rx="2" fill="#a9bfd0"/>
<rect x="655" y="1112" width="16" height="8" rx="2" fill="#c6d8e4"/>
<rect x="675" y="1112" width="18" height="8" rx="2" fill="#9db3c4"/>
<circle cx="646" cy="1124" r="6" fill="#252a30"/>
<circle cx="646" cy="1124" r="2.5" fill="#6a727c"/>
<circle cx="682" cy="1124" r="6" fill="#252a30"/>
<circle cx="682" cy="1124" r="2.5" fill="#6a727c"/>
</g>

<rect x="706" y="1100" width="50" height="22" rx="7" fill="#2b2f35"/>
<rect x="706" y="1100" width="50" height="7" rx="4" fill="#4b535e"/>
<rect x="712" y="1106" width="14" height="9" rx="2" fill="#a9bfd0"/>
<rect x="730" y="1106" width="14" height="9" rx="2" fill="#c6d8e4"/>
<circle cx="718" cy="1126" r="6" fill="#1c2127"/>
<circle cx="746" cy="1126" r="6" fill="#1c2127"/>

<rect x="574" y="1146" width="86" height="9" rx="2" fill="url(#uk-blue)"/>
<rect x="574" y="1155" width="86" height="9" rx="2" fill="url(#uk-plum)"/>
<ellipse cx="700" cy="1164" rx="26" ry="6" fill="url(#uk-shadoww)"/>
<ellipse cx="700" cy="1150" rx="19" ry="15" fill="url(#uk-fur)"/>
<circle cx="700" cy="1131" r="12" fill="#e6a066"/>
<circle cx="694" cy="1126" r="4" fill="#f5c99b" opacity="0.6"/>
<circle cx="690" cy="1122" r="5" fill="#d1874a"/>
<circle cx="710" cy="1122" r="5" fill="#d1874a"/>
<circle cx="696" cy="1130" r="2" fill="#3a2a22"/>
<circle cx="704" cy="1130" r="2" fill="#3a2a22"/>

<ellipse cx="70" cy="1184" rx="76" ry="14" fill="url(#uk-shadoww)"/>
<path d="M40 964 Q40 952 52 954" fill="none" stroke="#26394b" stroke-width="6"/>
<rect x="40" y="962" width="5" height="46" fill="#3a4a5c"/>
<path d="M34 1006 L52 1006 L48 1062 L38 1062 Z" fill="url(#uk-navy)"/>
<path d="M96 950 Q96 938 108 940" fill="none" stroke="#54282f" stroke-width="6"/>
<rect x="94" y="948" width="5" height="48" fill="#6b3a44"/>
<path d="M88 996 L106 996 L102 1060 L92 1060 Z" fill="url(#uk-plum)"/>
<path d="M20 970 Q20 958 32 960" fill="none" stroke="#37503b" stroke-width="6"/>
<rect x="20" y="968" width="5" height="44" fill="#44604a"/>
<path d="M14 1010 L32 1010 L28 1060 L18 1060 Z" fill="url(#uk-green)"/>

<g data-obj="lightstick">
<ellipse cx="75" cy="1014" rx="22" ry="20" fill="url(#uk-glow)" opacity="0.3"/>
<rect x="62" y="998" width="26" height="34" rx="13" fill="url(#uk-purple)"/>
<rect x="62" y="998" width="26" height="34" rx="13" fill="#a78bfa" opacity="0.3"/>
<rect x="67" y="1003" width="7" height="22" rx="3" fill="#e2dbf8" opacity="0.8"/>
<rect x="63" y="1027" width="24" height="9" rx="2" fill="#e4ddef"/>
<rect x="66" y="1034" width="18" height="18" rx="5" fill="#ece4d2"/>
<rect x="66" y="1034" width="6" height="18" rx="3" fill="#f9f3e5"/>
<rect x="66" y="1041" width="18" height="6" fill="#6d3fc4"/>
</g>

<circle cx="112" cy="942" r="8" fill="#8b5cf6"/>
<circle cx="110" cy="940" r="3" fill="#c4b5fd"/>
<path d="M108 946 L114 950 L104 1056 L97 1055 Z" fill="#7b5fb0"/>

<rect x="26" y="1052" width="88" height="120" rx="8" fill="url(#uk-zinc)"/>
<ellipse cx="70" cy="1052" rx="44" ry="11" fill="#32484d"/>
<ellipse cx="70" cy="1049" rx="44" ry="10" fill="#6a949a"/>
<ellipse cx="56" cy="1046" rx="18" ry="4" fill="#9dc4c8" opacity="0.5"/>
<rect x="26" y="1082" width="88" height="7" fill="#32484d"/>
<rect x="26" y="1136" width="88" height="7" fill="#32484d"/>
<rect x="22" y="1166" width="96" height="10" rx="4" fill="#2c4247"/>

<ellipse cx="176" cy="1178" rx="80" ry="14" fill="url(#uk-shadoww)"/>
<rect x="122" y="1074" width="110" height="96" rx="5" fill="url(#uk-woodh)"/>
<rect x="122" y="1074" width="110" height="8" rx="4" fill="#b0803f"/>
<rect x="122" y="1104" width="110" height="8" fill="#6d4c28"/>
<rect x="122" y="1140" width="110" height="8" fill="#6d4c28"/>
<rect x="130" y="1058" width="94" height="10" rx="2" fill="url(#uk-blue)"/>
<rect x="138" y="1038" width="78" height="10" rx="2" fill="url(#uk-green)"/>
<rect x="144" y="1028" width="66" height="10" rx="2" fill="url(#uk-gold)"/>
<g data-obj="torch">
<rect x="122" y="1020" width="24" height="18" rx="9" fill="url(#uk-steel)"/>
<rect x="126" y="1034" width="16" height="40" rx="4" fill="#68737f"/>
<rect x="126" y="1034" width="6" height="40" rx="3" fill="#96a2af"/>
<rect x="140" y="1034" width="3" height="40" rx="1.5" fill="#ffcf83" opacity="0.4"/>
<circle cx="134" cy="1027" r="6" fill="#fbe0aa"/>
<ellipse cx="134" cy="1027" rx="18" ry="15" fill="url(#uk-glow)" opacity="0.45"/>
</g>
<rect x="184" y="1018" width="42" height="32" rx="4" fill="url(#uk-copper)"/>
<rect x="186" y="1022" width="9" height="24" rx="3" fill="#dd9a6c" opacity="0.6"/>
<rect x="182" y="1013" width="46" height="7" rx="3" fill="#8f4c30"/>

<ellipse cx="302" cy="1178" rx="102" ry="16" fill="url(#uk-shadoww)"/>
<rect x="288" y="1010" width="26" height="146" fill="url(#uk-woodh)"/>
<ellipse cx="301" cy="1158" rx="54" ry="13" fill="#6d4a28"/>
<ellipse cx="301" cy="1154" rx="54" ry="12" fill="#8f663c"/>
<ellipse cx="300" cy="1002" rx="108" ry="22" fill="#7f5a34"/>
<ellipse cx="300" cy="997" rx="108" ry="20" fill="#a87a49"/>
<ellipse cx="290" cy="994" rx="76" ry="12" fill="#c39b64" opacity="0.4"/>

<ellipse cx="246" cy="990" rx="20" ry="5" fill="url(#uk-shadoww)"/>
<g data-obj="candle">
<ellipse cx="246" cy="984" rx="16" ry="6" fill="url(#uk-gold)"/>
<rect x="242" y="974" width="8" height="12" fill="#c9a253"/>
<ellipse cx="246" cy="974" rx="10" ry="4" fill="#e6c47a"/>
<rect x="240" y="932" width="12" height="44" rx="3" fill="url(#uk-purple)"/>
<rect x="240" y="932" width="4" height="44" rx="2" fill="#c3aef6" opacity="0.75"/>
<ellipse cx="246" cy="932" rx="6" ry="3" fill="#c4b5fd"/>
<ellipse cx="246" cy="923" rx="4" ry="8" fill="url(#uk-flame)"/>
<ellipse cx="246" cy="928" rx="16" ry="18" fill="url(#uk-glow)" opacity="0.5"/>
</g>
<ellipse cx="272" cy="986" rx="12" ry="4" fill="#c9a253"/>
<rect x="266" y="958" width="10" height="28" rx="3" fill="#e8dcc4"/>
<ellipse cx="271" cy="952" rx="3" ry="6" fill="url(#uk-flame)"/>

<ellipse cx="212" cy="994" rx="22" ry="5" fill="url(#uk-shadoww)"/>
<ellipse cx="212" cy="988" rx="19" ry="5" fill="#efe6d2"/>
<path d="M198 966 Q198 984 212 984 Q226 984 226 966 Z" fill="url(#uk-porc)"/>
<ellipse cx="212" cy="966" rx="14" ry="4" fill="#ffffff"/>
<ellipse cx="212" cy="967" rx="10" ry="3" fill="#a9714a"/>
<path d="M226 970 Q237 973 233 981" fill="none" stroke="#f4ecda" stroke-width="5"/>

<ellipse cx="344" cy="996" rx="36" ry="7" fill="url(#uk-shadoww)"/>
<path d="M318 962 Q318 942 344 942 Q370 942 370 962 Q370 988 344 988 Q318 988 318 962 Z" fill="url(#uk-porc)"/>
<path d="M346 942 Q370 942 370 962 Q370 988 344 988 Q358 976 358 962 Q358 950 346 942 Z" fill="#c2b69f"/>
<ellipse cx="330" cy="956" rx="8" ry="12" fill="#ffffff" opacity="0.6"/>
<path d="M370 952 Q388 956 384 970 Q381 978 372 977" fill="none" stroke="#efe6d2" stroke-width="7"/>
<path d="M318 950 Q304 944 300 954" fill="none" stroke="#e4d9c1" stroke-width="6"/>
<circle cx="344" cy="936" r="6" fill="url(#uk-goldv)"/>
<rect x="322" y="962" width="44" height="5" fill="#3f6f8c" opacity="0.55"/>

<ellipse cx="392" cy="998" rx="32" ry="6" fill="url(#uk-shadoww)"/>
<ellipse cx="392" cy="990" rx="28" ry="6" fill="#efe6d2"/>
<path d="M376 982 Q376 966 388 966 Q400 966 400 982 Z" fill="#e0b075"/>
<ellipse cx="388" cy="968" rx="10" ry="4" fill="#f6e6c4"/>

<ellipse cx="416" cy="1082" rx="36" ry="8" fill="url(#uk-shadoww)"/>
<g data-obj="teddy-bear">
<ellipse cx="416" cy="1052" rx="21" ry="20" fill="url(#uk-fur)"/>
<ellipse cx="394" cy="1050" rx="7" ry="9" fill="#c07f43"/>
<ellipse cx="438" cy="1050" rx="7" ry="9" fill="#9c5c2c"/>
<ellipse cx="406" cy="1070" rx="8" ry="6" fill="#c07f43"/>
<ellipse cx="426" cy="1070" rx="8" ry="6" fill="#a86736"/>
<ellipse cx="416" cy="1056" rx="13" ry="12" fill="#f0c294"/>
<circle cx="404" cy="1014" r="7" fill="#c07f43"/>
<circle cx="428" cy="1014" r="7" fill="#a86736"/>
<circle cx="416" cy="1026" r="15" fill="url(#uk-fur)"/>
<circle cx="410" cy="1020" r="6" fill="#f0b880" opacity="0.5"/>
<ellipse cx="416" cy="1030" rx="8" ry="6" fill="#f6dcbb"/>
<ellipse cx="416" cy="1027" rx="3" ry="2" fill="#3a2a22"/>
<circle cx="410" cy="1021" r="2" fill="#3a2a22"/>
<circle cx="422" cy="1021" r="2" fill="#3a2a22"/>
<rect x="404" y="1038" width="24" height="5" fill="#b8404a"/>
</g>

<ellipse cx="364" cy="1076" rx="28" ry="7" fill="url(#uk-shadoww)"/>
<ellipse cx="364" cy="1044" rx="25" ry="10" fill="#7a3f4a"/>
<ellipse cx="364" cy="1041" rx="25" ry="9" fill="url(#uk-plum)"/>
<rect x="342" y="1044" width="44" height="8" fill="#7a5535"/>
<rect x="344" y="1052" width="6" height="20" fill="#6b4a2c"/>
<rect x="378" y="1052" width="6" height="20" fill="#553a20"/>

<g data-obj="watering-can">
<ellipse cx="254" cy="1094" rx="28" ry="7" fill="url(#uk-shadoww)"/>
<path d="M272 1056 L290 1042" fill="none" stroke="#4e7a48" stroke-width="6"/>
<ellipse cx="292" cy="1040" rx="7" ry="5" fill="#7fb069"/>
<path d="M238 1090 L234 1052 Q234 1046 254 1046 Q274 1046 274 1052 L270 1090 Z" fill="url(#uk-green)"/>
<path d="M256 1046 Q274 1046 274 1052 L270 1090 L258 1090 Z" fill="#33512f"/>
<rect x="240" y="1054" width="6" height="32" rx="3" fill="#9ccb86" opacity="0.5"/>
<ellipse cx="254" cy="1046" rx="20" ry="6" fill="#7fb069"/>
<path d="M240 1044 Q248 1032 264 1034" fill="none" stroke="#63954f" stroke-width="5"/>
</g>

<g data-obj="yarn-ball">
<ellipse cx="256" cy="1140" rx="26" ry="6" fill="url(#uk-shadoww)"/>
<circle cx="256" cy="1116" r="23" fill="url(#uk-plum)"/>
<circle cx="248" cy="1108" r="14" fill="#b07e8b" opacity="0.55"/>
<path d="M236 1108 Q256 1100 276 1112" fill="none" stroke="#5a2f38" stroke-width="2.5"/>
<path d="M235 1122 Q256 1114 277 1124" fill="none" stroke="#5a2f38" stroke-width="2.5"/>
<path d="M276 1126 Q288 1132 282 1140" fill="none" stroke="#8f4c58" stroke-width="4"/>
</g>

<ellipse cx="252" cy="1194" rx="42" ry="8" fill="url(#uk-shadoww)"/>
<g data-obj="rain-boot">
<path d="M234 1150 L254 1150 L254 1178 L268 1178 Q274 1178 274 1184 L274 1190 L234 1190 Z" fill="url(#uk-blue)"/>
<path d="M246 1150 L254 1150 L254 1178 L268 1178 Q274 1178 274 1184 L274 1190 L254 1190 Z" fill="#254a60"/>
<rect x="236" y="1154" width="6" height="34" rx="3" fill="#7fabc4" opacity="0.5"/>
<rect x="232" y="1146" width="24" height="7" rx="3" fill="#5e8ba6"/>
<rect x="234" y="1184" width="40" height="6" fill="#1e3d4f"/>
</g>

<g data-obj="corgi">
<ellipse cx="440" cy="1164" rx="42" ry="9" fill="url(#uk-shadoww)"/>
<ellipse cx="444" cy="1134" rx="27" ry="19" fill="url(#uk-fur)"/>
<ellipse cx="466" cy="1122" rx="7" ry="6" fill="#b8722f"/>
<ellipse cx="442" cy="1142" rx="21" ry="10" fill="#f6e8d2"/>
<ellipse cx="424" cy="1152" rx="8" ry="5" fill="#f6e8d2"/>
<ellipse cx="443" cy="1154" rx="8" ry="5" fill="#e8d5bb"/>
<circle cx="419" cy="1116" r="17" fill="#e8a05c"/>
<circle cx="412" cy="1109" r="7" fill="#f6c795" opacity="0.5"/>
<polygon points="407,1104 411,1090 420,1103" fill="#c67a37"/>
<polygon points="409,1102 412,1094 417,1102" fill="#f6c795"/>
<polygon points="425,1102 433,1090 439,1102" fill="#c67a37"/>
<polygon points="427,1101 432,1094 436,1101" fill="#f6c795"/>
<path d="M418 1101 L423 1117 L414 1117 Z" fill="#f9f0e0"/>
<ellipse cx="410" cy="1123" rx="9" ry="7" fill="#f9f0e0"/>
<ellipse cx="403" cy="1120" rx="3" ry="2.5" fill="#3a2a22"/>
<path d="M405 1127 Q410 1131 415 1127" fill="none" stroke="#3a2a22" stroke-width="1.5"/>
<circle cx="414" cy="1110" r="2.5" fill="#3a2a22"/>
<circle cx="428" cy="1112" r="2.5" fill="#3a2a22"/>
<circle cx="415" cy="1109" r="1" fill="#ffffff"/>
<ellipse cx="409" cy="1131" rx="4" ry="2.5" fill="#e8a1a8" opacity="0.5"/>
</g>

<ellipse cx="512" cy="1164" rx="38" ry="8" fill="url(#uk-shadoww)"/>
<path d="M540 1156 Q556 1148 550 1130 Q546 1120 538 1122 Q546 1132 542 1144 Q538 1152 528 1152 Z" fill="#4a5058"/>
<ellipse cx="510" cy="1134" rx="24" ry="22" fill="#565d66"/>
<ellipse cx="508" cy="1142" rx="16" ry="13" fill="#767e88"/>
<circle cx="502" cy="1104" r="16" fill="#5e666f"/>
<circle cx="496" cy="1098" r="6" fill="#858d97" opacity="0.55"/>
<polygon points="488,1098 490,1082 500,1094" fill="#4a5058"/>
<polygon points="506,1093 516,1080 518,1097" fill="#4a5058"/>
<ellipse cx="496" cy="1110" rx="8" ry="6" fill="#818994"/>
<ellipse cx="490" cy="1107" rx="3" ry="2" fill="#e8a1a8"/>
<ellipse cx="494" cy="1100" rx="3" ry="4" fill="#e6bd5e"/>
<ellipse cx="508" cy="1102" rx="3" ry="4" fill="#e6bd5e"/>

<ellipse cx="470" cy="1184" rx="70" ry="14" fill="url(#uk-shadoww)"/>
<rect x="440" y="1140" width="66" height="34" rx="8" fill="url(#uk-woodh)"/>
<rect x="440" y="1140" width="66" height="9" rx="5" fill="#b0803f"/>
<path d="M440 1162 L506 1162" fill="none" stroke="#6d4c28" stroke-width="3"/>
<rect x="446" y="1126" width="54" height="18" rx="7" fill="url(#uk-plum)"/>
<rect x="446" y="1126" width="54" height="6" rx="3" fill="#a97180"/>
<circle cx="473" cy="1135" r="4" fill="#b07e8b"/>

<ellipse cx="40" cy="1192" rx="150" ry="26" fill="#2f1e10" opacity="0.26"/>
<ellipse cx="770" cy="1194" rx="150" ry="26" fill="#2f1e10" opacity="0.26"/>
<ellipse cx="400" cy="1198" rx="230" ry="18" fill="#2f1e10" opacity="0.18"/>
</svg>`
});
