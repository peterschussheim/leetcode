/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */

const hasCycle = head => {
  if (head === null) {
    return false
  }
  let slow = head.next
  let fast = head.next
  while (slow && fast && fast.next) {
    // 'slow' moves step by step
    slow = slow.next
    // 'fast' moves TWO steps on each iteration
    fast = fast.next.next
    // if the list has a cycle, it will be found by comparing 'slow' to 'fast'
    if (slow === fast) {
      return true
    }
  }
  return false
}
