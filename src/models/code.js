/**
 * Code model for Wuthering Waves API
 * Converted from Golang to JavaScript
 */

/**
 * Code class representing a Wuthering Waves redemption code
 */
class Code {
  /**
   * Create a new Code
   * @param {string} code - The redemption code
   * @param {string} description - Code description
   * @param {string} rewards - Rewards description
   * @param {boolean} active - Whether the code is still active
   * @param {string} expiryDate - Expiry date of the code
   */
  constructor(
    code = '',
    description = '',
    rewards = '',
    active = true,
    expiryDate = ''
  ) {
    this.code = code;
    this.description = description;
    this.rewards = rewards;
    this.active = active;
    this.expiryDate = expiryDate;
  }

  /**
   * Convert Code to JSON
   * @returns {Object} JSON representation of Code
   */
  toJSON() {
    return {
      code: this.code,
      description: this.description,
      rewards: this.rewards,
      active: this.active,
      expiryDate: this.expiryDate
    };
  }

  /**
   * Create Code from JSON
   * @param {Object} json - JSON object
   * @returns {Code} Code instance
   */
  static fromJSON(json) {
    return new Code(
      json.code,
      json.description,
      json.rewards,
      json.active,
      json.expiryDate
    );
  }
}

module.exports = Code;
