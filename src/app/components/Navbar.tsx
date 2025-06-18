'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import styles from '../styles/components/Navbar.module.css';

const sectionIds = ['home', 'services', 'about', 'testimonials', 'FAQ', 'contact'];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (pathname === '/') {
      const handleScroll = () => {
        const scrollPosition = window.scrollY + window.innerHeight / 3;
        for (const sectionId of sectionIds) {
          const section = document.getElementById(sectionId);
          if (!section) continue;
          const { offsetTop, offsetHeight } = section;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(sectionId);
            break;
          }
        }
      };

      window.addEventListener('scroll', handleScroll, { passive: true });
      handleScroll();
      return () => window.removeEventListener('scroll', handleScroll);
    } else {
      if (pathname.startsWith('/projects')) {
        setActiveSection('projects');
      } else if (pathname.startsWith('/services')) {
        setActiveSection('services');
      } else {
        setActiveSection(''); // fallback
      }
    }
  }, [pathname]);

  const handleNavigation = (sectionId: string) => {
    if (pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        const navbarHeight = 100;
        const elementPosition =
          element.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
          top: elementPosition - navbarHeight,
          behavior: 'smooth',
        });
        setActiveSection(sectionId);
      }
    } else {
      router.push(`/#${sectionId}`);
    }
    setIsOpen(false);
  };

  return (
    <nav className={styles.navbar}>
      <div className={`container ${styles.container}`}>
        <Link href="/" className={styles.logo}>
          <Image
            src="/images/logo-white.svg"
            alt="Mboweezy Hub logo"
            width={100}
            height={100}
            priority
            className={styles.floating}
          />
        </Link>

        <div className={`${styles.links} ${isOpen ? styles.open : ''}`}>
          {sectionIds.map((section) => (
            <a
              key={section}
              href={`#${section}`}
              onClick={(e) => {
                e.preventDefault();
                handleNavigation(section);
              }}
              className={`${styles.navLink} ${activeSection === section ? styles.active : ''
                }`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          )).flatMap((link, index) => {
            if (sectionIds[index] === 'testimonials') {
              return [
                link,
                <Link
                  key="projects"
                  href="/projects"
                  className={`${styles.navLink} ${activeSection === 'projects' ? styles.active : ''
                    }`}
                  onClick={() => setIsOpen(false)}
                >
                  Projects
                </Link>,
              ];
            }
            return link;
          })}
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
