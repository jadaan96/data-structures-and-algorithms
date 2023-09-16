const Graph = require('./Graph');

describe('Graph', () => {
  let graph;

  beforeEach(() => {
    graph = new Graph();
  });

  describe('addNode', () => {
    test('should add a node to the graph', () => {
      graph.addNode(1);
      expect(graph.adjList[1]).toBeDefined();
    });

    test('should not add duplicate nodes', () => {
      graph.addNode(1);
      graph.addNode(1);
      expect(Object.keys(graph.adjList).length).toBe(1);
    });
  });

  describe('addEdge', () => {
    test('should add an edge between two nodes', () => {
      graph.addNode(1);
      graph.addNode(2);
      graph.addEdge(1, 2);
      expect(graph.adjList[1]).toContain(2);
      expect(graph.adjList[2]).toContain(1);
    });

    test('should not add an edge if either node does not exist', () => {
      graph.addNode(1);
      graph.addEdge(1, 2);
      expect(graph.adjList[1]).toBeDefined();
      expect(graph.adjList[2]).toBeUndefined();
    });
  });

  describe('breadthFirst', () => {
    test('should return an array of nodes in breadth-first order', () => {
      graph.addNode(1);
      graph.addNode(2);
      graph.addNode(3);
      graph.addNode(4);
      graph.addEdge(1, 2);
      graph.addEdge(1, 3);
      graph.addEdge(2, 4);
      expect(graph.breadthFirst(1)).toEqual([1, 2, 3, 4]);
    });

    test('should handle disconnected nodes', () => {
      graph.addNode(1);
      graph.addNode(2);
      graph.addNode(3);
      expect(graph.breadthFirst(1)).toEqual([1]);
      expect(graph.breadthFirst(2)).toEqual([2]);
      expect(graph.breadthFirst(3)).toEqual([3]);
    });
  });
});