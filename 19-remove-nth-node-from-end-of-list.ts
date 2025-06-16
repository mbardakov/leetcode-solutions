
// Definition for singly-linked list.
class ListNode {
	val: number
	next: ListNode | null
	constructor(val?: number, next?: ListNode | null) {
		this.val = (val === undefined ? 0 : val)
		this.next = (next === undefined ? null : next)
	}
}


function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
	const length = getLength(head);
	if (length === n) {
		head = head?.next || null;
		return head;
	}
	
	let cur: ListNode | null = head;
	for (let i = 0; i < length - n - 1 && cur; i++) {
		cur = cur?.next;
	}
	if (cur && cur.next) {
		cur.next = cur?.next?.next;
	}
	
	return head;
};

function getLength(head: ListNode | null) {
	let cur: ListNode | null | undefined = head;
	let length = 0;
	while (cur) {
		length++;
		cur = cur?.next;
	}
	return length;
}