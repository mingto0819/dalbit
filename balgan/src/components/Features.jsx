const packagingItems = [
  { n: '01', en: 'Signature Shape', ko: '시그니처 쉐입' },
  { n: '02', en: 'Crisp Layers', ko: '바삭한 결' },
  { n: '03', en: 'Gift-ready Box', ko: '선물용 박스' },
  { n: '04', en: 'Pearl Accent (Optional)', ko: '자개 포인트(옵션)' },
]

export default function Features() {
  return (
    <section className="relative bg-hanji text-ink py-20 md:py-28">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-7">
            <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-smoke">
              05 / Aesthetic
            </p>
            <div className="mt-4 h-px w-10 bg-[rgba(20,17,15,0.12)]" aria-hidden="true" />

            <h2 className="mt-10 font-display italic font-bold leading-[1.05] tracking-[-0.02em] text-[clamp(48px,7vw,88px)]">
              A Gift Worth Keeping
              <br />
              the Box For
            </h2>

            <p className="mt-8 font-body text-ink-soft max-w-[70ch] leading-relaxed">
              패키징은 제품의 마지막 한 입까지 이어지는 경험입니다. 과장된 공예 설정 대신,
              모약과의 결·향·바삭함이 가장 먼저 전달되도록 정리합니다.
            </p>
          </div>

          {/* Package placeholder */}
          <div className="lg:col-span-5">
            <div className="rounded-[4px] bg-hanji-warm border border-[rgba(20,17,15,0.12)] shadow-[0_10px_30px_rgba(20,17,15,0.06)] p-6">
              <div
                className="h-[360px] rounded-[4px] bg-hanji border border-[rgba(20,17,15,0.12)]"
                aria-label="Packaging image placeholder"
              />
              <p className="mt-4 font-mono text-[11px] tracking-[0.3em] uppercase text-smoke">
                Packaging Preview (placeholder)
              </p>
            </div>
          </div>
        </div>

        {/* Index list */}
        <div className="mt-14 md:mt-16 border-t border-[rgba(20,17,15,0.12)]">
          {packagingItems.map((it, idx) => (
            <div
              key={it.n}
              className={[
                'py-6 md:py-7 grid grid-cols-12 gap-4 items-baseline',
                idx !== packagingItems.length - 1 ? 'border-b border-[rgba(20,17,15,0.12)]' : '',
              ].join(' ')}
            >
              <div className="col-span-2 sm:col-span-1">
                <span className="font-mono text-[11px] tracking-[0.3em] uppercase text-smoke">
                  {it.n}
                </span>
              </div>
              <div className="col-span-10 sm:col-span-11 flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
                <p className="font-body font-medium tracking-[0.04em] text-ink">
                  {it.en}
                </p>
                <p className="font-serifKr text-smoke">
                  {it.ko}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom-right CTA */}
        <div className="mt-10 flex justify-end">
          <button className="font-body font-medium text-[14px] tracking-[0.2em] uppercase bg-crimson text-hanji px-8 py-[14px] rounded-[2px] hover:bg-crimson-deep hover:shadow-[0_10px_30px_rgba(20,17,15,0.14)] transition-all duration-400 ease-out">
            Shop collection →
          </button>
        </div>
      </div>
    </section>
  )
}
