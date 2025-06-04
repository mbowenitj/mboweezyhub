/* eslint-disable react/no-unescaped-entities */
'use client';

import Image from 'next/image'
import Lottie from "lottie-react";
import animationData from '../../../public/animations/tech-wave.json';
import styles from '../styles/components/Hero.module.css'

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
            We craft <strong>high-performance</strong> websites and <strong>scalable</strong> mobile apps that drive
            real business growth and customer engagement.
          </p>
          <div className={styles.ctaContainer}>
            <button
              onClick={scrollToContact}
              className={`${styles.ctaButton} ${styles.primary}`}
            >
              Get Started
              <span className={styles.arrow}>→</span>
            </button>
            <button className={`${styles.ctaButton} ${styles.secondary}`}>
              See Our Work
            </button>
          </div>
          <div className={styles.stats}>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>250+</div>
              <div className={styles.statLabel}>Happy Clients</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>100%</div>
              <div className={styles.statLabel}>Satisfaction</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>24/7</div>
              <div className={styles.statLabel}>Support</div>
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