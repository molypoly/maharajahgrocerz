import { useEffect, useRef } from 'react'

const stats = [
  { num: '500+', label: 'Products' },
  { num: '7', label: 'Days a Week' },
  { num: '★', label: "Kelowna's Favourite" },
]

export default function AboutSection() {
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
    <section id="about" ref={ref} className="py-24 overflow-hidden" style={{ background: '#F4F6FB' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Visual */}
          <div className="scroll-reveal relative order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden"
                 style={{ background: 'linear-gradient(135deg, #2B3990 0%, #1A2266 100%)', padding: '3rem', minHeight: '460px' }}>
              {/* Mandala */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-72 h-72 opacity-[0.08]" style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 300 300' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='150' cy='150' r='140' fill='none' stroke='%23F5C518' stroke-width='1.5'/%3E%3Ccircle cx='150' cy='150' r='110' fill='none' stroke='%23F5C518' stroke-width='1.5'/%3E%3Ccircle cx='150' cy='150' r='80' fill='none' stroke='%23F5C518' stroke-width='1.5'/%3E%3Ccircle cx='150' cy='150' r='50' fill='none' stroke='%23F5C518' stroke-width='1.5'/%3E%3Ccircle cx='150' cy='150' r='22' fill='none' stroke='%23F5C518' stroke-width='1.5'/%3E%3Cline x1='10' y1='150' x2='290' y2='150' stroke='%23F5C518' stroke-width='0.5'/%3E%3Cline x1='150' y1='10' x2='150' y2='290' stroke='%23F5C518' stroke-width='0.5'/%3E%3Cline x1='50' y1='50' x2='250' y2='250' stroke='%23F5C518' stroke-width='0.4'/%3E%3Cline x1='250' y1='50' x2='50' y2='250' stroke='%23F5C518' stroke-width='0.4'/%3E%3C/svg%3E")`,
                  backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center',
                }} />
              </div>

              {/* Icon grid */}
              <div className="relative z-10 grid grid-cols-2 gap-5 mt-8">
                {['🌶️', '🫙', '🥬', '🍛'].map((emoji, i) => (
                  <div key={i} className="flex items-center justify-center h-24 rounded-2xl"
                       style={{ background: 'rgba(245,197,24,0.12)', border: '1px solid rgba(245,197,24,0.2)' }}>
                    <span className="text-5xl">{emoji}</span>
                  </div>
                ))}
              </div>

              {/* Corner accents */}
              <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2" style={{ borderColor: '#F5C518', opacity: 0.5 }} />
              <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2" style={{ borderColor: '#F5C518', opacity: 0.5 }} />
              <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2" style={{ borderColor: '#F5C518', opacity: 0.5 }} />
              <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2" style={{ borderColor: '#F5C518', opacity: 0.5 }} />
            </div>

            {/* Floating accent */}
            <div className="absolute -bottom-5 -right-5 bg-white rounded-2xl px-5 py-4 shadow-2xl border border-royal/10">
              <div className="flex items-center gap-2">
                <span className="text-2xl">🏅</span>
                <div>
                  <div className="font-serif font-bold text-sm" style={{ color: '#1A2266' }}>Community Favourite</div>
                  <div className="text-xs font-semibold" style={{ color: '#F5C518' }}>Kelowna, BC</div>
                </div>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="scroll-reveal order-1 lg:order-2" style={{ transitionDelay: '0.2s' }}>
            <div className="inline-block px-4 py-2 rounded-full text-sm font-bold uppercase tracking-widest mb-6"
                 style={{ background: 'rgba(43,57,144,0.08)', color: '#2B3990' }}>
              Our Story
            </div>

            <h2 className="font-serif text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight mb-6" style={{ color: '#1A2266' }}>
              More Than a Grocery Store —<br />
              <span className="gold-shimmer">A Piece of Home</span>
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mb-5">
              Maharaja Grocery was built for the Kelowna community — a place where you can find the dosa batter, the right lentils, the spices your grandmother used, and the frozen samosas that save a busy weeknight.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-10">
              Whether you're a seasoned cook or just discovering South Asian cuisine, our knowledgeable, friendly staff are here to help. We don't just stock shelves — we connect people to culture, memory, and flavour.
            </p>

            {/* Stat badges */}
            <div className="flex flex-wrap gap-4">
              {stats.map((stat, i) => (
                <div key={i} className="flex-1 min-w-[120px] text-center px-4 py-4 rounded-2xl border"
                     style={{ background: 'white', borderColor: 'rgba(43,57,144,0.15)', boxShadow: '0 2px 12px rgba(43,57,144,0.07)' }}>
                  <div className="font-serif text-2xl font-bold" style={{ color: '#2B3990' }}>{stat.num}</div>
                  <div className="text-xs font-medium mt-1 text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
