// == task-7 == //
// Написати програму де користувач вводить 3 числа,
// після вводу всіх трьох чисел йому на екрані показується
// найбільше з них.Додатково перевіряти чи це взагалі числа

let a, b, c;
do {
  a = Number.parseInt(prompt("Введите первое число"));
  if (isNaN(a)) {
    alert("Было введено не число, попробуйте еще раз");
  } else {
    break;
  }
} while (typeof a !== "number" || isNaN(a));
do {
  b = Number.parseInt(prompt("Введите второе число"));
  if (isNaN(b)) {
    alert("Было введено не число, попробуйте еще раз");
  } else {
    break;
  }
} while (typeof b !== "number" || isNaN(b));
do {
  c = Number.parseInt(prompt("Введите второе число"));
  if (isNaN(c)) {
    alert("Было введено не число, попробуйте еще раз");
  } else {
    break;
  }
} while (typeof c !== "number" || isNaN(c));

alert(`Самое большое число: ${Math.max(a, b, c)}`);
