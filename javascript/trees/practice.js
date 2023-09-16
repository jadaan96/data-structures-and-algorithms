'use strict'

class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class Trees {
    constructor() {
        this.Root = null
    }

    insert(value) {
        const newNode = new Node(value)
        if (!this.Root) return this.Root = newNode
        else {
            const traversal = node => {
                if (node.value > newNode.value) {
                    if (!node.left) return node.left = newNode
                    else traversal(node.left)
                } else {
                    if (!node.right) return node.right = newNode
                    else traversal(node.right)
                }
            }
            traversal(this.Root)
        }
    }

     
    
}
const bt = new Trees(7)
bt.insert(10)
bt.insert(6)
bt.insert(5)
bt.insert(12)
// bt.insert(96)
// bt.insert(49)


let arr=[-10,-3,-2,-1,0,5,9,10,15]
// bt.sortedArrayToBST(arr)
// [-10,-3,0]
function sortedArrayToBST(nums) {
    const buildTree = (start, end) => {
        if (start > end) {
            return null;
        }

        const middleIndex = Math.floor((start + end) / 2);
        const root = new TreeNode(nums[middleIndex]);

        root.left = buildTree(start, middleIndex - 1);
        root.right = buildTree(middleIndex + 1, end);

        return root;
    };
    return buildTree(0, nums.length - 1);

};

//   function minDiffInBST(root) {

//     if (root === null) return Infinity; 
//     let pre = null;
//     let minDiff = Infinity;

//     const rev = (node) => {
//         if (node.left) rev(node.left);
        
//         if (pre !== null) {
//             let current = Math.abs(node.value - pre);
//             minDiff = Math.min(minDiff, current);
//         }

//         pre = node.value;

//         if (node.right) rev(node.right);
//     };

//     rev(root);
//     return minDiff

// };
// function minDiffInBST(root) {
//     if ( root === null ) return null
//     let obj ={}
//     let count=0
//     const rev=(node)=>{
//         if( node.left ) rev(node.left)
//         if( !obj[node.value]){
//             obj[node.value]=0

//         }
//         obj[node.value]=obj[node.value] +1  
        
//         if (node.right) rev(node.right)

//     }
    
//     rev (root)
//     const maxKeyValue = Math.max(...Object.keys(obj).map(Number));
//     return maxKeyValue;
// }
// // console.log(minDiffInBST(bt.Root));
// function test (root){
//     if(root === null) return true;
// 	//turns to false if unbalanced tree encountered
//     let flag = true;
// 	//recursive function - it recursively returns the height of the tree 
//     function helper(root) {
// 	    //base case of recursion - tree with no nodes return height 0
//         if(root.left === null && root.right === null) {
//             return 0
//         }
//         let leftHeight = 0, rightHeight = 0;
//         if(root.left !== null) {
// 		    //height of left subtree is one plus the height of child sub tree
//             leftHeight = 1 + helper(root.left);
//             console.log(leftHeight);
//         }
//         if(root.right !== null) {
// 		   //height of right subtree is one plus the height of child sub tree
//            rightHeight = 1 + helper(root.right);   
//         }
// 		//height of tree is max between height of left and right subtree
//         let actualHeight = Math.max(leftHeight, rightHeight);
// 		//if abs diff between leftHt and right Ht greater than one; turn flag to false
//         if(Math.abs(leftHeight-rightHeight) > 1) flag = false;
//         return actualHeight;
//     }
//     helper(root);
//     return flag
// }
// function test1 (root,low,hight){
//    if (root === null) return 0
//    let sum =0
//    const rev =(node)=>{
//     if(node.value >= low && node.value <= hight){
//         sum =sum + node.value 
//     }
//         if (node.left)rev(node.left)
//         if (node.right) rev(node.right)

//      }
//    rev(root)
//    return sum 
// }
function test1 (root){
    if (root === null) return 0
    let newTree=null
    const rev =(node)=>{
        if (node.left)rev(node.left)
        newTree = new Node(node.value)
        newTree.right=newTree
        if (node.right)rev(node.right)


      }
    rev(root)
    return newTree  
 }


console.log(test1(bt.Root));
