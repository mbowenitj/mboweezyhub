/* eslint-disable react/no-unescaped-entities */

import Image from 'next/image';
import Lottie from "lottie-react";
import animationData from '../../../public/animations/tech-wave.json';
import styles from '../styles/components/Hero.module.css';
import { motion } from 'framer-motion';
import AnimatedNumber from './AnimatedNumber';

const scrollToContact = () => {
  const contactSection = document.getElementById('contact');
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' });
  }
};

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.backgroundAnimation}>
        <Lottie animationData={animationData} loop={true} />
      </div>
      <div className={styles.container}>
        <div className={styles.heroContent}>
          <h1>
            <span>Transform Your Business</span> with Next-Gen <span>Digital Solutions</span>
          </h1>
          <p className={styles.subtitle}>
            We build <strong>custom-tailored</strong> websites and mobile apps with
            <strong> dedicated attention</strong> to each client's unique needs.
          </p>
          <div className={styles.ctaContainer}>
            <button
              onClick={scrollToContact}
              className={`${styles.ctaButton} ${styles.primary}`}
            >
              Get Started
              <span className={styles.arrow}>→</span>
            </button>
          </div>

          <div className={styles.statsContainer}>
            <div className={styles.stats}>
              <motion.div
                className={styles.statItem}
                whileHover={{ y: -3 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <div className={styles.statIcon}>🌱</div>
                <div className={styles.statNumber}>Growing</div>
                <div className={styles.statLabel}>Digital Impact</div>
              </motion.div>

              <motion.div
                className={styles.statItem}
                whileHover={{ y: -3 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <div className={styles.statIcon}>⭐</div>
                <div className={styles.statNumber}>High</div>
                <div className={styles.statLabel}>Client Satisfaction</div>
              </motion.div>

              <motion.div
                className={styles.statItem}
                whileHover={{ y: -3 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <div className={styles.statIcon}>💡</div>
                <div className={styles.statNumber}>Driven</div>
                <div className={styles.statLabel}>By Innovation</div>
              </motion.div>
            </div>
          </div>
        </div>
        <div className={styles.heroImage}>
          <Image
            src="/images/banner1.svg"
            alt="Digital Solutions Illustration"
            width={600}
            height={500}
            priority
            className={styles.floating}
          />
          <div className={styles.glow}></div>
        </div>
      </div>
    </section>
  )
}