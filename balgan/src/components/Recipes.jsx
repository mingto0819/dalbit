import { ChevronLeft, ChevronRight } from './icons/Icons'

const recipes = [
  {
    title: 'BALGAN KALE SALAD',
    bgFrom: '#3F6B3A',
    bgTo: '#1d3a1c',
    glyph: 'salad',
  },
  {
    title: 'SPICY SNACK SPREAD',
    bgFrom: '#4A6FB0',
    bgTo: '#1d2e54',
    glyph: 'spread',
  },
  {
    title: 'SPICY BALGAN NACHOS',
    bgFrom: '#C8923B',
    bgTo: '#7a4f0f',
    glyph: 'nachos',
  },
]

function RecipeArt({ glyph }) {
  if (glyph === 'salad') {
    return (
      <g>
        <ellipse cx="160" cy="180" rx="110" ry="36" fill="#0e2410" />
        <ellipse cx="160" cy="170" rx="108" ry="30" fill="#1d3a1c" />
        {Array.from({ length: 18 }).map((_, i) => (
          <circle
            key={i}
            cx={70 + (i * 14) % 180}
            cy={150 + (i % 3) * 10}
            r={6 + (i % 3) * 2}
            fill={i % 2 === 0 ? '#7BB85C' : '#5C9A3F'}
          />
        ))}
        {/* sauce drizzle */}
        <path
          d="M60 130 q40 -30 80 -10 t100 10"
          stroke="#A41818"
          strokeWidth="6"
          fill="none"
          strokeLinecap="round"
        />
      </g>
    )
  }
  if (glyph === 'spread') {
    return (
      <g>
        {/* tile background */}
        <g opacity="0.4">
          {Array.from({ length: 6 }).map((_, i) => (
            <line key={i} x1={i * 60} y1="0" x2={i * 60} y2="280" stroke="#fff" strokeWidth="1" />
          ))}
          {Array.from({ length: 5 }).map((_, i) => (
            <line key={i} x1="0" y1={i * 60} x2="320" y2={i * 60} stroke="#fff" strokeWidth="1" />
          ))}
        </g>
        {/* hand holding bottle */}
        <rect x="120" y="60" width="80" height="160" rx="10" fill="#A41818" />
        <rect x="135" y="100" width="50" height="100" fill="#F5E6C8" />
        <rect x="138" y="40" width="44" height="22" rx="3" fill="#1B1B1B" />
        <text
          x="160"
          y="160"
          textAnchor="middle"
          fontFamily="'Alfa Slab One', serif"
          fontSize="14"
          fill="#A41818"
        >
          BALGAN
        </text>
      </g>
    )
  }
  // nachos
  return (
    <g>
      {/* triangular chips */}
      {Array.from({ length: 9 }).map((_, i) => {
        const x = 40 + (i % 3) * 90
        const y = 80 + Math.floor(i / 3) * 50
        return (
          <polygon
            key={i}
            points={`${x},${y} ${x + 70},${y + 10} ${x + 30},${y + 60}`}
            fill="#E2B257"
            stroke="#8a5d18"
            strokeWidth="2"
          />
        )
      })}
      {/* sauce drizzle */}
      <path
        d="M40 90 c80 60 180 -30 250 80"
        stroke="#A41818"
        strokeWidth="10"
        fill="none"
        strokeLinecap="round"
      />
    </g>
  )
}

export default function Recipes() {
  return (
    <section className="bg-balgan-cream-soft text-balgan-navy py-20 md:py-28 relative">
      <div className="max-w-[1280px] mx-auto px-6 text-center">
        <h2 className="font-display text-3xl md:text-5xl tracking-wide">
          RECIPES WITH BALGAN
        </h2>
        <p className="mt-5 max-w-2xl mx-auto text-sm md:text-base text-balgan-navy/80">
          See how our Korean fermented Chojang lights up everyday dishes —
          <br className="hidden md:block" />
          from snacks and dips to brunch and cocktails.
        </p>

        <div className="relative mt-12 md:mt-14">
          <button
            aria-label="Previous"
            className="hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-balgan-red text-balgan-cream items-center justify-center shadow-md hover:bg-balgan-red-deep transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {recipes.map((r) => (
              <div
                key={r.title}
                className="rounded-xl overflow-hidden shadow-[0_8px_24px_rgba(27,42,78,0.12)] bg-white"
              >
                <div
                  className="aspect-[4/3] relative"
                  style={{
                    background: `linear-gradient(160deg, ${r.bgFrom}, ${r.bgTo})`,
                  }}
                >
                  <svg viewBox="0 0 320 280" className="w-full h-full">
                    <RecipeArt glyph={r.glyph} />
                  </svg>
                </div>
                <div className="py-5">
                  <h3 className="font-display text-balgan-navy text-base md:text-lg tracking-wide">
                    {r.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          <button
            aria-label="Next"
            className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-balgan-red text-balgan-cream items-center justify-center shadow-md hover:bg-balgan-red-deep transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  )
}
