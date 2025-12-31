
import React from 'react';
import { FAQ, Project, Service, Testimonial } from './types';

export const SERVICES: Service[] = [
  {
    id: 'home-improvement',
    title: 'The Debernardi Approach',
    description: 'Our start-to-finish recipe for a successful and enjoyable project. We handle the heavy lifting so you can enjoy the results.',
    imageUrl: 'https://picsum.photos/seed/hi1/800/600',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    id: 'remodeling',
    title: 'Home Remodeling',
    description: 'Serving the Bay Area with specialized remodeling. From kitchens in Pleasanton to full home updates in Los Altos.',
    imageUrl: 'https://picsum.photos/seed/rm1/800/600',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
  },
  {
    id: 'interior-design',
    title: 'Professional Sources',
    description: 'We leverage a network of high-quality interior designers and professional sources to ensure your project is aesthetically superior.',
    imageUrl: 'https://picsum.photos/seed/id1/800/600',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
  },
  {
    id: 'custom-build',
    title: 'Custom Construction',
    description: 'Licensed B and C17 expertise. Room additions, custom cabinets, and structural changes that last a lifetime.',
    imageUrl: 'https://picsum.photos/seed/cb1/800/600',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
];

export const PROJECTS: Project[] = [
  { id: '1', title: 'Pleasanton Modern Kitchen', category: 'Kitchen', imageUrl: 'https://picsum.photos/seed/p1/600/400' },
  { id: '2', title: 'Danville Luxury Bath', category: 'Bathroom', imageUrl: 'https://picsum.photos/seed/p2/600/400' },
  { id: '3', title: 'Los Altos Living Concept', category: 'Interior', imageUrl: 'https://picsum.photos/seed/p3/600/400' },
  { id: '4', title: 'Walnut Creek Addition', category: 'Additions', imageUrl: 'https://picsum.photos/seed/p4/600/400' },
  { id: '5', title: 'San Ramon Custom Cabinets', category: 'Custom', imageUrl: 'https://picsum.photos/seed/p5/600/400' },
  { id: '6', title: 'Dublin Outdoor Oasis', category: 'Exterior', imageUrl: 'https://picsum.photos/seed/p6/600/400' },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    author: 'Robert M.',
    role: 'Pleasanton Resident',
    content: 'Debernardi Development transformed our outdated kitchen into a modern masterpiece. Their attention to detail and professional communication made the process stress-free.',
    rating: 5,
  },
  {
    id: 't2',
    author: 'Linda K.',
    role: 'Danville Homeowner',
    content: 'The best general contractors in the Bay Area. They stick to the schedule and the quality of finish is consistently excellent.',
    rating: 5,
  },
  {
    id: 't3',
    author: 'James W.',
    role: 'Walnut Creek Client',
    content: 'Efficient, transparent, and highly skilled. They handled our home renovation with minimal disruption. Highly recommend for any remodeling needs.',
    rating: 5,
  },
];

export const FAQS: FAQ[] = [
  {
    question: 'What is the difference between renovation and remodeling?',
    answer: 'A remodel involves altering the structure of a space, like installing a new shower or removing a wall. A renovation aims to restore or update surfaces. We specialize in both!',
  },
  {
    question: 'Are you licensed and insured in California?',
    answer: 'Yes, we are fully licensed (License #604607, B and C17) and insured to operate across the San Francisco Bay Area.',
  },
  {
    question: 'How long does a typical kitchen or bathroom remodel take?',
    answer: 'Timelines vary by scope. A specialized kitchen remodel typically takes 4-8 weeks, while bathrooms can be finished in 3-5 weeks depending on custom features.',
  },
  {
    question: 'Which areas of the Bay Area do you serve?',
    answer: 'We serve Pleasanton, Dublin, Livermore, Danville, San Ramon, Walnut Creek, Los Altos, Los Gatos, Palo Alto, and surrounding communities.',
  },
];
