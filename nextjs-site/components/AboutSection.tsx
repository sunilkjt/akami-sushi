'use client'

export default function AboutSection() {
  return (
    <section id="about" className="bg-parchment py-28 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">

        {/* Big italic quote */}
        <blockquote className="font-display italic text-ink/10 text-center leading-tight mb-20 select-none"
                    style={{ fontSize:'clamp(2.5rem,7vw,6rem)' }}>
          &ldquo;Where every roll<br />tells a story&rdquo;
        </blockquote>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Image collage */}
          <div className="relative h-[500px] anim-l">
            {/* Main large image */}
            <div className="img-card absolute left-0 top-0 w-[65%] h-[75%] rounded-2xl shadow-2xl">
              <img src="/images/sushi1.jpg" alt="Sushi" />
            </div>
            {/* Accent image — overlapping bottom-right */}
            <div className="img-card absolute right-0 bottom-0 w-[55%] h-[55%] rounded-2xl shadow-2xl border-4 border-parchment">
              <img src="/images/sushi2.jpg" alt="Sushi variety" />
            </div>
            {/* Small floating badge */}
            <div className="absolute left-[60%] top-[40%] z-10 bg-ink text-cream rounded-xl px-4 py-3 shadow-xl border border-ink-4 text-center">
              <p className="font-display text-2xl text-gold leading-none">10+</p>
              <p className="text-[9px] tracking-[.2em] uppercase text-cream/50 mt-1">Years</p>
            </div>
          </div>

          {/* Text */}
          <div className="anim-r">
            <div className="gold-line justify-start mb-6">
              <span className="text-gold text-[10px] tracking-[.35em] uppercase font-medium">Our Story</span>
            </div>

            <h2 className="font-serif text-ink text-4xl md:text-5xl leading-tight mb-6">
              Where Japan Meets<br />
              <em className="not-italic text-crimson">the Heart of Lisbon</em>
            </h2>

            <p className="text-ink/55 leading-relaxed mb-5 text-[15px]">
              Welcome to <strong className="text-ink font-semibold">Akami Sushi</strong> — where
              modern Japanese flavours meet Lisbon&apos;s vibrant spirit. We source the finest
              fish, roll every piece by hand, and serve it with genuine warmth.
            </p>
            <p className="text-ink/55 leading-relaxed mb-10 text-[15px]">
              Each visit is an invitation to slow down, savour, and discover something new. From
              delicate nigiri to bold signature rolls, our menu honours tradition while embracing
              creativity.
            </p>

            {/* Award */}
            <div
              className="inline-flex items-center gap-4 bg-cream-d rounded-2xl px-5 py-3.5 border border-ink/10 cursor-pointer hover:border-gold/40 transition-colors"
              onClick={() => {
                const el = document.querySelector<HTMLAnchorElement>('#rg-link')
                if (el) window.open(el.href)
              }}
            >
              <div id="circle-r-ribbon" className="shrink-0 scale-[.65] origin-left">
                <div className="r-ribbon_ahead">
                  <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="80" height="80" viewBox="0 0 160 160">
                    <defs><path id="h-arc" d="M 30 80 a 50 50 0 1 1 100 0" /></defs>
                    <text className="r-ribbon_ahead-heading" fill="#000" textAnchor="middle">
                      <textPath startOffset="50%" xlinkHref="#h-arc">Recomendado</textPath>
                    </text>
                  </svg>
                </div>
                <p className="r-ribbon_year">2025</p>
                <a id="rg-link" href="https://pt.restaurantguru.com/Ss-Specialty-coffee-Lisbon-2" className="r-ribbon_title" target="_blank" rel="noopener noreferrer">Akami Sushi</a>
                <div className="r-ribbon_ahead r-ribbon_ahead-bottom">
                  <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="60" height="60" viewBox="0 0 120 120">
                    <defs><path id="s-arc" d="M 12 60 a 48 48 0 0 0 96 0" /></defs>
                    <text className="r-ribbon_ahead-subh" fill="#000" textAnchor="middle">
                      <textPath startOffset="50%" xlinkHref="#s-arc">
                        <a href="https://restaurantguru.com" target="_blank" rel="noopener noreferrer">Restaurant Guru</a>
                      </textPath>
                    </text>
                  </svg>
                </div>
              </div>
              <div>
                <p className="text-sm font-semibold text-ink">Recommended 2025</p>
                <p className="text-xs text-ink/40 mt-0.5">Restaurant Guru Award</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
