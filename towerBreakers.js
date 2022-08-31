function towerBreaker(n, m) {
    if (m === 1) {
        return 2
    } else if (n % 2 === 0) {
        return 2
    } else return 1
}

console.log(towerBreaker(2, 6))