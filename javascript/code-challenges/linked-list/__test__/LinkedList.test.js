'use strict';

const LinkedList = require('../classes/LinkedList');

describe('empty linked list', () => {
  it('Creating a Linked List', () => {
    const createlist = new LinkedList();
    expect(createlist.head).toBeNull();
  });

  it(' insert into the linked list', () => {
    const createlist = new LinkedList();
    createlist.append('Alaa')
    expect(createlist.head.value).toEqual('Alaa');
    createlist.append('Mohammed')
    expect(createlist.head.next.value).toEqual('Mohammed');
    createlist.append('Laith')
    expect(createlist.head.next.next.value).toEqual('Laith');
  })
  it('return true when finding a value',()=>{
    const exiest = new LinkedList();
    exiest.append(10);
    exiest.append(20);
    exiest.append(30);
    expect(exiest.contains(10)).toEqual(true)
    expect(exiest.contains(5)).toEqual(false)

  })
  it('return true when finding a value',()=>{
    const exiest = new LinkedList();
    exiest.append(10);
    exiest.append(20);
    exiest.append(30);
    expect(exiest.getValues()).toEqual('{ 10 } -> { 20 } -> { 30 } -> NULL')

  })

})
