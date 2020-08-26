// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  if ( n === 0)
   return 0;
  var numStr = n.toString();
  var reverse = numStr.split('').reverse().join('');

  // if ( n < 0 ) {
  //   return parseInt(reverse) * mat
  // }
  return parseInt(reverse) * Math.sign(n);
}


//PHP implementation
public function reverseInt($n) : int
{
  if ($n == 0) {
      return 0;
  }

  $str = strval(abs($n));

  $reverse = strrev($str);

  return $reverse * (($n>0) ? 1 : -1);
}

module.exports = reverseInt;
