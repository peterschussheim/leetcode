/**
  * Given an integer, convert it to a roman numeral.
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

const intToRoman = num => {}


let test = intToRoman(1)
let test2 = intToRoman(621)
let test3 = intToRoman(1996)

console.log(
  `${test}
${test2}
${test3}`
)
