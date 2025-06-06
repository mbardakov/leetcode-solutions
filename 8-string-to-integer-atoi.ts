function myAtoi(s: string): number {
	const numeric = '1234567890';
	const INT_MAX_DIGITS = [2, 1, 4, 7, 4, 8, 3, 6, 4, 7];
	const INT_MIN_DIGITS = [2, 1, 4, 7, 4, 8, 3, 6, 4, 8];
	const INT_MAX = 2147483647;
	const INT_MIN = -2147483648;
	let index: number = 0;
	let positive: boolean = true;
	let digits: number[] = [];

	while (s[index] === ' ') {
		index++;
	}

	if (s[index] === '-') {
		positive = false;
		index++;
	} else if (s[index] === '+') {
		index++;
	}

	while (s[index] === '0') {
		index++;
	}

	while (numeric.includes(s[index])) {
		digits.push(myParseInt(s[index]));
		index++;
	}

	if (positive && digitsGreaterThan(digits, INT_MAX_DIGITS)) {
		return INT_MAX;
	}

	if (!positive && digitsGreaterThan(digits, INT_MIN_DIGITS)) {
		return INT_MIN;
	}

	const sum = digitsToNum(digits);
	return positive ? sum : -sum;
};

function digitsGreaterThan(dig1: number[], dig2: number[]): boolean {
	if (dig1.length === dig2.length) {
		for (let i = 0; i < dig1.length; i++) {
			if (dig1[i] === dig2[i]) continue;
			return dig1[i] > dig2[i];
		}
	}
	return dig1.length > dig2.length;
}

function myParseInt(c: string): number {
	return c.charCodeAt(0) - 48; // ascii value of '0'
}

function digitsToNum(digits: number[]) {
	let sum = 0;
	for (let i = 0; i < digits.length; i++) {
		sum += digits[digits.length - i - 1] * Math.pow(10, i);
	}
	return sum;
}
