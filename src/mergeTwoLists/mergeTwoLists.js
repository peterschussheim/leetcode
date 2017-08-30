/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
class ListNode {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const mergeTwoLists = (l1, l2) => {
  if (l1 == null) return l2
  if (l2 == null) return l1
  if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2)
    return l1
  } else {
    l2.next = mergeTwoLists(l2.next, l1)
    return l2
  }
}

// Tests
let test1 = [9, 10, 15]
let test2 = [2, 5, 11]

let a = new ListNode(9)
a.next = new ListNode(10)
a.next.next = new ListNode(15)

let b = new ListNode(2)
b.next = new ListNode(5)
b.next.next = new ListNode(11)

let result = mergeTwoLists(a, b)
console.log(result)
