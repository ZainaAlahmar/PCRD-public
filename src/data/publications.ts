export interface Publication {
  id: string;
  slug: string;
  title: string;
  author: string;
  year: number;
  category: string;
  description: string;
  cover: string;
  downloadUrl: string;
}

export const publications: Publication[] = [
  {
    id: "1",
    slug: "why-are-we-late",
    title: "Why Are We Late? Readings between thought and reality",
    author: "Dr. Walid Shomaly",
    year: 2021,
    category: "Books",
    description: "Readings between thought and reality.",
    cover: "/images/publications/cover-1.png", // placeholder
    downloadUrl: "/documents/book-1.pdf",
  },
  {
    id: "2",
    slug: "bishop-munib-younan",
    title: "Bishop Munib Younan: The Man of Truth, Brotherhood and Belonging",
    author: "Dr. Walid Shomaly",
    year: 2022,
    category: "Books",
    description: "A comprehensive look at the life and contributions of Bishop Munib Younan.",
    cover: "/images/publications/cover-2.png", // placeholder
    downloadUrl: "/documents/book-2.pdf",
  },
  {
    id: "3",
    slug: "israel-from-idea-to-state",
    title: "Israel: From Idea to State, Is it to Demise?",
    author: "Dr. Walid Shomaly & Khader Issa Hawash",
    year: 2023,
    category: "Books",
    description: "An analytical study on the historical and contemporary aspects of the state.",
    cover: "/images/publications/cover-3.jpg", // placeholder
    downloadUrl: "/documents/book-3.pdf",
  },
];

export function getPublicationBySlug(slug: string): Publication | undefined {
  return publications.find((p) => p.slug === slug);
}
