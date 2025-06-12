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

console.assert(longestCommonPrefix(['flow', 'flower', 'flight']) === 'fl', 'flow flower flight');
console.assert(longestCommonPrefix(['flow', 'flower']) === 'flow', 'flow flower');
console.assert(longestCommonPrefix(['flow', 'cower']) === '', 'flow cower');
console.assert(longestCommonPrefix(['flow']) === 'flow', 'flow');