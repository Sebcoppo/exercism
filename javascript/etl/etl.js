//
// This is only a SKELETON file for the 'ETL' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const transform = (scores) => {
  let result = {};
  Object.entries(scores).forEach(([key, value]) => {
    value.forEach((letter) => {
      result[letter.toLowerCase()] = parseInt(key);
    })
  })

    return result;
  };
