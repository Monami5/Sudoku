const fs = require("fs");
/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */

function solve(boardString) {
  const newStr = boardString.replace(/[-]/gi, 0);
  let arr = newStr.split("").map((i) => Number(i));
  let newArr = [];
  for (let i = 0; i < arr.length; i += 9) {
    newArr.push(arr.slice(i, i + 9));
  }

  const size = newArr.length;
  const boardSize = 3;
  // const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  // let arrColumns = newArr.map((el,i) => el.map((el2,j) => newArr[j][i]));

  console.log("Двумерный массив 9х9, замена - на нули", newArr);

  function findNum(newArr) {
    for (let row = 0; row < size; row += 1) {
      for (let col = 0; col < size; col += 1) {
        if (newArr[row][col] === 0) {
          return [row, col];
        }
      }
    }
    return null;
  }

  function test(number, position, newArr) {
    const [row, col] = position;

    // Проверяем строки
    for (let i = 0; i < size; i += 1) {
      if (newArr[i][col] === number && i !== row) {
        return false;
      }
    }

    // Проверяем столбцы
    for (let i = 0; i < size; i += 1) {
      if (newArr[row][i] === number && i !== col) {
        return false;
      }
    }

    // Проверяем квадраты 3x3
    const boxRow = Math.floor(row / boardSize) * boardSize;
    const boxCol = Math.floor(col / boardSize) * boardSize;

    for (let i = boxRow; i < boxRow + boardSize; i += 1) {
      for (let j = boxCol; j < boxCol + boardSize; j += 1) {
        if (newArr[i][j] === number && i !== row && j !== col) {
          return false;
        }
      }
    }
    return true;
  }

  function getFinalArr() {
    const findPosition = findNum(newArr);

    if (findPosition === null) {
      return true;
    }

    for (let i = 1; i < size + 1; i += 1) {
      const findNumber = Number(i);
      const testing = test(findNumber, findPosition, newArr);
      console.log('Искомая позиция:', findPosition, 'Искомое число:', findNumber, 'Проверка: ', testing);

      if (testing) {
        const [x, y] = findPosition;
        newArr[x][y] = findNumber;

        if (getFinalArr()) {
          return true;
        }

        newArr[x][y] = 0;
      }
    }
    return false;
  }

  // console.table(newArr);
  getFinalArr();
  // console.table(newArr);
  return newArr;
}

console.table(
  solve(
    "1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--"
  )
);

// 0
// 1-58-2---
// 0123456789

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает булевое значение — решено это игровое поле или нет.
 */

function isSolved(newArr) {
  if (!newArr.includes(0));
}

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает строку с игровым полем для последующего вывода в консоль.
 * Подумай, как симпатичнее сформировать эту строку.
 */

function prettyBoard(newArr) {}

// Экспортировать функции для использования в другом файле (например, readAndSolve.js).
module.exports = {
  solve,
  isSolved,
  prettyBoard,
};
