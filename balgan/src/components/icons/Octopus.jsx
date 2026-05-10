// Stylized octopus illustration in cream — captures BALGAN's mark
export default function Octopus({ className = '', stroke = 'currentColor' }) {
  return (
    <svg viewBox="0 0 600 380" fill="none" className={className} aria-hidden="true">
      <g stroke={stroke} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none">
        {/* Head */}
        <ellipse cx="300" cy="120" rx="78" ry="82" />
        {/* Eye spots */}
        <circle cx="278" cy="118" r="6" fill={stroke} stroke="none" />
        <circle cx="322" cy="118" r="6" fill={stroke} stroke="none" />
        {/* Smile */}
        <path d="M286 148c4 4 10 6 14 6s10-2 14-6" />

        {/* Tentacles — symmetric pairs curling outward */}
        {/* Left tentacles */}
        <path d="M242 178 c-22 14 -34 36 -52 46 c-22 12 -52 4 -56 -16 c-3 -16 14 -22 30 -16 c14 6 22 18 16 30" />
        <path d="M252 192 c-26 22 -46 50 -78 60 c-30 8 -56 -8 -52 -28 c4 -16 22 -18 36 -10 c14 8 18 24 8 36" />
        <path d="M264 204 c-22 32 -36 70 -28 100 c6 22 30 30 44 16 c12 -12 4 -28 -10 -32 c-14 -4 -28 6 -28 22" />
        <path d="M280 214 c-12 38 -8 88 8 116 c10 18 30 22 40 8 c8 -12 -2 -26 -16 -28 c-14 -2 -26 8 -22 22" />

        {/* Right tentacles (mirrors) */}
        <path d="M358 178 c22 14 34 36 52 46 c22 12 52 4 56 -16 c3 -16 -14 -22 -30 -16 c-14 6 -22 18 -16 30" />
        <path d="M348 192 c26 22 46 50 78 60 c30 8 56 -8 52 -28 c-4 -16 -22 -18 -36 -10 c-14 8 -18 24 -8 36" />
        <path d="M336 204 c22 32 36 70 28 100 c-6 22 -30 30 -44 16 c-12 -12 -4 -28 10 -32 c14 -4 28 6 28 22" />
        <path d="M320 214 c12 38 8 88 -8 116 c-10 18 -30 22 -40 8 c-8 -12 2 -26 16 -28 c14 -2 26 8 22 22" />

        {/* Suckers (dots scattered along tentacles) */}
        <g fill={stroke} stroke="none">
          <circle cx="180" cy="206" r="2.4" />
          <circle cx="160" cy="220" r="2.4" />
          <circle cx="140" cy="232" r="2.4" />
          <circle cx="200" cy="262" r="2.4" />
          <circle cx="174" cy="278" r="2.4" />
          <circle cx="232" cy="296" r="2.4" />
          <circle cx="248" cy="316" r="2.4" />
          <circle cx="284" cy="316" r="2.4" />
          <circle cx="298" cy="332" r="2.4" />

          <circle cx="420" cy="206" r="2.4" />
          <circle cx="440" cy="220" r="2.4" />
          <circle cx="460" cy="232" r="2.4" />
          <circle cx="400" cy="262" r="2.4" />
          <circle cx="426" cy="278" r="2.4" />
          <circle cx="368" cy="296" r="2.4" />
          <circle cx="352" cy="316" r="2.4" />
          <circle cx="316" cy="316" r="2.4" />
          <circle cx="302" cy="332" r="2.4" />
        </g>
      </g>
    </svg>
  )
}
