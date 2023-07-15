'use strict';

const Stack = require('../stack/stack');
const Queue = require('../queue/queue');


describe('Stack testing', () => {
    it('Can successfully push multiple values onto a stack', () => {
        const stack = new Stack();
        stack.push(1);
        console.log(stack.top.value)
        console.log(stack.length)

        expect(stack.top.value).toEqual(1)
        stack.push(2);
        expect(stack.top.value).toEqual(2)
        stack.push(3);
        expect(stack.top.value).toEqual(3)
        expect(stack.length).toEqual(3)
      })
      it('Can successfully pop off the stack', () => {
        const stack = new Stack();
        stack.push(1);
        stack.push(2);
        stack.push(3);
      
    
        stack.pop();
    
        expect(stack.top.value).toEqual(2)
        expect(stack.length).toEqual(2)
      })

      it('Can successfully empty a stack after multiple pops', () => {
        const stack = new Stack();
        stack.push(1);
        stack.push(2);
        stack.push(3);
      
    
        stack.pop();
        stack.pop();
        stack.pop();

    
        expect(stack.top).toBeNull( )
        expect(stack.length).toEqual(0)
      })
      it('Can successfully peek the next item on the stack', () => {
        const stack = new Stack();
        stack.push(1);
        stack.push(2);
        stack.push(3);
        expect(stack.peek()).toEqual(3)
        expect(stack.length).toEqual(3)
      })
      it('Calling dequeue or peek on empty stack raises exception', () => {
        const stack = new Stack();
        expect(() => {
          stack.peek();
        }).toThrowError('the stack is empty');
        // expect(stack.peek()).toThrowError('the stack is empty');

      });

 
})
describe('Queue testing', () => {
    it('Can successfully enqueue multiple values into a queue', () => {
      const theQueue = new Queue();
      theQueue.enqueue(100);
      theQueue.enqueue(250);
      theQueue.enqueue(300);
    
      expect(theQueue.front.value).toEqual(100);
      expect(theQueue.rear.value).toEqual(300);
   
    })
    it('Can successfully dequeue out of a queue the expected value', () => {
        const theQueue = new Queue();
        theQueue.enqueue(100);
        theQueue.enqueue(250);
        theQueue.enqueue(300);

      
        expect(theQueue.dequeue()).toEqual(100);
        expect(theQueue.dequeue()).toEqual(250);
        expect(theQueue.dequeue()).toEqual(300);
     
      })
      it('Can successfully peek into a queue, seeing the expected value', () => {
        const theQueue = new Queue();
        theQueue.enqueue(100);
        theQueue.enqueue(250);
        theQueue.enqueue(300);
        
        expect(theQueue.peek()).toEqual(100);
     
      })
      it('Can successfully empty a queue after multiple dequeues', () => {
        const theQueue = new Queue();
        theQueue.enqueue(100);
        theQueue.enqueue(250);
        theQueue.enqueue(300);

      
        expect(theQueue.dequeue()).toEqual(100);
        expect(theQueue.dequeue()).toEqual(250);
        expect(theQueue.dequeue()).toEqual(300);
        expect(theQueue.length).toEqual(0)

     
      })
      it('Calling dequeue or peek on empty queue raises exception', () => {
        const theQueue = new Queue();
        expect(() => {
            theQueue.peek();
        }).toThrowError('the queue is empty');

      });
  })