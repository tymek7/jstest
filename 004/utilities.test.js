import { buildResultHtml, countRandomNumbers, generateRandomNumbers } from "./utilities.js";



describe("totek", () => {
    test("should generate random numbers", () => {
        const min = 1;
        const max = 49;
        const count = 6;

        const randomNumbers = generateRandomNumbers(min, max, count);

        expect(randomNumbers.length).toBe(count);
        randomNumbers.forEach(num => {
            expect(num).toBeGreaterThanOrEqual(min);
            expect(num).toBeLessThanOrEqual(max);
        });
    });

    test("should count one match", () => {
        const userNumbers = [5, 12, 23, 34, 45, 49];
        const randomNumbers = [5, 8, 15, 22, 30, 40];

        const matchCount = countRandomNumbers(userNumbers, randomNumbers);

        expect(matchCount).toBe(1);
    });

    test("should return brak trafien", () => {
        const randomNumbers = [3, 14, 27, 35, 42, 48];
        const matchCount = 0;

        const resultHtml = buildResultHtml(randomNumbers, matchCount);

        expect(resultHtml).toContain("Brak trafień!");
    });

     test("should return trafienia", () => {
        const randomNumbers = [3, 14, 27, 35, 42, 48];
        const matchCount = 1;

        const resultHtml = buildResultHtml(randomNumbers, matchCount);

        expect(resultHtml).toContain('Liczba trafień: 1');
    });
});
