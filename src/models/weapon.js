/**
 * Weapon model for Wuthering Waves API
 * Converted from Golang to JavaScript
 */

/**
 * Weapon class representing a Wuthering Waves weapon
 */
class Weapon {
  /**
   * Create a new Weapon
   * @param {string} name - Weapon name
   * @param {string} type - Weapon type
   * @param {number} rarity - Weapon rarity (stars)
   * @param {string} description - Weapon description
   * @param {string} imageUrl - Weapon image URL
   * @param {Object} stats - Weapon base stats
   * @param {string} passive - Weapon passive ability
   * @param {string} passiveDescription - Weapon passive description
   */
  constructor(
    name = '',
    type = '',
    rarity = 5,
    description = '',
    imageUrl = '',
    stats = {},
    passive = '',
    passiveDescription = ''
  ) {
    this.name = name;
    this.type = type;
    this.rarity = rarity;
    this.description = description;
    this.imageUrl = imageUrl;
    this.stats = stats;
    this.passive = passive;
    this.passiveDescription = passiveDescription;
  }

  /**
   * Convert Weapon to JSON
   * @returns {Object} JSON representation of Weapon
   */
  toJSON() {
    return {
      name: this.name,
      type: this.type,
      rarity: this.rarity,
      description: this.description,
      imageUrl: this.imageUrl,
      stats: this.stats,
      passive: this.passive,
      passiveDescription: this.passiveDescription
    };
  }

  /**
   * Create Weapon from JSON
   * @param {Object} json - JSON object
   * @returns {Weapon} Weapon instance
   */
  static fromJSON(json) {
    return new Weapon(
      json.name,
      json.type,
      json.rarity,
      json.description,
      json.imageUrl,
      json.stats,
      json.passive,
      json.passiveDescription
    );
  }
}

module.exports = Weapon;
