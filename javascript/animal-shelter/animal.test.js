'use strict';

const { AnimalShelter } = require('./animal-shelter');

describe('AnimalShelter', () => {
    test('Add Animal to queue', () => {
        let animalShelter = new AnimalShelter();
      
        animalShelter.enqueue(  'dog','lucy' );
        expect(animalShelter.dogQ.peek()).toEqual({ name: 'lucy', species: 'dog' });
      });
      
      test('Add Animal with no name returns null', () => {
        let animalShelter = new AnimalShelter();
      
        animalShelter.enqueue({ species: 'dog' });
        expect(animalShelter.dogQ.peek()).toBe(null);
      });
      test('test dequeue', () => {
        let animalShelter = new AnimalShelter();
    
        animalShelter.enqueue('dog','joojoo');
        animalShelter.enqueue('cat','lolo');
    
        expect(animalShelter.dequeue('dog')).toEqual({ name: 'joojoo', species: 'dog' });
        expect(animalShelter.dequeue('cat')).toEqual({ name: 'lolo', species: 'cat' });
        expect(animalShelter.dequeue('fish')).toEqual(null);
      });
});
