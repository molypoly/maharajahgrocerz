import { useEffect, useRef } from 'react'

const favourites = [
  {
    icon: '🥣',
    name: 'Dosa Batter',
    tagline: 'Customers drive across Kelowna just for this',
    desc: 'Our fresh, fermented dosa batter is the real deal — perfectly seasoned and ready to pour.',
  },
  {
    icon: '🥟',
    name: 'Frozen Samosas',
    tagline: 'The perfect shortcut to homemade taste',
    desc: "Crispy, golden, and stuffed with flavour. Keep a box in your freezer — you'll thank us.",
  },
  {
    icon: '🌶️',
    name: 'Fresh Spice Selection',
    tagline: 'The widest variety in the Okanagan',
    desc: 'From whole star anise to freshly ground hing — we have the spices your recipes demand.',
  },
]

export default function FavouritesSection() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1 }
    )
    ref.current?.querySelectorAll('.scroll-reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} className="py-24 relative overflow-hidden stripe-bg"
             style={{ background: 'linear-gradient(135deg, #1A2266 0%, #2B3990 100%)' }}>

      {/* Gold glow top-right */}
      <div className="absolute top-0 right-0 w-72 h-72 opacity-10 pointer-events-none"
           style={{ background: 'radial-gradient(circle, #F5C518 0%, transparent 70%)', transform: 'translate(30%,-30%)' }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14 scroll-reveal">
          <div className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4"
               style={{ background: 'rgba(245,197,24,0.15)', color: '#F5C518' }}>
            Customer Favourites
          </div>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-white">
            What Our Customers Keep<br />
            <span className="gold-shimmer">Coming Back For</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {favourites.map((item, i) => (
            <div
              key={i}
              className="scroll-reveal card-hover rounded-2xl overflow-hidden"
              style={{
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(245,197,24,0.2)',
                transitionDelay: `${i * 0.15}s`,
              }}
            >
              {/* Top */}
              <div className="p-8 text-center" style={{ borderBottom: '1px solid rgba(245,197,24,0.1)' }}>
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full text-4xl mb-4"
                     style={{ background: 'rgba(245,197,24,0.12)', border: '1px solid rgba(245,197,24,0.25)' }}>
                  {item.icon}
                </div>
                <h3 className="font-serif text-2xl font-bold mb-2" style={{ color: '#F5C518' }}>{item.name}</h3>
                <p className="text-white/45 text-xs uppercase tracking-widest font-medium italic">"{item.tagline}"</p>
              </div>
              {/* Bottom */}
              <div className="px-8 py-6">
                <p className="text-white/70 leading-relaxed text-sm">{item.desc}</p>
              </div>
              {/* Gold accent line */}
              <div className="h-1" style={{ background: 'linear-gradient(90deg, transparent, #F5C518, transparent)' }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
