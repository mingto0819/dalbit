import RabbitMoon from './icons/RabbitMoon'
import { Crescent } from './icons/Icons'

export default function FooterCTA() {
  return (
    <section className="relative">
      {/* Upper: dark with iridescent logo lockup */}
      <div className="holo-canvas text-center pt-16 md:pt-24 pb-10 md:pb-14 px-6">
        <div className="max-w-[900px] mx-auto">
          <p className="font-display text-dalbit-mist text-sm md:text-base tracking-[0.18em] flex items-center justify-center gap-3">
            KOREAN CHOJANG SAUCE
            <Crescent className="w-4 h-4 text-dalbit-silver holo-glow" />
          </p>

          <h2 className="font-display holo-text text-7xl md:text-9xl leading-none mt-3 md:mt-4 tracking-tight">
            DALBIT
          </h2>

          <div className="mt-8 md:mt-10 max-w-[280px] mx-auto">
            <RabbitMoon className="w-full" id="footer-rabbit" />
          </div>
        </div>
      </div>

      {/* Lower: pure black with availability + email signup */}
      <div className="bg-dalbit-black border-t border-dalbit-line text-dalbit-silver text-center py-12 md:py-16 px-6">
        <h3 className="font-display text-xl md:text-2xl tracking-[0.06em] holo-text-soft">
          Dalbit Korean Chojang Sauce
        </h3>
        <p className="font-display mt-4 text-xs md:text-sm tracking-[0.16em] flex flex-wrap justify-center gap-x-3 gap-y-1 text-dalbit-mist">
          <span>Crafted in Korea</span>
          <span aria-hidden>•</span>
          <span>Fermented Chili-Based Sauce</span>
          <span aria-hidden>•</span>
          <span>Limited Availability</span>
        </p>
        <p className="mt-6 text-xs md:text-sm text-dalbit-mist max-w-xl mx-auto leading-relaxed">
          Not currently available for direct purchase. Sign up to be notified
          <br className="hidden md:block" />
          when inventory becomes available.
        </p>

        <form
          className="mt-8 max-w-md mx-auto flex flex-col sm:flex-row gap-3"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            placeholder="your@email.com"
            className="flex-1 bg-dalbit-ink border border-dalbit-line rounded-md px-4 py-3 text-sm text-dalbit-silver placeholder:text-dalbit-mist/60 focus:outline-none focus:border-dalbit-violet/60"
          />
          <button
            type="submit"
            className="holo-ring font-display bg-dalbit-ink text-dalbit-silver px-6 py-3 rounded-md text-sm tracking-[0.1em] hover:text-white transition-colors"
          >
            <span className="holo-text">NOTIFY ME</span>
          </button>
        </form>

        <p className="mt-12 text-[11px] tracking-[0.18em] text-dalbit-mist/60">
          © 2026 DALBIT. ALL RIGHTS RESERVED.
        </p>
      </div>
    </section>
  )
}
