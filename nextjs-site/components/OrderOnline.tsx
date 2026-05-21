const platforms = [
  { name:'Bolt Food',  href:'https://food.bolt.eu/pt-PT/386-lisbon/p/144578-akami-sushi',                              icon:'fa-person-biking', bg:'#32bb78', text:'#fff'     },
  { name:'Uber Eats',  href:'https://www.ubereats.com/pt-en/store/akami-sushi/D6UAYSRHQaOGAFFG3-90eA',                 icon:'fa-utensils',      bg:'#000000', text:'#06c167'  },
  { name:'Glovo',      href:'https://glovoapp.com/pt/pt/lisboa/akami-sushi-poke-lis/',                                   icon:'fa-bag-shopping',  bg:'#FCD300', text:'#000000'  },
]

export default function OrderOnline() {
  return (
    <section id="takeaway" className="bg-ink-2 py-28 px-6">
      <div className="max-w-4xl mx-auto">

        {/* Big section number */}
        <p className="font-display text-[8rem] leading-none text-outline-gold opacity-30 select-none mb-[-2rem]">03</p>

        <div className="gold-line justify-start mb-4">
          <span className="text-gold text-[10px] tracking-[.35em] uppercase">Delivery</span>
        </div>
        <h2 className="font-display font-light text-cream mb-4 leading-none"
            style={{ fontSize:'clamp(2.5rem,5.5vw,5rem)' }}>
          Order Online
        </h2>
        <p className="text-cream/40 text-sm mb-14 max-w-sm leading-relaxed">
          Enjoy restaurant-quality sushi delivered straight to your door through your favourite platform.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          {platforms.map(({ name, href, icon, bg, text }) => (
            <a key={name} href={href} target="_blank" rel="noopener noreferrer"
               className="group flex items-center gap-3 px-7 py-4 rounded-2xl font-semibold text-base transition-all duration-300 hover:scale-105 hover:shadow-2xl"
               style={{ background: bg, color: text }}>
              <i className={`fas ${icon} text-lg`} />
              <span>{name}</span>
              <i className="fas fa-arrow-up-right-from-square text-xs ml-auto opacity-50 group-hover:opacity-100 transition-opacity" />
            </a>
          ))}
        </div>

        <div className="hr-gold mt-14 mb-6 max-w-xs" />
        <p className="text-cream/25 text-xs tracking-widest uppercase">
          Open Daily · 11:30 – 15:30 &amp; 18:30 – 22:30
        </p>
      </div>
    </section>
  )
}
