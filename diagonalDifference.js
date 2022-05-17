function diagonalDifference(arr) {
    let sum1 = 0
    let sum2 = 0

    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i][i])
        sum1 += arr[i][i];
        sum2 += arr[arr.length - 1 - i][i]
    }

    return Math.abs(sum1 - sum2)
}


console.log(diagonalDifference([[11, 2, 4], [4, 5, 6], [10, 8, -12]]))


// const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// let sum = 0
// let sumReversed
// for (x = 0; x < matrix.length; x++) {
//     for (y = 0; y < matrix[x].length; y++) {
//         if (x === y) {
//             sum += matrix[x][y];
//         }
//     }
// }
// console.log(sum)

// matrixCopy = [...matrix]

// matrixCopy.forEach(element => {
//     let reversed = element.reverse()
//     console.log(reversed)

// });





