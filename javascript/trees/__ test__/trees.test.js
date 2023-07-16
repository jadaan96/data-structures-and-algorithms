const { Node, BinaryTree, BinarySearchTree } = require('../trees');

describe('Binary Tree and Binary Search Tree Functionality', () => {
  it('Can successfully instantiate an empty tree', () => {
    const tree = new BinaryTree();
    expect(tree.root).toBeNull();
   
  });
  it('Can successfully instantiate a tree with a single root node', () => {
    const root = new Node(5);
    const tree = new BinaryTree(root);
    expect(tree.root).toEqual(root);
  });
  

  it('For a Binary Search Tree, can successfully add a left child and right child properly to a node', () => {
    const bst = new BinarySearchTree(new Node(5));
    bst.add(3);
    bst.add(7);
    expect(bst.root.left.value).toBe(3);
    expect(bst.root.right.value).toBe(7);
  });

  it('Can successfully return a collection from a pre-order,postOrder,inOrder traversal', () => {
    const bst = new BinarySearchTree(new Node(5));
    bst.add(3);
    bst.add(7);
    bst.add(2);
    bst.add(4);
    expect(bst.preOrder()).toEqual([5, 3, 2, 4, 7]);
    expect(bst.postOrder()).toEqual([2, 4, 3, 7, 5]);
    expect(bst.inOrder()).toEqual([2, 3, 4, 5, 7]);


  });

  

  it('Returns true of false for the contains method, given an existing node value', () => {
    const bst = new BinarySearchTree(new Node(5));
    bst.add(3);
    bst.add(7);
    expect(bst.contains(3)).toBe(true);
    expect(bst.contains(10)).toBe(false);

  });

});
