
function countingValleys(steps, path) {
    let strPath = path.split('')
    console.log(strPath)
    let count = 0
    let result = 0
    for (let i = 0; i < steps; i++) {
        if (count === 0 && strPath[i] === "D") {
            count -= 1
            result += 1
        } else if (strPath[i] === "D") {
            count -= 1
        } else {
            count += 1
        }
    }
    return result
}

console.log(countingValleys(14, 'UUUDDDDDUUUDDU'))





