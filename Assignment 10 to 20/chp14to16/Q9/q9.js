let colors = ["red", "green", "blue"];
document.write(`<p>Original Array: ${colors}</p>`);
let colorToAddAtStart = prompt("Enter a color to add at the beginning:");
colors.unshift(colorToAddAtStart);
document.write(`<p>Array after adding ${colorToAddAtStart} at the beginning: ${colors}</p>`);
let colorToAddAtEnd = prompt("Enter a color to add at the end:");
colors.push(colorToAddAtEnd);
document.write(`<p>Array after adding ${colorToAddAtEnd} at the end: ${colors}</p>`);
colors.unshift("yellow", "orange");
document.write(`<p>Array after adding yellow and orange at the beginning: ${colors}</p>`);
colors.shift();
document.write(`<p>Array after deleting the first color: ${colors}</p>`);
colors.pop();
document.write(`<p>Array after deleting the last color: ${colors}</p>`);
let indexToAdd = parseInt(prompt("Enter the index at which you want to add a color:"));
let colorToAdd = prompt("Enter a color to add:");
colors.splice(indexToAdd, 0, colorToAdd);
document.write(`<p>Array after adding ${colorToAdd} at index ${indexToAdd}: ${colors}</p>`);
let indexToDelete = parseInt(prompt("Enter the index at which you want to delete color(s):"));
let numberOfColorsToDelete = parseInt(prompt("Enter the number of colors to delete:"));
colors.splice(indexToDelete, numberOfColorsToDelete);
document.write(`<p>Array after deleting ${numberOfColorsToDelete} colors from index ${indexToDelete}: ${colors}</p>`);
