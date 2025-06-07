'use client';

import Image from 'next/image';
import { FaArrowRight, FaCheck } from 'react-icons/fa';
import { Service } from '../data/services';
import styles from '../styles/components/ServiceDetailCard.module.css';

interface ServiceCardProps {
  service: Service;
  index: number;
  id: string;
}

export default function ServiceDetailCard({ service, index, id }: ServiceCardProps) {
  const isEven = index % 2 === 0;
  const hasFeatures = service.features && service.features.length > 0;
  
  // Category-based styling
  const categoryClass = {
    tech: styles.techService,
    design: styles.designService,
    media: styles.mediaService
  }[service.category];

  return (
    <div 
      id={id}
      className={`${styles.serviceCard} ${categoryClass} ${isEven ? styles.leftLayout : styles.rightLayout}`}
    >
      {/* Image Column */}
      <div className={styles.imageColumn}>
        <div className={styles.imageContainer}>
          <Image
            src={service.imagePath}
            alt={service.title}
            fill
            className={styles.serviceImage}
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
          <div className={styles.imageOverlay}></div>
          <div className={styles.imageBadge}>
            <span>0{index + 1}</span>
          </div>
        </div>
      </div>

      {/* Content Column */}
      <div className={styles.contentColumn}>
        <div className={styles.contentWrapper}>
          <div className={styles.serviceIcon}>
            <service.icon className={styles.icon} />
          </div>
          
          <h2 className={styles.serviceTitle}>{service.title}</h2>
          <p className={styles.serviceSubtitle}>{service.subtitle}</p>
          
          {hasFeatures && (
            <ul className={styles.featuresList}>
              {service.features?.map((feature, i) => (
                <li key={i} className={styles.featureItem}>
                  <FaCheck className={styles.checkIcon} />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          )}

          <div className={styles.description}>
            <p className={styles.shortDescription}>{service.description}</p>
            <div className={styles.longDescription}>
              {service.longDescription.split('\n').map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>

          <div className={styles.actionButtons}>
            <a href={service.link} className={styles.primaryButton}>
              Get Started <FaArrowRight className={styles.arrowIcon} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}