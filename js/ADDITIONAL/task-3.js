// == task-3 == //
// Написати програму де компютер загадає число від 1 до 10 і
// запропонує користувачу вгадати його Користувач вводить свій варіант і
// отримує результат(Виграв чи ні) Вивести результат в форматі
// "Вітаю ви вгадали число (тут варіант компютера)" або
// "Ви програли, компютер загадав (тут варіант компютера)"
// Math.floor(Math.random() * (max - min + 1)) + min;

const pcNumber = Math.floor(Math.random() * 10) + 1;
console.log(`PC Number is: ${pcNumber}`);
let userNumber =
  Number.parseInt(prompt("Спробуйте вгадати число (від 1 до 10)")) === pcNumber
    ? alert(`Вітаю ви вгадали число ${pcNumber}`)
    : alert(`Ви програли, компютер загадав ${pcNumber}`);
