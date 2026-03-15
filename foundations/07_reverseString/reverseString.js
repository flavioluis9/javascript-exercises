const reverseString = function(str) {
    let reversed = "";
    
    // Start at the last index and count down to 0
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    
    return reversed;
};

// Do not edit below this line
module.exports = reverseString;
