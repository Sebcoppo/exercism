//
// This is only a SKELETON file for the 'Hamming' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const compute = (s1, s2) => {
  let hammingDistance = 0;
  if (!s1.length && s2.length) {
    throw('left strand must not be empty');
  } else if (s1.length && !s2.length) {
    throw('right strand must not be empty');
  } else if (s1.length != s2.length) {
    throw('left and right strands must be of equal length');
  }

  for (let i = 0; i < s1.length; i ++) {
    if (s1.charAt(i) !== s2.charAt(i)) {
      hammingDistance ++
    }
  }
  return hammingDistance;


};
