import Header from './components/Header'
import HeroSection from './components/sections/HeroSection'
import BenefitsSection from './components/sections/BenefitsSection'
import HowItWorksSection from './components/sections/HowItWorksSection'
import AllFeaturesSection from './components/sections/AllFeaturesSection'
import ExamplesGallerySection from './components/sections/ExamplesGallerySection'
import WhitelistCTASection from './components/sections/WhitelistCTASection'
import WhoIsItForSection from './components/sections/WhoIsItForSection'
import TestimonialsSection from './components/sections/TestimonialsSection'
import FAQSection from './components/sections/FAQSection'
import Footer from './components/sections/Footer'

function App() {
  const scrollToWhitelist = () => {
    document.getElementById('whitelist')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen">
      <Header onScrollToWhitelist={scrollToWhitelist} />
      <HeroSection onScrollToWhitelist={scrollToWhitelist} />
      <BenefitsSection />
      <HowItWorksSection />
      <AllFeaturesSection onScrollToWhitelist={scrollToWhitelist} />
      <ExamplesGallerySection />
      <WhitelistCTASection />
      <WhoIsItForSection />
      <TestimonialsSection />
      <FAQSection />
      <Footer />
    </div>
  )
}

export default App
