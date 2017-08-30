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

// const twoSum = (nums, target) => {
//   // sort nums in ascending order
//   let sorted = nums.sort((a, b) => a > b)
//   // get pointers to min and max
//   let found
//   let min = sorted[0]
//   let max = sorted[sorted.length - 1]
//   let result
//   while (!found) {
//     if (sum(min, max) === target) {
//       found = true
//       result = [min, max]
//     } else {
//       if (min < max) {
//         min++
//         continue
//       }
//       if (min > max) {
//         max--
//         continue
//       }
//     }
//     return result
//   }
// }

function sum(a, b) {
  return a + b
}

// let test1 = twoSum([1, 4, 22, 2, 4], 26)
// test1

let test2 = twoSum([2, 7, 11, 15], 9)
test2

export default twoSum
