//FR1
export function generateRandomNumbers(min, max, count) {
    const numbers = new Set();

    while(numbers.size < count) {
        const randomNumbers = Math.floor(Math.random() * (max - min + 1)) + min;
        numbers.add(randomNumbers);
    }
    return Array.from(numbers);
}

//FR2

export function countRandomNumbers(userNumbers,randomNumbers){
    let matchCount = 0;
    userNumbers.forEach(num => {
        if (randomNumbers.includes(num)) {
            matchCount++;
        }
    });
    return matchCount;
}

//FR3

export function buildResultHtml(randomNumbers, matchCount) {
    const lista = randomNumbers.join(", ");
    let matches = matchCount;

    if (matches === 0) {
        return (
            `
                <p class="resultTable">Wylosowane liczby: ${lista}</p>
                <p class="resultTable">Brak trafień!</p>
            `
        );
    } else {
        return (
            `
                <p class="resultTable">Wylosowane liczby: ${lista}</p>
                <p class="resultTable">Liczba trafień: ${matches}</p>
            `
        );
    }
}


