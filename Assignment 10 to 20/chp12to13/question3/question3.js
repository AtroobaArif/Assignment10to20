function isVowel(char) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    if (vowels.includes(char.toLowerCase())) {
      return true;
    } else {
      return false;
    }
  }
  console.log(isVowel('a'));  
  console.log(isVowel('b'));  