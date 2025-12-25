import styles from "./WhatWeBelieve.module.css";
import { FaBible, FaCross, FaPrayingHands, FaHeart } from "react-icons/fa";

export default function WhatWeBelieve() {
  return (
    <section className={styles.believeSection}>
      <div className={styles.container}>
        
        {/* Section Header */}
        <div className={styles.header}>
          <h2 className={styles.title}>What We Believe</h2>
          <p className={styles.subtitle}>
            Our faith is firmly rooted in the Word of God and centered on Jesus Christ.
          </p>
        </div>

        {/* Belief Cards */}
        <div className={styles.beliefsGrid}>
          
          <div className={styles.card}>
            <FaBible className={styles.icon} />
            <h3>The Holy Bible</h3>
            <p>
              We believe the Bible is the inspired, infallible Word of God and the final authority
              for faith, life, and doctrine.
            </p>
          </div>

          <div className={styles.card}>
            <FaCross className={styles.icon} />
            <h3>Jesus Christ</h3>
            <p>
              We believe in Jesus Christ as the Son of God, crucified and risen, the only Savior
              and Lord of all humanity.
            </p>
          </div>

          <div className={styles.card}>
            <FaPrayingHands className={styles.icon} />
            <h3>Salvation</h3>
            <p>
              We believe salvation is by grace through faith in Jesus Christ, not by works,
              but by God’s love and mercy.
            </p>
          </div>

          <div className={styles.card}>
            <FaHeart className={styles.icon} />
            <h3>Trinity</h3>
            <p>
              We believe in the triune God—Father, Son, and Holy Spirit—three persons in one
              essence, co-eternal and co-equal, working together in creation, redemption, and
              sanctification.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
