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
          }a
          if(node.right !== null) {
            traverse(node.right);
          }
        };
        traverse(node);
        return currentMax;
  
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

console.log(tree.findMaxValue());
  module.exports = {
    BinaryTree,
    Node
};