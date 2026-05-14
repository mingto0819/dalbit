export default function Ingredients() {
  return (
    <section className="relative bg-hanji text-ink py-20 md:py-28 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-smoke">
          04 / Craft
        </p>
        <div className="mt-4 h-px w-10 bg-[rgba(20,17,15,0.12)]" aria-hidden="true" />

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-stretch">
          {/* Left: heritage */}
          <div className="lg:col-span-6 rounded-[4px] bg-hanji-warm border border-[rgba(20,17,15,0.12)] p-8 md:p-10 shadow-[0_10px_30px_rgba(20,17,15,0.06)]">
            <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-smoke">
              Heritage
            </p>
            <h3 className="mt-6 font-display font-bold text-[36px] leading-tight tracking-[-0.02em]">
              300 Years
              <br />
              Heritage
            </h3>
            <div className="mt-8 rounded-[4px] border border-[rgba(20,17,15,0.12)] bg-hanji h-[240px]" aria-label="Artisan image placeholder" />
            <p className="mt-6 font-body text-ink-soft leading-relaxed max-w-[70ch]">
              명인의 손길에서 시작된 결은, 시간을 통해 더 단단해집니다.
            </p>
          </div>

          {/* Right: tech */}
          <div className="lg:col-span-6 rounded-[4px] bg-hanji border border-[rgba(20,17,15,0.12)] p-8 md:p-10 shadow-[0_10px_30px_rgba(20,17,15,0.06)]">
            <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-smoke">
              Technology
            </p>
            <h3 className="mt-6 font-display font-bold text-[36px] leading-tight tracking-[-0.02em]">
              2026 Precision
              <br />
              Technology
            </h3>
            <div className="mt-8 rounded-[4px] border border-[rgba(20,17,15,0.12)] bg-hanji-warm h-[240px]" aria-label="Technology image placeholder" />
            <p className="mt-6 font-body text-ink-soft leading-relaxed max-w-[70ch]">
              재료·공정·시간을 수치로 설계해, 같은 결과를 더 아름답게 반복합니다.
            </p>
          </div>
        </div>

        {/* Center: 300 ✕ 2026 */}
        <div className="mt-14 md:mt-18 text-center">
          <p className="font-display font-bold leading-none tracking-[-0.04em] text-[clamp(80px,12vw,140px)]">
            <span className="text-crimson">300</span> ✕ <span className="text-crimson">2026</span>
          </p>
        </div>

        {/* Spec sheet */}
        <div className="mt-14 md:mt-16 max-w-[860px] mx-auto rounded-[4px] bg-hanji-warm border border-[rgba(20,17,15,0.12)] p-6 md:p-8">
          <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-smoke">
            Spec Sheet
          </p>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-10">
            {[
              '21 LAYERS',
              '0.1MM PRECISION',
              '4HRS FERMENTATION',
              '100% KOREAN RICE',
            ].map((line, idx) => (
              <div key={line} className={idx > 1 ? 'mt-4 sm:mt-0' : ''}>
                <p className="font-mono text-[14px] tracking-[0.12em] text-ink">
                  {line}
                </p>
                <div className="mt-4 h-px w-full bg-[rgba(20,17,15,0.12)]" aria-hidden="true" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
