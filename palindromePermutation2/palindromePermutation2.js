// @flow

/**
 * @param {string} s
 * @return {string[]}
 */

const generatePalindromes = (s: string) => {
  let permutations = new Set(...s)
  return Array.from(permutations)


}
let test = generatePalindromes("abba")
test
export default generatePalindromes
