import { UserIcon, CartIcon } from './icons/Icons'
import { useEffect, useState } from 'react'

const navItems = ['OUR STORY', 'DIP', 'DEEP', 'SHOP']

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={[
        'sticky top-0 z-50',
        'bg-hanji/92 backdrop-blur',
        'border-b border-[rgba(20,17,15,0.12)]',
        scrolled ? 'shadow-[0_8px_24px_rgba(20,17,15,0.08)]' : 'shadow-none',
        'transition-shadow duration-300',
      ].join(' ')}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 h-20 grid grid-cols-12 items-center">
        {/* Left: mono label */}
        <div className="col-span-4 flex items-center">
          <span className="font-mono text-[11px] tracking-[0.3em] uppercase text-smoke">
            EST · 2026 · SEOUL
          </span>
        </div>

        {/* Center: logotype */}
        <div className="col-span-4 flex items-center justify-center">
          <a href="#" className="font-display font-bold text-[28px] tracking-wide text-ink">
            DALBIT
          </a>
        </div>

        {/* Right: menu */}
        <div className="col-span-4 flex items-center justify-end gap-8">
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item}
                href="#"
                className="font-body font-medium text-[13px] tracking-[0.18em] text-ink hover:text-crimson transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4 text-ink">
            <button aria-label="Account" className="hover:text-crimson transition-colors">
              <UserIcon className="w-5 h-5" />
            </button>
            <button aria-label="Cart" className="relative hover:text-crimson transition-colors">
              <CartIcon className="w-5 h-5" />
              <span className="absolute -top-1.5 -right-2 bg-holo-linear text-hanji text-[10px] font-bold w-4 h-4 flex items-center justify-center">
                0
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
