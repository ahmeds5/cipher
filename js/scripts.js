var sentence= prompt("Enter a sentence:");

var cipher = function(sentence){
var firstletter = sentence.charAt(0).toUpperCase();
var lastletter = sentence.charAt(sentence.length-2).toUpperCase();
return firstletter + lastletter;
}
// alert(cipher(sentence));


var cipher2 = function(sentence){
var firstletter = sentence.charAt(0).toUpperCase();
var lastletter = sentence.charAt(sentence.length-2).toUpperCase();
return lastletter + firstletter;
}
// alert(cipher2(sentence));


var cipherplus = function(sentence) {
  var result1 = cipher(sentence);
  var result2 = cipher2(sentence);
  return [result1, result2]
}

alert(cipherplus(sentence)[0]);
alert(cipherplus(sentence)[1]);
