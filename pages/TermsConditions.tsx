
import React from 'react';

const TermsConditions: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 uppercase">Terms & Conditions</h1>
        <p className="text-gray-600 mb-8">Effective Date: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' })}</p>
        
        <div className="bg-white p-8 md:p-12 rounded-lg shadow-sm space-y-8">
          <section>
            <p className="text-gray-700 leading-relaxed mb-6">
              By using DeBernardi Development Construction and Remodeling services, including our website, SMS, and email communications, you agree to the following terms:
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 uppercase tracking-tight">Services</h2>
            <p className="text-gray-700 leading-relaxed">
              DeBernardi Development Construction and Remodeling provides home remodeling consultations, project estimates, and promotional offers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 uppercase tracking-tight">User Responsibilities</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed">
              <li>You agree to provide accurate and complete information when contacting us.</li>
              <li>You agree not to use our services for unlawful purposes.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 uppercase tracking-tight">Communications</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              By providing your contact information, you consent to receive communications from Debernardi Development Construction and Remodeling about your inquiries, appointments, and promotional offers.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Message and data rates may apply.</strong> Message frequency may vary based on your interaction with us.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              We may send you messages via SMS or email regarding your inquiries, appointments, or promotions. You consent to receive these communications and may opt out anytime (SMS: reply "STOP", Email: click "Unsubscribe").
            </p>
            <p className="text-gray-700 leading-relaxed">
              You may opt out of SMS messages at any time by replying STOP, or reply HELP for assistance. You can also reach us at <a href="mailto:info@ddcr.net" className="text-[#5bb450] hover:underline">info@ddcr.net</a>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 uppercase tracking-tight">Intellectual Property</h2>
            <p className="text-gray-700 leading-relaxed">
              All content, designs, and materials are the property of DeBernardi Development Construction and Remodeling. Unauthorized use is prohibited.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 uppercase tracking-tight">Limitation of Liability</h2>
            <p className="text-gray-700 leading-relaxed">
              DeBernardi Development Construction and Remodeling is not liable for any damages arising from the use of our services or communications.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 uppercase tracking-tight">Data Protection</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              No mobile information will be shared with third parties/affiliates for marketing/promotional purposes. All text messaging originator opt-in data and consent will not be shared with any third parties.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 uppercase tracking-tight">Modifications</h2>
            <p className="text-gray-700 leading-relaxed">
              We may update these Terms & Conditions at any time. Continued use of our services constitutes acceptance of the updated terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 uppercase tracking-tight">Contact</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              For questions about these Terms & Conditions, contact us at:
            </p>
            <ul className="space-y-2 text-gray-700">
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

export default TermsConditions;

