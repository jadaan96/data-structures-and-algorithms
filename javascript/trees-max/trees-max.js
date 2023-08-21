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
    
    
  }
  function Structure(tree1,tree2){
   
    if (!tree1.root|| !tree2.root) {
      return false; 
    }
      let currentLevel1 = [tree1.root];
      let currentLevel2 = [tree2.root];
    function theCounter (currentLevel){
      let counter1 =0 
    while (currentLevel.length > 0) {
    let nextLevel = [];
      for (let i = 0; i < currentLevel.length; i++) {
        const node = currentLevel[i];
        if (node.left === null && node.right === null) {
          counter1 ++
        } else      
        if (node.left) nextLevel.push(node.left);
        if (node.right) nextLevel.push(node.right);
      }
      currentLevel = nextLevel;
    }
    return counter1
  }
  theCounter(currentLevel1)
  console.log('the one0',  theCounter(currentLevel1)  );
  theCounter(currentLevel2)
  console.log('the two',  theCounter(currentLevel2)  );

  return (  theCounter(currentLevel1) ===   theCounter(currentLevel2)  )
}
  
  const tree = new BinaryTree();
tree.root = new Node(10);
tree.root.left = new Node(5);
tree.root.right = new Node(15);
tree.root.left.left = new Node(3);
tree.root.left.right = new Node(7);
tree.root.right.left = new Node(30);
tree.root.right.right = new Node(20);

const tree1 = new BinaryTree();
tree1.root = new Node(10);
tree1.root.left = new Node(5);
tree1.root.right = new Node(15);
tree1.root.left.left = new Node(3);
tree1.root.left.right = new Node(7);
tree1.root.right.left = new Node(30);
// tree1.root.right.right = new Node(20);
// tree1.root.right.right.right = new Node(15);
// tree1.root.right.right.right.left = new Node(100);


console.log('the result',Structure(tree,tree1))
const breadthFirstOutput = tree.breadthFirst();
console.log("breadthFirst() method output:", breadthFirstOutput);
// const fizz = tree.fizzBuzzTree();
// console.log("fizz() method output:", fizz);
// console.log(tree,);
  module.exports = {
    BinaryTree,
    Node
};