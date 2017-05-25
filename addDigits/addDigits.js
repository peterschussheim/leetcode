/*
  Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.

  For example:
    Given num = 38, the process is like:
    3 + 8 = 11, 1 + 1 = 2. Since 2 has only one digit,
    return it.

  Follow up:
  Could you do it without any loop/recursion in O(1) runtime?
*/

/**
 * @param {number} num
 * @return {number}
 */
const addDigits = num => {
  const result = num.toString(10).split('').reduce((prev, curr, currIdx) => {
    while (++currIdx) {
      currIdx
      return Number(prev) + Number(curr)
    }
  })
  return result
}

const test1 = addDigits(38)
test1
