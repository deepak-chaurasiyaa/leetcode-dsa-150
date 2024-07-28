// https://leetcode.com/problems/merge-sorted-array/description/?envType=study-plan-v2&envId=top-leterview-150

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

var merge = function (nums1, m, nums2, n) {
	let i = m - 1;
	let j = n - 1;
	let k = m + n - 1;
	while (j >= 0) {
		if (nums1[i] > nums2[j]) {
			nums1[k] = nums1[i];
			i--;
		} else {
			nums1[k] = nums2[j];
			j--;
		}
		k--;
	}

	return nums1;
};

const nums1 = [4, 5, 6, 0, 0, 0];
const m = 3;

const nums2 = [1, 2, 3];
const n = 3;

console.log(merge(nums1, m, nums2, n));
