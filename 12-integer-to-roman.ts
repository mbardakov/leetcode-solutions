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
	
	const firstDigit = getFirstDigit(num);
	if (firstDigit === 4 || firstDigit === 9) {
		for (let roman of subtractiveForms) {
			if (roman.value <= num) {
				return roman.symbol + intToRoman(num - roman.value);
			}
		}
	} else {
		for (let roman of numerals) {
			if (roman.value <= num) {
				return roman.symbol + intToRoman(num - roman.value);
			}
		}
	}
	return ''
};

function getFirstDigit(num: number): number {
	while (num > 10) {
		num = Math.floor(num/10);
	}
	return num;
}

console.assert(intToRoman(1) === 'I', '1')
console.assert(intToRoman(2) === 'II', '2')
console.assert(intToRoman(3) === 'III', '3')
console.assert(intToRoman(4) === 'IV', '4')
console.assert(intToRoman(5) === 'V', '5')
console.assert(intToRoman(7) === 'VII', '6')
console.assert(intToRoman(8) === 'VIII', '7')
console.assert(intToRoman(9) === 'IX', '9')
console.assert(intToRoman(10) === 'X', '10')
console.assert(intToRoman(14) === 'XIV', '14')
console.assert(intToRoman(20) === 'XX', '20')
console.assert(intToRoman(40) === 'XL', '40')
console.assert(intToRoman(44) === 'XLIV', '44')
console.assert(intToRoman(49) === 'XLIX', '49')
console.assert(intToRoman(50) === 'L', '50')
console.assert(intToRoman(51) === 'LI', '51')


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