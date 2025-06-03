class ListNode {
	val: number
	next: ListNode | null
	constructor(val?: number, next?: ListNode | null) {
		this.val = (val === undefined ? 0 : val)
		this.next = (next === undefined ? null : next)
	}
}


function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
	let digitSum = (l1?.val || 0) + (l2?.val || 0);
	let carry = Math.floor(digitSum / 10);
	let l3 = new ListNode(digitSum % 10);
	let l3pointer = l3;
	l1 = l1?.next || null;
	l2 = l2?.next || null;
	while (l1 || l2 || carry) {
		digitSum = (l1?.val || 0) + (l2?.val || 0);
		l3pointer.next = new ListNode((digitSum + carry) % 10);
		carry = Math.floor((digitSum + carry) / 10);
		l3pointer = l3pointer.next;
		l1 = l1?.next || null;
		l2 = l2?.next || null;
	}
	
	return l3;
};
