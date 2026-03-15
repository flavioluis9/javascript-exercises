const repeatString = function(phrase, times) {
    let repeatedString = "";
    
    for (i = 0; i < times; i++) {
        repeatedString += phrase;
    }

    return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
