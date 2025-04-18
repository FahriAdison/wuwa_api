/**
 * Data loading utilities for Wuthering Waves API
 * Converted from Golang to JavaScript
 */

const fs = require('fs');
const path = require('path');

/**
 * Load JSON data from a file
 * @param {string} filePath - Path to the JSON file
 * @returns {Object} Parsed JSON data
 */
const loadJsonData = (filePath) => {
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error(`Error loading data from ${filePath}:`, error);
    throw new Error(`Failed to load data from ${filePath}`);
  }
};

/**
 * Load character data
 * @returns {Array} Array of character objects
 */
const loadCharacters = () => {
  const charactersPath = path.join(__dirname, '../../data/characters.json');
  try {
    return loadJsonData(charactersPath);
  } catch (error) {
    console.error('Error loading characters:', error);
    return { characters: [] };
  }
};

/**
 * Load weapon data
 * @returns {Array} Array of weapon objects
 */
const loadWeapons = () => {
  const weaponsPath = path.join(__dirname, '../../data/weapons.json');
  try {
    return loadJsonData(weaponsPath);
  } catch (error) {
    console.error('Error loading weapons:', error);
    return { weapons: [] };
  }
};

/**
 * Load echo data
 * @returns {Array} Array of echo objects
 */
const loadEchoes = () => {
  const echoesPath = path.join(__dirname, '../../data/echoes.json');
  try {
    return loadJsonData(echoesPath);
  } catch (error) {
    console.error('Error loading echoes:', error);
    return { echoes: [] };
  }
};

/**
 * Load attribute data
 * @returns {Array} Array of attribute objects
 */
const loadAttributes = () => {
  const attributesPath = path.join(__dirname, '../../data/attributes.json');
  try {
    return loadJsonData(attributesPath);
  } catch (error) {
    console.error('Error loading attributes:', error);
    return { attributes: [] };
  }
};

/**
 * Load sonata data
 * @returns {Array} Array of sonata objects
 */
const loadSonatas = () => {
  const sonatasPath = path.join(__dirname, '../../data/sonatas.json');
  try {
    return loadJsonData(sonatasPath);
  } catch (error) {
    console.error('Error loading sonatas:', error);
    return { sonatas: [] };
  }
};

/**
 * Load stat data
 * @returns {Array} Array of stat objects
 */
const loadStats = () => {
  const statsPath = path.join(__dirname, '../../data/stats.json');
  try {
    return loadJsonData(statsPath);
  } catch (error) {
    console.error('Error loading stats:', error);
    return { stats: [] };
  }
};

/**
 * Load substat data
 * @returns {Array} Array of substat objects
 */
const loadSubstats = () => {
  const substatsPath = path.join(__dirname, '../../data/substats.json');
  try {
    return loadJsonData(substatsPath);
  } catch (error) {
    console.error('Error loading substats:', error);
    return { substats: [] };
  }
};

/**
 * Load code data
 * @returns {Array} Array of code objects
 */
const loadCodes = () => {
  const codesPath = path.join(__dirname, '../../data/codes.json');
  try {
    return loadJsonData(codesPath);
  } catch (error) {
    console.error('Error loading codes:', error);
    return { codes: [] };
  }
};

module.exports = {
  loadJsonData,
  loadCharacters,
  loadWeapons,
  loadEchoes,
  loadAttributes,
  loadSonatas,
  loadStats,
  loadSubstats,
  loadCodes
};
