class Graph {
    constructor() {
      this.adjacencyList = {};
    }
  
    // ... Other methods for adding nodes and edges ...
  
    depthFirst(startNode) {
      const visited = {};
      const result = [];
  
      const dfs = (node) => {
        if (!node) return;
        visited[node] = true;
        result.push(node);
  
        this.adjacencyList[node].forEach((neighbor) => {
          if (!visited[neighbor]) {
            dfs(neighbor);
          }
        });
      };
  
      dfs(startNode);
      return result;
    }
  }
  
  // Example usage:
  const graph = new Graph();
  
  graph.addNode("A");
  graph.addNode("B");
  graph.addNode("C");
  graph.addNode("D");
  
  graph.addEdge("A", "B");
  graph.addEdge("A", "C");
  graph.addEdge("B", "D");
  
  const startNode = "A";
  const traversalOrder = graph.depthFirst(startNode);
  console.log(traversalOrder);
  