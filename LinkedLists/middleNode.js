/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function middleNode(head) {
    let slowP=head;
    let fastP=head;
    
    while (fastP){
        if (fastP.next===null){
            break;   
        } else {
            fastP=fastP.next.next;
        }
        slowP=slowP.next;
    }
    return slowP;
};