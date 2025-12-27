import { useState, useEffect } from "react";
import styles from "./Testmonial.module.css";

const testimonial = [
  {
    id: 1,
    name: "Alemayehu Kebede",
    role: "Senior Pastor",
    text: "The transformation in our church over the years has been nothing short of God's grace at work.",
  },
  {
    id: 2,
    name: "Selamawit Bekele",
    role: "Ministry Leader",
    text: "Serving together has strengthened my faith and deepened my understanding of community.",
  },
  {
    id: 3,
    name: "Mikael Tsegaye",
    role: "Youth Mentor",
    text: "This ministry speaks the language of the next generation without losing biblical truth.",
  },
   {
    id: 4,
    name: "Mikael Tsegaye",
    role: "Youth Mentor",
    text: "This ministry speaks the language of the next generation without losing biblical truth.",
  },
   {
    id: 5,
    name: "Mikael Tsegaye",
    role: "Youth Mentor",
    text: "This ministry speaks the language of the next generation without losing biblical truth.",
  },
   {
    id: 6,
    name: "Mikael Tsegaye",
    role: "Youth Mentor",
    text: "This ministry speaks the language of the next generation without losing biblical truth.",
  },
  
];

export default function Testmonial() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState("right-to-left");
  const [isAnimating, setIsAnimating] = useState(false);

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection("right-to-left");
    setActive((prev) => (prev + 1) % testimonial.length);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection("left-to-right");
    setActive((prev) => (prev - 1 + testimonial.length) % testimonial.length);
  };

  // ...existing code...
  const goToSlide = (index: number) => {
    if (isAnimating || index === active) return;
    setIsAnimating(true);
    setDirection(index > active ? "right-to-left" : "left-to-right");
    setActive(index);
  };
// ...existing code...

  // Reset animation state after animation completes
  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => {
        setIsAnimating(false);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isAnimating]);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [isAnimating]);

  return (
    <section className={styles.section} id="testimonial">
      <h2 className={styles.title}>
             Testimonial 
      </h2>

      <div className={styles.sliderContainer}>
        <button className={styles.navButton} onClick={handlePrev} aria-label="Previous testimonial">
          ←
        </button>

        <div className={styles.slider}>
          {testimonial.map((item, index) => (
            <div
              key={item.id}
              className={`${styles.card} ${
                index === active ? styles.active : ""
              } ${styles[direction]}`}
              style={{
                opacity: index === active ? 1 : 0,
                transform: `translateX(${(index - active) * 120}%)`,
              }}
            >
              <div className={styles.cardContent}>
                <p className={styles.text}>"{item.text}"</p>
                
                <div className={styles.authorContainer}>
                  <div className={styles.avatar}>
                    {item.name.charAt(0)}
                  </div>
                  <div className={styles.authorInfo}>
                    <h4 className={styles.authorName}>{item.name}</h4>
                    <span className={styles.authorRole}>{item.role}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className={styles.navButton} onClick={handleNext} aria-label="Next testimonial">
          →
        </button>
      </div>

      <div className={styles.controls}>
        {testimonial.map((_, i) => (
          <button
            key={i}
            className={`${styles.dot} ${i === active ? styles.dotActive : ""}`}
            onClick={() => goToSlide(i)}
            aria-label={`Go to testimonial ${i + 1}`}
            aria-current={i === active}
          ></button>
        ))}
      </div>
    </section>
  );
}