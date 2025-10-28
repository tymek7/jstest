"use strict"

import { isDivisibleBy3, isDivisibleBy5 } from "./utilities.js";
import { isNumberString } from "./validate.js";

const elInput = document.getElementById("input");
const elButton = document.getElementById("submit");
const elResult = document.getElementById("result");

elButton.addEventListener("click", () => {

    const value = elInput.value.toLowerCase();

    if(value.includes("kot")) {
        elResult.textContent = "Miauuu! 🐱";
        elResult.classList.add("shake");

        setTimeout(() => elResult.classList.remove("shake"), 400);
        return;
    }

    if (!isNumberString(value)) {
        elResult.textContent = 'Podaj dobra liczbe...'
        return;
    }

    const num = Number(value);

    if (isDivisibleBy3(num) && isDivisibleBy5(num)) {
        elResult.textContent = 'FizzBuzz!';
        elResult.style.color = 'green';
    }
    else if (isDivisibleBy3(num)) {
        elResult.textContent = 'Fizz!';
        elResult.style.color = 'red';
    }
    else if (isDivisibleBy5(num)) {
        elResult.textContent = 'Buzz!';
        elResult.style.color = 'blue';
    }
    else {
        elResult.textContent = 'Ani Fizz ani Buzz.';
        elResult.style.color = 'black';
    }
})

// 🍌 Sekretny przycisk
const bananaBtn = document.getElementById("banana");

bananaBtn.addEventListener("click", (event) => {
  event.preventDefault(); // żeby nie przeładowało strony

  // Losowy pastelowy kolor tła
  const randomHue = Math.floor(Math.random() * 360);
  document.body.style.transition = "background 0.6s";
  document.body.style.background = `hsl(${randomHue}, 85%, 85%)`;

  // Napis w wyniku
  elResult.textContent = "chuj ci w dupe";
  elResult.classList.add("shake");
  setTimeout(() => elResult.classList.remove("shake"), 600);
});
