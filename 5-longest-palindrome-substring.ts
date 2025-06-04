function longestPalindrome(s: string): string {
	let longestSoFar: string = `${s[0]}`;
	for (let i = 0; i < s.length; i++) {
		for (let j = i + 1; j < s.length; j++) {
			let substring = s.substring(i,j+1)
			if (isPalindrome(substring) && substring.length > longestSoFar.length) {
				longestSoFar = substring;
			}
		}
	}
	return longestSoFar;
};

function isPalindrome(s: string): boolean {
	for (let i = 0; i < s.length/2; i++) {
		if (s[i] !== s[s.length - 1 - i]) {
			return false;
		}
	}
	return true;
}
