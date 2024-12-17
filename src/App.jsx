
import './App.css'

import StickyNavbar from '../src/Components/Navbar/StickyNavbar.jsx'  
import Hero from '../src/Components/Hero/Hero.jsx'  
import About from '../src/Components/About/About.jsx';
import Feature from '../src/Components/Feature/Feature.jsx';
import Logos from '../src/Components/Logos/Logos.jsx';
import Services from '../src/Components/Gallery/Service.jsx'  
import FaQ from '../src/Components/FaQ/FaQ.jsx';
import Contact from '../src/Components/Contact/Contact.jsx';
import Footer from '../src/Components/Footer/Footer.jsx';

function App() {

  return (
    <>
      <StickyNavbar />
      <Hero />
      <About></About>
      <Feature></Feature>
      <Logos></Logos>
      <Services />
      <FaQ></FaQ>
      <Contact></Contact>
      <Footer></Footer>
    </>
  )
}

export default App
