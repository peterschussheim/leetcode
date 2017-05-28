/**
 * This is the fastest JavaScript implementation I could find on leetcode
 * and wanted to study it more to understand how to optimize my solution.
 */

/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this.min = []
  this.stack = []
  this.sum = 0
  this.mode = 0
  this.mostOccruances = 0
  this.occurance = {}
}

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  var min = this.getMin()
  this.stack.push(x)

  if (min === undefined || min >= x) {
    this.min.push(x)
    this.sum += x
    this.mostOccurances++
    if (this.occurance[x] > this.mostOccurances) {
      this.mostOccurances = this.occurance[x]
      this.mode = x
    }
  }
}

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  var min = this.getMin()
  var val = this.stack.pop()

  if (min === val) {
    this.min.pop()
  }
}

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.stack[this.stack.length - 1]
}

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  return this.min[this.min.length - 1]
}

MinStack.prototype.getMax = function() {
  return this.min[0]
}

MinStack.prototype.getMean = function() {
  return sum / this.min.length
}

MinStack.prototype.getMode = function() {
  return mode
}
/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = Object.create(MinStack).createNew()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
