function marsExploration(s) {
    let splitS = s.match(/.{3}/g);
    let count = 0
    for (let i = 0; i < splitS.length; i++) {
        const element = splitS[i];
        if (element.charAt(0) !== "S") {
            count++
        } if (element.charAt(1) !== "O") {
            count++
        } if (element.charAt(2) !== "S") {
            count++
        }

    }
    return count
}

console.log(marsExploration("SOSSPSSQSSOR"))