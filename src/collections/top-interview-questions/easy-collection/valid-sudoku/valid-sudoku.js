/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  const row_values = {
    0: {},
    1: {},
    2: {},
    3: {},
    4: {},
    5: {},
    6: {},
    7: {},
    8: {},
  };
  const col_values = {
    0: {},
    1: {},
    2: {},
    3: {},
    4: {},
    5: {},
    6: {},
    7: {},
    8: {},
  };

  const square_values = {
    0: {},
    1: {},
    2: {},
    3: {},
    4: {},
    5: {},
    6: {},
    7: {},
    8: {},
  };

  for (let row_index = 0; row_index < 9; row_index++) {
    for (let col_index = 0; col_index < 9; col_index++) {
      const value = board[row_index][col_index];

      if (value === ".") continue;

      let square_index = 0;

      if (row_index <= 2 && col_index <= 2) {
        square_index = 0;
      } else if (row_index <= 5 && col_index <= 2) {
        square_index = 1;
      } else if (row_index <= 8 && col_index <= 2) {
        square_index = 2;
      } else if (row_index <= 2 && col_index <= 5) {
        square_index = 3;
      } else if (row_index <= 5 && col_index <= 5) {
        square_index = 4;
      } else if (row_index <= 8 && col_index <= 5) {
        square_index = 5;
      } else if (row_index <= 2 && col_index <= 8) {
        square_index = 6;
      } else if (row_index <= 5 && col_index <= 8) {
        square_index = 7;
      } else if (row_index <= 8 && col_index <= 8) {
        square_index = 8;
      }

      if (
        row_values[row_index][value] === true ||
        col_values[col_index][value] === true ||
        square_values[square_index][value] === true
      ) {
        return false;
      }

      row_values[row_index][value] = true;
      col_values[col_index][value] = true;
      square_values[square_index][value] = true;
    }
  }

  return true;
};

module.exports = { isValidSudoku };
