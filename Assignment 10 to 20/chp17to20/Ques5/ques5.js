const fruits = ["apple", "banana", "mango", "orange", "strawberry"];
console.log(fruits.length);
for(let i = 0; i < fruits.length; i++){
    document.write(fruits[i] + "<br>");
  }
  document.write("<br>");
for(let i = 0; i < fruits.length; i++){
  document.write("Element at index " + i + " is " + fruits[i] + "<br>");
}