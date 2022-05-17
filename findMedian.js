


function findMedian(arr) {

    let middleNum = Math.floor(arr.length / 2);
    // arr = [...arr].sort((a, b) => a - b);
    // console.log(arr)
    if (arr.length % 2 !== 0) {
        return arr[middleNum]
    } else {
        return arr[middleNum - 1] + arr[middleNum] / 2
    };
};


console.log(findMedian([1, 2, 3, 5, 5]))