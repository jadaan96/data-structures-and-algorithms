'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.top) {
      this.top = newNode;
    } else {
      newNode.next = this.top;
      this.top = newNode;
    }
  }

  pop() {
    if (!this.top) {
      throw new Error("Stack is empty. Cannot pop from an empty stack.");
    }
    const poppedValue = this.top.value;
    this.top = this.top.next;
    return poppedValue;
  }

  peek() {
    if (!this.top) {
      return null;
    }
    return this.top.value;
  }

  isEmpty() {
    return !this.top;
  }
}




class AnimalShelter {
  constructor() {
    this.catQ = new Stack();
    this.dogQ = new Stack();
  }

  enqueue(species,name) {
    if (typeof name === "string" && species !== 'dog' && species !== 'cat') {
        throw new Error('Invalid animal input')
    
    } else if (species === "dog") {
      this.dogQ.push({name:name ,species:species});
    } else {
      this.catQ.push({name:name ,species:species});
    }
    }

  dequeue(preference) {
    if (preference === 'dog') {
      return this.dogQ.pop();
    } else if (preference === 'cat') {
      return this.catQ.pop();
    } else {
      return null;
    }
  }
}

module.exports = {
  AnimalShelter,
  Stack
};
