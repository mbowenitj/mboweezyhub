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
  const [isScrolled, setIsScrolled] = useState(false);

  // Check if current path is /projects (with null check)
  const isProjectsPage = pathname?.startsWith('/projects') ?? false;

  useEffect(() => {
    // Store the scroll position when menu opens
    let scrollPosition = 0;
    
    if (isOpen) {
      scrollPosition = window.scrollY;
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
      document.body.style.top = `-${scrollPosition}px`;
    } else {
      const scrollY = document.body.style.top;
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.top = '';
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    }

    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.top = '';
    };
  }, [isOpen]);

  // Add scroll listener for navbar background change
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!pathname) return;

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
        setActiveSection('');
      }
    }
  }, [pathname]);

  useEffect(() => {
    if (pathname === '/' && typeof window !== 'undefined') {
      const hash = window.location.hash.substring(1);
      if (hash && sectionIds.includes(hash)) {
        const element = document.getElementById(hash);
        if (element) {
          const navbar = document.querySelector('.navbar');
          const navbarHeight = navbar?.clientHeight || 80;
          
          setTimeout(() => {
            window.scrollTo({
              top: element.offsetTop - navbarHeight,
              behavior: 'auto'
            });
          }, 50);
        }
      }
    }
  }, [pathname]);

  const handleNavigation = (sectionId: string) => {
    if (pathname === '/') {
      setIsOpen(false);
      
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const navbar = document.querySelector('.navbar');
          const navbarHeight = navbar?.clientHeight || 80;
          
          window.scrollTo({
            top: element.offsetTop - navbarHeight,
            behavior: 'smooth'
          });
          setActiveSection(sectionId);
        }
      }, 300);
    } else {
      setIsOpen(false);
      router.push(`/#${sectionId}`);
    }
  };

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : styles.transparent} ${isProjectsPage ? styles.projectsPage : ''}`}>
      <div className={`container ${styles.container}`}>
        <Link href="/" className={styles.logo}>
          <Image
            src={isScrolled ? "/images/logo-white.svg" : "/images/logo.svg"}
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
              className={`${styles.navLink} ${activeSection === section ? styles.active : ''}`}
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
                  className={`${styles.navLink} ${activeSection === 'projects' ? styles.active : ''}`}
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
          className={`${styles.toggle} ${isOpen ? styles.open : ''}`}
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