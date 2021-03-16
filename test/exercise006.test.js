const {
    sumMultiples,
    isValidDNA,
    getComplementaryDNA,
    isItPrime,
    createMatrix,
    areWeCovered
} = require('../challenges/exercise006');

describe("sumMultiples", () => {
    test("it throws an error if not passed an array", () => {
        expect(() => {
            sumMultiples()
        }).toThrow("arr is required");
        expect(() => {
            sumMultiples('string')
        }).toThrow("An array is required");
        expect(() => {
            sumMultiples(5)
        }).toThrow("An array is required");
    }); 
    test("it returns the sum of any numbers which are a multiple of 3 or 5", () => {
            const result = sumMultiples([1, 3, 5]);
            const expected = 8;
            expect(result).toBe(expected);
            expect(sumMultiples([3, 3, 5, 5])).toBe(16);
            expect(sumMultiples([6, 15, 2])).toBe(21);
         });    

});

describe("isValidDNA", () => {
    
});

describe("getComplementaryDNA", () => {
   
});

describe("isItPrime", () => {
   
});

describe("createMatrix", () => {

    

});

describe("areWeCovered", () => {
   

});