const ADMIN_PASSWORD = "jqueryismyjam";
let message;

// let inputPassword = prompt();
// if (inputPassword === null) {
//   message = "Отменено пользователем!";
// } else if (inputPassword === ADMIN_PASSWORD) {
//   message = "Добро пожаловать!";
// } else {
//   message = "Доступ запрещен, неверный пароль!";
// }
// alert(message);

switch (inputPassword) {
  case null:
    message = "Отменено пользователем!";
    break;

  case ADMIN_PASSWORD:
    message = "Добро пожаловать!";
    break;

  default:
    message = "Доступ запрещен, неверный пароль!";
    break;
}
alert(message);
