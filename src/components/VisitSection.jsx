import { useEffect, useRef } from 'react'

export default function VisitSection() {
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
    <section id="visit" ref={ref} className="py-24 relative" style={{ background: '#F4F6FB' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14 scroll-reveal">
          <div className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4"
               style={{ background: 'rgba(43,57,144,0.08)', color: '#2B3990' }}>
            Find Us
          </div>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold" style={{ color: '#1A2266' }}>Come See Us</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">

          {/* Map */}
          <div className="scroll-reveal rounded-3xl overflow-hidden shadow-2xl border-2" style={{ minHeight: '420px', borderColor: 'rgba(43,57,144,0.15)' }}>
            <iframe
              src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCd5S3sfNAkXaHS82XoFlXbVcnple43Xd8&q=place_id:ChIJL-cQLuyNfVMR0dfnf7ZQGU0&zoom=15"
              className="w-full h-full"
              style={{ minHeight: '420px', border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Maharajah Grocerz Inc Location"
            />
          </div>

          {/* Info card */}
          <div className="scroll-reveal rounded-3xl p-8 lg:p-10 flex flex-col justify-between"
               style={{
                 background: 'linear-gradient(135deg, #2B3990 0%, #1A2266 100%)',
                 transitionDelay: '0.2s',
               }}>
            <div>
              <div className="font-serif text-2xl font-bold mb-8" style={{ color: '#F5C518' }}>Store Information</div>

              <div className="space-y-6">
                {[
                  { icon: '📍', label: 'Address', content: '150 Asher Rd, Kelowna, BC V1X 3H6', href: null },
                  { icon: '📞', label: 'Phone', content: '(778) 957-0877', href: 'tel:+17789570877' },
                  { icon: '🕗', label: 'Hours', content: 'Open Daily: 8:00 AM – 11:00 PM', sub: '7 days a week', href: null },
                ].map(({ icon, label, content, sub, href }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                         style={{ background: 'rgba(245,197,24,0.15)', border: '1px solid rgba(245,197,24,0.2)' }}>
                      {icon}
                    </div>
                    <div>
                      <div className="text-white/45 text-xs uppercase tracking-wider mb-1 font-semibold">{label}</div>
                      {href ? (
                        <a href={href} className="text-white font-medium hover:text-gold transition-colors">{content}</a>
                      ) : (
                        <div className="text-white font-medium">{content}</div>
                      )}
                      {sub && <div className="text-xs font-bold mt-0.5" style={{ color: '#F5C518' }}>{sub}</div>}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-3 mt-8 pt-8" style={{ borderTop: '1px solid rgba(245,197,24,0.2)' }}>
              <a href="https://maps.google.com/?q=150+Asher+Rd+Kelowna+BC" target="_blank" rel="noopener noreferrer"
                 className="btn-gold w-full flex items-center justify-center gap-3 px-6 py-4 rounded-xl font-bold">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Get Directions
              </a>
              <a href="https://www.facebook.com/maharajahgrocerzinc/" target="_blank" rel="noopener noreferrer"
                 className="w-full flex items-center justify-center gap-3 px-6 py-4 rounded-xl font-semibold transition-all text-white"
                 style={{ border: '1px solid rgba(245,197,24,0.3)' }}
                 onMouseEnter={e => e.currentTarget.style.background = 'rgba(245,197,24,0.1)'}
                 onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
              >
                <svg className="w-5 h-5" fill="#F5C518" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                Follow us on Facebook
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
