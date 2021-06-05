//
// This is only a SKELETON file for the 'Scrabble Score' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const LETTERS = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B','C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z'],
};

export const score = (str) => {
 let result = 0;
 for (let [value, letters] of Object.entries(LETTERS)) {
  for (let letter of str.toUpperCase()) {
    if (letters.includes(letter)) {
      result += Number(value);
    }
  }
 }
 return result;
};


