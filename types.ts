// FIX: Import React to use React.ReactNode type.
import React from 'react';

export interface Service {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  icon: React.ReactNode;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
}

export interface BlogPost {
  id: string;
  title:string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  imageUrl: string;
}

export interface Milestone {
  year: string;
  event: string;
}