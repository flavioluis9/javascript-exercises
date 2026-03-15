const removeFromArray = function(array, ...target) {

    return array.filter(item => !target.includes(item));

};

// Do not edit below this line
module.exports = removeFromArray;
