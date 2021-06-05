export const steps = (i) => {
  if (i < 1) { throw('Only positive numbers are allowed')}

  let step = 0;
  while (i > 1) {
      i = i % 2 ? 3 * i + 1 : i / 2;
      step++
    }

  return step
};
