# ToolPedia — Free Online Tools & Resources

多语言在线工具评测内容站。每天自动发布文章。

## 技术栈

- **框架**: Astro (静态站点)
- **多语言**: 英语 / 日语 / 德语 / 西班牙语
- **托管**: Cloudflare Pages
- **内容模型**: GPT-5.4 (日常) + Claude Opus (深度内容)

## 目录结构

```
src/
├── pages/             # 页面 (i18n 路由)
│   ├── [locale]/
│   │   ├── index.astro           # 首页
│   │   ├── [pillar]/index.astro   # 分类页
│   │   └── [pillar]/[slug].astro  # 文章页
├── layouts/
│   └── BaseLayout.astro           # 主布局
├── data/
│   ├── articles.json              # 文章元数据
│   ├── article-content.json       # 文章正文
│   └── articles.ts                # 辅助函数
└── i18n/
    └── translations.ts            # 多语言文案
```

## 本地开发

```bash
npm run dev
```

## 部署

```bash
npm run build
# 将 dist/ 目录部署到 Cloudflare Pages
```

## 内容更新

文章通过 GitHub Actions 或 cron job 自动发布。

1. 更新 `src/data/articles.json` 添加新文章元数据
2. 更新 `src/data/article-content.json` 添加正文
3. `npm run build` 构建
4. 推送 GitHub，Cloudflare Pages 自动部署
