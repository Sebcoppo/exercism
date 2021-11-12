//
// This is only a SKELETON file for the 'Prime Factors' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const primeFactors = (num) => {
  if (num < 2) return [];

  const isFactor = num => factor => num % factor === 0;
  const isFactorNum = isFactor(num);
  for (let i = 2; i <= num; i++) {
    if (isFactorNum(i)) return [i].concat(primeFactors(num / i));
  }
};
