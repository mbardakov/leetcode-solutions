function reverse(x: number): number {
	const INT_MAX_DIGITS = [2, 1, 4, 7, 4, 8, 3, 6, 4, 7];
	const INT_MIN_DIGITS = [2, 1, 4, 7, 4, 8, 3, 6, 4, 8];
	
	const isNegative: boolean = x < 0;
	x = Math.abs(x);
	const digitsReverse = numToDigits(x);

	if (!isNegative && digitsGreaterThan(digitsReverse, INT_MAX_DIGITS)) {
		return 0;
	} else if (isNegative && digitsGreaterThan(digitsReverse, INT_MIN_DIGITS)) {
		return 0;
	}

	const sum = digitsToNum(digitsReverse);

	return isNegative? -sum : sum;
}

function numToDigits(num: number): number[] {
let digits: number[] = [];
	while (num > 0) {
		digits.push(num % 10);
		num = Math.floor(num / 10);
	}
	return digits;
}

function digitsToNum(digits: number[]): number {
	let sum = 0;
	for (let i = 0; i < digits.length; i++) {
		sum += (digits[i] * Math.pow(10, (digits.length - 1 - i)));
	}
	return sum;
}

function digitsGreaterThan(dig1: number[], dig2: number[]): boolean {
	if (dig1.length === dig2.length) {
		for (let i = 0; i < dig1.length; i++) {
			if (dig1[i] === dig2[i]) continue;
			return dig1[i] > dig2[i];
		}
	}
	return dig1.length > dig2.length;
}
