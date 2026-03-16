/**
 * MulaStar - Express server for Hostinger deployment
 * Serves static files and supports Hostinger's Node.js environment
 */

const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// Use dist/ if build was run, otherwise serve from project root
const staticDir = fs.existsSync(path.join(__dirname, 'dist'))
  ? path.join(__dirname, 'dist')
  : __dirname;

// Serve static files
app.use(express.static(staticDir, {
  extensions: ['html'],
  index: 'index.html',
  setHeaders: (res, filePath) => {
    if (path.extname(filePath) === '.html') {
      res.setHeader('Cache-Control', 'public, max-age=0');
    }
  }
}));

// Fallback: serve index.html for root
app.get('/', (req, res) => {
  res.sendFile(path.join(staticDir, 'index.html'));
});

// Health check for Hostinger
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok', service: 'mulastar' });
});

app.listen(PORT, () => {
  console.log(`MulaStar server running on port ${PORT}`);
});
