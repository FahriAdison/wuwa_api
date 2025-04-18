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

// Middleware
app.use(helmet()); // Security headers
app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Parse JSON bodies

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  standardHeaders: true,
  legacyHeaders: false,
  message: 'Too many requests from this IP, please try again after 15 minutes'
});
app.use(limiter);

// Documentation URL
const docsURL = 'https://github.com/your-username/wuthering-waves-api';

// Routes
app.use('/characters', characterRoutes);
app.use('/weapons', weaponRoutes);
app.use('/echoes', echoRoutes);
app.use('/attributes', attributeRoutes);
app.use('/sonatas', sonataRoutes);
app.use('/stats', statRoutes);
app.use('/substats', substatRoutes);
app.use('/codes', codeRoutes);
app.use('/', commonRoutes);

// Root route
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to Wuthering Waves API (JavaScript Version)',
    version: '2.2',
    documentation: docsURL,
    endpoints: [
      '/characters',
      '/weapons',
      '/echoes',
      '/attributes',
      '/sonatas',
      '/stats',
      '/substats',
      '/codes'
    ]
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    error: 'Not Found',
    message: `The requested endpoint ${req.originalUrl} does not exist.`,
    documentation: docsURL
  });
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    error: 'Internal Server Error',
    message: 'Something went wrong on the server.',
    documentation: docsURL
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Wuthering Waves API server running on port ${PORT}`);
});

module.exports = app; // For Vercel serverless deployment
