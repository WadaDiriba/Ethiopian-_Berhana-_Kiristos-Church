import styles from "./history.module.css";

export default function History() {
  return (
    <section className={styles.historySection}>
      <div className={styles.container}>
        <h1>Our History</h1>
        <p>
          Ethiopian Berhane Kristos Church was founded to spread the Gospel and nurture the spiritual growth of our community.
          Over the years, we have grown and established several ministries to serve people of all ages.
        </p>
        <p>
          [Add more detailed history here…]
        </p>
      </div>
    </section>
  );
}
