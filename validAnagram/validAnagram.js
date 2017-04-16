/*
Given two strings s and t, write a function to determine if t is an anagram of s.

For example,
s = "anagram", t = "nagaram", return true.
s = "rat", t = "car", return false.

Note:
You may assume the string contains only lowercase alphabets.

Follow up:
What if the inputs contain unicode characters? How would you adapt your solution to such case?
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// isAnagram :: (String, String) -> Boolean
var isAnagram = function(s, t) {
  if (s.length !== t.length) {
    return false;
  }
  // convert s and t to arrays
  let sChars = s.split(''); 
  let tChars = t.split(''); 
  // console.log(sChars, tChars);
  return (sChars.sort().join(',') === tChars.sort().join(','))
};


let test1 = 'rat'
let test2 = 'car'

console.log(isAnagram('noo', 'noon'))
console.log(isAnagram(test1, test2))
console.log(isAnagram('anagram', 'nagaram'))
