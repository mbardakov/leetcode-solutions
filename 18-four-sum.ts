import { runTest } from "./util/runTest";

function fourSum(nums: number[], target): number[][] {
	let solutions: number[][] = [];
	nums = nums.sort((a, b) => a - b);

	for (let negIndex = 0; negIndex < nums.length; negIndex++) {
		if (negIndex > 0 && nums[negIndex] === nums[negIndex - 1]) {
			continue;
		}
		console.log('made it past skipper');
		for (let left = negIndex + 1; left < nums.length - 2; left++) {
			if (left > negIndex + 1 && nums[left] === nums[left - 1]) {
				continue;
			}
			let middle: number = left + 1;
			let right: number = nums.length - 1;
			console.log(`indices: negIndex: ${negIndex}, left: ${left}, middle: ${middle}, right: ${right}`);
	
			while (middle < right) {
				const sum = nums[negIndex] + nums[left] + nums[middle] + nums[right];
				console.log(`sum: ${nums[negIndex]} + ${nums[left]} + ${nums[middle]} + ${nums[right]} = ${sum}, target: ${target}`);
				if (sum === target) {
					solutions.push([nums[negIndex], nums[left], nums[middle], nums[right]]);
					middle++;
					right--;
					while (middle < right && nums[middle] === nums[middle - 1]) {
						middle++;
					}
				}
				else if (sum > target) {
					right--;
				} else {
					middle++;
				}
			}
		}

	}
	return solutions;
};

// runTest(fourSum([1,0,-1,0,-2,2], 0), [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]);
// runTest(fourSum([2,2,2,2,2], 8), [[2, 2, 2, 2]]);
runTest(fourSum([0,0,0,0], 0), [[0,0,0,0]]);
