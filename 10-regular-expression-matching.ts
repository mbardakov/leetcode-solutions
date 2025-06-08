function isMatch(s: string, p: string): boolean {
	function recurse(sIndex, pIndex) {
		if (sIndex >= s.length) {
			if (pIndex < p.length && p[p.length - 1] !== '*'){
				return false;
			}
			while (pIndex < p.length - 1) {
				if (p[pIndex + 1] !== '*') {
					return false;
				}
				pIndex += 2;
			}
			return true;
		}
		if (pIndex >= p.length) return false;
		
		const nextIsStar: boolean = pIndex + 1 < p.length && p[pIndex + 1] ==='*';
		const currIsMatch: boolean = s[sIndex] === p[pIndex] || p[pIndex]==='.';

		if (!nextIsStar && currIsMatch) {
			return recurse(sIndex + 1, pIndex + 1);
		} else if (nextIsStar && currIsMatch) {
			return recurse(sIndex + 1, pIndex) || recurse(sIndex, pIndex + 2);
		} else if (nextIsStar && !currIsMatch) {
			return recurse(sIndex, pIndex + 2);
		} else {
			return false;
		}
	}
	return recurse(0, 0);
};

// simpler version of the implementation by realdennis found at https://leetcode.com/problems/regular-expression-matching/solutions/1506370/dp-top-down-w-memorize-o-n-m/
// (no memoization, slower runtime, less memory)
