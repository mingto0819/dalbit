const steps = [
  {
    n: '01',
    title: 'MILL',
    subtitle: '가루화',
    desc: '쌀을 미세 입도로 분쇄해 질감의 기반을 만듭니다.',
  },
  {
    n: '02',
    title: 'LAYER',
    subtitle: '층상화',
    desc: '겹을 설계해 바삭함과 향의 레이어를 정밀하게 쌓습니다.',
  },
  {
    n: '03',
    title: 'CRISP',
    subtitle: '바삭화',
    desc: '열·시간·수분을 제어해 가볍고 긴 여운의 식감을 완성합니다.',
  },
]

export default function Solution() {
  return (
    <section className="relative bg-hanji text-ink py-20 md:py-28">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-7">
            <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-smoke">
              03 / The Solution
            </p>
            <div className="mt-4 h-px w-10 bg-[rgba(20,17,15,0.12)]" aria-hidden="true" />

            <h2 className="mt-10 font-display italic font-semibold leading-[1.02] tracking-[-0.02em] text-[clamp(60px,8vw,100px)]">
              Powdered Rice
              <br />
              Technology
            </h2>

            <p className="mt-8 font-body text-ink-soft max-w-[70ch] leading-relaxed">
              버려지는 잉여 자원을 “먹는 질감”으로 전환하기 위해, 분쇄·층상·바삭의 3단계를
              하나의 공정으로 연결합니다.
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-[4px] bg-hanji-warm border border-[rgba(20,17,15,0.12)] p-6 shadow-[0_10px_30px_rgba(20,17,15,0.06)]">
              <div className="grid grid-cols-1 gap-6">
                {steps.map((s, idx) => (
                  <div key={s.n}>
                    <div className="flex items-baseline justify-between">
                      <p className="font-display font-bold text-3xl tracking-[-0.02em] text-smoke">
                        {s.n}
                      </p>
                      <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-smoke">
                        {s.title}
                      </p>
                    </div>
                    <p className="mt-3 font-serifKr text-base text-ink-soft">
                      {s.subtitle}
                    </p>
                    <p className="mt-2 font-body text-sm text-smoke leading-relaxed">
                      {s.desc}
                    </p>
                    {idx !== steps.length - 1 && (
                      <div
                        className="mt-6 h-px w-full bg-[rgba(20,17,15,0.12)]"
                        aria-hidden="true"
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

