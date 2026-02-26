import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../styles/OurWork.css';

// Import images - REPLACE THESE PATHS WITH YOUR ACTUAL IMAGE PATHS
import heroImage from '../../assets/hero-1.webp';
import mpidcImage from '../../assets/hero-1.webp';
import dgmImage from '../../assets/hero-1.webp';
import ultratechImage from '../../assets/hero-1.webp';
import sarniImage from '../../assets/hero-1.webp';
import rewaImage from '../../assets/hero-1.webp';
import omkareshwarImage from '../../assets/hero-1.webp';

// Gallery images (other projects without names)
import gallery1 from '../../assets/hero-1.webp';
import gallery2 from '../../assets/hero-1.webp';
import gallery3 from '../../assets/hero-1.webp';
import gallery4 from '../../assets/hero-1.webp';
import gallery5 from '../../assets/hero-1.webp';
import gallery6 from '../../assets/hero-1.webp';
import gallery7 from '../../assets/hero-1.webp';
import gallery8 from '../../assets/hero-1.webp';
import gallery9 from '../../assets/hero-1.webp';
import gallery10 from '../../assets/hero-1.webp';
import gallery11 from '../../assets/hero-1.webp';
import gallery12 from '../../assets/hero-1.webp';

// Methodology icons
import dgpsIcon from '../../assets/hero-1.webp';
import totalStationIcon from '../../assets/hero-1.webp';
import droneIcon from '../../assets/hero-1.webp';
import gisIcon from '../../assets/hero-1.webp';

function OurWork() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
  };

  const imageReveal = {
    hidden: { opacity: 0, scale: 1.1 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.7 } }
  };

  // Featured projects data
  const featuredProjects = [
    {
      name: 'MPIDC',
      fullName: 'MP Industrial Development Corporation',
      image: mpidcImage,
      description: 'Comprehensive surveying and cadastral mapping services for industrial development projects across Madhya Pradesh.'
    },
    {
      name: 'DGM',
      fullName: 'District Geology & Mining',
      image: dgmImage,
      description: 'Precision boundary demarcation and cadastral mapping for mining operations with DGPS technology.'
    },
    {
      name: 'ULTRATECH',
      fullName: 'UltraTech Cement Limited',
      image: ultratechImage,
      description: 'DGPS survey and geo-referenced cadastral mapping for limestone mining operations.'
    },
    {
      name: 'SARNI',
      fullName: 'MPPGCL Sarni Power Plant',
      image: sarniImage,
      description: 'Advanced drone survey for thermal power plant facility with high-resolution aerial mapping.'
    },
    {
      name: 'Rewa Ultra Mega Solar Limited',
      fullName: 'Asia\'s Largest Solar Park',
      image: rewaImage,
      description: 'Large-scale boundary demarcation covering 5000+ hectares across five districts.'
    },
    {
      name: 'Omkareshwar Tourism Development',
      fullName: 'MP State Tourism Development Corporation',
      image: omkareshwarImage,
      description: 'DGPS, drone survey, and GIS base map preparation for sacred pilgrimage destination.'
    }
  ];

  return (
    <div className="wrk-page">
      
      {/* HERO SECTION */}
      <section className="wrk-hero-section">
        <div className="wrk-hero-background">
          <img src={heroImage} alt="Geolink Survey Projects" className="wrk-hero-bg-image" />
          <div className="wrk-hero-overlay"></div>
        </div>
        <motion.div 
          className="wrk-hero-content"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <motion.h1 
            className="wrk-hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Our Work
          </motion.h1>
          <motion.p 
            className="wrk-hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Delivering Excellence Across India Since 1998
          </motion.p>
          <motion.p 
            className="wrk-hero-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            From large-scale government infrastructure to precision mining surveys, explore our portfolio of successfully executed projects demonstrating technical expertise, accuracy, and unwavering commitment to quality.
          </motion.p>
        </motion.div>
      </section>

      {/* WORK OVERVIEW SECTION */}
      <section className="wrk-overview-section">
        <div className="wrk-container">
          <motion.div 
            className="wrk-overview-content"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <h2 className="wrk-section-title">Proven Track Record of Excellence</h2>
            <div className="wrk-overview-text">
              <p>
                With over two decades of specialized experience, Geolink Survey has established itself as a trusted partner for government departments, public sector undertakings, defence establishments, infrastructure developers, and industrial giants across India. Our comprehensive portfolio spans <strong>cadastral mapping, topographical surveys, drone-based aerial surveys, DGPS positioning, GIS solutions, and boundary demarcation</strong> for diverse sectors.
              </p>
              <p>
                We have successfully executed <strong>100+ mining surveys, 5000+ KM of road surveys, large-scale solar farm demarcations exceeding 5000 hectares, 50+ airport NOC clearances</strong>, and mission-critical defence projects. Our ISO-certified processes, advanced instrumentation fleet, and experienced technical team ensure precision, compliance, and timely delivery on every engagement.
              </p>
              <p>
                Each project showcased below represents our commitment to accuracy, professionalism, and client satisfaction—whether it's a 2000+ hectare solar boundary demarcation or a complex urban development survey requiring centimeter-level precision.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SCALE & EXPERIENCE HIGHLIGHTS */}
      <section className="wrk-highlights-section">
        <div className="wrk-container">
          <motion.div 
            className="wrk-highlights-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div className="wrk-highlight-card" variants={scaleIn}>
              <div className="wrk-highlight-number">20+</div>
              <div className="wrk-highlight-label">Years of Experience</div>
              <div className="wrk-highlight-description">Established excellence since 1998</div>
            </motion.div>

            <motion.div className="wrk-highlight-card" variants={scaleIn}>
              <div className="wrk-highlight-number">100+</div>
              <div className="wrk-highlight-label">Mining Surveys</div>
              <div className="wrk-highlight-description">Boundary demarcation & cadastral mapping</div>
            </motion.div>

            <motion.div className="wrk-highlight-card" variants={scaleIn}>
              <div className="wrk-highlight-number">5000+</div>
              <div className="wrk-highlight-label">KM Road Surveys</div>
              <div className="wrk-highlight-description">Infrastructure & transportation projects</div>
            </motion.div>

            <motion.div className="wrk-highlight-card" variants={scaleIn}>
              <div className="wrk-highlight-number">5000+</div>
              <div className="wrk-highlight-label">Hectares Solar Projects</div>
              <div className="wrk-highlight-description">Large-scale renewable energy mapping</div>
            </motion.div>

            <motion.div className="wrk-highlight-card" variants={scaleIn}>
              <div className="wrk-highlight-number">50+</div>
              <div className="wrk-highlight-label">Airport NOC Clearances</div>
              <div className="wrk-highlight-description">Aviation compliance surveys</div>
            </motion.div>

            <motion.div className="wrk-highlight-card" variants={scaleIn}>
              <div className="wrk-highlight-number">ISO</div>
              <div className="wrk-highlight-label">Triple Certified</div>
              <div className="wrk-highlight-description">Quality, Security & Safety Standards</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FEATURED PROJECTS SECTION */}
      <section className="wrk-featured-projects-section">
        <div className="wrk-container">
          <motion.h2 
            className="wrk-section-title"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
          >
            Featured Projects
          </motion.h2>

          <motion.div 
            className="wrk-featured-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {featuredProjects.map((project, index) => (
              <motion.div 
                key={index}
                className="wrk-featured-card"
                variants={scaleIn}
              >
                <div className="wrk-featured-image-container">
                  <img 
                    src={project.image} 
                    alt={project.name} 
                    className="wrk-featured-image" 
                  />
                  <div className="wrk-featured-overlay"></div>
                  <div className="wrk-featured-badge">{project.name}</div>
                </div>
                <div className="wrk-featured-content">
                  <h3 className="wrk-featured-title">{project.fullName}</h3>
                  <p className="wrk-featured-description">{project.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* PROJECT GALLERY - OTHER PROJECTS */}
      <section className="wrk-gallery-section">
        <div className="wrk-container">
          <motion.h2 
            className="wrk-section-title"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
          >
            More Projects
          </motion.h2>

          <motion.p 
            className="wrk-gallery-intro"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            A glimpse into our diverse portfolio across government, infrastructure, mining, and industrial sectors.
          </motion.p>

          <motion.div 
            className="wrk-gallery-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div className="wrk-gallery-item" variants={imageReveal}>
              <img src={gallery1} alt="Project" className="wrk-gallery-image" />
            </motion.div>

            <motion.div className="wrk-gallery-item" variants={imageReveal}>
              <img src={gallery2} alt="Project" className="wrk-gallery-image" />
            </motion.div>

            <motion.div className="wrk-gallery-item wrk-gallery-large" variants={imageReveal}>
              <img src={gallery3} alt="Project" className="wrk-gallery-image" />
            </motion.div>

            <motion.div className="wrk-gallery-item" variants={imageReveal}>
              <img src={gallery4} alt="Project" className="wrk-gallery-image" />
            </motion.div>

            <motion.div className="wrk-gallery-item" variants={imageReveal}>
              <img src={gallery5} alt="Project" className="wrk-gallery-image" />
            </motion.div>

            <motion.div className="wrk-gallery-item" variants={imageReveal}>
              <img src={gallery6} alt="Project" className="wrk-gallery-image" />
            </motion.div>

            <motion.div className="wrk-gallery-item wrk-gallery-large" variants={imageReveal}>
              <img src={gallery7} alt="Project" className="wrk-gallery-image" />
            </motion.div>

            <motion.div className="wrk-gallery-item" variants={imageReveal}>
              <img src={gallery8} alt="Project" className="wrk-gallery-image" />
            </motion.div>

            <motion.div className="wrk-gallery-item" variants={imageReveal}>
              <img src={gallery9} alt="Project" className="wrk-gallery-image" />
            </motion.div>

            <motion.div className="wrk-gallery-item" variants={imageReveal}>
              <img src={gallery10} alt="Project" className="wrk-gallery-image" />
            </motion.div>

            <motion.div className="wrk-gallery-item" variants={imageReveal}>
              <img src={gallery11} alt="Project" className="wrk-gallery-image" />
            </motion.div>

            <motion.div className="wrk-gallery-item" variants={imageReveal}>
              <img src={gallery12} alt="Project" className="wrk-gallery-image" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* METHODOLOGY & PRECISION SECTION */}
      <section className="wrk-methodology-section">
        <div className="wrk-container">
          <motion.h2 
            className="wrk-section-title"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
          >
            Our Methodology & Precision Standards
          </motion.h2>

          <motion.div 
            className="wrk-methodology-intro"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <p>
              Every project is executed using state-of-the-art surveying technology and rigorous quality control protocols. Our ISO 9001-2015, ISO/IEC 27001-2022, and ISO 45001-2018 certified processes ensure maximum accuracy, data security, and occupational safety across all operations.
            </p>
          </motion.div>

          <motion.div 
            className="wrk-methodology-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div className="wrk-methodology-card" variants={scaleIn}>
              <div className="wrk-methodology-icon-wrapper">
                <img src={dgpsIcon} alt="DGPS Technology" className="wrk-methodology-icon-img" />
              </div>
              <h4>DGPS Survey</h4>
              <p>
                <strong>12 DGPS units</strong> enable centimeter-level accuracy for boundary demarcation, cadastral mapping, and geo-referencing. Differential correction ensures precision positioning for all survey control networks.
              </p>
              <div className="wrk-methodology-specs">
                <span>Accuracy: ±2-5 cm</span>
                <span>Real-time correction</span>
              </div>
            </motion.div>

            <motion.div className="wrk-methodology-card" variants={scaleIn}>
              <div className="wrk-methodology-icon-wrapper">
                <img src={totalStationIcon} alt="Total Station" className="wrk-methodology-icon-img" />
              </div>
              <h4>Total Station</h4>
              <p>
                <strong>5 Total Stations with 1-second accuracy</strong> provide precise angular and distance measurements for topographical surveys, alignment work, and construction layout with exceptional reliability.
              </p>
              <div className="wrk-methodology-specs">
                <span>Accuracy: 1 second</span>
                <span>Reflectorless mode</span>
              </div>
            </motion.div>

            <motion.div className="wrk-methodology-card" variants={scaleIn}>
              <div className="wrk-methodology-icon-wrapper">
                <img src={droneIcon} alt="Drone Survey" className="wrk-methodology-icon-img" />
              </div>
              <h4>Drone Survey</h4>
              <p>
                <strong>2 professional drones</strong> capture high-resolution aerial imagery, generate 3D models, DTM/DSM, contour maps, and orthophotos for large-scale project areas with rapid data acquisition capabilities.
              </p>
              <div className="wrk-methodology-specs">
                <span>4K imagery</span>
                <span>Cloud point data</span>
              </div>
            </motion.div>

            <motion.div className="wrk-methodology-card" variants={scaleIn}>
              <div className="wrk-methodology-icon-wrapper">
                <img src={gisIcon} alt="GIS & Mapping" className="wrk-methodology-icon-img" />
              </div>
              <h4>GIS & Mapping</h4>
              <p>
                Advanced GIS workflows enable spatial data analysis, cadastral mapping, geo-referencing, and comprehensive geospatial database management with seamless integration of field and office operations.
              </p>
              <div className="wrk-methodology-specs">
                <span>Multi-format output</span>
                <span>Database management</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            className="wrk-compliance-info"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <h4>Compliance & Documentation</h4>
            <p>
              All survey deliverables are prepared in compliance with government standards, ministry guidelines, and client specifications. Our documentation includes geo-referenced maps, survey reports, boundary descriptions, coordinate listings, and digital data in client-specified formats (AutoCAD DWG, GIS shapefiles, KML, PDF).
            </p>
          </motion.div>
        </div>
      </section>

      {/* CALL TO ACTION SECTION */}
      <section className="wrk-cta-section">
        <div className="wrk-cta-background">
          <div className="wrk-cta-pattern"></div>
        </div>
        <motion.div 
          className="wrk-cta-content"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="wrk-cta-icon">🎯</div>
          <h2 className="wrk-cta-title">Looking for a Trusted Partner for Complex Surveying Projects?</h2>
          <p className="wrk-cta-text">
            With over 20 years of proven expertise across government, infrastructure, defence, mining, and industrial sectors, Geolink Survey delivers precision, professionalism, and on-time project completion for mission-critical geospatial requirements.
          </p>
          <div className="wrk-cta-features">
            <div className="wrk-cta-feature">
              <span className="wrk-cta-feature-icon">✓</span>
              <span>ISO Triple Certified</span>
            </div>
            <div className="wrk-cta-feature">
              <span className="wrk-cta-feature-icon">✓</span>
              <span>Advanced Technology</span>
            </div>
            <div className="wrk-cta-feature">
              <span className="wrk-cta-feature-icon">✓</span>
              <span>Government Empaneled</span>
            </div>
            <div className="wrk-cta-feature">
              <span className="wrk-cta-feature-icon">✓</span>
              <span>Experienced Professionals</span>
            </div>
          </div>
          <Link to="/contact" className="wrk-btn wrk-btn-large wrk-btn-cta-main">
            Discuss Your Project
            <span className="wrk-btn-arrow">→</span>
          </Link>
          <p className="wrk-cta-subtext">Schedule a consultation to explore how our expertise can support your surveying requirements</p>
        </motion.div>
      </section>

    </div>
  );
}

export default OurWork;