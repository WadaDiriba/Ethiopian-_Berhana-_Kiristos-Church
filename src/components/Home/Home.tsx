import styles from "./Home.module.css";

export default function Home() {
  return (
    <section id="home" className={styles.homeSection}>
      
      {/* Background Slider */}
      <div className={styles.slider}>
        <div className={`${styles.slide} ${styles.slide1}`}></div>
        <div className={`${styles.slide} ${styles.slide2}`}></div>
        <div className={`${styles.slide} ${styles.slide3}`}></div>
      </div>

      {/* Overlay */}
      <div className={styles.overlay}></div>

      {/* Content */}
      <div className={styles.homeContent}>
        <h1>Welcome to Ethiopian Berhana Kiristos Church</h1>
        <p>Experience the light of Christ in our community.</p>
        <a href="#about" className={styles.btn}>Learn More</a>
      </div>

    </section>
  );
}
