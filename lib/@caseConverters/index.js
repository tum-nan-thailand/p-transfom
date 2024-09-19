// lib/@caseConverters/index.js

/**
 * Converts a snake_case string to camelCase.
 *
 * @param {string} data - The input snake_case string.
 * @returns {string} - The converted camelCase string.
 */
function snakeToCamel(data) {
  if (typeof data === 'string') {
    return data.replace(/(_\w)/g, matches => matches[1].toUpperCase());
  }
  return data;
}

/**
 * Converts a camelCase string to snake_case.
 *
 * @param {string} data - The input camelCase string.
 * @returns {string} - The converted snake_case string.
 */
function camelToSnake(data) {
  if (typeof data === 'string') {
    return data.replace(/([A-Z])/g, '_$1').toLowerCase();
  }
  return data;
}

/**
 * Converts a kebab-case string to camelCase.
 *
 * @param {string} data - The input kebab-case string.
 * @returns {string} - The converted camelCase string.
 */
function kebabToCamel(data) {
  if (typeof data === 'string') {
    return data.replace(/-([a-z])/g, (matches, letter) => letter.toUpperCase());
  }
  return data;
}

/**
 * Converts a camelCase string to kebab-case.
 *
 * @param {string} data - The input camelCase string.
 * @returns {string} - The converted kebab-case string.
 */
function camelToKebab(data) {
  if (typeof data === 'string') {
    return data.replace(/([A-Z])/g, '-$1').toLowerCase();
  }
  return data;
}

module.exports = {
  snakeToCamel,
  camelToSnake,
  kebabToCamel,
  camelToKebab
};
