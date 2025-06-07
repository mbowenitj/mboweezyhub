'use client';

import { useEffect } from 'react';
import ServiceDetailCard from '../components/ServiceDetailCard';
import { services } from '../data/services';

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
    <div className="services-page">
      {services.map((service, index) => {
        const serviceId = service.title.toLowerCase().replace(/\s+/g, '-');
        return (
          <ServiceDetailCard 
            key={serviceId}
            service={service}
            index={index}
            id={serviceId}
          />
        );
      })}
    </div>
  );
}