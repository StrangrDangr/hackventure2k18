window.onload =function(){
	/*var theSitch = {node:0,question:"You are walking through the woods. The full moon hangs heavy in the sky.<br><br>You see a house with a light in the window. You've never seen a house in this part of the woods.<br><br>What do you do?",choices:["Get closer","Wait","Oh Hell No"]};*/
	var storyBoard = [{node:0,question:"You are walking through the woods. The full moon hangs heavy in the sky.<br><br>You see a house with a light in the window. You've never seen a house in this part of the woods.<br><br>What do you do?",choices:["Get closer","Wait","Oh Hell No"]},{node:1,question:"It sure is getting chilly, you need to do something",choices:["Get closer","Wait","Oh Hell No"]},{node:2,question:"Well alright then. You turn to go when see something moving in the trees...",choices:["Go toward the house","I'm not scared!... But I'm not going near that house"]},{node:3,question:"You hear a howl! There's a wolf coming out of the trees. Quick you better seek shelter!",choices:["Better go to that house, huh?"]},{node:4,question:"You are approaching the house. A single candle is flickering in the window. Is that... music?",choices:["Let's do this. (Go in)","That's gonna be a no from me dawg."]},{node:5,question:"You are at the door",choices:[]}]
	function choices(x){
		var y=""
		for (counter=0; counter<x.choices.length; counter++){
			let c=x.choices[counter];
			if (c!=null){
				y+= '<li onclick="forward(' + x.node + "," + counter + ')">' + c + '</li>';
			}
		}
		return y;
	}
	function printSitch(q){
		document.getElementById("question").innerHTML = q.question;
		document.getElementById("choices").innerHTML = choices(q);
	};
	function forward(q,a){
		switch(q){
			case 0:
				switch(a){
					case 0:
						//question 5
						printSitch(storyBoard[4]);
						break;
					case 1:
						//question 2
						printSitch(storyBoard[1]);
						break;
					case 2:
						//question 3
						printSitch(storyBoard[2]);
						break;
					default:
						document.getElementById("question").innerHTML = "something broke";
				}
				break;
			case 1:
				switch(a){
					case 0:
						//question 5
						printSitch(storyBoard[4]);
						break;
					case 1:
						//question 2
						printSitch(storyBoard[1]);
						break;
					case 2:
						//question 3
						printSitch(storyBoard[2]);
						break;
					default:
						document.getElementById("question").innerHTML = "something broke";
				}
				break;
			case 2:
				switch(a){
					case 0:
						//question 5
						printSitch(storyBoard[4]);
						break;
					case 1:
						//question 4
						printSitch(storyBoard[3]);
						break;
					default:
						document.getElementById("question").innerHTML = "something broke";
				}
				break;
			case 3:
				switch(a){
					case 0:
						//question 6
						printSitch(storyBoard[5]);
						break;
					default:
						document.getElementById("question").innerHTML = "something broke";
				}
				break;
			case 4:
				switch(a){
					case 0:
						//question 6
						printSitch(storyBoard[5]);
						break;
					case 1:
						//question 4
						printSitch(storyBoard[3]);
						break;
					default:
						document.getElementById("question").innerHTML = "something broke";
				}
				break;
			default:
				document.getElementById("question").innerHTML = "something broke";
		}
		
	};
	printSitch(storyBoard[0]);
	
	
	
	console.log(storyBoard[0])
}
