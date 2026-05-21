'use client'

export default function AboutSection() {
  return (
    <section id="about" className="bg-cream py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image collage */}
          <div className="grid grid-cols-2 gap-3 h-[480px]">
            <div className="menu-card row-span-2">
              <img src="/images/sushi1.jpg" alt="Sushi" className="h-full" />
              <div className="menu-card-overlay" />
            </div>
            <div className="menu-card">
              <img src="/images/hotdish1.jpg" alt="Hot dish" className="h-full" />
              <div className="menu-card-overlay" />
            </div>
            <div className="menu-card">
              <img src="/images/sushi2.jpg" alt="Sushi variety" className="h-full" />
              <div className="menu-card-overlay" />
            </div>
          </div>

          {/* Text */}
          <div>
            <div className="section-divider justify-start">
              <span className="text-gold text-xs tracking-[0.3em] uppercase font-medium">
                Our Story
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-dark-bg mb-6 leading-tight">
              Where Japan Meets<br />the Heart of Lisbon
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Welcome to <strong className="text-dark-bg">Akami Sushi</strong>, where modern
              Japanese flavours meet Lisbon&apos;s vibrant spirit. We serve fresh, authentic sushi
              prepared with premium ingredients and heartfelt hospitality.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Every dish tells a story — from hand-rolled nigiri to signature maki rolls. Our chefs
              bring decades of Japanese culinary tradition to your table, every single day.
            </p>

            {/* Award badge */}
            <div
              className="inline-flex items-center gap-4 bg-white rounded-2xl px-5 py-3 shadow-md border border-gray-100 cursor-pointer"
              onClick={() => {
                const el = document.querySelector<HTMLAnchorElement>('#circle-r-ribbon .r-ribbon_title')
                if (el) window.open(el.href)
              }}
            >
              <div id="circle-r-ribbon">
                <div className="r-ribbon_ahead">
                  <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="80px" height="80px" viewBox="0 0 160 160">
                    <defs><path id="heading-arc" d="M 30 80 a 50 50 0 1 1 100 0" /></defs>
                    <text className="r-ribbon_ahead-heading" fill="#000" textAnchor="middle">
                      <textPath startOffset="50%" xlinkHref="#heading-arc">Recomendado</textPath>
                    </text>
                  </svg>
                </div>
                <p className="r-ribbon_year">2025</p>
                <a href="https://pt.restaurantguru.com/Ss-Specialty-coffee-Lisbon-2" className="r-ribbon_title" target="_blank" rel="noopener noreferrer">
                  Akami Sushi
                </a>
                <div className="r-ribbon_ahead r-ribbon_ahead-bottom">
                  <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="60px" height="60px" viewBox="0 0 120 120">
                    <defs><path id="subheading-arc" d="M 12 60 a 48 48 0 0 0 96 0" /></defs>
                    <text className="r-ribbon_ahead-subh" fill="#000" textAnchor="middle">
                      <textPath startOffset="50%" xlinkHref="#subheading-arc">
                        <a href="https://restaurantguru.com" target="_blank" rel="noopener noreferrer">Restaurant Guru</a>
                      </textPath>
                    </text>
                  </svg>
                </div>
              </div>
              <div>
                <p className="text-sm font-semibold text-dark-bg">Recommended 2025</p>
                <p className="text-xs text-gray-500">Restaurant Guru</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
