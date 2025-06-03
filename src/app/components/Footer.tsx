// src/components/Footer.tsx
import Link from 'next/link';
import styles from '../styles/components/Footer.module.css';
import { motion } from 'framer-motion';
import { CiPhone, CiMail } from 'react-icons/ci';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { IoLocationSharp } from 'react-icons/io5';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* Animated wave section */}
      <div className={styles.waveContainer}>
        <svg className={styles.wave} viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            className={styles.waveFill}
          ></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            className={styles.waveFill}
          ></path>
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            className={styles.waveFill}
          ></path>
        </svg>
      </div>

      <div className={styles.container}>
        {/* Floating decorative elements */}
        <div className={styles.decorativeOrbs}>
          <div className={styles.orb1}></div>
          <div className={styles.orb2}></div>
          <div className={styles.orb3}></div>
        </div>

        <div className={styles.grid}>
          {/* About Section */}
          <motion.div
            className={styles.about}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: 'spring' }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div
              className={styles.logo}
              whileHover={{ scale: 1.03 }}
            >
              <span className={styles.logoHighlight}>Mboweni</span> Trading Solutions
            </motion.div>
            <p className={styles.tagline}>Innovative IT solutions for your business growth and success in the digital world.</p>

            <motion.div
              className={styles.mapContainer}
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52862.376619419796!2d18.442867240715973!3d-34.09773957351889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc4102f81ee711%3A0xa36d9fb33bc0e165!2sMuizenberg%2C%20Cape%20Town%2C%207950!5e0!3m2!1sen!2sza!4v1748960998851!5m2!1sen!2sza"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </motion.div>

            <motion.div
              className={styles.whatsappCta}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href="https://wa.me/2780550474"
                target="_blank"
                aria-label="Chat with us on WhatsApp"
                rel="noreferrer"
              >
                <FaWhatsapp className={styles.whatsappIcon} />
                <span>Chat with us instantly</span>
              </a>
            </motion.div>
          </motion.div>

          {/* Quick Links Section */}
          <motion.div
            className={styles.links}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, type: 'spring' }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h3>Quick Links</h3>
            <ul>
              {['Home', 'Services', 'About', 'Testimonials', 'Contact'].map((link, index) => (
                <motion.li
                  key={link}
                  whileHover={{ x: 5 }}
                  transition={{ type: 'spring', stiffness: 500 }}
                >
                  <Link href={`#${link.toLowerCase()}`}>
                    <span className={styles.linkBullet}>➤</span> {link}
                  </Link>
                </motion.li>
              ))}
            </ul>

            <div className={styles.hours}>
              <h4>Operating Hours</h4>
              <ul>
                <li><span>Mon-Fri:</span> 8:00 AM - 5:00 PM</li>
                <li><span>Saturday:</span> 9:00 AM - 1:00 PM</li>
                <li><span>Sunday:</span> Closed</li>
              </ul>
            </div>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            className={styles.contact}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, type: 'spring' }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h3>Get In Touch</h3>

            <motion.div
              className={styles.contactItem}
              whileHover={{ x: 5 }}
            >
              <CiMail className={styles.contactIcon} />
              <a href="mailto:info@mbowenitradingsolutions.co.za">info@mbowenitradingsolutions.co.za</a>
            </motion.div>

            <motion.div
              className={styles.contactItem}
              whileHover={{ x: 5 }}
            >
              <CiPhone className={styles.contactIcon} />
              <a href="tel:+27658998701">+27 65 899 8701</a>
            </motion.div>

            <motion.div
              className={styles.contactItem}
              whileHover={{ x: 5 }}
            >
              <IoLocationSharp className={styles.contactIcon} />
              <span>Muizenberg, Western Cape</span>
            </motion.div>

            <div className={styles.social}>
              <h4>Follow Us</h4>
              <div className={styles.socialIcons}>
                {[
                  { icon: <FaFacebook />, label: 'Facebook' },
                  { icon: <FaTwitter />, label: 'Twitter' },
                  { icon: <FaLinkedin />, label: 'LinkedIn' },
                  { icon: <FaInstagram />, label: 'Instagram' }
                ].map((social, index) => (
                  <motion.a
                    key={social.label}
                    href="#"
                    aria-label={social.label}
                    whileHover={{ y: -5, scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: 'spring', stiffness: 500 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Copyright Section */}
        <motion.div
          className={styles.copyright}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p>&copy; {new Date().getFullYear()} Mboweni Trading Solutions. All rights reserved.</p>
          <div className={styles.legalLinks}>
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((link) => (
              <Link key={link} href={`/${link.toLowerCase().replace(' ', '-')}`}>
                {link}
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}