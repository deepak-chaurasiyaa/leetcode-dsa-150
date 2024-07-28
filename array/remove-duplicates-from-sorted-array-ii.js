// https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/description/?envType=study-plan-v2&envId=top-interview-150

// 80. Remove Duplicates from Sorted Array II

// Example 1:

// Input: nums = [1,1,1,2,2,3]
// Output: 5, nums = [1,1,2,2,3,_]
// Explanation: Your function should return k = 5, with the first five elements of nums being 1, 1, 2, 2 and 3 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
	let count = 0;
	for (let i = 0; i < nums.length; i++) {
		if (count < 2 || nums[i] > nums[count - 2]) {
            nums[count++] = nums[i];
        }
	}

	return count;
};

const nums = [1,1,1,2,2,3]

console.log(removeDuplicates(nums));
