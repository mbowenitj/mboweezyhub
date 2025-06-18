'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import styles from '../../styles/components/ProjectCard.module.css';
import { Project, projects } from '../../data/projects';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

const cardAnimation = {
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
  hidden: { opacity: 0, y: 20 }
};

const hoverEffect = {
  scale: 1.03,
  y: -10,
  transition: { type: "spring", stiffness: 400, damping: 10 }
};

export default function ProjectCard() {
  const [visibleProjects, setVisibleProjects] = useState(4);
  const sectionRef = useRef<HTMLElement>(null);

  const loadMoreProjects = () => setVisibleProjects(prev => Math.min(prev + 4, projects.length));
  const showLessProjects = () => {
    setVisibleProjects(4);
    sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const displayedProjects = projects.slice(0, visibleProjects);
  const canLoadMore = visibleProjects < projects.length;
  const canShowLess = visibleProjects > 4;

  return (
    <section id="work" className={styles.workSection} ref={sectionRef}>
      <div className={styles.container}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } }}
          className={styles.header}
        >
          <h2 className={styles.title}>Our <span className={styles.highlight}>Portfolio</span></h2>
          <p className={styles.subtitle}>Where digital innovation meets tangible results</p>
          <div className={styles.divider}></div>
        </motion.div>

        <div className={styles.projectsGrid}>
          {displayedProjects.map((project, index) => (
            <ProjectCardItem key={project.id} project={project} index={index} isNew={index >= visibleProjects - 4} />
          ))}
        </div>

        {(canLoadMore || canShowLess) && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className={styles.buttonContainer}
          >
            <div className={styles.buttonGroup}>
              {canLoadMore && (
                <button onClick={loadMoreProjects} className={styles.ctaButton}>
                  Load More Projects
                  <span className={styles.ctaIcon}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" />
                    </svg>
                  </span>
                </button>
              )}
              {canShowLess && (
                <button onClick={showLessProjects} className={styles.secondaryButton}>
                  Show Less
                </button>
              )}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}

function ProjectCardItem({ project, index, isNew }: { project: Project; index: number; isNew?: boolean }) {
  const isExternal = !!project.externalUrl;
  const isCurrentSite = typeof window !== 'undefined' &&
    project.externalUrl &&
    new URL(project.externalUrl).hostname === window.location.hostname;

  const href = isExternal ? project.externalUrl! : `/projects/${project.slug}`;

  const card = (
    <motion.div
      initial={isNew ? "hidden" : "visible"}
      animate="visible"
      variants={cardAnimation}
      whileHover={hoverEffect}
      className={styles.cardWrapper}
    >
      <CardContent project={project} index={index} />
    </motion.div>
  );

  if (isExternal) {
    return isCurrentSite ? (
      <div className={`${styles.projectCard} ${styles.disabledCard}`}>
        {card}
        <div className={styles.disabledNote}>
          You&apos;re already here - no need to click 😄
        </div>
      </div>
    ) : (
      <a href={href} target={project.linkTarget || '_blank'} rel="noopener noreferrer" className={styles.projectCard} aria-label={`View ${project.title} project`}>
        {card}
      </a>
    );
  }

  return (
    <Link href={href} className={styles.projectCard} aria-label={`View ${project.title} project`}>
      {card}
    </Link>
  );
}

function CardContent({ project, index }: { project: Project; index?: number }) {
  const aspectClass = project.aspectRatio ? styles[project.aspectRatio] : styles.landscape;
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
    loop: true,
  });

  // Auto-rotate slides every 5 seconds
  useEffect(() => {
    if (!loaded || !instanceRef.current) return;

    const interval = setInterval(() => {
      instanceRef.current?.next();
    }, 4000);

    return () => {
      clearInterval(interval);
    };
  }, [loaded, instanceRef]);

  const handleDotClick = (idx: number) => {
    if (!instanceRef.current) return;
    
    instanceRef.current.moveToIdx(idx);
  };

  const hasSlides = project.slideImages && project.slideImages.length > 0;

  return (
    <>
      <div className={`${styles.imageContainer} ${aspectClass}`}>
        {project.isVideo ? (
          project.youtubeId ? (
            <div className={styles.videoContainer}>
              <div className={styles.videoWrapper}>
                <iframe
                  src={`https://www.youtube.com/embed/${project.youtubeId}?autoplay=1&mute=1&loop=1&playlist=${project.youtubeId}&playsinline=1`}
                  title={project.title}
                  className={styles.videoIframe}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  onLoad={() => setVideoLoaded(true)}
                />
                {!videoLoaded && (
                  <Image src={project.image || '/images/default-thumbnail.jpg'} alt={project.title} fill className={styles.projectImage} />
                )}
              </div>
            </div>
          ) : (
            <video autoPlay loop muted playsInline className={styles.projectImage}>
              <source src={project.image} type="video/mp4" />
            </video>
          )
        ) : hasSlides ? (
          <>
            <div ref={sliderRef} className={`keen-slider ${styles.slider}`}>
              {project.slideImages!.map((src, idx) => (
                <div className={`keen-slider__slide ${styles.slide}`} key={idx}>
                  <Image 
                    src={src} 
                    alt={`${project.title} slide ${idx + 1}`} 
                    fill 
                    className={styles.projectImage}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              ))}
            </div>
            {loaded && instanceRef.current && (
              <div className={styles.dots}>
                {[
                  ...Array(instanceRef.current.track.details.slides.length).keys(),
                ].map((idx) => (
                  <button
                    key={idx}
                    onClick={() => handleDotClick(idx)}
                    className={`${styles.dot} ${
                      currentSlide === idx ? styles.active : ""
                    }`}
                  ></button>
                ))}
              </div>
            )}
          </>
        ) : (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className={styles.projectImage}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={index !== undefined && index < 3}
          />
        )}
        <div className={styles.overlay} />
        <div className={styles.gradientOverlay} />
      </div>

      <div className={styles.content}>
        <div className={styles.contentInner}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </div>
        {project.externalUrl && (
          <span className={styles.cardAction}>Visit Live ↗</span>
        )}
      </div>
    </>
  );
}