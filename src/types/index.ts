export interface TourPackage {
  id: number;
  slug: string;
  title: string;
  duration: string;
  nights: string;
  tagline: string;
  description: string;
  includes: string[];
  idealFor: string[];
  image: string;
  category: PackageCategory;
  featured?: boolean;
  badge?: string;
}

export type PackageCategory =
  | "discovery"
  | "luxury"
  | "heritage"
  | "wildlife"
  | "wellness"
  | "romance"
  | "adventure"
  | "family"
  | "senior"
  | "corporate";

export interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  review: string;
  avatar: string;
  package: string;
}

export interface EnquiryFormData {
  name: string;
  email: string;
  phone: string;
  city: string;
  packageInterest: string;
  travelDates: string;
  groupSize: string;
  budget: string;
  message: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface StatItem {
  value: string;
  label: string;
  icon: string;
}
