console.log("jai mata di");
const table = document.getElementById("edutable");
//console log contents of table
console.log(table);
document.getElementById("submit-btn").addEventListener("click", fun);
function fun() {
  console.log(document.getElementsByTagName("label").length);
  var qualification = document.getElementById("qualification").value;
  var board = document.getElementById("board").value;
  var percentage = document.getElementById("percentage").value;
  var year = document.getElementById("year").value;
  console.log(qualification, board, percentage, year.length);
//   if (
//     qualification != "" &&
//     board != "" &&
//     percentage != "" &&
//     year.length == 4 &&
//     percentage <= 100 &&
//     percentage >= 0
//   )
//   console.log(document.getElementById("edutable"));
  console.log(document.getElementById("edutable").innerText);

//     document.getElementById(
//       "edutable"
//     ).innerHTML += `<tr> <td>${qualification}</td> <td>${board}</td> <td>${percentage}</td> <td>${year}</td> </tr>`;
//   else alert("Please enter valid details");
}
