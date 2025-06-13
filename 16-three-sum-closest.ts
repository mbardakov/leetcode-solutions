import { runTest } from "./util/runTest";

function threeSumClosest(nums: number[], target: number): number {
	nums = nums.sort((a, b) => a - b);
	let closestSoFar: number | null = null;
	for (let left = 0; left < nums.length; left++) {
		if (left > 0 && nums[left] === nums[left - 1]) {
			continue;
		}
		let middle = left + 1;
		let right = nums.length - 1;

		while (middle < right) {
			const sum = nums[left] + nums[middle] + nums[right];
			const difference = Math.abs(sum - target);
			if (closestSoFar === null || difference < Math.abs(closestSoFar - target)) {
				closestSoFar = sum;
			} if (sum > target) {
				right--;
			} else {
				middle++
			}
		}
	}
	return closestSoFar || 0;
};

runTest(threeSumClosest([-1, 2, 1, -4], 1), 2)
runTest(threeSumClosest([0, 0, 0], 1), 0)
runTest(threeSumClosest([10,20,30,40,50,60,70,80,90], 1), 60)