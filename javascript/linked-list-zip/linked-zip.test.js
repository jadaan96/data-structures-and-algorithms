'use strict';

const LinkedList = require('./linked-list-zip');

describe('Linked List', () => {
test('Check if the two lists are combinded', () => {
    const listOne = new LinkedList();
    const listTwo = new LinkedList();

    listOne.append('a');
    listOne.append('b');
    listOne.append('c');

    listTwo.append('1');
    listTwo.append('2');
    listTwo.append('3');

    const finalList = new LinkedList();
    const zipList = finalList.newList(listOne, listTwo);

    expect(zipList.head.value).toBe('a');
    expect(zipList.head.next.value).toBe('1');
    expect(zipList.head.next.next.value).toBe('b');
    expect(zipList.head.next.next.next.value).toBe('2');






  })
  })