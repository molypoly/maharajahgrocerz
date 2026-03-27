import { useEffect, useRef } from 'react'

export default function HeroSection() {
  const heroRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1 }
    )
    heroRef.current?.querySelectorAll('.scroll-reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0F1540 0%, #1A2266 40%, #2B3990 75%, #1A2266 100%)',
      }}
    >
      {/* Diagonal stripe texture */}
      <div className="absolute inset-0 stripe-bg" />

      {/* Gold dot accent — top right */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10"
           style={{ background: 'radial-gradient(circle, #F5C518 0%, transparent 70%)', transform: 'translate(30%, -30%)' }} />

      {/* Royal blue glow — bottom left */}
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full opacity-20"
           style={{ background: 'radial-gradient(circle, #3D4FB5 0%, transparent 70%)', transform: 'translate(-30%, 30%)' }} />

      {/* Mandala watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] opacity-[0.04]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='200' cy='200' r='190' fill='none' stroke='%23F5C518' stroke-width='1'/%3E%3Ccircle cx='200' cy='200' r='155' fill='none' stroke='%23F5C518' stroke-width='1'/%3E%3Ccircle cx='200' cy='200' r='120' fill='none' stroke='%23F5C518' stroke-width='1'/%3E%3Ccircle cx='200' cy='200' r='85' fill='none' stroke='%23F5C518' stroke-width='1'/%3E%3Ccircle cx='200' cy='200' r='50' fill='none' stroke='%23F5C518' stroke-width='1'/%3E%3Ccircle cx='200' cy='200' r='18' fill='none' stroke='%23F5C518' stroke-width='1'/%3E%3Cline x1='10' y1='200' x2='390' y2='200' stroke='%23F5C518' stroke-width='0.5'/%3E%3Cline x1='200' y1='10' x2='200' y2='390' stroke='%23F5C518' stroke-width='0.5'/%3E%3Cline x1='65' y1='65' x2='335' y2='335' stroke='%23F5C518' stroke-width='0.4'/%3E%3Cline x1='335' y1='65' x2='65' y2='335' stroke='%23F5C518' stroke-width='0.4'/%3E%3Cline x1='10' y1='134' x2='390' y2='266' stroke='%23F5C518' stroke-width='0.3'/%3E%3Cline x1='10' y1='266' x2='390' y2='134' stroke='%23F5C518' stroke-width='0.3'/%3E%3C/svg%3E")`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">

        {/* Crown badge */}
        <div className="scroll-reveal mb-6">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full border-2 border-gold/40 mb-2"
               style={{ background: 'rgba(245,197,24,0.1)' }}>
            <span className="text-4xl" style={{ color: '#F5C518' }}>♛</span>
          </div>
        </div>

        {/* Open badge */}
        <div className="scroll-reveal mb-8" style={{ transitionDelay: '0.1s' }}>
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-gold/40 text-sm font-semibold"
                style={{ background: 'rgba(245,197,24,0.12)', color: '#F5C518', backdropFilter: 'blur(10px)' }}>
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Open Daily 8 AM – 11 PM
          </span>
        </div>

        {/* Headline */}
        <h1 className="scroll-reveal font-serif text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-6 text-white"
            style={{ transitionDelay: '0.2s', textShadow: '0 4px 24px rgba(0,0,0,0.4)' }}>
          Where Every Ingredient
          <br />
          <span className="gold-shimmer">Tells a Story</span>
        </h1>

        {/* Subheadline */}
        <p className="scroll-reveal text-white/75 text-lg sm:text-xl lg:text-2xl max-w-2xl mx-auto mb-10 font-light leading-relaxed"
           style={{ transitionDelay: '0.3s' }}>
          Kelowna's premier destination for authentic Indian, South Asian &amp; Middle Eastern groceries.
        </p>

        {/* CTAs */}
        <div className="scroll-reveal flex flex-col sm:flex-row gap-4 justify-center" style={{ transitionDelay: '0.4s' }}>
          <button
            onClick={() => document.getElementById('deals')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-gold px-9 py-4 rounded-full font-bold text-lg tracking-wide"
          >
            Explore Our Store
          </button>
          <a
            href="https://maps.google.com/?q=150+Asher+Rd+Kelowna+BC"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-white px-9 py-4 rounded-full font-bold text-lg tracking-wide inline-flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Get Directions
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="scroll-reveal mt-16" style={{ transitionDelay: '0.6s' }}>
          <div className="inline-flex flex-col items-center gap-2 text-white/30">
            <span className="text-xs tracking-widest uppercase">Scroll to explore</span>
            <div className="w-px h-8 bg-gradient-to-b from-gold/40 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  )
}
