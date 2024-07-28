// https://leetcode.com/problems/remove-element/description/?envType=study-plan-v2&envId=top-interview-150

// Example 1:

// Input: nums = [3,2,2,3], val = 3
// Output: 2, nums = [2,2,_,_]
// Explanation: Your function should return k = 2, with the first two elements of nums being 2.
// It does not matter what you leave beyond the returned k (hence they are underscores).

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
	let count = 0;
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] !== val) {
			nums[count] = nums[i];
			count++;
		}
	}
	return count;
};

const nums = [0,1,2,2,3,0,4,2];
const val = 2;

console.log(removeElement(nums, val));
