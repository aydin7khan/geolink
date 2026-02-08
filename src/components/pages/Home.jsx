import React, { useState, useEffect, useRef } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../styles/Home.css';
// Import hero images
import hero1Image from '../../assets/hero-1.webp';
import hero2Image from '../../assets/hero-2.jpg';
import hero3Image from '../../assets/hero-3.jpg';

const AnimatedCounter = ({ end, duration = 2000, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    if (!hasAnimated) return;
    
    let startTime, animationFrame;
    
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };
    
    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, hasAnimated]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: '0px'
      }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, [hasAnimated]);

  return (
    <div ref={counterRef}>
      {count}{suffix}
    </div>
  );
};

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [slideProgress, setSlideProgress] = useState(0);
  const progressIntervalRef = useRef(null);
  const slideTimeoutRef = useRef(null);

  // IMPORTANT: Replace these image paths with your actual image paths
  const heroSlides = [
    {
      title: "Charting Boundaries, Navigating Possibilities",
      subtitle: "Leading Geospatial Solutions Provider | ISO 9001-2015, ISO/IEC 27001-2022, ISO 45001-2018 Certified",
      description: "Expert surveying services including DGPS Survey, Drone Survey, Cadastral Mapping, GIS Solutions, Topographical Survey, Mine Survey, and comprehensive geospatial analytics.",
      primaryBtn: "Get a Quote",
      secondaryBtn: "View Services",
      primaryLink: "/contact",
      secondaryLink: "/services",
      desktopImage: hero1Image,
      mobileImage: hero1Image
    },
    {
      title: "Advanced Drone & DGPS Technology",
      subtitle: "12 DGPS Units | 2 Professional Drones | 5 Total Stations",
      description: "Leveraging cutting-edge technology to deliver precise geospatial data, 3D models, contours, and comprehensive mapping solutions for your critical projects.",
      primaryBtn: "Our Technology",
      secondaryBtn: "Portfolio",
      primaryLink: "/services",
      secondaryLink: "/portfolio",
      desktopImage: hero2Image,
      mobileImage: hero2Image
    },
    {
      title: "20+ Years of Excellence Since 1998",
      subtitle: "100+ Mining Projects | 5000+ KM Road Survey",
      description: "Trusted by Defence Ministry, Reliance Industries, Ultra Tech Cement, and Airport Authority of India for mission-critical surveying operations.",
      primaryBtn: "Our Clients",
      secondaryBtn: "Contact Us",
      primaryLink: "/testimonials",
      secondaryLink: "/contact",
      desktopImage: hero3Image,
      mobileImage: hero3Image
    }
  ];

  const services = [
    { 
      icon: "📡", 
      title: "DGPS Survey", 
      desc: "Differential GPS surveying for precise positioning and boundary demarcation with advanced geo-referencing capabilities.", 
      image: hero1Image
    },
    { 
      icon: "🚁", 
      title: "Drone Survey", 
      desc: "Unmanned aerial vehicle surveying delivering high-resolution images, 3D models, contours, DTM, DSM, and cloud point data.", 
      image: hero1Image
    },
    { 
      icon: "🗺️", 
      title: "Cadastral Mapping", 
      desc: "Comprehensive cadastral mapping with legal documentation for land parcels, boundaries, ownership, and geo-referenced records.", 
      image: hero1Image
    },
    { 
      icon: "🌍", 
      title: "GIS Mapping", 
      desc: "Geographic Information Systems for spatial data analysis, management, and automated enterprise work processes.", 
      image: hero1Image
    },
    { 
      icon: "⛰️", 
      title: "Topographical Survey", 
      desc: "Detailed topographic land surveys identifying natural and man-made features, elevations, and terrain specifications.", 
      image: hero1Image
    },
    { 
      icon: "⛏️", 
      title: "Mine Survey", 
      desc: "Mining area boundary fixing, cadastral map preparation, and geo-referenced mapping using DGPS and Total Station technology.", 
      image: hero1Image
    }
  ];

  const partners = [
    { name: "Defence Ministry", logo: "/images/partners/defence-ministry.png" }, // REPLACE THIS
    { name: "Reliance Industries", logo: "/images/partners/reliance.png" }, // REPLACE THIS
    { name: "Ultra Tech Cement", logo: "/images/partners/ultratech.png" }, // REPLACE THIS
    { name: "Airport Authority of India", logo: "/images/partners/aai.png" }, // REPLACE THIS
    { name: "MPIDC", logo: "/images/partners/mpidc.png" }, // REPLACE THIS
    { name: "MPSTDC", logo: "/images/partners/mpstdc.png" }, // REPLACE THIS
    { name: "Directorate of Geology", logo: "/images/partners/geology.png" }, // REPLACE THIS
    { name: "Cantonment Board", logo: "/images/partners/cantonment.png" }, // REPLACE THIS
    { name: "Rewa Ultra Mega Solar", logo: "/images/partners/rewa-solar.png" }, // REPLACE THIS
    { name: "PWD", logo: "/images/partners/pwd.png" } // REPLACE THIS
  ];

  const projects = [
    { title: "Rewa Ultra Mega Solar Limited", desc: "Boundary demarcation across 5,366+ hectares for solar installations", image: hero1Image },
    { title: "Omkareshwar Tourism Development", desc: "DGPS, drone survey, and GIS base map preparation for MPSTDC", image: hero1Image },
    { title: "Mining Survey Operations", desc: "100+ mining projects with cadastral mapping and boundary demarcation", image: hero1Image },
    { title: "Defence Infrastructure Projects", desc: "Survey work for BFR Babina and multiple cantonment boards", image: hero1Image },
    { title: "Road Network Mapping", desc: "5000+ KM road survey across multiple government agencies", image: hero1Image },
    { title: "Industrial Development Zones", desc: "Comprehensive surveying for MPIDC industrial parks and zones", image: hero1Image }
  ];

  const testimonials = [
    { name: "Rajesh Kumar", role: "Project Manager, MPIDC", rating: 5, text: "Professional service delivery with exceptional accuracy. Their DGPS and cadastral mapping work has been instrumental in our industrial development projects.", avatar: "👨‍💼" },
    { name: "Priya Sharma", role: "Director, Solar Projects", rating: 5, text: "Geolink's technical expertise and timely execution made our large-scale solar project boundary demarcation seamless. Highly recommended for precision work.", avatar: "👩‍💼" },
    { name: "Amit Patel", role: "Tourism Development Officer", rating: 5, text: "Outstanding drone survey capabilities and GIS mapping services. Their team's professionalism and advanced equipment ensure reliable results every time.", avatar: "👨‍💻" },
    { name: "Sunita Verma", role: "Mining Engineer", rating: 5, text: "Excellent mine survey services with accurate boundary fixing and cadastral mapping. The team is highly skilled and delivers on time consistently.", avatar: "👩‍🔬" }
  ];

  // Hero slider effect with proper progress tracking
  useEffect(() => {
    const slideInterval = 5000; // Total duration for one slide
    const progressInterval = 50; // Update progress every 50ms
    const progressIncrement = (100 / (slideInterval / progressInterval));

    // Clear any existing intervals
    if (progressIntervalRef.current) {
      clearInterval(progressIntervalRef.current);
    }
    if (slideTimeoutRef.current) {
      clearTimeout(slideTimeoutRef.current);
    }

    // Reset progress
    setSlideProgress(0);

    // Progress interval
    progressIntervalRef.current = setInterval(() => {
      setSlideProgress((prev) => {
        const newProgress = prev + progressIncrement;
        if (newProgress >= 100) {
          return 100;
        }
        return newProgress;
      });
    }, progressInterval);

    // Slide change timeout
    slideTimeoutRef.current = setTimeout(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % heroSlides.length);
    }, slideInterval);

    return () => {
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
      }
      if (slideTimeoutRef.current) {
        clearTimeout(slideTimeoutRef.current);
      }
    };
  }, [currentSlide, heroSlides.length]);

  const handleSlideChange = (index) => {
    if (index === currentSlide) return;
    
    // Clear existing intervals
    if (progressIntervalRef.current) {
      clearInterval(progressIntervalRef.current);
    }
    if (slideTimeoutRef.current) {
      clearTimeout(slideTimeoutRef.current);
    }
    
    setCurrentSlide(index);
    setSlideProgress(0);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
  };

  const slideVariants = {
    enter: (direction) => ({ x: direction > 0 ? '100%' : '-100%', opacity: 0, scale: 0.95 }),
    center: { x: 0, opacity: 1, scale: 1, transition: { duration: 0.7, ease: [0.43, 0.13, 0.23, 0.96] } },
    exit: (direction) => ({ x: direction < 0 ? '100%' : '-100%', opacity: 0, scale: 0.95, transition: { duration: 0.7, ease: [0.43, 0.13, 0.23, 0.96] } })
  };

  return (
    <div className="hmp-page">
      
      {/* HERO SECTION WITH BACKGROUND IMAGES */}
      <section className="hmp-hero-section">
        <AnimatePresence mode="wait">
          <motion.div key={`bg-${currentSlide}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }} className="hmp-hero-background-image">
            <picture>
              <source media="(max-width: 768px)" srcSet={heroSlides[currentSlide].mobileImage} />
              <img src={heroSlides[currentSlide].desktopImage} alt={heroSlides[currentSlide].title} className="hmp-hero-img" />
            </picture>
            <div className="hmp-hero-overlay"></div>
          </motion.div>
        </AnimatePresence>
        
        <AnimatePresence mode="wait" custom={currentSlide}>
          <motion.div key={currentSlide} custom={currentSlide} variants={slideVariants} initial="enter" animate="center" exit="exit" className="hmp-hero-content">
            <motion.h1 className="hmp-hero-title" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
              {heroSlides[currentSlide].title}
            </motion.h1>
            <motion.p className="hmp-hero-subtitle" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
              {heroSlides[currentSlide].subtitle}
            </motion.p>
            <motion.p className="hmp-hero-description" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
              {heroSlides[currentSlide].description}
            </motion.p>
            <motion.div className="hmp-hero-cta" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
              <Link to={heroSlides[currentSlide].primaryLink} className="hmp-btn hmp-btn-primary">{heroSlides[currentSlide].primaryBtn}</Link>
              <Link to={heroSlides[currentSlide].secondaryLink} className="hmp-btn hmp-btn-secondary">{heroSlides[currentSlide].secondaryBtn}</Link>
            </motion.div>
          </motion.div>
        </AnimatePresence>
        
        <div className="hmp-hero-navigation">
          <div className="hmp-hero-dots">
            {heroSlides.map((_, index) => (
              <button key={index} className={`hmp-dot ${currentSlide === index ? 'active' : ''}`} onClick={() => handleSlideChange(index)} aria-label={`Go to slide ${index + 1}`}>
                {currentSlide === index && (
                  <div className="hmp-dot-progress" style={{ width: `${slideProgress}%` }} />
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST INDICATORS */}
      <section className="hmp-trust-section">
        <div className="hmp-container">
          <motion.div className="hmp-trust-grid" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
            <motion.div className="hmp-trust-card" variants={scaleIn}>
              <div className="hmp-trust-number"><AnimatedCounter end={20} suffix="+" /></div>
              <div className="hmp-trust-label">Years of Experience</div>
              <div className="hmp-trust-desc">Since 1998 (Gravity Consultants)</div>
            </motion.div>
            <motion.div className="hmp-trust-card" variants={scaleIn}>
              <div className="hmp-trust-number"><AnimatedCounter end={100} suffix="+" /></div>
              <div className="hmp-trust-label">Mining Projects</div>
              <div className="hmp-trust-desc">Completed Successfully</div>
            </motion.div>
            <motion.div className="hmp-trust-card" variants={scaleIn}>
              <div className="hmp-trust-number"><AnimatedCounter end={5000} suffix="+" /></div>
              <div className="hmp-trust-label">KM Road Survey</div>
              <div className="hmp-trust-desc">Across Multiple Agencies</div>
            </motion.div>
            <motion.div className="hmp-trust-card" variants={scaleIn}>
              <div className="hmp-trust-number"><AnimatedCounter end={1} suffix=" Sec" /></div>
              <div className="hmp-trust-label">Precision Accuracy</div>
              <div className="hmp-trust-desc">Total Station Equipment</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ABOUT SNAPSHOT */}
      <section className="hmp-about-snapshot">
        <div className="hmp-container">
          <motion.div className="hmp-about-content" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}>
            <h2 className="hmp-section-title">Expert Geospatial Solutions</h2>
            <div className="hmp-about-text">
              <p>Geolink Survey is an ISO-certified leader in cadastral mapping and geo-referencing, pioneering the field of land survey since 1998. With over two decades of experience, our adroit team delivers accurate and efficient geospatial solutions through technical expertise, innovation, and professional commitment.</p>
              <p>We specialize in serving government, infrastructure, and mining sectors with maximum precision. Our pragmatic approach combines advanced instruments including 12 DGPS units, 2 professional drones, and 5 Total Stations with 1-second accuracy to ensure quality outcomes for our esteemed clients.</p>
              <div className="hmp-about-highlights">
                <span className="hmp-highlight-item">🎯 Maximum Precision</span>
                <span className="hmp-highlight-item">💡 Advanced Technology</span>
                <span className="hmp-highlight-item">✓ Proven Reliability</span>
              </div>
            </div>
            <Link to="/about" className="hmp-btn hmp-btn-outline">Read More About Us</Link>
          </motion.div>
        </div>
      </section>

      {/* SERVICES WITH IMAGES */}
      <section className="hmp-services-section">
        <div className="hmp-container">
          <h2 className="hmp-section-title">Comprehensive Survey Services</h2>
          <motion.div className="hmp-services-grid" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
            {services.map((service, index) => (
              <motion.div key={index} className="hmp-service-card" variants={scaleIn}>
                <div className="hmp-service-image-wrapper">
                  <img src={service.image} alt={service.title} className="hmp-service-bg-image" />
                  <div className="hmp-service-image-overlay"></div>
                </div>
                <div className="hmp-service-content">
                  <h3 className="hmp-service-title-with-icon">
                    <span className="hmp-service-icon-inline">{service.icon}</span>
                    <span>{service.title}</span>
                  </h3>
                  <p>{service.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
          <div className="hmp-services-cta">
            <Link to="/services" className="hmp-btn hmp-btn-primary">View All Services</Link>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE GEOLINK */}
      <section className="hmp-why-choose-section">
        <div className="hmp-container">
          <h2 className="hmp-section-title">Why Choose Geolink Survey</h2>
          <motion.div className="hmp-why-grid" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
            {[
              { icon: "🔬", title: "Advanced Instruments", text: "12 DGPS units, 2 professional drones, 5 Total Stations with 1-second accuracy, and 5 Auto Levels for comprehensive surveying capabilities." },
              { icon: "👥", title: "Experienced Professionals", text: "Highly skilled team with specialized expertise in civil engineering, GIS technology, and surveying with decades of combined experience." },
              { icon: "🎯", title: "Accuracy Standards", text: "ISO 9001-2015, ISO/IEC 27001-2022, and ISO 45001-2018 certified operations ensuring maximum precision and quality assurance." },
              { icon: "⚡", title: "Timely Delivery", text: "Efficient workflows and professional commitment ensure project completion within agreed timeframes without compromising accuracy." },
              { icon: "📋", title: "Compliance Focus", text: "Empaneled with government departments including Directorate of Geology and Mining, MPIDC, and multiple cantonment boards." },
              { icon: "🤝", title: "Client Satisfaction", text: "Trusted by leading organizations including Defence Ministry, Reliance Industries, Ultra Tech Cement, and Airport Authority of India." }
            ].map((item, index) => (
              <motion.div key={index} className="hmp-why-card" variants={fadeInUp}>
                <div className="hmp-why-icon">{item.icon}</div>
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* TRUSTED PARTNERS WITH LOGOS */}
      <section className="hmp-partners-section">
        <div className="hmp-container">
          <h2 className="hmp-section-title">Trusted Partners</h2>
          <div className="hmp-partners-slider">
            <div className="hmp-partners-track">
              {[...partners, ...partners].map((partner, index) => (
                <div key={index} className="hmp-partner-item">
                  <div className="hmp-partner-logo-container">
                    <img src={partner.logo} alt={partner.name} className="hmp-partner-logo-img" />
                  </div>
                  <div className="hmp-partner-name">{partner.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS WITH IMAGES */}
      <section className="hmp-work-section">
        <div className="hmp-container">
          <h2 className="hmp-section-title">Featured Projects</h2>
          <motion.div className="hmp-work-grid" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
            {projects.map((project, index) => (
              <motion.div key={index} className="hmp-work-card" variants={scaleIn}>
                <div className="hmp-work-image-wrapper">
                  <img src={project.image} alt={project.title} className="hmp-work-bg-image" />
                  <div className="hmp-work-image-overlay"></div>
                </div>
                <div className="hmp-work-info">
                  <h4>{project.title}</h4>
                  <p>{project.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
          <div className="hmp-work-cta">
            <Link to="/portfolio" className="hmp-btn hmp-btn-outline">View Our Work</Link>
          </div>
        </div>
      </section>

      {/* GOOGLE REVIEWS TESTIMONIALS */}
      <section className="hmp-testimonials-section">
        <div className="hmp-container">
          <h2 className="hmp-section-title">What Our Clients Say</h2>
          <p className="hmp-testimonials-subtitle">
            Read authentic reviews from our satisfied clients on{' '}
            <a href="https://g.page/r/CS1e32cBkbWuEAE/review" target="_blank" rel="noopener noreferrer" className="hmp-google-link">Google Business Profile</a>
          </p>
          
          <div className="hmp-testimonials-slider">
            <button className="hmp-slider-button hmp-slider-prev" onClick={() => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)} aria-label="Previous testimonial">‹</button>
            
            <AnimatePresence mode="wait">
              <motion.div key={currentTestimonial} initial={{ opacity: 0, x: 100, scale: 0.95 }} animate={{ opacity: 1, x: 0, scale: 1 }} exit={{ opacity: 0, x: -100, scale: 0.95 }} transition={{ duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }} className="hmp-testimonials-content">
                <div className="hmp-google-review-card">
                  <div className="hmp-review-header">
                    <div className="hmp-reviewer-avatar">{testimonials[currentTestimonial].avatar}</div>
                    <div className="hmp-reviewer-info">
                      <div className="hmp-reviewer-name">{testimonials[currentTestimonial].name}</div>
                      <div className="hmp-reviewer-role">{testimonials[currentTestimonial].role}</div>
                    </div>
                    <div className="hmp-google-logo">G</div>
                  </div>
                  <div className="hmp-review-stars">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <motion.span key={i} className="hmp-star" initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.1 + (i * 0.1) }}>★</motion.span>
                    ))}
                  </div>
                  <p className="hmp-review-text">{testimonials[currentTestimonial].text}</p>
                  <div className="hmp-review-footer">Posted on Google</div>
                </div>
              </motion.div>
            </AnimatePresence>
            
            <button className="hmp-slider-button hmp-slider-next" onClick={() => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)} aria-label="Next testimonial">›</button>
          </div>

          <div className="hmp-testimonial-dots">
            {testimonials.map((_, index) => (
              <button key={index} className={`hmp-dot ${currentTestimonial === index ? 'active' : ''}`} onClick={() => setCurrentTestimonial(index)} aria-label={`Go to testimonial ${index + 1}`} />
            ))}
          </div>

          <div className="hmp-testimonials-cta">
            <a href="https://g.page/r/CS1e32cBkbWuEAE/review" target="_blank" rel="noopener noreferrer" className="hmp-btn hmp-btn-secondary">View All Google Reviews</a>
          </div>
        </div>
      </section>

      {/* ENHANCED CTA SECTION */}
      <section className="hmp-cta-section">
        <div className="hmp-cta-background"><div className="hmp-cta-pattern"></div></div>
        <motion.div className="hmp-cta-content" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
          <div className="hmp-cta-icon">📍</div>
          <h2 className="hmp-cta-title">Ready to Start Your Survey Project?</h2>
          <p className="hmp-cta-text">Partner with Madhya Pradesh's leading ISO-certified surveying firm. Our expert team is ready to deliver accurate, reliable geospatial solutions for your government, infrastructure, or mining project.</p>
          <div className="hmp-cta-features">
            <div className="hmp-cta-feature"><span className="hmp-cta-feature-icon">✓</span><span>ISO Certified</span></div>
            <div className="hmp-cta-feature"><span className="hmp-cta-feature-icon">✓</span><span>20+ Years Experience</span></div>
            <div className="hmp-cta-feature"><span className="hmp-cta-feature-icon">✓</span><span>Advanced Technology</span></div>
          </div>
          <Link to="/contact" className="hmp-btn hmp-btn-large hmp-btn-cta-main">Contact Us Today<span className="hmp-btn-arrow">→</span></Link>
          <p className="hmp-cta-subtext">Get a free consultation and quote for your project</p>
        </motion.div>
      </section>

    </div>
  );
}

export default Home;