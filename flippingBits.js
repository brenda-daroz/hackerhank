function flippingBits(n) {
    const stringN = n.toString(2)
    const bit = stringN.padStart(32, 0)

    let flippedBit = ''

    for (let i = 0; i < bit.length; i++) {
        flippedBit += bit[i] === "0" ? '1' : "0"
    }

    console.log(flippedBit)

    const flippedN = parseInt(flippedBit, 2)

    return flippedN

}

console.log(flippingBits(2147483647))

