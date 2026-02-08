import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../styles/OurWork.css';

// Import images - REPLACE THESE PATHS WITH YOUR ACTUAL IMAGE PATHS
import heroImage from '../../assets/hero-1.webp';
import mpidc1 from '../../assets/hero-1.webp';
import mpidc2 from '../../assets/hero-1.webp';
import mpidc3 from '../../assets/hero-1.webp';
import tourism1 from '../../assets/hero-1.webp';
import tourism2 from '../../assets/hero-1.webp';
import tourism3 from '../../assets/hero-1.webp';
import tourism4 from '../../assets/hero-1.webp';
import water1 from '../../assets/hero-1.webp';
import water2 from '../../assets/hero-1.webp';
import water3 from '../../assets/hero-1.webp';
import bda1 from '../../assets/hero-1.webp';
import bda2 from '../../assets/hero-1.webp';
import hpcl1 from '../../assets/hero-1.webp';
import storm1 from '../../assets/hero-1.webp';
import mining1 from '../../assets/hero-1.webp';
import mining2 from '../../assets/hero-1.webp';
import mining3 from '../../assets/hero-1.webp';
import defence1 from '../../assets/hero-1.webp';
import defence2 from '../../assets/hero-1.webp';
import defence3 from '../../assets/hero-1.webp';
import municipal1 from '../../assets/hero-1.webp';
import road1 from '../../assets/hero-1.webp';
import road2 from '../../assets/hero-1.webp';
import gcp1 from '../../assets/hero-1.webp';
import gcp2 from '../../assets/hero-1.webp';
import cantonment1 from '../../assets/hero-1.webp';
import solar1 from '../../assets/hero-1.webp';
import solar2 from '../../assets/hero-1.webp';
import solar3 from '../../assets/hero-1.webp';
import airport1 from '../../assets/hero-1.webp';
import reliance1 from '../../assets/hero-1.webp';
import reliance2 from '../../assets/hero-1.webp';
import jubilee1 from '../../assets/hero-1.webp';
import forest1 from '../../assets/hero-1.webp';
import iitm1 from '../../assets/hero-1.webp';
import dewas1 from '../../assets/hero-1.webp';
import ultratech1 from '../../assets/hero-1.webp';
import ultratech2 from '../../assets/hero-1.webp';
import auro1 from '../../assets/hero-1.webp';
import auro2 from '../../assets/hero-1.webp';
import mppgcl1 from '../../assets/hero-1.webp';
import dgpsIcon from '../../assets/hero-1.webp';
import totalStationIcon from '../../assets/hero-1.webp';
import droneIcon from '../../assets/hero-1.webp';
import gisIcon from '../../assets/hero-1.webp';

function OurWork() {
  const [activeFilter, setActiveFilter] = useState('all');

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

      {/* PROJECT SHOWCASE - GOVERNMENT & PSU SECTOR */}
      <section className="wrk-projects-section wrk-section-government">
        <div className="wrk-container">
          <motion.h2 
            className="wrk-section-title"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
          >
            Government & Public Sector Projects
          </motion.h2>

          {/* MP Industrial Development Corporation */}
          <motion.div 
            className="wrk-project-block"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <div className="wrk-project-header">
              <div className="wrk-project-badge">Government</div>
              <h3 className="wrk-project-title">MP Industrial Development Corporation (MPIDC), Bhopal</h3>
              <p className="wrk-project-description">
                Comprehensive surveying and cadastral mapping services for multiple industrial development projects across Madhya Pradesh, supporting infrastructure planning and land acquisition processes.
              </p>
            </div>
            <motion.div 
              className="wrk-project-grid wrk-grid-3col"
              variants={staggerContainer}
            >
              <motion.div className="wrk-project-item" variants={scaleIn}>
                <div className="wrk-project-image-wrapper">
                  <img src={mpidc1} alt="Mohasa Project" className="wrk-project-image" />
                  <div className="wrk-project-image-overlay"></div>
                </div>
                <div className="wrk-project-info">
                  <h4>Mohasa Project</h4>
                  <p>Industrial zone survey & mapping</p>
                </div>
              </motion.div>

              <motion.div className="wrk-project-item" variants={scaleIn}>
                <div className="wrk-project-image-wrapper">
                  <img src={mpidc2} alt="Bagroda Project" className="wrk-project-image" />
                  <div className="wrk-project-image-overlay"></div>
                </div>
                <div className="wrk-project-info">
                  <h4>Bagroda Project</h4>
                  <p>Topographical survey & boundary demarcation</p>
                </div>
              </motion.div>

              <motion.div className="wrk-project-item" variants={scaleIn}>
                <div className="wrk-project-image-wrapper">
                  <img src={mpidc3} alt="Mandideep Project" className="wrk-project-image" />
                  <div className="wrk-project-image-overlay"></div>
                </div>
                <div className="wrk-project-info">
                  <h4>Mandideep Project</h4>
                  <p>DGPS survey & GIS mapping</p>
                </div>
              </motion.div>
            </motion.div>
            <div className="wrk-project-tags">
              <span className="wrk-tag">Achharpura Project</span>
              <span className="wrk-tag">Kiratpur Project</span>
              <span className="wrk-tag">Binapur Project</span>
            </div>
          </motion.div>

          {/* MP Tourism Development Corporation */}
          <motion.div 
            className="wrk-project-block"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <div className="wrk-project-header">
              <div className="wrk-project-badge">Tourism</div>
              <h3 className="wrk-project-title">MP State Tourism Development Corporation Ltd, Bhopal</h3>
              <p className="wrk-project-description">
                Advanced DGPS, drone survey, and GIS base map preparation for the sacred Omkareshwar pilgrimage destination, enabling comprehensive infrastructure planning and heritage conservation.
              </p>
            </div>
            <motion.div 
              className="wrk-project-grid wrk-grid-4col"
              variants={staggerContainer}
            >
              <motion.div className="wrk-project-item" variants={scaleIn}>
                <div className="wrk-project-image-wrapper">
                  <img src={tourism1} alt="Omkareshwar Mandhata" className="wrk-project-image" />
                  <div className="wrk-project-image-overlay"></div>
                </div>
                <div className="wrk-project-info">
                  <h4>Mandhata Village Side</h4>
                  <p>Drone survey & GIS mapping</p>
                </div>
              </motion.div>

              <motion.div className="wrk-project-item" variants={scaleIn}>
                <div className="wrk-project-image-wrapper">
                  <img src={tourism2} alt="Omkareshwar Dam" className="wrk-project-image" />
                  <div className="wrk-project-image-overlay"></div>
                </div>
                <div className="wrk-project-info">
                  <h4>Dam Side</h4>
                  <p>DGPS & cadastral mapping</p>
                </div>
              </motion.div>

              <motion.div className="wrk-project-item" variants={scaleIn}>
                <div className="wrk-project-image-wrapper">
                  <img src={tourism3} alt="Omkareshwar Sangam" className="wrk-project-image" />
                  <div className="wrk-project-image-overlay"></div>
                </div>
                <div className="wrk-project-info">
                  <h4>Sangam Side</h4>
                  <p>Topographical survey</p>
                </div>
              </motion.div>

              <motion.div className="wrk-project-item" variants={scaleIn}>
                <div className="wrk-project-image-wrapper">
                  <img src={tourism4} alt="Omkareshwar Forest" className="wrk-project-image" />
                  <div className="wrk-project-image-overlay"></div>
                </div>
                <div className="wrk-project-info">
                  <h4>Forest Side</h4>
                  <p>GIS base map preparation</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* MP Water Resource Department */}
          <motion.div 
            className="wrk-project-block"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <div className="wrk-project-header">
              <div className="wrk-project-badge">Water Resources</div>
              <h3 className="wrk-project-title">MP Water Resource Department (MPWRD), Sagar</h3>
              <p className="wrk-project-description">
                Precision contour and topographical surveys for major irrigation infrastructure, supporting dam safety assessments and water management planning.
              </p>
            </div>
            <motion.div 
              className="wrk-project-grid wrk-grid-3col"
              variants={staggerContainer}
            >
              <motion.div className="wrk-project-item" variants={scaleIn}>
                <div className="wrk-project-image-wrapper">
                  <img src={water1} alt="Sindhoor Dam" className="wrk-project-image" />
                  <div className="wrk-project-image-overlay"></div>
                </div>
                <div className="wrk-project-info">
                  <h4>Sindhoor Dam</h4>
                  <p>Contour & topographical survey</p>
                </div>
              </motion.div>

              <motion.div className="wrk-project-item" variants={scaleIn}>
                <div className="wrk-project-image-wrapper">
                  <img src={water2} alt="Tulsipar Dam" className="wrk-project-image" />
                  <div className="wrk-project-image-overlay"></div>
                </div>
                <div className="wrk-project-info">
                  <h4>Tulsipar Dam</h4>
                  <p>Contour & topographical survey</p>
                </div>
              </motion.div>

              <motion.div className="wrk-project-item" variants={scaleIn}>
                <div className="wrk-project-image-wrapper">
                  <img src={water3} alt="Khatola Dam" className="wrk-project-image" />
                  <div className="wrk-project-image-overlay"></div>
                </div>
                <div className="wrk-project-info">
                  <h4>Khatola Dam</h4>
                  <p>Contour & topographical survey</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Bhopal Development Authority */}
          <motion.div 
            className="wrk-project-block"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <div className="wrk-project-header">
              <div className="wrk-project-badge">Urban Development</div>
              <h3 className="wrk-project-title">Bhopal Development Authority (BDA), Bhopal</h3>
              <p className="wrk-project-description">
                Comprehensive surveying services for strategic urban expansion zones including the flagship Aerocity project and multiple integrated township developments.
              </p>
            </div>
            <motion.div 
              className="wrk-project-grid wrk-grid-2col"
              variants={staggerContainer}
            >
              <motion.div className="wrk-project-item" variants={scaleIn}>
                <div className="wrk-project-image-wrapper">
                  <img src={bda1} alt="Aerocity Misrod" className="wrk-project-image" />
                  <div className="wrk-project-image-overlay"></div>
                </div>
                <div className="wrk-project-info">
                  <h4>Aerocity Misrod Development</h4>
                  <p>Large-scale urban planning survey</p>
                </div>
              </motion.div>

              <motion.div className="wrk-project-item" variants={scaleIn}>
                <div className="wrk-project-image-wrapper">
                  <img src={bda2} alt="Badwai Godarmau" className="wrk-project-image" />
                  <div className="wrk-project-image-overlay"></div>
                </div>
                <div className="wrk-project-info">
                  <h4>Badwai & Godarmau</h4>
                  <p>Township development surveys</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Municipal Corporation Bhopal */}
          <motion.div 
            className="wrk-project-block"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <div className="wrk-project-header">
              <div className="wrk-project-badge">Municipal</div>
              <h3 className="wrk-project-title">Municipal Corporation, Bhopal</h3>
              <p className="wrk-project-description">
                Large-scale urban survey project covering 198 illegal colonies, providing critical data for urban planning, regularization, and municipal infrastructure development.
              </p>
            </div>
            <motion.div 
              className="wrk-project-featured"
              variants={scaleIn}
            >
              <div className="wrk-featured-image-wrapper">
                <img src={municipal1} alt="198 Illegal Colonies Survey" className="wrk-featured-image" />
                <div className="wrk-featured-overlay"></div>
                <div className="wrk-featured-badge">
                  <span className="wrk-badge-number">198</span>
                  <span className="wrk-badge-text">Colonies Surveyed</span>
                </div>
              </div>
              <div className="wrk-featured-info">
                <h4>198 Illegal Colonies Survey</h4>
                <p>Comprehensive cadastral mapping, boundary identification, and GIS database creation for urban regularization initiative</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Cantonment Boards */}
          <motion.div 
            className="wrk-project-block"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <div className="wrk-project-header">
              <div className="wrk-project-badge">Cantonment</div>
              <h3 className="wrk-project-title">Cantonment Board Survey Projects</h3>
              <p className="wrk-project-description">
                Precision surveying services for military cantonment areas across multiple states, ensuring compliance with defence land management requirements.
              </p>
            </div>
            <div className="wrk-project-tags">
              <span className="wrk-tag">Cantonment Board Sagar (MP)</span>
              <span className="wrk-tag">Cantonment Board Nainital (Uttarakhand)</span>
              <span className="wrk-tag">Cantonment Board Agra (UP)</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PROJECT SHOWCASE - INFRASTRUCTURE SECTOR */}
      <section className="wrk-projects-section wrk-section-infrastructure">
        <div className="wrk-container">
          <motion.h2 
            className="wrk-section-title"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
          >
            Infrastructure & Development Projects
          </motion.h2>

          {/* Road Surveys */}
          <motion.div 
            className="wrk-project-block"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <div className="wrk-project-header">
              <div className="wrk-project-badge">Transportation</div>
              <h3 className="wrk-project-title">Road Survey Projects</h3>
              <p className="wrk-project-description">
                Extensive topographical and alignment surveys spanning approximately 5000 KM across multiple agencies, supporting highway development, rural connectivity, and transportation infrastructure planning.
              </p>
            </div>
            <motion.div 
              className="wrk-project-grid wrk-grid-2col"
              variants={staggerContainer}
            >
              <motion.div className="wrk-project-item wrk-item-large" variants={scaleIn}>
                <div className="wrk-project-image-wrapper">
                  <img src={road1} alt="Highway Survey" className="wrk-project-image" />
                  <div className="wrk-project-image-overlay"></div>
                  <div className="wrk-featured-badge wrk-badge-inline">
                    <span className="wrk-badge-number">5000+</span>
                    <span className="wrk-badge-text">KM Surveyed</span>
                  </div>
                </div>
                <div className="wrk-project-info">
                  <h4>Highway & Road Development</h4>
                  <p>Alignment surveys, contour mapping, cross-section analysis</p>
                </div>
              </motion.div>

              <motion.div className="wrk-project-item wrk-item-large" variants={scaleIn}>
                <div className="wrk-project-image-wrapper">
                  <img src={road2} alt="Rural Connectivity" className="wrk-project-image" />
                  <div className="wrk-project-image-overlay"></div>
                </div>
                <div className="wrk-project-info">
                  <h4>Rural Connectivity Projects</h4>
                  <p>PMGSY & state highway surveys across multiple districts</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* HPCL Gas Pipeline */}
          <motion.div 
            className="wrk-project-block"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <div className="wrk-project-header">
              <div className="wrk-project-badge">Energy Infrastructure</div>
              <h3 className="wrk-project-title">HPCL Gas Pipeline (MDPL) under Punj Lloyd</h3>
              <p className="wrk-project-description">
                Pipeline route survey and cadastral mapping for major gas transmission infrastructure project, ensuring accurate alignment and land acquisition support.
              </p>
            </div>
            <motion.div 
              className="wrk-project-featured"
              variants={scaleIn}
            >
              <div className="wrk-featured-image-wrapper">
                <img src={hpcl1} alt="HPCL Gas Pipeline" className="wrk-featured-image" />
                <div className="wrk-featured-overlay"></div>
              </div>
              <div className="wrk-featured-info">
                <h4>Pipeline Route Survey & Mapping</h4>
                <p>DGPS-based alignment survey, topographical mapping, and land documentation</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Storm Water Management */}
          <motion.div 
            className="wrk-project-block"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <div className="wrk-project-header">
              <div className="wrk-project-badge">Urban Infrastructure</div>
              <h3 className="wrk-project-title">Storm Water Management for Bhopal – Meinhardt</h3>
              <p className="wrk-project-description">
                Comprehensive topographical survey and drainage network mapping for Bhopal's storm water management system, supporting flood mitigation infrastructure design.
              </p>
            </div>
            <motion.div 
              className="wrk-project-featured"
              variants={scaleIn}
            >
              <div className="wrk-featured-image-wrapper">
                <img src={storm1} alt="Storm Water Management" className="wrk-featured-image" />
                <div className="wrk-featured-overlay"></div>
              </div>
              <div className="wrk-featured-info">
                <h4>Drainage System Survey & Mapping</h4>
                <p>Contour mapping, catchment analysis, and drainage network documentation</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Ground Control Points - Chandarpur */}
          <motion.div 
            className="wrk-project-block"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <div className="wrk-project-header">
              <div className="wrk-project-badge">PWD Maharashtra</div>
              <h3 className="wrk-project-title">Ground Control Points – PWD Chandarpur (MH)</h3>
              <p className="wrk-project-description">
                Establishment of 450 KM ground control network for Magnasoft Consulting India Pvt. Ltd., providing precision reference points for large-scale highway mapping projects.
              </p>
            </div>
            <motion.div 
              className="wrk-project-featured"
              variants={scaleIn}
            >
              <div className="wrk-featured-image-wrapper">
                <img src={gcp1} alt="GCP Chandarpur" className="wrk-featured-image" />
                <div className="wrk-featured-overlay"></div>
                <div className="wrk-featured-badge">
                  <span className="wrk-badge-number">450</span>
                  <span className="wrk-badge-text">KM Network</span>
                </div>
              </div>
              <div className="wrk-featured-info">
                <h4>Magnasoft Consulting India Pvt. Ltd.</h4>
                <p>DGPS-based ground control point establishment for highway corridor mapping</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Ground Control Points - Gondia */}
          <motion.div 
            className="wrk-project-block"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <div className="wrk-project-header">
              <div className="wrk-project-badge">PWD Maharashtra</div>
              <h3 className="wrk-project-title">Ground Control Points – PWD Gondia (MH)</h3>
              <p className="wrk-project-description">
                Precision ground control network establishment for Magnasoft Consulting India Pvt. Ltd., supporting highway development projects in Gondia district.
              </p>
            </div>
            <motion.div 
              className="wrk-project-featured"
              variants={scaleIn}
            >
              <div className="wrk-featured-image-wrapper">
                <img src={gcp2} alt="GCP Gondia" className="wrk-featured-image" />
                <div className="wrk-featured-overlay"></div>
              </div>
              <div className="wrk-featured-info">
                <h4>Magnasoft Consulting India Pvt. Ltd.</h4>
                <p>High-precision GCP network for transportation infrastructure mapping</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Dewas Super Corridor */}
          <motion.div 
            className="wrk-project-block"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <div className="wrk-project-header">
              <div className="wrk-project-badge">Urban Corridor</div>
              <h3 className="wrk-project-title">Dewas Super Corridor Survey</h3>
              <p className="wrk-project-description">
                Comprehensive topographical and alignment survey for Dewas Development Authority covering 480 hectares, supporting major urban corridor development planning.
              </p>
            </div>
            <motion.div 
              className="wrk-project-featured"
              variants={scaleIn}
            >
              <div className="wrk-featured-image-wrapper">
                <img src={dewas1} alt="Dewas Super Corridor" className="wrk-featured-image" />
                <div className="wrk-featured-overlay"></div>
                <div className="wrk-featured-badge">
                  <span className="wrk-badge-number">480</span>
                  <span className="wrk-badge-text">Hectares</span>
                </div>
              </div>
              <div className="wrk-featured-info">
                <h4>Dewas Development Authority</h4>
                <p>Large-scale survey for integrated urban corridor infrastructure</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* PROJECT SHOWCASE - DEFENCE SECTOR */}
      <section className="wrk-projects-section wrk-section-defence">
        <div className="wrk-container">
          <motion.h2 
            className="wrk-section-title"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
          >
            Defence & Security Projects
          </motion.h2>

          <motion.div 
            className="wrk-project-block"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <div className="wrk-project-header">
              <div className="wrk-project-badge">Ministry of Defence</div>
              <h3 className="wrk-project-title">Defence Establishment Survey Projects</h3>
              <p className="wrk-project-description">
                Precision surveying and mapping services for critical defence installations including firing ranges and airforce facilities across multiple states, adhering to stringent security and accuracy protocols.
              </p>
            </div>
            <motion.div 
              className="wrk-project-grid wrk-grid-3col"
              variants={staggerContainer}
            >
              <motion.div className="wrk-project-item" variants={scaleIn}>
                <div className="wrk-project-image-wrapper">
                  <img src={defence1} alt="Babina Firing Range" className="wrk-project-image" />
                  <div className="wrk-project-image-overlay"></div>
                </div>
                <div className="wrk-project-info">
                  <h4>BFR Babina</h4>
                  <p>DEO Bhopal - Firing range survey & mapping</p>
                </div>
              </motion.div>

              <motion.div className="wrk-project-item" variants={scaleIn}>
                <div className="wrk-project-image-wrapper">
                  <img src={defence2} alt="Jamnagar Airforce Range" className="wrk-project-image" />
                  <div className="wrk-project-image-overlay"></div>
                </div>
                <div className="wrk-project-info">
                  <h4>Jamnagar Airforce Range</h4>
                  <p>Gujarat - Airforce facility boundary survey</p>
                </div>
              </motion.div>

              <motion.div className="wrk-project-item" variants={scaleIn}>
                <div className="wrk-project-image-wrapper">
                  <img src={defence3} alt="Okha Range" className="wrk-project-image" />
                  <div className="wrk-project-image-overlay"></div>
                </div>
                <div className="wrk-project-info">
                  <h4>Okha Range</h4>
                  <p>Gujarat - Defence installation mapping</p>
                </div>
              </motion.div>
            </motion.div>
            <div className="wrk-project-additional-info">
              <p><strong>Additional Defence Projects:</strong> Surveying services for defence establishments across Bhopal, Sagar, Agra, Gwalior, Ahmedabad, and Nainital with strict compliance to security protocols.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PROJECT SHOWCASE - ENERGY SECTOR */}
      <section className="wrk-projects-section wrk-section-energy">
        <div className="wrk-container">
          <motion.h2 
            className="wrk-section-title"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
          >
            Energy & Renewable Projects
          </motion.h2>

          {/* Rewa Ultra Mega Solar */}
          <motion.div 
            className="wrk-project-block"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <div className="wrk-project-header">
              <div className="wrk-project-badge">Solar Energy</div>
              <h3 className="wrk-project-title">Rewa Ultra Mega Solar Limited (RUMS), Bhopal</h3>
              <p className="wrk-project-description">
                Large-scale outer boundary demarcation for one of Asia's largest solar power projects, covering over 5000 hectares across five districts with DGPS precision and comprehensive cadastral mapping.
              </p>
            </div>
            <motion.div 
              className="wrk-project-grid wrk-grid-3col"
              variants={staggerContainer}
            >
              <motion.div className="wrk-project-item" variants={scaleIn}>
                <div className="wrk-project-image-wrapper">
                  <img src={solar1} alt="Shajapur Solar" className="wrk-project-image" />
                  <div className="wrk-project-image-overlay"></div>
                  <div className="wrk-project-area-badge">258.6 Ha</div>
                </div>
                <div className="wrk-project-info">
                  <h4>Shajapur</h4>
                  <p>Boundary demarcation - 258.595 Hectare</p>
                </div>
              </motion.div>

              <motion.div className="wrk-project-item" variants={scaleIn}>
                <div className="wrk-project-image-wrapper">
                  <img src={solar2} alt="Agar Solar" className="wrk-project-image" />
                  <div className="wrk-project-image-overlay"></div>
                  <div className="wrk-project-area-badge">808 Ha</div>
                </div>
                <div className="wrk-project-info">
                  <h4>Agar</h4>
                  <p>Boundary demarcation - 808.034 Hectare</p>
                </div>
              </motion.div>

              <motion.div className="wrk-project-item" variants={scaleIn}>
                <div className="wrk-project-image-wrapper">
                  <img src={solar3} alt="Chhatarpur Solar" className="wrk-project-image" />
                  <div className="wrk-project-image-overlay"></div>
                  <div className="wrk-project-area-badge">2168 Ha</div>
                </div>
                <div className="wrk-project-info">
                  <h4>Chhatarpur</h4>
                  <p>Boundary demarcation - 2168 Hectare</p>
                </div>
              </motion.div>
            </motion.div>
            <div className="wrk-project-tags">
              <span className="wrk-tag">Keoti - 628.970 Hectare</span>
              <span className="wrk-tag">Morena - 1503.279 Hectare</span>
              <span className="wrk-tag">Total Area: 5367+ Hectares</span>
            </div>
          </motion.div>

          {/* MPPGCL Sarni */}
          <motion.div 
            className="wrk-project-block"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <div className="wrk-project-header">
              <div className="wrk-project-badge">Power Generation</div>
              <h3 className="wrk-project-title">MPPGCL, Sarni</h3>
              <p className="wrk-project-description">
                Advanced drone survey for Madhya Pradesh Power Generating Company Limited's thermal power plant facility, providing high-resolution aerial imagery and 3D modeling for infrastructure planning.
              </p>
            </div>
            <motion.div 
              className="wrk-project-featured"
              variants={scaleIn}
            >
              <div className="wrk-featured-image-wrapper">
                <img src={mppgcl1} alt="MPPGCL Sarni" className="wrk-featured-image" />
                <div className="wrk-featured-overlay"></div>
              </div>
              <div className="wrk-featured-info">
                <h4>Thermal Power Plant Drone Survey</h4>
                <p>UAV-based aerial survey, orthophoto generation, and facility mapping</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* PROJECT SHOWCASE - MINING & INDUSTRIAL SECTOR */}
      <section className="wrk-projects-section wrk-section-mining">
        <div className="wrk-container">
          <motion.h2 
            className="wrk-section-title"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
          >
            Mining & Industrial Projects
          </motion.h2>

          {/* Mining Surveys */}
          <motion.div 
            className="wrk-project-block"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <div className="wrk-project-header">
              <div className="wrk-project-badge">Mining</div>
              <h3 className="wrk-project-title">Mining Survey Portfolio</h3>
              <p className="wrk-project-description">
                Extensive portfolio of over 100 mining surveys across Madhya Pradesh and neighboring states, providing DGPS-based boundary demarcation, cadastral mapping, and geo-referenced mine area documentation for limestone, coal, and mineral extraction operations.
              </p>
            </div>
            <motion.div 
              className="wrk-project-grid wrk-grid-3col"
              variants={staggerContainer}
            >
              <motion.div className="wrk-project-item wrk-item-large" variants={scaleIn}>
                <div className="wrk-project-image-wrapper">
                  <img src={mining1} alt="Mining Survey" className="wrk-project-image" />
                  <div className="wrk-project-image-overlay"></div>
                  <div className="wrk-featured-badge wrk-badge-inline">
                    <span className="wrk-badge-number">100+</span>
                    <span className="wrk-badge-text">Surveys</span>
                  </div>
                </div>
                <div className="wrk-project-info">
                  <h4>Boundary Demarcation</h4>
                  <p>DGPS-based mining lease boundary surveys</p>
                </div>
              </motion.div>

              <motion.div className="wrk-project-item wrk-item-large" variants={scaleIn}>
                <div className="wrk-project-image-wrapper">
                  <img src={mining2} alt="Cadastral Mapping" className="wrk-project-image" />
                  <div className="wrk-project-image-overlay"></div>
                </div>
                <div className="wrk-project-info">
                  <h4>Cadastral Mapping</h4>
                  <p>Geo-referenced mine area documentation</p>
                </div>
              </motion.div>

              <motion.div className="wrk-project-item wrk-item-large" variants={scaleIn}>
                <div className="wrk-project-image-wrapper">
                  <img src={mining3} alt="Boundary Pillars" className="wrk-project-image" />
                  <div className="wrk-project-image-overlay"></div>
                </div>
                <div className="wrk-project-info">
                  <h4>Boundary Pillars</h4>
                  <p>Permanent boundary marker installation</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* UltraTech Cement */}
          <motion.div 
            className="wrk-project-block"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <div className="wrk-project-header">
              <div className="wrk-project-badge">Industrial</div>
              <h3 className="wrk-project-title">UltraTech Cement Limited</h3>
              <p className="wrk-project-description">
                Comprehensive DGPS survey, geo-referenced cadastral mapping, boundary demarcation, and boundary pillar installation for limestone mining operations supporting cement manufacturing.
              </p>
            </div>
            <motion.div 
              className="wrk-project-grid wrk-grid-2col"
              variants={staggerContainer}
            >
              <motion.div className="wrk-project-item" variants={scaleIn}>
                <div className="wrk-project-image-wrapper">
                  <img src={ultratech1} alt="UltraTech Survey" className="wrk-project-image" />
                  <div className="wrk-project-image-overlay"></div>
                </div>
                <div className="wrk-project-info">
                  <h4>Mining Lease Survey</h4>
                  <p>DGPS & cadastral mapping</p>
                </div>
              </motion.div>

              <motion.div className="wrk-project-item" variants={scaleIn}>
                <div className="wrk-project-image-wrapper">
                  <img src={ultratech2} alt="UltraTech Boundary" className="wrk-project-image" />
                  <div className="wrk-project-image-overlay"></div>
                </div>
                <div className="wrk-project-info">
                  <h4>Boundary Demarcation</h4>
                  <p>Pillar installation & documentation</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Auro Natural Resources */}
          <motion.div 
            className="wrk-project-block"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <div className="wrk-project-header">
              <div className="wrk-project-badge">Industrial</div>
              <h3 className="wrk-project-title">Auro Natural Resources Pvt. Ltd.</h3>
              <p className="wrk-project-description">
                Integrated DGPS survey, drone-based aerial mapping, geo-referenced cadastral mapping, boundary demarcation, and boundary pillar establishment for mineral extraction operations.
              </p>
            </div>
            <motion.div 
              className="wrk-project-grid wrk-grid-2col"
              variants={staggerContainer}
            >
              <motion.div className="wrk-project-item" variants={scaleIn}>
                <div className="wrk-project-image-wrapper">
                  <img src={auro1} alt="Auro Drone Survey" className="wrk-project-image" />
                  <div className="wrk-project-image-overlay"></div>
                </div>
                <div className="wrk-project-info">
                  <h4>Drone Survey</h4>
                  <p>UAV-based aerial mapping & 3D modeling</p>
                </div>
              </motion.div>

              <motion.div className="wrk-project-item" variants={scaleIn}>
                <div className="wrk-project-image-wrapper">
                  <img src={auro2} alt="Auro DGPS Survey" className="wrk-project-image" />
                  <div className="wrk-project-image-overlay"></div>
                </div>
                <div className="wrk-project-info">
                  <h4>DGPS & Boundary Survey</h4>
                  <p>Cadastral mapping & pillar installation</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Reliance Industries - Sehore */}
          <motion.div 
            className="wrk-project-block"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <div className="wrk-project-header">
              <div className="wrk-project-badge">Industrial</div>
              <h3 className="wrk-project-title">Reliance Industries – Sehore</h3>
              <p className="wrk-project-description">
                Precision topographical survey and contour plan generation for 100-acre industrial facility, supporting infrastructure planning and site development for major industrial project.
              </p>
            </div>
            <motion.div 
              className="wrk-project-featured"
              variants={scaleIn}
            >
              <div className="wrk-featured-image-wrapper">
                <img src={reliance1} alt="Reliance Sehore" className="wrk-featured-image" />
                <div className="wrk-featured-overlay"></div>
                <div className="wrk-featured-badge">
                  <span className="wrk-badge-number">100</span>
                  <span className="wrk-badge-text">Acres</span>
                </div>
              </div>
              <div className="wrk-featured-info">
                <h4>Topography & Contour Plan</h4>
                <p>Complete site survey for industrial development planning</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Reliance Industries - Bhopal */}
          <motion.div 
            className="wrk-project-block"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <div className="wrk-project-header">
              <div className="wrk-project-badge">Industrial</div>
              <h3 className="wrk-project-title">Reliance Industries – Bhopal</h3>
              <p className="wrk-project-description">
                Comprehensive topographical survey and contour mapping for 50-acre industrial site, providing detailed elevation data and site characteristics for facility design and construction.
              </p>
            </div>
            <motion.div 
              className="wrk-project-featured"
              variants={scaleIn}
            >
              <div className="wrk-featured-image-wrapper">
                <img src={reliance2} alt="Reliance Bhopal" className="wrk-featured-image" />
                <div className="wrk-featured-overlay"></div>
                <div className="wrk-featured-badge">
                  <span className="wrk-badge-number">50</span>
                  <span className="wrk-badge-text">Acres</span>
                </div>
              </div>
              <div className="wrk-featured-info">
                <h4>Topography & Contour Plan</h4>
                <p>Industrial facility site characterization & mapping</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Jubilee Beverages */}
          <motion.div 
            className="wrk-project-block"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <div className="wrk-project-header">
              <div className="wrk-project-badge">Industrial</div>
              <h3 className="wrk-project-title">Jubilee Beverages Limited</h3>
              <p className="wrk-project-description">
                Outer boundary demarcation and contour plan preparation for 72-acre beverage manufacturing facility, ensuring accurate site documentation and infrastructure planning support.
              </p>
            </div>
            <motion.div 
              className="wrk-project-featured"
              variants={scaleIn}
            >
              <div className="wrk-featured-image-wrapper">
                <img src={jubilee1} alt="Jubilee Beverages" className="wrk-featured-image" />
                <div className="wrk-featured-overlay"></div>
                <div className="wrk-featured-badge">
                  <span className="wrk-badge-number">72</span>
                  <span className="wrk-badge-text">Acres</span>
                </div>
              </div>
              <div className="wrk-featured-info">
                <h4>Boundary Demarcation & Contour Plan</h4>
                <p>Manufacturing facility boundary & topographical survey</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* PROJECT SHOWCASE - SPECIALIZED PROJECTS */}
      <section className="wrk-projects-section wrk-section-specialized">
        <div className="wrk-container">
          <motion.h2 
            className="wrk-section-title"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
          >
            Specialized Survey Projects
          </motion.h2>

          {/* Airport NOC */}
          <motion.div 
            className="wrk-project-block"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <div className="wrk-project-header">
              <div className="wrk-project-badge">Aviation</div>
              <h3 className="wrk-project-title">Airport NOC Clearance Work</h3>
              <p className="wrk-project-description">
                Specialized surveying services for Airport Authority of India NOC (No Objection Certificate) clearances, ensuring compliance with aviation safety regulations for structures near airport zones across multiple locations.
              </p>
            </div>
            <motion.div 
              className="wrk-project-featured"
              variants={scaleIn}
            >
              <div className="wrk-featured-image-wrapper">
                <img src={airport1} alt="Airport NOC Work" className="wrk-featured-image" />
                <div className="wrk-featured-overlay"></div>
                <div className="wrk-featured-badge">
                  <span className="wrk-badge-number">50+</span>
                  <span className="wrk-badge-text">NOC Clearances</span>
                </div>
              </div>
              <div className="wrk-featured-info">
                <h4>Aviation Compliance Surveys</h4>
                <p>Height verification, obstacle assessment, and regulatory compliance documentation</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Tree Counting - Forest */}
          <motion.div 
            className="wrk-project-block"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <div className="wrk-project-header">
              <div className="wrk-project-badge">Environmental</div>
              <h3 className="wrk-project-title">Tree Counting – Forest Area Lohapathar, Sehore</h3>
              <p className="wrk-project-description">
                Comprehensive tree census and forest area survey covering 182 acres, utilizing advanced survey techniques for accurate tree enumeration and forest density assessment for environmental compliance.
              </p>
            </div>
            <motion.div 
              className="wrk-project-featured"
              variants={scaleIn}
            >
              <div className="wrk-featured-image-wrapper">
                <img src={forest1} alt="Forest Tree Counting" className="wrk-featured-image" />
                <div className="wrk-featured-overlay"></div>
                <div className="wrk-featured-badge">
                  <span className="wrk-badge-number">182</span>
                  <span className="wrk-badge-text">Acres</span>
                </div>
              </div>
              <div className="wrk-featured-info">
                <h4>Forest Census & Documentation</h4>
                <p>Tree enumeration, species identification, and GIS-based forest mapping</p>
              </div>
            </motion.div>
          </motion.div>

          {/* IITM Pune */}
          <motion.div 
            className="wrk-project-block"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <div className="wrk-project-header">
              <div className="wrk-project-badge">Research Institution</div>
              <h3 className="wrk-project-title">Indian Institute of Tropical Meteorology, Pune</h3>
              <p className="wrk-project-description">
                Precision topographical and contour survey for 100-acre research campus, supporting infrastructure development planning for premier meteorological research institution.
              </p>
            </div>
            <motion.div 
              className="wrk-project-featured"
              variants={scaleIn}
            >
              <div className="wrk-featured-image-wrapper">
                <img src={iitm1} alt="IITM Pune" className="wrk-featured-image" />
                <div className="wrk-featured-overlay"></div>
                <div className="wrk-featured-badge">
                  <span className="wrk-badge-number">100</span>
                  <span className="wrk-badge-text">Acres</span>
                </div>
              </div>
              <div className="wrk-featured-info">
                <h4>Topographical & Contour Survey</h4>
                <p>Research campus site characterization and infrastructure planning support</p>
              </div>
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
              Every project showcased above has been executed using state-of-the-art surveying technology and rigorous quality control protocols. Our ISO 9001-2015, ISO/IEC 27001-2022, and ISO 45001-2018 certified processes ensure maximum accuracy, data security, and occupational safety across all operations.
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

      {/* VISUAL GALLERY SECTION */}
      <section className="wrk-gallery-section">
        <div className="wrk-container">
          <motion.h2 
            className="wrk-section-title"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
          >
            Project Gallery
          </motion.h2>

          <motion.p 
            className="wrk-gallery-intro"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            Visual documentation from our diverse portfolio showcasing drone imagery, survey maps, field operations, and project deliverables across government, infrastructure, mining, and industrial sectors.
          </motion.p>

          <motion.div 
            className="wrk-gallery-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div className="wrk-gallery-item wrk-gallery-large" variants={imageReveal}>
              <img src={solar1} alt="Solar Project Aerial" className="wrk-gallery-image" />
              <div className="wrk-gallery-overlay">
                <span className="wrk-gallery-label">Aerial Survey - Solar Farm</span>
              </div>
            </motion.div>

            <motion.div className="wrk-gallery-item" variants={imageReveal}>
              <img src={mining1} alt="Mining Survey" className="wrk-gallery-image" />
              <div className="wrk-gallery-overlay">
                <span className="wrk-gallery-label">Mining Boundary Survey</span>
              </div>
            </motion.div>

            <motion.div className="wrk-gallery-item" variants={imageReveal}>
              <img src={road1} alt="Highway Survey" className="wrk-gallery-image" />
              <div className="wrk-gallery-overlay">
                <span className="wrk-gallery-label">Highway Alignment</span>
              </div>
            </motion.div>

            <motion.div className="wrk-gallery-item" variants={imageReveal}>
              <img src={water1} alt="Dam Survey" className="wrk-gallery-image" />
              <div className="wrk-gallery-overlay">
                <span className="wrk-gallery-label">Dam Topographical Survey</span>
              </div>
            </motion.div>

            <motion.div className="wrk-gallery-item wrk-gallery-large" variants={imageReveal}>
              <img src={tourism1} alt="GIS Mapping" className="wrk-gallery-image" />
              <div className="wrk-gallery-overlay">
                <span className="wrk-gallery-label">GIS Base Map - Tourism</span>
              </div>
            </motion.div>

            <motion.div className="wrk-gallery-item" variants={imageReveal}>
              <img src={defence1} alt="Defence Survey" className="wrk-gallery-image" />
              <div className="wrk-gallery-overlay">
                <span className="wrk-gallery-label">Defence Installation</span>
              </div>
            </motion.div>

            <motion.div className="wrk-gallery-item" variants={imageReveal}>
              <img src={ultratech1} alt="Industrial Survey" className="wrk-gallery-image" />
              <div className="wrk-gallery-overlay">
                <span className="wrk-gallery-label">Industrial Facility Survey</span>
              </div>
            </motion.div>

            <motion.div className="wrk-gallery-item" variants={imageReveal}>
              <img src={bda1} alt="Urban Development" className="wrk-gallery-image" />
              <div className="wrk-gallery-overlay">
                <span className="wrk-gallery-label">Urban Development Zone</span>
              </div>
            </motion.div>
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