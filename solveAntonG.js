function solve(str) {

}
let str = '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--';

function getInitArr(str) {
  const size = 9;
  let initArr = [];
  for (let i = 0; i < (str.length / size); i += 1) {
    initArr.push(str.slice(i * size, i * size + 9));
  }
  initArr = initArr.map(el => el.split(''));
  return initArr;

  //   let mapOfEmpties = new Map();
  //   for (let i = 0; i < str.length; i += 1) {
  // if (str[i] === '-') {
  //   mapOfEmpties.set()
  // }
  //   }
}

let initArr = getInitArr(str);

function getInitMapOfEmpties(initArr) {
  let initMapOfEmpties = new Map();
  for (let i = 0; i < initArr.length; i += 1) {
    for (let j = 0; j < initArr[i].length; j += 1) {
      if (initArr[i][j] === '-') {
        initMapOfEmpties.set([i, j], '-');
      }
    }
  }
  return initMapOfEmpties;
}

function doesLineIncludesNum(arr, num, [i, j]) {
  let line = arr[i];
  line.forEach(el => {
    if (el === num) return true;
  });
  return false;
}

function doesRowIncludesNum(arr, num, [i, j]) {
  function getRow(arr, [i, j]) {
    let rowSet = new Set();
    for (let n = 0; n < arr.length; n += 1) {
      rowSet.add(arr[n][j]);
    }
    return rowSet;
  }
  return getRow(arr, [i, j]).has(num) ? true : false;
}

function doesSection3on3IncludesNum(arr, num, [i, j]) {
  /*  Здесь секция - это мини-матрица 3х3. Вся матрица состоит из 9 таких мини-матриц.
  Для решения задачи мини-матрица также не должна включать повторяющиеся цифры  */
  function getSection(arr, [i, j]) {
    let sectionSet = new Set();
    let lineAddress = (Math.ceil((9 + i + 1) % 9) / 3) - 1;
    let rowAddress = ((Math.ceil(9 + j + 1) % 9) / 3) - 1;
    for (let n = 0; n < 3; n += 1) {
      for (let m = 0; m < 3; n += 1) {
        sectionSet.add(arr[lineAddress + n][rowAddress + m]);
      }
    }
    return sectionSet;
  }
  return getSection(arr, [i, j]).has(num) ? true : false;
}

console.table(getInitArr(str));
console.log(doesRowIncludesNumber(getInitArr(str), '8', [0, 1]));

