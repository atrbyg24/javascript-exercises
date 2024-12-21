const removeFromArray = function(array, ...args) {
    const newArray = [];
    for (const a of array) {
        if (!args.includes(a)) {
            newArray.push(a);
        }
    }
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
