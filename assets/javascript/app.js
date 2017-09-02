$(document).ready(function() {
	var correctAnswers = []; //if user guess is correct, add tally here
	var incorrectAnswers = []; //if user guess is incorrect, add tally here
	var unanswered; //if question is never called, add tally here
	var triviaQuestions = [question1, question2, question3, question4, question5];

	var countdown = 15;
	var countdownRunning = false;

	var interval; //setInterval running countdown

	//Display start button w/ startup Jumbotron text
	function startScreen(){
		$("#trivia").append("<p>" + "How many can you answer before time runs out?!" + "</p>")

		$("#start-button").append("<button>").addClass("btn btn-default").attr("id", "start-button").text("Start!")
	}
	startScreen();

	//Display current question & answer choices
	function questionScreen(){
		$("#question").append("triviaQuestions[i]")
		startCountdown();
	}

//start button
$("#start-button").on("click", function(){
	questionScreen();

});

//next question button
	$("#next-button").on("click", function(){
		questionScreen();
	});


//Display trivia & correct / incorrect / 	
function submitAnswer(){	
}




//FUNCTION -- 15 sec countdown clock runs for each question
function startCountdown(){
		interval = setInterval(decrement, 1000);

		//display in div
		$("#timer").html("<h2>" + countdown + "</h2>");	

		countdownRunning = true;
}

//decrement time by 1
	function decrement(){
		countdown--;

		//display in div
		$("#timer").html("<h2>" + countdown + "</h2>");	

		if (countdown === 0){
			stopCountdown();
		}

		console.log(countdown);
	}

//FUNCTION -- stop countdown clock
function stopCountdown(){
	clearInterval(interval);
	countdownRunning = false;

}

//FUNCTION -- pause (5 sec)

//create form
//$("#question").html("<P>" + question + "</p>") //add class
//$("#answer").html("<p>" + answers + "</p>") //add class

		
	//record answer choice (if correct/incorrect), populate new question & answer	
	// function storeUserAnswers(){

	// }	

function score(){
	//display:	
		//questions correct
		console.log(correctAnswers);
		//questions incorrect
		console.log(incorrectAnswers);
		//questions unanswered
		console.log(unanswered);
}

//Questions & Answer Choices + Trivia Facts	
var question1 = {
	question: "Which film featured the final film role of horror icon Vincent Price?",
	choiceA: "The Abominable Mr. Phibes",
	choiceB: "Edward",  //[answer]
	choiceC: "Theater of Blood",
	choiceD: "The Whales of August",
	interestingFact: "Vincent Price's last role was in Tim Burton's Edward Scissorhands (1990), as the Inventor, the creator of Edward."
}

var question2 = {
	question: "What musical biopic film about singer Bobby Darin was directed, written, produced and starred Kevin Spacey?",
	choiceA: "Beyond the Sea (2004)", //[answer]
	choiceB: "De-Lovely (2004)",
	choiceC: "Sweet Dreams (1985)",
	choiceD: "Walk the Line (2005)",
	interestingFact: 'Spacey portrayed the life of "Mack the Knife" and "Splish Splash" pop singer Bobby Darin, and his relationship with his wife Sandra Dee (Kate Bosworth) in the mid-20th century.'
}

var question3 = {
	question: "What early talkie gangster film was notable as having the first voice-over narration in an American film?",
	choiceA: "City Streets (1931)", //[answer]
	choiceB: "Little Caesar (1930)",
	choiceC: "Public Enemy (1931)",
	choiceD: "Smart Money (1931)",
	interestingFact: "Director Rouben Mamoulian's film was the first American film to have a voice-over, during a close-up of the tear-stained face of Nan Cooley (Sylvia Sidney), the stepdaughter of mobster Pop Cooley (Guy Kibbee), as she recalled the past during a flashback."
}

var question4 = {
	question: "For which of the following films was George Clooney director, star, and screenwriter?",
	choiceA: "Confessions of a Dangerous Mind (2002)",
	choiceB: "The Good German (2006)",
	choiceA: "Good Night, and Good Luck (2005)", //[answer]
	choiceA: "Solaris (2002)",
	interestingFact: "Clooney played the part of CBS-TV producer Fred Friendly in the Oscar-nominated film set during the McCarthy Era of the 1950s."
}

var question5 = {
	question: "Who played the uncredited role of the narrator in Alive (1993), the true-life adventure of Uruguayan rugby team survivors in an Andes plane crash who had to resort to cannibalism?",
	choiceA: "Peter Coyote",
	choiceB: "Ethan Hawke",
	choiceC: "John Malkovich", //[answer]
	choiceD: "Kevin Spacey",
	interestingFact: "In the interview-style prologue, John Malkovich played the narrator role of survivor Old Carlitos who recalled the horrifying incident, experienced in the film by his younger self Carlitos (Bruce Ramsay)."
}



});