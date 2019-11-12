var questions = [
    {
    name: "Arrays in Javascript are used to reference other arrays, booleans, _____________.",
    choices: ["Numbers & Strings", "Eternal Gateways", "Fortunate Billionaires", "Etherial Beings"],
    answer: "Numbers & Strings",
    },
    {
    name: "What does HTML mean?",
    choices: ["Heads Toes Mandables Legs", "Hamburger Tomatoe Meat Lettuce", "Houses Trucks Minivan Lorries", "Hyper Text Markeup Language"],
    answer: "",    
    },
    {
    name: "How do you call a function?",
    choices: ["using the number they gave you at the bar", "by the function name and ()", "adding there name to the phone tree", "Samual"],
    answer: "by the function name and ()",
    },
    {
    name: "Bootstrap uses an internet ____________ to make coding faster.",
    choices: ["pet named Rover", "nucleaur launch code", "library", "phone book"],
    answer: "library",
    }
]

var startQuiz = document.getElementById("startQuiz");
var begin = document.getElementById("begin");

var questionCard = document.getElementById("questionCard");
var titles = document.getElementById("titles");
var choiceA = document.getElementById("buttonA");
var choiceB = document.getElementById("buttonB");
var choiceC = document.getElementById("buttonC");
var choiceD = document.getElementById("buttonD");
var buttonEl = document.querySelector("#choice");

questionCard.style.visibility = "hidden";

var timer = 75;

startQuiz.addEventListener("click", function (){
    begin.style.display = "none";
    timeLeft();
    promptQuestions();
});

function promptQuestions() {
    questionCard.style.visibility = "visible";
    titles.textContent = questions[i].name;
    choiceA.textContent = questions[i].choices[0];
    choiceB.textContent = questions[i].choices[1];
    choiceC.textContent = questions[i].choices[2];
    choiceD.textContent = questions[i].choices[3];
}

var timeDisplay = document.getElementById("timer");

function timeLeft() {
      var timerInterval = setInterval(function () {
          timer--;
          timeDisplay.textContent = ("Time: " + timer);
      }, 1000)
      if (timer <= 0) {
          clearInterval(timerInterval);
      }
}

i = 0

function nextQuestion() {
    if ( i < questions.length) {
        i++;
        promptQuestions()
    }
}

questionCard.addEventListener("click", function(event){
    var element = event.target;
  
    if (element.matches("button") === true) {
        var answer = element.textContent;
        // console.log(answer);
        // console.log("answer" + questions[i].answer);
        if (answer == questions[i].answer) {
            alert("Correct. Your a Coding Wizard");
            timer = + 10;
            nextQuestion ();
        }
        else {
            alert("NOPE")
            timer = - 10;
            nextQuestion ();
        } 
    }
    
})



