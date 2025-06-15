'use client';
import Link from 'next/link';
import styles from '../styles/components/ProjectCard.module.css';
import ProjectCard from '../components/projects/ProjectCard';

export default function PortfolioPage() {
  return (
    <div className={styles.portfolioPage}>
      <Link href="/" className={styles.backButton}>
        &larr; Back to Home
      </Link>
      <ProjectCard isFullPortfolio={true} />
    </div>
  );
}