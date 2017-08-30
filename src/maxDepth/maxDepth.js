/**
Given a binary tree, find its maximum depth.
The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
 * Definition for binary tree
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @returns {number}
 */

function TreeNode(val) {
  this.val = val
  this.left = (this.right = null)
}

var maxDepth = function(root) {
  if (root === null) {
    return 0
  }
  function findGreater(a, b) {
    return a > b ? a : b
  }
  findGreater(maxDepth(root.left), maxDepth(root.right)) + 1
}

let test = new TreeNode(0)
console.log(test)
// export default maxDepth
