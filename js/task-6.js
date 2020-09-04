let input;
let total = 0;
let inputAdd = 0;

// 1 вариант
// input = prompt();
// while (input !== null) {
//   if (isNaN(input)) {
//     alert("Было введено не число, попробуйте еще раз");
//     input = prompt();
//   } else {
//     inputAdd = Number.parseInt(input);
//     total += inputAdd;
//     input = prompt();
//   }
// }
// alert(`Общая сумма чисел равна ${total}`);

//  2 вариант
// do {
//   input = prompt();
//   if (isNaN(input)) {
//     alert("Было введено не число, попробуйте еще раз");
//   } else {
//     total += +input;
//   }
// } while (input !== null);
// alert(`Общая сумма чисел равна ${total}`);

// 3 вариант
// while (true) {
//   input = prompt();
//   if (input === null) {
//     break;
//   }
//   input = Number(input);
//   if (isNaN(input)) {
//     alert("Было введено не число, попробуйте еще раз");
//     continue;
//   }
//   total += input;
// }
// alert(`Общая сумма чисел равна ${total}`);

//  4 Вариант
input = prompt();
for (let index = 0; input !== null; index++) {
  if (isNaN(input)) {
    alert("Было введено не число, попробуйте еще раз");
    input = prompt();
  } else {
    total += +input;
    input = prompt();
  }
}
alert(`Общая сумма чисел равна ${total}`);
