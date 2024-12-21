const repeatString = function(s,n) {
    if (n < 0) {
        return 'ERROR'
    }
    else if (n == 0) {
        return ''
    }
    else {
        let repeats = ''
        for (let i = 0; i < n; i++){
            repeats += s
        }
        return repeats
    }
};

// Do not edit below this line
module.exports = repeatString;
