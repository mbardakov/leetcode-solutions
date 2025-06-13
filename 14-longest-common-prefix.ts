import { runTest } from "./util/runTest";

function longestCommonPrefix(strs: string[]): string {
	const minLength = Math.min(...strs.map(str => str.length));
	let prefix = '';
	for (let i = 0; i < minLength; i++) {
		let ithChar = strs[0][i];
		for (let j = 1; j < strs.length; j++) {
			if (strs[j][i] !== ithChar) {
				return prefix;
			}
		}
		prefix += ithChar;
	}
	return prefix;
};

runTest(longestCommonPrefix(['flow', 'flower', 'flight']), 'fl');
runTest(longestCommonPrefix(['flow', 'flower']), 'flow');
runTest(longestCommonPrefix(['flow', 'cower']), '');
runTest(longestCommonPrefix(['flow']), 'flow');