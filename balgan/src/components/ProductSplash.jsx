// Stylized splash + bottle on black bg, mimicking the reference product photo
export default function ProductSplash() {
  return (
    <section className="relative bg-black overflow-hidden py-20 md:py-32">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="relative aspect-[16/9] w-full">
          {/* Splash droplets */}
          <svg
            viewBox="0 0 1100 600"
            className="absolute inset-0 w-full h-full"
            aria-hidden="true"
          >
            <defs>
              <radialGradient id="splash" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#FF6A2E" />
                <stop offset="60%" stopColor="#C42715" />
                <stop offset="100%" stopColor="#7B1313" stopOpacity="0" />
              </radialGradient>
            </defs>

            {/* big splash blob */}
            <ellipse cx="550" cy="300" rx="380" ry="200" fill="url(#splash)" opacity="0.85" />

            {/* drips around */}
            <g fill="#C42715">
              <circle cx="200" cy="200" r="22" />
              <circle cx="170" cy="240" r="10" />
              <circle cx="900" cy="220" r="26" />
              <circle cx="940" cy="180" r="12" />
              <circle cx="220" cy="420" r="14" />
              <circle cx="880" cy="430" r="18" />
              <circle cx="120" cy="320" r="16" />
              <circle cx="980" cy="320" r="14" />
            </g>

            {/* chili and lime accents */}
            <g>
              <ellipse cx="280" cy="370" rx="38" ry="14" fill="#E04A2D" transform="rotate(-25 280 370)" />
              <ellipse cx="820" cy="200" rx="36" ry="14" fill="#E04A2D" transform="rotate(20 820 200)" />
              <circle cx="380" cy="170" r="22" fill="#A8C84B" />
              <circle cx="380" cy="170" r="14" fill="#C7E26B" />
              <circle cx="760" cy="420" r="20" fill="#A8C84B" />
              <circle cx="760" cy="420" r="12" fill="#C7E26B" />
              <circle cx="460" cy="450" r="18" fill="#A8C84B" />
              <circle cx="640" cy="150" r="14" fill="#A8C84B" />
            </g>

            {/* Bottle silhouette */}
            <g transform="translate(470 130)">
              {/* cap */}
              <rect x="56" y="0" width="48" height="34" rx="4" fill="#1B1B1B" stroke="#3a3a3a" strokeWidth="2" />
              <rect x="50" y="30" width="60" height="8" rx="2" fill="#0d0d0d" />
              {/* neck */}
              <rect x="62" y="38" width="36" height="24" fill="#7a1a13" />
              {/* body */}
              <path
                d="M40 62 h80 v240 a16 16 0 0 1 -16 16 H56 a16 16 0 0 1 -16 -16 z"
                fill="#7a1a13"
                stroke="#3a0808"
                strokeWidth="2"
              />
              {/* label */}
              <rect x="48" y="100" width="64" height="180" rx="3" fill="#F5E6C8" />
              <text
                x="80"
                y="138"
                textAnchor="middle"
                fontFamily="'Alfa Slab One', serif"
                fontSize="11"
                fill="#1B2A4E"
              >
                CHOJANG
              </text>
              <text
                x="80"
                y="200"
                textAnchor="middle"
                fontFamily="'Alfa Slab One', serif"
                fontSize="22"
                fill="#A41818"
              >
                BALGAN
              </text>
              <text
                x="80"
                y="252"
                textAnchor="middle"
                fontFamily="'Alfa Slab One', serif"
                fontSize="8"
                fill="#1B2A4E"
                letterSpacing="1"
              >
                SWEET · SPICY
              </text>
              {/* highlight */}
              <rect x="46" y="68" width="6" height="240" rx="3" fill="#fff" opacity="0.08" />
            </g>
          </svg>
        </div>
      </div>
    </section>
  )
}
