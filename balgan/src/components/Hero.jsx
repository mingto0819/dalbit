import Octopus from './icons/Octopus'

export default function Hero() {
  return (
    <section className="relative bg-dalbit-red text-dalbit-cream overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 pt-20 md:pt-28 pb-0 text-center">
        <h1 className="font-display text-dalbit-cream text-[72px] md:text-[140px] lg:text-[180px] leading-[0.95] tracking-tight">
          DALBIT
        </h1>

        <p className="font-display mt-4 md:mt-6 text-lg md:text-2xl tracking-[0.08em]">
          NO 1. KOREAN HOT SAUCE, CHOJANG
        </p>

        <p className="font-display mt-6 md:mt-8 text-sm md:text-base tracking-[0.06em] leading-relaxed">
          WE MAKE AS DEEP AS POSSIBLE,
          <br />
          JUST ENJOY AS DIP AS POSSIBLE
        </p>

        <div className="mt-8 md:mt-10">
          <button className="font-display bg-dalbit-cream text-dalbit-red px-8 py-3 rounded-md text-sm md:text-base tracking-[0.1em] shadow-[0_4px_0_#7B1313] hover:translate-y-[1px] hover:shadow-[0_3px_0_#7B1313] transition-all">
            GET EARLY ACCESS
          </button>
        </div>
      </div>

      {/* Octopus illustration */}
      <div className="relative max-w-[1100px] mx-auto -mt-2 md:-mt-6 px-4">
        <Octopus className="w-full h-auto" stroke="#F5E6C8" />
      </div>

      {/* "YOU IN?" floating badge */}
      <a
        href="#access"
        className="hidden md:flex fixed left-6 bottom-6 z-40 font-display text-xs tracking-[0.1em] bg-dalbit-red text-dalbit-cream border border-dalbit-cream/30 rounded-full px-4 py-2 hover:bg-dalbit-cream hover:text-dalbit-red transition-colors"
      >
        YOU IN?
      </a>
    </section>
  )
}
