function maxArea(height: number[]): number {
	let maxArea = 0;
	let left = 0;
	let right = height.length - 1;
	while (left < right) {
		let area = (right - left) * Math.min(height[left], height[right]);
		maxArea = Math.max(area, maxArea);
		if (height[left] < height[right]) {
			left++;
		} else {
			right--;
		}
	}
	
	return maxArea;
};

console.assert(maxArea([1,8,6,2,5,4,8,3,7]) === 49, 'test 1 failed');
