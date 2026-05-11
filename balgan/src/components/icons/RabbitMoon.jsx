// Moon-rabbit (달토끼) mark — composition mirrors the DALBIT brand logo:
// crescent moon (upper-left), rabbit sitting upright on the right gripping a
// diagonal pestle that lands in a mortar at the lower-left. Logo design is
// preserved; the only additions are the dynamic motion layers:
//   .rm-pound  — pestle + paws translate along the pestle axis on impact
//   .rm-eye    — eye blink synced to the strike
//   .rm-splash — holographic droplets burst from the mortar rim
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
        <symbol id={`${id}-sparkle`} viewBox="-10 -10 20 20">
          <path d="M0 -10 L2 -2 L10 0 L2 2 L0 10 L-2 2 L-10 0 L-2 -2 Z" fill={`url(#${grad})`} />
        </symbol>
      </defs>

      {/* Crescent moon, upper-left */}
      <g transform="translate(80 90)">
        <circle cx="0" cy="0" r="42" fill={`url(#${moon})`} stroke={`url(#${grad})`} strokeWidth="1.5" />
        <path
          d="M-10 -34 a40 40 0 1 0 0 68 a30 30 0 1 1 0 -68z"
          fill={`url(#${grad})`}
          opacity="0.85"
        />
      </g>

      {/* Ambient sparkles */}
      <g>
        <use href={`#${id}-sparkle`} x="160" y="60" width="20" height="20" />
        <use href={`#${id}-sparkle`} x="60" y="210" width="14" height="14" />
        <use href={`#${id}-sparkle`} x="430" y="120" width="16" height="16" />
        <use href={`#${id}-sparkle`} x="44" y="360" width="12" height="12" />
        <use href={`#${id}-sparkle`} x="430" y="380" width="14" height="14" />
        <use href={`#${id}-sparkle`} x="250" y="40" width="10" height="10" />
      </g>

      {/* === Rabbit silhouette (preserved from logo, profile facing left) === */}
      <g fill={`url(#${grad})`} stroke="none">
        <ellipse cx="404" cy="288" rx="12" ry="9" />
        <path
          d="
            M 286 234
            C 262 246, 248 296, 264 342
            C 278 374, 314 386, 352 380
            C 392 374, 414 354, 414 316
            C 414 282, 404 244, 376 224
            C 346 206, 308 216, 286 234 Z
          "
        />
        <path
          d="
            M 304 322
            C 296 342, 312 366, 348 366
            C 376 366, 388 354, 386 338
            C 380 322, 332 314, 304 322 Z
          "
          fill="#0B0B10"
          opacity="0.18"
        />
        <ellipse cx="320" cy="196" rx="40" ry="36" />
        <path
          d="
            M 344 162
            C 348 116, 360 76, 374 56
            C 376 92, 372 134, 358 170 Z
          "
          opacity="0.55"
        />
        <path
          d="
            M 308 168
            C 296 110, 308 56, 322 38
            C 342 62, 348 116, 338 168
            Q 322 172, 308 168 Z
          "
        />
      </g>

      <path
        d="
          M 314 156
          C 308 118, 318 80, 326 60
          C 338 82, 342 118, 332 158
          Q 322 160, 314 156 Z
        "
        fill="#0B0B10"
      />
      <ellipse cx="283" cy="208" rx="3.6" ry="2.6" fill="#0B0B10" />

      {/* Eye — animatable */}
      <g className="rm-eye" style={{ transformOrigin: '298px 192px' }}>
        <ellipse cx="298" cy="192" rx="3.4" ry="4.2" fill="#0B0B10" />
        <circle cx="297" cy="190" r="1.1" fill="#ffffff" opacity="0.65" />
      </g>

      {/* === Pestle + paws — drawn vertically and rotated +30° around the paw pivot
          so the entire stick (and grip) sits on a diagonal axis. The inner
          .rm-pound group then animates translateY *inside* that rotated frame,
          which translates the pestle down-left along its own axis — natural
          pounding motion straight into the mortar. === */}
      <g transform="rotate(30 260 215)">
        <g className="rm-pound">
          {/* Pestle, drawn as if vertical at x=260 */}
          <g>
            <ellipse cx="260" cy="158" rx="22" ry="14" fill={`url(#${grad})`} />
            <rect x="248" y="168" width="24" height="170" rx="8" fill={`url(#${grad})`} />
            <ellipse cx="260" cy="344" rx="18" ry="12" fill={`url(#${grad})`} />
            <rect x="252" y="174" width="4" height="160" rx="2" fill="#ffffff" opacity="0.18" />
          </g>

          {/* Forepaws gripping the shaft, two-handed */}
          <g fill={`url(#${grad})`}>
            <path
              d="
                M 286 208
                C 268 204, 248 212, 248 228
                C 248 242, 266 248, 284 242
                C 298 238, 298 214, 286 208 Z
              "
            />
            <path
              d="
                M 286 246
                C 268 242, 248 250, 248 266
                C 248 280, 266 286, 284 280
                C 298 276, 298 252, 286 246 Z
              "
            />
          </g>
        </g>
      </g>

      {/* === Mortar (절구) — lower-left, drawn AFTER the pestle so the rim
          covers the bottom of the pestle for a "plunged in" look === */}
      <g transform="translate(120 320)">
        <path
          d="M0 0 h140 l-12 60 a16 16 0 0 1 -16 12 H28 a16 16 0 0 1 -16 -12z"
          fill={`url(#${grad})`}
          stroke={`url(#${grad})`}
          strokeWidth="1.5"
        />
        <ellipse cx="70" cy="0" rx="70" ry="11" fill="#0B0B10" stroke={`url(#${grad})`} strokeWidth="2" />
        <ellipse cx="70" cy="2" rx="50" ry="6" fill={`url(#${grad})`} opacity="0.85" />
      </g>

      {/* === Splash droplets — anchored at mortar rim center (190, 320) === */}
      <g transform="translate(190 320)">
        <g className="rm-splash">
          <g fill={`url(#${grad})`}>
            <circle cx="-78" cy="-4" r="6" />
            <circle cx="-94" cy="-14" r="4" />
            <circle cx="-66" cy="-18" r="3.5" />
            <ellipse cx="-50" cy="-24" rx="3" ry="6" transform="rotate(-25 -50 -24)" />
            <circle cx="78" cy="-4" r="6" />
            <circle cx="92" cy="-14" r="4" />
            <circle cx="62" cy="-18" r="3.5" />
            <ellipse cx="50" cy="-24" rx="3" ry="6" transform="rotate(25 50 -24)" />
            <circle cx="0" cy="-22" r="4.5" />
            <circle cx="-22" cy="-32" r="2.6" />
            <circle cx="22" cy="-32" r="2.6" />
            <circle cx="0" cy="-42" r="2" />
          </g>
        </g>
      </g>
    </svg>
  )
}
