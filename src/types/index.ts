export interface NavLink {
  label: string;
  href: string;
}

export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  icon: string;
  image: string;
  includes: string[];
}

export interface Review {
  author: string;
  initial: string;
  quote: string;
  project: string;
  rating: number;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
  category: string;
}

export interface Stat {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  display?: string;
}
