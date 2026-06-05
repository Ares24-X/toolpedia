// src/i18n/translations.ts
export const siteConfig = {
  en: {
    siteTitle: 'ToolPedia — Free Online Tools & Resources',
    siteDesc: 'Honest reviews, comparisons, and tutorials for the best free online tools.',
    nav: { reviews: 'Reviews & Comparisons', tutorials: 'Tutorials', pdf: 'PDF Tools', design: 'Design Tools', trends: 'Trends & Insights' },
    footer: 'ToolPedia is an independent resource site. Some links may be affiliate links.',
    readMore: 'Read More',
    published: 'Published',
    by: 'By',
    related: 'Related Articles',
  },
  ja: {
    siteTitle: 'ToolPedia — 無料オンラインツールとリソース',
    siteDesc: '最高の無料オンラインツールに関する正直なレビュー、比較、チュートリアル。',
    nav: { reviews: 'レビュー＆比較', tutorials: 'チュートリアル', pdf: 'PDFツール', design: 'デザインツール', trends: 'トレンド＆インサイト' },
    footer: 'ToolPediaは独立したリソースサイトです。一部のリンクはアフィリエイトリンクの場合があります。',
    readMore: '続きを読む',
    published: '公開日',
    by: '作成者',
    related: '関連記事',
  },
  de: {
    siteTitle: 'ToolPedia — Kostenlose Online-Tools & Ressourcen',
    siteDesc: 'Ehrliche Bewertungen, Vergleiche und Anleitungen zu den besten kostenlosen Online-Tools.',
    nav: { reviews: 'Bewertungen & Vergleiche', tutorials: 'Anleitungen', pdf: 'PDF-Tools', design: 'Design-Tools', trends: 'Trends & Einblicke' },
    footer: 'ToolPedia ist eine unabhängige Ressourcenseite. Einige Links können Affiliate-Links sein.',
    readMore: 'Weiterlesen',
    published: 'Veröffentlicht',
    by: 'Von',
    related: 'Verwandte Artikel',
  },
  es: {
    siteTitle: 'ToolPedia — Herramientas y Recursos Gratuitos',
    siteDesc: 'Reseñas honestas, comparaciones y tutoriales de las mejores herramientas gratuitas en línea.',
    nav: { reviews: 'Reseñas y Comparativas', tutorials: 'Tutoriales', pdf: 'Herramientas PDF', design: 'Herramientas de Diseño', trends: 'Tendencias' },
    footer: 'ToolPedia es un sitio de recursos independiente. Algunos enlaces pueden ser de afiliados.',
    readMore: 'Leer Más',
    published: 'Publicado',
    by: 'Por',
    related: 'Artículos Relacionados',
  },
};

export type Locale = keyof typeof siteConfig;
