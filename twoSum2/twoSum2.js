/**
 * Given an array of integers that is already sorted in ascending order, find two numbers such that they add up to a specific target number.

The function twoSum should return indicess of the two numbers such that they add up to the target, where index1 must be less than index2. Please note that your returned answers (both index1 and index2) are not zero-based.

You may assume that each input would have exactly one solution and you may not use the same element twice.

Input: numbers={2, 7, 11, 15}, target=9
Output: index1=1, index2=2
 */

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  let indices = []
  let left = 0
  let right = numbers.length - 1
  let v

  if (numbers === null || numbers.length < 2) {
    return indices
  }

  while (left < right) {
    v = numbers[left] + numbers[right]
    // if v equals the target, return indices with the values from v
    if (v === target) {
      indices[0] = left + 1
      indices[1] = right + 1
      break
    } else if (v > target) {
      // if v is less than target, decrement right pointer to try new value
      right--
    } else {
      left++
    }
  }
  return indices
}

const arr1 = [2, 7, 11, 15]
const target1 = 9
let test1 = twoSum(arr1, target1)
console.log(`TEST result: ${test1} \nEXPECTED result: ${[1, 2]}`)
