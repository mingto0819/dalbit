// Moon-rabbit (달토끼) pounding rice cake — DALBIT mark
// Uses an inline holographic gradient fill to evoke iridescent foil
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

        {/* Sparkle path used in the moon and around */}
        <symbol id={`${id}-sparkle`} viewBox="-10 -10 20 20">
          <path d="M0 -10 L2 -2 L10 0 L2 2 L0 10 L-2 2 L-10 0 L-2 -2 Z" fill={`url(#${grad})`} />
        </symbol>
      </defs>

      {/* Crescent moon */}
      <g transform="translate(330 90)">
        <circle cx="0" cy="0" r="44" fill={`url(#${moon})`} stroke={`url(#${grad})`} strokeWidth="2" />
        <path
          d="M-12 -34 a40 40 0 1 0 0 68 a30 30 0 1 1 0 -68z"
          fill={`url(#${grad})`}
          opacity="0.85"
        />
      </g>

      {/* Sparkles around */}
      <g>
        <use href={`#${id}-sparkle`} x="120" y="80" width="22" height="22" />
        <use href={`#${id}-sparkle`} x="80" y="180" width="14" height="14" />
        <use href={`#${id}-sparkle`} x="400" y="200" width="18" height="18" />
        <use href={`#${id}-sparkle`} x="60" y="330" width="12" height="12" />
        <use href={`#${id}-sparkle`} x="420" y="360" width="14" height="14" />
        <use href={`#${id}-sparkle`} x="240" y="50" width="10" height="10" />
      </g>

      {/* Rabbit silhouette in profile, holding a pestle, mortar in front */}
      <g transform="translate(80 130)" fill={`url(#${grad})`} stroke={`url(#${grad})`} strokeWidth="1">
        {/* Body */}
        <path
          d="M120 200
             c-20 -10 -34 -36 -28 -64
             c4 -20 22 -34 44 -34
             c6 -36 26 -60 56 -60
             c14 0 24 6 30 16
             c-4 -22 4 -38 22 -50
             c14 -10 26 -8 30 4
             c4 12 -4 24 -22 36
             c-2 4 0 8 4 8
             c30 4 50 28 52 56
             c2 28 -10 52 -34 64
             c-22 12 -56 14 -82 14
             c-26 0 -54 -2 -72 -10z"
        />
        {/* Inner ear (negative space) */}
        <path
          d="M196 60 c4 -16 14 -28 24 -32 c-2 14 -8 26 -16 34 z"
          fill="#0B0B10"
          stroke="none"
        />
        {/* Eye */}
        <circle cx="226" cy="92" r="4" fill="#0B0B10" stroke="none" />
        {/* Pestle (절구공이) — diagonal stick */}
        <g transform="translate(60 50) rotate(-30)">
          <rect x="0" y="0" width="160" height="14" rx="4" />
          <rect x="-8" y="-4" width="22" height="22" rx="3" />
        </g>
        {/* Mortar (절구) — bowl in front of rabbit */}
        <g transform="translate(40 178)">
          <path d="M0 0 h120 l-10 50 a16 16 0 0 1 -16 12 H26 a16 16 0 0 1 -16 -12 z" />
          <ellipse cx="60" cy="0" rx="60" ry="8" fill="#0B0B10" stroke={`url(#${grad})`} strokeWidth="2" />
        </g>
      </g>
    </svg>
  )
}
