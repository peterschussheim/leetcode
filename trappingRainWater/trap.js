/* eslint no-console:0 */
/**
 * @param {number[]} height
 * @return {number}
 * Given n non-negative integers representing an elevation map where the width of each
 * bar is 1, compute how much water it is able to trap after raining.
 *
 * For example,
 * Given [0,1,0,2,1,0,1,3,2,1,2,1], return 6.
 */

/**
 * Space needed:
 *  leftMax: array holding precomputed leftMax values
 *  rightMax: array holding precomputed rightMax values
 *  max: Math.min(leftMax[i], rightMax[i])
 *  sum: return value, sum of water
 */

const trap = height => {
  // Declare some useful variables
  let len = height.length, leftMax = [], rightMax = [], sum = 0, i, max

  leftMax[0] = 0
  rightMax[len - 1] = 0
  // Get leftMax
  for (i = 1; i < len; i++) {
    leftMax[i] = Math.max(leftMax[i - 1], height[i - 1])
  }
  // Get rightMax
  for (i = len - 2; i >= 0; i--) {
    rightMax[i] = Math.max(rightMax[i + 1], height[i + 1])
  }

  for (i = 1; i < len - 1; i++) {
    max = Math.min(leftMax[i], rightMax[i])
    if (max - height[i] > 0) {
      sum += max - height[i]
    }
  }
  return sum
}

let test = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1] // 6.
let itsAtrap = trap(test)
console.log(itsAtrap)
