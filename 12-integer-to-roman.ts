import { runTest } from "./util/runTest";

function intToRoman(num: number): string {
	interface numeral {
		symbol: string,
		value: number
	};

	const numerals: numeral[] = [
		{ symbol: 'M', value: 1000 },
		{ symbol: 'D', value: 500 },
		{ symbol: 'C', value: 100 },
		{ symbol: 'L', value: 50 },
		{ symbol: 'X', value: 10 },
		{ symbol: 'V', value: 5 },
		{ symbol: 'I', value: 1 },
	];

	const subtractiveForms: numeral[] = [
		{ symbol: 'CM', value: 900 },
		{ symbol: 'CD', value: 400 },
		{ symbol: 'XC', value: 90 },
		{ symbol: 'XL', value: 40 },
		{ symbol: 'IX', value: 9 },
		{ symbol: 'IV', value: 4 },
	];

	let result = '';
	while (num > 0) {
		const firstDigit = getFirstDigit(num);
		for (let roman of ((firstDigit === 4 || firstDigit === 9) ? subtractiveForms : numerals)) {
			if (roman.value <= num) {
				result += roman.symbol;
				num = num - roman.value;
				break;
			}
		}
	}
	return result;
};

function getFirstDigit(num: number): number {
	while (num > 10) {
		num = Math.floor(num / 10);
	}
	return num;
}

runTest(intToRoman(1), 'I')
runTest(intToRoman(2), 'II')
runTest(intToRoman(3), 'III')
runTest(intToRoman(4), 'IV')
runTest(intToRoman(5), 'V')
runTest(intToRoman(7), 'VII')
runTest(intToRoman(8), 'VIII')
runTest(intToRoman(9), 'IX')
runTest(intToRoman(10), 'X')
runTest(intToRoman(14), 'XIV')
runTest(intToRoman(20), 'XX')
runTest(intToRoman(40), 'XL')
runTest(intToRoman(44), 'XLIV')
runTest(intToRoman(49), 'XLIX')
runTest(intToRoman(50), 'L')
runTest(intToRoman(51), 'LI')


// If the value does not start with 4 or 9, 
// 	- select the symbol of the maximal value that can be subtracted from the input, 
// 	- append that symbol to the result, 
// 	- subtract its value, and 
// 	- convert the remainder to a Roman numeral.
// If the value starts with 4 or 9
// - use the subtractive form representing one symbol subtracted from the following symbol
// - for example, 4 is 1 (I) less than 5 (V): IV and 9 is 1 (I) less than 10 (X): IX. 
// - Only the following subtractive forms are used: 4 (IV), 9 (IX), 40 (XL), 90 (XC), 400 (CD) and 900 (CM).
// Only powers of 10 (I, X, C, M) can be appended consecutively at most 3 times to represent multiples of 10. 
// You cannot append 5 (V), 50 (L), or 500 (D) multiple times. 
// If you need to append a symbol 4 times use the subtractive form.

// Given an integer, convert it to a Roman numeral.