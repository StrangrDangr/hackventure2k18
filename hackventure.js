var question = 0
document.getElementById("question").innerHTML = "You are walking in woods. You see a house. What do you do?";
var question = 1
if (question === 1) {
  document.getElementById("choices").innerHTML = "Go closer"
} else if (question === 2) {
  document.getElementById("choices").innerHTML = "Not ready yet!"
} else {
  console.log("Something went wong!")
}
console.log(question)
