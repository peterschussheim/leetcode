/*
Given a string, find the length of the longest substring without repeating characters.

Examples:

Given "abcabcbb", the answer is "abc", which the length is 3.

Given "bbbbb", the answer is "b", with the length of 1.

Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

*/

// TODO: implement using a suffix tree

// const lengthOfLongestSubstring = string => {
//   // if `string.length` === 0, return 0
//   if (string.length === 0) { return 0 }
//   // init new map
//   let map = {}
//   // init max counter
//   let max = 0
//   // iterate
//   for (let i = 0, j = 0; i < string.length; i++) {
//     // if map contains charAt(i)
//     if (map[string.charAt(i)]) {
//       // - set `j` equal to `max(j, map[string.charAt(i)) + 1)`
//       j = Math.max(j, map[string.charAt(i) + 1])
//     }
//     // add new prop to hash table: `string.chartAt(i), i`
//     map[string.charAt(i)] = i
//     // set max equal to max(max, i - j + 1)
//     max = Math.max(max, i - j + 1)
//   }
//   return max
// }


const lengthOfLongestSubstring = s => {
  let len = 0;
  let end = s;
  let temp = 0;
  let lookup = [];

  while (end) {
    temp = lookup[end]
    lookup[end] = end
    if (temp >= s) {
      len = (end - s > len) ? end - s : len
      s = temp + 1
    }
    end++
  }
  len = (end - s > len) ? end - s : len
  return len
}


let test1 = lengthOfLongestSubstring('abcabcbb') // -> 'abc' length 3
let test2 = lengthOfLongestSubstring('bbbbb') // -> 'b' length 1

console.log(test1)
