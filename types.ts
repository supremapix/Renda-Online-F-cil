export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  category: 'ebook' | 'course' | 'tool';
}

export interface Tutorial {
  id: string;
  title: string;
  duration: string;
  thumbnail: string;
  isPremium: boolean;
  videoUrl?: string; // Placeholder for real video URL
}

export interface AffiliateLink {
  id: string;
  name: string;
  description: string;
  url: string;
  icon: string;
}