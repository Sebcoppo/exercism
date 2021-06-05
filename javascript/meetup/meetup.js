const DAYS_OF_WEEK = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
]

export const meetup = (year, month, descriptor, day) => {
  let i = 0;
  switch(descriptor) {
      case 'teenth' :
        i = 13;
        break;
      case 'first' :
        i = 1;
        break;
      case 'second' :
        i = 8 ;
        break;
      case 'third' :
        i = 15;
        break;
      case 'fourth' :
        i = 22;
        break;
      case 'last' :
        month = month + 1;
        i = -6;
        break;
      default :
        i = 0;
        break;
  }

  for (let x = i; x <= i + 6; x++) {
    const testDate = new Date(year, (month - 1), x);
      if (testDate.getDay() === DAYS_OF_WEEK.indexOf(day)) {
        return testDate;
      }
  }

}
