const stats = [
  { value: '10+',  label: 'Years of Excellence' },
  { value: '50+',  label: 'Signature Dishes'     },
  { value: '★ 5',  label: 'Customer Rating'      },
  { value: '100%', label: 'Fresh Daily'          },
]

export default function StatsSection() {
  return (
    <section id="stats" className="bg-ink-2 border-y border-ink-4 py-14 px-6">
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
        {stats.map(({ value, label }, i) => (
          <div key={label} className={`anim-up delay-${i + 1}`}>
            <p className="stat-num">{value}</p>
            <div className="hr-gold my-3 max-w-[48px] mx-auto" />
            <p className="text-cream/40 text-[10px] tracking-[.25em] uppercase">{label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
