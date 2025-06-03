function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
	let merged: number[] = [];
	let index1 = 0;
	let index2 = 0;
	do {
		if (index1 >= nums1.length) {
			merged.push(nums2[index2++]);
		} else if (index2 >= nums2.length){
			merged.push(nums1[index1++]);
		} else if (nums1[index1] < nums2[index2]) {
			merged.push(nums1[index1++]);
		} else {
			merged.push(nums2[index2++]);
		}
	} while (index1 < nums1.length || index2 < nums2.length);
	if ((nums1.length + nums2.length) % 2 !== 0) {
		return merged[Math.floor((nums1.length + nums2.length - 1)/2)];
	} else {
		return (merged[Math.floor((nums1.length + nums2.length - 1)/2)] + merged[Math.floor((nums1.length + nums2.length)/2)])/2;
	}
};
