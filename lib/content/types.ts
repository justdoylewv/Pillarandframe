export type ServiceName = "Trust Engine" | "Systems Coaching";

export type VideoProvider = "youtube" | "vimeo" | "mux" | "gdrive";

export interface Tier {
  number: string;
  name: string;
  subtitle: string;
  bestFor: string;
  filming: string;
  longFilms: string;
  shortVideos: string;
  foundations: string;
  distributionGuide: string;
  monthlyCoaching: string;
  delivery: string;
  investment: string;
  mostPopular: boolean;
}

export interface TierDetail {
  number: string;
  heading: string;
  paragraphs: string[];
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface PullQuote {
  quote: string;
  attribution: string | null;
}

export interface CaseStudy {
  slug: string;
  client: string;
  service: ServiceName;
  tags: string[];
  oneLiner: string;
  metaTitle: string;
  metaDescription: string;
  story: string;
  pullQuote: PullQuote | null;
  whatWeBuilt: string[];
  stats: Stat[];
  heroImage: string | null;
  gallery: string[];
  videoUrl: string | null;
  videoProvider: VideoProvider | null;
  nextSlug: string;
  ctaHeading: string;
  ctaServiceLabel: string;
  ctaServiceHref: string;
}
