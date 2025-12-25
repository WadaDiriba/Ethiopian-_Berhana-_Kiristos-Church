import React, { useEffect, useRef, useState } from 'react';
import styles from "./About.module.css";


export default function About() {
  const [activeSection, setActiveSection] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const missionRef = useRef(null);
  const visionRef = useRef(null);
  const goalRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSection((prev) => (prev + 1) % 3);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const sections = [
    {
      title: "Mission",
      description: "Our mission is to spread the Gospel of Jesus Christ, serve the community, and nurture spiritual growth.",
      icon: "⛪",
      color: "var(--mission-color)"
    },
    {
      title: "Vision",
      description: "Our vision is to build a Christ-centered community that transforms lives through love, teaching, and service.",
      icon: "✨",
      color: "var(--vision-color)"
    },
    {
      title: "Goal",
      description: "Our goal is to disciple believers, support social development, and expand God's kingdom in Ethiopia and beyond.",
      icon: "🎯",
      color: "var(--goal-color)"
    }
  ];

  return (
    <section 
      ref={sectionRef} 
      className={`${styles.aboutSection} ${isVisible ? styles.visible : ''}`}
      id="about"
    >
      {/* Background Elements */}
      <div className={styles.backgroundElements}>
        <div className={styles.floatingCross1}>✝</div>
        <div className={styles.floatingCross2}>✝</div>
        <div className={styles.floatingCross3}>✝</div>
        <div className={styles.floatingDove}>🕊</div>
        <div className={styles.floatingBible}>📖</div>
      </div>

      <div className={styles.container}>
        {/* Header with Animation */}
        <div className={styles.header}>
          <div className={styles.titleWrapper}>
            <h1 className={styles.title}>
              <span className={styles.titleWord}>About</span>
              <span className={styles.titleWord}>    Us</span>
            </h1>
            <div className={styles.titleUnderline}></div>
          </div>
          
          <p className={styles.subtitle}>
            Welcome to Ethiopian Berhane Kristos Church. Learn more about our mission, vision, and goals.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className={styles.contentGrid}>
          {/* Left Column - Animated Graphic */}
          <div className={styles.graphicSection}>
            <div className={styles.graphicContainer}>
              <div className={styles.rotatingCircle}>
                <div className={styles.innerCircle}>
                  <div className={styles.churchIcon}>
                    ✝️
                  </div>
                </div>
                <div className={styles.orbitPoint} style={{ ['--delay' as any]: '0s' } as React.CSSProperties}></div>
                <div className={styles.orbitPoint} style={{ ['--delay' as any]: '1s' } as React.CSSProperties}></div>
                <div className={styles.orbitPoint} style={{ ['--delay' as any]: '2s' } as React.CSSProperties}></div>
              </div>
              
              <div className={styles.floatingText}>
                <span className={styles.floatingTextItem}>Faith</span>
                <span className={styles.floatingTextItem}>Hope</span>
                <span className={styles.floatingTextItem}>Love</span>
              </div>
            </div>
          </div>

          {/* Right Column - Interactive Sections */}
          <div className={styles.sectionsContainer}>
            {/* Navigation Dots */}
            <div className={styles.sectionNav}>
              {sections.map((section, index) => (
                <button
                  key={index}
                  className={`${styles.navDot} ${activeSection === index ? styles.active : ''}`}
                  onClick={() => setActiveSection(index)}
                  style={{ ['--dot-color' as any]: section.color } as React.CSSProperties}
                  aria-label={`Go to ${section.title}`}
                >
                  <div className={styles.dotInner}></div>
                </button>
              ))}
            </div>

            {/* Animated Sections */}
            {sections.map((section, index) => (
              <div
                key={index}
                ref={index === 0 ? missionRef : index === 1 ? visionRef : goalRef}
                className={`${styles.aboutCard} ${activeSection === index ? styles.active : ''}`}
                style={{ ['--card-color' as any]: section.color } as React.CSSProperties}
                data-index={index}
              >
                <div className={styles.cardHeader}>
                  <div 
                    className={styles.iconWrapper}
                    style={{ backgroundColor: section.color }}
                  >
                    <span className={styles.icon}>{section.icon}</span>
                  </div>
                  <h2 className={styles.cardTitle}>{section.title}</h2>
                  <div className={styles.cardIndicator}></div>
                </div>
                
                <div className={styles.cardContent}>
                  <p className={styles.cardDescription}>{section.description}</p>
                  
                  {/* Animated Progress Bar */}
                  <div className={styles.progressContainer}>
                    <div 
                      className={styles.progressBar}
                      style={{ 
                        backgroundColor: section.color,
                        width: activeSection === index ? '100%' : '0%'
                      }}
                    ></div>
                  </div>
                  
                  {/* Additional Info */}
                  <div className={styles.additionalInfo}>
                    <div className={styles.infoItem}>
                      <span className={styles.infoIcon}>📅</span>
                      <span>Since 1975</span>
                    </div>
                    <div className={styles.infoItem}>
                      <span className={styles.infoIcon}>👥</span>
                      <span>2M+ Members</span>
                    </div>
                    <div className={styles.infoItem}>
                      <span className={styles.infoIcon}>🌍</span>
                      <span>Global Impact</span>
                    </div>
                  </div>
                </div>
                
                {/* Card Background Pattern */}
                <div className={styles.cardPattern}></div>
              </div>
            ))}
          </div>
        </div>

        {/* History Link with Hover Effect */}
        <div className={styles.historyLinkContainer}>
          <a href="/history" className={styles.historyLink}>
            <span className={styles.linkText}>Read Our History</span>
            <div className={styles.linkUnderline}></div>
            <span className={styles.linkArrow}>→</span>
            <div className={styles.linkHoverEffect}></div>
          </a>
          
          {/* Decorative Elements */}
          <div className={styles.decorativeLine}></div>
          <div className={styles.decorativeDots}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        {/* Stats Section */}
        <div className={styles.statsGrid}>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>45+</div>
            <div className={styles.statLabel}>Years Serving</div>
            <div className={styles.statIcon}>⏳</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>12</div>
            <div className={styles.statLabel}>Ministries</div>
            <div className={styles.statIcon}>🤝</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>50+</div>
            <div className={styles.statLabel}>Community Projects</div>
            <div className={styles.statIcon}>🏗️</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>24/7</div>
            <div className={styles.statLabel}>Prayer Support</div>
            <div className={styles.statIcon}>🙏</div>
          </div>
        </div>
      </div>
    </section>
  );
}