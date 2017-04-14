/**
 *
 Given a sorted array, remove the duplicates in place such that each element appear only once and return the new length.

Do not allocate extra space for another array, you must do this in place with constant memory.

For example,
Given input array nums = [1,1,2],

Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively. It doesn't matter what you leave beyond the new length.

*/

const removeDuplicates = nums => {
  let length = nums.length
  let i, j, current

  if (length === 0) {
    return 0
  }

  current = nums[0]

  for ((i = 0), (j = 0); i < length; i++) {
    if (nums[i] !== current) {
      j++
      nums[j] = nums[i]
      cur = nums[i]
    }
  }
  return j + 1
}

const removeDuplicates = nums => {
  for (let i = 0; i < nums.length; i++) {
    // next num is identical to current num
    if (nums[i] === nums[i + 1]) {
      nums.splice(i, 1)
      i--
    }
  }
  return nums.length
}

// const removeDuplicates = nums => Array.from(new Set(nums)).length;

console.log(removeDuplicates([1, 1, 2]))
