import React, { useState, useEffect, useRef } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../styles/Services.css';
import heroImage from '../../assets/hero-1.webp';

// Service card images (one per service)
import dgpsSurveyImage from '../../assets/services/dgps.png';
import droneSurveyImage from '../../assets/services/drone.png';
import topographicalSurveyImage from '../../assets/services/Topographical.png';
import contourSurveyImage from '../../assets/services/Contour.png';
import cadastralMappingImage from '../../assets/services/Cadastral.png';
import gisMappingImage from '../../assets/services/GIS.png';
import mineSurveyImage from '../../assets/services/Mining.png';
import asBuiltSurveyImage from '../../assets/services/As-Built.png';
import roadSurveyImage from '../../assets/services/road.png';
import powerTransmissionLineSurveyImage from '../../assets/services/power-transmission.png';
import irrigationSurveyImage from '../../assets/services/Irrigation.png';
import pipelineRouteSurveyImage from '../../assets/services/Pipeline.png';
import waterSupplyNetworkSurveyImage from '../../assets/services/Water Supply Network Survey.png';
import ofcSurveyImage from '../../assets/services/OFC.png';
import demarcationOfLandBoundariesImage from '../../assets/services/Demarcation.png';
import layoutPlanningImage from '../../assets/services/Layout Planning.png';
import environmentClearanceImage from '../../assets/services/Environment Clearance.png';
import environmentImpactAssessmentImage from '../../assets/services/EIA.png';
import orthoRectificationImage from '../../assets/services/Ortho-rectification.png';
import demDtmDsmGenerationImage from '../../assets/services/DEM, DTM & DSM Generation.png';
import totalStationSurveyImage from '../../assets/services/Total Station Survey.png';
import lidarSurveyImage from '../../assets/services/LiDAR Survey.png';
import lSectionCrossSectionImage from '../../assets/services/L-Section & Cross Section.png';
import alignmentSurveyImage from '../../assets/services/Alignment Survey.png';
import bathymetricSurveyImage from '../../assets/services/Bathymetric.png';
import railRoadSurveyImage from '../../assets/services/Rail-Road Survey.png';
import satelliteImageProcessingImage from '../../assets/services/satellite.png';

// Animated Counter Component (from Homepage)
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

    const currentRef = counterRef.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [hasAnimated]);

  return (
    <div ref={counterRef}>
      {count}{suffix}
    </div>
  );
};

function Services() {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
  };

  // Our Expertise - 6 Key Services
  const expertiseServices = [
    {
      icon: "⛰️",
      title: "Topographical Survey",
      image: topographicalSurveyImage,
      description: "Detailed land surveys identifying natural and man-made features, elevations, terrain specifications, and site characteristics essential for construction planning and engineering design."
    },
    {
      icon: "📏",
      title: "Contour Survey",
      image: contourSurveyImage,
      description: "Visual representation of land topography and elevation changes to understand water flow, erosion patterns, and drainage characteristics crucial for development and planning."
    },
    {
      icon: "🗺️",
      title: "Cadastral Mapping",
      image: cadastralMappingImage,
      description: "Comprehensive legal documentation of land parcels including quantity, dimensions, location, value, tenure, and ownership with geo-referenced accuracy for land revenue records."
    },
    {
      icon: "⛏️",
      title: "Mine Survey",
      image: mineSurveyImage,
      description: "Mining area boundary demarcation, cadastral map preparation, geo-referencing, and establishment of boundary pillars using DGPS and Total Station technology for regulatory compliance."
    },
    {
      icon: "🚁",
      title: "Drone Survey",
      image: droneSurveyImage,
      description: "Unmanned Aerial Vehicle surveying delivering high-resolution aerial images, 3D models, contours, DTM, DSM, cloud point data, and comprehensive videography for large-scale projects."
    },
    {
      icon: "🛰️",
      title: "Satellite Image Processing",
      image: satelliteImageProcessingImage,
      description: "Advanced processing of satellite imagery including ortho-rectification, geo-referencing, classification, and analysis for mapping, planning, and environmental monitoring applications."
    }
  ];

  // All 27 services data
  const allServices = [
    {
      icon: "📡",
      title: "DGPS Survey",
      image: dgpsSurveyImage,
      description: "Differential Global Positioning System surveying for precise positioning, boundary demarcation, and geo-referencing with sub-meter accuracy for legal compliance and cadastral mapping."
    },
    {
      icon: "🚁",
      title: "Drone Survey",
      image: droneSurveyImage,
      description: "Unmanned Aerial Vehicle surveying delivering high-resolution aerial images, 3D models, contours, DTM, DSM, cloud point data, and comprehensive videography for large-scale projects."
    },
    {
      icon: "⛰️",
      title: "Topographical Survey",
      image: topographicalSurveyImage,
      description: "Detailed land surveys identifying natural and man-made features, elevations, terrain specifications, and site characteristics essential for construction planning and engineering design."
    },
    {
      icon: "📏",
      title: "Contour Survey",
      image: contourSurveyImage,
      description: "Visual representation of land topography and elevation changes to understand water flow, erosion patterns, and drainage characteristics crucial for development and planning."
    },
    {
      icon: "🗺️",
      title: "Cadastral Mapping",
      image: cadastralMappingImage,
      description: "Comprehensive legal documentation of land parcels including quantity, dimensions, location, value, tenure, and ownership with geo-referenced accuracy for land revenue records."
    },
    {
      icon: "🌍",
      title: "GIS Mapping",
      image: gisMappingImage,
      description: "Geographic Information Systems for spatial data analysis, database management, automated enterprise workflows, and informed decision-making with advanced geospatial technology."
    },
    {
      icon: "⛏️",
      title: "Mine Survey",
      image: mineSurveyImage,
      description: "Mining area boundary demarcation, cadastral map preparation, geo-referencing, and establishment of boundary pillars using DGPS and Total Station technology for regulatory compliance."
    },
    {
      icon: "📐",
      title: "As-Built Survey",
      image: asBuiltSurveyImage,
      description: "Post-construction documentation capturing actual positions, dimensions, and specifications of completed structures, utilities, and infrastructure for record-keeping and future reference."
    },
    {
      icon: "🛣️",
      title: "Road Survey",
      image: roadSurveyImage,
      description: "Comprehensive road network surveys including alignment, cross-sections, profiles, and topographical mapping for highway construction, maintenance, and widening projects spanning 5000+ KM."
    },
    {
      icon: "⚡",
      title: "Power Transmission Line Survey",
      image: powerTransmissionLineSurveyImage,
      description: "Precise route surveys for power transmission corridors including tower positioning, clearance analysis, terrain mapping, and right-of-way documentation for electrical infrastructure."
    },
    {
      icon: "💧",
      title: "Irrigation Survey",
      image: irrigationSurveyImage,
      description: "Detailed surveys for irrigation projects including canal alignment, watershed analysis, water distribution networks, and agricultural land mapping for optimal water resource management."
    },
    {
      icon: "🔧",
      title: "Pipeline Route Survey",
      image: pipelineRouteSurveyImage,
      description: "Accurate route planning and surveying for oil, gas, water, and sewage pipelines including topographical mapping, obstacle identification, and right-of-way determination."
    },
    {
      icon: "🚰",
      title: "Water Supply Network Survey",
      image: waterSupplyNetworkSurveyImage,
      description: "Comprehensive mapping of water distribution systems including pipeline networks, storage facilities, pumping stations, and service connections for municipal and industrial applications."
    },
    {
      icon: "📶",
      title: "OFC Survey",
      image: ofcSurveyImage,
      description: "Optical Fiber Cable route surveys for telecommunication infrastructure including underground and overhead cable routes, junction points, and network mapping for connectivity projects."
    },
    {
      icon: "📍",
      title: "Demarcation of Land Boundaries",
      image: demarcationOfLandBoundariesImage,
      description: "Precise identification and marking of property boundaries using DGPS technology, establishing permanent markers, and creating legally defensible boundary documentation for land disputes."
    },
    {
      icon: "🏘️",
      title: "Layout Planning / Plotting of Land",
      image: layoutPlanningImage,
      description: "Professional land subdivision planning, plot demarcation, and layout design for residential, commercial, and industrial developments ensuring optimal land utilization and compliance."
    },
    {
      icon: "🌱",
      title: "Environment Clearance (EC)",
      image: environmentClearanceImage,
      description: "Comprehensive surveys and documentation for environmental clearance applications including baseline data collection, impact zone mapping, and regulatory compliance support."
    },
    {
      icon: "🔍",
      title: "Environment Impact Assessment (EIA)",
      image: environmentImpactAssessmentImage,
      description: "Detailed environmental impact studies including baseline surveys, ecological mapping, pollution assessment, and mitigation planning for sustainable development projects."
    },
    {
      icon: "🛰️",
      title: "Ortho-rectification",
      image: orthoRectificationImage,
      description: "Processing of aerial and satellite imagery to remove distortions and create accurate, georeferenced orthophotos suitable for mapping, planning, and GIS applications."
    },
    {
      icon: "🏔️",
      title: "DEM, DTM & DSM Generation",
      image: demDtmDsmGenerationImage,
      description: "Creation of Digital Elevation Models, Digital Terrain Models, and Digital Surface Models from drone surveys, LiDAR data, or satellite imagery for terrain analysis and planning."
    },
    {
      icon: "🎯",
      title: "Total Station Survey",
      image: totalStationSurveyImage,
      description: "High-precision surveys using Total Station instruments with 1-second accuracy for construction layout, as-built surveys, alignment verification, and detailed topographical mapping."
    },
    {
      icon: "📊",
      title: "LiDAR Survey",
      image: lidarSurveyImage,
      description: "Light Detection and Ranging technology for ultra-precise 3D mapping, terrain modeling, vegetation analysis, and infrastructure surveys with centimeter-level accuracy."
    },
    {
      icon: "📉",
      title: "L-Section & Cross Section",
      image: lSectionCrossSectionImage,
      description: "Longitudinal and cross-sectional profile surveys for roads, canals, railways, and pipelines providing detailed elevation data for design, construction, and earthwork calculations."
    },
    {
      icon: "↔️",
      title: "Alignment Survey",
      image: alignmentSurveyImage,
      description: "Precise centerline and alignment surveys for linear infrastructure projects including roads, railways, canals, and pipelines ensuring accurate construction layout and positioning."
    },
    {
      icon: "🌊",
      title: "Bathymetric Survey",
      image: bathymetricSurveyImage,
      description: "Underwater depth mapping and sea floor topography for water bodies including rivers, lakes, reservoirs, and coastal areas supporting dredging, navigation, and water resource projects."
    },
    {
      icon: "🚂",
      title: "Rail-Road Survey",
      image: railRoadSurveyImage,
      description: "Specialized surveys for railway infrastructure including track alignment, station layouts, bridge and tunnel positioning, and integration with road networks for transportation planning."
    }
  ];

  // Industries served data
  const industries = [
    {
      icon: "🏛️",
      title: "Government Departments",
      description: "Directorate of Geology & Mining, MPIDC, State Tourism Board, Water Resource Department, Municipal Corporations, PWD, and various development authorities across India."
    },
    {
      icon: "🏗️",
      title: "Infrastructure & Construction",
      description: "Road networks, power transmission lines, irrigation projects, pipeline routes, water supply networks, OFC surveys, and comprehensive infrastructure development projects."
    },
    {
      icon: "⛏️",
      title: "Mining & Industrial",
      description: "Mine boundary surveys, industrial development zones, cement plants, resource extraction operations with regulatory compliance, and cadastral mapping for 100+ mining projects."
    },
    {
      icon: "🏡",
      title: "Land & Development",
      description: "Land acquisition, boundary demarcation, layout planning, environment clearances, real estate development projects, and legal documentation for property transactions."
    }
  ];

  // Why choose Geolink advantages
  const advantages = [
    {
      icon: "👥",
      title: "Experienced Professionals",
      description: "Highly skilled team with specialized expertise in civil engineering, GIS technology, and 20+ years of surveying experience."
    },
    {
      icon: "🔬",
      title: "Advanced Technology",
      description: "12 DGPS units, 2 professional drones, 5 Total Stations with 1-second accuracy, and 5 Auto Levels for comprehensive capabilities."
    },
    {
      icon: "🎯",
      title: "Accuracy & Compliance",
      description: "ISO 9001-2015, ISO/IEC 27001-2022, and ISO 45001-2018 certified operations ensuring maximum precision and quality standards."
    },
    {
      icon: "⚡",
      title: "Timely Delivery",
      description: "Efficient project management and professional commitment ensure completion within agreed timeframes without compromising quality."
    },
    {
      icon: "🤝",
      title: "Dependable Support",
      description: "Dedicated client service with transparent communication, regular updates, and responsive support throughout project lifecycle."
    },
    {
      icon: "✓",
      title: "Proven Track Record",
      description: "100+ mining projects, 5000+ KM road surveys, trusted by Defence Ministry, Reliance Industries, and Ultra Tech Cement."
    }
  ];

  return (
    <div className="srv-page">
      
      {/* HERO SECTION WITH BACKGROUND IMAGE */}
      <section className="srv-hero-section">
        <div className="srv-hero-background">
          <img src={heroImage} alt="Geolink Survey Services" className="srv-hero-bg-image" />
          <div className="srv-hero-overlay"></div>
        </div>
        <motion.div 
          className="srv-hero-content"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <motion.h1 
            className="srv-hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Our Services
          </motion.h1>
          <motion.p 
            className="srv-hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Comprehensive Surveying & Geospatial Solutions for Government, Infrastructure, and Mining Sectors
          </motion.p>
        </motion.div>
      </section>

      {/* SERVICES OVERVIEW - NO CHANGES */}
      <section className="srv-overview-section">
        <div className="srv-container">
          <motion.div 
            className="srv-overview-content"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <h2 className="srv-section-title">Expert Geospatial Solutions</h2>
            <div className="srv-overview-text">
              <p>
                Geolink Survey provides specialized surveying and geospatial services backed by over two decades of expertise and ISO certifications. 
                Our comprehensive service portfolio is designed to meet the diverse needs of government agencies, infrastructure developers, mining 
                operations, and land development projects.
              </p>
              <p>
                We leverage advanced instruments including 12 DGPS units, 2 professional drones, and 5 Total Stations with 1-second accuracy to 
                deliver precise, reliable, and compliant surveying solutions. Our experienced team combines technical expertise with proven 
                methodologies to ensure maximum accuracy and client satisfaction.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* OUR EXPERTISE - 6 KEY SERVICES */}
      <section className="srv-expertise-section">
        <div className="srv-container">
          <motion.h2 
            className="srv-section-title"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
          >
            Our Expertise
          </motion.h2>
          <motion.p 
            className="srv-expertise-intro"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
          >
            Core specializations that define our leadership in geospatial solutions
          </motion.p>

          <motion.div 
            className="srv-expertise-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {expertiseServices.map((service, index) => (
              <motion.div 
                key={index} 
                className="srv-expertise-card"
                variants={scaleIn}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                <div className="srv-expertise-image-wrapper">
                  <img src={service.image} alt={service.title} className="srv-expertise-image" />
                  <div className="srv-expertise-image-overlay"></div>
                  <div className="srv-expertise-icon-badge">{service.icon}</div>
                </div>
                <div className="srv-expertise-content">
                  <h3 className="srv-expertise-title">{service.title}</h3>
                  <p className="srv-expertise-description">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* TRUST INDICATORS / STATS FROM HOMEPAGE */}
      <section className="srv-trust-section">
        <div className="srv-container">
          <motion.div 
            className="srv-trust-grid" 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "-100px" }} 
            variants={staggerContainer}
          >
            <motion.div className="srv-trust-card" variants={scaleIn}>
              <div className="srv-trust-number"><AnimatedCounter end={20} suffix="+" /></div>
              <div className="srv-trust-label">Years of Experience</div>
              <div className="srv-trust-desc">Since 1998 (Gravity Consultants)</div>
            </motion.div>
            <motion.div className="srv-trust-card" variants={scaleIn}>
              <div className="srv-trust-number"><AnimatedCounter end={100} suffix="+" /></div>
              <div className="srv-trust-label">Mining Projects</div>
              <div className="srv-trust-desc">Completed Successfully</div>
            </motion.div>
            <motion.div className="srv-trust-card" variants={scaleIn}>
              <div className="srv-trust-number"><AnimatedCounter end={5000} suffix="+" /></div>
              <div className="srv-trust-label">KM Road Survey</div>
              <div className="srv-trust-desc">Across Multiple Agencies</div>
            </motion.div>
            <motion.div className="srv-trust-card" variants={scaleIn}>
              <div className="srv-trust-number"><AnimatedCounter end={1} suffix=" Sec" /></div>
              <div className="srv-trust-label">Precision Accuracy</div>
              <div className="srv-trust-desc">Total Station Equipment</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ALL 27 SERVICES SECTION */}
      <section className="srv-all-services-section">
        <div className="srv-container">
          <motion.h2 
            className="srv-section-title"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
          >
            Our Complete Service Portfolio
          </motion.h2>
          <motion.p 
            className="srv-all-services-intro"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
          >
            From DGPS surveys to advanced LiDAR mapping, we offer comprehensive geospatial solutions tailored to your project requirements
          </motion.p>

          <motion.div 
            className="srv-all-services-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {allServices.map((service, index) => (
              <motion.div 
                key={index} 
                className="srv-service-card-new"
                variants={scaleIn}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                <div className="srv-service-image-wrapper">
                  <img src={service.image} alt={service.title} className="srv-service-image" />
                  <div className="srv-service-image-overlay"></div>
                  <div className="srv-service-icon-badge">{service.icon}</div>
                </div>
                <div className="srv-service-content">
                  <h3 className="srv-service-title-new">{service.title}</h3>
                  <p className="srv-service-description-new">{service.description}</p>
                  <Link to="/contact" className="srv-inquire-btn">
                    Inquire Now
                    <span className="srv-inquire-arrow">→</span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* INDUSTRIES SERVED - 2 COLUMNS LAYOUT */}
      <section className="srv-industries-section">
        <div className="srv-container">
          <motion.h2 
            className="srv-section-title"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
          >
            Industries We Serve
          </motion.h2>
          <motion.p 
            className="srv-industries-intro"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
          >
            Geolink Survey partners with leading organizations across diverse sectors, delivering accurate and reliable 
            geospatial solutions tailored to each industry's unique requirements.
          </motion.p>
          <motion.div 
            className="srv-industries-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {industries.map((industry, index) => (
              <motion.div 
                key={index} 
                className="srv-industry-card"
                variants={scaleIn}
              >
                <div className="srv-industry-icon">{industry.icon}</div>
                <h3 className="srv-industry-title">{industry.title}</h3>
                <p className="srv-industry-description">{industry.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* WHY CHOOSE GEOLINK SECTION */}
      <section className="srv-why-section">
        <div className="srv-container">
          <motion.h2 
            className="srv-section-title"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
          >
            Why Choose Geolink for Your Survey Needs
          </motion.h2>
          <motion.div 
            className="srv-why-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {advantages.map((advantage, index) => (
              <motion.div 
                key={index} 
                className="srv-why-card"
                variants={fadeInUp}
              >
                <div className="srv-why-icon">{advantage.icon}</div>
                <h4 className="srv-why-title">{advantage.title}</h4>
                <p className="srv-why-description">{advantage.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="srv-cta-section">
        <div className="srv-cta-background">
          <div className="srv-cta-pattern"></div>
        </div>
        <motion.div 
          className="srv-cta-content"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="srv-cta-icon">📍</div>
          <h2 className="srv-cta-title">Looking for Accurate and Reliable Surveying Services?</h2>
          <p className="srv-cta-text">
            Partner with Madhya Pradesh's leading ISO-certified surveying firm. Our expert team is ready to deliver 
            precise, compliant geospatial solutions for your project.
          </p>
          <div className="srv-cta-features">
            <div className="srv-cta-feature">
              <span className="srv-cta-feature-icon">✓</span>
              <span>ISO Certified Quality</span>
            </div>
            <div className="srv-cta-feature">
              <span className="srv-cta-feature-icon">✓</span>
              <span>20+ Years Experience</span>
            </div>
            <div className="srv-cta-feature">
              <span className="srv-cta-feature-icon">✓</span>
              <span>Advanced Equipment</span>
            </div>
          </div>
          <Link to="/contact" className="srv-btn srv-btn-large srv-btn-cta-main">
            Contact Us Today
            <span className="srv-btn-arrow">→</span>
          </Link>
          <p className="srv-cta-subtext">Get a free consultation and quote for your survey project</p>
        </motion.div>
      </section>

    </div>
  );
}

export default Services;