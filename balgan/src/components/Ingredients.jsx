const ingredients = [
  'Red Korean Pepper',
  'Gochujang',
  'Water',
  'Sugar',
  'Salt',
  'Garlic',
  'Fermented Vinegar',
  'Sesame',
  'Rice Flour',
]

export default function Ingredients() {
  return (
    <section className="relative overflow-hidden bg-dalbit-black">
      {/* Iridescent moonlit backdrop */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(900px 480px at 30% 20%, rgba(176,132,255,0.18), transparent 60%), radial-gradient(800px 440px at 75% 80%, rgba(102,225,255,0.14), transparent 60%), #050507',
        }}
        aria-hidden="true"
      />

      {/* Holo grain layer (faint diagonal lines) */}
      <svg
        viewBox="0 0 1440 720"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 w-full h-full opacity-[0.18] mix-blend-screen"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="ing-holo" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF6EC7" />
            <stop offset="50%" stopColor="#66E1FF" />
            <stop offset="100%" stopColor="#FFE066" />
          </linearGradient>
        </defs>
        {Array.from({ length: 26 }).map((_, i) => (
          <line
            key={i}
            x1={-200 + i * 80}
            y1={0}
            x2={-200 + i * 80 + 600}
            y2={720}
            stroke="url(#ing-holo)"
            strokeWidth="1"
            opacity="0.4"
          />
        ))}
      </svg>

      <div className="relative max-w-[1440px] mx-auto px-6 py-24 md:py-32 text-center">
        <h2 className="font-display holo-text text-4xl md:text-6xl tracking-wide">
          Ingredients
        </h2>

        <ul className="mt-10 md:mt-14 space-y-2 md:space-y-3 text-dalbit-silver">
          {ingredients.map((ing) => (
            <li
              key={ing}
              className="font-display text-xl md:text-2xl tracking-[0.04em] hover:holo-text transition"
            >
              {ing}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
