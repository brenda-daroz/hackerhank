function countingSort(arr) {
    let countsArr = Array(100).fill(0);

    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        ++countsArr[element]
    }
    return countsArr;
}

console.log(countingSort([0, 6, 2, 3, 4, 4, 4, 5, 6, 7, 8, 8,]))