/**
 * Stat model for Wuthering Waves API
 * Converted from Golang to JavaScript
 */

/**
 * Stat class representing a Wuthering Waves stat
 */
class Stat {
  /**
   * Create a new Stat
   * @param {string} name - Stat name
   * @param {string} description - Stat description
   * @param {string} abbreviation - Stat abbreviation
   * @param {string} icon - Stat icon URL
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
   * Convert Stat to JSON
   * @returns {Object} JSON representation of Stat
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
   * Create Stat from JSON
   * @param {Object} json - JSON object
   * @returns {Stat} Stat instance
   */
  static fromJSON(json) {
    return new Stat(
      json.name,
      json.description,
      json.abbreviation,
      json.icon
    );
  }
}

module.exports = Stat;
