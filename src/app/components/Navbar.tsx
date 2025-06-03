// src/components/Navbar.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from '../styles/components/Navbar.module.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={`container ${styles.container}`}>
        <Link href="/" className={styles.logo}>
          Mboweezy Trading Solutions
        </Link>
        
        <div className={`${styles.links} ${isOpen ? styles.open : ''}`}>
          <Link href="#home" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="#services" onClick={() => setIsOpen(false)}>Services</Link>
          <Link href="#about" onClick={() => setIsOpen(false)}>About</Link>
          <Link href="#testimonials" onClick={() => setIsOpen(false)}>Testimonials</Link>
          <Link href="#contact" onClick={() => setIsOpen(false)}>Contact</Link>
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