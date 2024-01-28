
const result = document.querySelector('#result'),
      expression = document.querySelector('#expression'),
      numButtons = document.querySelectorAll('.number:not(.equals)'),
      operationButtons = document.querySelectorAll('.operation'),
      equalsButton = document.querySelector('.equals'),
      clearButton = document.querySelector('#clear'),
      ceButton = document.querySelector('#ce');

let currentExpression = '';

result.innerHTML = '0';

function handleNumberClick() {
  if (!currentExpression || typeof(currentExpression) === 'number' || currentExpression === '0') {
    expression.innerHTML = this.id;
    currentExpression = this.id;
  } else {
    expression.innerHTML += this.id;
    currentExpression += this.id;
  }
  result.innerHTML = currentExpression.split(/\/|\*|\+|-|=/).pop();
  checkLength(result.innerHTML);
}

function handleOperationClick() {
  if (!currentExpression) {
    return;
  }
  currentExpression = currentExpression.toString().replace(/=/, '');
  if (currentExpression.match(/\/|\*|\+|-|=/)) {
    currentExpression = calculateExpression(currentExpression).toString();
  } 
  expression.innerHTML = expression.innerHTML.replace(/=/, '') + this.id;
  currentExpression += this.id;
  result.innerHTML = this.id;
}

function calculateExpression(expression) {
  if (!expression) {
    // Обробити випадок, коли вираз є пустим або не визначеним
    return null;
  }

  const operators = expression.match(/\/|\*|\+|-/g);
  const operands = expression.split(/\/|\*|\+|-/).map(Number);

  let result = operands[0];
  for (let i = 0; i < operators.length; i++) {
    switch (operators[i]) {
      case '/':
        result /= operands[i + 1];
        break;
      case '*':
        result *= operands[i + 1];
        break;
      case '+':
        result += operands[i + 1];
        break;
      case '-':
        result -= operands[i + 1];
        break;
    }
  }

  return result;
}

function handleClearClick() {
  result.innerHTML = '';
  expression.innerHTML = '';
  currentExpression = '';
}

function handleCEClick() {
  if (!expression.innerHTML.match(/=$/)) {
    expression.innerHTML = doCE(expression.innerHTML);
    currentExpression = doCE(currentExpression);
    result.innerHTML = 0;
  }
}

function doCE(arg) {
  arg = arg.split(/([\/\*\+\-\=])/g);
  arg.splice(-1, 1);
  return arg.join('');
}

function handleEqualsClick() {
  if (!currentExpression) {
    result.innerHTML = '0';
  } else {
    currentExpression = calculateExpression(currentExpression);
    expression.innerHTML += '=';
    result.innerHTML = currentExpression;
  }
}

Array.from(numButtons).forEach(function(button) {
  button.addEventListener('click', handleNumberClick);
});

Array.from(operationButtons).forEach(function(button) {
  button.addEventListener('click', handleOperationClick);
});

clearButton.addEventListener('click', handleClearClick);
ceButton.addEventListener('click', handleCEClick);
equalsButton.addEventListener('click', handleEqualsClick);
