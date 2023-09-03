const repeated = require('./hashmap-repeated'); 

test('Finding the first repeated word', () => {
    const inputString = " This is only a test. This is only a test.";
    expect(repeated(inputString)).toBe('this'); // Change 'This' to 'this'
  });

test('No repeated word in the input', () => {
  const inputString = "This is a test without any repeated words.";
  expect(repeated(inputString)).toBe(null);
});