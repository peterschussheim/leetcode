# canPermutePalindrome

## Requirements
Given a string, determine if a permutation of the string could form a palindrome.

For example:
`"code" -> False, "aab" -> True, "carerac" -> True.`


## Analysis
Let's break down the requirements into smaller pieces:
- Given a String `s`, return a boolean indicating if a permutation of `s` is a valid palindrome.
  - A **palindrome** is a string that reads the same forward and backward.
  - A **permutation** is the act of arranging or rearranging the members of a given set into some sequence or order.
  > radar, madam

## Strategy
One approach to this problem is to check all possible permutations of a given string to see if a palindrome can be formed.  This is not an optimal solution and would take in the worst case, `O(n!)` time.

A different, more efficient approach is to realize that a palindrome string has the following properties (a pattern):
- Given a string, if we can pair all chars except for 1, we found a permutation forming a palindrome.
