import styles from "./Navbar.module.css";
import logo from "../../assets/logo.png";

export default function Navbar() {
  return (
    <header className={styles.header}>
      <nav className={styles.navbar} aria-label="Main Navigation">
        
        {/* Brand */}
        <div className={styles.brand}>
          <img src={logo} alt="Ethiopian Berhana Kiristos Church Logo" />
          <span className={styles.brandText}>
            Ethiopian Berhana Kiristos Church
          </span>
        </div>

        {/* Navigation Links */}
        <ul className={styles.navLinks}>
          <li><a href="#home" className={styles.active}>Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#campus">Campus</a></li>
          <li><a href="#library">Library</a></li>
          <li><a href="#testimonial">Testimonial</a></li>
          <li>
            <a href="#donate" className={styles.donateBtn}>
              Donate
            </a>
          </li>
          <li><a href="#contact">Contact</a></li>
        </ul>

      </nav>
    </header>
  );
}
