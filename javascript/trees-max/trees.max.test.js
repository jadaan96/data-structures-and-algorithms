const { BinaryTree, Node } = require('./trees-max');

describe('BinaryTree', () => {
 

  it(' maximum value ', () => {
    const tree = new BinaryTree();
    tree.root = new Node(10);
    tree.root.left = new Node(5);
    tree.root.right = new Node(15);
    tree.root.left.left = new Node(3);
    tree.root.left.right = new Node(7);
    tree.root.right.left = new Node(30);
    tree.root.right.right = new Node(20);

    expect(tree.findMaxValue()).toBe(30);
  });
});
