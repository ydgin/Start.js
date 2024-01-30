let a = "";
let b = "";
let sign = "";
let finish = false;

// определяем массивы с данными;
const digit = ["0", "1", "2", "3", "4", "5", "6", "6", "7", "8", "9", "0", "."];
const action = ["+", "-", "/", "x"];

// Экран;
const number = document.querySelector(".calc__screen-number");

const acButton = document.querySelector(".btn_ac");

const container = document.querySelector('.__container');

// Необходимые фнкции;
// очистка экрана
function clearAll() {
    a = '';
    b = '';
    sign = '';
    finish = false;
    number.textContent = 0;
  }

//   на кнопку "ac" вешаем обработчик событий
  acButton.addEventListener('click', function() {
    clearAll();
  })
  