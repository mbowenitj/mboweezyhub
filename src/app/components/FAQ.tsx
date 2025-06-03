// src/components/FAQ.tsx
'use client';

import { useState } from 'react';
import styles from '../styles/components/FAQ.module.css';

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'How Much Will It Cost?',
      answer: 'Our pricing varies based on project scope. We offer transparent pricing with detailed quotes after discussing your needs.'
    },
    {
      question: 'How Long Does Design Take?',
      answer: 'Timelines vary: simple sites (2-4 weeks), complex projects (6-8+ weeks). We provide clear timelines upfront.'
    },
    {
      question: 'How Do I Partner With Your Company?',
      answer: 'Contact us via website, email, or phone. We begin with a free consultation to understand your goals.'
    },
    {
      question: 'Can You Improve My Current Website?',
      answer: 'Yes! We specialize in modernizing existing sites with improved design, speed, and functionality.'
    },
    {
      question: 'What Are Your Payment Terms?',
      answer: 'Standard: 50% upfront, 30% at milestone, 20% on completion. Flexible options available. We accept all major payment methods.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className={styles.faqSection} id="faq">
      <div className={styles.decorativeTop}></div>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>
          <span className={styles.titleDecorator}>//</span> Frequently Asked Questions
        </h2>
        <p className={styles.subtitle}>Find quick answers to common inquiries about our services</p>
        
        <div className={styles.faqContainer}>
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`${styles.faqItem} ${activeIndex === index ? styles.active : ''}`}
              onClick={() => toggleFAQ(index)}
            >
              <div className={styles.faqQuestion}>
                <div className={styles.questionIcon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" 
                          stroke="currentColor" strokeWidth="2"/>
                    <path d="M12 16V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M12 8H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <h3>{faq.question}</h3>
                <span className={styles.arrow}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </div>
              <div className={styles.faqAnswer}>
                <div className={styles.answerDecorator}></div>
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.decorativeBottom}></div>
    </section>
  );
}