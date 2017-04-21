/**
 * Given a string, determine if a permutation of the string could form a palindrome.
 * 
 * For example:
 * "code" -> False, "aab" -> True, "carerac" -> True.
 */

// reverse the string
  // split the array
  // call reverse
  // join to form a string

// function isPalindrome(s) {
//   const reversed = s.split('').reverse().join('');
//   return reversed === s;
// }

const canPermutePalindrome = s => {
  const unmatched = new Set()
  s.split('').forEach(char => {
    if (unmatched.has(char)) {
      unmatched.delete(char)
    } else {
      unmatched.add(char)
    }
  })
  return unmatched.size <= 1;
}

console.log(canPermutePalindrome('carerac'))
console.log(canPermutePalindrome('civic'))
console.log(canPermutePalindrome('civil'))
