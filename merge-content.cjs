const fs = require('fs');

const tmpContent = JSON.parse(fs.readFileSync('src/data/article-content-tmp.json', 'utf8'));
const mainContent = JSON.parse(fs.readFileSync('src/data/article-content.json', 'utf8'));
mainContent['best-free-ai-image-generators'] = tmpContent['best-free-ai-image-generators'];
fs.writeFileSync('src/data/article-content.json', JSON.stringify(mainContent, null, 2));
console.log('OK: article-content.json updated, entries:', Object.keys(mainContent).length);
