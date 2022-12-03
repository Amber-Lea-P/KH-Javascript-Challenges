//this is if, they do not want the middle number to be calculated twice.

var diagonalSum = function(mat) {
    let length = mat.length - 1,
        sum = 0
    for (let i = 0; i < mat.length; i++){
      sum += mat[i][i] + mat[i][length-i]
    }
    if(length % 2 === 0) sum -= mat[length/2][length/2]
    return sum
  };
  
  const matrixArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
  console.log(diagonalSum(matrixArray));

  //this is if, the want the center number to be calculated twice

  var diagonalSum = function(mat) {
    let length = mat.length - 1,
        sum = 0
    for (let i = 0; i < mat.length; i++){
      sum += mat[i][i] + mat[i][length-i]
    }
    return sum
  };
  
  const matrixArrayB = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]];
  console.log(diagonalSum(matrixArrayB));