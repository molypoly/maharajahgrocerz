import { useEffect, useRef } from 'react'

const categories = [
  { icon: '🫙', name: 'Spices & Masalas', desc: 'Turmeric, cumin, coriander, garam masala & hundreds more' },
  { icon: '🥦', name: 'Fresh Produce', desc: 'Vibrant seasonal vegetables and exotic fruits, daily fresh' },
  { icon: '🧊', name: 'Frozen Foods & Ready Meals', desc: 'Samosas, parathas, curries — ready in minutes' },
  { icon: '🍬', name: 'Snacks, Sweets & Chocolates', desc: 'Murukku, ladoo, halwa, biscuits & imported treats' },
  { icon: '🫘', name: 'Lentils, Rice & Pantry Staples', desc: 'Basmati, toor dal, chana, atta & everyday essentials' },
  { icon: '🧴', name: 'Middle Eastern & Asian Specialties', desc: 'Persian, Lebanese, Chinese & Southeast Asian products' },
]

export default function ProductsSection() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.05 }
    )
    ref.current?.querySelectorAll('.scroll-reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="products" ref={ref} className="py-24 overflow-hidden" style={{ background: '#ffffff' }}>
      {/* Accent top bar */}
      <div className="h-1" style={{ background: 'linear-gradient(90deg, #2B3990, #F5C518, #2B3990)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        {/* Header */}
        <div className="text-center mb-16 scroll-reveal">
          <div className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4"
               style={{ background: 'rgba(43,57,144,0.08)', color: '#2B3990' }}>
            What We Carry
          </div>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold mb-4" style={{ color: '#1A2266' }}>
            Everything You Need,<br />All Under One Roof
          </h2>
          <p className="text-gray-500 text-xl max-w-2xl mx-auto">
            From everyday staples to hard-to-find specialty items — if you need it, we have it.
          </p>
          <div className="section-divider max-w-xs mx-auto mt-6" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <div
              key={i}
              className="scroll-reveal card-hover group rounded-2xl p-8 border cursor-default"
              style={{
                background: 'white',
                borderColor: 'rgba(43,57,144,0.1)',
                boxShadow: '0 2px 15px rgba(43,57,144,0.06)',
                transitionDelay: `${i * 0.08}s`,
              }}
            >
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-5 group-hover:scale-110 transition-transform duration-300"
                   style={{ background: 'linear-gradient(135deg, rgba(43,57,144,0.08), rgba(245,197,24,0.12))' }}>
                {cat.icon}
              </div>
              <h3 className="font-serif text-xl font-bold mb-2" style={{ color: '#1A2266' }}>{cat.name}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{cat.desc}</p>
              <div className="mt-5 h-0.5 w-0 group-hover:w-full transition-all duration-500 rounded-full"
                   style={{ background: 'linear-gradient(to right, #F5C518, transparent)' }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
