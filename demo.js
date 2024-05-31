const questions=[
    {
        question:"what is the leargest animal in earth?",
        answers:[
            {text:"Shark", correct:false},
            {text:"Elephant", correct:false},
            {text:"Blue whale",correct:true},
            {text:"Ant",correct:false}
        ]
    },

    {
        question:"The leargest country in the world?",
        answers:[
            {text:"Russia", correct:true},
            {text:"USA", correct:false},
            {text:"India",correct:false},
            {text:"China",correct:false}
        ]
    },
    {
        question:"Which country has the leargest economy?",
        answers:[
            {text:"japan", correct:false},
            {text:"USA", correct:true},
            {text:"India",correct:false},
            {text:"China",correct:false}
        ]  
    },
  {
    question:"The Tallest Building?",
    answers:[
        {text:"Burj Khalifa", correct:true},
        {text:"Merdeka Tower", correct:false},
        {text:"Shanghai Tower",correct:false},
        {text:"Makkah Clock Royal Tower",correct:false}
    ] 
  },
  {
    question:"The Fastest Bird?",
    answers:[
        {text:"Gray headed Albatross", correct:false},
        {text:"Gyrfalcon", correct:false},
        {text:" Peregrine Falcon",correct:true},
        {text:"Frigatebird",correct:false}
    ] 
  }
        
];
const questionsElement=document.getElementById("question");
const answerElement=document.getElementById("answer");
const nextButton=document.getElementById("submit");
let txt=document.getElementById("show");
const quiz=document.getElementById("quiz");
const exitGame=document.getElementById("submit0");

let questionIndex=0;
let score=0;
let wrongAnswer=0;

function startQuiz(){
quiz.style.display="block";
container1.style.display="none";
questionIndex=0;
score=0;
wrongAnswer=0;
nextButton.innerHTML="Next";
displayQuestion();

}

function displayQuestion(){
    resetPreviousAnswer();
    exitGame.addEventListener("click",()=>{
        quiz.style.display="none";
        container1.style.display="block";
    });
    let currentQuestion=questions[questionIndex];
    let questionNumber=questionIndex+1;
    questionsElement.innerHTML=`${questionNumber}.${currentQuestion.question}`;
    console.log(currentQuestion.question);

    currentQuestion.answers.forEach(answer=>{

        let button=document.createElement("button");
       button.innerHTML=answer.text;
       button.classList.add("btn");
       answerElement.appendChild(button);

       if(answer.correct){
        button.dataset.correct=answer.correct;

       }

       button.addEventListener("click",result);

    });


}
function resetPreviousAnswer(){
    nextButton.style.display="none";
    while(answerElement.firstChild){
        answerElement.removeChild(answerElement.firstChild);
    }

}
function result(e){
  const selectbtn=e.target;
  const iscorrect=selectbtn.dataset.correct==="true";
  if(iscorrect){
    selectbtn.classList.add("correct");
    txt.innerHTML="Correct Answer";
    score++;
  }
  else{ selectbtn.classList.add("incorrect");
  txt.innerHTML="Wrong Answer";
  wrongAnswer++;
  }

  Array.from(answerElement.children).forEach(button=>{
    if(button.dataset.correct==="true")
        {
            button.classList.add("correct")

        }
    button.disabled= true;

  });
  nextButton.style.display="block";
 
}
function showresult(){
    resetPreviousAnswer();
    questionsElement.innerHTML=`You gave ${score} correct answers,and ${wrongAnswer} Wrong Answers out of ${questions.length} questions `;
    nextButton.innerHTML="play again";
    nextButton.style.display="block";
    nextButton.style.width="200px";
}

function handleOtherQuastions(){
    questionIndex++;
    if(questionIndex<questions.length){
        displayQuestion();  
    }
    else{showresult();}

}
nextButton.addEventListener("click",()=>{
    txt.innerHTML="";
    if(questionIndex<questions.length)
        {
            handleOtherQuastions();
        }
        else{
            startQuiz();
        }
})

const container1=document.getElementById("container1");
container1.onclick=function(){
    startQuiz();
}
  

