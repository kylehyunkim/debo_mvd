
import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // If there's a hash in the URL, scroll to that section after a short delay
    if (location.hash) {
      const timer = setTimeout(() => {
        const element = document.querySelector(location.hash);
        if (element) {
          const headerOffset = 120; // Account for fixed header
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [location]);

  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 uppercase">Our Services</h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            At DeBernardi Development, we believe that understanding our customers' needs and detailed planning are key factors for a successful project. That's why we have a specialized work method—The DeBernardi Approach—that makes everything simple and clear.
          </p>
        </div>

        {/* Detailed Services Grid */}
        <div className="space-y-24">
          {SERVICES.map((service, index) => (
            <div 
              key={service.id}
              id={service.id}
              className={`flex flex-col gap-12 items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
            >
              <div className="md:w-1/2">
                <img 
                  src={service.imageUrl} 
                  alt={service.title} 
                  className="rounded shadow-xl w-full aspect-[16/10] object-cover"
                />
              </div>
              <div className="md:w-1/2">
                <div className="w-12 h-12 bg-[#5bb450] text-white flex items-center justify-center rounded mb-6">
                  {service.icon}
                </div>
                <h2 className="text-3xl font-bold mb-6 text-gray-900 uppercase tracking-tight">{service.title}</h2>
                <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                  {service.description} We work closely with our clients in the Bay Area to ensure their vision is executed to perfection.
                </p>
                {service.checklist && (
                  <ul className="space-y-3 mb-8">
                    {service.checklist.map((item, i) => (
                      <li key={i} className="flex items-center text-gray-700 font-semibold text-sm">
                        <svg className="w-5 h-5 mr-3 text-[#5bb450]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
                {service.id !== 'interior-design' && service.id !== 'home-improvement' && (
                  <Link to="/contact" className="inline-block bg-gray-900 text-white px-8 py-3 text-xs font-bold uppercase tracking-widest hover:bg-[#5bb450] transition-colors">
                    Request Estimate
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div id="debernardi-approach" className="mt-32 p-12 bg-gray-900 text-white rounded-lg shadow-2xl relative overflow-hidden">
          <div className="absolute right-0 top-0 w-64 h-64 bg-[#5bb450] opacity-10 rounded-full -mr-32 -mt-32"></div>
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-12 text-center uppercase tracking-tight">The DeBernardi Approach</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-[#5bb450] mb-4">01</div>
                <h3 className="text-xl font-bold mb-4 uppercase">How We Plan</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Clear blueprints and initial 3D design to avoid surprises. We handle all city permits and structural planning.
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#5bb450] mb-4">02</div>
                <h3 className="text-xl font-bold mb-4 uppercase">Scheduling</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  A detailed and accurate schedule tailored to the specific needs of Bay Area home construction timelines.
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#5bb450] mb-4">03</div>
                <h3 className="text-xl font-bold mb-4 uppercase">Execution</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Our recipe for success: professional craftsmanship from start to finish, ensuring a successful and enjoyable project.
                </p>
              </div>
            </div>
            <div className="text-center">
              <Link 
                to="/debernardi-approach" 
                className="inline-block bg-[#5bb450] text-white px-8 py-3 text-xs font-bold uppercase tracking-widest hover:bg-[#4aa340] transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
