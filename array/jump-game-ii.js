// https://leetcode.com/problems/jump-game-ii/description/?envType=study-plan-v2&envId=top-interview-150

// 45. Jump Game II

// Example 1:

// Input: nums = [2,3,1,1,4]
// Output: 2
// Explanation: The minimum number of jumps to reach the last index is 2. Jump 1 step from index 0 to 1, then 3 steps to the last index.
// Example 2:

// Input: nums = [2,3,0,1,4]
// Output: 2

/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
	let [res, left, right] = [0, 0, 0];
	while (right < nums.length - 1) {
		let farthest = 0;
		for (let i = left; i <= right; i++) {
			farthest = Math.max(farthest, i + nums[i]);
		}
		left = right + 1;
		right = farthest;
		res += 1;
	}
	return res;
};

const nums =  [2,3,1,1,4]

console.log(jump(nums));
