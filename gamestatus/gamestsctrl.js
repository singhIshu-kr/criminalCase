let gameRules=["Now as we have all the suspects","It will not be that hard for",
"you to identify the culprit.","Read about the Killer details",
"and click on the culprit's photo","to arrest him/her...","","","All the Best!"]

let index=0;

let countOfLines=gameRules.length-1;

const displayInstructions=function() {
  if (index==countOfLines) {
    clearInterval(display);
    document.getElementById("nextPage").innerHTML="Click Here To Continue"
  }
  let instructions=document.getElementById('howToPlay');
  let rules=instructions.innerHTML;
  instructions.innerHTML=rules + "<br>" + gameRules[index];
  index++;
}

let display=setInterval(displayInstructions,1000)
