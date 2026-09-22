"use strict";
function processMarks(marks, passingMark) {
    let passed = 0;
    marks.forEach((mark) => {
        if (mark >= passingMark) {
            passed++;
        }
    });
    const percentage = passed / marks.length * 100;
    if (percentage >= 60) {
        return "Passed";
    }
    return percentage;
}
console.log(processMarks([75, 42, 65, 30, 90], 40));
