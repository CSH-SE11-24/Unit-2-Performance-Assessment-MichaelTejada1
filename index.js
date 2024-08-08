const { Console } = require('console')

const prompt = require('prompt-sync')()

console.log ("welcome to my game Question nd asnwer!!!" )
let Name = prompt("enter your Name")
let Age= parseInt(prompt("enter your age "))
let questions = [
"How old our you?","what sports do you like?","what school do u go to?","do you like attendanting school?","do u have a sort of income?"
]
  let answers =[ ]


for(let i = 0; i < questions.length; i++ ){
console.log(questions[i])
let userAnswer = prompt("enter your answers")
  answers.push(userAnswer)
}
//ctreated a object about user 

let userprofile ={
userName:Name, 
userAge:Age
}
while(Age>=18){
let job= prompt("do you have a job?")
if(job==="yes"){
  let ww = prompt("where do you work?")
}else{
    let Sc = prompt("Are you still in school?")
}
//ctreated A while lop about age
}
function printAnswers(answers){
for(let i = 0; i < answers.length; i++ ){
console.log(answers[i])
}
}
  function printQuestions (questions){
  for(let i = 0; i < questions.length; i++ ){
  console.log(questions[i])
  }
  } 
//ctreated a functins called printAnswers and PrintQuestions to print the asnwers and questions 

printAnswers(answers)