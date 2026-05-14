import { Crescent } from './icons/Icons'

export default function FooterCTA() {
  return (
    <section className="relative bg-hanji">
      {/* Left edge vertical detail */}
      <div className="hidden md:block absolute left-6 top-10 bottom-10">
        <div className="h-full flex items-center">
          <span
            className="font-mono text-[11px] tracking-[0.3em] uppercase text-smoke"
            style={{ writingMode: 'vertical-rl' }}
          >
            EST · 2026 · SEOUL
          </span>
        </div>
      </div>

      {/* Upper */}
      <div className="bg-hanji text-center pt-16 md:pt-24 pb-10 md:pb-14 px-6">
        <div className="max-w-[900px] mx-auto">
          <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-smoke flex items-center justify-center gap-3">
            Stay in the Moonlight
            <Crescent className="w-4 h-4 text-smoke" />
          </p>

          <h2 className="font-display font-bold text-[clamp(56px,7vw,96px)] leading-none mt-6 tracking-[-0.02em] text-ink">
            DALBIT <span className="font-serifKr text-[0.32em] align-middle tracking-[0.08em] text-smoke">달빛</span>
          </h2>
        </div>
      </div>

      {/* Lower: email signup */}
      <div className="bg-hanji border-t border-[rgba(20,17,15,0.12)] text-center py-12 md:py-16 px-6">
        <h3 className="font-display italic font-semibold text-[clamp(28px,3vw,40px)] tracking-[-0.02em] text-ink">
          Stay in the Moonlight
        </h3>
        <p className="mt-4 font-body text-smoke max-w-xl mx-auto leading-relaxed">
          뉴스레터를 통해 가장 먼저 만나보세요.
        </p>

        <form
          className="mt-8 max-w-md mx-auto flex flex-col sm:flex-row gap-3"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            placeholder="your@email.com"
            className="flex-1 bg-hanji-warm border border-[rgba(20,17,15,0.12)] rounded-[2px] px-4 py-3 text-sm text-ink placeholder:text-smoke/70 focus:outline-none focus:border-crimson"
          />
          <button
            type="submit"
            className="font-body font-medium text-[14px] tracking-[0.2em] uppercase bg-crimson text-hanji px-8 py-[14px] rounded-[2px] hover:bg-crimson-deep hover:shadow-[0_10px_30px_rgba(20,17,15,0.14)] transition-all duration-400 ease-out"
          >
            Subscribe →
          </button>
        </form>

        <p className="mt-12 font-mono text-[11px] tracking-[0.3em] uppercase text-smoke/80">
          © 2026 DALBIT. ALL RIGHTS RESERVED.
        </p>

        <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2">
          {['Instagram', 'YouTube', 'Contact'].map((l) => (
            <a
              key={l}
              href="#"
              className="font-mono text-[11px] tracking-[0.3em] uppercase text-smoke hover:text-crimson transition-colors"
            >
              {l}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
