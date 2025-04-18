/**
 * Middleware utilities for Wuthering Waves API
 * Converted from Golang to JavaScript
 */

const rateLimit = require('express-rate-limit');

/**
 * Create a rate limiter middleware
 * @param {number} windowMs - Time window in milliseconds
 * @param {number} max - Maximum number of requests per window
 * @returns {Function} Express middleware
 */
const createRateLimiter = (windowMs = 15 * 60 * 1000, max = 100) => {
  return rateLimit({
    windowMs,
    max,
    standardHeaders: true,
    legacyHeaders: false,
    message: {
      error: 'Too Many Requests',
      message: `You have exceeded the rate limit. Please try again after ${windowMs / 60000} minutes.`
    }
  });
};

/**
 * Lowercase middleware for case-insensitive parameters
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next function
 */
const lowercaseMiddleware = (req, res, next) => {
  if (req.params) {
    Object.keys(req.params).forEach(key => {
      if (typeof req.params[key] === 'string') {
        req.params[key] = req.params[key].toLowerCase();
      }
    });
  }
  next();
};

/**
 * Error handling middleware
 * @param {Object} err - Error object
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next function
 */
const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    error: 'Internal Server Error',
    message: err.message || 'Something went wrong on the server'
  });
};

/**
 * Not found middleware
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
const notFoundHandler = (req, res) => {
  res.status(404).json({
    error: 'Not Found',
    message: `The requested endpoint ${req.originalUrl} does not exist`
  });
};

module.exports = {
  createRateLimiter,
  lowercaseMiddleware,
  errorHandler,
  notFoundHandler
};
