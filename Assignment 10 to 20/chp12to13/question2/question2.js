let num1 = parseInt(prompt("Enter the first integer:"));
let num2 = parseInt(prompt("Enter the second integer:"));

if (num1 > num2) {
  console.log(num1 + " is larger");
} else if (num2 > num1) {
  console.log(num2 + " is larger");
} else {
  console.log("The two integers are equal");
}