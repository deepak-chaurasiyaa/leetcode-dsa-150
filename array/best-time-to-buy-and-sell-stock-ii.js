// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/description/?envType=study-plan-v2&envId=top-interview-150

// 122. Best Time to Buy and Sell Stock II

// Example 1:

// Input: prices = [7,1,5,3,6,4]
// Output: 7
// Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
// Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.
// Total profit is 4 + 3 = 7.

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
	let maxProfit = 0;
	for (let i = 0; i < prices.length - 1; i++) {
		if (prices[i] < prices[i + 1]) {
			maxProfit += prices[i + 1] - prices[i];
		}
	}
	return maxProfit;
};
const prices = [1,2,3,4,5]
console.log(maxProfit(prices));
