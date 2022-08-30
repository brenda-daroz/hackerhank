function pageCount(n, p) {

    let begCount = parseInt(p / 2)
    let endCount = parseInt(n / 2 - (begCount))

    let lower = Math.min(begCount, endCount)
    return lower

}

console.log(pageCount(5, 4))