'use strict';

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

  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  newList(list1, list2) {
    if (!list1.head) return list2;
    if (!list2.head) return list1;
    if (!list1.head && !list2.head) return null;

    const newList = new LinkedList();
    let current1 = list1.head;
    let current2 = list2.head;
    while (current1 || current2) {
      if (current1) {
        newList.append(current1.value);
        current1 = current1.next;
      }
      if (current2) {
        newList.append(current2.value);
        current2 = current2.next;
      }
    }
    return newList;
  }
 
}

module.exports = LinkedList;