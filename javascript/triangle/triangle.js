//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Triangle {
  constructor(a,b,c) {
    this.a = a;
    this.b = b;
    this.c = c;
  }

  get violateInequality() {
    return (this.a === 0 || this.b === 0 || this.c === 0)  ? true
      : !(this.a + this.b >= this.c) || !(this.a + this.c >= this.b) || !(this.b + this.c >= this.a) ? true
      : false;
  }

  get isEquilateral() {
    return this.violateInequality ? false
      : this.a === this.b && this.a === this.c ? true : false;

  }

  get isIsosceles() {
     return this.violateInequality ? false :
      this.a === this.b || this.a === this.c || this.b === this.c ? true
      : false;

  }

  get isScalene() {
    return this.violateInequality ? false :
      !(this.a === this.b) && !(this.a === this.c) && !(this.b === this.c) ? true : false;

    }

}
