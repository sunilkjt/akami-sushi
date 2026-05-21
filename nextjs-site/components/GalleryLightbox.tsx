'use client'

import { useState } from 'react'

interface Props {
  images: string[]
  title: string
  subtitle?: string
  id?: string
  dark?: boolean
}

export default function GalleryLightbox({ images, title, subtitle, id, dark = false }: Props) {
  const [active, setActive] = useState<string | null>(null)

  return (
    <section id={id} className={`py-24 px-6 ${dark ? 'bg-dark-bg' : 'bg-cream'}`}>
      <div className="max-w-7xl mx-auto">
        <div className="section-divider">
          <span className="text-gold text-xs tracking-[0.3em] uppercase font-medium">
            {subtitle ?? 'Photos'}
          </span>
        </div>
        <h2 className={`text-4xl font-serif text-center mb-12 ${dark ? 'text-white' : 'text-dark-bg'}`}>
          {title}
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {images.map((src) => (
            <div key={src} className="menu-card aspect-square" onClick={() => setActive(src)}>
              <img src={src} alt="Dish" className="w-full h-full object-cover" />
              <div className="menu-card-overlay flex items-center justify-center">
                <i className="fas fa-magnifying-glass-plus text-white/80 text-xl" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {active && (
        <div
          className="fixed inset-0 bg-black/95 flex items-center justify-center z-[9999] p-4"
          onClick={() => setActive(null)}
        >
          <img
            src={active}
            alt="Full view"
            className="max-w-[90vw] max-h-[90vh] rounded-2xl shadow-2xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            onClick={() => setActive(null)}
            className="absolute top-5 right-6 text-white/70 hover:text-white text-5xl font-light leading-none"
          >
            &times;
          </button>
        </div>
      )}
    </section>
  )
}
