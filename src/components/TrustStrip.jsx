import { useEffect, useRef } from 'react'

const items = [
  { icon: '🌶️', title: 'Authentic Products', desc: 'Hard-to-find Indian, South Asian & Middle Eastern staples' },
  { icon: '💰', title: 'Unbeatable Prices', desc: 'Better value than mainstream supermarkets' },
  { icon: '🤝', title: 'Legendary Service', desc: 'Staff who know their products and genuinely care' },
  { icon: '🥬', title: 'Fresh Produce Daily', desc: 'Vibrant, quality fruits and vegetables every day' },
]

export default function TrustStrip() {
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
    <section ref={ref} className="py-14 relative overflow-hidden stripe-bg"
             style={{ background: 'linear-gradient(135deg, #F5C518 0%, #D4A800 100%)' }}>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <div
              key={i}
              className="scroll-reveal text-center px-6 py-6 rounded-xl card-hover group cursor-default"
              style={{
                background: 'rgba(26,34,102,0.08)',
                border: '1px solid rgba(26,34,102,0.12)',
                transitionDelay: `${i * 0.1}s`,
              }}
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
              <h3 className="font-serif font-bold text-lg mb-1.5" style={{ color: '#1A2266' }}>{item.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(26,34,102,0.75)' }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
