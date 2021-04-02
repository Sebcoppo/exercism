
export const decodedValue = (colors) => {

 const values = colors.slice(0,2);
 const reducer = ((value, color, i) => {
    return BANDS.indexOf(color) * (10 ** i) + value;
  }
 );

 return values.reverse().reduce(reducer, 0);

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

