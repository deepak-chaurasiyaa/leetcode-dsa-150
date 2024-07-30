// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/?envType=study-plan-v2&envId=top-interview-150

// 121. Best Time to Buy and Sell Stock

// Example 1:

// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
	let maxProfit = 0;
	let minSoFar = prices[0];
	for (let i = 0; i < prices.length; i++) {
		minSoFar = Math.min(minSoFar, prices[i]);
		let profit = prices[i] - minSoFar;
		maxProfit = Math.max(maxProfit, profit);
	}
	return maxProfit;
};
const prices = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(prices));
