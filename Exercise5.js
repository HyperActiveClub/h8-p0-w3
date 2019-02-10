function palindrome(kata) {
    var bener = 0;
    var balik = kata.length - 1;
  
      if (kata[bener++] === kata[balik--]) {
  
          return true
        } else { 
          return false;
          }
      }
  
  // TEST CASES
  console.log(palindrome('katak')); // true
  console.log(palindrome('blanket')); // false
  console.log(palindrome('civic')); // true
  console.log(palindrome('kasur rusak')); // true
  console.log(palindrome('mister')); // false