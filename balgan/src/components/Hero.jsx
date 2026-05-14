export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-hanji text-ink">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 pt-24 md:pt-32 pb-20 md:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left 60%: copy */}
          <div className="lg:col-span-7 text-left">
            <div>
              <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-smoke">
                01 / Heritage
              </p>
              <div className="mt-4 h-px w-10 bg-[rgba(20,17,15,0.12)]" aria-hidden="true" />
            </div>

            <h1 className="mt-10 font-display font-bold leading-[1] tracking-[-0.02em] text-[clamp(60px,10vw,140px)]">
              <span className="block">We Engineer</span>
              <span className="block">As Aesthetic</span>
              <span className="block">As Possible</span>
            </h1>

            <p className="mt-8 font-serifKr text-[24px] leading-relaxed text-ink-soft">
              모약과의 결, 달빛의 여운
            </p>

            <div className="mt-12 flex items-center gap-6">
              <button className="font-body font-medium text-[14px] tracking-[0.2em] uppercase bg-crimson text-hanji px-8 py-[14px] rounded-[2px] hover:bg-crimson-deep hover:shadow-[0_10px_30px_rgba(20,17,15,0.14)] transition-all duration-400 ease-out">
                Discover →
              </button>
            </div>
          </div>

          {/* Right 40%: reserved space (video card excluded for now) */}
          <div className="lg:col-span-5 hidden lg:block">
            <div className="h-[440px] rounded bg-hanji-warm/40 border border-[rgba(20,17,15,0.12)]" aria-hidden="true" />
          </div>
        </div>

        {/* Bottom details */}
        <div className="mt-16 md:mt-20 flex items-end justify-between">
          <span className="font-mono text-[11px] tracking-[0.3em] uppercase text-smoke">
            ↓ Scroll
          </span>
          <span className="font-serifKr text-[16px] tracking-[0.06em] text-smoke">
            달빛 · 月光
          </span>
        </div>
      </div>
    </section>
  )
}
