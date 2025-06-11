/* eslint-disable react/no-unescaped-entities */
import styles from '../styles/components/LegalPage.module.css';

export default function PrivacyPolicy() {
  return (
    <div className={styles.legalContainer}>
      <div className={styles.legalContent}>
        <h1>Privacy Policy</h1>
        <p className={styles.effectiveDate}>Effective Date: June 4, 2025</p>

        <section>
          <h2>1. Introduction</h2>
          <p>
            We respect your privacy and are committed to protecting your personal data. This privacy policy
            explains how we collect, use, and protect your personal information when you use our website or
            services. It also informs you about your privacy rights and how the law protects you.
          </p>
          <p>
            This policy applies to all users and is compliant with applicable data protection laws, including
            the General Data Protection Regulation (GDPR), the California Consumer Privacy Act (CCPA/CPRA),
            and the Protection of Personal Information Act (POPIA) in South Africa.
          </p>
        </section>

        <section>
          <h2>2. Data We Collect</h2>
          <p>We may collect, use, store, and transfer different kinds of personal data, including:</p>
          <ul>
            <li><strong>Identity Data:</strong> name, username, date of birth</li>
            <li><strong>Contact Data:</strong> email address, phone number</li>
            <li><strong>Technical Data:</strong> IP address, browser type, device information, OS</li>
            <li><strong>Usage Data:</strong> pages visited, time spent, interaction with features</li>
            <li><strong>Cookies and Tracking Data:</strong> preferences, analytics, and session IDs</li>
          </ul>
        </section>

        <section>
          <h2>3. How We Use Your Data</h2>
          <p>We will only use your personal data when legally permitted. Most commonly, we use your data to:</p>
          <ul>
            <li>Provide and maintain our services</li>
            <li>Personalize user experience and content</li>
            <li>Send important service-related communications</li>
            <li>Improve our website, services, and marketing</li>
            <li>Comply with legal obligations</li>
          </ul>
          <p>Our legal bases for processing your personal data include:</p>
          <ul>
            <li>Your consent (e.g., for email newsletters or optional cookies)</li>
            <li>Performance of a contract with you</li>
            <li>Compliance with a legal obligation</li>
            <li>Our legitimate interests (to improve our services and protect our platform)</li>
          </ul>
        </section>

        <section>
          <h2>4. Cookies and Tracking Technologies</h2>
          <p>
            We use cookies and similar tracking technologies to enhance your experience and gather analytics.
            You can manage your cookie preferences through your browser settings or any cookie banners provided.
          </p>
        </section>

        <section>
          <h2>5. Third-Party Services</h2>
          <p>
            We may share your personal data with trusted third-party service providers who help us operate
            our platform, such as:
          </p>
          <ul>
            <li>Cloud hosting providers</li>
            <li>Payment processors</li>
            <li>Analytics and marketing platforms</li>
            <li>Email communication tools</li>
          </ul>
          <p>
            These parties are obligated to use your data only for specified purposes and in accordance with
            data protection laws.
          </p>
        </section>

        <section>
          <h2>6. Data Retention</h2>
          <p>
            We retain your personal data only as long as necessary to fulfill the purposes we collected it for,
            including for legal, regulatory, tax, accounting, or reporting requirements.
          </p>
          <p>
            When your data is no longer required, we will securely delete or anonymize it.
          </p>
        </section>

        <section>
          <h2>7. Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to safeguard your data against
            unauthorized access, alteration, disclosure, or destruction. However, no internet transmission
            is 100% secure.
          </p>
        </section>

        <section>
          <h2>8. Your Legal Rights</h2>
          <p>You have the following rights regarding your personal data:</p>
          <ul>
            <li>Access – Request a copy of the personal data we hold about you</li>
            <li>Correction – Request correction of inaccurate or incomplete data</li>
            <li>Erasure – Request deletion of your data</li>
            <li>Objection – Object to processing based on legitimate interests or direct marketing</li>
            <li>Restriction – Request restriction of processing under certain conditions</li>
            <li>Portability – Request transfer of your data to you or a third party</li>
            <li>Withdraw Consent – Withdraw your consent at any time where we rely on it</li>
          </ul>
          <p>
            To exercise any of these rights, contact us using the details below. You also have the right to
            lodge a complaint with your local data protection authority.
          </p>
        </section>

        <section>
          <h2>9. Children’s Privacy</h2>
          <p>
            Our services are not intended for children under the age of 13 (or 16 in certain regions). We do not
            knowingly collect personal data from children. If we become aware that we have collected data from
            a child, we will delete it immediately.
          </p>
        </section>

        <section>
          <h2>10. Changes to This Privacy Policy</h2>
          <p>
            We may update this privacy policy from time to time. When we do, we will revise the "Effective Date"
            at the top. Significant changes may be communicated directly.
          </p>
        </section>

        <section>
          <h2>11. Contact Us</h2>
          <p>
            If you have any questions, concerns, or requests related to this privacy policy or your data,
            please contact us at:
          </p>
          <p>Email: <a href="mailto:info@mboweezyhub.co.za">info@mboweezyhub.co.za</a></p>
          <p>We are based in South Africa and comply with the Protection of Personal Information Act (POPIA).</p>
        </section>
      </div>
    </div>
  );
}
