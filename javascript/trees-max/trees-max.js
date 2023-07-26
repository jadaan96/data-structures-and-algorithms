class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
}
class BinaryTree {
    constructor() {
      this.root = null;
    }
  
    findMaxValue() {
        let currentMax = null;
        let node = this.root;
        const traverse = (node) => {
        //   console.log(node.value);
          if (currentMax < node.value) {
            currentMax = node.value;
          }
          if(node.left !== null) {
            traverse(node.left);
          }
          if(node.right !== null) {
            traverse(node.right);
          }
        };
        traverse(node);
        return currentMax;
  
    }

    breadthFirst(){

        if (!this.root) {
          return []; 
        }
    
        let arr = [];
        let currentLevel = [this.root];
    
        while (currentLevel.length > 0) {
          let nextLevel = [];
          for (let i = 0; i < currentLevel.length; i++) {
            const node = currentLevel[i];
            arr.push(node.value);
            if (node.left) nextLevel.push(node.left);
            if (node.right) nextLevel.push(node.right);
          }
          currentLevel = nextLevel;
        }
    
        return arr;
  
    }
    
    fizzBuzzTree(){

      if (!this.root) {
        return []; 
      }
  
      let newArray = [];
      let currentLevel = [this.root];
  
      while (currentLevel.length > 0) {
        let nextLevel = [];
        for (let i = 0; i < currentLevel.length; i++) {
          const node = currentLevel[i];
          if (node.value % 3 === 0 && node.value % 5 === 0) {
            node.value = 'FizzBuzz';
          } else if (node.value % 3 === 0) {
            node.value = 'Fizz';
          } else if (node.value % 5 === 0) {
            node.value = 'Buzz';
          } else {
            node.value = `${node.value}`;
          }
      
          newArray.push(node.value);

          if (node.left) nextLevel.push(node.left);
          if (node.right) nextLevel.push(node.right);
        }
        currentLevel = nextLevel;
      }
  
      return newArray;

  }
  }
  
  
  const tree = new BinaryTree();
tree.root = new Node(10);
tree.root.left = new Node(5);
tree.root.right = new Node(15);
tree.root.left.left = new Node(3);
tree.root.left.right = new Node(7);
tree.root.right.left = new Node(30);
tree.root.right.right = new Node(20);

const breadthFirstOutput = tree.breadthFirst();
console.log("breadthFirst() method output:", breadthFirstOutput);
const fizz = tree.fizzBuzzTree();
console.log("fizz() method output:", fizz);
console.log(tree,);
  module.exports = {
    BinaryTree,
    Node
};