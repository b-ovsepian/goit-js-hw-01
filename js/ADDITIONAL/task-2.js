// == task-2 == //
// Завдання: Написати програму яка буде перевіряти чи рік народження користувача був високосним
// Наприклад: 2000, 2004, 2016 - високосні 1998, 2002, 1900 2100 - не високосні

const leapYear = "Год високосный";
const noLeapYear = "Год високосный";

let year = prompt();
if (year % 400 === 0) {
  alert(leapYear);
} else if (year % 100 === 0) {
  alert(noLeapYear);
} else if (year % 4 === 0) {
  alert(leapYear);
} else alert(noLeapYear);
