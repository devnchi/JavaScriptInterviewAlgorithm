/*
Question: How will you verify a word as palindrome?

Answer: if you reverse a word and it becomes same as the previous word, it is called palindrome.
*/

function isPalindrome(str){
  var i, len = str.length;
  for(i =0; i<len/2; i++){
    if (str[i]!== str[len -1 -i])
       return false;
  }
  return true;
}

> isPalindrome('madam')
  = true
> isPalindrome('toyota')
  = false
  
//methods applied
function checkPalindrom(str) {
  return str == str.split('').reverse().join('');
}
 
