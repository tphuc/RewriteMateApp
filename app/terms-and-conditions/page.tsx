import React from "react";



export default function Page() {
  return (
    <div className="flex justify-center px-4 py-16">
      <article className="prose dark:prose-invert py-20 max-w-3xl">
      <p>Last updated: November 24, 2025</p>
        <h1 >Terms & Conditions</h1>
      

        <p>
          Welcome to <strong>RewriteMate</strong> (“the App”).<br />
          By downloading, installing, or using RewriteMate, you agree to be bound by these Terms & Conditions (“Terms”). If you do not agree, do not use the App.
        </p>
        <p>These Terms apply to the RewriteMate applications available on iOS and macOS.</p>

        <h2>1. Purpose of the App</h2>
        <p>
          RewriteMate is a writing assistance tool that helps users rewrite, refine, and transform text using AI-based language processing.
          The App is designed for personal or professional productivity purposes.
        </p>
        <p>
          <strong>The App does not store or retain your text inputs;</strong> all processing happens transiently.
        </p>

        <h2>2. Eligibility</h2>
        <p>
          You must be at least 13 years old (or the minimum legal age in your region) to use RewriteMate.
        </p>
        <p>If you are using the App on behalf of an organization, you confirm that you have authority to agree to these Terms.</p>

        <h2>3. Account & Authentication</h2>
        <p>If the App provides account-based features, you agree to:</p>
        <ul>
          <li>Provide accurate authentication information</li>
          <li>Not share login credentials</li>
          <li>Be responsible for activities under your account</li>
        </ul>
        <p>
          RewriteMate may use third-party authentication providers (e.g., Sign in with Apple).
          We do not store your password or Apple ID information.
        </p>

        <h2>4. Subscription & Payments</h2>
        <p>RewriteMate offers premium features through in-app purchases (“Subscriptions”).</p>
        <p>Apple processes all payments. By purchasing a Subscription, you agree to Apple’s:</p>
        <ul>
          <li>App Store Terms of Service</li>
          <li>App Store Billing Terms</li>
        </ul>

        <h3>4.1 Renewal</h3>
        <p>Subscriptions automatically renew unless cancelled at least 24 hours before the renewal date.</p>

        <h3>4.2 Cancellation</h3>
        <p>You may cancel your Subscription at any time using your Apple ID account settings. We cannot cancel Subscriptions on your behalf.</p>

        <h3>4.3 Refunds</h3>
        <p>Refunds are handled solely by Apple according to App Store policies.</p>

        <h2>5. Acceptable Use</h2>
        <p>When using RewriteMate, you agree not to:</p>
        <ul>
          <li>Misuse or attempt to disrupt the App</li>
          <li>Reverse-engineer, modify, or decompile the App</li>
          <li>Use the App to generate harmful, illegal, or abusive content</li>
          <li>Submit content that violates intellectual property rights</li>
          <li>Attempt to bypass subscription restrictions</li>
        </ul>
        <p>We reserve the right to restrict or terminate access for misuse.</p>

        <h2>6. User Content & AI Processing</h2>
        <p>RewriteMate processes text that you input or paste into the App.</p>
        <p className="font-semibold text-green-700">We do NOT store your text.</p>
        <p>All inputs are handled ephemerally and discarded after processing.</p>

        <h3>AI Providers</h3>
        <p>
          RewriteMate uses external AI services to generate rewriting results.
          By using the App, you agree that your submitted text may be temporarily transmitted to these services for processing.
        </p>
        <p>Providers do not use your data for model training or retention, based on their published policies.</p>
        <p>You retain all rights to your text.</p>

        <h2>7. Intellectual Property</h2>
        <p>
          RewriteMate, including its design, code, trademarks, and branding, is owned by [Insert Company Name].
        </p>
        <p>Users may not copy, distribute, or modify any part of the App without written permission.</p>
        <p>You retain full ownership of the text you provide and the rewritten output you receive.</p>

        <h2>8. Disclaimer of Warranties</h2>
        <p>RewriteMate is provided “as is” and “as available” without warranties of any kind, whether express or implied.</p>
        <p>We do not guarantee that:</p>
        <ul>
          <li>The App will always function without interruptions</li>
          <li>AI-generated results will be accurate, reliable, or suitable for any specific purpose</li>
          <li>Errors or issues will always be corrected</li>
        </ul>
        <p>Use of the App is at your own risk.</p>

        <h2>9. Limitation of Liability</h2>
        <p>To the fullest extent permitted by law:</p>
        <ul>
          <li>RewriteMate and its developers are not liable for any indirect, incidental, or consequential damages arising from use of the App.</li>
          <li>Our total liability for any claim will not exceed the amount you paid for the App within the past 12 months.</li>
        </ul>
        <p>This limitation applies even if we have been advised of the possibility of damages.</p>

        <h2>10. GDPR & International Use</h2>
        <p>
          If you are located in the EU/EEA, we process your minimal personal data in accordance with the GDPR.
          Please refer to our Privacy Policy for full details.
        </p>
        <p>You are responsible for ensuring your use of RewriteMate complies with local laws.</p>

        <h2>11. Termination</h2>
        <p>We may suspend or terminate access to the App if:</p>
        <ul>
          <li>You violate these Terms</li>
          <li>You misuse the service</li>
          <li>We discontinue the App</li>
        </ul>
        <p>Upon termination, you must stop using and delete the App from your devices.</p>

        <h2>12. Changes to These Terms</h2>
        <p>
          We may update these Terms periodically. Changes take effect when posted within the App or on our website.
          Your continued use of RewriteMate after changes constitutes acceptance of the updated Terms.
        </p>

        <h2>13. Contact</h2>
        <p>
          For questions or support regarding these Terms:<br />
          <strong>rewritemate.app</strong><br />
          Email: <a href="mailto:hi@rewritemate.app">hi@rewritemate.app</a><br />
        
        </p>

        <p className="mt-12 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} RewriteMate. All rights reserved.
        </p>
      </article>
    </div>
  );
};

