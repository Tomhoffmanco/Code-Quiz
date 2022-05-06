let questionNumber = 1;
let timer = 75; //set start time of timer
let timerIntervalId = -1; // interval decreased from timer

//questions to be asked with multiple choice answers displayed
let questions = [
  {
    text: "Commonly used data types Do not Include:",
    correctChoice: 3,
    choice1Text: "Strings",
    choice2Text: "Booleans",
    choice3Text: "Alerts",
    choice4Text: "Numbers",
  },

  {
    text: "The condition in an if/else statement is enclosed with____.",
    correctChoice: 3,
    choice1Text: "Qoutes",
    choice2Text: "Curly Brackets",
    choice3Text: "Parenthesis",
    choice4Text: "Square Brackets",
  },

  {
    text: "Arrays in JavaScript can be used to store",
    correctChoice: 4,
    choice1Text: "Numbers & Strings",
    choice2Text: "Other Arrays",
    choice3Text: "Booleans",
    choice4Text: "all of the above",
  },

  {
    text: "String values must be enclosed within_____ when being assigned to variables",
    correctChoice: 3,
    choice1Text: "Commas",
    choice2Text: "Curly brackets",
    choice3Text: "Qoutes",
    choice4Text: "parenthesis",
  },

  {
    text: "A very useful tool used during development and debugging for printing content to the debugger is:",
    correctChoice: 4,
    choice1Text: "JavaScript",
    choice2Text: "Terminal/bash",
    choice3Text: "For loops",
    choice4Text: "Console.log",
  },
];

function startQuiz() {
  //timer starts and content is displayed
  document.getElementById("content").style.display = "block";

  timerIntervalId = setInterval(() => {
    timer--;
    document.getElementById("time").innerText = timer;

    if (timer <= 0) {
      endGame();
    }
  }, 1000);
}

//end game function
function endGame() {
  document.getElementById("question").innerText = "All done!";
  document.getElementById("buttonsContainer").style.display = "none";
  document.getElementById("endContainer").style.display = "block";
  document.getElementById("resultContainer").style.display = "none";
  //load the score
  document.getElementById("score").innerText =
    "Your final score is " + timer + ".";
  clearInterval(timerIntervalId);
}

function choose(choiceNumber) {
  const isOutOfTime = decideResult(choiceNumber); //true or false

  if (isOutOfTime) {
  } else {
    if (questionNumber < questions.length) {
      navigateToNextQuestion();
    } else {
      // no more questions to be answered
      //end the game

      endGame();
    }
  }
}

//Subtract from timer if wrong ..
//Change the html of the result ..
//returns whether or not the game is over due to lack of time
function decideResult(choiceNumber) {
  if (questions[questionNumber - 1].correctChoice != choiceNumber) {
    //incorrect answer
    timer -= 10;

    document.getElementById("result").innerText = "Wrong!";

    document.getElementById("time").innerText = timer;

    if (timer <= 0) {
      return true; // out of time quiz over
    }
  } else {
    //correct answer
    document.getElementById("result").innerText = "Correct!";
  }

  return false; // time still left quiz continues
}

function navigateToNextQuestion() {
  if (questionNumber) questionNumber++;

  const question = questions[questionNumber - 1];

  const questionText = question.text;

  //set question text
  document.getElementById("question").innerText = questionText;

  //set button text
  document.getElementById("choice1").innerText = question.choice1Text;
  document.getElementById("choice2").innerText = question.choice2Text;
  document.getElementById("choice3").innerText = question.choice3Text;
  document.getElementById("choice4").innerText = question.choice4Text;
}

function submitScore() {
  //save to local storage
  //redirect to scores.html
  const name = document.getElementById("input").value;

  if (name.length <= 0) {
    console.log("No name was entered.");
    return;
  }

  //name is the key,
  //and the timer score is the value of the item inserted into localStorage
  window.localStorage.setItem(name, timer);
  console.log(`User ${name} has saved a score of ${timer}`);

  window.location.href = "./scores.html";
}

//load in the values for question 1 and timer
document.getElementById("time").innerText = timer;
document.getElementById("question").innerText = questions[0].text;
document.getElementById("choice1").innerText = questions[0].choice1Text;
document.getElementById("choice2").innerText = questions[0].choice2Text;
document.getElementById("choice3").innerText = questions[0].choice3Text;
document.getElementById("choice4").innerText = questions[0].choice4Text;
