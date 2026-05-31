/**
 * rss-import-guard.js
 * 
 * DROP THIS FILE into your scripts/ folder.
 * 
 * In package.json, REPLACE the prebuild/build script that calls the RSS fetcher with:
 *   "prebuild": "node scripts/rss-import-guard.js"
 *
 * If your existing RSS fetch script checks for a config value, you can also just
 * set rssImportUrl to "" in src/data/global/site.json — this file acts as a belt-and-
 * suspenders safety net to ensure the importer never runs on an empty URL.
 *
 * HOW TO FIND THE ORIGINAL RSS SCRIPT:
 * Check package.json for a prebuild or "fetch" script, e.g.:
 *   "prebuild": "node scripts/fetch-blog.js"
 *   "prebuild": "node scripts/import-rss.js"
 * Replace it with: "node scripts/rss-import-guard.js"
 */

import fs   from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const siteJsonPath = path.join(__dirname, '..', 'src', 'data', 'global', 'site.json');

let rssUrl = '';
try {
  const site = JSON.parse(fs.readFileSync(siteJsonPath, 'utf-8'));
  rssUrl = site.rssImportUrl || '';
} catch {
  // site.json not found or malformed — safe to skip
}

if (!rssUrl || rssUrl.trim() === '') {
  console.log('ℹ️  RSS import skipped — rssImportUrl is empty in site.json.');
  console.log('   Using local markdown posts from src/content/posts/ only.');
  process.exit(0);
}

// If a URL IS set, hand off to the original importer
console.log(`🔗 RSS import URL found: ${rssUrl}`);
console.log('   Running original importer...');

// Dynamic import of the real RSS fetch script if it exists
const importerPath = path.join(__dirname, 'fetch-blog.js');
if (fs.existsSync(importerPath)) {
  await import(importerPath);
} else {
  console.log('   No importer script found — continuing build without RSS import.');
}
