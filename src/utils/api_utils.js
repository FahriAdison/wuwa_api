/**
 * Common utility functions for the Wuthering Waves API
 */

/**
 * Format API response with consistent structure
 * @param {Object} data - The data to include in the response
 * @param {string} message - Optional message
 * @param {number} status - HTTP status code
 * @returns {Object} Formatted response object
 */
function formatResponse(data, message = 'Success', status = 200) {
  return {
    status,
    message,
    data,
    timestamp: new Date().toISOString()
  };
}

/**
 * Format error response with consistent structure
 * @param {string} message - Error message
 * @param {number} status - HTTP status code
 * @param {Object} details - Optional error details
 * @returns {Object} Formatted error response object
 */
function formatErrorResponse(message, status = 500, details = null) {
  const response = {
    status,
    error: true,
    message,
    timestamp: new Date().toISOString()
  };

  if (details) {
    response.details = details;
  }

  return response;
}

/**
 * Validate request parameters
 * @param {Object} params - Parameters to validate
 * @param {Array} required - List of required parameter names
 * @returns {Object} Validation result {valid: boolean, message: string}
 */
function validateParams(params, required) {
  const missing = [];

  for (const param of required) {
    if (!params[param]) {
      missing.push(param);
    }
  }

  if (missing.length > 0) {
    return {
      valid: false,
      message: `Missing required parameters: ${missing.join(', ')}`
    };
  }

  return { valid: true };
}

/**
 * Parse query parameters with proper type conversion
 * @param {Object} query - Express request query object
 * @returns {Object} Parsed query parameters
 */
function parseQueryParams(query) {
  const parsed = {};

  for (const [key, value] of Object.entries(query)) {
    // Convert numeric strings to numbers
    if (!isNaN(value) && value !== '') {
      parsed[key] = Number(value);
    } 
    // Convert boolean strings to booleans
    else if (value === 'true' || value === 'false') {
      parsed[key] = value === 'true';
    } 
    // Keep other values as is
    else {
      parsed[key] = value;
    }
  }

  return parsed;
}

/**
 * Apply pagination to an array of items
 * @param {Array} items - Array of items to paginate
 * @param {number} page - Page number (1-based)
 * @param {number} limit - Items per page
 * @returns {Object} Paginated result with metadata
 */
function paginate(items, page = 1, limit = 20) {
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  const totalItems = items.length;
  const totalPages = Math.ceil(totalItems / limit);

  const result = {
    data: items.slice(startIndex, endIndex),
    pagination: {
      total_items: totalItems,
      total_pages: totalPages,
      current_page: page,
      items_per_page: limit,
      has_next_page: page < totalPages,
      has_prev_page: page > 1
    }
  };

  return result;
}

module.exports = {
  formatResponse,
  formatErrorResponse,
  validateParams,
  parseQueryParams,
  paginate
};
