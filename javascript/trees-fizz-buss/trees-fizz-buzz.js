const fizzBuzz = (tree) => {
    const newTree = tree;
    const children = [];
    const root = newTree.root;
    if (root) children.push(root.children);
  
   
    if (root.value % 3 && root.value % 5 === 0) {
      root.value = "FizzBuzz";
    } else if (root.value % 3 === 0) {
      root.value = "Fizz";
    } else if (root.value % 5 === 0) {
      root.value = "Buzz";
    } else {
      root.value = `${root.value}`;
    }
  
    const traverse = (children) => {
      const nextChildren = [];
  
      // traverse
      children.forEach((child) => {
        if (child.children && child.children.length > 0) nextChildren.push(child);
        if (child.value % 3 && child.value % 5 === 0) {
          child.value = "FizzBuzz";
        } else if (child.value % 3 === 0) {
          child.value = "Fizz";
        } else if (child.value % 5 === 0) {
          child.value = "Buzz";
        } else {
          child.value = `${child.value}`;
        }
      });
      if (nextChildren.length > 0) traverse(nextChildren);
    };
  
    traverse(children);
 
    return newTree;
  };
  
  module.exports = fizzBuzz;