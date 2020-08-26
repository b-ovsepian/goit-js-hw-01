const credits = 23580;
const pricePerDroid = 3000;

let orderCount = prompt();
if (orderCount === null) {
  console.log("Отменено пользователем!");
} else {
  let totalPrice = pricePerDroid * orderCount;
  if (credits < totalPrice) {
    console.log("Недостаточно средств на счету!");
  } else {
    let cash = credits - totalPrice;
    alert(
      `Вы купили ${orderCount} дроидов, на счету осталось ${cash} кредитов.`
    );
  }
}
