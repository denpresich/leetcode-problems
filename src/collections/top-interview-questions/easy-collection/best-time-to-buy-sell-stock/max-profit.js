/**
 * @param {number} prices
 * @return {number}
 */
function maxProfit(prices) {
  if (prices.length === 0) return 0;
  if (prices.length === 1) return 0;

  let current_index = 0;
  let next_index = 1;
  let buying = true;
  let profit = 0;

  while (next_index < prices.length) {
    if (buying) {
      if (prices[current_index] < prices[next_index]) {
        profit -= prices[current_index];

        buying = false;
      } else {
        current_index++;
        next_index++;
      }
    } else {
      if (prices[current_index] < prices[next_index]) {
        profit += prices[next_index];
        buying = true;
      }

      current_index++;
      next_index++;
    }
  }

  return profit;
}

module.exports = { maxProfit };

// function findClosest(prices, compare) {
//   let closest_index = 0;

//   for (closest_index; closest_index < prices.length; closest_index++) {
//   }

//   return closest_index;
// }

// function findLowestIndex(prices) {
//   let closest_index = 0

//   for (let index = 1; index < prices.length - 1; index++) {
//     prices[index + 1] > prices[index]
//       ? index : continue
//   }

//   return closest_index
// }

// /**
//  * @param {number[]} prices
//  * @return {number}
//  */
// function maxProfit(prices) {
//   let profit = 0;
//   let buying = true;

//   let index = 0;

//   while (true) {
//     if (buying) {
//       const available_prices = prices.slice(index, prices.length + 1);
//       const lowest_index = findClosest(available_prices, (a, b) => b < a);

//       // if (lowest_index === 0) {
//       //   // No need to buy stock
//       //   break;
//       // }

//       profit -= available_prices[lowest_index];
//       buying = false;
//       index += lowest_index;
//     } else {
//       const available_prices = prices.slice(index, prices.length + 1);
//       const highest_index = findClosest(available_prices, (a, b) => b > a);

//       if (highest_index === 0) {
//         // Unable to make profit
//         profit += available_prices[highest_index];
//         break;
//       }

//       profit += available_prices[highest_index];
//       buying = true;
//       index += highest_index;
//     }
//   }

//   return profit;

//   // let current_index = 0;
//   // let next_index = 0;
//   // let profit = 0;

//   // const findClosestLowIndex = (prices) => {
//   //   let lowest_index = 0;

//   //   for (let i = 1; i < prices.length; i++) {
//   //     if (prices[i] < prices[lowest_index]) {
//   //       lowest_index = i;
//   //       break;
//   //     }
//   //   }

//   //   return lowest_index;
//   // };

//   // const findClosestHigh = (prices) => {
//   //   let highest_index = 0;

//   //   for (let i = 1; i < prices.length; i++) {
//   //     if (prices[i] < prices[highest_index]) {
//   //     }
//   //   }
//   // };

//   // let buying = true;

//   // while (next_index < prices.length) {
//   //   let max_profit = 0;

//   //   if (buying) {
//   //     const lowest_index = findClosestLowIndex(prices.slice(next_index, prices.length + 1));

//   //     if (next_index === lowest_index) {
//   //       // No need to buy
//   //       break;
//   //     }

//   //     profit -= prices[lowest_index];
//   //     buying = false;
//   //     next_index = lowest_index;
//   //   } else {
//   //     const highest_index = findClosestHigh(prices.slice(next_index, prices.length + 1));

//   //     if (next_index === highest_index) {
//   //       profit -= prices[highest_index];
//   //       break;
//   //     }

//   //     profit += prices[highest_index];
//   //     buying = true;
//   //     next_index = highest_index;
//   //   }
//   // }

//   // return profit;
// }

// module.exports = { maxProfit };
