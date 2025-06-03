// src/components/Navbar.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from '../styles/components/Navbar.module.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Helper function to determine if a link is active
  const isActive = (href: string) => {
    return pathname === href;
  };

  return (
    <nav className={styles.navbar}>
      <div className={`container ${styles.container}`}>
        <Link href="/" className={styles.logo}>
          Mboweezy Trading Solutions
        </Link>
        
        <div className={`${styles.links} ${isOpen ? styles.open : ''}`}>
          <Link 
            href="/" 
            onClick={() => setIsOpen(false)}
            className={isActive('/') ? styles.active : ''}
          >
            Home
          </Link>
          <Link 
            href="/services" 
            onClick={() => setIsOpen(false)}
            className={isActive('/services') ? styles.active : ''}
          >
            Services
          </Link>
          <Link 
            href="/about" 
            onClick={() => setIsOpen(false)}
            className={isActive('/about') ? styles.active : ''}
          >
            About
          </Link>
          <Link 
            href="/testimonials" 
            onClick={() => setIsOpen(false)}
            className={isActive('/testimonials') ? styles.active : ''}
          >
            Testimonials
          </Link>
          <Link 
            href="/contact" 
            onClick={() => setIsOpen(false)}
            className={isActive('/contact') ? styles.active : ''}
          >
            Contact
          </Link>
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