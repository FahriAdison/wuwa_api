/**
 * Character routes for Wuthering Waves API
 * Converted from Golang to JavaScript
 */

const express = require('express');
const router = express.Router();
const { loadCharacters } = require('../utils/loaders');
const { lowercaseMiddleware } = require('../utils/middleware');

// Apply middleware
router.use(lowercaseMiddleware);

/**
 * GET /characters
 * Get all characters
 */
router.get('/', (req, res) => {
  try {
    const data = loadCharacters();
    res.json(data);
  } catch (error) {
    res.status(500).json({
      error: 'Internal Server Error',
      message: error.message
    });
  }
});

/**
 * GET /characters/:name
 * Get character by name
 */
router.get('/:name', (req, res) => {
  try {
    const { name } = req.params;
    const data = loadCharacters();
    
    // Find character by name (case insensitive)
    const character = data.characters.find(
      char => char.name.toLowerCase() === name.toLowerCase()
    );
    
    if (!character) {
      return res.status(404).json({
        error: 'Not Found',
        message: `Character "${name}" not found`
      });
    }
    
    res.json(character);
  } catch (error) {
    res.status(500).json({
      error: 'Internal Server Error',
      message: error.message
    });
  }
});

/**
 * GET /characters/attribute/:attribute
 * Get characters by attribute
 */
router.get('/attribute/:attribute', (req, res) => {
  try {
    const { attribute } = req.params;
    const data = loadCharacters();
    
    // Filter characters by attribute (case insensitive)
    const characters = data.characters.filter(
      char => char.attribute.toLowerCase() === attribute.toLowerCase()
    );
    
    if (characters.length === 0) {
      return res.status(404).json({
        error: 'Not Found',
        message: `No characters found with attribute "${attribute}"`
      });
    }
    
    res.json({ characters });
  } catch (error) {
    res.status(500).json({
      error: 'Internal Server Error',
      message: error.message
    });
  }
});

/**
 * GET /characters/weapon/:weapon
 * Get characters by weapon type
 */
router.get('/weapon/:weapon', (req, res) => {
  try {
    const { weapon } = req.params;
    const data = loadCharacters();
    
    // Filter characters by weapon type (case insensitive)
    const characters = data.characters.filter(
      char => char.weapon.toLowerCase() === weapon.toLowerCase()
    );
    
    if (characters.length === 0) {
      return res.status(404).json({
        error: 'Not Found',
        message: `No characters found with weapon type "${weapon}"`
      });
    }
    
    res.json({ characters });
  } catch (error) {
    res.status(500).json({
      error: 'Internal Server Error',
      message: error.message
    });
  }
});

/**
 * GET /characters/rarity/:rarity
 * Get characters by rarity
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
    
    const data = loadCharacters();
    
    // Filter characters by rarity
    const characters = data.characters.filter(
      char => char.rarity === rarity
    );
    
    if (characters.length === 0) {
      return res.status(404).json({
        error: 'Not Found',
        message: `No characters found with rarity ${rarity}`
      });
    }
    
    res.json({ characters });
  } catch (error) {
    res.status(500).json({
      error: 'Internal Server Error',
      message: error.message
    });
  }
});

module.exports = router;
