export default function CTASection() {
  return (
    <section
      className="relative py-32 px-6 bg-cover bg-center bg-fixed overflow-hidden"
      style={{ backgroundImage: "url('/images/sushiroll.jpeg')" }}
    >
      <div className="absolute inset-0 bg-black/70" />
      <div className="relative z-10 max-w-3xl mx-auto text-center text-white">
        <div className="section-divider">
          <span className="text-gold text-xs tracking-[0.3em] uppercase font-medium">
            Reservations
          </span>
        </div>
        <h2 className="text-4xl md:text-5xl font-serif mb-6 leading-tight">
          Taste the Best Sushi<br />in Lisbon
        </h2>
        <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
          Craving fresh, authentic Japanese flavours? Call us now and secure your table — or order
          your favourite rolls for delivery.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:217160316"
            className="flex items-center justify-center gap-3 bg-akami hover:bg-akami-dark text-white font-semibold text-lg px-9 py-4 rounded-full shadow-lg transition-all duration-300 hover:scale-105"
          >
            <i className="fas fa-phone text-sm" />
            +351 217 160 316
          </a>
          <a
            href="https://wa.me/351920309613"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur border border-white/30 text-white font-semibold text-lg px-9 py-4 rounded-full transition-all duration-300 hover:scale-105"
          >
            <i className="fab fa-whatsapp text-green-400" />
            WhatsApp Us
          </a>
        </div>
        <p className="text-sm mt-8 text-white/40 tracking-widest uppercase">
          Open Daily · 11:30 – 15:30 &amp; 18:30 – 22:30
        </p>
      </div>
    </section>
  )
}
