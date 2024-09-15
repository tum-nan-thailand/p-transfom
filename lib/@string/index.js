/**
 * Converts a given string to uppercase.
 *
 * @param {string} data - The input string to be converted.
 * @returns {string} - The input string transformed to uppercase.
 *                     If the input is not a string, it will return the original data.
 */

function toUpperCase(data) {
  if (typeof data === 'string') {
      return data.toUpperCase();
  }
  return data;
}

function toLowerCase(data) {
  if (typeof data === 'string') {
      return data.toLowerCase();
  }
  return data;
}

module.exports = {
  toUpperCase,
  toLowerCase
};
