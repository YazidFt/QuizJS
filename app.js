
// initialize variables
var questionID, question, choiceA, choiceB, choiceC, choiceD, questions, numQuestions, qInfo,
current = 0, checkedOne, score = 0;
scores = [];

var defaultQuestions = [
{
    question: "Where are the three smallest bones in the human body?",
    choiceA: "middle ear",
    choiceB: "nose",
    choiceC: "toes",
    choiceD: "eyes",
    correct: "A"
},
{
    question: "What is the most abundant element in the Universe?",
    choiceA: "Helium",
    choiceB: "Oxygen",
    choiceC: "Lithium",
    choiceD: "Hydrogen",
    correct: "D"
},
{
    question: "Approximately how long does it take for light to travel from the Sun's surface to the Earth?",
    choiceA: "8 days",
    choiceB: "8 seconds",
    choiceC: "8 minutes",
    choiceD: "8 hours",
    correct: "C"
},
{
    question: "What is 10/2?",
    choiceA: "5",
    choiceB: "2",
    choiceC: "8",
    choiceD: "9",
    correct: "A"
},
{
    question: "Which planet has the most moons?",
    choiceA: "Saturn",
    choiceB: "Mars",
    choiceC: "Jupiter",
    choiceD: "Uranus",
    correct: "C"
}];



var elQuiz = document.getElementById('quiz')
var elQuizStatus = document.getElementById('status')
var buttonSub = document.getElementById('submit')


var elQuestion = document.getElementById("question");
var elChoiceA  = document.getElementById("choiceA");
var elChoiceB  = document.getElementById("choiceB");
var elChoiceC  = document.getElementById("choiceC");
var elChoiceD  = document.getElementById("choiceD");
var elChoices  = document.getElementsByName('choices');



//get the questions from local storage & start quiz
populateQuestions();
renderQuestion();


function populateQuestions(){
        questions = defaultQuestions;

        if(localStorage.getItem('questions')){
            var stored_questions = JSON.parse(localStorage.getItem('questions'));
            for(let i = 0; i < stored_questions.length; i++){
                 questions.push(stored_questions[i]);
                }
          }
         numQuestions = questions.length;
    }



function populateQuestionInfo(){
    //populate current question info from question list
    question = questions[current].question;
    qInfo   = questions[current];
    choiceA = qInfo.choiceA;
    choiceB = qInfo.choiceB;
    choiceC = qInfo.choiceC;
    choiceD = qInfo.choiceD;
    correct = qInfo.correct;  
   }


function renderEnd(){
    elQuiz.innerHTML = "<h2>Your Score: " + score + " out of " + numQuestions + "</h2>";
 
    for(var i = 0; i < numQuestions; i++){
        var message = document.createElement('p');
        if(scores[i])
            message.innerHTML = "Qestion " + (i + 1) + " is Correct";
        else
            message.innerHTML = "Qestion " + (i + 1) + " is Wrong";
        
            elQuiz.appendChild(message);  
      }
    
     document.getElementById('options').style.display = 'block'; 
   }


function renderQuestion(){
    // display question on webpage
    questionID = current + 1;
    elQuizStatus.innerHTML = "Question " + (questionID) + " of " + (numQuestions);
    populateQuestionInfo();
    elQuestion.innerHTML = question;
    elChoiceA.innerHTML = choiceA;
    elChoiceB.innerHTML = choiceB;
    elChoiceC.innerHTML = choiceC;
    elChoiceD.innerHTML = choiceD; 
   }


buttonSub.addEventListener('click', function(){

    var choices = document.getElementsByName('choices');
    var idx;

    for(let i = 0; i < choices.length; i++){
          if(choices[i].checked){
              idx = i;
              checkedOne = choices[i].value;
              break;
            }
       }
    
    if(!checkedOne){
        renderQuestion();
        alert('you need to choose one answer!');
     }
    else{
        if(checkedOne == correct){
               score++;
               scores[current] = 1;
          }
        else{
               scores[current] = 0;
         }
        
        choices[idx].checked = false;


        if(current == questions.length-1){
            renderEnd();
        }
        else{
            current++;
            renderQuestion();
        } 
      }
});








