import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinks = ['Home', 'About', 'Deals', 'Products', 'Reviews', 'Visit Us']
  const sectionIds = ['home', 'about', 'deals', 'products', 'reviews', 'visit']

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMobileOpen(false)
  }

  const switchLanguage = (lang) => {
  if (lang === 'en') {
    const reset = () => {
      const expire = 'expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/'
      document.cookie = `googtrans=; ${expire}`
      document.cookie = `googtrans=; ${expire}; domain=${window.location.hostname}`
      window.location.reload()
    }
    reset()
    return
  }
  const trySwitch = (attempts = 0) => {
    const select = document.querySelector('.goog-te-combo')
    if (select) {
      select.value = lang
      select.dispatchEvent(new Event('change'))
    } else if (attempts < 10) {
      setTimeout(() => trySwitch(attempts + 1), 300)
    }
  }
  trySwitch()
}

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'shadow-2xl' : ''}`}
      style={{
        background: scrolled
          ? 'rgba(26, 34, 102, 0.98)'
          : 'linear-gradient(to bottom, rgba(26,34,102,0.9) 0%, rgba(26,34,102,0.3) 100%)',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">

          {/* Logo */}
          <button onClick={() => scrollTo('home')} className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-lg flex items-center justify-center text-lg font-bold flex-shrink-0"
                 style={{ background: 'linear-gradient(135deg, #F5C518, #D4A800)', color: '#1A2266' }}>
              ♛
            </div>
            <span className="font-serif text-lg lg:text-xl font-bold text-white group-hover:text-gold transition-colors tracking-wide">
              Maharajah Grocerz Inc
            </span>
          </button>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link, i) => (
              <button
                key={link}
                onClick={() => scrollTo(sectionIds[i])}
                className="text-white/85 hover:text-gold font-medium text-sm tracking-wide transition-colors duration-200 relative group"
              >
                {link}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full rounded-full" />
              </button>
            ))}
          </div>

          {/* Right side */}
          <div className="hidden lg:flex items-center gap-2">
            {[
              { code: 'en', label: '🇨🇦 EN' },
              { code: 'pa', label: 'ਪੰਜਾਬੀ' },
              { code: 'hi', label: 'हिन्दी' },
            ].map(({ code, label }) => (
              <button key={code} onClick={() => switchLanguage(code)}
                className="px-2.5 py-1 rounded-full text-xs font-medium border border-white/25 text-white/75 hover:border-gold hover:text-gold transition-all">
                {label}
              </button>
            ))}
            <a href="https://www.facebook.com/maharajahgrocerzinc/" target="_blank" rel="noopener noreferrer"
               className="w-8 h-8 rounded-full flex items-center justify-center border border-gold/50 text-gold hover:bg-gold hover:text-navy transition-all ml-1"
               aria-label="Facebook">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
          </div>

          {/* Mobile hamburger */}
          <button className="lg:hidden text-white p-2 flex flex-col justify-center gap-1.5"
            onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
            <span className={`block w-5 h-0.5 bg-white transition-all ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-5 h-0.5 bg-white transition-all ${mobileOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-0.5 bg-white transition-all ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-white/10 py-4 px-2"
               style={{ background: 'rgba(26,34,102,0.98)' }}>
            {navLinks.map((link, i) => (
              <button key={link} onClick={() => scrollTo(sectionIds[i])}
                className="block w-full text-left py-3 px-4 text-white/85 hover:text-gold hover:bg-white/5 rounded-lg transition-colors font-medium">
                {link}
              </button>
            ))}
            <div className="flex flex-wrap items-center gap-2 mt-4 px-4 pt-3 border-t border-white/10">
              {[{ code: 'en', label: '🇨🇦 EN' }, { code: 'pa', label: 'ਪੰਜਾਬੀ' }, { code: 'hi', label: 'हिन्दी' }].map(({ code, label }) => (
                <button key={code} onClick={() => switchLanguage(code)}
                  className="px-3 py-1.5 rounded-full text-xs border border-white/20 text-white/70 hover:border-gold hover:text-gold transition-all">
                  {label}
                </button>
              ))}
              <a href="https://www.facebook.com/maharajahgrocerzinc/" target="_blank" rel="noopener noreferrer"
                 className="ml-auto w-8 h-8 rounded-full flex items-center justify-center border border-gold/40 text-gold">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>
        )}
      </div>
      <div id="google_translate_element" style={{ position: 'absolute', opacity: 0, pointerEvents: 'none', height: 0, overflow: 'hidden' }} />
    </nav>
  )
}
