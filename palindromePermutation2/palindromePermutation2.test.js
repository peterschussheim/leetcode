/*eslint no-undef: 0*/
/*eslint-env node*/

import palindromePermutation2 from './palindromePermutation2'

describe('palindromePermutation2', () => {
  test('Returns an empty Array if no palindromic permutations are found', () => {
    const string = 'abc'
    const target = []
    expect(palindromePermutation2(string)).toEqual(target)
  })
  test('Correctly returns an Array of palindromic permutions', () => {
    const string = 'aabb'
    const target = ['abba', 'baab']
    expect(palindromePermutation2(string)).toEqual(target)
  })
})
