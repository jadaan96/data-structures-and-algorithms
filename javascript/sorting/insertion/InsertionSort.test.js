const insertionSort = require('./insertionSort');

// Test case 1: Sample array [8, 4, 23, 42, 16, 15]
test('Sorts the array correctly', () => {
  const arr = [8, 4, 23, 42, 16, 15];
  const sortedArr = insertionSort(arr);
  expect(sortedArr).toEqual([4, 15, 16, 23, 42]);
});

// Test case 2: Reverse-sorted array [20, 18, 12, 8, 5, -2]
test('Sorts the reverse-sorted array correctly', () => {
  const arr = [20, 18, 12, 8, 5, -2];
  const sortedArr = insertionSort(arr);
  expect(sortedArr).toEqual([-2, 5, 8, 12, 18, 20]);
});

// Test case 3: Few uniques array [5, 12, 7, 5, 5, 7]
test('Sorts the array with few uniques correctly', () => {
  const arr = [5, 12, 7, 5, 5, 7];
  const sortedArr = insertionSort(arr);
  expect(sortedArr).toEqual([5, 5, 5, 7, 7, 12]);
});

// Test case 4: Nearly-sorted array [2, 3, 5, 7, 13, 11]
test('Sorts the nearly-sorted array correctly', () => {
  const arr = [2, 3, 5, 7, 13, 11];
  const sortedArr = insertionSort(arr);
  expect(sortedArr).toEqual([2, 3, 5, 7, 11, 13]);
});