var ascii_deletion_distance = function(str1, str2) {
  if (str1.length == 0) return str2.charCodeAt()
  if (str2.length == 0) return str1.charCodeAt()

  var matrix = []

  // increment along the first column of each row
  var i
  for (i = 0; i <= str2.length; i++) {
    matrix[i] = [i]
  }

  // increment each column in the first row
  var j
  for (j = 0; j <= str1.length; j++) {
    matrix[0][j] = j
  }

  // Fill in the rest of the matrix
  for (i = 1; i <= str2.length; i++) {
    for (j = 1; j <= str1.length; j++) {
      if (str2.charAt(i - 1) == str1.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1]
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1, // substitution
          Math.min(
            matrix[i][j - 1] + 1, // insertion
            matrix[i - 1][j] + 1
          )
        ) // deletion
      }
    }
  }

  return matrix[str2.length][str1.length]
}

let test1 = ascii_deletion_distance('cat', 'at')
console.log(test1)
