'use client';

import Image from 'next/image';
import { FaArrowRight, FaCheck } from 'react-icons/fa';
import { Service } from '../data/services';
import styles from '../styles/components/ServiceDetailCard.module.css';
import Link from 'next/link';

interface ServiceCardProps {
  service: Service;
  index: number;
  id: string;
  sectionTitle?: string;
  sectionDescription?: string;
}

export default function ServiceDetailCard({
  service,
  index,
  id,
  sectionTitle,
  sectionDescription
}: ServiceCardProps) {
  const isEven = index % 2 === 0;
  const hasFeatures = service.features && service.features.length > 0;

  // Category-based styling
  const categoryClass = {
    tech: styles.techService,
    design: styles.designService,
    marketing: styles.marketingService,
    consulting: styles.consultingService
  }[service.category] || styles.defaultService;

  return (
    <>
      {index === 0 && (sectionTitle || sectionDescription) && (
        <div className={styles.sectionHeaderWrapper}>
          <div className={styles.sectionHeader}>
            {sectionTitle && (
              <h2 className={styles.sectionTitle}>
                <span className={styles.titleText}>{sectionTitle}</span>
              </h2>
            )}
            {sectionDescription && (
              <p className={styles.sectionDescription}>
                <span className={styles.descriptionText}>{sectionDescription}</span>
              </p>
            )}
          </div>
        </div>
      )}

      <div
        id={id}
        className={`${styles.serviceCard} ${categoryClass} ${isEven ? styles.leftLayout : styles.rightLayout
          }`}
        data-aos="fade-up"
        data-aos-delay={index * 100}
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
              style={{ objectFit: 'cover' }}
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
            <div className={styles.serviceHeader}>
              <h2 className={styles.serviceTitle}>{service.title}</h2>
              <p className={styles.serviceSubtitle}>{service.subtitle}</p>
            </div>
            <p className={styles.serviceDescription}>{service.description}</p>
            <p className={styles.serviceDescription}>{service.longDescription}</p>

            {hasFeatures && (
              <div className={styles.featuresContainer}>
                <h3 className={styles.featuresTitle}>KEY FEATURES</h3>
                <ul className={styles.featuresList}>
                  {service.features?.map((feature, i) => (
                    <li key={i} className={styles.featureItem}>
                      <div className={styles.checkIconWrapper}>
                        <FaCheck className={styles.checkIcon} />
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className={styles.ctaContainer}>
              <Link
                href="/#contact"
                className={styles.primaryButton}
                scroll={false}
              >
                Get Started <FaArrowRight className={styles.arrowIcon} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}