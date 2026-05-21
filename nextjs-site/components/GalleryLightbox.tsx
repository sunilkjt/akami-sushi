'use client'

import { useState } from 'react'

interface Props {
  images: string[]
  title: string
  id?: string
}

export default function GalleryLightbox({ images, title, id }: Props) {
  const [active, setActive] = useState<string | null>(null)

  return (
    <section className="section-card my-12" id={id}>
      <h2 className="text-5xl font-serif mb-6 text-center">{title}</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((src) => (
          <img
            key={src}
            src={src}
            alt="Dish"
            onClick={() => setActive(src)}
            className="w-full h-auto rounded-lg shadow-md transition-transform hover:scale-105 cursor-pointer"
          />
        ))}
      </div>

      {active && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-[9999]"
          onClick={() => setActive(null)}
        >
          <img
            src={active}
            alt="Full view"
            className="max-w-[90vw] max-h-[90vh] rounded-2xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            onClick={() => setActive(null)}
            className="absolute top-5 right-8 text-white text-5xl font-bold leading-none hover:text-gray-300"
          >
            &times;
          </button>
        </div>
      )}
    </section>
  )
}
