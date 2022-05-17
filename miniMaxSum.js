
function miniMaxSum(arr) {
    const sorted = [...arr].sort()
    const reversed = [...sorted].reverse()
    console.log(arr)

    console.log(sorted)
    console.log(reversed)

    let totalMax = 0;
    let totalMin = 0;
    for (let i = 1; i < sorted.length; i++) {
        totalMax += sorted[i];
        // console.log(sorted)
    };

    for (let i = 1; i < reversed.length; i++) {
        totalMin += reversed[i];
        // console.log(reversed)
    };
    console.log(totalMin, totalMax)
}

miniMaxSum([5, 5, 5, 5, 5])
miniMaxSum([1, 2, 3, 4, 5])