/**
 * MulaStar - Build script for Hostinger deployment
 * Prepares static assets in dist/ directory for production
 */

const fs = require('fs');
const path = require('path');

const DIST = path.join(__dirname, 'dist');
const FILES = ['index.html', 'styles.css', 'script.js', 'robots.txt', 'sitemap.xml'];

// Create dist directory
if (!fs.existsSync(DIST)) {
  fs.mkdirSync(DIST, { recursive: true });
}

// Copy static files to dist
FILES.forEach(file => {
  const src = path.join(__dirname, file);
  const dest = path.join(DIST, file);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest);
    console.log(`Copied ${file} → dist/`);
  }
});

console.log('Build complete. Output: dist/');
