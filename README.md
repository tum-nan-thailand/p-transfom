## Introduction

**p-transfom** is a Node.js library that simplifies transforming streams, supporting asynchronous, out-of-order, and parallel processing. It allows you to manipulate data streams in an efficient and scalable way, handling both object streams and binary data.

## Table of Contents

1. [Installation](#installation)
2. [Basic Usage](#basic-usage)
3. [API Reference](#api-reference)
    - [PTransform Constructor](#ptransform-constructor)
    - [Transform Function](#transform-function)
    - [Flush Function](#flush-function)
4. [Error Handling](#error-handling)
5. [Debugging](#debugging)
6. [Contributing](#contributing)
7. [License](#license)

## Installation

To install the `p-transfom` library, use npm:

```bash
npm install p-transfom
```

Ensure that you have Node.js installed on your system.

## Basic Usage

Here is a basic example of how to use the `p-transfom` library:

```javascript
const PTransform = require('p-transfom');

// Create a transform stream
const transformStream = new PTransform({
  transform: async (chunk) => {
    // Perform an asynchronous transformation on the stream chunk
    const processedChunk = await performAsyncOperation(chunk);
    return processedChunk; // Return the transformed chunk
  },
  flush: (done) => {
    // Optional: Perform any final operations when the stream is finished
    console.log("Transformation complete");
    done(); // Signal that the flush is complete
  }
});

// Using the transform stream in a pipeline
sourceStream
  .pipe(transformStream)   // Apply the transformation
  .pipe(destinationStream); // Write the transformed data
```

### Explanation:

- **PTransform**: Initializes the stream transformation.
- **transform**: A function that performs the actual transformation of each chunk in the stream. This can be asynchronous if necessary.
- **flush**: A function that runs when all chunks have been processed, useful for finalizing tasks.

## API Reference

### PTransform Constructor

Creates a new `PTransform` instance.

```javascript
new PTransform(options)
```

#### Options:
- **transform** (Function): The function that processes each chunk. This function can return a promise if asynchronous processing is required.
- **flush** (Function, optional): Called once when the stream has processed all data. Useful for any cleanup or final actions.

### Transform Function

The `transform` function is the core of the library, responsible for handling each chunk of data as it passes through the stream.

```javascript
transform: async (chunk, encoding, callback) => {
  // Process chunk
}
```

- **chunk**: The data being passed through the stream.
- **encoding**: The encoding type of the chunk (useful when working with strings).
- **callback**: A function to call when the transformation is complete.

### Flush Function

The optional `flush` method is called when the stream has finished processing all chunks, allowing for any final actions.

```javascript
flush: (done) => {
  // Perform any cleanup or final operations
  done();
}
```

## Error Handling

Errors can be handled by listening to the `error` event in streams. Here's an example:

```javascript
transformStream.on('error', (err) => {
  console.error('Error during transformation:', err);
});
```

## Debugging

To debug transformations, you can log the data as it passes through the stream:

```javascript
const debugStream = new PTransform({
  transform: (chunk) => {
    console.log('Chunk before transformation:', chunk);
    return chunk; // Return the chunk unchanged for debugging purposes
  }
});
```

Alternatively, use environment variables to enable logging:

```bash
DEBUG=p-transform:* node yourScript.js
```

## Contributing

If you want to contribute to the development of **p-transfom**, feel free to submit issues or pull requests on GitHub. Make sure to follow the contribution guidelines in the repository.

## License

**p-transfom** is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
