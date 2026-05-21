export default function CTASection() {
  return (
    <section
      className="section-card relative bg-cover bg-center bg-fixed text-white p-0 overflow-hidden"
      style={{ backgroundImage: "url('/images/sushiroll.jpeg')" }}
    >
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 max-w-3xl mx-auto text-center backdrop-blur-sm p-8 rounded-xl border border-white/10 shadow-xl my-8">
        <h2 className="text-4xl md:text-5xl font-serif mb-4 leading-tight">
          🍣 Taste the Best Sushi in Lisbon!
        </h2>
        <p className="text-lg md:text-xl mb-6 text-gray-200">
          Craving fresh, authentic Japanese flavors? Call us now and order your favorite sushi
          rolls, sashimi, and more — made with love at Akami Sushi.
        </p>
        <a
          href="tel:217160316"
          className="inline-block bg-red-600 hover:bg-red-700 text-white text-xl font-bold px-8 py-4 rounded-full shadow-md transition duration-300"
        >
          📞 +351 217 160 316
        </a>
        <p className="text-sm mt-4 text-gray-300">Open daily: 11:30–15:30 &amp; 18:30–22:30</p>
      </div>
    </section>
  )
}
