export default function Hero() {
  return (
    <section className="relative h-screen flex overflow-hidden bg-ink">

      {/* ── LEFT PANEL ──────────────────────────────── */}
      <div className="relative z-10 flex flex-col justify-center px-10 md:px-16 lg:px-24 w-full lg:w-[54%] bg-ink">

        {/* Giant kanji watermark */}
        <span className="pointer-events-none select-none absolute -left-8 top-1/2 -translate-y-1/2 font-display font-light text-[22rem] leading-none text-white/[.025]">
          赤
        </span>

        {/* Top tag */}
        <div className="gold-line mb-10 anim-in">
          <span className="text-gold text-[10px] tracking-[.35em] uppercase font-medium">
            Lisboa · Portugal
          </span>
        </div>

        {/* Brand name */}
        <div className="anim-l delay-1">
          <h1 className="font-display font-light text-cream leading-[.9] tracking-[.18em]"
              style={{ fontSize: 'clamp(4rem,10vw,9rem)' }}>
            AKAMI
          </h1>
          <p className="font-display text-cream/40 tracking-[.55em] font-light leading-none mt-1"
             style={{ fontSize: 'clamp(1.4rem,3.5vw,3rem)' }}>
            SUSHI
          </p>
        </div>

        {/* Thin red line */}
        <div className="w-14 h-[2px] bg-crimson my-8 anim-in delay-2" />

        {/* Tagline */}
        <p className="text-cream/45 text-sm leading-relaxed max-w-xs anim-up delay-3">
          Authentic Japanese cuisine crafted daily with the finest ingredients, served in the
          heart of Lisbon since day one.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center gap-4 mt-10 anim-up delay-4">
          <a href="tel:+351217160316" className="btn-crimson text-sm">
            <i className="fas fa-phone text-xs" /> Reserve a Table
          </a>
          <a href="#menu-gallery"
             className="text-cream/50 hover:text-gold text-sm tracking-[.2em] uppercase font-medium flex items-center gap-2 transition-colors">
            View Menu <i className="fas fa-arrow-right text-xs" />
          </a>
        </div>

        {/* Bottom strip */}
        <div className="absolute bottom-8 left-10 md:left-16 lg:left-24 flex items-center gap-3 text-cream/25 text-[10px] tracking-widest uppercase anim-in delay-4">
          <span className="w-1.5 h-1.5 rounded-full bg-crimson" />
          Open Daily · 11:30 – 15:30 &amp; 18:30 – 22:30
        </div>
      </div>

      {/* ── RIGHT PANEL ─────────────────────────────── */}
      <div className="hidden lg:block absolute right-0 top-0 w-[50%] h-full">
        {/* edge gradient */}
        <div className="absolute inset-y-0 left-0 w-32 z-10
                        bg-gradient-to-r from-ink to-transparent" />

        <img src="/images/bg.jpg" alt="Akami Sushi"
             className="w-full h-full object-cover" />

        {/* dark overlay */}
        <div className="absolute inset-0 bg-ink/30" />

        {/* Floating reservation card */}
        <div className="absolute bottom-10 right-10 z-20
                        bg-ink-2/80 backdrop-blur-sm border border-ink-4
                        rounded-2xl p-5 w-52">
          <p className="text-gold text-[9px] tracking-[.3em] uppercase mb-2">Reservations</p>
          <p className="text-cream font-semibold text-base mb-1">+351 217 160 316</p>
          <div className="hr-gold my-3" />
          <a href="https://wa.me/351920309613" target="_blank" rel="noopener noreferrer"
             className="flex items-center gap-2 text-cream/55 hover:text-green-400 text-xs transition-colors">
            <i className="fab fa-whatsapp text-green-400" />
            Message on WhatsApp
          </a>
        </div>

        {/* Rotated side text */}
        <p className="absolute right-3 top-1/2 -translate-y-1/2 z-20
                      side-label text-cream/15 text-[9px] tracking-[.45em] uppercase">
          Authentic · Fresh · Japanese
        </p>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 bounce-y hidden lg:block">
        <a href="#stats" aria-label="Scroll">
          <i className="fas fa-chevron-down text-cream/25 text-xl" />
        </a>
      </div>
    </section>
  )
}
