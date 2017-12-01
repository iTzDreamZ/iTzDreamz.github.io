var list =["We shall see!",
			"Yes!",
			"No!",
			"Maybe.",
			"Certainly.",
			"Ask again later!",
			"Doubtful",
			"Try again later.",
			"As I see it, yes.",
			"Signs point to yes!"];
function randomNumber(){
	return Math.floor(Math.random() * 10);
}

function testJs(){
	alert("test!");
}

function shakeMagic8ball(){
	document.getElementById("magic8ball").src="giphy.gif";
	//alert("We shall see!");

	document.getElementById("results").innerHTML=list[randomNumber()];

	//alert(randomNumber());
}

/*

Below is the code for Tic Tac Toe

*/

//holds X or O
var character= "O";

//handles X and O turns

function turn(location){

	if(character == "X"){
		character = "O";
	}
	else{
		character = "X";
	}

	document.getElementById(location).innerHTML = character;
}

//clears X's and O's
function clearALL(){
	document.getElementById ("r1c1").innerHTML = ""
	document.getElementById ("r1c2").innerHTML = ""
	document.getElementById ("r1c3").innerHTML = ""
	document.getElementById ("r2c1").innerHTML = ""
	document.getElementById ("r2c2").innerHTML = ""
	document.getElementById ("r2c3").innerHTML = ""
	document.getElementById ("r3c1").innerHTML = ""
	document.getElementById ("r3c2").innerHTML = ""
	document.getElementById ("r3c3").innerHTML = ""
}
