/**
 * Attribute model for Wuthering Waves API
 * Converted from Golang to JavaScript
 */

/**
 * Attribute class representing a Wuthering Waves attribute
 */
class Attribute {
  /**
   * Create a new Attribute
   * @param {string} name - Attribute name
   * @param {string} description - Attribute description
   * @param {string} color - Attribute color code
   * @param {string} imageUrl - Attribute image URL
   */
  constructor(
    name = '',
    description = '',
    color = '',
    imageUrl = ''
  ) {
    this.name = name;
    this.description = description;
    this.color = color;
    this.imageUrl = imageUrl;
  }

  /**
   * Convert Attribute to JSON
   * @returns {Object} JSON representation of Attribute
   */
  toJSON() {
    return {
      name: this.name,
      description: this.description,
      color: this.color,
      imageUrl: this.imageUrl
    };
  }

  /**
   * Create Attribute from JSON
   * @param {Object} json - JSON object
   * @returns {Attribute} Attribute instance
   */
  static fromJSON(json) {
    return new Attribute(
      json.name,
      json.description,
      json.color,
      json.imageUrl
    );
  }
}

module.exports = Attribute;
