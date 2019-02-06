var questionForm = document.getElementById("add-question");
questionForm.onsubmit = processForm;


function processForm(){

    var newQuestion = {
        question: questionForm.question.value,
        choiceA: questionForm.choiceA.value,
        choiceB: questionForm.choiceB.value,
        choiceC: questionForm.choiceC.value,
        choiceD: questionForm.choiceD.value,
        correct: questionForm.correct.value
      };

      //Obj to LocalStorage
      if(localStorage.getItem("Questions")){
          var arrQuestions = JSON.parse(localStorage.getItem("Questions"))
          arrQuestions.push(newQuestion)
          localStorage.setItem("Questions", JSON.stringify(arrQuestions));
       }
      else{
        var arrQuestions = [newQuestion];
        localStorage.setItem("questions", JSON.stringify(arrQuestions));
      }
     
    questionForm.reset();
    return false;
 }