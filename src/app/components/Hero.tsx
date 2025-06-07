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
            We build <strong>custom-tailored</strong> websites and mobile apps with
            <strong> dedicated attention</strong> to each client's unique needs and goals.
          </p>
          <div className={styles.ctaContainer}>
            <button
              onClick={scrollToContact}
              className={`${styles.ctaButton} ${styles.primary}`}
            >
              Get Started
              <span className={styles.arrow}>→</span>
            </button>
            {/* <button className={`${styles.ctaButton} ${styles.secondary}`}>
              See Our Work
            </button> */}
          </div>
          <div className={styles.stats}>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>1:1</div>
              <div className={styles.statLabel}>Partner Attention</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>100%</div>
              <div className={styles.statLabel}>On-Time Delivery</div>
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