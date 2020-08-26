// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false
/** my solution
function palindrome(str) {
 return  (str.trim() === reverse(str)) ? true : false;
} **/

/** solution one
function reverse(str) {
  return str.split('').reverse().join('');
}

function palindrome(str) {
 const reversed = str.split('').reverse().join('');
 return str === reversed;
} **/


function palindrome(str) {
  return str.split('').every((char,i)=>{
      char === str[str.length-i-1];
  });

}
module.exports = palindrome;


/**PHP Solution
  $str = "abcba";
  function palindrome($str)
  {
    return $str === = strrev($str);
  }
  echo (palindrome($str)) ? true : false;
  **/
