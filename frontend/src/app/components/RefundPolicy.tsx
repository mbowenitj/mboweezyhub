// src/components/PrivacyPolicy.tsx
import styles from '../styles/components/LegalPage.module.css';

export default function RefundPolicy() {
    return (
        <div className={styles.legalContainer}>
            <div className={styles.legalContent}>
                <h1>Refund Policy</h1>
                <p className={styles.effectiveDate}>Effective Date: June 4, 2025</p>
                <section>
                    <h2>No Refunds Policy</h2>
                    <p>All payments for custom development services are final. Deposits secure our team’s time and are non-refundable.</p>
                </section>
            </div>
        </div>
    );
}