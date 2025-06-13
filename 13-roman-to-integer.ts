import { runTest } from "./util/runTest";

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

runTest(romanToInt('I'), 1);
runTest(romanToInt('IV'), 4);
runTest(romanToInt('V'), 5);
runTest(romanToInt('LVIII'), 58);