// Helper functions for articles.json
import articlesData from './articles.json';

export const pillarConfig: Record<string, { icon: string; color: string; bg: string }> = {
  reviews:  { icon: '🔍', color: '#2563eb', bg: '#eef4ff' },
  tutorials:{ icon: '📖', color: '#7c3aed', bg: '#f3eeff' },
  pdf:      { icon: '📄', color: '#dc2626', bg: '#feeef0' },
  design:   { icon: '🎨', color: '#0891b2', bg: '#ecfeff' },
  trends:   { icon: '📈', color: '#059669', bg: '#ecfdf5' },
};

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
