import { useState, useEffect, useRef } from 'react'

export default function DealsSection() {
  const [flyerUrl, setFlyerUrl] = useState(null)
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const stored = localStorage.getItem('maharaja_flyer_url')
    if (stored) setFlyerUrl(stored)

    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1 }
    )
    sectionRef.current?.querySelectorAll('.scroll-reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email) {
      window.location.href = `mailto:info@maharajagrocery.ca?subject=Weekly Deals Subscription&body=Please add ${email} to the weekly flyer mailing list.`
      setSubscribed(true)
    }
  }

  return (
    <section id="deals" ref={sectionRef} className="py-20 relative overflow-hidden"
      style={{ background: '#ffffff' }}>

      {/* Top border accent */}
      <div className="absolute top-0 left-0 right-0 h-1"
           style={{ background: 'linear-gradient(90deg, #2B3990, #F5C518, #2B3990)' }} />

      {/* Dot pattern bg */}
      <div className="absolute inset-0 dot-pattern" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-12 scroll-reveal">
          <div className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4"
               style={{ background: 'rgba(43,57,144,0.08)', color: '#2B3990' }}>
            Weekly Specials
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 mb-3">
            <h2 className="font-serif text-4xl lg:text-5xl font-bold" style={{ color: '#1A2266' }}>
              This Week's Deals
            </h2>
            <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold text-navy animate-bounce"
                  style={{ background: 'linear-gradient(135deg, #F5C518, #D4A800)' }}>
              ✦ Updated Weekly
            </span>
          </div>
          <div className="section-divider max-w-xs mx-auto" />
        </div>

        {/* PDF Viewer */}
        <div className="scroll-reveal mb-8" style={{ transitionDelay: '0.1s' }}>
          {flyerUrl ? (
            <div>
              <div className="rounded-2xl overflow-hidden shadow-2xl border-2 border-royal/15">
                <iframe
                  src={flyerUrl}
                  className="w-full"
                  style={{ height: '700px' }}
                  title="Weekly Flyer"
                />
              </div>
              <div className="text-center mt-4 md:hidden">
                <a href={flyerUrl} target="_blank" rel="noopener noreferrer"
                   className="btn-royal inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Download Flyer
                </a>
              </div>
            </div>
          ) : (
            <div className="rounded-2xl p-16 text-center border-2 border-dashed border-royal/20"
                 style={{ background: 'rgba(43,57,144,0.03)' }}>
              <div className="text-6xl mb-4">🛒</div>
              <h3 className="font-serif text-2xl font-bold mb-2" style={{ color: '#1A2266' }}>
                New deals dropping soon!
              </h3>
              <p className="text-gray-400">Check back this week for our latest specials and savings.</p>
            </div>
          )}
        </div>

        {/* Below viewer text */}
        <p className="text-center font-medium italic mb-12 scroll-reveal" style={{ color: '#2B3990', transitionDelay: '0.2s' }}>
          ✦ New deals every week — visit us in store! ✦
        </p>

        {/* Email Signup */}
        <div className="scroll-reveal rounded-2xl p-8 lg:p-12 text-center shadow-xl"
             style={{
               background: 'linear-gradient(135deg, #2B3990 0%, #1A2266 100%)',
               transitionDelay: '0.3s',
             }}>
          <h3 className="font-serif text-3xl font-bold mb-2" style={{ color: '#F5C518' }}>Get the Deals First</h3>
          <p className="text-white/75 mb-8 text-lg">Subscribe to get this week's flyer delivered straight to your inbox.</p>

          {subscribed ? (
            <div className="inline-flex items-center gap-3 px-6 py-4 rounded-full border-2 border-gold/50"
                 style={{ color: '#F5C518', background: 'rgba(245,197,24,0.1)' }}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="font-semibold">You're subscribed! We'll be in touch.</span>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="flex-1 px-5 py-3 rounded-full text-white placeholder-white/40 focus:outline-none transition-all"
                style={{ background: 'rgba(255,255,255,0.1)', border: '2px solid rgba(245,197,24,0.3)' }}
                onFocus={e => e.target.style.borderColor = '#F5C518'}
                onBlur={e => e.target.style.borderColor = 'rgba(245,197,24,0.3)'}
              />
              <button type="submit" className="btn-gold px-7 py-3 rounded-full font-bold whitespace-nowrap">
                Notify Me
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
