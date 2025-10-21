"use strict";

import {binToDec, decToBin} from './utilities.js';
import {isBinaryString, isDecimalString} from './validate.js';
const tymek = document.getElementById("tymekHilfe");



const elModeBinDec = document.getElementById("modeBinDec");

const elModeDecBin = document.getElementById("modeDecBin");

const elConvert = document.getElementById("convert");

const elInputLabel = document.getElementById("inputLabel");

const elInputValue = document.getElementById("inputValue");

const elResult = document.getElementById("result");

let mode = "BIN_DEC";


function setMode(newMode){

    mode = newMode;
    if(mode === "BIN_DEC"){

        elInputLabel.textContent = "Liczba binarna";
        elInputValue.setAttribute("placeholder", "np. 1010");

    }else if(mode === "DEC_BIN"){
         elInputLabel.textContent = "Liczba dziesiętna";
         elInputValue.setAttribute("placeholder", "np. 10");
    }

    elResult.textContent = "Wynik: ";

    elInputValue.value = "";

}

elConvert.addEventListener("click", () =>{

    tymek.value = "Click";

    if(mode === "BIN_DEC"){

        if(isBinaryString(elInputValue.value)){
        elResult.textContent = "Wynik: " + binToDec(String(elInputValue.value));
        }else{
            elResult.textContent = "Podaj prawidlowa liczbe binarna.";
        }
    }else{

        if(isDecimalString(elInputValue.value)){  
        elResult.textContent = "Wynik: " + decToBin(Number(elInputValue.value));
         }else{
             elResult.textContent = "Podaj prawidlowa liczbe decymalna.";
         }       
    }


});



elModeBinDec.addEventListener("click", () => setMode("BIN_DEC"));
elModeDecBin.addEventListener("click", () => setMode("DEC_BIN"));

setMode("BIN_DEC");