export default function Hero() {
  return (
    <header className="relative h-screen w-full overflow-hidden">
      <img
        src="/images/bg.jpg"
        alt="Akami Sushi"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/75 z-10" />

      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <img
          src="/logo.png"
          alt="Akami Sushi Logo"
          className="w-28 md:w-36 mb-6 logo-glow hover:scale-110 transition-transform duration-500"
        />

        <div className="flex items-center gap-4 mb-4">
          <span className="h-px w-12 bg-gold" />
          <span className="text-gold text-xs tracking-[0.3em] uppercase font-medium">
            Authentic Japanese Cuisine
          </span>
          <span className="h-px w-12 bg-gold" />
        </div>

        <h1 className="text-5xl md:text-7xl font-serif tracking-wide mb-4 leading-tight">
          Akami Sushi
        </h1>
        <p className="text-lg md:text-xl text-white/80 mb-3 font-light tracking-wide">
          Lisbon&apos;s Finest Japanese Dining Experience
        </p>
        <p className="text-sm text-white/60 mb-10 tracking-widest uppercase">
          Lunch · Dinner ·{' '}
          <a href="#takeaway" className="text-gold hover:text-gold-light underline-offset-4 hover:underline">
            Takeaway
          </a>
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="tel:+351217160316"
            className="flex items-center justify-center gap-3 bg-akami hover:bg-akami-dark text-white font-semibold px-8 py-4 rounded-full shadow-lg transition-all duration-300 hover:scale-105"
          >
            <i className="fas fa-phone text-sm" />
            +351 217 160 316
          </a>
          <a
            href="https://wa.me/351920309613"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur border border-white/30 text-white font-semibold px-8 py-4 rounded-full shadow-lg transition-all duration-300 hover:scale-105"
          >
            <i className="fab fa-whatsapp text-green-400" />
            WhatsApp
          </a>
        </div>

        <div className="absolute bottom-8 scroll-bounce">
          <a href="#about" aria-label="Scroll down">
            <i className="fas fa-chevron-down text-white/50 text-2xl" />
          </a>
        </div>
      </div>
    </header>
  )
}
