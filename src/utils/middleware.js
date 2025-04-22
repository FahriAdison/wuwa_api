/**
 * API middleware functions for the Wuthering Waves API
 */

const apiUtils = require('./api_utils');

/**
 * Error handling middleware
 */
function errorHandler(err, req, res, next) {
  console.error('API Error:', err);
  
  const errorResponse = apiUtils.formatErrorResponse(
    err.message || 'Internal Server Error',
    err.status || 500
  );
  
  res.status(errorResponse.status).json(errorResponse);
}

/**
 * Request logger middleware
 */
function requestLogger(req, res, next) {
  const timestamp = new Date().toISOString();
  const method = req.method;
  const url = req.originalUrl;
  const ip = req.ip || req.headers['x-forwarded-for'] || 'unknown';
  
  console.log(`[${timestamp}] ${method} ${url} - IP: ${ip}`);
  next();
}

/**
 * Lowercase middleware
 * Converts request parameters to lowercase for case-insensitive matching
 */
function lowercaseMiddleware(req, res, next) {
  if (req.params) {
    const lowercaseParams = {};
    for (const [key, value] of Object.entries(req.params)) {
      if (typeof value === 'string') {
        lowercaseParams[key] = value.toLowerCase();
      } else {
        lowercaseParams[key] = value;
      }
    }
    req.params = lowercaseParams;
  }
  next();
}

/**
 * Pagination middleware
 * Extracts and validates pagination parameters from request query
 */
function paginationMiddleware(req, res, next) {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 20;
  
  // Validate pagination parameters
  if (page < 1) {
    return res.status(400).json(
      apiUtils.formatErrorResponse('Page number must be greater than 0', 400)
    );
  }
  
  if (limit < 1 || limit > 100) {
    return res.status(400).json(
      apiUtils.formatErrorResponse('Limit must be between 1 and 100', 400)
    );
  }
  
  // Attach pagination parameters to request object
  req.pagination = { page, limit };
  next();
}

/**
 * CORS headers middleware
 * Adds CORS headers to API responses
 */
function corsHeaders(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  
  next();
}

/**
 * Response formatter middleware
 * Formats API responses with consistent structure
 */
function responseFormatter(req, res, next) {
  // Store the original res.json function
  const originalJson = res.json;
  
  // Override res.json to format the response
  res.json = function(data) {
    // Skip formatting if the response is already formatted
    if (data && (data.status !== undefined && data.timestamp !== undefined)) {
      return originalJson.call(this, data);
    }
    
    // Format the response
    const formattedResponse = apiUtils.formatResponse(
      data,
      'Success',
      res.statusCode
    );
    
    // Call the original json function with the formatted response
    return originalJson.call(this, formattedResponse);
  };
  
  next();
}

/**
 * Visitor counter middleware
 * Tracks API usage for analytics
 */
function visitorCounter(req, res, next) {
  // In a production environment, this would connect to a database
  // For now, we'll just log the request
  console.log(`API request tracked: ${req.method} ${req.originalUrl}`);
  next();
}

module.exports = {
  errorHandler,
  requestLogger,
  lowercaseMiddleware,
  paginationMiddleware,
  corsHeaders,
  responseFormatter,
  visitorCounter
};
