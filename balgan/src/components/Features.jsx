import {
  WheatIcon,
  LeafIcon,
  DnaIcon,
  FlameIcon,
  BowlIcon,
  PepperIcon,
} from './icons/Icons'

const features = [
  { Icon: WheatIcon, label: 'GLUTEN FREE' },
  { Icon: LeafIcon, label: 'VEGAN' },
  { Icon: DnaIcon, label: 'NON-GMO' },
  { Icon: FlameIcon, label: 'SWEET & SPICY' },
  { Icon: BowlIcon, label: 'TANGY GOCHUJANG' },
  { Icon: PepperIcon, label: 'FERMENTED KOREAN CHILI' },
]

export default function Features() {
  return (
    <section className="bg-balgan-cream-soft text-balgan-navy py-16 md:py-24">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-y-12 md:gap-y-16">
          {features.map(({ Icon, label }) => (
            <div key={label} className="flex flex-col items-center text-center px-4">
              <Icon className="w-14 h-14 md:w-16 md:h-16 text-balgan-navy" />
              <p className="font-display mt-4 md:mt-6 text-sm md:text-base tracking-[0.04em] leading-tight">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
