const strNum = prompt("Enter the number for which you want to print the multiplication table: ");
const strLength = prompt("Enter the length of the table: ");

const num = Number(strNum);
const length = Number(strLength);

document.write(`Multiplication table for ${num}:<br>`);

for(let i = 1; i <= length; i++){
  document.write(`${num} x ${i} = ${num * i}<br>`);
}