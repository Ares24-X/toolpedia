// Helper functions for articles.json
import articlesData from './articles.json';

export interface Article {
  slug: string;
  pillar: 'reviews' | 'tutorials' | 'pdf' | 'design' | 'trends';
  title: { en: string; ja: string; de: string; es: string };
  description: { en: string; ja: string; de: string; es: string };
  published: string;
  tags: string[];
  linkTool: 'pixelpdf' | 'exdreamcolors' | null;
}

export const articles: Article[] = articlesData as Article[];

export function getRecentArticles(count: number = 5): Article[] {
  return [...articles]
    .sort((a, b) => new Date(b.published).getTime() - new Date(a.published).getTime())
    .slice(0, count);
}
