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

function doesLineIncludesNumber(arr, num, [i, j]) {
  let line = arr[i];
  line.forEach(el => {
    if (el === num) return true;
  });
  return false;
}

function doesRowIncludesNumber(arr, num, [i, j]) {
  function getRow(arr, [i, j]) {
    let rowSet = new Set();
    for (let n = 0; n < arr.length; n += 1) {
      rowSet.add(arr[n][j]);
    }
    return rowSet;
  }
  return getRow(arr, [i, j]).has(num) ? true : false;
}

console.table(getInitArr(str));
console.log(doesRowIncludesNumber(getInitArr(str), '1', [0, 1]));

