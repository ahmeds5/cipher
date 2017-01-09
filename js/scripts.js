var sentence= prompt("Enter a sentence:");

var cipher = function(sentence){
var firstletter = sentence.charAt(0).toUpperCase();
var lastletter = sentence.charAt(sentence.length-1).toUpperCase();
return firstletter + lastletter;
}
// alert(cipher(sentence));


var cipher2 = function(sentence){
var firstletter = sentence.charAt(0).toUpperCase();
var lastletter = sentence.charAt(sentence.length-1).toUpperCase();
return lastletter + firstletter;
}
// alert(cipher2(sentence));


var cipherplus = function(sentence) {
  var result1 = cipher(sentence);
  var result2 = cipher2(sentence);
  return sentence + result2
}
// alert(cipherplus(sentence));

var cipherupgrade = function(sentence){
  var index= Math.floor(sentence.length/2);
  return sentence.charAt(index-1) + cipherplus(sentence)
}

// var Input = cipherupgrade(sentence);

var reverse = function(ab){
  return ab.split("").reverse().join("")
}

alert(reverse(cipherupgrade(sentence)));
