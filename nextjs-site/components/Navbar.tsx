'use client'

import { useState, useEffect } from 'react'

const links = [
  { href: '#about',        label: 'About' },
  { href: '#dine-in',      label: 'Dine In' },
  { href: '#menu-gallery', label: 'Menu' },
  { href: '#gallery',      label: 'Gallery' },
  { href: '#takeaway',     label: 'Order Online' },
  { href: '#find-us',      label: 'Find Us' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-dark-bg/95 backdrop-blur shadow-xl' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3">
          <img src="/logo.png" alt="Akami Sushi" className="h-10 w-auto" />
          <span className="text-white font-serif text-lg tracking-wide hidden sm:block">
            Akami Sushi
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-7">
          {links.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="text-white/75 hover:text-gold text-sm font-medium tracking-widest uppercase"
            >
              {label}
            </a>
          ))}
        </div>

        {/* Reserve button */}
        <a
          href="tel:+351217160316"
          className="hidden sm:inline-flex items-center gap-2 bg-akami hover:bg-akami-dark text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors"
        >
          <i className="fas fa-phone text-xs" />
          Reserve a Table
        </a>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <i className={`fas ${open ? 'fa-times' : 'fa-bars'} text-xl`} />
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="lg:hidden bg-dark-bg/98 px-6 pb-6 flex flex-col gap-4">
          {links.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="text-white/80 hover:text-gold text-base font-medium tracking-wide uppercase border-b border-dark-border pb-3"
            >
              {label}
            </a>
          ))}
          <a
            href="tel:+351217160316"
            className="mt-2 text-center bg-akami hover:bg-akami-dark text-white font-semibold py-3 rounded-full"
          >
            Reserve a Table
          </a>
        </div>
      )}
    </nav>
  )
}
