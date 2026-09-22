function calculateScores(
  scores: number[],
  bonus: number
): number | string {
  let total: number = 0;

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