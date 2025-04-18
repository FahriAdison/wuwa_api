/**
 * Common routes for Wuthering Waves API
 * Converted from Golang to JavaScript
 */

const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');

/**
 * GET /version
 * Get API version
 */
router.get('/version', (req, res) => {
  res.json({
    version: '2.2',
    game: 'Wuthering Waves',
    updated: new Date().toISOString().split('T')[0]
  });
});

/**
 * GET /status
 * Get API status
 */
router.get('/status', (req, res) => {
  res.json({
    status: 'online',
    uptime: process.uptime(),
    timestamp: new Date().toISOString()
  });
});

/**
 * GET /info
 * Get API information
 */
router.get('/info', (req, res) => {
  res.json({
    name: 'Wuthering Waves API',
    version: '2.2',
    description: 'REST API for Wuthering Waves game data',
    endpoints: [
      '/characters',
      '/weapons',
      '/echoes',
      '/attributes',
      '/sonatas',
      '/stats',
      '/substats',
      '/codes',
      '/version',
      '/status',
      '/info'
    ],
    source: 'https://github.com/your-username/wuthering-waves-api',
    license: 'MIT'
  });
});

module.exports = router;
