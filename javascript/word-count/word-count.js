//
// This is only a SKELETON file for the 'Word Count' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const countWords = (string) => {
  const words = string.toLowerCase().match(/(\w+'\w+)|(\w+)/g);


  let count = {};
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    if (count[word] === undefined) {
      count[word] = 1;
    } else {
      count[word] += 1;
    }
  }
  return count;
};
