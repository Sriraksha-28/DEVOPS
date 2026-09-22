"use strict";
function calculateScores(scores, bonus) {
    let total = 0;
    scores.forEach((score) => {
        total += score;
    });
    const average = total / scores.length;
    const finalScore = average + bonus;
    if (finalScore > 90) {
        return "Excellent";
    }
    return finalScore;
}
console.log(calculateScores([80, 90, 100], 5));
