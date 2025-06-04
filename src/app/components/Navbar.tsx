'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from '../styles/components/Navbar.module.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId); // Immediately set active section on click
    }
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'services', 'about', 'testimonials', 'faq', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (!section) continue;

        const { offsetTop, offsetHeight } = section;
        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          setActiveSection(sectionId);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={styles.navbar}>
      <div className={`container ${styles.container}`}>
        <Link href="/" className={styles.logo}>
          Mboweezy Trading Solutions
        </Link>

        <div className={`${styles.links} ${isOpen ? styles.open : ''}`}>
          {['home', 'services', 'about', 'testimonials', 'faq', 'contact'].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(section);
              }}
              className={`${styles.navLink} ${
                activeSection === section ? styles.active : ''
              }`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
        </div>

        <button
          className={styles.toggle}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
}