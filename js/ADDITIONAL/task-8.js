// == task-8 == //
// Написати програму яка переведе введену оцінку студента
// до болонського формату 89 - 100 це A 75 - 88 це В 60 - 74 це С
// 45 - 59 це D 20 - 44 це Е до 20 це F

let mark = Number.parseInt(prompt());
if (mark >= 89) {
  alert(`Your mark is A`);
} else if (mark >= 75) {
  alert(`Your mark is B`);
} else if (mark >= 60) {
  alert(`Your mark is c`);
} else if (mark >= 45) {
  alert(`Your mark is D`);
} else if (mark >= 20) {
  alert(`Your mark is E`);
} else alert(`Your mark is F`);
