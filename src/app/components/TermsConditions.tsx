/* eslint-disable react/no-unescaped-entities */
import styles from '../styles/components/LegalPage.module.css';

export default function TermsConditions() {
  return (
    <div className={styles.legalContainer}>
      <div className={styles.legalContent}>
        <h1>Terms and Conditions</h1>
        <p className={styles.effectiveDate}>Effective Date: June 4, 2025</p>

        <section>
          <h2>1. Introduction</h2>
          <p>
            These Terms and Conditions (“Terms”) govern your access to and use of our website, mobile services,
            and related offerings (collectively, the “Services”) provided by Mboweni Trading Solutions. By accessing
            or using the Services, you agree to be bound by these Terms and our Privacy Policy.
          </p>
          <p>
            If you do not agree with any part of these Terms, you must discontinue use of the Services immediately.
          </p>
        </section>

        <section>
          <h2>2. Eligibility</h2>
          <p>
            You must be at least 18 years old or the age of majority in your jurisdiction to use our Services.
            By using the Services, you represent and warrant that you meet these requirements.
          </p>
        </section>

        <section>
          <h2>3. Intellectual Property</h2>
          <p>
            All content, design, text, graphics, images, logos, icons, and software on the Services are the property
            of Mboweni Trading Solutions or its licensors and are protected by copyright, trademark, and other
            intellectual property laws.
          </p>
          <p>
            You may not reproduce, distribute, modify, or create derivative works of our content without our
            express written permission.
          </p>
        </section>

        <section>
          <h2>4. User Responsibilities</h2>
          <p>By using the Services, you agree to:</p>
          <ul>
            <li>Provide accurate, current, and complete information if required to register</li>
            <li>Use the Services only for lawful purposes and in compliance with all applicable laws</li>
            <li>Refrain from engaging in abusive, fraudulent, or disruptive conduct</li>
            <li>Respect the rights of other users and our intellectual property</li>
            <li>Not attempt to reverse-engineer or gain unauthorized access to any part of our Services</li>
          </ul>
        </section>

        <section>
          <h2>5. Account Security</h2>
          <p>
            You are responsible for maintaining the confidentiality of your account credentials and for all
            activities that occur under your account. Please notify us immediately if you suspect any unauthorized use.
          </p>
        </section>

        <section>
          <h2>6. Third-Party Links</h2>
          <p>
            Our Services may contain links to third-party websites or services. We are not responsible for the content,
            policies, or practices of any third-party sites or services. Use them at your own risk.
          </p>
        </section>

        <section>
          <h2>7. Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by applicable law, Mboweni Trading Solutions shall not be liable for any
            indirect, incidental, special, consequential, or punitive damages, including loss of profits, data,
            goodwill, or other intangible losses arising out of your access to or use of the Services.
          </p>
        </section>

        <section>
          <h2>8. Disclaimer of Warranties</h2>
          <p>
            The Services are provided on an "as-is" and "as-available" basis. We make no warranties or representations
            of any kind, express or implied, including but not limited to warranties of merchantability, fitness for
            a particular purpose, or non-infringement.
          </p>
        </section>

        <section>
          <h2>9. Indemnification</h2>
          <p>
            You agree to indemnify and hold harmless Mboweni Trading Solutions and its affiliates, directors, officers,
            employees, and agents from and against any claims, liabilities, damages, losses, and expenses arising
            out of or in connection with your use of the Services or violation of these Terms.
          </p>
        </section>

        <section>
          <h2>10. Termination</h2>
          <p>
            We reserve the right to suspend or terminate your access to the Services at any time, without prior notice
            or liability, for conduct that we believe violates these Terms or is harmful to other users, us, or third parties.
          </p>
        </section>

        <section>
          <h2>11. Governing Law</h2>
          <p>
            These Terms shall be governed by and interpreted in accordance with the laws of South Africa, without
            regard to its conflict of law rules. Any legal action or proceeding relating to the Services shall be
            brought exclusively in the courts of South Africa.
          </p>
        </section>

        <section>
          <h2>12. Changes to These Terms</h2>
          <p>
            We may update these Terms from time to time. When we do, we will revise the "Effective Date" at the top.
            Continued use of the Services after changes constitutes acceptance of the new Terms.
          </p>
        </section>

        <section>
          <h2>13. Contact Us</h2>
          <p>
            If you have any questions, concerns, or complaints regarding these Terms, you may contact us at:
          </p>
          <p>Email: <a href="mailto:info@mboweezy.co.za">info@mboweezy.co.za</a></p>
        </section>
      </div>
    </div>
  );
}
