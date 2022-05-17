function goodVsEvil(good, evil) {
    let goodValues = [1, 2, 3, 3, 4, 10]
    let evilValues = [1, 2, 2, 2, 3, 5, 10]
    let goodArray = good.split(" ")
    let evilArray = evil.split(" ")

    let sumGood = 0;
    for (let i = 0; i < goodValues.length; i++) {
        const productGood = (goodValues[i] * goodArray[i]);
        sumGood += productGood;
    };

    let sumEvil = 0;
    for (let i = 0; i < evilValues.length; i++) {
        const productEvil = (evilValues[i] * evilArray[i]);
        sumEvil += productEvil;
    };
    console.log(sumGood, sumEvil)
    if (sumGood > sumEvil) {
        console.log("Battle Result: Good triumphs over Evil")
    } else if (sumGood < sumEvil) {
        console.log("Battle Result: Evil eradicates all trace of Good")
    } else {
        console.log("Battle Result: No victor on this battle field")
    };
};


goodVsEvil('1 1 1 1 1 1', '1 1 1 1 1 1 1')
goodVsEvil('0 0 0 0 0 10', '0 1 1 1 1 0 0')
goodVsEvil('1 0 0 0 0 0', '1 0 0 0 0 0 0')
