const Hashmap = require('./HashTable');

describe('Hashmap', () => {
  let makeHash;

  beforeEach(() => {
    makeHash = new Hashmap(19);
  });

  test('should set and get values correctly', () => {
    makeHash.set('Waleed', 'Instructor');
    makeHash.set('Aseel', 'TA');

    expect(makeHash.get('Waleed')).toBe('Instructor');
    expect(makeHash.get('Aseel')).toBe('TA');
  });

  test('should correctly check if a key exists', () => {
    makeHash.set('Waleed', 'Instructor');
    makeHash.set('Aseel', 'TA');

    expect(makeHash.has('Waleed')).toBe(true);
  });

  test('should return keys correctly', () => {
    makeHash.set('Waleed', 'Instructor');
    makeHash.set('Aseel', 'TA');

    const keys = makeHash.keys();
    expect(keys).toContain('Waleed');
    expect(keys).toContain('Aseel');
  });
});
