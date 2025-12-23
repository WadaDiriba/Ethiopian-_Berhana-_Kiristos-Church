import { useState, useEffect } from "react";
import styles from "./Contact.module.css";

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    setIsSubmitting(false);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: "📍",
      title: "Visit Our Church",
      details: ["123 Faith Avenue", "Addis Ababa, Ethiopia", "P.O. Box 12345"],
      link: "#map"
    },
    {
      icon: "📞",
      title: "Call Us",
      details: ["+251 11 123 4567", "+251 91 123 4567"],
      link: "tel:+251111234567"
    },
    {
      icon: "✉️",
      title: "Email Us",
      details: ["info@ebkchurch.org", "support@ebkchurch.org"],
      link: "mailto:info@ebkchurch.org"
    },
    {
      icon: "⏰",
      title: "Service Hours",
      details: ["Sunday: 8AM - 12PM", "Wednesday: 6PM - 8PM", "Friday: 6PM - 8PM"],
      link: "#services"
    }
  ];

  const socialLinks = [
    { icon: "📘", label: "Facebook", url: "#" },
    { icon: "📷", label: "Instagram", url: "#" },
    { icon: "🐦", label: "Twitter", url: "#" },
    { icon: "📹", label: "YouTube", url: "#" }
  ];

  return (
    <section id="contact" className={styles.contactSection}>
      
      {/* Animated Background Elements */}
      <div className={styles.backgroundElements}>
        <div className={styles.crossElement}></div>
        <div className={styles.crossElement}></div>
        <div className={styles.crossElement}></div>
      </div>

      {/* Header Section */}
      <div className={styles.contactHeader}>
        <div className={styles.headerContent}>
          <span className={styles.sectionBadge}>Get in Touch</span>
          <h1 className={styles.mainTitle}>Contact Ethiopian Berhana Kiristos Church</h1>
          <p className={styles.subtitle}>We'd love to hear from you. Reach out with your questions, prayer requests, or visit us for worship.</p>
        </div>
      </div>

      <div className={styles.contactContainer}>
        {/* Left Column - Contact Information */}
        <div className={styles.infoColumn}>
          <div className={styles.infoCard}>
            <div className={styles.cardHeader}>
              <span className={styles.cardIcon}>🙏</span>
              <h2 className={styles.cardTitle}>Church Information</h2>
              <p className={styles.cardDescription}>Connect with us through any of these channels</p>
            </div>

            <div className={styles.infoGrid}>
              {contactInfo.map((info, index) => (
                <div 
                  key={index} 
                  className={styles.infoItem}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={styles.infoIcon}>{info.icon}</div>
                  <div className={styles.infoContent}>
                    <h3 className={styles.infoTitle}>{info.title}</h3>
                    {info.details.map((detail, i) => (
                      <p key={i} className={styles.infoDetail}>{detail}</p>
                    ))}
                  </div>
                  <a 
                    href={info.link} 
                    className={styles.infoLink}
                    aria-label={`Learn more about ${info.title}`}
                  >
                    <span className={styles.linkArrow}>→</span>
                  </a>
                </div>
              ))}
            </div>

            {/* Social Media */}
            <div className={styles.socialSection}>
              <h3 className={styles.socialTitle}>Follow Us</h3>
              <div className={styles.socialGrid}>
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className={styles.socialLink}
                    aria-label={`Follow us on ${social.label}`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <span className={styles.socialIcon}>{social.icon}</span>
                    <span className={styles.socialLabel}>{social.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Map Preview */}
          <div className={styles.mapPreview}>
            <div className={styles.mapPlaceholder}>
              <div className={styles.mapOverlay}>
                <span className={styles.mapText}>📍 Our Location</span>
                <button className={styles.mapButton}>View on Google Maps</button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Contact Form */}
        <div className={styles.formColumn}>
          <div className={styles.formCard}>
            <div className={styles.formHeader}>
              <h2 className={styles.formTitle}>Send Us a Message</h2>
              <p className={styles.formDescription}>Fill out the form below and we'll get back to you shortly</p>
            </div>

            {isSubmitted ? (
              <div className={styles.successMessage}>
                <div className={styles.successIcon}>✓</div>
                <h3 className={styles.successTitle}>Message Sent Successfully!</h3>
                <p className={styles.successText}>Thank you for contacting us. We'll respond within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.contactForm}>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="name" className={styles.formLabel}>
                      <span className={styles.labelText}>Full Name</span>
                      <span className={styles.required}>*</span>
                    </label>
                    <div className={styles.inputWrapper}>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={styles.formInput}
                        placeholder="John Doe"
                        required
                      />
                      <span className={styles.inputIcon}>👤</span>
                    </div>
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="email" className={styles.formLabel}>
                      <span className={styles.labelText}>Email Address</span>
                      <span className={styles.required}>*</span>
                    </label>
                    <div className={styles.inputWrapper}>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={styles.formInput}
                        placeholder="john@example.com"
                        required
                      />
                      <span className={styles.inputIcon}>✉️</span>
                    </div>
                  </div>
                </div>

                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="phone" className={styles.formLabel}>
                      <span className={styles.labelText}>Phone Number</span>
                    </label>
                    <div className={styles.inputWrapper}>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={styles.formInput}
                        placeholder="+251 91 123 4567"
                      />
                      <span className={styles.inputIcon}>📞</span>
                    </div>
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="subject" className={styles.formLabel}>
                      <span className={styles.labelText}>Subject</span>
                      <span className={styles.required}>*</span>
                    </label>
                    <div className={styles.inputWrapper}>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className={styles.formSelect}
                        required
                      >
                        <option value="">Select a subject</option>
                        <option value="prayer">Prayer Request</option>
                        <option value="membership">Church Membership</option>
                        <option value="event">Event Inquiry</option>
                        <option value="donation">Donation Question</option>
                        <option value="other">Other</option>
                      </select>
                      <span className={styles.selectIcon}>▼</span>
                    </div>
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="message" className={styles.formLabel}>
                    <span className={styles.labelText}>Your Message</span>
                    <span className={styles.required}>*</span>
                  </label>
                  <div className={styles.textareaWrapper}>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className={styles.formTextarea}
                      placeholder="Type your message here..."
                      rows={5}
                      required
                    />
                    <span className={styles.textareaIcon}>💬</span>
                  </div>
                </div>

                <div className={styles.formFooter}>
                  <button 
                    type="submit" 
                    className={styles.submitButton}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span className={styles.spinner}></span>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <span className={styles.buttonArrow}>→</span>
                      </>
                    )}
                  </button>
                  
                  <p className={styles.privacyNote}>
                    By submitting this form, you agree to our{" "}
                    <a href="#privacy" className={styles.privacyLink}>Privacy Policy</a>
                  </p>
                </div>
              </form>
            )}

            {/* Quick Contact */}
            <div className={styles.quickContact}>
              <div className={styles.quickItem}>
                <span className={styles.quickIcon}>📞</span>
                <div>
                  <span className={styles.quickLabel}>Emergency Contact</span>
                  <a href="tel:+251911234567" className={styles.quickValue}>+251 91 123 4567</a>
                </div>
              </div>
              <div className={styles.quickItem}>
                <span className={styles.quickIcon}>⏰</span>
                <div>
                  <span className={styles.quickLabel}>Response Time</span>
                  <span className={styles.quickValue}>Within 24 hours</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}