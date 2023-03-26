const A = [24, 53, 78, 91, 12];

document.write("The array is: " + A + ",");

let smallest = A[0];

for (let i = 1; i < A.length; i++) {
  if (A[i] < smallest) {
    smallest = A[i];
  }
}
document.write("<br>");
document.write("The smallest number in the array is " + smallest);