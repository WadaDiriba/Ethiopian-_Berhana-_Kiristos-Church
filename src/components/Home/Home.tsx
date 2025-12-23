import styles from "./Home.module.css";
import home1 from "../../assets/home1.png";
import home2 from "../../assets/home2.png";
import home3 from "../../assets/home3.png";

export default function Home() {
  // Inline styles for each slide
  const slideStyles = {
    slide1: {
      backgroundImage: `url(${home1})`
    },
    slide2: {
      backgroundImage: `url(${home2})`
    },
    slide3: {
      backgroundImage: `url(${home3})`
    }
  };

  return (
    <section id="home" className={styles.homeSection}>
      
      {/* Background Slider */}
      <div className={styles.slider}>
        <div 
          className={`${styles.slide} ${styles.slide1}`} 
          style={slideStyles.slide1}
        ></div>
        <div 
          className={`${styles.slide} ${styles.slide2}`} 
          style={slideStyles.slide2}
        ></div>
        <div 
          className={`${styles.slide} ${styles.slide3}`} 
          style={slideStyles.slide3}
        ></div>
      </div>

      {/* Overlay */}
      <div className={styles.overlay}></div>

      {/* Content */}
      <div className={styles.homeContent}>
        <h1>Welcome to Ethiopian Berhana Kiristos Church</h1>
        <p>Experience the light of Christ in our community.</p>
        <a href="#about" className={styles.btn}>Learn More</a>
        <a href="/Visit" className={styles.btn}>Visit Branch</a>
      </div>

    </section>
  );
}