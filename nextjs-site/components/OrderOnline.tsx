const platforms = [
  {
    name: 'Bolt Food',
    href: 'https://food.bolt.eu/pt-PT/386-lisbon/p/144578-akami-sushi',
    bg: 'bg-[#32bb78] hover:bg-[#28a36a]',
    text: 'text-white',
    icon: 'fa-person-biking',
  },
  {
    name: 'Uber Eats',
    href: 'https://www.ubereats.com/pt-en/store/akami-sushi/D6UAYSRHQaOGAFFG3-90eA',
    bg: 'bg-black hover:bg-gray-900 border border-[#06c167]/30',
    text: 'text-[#06c167]',
    icon: 'fa-utensils',
  },
  {
    name: 'Glovo',
    href: 'https://glovoapp.com/pt/pt/lisboa/akami-sushi-poke-lis/',
    bg: 'bg-[#fcd300] hover:bg-[#f1c40f]',
    text: 'text-black',
    icon: 'fa-bag-shopping',
  },
]

export default function OrderOnline() {
  return (
    <section id="takeaway" className="bg-cream py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="section-divider">
          <span className="text-gold text-xs tracking-[0.3em] uppercase font-medium">
            Delivery
          </span>
        </div>
        <h2 className="text-4xl font-serif text-dark-bg mb-4">Order Online</h2>
        <p className="text-gray-500 mb-12 max-w-md mx-auto">
          Enjoy restaurant-quality sushi from the comfort of your home. Choose your favourite
          delivery platform below.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          {platforms.map(({ name, href, bg, text, icon }) => (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={`${bg} ${text} flex items-center gap-3 font-bold py-4 px-8 rounded-full transition-all duration-300 hover:scale-105 shadow-md text-lg`}
            >
              <i className={`fas ${icon}`} />
              {name}
            </a>
          ))}
        </div>

        <p className="mt-10 text-gray-400 text-sm">
          Open daily: <span className="text-dark-bg font-medium">11:30 – 15:30</span> &amp;{' '}
          <span className="text-dark-bg font-medium">18:30 – 22:30</span>
        </p>
      </div>
    </section>
  )
}
