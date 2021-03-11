export const reverseString = (str) => {
  // throw new Error('Remove this statement and implement this function');
  if (str === "") {
    return ""
  } else {
    return str.split("").reverse().join("")
  }
};
