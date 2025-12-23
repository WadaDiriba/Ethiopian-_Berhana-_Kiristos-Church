// Navbar.tsx - Clean Professional Version
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Navbar.module.css";
import logo from "../../assets/logo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleEscKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    
    document.addEventListener("keydown", handleEscKey);
    return () => document.removeEventListener("keydown", handleEscKey);
  }, []);

  const navItems = [
    { id: "home", label: "Home", path: "/" },
    { id: "about", label: "About", path: "/about" },
    { id: "campus", label: "Campus", path: "/campus" },
    { id: "library", label: "Library", path: "/library" },
    { id: "testimonial", label: "Testimonials", path: "/testimonial" },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <nav className={styles.navbar} aria-label="Main Navigation">
        
        {/* Brand */}
        <Link to="/" className={styles.brand}>
          <div className={styles.logoContainer}>
            <img 
              src={logo} 
              alt="Ethiopian Berhana Kiristos Church Logo"
              className={styles.logoImage}
            />
          </div>
          <div className={styles.brandText}>
            <span className={styles.brandLine1}>Ethiopian</span>
            <span className={styles.brandLine2}>Berhana Kiristos Church</span>
          </div>
        </Link>

        {/* Hamburger Menu */}
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

        {/* Overlay for mobile */}
        <div 
          className={styles.navOverlay} 
          onClick={() => setMenuOpen(false)}
          style={{ opacity: menuOpen ? 1 : 0, pointerEvents: menuOpen ? 'auto' : 'none' }}
        />

        {/* Navigation Links */}
        <ul className={`${styles.navLinks} ${menuOpen ? styles.navActive : ""}`}>
          {navItems.map((item) => (
            <li key={item.id}>
              <Link
                to={item.path}
                className={`${styles.navLink} ${isActive(item.path) ? styles.active : ""}`}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
          
          <li>
            <Link
              to="/donate"
              className={styles.donateBtn}
              onClick={() => setMenuOpen(false)}
            >
              Donate
            </Link>
          </li>
          
          <li>
            <Link
              to="/contact"
              className={`${styles.navLink} ${styles.contactLink} ${isActive('/contact') ? styles.active : ""}`}
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}