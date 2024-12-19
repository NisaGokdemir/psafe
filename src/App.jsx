import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StickyNavbar from './Components/Navbar/StickyNavbar.jsx';
import Hero from './Components/Hero/Hero.jsx';
import About from './Components/About/About.jsx';
import Feature from './Components/Feature/Feature.jsx';
import Logos from './Components/Logos/Logos.jsx';
import Services from './Components/Gallery/Service.jsx';
import FaQ from './Components/FaQ/FaQ.jsx';
import Contact from './Components/Contact/Contact.jsx';
import Footer from './Components/Footer/Footer.jsx';
import Kvkk from './Components/Kvkk/KVKK.jsx';

function App() {
  return (
    <Router>
      <StickyNavbar />
      <Routes>
        {/* Ana Sayfa */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Feature />
              <Logos />
              <Services />
              <FaQ />
              <Contact />
              <Footer />
            </>
          }
        />
        {/* KVKK Sayfası */}
        <Route path="/kvkk" element={<Kvkk />} />
      </Routes>
    </Router>
  );
}

export default App;
