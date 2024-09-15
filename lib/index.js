const CaseConverters = require("./@caseConverters");
const StringFunction = require("./@string");

function customTransform(data, transformFunction) {
  if (typeof transformFunction === 'function') {
      return transformFunction(data);
  }
  return data;
}

module.exports = {
  snakeToCamel,
  camelToSnake,
  toUpperCase,
  toLowerCase,
  customTransform
};

