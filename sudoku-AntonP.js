const fs = require("fs");
/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */
function solve(boardString) {
  // Перевод числовых символов в числа и добавления в массив
  let arrayBoardString = [];
  for (let i = 0; i < boardString.length; i++) {
    boardString[i] === "-"
      ? arrayBoardString.push(boardString[i])
      : arrayBoardString.push(Number(boardString[i]));
  }
  // Создание двумерного массива из массива строк и чисел
  let bivarriateArray = [];
  for (let i = 0; i < arrayBoardString.length - 1; i = i + 9) {
    bivarriateArray.push(arrayBoardString.slice(i, i + 9));
  }
  // Создание накопительной с незаполненными элементами
  const findSymbol = (bivarriateArray) => {
    for (let i = 0; i < bivarriateArray.length; i++) {
      for (let j = 0; j < bivarriateArray[i].length; j++) {
        if (bivarriateArray[i][j] === "-") {
          return [i, j];
        }
      }
    }
    return null;
  };

  // Замена символов на числа и перевод их в символы чисел
  const getNumber = () => {
    const allNumb = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const positionSymbol = findSymbol(bivarriateArray);
    if (positionSymbol === null) {
      return true;
    }
    for (let i = 0; i < bivarriateArray.length; i++) {
      for (let j = 0; j < bivarriateArray[i].length; i++) {
        if (bivarriateArray[i][j] === )
        
      }
      const positionNumb = i.toString();
    }
  };
  return bivarriateArray;
}
// /**
//  * Принимает игровое поле в том формате, в котором его вернули из функции solve.
//  * Возвращает булевое значение — решено это игровое поле или нет.
//  */
function isSolved(board) {

}

// /**
//  * Принимает игровое поле в том формате, в котором его вернули из функции solve.
//  * Возвращает строку с игровым полем для последующего вывода в консоль.
//  * Подумай, как симпатичнее сформировать эту строку.
//  */
function prettyBoard(board) {
  let arrayBoardString = [];
  for (let i = 0; i < boardString.length; i++) {
    for (let j = 0; j < boardString[i].length; j++) {
      if (typeof(boardString[i][j]) === Number) {
        arrayBoardString.push(boardString[i][j]);
      }
    }
    return prettyBoard(board);
  }
}

// // Экспортировать функции для использования в другом файле (например, readAndSolve.js).
module.exports = {
  solve,
  isSolved,
  prettyBoard,
};
