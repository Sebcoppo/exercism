
export const decodedValue = (colors) => {

  return BANDS.indexOf(colors[0]) * 10 + BANDS.indexOf(colors[1]);

};

export const BANDS = [
"black",
"brown",
"red",
"orange",
"yellow",
"green",
"blue",
"violet",
"grey",
"white"
];

