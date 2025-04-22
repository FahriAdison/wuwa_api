/**
 * Stat routes for Wuthering Waves API
 * Converted from Golang to JavaScript
 */

const express = require('express');
const router = express.Router();
const { loadStats } = require('../utils/loaders');
const { lowercaseMiddleware } = require('../utils/middleware');

// Apply middleware
router.use(lowercaseMiddleware);

/**
 * GET /stats
 * Get all stats
 */
router.get('/', (req, res) => {
  try {
    const data = loadStats();
    res.json(data);
  } catch (error) {
    res.status(500).json({
      error: 'Internal Server Error',
      message: error.message
    });
  }
});

/**
 * GET /stats/:name
 * Get stat by name
 */
router.get('/:name', (req, res) => {
  try {
    const { name } = req.params;
    const data = loadStats();
    
    // Find stat by name (case insensitive)
    const stat = data.stats.find(
      s => s.name.toLowerCase() === name.toLowerCase()
    );
    
    if (!stat) {
      return res.status(404).json({
        error: 'Not Found',
        message: `Stat "${name}" not found`
      });
    }
    
    res.json(stat);
  } catch (error) {
    res.status(500).json({
      error: 'Internal Server Error',
      message: error.message
    });
  }
});

module.exports = router;
