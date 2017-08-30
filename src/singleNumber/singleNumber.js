/**
 * @param {number[]} nums
 * @return {number}
 * 
 * Given an array of integers, every element appears twice except for one.
 * Find that single element.
 * 
 * Solution should have linear time complexity.
 * 
 * Example Input:
 * [1] ----> 1
 * [1, 2, 2, 3, 3, 4, 4] ----> 1
 * [6, 6, 4, 5, 5, 10, 10] ----> 4
 */

const singleNumber = nums => {
  let result = 0
  // use XOR bitwise operator
  nums.forEach(num => result ^= num)
  return result
}
