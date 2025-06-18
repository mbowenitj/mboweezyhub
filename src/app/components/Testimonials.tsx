import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import testimonials, { Testimonial } from '../data/testimonials';
import styles from '../styles/components/Testimonials.module.css';

const Testimonials = () => {
  const [activeIndices, setActiveIndices] = useState([0, 1, 2]);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Enhanced animation variants with 3D tilt effect
  const cardVariants = {
    left: { 
      x: '-75%', 
      scale: 0.85, 
      opacity: 0.9, 
      zIndex: 1,
      rotateY: -15,
      boxShadow: '0 15px 30px -10px rgba(0,0,0,0.1)'
    },
    center: { 
      x: '0%', 
      scale: 1, 
      opacity: 1, 
      zIndex: 3,
      rotateY: 0,
      boxShadow: '0 25px 50px -15px rgba(79, 70, 229, 0.3)'
    },
    right: { 
      x: '75%', 
      scale: 0.85, 
      opacity: 0.9, 
      zIndex: 1,
      rotateY: 15,
      boxShadow: '0 15px 30px -10px rgba(0,0,0,0.1)'
    }
  };

  const transition = {
    type: 'spring',
    stiffness: 400,
    damping: 30,
    mass: 1,
    duration: 0.6
  };

  // Auto-rotate every 5 seconds
  useEffect(() => {
    if (!isPaused && testimonials.length > 3) {
      intervalRef.current = setInterval(() => {
        setActiveIndices(prev => [
          prev[1],
          prev[2],
          (prev[2] + 1) % testimonials.length
        ]);
      }, 5000);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPaused]);

  const nextSlide = () => {
    setActiveIndices(prev => [
      prev[1],
      prev[2],
      (prev[2] + 1) % testimonials.length
    ]);
    resetTimer();
  };

  const prevSlide = () => {
    setActiveIndices(prev => [
      (prev[0] - 1 + testimonials.length) % testimonials.length,
      prev[0],
      prev[1]
    ]);
    resetTimer();
  };

  const resetTimer = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (!isPaused && testimonials.length > 3) {
      intervalRef.current = setInterval(() => {
        setActiveIndices(prev => [
          prev[1],
          prev[2],
          (prev[2] + 1) % testimonials.length
        ]);
      }, 5000);
    }
  };

  const goToSlide = (index: number) => {
    setActiveIndices([
      (index - 1 + testimonials.length) % testimonials.length,
      index,
      (index + 1) % testimonials.length
    ]);
    resetTimer();
  };

  return (
    <section 
      id="testimonials" 
      className={styles.testimonials}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className={styles.container}>
        <div className={styles.header}>
          <motion.span 
            className={styles.subtitle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Client Voices
          </motion.span>
          <motion.h2 
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Trusted by Businesses Worldwide
          </motion.h2>
          <motion.div 
            className={styles.divider}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          />
        </div>

        <div className={styles.carouselWrapper}>
          <motion.button 
            onClick={prevSlide} 
            className={styles.navButton} 
            aria-label="Previous testimonial"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.button>

          <div className={styles.carouselContainer}>
            {/* Left Card */}
            <motion.div
              key={`left-${activeIndices[0]}`}
              className={`${styles.card} ${styles.left}`}
              variants={cardVariants}
              initial="left"
              animate="left"
              transition={transition}
              whileHover={{ scale: 0.95 }}
            >
              <CardContent testimonial={testimonials[activeIndices[0]]} />
            </motion.div>

            {/* Center Card */}
            <motion.div
              key={`center-${activeIndices[1]}`}
              className={`${styles.card} ${styles.center}`}
              variants={cardVariants}
              initial="center"
              animate="center"
              transition={transition}
              whileHover={{ scale: 1.02 }}
            >
              <CardContent testimonial={testimonials[activeIndices[1]]} />
            </motion.div>

            {/* Right Card */}
            <motion.div
              key={`right-${activeIndices[2]}`}
              className={`${styles.card} ${styles.right}`}
              variants={cardVariants}
              initial="right"
              animate="right"
              transition={transition}
              whileHover={{ scale: 0.95 }}
            >
              <CardContent testimonial={testimonials[activeIndices[2]]} />
            </motion.div>
          </div>

          <motion.button 
            onClick={nextSlide} 
            className={styles.navButton} 
            aria-label="Next testimonial"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.button>
        </div>

        <div className={styles.dots}>
          {testimonials.map((_, i) => (
            <motion.button
              key={i}
              onClick={() => goToSlide(i)}
              className={`${styles.dot} ${i === activeIndices[1] ? styles.activeDot : ''}`}
              aria-label={`View testimonial ${i + 1}`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const CardContent = ({ testimonial }: { testimonial: Testimonial }) => (
  <>
    <div className={styles.quoteMark}>&quot;</div>
    <div className={styles.cardContent}>
      <p className={styles.text}>{testimonial.text}</p>
      <div className={styles.rating}>
        {Array.from({ length: 5 }).map((_, i) => (
          <motion.span 
            key={i} 
            className={i < testimonial.rating ? styles.starFilled : styles.starEmpty}
            whileHover={{ scale: 1.2 }}
          >
            {i < testimonial.rating ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
              </svg>
            )}
          </motion.span>
        ))}
      </div>
      <div className={styles.client}>
        <motion.div 
          className={styles.clientInitial}
          style={{ background: testimonial.avatarColor }}
          whileHover={{ rotate: 360, scale: 1.1 }}
          transition={{ duration: 0.6 }}
        >
          {testimonial.name.charAt(0)}
        </motion.div>
        <div className={styles.clientInfo}>
          <h3>{testimonial.name}</h3>
          <p>{testimonial.company}</p>
        </div>
      </div>
    </div>
  </>
);

export default Testimonials;