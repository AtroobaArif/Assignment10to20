var subject1 = prompt("Enter marks obtained in subject 1");
var subject2 = prompt("Enter marks obtained in subject 2");
var subject3 = prompt("Enter marks obtained in subject 3");
var totalMarks = (300);
var marks1 = Number(subject1);
var marks2 = Number(subject2);
var marks3 = Number(subject3);
var total = Number(totalMarks);
var percentage = (marks1 + marks2 + marks3) / total * 100;
percentage = percentage.toFixed(2);
var grade, remarks;
if (percentage >= 80) {
  grade = "A one";
  remarks = "Excellent";
} else if (percentage >= 70) {
  grade = "A";
  remarks = "Good";
} else if (percentage >= 60) {
  grade = "B";
  remarks = "You need to improve";
} else if (percentage >= 50) {
  grade = "Fail";
  remarks = "Sorry";
} else {
  grade = "N/A";
  remarks = "No remarks";
}
document.write("<h1>Marks Sheet</h1>");
document.write("Total marks: " + total + "<br>");
document.write("Marks obtained: " + (marks1 + marks2 + marks3) + "<br>");
document.write("Percentage: " + percentage + "%<br>");
document.write("Grade: " + grade + "<br>");
document.write("Remarks: " + remarks);



