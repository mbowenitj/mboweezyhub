// src/components/PrivacyPolicy.tsx
import styles from '../styles/components/LegalPage.module.css';

export default function PrivacyPolicy() {
  return (
    <div className={styles.legalContainer}>
      <div className={styles.legalContent}>
        <h1>Privacy Policy</h1>
        <p className={styles.effectiveDate}>Effective Date: June 4, 2025</p>
        
        <section>
          <h2>1. Introduction</h2>
          <p>We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you how we look after your personal data when you visit our website and tell you about your privacy rights.</p>
        </section>

        <section>
          <h2>2. Data We Collect</h2>
          <p>We may collect, use, store and transfer different kinds of personal data about you including:</p>
          <ul>
            <li>Identity Data (name, username, etc.)</li>
            <li>Contact Data (email address, phone number)</li>
            <li>Technical Data (IP address, browser type)</li>
            <li>Usage Data (how you use our website)</li>
          </ul>
        </section>

        <section>
          <h2>3. How We Use Your Data</h2>
          <p>We will only use your personal data when the law allows us to. Most commonly, we will use your data to:</p>
          <ul>
            <li>Provide and maintain our service</li>
            <li>Notify you about changes</li>
            <li>Allow you to participate in interactive features</li>
            <li>Provide customer support</li>
            <li>Gather analysis to improve our service</li>
          </ul>
        </section>

        <section>
          <h2>4. Data Security</h2>
          <p>We have implemented appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way.</p>
        </section>

        <section>
          <h2>5. Your Legal Rights</h2>
          <p>Under certain circumstances, you have rights under data protection laws in relation to your personal data including:</p>
          <ul>
            <li>Request access to your data</li>
            <li>Request correction of your data</li>
            <li>Request erasure of your data</li>
            <li>Object to processing of your data</li>
            <li>Request restriction of processing</li>
          </ul>
        </section>

        <section>
          <h2>6. Contact Us</h2>
          <p>If you have any questions about this privacy policy, please contact us at privacy@yourcompany.com.</p>
        </section>
      </div>
    </div>
  );
}