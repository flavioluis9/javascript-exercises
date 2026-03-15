const leapYears = function(year) {
    // Check if divisible by 4
    // AND (not divisible by 100 OR is divisible by 400)
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
};

// Do not edit below this line
module.exports = leapYears;
