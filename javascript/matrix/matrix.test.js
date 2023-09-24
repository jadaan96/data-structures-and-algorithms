const matrixToList = require('./matrixToList'); // Make sure to adjust the import path

describe('matrixToList', () => {
  it('should convert a matrix to an adjacency list', () => {
    const vertices = ['A', 'B', 'C'];
    const matrix = [
      [false, true, false],
      [true, false, true],
      [false, true, false]
    ];

    const result = matrixToList(vertices, matrix);

    expect(result).toEqual({
      'A': ['B'],
      'B': ['A', 'C'],
      'C': ['B']
    });
  });

  it('should handle an empty graph', () => {
    const vertices = [];
    const matrix = [];

    const result = matrixToList(vertices, matrix);

    expect(result).toEqual({});
  });

  it('should handle a graph with no edges', () => {
    const vertices = ['A', 'B', 'C'];
    const matrix = [
      [false, false, false],
      [false, false, false],
      [false, false, false]
    ];

    const result = matrixToList(vertices, matrix);

    expect(result).toEqual({
      'A': [],
      'B': [],
      'C': []
    });
  });
});
