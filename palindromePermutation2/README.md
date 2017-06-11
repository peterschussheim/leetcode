# Palindrome Permutation II

Given a string `s`, return all the palindromic permutations (without duplicates) of it. Return an empty list if no palindromic permutations could be form.

For example:

Given `s = "aabb", return ["abba", "baab"]`.

Given `s = "abc", return []`.

## Approach #1: Bruteforce
Using a bruteforce solution, we can produce an answer in **factorial** time-complexity `O(n!)` and linear space `O(n)`.

### Algorithm
1) Initialize a set data structure
2) Generate all palindromes from the given `s`

``` javascript
generatePalindromes(s) {
  permute(Array.from(s), 0)
  return new Set()
}
```

## Approach #2: Backtracking
What if we cannot form palindromic permutation with a given input `s`?  Let's explore this idea further.

### Algorithm
1) if a palindromic permutation is possible for `s`, we can then **and only then** proceed to generate the permutations.

  - Using a hash table, store the **number of occurrances** of each char, out of 128 possible ASCII chars in total.

  - If the quantity of chars with an **odd** number of occurrances > 1, there are no palindromic permutations for `s`.

2) Once confirmed in step 1, we will generate palindromic permutations using only the **first half** of a palindromic string, `string` and join the **reverse** of `string` to itself, creating the palindromic permutations of `s`. 

3) If `s` is an odd length, (palindromic permutations are possible), one of the chars in `s` occurs an odd number of times.  We can track this char as `char` separately from `string`.  When generating permutations of `string`, perform the same steps as before, with a difference:

  - Generate permutations of `string`
  - insert `char` into the middle of the new string
  - append `string` reversed to the end.
