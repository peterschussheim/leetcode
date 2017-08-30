/*eslint no-undef: 0*/
/*eslint-env node*/

import twoSum from './twoSum'

describe('twoSum', () => {
  test('nums = [3, 2, 4] target = 6', () => {
    const nums = [3, 2, 4]
    const target = 6
    expect(twoSum(nums, target)).toEqual([1, 2])
  })
  test('nums = [2, 7, 11, 15] target 9', () => {
    const nums = [2, 7, 11, 15]
    const target = 9
    expect(twoSum(nums, target)).toEqual([0, 1])
  })
})
