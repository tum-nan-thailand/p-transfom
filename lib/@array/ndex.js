// lib/@array/index.js

/**
 * Removes duplicate values from an array.
 *
 * @param {Array} data - The array to process.
 * @returns {Array} - The array with duplicates removed.
 */
function unique(data) {
    if (Array.isArray(data)) {
      return [...new Set(data)];
    }
    return data;
  }
  
  /**
   * Flattens a multi-dimensional array into a single-level array.
   *
   * @param {Array} data - The array to flatten.
   * @returns {Array} - The flattened array.
   */
  function flatten(data) {
    if (Array.isArray(data)) {
      return data.flat(Infinity);
    }
    return data;
  }
  
  /**
   * Finds the intersection of multiple arrays.
   *
   * @param {...Array} arrays - The arrays to intersect.
   * @returns {Array} - The intersection of the arrays.
   */
  function intersection(...arrays) {
    if (arrays.length === 0) return [];
    return arrays.reduce((acc, curr) => acc.filter(item => curr.includes(item)));
  }
  
  /**
   * Finds the difference between two arrays.
   *
   * @param {Array} array1 - The first array.
   * @param {Array} array2 - The second array.
   * @returns {Array} - The difference array.
   */
  function difference(array1, array2) {
    if (Array.isArray(array1) && Array.isArray(array2)) {
      return array1.filter(item => !array2.includes(item));
    }
    return [];
  }
  
  /**
   * Groups array elements based on a provided function.
   *
   * @param {Array} data - The array to group.
   * @param {Function} keyGetter - Function to determine the group key.
   * @returns {Object} - The grouped object.
   */
  function groupBy(data, keyGetter) {
    if (Array.isArray(data) && typeof keyGetter === 'function') {
      return data.reduce((result, item) => {
        const key = keyGetter(item);
        if (!result[key]) {
          result[key] = [];
        }
        result[key].push(item);
        return result;
      }, {});
    }
    return {};
  }
  
  /**
   * Splits an array into chunks of specified size.
   *
   * @param {Array} data - The array to split.
   * @param {number} size - The size of each chunk.
   * @returns {Array} - An array of chunks.
   */
  function chunk(data, size) {
    if (Array.isArray(data) && typeof size === 'number' && size > 0) {
      const chunks = [];
      for (let i = 0; i < data.length; i += size) {
        chunks.push(data.slice(i, i + size));
      }
      return chunks;
    }
    return [];
  }
  
  module.exports = {
    unique,
    flatten,
    intersection,
    difference,
    groupBy,
    chunk
  };
  