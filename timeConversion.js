// let time = "07:05:45PM"
// console.log(time.match(/[a-zA-Z]+|[0-9]+/g))

function timeConversion(s) {
    splittedS = s.match(/[a-zA-Z]+|[0-9]+/g)
    for (let i = 0; i < splittedS.length; i++) {

        if (splittedS[3] === "PM" && splittedS[0] !== "12") {
            return `${parseInt(splittedS[0]) + 12}:${splittedS[1]}:${splittedS[2]}`
        } else if (splittedS[3] === "PM" && splittedS[0] === "12") {
            return `${splittedS[0]}:${splittedS[1]}:${splittedS[2]}`
        } else if (splittedS[3] === "AM" && splittedS[0] === "12") {
            return `${"00"}:${splittedS[1]}:${splittedS[2]}`
        } else {
            return `${splittedS[0]}:${splittedS[1]}:${splittedS[2]}`
        }
    }
}

console.log(timeConversion("12:05:45AM"))