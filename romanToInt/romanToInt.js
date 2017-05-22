/**
  * Given a roman numeral, convert it to an integer.
    Input is guaranteed to be within the range from 1 to 3999.

    Rules:
      - `I` placed before `V` or `X` indicates one less, e.g. `IV` (one less than five)
        is 4 and nine is `XI`
      - `X` placed before `L` or `C` indicates 10 less.  Forty is `XL`.
      - `C` placed before `D` or `M` indicates a hundred less.  400 is `CD`
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
  const length = romanNumeral.length
  // start building our result at the end of the roman numeral
  let sum = map[romanNumeral[length - 1]]
  for (let i = romanNumeral.length - 2; i >= 0; --i) {
    if (map[romanNumeral[i]] < map[romanNumeral[i + 1]]) {
      sum -= map[romanNumeral[i]]
    } else {
      sum += map[romanNumeral[i]]
    }
  }
  return sum
}

let test = romanToInt('DCXXI')
let test2 = romanToInt('MCMXCVI')
console.log(
  `${test}
${test2}`
)
