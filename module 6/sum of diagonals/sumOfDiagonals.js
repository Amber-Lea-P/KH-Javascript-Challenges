let matrixExample = [
    [1, 2, 3, 4],
    [4, 5, 6, 5],
    [7, 8, 9, 7],
    [7, 8, 9, 7]
  ];
  
  function sumUpDiagonals(matrix) {
    // creating an object called sumDiagonals
    let sumDiagonals = { primary: 0, secondary: 0 };
  
    // creating a variable to get the length of the matrix
    let matrixLength = matrix.length;
  
    // iterating the matrix both from to sum from left and right diagnals
    // primary = 1 + 5 + 9 + 7  = 22
    // secondary = 4 + 6 + 8 + 7 = 25
  
    for (var i = 0; i < matrixLength; i++) {
      sumDiagonals.primary += matrix[i][i];
      sumDiagonals.secondary += matrix[i][matrixLength - i - 1];
    }
  
    // return the object
    return sumDiagonals;
  }
  
  console.log(sumUpDiagonals(matrixExample));