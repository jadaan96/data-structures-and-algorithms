const { BinaryTree, Node } = require('../trees/trees');
const treeIntersection = require('./tree-intersection');
const { expect } = require('chai'); // Import 'expect' from Chai

describe('treeIntersection', () => {
  it('should find the intersection of two binary trees', () => {
    // Create Binary Trees
    const tree1 = new BinaryTree(new Node(1));
    tree1.root.left = new Node(2);
    tree1.root.right = new Node(3);
    tree1.root.left.left = new Node(4);
    tree1.root.left.right = new Node(5);

    const tree2 = new BinaryTree(new Node(9));
    tree2.root.left = new Node(1);
    tree2.root.right = new Node(5);
    tree2.root.left.right = new Node(4);
    tree2.root.right.left = new Node(6);

    const result = treeIntersection(tree1, tree2);

    
    expect(result).to.deep.equal([1,4, 5]); 
  });

});
