
function decToBin(dec){
    if(dec === 0) return 0;
    let bin = "";

     while (dec > 0) {
        if (dec % 2 === 0) {
            bin = '0' + bin;
        } else {
            bin = '1' + bin;
        }
        dec = Math.floor(dec / 2);
    }

    return bin;
}



function binToDec(bin) {
    let potega = 1;
    let dec = 0;

    for (let i = bin.length - 1; i >= 0; i--) {
        if (bin[i] == '1') {
            dec = dec + potega;
        }
        potega = potega * 2;
    }
    return dec;
}


export{binToDec, decToBin};