
export const squareRoot = (num) => {
  // throw new Error('Remove this statement and implement this function');
    for (let i = 0; i * i <= num; i++) {
      if (i * i === num)
      return i;
    }

};
