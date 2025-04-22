/**
 * Sonata model for Wuthering Waves API
 * Converted from Golang to JavaScript
 */

/**
 * Sonata class representing a Wuthering Waves sonata (set)
 */
class Sonata {
  /**
   * Create a new Sonata
   * @param {string} name - Sonata name
   * @param {string} description - Sonata description
   * @param {string} imageUrl - Sonata image URL
   * @param {Object} twoPieceEffect - Two piece effect
   * @param {Object} fourPieceEffect - Four piece effect
   */
  constructor(
    name = '',
    description = '',
    imageUrl = '',
    twoPieceEffect = { name: '', description: '' },
    fourPieceEffect = { name: '', description: '' }
  ) {
    this.name = name;
    this.description = description;
    this.imageUrl = imageUrl;
    this.twoPieceEffect = twoPieceEffect;
    this.fourPieceEffect = fourPieceEffect;
  }

  /**
   * Convert Sonata to JSON
   * @returns {Object} JSON representation of Sonata
   */
  toJSON() {
    return {
      name: this.name,
      description: this.description,
      imageUrl: this.imageUrl,
      twoPieceEffect: this.twoPieceEffect,
      fourPieceEffect: this.fourPieceEffect
    };
  }

  /**
   * Create Sonata from JSON
   * @param {Object} json - JSON object
   * @returns {Sonata} Sonata instance
   */
  static fromJSON(json) {
    return new Sonata(
      json.name,
      json.description,
      json.imageUrl,
      json.twoPieceEffect,
      json.fourPieceEffect
    );
  }
}

module.exports = Sonata;
