
import React from 'react';
import { Service, TeamMember, BlogPost, Milestone } from './types';
import { BrainCircuit, Code, Palette, BarChart3, Bot, Search } from 'lucide-react';

const iconClass = "h-12 w-12 text-primary";

export const SERVICES: Service[] = [
  {
    id: 'ai-solutions',
    title: 'AI Solutions',
    description: 'Leveraging cutting-edge AI to solve complex business problems.',
    longDescription: 'Our AI solutions harness the power of machine learning and deep learning to provide predictive analytics, natural language processing, and computer vision capabilities. We help you unlock insights from your data and automate processes for greater efficiency.',
    icon: <BrainCircuit className={iconClass} />,
  },
  {
    id: 'web-development',
    title: 'Web Development',
    description: 'Building robust, scalable, and beautiful web applications.',
    longDescription: 'From responsive marketing sites to complex enterprise web applications, our development team uses modern technologies like React, Next.js, and Node.js to build fast, secure, and scalable solutions tailored to your specific needs.',
    icon: <Code className={iconClass} />,
  },
  {
    id: 'product-design',
    title: 'Product Design',
    description: 'Crafting intuitive and engaging user experiences (UI/UX).',
    longDescription: 'We believe that great products are born from a deep understanding of user needs. Our design process is collaborative and iterative, focusing on creating interfaces that are not only beautiful but also intuitive, accessible, and enjoyable to use.',
    icon: <Palette className={iconClass} />,
  },
  {
    id: 'data-analytics',
    title: 'Data Analytics',
    description: 'Turning raw data into actionable business intelligence.',
    longDescription: 'In the age of big data, making sense of your information is key. We provide comprehensive data analytics services, including data visualization, business intelligence dashboards, and statistical analysis to help you make data-driven decisions.',
    icon: <BarChart3 className={iconClass} />,
  },

];

export const TEAM_MEMBERS: TeamMember[] = [
  { id: '1', name: 'Rejin Varghese', role: 'CEO & Founder', bio: 'Visionary leader with a passion for technology and innovation.', imageUrl: '/rejin.png' },
 
];

export const BLOG_POSTS: BlogPost[] = [
  { id: '1', title: 'The Future of AI in Business', excerpt: 'Discover how artificial intelligence is set to revolutionize industries from finance to healthcare...', content: 'Full blog post content about the future of AI. It would be a long-form article discussing various aspects, case studies, and predictions. The content would be formatted with paragraphs, headings, and possibly lists to be engaging for the reader.', author: 'Jane Doe', date: 'October 26, 2023', imageUrl: 'https://picsum.photos/seed/blog1/800/600' },
  { id: '2', title: '10 UI/UX Design Trends for 2024', excerpt: 'Stay ahead of the curve with these upcoming trends in user interface and experience design...', content: 'Full blog post about UI/UX design trends. This article would detail trends like brutalism, glassmorphism, AI-generated content, and more, providing examples for each.', author: 'Emily White', date: 'October 22, 2023', imageUrl: 'https://picsum.photos/seed/blog2/800/600' },
  { id: '3', title: 'Getting Started with Data Analytics', excerpt: 'A beginner\'s guide to understanding and leveraging data for business growth...', content: 'This post would be a comprehensive guide for businesses looking to get started with data analytics. It would cover the basics, the tools needed, and the first steps to take.', author: 'Michael Brown', date: 'October 18, 2023', imageUrl: 'https://picsum.photos/seed/blog3/800/600' },
  { id: '4', title: 'Why Your Next Web App Should Use React', excerpt: 'An in-depth look at the benefits of using React for modern web development...', content: 'This technical article would explore the advantages of React, such as its component-based architecture, performance benefits with the virtual DOM, and the vast ecosystem.', author: 'John Smith', date: 'October 15, 2023', imageUrl: 'https://picsum.photos/seed/blog4/800/600' },
];

export const MILESTONES: Milestone[] = [
    { year: '2025', event: 'Aptivora Founded' },
    { year: '2025', event: 'Expanded Team to 10+ Members' },
    { year: '2025', event: 'Reached  Happy Clients' },
];
