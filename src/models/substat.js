/**
 * Substat model for Wuthering Waves API
 * Converted from Golang to JavaScript
 */

/**
 * Substat class representing a Wuthering Waves substat
 */
class Substat {
  /**
   * Create a new Substat
   * @param {string} name - Substat name
   * @param {string} description - Substat description
   * @param {string} abbreviation - Substat abbreviation
   * @param {string} icon - Substat icon URL
   */
  constructor(
    name = '',
    description = '',
    abbreviation = '',
    icon = ''
  ) {
    this.name = name;
    this.description = description;
    this.abbreviation = abbreviation;
    this.icon = icon;
  }

  /**
   * Convert Substat to JSON
   * @returns {Object} JSON representation of Substat
   */
  toJSON() {
    return {
      name: this.name,
      description: this.description,
      abbreviation: this.abbreviation,
      icon: this.icon
    };
  }

  /**
   * Create Substat from JSON
   * @param {Object} json - JSON object
   * @returns {Substat} Substat instance
   */
  static fromJSON(json) {
    return new Substat(
      json.name,
      json.description,
      json.abbreviation,
      json.icon
    );
  }
}

module.exports = Substat;
