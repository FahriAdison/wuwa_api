/**
 * Echo routes for Wuthering Waves API
 * Converted from Golang to JavaScript
 */

const express = require('express');
const router = express.Router();
const { loadEchoes } = require('../utils/loaders');
const { lowercaseMiddleware } = require('../utils/middleware');

// Apply middleware
router.use(lowercaseMiddleware);

/**
 * GET /echoes
 * Get all echoes
 */
router.get('/', (req, res) => {
  try {
    const data = loadEchoes();
    res.json(data);
  } catch (error) {
    res.status(500).json({
      error: 'Internal Server Error',
      message: error.message
    });
  }
});

/**
 * GET /echoes/:name
 * Get echo by name
 */
router.get('/:name', (req, res) => {
  try {
    const { name } = req.params;
    const data = loadEchoes();
    
    // Find echo by name (case insensitive)
    const echo = data.echoes.find(
      e => e.name.toLowerCase() === name.toLowerCase()
    );
    
    if (!echo) {
      return res.status(404).json({
        error: 'Not Found',
        message: `Echo "${name}" not found`
      });
    }
    
    res.json(echo);
  } catch (error) {
    res.status(500).json({
      error: 'Internal Server Error',
      message: error.message
    });
  }
});

/**
 * GET /echoes/type/:type
 * Get echoes by type
 */
router.get('/type/:type', (req, res) => {
  try {
    const { type } = req.params;
    const data = loadEchoes();
    
    // Filter echoes by type (case insensitive)
    const echoes = data.echoes.filter(
      e => e.type.toLowerCase() === type.toLowerCase()
    );
    
    if (echoes.length === 0) {
      return res.status(404).json({
        error: 'Not Found',
        message: `No echoes found with type "${type}"`
      });
    }
    
    res.json({ echoes });
  } catch (error) {
    res.status(500).json({
      error: 'Internal Server Error',
      message: error.message
    });
  }
});

/**
 * GET /echoes/rarity/:rarity
 * Get echoes by rarity
 */
router.get('/rarity/:rarity', (req, res) => {
  try {
    const rarity = parseInt(req.params.rarity);
    
    if (isNaN(rarity) || rarity < 1 || rarity > 5) {
      return res.status(400).json({
        error: 'Bad Request',
        message: 'Rarity must be a number between 1 and 5'
      });
    }
    
    const data = loadEchoes();
    
    // Filter echoes by rarity
    const echoes = data.echoes.filter(
      e => e.rarity === rarity
    );
    
    if (echoes.length === 0) {
      return res.status(404).json({
        error: 'Not Found',
        message: `No echoes found with rarity ${rarity}`
      });
    }
    
    res.json({ echoes });
  } catch (error) {
    res.status(500).json({
      error: 'Internal Server Error',
      message: error.message
    });
  }
});

module.exports = router;
