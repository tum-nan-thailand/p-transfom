const CaseConverters = require("./lib/@caseConverters");
const StringFunctions = require("./lib/@string");
const ArrayFunctions = require("./lib/@array");
const ObjectFunctions = require("./lib/@object");
const DateFunctions = require("./lib/@date");

/**
 * Applies a custom transformation function to the provided data.
 *
 * @param {any} data - The data to be transformed.
 * @param {Function} transformFunction - The transformation function to apply.
 * @returns {any} - The transformed data.
 */
function customTransform(data, transformFunction) {
  if (typeof transformFunction === 'function') {
    return transformFunction(data);
  }
  return data;
}

module.exports = {
  ...CaseConverters,
  ...StringFunctions,
  ...ArrayFunctions,
  ...ObjectFunctions,
  ...DateFunctions,
  customTransform
};