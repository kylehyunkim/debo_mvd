
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SERVICES, FAQS } from '../constants';

const Home: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-white">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            className="w-full h-full object-cover"
            alt="Modern Bay Area home development"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center md:text-left">
          <h1 className="text-4xl md:text-7xl font-bold uppercase leading-tight mb-6">
            Building Your Bay Area <br />
            <span className="text-[#5bb450]">Dream Project</span>
          </h1>
          <p className="text-lg md:text-xl font-semibold mb-10 max-w-2xl text-gray-200">
            Licensed quality renovation and remodeling services in Pleasanton and surrounding areas.
          </p>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 justify-center md:justify-start">
            <Link
              to="/contact"
              className="bg-[#5bb450] hover:bg-[#4a9341] text-white px-8 py-4 text-sm font-bold uppercase tracking-widest transition-all inline-flex items-center"
            >
              Get a Free Quote
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
            </Link>
            <Link
              to="/portfolio"
              className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-4 text-sm font-bold uppercase tracking-widest transition-all"
            >
              Our Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row gap-16 items-center">
          <div className="md:w-1/2">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              The DeBernardi Construction World
            </h2>
            <div className="w-20 h-1 bg-[#5bb450] mb-8"></div>
            <h4 className="text-xl font-bold mb-6 text-gray-700 uppercase tracking-wide">
              We Are Passionate About Building Dreams
            </h4>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Upgrade your home with DeBernardi Development – the Bay Area's trusted design/build experts for quality renovation and remodeling services. With years of experience in California construction, remodeling, and custom building, our expertise remains matchless.
              </p>
              <p>
                We handle all aspects of the remodeling process for you, from the first step of planning and permits (License #604607) through to our perfect execution.
              </p>
              <p>
                To ensure the highest level of professionalism, we manage everything to save you considerable time and unnecessary headaches.
              </p>
            </div>
            <div className="mt-10">
              <p className="text-xs uppercase font-bold tracking-widest text-gray-400 mb-2">Call Us Today</p>
              <a href="tel:9258461765" className="text-3xl font-bold text-gray-900 hover:text-[#5bb450] transition-colors">
                925-846-1765
              </a>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <img
              src="https://picsum.photos/seed/intro/800/600"
              alt="Team at work"
              className="rounded shadow-2xl relative z-10"
            />
            <div className="absolute -bottom-6 -right-6 w-full h-full border-4 border-[#5bb450] -z-0 rounded hidden md:block"></div>
          </div>
        </div>
      </section>

      {/* Specialization Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 uppercase tracking-tighter text-gray-900">Our Specialization</h2>
            <div className="w-20 h-1 bg-[#5bb450] mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((service) => (
              <div key={service.id} className="group p-8 bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-[#5bb450] text-white flex items-center justify-center rounded-full mb-6 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 uppercase text-gray-900 tracking-tight">{service.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                <Link to={`/services#${service.id}`} className="text-xs font-bold uppercase tracking-widest text-[#5bb450] flex items-center hover:translate-x-1 transition-transform">
                  Learn More
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Counter Section */}
      <section className="py-20 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="https://picsum.photos/seed/stats/1920/600" className="w-full h-full object-cover" alt="Background" />
        </div>
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-[#5bb450] mb-2">500+</div>
              <div className="text-xs uppercase font-bold tracking-widest text-gray-400">Happy Customers</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-[#5bb450] mb-2">700+</div>
              <div className="text-xs uppercase font-bold tracking-widest text-gray-400">Completed Projects</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-[#5bb450] mb-2">20+</div>
              <div className="text-xs uppercase font-bold tracking-widest text-gray-400">Cities Covered</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-[#5bb450] mb-2">30+</div>
              <div className="text-xs uppercase font-bold tracking-widest text-gray-400">Years of History</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Common Questions</h2>
            <p className="text-gray-500">Everything you need to know about our process and services in the Bay Area.</p>
          </div>
          
          <div className="space-y-4">
            {FAQS.map((faq, index) => (
              <div key={index} className="bg-white shadow-sm border border-gray-100 rounded overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 md:p-8 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <h5 className="text-lg font-bold text-gray-900 pr-4">{faq.question}</h5>
                  <svg
                    className={`w-5 h-5 text-[#5bb450] flex-shrink-0 transition-transform duration-300 ${
                      openFAQ === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openFAQ === index ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 md:px-8 pb-6 md:pb-8 pt-0">
                    <p className="text-gray-600 italic leading-relaxed text-sm">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-[#5bb450] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 uppercase">Ready to make your dream home come true?</h2>
          <p className="text-xl mb-12 opacity-90 max-w-2xl mx-auto">
            Your ideas, our creation. Let's build something amazing together in the heart of the Bay Area.
          </p>
          <Link
            to="/contact"
            className="bg-white text-[#5bb450] hover:bg-gray-100 px-12 py-5 text-sm font-bold uppercase tracking-widest transition-all rounded shadow-xl inline-block"
          >
            Start Your Free Estimate
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
