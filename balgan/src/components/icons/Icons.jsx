export const UserIcon = ({ className = '', stroke = 1.6 }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth={stroke} />
    <path
      d="M4 20.5c1.5-3.6 4.6-5.5 8-5.5s6.5 1.9 8 5.5"
      stroke="currentColor"
      strokeWidth={stroke}
      strokeLinecap="round"
    />
  </svg>
)

export const CartIcon = ({ className = '', stroke = 1.6 }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <path
      d="M3 5h2l2.4 11.2a2 2 0 0 0 2 1.6h7.8a2 2 0 0 0 2-1.5L21 8H6"
      stroke="currentColor"
      strokeWidth={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="10" cy="21" r="1.4" fill="currentColor" />
    <circle cx="17" cy="21" r="1.4" fill="currentColor" />
  </svg>
)

export const ChevronLeft = ({ className = '' }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <path
      d="M15 6l-6 6 6 6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export const ChevronRight = ({ className = '' }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <path
      d="M9 6l6 6-6 6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export const Crescent = ({ className = '' }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M14.5 3a9 9 0 1 0 7.5 14.4A11 11 0 0 1 14.5 3z" />
  </svg>
)

export const Star = ({ className = '', filled = true }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <path
      d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9L12 3z"
      fill={filled ? 'currentColor' : 'none'}
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinejoin="round"
    />
  </svg>
)

// Feature icons (cream/navy outlined style)
export const WheatIcon = ({ className = '' }) => (
  <svg viewBox="0 0 64 64" fill="none" className={className} aria-hidden="true">
    <path d="M32 6v52" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M32 14c-5 0-8 3-8 7s3 7 8 7M32 14c5 0 8 3 8 7s-3 7-8 7" stroke="currentColor" strokeWidth="2.5" />
    <path d="M32 28c-5 0-8 3-8 7s3 7 8 7M32 28c5 0 8 3 8 7s-3 7-8 7" stroke="currentColor" strokeWidth="2.5" />
    <path d="M32 42c-5 0-8 3-8 7s3 7 8 7M32 42c5 0 8 3 8 7s-3 7-8 7" stroke="currentColor" strokeWidth="2.5" />
  </svg>
)

export const LeafIcon = ({ className = '' }) => (
  <svg viewBox="0 0 64 64" fill="none" className={className} aria-hidden="true">
    <path
      d="M14 50C14 28 28 14 50 14c0 22-14 36-36 36z"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinejoin="round"
    />
    <path d="M14 50 36 28" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
)

export const DnaIcon = ({ className = '' }) => (
  <svg viewBox="0 0 64 64" fill="none" className={className} aria-hidden="true">
    <path
      d="M18 8c0 14 28 18 28 32s-28 18-28 32"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <path
      d="M46 8c0 14-28 18-28 32s28 18 28 32"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <path d="M22 16h20M22 24h20M22 40h20M22 48h20" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
  </svg>
)

export const FlameIcon = ({ className = '' }) => (
  <svg viewBox="0 0 64 64" fill="none" className={className} aria-hidden="true">
    <path
      d="M32 6c2 8 12 12 12 24a12 12 0 0 1-24 0c0-6 4-8 4-14 0 0 6 2 8-10z"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinejoin="round"
    />
  </svg>
)

export const BowlIcon = ({ className = '' }) => (
  <svg viewBox="0 0 64 64" fill="none" className={className} aria-hidden="true">
    <rect x="10" y="26" width="44" height="26" rx="3" stroke="currentColor" strokeWidth="2.5" />
    <path d="M16 36c4 4 8 4 12 0s8-4 12 0 8 4 12 0" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
  </svg>
)

export const PepperIcon = ({ className = '' }) => (
  <svg viewBox="0 0 64 64" fill="none" className={className} aria-hidden="true">
    <path
      d="M22 56c-8-2-12-12-8-20s14-12 24-12c4 0 6 4 4 8-4 8-12 26-20 24z"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinejoin="round"
    />
    <path
      d="M38 24c4-4 8-6 12-4-2 4-6 6-12 4z"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinejoin="round"
    />
  </svg>
)
