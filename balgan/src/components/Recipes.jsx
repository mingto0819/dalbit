const offerings = [
  { n: '01', name: 'CLASSIC', price: '₩28,000' },
  { n: '02', name: 'HONEY', price: '₩38,000' },
  { n: '03', name: 'PREMIUM', price: '₩68,000' },
]

export default function Recipes() {
  return (
    <section className="relative bg-hanji text-ink py-20 md:py-28">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-7">
            <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-smoke">
              06 / Offerings
            </p>
            <div className="mt-4 h-px w-10 bg-[rgba(20,17,15,0.12)]" aria-hidden="true" />

            <h2 className="mt-10 font-display font-bold leading-[1.05] tracking-[-0.02em] text-[clamp(48px,7vw,72px)]">
              Our Collection
            </h2>
            <p className="mt-6 font-body text-ink-soft max-w-[70ch] leading-relaxed">
              재료의 결이 먼저 전달되도록. 단정한 구성으로, 필요한 것만 남깁니다.
            </p>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {offerings.map((o) => (
            <div
              key={o.n}
              className="rounded-[4px] bg-hanji-warm border border-[rgba(20,17,15,0.12)] shadow-[0_10px_30px_rgba(20,17,15,0.06)] transition-transform duration-400 ease-out hover:-translate-y-1"
            >
              <div className="h-[220px] bg-hanji border-b border-[rgba(20,17,15,0.12)]" aria-label="Product image placeholder" />
              <div className="p-6">
                <div className="flex items-baseline justify-between">
                  <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-smoke">
                    {o.n}
                  </p>
                  <p className="font-display font-bold text-xl tracking-[-0.02em] text-ink">
                    {o.price}
                  </p>
                </div>
                <p className="mt-4 font-body font-medium tracking-[0.18em] text-ink">
                  {o.name}
                </p>

                <button className="mt-6 w-full font-body font-medium text-[14px] tracking-[0.2em] uppercase bg-crimson text-hanji px-8 py-[14px] rounded-[2px] hover:bg-crimson-deep hover:shadow-[0_10px_30px_rgba(20,17,15,0.14)] transition-all duration-400 ease-out">
                  Order →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
