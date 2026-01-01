
import React from 'react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  imageUrl: string;
  checklist?: string[];
}

export interface Project {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  description?: string;
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  content: string;
  rating: number;
}

export interface FAQ {
  question: string;
  answer: string;
}