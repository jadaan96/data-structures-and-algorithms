'use strict';

class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}


class Stack {
  constructor(){
    this.top = null;
  }

  push(value){
    let newNode = new Node(value);
    newNode.next = this.top;
    this.top = newNode;
  }

  pop(){
    let removedValue = null;
    if(this.top){
      removedValue = this.top.value;
      this.top = this.top.next;
    }
    return removedValue;
  }

  peek(){
    return this.top.value;
  }

  isEmpty(){
    return this.top === null;
  }}
  class PseudoQueue {
        constructor() {
          this.firstStack = new Stack();
          this.secondStack = new Stack();
        }
      
        enqueue(value) {
          this.firstStack.push(value);
        }
      
        dequeue() {
          if (this.secondStack.isEmpty()) {
            while (!this.firstStack.isEmpty()) {
              this.secondStack.push(this.firstStack.pop());
            }
          }
      
          return this.secondStack.pop();
        }
      }
  
module.exports = {
  Stack,
  PseudoQueue
}

