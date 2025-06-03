// src/components/About.tsx
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaRocket, FaUsers, FaLightbulb, FaChartLine } from 'react-icons/fa';
import styles from '../styles/components/About.module.css';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const features = [
  {
    icon: <FaRocket />,
    title: "Innovation Driven",
    description: "We stay ahead of tech trends to deliver cutting-edge solutions"
  },
  {
    icon: <FaUsers />,
    title: "Client Focused",
    description: "Your success is our top priority in every project"
  },
  {
    icon: <FaLightbulb />,
    title: "Strategic Thinking",
    description: "We align technology with your business objectives"
  },
  {
    icon: <FaChartLine />,
    title: "Results Oriented",
    description: "We measure success by your business outcomes"
  }
];

export default function About() {
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 50, y: 50 });
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const dotsRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (dotsRef.current && containerRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect();
      const dotsRect = dotsRef.current.getBoundingClientRect();

      setOffset({
        x: e.clientX - dotsRect.left,
        y: e.clientY - dotsRect.top
      });
      setIsDragging(true);
    }
  };

  useEffect(() => {
    const handleGlobalMouseMove = (e: MouseEvent) => {
      if (!isDragging || !containerRef.current) return;

      const containerRect = containerRef.current.getBoundingClientRect();
      const newX = Math.max(0, Math.min(e.clientX - containerRect.left - offset.x, containerRect.width - 30));
      const newY = Math.max(0, Math.min(e.clientY - containerRect.top - offset.y, containerRect.height - 30));

      setPosition({ x: newX, y: newY });
    };

    const handleGlobalMouseUp = () => {
      if (isDragging) setIsDragging(false);
    };

    if (isDragging) {
      window.addEventListener('mousemove', handleGlobalMouseMove);
      window.addEventListener('mouseup', handleGlobalMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleGlobalMouseMove);
      window.removeEventListener('mouseup', handleGlobalMouseUp);
    };
  }, [isDragging, offset]);

  return (
    <section id="about" className={styles.about}>
      <div className={styles.backgroundDesign}></div>

      <div className={styles.header}>
        <motion.h2 
          className={styles.sectionTitle}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeIn}
        >
          Who <span>We Are</span>
        </motion.h2>
        <motion.p 
          className={styles.sectionSubtitle}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeIn}
          transition={{ delay: 0.1 }}
        >
          Your trusted partner in digital transformation
        </motion.p>
      </div>

      <div className={styles.container}>
        <motion.div 
          className={styles.imageCollage}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeIn}
        >
          <div className={styles.mainImageWrapper}>
            <Image
              src="/images/team-collaboration.svg"
              alt="Team collaborating"
              width={600}
              height={400}
              className={styles.mainImage}
              priority
            />
          </div>
          <div className={styles.secondaryImageWrapper}>
            <Image
              src="/images/office.svg"
              alt="Modern office"
              width={400}
              height={300}
              className={styles.secondaryImage}
            />
          </div>
          
          <div 
            ref={containerRef}
            className={styles.tertiaryImageWrapper}
          >
            <Image
              src="/images/technology.svg"
              alt="Technology devices"
              width={300}
              height={150}
              className={styles.tertiaryImage}
            />
          </div>
        </motion.div>

        <div className={styles.content}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeIn}
            transition={{ delay: 0.2 }}
          >
            <h3 className={styles.title}>
              Transforming Businesses Through <span>Technology</span>
            </h3>
            <div className={styles.description}>
              <p>
                At Mbowen IT, we're more than a technology company - we're your strategic 
                partner in digital transformation.
              </p>
            </div>
            <div className={styles.features}>
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  className={styles.featureCard}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  variants={fadeIn}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.03 }}
                >
                  <div className={styles.iconWrapper}>{feature.icon}</div>
                  <h4>{feature.title}</h4>
                  <p>{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
