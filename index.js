/**
 * Wuthering Waves API - JavaScript Version
 * Converted from resonance-rest/api (Golang)
 * Updated for Wuthering Waves version 2.2
 */

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const fs = require('fs');
const path = require('path');

// Import routes
const characterRoutes = require('./src/routes/character_routes');
const weaponRoutes = require('./src/routes/weapon_routes');
const echoRoutes = require('./src/routes/echo_routes');
const attributeRoutes = require('./src/routes/attribute_routes');
const sonataRoutes = require('./src/routes/sonata_routes');
const statRoutes = require('./src/routes/stat_routes');
const substatRoutes = require('./src/routes/substat_routes');
const codeRoutes = require('./src/routes/code_routes');
const commonRoutes = require('./src/routes/common_routes');

// Initialize express app
const app = express();
const PORT = process.env.PORT || 3000;

// Trust proxy - needed for rate limiting behind proxies
app.set('trust proxy', 1);

// Middleware
app.use(helmet({
  contentSecurityPolicy: false, // Disable CSP for simplicity in development
})); 
app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Parse JSON bodies

// Serve static files from public directory
app.use(express.static(path.join(__dirname, 'public')));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  standardHeaders: true,
  legacyHeaders: false,
  message: 'Too many requests from this IP, please try again after 15 minutes'
});
app.use('/api', limiter); // Apply rate limiting to API routes only

// Documentation URL
const docsURL = 'https://github.com/FahriAdison/wuwa_api';

// API Routes with /api prefix
app.use('/api/characters', characterRoutes);
app.use('/api/weapons', weaponRoutes);
app.use('/api/echoes', echoRoutes);
app.use('/api/attributes', attributeRoutes);
app.use('/api/sonatas', sonataRoutes);
app.use('/api/stats', statRoutes);
app.use('/api/substats', substatRoutes);
app.use('/api/codes', codeRoutes);
app.use('/api', commonRoutes);

// API Root route
app.get('/api', (req, res) => {
  res.json({
    message: 'Welcome to Wuthering Waves API (JavaScript Version)',
    version: '2.2',
    documentation: docsURL,
    endpoints: [
      '/api/characters',
      '/api/weapons',
      '/api/echoes',
      '/api/attributes',
      '/api/sonatas',
      '/api/stats',
      '/api/substats',
      '/api/codes'
    ]
  });
});

// Root route - serve the landing page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Documentation page route
app.get('/documentation', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'documentation.html'));
});

// Widgets demo page
app.get('/widgets', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'widgets.html'));
});

// 404 handler for API routes
app.use('/api/*', (req, res) => {
  res.status(404).json({
    error: 'Not Found',
    message: `The requested endpoint ${req.originalUrl} does not exist.`,
    documentation: docsURL
  });
});

// 404 handler for non-API routes - serve index.html for client-side routing
app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  if (req.originalUrl.startsWith('/api')) {
    // API error response
    res.status(500).json({
      error: 'Internal Server Error',
      message: 'Something went wrong on the server.',
      documentation: docsURL
    });
  } else {
    // UI error response
    res.status(500).sendFile(path.join(__dirname, 'public', 'error.html'));
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Wuthering Waves API server running on port ${PORT}`);
});

module.exports = app; // For Vercel serverless deployment
