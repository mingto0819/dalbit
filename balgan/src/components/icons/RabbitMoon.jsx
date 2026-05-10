// Moon-rabbit (달토끼) — sitting upright, pounding chojang in a mortar.
// Composition: crescent moon top-left, sparkles, mortar bottom-center, rabbit on the
// right gripping a vertical pestle. The pestle + paws (.rm-pound) drop into the mortar
// while the eye (.rm-eye) blinks and droplets (.rm-splash) burst out — animations live
// in src/index.css.
export default function RabbitMoon({ className = '', id = 'holo-rabbit' }) {
  const grad = `${id}-grad`
  const moon = `${id}-moon`
  return (
    <svg viewBox="0 0 480 480" className={className} aria-hidden="true">
      <defs>
        <linearGradient id={grad} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF6EC7" />
          <stop offset="22%" stopColor="#B084FF" />
          <stop offset="44%" stopColor="#66E1FF" />
          <stop offset="64%" stopColor="#6EFFC7" />
          <stop offset="82%" stopColor="#FFE066" />
          <stop offset="100%" stopColor="#FFB088" />
        </linearGradient>
        <radialGradient id={moon} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.25" />
          <stop offset="60%" stopColor="#B084FF" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#66E1FF" stopOpacity="0.55" />
        </radialGradient>
        <symbol id={`${id}-sparkle`} viewBox="-10 -10 20 20">
          <path d="M0 -10 L2 -2 L10 0 L2 2 L0 10 L-2 2 L-10 0 L-2 -2 Z" fill={`url(#${grad})`} />
        </symbol>
      </defs>

      {/* Crescent moon, upper-left */}
      <g transform="translate(80 90)">
        <circle cx="0" cy="0" r="42" fill={`url(#${moon})`} stroke={`url(#${grad})`} strokeWidth="1.5" />
        <path
          d="M-10 -34 a40 40 0 1 0 0 68 a30 30 0 1 1 0 -68z"
          fill={`url(#${grad})`}
          opacity="0.85"
        />
      </g>

      {/* Ambient sparkles */}
      <g>
        <use href={`#${id}-sparkle`} x="160" y="60" width="20" height="20" />
        <use href={`#${id}-sparkle`} x="60" y="200" width="14" height="14" />
        <use href={`#${id}-sparkle`} x="430" y="120" width="16" height="16" />
        <use href={`#${id}-sparkle`} x="40" y="340" width="12" height="12" />
        <use href={`#${id}-sparkle`} x="430" y="380" width="14" height="14" />
        <use href={`#${id}-sparkle`} x="250" y="40" width="10" height="10" />
      </g>

      {/* === Rabbit silhouette (sitting upright, profile facing left) ===
          Drawn as a single fill group so head + body merge as one iridescent mass. */}
      <g fill={`url(#${grad})`} stroke="none">
        {/* Tail — small fluff peeking from the back */}
        <ellipse cx="404" cy="288" rx="12" ry="9" />

        {/* Body — pear-shaped, settled on hind legs */}
        <path
          d="
            M 286 234
            C 262 246, 248 296, 264 342
            C 278 374, 314 386, 352 380
            C 392 374, 414 354, 414 316
            C 414 282, 404 244, 376 224
            C 346 206, 308 216, 286 234 Z
          "
        />

        {/* Subtle haunch shading — adds dimension to the seated pose */}
        <path
          d="
            M 304 322
            C 296 342, 312 366, 348 366
            C 376 366, 388 354, 386 338
            C 380 322, 332 314, 304 322 Z
          "
          fill="#0B0B10"
          opacity="0.18"
        />

        {/* Head — soft egg shape, set above front of body */}
        <ellipse cx="320" cy="196" rx="40" ry="36" />

        {/* Second ear (behind, lower opacity for depth) */}
        <path
          d="
            M 344 162
            C 348 116, 360 76, 374 56
            C 376 92, 372 134, 358 170 Z
          "
          opacity="0.55"
        />

        {/* Front ear — long, gentle curve, rounded tip */}
        <path
          d="
            M 308 168
            C 296 110, 308 56, 322 38
            C 342 62, 348 116, 338 168
            Q 322 172, 308 168 Z
          "
        />
      </g>

      {/* Inner ear (negative space) */}
      <path
        d="
          M 314 156
          C 308 118, 318 80, 326 60
          C 338 82, 342 118, 332 158
          Q 322 160, 314 156 Z
        "
        fill="#0B0B10"
      />

      {/* Nose — small dark dot at the muzzle */}
      <ellipse cx="283" cy="208" rx="3.6" ry="2.6" fill="#0B0B10" />

      {/* Eye — animatable, blinks at impact */}
      <g className="rm-eye" style={{ transformOrigin: '298px 192px' }}>
        <ellipse cx="298" cy="192" rx="3.4" ry="4.2" fill="#0B0B10" />
        <circle cx="297" cy="190" r="1.1" fill="#ffffff" opacity="0.65" />
      </g>

      {/* === Mortar (절구) — centered under the pestle === */}
      <g transform="translate(140 332)">
        <path
          d="M0 0 h140 l-12 60 a16 16 0 0 1 -16 12 H28 a16 16 0 0 1 -16 -12z"
          fill={`url(#${grad})`}
          stroke={`url(#${grad})`}
          strokeWidth="1.5"
        />
        <ellipse cx="70" cy="0" rx="70" ry="11" fill="#0B0B10" stroke={`url(#${grad})`} strokeWidth="2" />
        <ellipse cx="70" cy="2" rx="50" ry="6" fill={`url(#${grad})`} opacity="0.85" />
      </g>

      {/* === Splash droplets — bursting outward from mortar opening at impact ===
          Wrapper translates origin to (210, 332) (mortar rim center).
          Inner group `.rm-splash` scales from there, so all droplets disperse outward. */}
      <g transform="translate(210 332)">
        <g className="rm-splash">
          <g fill={`url(#${grad})`}>
            {/* Left side */}
            <circle cx="-78" cy="-4" r="6" />
            <circle cx="-94" cy="-14" r="4" />
            <circle cx="-66" cy="-18" r="3.5" />
            <ellipse cx="-50" cy="-24" rx="3" ry="6" transform="rotate(-25 -50 -24)" />
            {/* Right side */}
            <circle cx="78" cy="-4" r="6" />
            <circle cx="92" cy="-14" r="4" />
            <circle cx="62" cy="-18" r="3.5" />
            <ellipse cx="50" cy="-24" rx="3" ry="6" transform="rotate(25 50 -24)" />
            {/* Up the middle */}
            <circle cx="0" cy="-22" r="4.5" />
            <circle cx="-22" cy="-32" r="2.6" />
            <circle cx="22" cy="-32" r="2.6" />
            <circle cx="0" cy="-42" r="2" />
          </g>
        </g>
      </g>

      {/* === Pestle + front paws — animated downward strike === */}
      <g className="rm-pound">
        {/* Pestle — vertical, centered over mortar (x=210) */}
        <g>
          <ellipse cx="210" cy="98" rx="22" ry="14" fill={`url(#${grad})`} />
          <rect x="198" y="108" width="24" height="184" rx="8" fill={`url(#${grad})`} />
          <ellipse cx="210" cy="296" rx="18" ry="12" fill={`url(#${grad})`} />
          <rect x="202" y="114" width="4" height="170" rx="2" fill="#ffffff" opacity="0.18" />
        </g>

        {/* Forepaws gripping the pestle — organic teardrop shape, two-handed grip */}
        <g fill={`url(#${grad})`}>
          {/* Upper paw (closer to body, palm wraps the shaft) */}
          <path
            d="
              M 258 146
              C 240 144, 220 152, 220 168
              C 220 182, 238 188, 256 182
              C 270 178, 270 152, 258 146 Z
            "
          />
          {/* Lower paw */}
          <path
            d="
              M 258 198
              C 240 196, 220 204, 220 220
              C 220 234, 238 240, 256 234
              C 270 230, 270 204, 258 198 Z
            "
          />
        </g>
      </g>
    </svg>
  )
}
