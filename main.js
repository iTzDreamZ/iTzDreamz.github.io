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

//if no X or O, then draw
if(document.getElementById(location).innerHTML == ""){
//switch between X and O
	if(character == "X"){
		character = "O";
	}
	else{
		character = "X";
	}

	document.getElementById(location).innerHTML = character;
	}

	checkWinner();
}

//clears X's and O's
function clearALL(){
	document.getElementById ("r1c1").innerHTML = "";
	document.getElementById ("r1c2").innerHTML = "";
	document.getElementById ("r1c3").innerHTML = "";
	document.getElementById ("r2c1").innerHTML = "";
	document.getElementById ("r2c2").innerHTML = "";
	document.getElementById ("r2c3").innerHTML = "";
	document.getElementById ("r3c1").innerHTML = "";
	document.getElementById ("r3c2").innerHTML = "";
	document.getElementById ("r3c3").innerHTML = "";
}


function checkWinner(){
	var r1c1 = document.getElementById ("r1c1").innerHTML; 
	var r1c2 = document.getElementById ("r1c2").innerHTML; 
	var r1c3 = document.getElementById ("r1c3").innerHTML; 
	var r2c1 = document.getElementById ("r2c1").innerHTML; 
	var r2c2 = document.getElementById ("r2c2").innerHTML;
	var r2c3 = document.getElementById ("r2c3").innerHTML; 
	var r3c1 = document.getElementById ("r3c1").innerHTML; 
	var r3c2 = document.getElementById ("r3c2").innerHTML; 
	var r3c3 = document.getElementById ("r3c3").innerHTML; 

	if(r1c1 == r1c2 && r1c1 == r1c3 && r1c1 !=""||
		r2c1 == r2c2 && r2c1 ==r2c3 && r2c1 !=""||
		r3c1 == r3c2 && r3c1 ==r3c3 && r3c1 !=""||){

		alert("Winner!");
	}

}







