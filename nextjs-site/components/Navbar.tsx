'use client'
import { useState, useEffect } from 'react'

const links = [
  { href:'#about',        label:'About'        },
  { href:'#menu-gallery', label:'Menu'         },
  { href:'#gallery',      label:'Gallery'      },
  { href:'#takeaway',     label:'Order Online' },
  { href:'#find-us',      label:'Find Us'      },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <nav className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? 'bg-ink/95 backdrop-blur-md shadow-[0_1px_0_rgba(201,168,76,0.15)]' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-20 flex items-center justify-between">

        {/* Logo */}
        <a href="#" className="flex items-center gap-3 shrink-0">
          <img src="/logo.png" alt="Akami" className="h-9 w-auto" />
          <div className="hidden sm:block">
            <p className="font-display text-cream text-lg leading-none tracking-[.15em]">AKAMI</p>
            <p className="text-gold text-[9px] tracking-[.35em] uppercase leading-none mt-0.5">Sushi Lisboa</p>
          </div>
        </a>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-8">
          {links.map(({ href, label }) => (
            <a key={href} href={href}
               className="text-cream/55 hover:text-cream text-[11px] tracking-[.3em] uppercase font-medium transition-colors">
              {label}
            </a>
          ))}
        </div>

        {/* CTA + hamburger */}
        <div className="flex items-center gap-4">
          <a href="tel:+351217160316"
             className="hidden sm:inline-flex items-center gap-2 bg-crimson hover:bg-crimson-d text-cream text-xs font-semibold tracking-wider px-5 py-2.5 rounded-full transition-all duration-300">
            <i className="fas fa-phone text-[10px]" /> Reserve
          </a>
          <button onClick={() => setOpen(!open)}
                  className="lg:hidden w-9 h-9 flex items-center justify-center text-cream">
            <i className={`fas ${open ? 'fa-xmark' : 'fa-bars'} text-lg`} />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="lg:hidden bg-ink-2 border-t border-ink-4 px-6 py-6 flex flex-col gap-5">
          {links.map(({ href, label }) => (
            <a key={href} href={href} onClick={() => setOpen(false)}
               className="text-cream/60 hover:text-gold text-sm tracking-[.25em] uppercase font-medium pb-4 border-b border-ink-4">
              {label}
            </a>
          ))}
          <a href="tel:+351217160316"
             className="btn-crimson justify-center text-sm mt-2">
            <i className="fas fa-phone text-xs" /> +351 217 160 316
          </a>
        </div>
      )}
    </nav>
  )
}
