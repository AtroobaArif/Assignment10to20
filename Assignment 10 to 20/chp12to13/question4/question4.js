var aeiou = prompt("Enter a character:");
var isVowel = false;

if (input.length == 1) {
  var vowels = ["a", "e", "i", "o", "u"];

  for (var i = 0; i < vowels.length; i++) {
    if (aeiou.toLowerCase() == vowels[i]) {
      isVowel = true;
      break;
    }
  }
}

if (isVowel) {
  document.write(aeiou + " is a vowel.");
} else {
  document.write(aeiou + " is not a vowel.");
}