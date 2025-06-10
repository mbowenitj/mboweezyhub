'use client';
import Image from 'next/image'
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from '../styles/components/Navbar.module.css';

const sections = ['home', 'services', 'about', 'testimonials', 'FAQ', 'contact'];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const pathname = usePathname();

  const handleNavigation = (sectionId: string) => {
    if (pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        const navbarHeight = 100; // Adjust this to match your navbar height
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - navbarHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });

        setActiveSection(sectionId);
      }
    } else {
      window.location.href = `/#${sectionId}`;
    }
    setIsOpen(false);
  };

  useEffect(() => {
    if (pathname === '/') {
      const handleScroll = () => {
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
      handleScroll();

      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [pathname]);

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
          {sections.map((section) => (
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