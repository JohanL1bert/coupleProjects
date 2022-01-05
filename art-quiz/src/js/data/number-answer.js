const numberCorrectAnswer = (arr) => {
  let points = 0;
  arr.forEach((el) => {
    if (el === true) {
      points += 1;
    }
  });
  return points;
};

export default numberCorrectAnswer;
