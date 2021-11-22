const filterStorageData = (data) => {
  switch (data) {
    case 0:
      return 0;
    case 10:
      return 1;
    case 20:
      return 2;
    case 30:
      return 3;
    case 40:
      return 4;
    case 50:
      return 5;
    case 60:
      return 6;
    case 70:
      return 7;
    case 80:
      return 8;
    case 90:
      return 9;
    case 100:
      return 10;
    case 110:
      return 11;
    case 120:
      return 12;
    case 130:
      return 13;
    case 140:
      return 14;
    case 150:
      return 15;
    case 160:
      return 16;
    case 170:
      return 17;
    case 180:
      return 18;
    case 190:
      return 19;
    case 200:
      return 20;
    case 210:
      return 21;
    case 220:
      return 22;
    default:
      return 23;
  }
};

export default filterStorageData;
