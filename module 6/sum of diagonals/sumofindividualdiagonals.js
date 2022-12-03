function sumOfDiagonals(matrix) {
    const len = matrix.length;
    let diagonalSum = 0;
    let counterDiagonalSum = 0;
    for (let i = 0; i < len; i++) {
      diagonalSum += matrix[i][i];
      counterDiagonalSum += matrix[i][len - i - 1];
    }
  
    console.log("sum of diagonal elements --- ", diagonalSum)
    console.log("sum of counter diagonal elements ---", counterDiagonalSum)
  }
  sumOfDiagonals([
    [1, 8, 7],
    [2, 9, 6],
    [3, 4, 5]
  ]);