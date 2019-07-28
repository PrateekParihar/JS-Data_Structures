/**
 * Definition for singly-linked list.
 function ListNode(val) {
   this.val = val;
   this.next = null;
  }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function ListNode(val) {
    this.val = val;
    this.next = null;
}
/*
Examples -

(2 -> 4 -> 3) + (5 -> 6 -> 4) = 7 -> 0 -> 8
(9 -> 9 -> 9) + (1) = 0 -> 0 -> 0 -> 1
(1) + (9 -> 9 -> 9) = 0 -> 0 -> 0 -> 1
(0 -> 0 -> 1) + (9-> 9 -> 9) = 9 -> 9 -> 0 -> 1
*/

var addTwoNumbers = function (l1, l2) {

    let sumList = new ListNode();
    let currHead = sumList;
    let carry = 0;
    while (l1 || l2) {
        let add = 0;
        if (l1 && l2) {
            add = l1.val + l2.val + carry;
            l1 = l1.next;
            l2 = l2.next;
        }
        else if (!l2) {
            add = l1.val + carry;
            l1 = l1.next
        }
        else if (!l1) {
            add = l2.val + carry;
            l2 = l2.next
        }
        carry = parseInt(add / 10);
        currHead.next = new ListNode(add % 10);
        currHead = currHead.next;
    }

    if (carry != 0)
        currHead.next = new ListNode(carry)

    return sumList.next;
};


// clean code

var addTwoNumbers2 = function (l1, l2) {

    let sumList = new ListNode();
    let currHead = sumList;
    let carry = 0;
    while (l1 || l2) {
        let add = (l1 ? l1.val : 0) + (l1 ? l2.val : 0) + carry;
        carry = parseInt(add / 10);

        currHead.next = new ListNode(add % 10);

        currHead = currHead.next;
        l1 = l1 ? l1.next : null;
        l2 = l2 ? l2.next : null;
    }

    if (carry != 0)
        currHead.next = new ListNode(carry)

    return sumList.next;
};



addTwoNumbers();

