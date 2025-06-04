// src/components/TermsConditions.tsx
import styles from '../styles/components/LegalPage.module.css';

export default function TermsConditions() {
  return (
    <div className={styles.legalContainer}>
      <div className={styles.legalContent}>
        <h1>Terms and Conditions</h1>
        <p className={styles.effectiveDate}>Effective Date: June 4, 2025</p>
        
        <section>
          <h2>1. Introduction</h2>
          <p>These Terms and Conditions govern your use of our website and services. By accessing or using our services, you agree to be bound by these terms.</p>
        </section>

        <section>
          <h2>2. Intellectual Property</h2>
          <p>The content, features, and functionality of our website are and will remain our exclusive property. All materials are protected by copyright and trademark laws.</p>
        </section>

        <section>
          <h2>3. User Responsibilities</h2>
          <p>You agree not to:</p>
          <ul>
            <li>Use our services for any illegal purpose</li>
            <li>Attempt to gain unauthorized access to our systems</li>
            <li>Interfere with other users' enjoyment of the services</li>
            <li>Upload or transmit viruses or harmful code</li>
          </ul>
        </section>

        <section>
          <h2>4. Limitation of Liability</h2>
          <p>We shall not be liable for any indirect, incidental, special, consequential or punitive damages resulting from your access to or use of our services.</p>
        </section>

        <section>
          <h2>5. Termination</h2>
          <p>We may terminate or suspend your access to our services immediately, without prior notice, for any reason whatsoever, including without limitation if you breach these Terms.</p>
        </section>

        <section>
          <h2>6. Governing Law</h2>
          <p>These Terms shall be governed by and construed in accordance with the laws of [Your Country/State], without regard to its conflict of law provisions.</p>
        </section>

        <section>
          <h2>7. Changes to Terms</h2>
          <p>We reserve the right to modify these terms at any time. We will provide notice of any changes by posting the new Terms on this page.</p>
        </section>

        <section>
          <h2>8. Contact Us</h2>
          <p>If you have any questions about these Terms, please contact us at info@mbowenitradingsolutions.com.</p>
        </section>
      </div>
    </div>
  );
}