// https://leetcode.com/problems/length-of-last-word/submissions/1337891289/?envType=study-plan-v2&envId=top-interview-150

// 58. Length of Last Word

// Example 1:

// Input: s = "Hello World"
// Output: 5
// Explanation: The last word is "World" with length 5.

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
	s = s.trim().split(' ');
	return s[s.length - 1].length;
};
const s = 'Hello World';
console.log(lengthOfLastWord(s));
