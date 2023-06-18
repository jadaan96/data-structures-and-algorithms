'use strict';

const LinkedList = require('../classes/LinkedList');

describe('empty linked list', () => {
  it('Creating a Linked List', () => {
    const createlist = new LinkedList();
    expect(createlist.head).toBeNull();
  });

  it(' insert into the linked list', () => {
    const createlist = new LinkedList();
    createlist.insert('Alaa')
    expect(createlist.head.value).toEqual('Alaa');
    // createlist.insert('Mohammed')
    // expect(createlist.head.next.value).toEqual('Mohammed');
    // createlist.insert('Laith')
    // expect(createlist.head.next.next.value).toEqual('Laith');
  })
  it('return true when finding a value',()=>{
    const exiest = new LinkedList();
    exiest.insert(10);
    exiest.insert(20);
    exiest.insert(30);
    expect(exiest.contains(10)).toEqual(true)
    expect(exiest.contains(5)).toEqual(false)

  })
  it('return true when finding a value',()=>{
    const exiest = new LinkedList();
    exiest.insert(10);
    exiest.insert(20);
    exiest.insert(30);
    expect(exiest.getValues()).toEqual('{ 30 } -> { 20 } -> { 10 } -> NULL')

  })

})
