const Score=function() {
  this.score=0;
  this.time=40;
}

let score=new Score();

const setOneMinTimer=function() {
  if(score.time==0){
    clearInterval(displayTimer);
    document.getElementById("score").innerHTML="Your Score is  "+score.score;
    document.getElementById("crimeScene").onclick=null;
    decideAndDisplayResult();
  }
  document.getElementById("timer").innerHTML=score.time;
  score.time--;
}

let displayTimer= setInterval(setOneMinTimer,1000);
let criminalCase=new CriminalGame();


const play=function(){
  let audio = document.getElementById("audio");
  audio.play();
}

const rightChoice=function(){
  let audio = document.getElementById("rightChoice");
  audio.play();
}

const displayGameOver=function() {
  let gameName=document.getElementById("gameName");
  gameName.innerHTML="GAME OVER";
}

const displayNextLevelLink=function() {
  let nextLevel=document.getElementById("nextLevel");
  nextLevel.innerHTML="CLICK HERE TO CONTINUE TO NEXT STAGE";
}

const decideAndDisplayResult=function() {
  if (score.score>100) {
    displayNextLevelLink();
  }
  else {
    displayGameOver();
  }
}

const updateEvidencesToBeFound=function(id) {
  let evidence=document.getElementById(criminalCase.objectsWithId[id]);
  if(criminalCase.isNullChoice(id)){
    id=getID(id);
    document.getElementById(id).innerHTML="";
  } else{
    evidence.innerHTML=criminalCase.objects[id]+"";
  }
}

const executeGame=function() {
  let id= event.target.id;
  if (criminalCase.isRightChoice(id)){
    updateEvidencesToBeFound(+id);
    score.score+=20;
    document.getElementById("score").innerHTML=score.score;
    rightChoice();
  }
}
