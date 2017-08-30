/**
 * @param {number} num
 * @return {boolean}
 * 
 */

// Because we are only iterating up to SQRT of `num`, we only need to 
// make a single pass, reducing our runtime dramatically.

// Find the factors of `num` only up to the square root of `num`.
// Sum up all the factors and check if the given number is a perfect number or not.

// Note: since we are considering 1 as a valid factor, we need to account
// for this by subtracting `num` from `sum`. See line 28.


const checkPerfectNumber = num => {
  if (num <= 0) {
    return false
  }
  let sum = 0
  for (let i = 1; i * i <= num; i++) {
    // check for factor
    if (num % i === 0) {
      sum += i
      if (i * i !== num) {
        sum += num / i
      }
    }
  }
  return sum - num === num
}

// checkPerfectNumber(0)
// checkPerfectNumber(6)
console.log(checkPerfectNumber(28))
console.log(checkPerfectNumber(99999991));
