/* eslint-disable react/no-unescaped-entities */

'use client';
import Link from 'next/link';
import styles from '../styles/components/Footer.module.css';
import { motion } from 'framer-motion';
import { CiPhone, CiMail } from 'react-icons/ci';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaWhatsapp, FaArrowUp } from 'react-icons/fa';
import { IoLocationSharp } from 'react-icons/io5';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Copyright from './Copyright';

// Pre-defined navigation links
const NAV_LINKS = [
  { name: 'Home', path: '#home' },
  { name: 'Services', path: '#services' },
  { name: 'About', path: '#about' },
  { name: 'Testimonials', path: '#testimonials' },
  { name: 'Contact', path: '#contact' }
];

// Pre-defined legal links
const LEGAL_LINKS = [
  { name: 'Privacy Policy', path: '/privacy-policy' },
  { name: 'Terms and Conditions', path: '/terms-conditions' },
  { name: 'Cookies', path: '/cookie-policy' },
];

// Social media links
const SOCIAL_LINKS = [
  { icon: <FaFacebook />, color: '#3b5998', url: '#' },
  { icon: <FaTwitter />, color: '#1da1f2', url: '#' },
  { icon: <FaLinkedin />, color: '#0077b5', url: '#' },
  { icon: <FaInstagram />, color: '#e1306c', url: '#' },
  { icon: <FaWhatsapp />, color: '#25d366', url: '#' }
];

// Pre-generated particle animations (consistent between server and client)
const PARTICLE_ANIMATIONS = Array.from({ length: 25 }, (_, i) => ({
  id: `particle-${i}`,
  size: 2 + (i % 6), // Deterministic size based on index
  delay: (i % 5), // Deterministic delay
  duration: 10 + (i % 15), // Deterministic duration
  left: (i * 4) % 100 // Deterministic position
}));

export default function Footer() {
  const [showCookieNotice, setShowCookieNotice] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const cookieConsent = localStorage.getItem('cookieConsent');
    setShowCookieNotice(cookieConsent === null);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShowCookieNotice(false);
  };

  const handleReject = () => {
    localStorage.setItem('cookieConsent', 'rejected');
    setShowCookieNotice(false);
  };

  return (
    <footer className={styles.footer}>
      {/* Floating particles - using pre-determined values */}
      <div className={styles.particles}>
        {PARTICLE_ANIMATIONS.map((anim) => (
          <motion.div
            key={anim.id}
            className={styles.particle}
            style={{
              width: `${anim.size}px`,
              height: `${anim.size}px`,
              left: `${anim.left}%`,
              bottom: `-${anim.size}px`,
            }}
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 0.8, 0],
              y: [0, -300],
              x: [0, (Number(anim.id.split('-')[1]) % 2 === 0 ? 50 : -50)],
            }}
            transition={{
              duration: anim.duration,
              delay: anim.delay,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className={styles.container}>
        {/* 3-column grid */}
        <div className={styles.grid}>
          {/* Brand Column */}
          <motion.div
            className={styles.brandColumn}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <motion.div
              className={styles.logo}
              whileHover={{ scale: 1.03 }}
            >
              <span className={styles.logoHighlight}>Mboweni</span> Trading Solutions
            </motion.div>

            <p className={styles.tagline}>
              Transforming businesses through cutting-edge digital solutions since 2025.
            </p>

            {/* Animated contact chips */}
            <div className={styles.contactChips}>
              <motion.a
                href="mailto:info@mboweezy.co.za"
                className={styles.contactChip}
                whileHover={{ y: -3, backgroundColor: '#4f46e5' }}
                transition={{ type: 'spring', stiffness: 400 }}
              >
                <CiMail className={styles.chipIcon} />
                Email Us
              </motion.a>

              <motion.a
                href="tel:+27780550474"
                className={styles.contactChip}
                whileHover={{ y: -3, backgroundColor: '#10b981' }}
                transition={{ type: 'spring', stiffness: 400 }}
              >
                <CiPhone className={styles.chipIcon} />
                Call Now
              </motion.a>
            </div>

            {/* 3D map placeholder */}
            <motion.div
              className={styles.mapContainer}
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className={styles.mapOverlay}></div>
              <Image
                src="/images/map.png"
                alt="Team collaborating"
                width={600}
                height={500}
                className={styles.mapImage}
              />
            </motion.div>
          </motion.div>

          {/* Links Column */}
          <motion.div
            className={styles.linksColumn}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3>Explore</h3>
            <ul>
              {NAV_LINKS.map(({ name, path }) => (
                <motion.li
                  key={path}
                  whileHover={{ x: 5 }}
                  transition={{ type: 'spring', stiffness: 500 }}
                >
                  <Link href={path}>
                    <span className={styles.linkDecorator}>→</span> {name}
                  </Link>
                </motion.li>
              ))}
            </ul>

            {/* Working hours with animated clock */}
            <div className={styles.hoursCard}>
              <div className={styles.clockIcon}>
                <div className={styles.clockHandHour}></div>
                <div className={styles.clockHandMinute}></div>
              </div>
              <div>
                <h4>Working Hours</h4>
                <ul>
                  <li><span>Mon-Fri:</span> 8AM - 5PM</li>
                  <li><span>Saturday:</span> 9AM - 1PM</li>
                  <li><span>Sunday:</span> Closed</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Contact Column */}
          <motion.div
            className={styles.contactColumn}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3>Connect</h3>

            <motion.div
              className={styles.socialIcons}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {SOCIAL_LINKS.map((social, i) => (
                <motion.a
                  key={i}
                  href={social.url}
                  className={styles.socialIcon}
                  style={{ '--hover-color': social.color } as React.CSSProperties}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { delay: 0.1 * i }
                    }
                  }}
                  whileHover={{
                    y: -5,
                    color: 'var(--hover-color)',
                    scale: 1.1
                  }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>

            {/* Contact items with staggered animation */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: { transition: { staggerChildren: 0.1 } }
              }}
            >
              <motion.div
                className={styles.contactItem}
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0 }
                }}
              >
                <IoLocationSharp className={styles.contactIcon} />
                <span>Muizenberg, Cape Town, South Africa</span>
              </motion.div>

              <motion.div
                className={styles.contactItem}
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0 }
                }}
              >
                <CiPhone className={styles.contactIcon} />
                <a href="tel:+27780550474">+27 78 0550 474</a>
              </motion.div>

              <motion.div
                className={styles.contactItem}
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0 }
                }}
              >
                <CiMail className={styles.contactIcon} />
                <a href="mailto:info@mbowenitradingsolutions.co.za">info@mboweezy.co.za</a>
              </motion.div>
            </motion.div>

            <motion.div
              className={styles.callToAction}
              whileHover={{ y: -3 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <h4>Ready to Transform Your Business?</h4>
              <motion.a
                href="https://calendly.com/mbowenitshepo"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.actionButton}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <CiPhone className={styles.buttonIcon} />
                Schedule a Call
              </motion.a>
            </motion.div>
          </motion.div>
        </div>

        {/* Cookie Notice - only shown after mount */}
        {isMounted && showCookieNotice && (
          <motion.div
            className={styles.cookieBar}
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: "spring", damping: 25 }}
            role="alert"
            aria-live="polite"
          >
            <div className={styles.cookieContent}>
              <p className={styles.cookieText}>
                We use cookies to enhance your experience. 
                <Link href="/cookie-policy" className={styles.cookieLink}>
                  Learn more
                </Link>
              </p>

              <div className={styles.cookieButtons}>
                <motion.button
                  onClick={handleReject}
                  className={styles.cookieButtonSecondary}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Cancel
                </motion.button>
                
                <motion.button
                  onClick={handleAccept}
                  className={styles.cookieButtonPrimary}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Continue
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}

        {/* Copyright section */}
        <motion.div
          className={styles.copyright}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Copyright />

          <div className={styles.legalLinks}>
            {LEGAL_LINKS.map(({ name, path }) => (
              <Link key={path} href={path}>
                {name}
              </Link>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Floating back-to-top button - only after mount */}
      {isMounted && (
        <motion.button
          className={styles.backToTop}
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ y: -5, scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaArrowUp />
        </motion.button>
      )}
    </footer>
  );
}