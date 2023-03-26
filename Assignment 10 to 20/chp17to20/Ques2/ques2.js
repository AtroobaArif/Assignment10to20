const myArray = [[]];
myArray[0].push(1);
myArray[0].push(2);
const myMatrix = [
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1]
  ];
  document.write(myMatrix[2][3]); // prints the element in row 2, column 3 (which is 2)
  document.write("<br>");
  document.write( myMatrix[0][2]); // prints the element in row 0, column 2 (which is 2)
  document.write("<br>");
  myMatrix[0][2] = 5; // change the element in row 0, column 2 to 5
  document.write( myMatrix[0][2]); // prints the element in row 0, column 2 (which is now 5)
  
    