function longestPalindrome(s: string): string {
	const strlen = s.length;
	let maxlength = 1;
	let startIndex = 0;
	let endIndex = 0;
	let grid = Array.from(Array(strlen), _ => Array(strlen).fill(false));
	for (let i = 0; i < strlen; i++) {
		grid[i][i] = true;
	}

	for (let i = 0; i < strlen - 1; i++) {
		if (s[i] === s[i+1]) {
			grid[i][i+1] = true;
			maxlength = 2;
			startIndex = i;
			endIndex = i+1;
		}
	}

	for (let i = 0; i < strlen; i++) {
		for (let j = 0; j < strlen; j++) {
			let k = 0;
			while (grid[i][j] === true && s[i - k] === s[j + k] && i >= k && j < strlen - k) {
				grid[i - k][j + k] = true;
				if (j - i + (2 * k) + 1 > maxlength) {
					maxlength = j - i + (2 * k) + 1;
					startIndex = i - k;
					endIndex = j + k;
				}
				k++;
			}
		}
	}
	return s.substring(startIndex, endIndex + 1);
}

// implementation of the solution in https://leetcode.com/problems/longest-palindromic-substring/description/comments/1569251/ :

// This post is for learner wanna practice DP.
// The basic idea is, if we wanna say "aba" is palindromic, then we need to firstly confirm that "b" is palindromic, then we also need to check if "a"(the first a) = "a" (the second a).

// M is a 2-d array which stores boolean values.
// M[i][j] indicates if string[i.....j] is palindromic.
// So base cases are:
// M[i][i] is true.
// M[i][i + 1] = (s[i] == s[i + 1]);
// recurrence relation is :
// M[i][j] = (s[i] == s[j] AND M[i + 1][j - 1]);
// For the implementation of recurrence relation, one idea is you can loop through all possible symmetry axis. For each of the axis, you expand at both RHS and LHS simultaneously. 
// This method promises that when you are determining value in M[i][j], M[i + 1][j - 1] must have the correct value.
// Final answer can be found from all M[i][j] == 1 with largest (j - i).
