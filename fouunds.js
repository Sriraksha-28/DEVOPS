"use strict";
function analyzeResults(marks, bonus) {
    let total = 0;
    let validMarks = [];
    marks.forEach((mark) => {
        if (mark >= 0 && mark <= 100) {
            validMarks.push(mark);
            total += mark;
        }
    });
    const average = total / validMarks.length + bonus;
    let grade = "F";
    if (average >= 90)
        grade = "A+";
    else if (average >= 75)
        grade = "A";
    else if (average >= 60)
        grade = "B";
    else if (average >= 40)
        grade = "C";
    return { average, grade };
}
console.log(analyzeResults([85, 92, 90, 110, 90, 98], 5));
