function maximumPerimeterTriangle(sticks) {
    let sortedSticks = sticks.sort((a, b) => b - a);
    console.log(sortedSticks)
    let sum = 0, elements = [];
    for (let i = 2; i < sortedSticks.length; i++) {
        if (sortedSticks[i - 2] < (sortedSticks[i - 1] + sortedSticks[i])) {
            let tempSum = sortedSticks[i] + sortedSticks[i - 1] + sortedSticks[i - 2];
            if (tempSum > sum) {
                sum = tempSum;
                elements = [sortedSticks[i], sortedSticks[i - 1], sortedSticks[i - 2]];
            }
        }
    }
    return elements.length ? elements : [-1]
}


console.log(maximumPerimeterTriangle([1, 2, 3]))