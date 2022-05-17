function matchingStrings(strings, queries) {
    const queryLen = queries.length;
    const stringLen = strings.length
    const result = new Array(queryLen).fill(0)
    for (let i = 0; i < queryLen; i++) {
        for (let j = 0; j < stringLen; j++) {
            if (strings[j] === queries[i]) {
                result[i]++
            }

        }

    }
    return result;

}



console.log(matchingStrings(["ab", "ab", "abc"], ["ab", "abc", "bc"]))