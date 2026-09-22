const {
    calculateAverage,
    getGrade,
    analyzeStudent,
    findTopStudent,
} = require("./studentService");


describe("calculateAverage", () => {

    test("should calculate average of valid marks", () => {
        expect(calculateAverage([100, 90, 80, 70, 50])).toBe(78);
    });

    test("should return 0 for an empty array", () => {
        expect(calculateAverage([])).toBe(0);
    });

    test("should ignore invalid marks", () => {
        expect(calculateAverage([100, 90, 80, 70, -50])).toBe(85);
    });

    test("should return 0 when all marks are invalid", () => {
        expect(calculateAverage(["90", "80", "75", "70", -10])).toBe(0);
    });

    test("should handle decimal averages", () => {
        expect(calculateAverage([80.5, 70.2, 90.1])).toBe(80.27);
    });

});


describe("getGrade", () => {

    test("should return A for average >= 90", () => {
        expect(getGrade(90)).toBe("A");
    });

    test("should return B for average between 75 and 89", () => {
        expect(getGrade(80)).toBe("B");
    });

    test("should return C for average between 60 and 74", () => {
        expect(getGrade(65)).toBe("C");
    });

    test("should return D for average between 40 and 59", () => {
        expect(getGrade(50)).toBe("D");
    });

    test("should return F for average below 40", () => {
        expect(getGrade(30)).toBe("F");
    });

});


describe("analyzeStudent", () => {

    test("should return complete student analysis", () => {
        expect(analyzeStudent({
            name: "Raksha",
            marks: [80, 90, 70]
        })).toEqual({
            name: "Raksha",
            average: 80,
            grade: "B",
            passed: true
        });
    });

    test("should mark student as passed when average is 40 or above", () => {
        expect(analyzeStudent({
            name: "Rahul",
            marks: [40, 40, 40]
        }).passed).toBe(true);
    });

    test("should mark student as failed when average is below 40", () => {
        expect(analyzeStudent({
            name: "Anu",
            marks: [30, 35, 35]
        }).passed).toBe(false);
    });

    test("should throw error for invalid student", () => {
        expect(() => analyzeStudent(null)).toThrow("Invalid student");
    });

});


describe("findTopStudent", () => {

    test("should return student with highest average", () => {
        expect(findTopStudent([
            {
                name: "Rahul",
                marks: [60, 70, 80]
            },
            {
                name: "Raksha",
                marks: [90, 95, 85]
            }
        ]).name).toBe("Raksha");
    });

    test("should return null for empty student list", () => {
        expect(findTopStudent([])).toBe(null);
    });

    test("should handle students with different number of marks", () => {
        expect(findTopStudent([
            {
                name: "Student1",
                marks: [80, 80]
            },
            {
                name: "Student2",
                marks: [70, 70, 70, 70]
            }
        ]).name).toBe("Student1");
    });
    test("should return 0 for invalid input", () => {
    expect(calculateAverage(null)).toBe(0);
});
test("should handle student with no marks", () => {
    expect(analyzeStudent({
        name: "Test",
        marks: []
    })).toEqual({
        name: "Test",
        average: 0,
        grade: "F",
        passed: false
    });
});
test("should handle a single student", () => {
    expect(findTopStudent([
        {
            name: "Raksha",
            marks: [90, 80, 70]
        }
    ]).name).toBe("Raksha");
});

});