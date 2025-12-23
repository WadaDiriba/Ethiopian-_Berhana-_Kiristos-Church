// import { useState, useEffect, useRef } from "react";
// import styles from "./Testimonials.module.css";


// import { FiChevronLeft, FiChevronRight, FiStar, FiQuote } from "react-icons/fi";
// import { motion, AnimatePresence } from "framer-motion";

// interface Testimonial {
//   id: number;
//   name: string;
//   role: string;
//   content: string;
//   image?: string;
//   rating: number;
//   date: string;
//   category: string;
//   featured: boolean;
// }

// export default function Testimonials() {
//   const [testimonials] = useState<Testimonial[]>([
//     {
//       id: 1,
//       name: "Alemayehu Kebede",
//       role: "Senior Pastor, 15 Years",
//       content: "The transformation I've witnessed in this congregation over the past decade is nothing short of miraculous. Our community has grown not just in numbers, but in depth of faith and commitment to service.",
//       rating: 5,
//       date: "March 2024",
//       category: "leadership",
//       featured: true
//     },
//     {
//       id: 2,
//       name: "Dr. Selamawit Bekele",
//       role: "Medical Director & Ministry Leader",
//       content: "Integrating faith with healthcare through our medical outreach has been life-changing. The church's support enables us to serve thousands annually, bringing both physical and spiritual healing.",
//       rating: 5,
//       date: "February 2024",
//       category: "ministry",
//       featured: true
//     },
//     {
//       id: 3,
//       name: "Mikael Tsegaye",
//       role: "Tech Entrepreneur & Youth Mentor",
//       content: "Our digital ministry initiative has reached young professionals across Ethiopia. The innovative approach to faith in the digital age is groundbreaking and desperately needed.",
//       rating: 5,
//       date: "January 2024",
//       category: "innovation",
//       featured: true
//     },
//     {
//       id: 4,
//       name: "Hirut Wolde",
//       role: "Education Ministry Director",
//       content: "Developing our biblical studies curriculum has been a divine calling. Seeing students transform as they engage deeply with Scripture reaffirms our mission every day.",
//       rating: 5,
//       date: "December 2023",
//       category: "education",
//       featured: false
//     },
//     {
//       id: 5,
//       name: "Pastor Daniel Girma",
//       role: "International Relations",
//       content: "Our global partnerships have flourished under visionary leadership. The international impact of our ministry continues to expand, crossing cultural and geographical boundaries.",
//       rating: 5,
//       date: "November 2023",
//       category: "global",
//       featured: false
//     },
//     {
//       id: 6,
//       name: "Tigist Assefa",
//       role: "Worship Arts Director",
//       content: "The fusion of traditional Ethiopian worship with contemporary expressions has created a uniquely powerful worship experience that resonates across generations.",
//       rating: 5,
//       date: "October 2023",
//       category: "worship",
//       featured: false
//     },
//     {
//       id: 7,
//       name: "Yonas Hailu",
//       role: "Community Development",
//       content: "Our sustainable development projects have transformed entire communities. The holistic approach to ministry addresses both spiritual and practical needs effectively.",
//       rating: 5,
//       date: "September 2023",
//       category: "community",
//       featured: false
//     },
//     {
//       id: 8,
//       name: "Sara Mengistu",
//       role: "Family Counseling Director",
//       content: "The family restoration programs have saved countless marriages and strengthened family units. Biblical principles applied with compassion produce remarkable results.",
//       rating: 5,
//       date: "August 2023",
//       category: "family",
//       featured: false
//     }
//   ]);

//   const [activeIndex, setActiveIndex] = useState(0);
//   const [direction, setDirection] = useState<"right" | "left">("right");
//   const [isHovered, setIsHovered] = useState(false);
//   const containerRef = useRef<HTMLDivElement>(null);
//   const featured = testimonials.filter(t => t.featured);
//   const regular = testimonials.filter(t => !t.featured);

//   useEffect(() => {
//     if (isHovered) return;
    
//     const interval = setInterval(() => {
//       setDirection("right");
//       setActiveIndex(prev => (prev + 1) % featured.length);
//     }, 6000);

//     return () => clearInterval(interval);
//   }, [isHovered, featured.length]);

//   const nextTestimonial = () => {
//     setDirection("right");
//     setActiveIndex(prev => (prev + 1) % featured.length);
//   };

//   const prevTestimonial = () => {
//     setDirection("left");
//     setActiveIndex(prev => prev === 0 ? featured.length - 1 : prev - 1);
//   };

//   const handleDotClick = (index: number) => {
//     setDirection(index > activeIndex ? "right" : "left");
//     setActiveIndex(index);
//   };

//   const renderStars = (rating: number) => {
//     return (
//       <div className={styles.starsContainer}>
//         {[...Array(5)].map((_, i) => (
//           <FiStar 
//             key={i} 
//             className={`${styles.star} ${i < rating ? styles.starFilled : ''}`}
//           />
//         ))}
//       </div>
//     );
//   };

//   return (
//     <section id="testimonial" className={styles.testimonialsSection}>
      
//       {/* Animated Background */}
//       <div className={styles.animatedBackground}>
//         <div className={styles.lightBeam}></div>
//         <div className={styles.lightBeam}></div>
//         <div className={styles.lightBeam}></div>
//         <div className={styles.floatingCross}></div>
//         <div className={styles.floatingCross}></div>
//       </div>

//       {/* Header */}
//       <div className={styles.sectionHeader}>
//         <div className={styles.headerContent}>
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className={styles.sectionTag}
//           >
//             <FiQuote className={styles.quoteIcon} />
//             <span>Testimonials of Faith</span>
//           </motion.div>
          
//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className={styles.mainTitle}
//           >
//             Voices That Shape <span className={styles.highlight}>Our Legacy</span>
//           </motion.h1>
          
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.4 }}
//             className={styles.subtitle}
//           >
//             Hear from leaders and members whose lives have been transformed through our ministry
//           </motion.p>
//         </div>
//       </div>

//       {/* Featured Testimonials Carousel */}
//       <div className={styles.featuredSection}>
//         <div className={styles.featuredContainer}>
//           <button 
//             className={styles.navButton}
//             onClick={prevTestimonial}
//             aria-label="Previous testimonial"
//           >
//             <FiChevronLeft />
//           </button>

//           <AnimatePresence mode="wait" custom={direction}>
//             <motion.div
//               key={activeIndex}
//               custom={direction}
//               initial={{ opacity: 0, x: direction === "right" ? 100 : -100 }}
//               animate={{ opacity: 1, x: 0 }}
//               exit={{ opacity: 0, x: direction === "right" ? -100 : 100 }}
//               transition={{ duration: 0.6, ease: "easeInOut" }}
//               className={styles.featuredCard}
//               onMouseEnter={() => setIsHovered(true)}
//               onMouseLeave={() => setIsHovered(false)}
//             >
//               <div className={styles.featuredContent}>
//                 <div className={styles.quoteMark}>
//                   <FiQuote />
//                 </div>
                
//                 <div className={styles.testimonialTextWrapper}>
//                   <p className={styles.testimonialText}>
//                     {featured[activeIndex]?.content}
//                   </p>
//                 </div>

//                 <div className={styles.authorSection}>
//                   <div className={styles.authorInfo}>
//                     <h3 className={styles.authorName}>
//                       {featured[activeIndex]?.name}
//                     </h3>
//                     <p className={styles.authorRole}>
//                       {featured[activeIndex]?.role}
//                     </p>
//                     <div className={styles.authorMeta}>
//                       <span className={styles.authorDate}>
//                         {featured[activeIndex]?.date}
//                       </span>
//                       {renderStars(featured[activeIndex]?.rating || 5)}
//                     </div>
//                   </div>
                  
//                   <div className={styles.authorVisual}>
//                     <div className={styles.avatarCircle}>
//                       <span className={styles.avatarInitial}>
//                         {featured[activeIndex]?.name.charAt(0)}
//                       </span>
//                     </div>
//                     <div className={styles.avatarRing}></div>
//                   </div>
//                 </div>
//               </div>

//               {/* Glow Effect */}
//               <div className={styles.cardGlow}></div>
//             </motion.div>
//           </AnimatePresence>

//           <button 
//             className={styles.navButton}
//             onClick={nextTestimonial}
//             aria-label="Next testimonial"
//           >
//             <FiChevronRight />
//           </button>
//         </div>

//         {/* Pagination Dots */}
//         <div className={styles.pagination}>
//           {featured.map((_, index) => (
//             <button
//               key={index}
//               className={`${styles.dot} ${index === activeIndex ? styles.dotActive : ''}`}
//               onClick={() => handleDotClick(index)}
//               aria-label={`Go to testimonial ${index + 1}`}
//             />
//           ))}
//         </div>
//       </div>

//       {/* Testimonials Grid */}
//       <div className={styles.testimonialsGridSection}>
//         <div className={styles.gridHeader}>
//           <h2 className={styles.gridTitle}>More Testimonies</h2>
//           <p className={styles.gridSubtitle}>Community voices sharing their journey</p>
//         </div>

//         <div className={styles.testimonialsGrid} ref={containerRef}>
//           {regular.map((testimonial, index) => (
//             <motion.div
//               key={testimonial.id}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: index * 0.1 }}
//               className={styles.testimonialCard}
//               whileHover={{ y: -10, transition: { duration: 0.3 } }}
//             >
//               <div className={styles.cardContent}>
//                 <div className={styles.cardHeader}>
//                   <div className={styles.cardCategory}>
//                     {testimonial.category.toUpperCase()}
//                   </div>
//                   {renderStars(testimonial.rating)}
//                 </div>

//                 <div className={styles.cardQuote}>
//                   <FiQuote className={styles.cardQuoteIcon} />
//                   <p className={styles.cardText}>
//                     {testimonial.content}
//                   </p>
//                 </div>

//                 <div className={styles.cardAuthor}>
//                   <div className={styles.authorAvatar}>
//                     {testimonial.name.charAt(0)}
//                   </div>
//                   <div className={styles.authorDetails}>
//                     <h4 className={styles.cardName}>{testimonial.name}</h4>
//                     <p className={styles.cardRole}>{testimonial.role}</p>
//                     <span className={styles.cardDate}>{testimonial.date}</span>
//                   </div>
//                 </div>
//               </div>

//               {/* Hover Effects */}
//               <div className={styles.cardHoverGlow}></div>
//               <div className={styles.cardBorderAnimation}></div>
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       {/* Statistics Banner */}
//       <motion.div 
//         initial={{ opacity: 0, y: 40 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         className={styles.statsBanner}
//       >
//         <div className={styles.statsContainer}>
//           <div className={styles.statItem}>
//             <motion.div 
//               initial={{ scale: 0 }}
//               whileInView={{ scale: 1 }}
//               transition={{ type: "spring", stiffness: 200 }}
//               className={styles.statCircle}
//             >
//               <span className={styles.statNumber}>15K+</span>
//             </motion.div>
//             <p className={styles.statLabel}>Lives Transformed</p>
//           </div>
          
//           <div className={styles.statItem}>
//             <motion.div 
//               initial={{ scale: 0 }}
//               whileInView={{ scale: 1 }}
//               transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
//               className={styles.statCircle}
//             >
//               <span className={styles.statNumber}>85+</span>
//             </motion.div>
//             <p className={styles.statLabel}>Ministries Active</p>
//           </div>
          
//           <div className={styles.statItem}>
//             <motion.div 
//               initial={{ scale: 0 }}
//               whileInView={{ scale: 1 }}
//               transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
//               className={styles.statCircle}
//             >
//               <span className={styles.statNumber}>100%</span>
//             </motion.div>
//             <p className={styles.statLabel}>Faith Driven</p>
//           </div>
          
//           <div className={styles.statItem}>
//             <motion.div 
//               initial={{ scale: 0 }}
//               whileInView={{ scale: 1 }}
//               transition={{ type: "spring", stiffness: 200, delay: 0.3 }}
//               className={styles.statCircle}
//             >
//               <span className={styles.statNumber}>24/7</span>
//             </motion.div>
//             <p className={styles.statLabel}>Prayer Support</p>
//           </div>
//         </div>
//       </motion.div>

//       {/* CTA Section */}
//       <div className={styles.ctaSection}>
//         <motion.div
//           initial={{ opacity: 0, scale: 0.9 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           viewport={{ once: true }}
//           className={styles.ctaCard}
//         >
//           <div className={styles.ctaContent}>
//             <h2 className={styles.ctaTitle}>Share Your Journey</h2>
//             <p className={styles.ctaText}>
//               Has God worked through our ministry in your life? We'd be honored to hear your testimony.
//             </p>
//             <div className={styles.ctaButtons}>
//               <button className={styles.primaryCta}>
//                 <span>Share Your Story</span>
//                 <FiChevronRight className={styles.ctaIcon} />
//               </button>
//               <button className={styles.secondaryCta}>
//                 Read All Testimonies
//               </button>
//             </div>
//           </div>
//           <div className={styles.ctaVisual}>
//             <div className={styles.ctaGlow}></div>
//             <div className={styles.ctaPattern}></div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }




export default function Testmonial() {
  return (
    <div>
      Testmonial Component
    </div>
  );
}