//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//


const transpose = (input) =>
    input[0].map((_,col) => input.map(row => row[col]));


export class Matrix {

  constructor(matrix) {
    this.matrix = matrix;
  }

  static parseString (string) {
    return string.split('\n').map(rowString => rowString.split(' ').map(Number));
  }

  get rows() {
    return Matrix.parseString(this.matrix);
  }

  get columns() {
    return transpose(this.rows);
  }

}
