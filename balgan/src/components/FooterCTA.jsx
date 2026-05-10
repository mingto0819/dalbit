import Octopus from './icons/Octopus'
import { Crescent } from './icons/Icons'

export default function FooterCTA() {
  return (
    <section className="relative">
      {/* Cream upper half with logo lockup */}
      <div className="bg-balgan-cream text-balgan-red text-center pt-16 md:pt-24 pb-10 md:pb-14 px-6">
        <div className="max-w-[900px] mx-auto">
          <p className="font-display text-balgan-red text-sm md:text-base tracking-[0.18em] flex items-center justify-center gap-3">
            KOREAN CHOJANG SAUCE
            <Crescent className="w-4 h-4 text-balgan-red" />
          </p>

          <h2 className="font-display text-balgan-red text-7xl md:text-9xl leading-none mt-3 md:mt-4 tracking-tight">
            BALGAN
          </h2>

          <div className="mt-8 md:mt-10 max-w-[260px] mx-auto">
            <Octopus className="w-full" stroke="#1B2A4E" />
          </div>
        </div>
      </div>

      {/* Red lower half with availability message */}
      <div className="bg-balgan-red text-balgan-cream text-center py-12 md:py-16 px-6">
        <h3 className="font-display text-xl md:text-2xl tracking-[0.06em]">
          Balgan Korean Chojang Sauce
        </h3>
        <p className="font-display mt-4 text-xs md:text-sm tracking-[0.16em] flex flex-wrap justify-center gap-x-3 gap-y-1">
          <span>Crafted in Korea</span>
          <span aria-hidden>•</span>
          <span>Fermented Chili-Based Sauce</span>
          <span aria-hidden>•</span>
          <span>Limited Availability</span>
        </p>
        <p className="mt-6 text-xs md:text-sm text-balgan-cream/80 max-w-xl mx-auto leading-relaxed">
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
            className="flex-1 bg-transparent border border-balgan-cream/40 rounded-md px-4 py-3 text-sm text-balgan-cream placeholder:text-balgan-cream/50 focus:outline-none focus:border-balgan-cream"
          />
          <button
            type="submit"
            className="font-display bg-balgan-cream text-balgan-red px-6 py-3 rounded-md text-sm tracking-[0.1em] hover:bg-white transition-colors"
          >
            NOTIFY ME
          </button>
        </form>

        <p className="mt-12 text-[11px] tracking-[0.18em] text-balgan-cream/60">
          © 2026 BALGAN. ALL RIGHTS RESERVED.
        </p>
      </div>
    </section>
  )
}
