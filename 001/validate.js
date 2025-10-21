// == funcje walidacji danych wyjsciowych ===

function isBinaryString(s){
    return /^[01]+$/.test(s);
}

// ^ - poczatek lancucha
// +$ - koniec lancucha
// [01] - znaki '0' lub '1'
// + - jeden lub wiecej wystapien

function isDecimalString(s){
    return /\d+$/.test(s);
}

export{isBinaryString, isDecimalString};

// ^ - poczatek lancucha
// +$ - koniec lancucha
// d - cyfra od 0-9
// + - jeden lub wiecej wystapien