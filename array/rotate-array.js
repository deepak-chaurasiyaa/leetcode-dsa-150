// https://leetcode.com/problems/rotate-array/?envType=study-plan-v2&envId=top-interview-150

// 189. Rotate Array

// Example 1:

// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
	k = k % nums.length;
	reverse(nums, 0, nums.length - 1);
	reverse(nums, 0, k - 1);
	reverse(nums, k, nums.length - 1);
	return nums;
};
const reverse = (array, start, end) => {
    while (start < end) {
        [array[start], array[end]] = [array[end], array[start]];
        start++;
        end--;
    }
    return array;
};

// Example usage
const nums = [1, 2, 3, 4, 5, 6, 7];
const k = 3;

let res = rotate(nums, k);
console.log(res); // Output: [5,6,7,1,2,3,4]
