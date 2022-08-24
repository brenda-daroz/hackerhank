function sockMerchant(n, ar) {

    let sortAr = ar.sort((a, b) => a - b)
    console.log(sortAr)
    let pairs = 0

    for (let i = 0; i < n - 1; i++) {
        let count = 0
        for (let j = i + 1; j < n; j++) {
            if (sortAr[i] === sortAr[j]) {
                count++
            }
        }
        if (count % 2 != 0) {
            pairs++
        }

    }
    return pairs

}

console.log(sockMerchant(15, [6, 5, 2, 3, 5, 2, 2, 1, 1, 5, 1, 3, 3, 3, 5]))