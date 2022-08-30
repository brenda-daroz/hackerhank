function migratoryBirds(arr) {


    let types = [0, 0, 0, 0, 0];
    for (let i = 0; i < arr.length; i++) {
        types[arr[i] - 1]++
    }
    console.log(res)
    return types.indexOf(Math.max(...types)) + 1;
}


console.log(migratoryBirds([1, 1, 2, 2, 3]))


let array = [5, 2, 1, 0, 0]
console.log(array)
console.log(array.indexOf(Math.max(...array)))


// function migratoryBirds(arr) {
//     let n = arr.length
//     let sortedArray = arr.sort(function (a, b) { return b - a })
//     let map = {};
//     let max = 0;
//     let result;

//     for (let item of sortedArray) {
//         map[item] = map[item] ? map[item] + 1 : 1

//         if (map[item] >= max) {
//             max = map[item];
//             result = item
//         }

//     }
//     return result
// }