'use strict'
const Node = require('./node');
class LinkedList {
    constructor() {
      this.head = null;
    }
  
    insert(value) {
      const newNode = new Node(value);
      if (this.head === null) {
        this.head = newNode;
      } else {
        newNode.next = this.head;
        this.head = newNode;
      }
    }
    contains(val) {
        let currentNode = this.head;
        while (currentNode) {
            if (currentNode.value === val) {
                return true;
            }
            currentNode = currentNode.next;
        }
        return false;
    }
    getValues() {
        const values = [];
        let currentNode = this.head;
        while (currentNode) {
            values.push(`{ ${currentNode.value} }`);
            // console.log(values)
            currentNode = currentNode.next;
        }
        values.push("NULL"); 
        return values.join(" -> ");
    }
  }
  

const newList = new LinkedList();

// console.log(newList)
newList.insert(15)
newList.insert(10)
newList.insert(5)

const values = newList.getValues();
console.log(values);




module.exports = LinkedList
