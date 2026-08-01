export interface Activity {
  id: string;
  slug: string;
  title: string;
  category: string;
  date: string;
  description: string;
  image: string;
  images?: string[];
  content: string;
  contentHtml?: string;
}

export interface Publication {
  id: string;
  slug: string;
  title: string;
  author: string;
  year: number;
  category: string;
  description: string;
  cover: string;
  downloadUrl?: string;
}

export interface NavItem {
  label: string;
  href?: string;
  subItems?: NavItem[];
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image?: string;
}

export interface News {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
}
