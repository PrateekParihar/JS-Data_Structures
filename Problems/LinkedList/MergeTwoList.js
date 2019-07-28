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
/*

1->2->4, 1->3->4   =   1->1->2->3->4->4

1->3->5, 2->4->6   =   1->2->3->4->5->6

4 , 1->3->4  = 1->3->4->4

1->3->4, 4  = 1->3->4->4



*/
var mergeTwoLists = function (l1, l2) {

    let mergeList = new ListNode();
    let currNode = mergeList;
    while (l1 || l2) {
        if (!l1) {
            currNode.next = l2;
            break;
        }
        else if (!l2) {
            currNode.next = l1;
            break;
        }

        if (l1.val < l2.val) {
            currNode.next = l1;
            l1 = l1.next;
        }
        else {
            currNode.next = l2;
            l2 = l2.next;
        }
        currNode = currNode.next;
        currNode.next = null;

    }

    return mergeList.next;
};