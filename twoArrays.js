function twoArrays(k, A, B) {

    let sortA = A.sort((a, b) => a - b)
    console.log(sortA)
    let sortB = B.sort((a, b) => b - a)
    console.log(sortB)
    for (let i = 0; i < A.length; i++) {
        if (sortA[i] + sortB[i] < k) {
            return "NO"
        }
    }
    return "YES"
}

console.log(twoArrays(10, [2, 1, 3], [7, 8, 9]))

