export function isLeapYear(year) {
  // Tu código aquí 🤟🏻🔥
  if (year < 0) {
    return false;

  } else {
    if (year % 4 === 0) {
      year % 100 === 0 && year % 400 === 0 ? true : false;
      return true;

    } else if (year % 100 === 0) {
      return false;

    } else {
      return false;
    }
  }
}
