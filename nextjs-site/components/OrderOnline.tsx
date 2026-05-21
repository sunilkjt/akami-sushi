const platforms = [
  {
    name: 'Bolt Food',
    href: 'https://food.bolt.eu/pt-PT/386-lisbon/p/144578-akami-sushi',
    className: 'bg-[#32bb78] hover:bg-[#28a36a] text-white',
  },
  {
    name: 'Uber Eats',
    href: 'https://www.ubereats.com/pt-en/store/akami-sushi/D6UAYSRHQaOGAFFG3-90eA',
    className: 'bg-black hover:bg-gray-900 text-[#06c167]',
  },
  {
    name: 'Glovo',
    href: 'https://glovoapp.com/pt/pt/lisboa/akami-sushi-poke-lis/',
    className: 'bg-[#fcd300] hover:bg-[#f1c40f] text-black',
  },
]

export default function OrderOnline() {
  return (
    <section id="takeaway" className="section-card my-10 text-center">
      <h2 className="text-5xl font-serif mb-6">🍱 Order Online</h2>
      <div className="flex flex-wrap justify-center gap-3">
        {platforms.map(({ name, href, className }) => (
          <a
            key={name}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`${className} font-bold py-3 px-6 rounded-full transition-all duration-300`}
          >
            Order on {name}
          </a>
        ))}
      </div>
    </section>
  )
}
