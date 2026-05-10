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
    <section className="relative overflow-hidden">
      {/* SVG background — abstract pile of red chili peppers */}
      <svg
        viewBox="0 0 1440 720"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 w-full h-full"
        aria-hidden="true"
      >
        <rect width="1440" height="720" fill="#3b0a0a" />
        {/* chili peppers as elongated ellipses with stems */}
        <g fill="#9b1a14">
          {Array.from({ length: 60 }).map((_, i) => {
            const x = (i * 137) % 1440
            const y = 320 + ((i * 73) % 380)
            const r = (i * 19) % 360
            return (
              <g key={i} transform={`translate(${x} ${y}) rotate(${r})`} opacity={0.85}>
                <ellipse cx="0" cy="0" rx="60" ry="14" fill="#c2231b" />
                <ellipse cx="-10" cy="-3" rx="50" ry="10" fill="#e84a36" opacity="0.6" />
                <rect x="50" y="-3" width="14" height="6" fill="#3a6b1f" />
              </g>
            )
          })}
        </g>
        <rect width="1440" height="720" fill="#000" opacity="0.35" />
      </svg>

      <div className="relative max-w-[1440px] mx-auto px-6 py-24 md:py-32 text-center text-dalbit-cream">
        <h2 className="font-display text-dalbit-cream text-4xl md:text-6xl tracking-wide">
          Ingredients
        </h2>

        <ul className="mt-10 md:mt-14 space-y-2 md:space-y-3">
          {ingredients.map((ing) => (
            <li
              key={ing}
              className="font-display text-xl md:text-2xl tracking-[0.04em]"
            >
              {ing}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
