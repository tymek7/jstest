import {
  generateRandomNumbers,
  countRandomNumbers,
  buildResultHtml,
} from "./utilities.js";

const elResult = document.getElementById("result");
const elSubmit = document.getElementById("submitButton");
const elReset = document.getElementById("resetButton");

//FR4

function onFormReset() {
  elResult.innerHTML = " ";
}

//FR5

function displayResult(randomNumbers, matches) {
  elResult.classList.add("result");
  elResult.innerHTML = buildResultHtml(randomNumbers, matches);
}

//FR6

function getUserInput() {
  const userNumbers = [];
  for (let i = 1; i <= 6; i++) {
    const num = parseInt(document.getElementById(`num${i}`).value, 10);
     if (!isNaN(num) && num >= 1 && num <= 49) {
            userNumbers.push(num);
        }
  }
  return userNumbers;
}

//FR7

function onFormSubmit(e) {
    e.preventDefault();

    const userNumbers = getUserInput();
    const randomNumbers = generateRandomNumbers(1, 49, 6);
    displayResult(randomNumbers, countRandomNumbers(userNumbers, randomNumbers));
}

//FR8

elSubmit.addEventListener("click", (e) => {
    onFormSubmit(e);
})

elReset.addEventListener("click", () => {
    onFormReset();
})