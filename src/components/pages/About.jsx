import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../styles/About.css';

// Import images - REPLACE THESE PATHS WITH YOUR ACTUAL IMAGE PATHS
import heroImage from '../../assets/hero-1.webp';
import companyImage from '../../assets/hero-1.webp';
import dgpsExpertiseImage from '../../assets/hero-1.webp';
import droneExpertiseImage from '../../assets/hero-1.webp';
import gisExpertiseImage from '../../assets/hero-1.webp';
import instrumentExpertiseImage from '../../assets/hero-1.webp';
import governmentIndustryImage from '../../assets/hero-1.webp';
import infrastructureIndustryImage from '../../assets/hero-1.webp';
import miningIndustryImage from '../../assets/hero-1.webp';
import defenceIndustryImage from '../../assets/hero-1.webp';
import energyIndustryImage from '../../assets/hero-1.webp';
import aviationIndustryImage from '../../assets/hero-1.webp';
import lubnaImage from '../../assets/hero-1.webp';
import murtazaImage from '../../assets/hero-1.webp';

function About() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
  };

  return (
    <div className="abt-page">
      
      {/* HERO SECTION WITH BACKGROUND IMAGE */}
      <section className="abt-hero-section">
        <div className="abt-hero-background">
          <img src={heroImage} alt="Geolink Survey" className="abt-hero-bg-image" />
          <div className="abt-hero-overlay"></div>
        </div>
        <motion.div 
          className="abt-hero-content"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <motion.h1 
            className="abt-hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            About Geolink Survey
          </motion.h1>
          <motion.p 
            className="abt-hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Pioneering Geospatial Excellence Since 1998
          </motion.p>
          <motion.p 
            className="abt-hero-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            ISO-certified leader in cadastral mapping, geo-referencing, and comprehensive surveying solutions for government, infrastructure, and industrial sectors across India.
          </motion.p>
        </motion.div>
      </section>

      {/* COMPANY OVERVIEW SECTION WITH IMAGE */}
      <section className="abt-overview-section">
        <div className="abt-container">
          <motion.h2 
            className="abt-section-title"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
          >
            Who We Are
          </motion.h2>
          
          <motion.div 
            className="abt-overview-wrapper"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div className="abt-overview-image-container" variants={fadeInLeft}>
              <img src={companyImage} alt="Geolink Survey Company" className="abt-overview-image" />
              <div className="abt-overview-image-badge">
                <span className="abt-badge-text">20+</span>
                <span className="abt-badge-label">Years Experience</span>
              </div>
            </motion.div>

            <motion.div className="abt-overview-content" variants={fadeInRight}>
              <div className="abt-overview-text">
                <p>
                  Geolink Survey is an <strong>ISO 9001-2015, ISO/IEC 27001-2022, and ISO 45001-2018 certified</strong> leader in providing expert geospatial solutions, specializing in cadastral mapping and geo-referencing. We are quintessentially pioneers in the field of land surveying, having built our reputation through tenacity, accuracy, and unwavering commitment to quality.
                </p>
                <p>
                  Our journey began in 1998 as Gravity Consultants, and we formally established Geolink Survey in 2013 under the visionary leadership of Late Mr. Mohammad Murtaza. With over <strong>two decades of experience</strong>, we have progressed manifold, becoming a trusted name in surveying and engineering services for both private and government sectors across India.
                </p>
                <p>
                  What sets us apart is our adroit team work, professional commitment, technical advancement, and pragmatic work style. We seamlessly strive to ensure the deliverance of quality outcomes with maximum precision. Our main focus remains on client satisfaction and work accuracy, backed by our continuous investment in advanced technology and professional expertise.
                </p>
                <p>
                  The advancement in technology has ameliorated our work standards to leaps and folds. We leverage modern instruments including <strong>12 DGPS units, 2 professional drones, 5 Total Stations with 1-second accuracy, and 5 Auto Levels</strong> to deliver comprehensive geospatial solutions that meet the highest industry standards.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* MISSION, VISION & VALUES */}
      <section className="abt-mvv-section">
        <div className="abt-container">
          <motion.h2 
            className="abt-section-title"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
          >
            Our Mission, Vision & Values
          </motion.h2>
          <motion.div 
            className="abt-mvv-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div className="abt-mvv-card" variants={scaleIn}>
              <div className="abt-mvv-icon">🎯</div>
              <h3 className="abt-mvv-title">Our Vision</h3>
              <p className="abt-mvv-text">
                To be a leading entity in geospatial solutions, recognized nationally for innovation, accuracy, and professional excellence in surveying and mapping services.
              </p>
            </motion.div>

            <motion.div className="abt-mvv-card" variants={scaleIn}>
              <div className="abt-mvv-icon">🚀</div>
              <h3 className="abt-mvv-title">Our Mission</h3>
              <p className="abt-mvv-text">
                To serve our clients with the most accurate analytical solutions, leveraging cutting-edge technology and professional expertise to deliver reliable geospatial data.
              </p>
            </motion.div>

            <motion.div className="abt-mvv-card" variants={scaleIn}>
              <div className="abt-mvv-icon">💎</div>
              <h3 className="abt-mvv-title">Our Values</h3>
              <p className="abt-mvv-text">
                To work as a team with commitment, punctuality, innovation, and professionalism, meeting client satisfaction within the given timeframe while maintaining the highest standards of integrity and precision.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* EXPERTISE & TECHNOLOGY WITH IMAGES */}
      <section className="abt-expertise-section">
        <div className="abt-container">
          <motion.h2 
            className="abt-section-title"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
          >
            Our Expertise & Technology
          </motion.h2>
          <motion.div 
            className="abt-expertise-content"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <motion.div 
              className="abt-expertise-intro"
              variants={fadeInUp}
            >
              <p>
                At Geolink Survey, we combine decades of professional experience with state-of-the-art technology to deliver precise, reliable, and efficient geospatial solutions. Our technical capabilities span across multiple surveying disciplines, ensuring comprehensive service delivery for diverse project requirements.
              </p>
            </motion.div>

            <motion.div 
              className="abt-expertise-grid"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.div className="abt-expertise-item" variants={scaleIn}>
                <div className="abt-expertise-image-wrapper">
                  <img src={dgpsExpertiseImage} alt="DGPS Survey" className="abt-expertise-image" />
                  <div className="abt-expertise-image-overlay"></div>
                </div>
                <div className="abt-expertise-content-box">
                  <div className="abt-expertise-icon">📡</div>
                  <h4>DGPS Survey Excellence</h4>
                  <p>
                    Our fleet of 12 DGPS units enables us to deliver differential GPS surveying for precise positioning and boundary demarcation. We specialize in geo-referencing cadastral maps, fixing outer boundaries of mining areas, and establishing boundary pillars with centimeter-level accuracy.
                  </p>
                </div>
              </motion.div>

              <motion.div className="abt-expertise-item" variants={scaleIn}>
                <div className="abt-expertise-image-wrapper">
                  <img src={droneExpertiseImage} alt="Drone Survey" className="abt-expertise-image" />
                  <div className="abt-expertise-image-overlay"></div>
                </div>
                <div className="abt-expertise-content-box">
                  <div className="abt-expertise-icon">🚁</div>
                  <h4>Drone Survey Capabilities</h4>
                  <p>
                    With 2 professional drones, we provide comprehensive UAV surveying services including high-resolution aerial imagery, 3D modeling, contour generation, DTM/DSM creation, cloud point data, and videography. Perfect for large-scale projects requiring rapid data acquisition.
                  </p>
                </div>
              </motion.div>

              <motion.div className="abt-expertise-item" variants={scaleIn}>
                <div className="abt-expertise-image-wrapper">
                  <img src={gisExpertiseImage} alt="GIS Mapping" className="abt-expertise-image" />
                  <div className="abt-expertise-image-overlay"></div>
                </div>
                <div className="abt-expertise-content-box">
                  <div className="abt-expertise-icon">🗺️</div>
                  <h4>GIS & Mapping Solutions</h4>
                  <p>
                    Our GIS expertise enables spatial data analysis, cadastral mapping, topographical surveys, and automated enterprise work processes. We deliver geo-referenced maps, satellite image processing, and comprehensive geospatial database management.
                  </p>
                </div>
              </motion.div>

              <motion.div className="abt-expertise-item" variants={scaleIn}>
                <div className="abt-expertise-image-wrapper">
                  <img src={instrumentExpertiseImage} alt="Advanced Instrumentation" className="abt-expertise-image" />
                  <div className="abt-expertise-image-overlay"></div>
                </div>
                <div className="abt-expertise-content-box">
                  <div className="abt-expertise-icon">⚙️</div>
                  <h4>Advanced Instrumentation</h4>
                  <p>
                    We deploy 5 Total Stations with 1-second accuracy and 5 Auto Levels for precise measurements. Our modern instruments ensure maximum accuracy in topographical surveys, contour mapping, alignment surveys, and construction layout planning.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* WHY CHOOSE GEOLINK */}
      <section className="abt-why-section">
        <div className="abt-container">
          <motion.h2 
            className="abt-section-title"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
          >
            Why Choose Geolink Survey
          </motion.h2>
          <motion.div 
            className="abt-why-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div className="abt-why-card" variants={scaleIn}>
              <div className="abt-why-icon">👥</div>
              <h4>Experienced Professionals</h4>
              <p>
                Our highly skilled team brings over 20 years of combined expertise in civil engineering, surveying, GIS technology, and geospatial analysis. Led by seasoned professionals, we ensure quality outcomes on every project.
              </p>
            </motion.div>

            <motion.div className="abt-why-card" variants={scaleIn}>
              <div className="abt-why-icon">🔬</div>
              <h4>Advanced Instruments</h4>
              <p>
                Equipped with 12 DGPS units, 2 professional drones, 5 Total Stations with 1-second accuracy, and 5 Auto Levels, we leverage cutting-edge technology for comprehensive surveying capabilities.
              </p>
            </motion.div>

            <motion.div className="abt-why-card" variants={scaleIn}>
              <div className="abt-why-icon">🎯</div>
              <h4>Accuracy & Compliance</h4>
              <p>
                ISO 9001-2015, ISO/IEC 27001-2022, and ISO 45001-2018 certified operations ensure maximum precision, data security, and occupational health standards in all our surveying activities.
              </p>
            </motion.div>

            <motion.div className="abt-why-card" variants={scaleIn}>
              <div className="abt-why-icon">⚡</div>
              <h4>Timely Project Delivery</h4>
              <p>
                Efficient workflows, professional commitment, and systematic project management ensure completion within agreed timeframes without compromising accuracy or quality standards.
              </p>
            </motion.div>

            <motion.div className="abt-why-card" variants={scaleIn}>
              <div className="abt-why-icon">📋</div>
              <h4>Government Empanelment</h4>
              <p>
                Empaneled with Directorate of Geology and Mining (MP), MPIDC, Rewa Ultra Mega Solar Ltd, and MP Tourism Board, demonstrating our credibility and compliance with government standards.
              </p>
            </motion.div>

            <motion.div className="abt-why-card" variants={scaleIn}>
              <div className="abt-why-icon">🤝</div>
              <h4>Reliable Support</h4>
              <p>
                Trusted by leading organizations including Defence Ministry, Reliance Industries, Ultra Tech Cement, and Airport Authority of India for mission-critical surveying operations.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* INDUSTRY FOCUS WITH IMAGES */}
      <section className="abt-industry-section">
        <div className="abt-container">
          <motion.h2 
            className="abt-section-title"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
          >
            Industries We Serve
          </motion.h2>
          <motion.div 
            className="abt-industry-content"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <motion.p 
              className="abt-industry-intro"
              variants={fadeInUp}
            >
              Geolink Survey serves as a trusted professional partner across multiple sectors, delivering accurate and reliable geospatial solutions tailored to industry-specific requirements. Our diverse client portfolio demonstrates our versatility and commitment to excellence.
            </motion.p>

            <motion.div 
              className="abt-industry-grid"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.div className="abt-industry-card" variants={scaleIn}>
                <div className="abt-industry-image-wrapper">
                  <img src={governmentIndustryImage} alt="Government Departments" className="abt-industry-image" />
                  <div className="abt-industry-image-overlay"></div>
                  <div className="abt-industry-number">01</div>
                </div>
                <div className="abt-industry-content-box">
                  <h4>Government Departments</h4>
                  <p>
                    Directorate of Geology and Mining, Madhya Pradesh Industrial Development Corporation, MP Tourism Board, Water Resource Department, Bhopal Development Authority, Municipal Corporation, Public Works Department, and various Cantonment Boards.
                  </p>
                </div>
              </motion.div>

              <motion.div className="abt-industry-card" variants={scaleIn}>
                <div className="abt-industry-image-wrapper">
                  <img src={infrastructureIndustryImage} alt="Infrastructure & Construction" className="abt-industry-image" />
                  <div className="abt-industry-image-overlay"></div>
                  <div className="abt-industry-number">02</div>
                </div>
                <div className="abt-industry-content-box">
                  <h4>Infrastructure & Construction</h4>
                  <p>
                    Road survey projects spanning 5000+ KM, power transmission line surveys, irrigation projects, pipeline route surveys, water supply networks, OFC surveys, and comprehensive development projects requiring topographical and cadastral mapping.
                  </p>
                </div>
              </motion.div>

              <motion.div className="abt-industry-card" variants={scaleIn}>
                <div className="abt-industry-image-wrapper">
                  <img src={miningIndustryImage} alt="Mining & Industrial" className="abt-industry-image" />
                  <div className="abt-industry-image-overlay"></div>
                  <div className="abt-industry-number">03</div>
                </div>
                <div className="abt-industry-content-box">
                  <h4>Mining & Industrial</h4>
                  <p>
                    100+ mining survey projects including boundary demarcation, cadastral mapping, mine area surveys for Ultra Tech Cement, Auro Natural Resources, and various mining operations across Madhya Pradesh and neighboring states.
                  </p>
                </div>
              </motion.div>

              <motion.div className="abt-industry-card" variants={scaleIn}>
                <div className="abt-industry-image-wrapper">
                  <img src={defenceIndustryImage} alt="Defence & Security" className="abt-industry-image" />
                  <div className="abt-industry-image-overlay"></div>
                  <div className="abt-industry-number">04</div>
                </div>
                <div className="abt-industry-content-box">
                  <h4>Defence & Security</h4>
                  <p>
                    BFR Babina, Jamnagar Airforce Range, Okha Range, and multiple defence establishments across Bhopal, Sagar, Agra, Gwalior, Ahmedabad, and Nainital requiring precision surveying and mapping services.
                  </p>
                </div>
              </motion.div>

              <motion.div className="abt-industry-card" variants={scaleIn}>
                <div className="abt-industry-image-wrapper">
                  <img src={energyIndustryImage} alt="Energy & Utilities" className="abt-industry-image" />
                  <div className="abt-industry-image-overlay"></div>
                  <div className="abt-industry-number">05</div>
                </div>
                <div className="abt-industry-content-box">
                  <h4>Energy & Utilities</h4>
                  <p>
                    Rewa Ultra Mega Solar Limited with boundary demarcation across 5000+ hectares, MPPGCL Sarni, HPCL gas pipeline projects, and various renewable energy infrastructure requiring comprehensive geospatial solutions.
                  </p>
                </div>
              </motion.div>

              <motion.div className="abt-industry-card" variants={scaleIn}>
                <div className="abt-industry-image-wrapper">
                  <img src={aviationIndustryImage} alt="Aviation & Transport" className="abt-industry-image" />
                  <div className="abt-industry-image-overlay"></div>
                  <div className="abt-industry-number">06</div>
                </div>
                <div className="abt-industry-content-box">
                  <h4>Aviation & Transport</h4>
                  <p>
                    Airport Authority of India, 50+ Airport NOC clearances, rail-road surveys, and transportation infrastructure projects requiring accurate topographical and cadastral mapping services.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* LEADERSHIP SECTION WITH IMAGES */}
      <section className="abt-leadership-section">
        <div className="abt-container">
          <motion.h2 
            className="abt-section-title"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
          >
            Our Leadership
          </motion.h2>
          
          {/* Leader 1 - Image Left, Text Right */}
          <motion.div 
            className="abt-leader-wrapper abt-leader-left"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div className="abt-leader-image-container" variants={fadeInLeft}>
              <img src={lubnaImage} alt="Mrs. Lubna Rashid Murtaza" className="abt-leader-image" />
              <div className="abt-leader-image-frame"></div>
            </motion.div>

            <motion.div className="abt-leader-info-container" variants={fadeInRight}>
              <h3 className="abt-leader-name">Mrs. Lubna Rashid Murtaza</h3>
              <p className="abt-leader-role">Partner</p>
              <p className="abt-leader-bio">
                With 20 years of experience in architecture, interior designing, and planning, Mrs. Lubna Rashid Murtaza brings expertise in personnel management and architectural building design. Her vision of <strong>"Building relationships to last"</strong> guides our client-centric approach and long-term partnerships.
              </p>
              <div className="abt-leader-expertise">
                <span className="abt-expertise-tag">Architecture</span>
                <span className="abt-expertise-tag">Interior Design</span>
                <span className="abt-expertise-tag">Management</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Leader 2 - Text Left, Image Right */}
          <motion.div 
            className="abt-leader-wrapper abt-leader-right abt-founder-tribute"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div className="abt-leader-info-container" variants={fadeInLeft}>
              <h3 className="abt-leader-name">Late Mr. Mohammad Murtaza</h3>
              <p className="abt-leader-role">Founder</p>
              <p className="abt-leader-bio">
                The visionary founder of Geolink Survey with 23 years of experience in civil engineering and surveying. His acumen in land acquisition and geospatial coordination made him a highly sought-after surveyor. His philosophy that <strong>"Quality never goes out of style"</strong> continues to inspire our commitment to excellence and professional integrity.
              </p>
              <div className="abt-leader-expertise">
                <span className="abt-expertise-tag">Civil Engineering</span>
                <span className="abt-expertise-tag">Surveying</span>
                <span className="abt-expertise-tag">Geospatial Coordination</span>
              </div>
            </motion.div>

            <motion.div className="abt-leader-image-container" variants={fadeInRight}>
              <img src={murtazaImage} alt="Late Mr. Mohammad Murtaza" className="abt-leader-image" />
              <div className="abt-leader-image-frame"></div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="abt-cta-section">
        <div className="abt-cta-background">
          <div className="abt-cta-pattern"></div>
        </div>
        <motion.div 
          className="abt-cta-content"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="abt-cta-icon">🤝</div>
          <h2 className="abt-cta-title">Partner with Geolink Survey</h2>
          <p className="abt-cta-text">
            Experience the difference of working with Madhya Pradesh's leading ISO-certified surveying firm. Our expert team is ready to deliver accurate, reliable, and professional geospatial solutions for your critical projects.
          </p>
          <div className="abt-cta-features">
            <div className="abt-cta-feature">
              <span className="abt-cta-feature-icon">✓</span>
              <span>20+ Years Experience</span>
            </div>
            <div className="abt-cta-feature">
              <span className="abt-cta-feature-icon">✓</span>
              <span>ISO Certified</span>
            </div>
            <div className="abt-cta-feature">
              <span className="abt-cta-feature-icon">✓</span>
              <span>Advanced Technology</span>
            </div>
          </div>
          <Link to="/contact" className="abt-btn abt-btn-large abt-btn-cta-main">
            Get in Touch
            <span className="abt-btn-arrow">→</span>
          </Link>
          <p className="abt-cta-subtext">Schedule a consultation to discuss your surveying requirements</p>
        </motion.div>
      </section>

    </div>
  );
}

export default About;