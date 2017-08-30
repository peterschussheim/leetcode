/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
const hammingDistance = (x, y) => {
  // Exclusive OR (XOR)
  let val = x ^ y

  // Initialize space to keep track of the distance we are trying to find
  let distance = 0
  while (val > 0) {
    // Perform bitwise AND assignment
    val &= val - 1

    // Increment distance by one
    distance += 1
  }

  return distance
}

const test1 = hammingDistance(1, 4) // -> 2
test1
