const repeatString = function(str, repeat) {
    if(repeat < 0){
        return "ERROR"; 
    }

    let result = "";  
    for(let i = 0; i < repeat; i++){
        result += str; 
    }
    return result; 
};

// Do not edit below this line
module.exports = repeatString;
