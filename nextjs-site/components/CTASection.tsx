export default function CTASection() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-ink">
      {/* Background image */}
      <img src="/images/sushiroll.jpeg" alt=""
           className="absolute inset-0 w-full h-full object-cover opacity-30" />

      {/* Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/40" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">

        {/* Giant outline text */}
        <p className="font-display font-light text-outline-cream select-none leading-none mb-4 opacity-10"
           style={{ fontSize:'clamp(4rem,14vw,12rem)' }}>
          OMAKASE
        </p>

        <div className="gold-line justify-center -mt-4 mb-6">
          <span className="text-gold text-[10px] tracking-[.35em] uppercase">Reservations</span>
        </div>

        <h2 className="font-display font-light text-cream leading-tight mb-6"
            style={{ fontSize:'clamp(2.2rem,5vw,4.5rem)' }}>
          Taste the Best Sushi<br />in Lisbon
        </h2>

        <p className="text-cream/50 text-sm leading-relaxed max-w-md mx-auto mb-12">
          Call us to reserve your table, or message us on WhatsApp — we&apos;ll take care of the rest.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="tel:217160316" className="btn-crimson text-base">
            <i className="fas fa-phone text-sm" /> +351 217 160 316
          </a>
          <a href="https://wa.me/351920309613" target="_blank" rel="noopener noreferrer" className="btn-ghost text-base">
            <i className="fab fa-whatsapp text-green-400" /> WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  )
}
