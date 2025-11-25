import React from "react";

export default function Page() {
  return (
    <div className="flex justify-center px-4 py-16">
        
      <div className="prose dark:prose-invert py-20 max-w-3xl">
      <p>Last updated: November 24, 2025</p>
        <h1>Privacy Policy</h1>
   

        <p>
          RewriteMate (“we”, “us”, or “our”) is committed to protecting your
          privacy. This Privacy Policy explains how we handle your information
          when you use the RewriteMate iOS and macOS applications (“the App”).
        </p>

        <p>
          RewriteMate is designed with privacy-first principles, collecting only
          the minimum information necessary to operate the service. We do not
          collect your text inputs, documents, or content processed inside the
          app. We do not store or retain personal data beyond what is required
          for authentication and subscription management.
        </p>

        <h2>1. Information We Collect</h2>

        <h3>1.1 Authentication Information</h3>
        <p>
          If the App includes an account system, we may process:
        </p>
        <ul>
          <li>Email address</li>
          <li>Authentication provider identifier (e.g., Apple ID token)</li>
        </ul>
        <p>
          This data is used solely to allow you to sign in, maintain your
          account, and sync your purchase entitlements. We do not store
          passwords and do not receive your Apple ID credentials.
        </p>

        <h3>1.2 Subscription Information</h3>
        <p>To validate premium access, we may receive:</p>
        <ul>
          <li>Anonymous App Store transaction identifier</li>
          <li>Subscription status (active, expired, renewal date)</li>
          <li>Product identifier (monthly, yearly, etc.)</li>
        </ul>
        <p>
          We do not receive your name, address, payment card details, or
          purchase history outside this app.
        </p>

        <h3>We do NOT collect:</h3>
        <ul>
          <li>Text you write, paste, load, or generate</li>
          <li>Personal documents</li>
          <li>Usage logs of your writing</li>
          <li>Device identifiers (IDFA)</li>
          <li>Location data</li>
          <li>Contacts, photos, or files on your device</li>
        </ul>

        <h2>2. Zero Data Retention</h2>
        <p>
          RewriteMate does not store your text or writing inputs on servers. All
          rewriting actions occur ephemerally, meaning data is processed only in
          memory and then discarded.
        </p>
        <p>We retain:</p>
        <ul>
          <li>0% of user-generated text</li>
          <li>0% of behavioral analytics</li>
          <li>0% of writing history on servers</li>
        </ul>

        <p>
          Authentication and subscription data may be stored only as long as
          necessary to maintain your account and fulfill legal or payment
          obligations.
        </p>

        <h2>3. How We Use Your Information</h2>
        <p>We use the minimal collected data strictly to:</p>
        <ul>
          <li>Authenticate you into the app</li>
          <li>Maintain subscription access</li>
          <li>Prevent fraud or misuse</li>
          <li>Comply with legal obligations</li>
          <li>Improve reliability (e.g., Apple crash logs)</li>
        </ul>
        <p>We do not use your data for advertising or profiling.</p>

        <h2>4. AI Processing</h2>
        <p>
          RewriteMate uses external AI services for rewriting features.
        </p>
        <ul>
          <li>We do not send personal data by default.</li>
          <li>
            AI processing occurs only on the text you submit at that moment.
          </li>
          <li>AI providers do not retain or train on your data.</li>
        </ul>

        <h2>5. GDPR Compliance (EU/EEA Users)</h2>
        <p>RewriteMate acts as the Data Controller for minimal data collected.</p>

        <p>Under GDPR, you have the right to:</p>
        <ul>
          <li>Access your data</li>
          <li>Request deletion</li>
          <li>Request correction</li>
          <li>Request portability</li>
          <li>Restrict or object to processing</li>
          <li>Withdraw consent</li>
        </ul>

        <p>
          Because we store extremely minimal data, requests can be fulfilled
          quickly.
        </p>

        <p>To exercise your rights, contact:</p>
        <p><strong>hi@rewritemate.app</strong></p>

        <h3>Legal Basis</h3>
        <ul>
          <li>Contractual necessity</li>
          <li>Legitimate interest (fraud prevention, integrity)</li>
          <li>Legal obligation (payment compliance)</li>
        </ul>

        <h2>6. Data Sharing</h2>
        <p>
          We do not sell or rent your data. We may share minimal information
          with:
        </p>
        <ul>
          <li>Apple App Store (subscription validation)</li>
          <li>Authentication providers</li>
          <li>AI providers (temporary processing)</li>
          <li>Crash reporting tools (optional, anonymous)</li>
        </ul>

        <h2>7. Data Storage, Security, & Transfers</h2>
        <ul>
          <li>Data encrypted in transit (HTTPS/TLS)</li>
          <li>No long-term storage of user content</li>
          <li>
            Any transfers follow GDPR safeguards (e.g., SCCs)
          </li>
        </ul>

        <h2>8. Children’s Privacy</h2>
        <p>
          RewriteMate is not intended for children under 13. We do not knowingly
          collect data from children.
        </p>

        <h2>9. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy periodically and will update the
          date at the top.
        </p>

        <h2>10. Contact Us</h2>
        <p>
          For privacy questions or GDPR requests, contact:
        </p>
        <p>
          <strong>hi@rewritemate.app</strong><br />
        </p>
      </div>
    </div>
  );
}