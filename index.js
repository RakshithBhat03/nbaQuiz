var readlineSync=require("readline-sync");
var log=console.log;
var chalk=require("chalk");
var userName=readlineSync.question(chalk.green("Enter your name:"));
var score=0;
log(chalk.blueBright("Hello "+userName+". Let's see if you are a NBA fan 🏀"));
var questionList={
  questionOne:{
    question:"1.Who is considered to G.O.A.T of Basketball?",
    options:["Kobe Bryant","Lebron James","Michael Jordan","Magic Johnson"],
  answer:"2"
},
questionTwo:{
    question:"2.Who has the most number of NBA Championships?",
    options:["Bill Russell","Wilt Chamberlain","Michael Jordan","Jerry West"],
  answer:"0"
},
questionThree:{
    question:"3.Who is the all-time leader in 3-pointers made?",
    options:["Steph Curry","Kevin Durant","Lebron James","Ray Allen"],
  answer:"3"
},
questionFour:{
    question:"4.How long is a NBA game?",
    options:["30 mins","40 mins","48 mins","60 mins"],
  answer:"2"
},
questionFive:{
    question:"5.Who is the youngest league MVP?",
    options:["Luka Doncic","Russell Westbrook","James Harden","Derrick Rose"],
  answer:"3"
},
questionSix:{
    question:"6.Who has the most triple-doubles in NBA history?",
    options:["Kobe Bryant","Lebron James","Russell Westbrook","Michael Jordan"],
  answer:"2"
},
questionSeven:{
    question:"7.Who is the all-time leader in total assists?",
    options:["Jason Kidd","John Stockton","Steve Nash","Chris Paul"],
  answer:"1"
},
questionEight:{
    question:"8.Who scored the most points in a single game?",
    options:["Lebron James","Wilt Chamberlain","Kobe Bryant","Michael Jordan"],
  answer:"1"
},
questionNine:{
    question:"9.Who played the most number of seasons in their career?",
    options:["Kevin Garnett","Robert Parish","Dirk Nowitzki","Vince Carter"],
  answer:"3"
},
questionTen:{
    question:"10.Who holds the record for most number of rebounds in a single game?",
    options:["Wilt Chamberlain","Oscar Robertson","Bill Russell","Andre Drummond"],
  answer:"0"
}
};
function displayQuestions(item){
  var userInput = readlineSync.keyInSelect(questionList[item].options,chalk.green(questionList[item].question),{cancel:"None of the above"});
  log(chalk.red("-------------------------------------------------------------------"));
  if (userInput==questionList[item].answer){
    score=score+1;
  }
};
var objList=Object.keys(questionList);
var obj=objList.map(item=>{displayQuestions(item)}).filter(notUndefined => notUndefined !== undefined);
if(score>=7){

log("Your Score: "+score+"!! Wow you're the real OG! "+userName);
}
else if(score>=4){
  log("Your Score: "+score+" Good Job!!👍 Better luck next time!"+userName);
}
else{
  log("Your Score: "+score+".😔 Better luck next time!👍 "+userName);
}
