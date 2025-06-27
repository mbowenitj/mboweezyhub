'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from '../styles/components/Careers.module.css';

const Careers = () => {
    const [activeCategory, setActiveCategory] = useState('all');
    const [searchTerm, setSearchTerm] = useState('');

    // Sample job data
    const jobOpenings = [
        {
            id: 1,
            title: 'Frontend Developer',
            type: 'Full-time',
            location: 'Johannesburg / Remote',
            category: 'tech',
            description: 'Build amazing user experiences with React and modern frontend tools.',
            posted: '2 days ago',
            salary: 'R45,000 - R60,000',
            skills: ['React', 'TypeScript', 'Next.js']
        },
        {
            id: 2,
            title: 'Digital Marketing Specialist',
            type: 'Full-time',
            location: 'Cape Town',
            category: 'marketing',
            description: 'Drive our digital presence and customer engagement strategies.',
            posted: '1 week ago',
            salary: 'R35,000 - R50,000',
            skills: ['SEO', 'Google Ads', 'Social Media']
        },
        {
            id: 3,
            title: 'DevOps Engineer',
            type: 'Contract',
            location: 'Remote',
            category: 'tech',
            description: 'Implement and maintain our cloud infrastructure and CI/CD pipelines.',
            posted: '3 days ago',
            salary: 'R55,000 - R75,000',
            skills: ['AWS', 'Docker', 'Kubernetes']
        },
        {
            id: 4,
            title: 'Customer Support',
            type: 'Part-time',
            location: 'Durban',
            category: 'operations',
            description: 'Provide exceptional support to our growing customer base.',
            posted: '5 days ago',
            salary: 'R20,000 - R30,000',
            skills: ['Zendesk', 'Communication', 'Problem Solving']
        }
    ];

    const categories = ['all', 'tech', 'marketing', 'operations', 'design'];

    const filteredJobs = jobOpenings.filter(job => {
        const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            job.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
            job.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));

        if (activeCategory === 'all') return matchesSearch;
        return matchesSearch && job.category === activeCategory;
    });

    return (
        <div className={styles.careersContainer}>
            {/* Animated Background Elements */}
            <div className={styles.backgroundElements}>
                <div className={styles.circle1}></div>
                <div className={styles.circle2}></div>
                <div className={styles.circle3}></div>
            </div>

            {/* Hero Section with 3D Effect */}
            <div className={styles.heroSection}>
                <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className={styles.heroContent}
                >
                    <motion.h1 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className={styles.heroTitle}
                    >
                        Shape the Future <span>with Mboweezy Hub</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className={styles.heroSubtitle}
                    >
                        We&apos;re revolutionizing digital solutions across Africa. Join our mission to empower businesses through technology.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                    >
                        <button className={styles.heroCta}>
                            Explore Opportunities
                            <span className={styles.ctaArrow}>→</span>
                        </button>
                    </motion.div>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, scale: 0.9, rotateY: 30 }}
                    animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className={styles.heroImageContainer}
                >
                    <div className={styles.imageWrapper}>
                        <Image
                            src="/images/team.jpg"
                            alt="Mboweezy Hub team collaborating"
                            width={600}
                            height={400}
                            className={styles.heroImage}
                            priority
                        />
                        <div className={styles.imageGlow}></div>
                    </div>
                </motion.div>
            </div>

            {/* Floating Particles Background */}
            <div className={styles.particles}>
                {[...Array(20)].map((_, i) => (
                    <div key={i} className={styles.particle}></div>
                ))}
            </div>

            {/* Job Listings Section */}
            <div className={styles.jobListings}>
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className={styles.sectionHeader}
                >
                    <h2 className={styles.sectionTitle}>Current Openings</h2>
                    <p className={styles.sectionSubtitle}>Find your perfect position in our growing team</p>
                </motion.div>

                {/* Interactive Filters */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className={styles.filtersContainer}
                >
                    <div className={styles.searchContainer}>
                        <div className={styles.searchWrapper}>
                            <input
                                type="text"
                                placeholder="Search by role, skill, or location..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className={styles.searchInput}
                            />
                            <div className={styles.searchIcon}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <circle cx="11" cy="11" r="8"></circle>
                                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div className={styles.categoryFilters}>
                        {categories.map((category, index) => (
                            <motion.button
                                key={category}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className={`${styles.categoryButton} ${activeCategory === category ? styles.activeCategory : ''}`}
                                onClick={() => setActiveCategory(category)}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                {category.charAt(0).toUpperCase() + category.slice(1)}
                                {activeCategory === category && (
                                    <motion.span 
                                        layoutId="categoryHighlight"
                                        className={styles.categoryHighlight}
                                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                                    />
                                )}
                            </motion.button>
                        ))}
                    </div>
                </motion.div>

                {/* Job Cards Grid */}
                <div className={styles.jobsGrid}>
                    {filteredJobs.length < 0 ? (
                        filteredJobs.map((job, index) => (
                            <motion.div
                                key={job.id}
                                className={styles.jobCard}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <div className={styles.jobBadge}>{job.type}</div>
                                <div className={styles.jobHeader}>
                                    <h3 className={styles.jobTitle}>{job.title}</h3>
                                    <div className={styles.jobMeta}>
                                        <span className={styles.jobLocation}>
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                                <circle cx="12" cy="10" r="3"></circle>
                                            </svg>
                                            {job.location}
                                        </span>
                                        <span className={styles.jobPosted}>
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                                <circle cx="12" cy="12" r="10"></circle>
                                                <polyline points="12 6 12 12 16 14"></polyline>
                                            </svg>
                                            {job.posted}
                                        </span>
                                    </div>
                                    <div className={styles.jobSalary}>
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                            <line x1="12" y1="1" x2="12" y2="23"></line>
                                            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                                        </svg>
                                        {job.salary}
                                    </div>
                                </div>
                                <p className={styles.jobDescription}>{job.description}</p>
                                <div className={styles.jobSkills}>
                                    {job.skills.map((skill, i) => (
                                        <span key={i} className={styles.skillTag}>{skill}</span>
                                    ))}
                                </div>
                                <div className={styles.jobActions}>
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className={styles.applyButton}
                                    >
                                        Apply Now
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                            <path d="M5 12h14"></path>
                                            <path d="M12 5l7 7-7 7"></path>
                                        </svg>
                                    </motion.button>
                                    <button className={styles.detailsButton}>
                                        View Details
                                    </button>
                                </div>
                            </motion.div>
                        ))
                    ) : (
                        <motion.div
                            className={styles.noJobsFound}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className={styles.noJobsIcon}>
                                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                    <line x1="14.05" y1="2" x2="14.05" y2="4"></line>
                                    <line x1="20.05" y1="2" x2="20.05" y2="4"></line>
                                    <line x1="22.05" y1="8" x2="20.05" y1="8"></line>
                                </svg>
                            </div>
                            <h3 className={styles.noJobsTitle}>No matching positions found</h3>
                            <p className={styles.noJobsText}>We update our openings regularly. Check back soon or submit a general application!</p>
                            <button className={styles.noJobsCta}>
                                Get Notified About New Roles
                            </button>
                        </motion.div>
                    )}
                </div>
            </div>

            {/* Benefits Section */}
            <div className={styles.benefitsSection}>
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className={styles.sectionHeader}
                >
                    <h2 className={styles.sectionTitle}>Why Join Mboweezy Hub?</h2>
                    <p className={styles.sectionSubtitle}>We&apos;re building more than software - we&apos;re building a culture</p>
                </motion.div>

                <div className={styles.benefitsGrid}>
                    {[
                        { 
                            icon: 'growth',
                            title: 'Explosive Growth', 
                            text: 'Fast-track your career with our rapid scaling and learning opportunities',
                            color: '#6c5ce7'
                        },
                        { 
                            icon: 'team',
                            title: 'Elite Team', 
                            text: 'Collaborate with top-tier talent across Africa and beyond',
                            color: '#00cec9'
                        },
                        { 
                            icon: 'flexibility',
                            title: 'Radical Flexibility', 
                            text: 'Remote work models and results-focused schedules',
                            color: '#fd79a8'
                        },
                        { 
                            icon: 'impact',
                            title: 'Real Impact', 
                            text: 'Your work directly transforms businesses across the continent',
                            color: '#00b894'
                        },
                        { 
                            icon: 'tech',
                            title: 'Cutting-Edge Tech', 
                            text: 'Work with the latest technologies and innovative approaches',
                            color: '#0984e3'
                        },
                        { 
                            icon: 'perks',
                            title: 'Exceptional Perks', 
                            text: 'Competitive packages, wellness programs, and more',
                            color: '#fdcb6e'
                        }
                    ].map((benefit, index) => (
                        <motion.div
                            key={index}
                            className={styles.benefitCard}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ y: -10 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            style={{ '--card-accent': benefit.color } as React.CSSProperties}
                        >
                            <div className={styles.benefitIconWrapper}>
                                <div className={styles.benefitIconBackground}></div>
                                {benefit.icon === 'growth' && (
                                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                        <path d="M12 20V10M18 20V4M6 20v-4"></path>
                                    </svg>
                                )}
                                {benefit.icon === 'team' && (
                                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                        <circle cx="9" cy="7" r="4"></circle>
                                        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                                    </svg>
                                )}
                                {benefit.icon === 'flexibility' && (
                                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <polyline points="12 6 12 12 15 15"></polyline>
                                    </svg>
                                )}
                                {benefit.icon === 'impact' && (
                                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                                        <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                                        <line x1="12" y1="22.08" x2="12" y2="12"></line>
                                    </svg>
                                )}
                                {benefit.icon === 'tech' && (
                                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                                        <line x1="8" y1="21" x2="16" y2="21"></line>
                                        <line x1="12" y1="17" x2="12" y2="21"></line>
                                    </svg>
                                )}
                                {benefit.icon === 'perks' && (
                                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                )}
                            </div>
                            <h3 className={styles.benefitTitle}>{benefit.title}</h3>
                            <p className={styles.benefitText}>{benefit.text}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* CTA Section */}
            <div className={styles.ctaSection}>
                <div className={styles.ctaContent}>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className={styles.ctaTitle}
                    >
                        Ready to build the future with us?
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        viewport={{ once: true }}
                        className={styles.ctaText}
                    >
                        Even if you don&apos;t see your perfect role, we&apos;d love to hear from you. 
                        Amazing talent always has a place at Mboweezy Hub.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className={styles.ctaButtons}
                    >
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={styles.primaryCta}
                        >
                            Submit General Application
                        </motion.button>
                        <button className={styles.secondaryCta}>
                            Contact Our Talent Team
                        </button>
                    </motion.div>
                </div>
                <div className={styles.ctaPattern}></div>
            </div>
        </div>
    );
};

export default Careers;