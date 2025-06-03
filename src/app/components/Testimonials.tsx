// src/components/Testimonials.tsx
import styles from '../styles/components/Testimonials.module.css';

const testimonials = [
  {
    name: 'John Smith',
    company: 'ABC Corp',
    text: 'MBowen IT transformed our online presence completely. Their team delivered exceptional results on time and within budget.',
    rating: 5
  },
  {
    name: 'Sarah Johnson',
    company: 'XYZ Inc',
    text: 'The mobile app developed by MBowen IT exceeded our expectations. User engagement has increased by 300%.',
    rating: 5
  },
  {
    name: 'Michael Brown',
    company: '123 Enterprises',
    text: 'Reliable service and excellent support throughout our project. Will definitely work with them again.',
    rating: 4
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className={styles.testimonials}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.subtitle}>Client Voices</span>
          <h2 className={styles.title}>Trusted by Businesses Worldwide</h2>
          <div className={styles.divider}></div>
        </div>
        <div className={styles.grid}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.quoteMark}>"</div>
              <p className={styles.text}>{testimonial.text}</p>
              <div className={styles.rating}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className={i < testimonial.rating ? styles.starFilled : styles.starEmpty}>
                    ★
                  </span>
                ))}
              </div>
              <div className={styles.client}>
                <div className={styles.clientInitial}>
                  {testimonial.name.charAt(0)}
                </div>
                <div className={styles.clientInfo}>
                  <h3>{testimonial.name}</h3>
                  <p>{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}