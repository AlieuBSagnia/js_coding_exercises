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

    it("throws an error if no string is passed in", () => {
        expect(() => {
            isValidDNA();
        }).toThrow("str is required");
    });

    it("returns true if string contains only valid DNA characters", () => {
        expect(isValidDNA("CGTA")).toBe(true);
        expect(isValidDNA("CGTACGTA")).toBe(true);
        expect(isValidDNA("ATGCATGC")).toBe(true);
        
    });

    it("returns false if string contains no valid DNA characters", () => {
        expect(isValidDNA("JLMOP")).toBe(false);
        expect(isValidDNA("IRK")).toBe(false);
    });

    it("returns false if string contains a mixture of valid DNA characters & invalid characters", () => {
        expect(isValidDNA("BGADFCE")).toBe(false);
        expect(isValidDNA("VUSWT")).toBe(false);

    });
    
});

describe("getComplementaryDNA", () => {

    test("throws an error is no string is passed", () => {
        expect(() => {
            getComplementaryDNA();
        }).toThrow("str is required");

    });

    test("returns the correct corresponding DNA base pairs", () => {
        expect(getComplementaryDNA("ACTG")).toBe("TGAC");
        expect(getComplementaryDNA("CGTA")).toBe("GCAT");
        expect(getComplementaryDNA("ACTGCGTA")).toBe("TGACGCAT");
        expect(getComplementaryDNA("ACTGCGTATTGC")).toBe("TGACGCATAACG");
    })

    test("returns an error if an invalid string is passed", () => {
        expect(() => {
            getComplementaryDNA("ACTJ")
        }).toThrow("invalid DNA string");
    });

});

describe("isItPrime", () => {

    test("throws an error if no parameter passed in", () => {
        expect(() => {
            isItPrime()
        }).toThrow("n is required");
    });

    test("returns false if n is not a prime number", () => {
        expect(isItPrime(0)).toBe(false);
        expect(isItPrime(1)).toBe(false);
        expect(isItPrime(4)).toBe(false);
        expect(isItPrime(6)).toBe(false);
        expect(isItPrime(8)).toBe(false);
        expect(isItPrime(9)).toBe(false);
        expect(isItPrime(10)).toBe(false);
    });


    test("returns true if n is a prime number", () => {
        expect(isItPrime(2)).toBe(true);
        expect(isItPrime(3)).toBe(true);
        expect(isItPrime(5)).toBe(true);
        expect(isItPrime(7)).toBe(true);
        expect(isItPrime(11)).toBe(true);
        expect(isItPrime(13)).toBe(true);
        expect(isItPrime(17)).toBe(true);
        expect(isItPrime(19)).toBe(true);
        expect(isItPrime(23)).toBe(true);
        expect(isItPrime(29)).toBe(true);
    });
   
});

describe("createMatrix", () => {

    

});

describe("areWeCovered", () => {
   

});