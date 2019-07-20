
class Graph{
    
    constructor(){
        this.adjencyList = {};
    }
    /*
    Write a method called addVertex, which accepts a name of a vertex
    It should add a key to the adjacency list with the name of the vertex and set its value to be an empty array
    */

    addVertex(vertex){
        if(this.adjencyList[vertex]) return undefined;
        this.adjencyList[vertex] = [];
        return this;
    }


}

let g = new Graph();
// g.addVertex("a");
console.log(g.addVertex("a"));