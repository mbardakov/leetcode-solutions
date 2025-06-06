function convert(s: string, numRows: number): string {
	if (numRows === 1) {
		return s;
	}

	const rows: string[] = new Array(numRows).fill('');
	let currentRow = 0;
	let directon = 1;

	for (const char of s) {
		rows[currentRow] += char;
		currentRow += directon;
		if (currentRow === 0 || currentRow >= numRows - 1) {
			directon = directon * -1;
		}
	}
	return rows.join('');
};
