const LinkedList = require('./linked-list-insertions');


describe('LinkedList', () => {
  let linkedList;

  beforeEach(() => {
    linkedList = new LinkedList();
  });

  it('should successfully add a node to the end of the linked list', () => {
    linkedList.append(1);
    expect(linkedList.head.value).toBe(1);
    expect(linkedList.head.next).toBeNull();
  });

  it('should successfully add multiple nodes to the end of a linked list', () => {
    linkedList.append(1);
    linkedList.append(2);
    linkedList.append(3);
    expect(linkedList.head.value).toBe(1);
    expect(linkedList.head.next.value).toBe(2);
    expect(linkedList.head.next.next.value).toBe(3);
    expect(linkedList.head.next.next.next).toBeNull();
  });

  it('should successfully insert a node before a node located in the middle of a linked list', () => {
    linkedList.append(1);
    linkedList.append(3);
    linkedList.append(4);
    linkedList.insertBefore(3, 2);
    expect(linkedList.head.value).toBe(1);
    expect(linkedList.head.next.value).toBe(2);
    expect(linkedList.head.next.next.value).toBe(3);
    expect(linkedList.head.next.next.next.value).toBe(4);
    expect(linkedList.head.next.next.next.next).toBeNull();
  });

  it('should successfully insert a node before the first node of a linked list', () => {
    linkedList.append(1);
    linkedList.insertBefore(1, 0);
    expect(linkedList.head.value).toBe(0);
    expect(linkedList.head.next.value).toBe(1);
    expect(linkedList.head.next.next).toBeNull();
  });

  it('should successfully insert after a node in the middle of the linked list', () => {
    linkedList.append(1);
    linkedList.append(2);
    linkedList.append(4);
    linkedList.insertAfter(2, 3);
    expect(linkedList.head.value).toBe(1);
    expect(linkedList.head.next.value).toBe(2);
    expect(linkedList.head.next.next.value).toBe(3);
    expect(linkedList.head.next.next.next.value).toBe(4);
    expect(linkedList.head.next.next.next.next).toBeNull();
  });

  it('should successfully insert a node after the last node of the linked list', () => {
    linkedList.append(1);
    linkedList.append(2);
    linkedList.insertAfter(2, 3);
    expect(linkedList.head.value).toBe(1);
    expect(linkedList.head.next.value).toBe(2);
    expect(linkedList.head.next.next.value).toBe(3);
    expect(linkedList.head.next.next.next).toBeNull();
  });

  describe('kth test', () => {
    it('should return the value of the node that is k places from the tail of the linked list', () => {
      linkedList.append(1);
      linkedList.append(3);
      linkedList.append(8);
      linkedList.append(2);

      expect(linkedList.kthFromEnd(0)).toBe(2); // 2 places from the tail
      expect(linkedList.kthFromEnd(2)).toBe(3); // 2 places from the tail
    });

    it('should throw an error when k is greater than the length of the linked list', () => {
      linkedList.append(1);
      linkedList.append(3);
      linkedList.append(8);
      linkedList.append(2);

      expect(() => linkedList.kthFromEnd(6)).toThrowError('k is greater than the length of the linked list.');
    });

    it('should throw an error when k and the length of the list are the same', () => {
      linkedList.append(1);
      linkedList.append(3);
      linkedList.append(8);
      linkedList.append(2);

      expect(() => linkedList.kthFromEnd(4)).toThrowError(`Cannot read properties of null (reading 'next')`);
    });

    it('should throw an error when k is not a positive integer', () => {
      linkedList.append(1);
      linkedList.append(3);
      linkedList.append(8);
      linkedList.append(2);

      expect(() => linkedList.kthFromEnd(-1)).toThrowError('Invalid value for k. k must be a non-negative integer.');
    });

    it('should return the value of the only node in the linked list when the size is 1', () => {
      linkedList.append(1);

      expect(linkedList.kthFromEnd(0)).toBe(1);
    });

    it('should return the value of the node that is k places from the tail in the middle of the linked list', () => {
      linkedList.append(1);
      linkedList.append(3);
      linkedList.append(8);
      linkedList.append(2);
      linkedList.append(5);

      expect(linkedList.kthFromEnd(2)).toBe(8); // 2 places from the tail
    });
  });
});