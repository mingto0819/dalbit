// Iridescent splash + bottle on deep black — DALBIT product hero
export default function ProductSplash() {
  return (
    <section className="relative bg-dalbit-black overflow-hidden py-20 md:py-32 border-y border-dalbit-line">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="relative aspect-[16/9] w-full">
          <svg
            viewBox="0 0 1100 600"
            className="absolute inset-0 w-full h-full"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="splash-holo" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FF6EC7" />
                <stop offset="25%" stopColor="#B084FF" />
                <stop offset="50%" stopColor="#66E1FF" />
                <stop offset="75%" stopColor="#6EFFC7" />
                <stop offset="100%" stopColor="#FFE066" />
              </linearGradient>
              <radialGradient id="splash-blur" cx="50%" cy="50%" r="60%">
                <stop offset="0%" stopColor="#B084FF" stopOpacity="0.45" />
                <stop offset="100%" stopColor="#050507" stopOpacity="0" />
              </radialGradient>
              <linearGradient id="bottle-grad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#1c1c28" />
                <stop offset="100%" stopColor="#0a0a10" />
              </linearGradient>
            </defs>

            {/* Atmospheric glow */}
            <ellipse cx="550" cy="300" rx="520" ry="240" fill="url(#splash-blur)" />

            {/* Iridescent splash blob ring */}
            <g stroke="url(#splash-holo)" fill="none" strokeWidth="2" opacity="0.85">
              <ellipse cx="550" cy="300" rx="380" ry="200" />
              <ellipse cx="550" cy="300" rx="320" ry="170" opacity="0.5" />
              <ellipse cx="550" cy="300" rx="260" ry="140" opacity="0.35" />
            </g>

            {/* Drips and droplets in holo gradient */}
            <g fill="url(#splash-holo)">
              <circle cx="200" cy="200" r="22" opacity="0.85" />
              <circle cx="170" cy="240" r="10" opacity="0.7" />
              <circle cx="900" cy="220" r="26" opacity="0.85" />
              <circle cx="940" cy="180" r="12" opacity="0.7" />
              <circle cx="220" cy="420" r="14" opacity="0.7" />
              <circle cx="880" cy="430" r="18" opacity="0.85" />
              <circle cx="120" cy="320" r="16" opacity="0.6" />
              <circle cx="980" cy="320" r="14" opacity="0.6" />
              <circle cx="380" cy="170" r="8" opacity="0.7" />
              <circle cx="640" cy="450" r="10" opacity="0.7" />
            </g>

            {/* Bottle silhouette */}
            <g transform="translate(470 130)">
              {/* cap */}
              <rect x="56" y="0" width="48" height="34" rx="4" fill="#0a0a10" stroke="url(#splash-holo)" strokeWidth="1.5" />
              <rect x="50" y="30" width="60" height="8" rx="2" fill="#040406" />
              {/* neck */}
              <rect x="62" y="38" width="36" height="24" fill="#15151c" />
              {/* body */}
              <path
                d="M40 62 h80 v240 a16 16 0 0 1 -16 16 H56 a16 16 0 0 1 -16 -16 z"
                fill="url(#bottle-grad)"
                stroke="url(#splash-holo)"
                strokeWidth="1.6"
              />
              {/* label */}
              <rect x="48" y="100" width="64" height="180" rx="3" fill="#0B0B10" stroke="url(#splash-holo)" strokeWidth="1" />
              <text
                x="80"
                y="138"
                textAnchor="middle"
                fontFamily="'Alfa Slab One', serif"
                fontSize="10"
                fill="url(#splash-holo)"
                letterSpacing="2"
              >
                CHOJANG
              </text>
              <text
                x="80"
                y="200"
                textAnchor="middle"
                fontFamily="'Alfa Slab One', serif"
                fontSize="22"
                fill="url(#splash-holo)"
              >
                DALBIT
              </text>
              <text
                x="80"
                y="252"
                textAnchor="middle"
                fontFamily="'Alfa Slab One', serif"
                fontSize="8"
                fill="url(#splash-holo)"
                letterSpacing="1"
              >
                MOON · SPICE
              </text>
              {/* highlight */}
              <rect x="46" y="68" width="6" height="240" rx="3" fill="#fff" opacity="0.06" />
            </g>
          </svg>
        </div>
      </div>
    </section>
  )
}
