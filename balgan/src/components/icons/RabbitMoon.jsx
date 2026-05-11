// DALBIT brand mark — uses the actual logo PNG (public/dalbit-logo.png).
// The artwork is rendered untouched; motion is added purely via CSS layers
// defined in src/index.css:
//   .dalbit-logo  — gentle vertical "pound" bob + iridescent drop-shadow flare on impact
//   .dalbit-aura  — radial holographic burst around the mortar area at impact
export default function RabbitMoon({ className = '' }) {
  return (
    <div className={`dalbit-logo-frame relative inline-block ${className}`}>
      <img
        src="/dalbit-logo.png"
        alt="DALBIT — moon rabbit pounding chojang"
        className="dalbit-logo block w-full h-auto select-none"
        draggable={false}
      />
      <div className="dalbit-aura absolute inset-0 pointer-events-none" aria-hidden="true" />
    </div>
  )
}
