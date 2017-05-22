/**
  * Given a roman numeral, convert it to an integer.
    Input is guaranteed to be within the range from 1 to 3999.
 */

/**
 * @param {string} s
 * @return {number}
 */

const map = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
}

const romanToInt = romanNumeral => {
  let sum = 0
  for (let char of romanNumeral) {
    sum += map[char]
  }
  return sum
}

let test = romanToInt('DCXXI')
console.log(test)
