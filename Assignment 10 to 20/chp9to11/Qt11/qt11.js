let num1 = parseInt(prompt("Enter the first number:"));
let num2 = parseInt(prompt("Enter the second number:"));
let operation = prompt("Enter the operation (+, -, *, /, %):");

if (operation === "+") {
  let result = num1 + num2;
  console.log(`${num1} + ${num2} = ${result}`);
} else if (operation === "-") {
  let result = num1 - num2;
  console.log(`${num1} - ${num2} = ${result}`);
} else if (operation === "*") {
  let result = num1 * num2;
  console.log(`${num1} * ${num2} = ${result}`);
} else if (operation === "/") {
  let result = num1 / num2;
  console.log(`${num1} / ${num2} = ${result}`);
} else if (operation === "%") {
  let result = num1 % num2;
  console.log(`${num1} % ${num2} = ${result}`);
} else {
  console.log("Invalid operation");
}