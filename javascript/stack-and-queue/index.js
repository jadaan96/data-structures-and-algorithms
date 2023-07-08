'use strict';

const Stack = require('./stack/stack');
const Queue = require('./queue/queue');

const theAddingStack = new theAddingStack();
theAddingStack.push(5);
theAddingStack.push(2);


console.log(theAddingStack);

console.log('The top is: ',theAddingStack.peek());

theAddingStack.pop();

console.log(theAddingStack);
console.log('The peek is: ',theAddingStack.peek());

const theAddingQueue = new Queue();

theAddingQueue.enqueue(5);
theAddingQueue.enqueue(10);
theAddingQueue.enqueue(15);
theAddingQueue.enqueue(20);



console.log(theAddingQueue)

theAddingQueue.dequeue();
console.log(theAddingQueue)