const offerings = [
  { img:'/images/sushi1.jpg',         tag:'Sushi',       title:'Handcrafted Rolls',    desc:'From classic nigiri to bold signature maki.' },
  { img:'/images/hotdish1.jpg',       tag:'Hot Dishes',  title:'Warm & Comforting',    desc:'Rich ramen, teriyaki and wok-fired dishes.' },
  { img:'/images/complimentary1.jpeg',tag:'Starters',    title:'Complimentary Bites',  desc:'Delicate starters to open your appetite.' },
]

export default function DineIn() {
  return (
    <section id="dine-in" className="bg-ink py-28 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="gold-line justify-start mb-4">
              <span className="text-gold text-[10px] tracking-[.35em] uppercase">Experience</span>
            </div>
            <h2 className="font-display font-light text-cream leading-none"
                style={{ fontSize:'clamp(2.8rem,6vw,5.5rem)' }}>
              Dine With Us
            </h2>
          </div>
          <p className="text-cream/35 text-sm max-w-xs leading-relaxed">
            Every seat is a front-row view of our kitchen — where precision meets passion.
          </p>
        </div>

        {/* 3-col cards */}
        <div className="grid md:grid-cols-3 gap-4">
          {offerings.map(({ img, tag, title, desc }, i) => (
            <div key={title}
                 className={`img-card rounded-2xl h-[420px] anim-up delay-${i + 1}`}>
              <img src={img} alt={title} />
              <span className="img-card-tag">{tag}</span>
              <div className="img-card-overlay">
                <div>
                  <p className="text-cream font-serif text-xl mb-1">{title}</p>
                  <p className="text-cream/65 text-sm">{desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA row */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-6
                        border-t border-ink-4 pt-10">
          <div className="flex items-center gap-4 text-cream/35 text-sm">
            <i className="fas fa-clock text-gold" />
            <span>Daily: 11:30 – 15:30 &amp; 18:30 – 22:30</span>
          </div>
          <a href="#menu-gallery" className="btn-crimson text-sm">
            <i className="fas fa-utensils text-xs" /> Explore Full Menu
          </a>
        </div>
      </div>
    </section>
  )
}
