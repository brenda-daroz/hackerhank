let findMedianSortedArrays = function (nums1, nums2) {
    let concatNums = nums1.concat(nums2);
    let sortedNums = concatNums.sort(function (a, b) {
        return a - b;
    })
    let middle = sortedNums.length / 2;

    if (sortedNums.length % 2 === 0) {
        return (sortedNums[middle] + sortedNums[middle - 1]) / 2;
    } else {
        return sortedNums[Math.round((sortedNums.length - 1) / 2)]
    }

};

console.log(findMedianSortedArrays([1, 8, 4, 6, 5, 3], [2]))
console.log(findMedianSortedArrays([3], [-2, -1]))