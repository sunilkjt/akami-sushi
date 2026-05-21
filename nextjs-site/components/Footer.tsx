const socials = [
  { href: 'https://www.instagram.com/akamisushilisboa', icon: 'fab fa-instagram', label: 'Instagram' },
  { href: 'https://www.facebook.com/sushichef37',       icon: 'fab fa-facebook',  label: 'Facebook'  },
  { href: 'https://wa.me/351920309613',                 icon: 'fab fa-whatsapp',  label: 'WhatsApp'  },
]

const delivery = [
  { href: 'https://www.ubereats.com/pt-en/store/akami-sushi/D6UAYSRHQaOGAFFG3-90eA', label: 'Uber Eats' },
  { href: 'https://food.bolt.eu/pt-PT/386-lisbon/p/144578-akami-sushi',               label: 'Bolt Food' },
  { href: 'https://glovoapp.com/pt/pt/lisboa/akami-sushi-poke-lis/',                   label: 'Glovo'     },
]

export default function Footer() {
  return (
    <footer className="bg-dark-bg border-t border-dark-border pt-16 pb-8 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <img src="/logo.png" alt="Akami Sushi" className="h-14 mb-4" />
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              Authentic Japanese cuisine in the heart of Lisbon. Fresh, handcrafted sushi since day one.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-gold text-xs tracking-[0.3em] uppercase font-medium mb-5">Contact</h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li className="flex items-center gap-2">
                <i className="fas fa-location-dot text-akami w-4" />
                R. Conselheiro José Silvestre Ribeiro 8A, Lisbon
              </li>
              <li className="flex items-center gap-2">
                <i className="fas fa-phone text-akami w-4" />
                <a href="tel:+351217160316" className="hover:text-white">+351 217 160 316</a>
              </li>
              <li className="flex items-center gap-2">
                <i className="fas fa-clock text-akami w-4" />
                Daily 11:30–15:30 &amp; 18:30–22:30
              </li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-gold text-xs tracking-[0.3em] uppercase font-medium mb-5">Follow & Order</h4>
            <div className="flex gap-4 mb-6">
              {socials.map(({ href, icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-full bg-dark-surface border border-dark-border flex items-center justify-center text-white/60 hover:text-gold hover:border-gold/40 transition-colors"
                >
                  <i className={icon} />
                </a>
              ))}
            </div>
            <ul className="space-y-2 text-sm text-white/60">
              {delivery.map(({ href, label }) => (
                <li key={label}>
                  <a href={href} target="_blank" rel="noopener noreferrer" className="hover:text-gold">
                    Order on {label} →
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-dark-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-white/30 text-xs">
          <p>© 2025 Akami Sushi. All rights reserved.</p>
          <p>Authentic Japanese Cuisine · Lisbon, Portugal</p>
        </div>
      </div>
    </footer>
  )
}
