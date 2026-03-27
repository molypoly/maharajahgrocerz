import { useEffect, useRef } from 'react'

const reviews = [
  {
    name: 'Billy C.',
    badge: 'Local Guide',
    text: "Better prices than the supermarket. Great friendly customer service especially for people who don't have experience with Indian cooking.",
    stars: 5,
  },
  {
    name: 'David W.',
    badge: 'Local Guide',
    text: "I went in for one item. The staff couldn't be more friendly and helpful. They seem to have everything I would need.",
    stars: 5,
  },
  {
    name: 'Kasch G.',
    badge: 'Google Review',
    text: 'Amazing place — a very good selection of Asian and Middle Eastern food. They were extremely nice to me and my sister.',
    stars: 5,
  },
  {
    name: 'Harman P.',
    badge: 'Google Review',
    text: 'Best Indian grocery store in Kelowna. Friendly staff and good Indian produce with reasonable prices. Highly recommended.',
    stars: 5,
  },
]

export default function ReviewsSection() {
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
    <section id="reviews" ref={ref} className="py-24 relative overflow-hidden" style={{ background: '#ffffff' }}>

      {/* Royal blue dot accent pattern */}
      <div className="absolute inset-0 dot-pattern" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14 scroll-reveal">
          <div className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4"
               style={{ background: 'rgba(43,57,144,0.08)', color: '#2B3990' }}>
            Customer Reviews
          </div>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold mb-3" style={{ color: '#1A2266' }}>
            Loved by the Kelowna Community
          </h2>
          <p className="text-gray-500 text-xl">Don't take our word for it.</p>
          <div className="section-divider max-w-xs mx-auto mt-6" />
        </div>

        {/* Review grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {reviews.map((review, i) => (
            <div
              key={i}
              className="scroll-reveal card-hover rounded-2xl p-8 border"
              style={{
                background: '#ffffff',
                borderColor: 'rgba(43,57,144,0.1)',
                boxShadow: '0 2px 20px rgba(43,57,144,0.07)',
                transitionDelay: `${i * 0.1}s`,
              }}
            >
              {/* Large quote mark */}
              <div className="font-serif text-7xl leading-none mb-2 select-none" style={{ color: 'rgba(245,197,24,0.25)' }}>"</div>

              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {[...Array(review.stars)].map((_, j) => (
                  <span key={j} className="text-lg" style={{ color: '#F5C518' }}>★</span>
                ))}
              </div>

              <p className="text-gray-700 text-base leading-relaxed mb-6 italic">"{review.text}"</p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4" style={{ borderTop: '1px solid rgba(43,57,144,0.08)' }}>
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-lg font-serif font-bold text-white"
                     style={{ background: 'linear-gradient(135deg, #2B3990, #1A2266)' }}>
                  {review.name[0]}
                </div>
                <div>
                  <div className="font-semibold text-sm" style={{ color: '#1A2266' }}>{review.name}</div>
                  <div className="text-xs font-semibold" style={{ color: '#F5C518' }}>{review.badge}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center scroll-reveal" style={{ transitionDelay: '0.4s' }}>
          <a
            href="https://www.google.com/search?q=Maharaja+Grocery+Kelowna"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-gold inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold text-lg"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032 s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2 C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"/>
            </svg>
            See All Reviews on Google
          </a>
        </div>
      </div>
    </section>
  )
}
