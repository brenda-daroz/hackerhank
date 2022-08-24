function birthday(s, d, m) {

    let chunks = []
    for (let i = 0; i < s.length; i++) {
        const sliced = s.slice(i, i + m)
        chunks.push(sliced)
    }
    console.log(chunks)

    let numberOfDivided = 0
    for (let j = 0; j < chunks.length; j++) {
        let chunk = chunks[j]
        let sum = chunk.reduce(function (a, b) { return a + b; });
        console.log(sum)
        if (d === sum) {
            numberOfDivided++
        }
    }
    return numberOfDivided
}

console.log(birthday([1, 2, 1, 3, 2], 3, 2))