// Write a function that takes an unsigned integer and returns the number
// of '1' bits it has (also known as the Hamming weight).
// For example, the 32-bit integer '11' has binary representation
// 00000000000000000000000000001011, so the function should return 3.

/**
 * @param {number} n - a positive integer
 * @return {number}
 */
const hammingWeight = n => {
  let count
  for (count = 0; n; count++) {
    n &= n - 1
  }
  return count
}

const test = hammingWeight(11) // -> 3
test
