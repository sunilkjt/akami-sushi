export default function DineIn() {
  return (
    <section className="section-card bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
          <img
            src="/images/sushi1.jpg"
            alt="Sushi Dish"
            className="rounded-2xl shadow-lg object-cover h-48 w-full"
          />
          <img
            src="/images/hotdish1.jpg"
            alt="Hot Dish"
            className="rounded-2xl shadow-lg object-cover h-48 w-full"
          />
          <img
            src="/images/complimentary1.jpeg"
            alt="Complimentary Dish"
            className="rounded-2xl shadow-lg object-cover h-48 w-full"
          />
          <img
            src="/images/sushi2.jpg"
            alt="Sushi Variety"
            className="rounded-2xl shadow-lg object-cover h-48 w-full"
          />
        </div>

        <div className="w-full md:w-1/2 text-gray-800">
          <h2 className="text-3xl font-bold mb-4">Dine In Our Restaurant</h2>
          <p className="mb-4 text-lg">
            Step into the elegant world of <strong>Akami Sushi</strong>, where every detail is
            crafted for an unforgettable dine-in experience. We offer a wide variety of expertly
            prepared <strong>sushis</strong>, flavorful <strong>hot dishes</strong>, and delicious{' '}
            <strong>complimentary items</strong> to surprise your palate.
          </p>
          <p className="text-lg">
            Whether you&apos;re a sushi lover or trying Japanese cuisine for the first time, our
            menu caters to every taste. Relax, unwind, and let our chefs treat you to an authentic
            dining experience in the heart of Lisbon.
          </p>

          <h3 className="text-2xl font-semibold mt-8 mb-4">🍽️ Lunch, Dinner or Takeaway</h3>
          <ul className="space-y-4 text-left text-gray-700">
            {[
              { icon: '🍱', label: 'Perfect for Lunch', text: 'Drop by during your midday break and enjoy fresh, light sushi made with premium ingredients.' },
              { icon: '🌙', label: 'Delightful Dinner Experience', text: 'Akami Sushi is the ideal place for a cozy evening meal with friends or family in Lisbon.' },
              { icon: '🏠', label: 'Convenient Takeaway', text: 'Order online and enjoy restaurant-quality sushi in the comfort of your home.' },
              { icon: '👨‍👩‍👧‍👦', label: 'For Everyone', text: 'Our menu is suitable for all age groups — from kids to seniors — everyone loves Akami Sushi!' },
            ].map(({ icon, label, text }) => (
              <li key={label} className="flex items-start gap-3">
                <span className="text-red-500 text-xl">{icon}</span>
                <span>
                  <strong>{label}:</strong> {text}
                </span>
              </li>
            ))}
          </ul>

          <a
            href="#menu-gallery"
            className="inline-block mt-6 px-6 py-3 bg-red-600 text-white text-lg font-semibold rounded-full shadow-lg hover:bg-red-700 transition duration-300"
          >
            🍱 Explore Our Menu
          </a>
        </div>
      </div>
    </section>
  )
}
