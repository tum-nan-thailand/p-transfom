// lib/@object/index.js

/**
 * Creates a deep clone of an object.
 *
 * @param {Object} data - The object to clone.
 * @returns {Object} - The cloned object.
 */
function deepClone(data) {
    if (typeof data === 'object' && data !== null) {
      return JSON.parse(JSON.stringify(data));
    }
    return data;
  }
  
  /**
   * Merges multiple objects into one.
   *
   * @param {...Object} objects - The objects to merge.
   * @returns {Object} - The merged object.
   */
  function mergeObjects(...objects) {
    return Object.assign({}, ...objects);
  }
  
  /**
   * Picks specific properties from an object.
   *
   * @param {Object} data - The source object.
   * @param {...string} keys - The keys to pick.
   * @returns {Object} - The new object with picked properties.
   */
  function pick(data, ...keys) {
    if (typeof data === 'object' && data !== null) {
      return keys.reduce((obj, key) => {
        if (key in data) {
          obj[key] = data[key];
        }
        return obj;
      }, {});
    }
    return {};
  }
  
  /**
   * Omits specific properties from an object.
   *
   * @param {Object} data - The source object.
   * @param {...string} keys - The keys to omit.
   * @returns {Object} - The new object without the omitted properties.
   */
  function omit(data, ...keys) {
    if (typeof data === 'object' && data !== null) {
      return Object.keys(data).reduce((obj, key) => {
        if (!keys.includes(key)) {
          obj[key] = data[key];
        }
        return obj;
      }, {});
    }
    return {};
  }
  
  /**
   * Retrieves the value at a given path of an object.
   *
   * @param {Object} data - The source object.
   * @param {string} path - The path string, e.g., 'a.b.c'.
   * @param {any} defaultValue - The default value if path does not exist.
   * @returns {any} - The value at the specified path or the default value.
   */
  function get(data, path, defaultValue = undefined) {
    if (typeof path !== 'string') return defaultValue;
    const keys = path.split('.');
    let result = data;
    for (const key of keys) {
      if (result && key in result) {
        result = result[key];
      } else {
        return defaultValue;
      }
    }
    return result;
  }
  
  /**
   * Sets the value at a given path of an object.
   *
   * @param {Object} data - The source object.
   * @param {string} path - The path string, e.g., 'a.b.c'.
   * @param {any} value - The value to set.
   * @returns {Object} - The modified object.
   */
  function set(data, path, value) {
    if (typeof path !== 'string') return data;
    const keys = path.split('.');
    let current = data;
    keys.forEach((key, index) => {
      if (index === keys.length - 1) {
        current[key] = value;
      } else {
        if (!(key in current)) {
          current[key] = {};
        }
        current = current[key];
      }
    });
    return data;
  }
  
  module.exports = {
    deepClone,
    mergeObjects,
    pick,
    omit,
    get,
    set
  };
  