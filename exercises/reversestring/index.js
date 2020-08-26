              // --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

/**my solution **/
// function reverse(str) {
//   str = str.split("").trim();
//   var reverse="";
//   for (var i = str.length-1; i >= 0; i--)
//   {
//     reverse+=str[i];
//   }
//   return reverse.trim();
// }
/**first solution **/
// function reverse(str) {
//   // const arr = str.split('');
//   // arr.reverse();
//   // return arr.join('');
//   return str.split('').reverse().join('');
// }

/**second solution **/
function reverse(str) {
  //debugger;
  let reversed = '';
  for ( let character of str) {
    reversed = character + reversed;
  }
  return reversed;
}

//reverse("abcd");
module.exports = reverse;

/**  PHP solution
$str = "abcd";
$str = str_split($str);
$reversed = "";

for ($i=0;$i<count($str);$i++) {

  $reversed = $str[$i] . $reversed;

}

echo $reversed;
or echo strrev($str);**/

//Golang
//
