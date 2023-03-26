const A = [24, 53, 78, 91, 12];

document.write("The array is: " + A + "<br>");
let largest = A[0];
for (let i = 1; i < A.length; i++) {
  if (A[i] > largest) {
    largest = A[i];
  }
}
document.write("<br>");
document.write("The largest number in the array is " + largest);