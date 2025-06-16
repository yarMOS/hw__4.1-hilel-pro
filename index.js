'use strict';

const userName = prompt("Введіть сво ім'я");

if (userName === null) {
  alert("Ти натиснув 'Скасувати'.");
} else if (userName.trim() === "") {
  alert("Ти ввів тільки пробіли або нічого не ввів.");
} else if (!isNaN(userName)) {
  alert("Ім’я не може бути числом.");
} else {
  alert(`Привiт, ${userName}`);
}