function romanToInt(s: string): number {
	interface numeral {
		symbol: string,
		value: number
	};
	const numerals = new Map([
		['I', 1],
		['V', 5],
		['X', 10],
		['L', 50],
		['C', 100],
		['D', 500],
		['M', 1000]
	]);

	let result = 0;
	for (let index = 0; index < s.length; index++) {
		const currentChar = s[index];
		const currentNum = numerals.get(s[index]) || 0;
		const nextChar = (index + 1 < s.length) ? s[index + 1] : '';
		const nextNum = numerals.get(nextChar) || 0;

		if (nextChar && currentChar && currentNum < nextNum) {
			result -= currentNum;
		} else if (currentChar) {
			result += currentNum;
		}
	}

	return result;
};

console.assert(romanToInt('I') === 1, `Expected 1, got ${romanToInt('I')}`);
console.assert(romanToInt('IV') === 4, `Expected 4, got ${romanToInt('IV')}`);
console.assert(romanToInt('V') === 5, `Expected 5, got ${romanToInt('V')}`);
console.assert(romanToInt('LVIII') === 58, `Expected 58, got ${romanToInt('LVIII')}`);