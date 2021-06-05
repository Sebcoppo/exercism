//
// This is only a SKELETON file for the 'Nucleotide Count' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class NucleotideCounts {
  static parse(sequence) {
    let count = {
      A: 0,
      C: 0,
      G: 0,
      T: 0
    };

    for (let i = 0; i < sequence.length; i++) {
      if (!(count[sequence.charAt(i)] += 1)) {
        throw "Invalid nucleotide in strand";
      }
    }
    return Object.values(count).join(' ');
  }
}
