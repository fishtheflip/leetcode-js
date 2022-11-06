// Given the head of a sorted linked list,
// delete all duplicates such that each element appears only once. Return the linked list sorted as well.
// Constraints:

    // The number of nodes in the list is in the range [0, 300].
    // -100 <= Node.val <= 100
    // The list is guaranteed to be sorted in ascending order.

const deleteDuplicates = (head) => {
    if(head == null || head.next == null)
        return head;
    let curr = head;
    while( curr != null && curr.next != null){
        if(curr.val == curr.next.val){
            curr.next = curr.next.next;
        }
        else{
            curr = curr.next; 
        }
    }
    return head;
};