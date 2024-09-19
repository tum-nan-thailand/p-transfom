// lib/@string/index.js

/**
 * Converts a given string to uppercase.
 *
 * @param {string} data - The input string to be converted.
 * @returns {string} - The input string transformed to uppercase.
 */
function toUpperCase(data) {
  if (typeof data === 'string') {
    return data.toUpperCase();
  }
  return data;
}

/**
 * Converts a given string to lowercase.
 *
 * @param {string} data - The input string to be converted.
 * @returns {string} - The input string transformed to lowercase.
 */
function toLowerCase(data) {
  if (typeof data === 'string') {
    return data.toLowerCase();
  }
  return data;
}

/**
 * Capitalizes the first letter of a given string.
 *
 * @param {string} data - The input string.
 * @returns {string} - The string with the first letter capitalized.
 */
function capitalize(data) {
  if (typeof data === 'string') {
    return data.charAt(0).toUpperCase() + data.slice(1);
  }
  return data;
}

/**
 * Trims whitespace from both ends of a string.
 *
 * @param {string} data - The string to trim.
 * @returns {string} - The trimmed string.
 */
function trim(data) {
  if (typeof data === 'string') {
    return data.trim();
  }
  return data;
}

/**
 * Replaces all occurrences of a substring with a new substring.
 *
 * @param {string} data - The original string.
 * @param {string|RegExp} searchValue - The substring or pattern to replace.
 * @param {string} replaceValue - The substring to replace with.
 * @returns {string} - The modified string.
 */
function replaceAll(data, searchValue, replaceValue) {
  if (typeof data === 'string') {
    return data.split(searchValue).join(replaceValue);
  }
  return data;
}

/**
 * Converts a string to a URL-friendly slug.
 *
 * @param {string} data - The input string.
 * @returns {string} - The slugified string.
 */
function slugify(data) {
  if (typeof data === 'string') {
    return data
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '')
      .replace(/[\s_-]+/g, '-')
      .replace(/^-+|-+$/g, '');
  }
  return data;
}

/**
 * Truncates a string to a specified length and adds an ellipsis.
 *
 * @param {string} data - The string to truncate.
 * @param {number} maxLength - The maximum length of the string.
 * @returns {string} - The truncated string.
 */
function truncate(data, maxLength) {
  if (typeof data === 'string' && typeof maxLength === 'number') {
    if (data.length > maxLength) {
      return data.substring(0, maxLength) + '...';
    }
    return data;
  }
  return data;
}

module.exports = {
  toUpperCase,
  toLowerCase,
  capitalize,
  trim,
  replaceAll,
  slugify,
  truncate
};
