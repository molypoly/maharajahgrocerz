import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import DealsSection from '../components/DealsSection'
import TrustStrip from '../components/TrustStrip'
import AboutSection from '../components/AboutSection'
import ProductsSection from '../components/ProductsSection'
import FavouritesSection from '../components/FavouritesSection'
import ProductRequestSection from '../components/ProductRequestSection'
import ReviewsSection from '../components/ReviewsSection'
import VisitSection from '../components/VisitSection'
import Footer from '../components/Footer'
import WhatsAppButton from '../components/WhatsAppButton'

export default function HomePage() {
  useEffect(() => {
    // Initialize Google Translate
    const addScript = () => {
      if (window.google && window.google.translate) return
      const script = document.createElement('script')
      script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'
      script.async = true
      document.body.appendChild(script)
    }

    window.googleTranslateElementInit = () => {
      if (!document.getElementById('google_translate_element')) return
      new window.google.translate.TranslateElement(
        { pageLanguage: 'en', includedLanguages: 'en,pa,hi', layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE },
        'google_translate_element'
      )
    }

    addScript()
  }, [])

  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <DealsSection />
      <TrustStrip />
      <AboutSection />
      <ProductsSection />
      <FavouritesSection />
      <ProductRequestSection />
      <ReviewsSection />
      <VisitSection />
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
