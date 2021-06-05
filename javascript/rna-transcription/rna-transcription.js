

export const toRna = (dna) => {
  const rnaString = [];

  for (let i = 0; i < dna.length; i ++) {
    switch(dna[i]) {
      case 'G' :
        rnaString.push('C');
        break;
      case 'C' :
        rnaString.push('G');
        break;
      case 'T' :
         rnaString.push('A');
        break;
      case 'A' :
         rnaString.push('U');
        break;
      default :
        rnaString;
        break;
    }
  }
  return rnaString.join('');
};
