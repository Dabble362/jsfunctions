function getGrade(s1, s2, s3) {
  const averageGrade = (s1 + s2 + s3) / getGrade.length;
  let letterGrade = "";
  if (averageGrade < 60) {
    letterGrade = "F";
  } else if (averageGrade < 70) {
    letterGrade = "D";
  } else if (averageGrade < 80) {
    letterGrade = "C";
  } else if (averageGrade < 90) {
    letterGrade = "B";
  } else {
    letterGrade = "A";
  }
  return letterGrade;
}
