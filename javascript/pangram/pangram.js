//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPangram = (str) => {
  str = str.toLowerCase();

  const alphabets = 'abcdefghijklmnopqrstuvwxyz';
  const alphaArr = alphabets.split('');
  return alphaArr.every(function(x){
    return str.includes(x);
  });

};
