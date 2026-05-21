export default function Footer() {
  return (
    <footer className="bg-ink border-t border-ink-4 pt-20 pb-10 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Top grid */}
        <div className="grid md:grid-cols-3 gap-12 mb-16">

          {/* Brand column */}
          <div>
            <p className="font-display font-light text-cream text-4xl tracking-widest mb-1">AKAMI</p>
            <p className="font-display font-light text-gold/60 text-lg tracking-[.5em] mb-6">SUSHI</p>
            <p className="text-cream/30 text-xs leading-relaxed max-w-[220px]">
              Authentic Japanese cuisine crafted with precision, served in the heart of Lisbon.
            </p>
            <div className="hr-gold mt-8 max-w-[60px]" />
          </div>

          {/* Contact column */}
          <div>
            <p className="text-gold text-[9px] tracking-[.35em] uppercase mb-6">Contact</p>
            <ul className="space-y-4">
              {[
                { icon:'fa-location-dot', text:'R. Conselheiro José Silvestre\nRibeiro 8A, Lisbon' },
                { icon:'fa-phone',        text:'+351 217 160 316' },
                { icon:'fa-clock',        text:'Mon – Sun · 11:30–15:30\n& 18:30–22:30' },
              ].map(({ icon, text }) => (
                <li key={icon} className="flex gap-3 text-cream/40 text-xs leading-relaxed">
                  <i className={`fas ${icon} text-gold/60 mt-0.5 w-3 shrink-0`} />
                  <span className="whitespace-pre-line">{text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Links column */}
          <div>
            <p className="text-gold text-[9px] tracking-[.35em] uppercase mb-6">Order Online</p>
            <ul className="space-y-3 mb-8">
              {[
                { name:'Bolt Food',  href:'https://food.bolt.eu/pt-PT/386-lisbon/p/144578-akami-sushi' },
                { name:'Uber Eats',  href:'https://www.ubereats.com/pt-en/store/akami-sushi/D6UAYSRHQaOGAFFG3-90eA' },
                { name:'Glovo',      href:'https://glovoapp.com/pt/pt/lisboa/akami-sushi-poke-lis/' },
              ].map(({ name, href }) => (
                <li key={name}>
                  <a href={href} target="_blank" rel="noopener noreferrer"
                     className="text-cream/40 text-xs hover:text-gold transition-colors flex items-center gap-2 group">
                    <i className="fas fa-arrow-up-right-from-square text-[9px] opacity-0 group-hover:opacity-100 transition-opacity" />
                    {name}
                  </a>
                </li>
              ))}
            </ul>

            <p className="text-gold text-[9px] tracking-[.35em] uppercase mb-4">Social</p>
            <div className="flex gap-3">
              {[
                { icon:'fab fa-instagram', href:'https://www.instagram.com/akami.sushi.lisboa/' },
                { icon:'fab fa-facebook',  href:'https://www.facebook.com/akamisushilisboa' },
                { icon:'fab fa-whatsapp',  href:'https://wa.me/351920309613' },
              ].map(({ icon, href }) => (
                <a key={icon} href={href} target="_blank" rel="noopener noreferrer"
                   className="w-8 h-8 rounded-full border border-ink-4 hover:border-gold/40 flex items-center justify-center text-cream/40 hover:text-gold transition-all">
                  <i className={`${icon} text-xs`} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-ink-4 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-cream/20 text-[10px] tracking-widest uppercase">
            © {new Date().getFullYear()} Akami Sushi Lisboa · All rights reserved
          </p>
          <div className="flex gap-6">
            {[
              { label:'Menu', href:'#menu-gallery' },
              { label:'Reservations', href:'#find-us' },
              { label:'Delivery', href:'#takeaway' },
            ].map(({ label, href }) => (
              <a key={label} href={href}
                 className="text-cream/20 text-[10px] tracking-widest uppercase hover:text-gold/60 transition-colors">
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
