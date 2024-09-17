
# p-transfom

**p-transfom** is a Node.js library that simplifies transforming data streams, supporting asynchronous, out-of-order, and parallel processing. It provides utility functions to manipulate data in an efficient and scalable way, handling both object streams and string data conversions.

## Table of Contents

1. [Installation](#installation)
2. [Basic Usage](#basic-usage)
3. [API Reference](#api-reference)
   - [Transform Functions](#transform-functions)
4. [Error Handling](#error-handling)
5. [Contributing](#contributing)
6. [License](#license)

## Installation

To install the `p-transfom` library, use npm:

```bash
npm install p-transfom
```

Ensure that you have Node.js installed on your system.

## Basic Usage

The `p-transfom` library exports multiple utility functions to transform data. Below is a basic example of how to use the functions provided:

```javascript
const { snakeToCamel, camelToSnake, toUpperCase, toLowerCase, customTransform } = require('p-transfom');

// Convert text from snake_case to camelCase
const snakeCaseText = 'example_text';
const camelCaseText = snakeToCamel(snakeCaseText);
console.log(camelCaseText); // Output: exampleText

// Convert text from camelCase to snake_case
const camelCaseString = 'exampleText';
const snakeCaseString = camelToSnake(camelCaseString);
console.log(snakeCaseString); // Output: example_text

// Use customTransform to apply a custom transformation function
const customData = 'example text';
const upperCaseData = customTransform(customData, toUpperCase);
console.log(upperCaseData); // Output: EXAMPLE TEXT

// Convert to lowercase
const lowerCaseData = toLowerCase('EXAMPLE TEXT');
console.log(lowerCaseData); // Output: example text
```

## API Reference

### Transform Functions

- **snakeToCamel(data: string): string**
  - Converts a `snake_case` string to `camelCase`.

- **camelToSnake(data: string): string**
  - Converts a `camelCase` string to `snake_case`.

- **toUpperCase(data: string): string**
  - Converts a string to uppercase.

- **toLowerCase(data: string): string**
  - Converts a string to lowercase.

- **customTransform(data: any, transformFunction: Function): any**
  - Applies a custom transformation function to the provided data.

## Error Handling

Errors should be handled by validating input data types before using the transformation functions. If any function receives incorrect data types, it will return the input without modification.

## Contributing

If you want to contribute to the development of **p-transfom**, feel free to submit issues or pull requests on GitHub. Make sure to follow the contribution guidelines in the repository.

## License

This project is licensed under the MIT License. See the [LICENSE](https://github.com/tum-nan-thailand/p-transfom#readme) file for more details.
