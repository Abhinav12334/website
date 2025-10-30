import React from "react";

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="bg-light min-h-screen py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-8 text-center">
          Privacy Policy
        </h1>

        <div className="max-w-3xl mx-auto text-gray-700 space-y-6">
          <p>
            At <strong>Aptivora Global Solutions</strong>, we value your
            privacy. This Privacy Policy explains how we collect, use, and
            protect your personal information when you interact with our
            website and services.
          </p>

          <h2 className="text-2xl font-bold mt-8">1. Information We Collect</h2>
          <p>
            We may collect information such as your name, email address, and
            message details when you contact us through our website forms or
            subscribe to updates.
          </p>

          <h2 className="text-2xl font-bold mt-8">2. How We Use Your Information</h2>
          <p>
            We use your information to respond to inquiries, improve our
            services, and send updates related to our offerings. We never sell
            your data to third parties.
          </p>

          <h2 className="text-2xl font-bold mt-8">3. Cookies</h2>
          <p>
            Our website may use cookies to improve your browsing experience and
            analyze website traffic. You can disable cookies in your browser
            settings.
          </p>

          <h2 className="text-2xl font-bold mt-8">4. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact
            us at{" "}
            <a
              href="mailto:aptivoraglobalsolutions@gmail.com"
              className="text-primary font-medium hover:underline"
            >
              aptivoraglobalsolutions@gmail.com
            </a>.
          </p>

          <p className="mt-8 text-sm text-gray-500">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
