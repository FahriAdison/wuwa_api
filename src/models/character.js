/**
 * Character model for Wuthering Waves API
 * Converted from Golang to JavaScript
 */

/**
 * Character class representing a Wuthering Waves character
 */
class Character {
  /**
   * Create a new Character
   * @param {string} name - Character name
   * @param {string} attribute - Character attribute
   * @param {string} weapon - Character weapon type
   * @param {number} rarity - Character rarity (stars)
   * @param {string} class - Character class
   * @param {string} birthday - Character birthday
   * @param {string} quote - Character quote
   * @param {string} description - Character description
   * @param {string} imageUrl - Character image URL
   * @param {Array} skills - Character skills
   * @param {Array} passives - Character passives
   * @param {Array} traces - Character traces
   * @param {Object} stats - Character base stats
   */
  constructor(
    name = '',
    attribute = '',
    weapon = '',
    rarity = 5,
    characterClass = '',
    birthday = '',
    quote = '',
    description = '',
    imageUrl = '',
    skills = [],
    passives = [],
    traces = [],
    stats = {}
  ) {
    this.name = name;
    this.attribute = attribute;
    this.weapon = weapon;
    this.rarity = rarity;
    this.class = characterClass;
    this.birthday = birthday;
    this.quote = quote;
    this.description = description;
    this.imageUrl = imageUrl;
    this.skills = skills;
    this.passives = passives;
    this.traces = traces;
    this.stats = stats;
  }

  /**
   * Convert Character to JSON
   * @returns {Object} JSON representation of Character
   */
  toJSON() {
    return {
      name: this.name,
      attribute: this.attribute,
      weapon: this.weapon,
      rarity: this.rarity,
      class: this.class,
      birthday: this.birthday,
      quote: this.quote,
      description: this.description,
      imageUrl: this.imageUrl,
      skills: this.skills,
      passives: this.passives,
      traces: this.traces,
      stats: this.stats
    };
  }

  /**
   * Create Character from JSON
   * @param {Object} json - JSON object
   * @returns {Character} Character instance
   */
  static fromJSON(json) {
    return new Character(
      json.name,
      json.attribute,
      json.weapon,
      json.rarity,
      json.class,
      json.birthday,
      json.quote,
      json.description,
      json.imageUrl,
      json.skills,
      json.passives,
      json.traces,
      json.stats
    );
  }
}

module.exports = Character;
