import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Testimonials.css';
import testimonialsHeroImage from '../../assets/hero-2.jpg';

function Testimonials() {
  // Real Google Reviews - DO NOT MODIFY TEXT, NAMES, OR RATINGS
  const googleReviews = [
    {
      id: 1,
      name: "Nauman Zafar",
      rating: 5,
      text: "I had a great experience with this land survey company. The team was highly professional, punctual, and very knowledgeable about their work. They explained the entire process clearly and completed the survey with accuracy and attention to detail. The reports were delivered on time and were easy to understand. I truly appreciate their honesty and commitment to quality. I would definitely recommend their services to anyone looking for reliable and trustworthy land surveying.",
      avatar: "NZ"
    },
    {
      id: 2,
      name: "Ravi Shukla",
      rating: 5,
      text: "best quality service provider . they are very efficient and professional in work to complete in time given time frame best wishes keep it up Thanks",
      avatar: "RS"
    },
    {
      id: 3,
      name: "Nikhat Bano",
      rating: 5,
      text: "Very good work and professional behavior.",
      avatar: "NB"
    },
    {
      id: 4,
      name: "Sanjay Ingle",
      rating: 5,
      text: "I m fully satisfied with the services specially for accuracy",
      avatar: "SI"
    },
    {
      id: 5,
      name: "Adil Khan",
      rating: 5,
      text: "Geolink survey has a very good knowledge of geo mapping and geo refrence... And proper and accurate survey. In bhopal..",
      avatar: "AK"
    },
    {
      id: 6,
      name: "Hemant Vagare",
      rating: 5,
      text: "DGPS & Total Station training program available for students. Interested students must visit.",
      avatar: "HV"
    },
    {
      id: 7,
      name: "Mohan Meena",
      rating: 5,
      text: "Excellent services provided by the company",
      avatar: "MM"
    },
    {
      id: 8,
      name: "Mohit Malviya",
      rating: 5,
      text: "Working with geolink from long time... Good services",
      avatar: "MM"
    },
    {
      id: 9,
      name: "Syed Sajid",
      rating: 5,
      text: "Excellent service",
      avatar: "SS"
    },
    {
      id: 10,
      name: "Sourabh",
      rating: 4,
      text: "All professional for GIs & DGPS",
      avatar: "S"
    },
    {
      id: 11,
      name: "Property Creator",
      rating: 5,
      text: "👍👍",
      avatar: "PC"
    },
    {
      id: 12,
      name: "Faraz Khan",
      rating: 5,
      text: "Best survey company",
      avatar: "FK"
    },
    {
      id: 13,
      name: "Suresh Singh Add. Tehsildar Rajgarh",
      rating: 5,
      text: "Nice",
      avatar: "SS"
    },
    {
      id: 14,
      name: "Saad Hashmi",
      rating: 5,
      text: "Positive Professionalism",
      avatar: "SH"
    },
    {
      id: 15,
      name: "Aydin Khan",
      rating: 5,
      text: "Good and professional work.",
      avatar: "AK"
    }
  ];

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08 } }
  };

  const cardVariant = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } }
  };

  return (
    <div className="tst-page">
      
      {/* HERO SECTION */}
      <section className="tst-hero-section">
        <div className="tst-hero-background">
          <img src={testimonialsHeroImage} alt="Geolink Survey Testimonials" className="tst-hero-img" />
          <div className="tst-hero-overlay"></div>
        </div>
        
        <motion.div 
          className="tst-hero-content"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <motion.h1 
            className="tst-hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Client Testimonials
          </motion.h1>
          <motion.p 
            className="tst-hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Real experiences from valued clients who trust Geolink Survey
          </motion.p>
          <motion.p 
            className="tst-hero-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Discover why government agencies, infrastructure developers, and industrial leaders choose us for their critical surveying projects
          </motion.p>
        </motion.div>
      </section>

      {/* OVERALL RATING SUMMARY */}
      <section className="tst-rating-section">
        <div className="tst-container">
          <motion.div 
            className="tst-rating-wrapper"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div className="tst-rating-card" variants={scaleIn}>
              <div className="tst-rating-header">
                <div className="tst-rating-number">4.7</div>
                <div className="tst-rating-stars-large">
                  <span className="tst-star tst-star-filled">★</span>
                  <span className="tst-star tst-star-filled">★</span>
                  <span className="tst-star tst-star-filled">★</span>
                  <span className="tst-star tst-star-filled">★</span>
                  <span className="tst-star tst-star-half">★</span>
                </div>
                <div className="tst-rating-text">Average Rating</div>
              </div>
              
              <div className="tst-rating-divider"></div>
              
              <div className="tst-rating-stats">
                <div className="tst-stat-item">
                  <div className="tst-stat-label">Total Reviews</div>
                  <div className="tst-stat-value">46+</div>
                </div>
                <div className="tst-stat-item">
                  <div className="tst-stat-label">5-Star Reviews</div>
                  <div className="tst-stat-value">93%</div>
                </div>
                <div className="tst-stat-item">
                  <div className="tst-stat-label">Satisfaction</div>
                  <div className="tst-stat-value">Excellent</div>
                </div>
              </div>

              <div className="tst-google-badge">
                <div className="tst-google-icon">G</div>
                <div className="tst-google-info">
                  <div className="tst-google-title">Google Reviews</div>
                  <div className="tst-google-subtitle">Verified Reviews</div>
                </div>
              </div>
            </motion.div>

            <motion.div className="tst-rating-highlights" variants={fadeInUp}>
              <h3 className="tst-highlights-title">Why Clients Choose Us</h3>
              <div className="tst-highlights-grid">
                <div className="tst-highlight-item">
                  <div className="tst-highlight-icon">✓</div>
                  <div className="tst-highlight-text">Professional & Punctual</div>
                </div>
                <div className="tst-highlight-item">
                  <div className="tst-highlight-icon">✓</div>
                  <div className="tst-highlight-text">Accurate Results</div>
                </div>
                <div className="tst-highlight-item">
                  <div className="tst-highlight-icon">✓</div>
                  <div className="tst-highlight-text">Timely Delivery</div>
                </div>
                <div className="tst-highlight-item">
                  <div className="tst-highlight-icon">✓</div>
                  <div className="tst-highlight-text">Expert Knowledge</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* TESTIMONIALS GRID */}
      <section className="tst-testimonials-section">
        <div className="tst-container">
          <motion.h2 
            className="tst-section-title"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
          >
            What Our Clients Say
          </motion.h2>

          <motion.div 
            className="tst-testimonials-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {googleReviews.map((review) => (
              <motion.div 
                key={review.id} 
                className="tst-review-card"
                variants={cardVariant}
              >
                <div className="tst-review-header">
                  <div className="tst-reviewer-avatar">{review.avatar}</div>
                  <div className="tst-reviewer-info">
                    <div className="tst-reviewer-name">{review.name}</div>
                    <div className="tst-review-stars">
                      {[...Array(5)].map((_, i) => (
                        <span 
                          key={i} 
                          className={`tst-star ${i < review.rating ? 'tst-star-filled' : 'tst-star-empty'}`}
                        >
                          ★
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="tst-google-logo">G</div>
                </div>
                
                <div className="tst-review-quote">"</div>
                <div className="tst-review-text">{review.text}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="tst-stats-section">
        <div className="tst-container">
          <motion.div 
            className="tst-stats-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div className="tst-stat-card" variants={scaleIn}>
              <div className="tst-stat-icon">🎯</div>
              <div className="tst-stat-number">20+</div>
              <div className="tst-stat-label">Years Experience</div>
            </motion.div>

            <motion.div className="tst-stat-card" variants={scaleIn}>
              <div className="tst-stat-icon">⭐</div>
              <div className="tst-stat-number">4.7/5</div>
              <div className="tst-stat-label">Average Rating</div>
            </motion.div>

            <motion.div className="tst-stat-card" variants={scaleIn}>
              <div className="tst-stat-icon">✓</div>
              <div className="tst-stat-number">100%</div>
              <div className="tst-stat-label">Client Satisfaction</div>
            </motion.div>

            <motion.div className="tst-stat-card" variants={scaleIn}>
              <div className="tst-stat-icon">📋</div>
              <div className="tst-stat-number">ISO</div>
              <div className="tst-stat-label">Certified Quality</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="tst-cta-section">
        <div className="tst-cta-background">
          <div className="tst-cta-pattern"></div>
        </div>
        <motion.div 
          className="tst-cta-content"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="tst-cta-icon">⭐</div>
          <h2 className="tst-cta-title">Share Your Experience</h2>
          <p className="tst-cta-text">
            Have you worked with Geolink Survey? We'd love to hear about your experience. Your feedback helps us improve and assists others in making informed decisions.
          </p>
          <a 
            href="https://g.page/r/CS1e32cBkbWuEAE/review" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="tst-btn tst-btn-primary"
          >
            Write a Review on Google
            <span className="tst-btn-arrow">→</span>
          </a>
          <p className="tst-cta-subtext">Your honest feedback is greatly appreciated</p>
        </motion.div>
      </section>

      {/* TRANSPARENCY NOTE */}
      <section className="tst-transparency-section">
        <div className="tst-container">
          <motion.div 
            className="tst-transparency-note"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <p>All testimonials displayed are authentic Google Reviews. We are committed to transparency and showcase genuine client feedback without modification.</p>
          </motion.div>
        </div>
      </section>

    </div>
  );
}

export default Testimonials;