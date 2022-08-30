function rotateLeft(d, arr) {

    let chunk = arr.splice(0, d)
    arr.push(chunk);
    return arr.flat()

}

console.log(rotateLeft(2, [1, 2, 3, 4, 5]))