// https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/?envType=study-plan-v2&envId=top-interview-150

// 26. Remove Duplicates from Sorted Array

// Example 1:

// Input: nums = [1,1,2]
// Output: 2, nums = [1,2,_]
// Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let count = 0;
	for (let i = 0; i < nums.length - 1; i++) {
		if (nums[i] != nums[i+1]) {
			nums[count] = nums[i];
			count++;
		}
	}
	nums[count] = nums[nums.length - 1];
	count++;
	return count;
};

const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

console.log(removeDuplicates(nums));
