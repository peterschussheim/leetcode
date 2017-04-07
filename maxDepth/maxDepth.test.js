import maxDepth from './maxDepth'

function TreeNode(val) {
  this.val = val
  this.left = (this.right = null)
}

describe('maxDepth', () => {
  test('It finds the maximum depth of a given root node', () => {
    let tree = new TreeNode(1)
    tree.left = 2;
    tree.right = 5
    console.log(tree)
    expect(maxDepth(tree)).toBe(1)
  })
})
