let input;
let total = 0;
let inputAdd = 0;

input = prompt();
while (input !== null) {
  if (isNaN(input)) {
    alert("Было введено не число, попробуйте еще раз");
    input = prompt();
  } else {
    inputAdd = Number.parseInt(input);
    total += inputAdd;
    input = prompt();
  }
}
alert(`Общая сумма чисел равна ${total}`);
