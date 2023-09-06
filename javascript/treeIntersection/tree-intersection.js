const { BinaryTree, Node } = require('../trees/trees');

function treeIntersection(tree1, tree2) {
  const result = [];

  const valuesInTree1 = new Set(tree1.preOrder());
  const valuesInTree2 = new Set(tree2.preOrder());

  for (const value of valuesInTree1) {
    if (valuesInTree2.has(value)) {
      result.push(value);
    }
  }

  return result;
}

module.exports = treeIntersection;
