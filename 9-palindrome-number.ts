function isPalindrome(x: number): boolean {
	if (x < 0) return false;
	const digits = numToDigits(x);
	const digitsReverse = digits.slice().reverse();
	for (let i = 0; i < digits.length; i++) {
		if (digits[i] !== digitsReverse[i]) return false;
	}
  return true;
};

function numToDigits(num: number): number[] {
let digits: number[] = [];
	while (num > 0) {
		digits.push(num % 10);
		num = Math.floor(num / 10);
	}
	return digits;
}