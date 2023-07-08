' use strict'
const Node = require('../node')

class Queue{
    constructor() {
        this.front = null;
        this.rear = null;
        this.length = 0;
      }
    
      isEmpty() {
        return this.front === null;
      }
    
      enqueue(value) {
        const newNode = new Node(value);
        if (this.isEmpty()) {
          this.front = newNode;
          this.rear = newNode;
        } else {
          this.rear.next = newNode;
          this.rear = newNode;
        }
        this.length++;
      }
  
    dequeue() {
        if(this.isEmpty()) throw new Error('the queue is empty');
    
        const temp = this.front;
        this.front = this.front.next;
        temp.next = null;
        this.length--;
        return temp.value;
      }
    
      peek() {
        if (this.isEmpty()) throw new Error('the queue is empty');
    
        return this.front.value;
      }
}
module.exports = Queue;