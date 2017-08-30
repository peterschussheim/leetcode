/*eslint no-undef: 0*/
/*eslint-env node*/

const generatePalindromes = require('./palindromePermutation2')

describe('generatePalindromes', () => {
  test('Returns an empty Array if no palindromic permutations are found', () => {
    const string = 'abc'
    const target = []
    expect(generatePalindromes(string)).toEqual(target)
  })
  test('Correctly returns an Array of palindromic permutions', () => {
    const string = 'aabb'
    const target = ['abba', 'baab']
    expect(generatePalindromes(string)).toEqual(target)
  })
})
