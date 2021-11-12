/**
 * You can use the bigint type and BigInt global object to support numbers below
 * Number.MIN_SAFE_INTEGER and above NUMBER.MAX_SAFE_INTEGER.
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt
 */

//
// This is only a SKELETON file for the 'Grains' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
var bigInt = require("big-integer");

export const square = (num) => {
  if (num < 1 || num > 64) {
    throw ('square must be between 1 and 64')
  }
  return bigInt(2).pow(num - 1);
};

export const total = () => {
  let total = bigInt(0);
  for (let squareNum = 1; squareNum <= 64; ++squareNum) {
    total = total.add(square(squareNum));
  }
  return total;
};
