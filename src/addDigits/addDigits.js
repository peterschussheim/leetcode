/*
  Given a non-negative integer num, repeatedly add all its digits until the sum has only one digit.

  https://en.wikipedia.org/wiki/Digital_root

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

const addDigits = num => num === 0
  ? 0
  : num % 9 === 0
    ? 9
    : num % 9

const test1 = addDigits(38)
test1
