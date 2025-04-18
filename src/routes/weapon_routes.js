/**
 * Weapon routes for Wuthering Waves API
 * Converted from Golang to JavaScript
 */

const express = require('express');
const router = express.Router();
const { loadWeapons } = require('../utils/loaders');
const { lowercaseMiddleware } = require('../utils/middleware');

// Apply middleware
router.use(lowercaseMiddleware);

/**
 * GET /weapons
 * Get all weapons
 */
router.get('/', (req, res) => {
  try {
    const data = loadWeapons();
    res.json(data);
  } catch (error) {
    res.status(500).json({
      error: 'Internal Server Error',
      message: error.message
    });
  }
});

/**
 * GET /weapons/:name
 * Get weapon by name
 */
router.get('/:name', (req, res) => {
  try {
    const { name } = req.params;
    const data = loadWeapons();
    
    // Find weapon by name (case insensitive)
    const weapon = data.weapons.find(
      w => w.name.toLowerCase() === name.toLowerCase()
    );
    
    if (!weapon) {
      return res.status(404).json({
        error: 'Not Found',
        message: `Weapon "${name}" not found`
      });
    }
    
    res.json(weapon);
  } catch (error) {
    res.status(500).json({
      error: 'Internal Server Error',
      message: error.message
    });
  }
});

/**
 * GET /weapons/type/:type
 * Get weapons by type
 */
router.get('/type/:type', (req, res) => {
  try {
    const { type } = req.params;
    const data = loadWeapons();
    
    // Filter weapons by type (case insensitive)
    const weapons = data.weapons.filter(
      w => w.type.toLowerCase() === type.toLowerCase()
    );
    
    if (weapons.length === 0) {
      return res.status(404).json({
        error: 'Not Found',
        message: `No weapons found with type "${type}"`
      });
    }
    
    res.json({ weapons });
  } catch (error) {
    res.status(500).json({
      error: 'Internal Server Error',
      message: error.message
    });
  }
});

/**
 * GET /weapons/rarity/:rarity
 * Get weapons by rarity
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
    
    const data = loadWeapons();
    
    // Filter weapons by rarity
    const weapons = data.weapons.filter(
      w => w.rarity === rarity
    );
    
    if (weapons.length === 0) {
      return res.status(404).json({
        error: 'Not Found',
        message: `No weapons found with rarity ${rarity}`
      });
    }
    
    res.json({ weapons });
  } catch (error) {
    res.status(500).json({
      error: 'Internal Server Error',
      message: error.message
    });
  }
});

module.exports = router;
