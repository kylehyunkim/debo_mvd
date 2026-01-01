
import React from 'react';
import { FAQ, Project, Service, Testimonial } from './types';

export const SERVICES: Service[] = [
  {
    id: 'home-improvement',
    title: 'The DeBernardi Approach',
    description: 'Our start-to-finish recipe for a successful and enjoyable project. We handle the heavy lifting so you can enjoy the results.',
    imageUrl: '/images/debopics/extra/debo.jpg',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    checklist: ['Streamlined Process', 'Collaborative Approach', 'Dedicated Support'],
  },
  {
    id: 'interior-design',
    title: 'Professional Sources',
    description: 'We leverage a network of high-quality interior designers and professional sources to ensure your project is aesthetically superior.',
    imageUrl: '/images/debopics/extra/debo2.jpg',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
    checklist: ['Curated Designer Network', 'Premium Materials', 'Aesthetic Excellence'],
  },
  {
    id: 'remodeling',
    title: 'Home Remodeling',
    description: 'Serving the Bay Area with specialized remodeling. From kitchens in Pleasanton to full home updates in Los Altos.',
    imageUrl: '/images/debopics/kitchen/kitchen7.jpg',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
    checklist: ['Expert Planning', 'Quality Craftsmanship', 'On-Time Completion'],
  },
  {
    id: 'custom-build',
    title: 'Custom Construction',
    description: 'Licensed B and C17 expertise. Room additions, custom cabinets, and structural changes that last a lifetime.',
    imageUrl: '/images/debopics/progress/progress6.jpg',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
      </svg>
    ),
    checklist: ['Licensed Expertise', 'Structural Integrity', 'Custom Solutions'],
  },
];

export const PROJECTS: Project[] = [
  // Kitchen Projects
  { id: 'k1', title: 'Modern Kitchen Remodel', category: 'Kitchen', imageUrl: '/images/debopics/kitchen/kitchen1.jpg' },
  { id: 'k2', title: 'Luxury Kitchen Design', category: 'Kitchen', imageUrl: '/images/debopics/kitchen/kitchen2.jpg' },
  { id: 'k3', title: 'Contemporary Kitchen', category: 'Kitchen', imageUrl: '/images/debopics/kitchen/kitchen3.jpg' },
  { id: 'k4', title: 'Custom Kitchen Cabinets', category: 'Kitchen', imageUrl: '/images/debopics/kitchen/kitchen4.jpg' },
  { id: 'k5', title: 'Gourmet Kitchen Renovation', category: 'Kitchen', imageUrl: '/images/debopics/kitchen/kitchen5.jpg' },
  { id: 'k6', title: 'Elegant Kitchen Transformation', category: 'Kitchen', imageUrl: '/images/debopics/kitchen/kitchen6.jpg' },
  
  // Bathroom Projects
  { id: 'b1', title: 'Luxury Bathroom Remodel', category: 'Bathroom', imageUrl: '/images/debopics/bathroom/bathroom1.jpg' },
  { id: 'b2', title: 'Modern Bathroom Design', category: 'Bathroom', imageUrl: '/images/debopics/bathroom/bathroom2.jpg' },
  { id: 'b3', title: 'Spa-Inspired Bathroom', category: 'Bathroom', imageUrl: '/images/debopics/bathroom/bathroom3.jpg' },
  { id: 'b4', title: 'Master Bathroom Renovation', category: 'Bathroom', imageUrl: '/images/debopics/bathroom/bathroom4.jpg' },
  { id: 'b5', title: 'Custom Bathroom Design', category: 'Bathroom', imageUrl: '/images/debopics/bathroom/bathroom5.jpg' },
  
  // Interior Projects
  { id: 'i1', title: 'Interior Design Project', category: 'Interior', imageUrl: '/images/debopics/interior/interior.jpg' },
  
  // Exterior Projects (from "nice" folder)
  { id: 'e1', title: 'Exterior Home Design', category: 'Exterior', imageUrl: '/images/debopics/nice/nice1.jpg' },
  { id: 'e2', title: 'Custom Exterior Renovation', category: 'Exterior', imageUrl: '/images/debopics/nice/nice2.jpg' },
  { id: 'e3', title: 'Modern Exterior Design', category: 'Exterior', imageUrl: '/images/debopics/nice/nice3.jpg' },
  { id: 'e4', title: 'Luxury Exterior Project', category: 'Exterior', imageUrl: '/images/debopics/nice/nice4.jpg' },
  { id: 'e5', title: 'Elegant Exterior Transformation', category: 'Exterior', imageUrl: '/images/debopics/nice/nice5.jpg' },
  { id: 'e6', title: 'Contemporary Exterior', category: 'Exterior', imageUrl: '/images/debopics/nice/nice6.jpg' },
  { id: 'e7', title: 'Premium Exterior Design', category: 'Exterior', imageUrl: '/images/debopics/nice/nice7.jpg' },
  { id: 'e8', title: 'Custom Exterior Build', category: 'Exterior', imageUrl: '/images/debopics/nice/nice8.jpg' },
  
  // Commercial Projects
  { id: 'c1', title: 'Commercial Space Design', category: 'Commercial', imageUrl: '/images/debopics/commercial/commercial1.jpg' },
  { id: 'c2', title: 'Commercial Renovation', category: 'Commercial', imageUrl: '/images/debopics/commercial/commercial2.jpg' },
  { id: 'c3', title: 'Professional Commercial Build', category: 'Commercial', imageUrl: '/images/debopics/commercial/commercial3.jpg' },
  { id: 'c4', title: 'Commercial Construction Project', category: 'Commercial', imageUrl: '/images/debopics/commercial/commercial4.jpg' },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    author: 'Robert M.',
    role: 'Pleasanton Resident',
    content: 'DeBernardi Development transformed our outdated kitchen into a modern masterpiece. Their attention to detail and professional communication made the process stress-free.',
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
  {
    question: 'Why should I hire a general contractor and not contract with individual specialists myself?',
    answer: 'Building a custom construction project is an inherently problematic and stressful task. One of the biggest challenges is foreseeing all of the potential problems and, in jobs with many different trades, making sure that every different task has been thought of and is covered in at least one subcontractors scope of work. This job should be left to someone with a very high level of experience and skill. There is also the FULL TIME task of coordinating all of these trades and making sure everyone plays nice. That coordination cannot be left to chance if superior results are expected.',
  },
];
