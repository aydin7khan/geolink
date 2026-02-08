import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../styles/Achievements.css';

// Import certificate images - REPLACE with your actual certificate paths
import iso9001Cert from '../../assets/hero-1.webp';
import iso45001Cert from '../../assets/hero-1.webp';
import iso27001Cert from '../../assets/hero-1.webp';
import iso14001Cert from '../../assets/hero-1.webp';
import msmeCert from '../../assets/hero-1.webp';
import startupIndiaCert from '../../assets/hero-1.webp';

function Achievements() {
  // Animation variants matching Home page
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

  // Certifications data - DO NOT INVENT, these are the actual ones
  const certifications = [
    {
      id: 'ach-cert-1',
      title: 'ISO 9001:2015',
      subtitle: 'Quality Management System',
      issuer: 'International Organization for Standardization',
      validity: 'Valid until 2026',
      image: iso9001Cert,
      description: 'Certified quality management standards ensuring consistent service delivery and customer satisfaction.'
    },
    {
      id: 'ach-cert-2',
      title: 'ISO 45001:2018',
      subtitle: 'Occupational Health & Safety',
      issuer: 'International Organization for Standardization',
      validity: 'Valid until 2026',
      image: iso45001Cert,
      description: 'Commitment to workplace safety and health management for our field teams and operations.'
    },
    {
      id: 'ach-cert-3',
      title: 'ISO/IEC 27001:2022',
      subtitle: 'Information Security Management',
      issuer: 'International Organization for Standardization',
      validity: 'Valid until 2026',
      image: iso27001Cert,
      description: 'Advanced data security protocols protecting sensitive geospatial and client information.'
    },
    {
      id: 'ach-cert-4',
      title: 'ISO 14001:2015',
      subtitle: 'Environmental Management System',
      issuer: 'International Organization for Standardization',
      validity: 'Valid until 2026',
      image: iso14001Cert,
      description: 'Environmental responsibility and sustainable practices in all surveying operations.'
    },
    {
      id: 'ach-cert-5',
      title: 'MSME Udyam Registration',
      subtitle: 'Government of India',
      issuer: 'Ministry of Micro, Small & Medium Enterprises',
      validity: 'Active Registration',
      image: msmeCert,
      description: 'Recognized MSME enterprise under Government of India registration scheme.'
    },
    {
      id: 'ach-cert-6',
      title: 'Startup India Recognition',
      subtitle: 'DPIIT Recognized',
      issuer: 'Department for Promotion of Industry and Internal Trade',
      validity: 'Active Recognition',
      image: startupIndiaCert,
      description: 'Recognized by Startup India initiative for innovation in geospatial technology.'
    }
  ];

  // Client organizations - REPLACE with your actual logo paths
  const trustedOrganizations = [
    { id: 'ach-client-1', name: 'Ministry of Defence', logo: '/images/clients/defence-ministry.png' },
    { id: 'ach-client-2', name: 'Reliance Industries Limited', logo: '/images/clients/reliance.png' },
    { id: 'ach-client-3', name: 'UltraTech Cement Limited', logo: '/images/clients/ultratech.png' },
    { id: 'ach-client-4', name: 'Airport Authority of India', logo: '/images/clients/aai.png' },
    { id: 'ach-client-5', name: 'Madhya Pradesh Industrial Development Corporation', logo: '/images/clients/mpidc.png' },
    { id: 'ach-client-6', name: 'MP State Tourism Development Corporation', logo: '/images/clients/mpstdc.png' },
    { id: 'ach-client-7', name: 'Directorate of Geology and Mining', logo: '/images/clients/geology.png' },
    { id: 'ach-client-8', name: 'Cantonment Board Babina', logo: '/images/clients/cantonment-babina.png' },
    { id: 'ach-client-9', name: 'Rewa Ultra Mega Solar Limited', logo: '/images/clients/rewa-solar.png' },
    { id: 'ach-client-10', name: 'Public Works Department', logo: '/images/clients/pwd.png' },
    { id: 'ach-client-11', name: 'National Highways Authority of India', logo: '/images/clients/nhai.png' },
    { id: 'ach-client-12', name: 'Madhya Pradesh Road Development Corporation', logo: '/images/clients/mprdc.png' },
    { id: 'ach-client-13', name: 'Coal India Limited', logo: '/images/clients/coal-india.png' },
    { id: 'ach-client-14', name: 'Hindalco Industries', logo: '/images/clients/hindalco.png' },
    { id: 'ach-client-15', name: 'Adani Group', logo: '/images/clients/adani.png' },
    { id: 'ach-client-16', name: 'Larsen & Toubro', logo: '/images/clients/lt.png' },
    { id: 'ach-client-17', name: 'Tata Projects', logo: '/images/clients/tata-projects.png' },
    { id: 'ach-client-18', name: 'GMR Infrastructure', logo: '/images/clients/gmr.png' },
    { id: 'ach-client-19', name: 'Shapoorji Pallonji', logo: '/images/clients/shapoorji.png' },
    { id: 'ach-client-20', name: 'IRB Infrastructure', logo: '/images/clients/irb.png' },
    { id: 'ach-client-21', name: 'Ahluwalia Contracts', logo: '/images/clients/ahluwalia.png' },
    { id: 'ach-client-22', name: 'NCC Limited', logo: '/images/clients/ncc.png' },
    { id: 'ach-client-23', name: 'Simplex Infrastructures', logo: '/images/clients/simplex.png' }
  ];

  // Experience and scale statistics
  const experienceStats = [
    {
      id: 'ach-stat-1',
      icon: '📅',
      number: '20+',
      label: 'Years of Excellence',
      description: 'Industry experience since 1998'
    },
    {
      id: 'ach-stat-2',
      icon: '⛏️',
      number: '100+',
      label: 'Mining Surveys',
      description: 'Successfully executed projects'
    },
    {
      id: 'ach-stat-3',
      icon: '🛣️',
      number: '5000+',
      label: 'KM Road Survey',
      description: 'Multi-state project execution'
    },
    {
      id: 'ach-stat-4',
      icon: '🏛️',
      number: '50+',
      label: 'Government Clients',
      description: 'PSUs and departments served'
    },
    {
      id: 'ach-stat-5',
      icon: '🎯',
      number: '1 Sec',
      label: 'Precision Accuracy',
      description: 'Total Station equipment'
    },
    {
      id: 'ach-stat-6',
      icon: '📡',
      number: '12',
      label: 'DGPS Units',
      description: 'Advanced surveying fleet'
    }
  ];

  return (
    <div className="ach-page">
      
      {/* HERO SECTION */}
      <section className="ach-hero-section">
        <div className="ach-hero-background">
          <div className="ach-hero-overlay"></div>
        </div>
        <motion.div 
          className="ach-hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="ach-hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Achievements & Certifications
          </motion.h1>
          <motion.p 
            className="ach-hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Committed to Quality, Compliance, and Industry Excellence
          </motion.p>
          <motion.p 
            className="ach-hero-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            ISO-certified operations, government empanelment, and trusted partnerships with India's leading organizations demonstrate our unwavering commitment to precision, safety, and reliability in every surveying project.
          </motion.p>
        </motion.div>
      </section>

      {/* CERTIFICATIONS & COMPLIANCE SECTION */}
      <section className="ach-certifications-section">
        <div className="ach-container">
          <h2 className="ach-section-title">Certifications & Compliance</h2>
          <p className="ach-section-subtitle">
            Our ISO certifications and government registrations ensure the highest standards of quality, safety, and data security
          </p>
          
          <motion.div 
            className="ach-certifications-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {certifications.map((cert) => (
              <motion.div 
                key={cert.id}
                className="ach-certification-card"
                variants={scaleIn}
                whileHover={{ y: -8 }}
              >
                <div className="ach-cert-image-wrapper">
                  <img 
                    src={cert.image} 
                    alt={cert.title} 
                    className="ach-cert-image"
                  />
                  <div className="ach-cert-badge">Certified</div>
                </div>
                <div className="ach-cert-content">
                  <h3 className="ach-cert-title">{cert.title}</h3>
                  <p className="ach-cert-subtitle">{cert.subtitle}</p>
                  <div className="ach-cert-details">
                    <div className="ach-cert-issuer">
                      <span className="ach-cert-icon">🏆</span>
                      {cert.issuer}
                    </div>
                    <div className="ach-cert-validity">
                      <span className="ach-cert-icon">✓</span>
                      {cert.validity}
                    </div>
                  </div>
                  <p className="ach-cert-description">{cert.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* TRUSTED BY LEADING ORGANIZATIONS */}
      <section className="ach-clients-section">
        <div className="ach-container">
          <h2 className="ach-section-title">Trusted by Leading Organizations</h2>
          <p className="ach-section-subtitle">
            Partnering with government departments, PSUs, and India's premier infrastructure companies
          </p>
          
          <motion.div 
            className="ach-clients-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {trustedOrganizations.map((client) => (
              <motion.div 
                key={client.id}
                className="ach-client-card"
                variants={scaleIn}
              >
                <div className="ach-client-logo-wrapper">
                  <img 
                    src={client.logo} 
                    alt={client.name} 
                    className="ach-client-logo"
                  />
                </div>
                <div className="ach-client-name">{client.name}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* EXPERIENCE & SCALE HIGHLIGHTS */}
      <section className="ach-stats-section">
        <div className="ach-container">
          <h2 className="ach-section-title">Experience & Scale</h2>
          <p className="ach-section-subtitle">
            Two decades of excellence delivering precision surveying across government and industrial sectors
          </p>
          
          <motion.div 
            className="ach-stats-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {experienceStats.map((stat) => (
              <motion.div 
                key={stat.id}
                className="ach-stat-card"
                variants={scaleIn}
              >
                <div className="ach-stat-icon">{stat.icon}</div>
                <div className="ach-stat-number">{stat.number}</div>
                <div className="ach-stat-label">{stat.label}</div>
                <div className="ach-stat-description">{stat.description}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* QUALITY & COMPLIANCE COMMITMENT */}
      <section className="ach-commitment-section">
        <div className="ach-container">
          <motion.div 
            className="ach-commitment-content"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <h2 className="ach-section-title">Quality & Compliance Commitment</h2>
            
            <div className="ach-commitment-text">
              <p>
                At Geolink Survey, our certifications represent more than compliance documents—they embody our fundamental commitment to excellence, accuracy, and client trust. Our ISO 9001:2015 certification ensures systematic quality management across all operations, while ISO/IEC 27001:2022 certification guarantees the highest level of information security for sensitive geospatial data.
              </p>
              <p>
                Our ISO 45001:2018 and ISO 14001:2015 certifications demonstrate our dedication to workplace safety and environmental responsibility. These internationally recognized standards enable us to meet stringent government tender requirements and deliver surveying solutions that consistently exceed regulatory expectations.
              </p>
              <p>
                Empaneled with multiple government departments and trusted by leading PSUs, we maintain rigorous compliance protocols that align with national infrastructure development goals. Our certified processes ensure accuracy, reliability, and complete transparency in every surveying project we undertake.
              </p>
            </div>

            <div className="ach-commitment-highlights">
              <div className="ach-highlight-box">
                <div className="ach-highlight-icon">🎯</div>
                <div className="ach-highlight-content">
                  <h4>Tender Compliance</h4>
                  <p>Meeting government and PSU requirements</p>
                </div>
              </div>
              <div className="ach-highlight-box">
                <div className="ach-highlight-icon">🔒</div>
                <div className="ach-highlight-content">
                  <h4>Data Security</h4>
                  <p>ISO 27001 certified information protection</p>
                </div>
              </div>
              <div className="ach-highlight-box">
                <div className="ach-highlight-icon">✓</div>
                <div className="ach-highlight-content">
                  <h4>Quality Assurance</h4>
                  <p>Systematic standards across all operations</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CALL TO ACTION SECTION */}
      <section className="ach-cta-section">
        <div className="ach-cta-background">
          <div className="ach-cta-pattern"></div>
        </div>
        <motion.div 
          className="ach-cta-content"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="ach-cta-icon">🏅</div>
          <h2 className="ach-cta-title">Looking for a Certified and Reliable Surveying Partner?</h2>
          <p className="ach-cta-text">
            Partner with Madhya Pradesh's leading ISO-certified surveying firm. Our credentials, expertise, and proven track record make us the trusted choice for government tenders and critical infrastructure projects.
          </p>
          <div className="ach-cta-features">
            <div className="ach-cta-feature">
              <span className="ach-cta-feature-icon">✓</span>
              <span>ISO Certified Operations</span>
            </div>
            <div className="ach-cta-feature">
              <span className="ach-cta-feature-icon">✓</span>
              <span>Government Empanelled</span>
            </div>
            <div className="ach-cta-feature">
              <span className="ach-cta-feature-icon">✓</span>
              <span>20+ Years Experience</span>
            </div>
          </div>
          <Link to="/contact" className="ach-btn ach-btn-large ach-btn-cta-main">
            Contact Us Today
            <span className="ach-btn-arrow">→</span>
          </Link>
          <p className="ach-cta-subtext">Request our compliance documents and capability statement</p>
        </motion.div>
      </section>

    </div>
  );
}

export default Achievements;