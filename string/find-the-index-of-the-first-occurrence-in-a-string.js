// https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/?envType=study-plan-v2&envId=top-interview-150

// 28. Find the Index of the First Occurrence in a String

// Example 1:

// Input: haystack = "sadbutsad", needle = "sad"
// Output: 0
// Explanation: "sad" occurs at index 0 and 6.
// The first occurrence is at index 0, so we return 0.

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
	for (let i = 0; i <= haystack.length - needle.length; i++) {
		if (haystack.substring(i, i + needle.length) === needle) {
			return i;
		}
	}
	return - 1
};
const haystack = 'sadbutsad';
const needle = 'sads';
console.log(strStr(haystack, needle));
