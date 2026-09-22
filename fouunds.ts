
function analyzeResults(
  marks: number[],
  bonus: number
): { average: number; grade: string } {
  let total: number = 0;
  let validMarks: number[] = [];

  marks.forEach((mark) => {
    if (mark >= 0 && mark <= 100) {
      validMarks.push(mark);
      total += mark;
    }
  });

  const average = total / validMarks.length + bonus;

  let grade: string = "F";

  if (average >= 90) grade = "A+";
  else if (average >= 75) grade = "A";
  else if (average >= 60) grade = "B";
  else if (average >= 40) grade = "C";

  return { average, grade };
}

console.log(analyzeResults([85, 92, 90, 110, 90, 98], 5));


