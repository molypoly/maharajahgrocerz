import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'

// Change this password in the code as needed
const ADMIN_PASSWORD = 'maharajah2026'

export default function AdminPage() {
  const [authenticated, setAuthenticated] = useState(false)
  const [passwordInput, setPasswordInput] = useState('')
  const [error, setError] = useState('')
  const [flyerUrl, setFlyerUrl] = useState(() => localStorage.getItem('maharaja_flyer_url') || null)
  const [uploading, setUploading] = useState(false)
  const [uploadSuccess, setUploadSuccess] = useState(false)
  const fileInputRef = useRef(null)

  const handleLogin = (e) => {
    e.preventDefault()
    if (passwordInput === ADMIN_PASSWORD) {
      setAuthenticated(true)
      setError('')
    } else {
      setError('Incorrect password. Please try again.')
    }
  }

  const handleFileUpload = (e) => {
    const file = e.target.files[0]
    if (!file) return
    if (file.type !== 'application/pdf') {
      alert('Please upload a PDF file.')
      return
    }
    setUploading(true)
    setUploadSuccess(false)
    const reader = new FileReader()
    reader.onload = (event) => {
      const dataUrl = event.target.result
      localStorage.setItem('maharaja_flyer_url', dataUrl)
      setFlyerUrl(dataUrl)
      setUploading(false)
      setUploadSuccess(true)
      setTimeout(() => setUploadSuccess(false), 4000)
    }
    reader.readAsDataURL(file)
  }

  const handleRemoveFlyer = () => {
    if (confirm('Are you sure you want to remove the current flyer?')) {
      localStorage.removeItem('maharaja_flyer_url')
      setFlyerUrl(null)
    }
  }

  // Login screen
  if (!authenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 relative"
           style={{ background: 'linear-gradient(135deg, #0F1540 0%, #1A2266 50%, #2B3990 100%)' }}>
        {/* Stripe texture */}
        <div className="absolute inset-0 stripe-bg" />

        {/* Gold glow */}
        <div className="absolute top-0 right-0 w-96 h-96 opacity-10 pointer-events-none"
             style={{ background: 'radial-gradient(circle, #F5C518 0%, transparent 70%)', transform: 'translate(30%,-30%)' }} />

        <div className="relative w-full max-w-md">
          {/* Top gradient bar */}
          <div className="h-1.5 rounded-t-2xl" style={{ background: 'linear-gradient(90deg, #2B3990, #F5C518, #2B3990)' }} />

          <div className="rounded-b-2xl p-8 lg:p-10" style={{ background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(16px)', border: '1px solid rgba(255,255,255,0.08)', borderTop: 'none' }}>
            {/* Logo */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl mb-3 text-navy font-bold text-2xl"
                   style={{ background: 'linear-gradient(135deg, #F5C518, #D4A800)' }}>
                ♛
              </div>
              <h1 className="font-serif text-2xl font-bold text-white">Maharajah Grocerz Inc</h1>
              <p className="text-white/40 text-sm mt-1">Admin Portal</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-white/60 text-sm font-semibold mb-2">Admin Password</label>
                <input
                  type="password"
                  value={passwordInput}
                  onChange={e => setPasswordInput(e.target.value)}
                  placeholder="Enter admin password"
                  autoFocus
                  className="w-full px-4 py-3 rounded-xl text-white placeholder-white/30 focus:outline-none transition-all"
                  style={{ background: 'rgba(255,255,255,0.08)', border: '2px solid rgba(245,197,24,0.2)' }}
                  onFocus={e => e.target.style.borderColor = '#F5C518'}
                  onBlur={e => e.target.style.borderColor = 'rgba(245,197,24,0.2)'}
                />
              </div>

              {error && (
                <div className="flex items-center gap-2 text-red-400 text-sm px-4 py-3 rounded-xl"
                     style={{ background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.2)' }}>
                  <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {error}
                </div>
              )}

              <button type="submit" className="btn-gold w-full py-3.5 rounded-xl font-bold text-lg">
                Sign In
              </button>
            </form>

            <div className="mt-6 text-center">
              <Link to="/" className="text-white/30 text-xs hover:text-gold transition-colors">← Back to Website</Link>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Dashboard
  return (
    <div className="min-h-screen" style={{ background: '#F4F6FB' }}>
      {/* Header */}
      <div style={{ background: 'linear-gradient(135deg, #2B3990 0%, #1A2266 100%)' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg flex items-center justify-center text-navy font-bold"
                 style={{ background: 'linear-gradient(135deg, #F5C518, #D4A800)' }}>♛</div>
            <div>
              <div className="font-serif font-bold text-white">Maharajah Grocerz Inc</div>
              <div className="text-white/40 text-xs">Admin Panel</div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/" className="text-white/60 text-sm hover:text-gold transition-colors flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              View Site
            </Link>
            <button onClick={() => setAuthenticated(false)} className="text-white/60 text-sm hover:text-red-400 transition-colors">
              Sign Out
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
        <h2 className="font-serif text-3xl font-bold mb-2" style={{ color: '#1A2266' }}>Weekly Flyer Management</h2>
        <p className="text-gray-500 mb-10">Upload your current weekly deals flyer. Only one flyer is shown at a time.</p>

        {/* Upload card */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden mb-8" style={{ border: '1px solid rgba(43,57,144,0.1)' }}>
          <div className="h-1.5" style={{ background: 'linear-gradient(90deg, #2B3990, #F5C518, #2B3990)' }} />
          <div className="p-8 lg:p-12">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center text-2xl"
                   style={{ background: 'rgba(43,57,144,0.08)' }}>📄</div>
              <h3 className="font-serif text-xl font-semibold" style={{ color: '#1A2266' }}>Upload This Week's Flyer</h3>
            </div>

            {/* Drop zone */}
            <div
              onClick={() => fileInputRef.current?.click()}
              className="rounded-2xl p-12 text-center cursor-pointer transition-all group mb-6"
              style={{ border: '2px dashed rgba(43,57,144,0.2)', background: 'rgba(43,57,144,0.02)' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#2B3990'; e.currentTarget.style.background = 'rgba(43,57,144,0.05)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(43,57,144,0.2)'; e.currentTarget.style.background = 'rgba(43,57,144,0.02)' }}
            >
              {uploading ? (
                <div className="flex flex-col items-center gap-3">
                  <div className="w-10 h-10 border-4 border-t-transparent rounded-full animate-spin" style={{ borderColor: '#2B3990', borderTopColor: 'transparent' }} />
                  <p className="text-gray-500">Processing your flyer...</p>
                </div>
              ) : (
                <>
                  <div className="text-5xl mb-4">📤</div>
                  <p className="font-semibold mb-1" style={{ color: '#1A2266' }}>Click to upload PDF</p>
                  <p className="text-gray-400 text-sm">PDF files only · Replaces existing flyer</p>
                </>
              )}
            </div>

            <input ref={fileInputRef} type="file" accept="application/pdf" onChange={handleFileUpload} className="hidden" />

            <button
              onClick={() => fileInputRef.current?.click()}
              disabled={uploading}
              className="btn-royal w-full py-4 rounded-xl font-bold text-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {uploading ? 'Uploading...' : '📂 Choose PDF File'}
            </button>

            {uploadSuccess && (
              <div className="mt-4 flex items-center gap-3 px-5 py-4 rounded-xl text-green-700"
                   style={{ background: '#f0fdf4', border: '1px solid #bbf7d0' }}>
                <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="font-semibold">Flyer uploaded successfully! It's now live on the website.</span>
              </div>
            )}
          </div>
        </div>

        {/* Current flyer preview */}
        {flyerUrl ? (
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden" style={{ border: '1px solid rgba(43,57,144,0.1)' }}>
            <div className="px-8 pt-8 pb-4 flex items-center justify-between" style={{ borderBottom: '1px solid #f3f4f6' }}>
              <h3 className="font-serif text-xl font-semibold flex items-center gap-2" style={{ color: '#1A2266' }}>
                <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse inline-block" />
                Current Live Flyer
              </h3>
              <button onClick={handleRemoveFlyer}
                className="text-red-400 hover:text-red-600 text-sm font-medium flex items-center gap-1 transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
                Remove Flyer
              </button>
            </div>
            <div className="p-4">
              <iframe src={flyerUrl} className="w-full rounded-xl" style={{ height: '600px', border: 0 }} title="Current Flyer Preview" />
            </div>
          </div>
        ) : (
          <div className="text-center py-10 text-gray-400">
            <div className="text-4xl mb-2">📭</div>
            <p>No flyer currently uploaded. Upload one above to display it on the website.</p>
          </div>
        )}
      </div>
    </div>
  )
}
