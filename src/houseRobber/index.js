/**
You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security system connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

Given a list of non-negative integers representing the amount of money of each house, determine the maximum amount of money you can rob tonight without alerting the police.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  let prevNo = 0
  let prevYes = 0

  for (let n = 1; n <= nums.length; n++) {
    let temp = prevNo
    prevNo = Math.max(prevNo, prevYes)
    prevYes = nums[n - 1] + temp
  }
  return Math.max(prevNo, prevYes)
}

let test = rob([0])
console.log(test)
