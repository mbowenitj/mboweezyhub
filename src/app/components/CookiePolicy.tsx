// src/components/CookiePolicy.tsx
import styles from '../styles/components/LegalPage.module.css';

export default function CookiePolicy() {
  return (
    <div className={styles.legalContainer}>
      <div className={styles.legalContent}>
        <h1>Cookie Policy</h1>
        <p className={styles.effectiveDate}>Effective Date: June 4, 2025</p>
        
        <section>
          <h2>1. What Are Cookies</h2>
          <p>Cookies are small text files stored on your device when you visit websites. They help the website remember information about your visit.</p>
        </section>

        <section>
          <h2>2. How We Use Cookies</h2>
          <p>We use cookies for several purposes:</p>
          <ul>
            <li><strong>Essential Cookies:</strong> Necessary for the website to function</li>
            <li><strong>Performance Cookies:</strong> Help us understand how visitors interact</li>
            <li><strong>Functionality Cookies:</strong> Remember your preferences</li>
            <li><strong>Targeting Cookies:</strong> Used for advertising purposes</li>
          </ul>
        </section>

        <section>
          <h2>3. Third-Party Cookies</h2>
          <p>We may use third-party services that place cookies on your device. These include:</p>
          <ul>
            <li>Google Analytics for website analytics</li>
            <li>Facebook Pixel for advertising tracking</li>
            <li>Hotjar for user behavior analysis</li>
          </ul>
        </section>

        <section>
          <h2>4. Managing Cookies</h2>
          <p>You can control and/or delete cookies as you wish. Most browsers allow you to:</p>
          <ul>
            <li>Block all cookies</li>
            <li>Block third-party cookies</li>
            <li>Delete cookies when you close your browser</li>
          </ul>
          <p>For more information, visit <a href="https://www.aboutcookies.org" target="_blank" rel="noopener noreferrer">aboutcookies.org</a>.</p>
        </section>

        <section>
          <h2>5. Changes to This Policy</h2>
          <p>We may update our Cookie Policy from time to time. We will notify you of any changes by posting the new policy on this page.</p>
        </section>

        <section>
          <h2>6. Contact Us</h2>
          <p>If you have any questions about our use of cookies, please contact us at privacy@yourcompany.com.</p>
        </section>
      </div>
    </div>
  );
}