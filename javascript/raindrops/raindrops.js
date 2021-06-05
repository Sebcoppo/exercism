//
// This is only a SKELETON file for the 'Raindrops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//



export const convert = (number) => {
  let rainSpeak = '';

    if (number % 3 === 0) {
      rainSpeak += 'Pling';
    }
    if (number % 5 === 0){
       rainSpeak += 'Plang';
    }
    if (number % 7 === 0){
      rainSpeak += 'Plong';
    }

    if (rainSpeak === '') {
      return `${number}`
    } else {
      return rainSpeak
    }

}
