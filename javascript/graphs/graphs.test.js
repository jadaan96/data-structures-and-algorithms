const Graph = require('./Graph');
const Vertex = require('./Vertex');

describe('Graph', () => {
  let graph;

  beforeEach(() => {
    graph = new Graph();
  });

  it('should add vertices to the graph', () => {
    const vertex1 = new Vertex('A');
    const vertex2 = new Vertex('B');

    graph.addVertex(vertex1);
    graph.addVertex(vertex2);

    expect(graph.getVertex()).toEqual(['A', 'B']);
  });

  it('should add edges between vertices', () => {
    const vertex1 = new Vertex('A');
    const vertex2 = new Vertex('B');
    const vertex3 = new Vertex('C');

    graph.addVertex(vertex1);
    graph.addVertex(vertex2);
    graph.addVertex(vertex3);

    graph.addEdge(vertex1, vertex2, 5);
    graph.addEdge(vertex2, vertex3, 10);

    expect(graph.getNeighbors(vertex1)[0].value).toEqual('B');
    expect(graph.getNeighbors(vertex2)[0].value).toEqual('C');
  });

  it('should return the size of the graph', () => {
    const vertex1 = new Vertex('A');
    const vertex2 = new Vertex('B');
    const vertex3 = new Vertex('C');

    graph.addVertex(vertex1);
    graph.addVertex(vertex2);
    graph.addVertex(vertex3);

    expect(graph.size()).toBe(3);
  });
});
