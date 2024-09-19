# p-transfom

**p-transfom** is a versatile Node.js library that simplifies data transformation tasks. It offers a wide range of utility functions for manipulating strings, arrays, and objects, making data processing efficient and scalable for various applications.

## Table of Contents

1. [Installation](#installation)
2. [Basic Usage](#basic-usage)
3. [API Reference](#api-reference)
   - [String Functions](#string-functions)
   - [Array Functions](#array-functions)
   - [Object Functions](#object-functions)
   - [Case Conversion Functions](#case-conversion-functions)
   - [Custom Transform](#custom-transform)
4. [Error Handling](#error-handling)

## Installation

To install the `p-transfom` library, use npm:

```bash
npm install p-transfom
```

## Basic Usage

Here are some examples of how to use the utility functions from the `p-transfom` library:

```javascript
const {
  snakeToCamel,
  camelToSnake,
  kebabToCamel,
  camelToKebab,
  toUpperCase,
  toLowerCase,
  capitalize,
  trim,
  replaceAll,
  slugify,
  truncate,
  unique,
  flatten,
  intersection,
  difference,
  groupBy,
  chunk,
  deepClone,
  mergeObjects,
  pick,
  omit,
  get,
  set,
  customTransform,
} = require("p-transfom");

// String Functions
const text = "  example_text  ";
console.log(trim(text)); // Output: 'example_text'
console.log(capitalize(text)); // Output: '  example_text  '
console.log(toUpperCase(text)); // Output: '  EXAMPLE_TEXT  '
console.log(slugify("Hello World! This is p-transfom.")); // Output: 'hello-world-this-is-p-transfom'
console.log(
  truncate("This is a long sentence that needs to be truncated.", 20)
); // Output: 'This is a long sen...'

// Case Conversion
const snakeCase = "example_text";
const camelCase = snakeToCamel(snakeCase);
console.log(camelCase); // Output: 'exampleText'

const kebabCase = "example-text";
const camelCaseFromKebab = kebabToCamel(kebabCase);
console.log(camelCaseFromKebab); // Output: 'exampleText'

// Array Functions
const array = [1, 2, 2, 3, [4, 5, [6]]];
console.log(unique(array)); // Output: [1, 2, 3, [4, 5, [6]]]
console.log(flatten(array)); // Output: [1, 2, 2, 3, 4, 5, 6]
console.log(intersection([1, 2, 3], [2, 3, 4], [3, 4, 5])); // Output: [3]
console.log(difference([1, 2, 3], [2, 4])); // Output: [1, 3]
console.log(groupBy([6.1, 4.2, 6.3], Math.floor)); // Output: { '4': [4.2], '6': [6.1, 6.3] }
console.log(chunk([1, 2, 3, 4, 5], 2)); // Output: [[1, 2], [3, 4], [5]]

// Object Functions
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const mergedObj = mergeObjects(obj1, obj2);
console.log(mergedObj); // Output: { a: 1, b: 3, c: 4 }

const originalObj = { x: { y: 1 } };
const clonedObj = deepClone(originalObj);
console.log(clonedObj); // Output: { x: { y: 1 } }

const picked = pick(mergedObj, "a", "c");
console.log(picked); // Output: { a: 1, c: 4 }

const omitted = omit(mergedObj, "b");
console.log(omitted); // Output: { a: 1, c: 4 }

console.log(get(mergedObj, "a")); // Output: 1
console.log(get(mergedObj, "x.y", "default")); // Output: 'default'

const updatedObj = set(mergedObj, "d.e", 5);
console.log(updatedObj); // Output: { a: 1, b: 3, c: 4, d: { e: 5 } }

// Custom Transform
const customData = "Hello World";
const reversedData = customTransform(customData, (data) =>
  data.split("").reverse().join("")
);
console.log(reversedData); // Output: 'dlroW olleH'
```

## API Reference

### String Functions

- **toUpperCase(data: string): string**
  Converts a string to uppercase.

- **toLowerCase(data: string): string**
  Converts a string to lowercase.

- **capitalize(data: string): string**
  Capitalizes the first letter of a string.

- **trim(data: string): string**
  Trims whitespace from both ends of a string.

- **replaceAll(data: string, searchValue: string | RegExp, replaceValue: string): string**
  Replaces all occurrences of a substring with a new substring.

- **slugify(data: string): string**
  Converts a string into a URL-friendly slug.

- **truncate(data: string, maxLength: number): string**
  Truncates a string to a specified length and adds an ellipsis.

### Array Functions

- **unique(data: Array): Array**
  Removes duplicate values from an array.

- **flatten(data: Array): Array**
  Flattens a multi-dimensional array into a single-level array.

- **intersection(...arrays: Array[]): Array**
  Finds the intersection of multiple arrays.

- **difference(array1: Array, array2: Array): Array**
  Finds the difference between two arrays.

- **groupBy(data: Array, keyGetter: Function): Object**
  Groups array elements based on a provided function.

- **chunk(data: Array, size: number): Array**
  Splits an array into chunks of specified size.

### Object Functions

- **deepClone(data: Object): Object**
  Creates a deep clone of an object.

- **mergeObjects(...objects: Object[]): Object**
  Merges multiple objects into one.

- **pick(data: Object, ...keys: string[]): Object**
  Picks specific properties from an object.

- **omit(data: Object, ...keys: string[]): Object**
  Omits specific properties from an object.

- **get(data: Object, path: string, defaultValue?: any): any**
  Retrieves the value at a given path of an object.

- **set(data: Object, path: string, value: any): Object**
  Sets the value at a given path of an object.

### Date Functions

#### `formatDate(date: Date, format: string): string`

Formats a `Date` object into a specified string format.

- **Parameters:**
  - `date`: The `Date` object to format.
  - `format`: The format string (e.g., `'YYYY-MM-DD'`).
- **Returns:** A formatted date string.

---

#### `parseDate(dateString: string, format: string): Date`

Parses a date string into a `Date` object based on the provided format.

- **Parameters:**
  - `dateString`: The date string to parse.
  - `format`: The format of the date string (e.g., `'YYYY-MM-DD'`).
- **Returns:** A `Date` object.

---

#### `addDays(date: Date, days: number): Date`

Adds a specified number of days to a `Date` object.

- **Parameters:**
  - `date`: The original `Date` object.
  - `days`: Number of days to add.
- **Returns:** A new `Date` object with added days.

---

#### `subtractDays(date: Date, days: number): Date`

Subtracts a specified number of days from a `Date` object.

- **Parameters:**
  - `date`: The original `Date` object.
  - `days`: Number of days to subtract.
- **Returns:** A new `Date` object with subtracted days.

---

#### `differenceInDays(date1: Date, date2: Date): number`

Calculates the difference in days between two `Date` objects.

- **Parameters:**
  - `date1`: The first `Date` object.
  - `date2`: The second `Date` object.
- **Returns:** The number of days difference.

---

#### `isBefore(date1: Date, date2: Date): boolean`

Checks if the first date is before the second date.

- **Parameters:**
  - `date1`: The first `Date` object.
  - `date2`: The second `Date` object.
- **Returns:** `true` if `date1` is before `date2`, otherwise `false`.

---

#### `isAfter(date1: Date, date2: Date): boolean`

Checks if the first date is after the second date.

- **Parameters:**
  - `date1`: The first `Date` object.
  - `date2`: The second `Date` object.
- **Returns:** `true` if `date1` is after `date2`, otherwise `false`.

### Case Conversion Functions

- **snakeToCamel(data: string): string**
  Converts a snake_case string to camelCase.

- **camelToSnake(data: string): string**
  Converts a camelCase string to snake_case.

- **kebabToCamel(data: string): string**
  Converts a kebab-case string to camelCase.

- **camelToKebab(data: string): string**
  Converts a camelCase string to kebab-case.

### Custom Transform

- **customTransform(data: any, transformFunction: Function): any**
  Applies a custom transformation function to the provided data.

## Error Handling

All functions perform type checking to ensure they receive the expected input types. If a function receives an incorrect data type, it will return the original data without modification. For example, if a non-string is passed to a string manipulation function, the original input will be returned.