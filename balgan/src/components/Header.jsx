import { UserIcon, CartIcon } from './icons/Icons'

const navItems = ['OUR STORY', 'DIP', 'DEEP', 'SHOP']

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-dalbit-black/85 backdrop-blur border-b border-dalbit-line">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 h-16 md:h-[72px] flex items-center justify-between">
        <a href="#" className="font-display text-2xl md:text-[28px] tracking-wide holo-text">
          DALBIT
        </a>

        <nav className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              className="font-display text-[15px] tracking-[0.08em] text-dalbit-silver hover:text-white hover:[text-shadow:0_0_10px_rgba(176,132,255,0.6)] transition"
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-5 text-dalbit-silver">
          <button aria-label="Account" className="hover:text-white transition-colors">
            <UserIcon className="w-5 h-5" />
          </button>
          <button aria-label="Cart" className="relative hover:text-white transition-colors">
            <CartIcon className="w-5 h-5" />
            <span className="absolute -top-1.5 -right-2 bg-holo-linear text-dalbit-black text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
              0
            </span>
          </button>
        </div>
      </div>
    </header>
  )
}
