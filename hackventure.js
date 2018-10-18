window.onload =function(){
  //new object to handle any & all information about the current state
	var theSitch = {node:0,question:"You are walking in woods. You see a house. What do you do?",choices:["Go closer","Not ready yet!"]};
	
  //function that prints the current question and choices from the current sitch (the part for the choices needs added html and probs a loop
  function printSitch(){
		document.getElementById("question").innerHTML = theSitch.question;
		document.getElementById("choices").innerHTML = theSitch.choices[0] + "<br>" + theSitch.choices[1];
	};
	printSitch();
	
	
	/*document.getElementById("question").innerHTML = "You are walking in woods. You see a house. What do you do?";
	var question = 1
	if (question === 1) {
		document.getElementById("choices").innerHTML = "Go closer" //needs other choice
	} else if (question === 2) {
		document.getElementById("choices").innerHTML = "Not ready yet!"
	} else {
		console.log("Something went wong!")
	}*/
	console.log(theSitch)
	//function for choice click
}
