// https://leetcode.com/problems/majority-element/description/?envType=study-plan-v2&envId=top-interview-150

// 169. Majority Element

// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

/**
 * @param {number[]} nums
 * @return {number}
 */

var majorityElement = function (nums) {
	let element = nums[0];
	let count = 1;
	for (let i = 1; i < nums.length; i++) {
		if (count === 0) {
			element = nums[i];
			count = 1;
		}
		else if (nums[i] === element) {
			count++;
		} else {
			count--;
		}
	}
    return element
};

let nums = [2,2,1,1,1,2,2,3,5,7]
console.log(majorityElement(nums));
