//
// This is only a SKELETON file for the 'Perfect Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const classify = (number) => {
  if (number < 1) {
    throw ('Classification is only possible for natural numbers.')
  }
  var sum = 0;

  for (let i = 1; i < number; i++) {
    if (number % i == 0) {
      sum += i;
    }
  }

  if (sum > number) {
    return 'abundant';
  } else if (sum === number){
    return 'perfect';
  } else {
    return 'deficient';
  }
};
