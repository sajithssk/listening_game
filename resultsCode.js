//This is the code for the Results page

//function verifies the player's answers, calculates score and gives option to add to leaderboard
function run() {
	
	//define correct answer variables
	var correctAnswerOne, correctAnswerTwo, correctAnswerThree, correctAnswerFour, correctAnswerFive;

	//define variable to keep player's score
	var playerScore = 0;
	
	//get ageGroup from localStorage
	var ageGroup = localStorage.getItem("ageGroup");
	
	//get answers from localStorage and store in variables
	var answerOne = localStorage.getItem("answerOne");
	var answerTwo = localStorage.getItem("answerTwo");
	var answerThree = localStorage.getItem("answerThree");
	var answerFour = localStorage.getItem("answerFour");
	var answerFive = localStorage.getItem("answerFive");
	
	//populate the table with player's answers
	document.getElementById("aOne").innerHTML = localStorage.getItem("answerOne");
	document.getElementById("aTwo").innerHTML = localStorage.getItem("answerTwo");
	document.getElementById("aThree").innerHTML = localStorage.getItem("answerThree");
	document.getElementById("aFour").innerHTML = localStorage.getItem("answerFour");
	document.getElementById("aFive").innerHTML = localStorage.getItem("answerFive");
	
	//depending on which ageGroup was selected, the correct answers are different
	if (ageGroup == "6-9") {
		//assign answers to variables
		correctAnswerOne = "stop";
		correctAnswerTwo = "fruit";
		correctAnswerThree = "cycle";
		correctAnswerFour = "hello";
		correctAnswerFive = "goat";
	
		//insert the correct answers in to the Questions column
		document.getElementById("qOne").innerHTML = correctAnswerOne;
		document.getElementById("qTwo").innerHTML = correctAnswerTwo;
		document.getElementById("qThree").innerHTML = correctAnswerThree;
		document.getElementById("qFour").innerHTML = correctAnswerFour;
		document.getElementById("qFive").innerHTML = correctAnswerFive;
	}
	else if (ageGroup == "10-13") {
		//assign answers to variables
		correctAnswerOne = "government";
		correctAnswerTwo = "angry";
		correctAnswerThree = "elephant";
		correctAnswerFour = "recycle";
		correctAnswerFive = "question";
		
		//insert the correct answers in to the Questions column
		document.getElementById("qOne").innerHTML = correctAnswerOne;
		document.getElementById("qTwo").innerHTML = correctAnswerTwo;
		document.getElementById("qThree").innerHTML = correctAnswerThree;
		document.getElementById("qFour").innerHTML = correctAnswerFour;
		document.getElementById("qFive").innerHTML = correctAnswerFive;
	}
	else if (ageGroup == "14-17") {
		//assign answers to variables
		correctAnswerOne = "elimination";
		correctAnswerTwo = "technique";
		correctAnswerThree = "balloon";
		correctAnswerFour = "umbrella";
		correctAnswerFive = "destiny";
		
		//insert the correct answers in to the Questions column
		document.getElementById("qOne").innerHTML = correctAnswerOne;
		document.getElementById("qTwo").innerHTML = correctAnswerTwo;
		document.getElementById("qThree").innerHTML = correctAnswerThree;
		document.getElementById("qFour").innerHTML = correctAnswerFour;
		document.getElementById("qFive").innerHTML = correctAnswerFive;
	}
		
	
}