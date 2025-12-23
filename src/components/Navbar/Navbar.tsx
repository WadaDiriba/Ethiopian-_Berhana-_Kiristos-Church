 import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import logo from "../../assets/logo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  // Handle link click
  const handleLinkClick = (linkId: string) => {
    setActiveLink(linkId);
    setMenuOpen(false);
  };

  // Close menu on ESC key
  useEffect(() => {
    const handleEscKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && menuOpen) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscKey);
    return () => document.removeEventListener("keydown", handleEscKey);
  }, [menuOpen]);

  return (
    <header 
      className={`${styles.header} ${scrolled ? styles.scrolled : ""} ${menuOpen ? styles.menuOpen : ""}`}
      role="banner"
    >
      <nav className={styles.navbar} aria-label="Main Navigation">
        
        {/* Brand with enhanced animation */}
        <div className={styles.brand}>
          <div className={styles.logoContainer}>
            <img 
              src={logo} 
              alt="Ethiopian Berhana Kiristos Church Logo"
              className={styles.logoImage}
              loading="eager"
            />
            <div className={styles.logoGlow}></div>
          </div>
          <span className={styles.brandText}>
            <span className={styles.brandLine1}>Ethiopian</span>
            <span className={styles.brandLine2}>Berhana Kiristos Church</span>
          </span>
        </div>

        {/* Animated Hamburger Icon */}
        <button
          className={`${styles.hamburger} ${menuOpen ? styles.hamburgerActive : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
        </button>

        {/* Navigation Links with enhanced animations */}
        <div className={styles.navOverlay} onClick={() => setMenuOpen(false)}></div>
        <ul
          className={`${styles.navLinks} ${
            menuOpen ? styles.navActive : ""
          }`}
          role="menubar"
        >
          {[
            { id: "home", label: "Home", href: "#home" },
            { id: "about", label: "About", href: "#about" },
            { id: "campus", label: "Campus", href: "#campus" },
            { id: "library", label: "Library", href: "#library" },
            { id: "testimonial", label: "Testimonial", href: "#testimonial" },
          ].map((item, index) => (
            <li 
              key={item.id} 
              className={styles.navItem}
              role="none"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <a
                href={item.href}
                className={`${styles.navLink} ${activeLink === item.id ? styles.active : ""}`}
                role="menuitem"
                onClick={() => handleLinkClick(item.id)}
                onMouseEnter={(e) => e.currentTarget.classList.add(styles.hoverEffect)}
                onMouseLeave={(e) => e.currentTarget.classList.remove(styles.hoverEffect)}
              >
                <span className={styles.linkText}>{item.label}</span>
                <span className={styles.linkUnderline}></span>
              </a>
            </li>
          ))}

          {/* Donate Button with special animation */}
          <li 
            className={styles.navItem}
            role="none"
            style={{ animationDelay: "0.5s" }}
          >
            <a
              href="Donate.tsx"
              className={styles.donateBtn}
              role="menuitem"
              onClick={() => handleLinkClick("donate")}
            >
              <span className={styles.donateText}>Donate</span>
              <span className={styles.donateGlow}></span>
              <span className={styles.donateRipple}></span>
            </a>
          </li>

          {/* Contact Link */}
          <li 
            className={styles.navItem}
            role="none"
            style={{ animationDelay: "0.6s" }}
          >
            <a
              href="Contact.tsx"
              className={`${styles.navLink} ${styles.contactLink} ${activeLink === "contact" ? styles.active : ""}`}
              role="menuitem"
              onClick={() => handleLinkClick("contact")}
            >
              <span className={styles.linkText}>Contact</span>
             
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}