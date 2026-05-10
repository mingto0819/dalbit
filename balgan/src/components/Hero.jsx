import RabbitMoon from './icons/RabbitMoon'

export default function Hero() {
  return (
    <section className="relative holo-canvas overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 pt-24 md:pt-32 pb-0 text-center">
        <p className="font-display tracking-[0.32em] text-xs md:text-sm text-dalbit-mist">
          KOREAN CHOJANG SAUCE
        </p>

        <h1 className="font-display holo-text text-[72px] md:text-[160px] lg:text-[200px] leading-[0.95] tracking-tight mt-4 md:mt-6">
          DALBIT
        </h1>

        <p className="font-display mt-4 md:mt-6 text-lg md:text-2xl tracking-[0.08em] holo-text-soft">
          NO 1. KOREAN HOT SAUCE, CHOJANG
        </p>

        <p className="font-display mt-6 md:mt-8 text-sm md:text-base tracking-[0.06em] leading-relaxed text-dalbit-silver/80">
          WE MAKE AS DEEP AS POSSIBLE,
          <br />
          JUST ENJOY AS DIP AS POSSIBLE
        </p>

        <div className="mt-8 md:mt-10">
          <button className="holo-ring font-display bg-dalbit-ink text-dalbit-silver px-8 py-3 rounded-full text-sm md:text-base tracking-[0.1em] hover:bg-dalbit-panel transition-colors">
            <span className="holo-text">GET EARLY ACCESS</span>
          </button>
        </div>
      </div>

      {/* Rabbit / moon mark */}
      <div className="relative max-w-[860px] mx-auto mt-6 md:mt-8 px-4">
        <RabbitMoon className="w-full h-auto" />
      </div>

      {/* "YOU IN?" floating badge */}
      <a
        href="#access"
        className="hidden md:flex fixed left-6 bottom-6 z-40 font-display text-xs tracking-[0.1em] bg-dalbit-ink/80 text-dalbit-silver border border-dalbit-line rounded-full px-4 py-2 hover:text-white hover:[box-shadow:0_0_18px_rgba(176,132,255,0.4)] transition"
      >
        <span className="holo-text">YOU IN?</span>
      </a>
    </section>
  )
}
