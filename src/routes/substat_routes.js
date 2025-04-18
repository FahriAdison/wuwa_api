/**
 * Substat routes for Wuthering Waves API
 * Converted from Golang to JavaScript
 */

const express = require('express');
const router = express.Router();
const { loadSubstats } = require('../utils/loaders');
const { lowercaseMiddleware } = require('../utils/middleware');

// Apply middleware
router.use(lowercaseMiddleware);

/**
 * GET /substats
 * Get all substats
 */
router.get('/', (req, res) => {
  try {
    const data = loadSubstats();
    res.json(data);
  } catch (error) {
    res.status(500).json({
      error: 'Internal Server Error',
      message: error.message
    });
  }
});

/**
 * GET /substats/:name
 * Get substat by name
 */
router.get('/:name', (req, res) => {
  try {
    const { name } = req.params;
    const data = loadSubstats();
    
    // Find substat by name (case insensitive)
    const substat = data.substats.find(
      s => s.name.toLowerCase() === name.toLowerCase()
    );
    
    if (!substat) {
      return res.status(404).json({
        error: 'Not Found',
        message: `Substat "${name}" not found`
      });
    }
    
    res.json(substat);
  } catch (error) {
    res.status(500).json({
      error: 'Internal Server Error',
      message: error.message
    });
  }
});

module.exports = router;
