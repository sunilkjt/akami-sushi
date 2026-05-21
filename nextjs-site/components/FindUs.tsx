export default function FindUs() {
  return (
    <section id="find-us" className="bg-ink-2 py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="gold-line justify-start mb-4">
          <span className="text-gold text-[10px] tracking-[.35em] uppercase">Location</span>
        </div>
        <h2 className="font-display font-light text-cream mb-14 leading-none"
            style={{ fontSize:'clamp(2.5rem,5.5vw,5rem)' }}>
          Find Us
        </h2>

        <div className="grid lg:grid-cols-5 gap-8 items-start">

          {/* Info column — 2 of 5 */}
          <div className="lg:col-span-2 space-y-6">
            {[
              { icon:'fa-location-dot', label:'Address',  value:'R. Conselheiro José Silvestre Ribeiro 8A\nLisbon, Portugal' },
              { icon:'fa-phone',        label:'Phone',    value:'+351 217 160 316' },
              { icon:'fa-clock',        label:'Hours',    value:'Mon – Sun\n11:30 – 15:30 & 18:30 – 22:30' },
            ].map(({ icon, label, value }) => (
              <div key={label} className="flex gap-4 p-5 rounded-xl bg-ink border border-ink-4 hover:border-gold/30 transition-colors">
                <div className="w-10 h-10 rounded-full bg-crimson/10 border border-crimson/20 flex items-center justify-center shrink-0">
                  <i className={`fas ${icon} text-gold text-sm`} />
                </div>
                <div>
                  <p className="text-gold text-[9px] tracking-[.25em] uppercase mb-1">{label}</p>
                  <p className="text-cream/70 text-sm leading-relaxed whitespace-pre-line">{value}</p>
                </div>
              </div>
            ))}

            <a href="tel:+351217160316"
               className="btn-crimson w-full justify-center text-sm mt-2">
              <i className="fas fa-phone text-xs" /> Call to Reserve
            </a>
          </div>

          {/* Map — 3 of 5 */}
          <div className="lg:col-span-3 rounded-2xl overflow-hidden h-[400px] border border-ink-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3111.168479055289!2d-9.180463799999998!3d38.75983959999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd193350a62db15f%3A0x5bda4d8dfce15f51!2sAkami%20Sushi!5e0!3m2!1sen!2spt!4v1751978046351!5m2!1sen!2spt"
              width="100%" height="100%" style={{ border:0 }}
              allowFullScreen loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Akami Sushi location"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
