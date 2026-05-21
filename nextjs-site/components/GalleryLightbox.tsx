'use client'
import { useState } from 'react'

interface Props {
  images: string[]
  title: string
  eyebrow?: string
  id?: string
  light?: boolean
}

export default function GalleryLightbox({ images, title, eyebrow, id, light = false }: Props) {
  const [active, setActive] = useState<string | null>(null)
  const bg = light ? 'bg-parchment' : 'bg-ink'
  const titleColor = light ? 'text-ink' : 'text-cream'

  return (
    <section id={id} className={`${bg} py-28 px-6`}>
      <div className="max-w-7xl mx-auto">
        <div className="gold-line justify-start mb-4">
          <span className="text-gold text-[10px] tracking-[.35em] uppercase">{eyebrow ?? 'Photos'}</span>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <h2 className={`font-display font-light ${titleColor} leading-none`}
              style={{ fontSize:'clamp(2.5rem,5.5vw,5rem)' }}>
            {title}
          </h2>
          <p className={`text-sm ${light ? 'text-ink/40' : 'text-cream/35'} max-w-xs leading-relaxed`}>
            Click any image to view full-size.
          </p>
        </div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5">
          {images.map((src, i) => (
            <div key={src}
                 className={`img-card rounded-xl cursor-pointer ${i === 0 ? 'md:col-span-2 md:row-span-2' : ''}`}
                 style={{ aspectRatio: i === 0 ? '1/1' : '3/4' }}
                 onClick={() => setActive(src)}>
              <img src={src} alt="Dish" className="w-full h-full object-cover" />
              <div className="img-card-overlay items-center justify-center">
                <i className="fas fa-expand text-cream/70 text-lg" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {active && (
        <div className="fixed inset-0 bg-black/97 flex items-center justify-center z-[9999] p-4 backdrop-blur-sm"
             onClick={() => setActive(null)}>
          <img src={active} alt=""
               className="max-w-[90vw] max-h-[90vh] rounded-2xl object-contain shadow-2xl"
               onClick={e => e.stopPropagation()} />
          <button onClick={() => setActive(null)}
                  className="absolute top-5 right-6 text-cream/50 hover:text-cream text-5xl font-thin leading-none transition-colors">
            &times;
          </button>
        </div>
      )}
    </section>
  )
}
