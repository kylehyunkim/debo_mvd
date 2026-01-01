
import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 uppercase">Privacy Policy</h1>
        <p className="text-gray-600 mb-8">Effective Date: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' })}</p>
        
        <div className="bg-white p-8 md:p-12 rounded-lg shadow-sm space-y-8">
          <section>
            <p className="text-gray-700 leading-relaxed mb-6">
              At DeBernardi Development Construction and Remodeling, we value your privacy. This Privacy Policy explains how we collect, use, and protect your personal information when you interact with us, including via SMS, email, and our website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 uppercase tracking-tight">Information We Collect</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed">
              <li>Name, email address, phone number, and other contact details.</li>
              <li>Information about your projects and inquiries.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 uppercase tracking-tight">How We Use Your Information</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed">
              <li>To respond to inquiries and schedule consultations.</li>
              <li>To send you updates, marketing messages, and promotional offers via SMS and email.</li>
              <li>To improve our services and customer experience.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 uppercase tracking-tight">Your Consent</h2>
            <p className="text-gray-700 leading-relaxed">
              By providing your contact information, you consent to receive communications from DeBernardi Development Construction and Remodeling regarding your projects, promotions, or services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 uppercase tracking-tight">Opt-Out</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              You can opt out of receiving messages at any time:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed">
              <li>For SMS: reply "STOP" to unsubscribe.</li>
              <li>For Email: click the "Unsubscribe" link in any email we send.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 uppercase tracking-tight">SMS & Email Communications</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              By providing your phone number and email address, you consent to receive communications from Debernardi Development Construction and Remodeling regarding your inquiries, appointments, project updates, and promotional offers.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Message and Data Rates May Apply.</strong> Message frequency may vary.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              You can opt out of receiving SMS messages at any time by replying STOP, or opt out of email communications by clicking the Unsubscribe link in any email we send.
            </p>
            <p className="text-gray-700 leading-relaxed">
              For assistance, reply HELP to any message or contact us at <a href="mailto:info@ddcr.net" className="text-[#5bb450] hover:underline">info@ddcr.net</a>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 uppercase tracking-tight">Sharing and Security</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We do not sell your personal information. We may share information with trusted service providers to help us operate our business. We take reasonable measures to protect your data.
            </p>
            <p className="text-gray-700 leading-relaxed">
              No mobile information will be shared with third parties/affiliates for marketing/promotional purposes. All text messaging originator opt-in data and consent will not be shared with any third parties.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 uppercase tracking-tight">Contact Us</h2>
            <p className="text-gray-700 leading-relaxed">
              For questions about this Privacy Policy or your personal data, contact us at:
            </p>
            <ul className="mt-4 space-y-2 text-gray-700">
              <li>Email: <a href="mailto:info@ddcr.net" className="text-[#5bb450] hover:underline">info@ddcr.net</a></li>
              <li>Phone: <a href="tel:9258461765" className="text-[#5bb450] hover:underline">925-846-1765</a></li>
              <li>Address: 5776 Sonoma Dr, Suite D, Pleasanton, CA 94566</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;

