/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

const gcd = (a, b) => {
    return b ? gcd(b, a%b) : a;    
}

var insertGreatestCommonDivisors = function(head) {
    let cur = head;
    while(cur.next) {
        const next = cur.next;
        const newVal = gcd(cur.val, next.val)
        const newNode = new ListNode(newVal, next);
        
        cur.next = newNode;
        cur = next;
    }
    
    return head;
};

