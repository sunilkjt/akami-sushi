const features = [
  {
    icon: 'fa-fish',
    title: 'Fresh Sushi',
    desc: 'Crafted daily from the finest fish, sourced from trusted suppliers.',
  },
  {
    icon: 'fa-fire-burner',
    title: 'Hot Dishes',
    desc: 'Rich ramen, teriyaki and wok dishes — comfort food, Japanese style.',
  },
  {
    icon: 'fa-bowl-food',
    title: 'Poke & More',
    desc: 'Vibrant poke bowls and complimentary starters to delight every palate.',
  },
]

export default function Features() {
  return (
    <section className="bg-dark-bg py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="section-divider">
          <span className="text-gold text-xs tracking-[0.3em] uppercase font-medium">
            What We Offer
          </span>
        </div>
        <h2 className="text-4xl font-serif text-white text-center mb-14">
          Taste the Best of Japan
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {features.map(({ icon, title, desc }) => (
            <div key={title} className="feature-card text-center">
              <div className="w-14 h-14 rounded-full bg-akami/20 border border-akami/40 flex items-center justify-center mx-auto mb-5">
                <i className={`fas ${icon} text-gold text-xl`} />
              </div>
              <h3 className="text-xl font-serif text-white mb-3">{title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
