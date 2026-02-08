// Import React Router navigation tools
import { NavLink, useLocation } from 'react-router-dom';

// Import Framer Motion for animations
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

// Import the logo image
import geolinkLogo from '../assets/geolinklogo.png';

// Import the styles for this header
import './styles/Header.css';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeIndicator, setActiveIndicator] = useState({ left: 0, width: 0 });
  const navRef = useRef(null);
  const location = useLocation();

  // Track scroll position for header style changes
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Update active indicator position - This effect runs whenever the route changes
  useEffect(() => {
    const updateActiveIndicator = () => {
      if (navRef.current) {
        // Find the currently active link
        const activeLink = navRef.current.querySelector('.hdr-nav-link-active');
        
        if (activeLink) {
          // Get the position and width of the active link
          const { offsetLeft, offsetWidth } = activeLink;
          
          // Update the indicator state
          setActiveIndicator({
            left: offsetLeft,
            width: offsetWidth
          });
        }
      }
    };

    // Call immediately
    updateActiveIndicator();

    // Also call after a small delay to ensure DOM has fully updated
    const timeoutId = setTimeout(updateActiveIndicator, 50);

    // Call on next animation frame for extra reliability
    const rafId = requestAnimationFrame(() => {
      setTimeout(updateActiveIndicator, 100);
    });

    return () => {
      clearTimeout(timeoutId);
      cancelAnimationFrame(rafId);
    };
  }, [location.pathname]); // Dependency on location.pathname ensures this runs on every route change

  // Recalculate indicator position on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 968 && navRef.current) {
        const activeLink = navRef.current.querySelector('.hdr-nav-link-active');
        if (activeLink) {
          const { offsetLeft, offsetWidth } = activeLink;
          setActiveIndicator({ left: offsetLeft, width: offsetWidth });
        }
      }
      
      if (window.innerWidth > 968) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close mobile menu when a link is clicked
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Animation variants for header entrance
  const headerVariants = {
    hidden: { 
      y: -100, 
      opacity: 0 
    },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.1
      }
    }
  };

  // Animation variants for logo
  const logoVariants = {
    hidden: { 
      opacity: 0, 
      x: -30,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      x: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.43, 0.13, 0.23, 0.96]
      }
    }
  };

  // Animation variants for nav items (staggered) - Desktop
  const navContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.3
      }
    }
  };

  const navItemVariants = {
    hidden: { 
      opacity: 0, 
      y: -20 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  // Mobile menu animation variants
  const mobileMenuVariants = {
    closed: {
      x: '100%',
      transition: {
        type: 'tween',
        duration: 0.3,
        ease: 'easeInOut'
      }
    },
    open: {
      x: 0,
      transition: {
        type: 'tween',
        duration: 0.3,
        ease: 'easeInOut',
        staggerChildren: 0.07,
        delayChildren: 0.1
      }
    }
  };

  const mobileNavItemVariants = {
    closed: {
      x: 50,
      opacity: 0
    },
    open: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: 'easeOut'
      }
    }
  };

  // Hamburger line animation variants
  const hamburgerTopVariants = {
    closed: { rotate: 0, y: 0 },
    open: { rotate: 45, y: 8 }
  };

  const hamburgerMiddleVariants = {
    closed: { opacity: 1 },
    open: { opacity: 0 }
  };

  const hamburgerBottomVariants = {
    closed: { rotate: 0, y: 0 },
    open: { rotate: -45, y: -8 }
  };

  // Close button animation variants
  const closeButtonVariants = {
    initial: { scale: 0, rotate: -180 },
    animate: { 
      scale: 1, 
      rotate: 0,
      transition: {
        type: 'spring',
        stiffness: 260,
        damping: 20,
        delay: 0.2
      }
    },
    exit: { 
      scale: 0, 
      rotate: 180,
      transition: {
        duration: 0.2
      }
    },
    hover: {
      scale: 1.1,
      rotate: 90,
      transition: {
        duration: 0.3
      }
    },
    tap: {
      scale: 0.9
    }
  };

  return (
    <>
      <motion.header 
        className={`hdr-header ${isScrolled ? 'hdr-scrolled' : ''}`}
        initial="hidden"
        animate="visible"
        variants={headerVariants}
      >
        <div className="hdr-container">
          
          {/* Company Logo/Name */}
          <motion.div 
            className="hdr-logo"
            variants={logoVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="hdr-logo-image-container">
              <img 
                src={geolinkLogo} 
                alt="Geolink Logo" 
                className="hdr-logo-image"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextElementSibling.style.display = 'block';
                }}
              />
              <div className="hdr-logo-fallback" style={{ display: 'none' }}>
                <h1 className="hdr-logo-title">Geolink</h1>
              </div>
            </div>
            <p className="hdr-tagline">Surveying & Geospatial Services</p>
          </motion.div>

          {/* Desktop Navigation Menu */}
          <motion.nav 
            className="hdr-nav hdr-nav-desktop"
            variants={navContainerVariants}
            ref={navRef}
          >
            {/* Animated active indicator */}
            <motion.div
              className="hdr-active-indicator"
              animate={{
                left: activeIndicator.left,
                width: activeIndicator.width
              }}
              transition={{
                type: "spring",
                stiffness: 380,
                damping: 35,
                mass: 0.5
              }}
            />

            <motion.div variants={navItemVariants}>
              <NavLink 
                to="/" 
                className={({ isActive }) => 
                  isActive ? "hdr-nav-link hdr-nav-link-active" : "hdr-nav-link"
                }
              >
                Home
              </NavLink>
            </motion.div>

            <motion.div variants={navItemVariants}>
              <NavLink 
                to="/about" 
                className={({ isActive }) => 
                  isActive ? "hdr-nav-link hdr-nav-link-active" : "hdr-nav-link"
                }
              >
                About Us
              </NavLink>
            </motion.div>

            <motion.div variants={navItemVariants}>
              <NavLink 
                to="/services" 
                className={({ isActive }) => 
                  isActive ? "hdr-nav-link hdr-nav-link-active" : "hdr-nav-link"
                }
              >
                Services
              </NavLink>
            </motion.div>

            <motion.div variants={navItemVariants}>
              <NavLink 
                to="/our-work" 
                className={({ isActive }) => 
                  isActive ? "hdr-nav-link hdr-nav-link-active" : "hdr-nav-link"
                }
              >
                Our Work
              </NavLink>
            </motion.div>

            <motion.div variants={navItemVariants}>
              <NavLink 
                to="/achievements" 
                className={({ isActive }) => 
                  isActive ? "hdr-nav-link hdr-nav-link-active" : "hdr-nav-link"
                }
              >
                Achievements
              </NavLink>
            </motion.div>

            <motion.div variants={navItemVariants}>
              <NavLink 
                to="/testimonials" 
                className={({ isActive }) => 
                  isActive ? "hdr-nav-link hdr-nav-link-active" : "hdr-nav-link"
                }
              >
                Testimonials
              </NavLink>
            </motion.div>

            <motion.div variants={navItemVariants}>
              <NavLink 
                to="/contact" 
                className={({ isActive }) => 
                  isActive ? "hdr-nav-link hdr-nav-link-active" : "hdr-nav-link"
                }
              >
                Contact Us
              </NavLink>
            </motion.div>
          </motion.nav>

          {/* Hamburger Menu Button (Mobile Only) */}
          <motion.button
            className="hdr-hamburger"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.span
              className="hdr-hamburger-line"
              variants={hamburgerTopVariants}
              animate={isMobileMenuOpen ? 'open' : 'closed'}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="hdr-hamburger-line"
              variants={hamburgerMiddleVariants}
              animate={isMobileMenuOpen ? 'open' : 'closed'}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="hdr-hamburger-line"
              variants={hamburgerBottomVariants}
              animate={isMobileMenuOpen ? 'open' : 'closed'}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="hdr-mobile-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={closeMobileMenu}
            />

            {/* Mobile Navigation Panel */}
            <motion.nav
              className="hdr-nav-mobile"
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              {/* Close Button */}
              <motion.button
                className="hdr-mobile-close"
                onClick={closeMobileMenu}
                aria-label="Close menu"
                variants={closeButtonVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                whileHover="hover"
                whileTap="tap"
              >
                <span className="hdr-mobile-close-line hdr-mobile-close-line-1"></span>
                <span className="hdr-mobile-close-line hdr-mobile-close-line-2"></span>
              </motion.button>

              <div className="hdr-mobile-header">
                <div className="hdr-mobile-logo">
                  <div className="hdr-mobile-logo-image-container">
                    <img 
                      src={geolinkLogo} 
                      alt="Geolink Logo" 
                      className="hdr-mobile-logo-image"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextElementSibling.style.display = 'block';
                      }}
                    />
                    <div className="hdr-mobile-logo-fallback" style={{ display: 'none' }}>
                      <h2 className="hdr-mobile-logo-title">Geolink</h2>
                    </div>
                  </div>
                  <p className="hdr-mobile-tagline">Surveying & Geospatial</p>
                </div>
              </div>

              <div className="hdr-mobile-links">
                <motion.div variants={mobileNavItemVariants}>
                  <NavLink 
                    to="/" 
                    className={({ isActive }) => 
                      isActive ? "hdr-mobile-link hdr-mobile-link-active" : "hdr-mobile-link"
                    }
                    onClick={closeMobileMenu}
                  >
                    <span className="hdr-mobile-link-icon">🏠</span>
                    <span className="hdr-mobile-link-text">Home</span>
                  </NavLink>
                </motion.div>

                <motion.div variants={mobileNavItemVariants}>
                  <NavLink 
                    to="/about" 
                    className={({ isActive }) => 
                      isActive ? "hdr-mobile-link hdr-mobile-link-active" : "hdr-mobile-link"
                    }
                    onClick={closeMobileMenu}
                  >
                    <span className="hdr-mobile-link-icon">ℹ️</span>
                    <span className="hdr-mobile-link-text">About Us</span>
                  </NavLink>
                </motion.div>

                <motion.div variants={mobileNavItemVariants}>
                  <NavLink 
                    to="/services" 
                    className={({ isActive }) => 
                      isActive ? "hdr-mobile-link hdr-mobile-link-active" : "hdr-mobile-link"
                    }
                    onClick={closeMobileMenu}
                  >
                    <span className="hdr-mobile-link-icon">🛠️</span>
                    <span className="hdr-mobile-link-text">Services</span>
                  </NavLink>
                </motion.div>

                <motion.div variants={mobileNavItemVariants}>
                  <NavLink 
                    to="/our-work" 
                    className={({ isActive }) => 
                      isActive ? "hdr-mobile-link hdr-mobile-link-active" : "hdr-mobile-link"
                    }
                    onClick={closeMobileMenu}
                  >
                    <span className="hdr-mobile-link-icon">💼</span>
                    <span className="hdr-mobile-link-text">Our Work</span>
                  </NavLink>
                </motion.div>

                <motion.div variants={mobileNavItemVariants}>
                  <NavLink 
                    to="/achievements" 
                    className={({ isActive }) => 
                      isActive ? "hdr-mobile-link hdr-mobile-link-active" : "hdr-mobile-link"
                    }
                    onClick={closeMobileMenu}
                  >
                    <span className="hdr-mobile-link-icon">🏆</span>
                    <span className="hdr-mobile-link-text">Achievements</span>
                  </NavLink>
                </motion.div>

                <motion.div variants={mobileNavItemVariants}>
                  <NavLink 
                    to="/testimonials" 
                    className={({ isActive }) => 
                      isActive ? "hdr-mobile-link hdr-mobile-link-active" : "hdr-mobile-link"
                    }
                    onClick={closeMobileMenu}
                  >
                    <span className="hdr-mobile-link-icon">💬</span>
                    <span className="hdr-mobile-link-text">Testimonials</span>
                  </NavLink>
                </motion.div>

                <motion.div variants={mobileNavItemVariants}>
                  <NavLink 
                    to="/contact" 
                    className={({ isActive }) => 
                      isActive ? "hdr-mobile-link hdr-mobile-link-active" : "hdr-mobile-link"
                    }
                    onClick={closeMobileMenu}
                  >
                    <span className="hdr-mobile-link-icon">📧</span>
                    <span className="hdr-mobile-link-text">Contact Us</span>
                  </NavLink>
                </motion.div>
              </div>

              <div className="hdr-mobile-footer">
                <p className="hdr-mobile-footer-text">Professional Surveying Solutions</p>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default Header;