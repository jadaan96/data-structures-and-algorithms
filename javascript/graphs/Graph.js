'use strict';

const Edge = require("./Edge");
const Vertext = require("./Vertex");

class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }

  addVertex(vertex) {
    this.adjacencyList.set(vertex, [])
  }

  addEdge(start, end, weight) {
    if(!this.adjacencyList.has(start) && !this.adjacencyList.has(end)) {
      console.log('We cannot have an edge without staring and ending Vertex!!')
      return;
    }
    const startVertex = this.adjacencyList.get(start);
    const edge = new Edge(end, weight);
    
    startVertex.push(edge);
  }
  getVertex(){
const  Vertexs=[]
 for (const [vertex, edges] of this.adjacencyList) {
    Vertexs.push(vertex.value)
  }
 return Vertexs

  }
  getNeighbors(vertex){
    const Neighbors = this.adjacencyList.get(vertex)
const arr=[]
    for (let i = 0; i < Neighbors.length; i++) {
        arr.push(Neighbors[i].vertex);
        
    }
    return arr;
  }
  size() {
    let counter = 0;
    for (const vertex of this.adjacencyList.entries()) {
      counter++;
    }
    return counter;
  }
}

module.exports =Graph