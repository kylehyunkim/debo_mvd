
import React from 'react';
import { TESTIMONIALS } from '../constants';

const Reviews: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 uppercase">Customer Reviews</h1>
          <div className="flex justify-center mb-6">
            {[1, 2, 3, 4, 5].map(star => (
              <svg key={star} className="w-8 h-8 text-[#5bb450] fill-current" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <p className="text-gray-600 text-lg leading-relaxed">
            What our clients across Pleasanton, Danville, and Walnut Creek say about our craftsmanship. We take pride in our integrity and the relationships we build with our customers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {TESTIMONIALS.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-10 shadow-sm border border-gray-100 relative group hover:shadow-xl transition-shadow">
              <div className="absolute top-0 right-0 -mr-2 -mt-2 w-12 h-12 bg-gray-50 flex items-center justify-center opacity-10 group-hover:opacity-20 transition-opacity">
                <svg className="w-8 h-8 text-gray-900" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C14.9124 8 14.017 7.10457 14.017 6V5C14.017 3.89543 14.9124 3 16.017 3H19.017C21.2261 3 23.017 4.79086 23.017 7V15C23.017 17.2091 21.2261 19 19.017 19H17.017C16.4647 19 16.017 19.4477 16.017 20V21H14.017ZM1.017 21L1.017 18C1.017 16.8954 1.91243 16 3.017 16H6.017C6.56928 16 7.017 15.5523 7.017 15V9C7.017 8.44772 6.56928 8 6.017 8H3.017C1.91243 8 1.017 7.10457 1.017 6V5C1.017 3.89543 1.91243 3 3.017 3H6.017C8.22614 3 10.017 4.79086 10.017 7V15C10.017 17.2091 8.22614 19 6.017 19H4.017C3.46472 19 3.017 19.4477 3.017 20V21H1.017Z"/></svg>
              </div>
              <p className="text-gray-600 italic mb-8 leading-relaxed">"{testimonial.content}"</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-200 rounded-full mr-4 overflow-hidden">
                  <img src={`https://picsum.photos/seed/${testimonial.id}/100/100`} alt={testimonial.author} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 leading-none mb-1">{testimonial.author}</h4>
                  <p className="text-xs text-gray-400 uppercase tracking-widest">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* BBB & Trust Seal Section */}
        <div className="bg-white p-12 rounded shadow-sm border border-gray-100 flex flex-col md:flex-row items-center justify-around gap-12 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all">
          <div className="text-center">
            <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Accredited Business</div>
            <img src="https://picsum.photos/seed/bbb/200/80" alt="BBB Seal" className="h-16 object-contain" />
          </div>
          <div className="text-center">
            <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Top Rated</div>
            <img src="https://picsum.photos/seed/buildzoom/200/80" alt="BuildZoom Seal" className="h-16 object-contain" />
          </div>
          <div className="text-center">
            <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Professional Source</div>
            <img src="https://picsum.photos/seed/houzz/200/80" alt="Houzz Seal" className="h-16 object-contain" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
