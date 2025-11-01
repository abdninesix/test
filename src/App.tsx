import HeroSection from "./components/HeroSection"
import Navbar from "./components/Navbar"


const App = () => {
  return (
    <main className="mx-auto px-4 sm:px-0 sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl duration-200">
      <Navbar />
      <HeroSection />
      {/* <AboutCampaign />
      <FundUsage />
      <GallerySection />
      <DonationSection />
      <Testimonials />
      <ContactSection /> */}
    </main>
  )
}

export default App