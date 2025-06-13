export function runTest(actual: any, expected: any): void {
	console.assert(actual === expected, `result ${actual} did not match expected value ${expected}`)
}
