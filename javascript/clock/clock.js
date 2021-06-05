//
// This is only a SKELETON file for the 'Clock' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Clock {
  constructor(hours = 0, minutes = 0) {
    this.hours = hours;
    this.minutes = minutes;
  }

  toString() {
    while (this.minutes >= 60) {
      this.minutes -= 60;
      this.hours ++;
    }

    while (this.minutes < 0) {
      this.minutes += 60;
      this.hours --;
    }

    while (this.hours >= 24) {
      this.hours -= 24;
    }

    while (this.hours < 0) {
      this.hours = 24 + this.hours;
    }

    this.hours < 10 ? (this.hours = `0${this.hours}`) : this.hours;
    this.minutes < 10 ? (this.minutes = `0${this.minutes}`) : this.minutes;

    return `${this.hours}:${this.minutes}`
  }

  plus(min) {
    this.minutes += min;
    return this;
  }

  minus(min) {
    this.minutes -= min;
    return this;
  }

  equals(clock) {
    this.toString();
    clock.toString();
    return this.toString() === clock.toString() ? true : false;
  }
}
