/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const twoSum = (nums, target) => {
  let map = {}
  let result = []
  for (let i = 0; i < nums.length; i++) {
    let val = nums[i]
    let numToFind = target - val
    if (numToFind in map) {
      result.push(map[numToFind])
      result.push(i)
      break
    } else {
      map[val] = i
    }
  }
  return result
}

export default twoSum
