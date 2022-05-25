function pangrams(s) {
    let lowerS = s.toLowerCase();
    let letterArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    for (let i = 0, l = letterArray.length; i < l; i++) {
        if (lowerS.indexOf(letterArray[i]) == -1) {
            return "not pangram"

        }
    }
    return "pangram"
}



pangrams('We promptly judged antique ivory buckles for the next prize')