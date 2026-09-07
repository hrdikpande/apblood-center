export interface FaqItem {
  question: string;
  answer: string;
}

/** A short Telugu-language FAQ pair, per the brief's local SEO/Telugu layer. */
export interface BilingualFaqItem extends FaqItem {
  questionTelugu: string;
  answerTelugu: string;
}

export interface InfoBlock {
  title: string;
  description: string;
}

export interface ConditionEntry {
  slug: string;
  /** e.g. "Leukemia" */
  name: string;
  /** Short plural/descriptive form used in card grids, e.g. "Leukemia" */
  shortLabel: string;
  metaTitle: string;
  metaDescription: string;
  /** 2-3 sentence extractable direct-answer definition (GEO). No superlatives. */
  directAnswer: string;
  understanding: string[];
  symptoms: string[];
  whenToSeeDoctor: string[];
  diagnosis: InfoBlock[];
  treatmentOptions: InfoBlock[];
  whyHere: string[];
  faqs: FaqItem[];
  ctaHeading: string;
  ctaBody: string;
  /** ISO date string, e.g. "2026-06-01" */
  reviewDate: string;
}

export interface TreatmentEntry {
  slug: string;
  name: string;
  shortLabel: string;
  metaTitle: string;
  metaDescription: string;
  directAnswer: string;
  understanding: string[];
  /** What the procedure/treatment involves, step by step or by phase */
  process: InfoBlock[];
  /** Who this treatment is suitable for */
  candidacy: string[];
  whatToExpect: string[];
  whyHere: string[];
  faqs: FaqItem[];
  ctaHeading: string;
  ctaBody: string;
  reviewDate: string;
}

export interface BlogSection {
  heading?: string;
  paragraphs: string[];
}

export type BlogCategory =
  | "Blood Cancer"
  | "Blood Disorders"
  | "Treatments"
  | "Patient Guides";

export interface BlogPostEntry {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  category: BlogCategory;
  publishDate: string;
  readingTimeMinutes: number;
  directAnswer: string;
  sections: BlogSection[];
  faqs: FaqItem[];
  reviewDate: string;
}

export interface Testimonial {
  name: string;
  location: string;
  quote: string;
  rating: 1 | 2 | 3 | 4 | 5;
  condition?: string;
}
