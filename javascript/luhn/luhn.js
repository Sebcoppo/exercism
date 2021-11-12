//
// This is only a SKELETON file for the 'Luhn' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const valid = (str) => {

  if (/[^0-9 ]/.test(str)) return false;
  if (str.length <= 1) return false;
  if (str.trim() === "0") return false;

  let arr = str.split("").map(char => {
    if (/[0-9]/.test(char)) {
      return Number(char)
    } else {
      return;
    }
  }).filter(val => val != undefined);
    for (let i = arr.length -2; i >= 0; i -= 2) {
      let value = arr[i];
      if (value * 2 > 9) {
        arr[i] = (value * 2) - 9;
      } else {
        arr[i] = value * 2
      }
    }
    let sum = arr.reduce((acc, value) => {
      return acc + value;
    }, 0);

    if (sum % 10 === 0) {
      return true;
    } else {
      return false;
    }
};
