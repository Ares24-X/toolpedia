#!/bin/bash
# ToolPedia 每日自动文章生成+发布脚本
# 由 OpenClaw cron 每日触发

set -e
cd /home/ubuntu/toolpedia

# Git pull latest
git pull origin main 2>/dev/null || echo "First push after build"

# Generate a new article via OpenClaw session
# 这里由 cron job 传入文章内容
echo "ToolPedia auto-publish triggered at $(date)" >> /tmp/toolpedia-publish.log

# Build
npm run build 2>&1 | tail -3

# Push to GitHub
git add -A
git commit -m "Daily update: $(date +%Y-%m-%d)" 2>/dev/null || echo "Nothing to commit"
git push origin main 2>/dev/null || echo "Push issues"

echo "Done: $(date)" >> /tmp/toolpedia-publish.log
