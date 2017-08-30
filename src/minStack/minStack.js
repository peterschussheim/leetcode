/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this.storage = []
}

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  this.storage.push(x)
}

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  this.storage.pop()
}

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.storage[this.storage.length - 1]
}

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  return Math.min(...this.storage)
}

// var stack = Object.create(MinStack.prototype)
let stack = new MinStack()

stack.push(30) // storage: [30]
stack.push(3) // storage: [30, 3]
stack.push(20) // storage: [30, 3]
stack.push(10) // storage: [30, 3, 20, 10]

stack.pop() // storage: [30, 3, 20]

var topVal = stack.top()
var minVal = stack.getMin()

stack
topVal
minVal
