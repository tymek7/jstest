"use strict";

import { isEven } from "./utilites.js";
import { isNumberString } from './validate.js';

const elInput = document.getElementById("inputField");
const elButton = document.getElementById("checkButton");
const elResult = document.getElementById("result");


elButton.addEventListener("click", () => {

    const value = elInput.value;

    if(!isNumberString(value)) {
        elResult.textContent = 'Podaj poprawna wartosc';
        return;
    }

    const num = Number(value);

    if(isEven(num)){
        elResult.textContent = 'Liczba jest zajebista';
    }
    else {
        elResult.textContent = 'Liczba jest chujowa';
    }

}
)
