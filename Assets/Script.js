var currentTime = document.querySelector("#currentTime");
var timer = document.querySelector("#startTime");
var questionsDiv = document.querySelector("#questionsDiv");
var wrapper = document.querySelector("#wrapper");
var score = 0;
var questionIndex = 0;
var secondsLeft = 60;
var holdInterval = 0;
var penalty = 10;
var ulCreate = document.createElement("ul");
var questions = [
    {
        title: "NORMALY used data types DO NOT include?",
        choices: ["Strings","Booleans","Clickeroos","Numbers"],
        answer: "CLickeroos"
    },
    {
        title: "In a function, your If and Else statements MUST be contained ____?",
        choices: ["Quotes", "Curly Brackets", "Parentheses", "Square Brackets"],
        answer: "Curly Brackets"
    },
    {
        title: "JavaScript Arrays can be used to hold... ____?",
        choices: ["Numbers and Strings", "Other Arrays", "Booleans", "All of the above"],
        answer: "All of the above"
    },
    {
        title: "String values must be enclosed within ____ when being assigned to variables?",
        choices: ["Semicolins", "Curly Brackets", "Quotes", "Parenthesis"],
        answer: "Quotes"
    },
    {
        title: "What can be used to Print out live information into your Console via Devtools Inspector?",
        choices: ["Javascript", "terminal / bash", "for loops", "console log"],
        answer: "console log"
    },

];

timer.addEventListener("click", function () {
    if (holdInterval === 0) {
        holdInterval = setInterval(function () {
            secondsLeft--;
            currentTime.textContent = "Time: " + secondsLeft;

            if (secondsLeft <= 0) {
                clearInterval(holdInterval);
                allDone();
                currentTime.textContent = "Time's up!";
            }
        }, 1000);
    }
    render(questionIndex);
});