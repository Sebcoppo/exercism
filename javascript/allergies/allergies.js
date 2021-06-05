//
// This is only a SKELETON file for the 'Allergies' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const ALLERGIE_SCORES = {
  'eggs': 1,
  'peanuts': 2,
  'shellfish': 4,
  'strawberries': 8,
  'tomatoes': 16,
  'chocolate': 32,
  'pollen': 64,
  'cats': 128
};

export class Allergies {
  constructor(value) {
    this.value = value;
    this.allergies = Object.keys(ALLERGIE_SCORES).filter((allergen) => value & ALLERGIE_SCORES[allergen])
  }

  list() {
    return this.allergies;
  }

  allergicTo(allergen) {
    return this.allergies.includes(allergen);
  }
}
