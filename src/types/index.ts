export interface Service {
  id: string;
  title: string;
  slug: string;
  description: string;
  icon?: string;
  features?: string[];
  price?: string;
  priceNote?: string;
  order: number;
  active: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  description: string;
  thumbnail?: string;
  images: string[];
  category: string;
  tags: string[];
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  order: number;
  metaTitle?: string;
  metaDesc?: string;
  views: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface Post {
  id: string;
  title: string;
  slug: string;
  excerpt?: string;
  content: string;
  coverImage?: string;
  published: boolean;
  featured: boolean;
  category?: string;
  tags: string[];
  metaTitle?: string;
  metaDesc?: string;
  views: number;
  createdAt: Date;
  updatedAt: Date;
  author: {
    name: string | null;
    avatar: string | null;
  };
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company?: string;
  avatar?: string;
  content: string;
  rating: number;
  featured: boolean;
  createdAt: Date;
}

export interface Contact {
  id: string;
  name: string;
  email: string;
  subject?: string;
  message: string;
  status: "NEW" | "READ" | "REPLIED" | "ARCHIVED";
  spam: boolean;
  createdAt: Date;
}

export interface Analytics {
  id: string;
  page: string;
  views: number;
  uniqueViews: number;
  date: Date;
}

export interface Setting {
  id: string;
  key: string;
  value: string;
  category: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface NavItem {
  label: string;
  href: string;
  icon?: string;
}

export interface TimelineItem {
  phase: string;
  title: string;
  description: string;
  icon: string;
}

export interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  cta: string;
}
