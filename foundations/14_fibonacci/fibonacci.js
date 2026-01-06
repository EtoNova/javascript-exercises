const fibonacci = function(n) {
    if(typeof n !== 'number') n = parseInt(n); 

    if(n < 0)
        return "OOPS"; 

    if(n == 0)
        return 0; 

    if(n === 1) 
        return 1; 

    let first = 0; 
    let second = 1; 
    for(i = 1; i < n-1; i++){
        const temp = second; 
        second = first + second; 
        first = temp; 
    }
    return first + second; 
};

// Do not edit below this line
module.exports = fibonacci;
