export default function Hero() {
  return (
    <header className="relative h-screen w-full overflow-hidden rounded-xl">
      <img
        src="/images/bg.jpg"
        alt="Akami Sushi Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      <div className="absolute inset-0 bg-black/40 z-10" />
      <div className="relative z-20 flex flex-col items-center justify-center text-center h-full text-white px-4">
        <img
          src="/logo.png"
          alt="Akami Sushi Logo"
          className="w-36 md:w-48 lg:w-60 object-contain mb-4 logo-glow hover:scale-110 transition-transform duration-500"
        />
        <h1 className="text-4xl md:text-6xl font-serif tracking-wide mb-2">Akami Sushi</h1>
        <p className="text-lg md:text-xl text-gray-200 mb-6">
          Authentic Japanese Cuisine in Lisbon
        </p>
        <p className="text-lg md:text-xl text-gray-200 mb-6">
          Lunch &bull; Dinner &bull;{' '}
          <a href="#takeaway" className="underline hover:text-white">
            Takeaway
          </a>
        </p>
        <p className="text-lg md:text-xl text-gray-200 flex flex-col md:flex-row gap-4 items-center justify-center">
          For reservations, Call us @
          <a href="tel:+351217160316" className="flex items-center gap-2 hover:text-gray-300">
            <i className="fas fa-phone" />
            <span>+351 217 160 316</span>
          </a>
          Or
          <a
            href="https://wa.me/351920309613"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-gray-300"
          >
            <i className="fab fa-whatsapp" />
            <span>Message on WhatsApp</span>
          </a>
        </p>
      </div>
    </header>
  )
}
