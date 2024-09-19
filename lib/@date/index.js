/**
 * Formats a Date object into a specified string format.
 *
 * @param {Date} date - The Date object to format.
 * @param {string} format - The format string (e.g., 'YYYY-MM-DD').
 * @returns {string} - The formatted date string.
 */
function formatDate(date, format) {
  if (!(date instanceof Date)) return "";
  const map = {
    YYYY: date.getFullYear(),
    MM: String(date.getMonth() + 1).padStart(2, "0"),
    DD: String(date.getDate()).padStart(2, "0"),
    HH: String(date.getHours()).padStart(2, "0"),
    mm: String(date.getMinutes()).padStart(2, "0"),
    ss: String(date.getSeconds()).padStart(2, "0"),
  };
  return format.replace(/YYYY|MM|DD|HH|mm|ss/g, (matched) => map[matched]);
}

/**
 * Parses a date string into a Date object based on the provided format.
 *
 * @param {string} dateString - The date string to parse.
 * @param {string} format - The format of the date string (e.g., 'YYYY-MM-DD').
 * @returns {Date|null} - The parsed Date object or null if invalid.
 */
function parseDate(dateString, format) {
  const regex = /(\d{4})-(\d{2})-(\d{2})/;
  const matches = dateString.match(regex);
  if (matches) {
    const year = parseInt(matches[1], 10);
    const month = parseInt(matches[2], 10) - 1; // Months are zero-based
    const day = parseInt(matches[3], 10);
    return new Date(year, month, day);
  }
  return null;
}

/**
 * Adds a specified number of days to a Date object.
 *
 * @param {Date} date - The original Date object.
 * @param {number} days - Number of days to add.
 * @returns {Date} - A new Date object with added days.
 */
function addDays(date, days) {
  if (!(date instanceof Date) || typeof days !== "number") return date;
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

/**
 * Subtracts a specified number of days from a Date object.
 *
 * @param {Date} date - The original Date object.
 * @param {number} days - Number of days to subtract.
 * @returns {Date} - A new Date object with subtracted days.
 */
function subtractDays(date, days) {
  return addDays(date, -days);
}

/**
 * Calculates the difference in days between two Date objects.
 *
 * @param {Date} date1 - The first Date object.
 * @param {Date} date2 - The second Date object.
 * @returns {number} - The number of days difference.
 */
function differenceInDays(date1, date2) {
  if (!(date1 instanceof Date) || !(date2 instanceof Date)) return 0;
  const diffTime = date1 - date2;
  return Math.round(diffTime / (1000 * 60 * 60 * 24));
}

/**
 * Checks if the first date is before the second date.
 *
 * @param {Date} date1 - The first Date object.
 * @param {Date} date2 - The second Date object.
 * @returns {boolean} - True if date1 is before date2, else false.
 */
function isBefore(date1, date2) {
  if (!(date1 instanceof Date) || !(date2 instanceof Date)) return false;
  return date1 < date2;
}

/**
 * Checks if the first date is after the second date.
 *
 * @param {Date} date1 - The first Date object.
 * @param {Date} date2 - The second Date object.
 * @returns {boolean} - True if date1 is after date2, else false.
 */
function isAfter(date1, date2) {
  if (!(date1 instanceof Date) || !(date2 instanceof Date)) return false;
  return date1 > date2;
}

module.exports = {
  formatDate,
  parseDate,
  addDays,
  subtractDays,
  differenceInDays,
  isBefore,
  isAfter,
};
