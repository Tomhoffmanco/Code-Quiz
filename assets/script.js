let questionNumber = 1;
let timer = 75;
let timerIntervalId = -1;

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
  document.getElementById("boxInfo").style.display = "block";

  timerIntervalId = setInterval(() => {
    timer--;
    document.getElementById("time").innerText = timer;

    if (timer <= 0) {
      endGame();
    }
  }, 1000);
}

function endGame() {
  document.getElementById("questions").innerText = "Finished!";
  document.getElementById("buttonStyle").style.display = "none";
  document.getElementById("").style.display = "block";
  document.getElementById("").style.display = "none";

  // Dsiplay Score

  document.getElementById("score").innerText =
    "Your final Score is" + timer + ".";
  clearInterval(timerIntervalId);
}
