/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const twoSum = (nums, target) => {
  // init hashtable = {}
  // hashtable[key] = nums[i], hashtable value = index of nums[i]
  let hashTable = {}
  let result = []
  // iterate over nums
  for (let num of nums) {
    // create space numToFind = target - nums[i]
    let numToFind = target - num
    console.log(numToFind)
    // if numToFind exists in hashtable return numToFind
    if (hashTable[numToFind]) {
      // result.push(hashtable[numToFind])
      result.push(hashTable[numToFind])
      // result.push(i)
      result.push(num)
      // break
    } else {
      // if not found, add nums[i] to hashmap
      hashTable[num]
    }
  }
  return result
}

export default twoSum
