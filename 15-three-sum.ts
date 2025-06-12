function threeSum(nums: number[]): number[][] {
	let solutions: number[][] = [];
	nums = nums.sort((a, b) => a - b);

	for (let negIndex = 0; negIndex < nums.length && nums[negIndex] <= 0; negIndex++) {
		if (negIndex > 0 && nums[negIndex] === nums[negIndex - 1]) {
			continue;
		}
		let target: number = Math.abs(nums[negIndex]);
		let left: number = negIndex + 1;
		let right: number = nums.length - 1;

		while (left < right) {
			const sum = nums[left] + nums[right];
			if (sum === target) {
				solutions.push([nums[negIndex], nums[left], nums[right]]);
				left++;
				right--;
				while (left < right && nums[left] === nums[left - 1]) {
					left++;
				}
			}
			else if (sum > target) {
				right--;
			} else {
				left++;
			}
		}

	}
	return solutions;
};
