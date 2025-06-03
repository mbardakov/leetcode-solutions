function lengthOfLongestSubstring(s: string): number {
	let longestSubstring: string = '';
	for (let i: number = 0; i < s.length; i++) {
		for (let j: number = i; j <= s.length; j++) {
			let currentSubstring: string = s.substring(i, j);
			if (currentSubstring.length > longestSubstring.length) {
				longestSubstring = currentSubstring;
			}
			if (currentSubstring.includes(s[j])) {
				break;
			} else {
				currentSubstring = currentSubstring.concat(s[j]);
			}
		}
	}
	return longestSubstring.length;
};
