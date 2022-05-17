function lonelyinteger(a) {
    result = 0
    for (let i = 0; i < a.length; i++) {
        console.log(result, a[i], result ^ a[i])
        result = result ^ a[i]
    }
    return result
}

console.log(lonelyinteger([1, 2, 3, 4, 3, 2, 1]))