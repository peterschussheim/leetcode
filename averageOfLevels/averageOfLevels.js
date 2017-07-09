/**
 * Given a non-empty binary tree, return the average value of the nodes on each level in the form of an array.
 * Input:
    3
   / \
  9  20
    /  \
   15   7
Output: [3, 14.5, 11]
Explanation:
The average value of nodes on level 0 is 3,  on level 1 is 14.5, and on level 2 is 11. Hence return [3, 14.5, 11].
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var averageOfLevels = function(root) {
  let average = []
  for (let node in root) {
    let levelAverage = []
    if (root.left) {
      levelAverage.push(root.left.val)
    }
    if (root.right) {
      levelAverage.push(root.right.val)
    }
    average.push(...levelAverage)
  }
  return average
}

function TreeNode(val) {
  this.val = val
  this.left = this.right = null
}

// [3, 9, 20, 15, 7]
const tree = new TreeNode(3)
tree.left = new TreeNode(9)
tree.right = new TreeNode(20)
tree.right.left = new TreeNode(15)
tree.right.right = new TreeNode(7)

const test = averageOfLevels(tree)
test
