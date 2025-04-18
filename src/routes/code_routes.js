/**
 * Code routes for Wuthering Waves API
 * Converted from Golang to JavaScript
 */

const express = require('express');
const router = express.Router();
const { loadCodes } = require('../utils/loaders');
const { lowercaseMiddleware } = require('../utils/middleware');

// Apply middleware
router.use(lowercaseMiddleware);

/**
 * GET /codes
 * Get all redemption codes
 */
router.get('/', (req, res) => {
  try {
    const data = loadCodes();
    res.json(data);
  } catch (error) {
    res.status(500).json({
      error: 'Internal Server Error',
      message: error.message
    });
  }
});

/**
 * GET /codes/:code
 * Get redemption code by code
 */
router.get('/:code', (req, res) => {
  try {
    const { code } = req.params;
    const data = loadCodes();
    
    // Find code by code (case insensitive)
    const redemptionCode = data.codes.find(
      c => c.code.toLowerCase() === code.toLowerCase()
    );
    
    if (!redemptionCode) {
      return res.status(404).json({
        error: 'Not Found',
        message: `Redemption code "${code}" not found`
      });
    }
    
    res.json(redemptionCode);
  } catch (error) {
    res.status(500).json({
      error: 'Internal Server Error',
      message: error.message
    });
  }
});

/**
 * GET /codes/active
 * Get all active redemption codes
 */
router.get('/active', (req, res) => {
  try {
    const data = loadCodes();
    
    // Filter active codes
    const activeCodes = data.codes.filter(c => c.active);
    
    res.json({ codes: activeCodes });
  } catch (error) {
    res.status(500).json({
      error: 'Internal Server Error',
      message: error.message
    });
  }
});

module.exports = router;
