/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  const places = {};

  for (let row_index = 0; row_index < matrix.length; row_index++) {
    for (let col_index = 0; col_index < matrix[row_index].length; col_index++) {
      const next_row_index = col_index;
      const next_col_index = matrix[row_index].length - 1 - row_index;

      const value = matrix[row_index][col_index];

      if (!places[next_row_index]) {
        places[next_row_index] = {};
      }

      places[next_row_index][next_col_index] = matrix[next_row_index][next_col_index];

      if (places[row_index] && places[row_index][col_index] !== undefined) {
        matrix[next_row_index][next_col_index] = places[row_index][col_index];
      } else {
        matrix[next_row_index][next_col_index] = matrix[row_index][col_index];
      }
    }
  }
};

module.exports = { rotate };
