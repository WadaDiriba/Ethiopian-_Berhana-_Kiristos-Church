import { useEffect, useState } from "react";
import styles from "./Footer.module.css";
import logo from "../../assets/logo.png";
import { href } from "react-router-dom";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState<number>(2024);
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
    
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Our Campus", href: "/campus" },
    { label: "Library", href: "/library" },
    { label: "Contact", href: "/contact" },
    { label: "Donate", href: "/donate" },
   {   label:"visit",href:"/visit"} 
  ];

  const contactInfo = [
    { icon: "", label: "123 Faith Street, Addis Ababa, Ethiopia" },
    { icon: "", label: "+251 11 123 4567" },
    { icon: "", label: "+251 91 123 4567" },
    { icon: "", label: "info@ebkchurch.org" },
    { icon: "", label: "Sunday Services: 8:00 AM - 12:00 PM" },
  ];

  const socialLinks = [
    { icon: "📘", label: "Facebook", href: "#" },
    { icon: "📷", label: "Instagram", href: "#" },
    { icon: "📹", label: "YouTube", href: "#" },
    { icon: "💬", label: "Telegram", href: "#" },
  ];

  return (
    <footer className={styles.footer}>
      {/* Animated Background Elements */}
      <div className={styles.backgroundElements}>
        <div className={styles.floatingCross}></div>
        <div className={styles.floatingCross}></div>
        <div className={styles.lightBeam}></div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button 
          className={styles.scrollTopButton} 
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <span className={styles.scrollArrow}>↑</span>
        </button>
      )}

      {/* Main Footer Content */}
      <div className={styles.container}>
        
        {/* Church Info & Brand */}
        <div className={`${styles.section} ${styles.brandSection}`}>
          <div className={styles.logoContainer}>
            <img 
              src={logo} 
              alt="Ethiopian Berhana Kiristos Church Logo" 
              className={styles.logo}
            />
            <div className={styles.logoGlow}></div>
          </div>
          
          <h2 className={styles.churchName}>
            Ethiopian Berhana
            <span className={styles.nameHighlight}> Kiristos</span> Church
          </h2>
          
          <p className={styles.mission}>
            Proclaiming the Gospel, Transforming Lives, and Building a Christ-centered Community in Ethiopia and Beyond.
          </p>
          
          {/* Social Media Links */}
          <div className={styles.socialLinks}>
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className={styles.socialLink}
                aria-label={social.label}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className={styles.socialIcon}>{social.icon}</span>
                <span className={styles.socialTooltip}>{social.label}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>
            <span className={styles.titleIcon}>🔗</span>
            Quick Links
          </h3>
          
          <ul className={styles.linksList}>
            {quickLinks.map((link, index) => (
              <li 
                key={index} 
                className={styles.linkItem}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <a href={link.href} className={styles.link}>
                  <span className={styles.linkBullet}>›</span>
                  <span className={styles.linkText}>{link.label}</span>
                  <span className={styles.linkHoverLine}></span>
                </a>
              </li>
            ))}
          </ul>
          
          {/* Prayer Request Button */}
          <div className={styles.prayerSection}>
            <button className={styles.prayerButton}>
              <span className={styles.prayerIcon}>🙏</span>
              <span>Submit Prayer Request</span>
            </button>
          </div>
        </div>

        {/* Contact Information */}
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>
            <span className={styles.titleIcon}>📞</span>
            Contact Us
          </h3>
          
          <div className={styles.contactInfo}>
            {contactInfo.map((info, index) => (
              <div 
                key={index} 
                className={styles.contactItem}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className={styles.contactIcon}>{info.icon}</span>
                <span className={styles.contactText}>{info.label}</span>
              </div>
            ))}
          </div>
          
          {/* Newsletter Subscription */}
          <div className={styles.newsletter}>
            <h4 className={styles.newsletterTitle}>Stay Updated</h4>
            <p className={styles.newsletterText}>Subscribe to our weekly newsletter</p>
            
            <form className={styles.subscriptionForm}>
              <div className={styles.inputGroup}>
                <input 
                  type="email" 
                  placeholder="Wedadiriba@gmail.com" 
                  className={styles.emailInput}
                  aria-label="Email for newsletter subscription"
                />
                <button type="submit" className={styles.subscribeButton}>
                  <span className={styles.subscribeIcon}>→</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className={styles.bottomBar}>
        <div className={styles.bottomContent}>
          {/* Copyright */}
          <div className={styles.copyright}>
            © {currentYear} Ethiopian Berhana Kiristos Church. All Rights Reserved.
          </div>
          
         
          
          {/* Ministry Verse */}
          <div className={styles.verse}>
            <span className={styles.verseIcon}>✝️</span>
            "Therefore go and make disciples of all nations..." — Matthew 28:19
          </div>
        </div>
      </div>
    </footer>
  );
}