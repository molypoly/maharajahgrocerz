import { useState, useEffect, useRef } from 'react'

export default function ProductRequestSection() {
  const [form, setForm] = useState({ name: '', contact: '', product: '' })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1 }
    )
    ref.current?.querySelectorAll('.scroll-reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const validate = () => {
    const newErrors = {}

    if (!form.name.trim()) {
      newErrors.name = 'Please enter your name.'
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const phoneRegex = /^[\d\s\-().+]{10,}$/
    if (!form.contact.trim()) {
      newErrors.contact = 'Please enter your email or phone number.'
    } else if (!emailRegex.test(form.contact) && !phoneRegex.test(form.contact)) {
      newErrors.contact = 'Please enter a valid email address or phone number.'
    }

    if (!form.product.trim()) {
      newErrors.product = 'Please describe the product you\'re looking for.'
    }

    return newErrors
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(false)

    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }
    setErrors({})

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          'form-name': 'product-request',
          ...form,
        }).toString(),
      })
      if (response.ok) {
        setSubmitted(true)
      } else {
        setError(true)
      }
    } catch {
      setError(true)
    }
  }

  const fieldStyle = (field) => ({
    borderColor: errors[field] ? '#ef4444' : undefined,
    boxShadow: errors[field] ? '0 0 0 3px rgba(239,68,68,0.1)' : undefined,
  })

  const handleFocus = (e, field) => {
    if (!errors[field]) {
      e.target.style.borderColor = '#2B3990'
      e.target.style.boxShadow = '0 0 0 3px rgba(43,57,144,0.1)'
    }
  }

  const handleBlur = (e, field) => {
    if (!errors[field]) {
      e.target.style.borderColor = '#e5e7eb'
      e.target.style.boxShadow = 'none'
    }
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

        {/* Hidden form for Netlify detection */}
        <form name="product-request" data-netlify="true" hidden>
          <input type="text" name="name" />
          <input type="text" name="contact" />
          <textarea name="product" />
        </form>

        {/* Form card */}
        <div className="scroll-reveal rounded-3xl overflow-hidden shadow-xl border" style={{ transitionDelay: '0.1s', borderColor: 'rgba(43,57,144,0.1)' }}>
          <div className="h-1.5" style={{ background: 'linear-gradient(90deg, #2B3990, #F5C518, #2B3990)' }} />

          <div className="bg-white p-8 lg:p-12">
            {submitted ? (
              <div className="text-center py-8">
                <div className="text-6xl mb-4">🙏</div>
                <h3 className="font-serif text-2xl font-bold mb-2" style={{ color: '#1A2266' }}>Request Sent!</h3>
                <p className="text-gray-500">Thank you! We'll do our best to get that in for you.</p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: '', contact: '', product: '' }); setErrors({}) }}
                  className="mt-6 btn-outline-gold px-6 py-3 rounded-full text-sm font-bold"
                >
                  Send Another Request
                </button>
              </div>
            ) : (
              <form name="product-request" onSubmit={handleSubmit} className="space-y-5">
                <input type="hidden" name="form-name" value="product-request" />

                {/* Name */}
                <div>
                  <label className="block text-sm font-semibold mb-2" style={{ color: '#1A2266' }}>Your Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={e => { setForm({ ...form, name: e.target.value }); setErrors({ ...errors, name: '' }) }}
                    placeholder="Your Name Here"
                    className="w-full px-5 py-3.5 rounded-xl border border-gray-200 focus:outline-none transition-all text-gray-700"
                    style={fieldStyle('name')}
                    onFocus={e => handleFocus(e, 'name')}
                    onBlur={e => handleBlur(e, 'name')}
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1.5">{errors.name}</p>}
                </div>

                {/* Contact */}
                <div>
                  <label className="block text-sm font-semibold mb-2" style={{ color: '#1A2266' }}>Phone or Email</label>
                  <input
                    type="text"
                    name="contact"
                    required
                    value={form.contact}
                    onChange={e => { setForm({ ...form, contact: e.target.value }); setErrors({ ...errors, contact: '' }) }}
                    placeholder="So we can let you know when it's in"
                    className="w-full px-5 py-3.5 rounded-xl border border-gray-200 focus:outline-none transition-all text-gray-700"
                    style={fieldStyle('contact')}
                    onFocus={e => handleFocus(e, 'contact')}
                    onBlur={e => handleBlur(e, 'contact')}
                  />
                  {errors.contact && <p className="text-red-500 text-xs mt-1.5">{errors.contact}</p>}
                </div>

                {/* Product */}
                <div>
                  <label className="block text-sm font-semibold mb-2" style={{ color: '#1A2266' }}>Product Name / Description</label>
                  <textarea
                    name="product"
                    required
                    value={form.product}
                    onChange={e => { setForm({ ...form, product: e.target.value }); setErrors({ ...errors, product: '' }) }}
                    placeholder="Tell us what you're looking for — brand, size, specific variety, etc."
                    rows={4}
                    className="w-full px-5 py-3.5 rounded-xl border border-gray-200 focus:outline-none transition-all text-gray-700 resize-none"
                    style={fieldStyle('product')}
                    onFocus={e => handleFocus(e, 'product')}
                    onBlur={e => handleBlur(e, 'product')}
                  />
                  {errors.product && <p className="text-red-500 text-xs mt-1.5">{errors.product}</p>}
                </div>

                {error && (
                  <p className="text-red-500 text-sm">Something went wrong. Please try again or call us directly.</p>
                )}

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