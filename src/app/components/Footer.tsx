'use client';
import Link from 'next/link';
import styles from '../styles/components/Footer.module.css';
import { motion } from 'framer-motion';
import { CiPhone, CiMail } from 'react-icons/ci';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaWhatsapp, FaArrowUp } from 'react-icons/fa';
import { IoLocationSharp } from 'react-icons/io5';
import { useEffect, useState } from 'react';

export default function Footer() {

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className={styles.footer}>
      {/* Animated gradient wave */}
      <div className={styles.waveContainer}>
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
          ></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
          ></path>
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
          ></path>
        </svg>
      </div>

      {/* Floating particles */}
      <div className={styles.particles}>
        {isClient && [...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className={styles.particle}
            initial={{ y: 0, x: Math.random() * 100 }}
            animate={{
              y: [0, -50, 0],
              x: [0, Math.random() * 20 - 10, 0]
            }}
            transition={{
              duration: 5 + Math.random() * 10,
              repeat: Infinity,
              ease: "easeInOut"
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
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52862.376619419796!2d18.442867240715973!3d-34.09773957351889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc4102f81ee711%3A0xa36d9fb33bc0e165!2sMuizenberg%2C%20Cape%20Town%2C%207950!5e0!3m2!1sen!2sza!4v1748960998851!5m2!1sen!2sza"
                loading="lazy"
              ></iframe>
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
              {['Home', 'Services', 'Portfolio', 'About', 'Testimonials', 'Contact'].map((item) => (
                <motion.li
                  key={item}
                  whileHover={{ x: 5 }}
                  transition={{ type: 'spring', stiffness: 500 }}
                >
                  <Link href={`#${item.toLowerCase()}`}>
                    <span className={styles.linkDecorator}>→</span> {item}
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
              {[
                { icon: <FaFacebook />, color: '#3b5998' },
                { icon: <FaTwitter />, color: '#1da1f2' },
                { icon: <FaLinkedin />, color: '#0077b5' },
                { icon: <FaInstagram />, color: '#e1306c' },
                { icon: <FaWhatsapp />, color: '#25d366' }
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href="#"
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

            {/* Newsletter with floating animation */}
            <motion.div
              className={styles.newsletter}
              whileHover={{ y: -3 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <h4>Get Updates</h4>
              <form>
                <input type="email" placeholder="Your email address" />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Subscribe
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        </div>

        {/* Copyright section */}
        <motion.div
          className={styles.copyright}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p>© {new Date().getFullYear()} Mboweni Trading Solutions. All rights reserved.</p>

          <div className={styles.legalLinks}>
            {['Privacy Policy', 'Terms', 'Cookies', 'Refund Policy'].map((item) => (
              <Link key={item} href={`/${item.toLowerCase().replace(' ', '-')}`}>
                {item}
              </Link>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Floating back-to-top button */}
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
    </footer>
  );
}