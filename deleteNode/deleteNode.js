/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 * 
 * 1. set node value equal to the NEXT node's value
 * 2. set the next node (used above) equal to the NEXT, NEXT node (two ahead)
 */

const deleteNode = node => {
  node.val = node.next.val
  node.next = node.next.next
};
