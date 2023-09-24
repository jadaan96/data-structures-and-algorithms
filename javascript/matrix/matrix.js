function matrixToList(vertices, matrix) {
    let adjacencies = {};
  
    for (let vertex of vertices) {
      adjacencies[vertex] = [];
    }
  
    for (let i = 0; i < vertices.length; i++) {
      for (let j = 0; j < vertices.length; j++) {
        if (matrix[i][j] === true) {
          adjacencies[vertices[i]].push(vertices[j]);
        }
      }
    }
  
    return adjacencies;
  }