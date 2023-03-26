const A = ["cake", "apple pie", "cookie", "chips", "patties"];

const userInput = prompt("Welcome to Cookie Corner. What you want to order:");

let found = false;
for (let i = 0; i < A.length; i++) {
  if (A[i] === userInput) {
    found = true;
    break;
  }
}

if (found) {
  alert(userInput + " is available in the list at index " + A.indexOf(userInput));
} else {
  alert("We are Sorry, " + userInput + " is not available in our bakery");
}