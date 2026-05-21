const items = [
  { icon: 'fa-sun',          label: 'Perfect for Lunch',          desc: 'Light, fresh sushi during your midday break.' },
  { icon: 'fa-moon',         label: 'Delightful Dinner',          desc: 'A cosy evening with friends or family.' },
  { icon: 'fa-bag-shopping', label: 'Convenient Takeaway',        desc: 'Restaurant-quality sushi at home.' },
  { icon: 'fa-users',        label: 'For Everyone',               desc: 'A menu that suits all ages and tastes.' },
]

export default function DineIn() {
  return (
    <section id="dine-in" className="bg-dark-bg py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="section-divider">
          <span className="text-gold text-xs tracking-[0.3em] uppercase font-medium">
            Experience
          </span>
        </div>
        <h2 className="text-4xl font-serif text-white text-center mb-4">
          Dine In Our Restaurant
        </h2>
        <p className="text-white/60 text-center max-w-xl mx-auto mb-14 leading-relaxed">
          Step into an elegant world where every detail is crafted for an unforgettable experience —
          from the first bite to the last.
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Photo grid */}
          <div className="grid grid-cols-2 gap-3 h-[440px]">
            <div className="menu-card">
              <img src="/images/sushi1.jpg" alt="Sushi" className="h-full" />
              <div className="menu-card-overlay">
                <span className="text-white text-sm font-medium">Sushi</span>
              </div>
            </div>
            <div className="menu-card">
              <img src="/images/hotdish1.jpg" alt="Hot dish" className="h-full" />
              <div className="menu-card-overlay">
                <span className="text-white text-sm font-medium">Hot Dishes</span>
              </div>
            </div>
            <div className="menu-card">
              <img src="/images/complimentary1.jpeg" alt="Complimentary" className="h-full" />
              <div className="menu-card-overlay">
                <span className="text-white text-sm font-medium">Starters</span>
              </div>
            </div>
            <div className="menu-card">
              <img src="/images/sushi2.jpg" alt="Sushi variety" className="h-full" />
              <div className="menu-card-overlay">
                <span className="text-white text-sm font-medium">Rolls</span>
              </div>
            </div>
          </div>

          {/* Feature list */}
          <div className="space-y-5">
            {items.map(({ icon, label, desc }) => (
              <div
                key={label}
                className="flex items-start gap-4 p-5 rounded-xl bg-dark-surface border border-dark-border hover:border-gold/40 transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-akami/20 border border-akami/30 flex items-center justify-center shrink-0 mt-0.5">
                  <i className={`fas ${icon} text-gold text-sm`} />
                </div>
                <div>
                  <p className="text-white font-semibold mb-1">{label}</p>
                  <p className="text-white/55 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}

            <a
              href="#menu-gallery"
              className="inline-flex items-center gap-3 mt-2 bg-akami hover:bg-akami-dark text-white font-semibold px-7 py-3.5 rounded-full transition-all duration-300 hover:scale-105"
            >
              <i className="fas fa-utensils text-sm" />
              Explore Our Menu
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
