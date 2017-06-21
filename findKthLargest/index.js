/**
 * Find the kth largest element in an unsorted array. Note that it is the kth largest element in the sorted order, not the kth distinct element.
For example,
Given [3,2,1,5,6,4] and k = 2, return 5.

Note: 
You may assume k is always valid, 1 ≤ k ≤ array's length.
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

var findKthLargest = function(nums, k) {
  let n = nums.length
  let sorted = nums.sort((a, b) => a - b)
  return nums[n - k]
}

// let test = [3, 2, 1, 5, 6, 4]
// let testK = 2
// console.log(findKthLargest(test, testK))
// the above input should return 5

let test = [3,2,3,1,2,4,5,5,6,7,7,8,2,3,1,1,1,10,11,5,6,2,4,7,8,5,6]
let testK = 2
console.log(findKthLargest(test, testK)) // returns 10
