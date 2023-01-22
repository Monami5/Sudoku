/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */

function solve(boardString) {
  const newStr = boardString.replace(/[-]/gi, 0);
  // let a = /[\d]{1}/g;
  let arr = newStr.split("").map((i) => Number(i));
  let newArr = [];
  // arr.map((el, arr) => {
  //   const index = parseInt(arr.length / 9);
  //   newArr.push(arr.slice(i, i + 9));
  //   // i = index /9;
  //   return newArr;
  // });
  for (let i = 0; i < arr.length; i += 9) {
    newArr.push(arr.slice(i, i + 9));
  }

  const size = newArr.length;
  const boardSize = 3;
  // const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  // let arrColumns = newArr.map((el,i) => el.map((el2,j) => newArr[j][i]));
  // console.log (arrColumns)

  // for (let i = 0; i < newArr.length; i += 1) {
  //   for (let j = 0; j < newArr[i].length; j += 1) {
  //     if (newArr[i][j] === 0) {
  //       for (let n = 0; n < numbers.length; n += 1) {
  //         if (!newArr[i].includes(numbers[n])) {
  //           newArr[i][j] = numbers[n];
  //         }
  //       }
  //     }
  //   }
  // }
  // return xy;
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

    // Проверка строки
    for (let i = 0; i < size; i += 1) {
      if (newArr[i][col] === number && i !== row) {
        return false;
      }
    }

    // Проверка столбца
    for (let i = 0; i < size; i += 1) {
      if (newArr[row][i] === number && i !== col) {
        return false;
      }
    }

    // Проверка поля 3x3
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

  function getResult() {
    const currentPosition = findNum(newArr);

    if (currentPosition === null) {
      return true;
    }

    // console.log('------------------------------');
    for (let i = 1; i < size + 1; i += 1) {
      const currentNumber = Number(i);
      const isValid = test(currentNumber, currentPosition, newArr);
      // console.log('Текущая позиция:', currentPosition, 'Текущие число:', currentNumber, 'Валидация: ', isValid);

      if (isValid) {
        const [x, y] = currentPosition;
        newArr[x][y] = currentNumber;

        if (getResult()) {
          return true;
        }

        newArr[x][y] = 0;
      }
    }
    return false;
  }

  // console.table(board);
  getResult();
  // console.table(board);
  return newArr;
}

console.log(
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
function prettyBoard(newArr) {
  // Вариант №2
  const prettyBoard = newArr
    .map((el) => (el = el.join(" ")))
    .join("\n")
    .replace(/(\d \d \d) (\d \d \d) (\d \d \d)/g, "| $1 | $2 | $3 |")
    .replace(/(.+?\n.+?\n.+?\n)/g, "$1-------------------------\n")
    .replace(/^(.+)/, "-------------------------\n$1")
    .replace(/(.+)$/, "$1\n-------------------------");

  return prettyBoard;
}

console.log(
  prettyBoard([
    [1, 4, 5, 8, 9, 2, 6, 7, 3],
    [8, 9, 3, 1, 7, 6, 4, 2, 5],
    [2, 7, 6, 4, 3, 5, 8, 1, 9],
    [5, 1, 9, 2, 4, 7, 3, 8, 6],
    [7, 6, 2, 5, 8, 3, 1, 9, 4],
    [3, 8, 4, 9, 6, 1, 7, 5, 2],
    [9, 5, 7, 6, 1, 4, 2, 3, 8],
    [4, 3, 8, 7, 2, 9, 5, 6, 1],
    [6, 2, 1, 3, 5, 8, 9, 4, 7],
  ])
);

// Экспортировать функции для использования в другом файле (например, readAndSolve.js).
module.exports = {
  solve,
  isSolved,
  prettyBoard,
};
