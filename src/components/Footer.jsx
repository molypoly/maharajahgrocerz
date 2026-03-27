export default function Footer() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  const navLinks = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Deals', id: 'deals' },
    { label: 'Products', id: 'products' },
    { label: 'Reviews', id: 'reviews' },
    { label: 'Visit Us', id: 'visit' },
  ]

  return (
    <footer style={{ background: '#0F1540' }}>
      {/* Gold-to-royal gradient top bar */}
      <div className="h-1.5" style={{ background: 'linear-gradient(90deg, #1A2266, #F5C518, #2B3990, #F5C518, #1A2266)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start mb-12">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center font-bold text-navy"
                   style={{ background: 'linear-gradient(135deg, #F5C518, #D4A800)' }}>
                ♛
              </div>
              <span className="font-serif text-xl font-bold text-white">Maharajah Grocerz Inc</span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed italic pl-12">
              "Bringing the flavours of home to Kelowna."
            </p>
          </div>

          {/* Quick links */}
          <div>
            <div className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: '#F5C518' }}>Quick Links</div>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {navLinks.map(link => (
                <button key={link.id} onClick={() => scrollTo(link.id)}
                  className="text-white/50 text-sm hover:text-white transition-colors">
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact & Social */}
          <div>
            <div className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: '#F5C518' }}>Connect</div>
            <div className="space-y-2 text-white/50 text-sm mb-5">
              <div className="flex items-center gap-2">📍 <span>150 Asher Rd, Kelowna, BC</span></div>
              <div className="flex items-center gap-2">📞 <a href="tel:+17789570877" className="hover:text-white transition-colors">(778) 957-0877</a></div>
              <div className="flex items-center gap-2">🕗 <span>Daily 8 AM – 11 PM</span></div>
            </div>
            <div className="flex gap-3">
              <a href="https://www.facebook.com/maharajahgrocerzinc/" target="_blank" rel="noopener noreferrer"
                 className="w-9 h-9 rounded-full flex items-center justify-center transition-all"
                 style={{ border: '1px solid rgba(245,197,24,0.3)', color: '#F5C518' }}
                 onMouseEnter={e => { e.currentTarget.style.background = '#F5C518'; e.currentTarget.style.color = '#1A2266' }}
                 onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#F5C518' }}
                 aria-label="Facebook">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a href="https://wa.me/17789570877" target="_blank" rel="noopener noreferrer"
                 className="w-9 h-9 rounded-full flex items-center justify-center transition-all text-green-400"
                 style={{ border: '1px solid rgba(37,211,102,0.3)' }}
                 onMouseEnter={e => { e.currentTarget.style.background = '#25D366'; e.currentTarget.style.color = 'white' }}
                 onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#4ade80' }}
                 aria-label="WhatsApp">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t pt-8 text-center" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
          <p className="text-white/25 text-sm">© 2025 Maharajah Grocerz Inc, Kelowna BC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
