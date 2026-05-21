'use client'

export default function AboutSection() {
  return (
    <section className="section-card my-16 text-center">
      <h2 className="text-5xl font-serif mb-6">🍣 About Us</h2>

      <div className="flex justify-center mb-6">
        <div
          id="circle-r-ribbon"
          onClick={() => {
            const el = document.querySelector<HTMLAnchorElement>('#circle-r-ribbon .r-ribbon_title')
            if (el) window.open(el.href)
          }}
          className="cursor-pointer"
        >
          <div className="r-ribbon_ahead">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width="160px"
              height="160px"
              viewBox="0 0 160 160"
            >
              <defs>
                <path id="heading-arc" d="M 30 80 a 50 50 0 1 1 100 0" />
              </defs>
              <text className="r-ribbon_ahead-heading" fill="#000" textAnchor="middle">
                <textPath startOffset="50%" xlinkHref="#heading-arc">
                  Recomendado
                </textPath>
              </text>
            </svg>
          </div>
          <p className="r-ribbon_year">2025</p>
          <a
            href="https://pt.restaurantguru.com/Ss-Specialty-coffee-Lisbon-2"
            className="r-ribbon_title"
            target="_blank"
            rel="noopener noreferrer"
          >
            Akami Sushi
          </a>
          <div className="r-ribbon_ahead r-ribbon_ahead-bottom">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width="120px"
              height="120px"
              viewBox="0 0 120 120"
            >
              <defs>
                <path id="subheading-arc" d="M 12 60 a 48 48 0 0 0 96 0" />
              </defs>
              <text className="r-ribbon_ahead-subh" fill="#000" textAnchor="middle">
                <textPath startOffset="50%" xlinkHref="#subheading-arc">
                  <a href="https://restaurantguru.com" target="_blank" rel="noopener noreferrer">
                    Restaurant Guru
                  </a>
                </textPath>
              </text>
            </svg>
          </div>
        </div>
      </div>

      <p className="text-xl leading-relaxed max-w-3xl mx-auto fade-in">
        Welcome to <strong>Akami Sushi</strong>, where modern Japanese flavors meet Lisbon&apos;s
        heart. We serve fresh, authentic sushi with premium ingredients and warm hospitality.
      </p>
    </section>
  )
}
