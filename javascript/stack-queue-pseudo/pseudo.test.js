const { Stack, PseudoQueue } = require('./pseudo-queue');

describe('PseudoQueue', () => {
  let queue;
  let stack;
  let firstStack;
  let secondStack;

  beforeEach(() => {
    queue = new PseudoQueue();
    stack = new Stack();
    firstStack = new Stack();
    secondStack = new Stack();
  });

  test('enqueue and dequeue operations', () => {
    queue.enqueue(10);
    queue.enqueue(20);
    queue.enqueue(30);

    expect(queue.dequeue()).toBe(10);
    expect(queue.dequeue()).toBe(20);

    queue.enqueue(40);

    expect(queue.dequeue()).toBe(30);
    expect(queue.dequeue()).toBe(40);
  });

 
});