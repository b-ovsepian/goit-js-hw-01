// == task-4 == //
// Написати програму яка буде знаходити суму, різницю, добуток,
// частрку двох чисел Користувач вводить 2 числа потім вводить
// знак операції і отримує результат в форматі "Сума чисел
// a i b = результат"(такий шаблон для кожної відповіді)

let a = Number.parseInt(prompt("Input first number"));
let b = Number.parseInt(prompt("Input second number"));
let operation = prompt("Input operation (+ - / *)");
console.log(operation);
switch (operation) {
  case "+":
    alert(`Сума чисел ${a} i ${b} = ${a + b}`);
    break;
  case "-":
    alert(`Різниця чисел ${a} i ${b} = ${a - b}`);
    break;
  case "*":
    alert(`Добуток чисел ${a} i ${b} = ${a * b}`);
    break;
  case "/":
    alert(`Частка чисел ${a} i ${b} = ${a / b}`);
    break;

  default:
    alert("😵");
    break;
}
