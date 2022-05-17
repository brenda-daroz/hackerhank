function breakingRecords(scores) {
    let max = 0
    let min = 0
    let most = scores[0]
    let least = scores[0]
    for (let i = 1; i < scores.length; i++) {

        if (scores[i] > most) {
            max += 1
            most = scores[i]
        }
        if (scores[i] < least) {
            min += 1
            least = scores[i]
        }
        return [max, min]
    }

    let result = breakingRecords(scores)
    result.join(' ') + '\n'
}



console.log(breakingRecords([12, 24, 10, 24]))