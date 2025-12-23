import { useState, useEffect } from "react";
import styles from "./Testmonial.module.css";


 const testimonial = [
  {
    id: 1,
    name: "Alemayehu Kebede",
    role: "Senior Pastor",
    text:
      "The transformation in our church over the years has been nothing short of God’s grace at work.",
  },
  {
    id: 2,
    name: "Selamawit Bekele",
    role: "Ministry Leader",
    text:
      "Serving together has strengthened my faith and deepened my understanding of community.",
  },
  {
    id: 3,
    name: "Mikael Tsegaye",
    role: "Youth Mentor",
    text:
      "This ministry speaks the language of the next generation without losing biblical truth.",
  },
];

export default function Testmonial() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonial.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.section} id="testimonial">
      <h2 className={styles.title}>
        Testimonies of <span>Faith</span>
      </h2>

      <div className={styles.slider}>
        {testimonial.map((item, index) => (
          <div
            key={item.id}
            className={`${styles.card} ${
              index === active ? styles.active : ""
            }`}
          >
            <p className={styles.text}>"{item.text}"</p>

            <div className={styles.author}>
              <div className={styles.avatar}>
                {item.name.charAt(0)}
              </div>
              <div>
                <h4>{item.name}</h4>
                <span>{item.role}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.dots}>
        {testimonial.map((_, i) => (
          <span
            key={i}
            className={`${styles.dot} ${
              i === active ? styles.dotActive : ""
            }`}
            onClick={() => setActive(i)}
          ></span>
        ))}
      </div>
    </section>
  );
}
