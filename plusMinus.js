
function plusMinus(arr) {
    let positive = 0
    let negative = 0
    let zero = 0
    let arrLen = arr.length

    arr.forEach(element => {
        if (element > 0)
            positive++;
        else if (element < 0)
            negative++;
        else
            zero++;
    })

    let counter = [(positive / arrLen).toFixed(6),
    (negative / arrLen).toFixed(6),
    (zero / arrLen).toFixed(6)]

    let string = counter.join("\n")
    return string
}


console.log(plusMinus([-1, 1, 5, -5, 2, 3, 5, 6, 0]))
console.log(plusMinus([-4, 3, -9, 0, 4, 1]))