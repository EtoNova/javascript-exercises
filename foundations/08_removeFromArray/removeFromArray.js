const removeFromArray = function(arr, ...removeArgs) {
    return arr.filter(value => !removeArgs.includes(value)); 
};

// Do not edit below this line
module.exports = removeFromArray;
