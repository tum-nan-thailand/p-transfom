/**
 * Converts object keys from snake_case to camelCase.
 * This method works recursively to handle nested objects and arrays.
 *
 * @param {Object|Array} data - The input data to be transformed.
 *                              Should be an object or an array.
 * @returns {Object|Array} - The transformed data with camelCase keys.
 */

// caseConverters.js
function snakeToCamel(data) {
  if (typeof data !== "object" || data === null) {
    return data;
  }

  if (Array.isArray(data)) {
    return data.map((item) => snakeToCamel(item));
  }

  return Object.keys(data).reduce((acc, key) => {
    const camelKey = key.replace(/_([a-z])/g, (g) => g[1].toUpperCase());
    acc[camelKey] = snakeToCamel(data[key]);
    return acc;
  }, {});
}

function camelToSnake(data) {
  if (typeof data !== "object" || data === null) {
    return data;
  }

  if (Array.isArray(data)) {
    return data.map((item) => camelToSnake(item));
  }

  return Object.keys(data).reduce((acc, key) => {
    const snakeKey = key.replace(/([A-Z])/g, (g) => `_${g.toLowerCase()}`);
    acc[snakeKey] = camelToSnake(data[key]);
    return acc;
  }, {});
}

module.exports = {
  snakeToCamel,
  camelToSnake,
};
