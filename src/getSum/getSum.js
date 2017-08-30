/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 *
 * Calculate the sum of two integers a and b, but you are not allowed to use the operator + and -.
 * 
 * Example:
 * Given a = 1 and b = 2, return 3.
 */

const getSum = (a, b) => {
    if (b === 0) { return a }
    return getSum(a ^ b, (a & b) << 1)
};
