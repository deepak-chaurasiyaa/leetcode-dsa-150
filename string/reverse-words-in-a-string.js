// https://leetcode.com/problems/reverse-words-in-a-string/submissions/1337911273/?envType=study-plan-v2&envId=top-interview-150

// 151. Reverse Words in a String

// Example 1:

// Input: s = "the sky is blue"
// Output: "blue is sky the"
// Example 2:

// Input: s = "  hello world  "
// Output: "world hello"
// Explanation: Your reversed string should not contain leading or trailing spaces.
// Example 3:

// Input: s = "a good   example"
// Output: "example good a"
// Explanation: You need to reduce multiple spaces between two words to a single space in the reversed string

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
	s = s.trim().split(/\s+/).filter(Boolean);
	let start = 0;
	let end = s.length - 1;
	while (start < end) {
		[s[start], s[end]] = [s[end], s[start]];
		start++;
		end--;
	}
	return s.join(' ');
};

const s = 'a good   example';
console.log(reverseWords(s));
