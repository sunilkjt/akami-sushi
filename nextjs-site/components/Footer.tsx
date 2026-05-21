const socials = [
  { href: 'https://www.instagram.com/akamisushilisboa', icon: 'fab fa-instagram', hover: 'hover:text-pink-400', title: 'Instagram' },
  { href: 'https://www.facebook.com/sushichef37', icon: 'fab fa-facebook', hover: 'hover:text-blue-400', title: 'Facebook' },
  { href: 'https://wa.me/351920309613', icon: 'fab fa-whatsapp', hover: 'hover:text-green-400', title: 'WhatsApp' },
  { href: 'https://www.ubereats.com/pt-en/store/akami-sushi/D6UAYSRHQaOGAFFG3-90eA', icon: 'fas fa-utensils', hover: 'hover:text-green-300', title: 'Uber Eats' },
  { href: 'https://food.bolt.eu/pt-PT/386-lisbon/p/144578-akami-sushi', icon: 'fas fa-person-biking', hover: 'hover:text-yellow-400', title: 'Bolt Food' },
  { href: 'https://glovoapp.com/pt/pt/lisboa/akami-sushi-poke-lis/', icon: 'fas fa-shopping-bag', hover: 'hover:text-yellow-300', title: 'Glovo' },
]

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8 mt-12 -mx-6 px-6">
      <div className="max-w-screen-xl mx-auto flex flex-col items-center space-y-4">
        <p className="text-lg font-sans">© 2025 Akami Sushi. All rights reserved.</p>
        <div className="flex justify-center items-center gap-6 text-2xl mt-2">
          {socials.map(({ href, icon, hover, title }) => (
            <a
              key={title}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              title={title}
              className={hover}
            >
              <i className={icon} />
            </a>
          ))}
        </div>
        <p className="text-sm text-gray-400">
          R. Conselheiro José Silvestre Ribeiro 8A, Lisbon
        </p>
      </div>
    </footer>
  )
}
