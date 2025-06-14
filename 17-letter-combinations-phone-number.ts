import { runTest } from "./util/runTest";

function letterCombinations(digits: string): string[] {
	const letterMap = new Map<string, string>([
		['2', 'abc'],
		['3', 'def'],
		['4', 'ghi'],
		['5', 'jkl'],
		['6', 'mno'],
		['7', 'pqrs'],
		['8', 'tuv'],
		['9', 'wxyz']
		]);
		if (digits.length === 1) {
			return letterMap.get(digits[0])?.split('') || [];
		} if (digits.length > 1) {
			return (letterMap.get(digits[0])?.split('') || []).map(letter => letterCombinations(digits.slice(1)).map(combo => letter.concat(combo))).flat();
		} else {
			return [];
		}
};

runTest(letterCombinations('23'), ["ad","ae","af","bd","be","bf","cd","ce","cf"]);