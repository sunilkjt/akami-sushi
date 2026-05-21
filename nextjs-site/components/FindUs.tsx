const info = [
  { icon: 'fa-location-dot', label: 'Address',       value: 'R. Conselheiro José Silvestre Ribeiro 8A, Lisbon' },
  { icon: 'fa-phone',        label: 'Phone',         value: '+351 217 160 316' },
  { icon: 'fa-clock',        label: 'Opening Hours', value: 'Daily: 11:30–15:30 & 18:30–22:30' },
]

export default function FindUs() {
  return (
    <section id="find-us" className="bg-dark-bg py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="section-divider">
          <span className="text-gold text-xs tracking-[0.3em] uppercase font-medium">
            Location
          </span>
        </div>
        <h2 className="text-4xl font-serif text-white text-center mb-14">Find Us</h2>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Info cards */}
          <div className="space-y-4">
            {info.map(({ icon, label, value }) => (
              <div
                key={label}
                className="flex items-start gap-4 p-5 bg-dark-surface rounded-xl border border-dark-border"
              >
                <div className="w-10 h-10 rounded-full bg-akami/20 border border-akami/30 flex items-center justify-center shrink-0">
                  <i className={`fas ${icon} text-gold text-sm`} />
                </div>
                <div>
                  <p className="text-gold text-xs uppercase tracking-wider font-medium mb-1">{label}</p>
                  <p className="text-white/80 text-sm leading-relaxed">{value}</p>
                </div>
              </div>
            ))}

            <a
              href="tel:+351217160316"
              className="flex items-center justify-center gap-3 w-full mt-2 bg-akami hover:bg-akami-dark text-white font-semibold py-3.5 rounded-full transition-colors"
            >
              <i className="fas fa-phone text-sm" />
              Call to Reserve
            </a>
          </div>

          {/* Map */}
          <div className="lg:col-span-2 rounded-2xl overflow-hidden shadow-xl h-[380px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3111.168479055289!2d-9.180463799999998!3d38.75983959999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd193350a62db15f%3A0x5bda4d8dfce15f51!2sAkami%20Sushi!5e0!3m2!1sen!2spt!4v1751978046351!5m2!1sen!2spt"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Akami Sushi location"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
