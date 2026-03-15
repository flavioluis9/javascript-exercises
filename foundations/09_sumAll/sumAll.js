const sumAll = function(num1, num2) {
    const start = Math.min(num1, num2);
    const end = Math.max(num1, num2);
    
    // Calculate the number of integers in the range
    const count = end - start + 1;
    
    // Apply the arithmetic series formula
    return (count * (start + end)) / 2;
};

// Do not edit below this line
module.exports = sumAll;
