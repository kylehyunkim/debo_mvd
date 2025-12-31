
import React, { useState } from 'react';
import { PROJECTS } from '../constants';

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', ...new Set(PROJECTS.map(p => p.category))];

  const filteredProjects = filter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 uppercase">Our Portfolio</h1>
          <p className="text-gray-500 max-w-2xl mx-auto mb-10">
            Explore our collection of successfully completed projects, ranging from luxury kitchen remodels to custom home additions across California.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 text-xs font-bold uppercase tracking-widest border transition-all ${
                  filter === cat 
                  ? 'bg-[#5bb450] border-[#5bb450] text-white' 
                  : 'bg-white border-gray-200 text-gray-600 hover:border-[#5bb450]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group relative overflow-hidden bg-gray-200 aspect-[4/3] rounded-sm">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-6 text-center">
                <span className="text-[#5bb450] text-xs font-bold uppercase tracking-widest mb-2">{project.category}</span>
                <h3 className="text-white text-xl font-bold uppercase tracking-tight mb-4">{project.title}</h3>
                <div className="w-12 h-1 bg-[#5bb450]"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
