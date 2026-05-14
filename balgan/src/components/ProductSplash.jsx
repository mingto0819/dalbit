export default function ProductSplash() {
  return (
    <section className="relative bg-hanji text-ink py-20 md:py-28">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-8">
            <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-smoke">
              02 / The Problem
            </p>
            <div className="mt-4 h-px w-10 bg-[rgba(20,17,15,0.12)]" aria-hidden="true" />

            <h2 className="mt-10 font-serifKr font-bold leading-[1.05] tracking-[-0.02em] text-[clamp(48px,7vw,88px)]">
              연간 <span className="text-crimson">14만 톤</span>의
              <br />
              잉여 쌀이
              <br />
              버려집니다.
            </h2>

            <div className="mt-12">
              <div className="flex items-end justify-between">
                <p className="font-body text-smoke text-sm">
                  Waste surplus rice (index)
                </p>
                <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-smoke">
                  2014 · 2020 · 2024
                </p>
              </div>

              <div className="mt-4 rounded-[4px] bg-hanji-warm border border-[rgba(20,17,15,0.12)] p-5">
                <svg viewBox="0 0 720 120" className="w-full h-[120px]" aria-label="Surplus rice trend line chart">
                  {/* baseline */}
                  <line x1="16" y1="92" x2="704" y2="92" stroke="rgba(20,17,15,0.22)" strokeWidth="1" />
                  {/* trend line */}
                  <path
                    d="M16 84 C 170 70, 250 88, 360 64 S 560 44, 704 52"
                    fill="none"
                    stroke="#14110F"
                    strokeWidth="1"
                  />
                  {/* markers */}
                  <circle cx="16" cy="84" r="4" fill="#8B1A1A" />
                  <circle cx="360" cy="64" r="4" fill="#8B1A1A" />
                  <circle cx="704" cy="52" r="4" fill="#8B1A1A" />
                </svg>

                <div className="mt-4 grid grid-cols-3 gap-4">
                  <div>
                    <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-smoke">2014</p>
                    <p className="mt-2 font-body text-ink-soft text-sm leading-relaxed">
                      기준선 시작
                    </p>
                  </div>
                  <div>
                    <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-smoke">2020</p>
                    <p className="mt-2 font-body text-ink-soft text-sm leading-relaxed">
                      증가 구간
                    </p>
                  </div>
                  <div>
                    <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-smoke">2024</p>
                    <p className="mt-2 font-body text-ink-soft text-sm leading-relaxed">
                      현재 추정치
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quote / stat box */}
          <div className="lg:col-span-4">
            <div className="rounded-[4px] bg-hanji-warm border border-[rgba(20,17,15,0.12)] p-6 shadow-[0_10px_30px_rgba(20,17,15,0.06)]">
              <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-smoke">
                Context
              </p>
              <p className="mt-6 font-body text-ink-soft leading-relaxed">
                버려지는 잉여 자원은 비용이 됩니다.
                <br />
                우리는 이를 “질감”으로 바꾸는 기술로 전환합니다.
              </p>
              <div className="mt-8 pt-6 border-t border-[rgba(20,17,15,0.12)]">
                <p className="font-display font-bold text-[clamp(56px,6vw,96px)] leading-none tracking-[-0.02em] text-crimson">
                  140K
                </p>
                <p className="mt-2 font-mono text-[11px] tracking-[0.3em] uppercase text-smoke">
                  Tons / Year
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
