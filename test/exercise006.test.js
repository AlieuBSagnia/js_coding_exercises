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

    test("throws an error if no string is passed in", () => {
        expect(() => {
            isValidDNA();
        }).toThrow("str is required");
    });

    test("returns true if string contains only valid DNA characters", () => {
        expect(isValidDNA("CGTA")).toBe(true);
        expect(isValidDNA("CGTACGTA")).toBe(true);
        expect(isValidDNA("ATGCATGC")).toBe(true);
        
    });

    test("returns false if string contains no valid DNA characters", () => {
        expect(isValidDNA("JLMOP")).toBe(false);
        expect(isValidDNA("IRK")).toBe(false);
    });

    test("returns false if string contains a mixture of valid DNA characters & invalid characters", () => {
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

    test("throws an error if either of the parameters are not passed in (undefined)", () => {
        expect(() => {
            createMatrix();
        }).toThrow("n is required")
        expect(() => {
            createMatrix(5);
        }).toThrow("fill is required")

    });

    test("throws an error if either of the parameters are of the wrong type", () => {
        expect(() => {
            createMatrix("6", "foo");
        }).toThrow("n must be a number")
        expect(() => {
            createMatrix(2, 8);
        }).toThrow("fill must be a string")

    });

    test("returns a matrix of 1 * 1 when passed 1", () => {
        expect(createMatrix(1, "foo")).toEqual([
            ["foo"]
        ])
    });

    test("returns a matrix of 2 * 2 when passed 2", () => {
        expect(createMatrix(2, "foo")).toEqual(
            [
                ["foo", "foo"],
                ["foo", "foo"]
            ]);
        expect(createMatrix(2, "foo")[1].length).toBe(2);
    });
    

});

describe("areWeCovered", () => {

    test("throws an error if parameters staff not entered", () => {
        expect(() => {
            areWeCovered()
        }).toThrow("staff is required");
        expect(() => {
            areWeCovered(["Pedro"]);
        }).toThrow("day is required");
    });

    test("returns false if there are no staff at all", () => {
        expect(areWeCovered([], "Monday")).toBe(false);
        expect(areWeCovered([], "Tuesday")).toBe(false);
        expect(areWeCovered([], "Wednesday")).toBe(false);
        expect(areWeCovered([], "Thursday")).toBe(false);
        expect(areWeCovered([], "Friday")).toBe(false);
        expect(areWeCovered([], "Saturday")).toBe(false);
        expect(areWeCovered([], "Sunday")).toBe(false);
    });
   
    test("returns true if there are 3 staff scheduled to work", () => {
        const staff = [{
                name: "James",
                rota: ["Monday", "Wednesday"]
            },
            {
                name: "Pedro",
                rota: ["Monday", "Wednesday"]
            },
            {
                name: "Sally",
                rota: ["Monday", "Wednesday"]
            },
        ]
        expect(areWeCovered(staff, "Monday")).toBe(true);
        expect(areWeCovered(staff, "Wednesday")).toBe(true);
    });

    test("it returns false if there are staff but < 3 scheduled to work", () => {
        const staff = [{
                name: "James",
                rota: ["Monday", "Sunday"]
            },
            {
                name: "Pedro",
                rota: ["Monday", "Sunday"]
            },
            {
                name: "Sally",
                rota: ["Monday", "Sunday"]
            },
            {
                name: "Paul",
                rota: ["Monday", "Sunday"]
            },
        ]
        expect(areWeCovered(staff, "Tuesday")).toBe(false);
        expect(areWeCovered(staff, "Wednesday")).toBe(false);
        expect(areWeCovered(staff, "Thursday")).toBe(false);
        expect(areWeCovered(staff, "Friday")).toBe(false);
        expect(areWeCovered(staff, "Saturday")).toBe(false);
        

    });

});