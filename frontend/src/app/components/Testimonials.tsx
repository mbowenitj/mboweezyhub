'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, Transition } from 'framer-motion';
import Image from 'next/image';
import styles from '../styles/components/Testimonials.module.css';
import AddReview from './AddReviews';

interface Testimonial {
  name: string;
  text: string;
  rating: number;
  avatarColor: string;
  profile_photo_url?: string;
}

interface GoogleReview {
  author_name: string;
  text: string;
  rating: number;
  profile_photo_url?: string;
  time: number;
}

const getRandomColor = () => {
  const colors = ['#6366f1', '#ec4899', '#10b981', '#f59e0b', '#3b82f6'];
  return colors[Math.floor(Math.random() * colors.length)];
};

const mapReviewsToTestimonials = (reviews: GoogleReview[]): Testimonial[] =>
  reviews.map(r => ({
    name: r.author_name,
    text: r.text,
    rating: r.rating,
    avatarColor: getRandomColor(),
    profile_photo_url: r.profile_photo_url
  }));

const Testimonials = ({ placeId = process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID }) => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [activeIndices, setActiveIndices] = useState<[number, number, number]>([0, 1, 2]);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

  const fetchReviews = useCallback(async () => {
    try {
      if (!baseUrl || !placeId) {
        throw new Error(`Missing required parameters:
          baseUrl: ${baseUrl}
          placeId: ${placeId}`);
      }

      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000); // 10s timeout

      const res = await fetch(`${baseUrl}/api/reviews?placeId=${placeId}`, {
        signal: controller.signal,
        headers: {
          'Content-Type': 'application/json',
        }
      });

      clearTimeout(timeoutId);

      if (!res.ok) {
        const errorBody = await res.text().catch(() => '');
        throw new Error(`HTTP ${res.status} - ${res.statusText}\n${errorBody}`);
      }

      const data = await res.json();

      if (!data.result || !Array.isArray(data.result.reviews)) {
        console.warn('Unexpected API response structure:', data);
        return setTestimonials([]);
      }

      const testimonials = mapReviewsToTestimonials(data.result.reviews);
      setTestimonials(testimonials);

    } catch (err) {
      console.error('Fetch error:', err);
      setTestimonials([]);
    }
  }, [baseUrl, placeId]);

  useEffect(() => {
    fetchReviews();
  }, [fetchReviews]);

  const resetTimer = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (!isPaused && testimonials.length > 3) {
      intervalRef.current = setInterval(() => {
        setActiveIndices(([, b, c]) => [b, c, (c + 1) % testimonials.length]);
      }, 5000);
    }
  }, [isPaused, testimonials.length]);

  useEffect(() => {
    resetTimer();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [resetTimer]);

  const nextSlide = (manual = true) => {
    setActiveIndices(([, b, c]) => [b, c, (c + 1) % testimonials.length]);
    if (manual) resetTimer();
  };

  const prevSlide = () => {
    setActiveIndices(([a, b]) => [
      (a - 1 + testimonials.length) % testimonials.length,
      a,
      b
    ]);
    resetTimer();
  };

  const goToSlide = (index: number) => {
    setActiveIndices([
      (index - 1 + testimonials.length) % testimonials.length,
      index,
      (index + 1) % testimonials.length
    ]);
    resetTimer();
  };

  const cardVariants = {
    left: { x: '-75%', scale: 0.85, opacity: 0.9, zIndex: 1, rotateY: -15 },
    center: { x: '0%', scale: 1, opacity: 1, zIndex: 3, rotateY: 0 },
    right: { x: '75%', scale: 0.85, opacity: 0.9, zIndex: 1, rotateY: 15 }
  };

  const transition: Transition = {
    type: 'spring',
    stiffness: 400,
    damping: 30,
    duration: 0.6
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
          <motion.span className={styles.subtitle} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            Client Voices
          </motion.span>
          <motion.h2 className={styles.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} viewport={{ once: true }}>
            Trusted by Businesses Worldwide
          </motion.h2>
          <motion.div className={styles.divider} initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} transition={{ duration: 0.8, delay: 0.2 }} viewport={{ once: true }} />
        </div>

        <div className={styles.carouselWrapper}>
          <motion.button onClick={prevSlide} className={styles.navButton} aria-label="Previous testimonial" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <svg width="24" height="24"><path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </motion.button>

          <div className={styles.carouselContainer}>
            {activeIndices.map((index, pos) => {
              const variantKey = pos === 0 ? 'left' : pos === 1 ? 'center' : 'right';
              const testimonial = testimonials[index];
              if (!testimonial) return null;
              return (
                <motion.div
                  key={index}
                  className={`${styles.card} ${styles[variantKey]}`}
                  variants={cardVariants}
                  initial={variantKey}
                  animate={variantKey}
                  transition={transition}
                >
                  <CardContent testimonial={testimonial} />
                </motion.div>
              );
            })}
          </div>

          <motion.button onClick={() => nextSlide()} className={styles.navButton} aria-label="Next testimonial" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <svg width="24" height="24"><path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
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

        <AddReview placeId={placeId!} />
      </div>
    </section>
  );
};

const CardContent = ({ testimonial }: { testimonial: Testimonial }) => {
  if (!testimonial) return null;

  return (
    <div className={styles.cardContent}>
      <div className={styles.cardHeader}>
        <div className={styles.clientTop}>
          {testimonial.profile_photo_url ? (
            <Image
              src={testimonial.profile_photo_url}
              alt={testimonial.name}
              width={48}
              height={48}
              unoptimized
              onError={(e) => {
                const img = e.target as HTMLImageElement;
                img.style.display = 'none';
              }}
            />
          ) : (
            <div className={styles.clientInitial} style={{ backgroundColor: testimonial.avatarColor }}>
              {testimonial.name.charAt(0)}
            </div>
          )}
          <div className={styles.clientDetails}>
            <h3>{testimonial.name}</h3>
            <div className={styles.rating}>
              {[...Array(5)].map((_, i) => (
                <motion.span
                  key={i}
                  className={i < testimonial.rating ? styles.starFilled : styles.starEmpty}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                  </svg>
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.quoteMark}>&quot;</div>
      <p className={styles.text}>{testimonial.text}</p>
    </div>
  );
};

export default Testimonials;
