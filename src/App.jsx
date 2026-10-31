import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Advantages from './components/Advantages'
import Gallery from './components/Gallery'
import OperatingHours from './components/OperatingHours'
import Location from './components/Location'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero /><Services /><About /><Advantages /><Gallery /><OperatingHours /><Location /><Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
