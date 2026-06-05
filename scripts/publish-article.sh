#!/bin/bash
# ToolPedia 每日文章自动化发布脚本
# Usage: ./scripts/publish-article.sh "Best Free Online Image Compressors"

set -e

ARTICLE_TITLE="${1:-}"
if [ -z "$ARTICLE_TITLE" ]; then
  echo "Usage: $0 \"Article Title\""
  exit 1
fi

cd /home/ubuntu/toolpedia

# Pull latest
git pull origin main 2>/dev/null || echo "No remote configured, skipping pull"

# Generate article using GPT-5.4 (placeholder — actual generation done by cron job)
echo "Article: $ARTICLE_TITLE"

# Build
npm run build 2>&1 | tail -5

# Push
git add -A
git commit -m "Daily update: $ARTICLE_TITLE" 2>/dev/null || echo "Nothing to commit"
git push origin main 2>/dev/null || echo "No remote configured, skipping push"

echo "Done!"
