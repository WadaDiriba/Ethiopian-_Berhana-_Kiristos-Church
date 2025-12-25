import { useState } from "react";
import styles from "./FAQ.module.css";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What is Ethiopian Berhane Kristos Church?",
    answer: "Ethiopian Berhane Kristos Church is a Christ-centered church committed to preaching the Gospel, nurturing spiritual growth, and serving the community."
  },
 {
    question: "Where are your church branches located?",
    answer:
      "Our church has branches in different locations. You can find the nearest branch using the Visit or Find Church section on our website."
  },
  {
    question: "What time are church services held?",
    answer:
      "Service times may vary by branch. Please visit the Campus or Visit page for detailed service schedules."
  },
  {
    question: "How can I become a member of the church?",
    answer:
      "You can become a member by attending services regularly, joining discipleship classes, and contacting church leadership for guidance."
  },
  {
    question: "How can I support the church?",
    answer:
      "You can support the church through prayer, volunteering, and financial giving via the Donate page."
  }
];

export default function FAQ() {
  const [openIndices, setOpenIndices] = useState<Set<number>>(new Set());

  const toggleFAQ = (index: number) => {
    setOpenIndices(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  // Allow multiple FAQs to be open at once
  

  
  return (
    <section className={styles.faqSection} aria-label="Frequently Asked Questions">
      <div className={styles.container}>
        <h2 className={styles.title}>Frequently Asked Questions</h2>
        <p className={styles.subtitle}>
          Here are answers to some common questions about our church.
        </p>

        

        <div className={styles.faqList}>
          {faqs.map((faq, index) => {
            const isOpen = openIndices.has(index);
            
            return (
              <div 
                key={index} 
                className={`${styles.faqItem} ${isOpen ? styles.active : ''}`}
                aria-expanded={isOpen}
              >
                <h3 className={styles.questionHeading}>
                  <button
                    className={styles.questionButton}
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                    id={`faq-question-${index}`}
                  >
                    <span className={styles.questionText}>
                      {faq.question}
                    </span>
                    <span className={styles.icon} aria-hidden="true">
                      {isOpen ? (
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                          <path d="M5 10H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                      ) : (
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                          <path d="M10 5V15M5 10H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                      )}
                    </span>
                  </button>
                </h3>

                <div
                  id={`faq-answer-${index}`}
                  role="region"
                  aria-labelledby={`faq-question-${index}`}
                  className={`${styles.answerContainer} ${isOpen ? styles.open : ''}`}
                >
                  <div className={styles.answerContent}>
                    <p>{faq.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}