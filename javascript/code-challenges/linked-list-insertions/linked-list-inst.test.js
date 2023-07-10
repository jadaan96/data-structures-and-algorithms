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

  describe('Linked List', () => {
    it('Can successfully instantiate and empty linked list', () => {
      const list = new LinkedList();
      expect(list.head).toBeNull();
    });
    it('Can properly insert into a linked list', () => {
      const list = new LinkedList();
      list.insert(1);
      expect(list.head.value).toEqual(1);
      expect(list.head.next).toBeNull;
    });
    it('The head property will properly point to the first node in the linked list', () => {
      const list = new LinkedList();
      list.insert(2);
      expect(list.head.value).toEqual(2);
      expect(list.head.next).toBeNull;
      list.insert(1);
      expect(list.head.value).toEqual(1);
      expect(list.head.next.value).toEqual(2);
      expect(list.head.next.next).toBeNull;
      list.append('a');
      expect(list.head.next.next.value).toEqual('a');
    });
    it('traversal with values', () => {
      const list = new LinkedList();
      list.append('a');
      list.append('b');
      list.append('c');
      list.append('d');
      
      // list.traversal();
    
      expect(list).toEqual({
        'head': {
          'value': 'a',
          'next': {
            'value': 'b',
            'next': {
              'value': 'c',
              'next': {
                'value': 'd',
                'next': null
              }
            }
          }
        }
      });
    
      list.insertBefore('c', '5'); // Insert '5' before 'c'
    
      expect(list.head.next.next.value).toEqual('5');
      
      list.insertAfter('b', 'a'); // Insert 'a' after 'b'
    
      expect(list.head.next.value).toEqual('b');
    });

   
  });
});