import { useState } from "react";
import styles from "./Contact.module.css";


import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaClock,
 
  FaInbox,
  
} from "react-icons/fa";


export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setError("");
  };


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const mailtoLink = `mailto:EBKC12@Yahoo.com
        ?subject=${encodeURIComponent(formData.subject)}
        &body=${encodeURIComponent(
          `Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone || "Not provided"}

Message:
${formData.message}`
        )}`;

      window.location.href = mailtoLink;

      setIsSubmitted(true);

      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });

      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (err) {
      console.error(err);
      setError("Unable to open email app. Please contact us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    { icon: <FaMapMarkerAlt />, label: "3P54+GWH, Addis Ababa" },
    { icon: <FaPhoneAlt />, label: "+251 11 123 4567", href: "tel:+251111234567" },
    { icon: <FaInbox />, label: "EBKC12@Yahoo.com", href: "mailto:EBKC12@Yahoo.com" },
    { icon: <FaClock />, label: "Mon-Fri: 2:00 AM – 11:00 AM" }
  ];

  return (
    <section id="contact" className={styles.contactSection}>
      {/* Header */}
      <div className={styles.contactHeader}>
        <div className={styles.headerContent}>
          <div className={styles.headerBadge}>
            <div className={styles.badgeIcon}></div>
            <span>Contact Head Office</span>
          </div>
         
          <p className={styles.subtitle}>
            Have questions, prayer requests, or need spiritual guidance? We're here to help.
          </p>
        </div>
      </div>

      <div className={styles.contactContainer}>
        {/* Left Column */}
        <div className={styles.infoColumn}>
          <div className={styles.infoCard}>
            <div className={styles.cardHeader}>
              <h2 className={styles.cardTitle}>Contact Information</h2>
              <p className={styles.cardSubtitle}>Direct ways to reach us</p>
            </div>

            <div className={styles.infoList}>
              {contactInfo.map((info, index) => (
                <div key={index} className={styles.infoItem}>
                  <div className={styles.infoIcon}>{info.icon}</div>
                  {info.href ? (
                    <a
                      href={info.href}
                      className={styles.infoText}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {info.label}
                    </a>
                  ) : (
                    <span className={styles.infoText}>{info.label}</span>
                  )}
                </div>
              ))}
            </div>

            <div className={styles.emergencyBox}>
              <div className={styles.emergencyIcon}></div>
              <div>
                <h3 className={styles.emergencyTitle}>Emergency Contact</h3>
                <a href="tel:+251911234567" className={styles.emergencyNumber}>
                  +251 91 123 4567
                </a>
              </div>
            </div>
          </div>

          <div className={styles.responseTime}>
            <div className={styles.timeIcon}></div>
            <div>
              <h3>Response Time</h3>
              <p>
                We typically respond within <strong>24 hours</strong> during business days
              </p>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className={styles.formColumn}>
          <div className={styles.formCard}>
            <div className={styles.formHeader}>
              <h2 className={styles.formTitle}>Send Us a Message</h2>
              <p className={styles.formDescription}>
                Fill out this form and we'll get back to you promptly
              </p>
            </div>

            {isSubmitted ? (
              <div className={styles.successMessage}>
                <h3 className={styles.successTitle}>Message Ready to Send!</h3>
                <p className={styles.successText}>
                  Your email app has been opened. Please click <strong>Send</strong>.
                </p>
                <button
                  className={styles.sendAnother}
                  onClick={() => setIsSubmitted(false)}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.contactForm}>
                {error && (
                  <div className={styles.errorMessage}>
                    <span className={styles.errorIcon}>⚠️</span>
                    {error}
                  </div>
                )}

                <div className={styles.formGrid}>
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={styles.formInput}
                  />

                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={styles.formInput}
                  />

                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    className={styles.formInput}
                  />

                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className={styles.formSelect}
                  >
                    <option value="">Select a topic</option>
                    <option value="Prayer Request">Prayer Request</option>
                    <option value="Church Membership">Church Membership</option>
                    <option value="Event Inquiry">Event Inquiry</option>
                    <option value="Donation Question">Donation Question</option>
                    <option value="Spiritual Guidance">Spiritual Guidance</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <textarea
                  name="message"
                  rows={5}
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className={styles.formTextarea}
                />

                <button
                  type="submit"
                  className={styles.submitButton}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Opening Email..." : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
