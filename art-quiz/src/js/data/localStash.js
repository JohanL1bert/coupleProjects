import filterStorageData from "./filter__storage";

const setLocalData = (status, data) => {
  const arrayNumber = data.obj.array[0];
  const value = filterStorageData(arrayNumber);
  const obj = localStorage.getItem("objStorage");
  const objValue = JSON.parse(obj);
  for (let i = 0; i <= objValue.isCorrectAnswer.length + 1; i += 1) {
    if (i === value) {
      objValue.isCorrectAnswer[i].push(...status);
    }
  }
  localStorage.setItem("objStorage", JSON.stringify(objValue));
};

export default setLocalData;
