var getNthLexicographicPermutation = function(sortedAvailableDigits, n){
    var length = sortedAvailableDigits.length;
    if(length == 1){
        return (n == 1) ? sortedAvailableDigits[0] : null;
    }
    
    var combinationsWithoutFirstDigit = 1;
    for(var i = 2; i < length; i++){
        combinationsWithoutFirstDigit *= i;
    }
    
    var firstDigitIndex = Math.floor((n-1) / combinationsWithoutFirstDigit);
    if(firstDigitIndex >= length){
        return null;
    }
    return sortedAvailableDigits.splice(firstDigitIndex, 1) + getNthLexicographicPermutation(sortedAvailableDigits, n - (firstDigitIndex * combinationsWithoutFirstDigit));
};

var digits = ['0', '1', '2'];


console.log(getNthLexicographicPermutation(digits, 6));

digits_0_9 = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

console.log(getNthLexicographicPermutation(digits_0_9, 1000000));