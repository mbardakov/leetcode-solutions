import { runTest } from "./util/runTest";

function isValid(s: string): boolean {
	const opens: string = '([{';
	const closes: string = ')]}';
	const matches: Map<string, string> = new Map([
		[')', '('],
		[']', '['],
		['}', '{'],
	]);
	let history: string[] = [];

	for (const char of s) {
		if (opens.includes(char)) {
			history.push(char);
		} else if (closes.includes(char)) {
			if (history.pop() !== matches.get(char)) {
				return false;
			}
		}
	}

	return history.length === 0;
};

runTest(isValid('()'), true);
runTest(isValid('()[]{}'), true);
runTest(isValid('([{}])'), true);
runTest(isValid('(]'), false);
runTest(isValid('([)]'), false);
runTest(isValid('('), false);