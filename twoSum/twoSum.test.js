/*eslint no-undef: 0*/
/*eslint-env node*/

import twoSum from './twoSum'

describe('twoSum', () => {
  test('', () => {
    const nums = [3, 2, 4]
    const target = 6
    expect(twoSum(nums)).toBe(target)
  })
})
