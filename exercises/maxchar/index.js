// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const chars = {};
    let max = 0;
    let maxChar = '';

    for (let char of str) {
        if (!chars[char]) {
            chars[char] = 1;
        } else {
            chars[char]++;
        }
    }

    for ( let char in chars) {

        if(chars[char] > max ) {
            max = char[char];
            maxChar = char;
        }
    }

    return maxChar;
}


// <?php
//   $str = "abcccccccd";
//   $strArray = str_split($str);
//   $chars = [];
//   $max = 0;
//   $maxChar = null;
 
  
//   foreach($strArray as $char) {
//      if(!isset($chars[$char])) {
//          $chars[$char] = 1;
//      }  else  {
//          $chars[$char]++;
//      }
//   }
  
//   foreach ($chars as $key => $value) {
//       if($value > $max) {
//           $max = $value;
//           $maxChar = $key;
//       }
//   }
  
//   print($maxChar);

//golang
// str := "abcccccccd"   
// 	strSplice := strings.Split(str,"")
// 	max := 0
// 	maxChar := ""
	
// 	m := make(map[string]int)
// 	for _, v := range strSplice {
	
// 	 if m[v] == 0 {
// 	      m[v] = 1
// 	  } else {
// 	     m[v]++
// 	   } 
// 	}
	
	
// 	for k,v := range m {
// 	  if v > max {
// 	     max = v
// 	     maxChar = k
// 	  }
// 	}
	
//      fmt.Println(maxChar)
module.exports = maxChar;
