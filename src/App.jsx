import NavBar from "./components/NavBar"
import Contact from "./sections/Contact"
import ExperienceSection from "./sections/ExperienceSection"
import FeatureCards from "./sections/FeatureCards"
import Footer from "./sections/Footer"
import Hero from "./sections/Hero"
import LogoShowcase from "./sections/LogoShowCase"
import ShowCaseSection from "./sections/ShowCaseSection"
import TechStack from "./sections/TechStack"
import Testimonials from "./sections/Testimonials"
const App = () => {
  return (
    <>
    <NavBar />
      <Hero />
      <ShowCaseSection />
      <LogoShowcase />
      <FeatureCards />
      <ExperienceSection />
      <TechStack />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  )
}

export default App