/**
 * Attribute routes for Wuthering Waves API
 * Converted from Golang to JavaScript
 */

const express = require('express');
const router = express.Router();
const { loadAttributes } = require('../utils/loaders');
const { lowercaseMiddleware } = require('../utils/middleware');

// Apply middleware
router.use(lowercaseMiddleware);

/**
 * GET /attributes
 * Get all attributes
 */
router.get('/', (req, res) => {
  try {
    const data = loadAttributes();
    res.json(data);
  } catch (error) {
    res.status(500).json({
      error: 'Internal Server Error',
      message: error.message
    });
  }
});

/**
 * GET /attributes/:name
 * Get attribute by name
 */
router.get('/:name', (req, res) => {
  try {
    const { name } = req.params;
    const data = loadAttributes();
    
    // Find attribute by name (case insensitive)
    const attribute = data.attributes.find(
      a => a.name.toLowerCase() === name.toLowerCase()
    );
    
    if (!attribute) {
      return res.status(404).json({
        error: 'Not Found',
        message: `Attribute "${name}" not found`
      });
    }
    
    res.json(attribute);
  } catch (error) {
    res.status(500).json({
      error: 'Internal Server Error',
      message: error.message
    });
  }
});

module.exports = router;
