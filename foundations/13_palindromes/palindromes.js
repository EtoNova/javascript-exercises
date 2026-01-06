const palindromes = function (str) {
    const validChars = "abcdefghijklmnopqrstuvwxyz0123456789"
    
    const newStr = str
        .toLowerCase()
        .split("")
        .filter((letter) => validChars
        .includes(letter))
        .join('');
    
    const reverseStr = newStr.split("").reverse().join("")

  return newStr === reverseStr; 
};

// Do not edit below this line
module.exports = palindromes;
