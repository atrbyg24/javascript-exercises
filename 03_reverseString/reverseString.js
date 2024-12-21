const reverseString = function(words) {
    reversed = words.split()
    result = ''
    for (let i = reversed.length - 1; i >= 0; i--){
        reverse = ''
        for (let j = reversed[i].length -1; j >= 0; j --) {
            reverse += reversed[i][j]
        }
        if (i == 0) {
            result += reverse
        }
        else {
            result += ' ' + reverse
        }
    }
    return reverse
};

// Do not edit below this line
module.exports = reverseString;
