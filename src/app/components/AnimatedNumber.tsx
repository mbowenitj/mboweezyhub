'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function AnimatedNumber({ value, className }: { value: number; className?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000; // Animation duration in ms
    const start = 0;
    const increment = Math.ceil(value / (duration / 16)); // Roughly 60fps

    let current = start;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        clearInterval(timer);
        current = value;
      }
      setCount(current);
    }, 16);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <motion.span 
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {count}+
    </motion.span>
  );
}