
const DataTransformer = require('p-transfom');

// Create an instance of DataTransformer
const transformer = new DataTransformer();

// Test data
const testData = {
  firstName: 'John',
  lastName: 'Doe',
  contactDetails: {
    emailAddress: 'john.doe@example.com',
    phoneNumber: '123-456-7890'
  },
  hobbies: ['readingBooks', 'playingGuitar']
};

// Convert camelCase to snake_case
const result = transformer.camelToSnake(testData);

// Log the result
console.log('Original Data:', testData);
console.log('Transformed Data:', result);