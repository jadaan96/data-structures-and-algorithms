class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
    }
  
    add(value) {
      const node = new Node(value);
      if (!this.head) {
        this.head = node;
        return;
      }
  
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
  
    values() {
      let values = [];
      let current = this.head;
      while (current) {
        values.push(Object.keys(current.value));
        current = current.next;
      }
      return values;
    }
  
    theget(key) {
        let current = this.head;
    
        while (current) {
          if (current.value[key]) {
            return current.value[key];
          }
          current = current.next;
        }
        return "Value not found";
      }
      
  }
  
  module.exports = LinkedList;
  