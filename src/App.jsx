// Import React Router components
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

// Import our layout components (Header and Footer)
import Header from './components/Header';
import Footer from './components/Footer';

// Import all page components
import Home from './components/pages/Home';
import About from './components/pages/About';
import Services from './components/pages/Services';
import OurWork from './components/pages/OurWork';
import Achievements from './components/pages/Achievements';
import Testimonials from './components/pages/Testimonials';
import Contact from './components/pages/Contact';

// ScrollToTop component - scrolls to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth' // Smooth scroll animation
    });
  }, [pathname]);

  return null;
}

// This is the main App component
function App() {
  return (
    // Router wraps everything to enable navigation
    <Router>
      {/* Scroll to top on route change */}
      <ScrollToTop />
      
      {/* Header appears on ALL pages */}
      <Header />

      {/* Routes define which page shows for each URL */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/our-work" element={<OurWork />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* Footer appears on ALL pages */}
      <Footer />
      
    </Router>
  );
}

// Export so main.jsx can use this
export default App;