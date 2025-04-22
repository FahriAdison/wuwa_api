/**
 * Sonata routes for Wuthering Waves API
 * Converted from Golang to JavaScript
 */

const express = require('express');
const router = express.Router();
const { loadSonatas } = require('../utils/loaders');
const { lowercaseMiddleware } = require('../utils/middleware');

// Apply middleware
router.use(lowercaseMiddleware);

/**
 * GET /sonatas
 * Get all sonatas
 */
router.get('/', (req, res) => {
  try {
    const data = loadSonatas();
    res.json(data);
  } catch (error) {
    res.status(500).json({
      error: 'Internal Server Error',
      message: error.message
    });
  }
});

/**
 * GET /sonatas/:name
 * Get sonata by name
 */
router.get('/:name', (req, res) => {
  try {
    const { name } = req.params;
    const data = loadSonatas();
    
    // Find sonata by name (case insensitive)
    const sonata = data.sonatas.find(
      s => s.name.toLowerCase() === name.toLowerCase()
    );
    
    if (!sonata) {
      return res.status(404).json({
        error: 'Not Found',
        message: `Sonata "${name}" not found`
      });
    }
    
    res.json(sonata);
  } catch (error) {
    res.status(500).json({
      error: 'Internal Server Error',
      message: error.message
    });
  }
});

module.exports = router;
