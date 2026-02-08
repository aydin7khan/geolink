// Import React's navigation tool
import { Link } from 'react-router-dom';

// Import Framer Motion for animations
import { motion } from 'framer-motion';

// Import logo
import geolinkLogo from '../assets/geolinklogo.png';

// Import the styles for this footer
import './styles/Footer.css';

// This is the Footer component
function Footer() {
  const currentYear = new Date().getFullYear();

  // Animation variants for footer sections
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <footer className="ftr-footer">
      {/* Main Footer Content */}
      <motion.div 
        className="ftr-container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        {/* Company Branding & Info */}
        <motion.div className="ftr-section ftr-brand" variants={itemVariants}>
          <div className="ftr-logo-container">
            <img 
              src={geolinkLogo} 
              alt="Geolink Logo" 
              className="ftr-logo-image"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextElementSibling.style.display = 'block';
              }}
            />
            <div className="ftr-logo-fallback" style={{ display: 'none' }}>
              <h3 className="ftr-brand-title">Geolink</h3>
            </div>
          </div>
          <p className="ftr-tagline">Surveying & Geospatial Services</p>
          <p className="ftr-description">
            Delivering precision mapping and surveying solutions with cutting-edge technology 
            and expert knowledge for projects of all scales.
          </p>
          
          {/* Social Media Icons */}
          <div className="ftr-social">
            <motion.a 
              href="#" 
              className="ftr-social-link"
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Facebook"
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </motion.a>
            <motion.a 
              href="#" 
              className="ftr-social-link"
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Twitter"
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </motion.a>
            <motion.a 
              href="#" 
              className="ftr-social-link"
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.95 }}
              aria-label="LinkedIn"
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </motion.a>
            <motion.a 
              href="#" 
              className="ftr-social-link"
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Instagram"
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
              </svg>
            </motion.a>
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div className="ftr-section" variants={itemVariants}>
          <h4 className="ftr-section-title">Quick Links</h4>
          <nav className="ftr-nav">
            <Link to="/" className="ftr-link">
              <span className="ftr-link-icon">→</span>
              <span>Home</span>
            </Link>
            <Link to="/about" className="ftr-link">
              <span className="ftr-link-icon">→</span>
              <span>About Us</span>
            </Link>
            <Link to="/services" className="ftr-link">
              <span className="ftr-link-icon">→</span>
              <span>Services</span>
            </Link>
            <Link to="/our-work" className="ftr-link">
              <span className="ftr-link-icon">→</span>
              <span>Our Work</span>
            </Link>
            <Link to="/achievements" className="ftr-link">
              <span className="ftr-link-icon">→</span>
              <span>Achievements</span>
            </Link>
            <Link to="/testimonials" className="ftr-link">
              <span className="ftr-link-icon">→</span>
              <span>Testimonials</span>
            </Link>
            <Link to="/contact" className="ftr-link">
              <span className="ftr-link-icon">→</span>
              <span>Contact Us</span>
            </Link>
          </nav>
        </motion.div>

        {/* Our Services */}
        <motion.div className="ftr-section" variants={itemVariants}>
          <h4 className="ftr-section-title">Our Services</h4>
          <nav className="ftr-nav">
            <Link to="/services" className="ftr-link">
              <span className="ftr-link-icon">→</span>
              <span>DGPS Survey</span>
            </Link>
            <Link to="/services" className="ftr-link">
              <span className="ftr-link-icon">→</span>
              <span>Drone Survey</span>
            </Link>
            <Link to="/services" className="ftr-link">
              <span className="ftr-link-icon">→</span>
              <span>Cadastral Mapping</span>
            </Link>
            <Link to="/services" className="ftr-link">
              <span className="ftr-link-icon">→</span>
              <span>GIS Mapping</span>
            </Link>
            <Link to="/services" className="ftr-link">
              <span className="ftr-link-icon">→</span>
              <span>Topographical Survey</span>
            </Link>
            <Link to="/services" className="ftr-link">
              <span className="ftr-link-icon">→</span>
              <span>Mine Survey</span>
            </Link>
          </nav>
        </motion.div>

        {/* Contact Information */}
        <motion.div className="ftr-section" variants={itemVariants}>
          <h4 className="ftr-section-title">Get In Touch</h4>
          <div className="ftr-contact">
            <div className="ftr-contact-item">
              <svg className="ftr-contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              <div>
                <p className="ftr-contact-label">Email</p>
                <a href="mailto:info@geolink.com" className="ftr-contact-value">info@geolink.com</a>
              </div>
            </div>
            <div className="ftr-contact-item">
              <svg className="ftr-contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
              </svg>
              <div>
                <p className="ftr-contact-label">Phone</p>
                <a href="tel:+15551234567" className="ftr-contact-value">+1 (555) 123-4567</a>
              </div>
            </div>
            <div className="ftr-contact-item">
              <svg className="ftr-contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              <div>
                <p className="ftr-contact-label">Location</p>
                <p className="ftr-contact-value">Bhopal, Madhya Pradesh</p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Copyright & Bottom Section */}
      <div className="ftr-bottom">
        <div className="ftr-bottom-container">
          <p className="ftr-copyright">
            &copy; {currentYear} Geolink - Surveying & Geospatial Services. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

// Export so other files can use this component
export default Footer;