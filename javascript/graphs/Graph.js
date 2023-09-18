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
function businessTrip(graph, cities) {
  if (cities.length < 2) return null;

  let totalCost = 0;
  for (let i = 0; i < cities.length - 1; i++) {
    const [currentCity, nextCity] = [cities[i], cities[i + 1]];
    if (!graph.adjacencyList.has(currentCity)) return null;
    const directFlight = graph.adjacencyList.get(currentCity).find(edge => edge.vertex === nextCity);
    if (!directFlight) return null;
    totalCost += directFlight.weight;
  }

  return totalCost;
}

const graph = new Graph();

const metroville = new Vertext("Metroville");
const pandora = new Vertext("Pandora");
const arendelle = new Vertext("Arendelle");
const newMonstropolis = new Vertext("New Monstropolis");
const naboo = new Vertext("Naboo");

graph.addVertex(metroville);
graph.addVertex(pandora);
graph.addVertex(arendelle);
graph.addVertex(newMonstropolis);
graph.addVertex(naboo);

graph.addEdge(metroville, pandora, 82);
graph.addEdge(metroville, newMonstropolis, 82);

graph.addEdge(arendelle, newMonstropolis, 45);
graph.addEdge(arendelle, naboo, 70);
graph.addEdge(naboo, pandora, 115);

// Test 1: Valid trip
console.log(businessTrip(graph, [metroville, pandora])); // Output: 82

// Test 2: Trip with missing connection

console.log("115555",businessTrip(graph, [arendelle, newMonstropolis, naboo])); // Output: null

// Test 3: Valid trip with multiple cities
console.log(businessTrip(graph, [naboo, pandora])); // Output: 115

// Test 4: Trip with missing city
module.exports =Graph