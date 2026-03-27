import { useState, useEffect, useRef } from 'react'

export default function ProductRequestSection() {
  const [form, setForm] = useState({ name: '', contact: '', product: '' })
  const [submitted, setSubmitted] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1 }
    )
    ref.current?.querySelectorAll('.scroll-reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    const body = `Hi Maharajah Grocerz Inc Team,\n\nI'd like to request the following product:\n\nName: ${form.name}\nContact: ${form.contact}\nProduct: ${form.product}\n\nThank you!`
    window.location.href = `mailto:info@maharajagrocery.ca?subject=Product Request from ${form.name}&body=${encodeURIComponent(body)}`
    setSubmitted(true)
  }

  return (
    <section ref={ref} className="py-24" style={{ background: '#F4F6FB' }}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12 scroll-reveal">
          <div className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4"
               style={{ background: 'rgba(43,57,144,0.08)', color: '#2B3990' }}>
            Special Orders
          </div>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold mb-4" style={{ color: '#1A2266' }}>
            Can't Find What You're Looking For?
          </h2>
          <p className="text-gray-500 text-xl">We take requests. Tell us what you need and we'll do our best to stock it.</p>
        </div>

        {/* Form card */}
        <div className="scroll-reveal rounded-3xl overflow-hidden shadow-xl border" style={{ transitionDelay: '0.1s', borderColor: 'rgba(43,57,144,0.1)' }}>
          {/* Gradient top bar */}
          <div className="h-1.5" style={{ background: 'linear-gradient(90deg, #2B3990, #F5C518, #2B3990)' }} />

          <div className="bg-white p-8 lg:p-12">
            {submitted ? (
              <div className="text-center py-8">
                <div className="text-6xl mb-4">🙏</div>
                <h3 className="font-serif text-2xl font-bold mb-2" style={{ color: '#1A2266' }}>Request Sent!</h3>
                <p className="text-gray-500">Thank you! We'll do our best to get that in for you.</p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: '', contact: '', product: '' }) }}
                  className="mt-6 btn-outline-gold px-6 py-3 rounded-full text-sm font-bold"
                >
                  Send Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {[
                  { label: 'Your Name', field: 'name', type: 'text', placeholder: 'Your Name Here' },
                  { label: 'Phone or Email', field: 'contact', type: 'text', placeholder: "So we can let you know when it's in" },
                ].map(({ label, field, type, placeholder }) => (
                  <div key={field}>
                    <label className="block text-sm font-semibold mb-2" style={{ color: '#1A2266' }}>{label}</label>
                    <input
                      type={type}
                      required
                      value={form[field]}
                      onChange={e => setForm({ ...form, [field]: e.target.value })}
                      placeholder={placeholder}
                      className="w-full px-5 py-3.5 rounded-xl border border-gray-200 focus:outline-none transition-all text-gray-700"
                      style={{ '--tw-ring-color': '#2B3990' }}
                      onFocus={e => { e.target.style.borderColor = '#2B3990'; e.target.style.boxShadow = '0 0 0 3px rgba(43,57,144,0.1)' }}
                      onBlur={e => { e.target.style.borderColor = '#e5e7eb'; e.target.style.boxShadow = 'none' }}
                    />
                  </div>
                ))}
                <div>
                  <label className="block text-sm font-semibold mb-2" style={{ color: '#1A2266' }}>Product Name / Description</label>
                  <textarea
                    required
                    value={form.product}
                    onChange={e => setForm({ ...form, product: e.target.value })}
                    placeholder="Tell us what you're looking for — brand, size, specific variety, etc."
                    rows={4}
                    className="w-full px-5 py-3.5 rounded-xl border border-gray-200 focus:outline-none transition-all text-gray-700 resize-none"
                    onFocus={e => { e.target.style.borderColor = '#2B3990'; e.target.style.boxShadow = '0 0 0 3px rgba(43,57,144,0.1)' }}
                    onBlur={e => { e.target.style.borderColor = '#e5e7eb'; e.target.style.boxShadow = 'none' }}
                  />
                </div>
                <div className="flex items-center gap-4 pt-2">
                  <button type="submit" className="btn-royal px-8 py-4 rounded-full font-bold text-lg flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                    Send My Request
                  </button>
                  <p className="text-gray-400 text-sm">We personally read every request.</p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
