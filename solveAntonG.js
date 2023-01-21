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

const initArr = getInitArr(str);
let mapOfEmpties = new Map();
let mapOfFull = new Map();
function mapset(str) {
  for (let i = 0; i < initArr.length; i += 1) {
    for (let j = 0; j < initArr[i].length; j += 1) {
      if (initArr[i][j] === '-') {
        mapOfEmpties.set([i, j], '-')
        mapOfFull.set([i, j], '-')
      } else {

      }  ?

    }
  }

}
console.table(mapOfEmpties(str));
