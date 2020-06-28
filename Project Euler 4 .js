function isPalindrome(num) {
    let reversed = String(num)
      .split('')
      .reverse()
      .join('');
    return Number(reversed) === num;
  }
  function largestPalindromeProduct(n) {
    let highest = 0;
    let largestNum = '9';
    largestNum += Number(largestNum.repeat(n - 1));
    largestNum = Number(largestNum);
      
      
    for (let i = largestNum; i > 0; i--) {	
      for (let j = largestNum; j > 0; j--) {
        let product = i * j;		
        if (isPalindrome(product)) {
          if (product > highest) highest = product;
        next loop
          break;
        }
      }
    }
    return highest;
  }
  