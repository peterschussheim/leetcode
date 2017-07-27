/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

class ListNode {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

const addTwoNumbers = (l1, l2) => {
  let carry = 0
  let result = new ListNode(0)
  let resultHead = result
  let p = l1
  let q = l2

  while (p !== null || q !== null) {
    let x = p != null ? p.val : 0
    let y = q != null ? q.val : 0
    let sum = carry + x + y
    let val = sum % 10 /*?*/
    carry = Math.floor(sum / 10)
    result.next = new ListNode(val)
    result = result.next

    if (p !== null) p = p.next
    if (q !== null) q = q.next
  }
  if (carry === 1) {
    result.next = new ListNode(carry)
  }
  return resultHead.next /*?*/
}

// The example below uses l1 = [2,4,3] and l2 = [5,6,4] which we can 'unroll'
// and represent as 342 + 365 = 708.
let list1 = new ListNode(2)
list1.next = new ListNode(4)
list1.next.next = new ListNode(3)

let list2 = new ListNode(5)
list2.next = new ListNode(6)
list2.next.next = new ListNode(4)

let test = addTwoNumbers(list1, list2) /*?*/
console.log(test)

// With comments
// var addTwoNumbers = function(l1, l2) {
//   // Init dummyHead to 0 to help simplify logic statements.
//   let dummyHead = new ListNode(0)

//   // init current node to dummy head of returning list
//   let current = dummyHead

//   // init `carry` to 0
//   let carry = 0

//   // init p, q to head of l1 and l2, respectively
//   let p = l1
//   let q = l2

//   // Loop through l1 and l2 until we reach the end
//   while (p != null || q != null) {
//     // set x to node p's value.  If p has reached the end of l1, set to 0.
//     let x = p != null ? p.val : 0

//     // set y to node q's value.  If q has reached the end of l2, set to 0.
//     let y = q != null ? q.val : 0

//     // set sum = x + y + carry
//     let sum = x + y + carry

//     // update carry = sum / 10
//     carry = sum / 10

//     // create new node with digit val of (sum % 10) and set it to current node's next prop
//     current.next = new ListNode(sum % 10)

//     // increment curr node to next.
//     current = current.next

//     // increment p and q, maintain our loop invariant
//     if (p != null) p = p.next
//     if (q != null) q = q.next
//   }
//   // if carry === 1, append a new node with digit = 1 to current list
//   if (carry > 0) {
//     current.next = new ListNode(carry)
//   }
//   // return dummy heads next node.
//   return dummyHead.next
// }
