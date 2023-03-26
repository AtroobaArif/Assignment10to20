
let names = ["Alice", "Bob", "Charlie"];
let scores = [420, 380, 450];
let percentages = [];
for (let i = 0; i < scores.length; i++) {
  let percentage = (scores[i] / 500) * 100;
  percentages.push(percentage);
}
for (let i = 0; i < names.length; i++) {
  console.log(`${names[i]} scored ${scores[i]} out of 500, which is ${percentages[i]}%`);
}
