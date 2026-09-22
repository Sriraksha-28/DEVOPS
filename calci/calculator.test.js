const { add, sub } = require("./calculator");

describe("add feature of the calculator", () => {

    test("add 2 positive numbers1", () => {
        expect(add(5, 10)).toBe(15);
    });

    test("add 2 negative numbers1", () => {
        expect(sub(-5, -10)).toBe(5);
    });

});