// const inputANode = document.querySelector(".js-input-a");
// const inputBNode = document.querySelector(".js-input-b");
// const btnResultNode = document.querySelector(".js-btn-result");
// const outputNode = document.querySelector(".js-output");
// const selectOperationNode = document.querySelector(".js-select-operation");
// // ------------------------------
// btnResultNode.addEventListener("click", function () {
//   const a = Number(inputANode.value);
//   const b = Number(inputBNode.value);
//   const operation = selectOperationNode.value;
//   const result = calculate({
//     a,
//     b,
//     operation,
//   });
//   outputNode.innerHTML = result;
// });
// document.addEventListener("DOMContentLoaded", function () {
//   const inputANode = document.querySelector(".js-input-a");
//   const inputBNode = document.querySelector(".js-input-b");
//   const btnResultNode = document.querySelector(".js-btn-result");
//   const outputNode = document.querySelector(".js-output");
//   const selectOperationNode = document.querySelector(".js-select-operation");

//   btnResultNode.addEventListener("click", function () {
//     const a = Number(inputANode.querySelector("span").innerText);
//     const b = Number(inputBNode.querySelector("span").innerText);
//     const operation = selectOperationNode.querySelector("span").innerText;
//     const result = calculate({
//       a,
//       b,
//       operation,
//     });
//     outputNode.innerText = result;
//   });
// });
  // Додавання обробників подій для цифрових кнопок
  numberButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      const digit = button.querySelector("span").innerText;
      currentInput.innerText += digit;
    });
  });

  // Додавання обробників подій для кнопок операцій
  operationButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      const selectedOperation = button.querySelector("span").innerText;
      // Зміна поточного вводу на inputBNode при виборі операції
      currentInput = inputBNode;
      inputBNode.innerText += selectedOperation;
    });
  });

  // Додавання обробника подій для кнопки результату
  resultButton.addEventListener("click", function () {
    const a = Number(inputANode.innerText);
    const b = Number(inputBNode.innerText);
    const result = calculate({ a, b, operation: inputBNode.innerText });
    outputNode.innerText = result;
  });
});