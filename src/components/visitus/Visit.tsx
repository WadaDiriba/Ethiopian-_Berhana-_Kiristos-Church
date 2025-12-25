import { useState } from "react";
import styles from "./visit.module.css";

export default function Visit() {
  const [searchQuery, setSearchQuery] = useState("");
  const [mapSrc, setMapSrc] = useState(
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.949019105284!2d38.73690771531384!3d9.03!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b854ababc123%3A0xabcdef1234567890!2sYour%20Church%20Name!5e0!3m2!1sen!2set!4v1700000000000!5m2!1sen!2set"
  );

  const handleSearch = () => {
    if (!searchQuery) return;

    // Encode the query for URL
    const encodedQuery = encodeURIComponent(searchQuery);

    // Update the Google Maps iframe URL dynamically
    const newMapSrc = `https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${encodedQuery}`;
    setMapSrc(newMapSrc);
  };

  return (
    <section className={styles.visitSection}>
      
      <div className={styles.visitContent}>
        <h2 className={styles.visitTitle}>Get  Ethiopian Berhane Kristos Church Near You</h2>
        <p className={styles.visitText}>
          We would love to welcome you to our church. Here is some information to help you plan your to get us.
        </p>

        {/* Search Input */}
        <div className={styles.searchContainer}>
          <input
            type="text"
            className={styles.searchInput}
            placeholder="Enter branch name or address..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className={styles.searchButton} onClick={handleSearch}>
            Search
          </button>
        </div>

        {/* Google Map */}
        <div className={styles.mapContainer}>
          <iframe
            src={mapSrc}
            title="Church Location"
            width="100%"
            height="400"
            style={{ border: 0, borderRadius: "15px" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
