import { useEffect, useState } from "react";
import styles from "./Footer.module.css";
import logo from "../../assets/logo.png";

import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaClock,
  FaEnvelope,
  FaInbox,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTelegramPlane,
} from "react-icons/fa";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState<number>(2024);
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
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
    { label: "Visit", href: "/visit" },
  ];

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt />,
      label: "3P54+GWH, Addis Ababa",
      href: "https://maps.google.com",
    },
    {
      icon: <FaPhoneAlt />,
      label: "+251 11 123 4567",
    },
    {
      icon: <FaEnvelope />,
      label: "EBKC12@Yahoo.com",
      href: "mailto:EBKC12@Yahoo.com",
    },
    {
      icon: <FaInbox />,
      label: "P.O.Box-160689",
    },
    {
      icon: <FaClock />,
      label: "Mon-Fri: 2:00 AM – 11:00 AM",
    },
  ];

  const socialLinks = [
    { icon: <FaFacebookF />, label: "Facebook", href: "https://facebook.com" },
    { icon: <FaInstagram />, label: "Instagram", href: "https://instagram.com" },
    { icon: <FaYoutube />, label: "YouTube", href: "https://youtube.com" },
    { icon: <FaTelegramPlane />, label: "Telegram", href: "https://t.me" },
  ];

  return (
    <footer className={styles.footer}>
      {/* Compact Scroll to Top Button */}
      {showScrollTop && (
        <button
          className={styles.scrollTopButton}
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          ↑
        </button>
      )}

      {/* Main Footer Content - More Compact */}
      <div className={styles.container}>
        {/* Church Info & Brand */}
        <div className={`${styles.section} ${styles.brandSection}`}>
          <div className={styles.logoContainer}>
            <img
              src={logo}
              alt="Ethiopian Berhane Kiristos Church Logo"
              className={styles.logo}
            />
          </div>

          <h2 className={styles.churchName}>
            Ethiopian Berhane
            <span className={styles.nameHighlight}> Kristos</span> Church
          </h2>

          <p className={styles.mission}>
            Proclaiming the Gospel, Transforming Lives, and Building a Christ-centered Community.
          </p>

          {/* Social Media Links */}
          <div className={styles.socialLinks}>
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className={styles.socialLink}
                aria-label={social.label}
                target="_blank"
                rel="noopener noreferrer"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links - More Compact */}
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>
            <span className={styles.titleIcon}>↗</span> Quick Links
          </h3>

          <ul className={styles.linksList}>
            {quickLinks.map((link, index) => (
              <li key={index} className={styles.linkItem}>
                <a href={link.href} className={styles.link}>
                  <span className={styles.linkBullet}>›</span>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Information - More Compact */}
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>
            <span className={styles.titleIcon}></span> Contact Us
          </h3>

          <div className={styles.contactList}>
            {contactInfo.map((item, index) => (
              <div
                key={index}
                className={styles.contactItem}
              >
                <span className={styles.contactIcon}>{item.icon}</span>
                {item.href ? (
                  <a 
                    href={item.href} 
                    className={styles.contactText}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.label}
                  </a>
                ) : (
                  <span className={styles.contactText}>{item.label}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Compact Bottom Bar */}
      <div className={styles.bottomBar}>
        <div className={styles.bottomContent}>
          <div className={styles.copyright}>
            © {currentYear} Ethiopian Berhane Kristos Church. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}