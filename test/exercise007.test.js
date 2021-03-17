const {
    sumDigits,
    createRange,
    getScreentimeAlertList,
    hexToRGB,
    findWinner,
} = require('../challenges/exercise007');

describe("sumDigits", () => {

    test("throws an error if argument not passed in (n is undefined", () => {
        expect(() => {
            sumDigits();
        }).toThrow("n is required");
    });

    test("returns the sum of all the digits from given array", () => {
        expect(sumDigits([4, 6, 3])).toBe(13);
        expect(sumDigits([55, 62, 10])).toBe(127);
        expect(sumDigits([28, 22, 100])).toBe(150);
      });
    
});

describe("createRange", () => {
    test("returns range in descending order if the end number is greater than initial number.", () => {
        expect(createRange(12, 6, 3)).toEqual([12, 9, 6]);
      });

      test("returns is step is not provided it asssumes step to be 1.", () => {
        expect(createRange(5, 10)).toEqual([5, 6, 7, 8, 9, 10]);
      });
    
      test("returns range of numbers as an array with the step as gap between numbers in the range and both the start and the end numbers.", () => {
        expect(createRange(3, 11, 2)).toEqual([3, 5, 7, 9, 11]);
        expect(createRange(3, 11, 3)).toEqual([3, 6, 9]);
      });

});

describe("getScreentimeAlertList", () => {
   
});

describe("hextoRGB", () => {
    
});

describe("findWinner", () => {
   
})