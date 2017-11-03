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

//handles X and O turns

function turn(location){
	document.getElementById(location).innerHTML = "X";
}