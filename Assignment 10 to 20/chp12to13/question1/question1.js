let input = prompt("Enter a character:");
let ascii = input.charCodeAt(0);

if (ascii >= 48 && ascii <= 57) {
  console.log(input + " is a number");
} else if (ascii >= 65 && ascii <= 90) {
  console.log(input + " is an uppercase letter");
} else if (ascii >= 97 && ascii <= 122) {
  console.log(input + " is a lowercase letter");
} else {
  console.log(input + " is not a valid input");
}