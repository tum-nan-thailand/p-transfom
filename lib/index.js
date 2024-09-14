/**
 * DataTransformer
 * A class designed to handle various data transformation tasks.
 * Includes methods to convert object keys between snake_case and camelCase,
 * as well as utility methods for string manipulations (uppercase, lowercase).
 */
class DataTransformer {
    constructor() {
      // Constructor for any initialization (if necessary).
    }
  
    /**
     * Converts object keys from snake_case to camelCase.
     * This method works recursively to handle nested objects and arrays.
     *
     * @param {Object|Array} data - The input data to be transformed.
     *                              Should be an object or an array.
     * @returns {Object|Array} - The transformed data with camelCase keys.
     */
    snakeToCamel(data) {
      // Check if the input is not an object or is null, return it as-is.
      if (typeof data !== 'object' || data === null) {
        return data;
      }
  
      // If the input is an array, map over each element recursively.
      if (Array.isArray(data)) {
        return data.map(item => this.snakeToCamel(item));
      }
  
      // For objects, transform each key from snake_case to camelCase.
      return Object.keys(data).reduce((acc, key) => {
        // Convert snake_case (e.g., first_name) to camelCase (e.g., firstName).
        const camelKey = key.replace(/_([a-z])/g, g => g[1].toUpperCase());
  
        // Recursively transform nested objects/arrays.
        acc[camelKey] = this.snakeToCamel(data[key]);
        return acc;
      }, {});
    }
  
    /**
     * Converts object keys from camelCase to snake_case.
     * This method works recursively to handle nested objects and arrays.
     *
     * @param {Object|Array} data - The input data to be transformed.
     *                              Should be an object or an array.
     * @returns {Object|Array} - The transformed data with snake_case keys.
     */
    camelToSnake(data) {
        // Check if the input is not an object or is null, return it as-is.
        if (typeof data !== 'object' || data === null) {
          return data;
        }
      
        // If the input is an array, map over each element recursively.
        if (Array.isArray(data)) {
          return data.map(item => this.camelToSnake(item));
        }
      
        // For objects, transform each key from camelCase to snake_case.
        return Object.keys(data).reduce((acc, key) => {
          // Convert camelCase (e.g., firstName) to snake_case (e.g., first_name).
          const snakeKey = key.replace(/([A-Z])/g, g => `_${g.toLowerCase()}`);
      
          // Recursively transform nested objects/arrays.
          acc[snakeKey] = this.camelToSnake(data[key]);
          return acc;
        }, {});
      }      
  
    /**
     * Converts a given string to uppercase.
     *
     * @param {string} data - The input string to be converted.
     * @returns {string} - The input string transformed to uppercase.
     *                     If the input is not a string, it will return the original data.
     */
    toUpperCase(data) {
      if (typeof data === 'string') {
        return data.toUpperCase();
      }
      // If data is not a string, return it as-is.
      return data;
    }
  
    /**
     * Converts a given string to lowercase.
     *
     * @param {string} data - The input string to be converted.
     * @returns {string} - The input string transformed to lowercase.
     *                     If the input is not a string, it will return the original data.
     */
    toLowerCase(data) {
      if (typeof data === 'string') {
        return data.toLowerCase();
      }
      // If data is not a string, return it as-is.
      return data;
    }
  
    /**
     * Custom transformation method: You can add more methods here for 
     * specific transformation tasks like trimming spaces, formatting dates, 
     * or even applying more complex data transformations.
     */
    customTransform(data, transformFunction) {
      if (typeof transformFunction === 'function') {
        return transformFunction(data);
      }
      return data;
    }
  }
  
  module.exports = DataTransformer;