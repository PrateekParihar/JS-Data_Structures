/**
 * Definition for singly-linked list.




 */

function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */

/**
 * 3 -> 2 -> 5 -> 1 -> 0  --  2,4  = 3 -> 1 -> 5 -> 2 -> 0
 * 
 * 3 -> 2 -> 5  -- 2,4 ->
 */
var reverseBetween = function (head, m, n) {

    let currNode = new ListNode();
    currNode = head;
    let counter = 0; // to track the start and end of subnode
    let subListHead, subListTail, prevNode;

    while (currNode) {
        counter++;

        if (counter == m) {
            currNode = subListHead;
        }
        if (counter == n) {
            currNode = subListTail;
        }
        currNode = currNode.next;
    }



};