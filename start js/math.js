const result = document.querySelector('#result'),
      expression = document.querySelector('#expression'),
      num = document.querySelectorAll('.number:not(.equals)'),
      operation = document.querySelectorAll('.operation'),
      equals = document.querySelector('.equals'),
      clear = document.querySelector('#clear'),
      ce = document.querySelector('#ce');
let ex = ''; // the expression string to be eval'd
result.innerHTML = '0';



function clickN() { // when we click on a number
  if(!ex || typeof(ex) === 'number' || ex === '0') {
    expression.innerHTML = this.id;
    ex = this.id;
  } else {
    expression.innerHTML += this.id;
    ex += this.id;
  }
  result.innerHTML = ex.split(/\/|\*|\+|-|=/).pop();
  checkLength(result.innerHTML);
};

function clickO() { // when we click on an operation
  if(!ex) {
    return;
  }
  ex = ex.toString().replace(/=/, '');
  if (ex.match(/\/|\*|\+|-|=/)) {
    ex = eval(ex).toString();
  } 
  expression.innerHTML = expression.innerHTML.replace(/=/, '') + this.id;
  ex += this.id;
  result.innerHTML = this.id;
};



Array.from(num).forEach(function(element) { // assign appropriate function to all numbers and operations
      element.addEventListener('click', clickN);
    });

Array.from(operation).forEach(function(element) {
      element.addEventListener('click', clickO);
    });

// clear all on click
clear.addEventListener('click', () => {
  result.innerHTML = '';
  expression.innerHTML = '';
  ex = '';
})

// clear last entry on click
ce.addEventListener('click', () => {
  if (!expression.innerHTML.match(/=$/)) {
    
    expression.innerHTML = doCE(expression.innerHTML);
    ex = doCE(ex); 
    result.innerHTML = 0;
    
    function doCE(arg) {
      arg = arg.split(/([\/\*\+\-\=])/g);
      arg.splice(-1, 1);
      return arg.join('');
    }
  }
})

// calculate the whole thing
equals.addEventListener('click', ()=> {
  if (!ex) {
    result.innerHTML = '0';
  } else {
    ex = eval(ex);
    expression.innerHTML += '=';
    result.innerHTML = trim12(ex);
  }
})
// equals.addEventListener('click', () => {
//   if (!ex) {
//     result.innerHTML = '0';
//   } else {
//     try {
//       const calculatedResult = new Function('return ' + ex)();
//       ex = calculatedResult;
//       expression.innerHTML += '=';
//       result.innerHTML = trim12(calculatedResult);
//     } catch (error) {
//       console.error('Помилка при обчисленні виразу:', error);
//       // Обробка помилок при обчисленні виразу
//       result.innerHTML = 'Помилка';
//     }
//   }
// });
// function checkLength(arg) { // if we enter a number that's too long 
//   if (arg.toString().length > 14) {
//     expression.innerHTML = 'number too long'.toUpperCase();
//     result.innerHTML = '0';
//     ex = '0';
//   } 
// }

// function trim12(arg) { // if we calculate a number that's too long
//   if (arg.toString().length > 14) {
//     ex = parseFloat(arg.toPrecision(12));
//     if (ex.toString().length > 14) { 
//       ex = ex.toExponential(9);
//     };
//     return ex;
//   } else {
//     return arg;
//   }
// }
// const result = document.getElementById('result');
//   const expression = document.getElementById('expression');
//   const numbers = document.querySelectorAll('.number');
//   const operations = document.querySelectorAll('.operation');
//   const equals = document.getElementById('btnEquals');
//   const clear = document.getElementById('btnClear');
//   let ex = '0';

//   function clickNumber() {
//     if (ex === '0' || typeof(ex) === 'number') {
//       expression.textContent = this.textContent;
//       ex = this.textContent;
//     } else {
//       expression.textContent += this.textContent;
//       ex += this.textContent;
//     }
//     result.textContent = ex.split(/\/|\*|\+|-|=/).pop();
//   }

//   function clickOperation() {
//     if (!ex) {
//       return;
//     }
//     ex = ex.toString().replace(/=/, '');
//     if (ex.match(/\/|\*|\+|-|=/)) {
//       ex = eval(ex).toString();
//     } 
//     expression.textContent = expression.textContent.replace(/=/, '') + this.textContent;
//     ex += this.textContent;
//     result.textContent = this.textContent;
//   }

//   function clearAll() {
//     result.textContent = '';
//     expression.textContent = '';
//     ex = '';
//   }

//   function equalsClick() {
//     if (!ex) {
//       result.textContent = '0';
//     } else {
//       try {
//         const calculatedResult = new Function('return ' + ex)();
//         ex = calculatedResult;
//         expression.textContent += '=';
//         result.textContent = trim12(calculatedResult);
//       } catch (error) {
//         console.error('Помилка при обчисленні виразу:', error);
//         result.textContent = 'Помилка';
//       }
//     }
//   }

//   function trim12(arg) {
//     if (arg.toString().length > 14) {
//       ex = parseFloat(arg.toPrecision(12));
//       if (ex.toString().length > 14) { 
//         ex = ex.toExponential(9);
//       }
//       return ex;
//     } else {
//       return arg;
//     }
//   }

//   function addEventListeners() {
//     numbers.forEach(number => {
//       number.addEventListener('click', clickNumber);
//     });

//     operations.forEach(operation => {
//       operation.addEventListener('click', clickOperation);
//     });

//     clear.addEventListener('click', clearAll);
//     equals.addEventListener('click', equalsClick);
//   }

//   addEventListeners();