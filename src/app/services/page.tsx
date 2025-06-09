'use client';

import { useEffect } from 'react';
import ServiceDetailCard from '../components/ServiceDetailCard';
import { services } from '../data/services';
import Head from 'next/head';

export default function ServicesPage() {
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.substring(1);
      if (hash) {
        const element = document.getElementById(hash);
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }, 300); // Slight delay to ensure page is fully loaded
        }
      }
    };

    // Initial load
    handleHash();

    // Handle back/forward navigation
    window.addEventListener('hashchange', handleHash);

    return () => {
      window.removeEventListener('hashchange', handleHash);
    };
  }, []);

  return (
    <><Head>
      <title>Our Services | Mboweezy Hub</title>
      <meta
        name="description"
        content="Explore professional web development, branding, cloud hosting, print marketing, and digital solutions tailored for modern business growth. Powered by Mboweezy Hub." />
      <meta name="keywords" content="web development, branding, cloud hosting, print design, digital marketing South Africa" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://www.mboweezyhub.coza/services" />
    </Head><div className="services-page">
        {services.map((service, index) => {
          const serviceId = service.title.toLowerCase().replace(/\s+/g, '-');
          return (
            <ServiceDetailCard
              key={serviceId}
              service={service}
              index={index}
              id={serviceId}
              sectionTitle="Our Services" />
          );
        })}
      </div></>
  );
}