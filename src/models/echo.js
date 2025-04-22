/**
 * Echo model for Wuthering Waves API
 * Converted from Golang to JavaScript
 */

/**
 * Echo class representing a Wuthering Waves echo
 */
class Echo {
  /**
   * Create a new Echo
   * @param {string} name - Echo name
   * @param {string} type - Echo type
   * @param {number} rarity - Echo rarity (stars)
   * @param {string} description - Echo description
   * @param {string} imageUrl - Echo image URL
   * @param {Object} stats - Echo base stats
   * @param {string} effect - Echo effect
   * @param {string} effectDescription - Echo effect description
   */
  constructor(
    name = '',
    type = '',
    rarity = 5,
    description = '',
    imageUrl = '',
    stats = {},
    effect = '',
    effectDescription = ''
  ) {
    this.name = name;
    this.type = type;
    this.rarity = rarity;
    this.description = description;
    this.imageUrl = imageUrl;
    this.stats = stats;
    this.effect = effect;
    this.effectDescription = effectDescription;
  }

  /**
   * Convert Echo to JSON
   * @returns {Object} JSON representation of Echo
   */
  toJSON() {
    return {
      name: this.name,
      type: this.type,
      rarity: this.rarity,
      description: this.description,
      imageUrl: this.imageUrl,
      stats: this.stats,
      effect: this.effect,
      effectDescription: this.effectDescription
    };
  }

  /**
   * Create Echo from JSON
   * @param {Object} json - JSON object
   * @returns {Echo} Echo instance
   */
  static fromJSON(json) {
    return new Echo(
      json.name,
      json.type,
      json.rarity,
      json.description,
      json.imageUrl,
      json.stats,
      json.effect,
      json.effectDescription
    );
  }
}

module.exports = Echo;
