'use client';

import { useState } from 'react';
import { services } from '../data/services';
import styles from '../styles/components/Services.module.css';
import Link from 'next/link';

export default function Services() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'tech' | 'design' | 'media'>('all');

  const filteredServices = activeFilter === 'all'
    ? services
    : services.filter(service => service.category === activeFilter);

  const handleFilterClick = (category: 'all' | 'tech' | 'design' | 'media') => {
    setActiveFilter(category);
  };

  return (
    <div id="services"> 
    <section className={styles.services}>
      <div className={styles.container}>
        <div className={styles.headerBanner}>
          <div className={styles.header}>
            <h2 className={styles.sectionTitle}><span>Our Services</span></h2>
            <div className={styles.divider}></div>
            <p className={styles.sectionSubtitle}>Comprehensive solutions to elevate your digital presence</p>
          </div>
        </div>

        <div className={styles.filterButtons}>
          <button
            className={`${styles.filterButton} ${activeFilter === 'all' ? styles.active : ''}`}
            onClick={() => handleFilterClick('all')}
          >
            All Services
          </button>
          <button
            className={`${styles.filterButton} ${activeFilter === 'tech' ? styles.active : ''}`}
            onClick={() => handleFilterClick('tech')}
          >
            Tech Solutions
          </button>
          <button
            className={`${styles.filterButton} ${activeFilter === 'design' ? styles.active : ''}`}
            onClick={() => handleFilterClick('design')}
          >
            Design Services
          </button>
          {/* <button
            className={`${styles.filterButton} ${activeFilter === 'media' ? styles.active : ''}`}
            onClick={() => handleFilterClick('media')}
          >
            Media Production
          </button> */}
        </div>

        <div className={styles.grid}>
          {filteredServices.map((service, index) => {
            // Create a new component for the icon to ensure proper rendering
            const IconComponent = ({ className }: { className?: string }) => {
              const Icon = service.icon;
              return <Icon className={className} />;
            };

            const serviceId = service.title.toLowerCase().replace(/\s+/g, '-');

            return (
              <div key={index} className={styles.card} data-category={service.category}>
                <div className={styles.iconWrapper}>
                  <div className={styles.icon}>
                    <IconComponent />
                  </div>
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <Link
                  href={service.title === "Web & Mobile Development" ? "/services" : `/services#${serviceId}`}
                  scroll={true}
                  passHref
                >
                  <button className={styles.learnMore}>Learn more →</button>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
    </div>
  );
}