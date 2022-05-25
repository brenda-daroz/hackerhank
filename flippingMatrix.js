function flippingMatrix(matrix) {
    let matrixDiv = matrix.length / 2
    let max = 0
    let total = 0

    for (let row = 0; row < matrixDiv; row++) {
        for (let col = 0; col < matrixDiv; col++) {
            max = Number.MIN_VALUE
            max = Math.max(matrix[row][col], max)
            max = Math.max(matrix[row][2 * matrixDiv - col - 1], max)
            max = Math.max(matrix[2 * matrixDiv - row - 1][col], max)
            max = Math.max(matrix[2 * matrixDiv - row - 1][2 * matrixDiv - col - 1], max)

            total += max

        }
    }
    return total
}

console.log(flippingMatrix([[1, 2], [3, 2]]))