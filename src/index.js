module.exports = function toReadable(number) {
    const objectWords = {
        // "0": "zero",
        "1": "one",
        "2": "two",
        "3": "three",
        "4": "four",
        "5": "five",
        "6": "six",
        "7": "seven",
        "8": "eight",
        "9": "nine",
        "10": "ten",
        "11": "eleven",
        "12": "twelve",
        "13": "thirteen",
        "14": "fourteen",
        "15": "fifteen",
        "16": "sixteen",
        "17": "seventeen",
        "18": "eighteen",
        "19": "nineteen",
        "20": "twenty",
        "30": "thirty",
        "40": "forty",
        "50": "fifty",
        "60": "sixty",
        "70": "seventy",
        "80": "eighty",
        "90": "ninety"
    }

    let arr = number.toString()
    let lengthStr = arr.length;

    let str = '';

    if (lengthStr === 1) {

        str = objectWords[arr];
    } else if (lengthStr === 2) {

        if (objectWords[arr]) {

            str = objectWords[arr];
        } else {

            if (arr[0] != "0") str += objectWords[arr[0] + '0'];
            if (arr[1] != "0") str += " " + objectWords[arr[1]];
        }
    } else if (lengthStr === 3) {
        str += objectWords[arr[0]] + " hundred"
        if (objectWords[arr[1] + arr[2]]) {
            str += " " + objectWords[arr[1] + arr[2]];
        } else {

            if (arr[1] != '0') str += " " + objectWords[arr[1] + '0'];
            if (arr[2] != '0') str += " " + objectWords[arr[2]];
        }
    }

    if (arr == "0") str = 'zero';
    return str;
}
