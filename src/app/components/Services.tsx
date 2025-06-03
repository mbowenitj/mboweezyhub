// src/components/Services.tsx
import { useState } from 'react';
import { services } from '../data/services';
import styles from '../styles/components/Services.module.css';

export default function Services() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'tech' | 'design' | 'media'>('all');

  const filteredServices = activeFilter === 'all' 
    ? services 
    : services.filter(service => service.category === activeFilter);

  const handleFilterClick = (category: 'all' | 'tech' | 'design' | 'media') => {
    setActiveFilter(category);
  };

  return (
    <section id="services" className={styles.services}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.sectionTitle}>Our <span>Services</span></h2>
          <p className={styles.sectionSubtitle}>Comprehensive solutions to elevate your digital presence</p>
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
          <button 
            className={`${styles.filterButton} ${activeFilter === 'media' ? styles.active : ''}`}
            onClick={() => handleFilterClick('media')}
          >
            Media Production
          </button>
        </div>
        
        <div className={styles.grid}>
          {filteredServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className={styles.card} data-category={service.category}>
                <div className={styles.iconWrapper}>
                  <div className={styles.icon}>
                    <Icon />
                  </div>
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <button className={styles.learnMore}>Learn more →</button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}