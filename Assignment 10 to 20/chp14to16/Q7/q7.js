var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

document.write("<h1>List of Qualifications:</h1>");
document.write("<ul>");

for (let i = 0; i < qualifications.length; i++) {
  document.write(`<li>${qualifications[i]}</li>`);
}

document.write("</ul>");
