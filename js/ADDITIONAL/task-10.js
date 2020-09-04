// == task-10 == //
// Написати гру камінь ножиці папір. Де компютер загадує своє значення потім користувач вводить свій варіант
// і далі ми бачимо результат на екрані хто виграв
// Math.floor(Math.random() * (max - min + 1)) + min;

let pcSign = Math.floor(Math.random() * 3);
switch (pcSign) {
  case 0:
    console.log("Выбор ПК - камень");
    pcSign = "камень";
    break;
  case 1:
    console.log("Выбор ПК - ножницы");
    pcSign = "ножницы";
    break;
  case 2:
    console.log("Выбор ПК - бумага");
    pcSign = "бумага";
    break;

  default:
    break;
}
let userSign = prompt("Выбирай камень/ножницы/бумага").toLowerCase();
while (
  userSign !== "камень" &&
  userSign !== "ножницы" &&
  userSign !== "бумага"
) {
  userSign = prompt(
    "Неправильный выбор! Выбирай камень/ножницы/бумага"
  ).toLowerCase();
}
console.log(`Выбор Юзера - ${userSign}`);
if (pcSign === userSign) {
  alert("Ничья");
} else if (
  (pcSign === "ножницы" && userSign === "бумага") ||
  (pcSign === "камень" && userSign === "ножницы") ||
  (pcSign === "бумага" && userSign === "камень")
) {
  alert("ПК победил");
} else alert("Юзер победил");
