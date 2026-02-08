// Import React's useState hook for handling form data
import { useState } from 'react';

// Import Framer Motion for smooth animations
import { motion, AnimatePresence } from 'framer-motion';

// Import the styles for this page
import '../styles/Contact.css';

// This is the Contact page component
function Contact() {
  // State to store form data
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  // State for form submission status
  const [submitting, setSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' or 'error'

  // This function runs when user types in form fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // This function runs when user clicks Submit
  const handleSubmit = async (e) => {
    e.preventDefault(); // Stops page from refreshing
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all required fields.');
      return;
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert('Please enter a valid email address.');
      return;
    }

    setSubmitting(true);
    setSubmitStatus(null);

    try {
      // Send form data to Formspree
      const response = await fetch('https://formspree.io/f/mykdydya', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          company: formData.company,
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          message: formData.message,
        }),
      });

      if (response.ok) {
        // Success: Show success message
        setSubmitStatus('success');
        
        // Clear the form after 2 seconds
        setTimeout(() => {
          setFormData({
            name: '',
            company: '',
            email: '',
            phone: '',
            service: '',
            message: ''
          });
          setSubmitStatus(null);
        }, 3000);
      } else {
        // Error from Formspree
        setSubmitStatus('error');
        setTimeout(() => setSubmitStatus(null), 5000);
      }
    } catch (error) {
      // Network or other error
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(null), 5000);
    } finally {
      setSubmitting(false);
    }
  };

  // Animation variants for smooth entrance effects
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="cnt-page">
      
      {/* PAGE HERO / HEADER SECTION */}
      <motion.section 
        className="cnt-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="cnt-hero-overlay"></div>
        <motion.div 
          className="cnt-hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div 
            className="cnt-hero-badge"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            📍 We're Here to Help
          </motion.div>
          <h1>Get in Touch with Geolink</h1>
          <p>Professional surveying and geospatial solutions tailored to your project needs. Our expert team is ready to bring precision to your vision.</p>
        </motion.div>
      </motion.section>

      {/* MAIN CONTACT CONTENT WRAPPER */}
      <div className="cnt-container">
        
        {/* CONTACT INFORMATION CARDS - TOP SECTION */}
        <motion.section 
          className="cnt-quick-info"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
        >
          <motion.div className="cnt-quick-card" variants={cardVariant}>
            <div className="cnt-quick-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </div>
            <div className="cnt-quick-content">
              <h3>Our Office</h3>
              <p>14-15 Alark Arcade, Airport Road<br />Bhopal (M.P.) 462030</p>
            </div>
          </motion.div>

          <motion.div className="cnt-quick-card" variants={cardVariant}>
            <div className="cnt-quick-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
            </div>
            <div className="cnt-quick-content">
              <h3>Call Us</h3>
              <p>
                <a href="tel:+919755004477">9755004477</a><br />
                <a href="tel:+919755024477">9755024477</a><br />
                <a href="tel:07554275477">0755-4275477</a>
              </p>
            </div>
          </motion.div>

          <motion.div className="cnt-quick-card" variants={cardVariant}>
            <div className="cnt-quick-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </div>
            <div className="cnt-quick-content">
              <h3>Email Us</h3>
              <p>
                <a href="mailto:geolinksurvey@gmail.com">geolinksurvey@gmail.com</a><br />
                <a href="mailto:admin@geolinksurvey.com">admin@geolinksurvey.com</a>
              </p>
            </div>
          </motion.div>
        </motion.section>

        {/* FORM AND MAP GRID LAYOUT */}
        <div className="cnt-main-grid">
          
          {/* LEFT SIDE - CONTACT FORM */}
          <motion.section 
            className="cnt-form-section"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            variants={fadeInUp}
          >
            <div className="cnt-section-header">
              <h2>Send Us a Message</h2>
              <p>Share your project details and we'll get back to you within 24 hours.</p>
            </div>
            
            <form className="cnt-form" onSubmit={handleSubmit}>
              
              {/* Row 1: Name & Company */}
              <div className="cnt-form-row">
                <div className="cnt-form-group">
                  <label htmlFor="cnt-name">Full Name *</label>
                  <input
                    type="text"
                    id="cnt-name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your full name"
                    disabled={submitting}
                  />
                </div>

                <div className="cnt-form-group">
                  <label htmlFor="cnt-company">Company Name</label>
                  <input
                    type="text"
                    id="cnt-company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your company name"
                    disabled={submitting}
                  />
                </div>
              </div>

              {/* Row 2: Phone & Email */}
              <div className="cnt-form-row">
                <div className="cnt-form-group">
                  <label htmlFor="cnt-phone">Phone Number</label>
                  <input
                    type="tel"
                    id="cnt-phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your contact number"
                    disabled={submitting}
                  />
                </div>

                <div className="cnt-form-group">
                  <label htmlFor="cnt-email">Email Address *</label>
                  <input
                    type="email"
                    id="cnt-email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                    disabled={submitting}
                  />
                </div>
              </div>

              {/* Service Dropdown */}
              <div className="cnt-form-group">
                <label htmlFor="cnt-service">Service Required</label>
                <select
                  id="cnt-service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  disabled={submitting}
                >
                  <option value="">Select a service</option>
                  <option value="land-survey">Land Surveying</option>
                  <option value="topographic">Topographic Mapping</option>
                  <option value="gis">GIS Services</option>
                  <option value="laser-scanning">3D Laser Scanning</option>
                  <option value="drone">Drone Surveys</option>
                  <option value="consulting">Consulting</option>
                  <option value="other">Other Services</option>
                </select>
              </div>

              {/* Message Textarea */}
              <div className="cnt-form-group">
                <label htmlFor="cnt-message">Project Details *</label>
                <textarea
                  id="cnt-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Tell us about your project requirements, timeline, and any specific needs..."
                  disabled={submitting}
                ></textarea>
              </div>

              {/* Submit Button with Loading State */}
              <button 
                type="submit" 
                className="cnt-submit-btn"
                disabled={submitting}
              >
                {submitting ? (
                  <span className="cnt-btn-loading">
                    <span className="cnt-spinner"></span>
                    Sending Message...
                  </span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="22" y1="2" x2="11" y2="13"></line>
                      <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                    </svg>
                  </>
                )}
              </button>

              {/* Success/Error Messages */}
              <AnimatePresence>
                {submitStatus === 'success' && (
                  <motion.div 
                    className="cnt-message cnt-message-success"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Thank you! We've received your message and will respond within 24 hours.</span>
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div 
                    className="cnt-message cnt-message-error"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="15" y1="9" x2="9" y2="15"></line>
                      <line x1="9" y1="9" x2="15" y2="15"></line>
                    </svg>
                    <span>Oops! Something went wrong. Please try again or email us directly.</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.section>

          {/* RIGHT SIDE - MAP AND INFO */}
          <motion.aside 
            className="cnt-sidebar"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            variants={fadeInUp}
          >
            {/* GOOGLE MAP */}
            <div className="cnt-map-container">
              <h3>Visit Our Office</h3>
              <div className="cnt-map-wrapper">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3483.5213179893876!2d77.3536633751001!3d23.28470677899084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c67c810513af1%3A0xaeb5910167df5e2d!2sGEOLINK%20SURVEY!5e1!3m2!1sen!2sin!4v1770479356189!5m2!1sen!2sin" 
                  width="100%" 
                  height="320" 
                  style={{ border: 0, borderRadius: '12px' }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Geolink Survey Office Location"
                ></iframe>
              </div>
            </div>

            {/* BUSINESS HOURS */}
            <div className="cnt-hours-card">
              <h3>Business Hours</h3>
              <div className="cnt-hours-list">
                <div className="cnt-hours-row">
                  <span className="cnt-day">Monday - Friday</span>
                  <span className="cnt-time">9:00 AM - 6:00 PM</span>
                </div>
                <div className="cnt-hours-row">
                  <span className="cnt-day">Saturday</span>
                  <span className="cnt-time">10:00 AM - 4:00 PM</span>
                </div>
                <div className="cnt-hours-row cnt-hours-closed">
                  <span className="cnt-day">Sunday</span>
                  <span className="cnt-time">Closed</span>
                </div>
              </div>
            </div>

            {/* WEBSITE LINK */}
            <div className="cnt-website-card">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
              </svg>
              <div>
                <p>Visit our website</p>
                <a href="https://www.geolinksurvey.com" target="_blank" rel="noopener noreferrer">
                  www.geolinksurvey.com
                </a>
              </div>
            </div>
          </motion.aside>
        </div>
      </div>

    </div>
  );
}

// Export so App.jsx can use this page
export default Contact;