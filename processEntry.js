function processEntry(entry) {
    let splitted = entry.split(";")

    let operation = splitted[0]
    let type = splitted[1]
    let string = splitted[2]

    if (operation === "S") {
        return processOperationS(type, string)
    }
    if (operation === "C") {
        return processOperationC(type, string)
    }
}

function processOperationS(type, string) {
    if (type === "C" || type === "V") {
        return string.replace(/([a-z])([A-Z])/g, '$1 $2').toLowerCase();
    } else {
        let x = string.replace(/[\W]/gi, ' ');
        return x.replace(/([a-z])([A-Z])/g, '$1 $2').toLowerCase();
    }
}

function processOperationC(type, string) {
    if (type === "C") {
        return string.replace(/(?:_| |\b)(\w)/g, function (string, p1) { return p1.toUpperCase() })
    } else if (type === "V") {
        return string.split(' ').map(function (word, index) {
            if (index == 0) {
                return word.toLowerCase();
            }
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        }).join('');
    } else {
        return string.split(' ').map(function (word, index) {
            if (index == 0) {
                return word.toLowerCase();
            }
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        }).join('') + "()"

    }
}

function processData(input) {

    let entries = input.split("\n")
    for (let i = 0; i < entries.length; i++) {
        const entry = entries[i];
        console.log(processEntry(entry))
    }
}

processData("C;V;can of coke\nS;M;sweatTea()\nS;V;epsonPrinter\nC;M;santa claus\nC;C;mirror")