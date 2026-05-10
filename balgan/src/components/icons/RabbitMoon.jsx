// Moon-rabbit (달토끼) — sitting upright, pounding rice cake / chojang in a mortar.
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

      {/* === Rabbit body (sitting upright, profile facing left) === */}
      <g fill={`url(#${grad})`} stroke={`url(#${grad})`} strokeWidth="1">
        {/* Tail (small fluff) */}
        <ellipse cx="380" cy="290" rx="14" ry="12" />

        {/* Body — egg-shaped sitting */}
        <path
          d="M260 250
             c-6 60 24 96 70 96
             c46 0 70 -36 64 -90
             c-4 -36 -28 -58 -64 -58
             c-36 0 -64 18 -70 52z"
        />

        {/* Hind leg accent */}
        <path
          d="M278 308
             c-2 18 12 30 30 28
             c14 -2 18 -12 12 -22
             c-8 -12 -38 -16 -42 -6z"
          fill="#0B0B10"
          opacity="0.35"
          stroke="none"
        />

        {/* Head */}
        <ellipse cx="320" cy="200" rx="42" ry="38" />

        {/* Cheek/jaw curve hint */}
        <path
          d="M286 214 q14 14 30 14"
          fill="none"
          stroke={`url(#${grad})`}
          strokeWidth="1.2"
          opacity="0.6"
        />

        {/* Long ear (raised) */}
        <path d="M312 168 q-14 -64 4 -100 q22 38 8 100z" />
        {/* Inner ear (cutout) */}
        <path
          d="M315 162 q-8 -50 4 -82 q14 30 4 82z"
          fill="#0B0B10"
          stroke="none"
        />
        {/* Second ear hint behind */}
        <path d="M328 168 q-4 -52 16 -84 q12 36 0 84z" opacity="0.55" />

        {/* Nose */}
        <ellipse cx="282" cy="208" rx="3.5" ry="2.6" fill="#0B0B10" stroke="none" />
        {/* Mouth hint */}
        <path d="M282 214 q4 6 10 4" fill="none" stroke="#0B0B10" strokeWidth="1.4" opacity="0.7" />
      </g>

      {/* Eye — separate so it can blink */}
      <g className="rm-eye" style={{ transformOrigin: '296px 198px' }}>
        <ellipse cx="296" cy="198" rx="3.6" ry="4.4" fill="#0B0B10" />
      </g>

      {/* === Mortar (절구) — bottom center === */}
      <g transform="translate(140 332)">
        {/* Outer bowl */}
        <path
          d="M0 0 h140 l-12 60 a16 16 0 0 1 -16 12 H28 a16 16 0 0 1 -16 -12z"
          fill={`url(#${grad})`}
          stroke={`url(#${grad})`}
          strokeWidth="1.5"
        />
        {/* Top opening */}
        <ellipse cx="70" cy="0" rx="70" ry="11" fill="#0B0B10" stroke={`url(#${grad})`} strokeWidth="2" />
        {/* Sauce contents — small puddle */}
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
            <ellipse cx="-50" cy="-22" rx="3" ry="6" transform="rotate(-25 -50 -22)" />
            {/* Right side */}
            <circle cx="78" cy="-4" r="6" />
            <circle cx="92" cy="-14" r="4" />
            <circle cx="62" cy="-18" r="3.5" />
            <ellipse cx="50" cy="-22" rx="3" ry="6" transform="rotate(25 50 -22)" />
            {/* Up the middle */}
            <circle cx="0" cy="-22" r="4.5" />
            <circle cx="-22" cy="-30" r="2.6" />
            <circle cx="20" cy="-30" r="2.6" />
            <circle cx="0" cy="-40" r="2" />
          </g>
        </g>
      </g>

      {/* === Pestle + front paws — animated downward strike === */}
      <g className="rm-pound">
        {/* Pestle (vertical) */}
        <g>
          {/* Top knob (handle bulge) */}
          <ellipse cx="220" cy="98" rx="22" ry="14" fill={`url(#${grad})`} />
          {/* Shaft */}
          <rect x="208" y="108" width="24" height="184" rx="8" fill={`url(#${grad})`} />
          {/* Bottom rounded head */}
          <ellipse cx="220" cy="296" rx="18" ry="12" fill={`url(#${grad})`} />
          {/* Subtle inner highlight */}
          <rect x="212" y="114" width="4" height="170" rx="2" fill="#ffffff" opacity="0.18" />
        </g>

        {/* Rabbit's front paws gripping the pestle (drawn over it) */}
        <g fill={`url(#${grad})`} stroke="#0B0B10" strokeWidth="0.5">
          {/* Upper paw */}
          <ellipse cx="246" cy="160" rx="18" ry="12" transform="rotate(-22 246 160)" />
          {/* Lower paw */}
          <ellipse cx="248" cy="208" rx="18" ry="12" transform="rotate(-18 248 208)" />
        </g>
      </g>
    </svg>
  )
}
