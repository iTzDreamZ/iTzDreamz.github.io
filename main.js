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

function testJs(){
	alert("test!");
}

function shake8ball(){
	document.getElementById("magic8ball").src="giphy.gif";
	alert("We shall see!");

	document.getElementById("results").innerhtml="We shall see!";

	alert(list[2]);
}