
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: 'Remodeling',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your inquiry! We will get back to you shortly.');
    setFormData({ name: '', email: '', phone: '', projectType: 'Remodeling', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Contact Info Sidebar */}
          <div className="lg:w-1/3">
            <h1 className="text-4xl font-bold text-gray-900 mb-6 uppercase tracking-tight">Get In Touch</h1>
            <p className="text-gray-500 mb-12">
              Ready to start your project? Enter your details, and we’ll get back to you to schedule your free estimate in the Bay Area.
            </p>

            <div className="space-y-10">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-[#5bb450] text-white flex items-center justify-center rounded shrink-0 mr-6">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-1">Phone</h4>
                  <p className="text-xl font-bold text-gray-900 underline underline-offset-4 decoration-[#5bb450]">925-846-1765</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-[#5bb450] text-white flex items-center justify-center rounded shrink-0 mr-6">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-1">Email</h4>
                  <p className="text-xl font-bold text-gray-900">info@ddcr.net</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-[#5bb450] text-white flex items-center justify-center rounded shrink-0 mr-6">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/></svg>
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-1">Main Office</h4>
                  <p className="text-xl font-bold text-gray-900">5776 Sonoma Dr, Suite D, Pleasanton, CA 94566</p>
                  <p className="text-xs text-gray-400 font-bold mt-2">License #604607</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:w-2/3">
            <form onSubmit={handleSubmit} className="bg-white p-8 md:p-12 shadow-2xl border border-gray-100 rounded">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 focus:border-[#5bb450] focus:ring-0 outline-none transition-colors"
                    placeholder="Enter full name"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 focus:border-[#5bb450] focus:ring-0 outline-none transition-colors"
                    placeholder="example@mail.com"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 focus:border-[#5bb450] focus:ring-0 outline-none transition-colors"
                    placeholder="925-XXX-XXXX"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Project Type</label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 focus:border-[#5bb450] focus:ring-0 outline-none transition-colors appearance-none"
                  >
                    <option>Remodeling</option>
                    <option>Renovation</option>
                    <option>Custom Build</option>
                    <option>Additions</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
              <div className="mb-8">
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">How can we help?</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  required
                  className="w-full px-4 py-3 border border-gray-200 focus:border-[#5bb450] focus:ring-0 outline-none transition-colors resize-none"
                  placeholder="Tell us about your dream project..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#5bb450] hover:bg-[#4a9341] text-white py-4 font-bold uppercase tracking-widest transition-all rounded shadow-lg"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-24 h-[400px] w-full rounded overflow-hidden shadow-inner grayscale border border-gray-200">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3159.4215160408545!2d-121.890632!3d37.686000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fe93000000000%3A0x0!2s5776%20Sonoma%20Dr%2C%20Pleasanton%2C%20CA%2094566!5e0!3m2!1sen!2sus!4v1677905417973!5m2!1sen!2sus" 
            width="100%" 
            height="100%" 
            style={{border:0}} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
