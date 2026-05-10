import { ChevronLeft, ChevronRight } from './icons/Icons'

const recipes = [
  {
    title: 'DALBIT KALE SALAD',
    accent: 'from-dalbit-mint/40 to-dalbit-cyan/20',
    glyph: 'salad',
  },
  {
    title: 'SPICY SNACK SPREAD',
    accent: 'from-dalbit-violet/40 to-dalbit-pink/20',
    glyph: 'spread',
  },
  {
    title: 'SPICY DALBIT NACHOS',
    accent: 'from-dalbit-gold/40 to-dalbit-peach/20',
    glyph: 'nachos',
  },
]

function RecipeArt({ glyph, gradId }) {
  if (glyph === 'salad') {
    return (
      <g>
        <ellipse cx="160" cy="180" rx="110" ry="36" fill="#0B0B10" />
        <ellipse cx="160" cy="170" rx="108" ry="30" fill="#15151f" stroke={`url(#${gradId})`} strokeWidth="1" />
        {Array.from({ length: 18 }).map((_, i) => (
          <circle
            key={i}
            cx={70 + ((i * 14) % 180)}
            cy={150 + (i % 3) * 10}
            r={6 + (i % 3) * 2}
            fill={`url(#${gradId})`}
            opacity={0.7 + (i % 3) * 0.1}
          />
        ))}
        <path
          d="M60 130 q40 -30 80 -10 t100 10"
          stroke={`url(#${gradId})`}
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
        <g opacity="0.18">
          {Array.from({ length: 6 }).map((_, i) => (
            <line key={i} x1={i * 60} y1="0" x2={i * 60} y2="280" stroke="#9098B5" strokeWidth="1" />
          ))}
          {Array.from({ length: 5 }).map((_, i) => (
            <line key={i} x1="0" y1={i * 60} x2="320" y2={i * 60} stroke="#9098B5" strokeWidth="1" />
          ))}
        </g>
        <rect x="120" y="60" width="80" height="160" rx="10" fill="#0B0B10" stroke={`url(#${gradId})`} strokeWidth="1.5" />
        <rect x="135" y="100" width="50" height="100" fill={`url(#${gradId})`} opacity="0.95" />
        <rect x="138" y="40" width="44" height="22" rx="3" fill="#040406" stroke={`url(#${gradId})`} strokeWidth="1" />
        <text
          x="160"
          y="160"
          textAnchor="middle"
          fontFamily="'Alfa Slab One', serif"
          fontSize="14"
          fill="#0B0B10"
        >
          DALBIT
        </text>
      </g>
    )
  }
  // nachos
  return (
    <g>
      {Array.from({ length: 9 }).map((_, i) => {
        const x = 40 + (i % 3) * 90
        const y = 80 + Math.floor(i / 3) * 50
        return (
          <polygon
            key={i}
            points={`${x},${y} ${x + 70},${y + 10} ${x + 30},${y + 60}`}
            fill="#15151f"
            stroke={`url(#${gradId})`}
            strokeWidth="1.5"
          />
        )
      })}
      <path
        d="M40 90 c80 60 180 -30 250 80"
        stroke={`url(#${gradId})`}
        strokeWidth="10"
        fill="none"
        strokeLinecap="round"
      />
    </g>
  )
}

export default function Recipes() {
  return (
    <section className="bg-dalbit-black text-dalbit-silver py-20 md:py-28 relative">
      <div className="max-w-[1280px] mx-auto px-6 text-center">
        <h2 className="font-display holo-text text-3xl md:text-5xl tracking-wide">
          RECIPES WITH DALBIT
        </h2>
        <p className="mt-5 max-w-2xl mx-auto text-sm md:text-base text-dalbit-mist">
          See how our Korean fermented Chojang lights up everyday dishes —
          <br className="hidden md:block" />
          from snacks and dips to brunch and cocktails.
        </p>

        <div className="relative mt-12 md:mt-14">
          <button
            aria-label="Previous"
            className="hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-dalbit-ink text-dalbit-silver items-center justify-center holo-ring hover:text-white transition"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {recipes.map((r, idx) => {
              const gradId = `recipe-grad-${idx}`
              return (
                <div
                  key={r.title}
                  className="rounded-xl overflow-hidden bg-dalbit-ink holo-ring"
                >
                  <div className={`aspect-[4/3] relative bg-gradient-to-br ${r.accent}`}>
                    <svg viewBox="0 0 320 280" className="w-full h-full">
                      <defs>
                        <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#FF6EC7" />
                          <stop offset="33%" stopColor="#66E1FF" />
                          <stop offset="66%" stopColor="#6EFFC7" />
                          <stop offset="100%" stopColor="#FFE066" />
                        </linearGradient>
                      </defs>
                      <RecipeArt glyph={r.glyph} gradId={gradId} />
                    </svg>
                  </div>
                  <div className="py-5">
                    <h3 className="font-display text-base md:text-lg tracking-wide holo-text">
                      {r.title}
                    </h3>
                  </div>
                </div>
              )
            })}
          </div>

          <button
            aria-label="Next"
            className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-dalbit-ink text-dalbit-silver items-center justify-center holo-ring hover:text-white transition"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  )
}
